const createPhantomPool = require('phantom-pool')
const cheerio = require('cheerio');
let fs = require('fs');
let path = require('path');

const huyaComPetitionUrl = 'http://www.huya.com/m';
const douyuCompetitionUrlArr=[
    //英雄联盟官方赛事
    'https://www.douyu.com/t/2018MSI',

    // 'https://www.douyu.com/t/2018kplspring',
    // //175电竞
    // 'https://www.douyu.com/2660926',
    // //QQ游戏街机
    // 'https://www.douyu.com/156332',
    // //英雄联盟赛事活动
    // 'https://www.douyu.com/673320',
];
let resultArr = [];

let out = fs.createWriteStream(path.resolve(__dirname,'../data/competition.json'));
// Returns a generic-pool instance
const pool = createPhantomPool({
    max: 10, // default
    min: 2, // default
    // how long a resource can stay idle in pool before being removed
    idleTimeoutMillis: 30000, // default.
    // maximum number of times an individual resource can be reused before being destroyed; set to 0 to disable
    maxUses: 50, // default
    // function to validate an instance prior to use; see https://github.com/coopernurse/node-pool#createpool
    validator: () => Promise.resolve(true), // defaults to always resolving true
    // validate resource before borrowing; required for `maxUses and `validator`
    testOnBorrow: true, // default
    // For all opts, see opts at https://github.com/coopernurse/node-pool#createpool
    phantomArgs: [['--ignore-ssl-errors=true', '--disk-cache=true'], {
        // logLevel: 'debug',
    }], // arguments passed to phantomjs-node directly, default is `[]`. For all opts, see https://github.com/amir20/phantomjs-node#phantom-object-api
})

// Automatically acquires a phantom instance and releases it back to the
// pool when the function resolves or throws


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function getInstance(url){
    return new Promise((resolve,reject)=>{
        pool.use(async (instance) => {
            const page = await instance.createPage();

            const status = await page.open(url, { operation: 'GET' })
            await delay(10000);
            if (status !== 'success') {
                throw new Error(`cannot open ${url}`)
            }
            console.log('开始延迟');

            console.log('延迟结束')
            const content = await page.property('content');
            console.log('content获取到')
            return resolve(content)
        })
    })
}

async function getCompetition(){
    let content;
    let $;
    // content = await getInstance(huyaComPetitionUrl);
    // $ = cheerio.load(content);
    // $(".live-list li").each((i,ele)=>{
    //     //console.log(i);
    //     let obj={
    //         imgUrl:$(ele).find('img').attr('src'),
    //         title:$(ele).find('.title.new-clickstat').text().trim(),
    //         nick:$(ele).find('.txt').find('.nick').eq(0).text().trim(),
    //         num:$(ele).find('.js-num').text().trim(),
    //         type:$(ele).find('.game-type>a').text(),
    //         url:$(ele).find('.video-info').attr('href').trim()
    //     }
    //     resultArr.push(obj);
    // });
    for(let i=0;i<=douyuCompetitionUrlArr.length-1;i++){
        content = await getInstance(douyuCompetitionUrlArr[i]);
        $ = cheerio.load(content);
        let obj={
            imgUrl: $('.anchor-pic').find('img').attr('src'),
            title:$('.relate-text').find('h2').text().trim(),
            nick:$('h1').text().trim(),
            num:$('.hot-v-con').find('.hot-v').text()+'a',
            type:$('.head-room-tag').text().trim(),
            url:douyuCompetitionUrlArr[i]
        };
        resultArr.push(obj);
    }

    console.log(resultArr);
    pool.drain().then(() => pool.clear());
    out.write(JSON.stringify(resultArr));
    out.end();
}

getCompetition();

