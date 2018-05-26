const createPhantomPool = require('phantom-pool')
const cheerio = require('cheerio');
let fs = require('fs');
let path = require('path');

var _ph, _page, _outObj;


const huyaComPetitionUrl = 'http://www.huya.com/m';
const douyuCompetitionUrlArr=[
    //英雄联盟官方赛事
    'https://www.douyu.com/t/2018MSI',

    'https://www.douyu.com/t/2018kplspring',
    //175电竞
    'https://www.douyu.com/2660926',
    //QQ游戏街机
    'https://www.douyu.com/156332',
    //英雄联盟赛事活动
    'https://www.douyu.com/673320',
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

function waitUntil(asyncTest) {
    return new Promise(function(resolve, reject) {
        function wait() {
            console.log('loop...');
            asyncTest().then(function(value) {
                console.log('value', value)
                if (value) {
                    resolve();
                } else {
                    setTimeout(wait, 1000);
                }
            }).catch(function(e) {
                console.log('Error found. Rejecting.', e);
                reject();
            });
        }
        wait();
    });
}
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// var delay = function(r,s){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(r);
//         },s);
//     });
// };

async function getInstance(url){
    return new Promise((resolve,reject)=>{
        pool.use(async (instance) => {
            const page = await instance.createPage(['--load-images=true', '--local-to-remote-url-access=true']);
            // page.setting("resourceTimeout", 7000);
            const status = await page.open(url, { operation: 'GET' })
            //
            // // const content = await page.property('content');
            // console.log('等待开始')
            // await delay(5000);
            // let content = await page.evaluate(function() {
            //     return document.documentElement.outerHTML
            // })
            // console.log('等待结束');


            await  page.open(url, { operation: 'GET' }).then(()=>{
                return waitUntil(function() {
                    return page.evaluate(function() {
                        // console.log('src:'+document.querySelectorAll('.live-list li img.pic')[3].getAttribute('src'));
                        // return (document.querySelectorAll('.live-list li img.pic')[3].getAttribute('src').indexOf('/338x190.'));
                        // return document.querySelectorAll('.hot-v')[0].innerText!=='';
                        return true;
                    })
                })
            }).then(content=>{
                resolve(page.property('content'))
            })

        })
    })
}

async function getCompetition(){
    let content;
    let $;
    content = await getInstance(huyaComPetitionUrl);
    console.log('执行到这里')
    //console.log(content)
    $ = cheerio.load(content);
    $(".live-list li").each((i,ele)=>{
        //console.log(i);
        let obj={
            imgUrl:$(ele).find('img').attr('data-original').indexOf('http')>-1?$(ele).find('img').attr('data-original'):'http:'+$(ele).find('img').attr('data-original'),
            title:$(ele).find('.title.new-clickstat').text().trim(),
            nick:$(ele).find('.txt').find('.nick').eq(0).text().trim(),
            num:$(ele).find('.js-num').text().trim(),
            type:$(ele).find('.game-type>a').text(),
            url:$(ele).find('.video-info').attr('href').trim(),
            os:'huya'
        }
        resultArr.push(obj);
    });
    for(let i=0;i<=douyuCompetitionUrlArr.length-1;i++){
        content = await getInstance(douyuCompetitionUrlArr[i]);
        $ = cheerio.load(content);
        let obj={
            imgUrl: $('.anchor-pic').find('img').attr('src'),
            title:$('.relate-text').find('h2').text().trim(),
            nick:$('h1').text().trim(),
            num:$('.hot-v-con').find('.hot-v').text()||'未知人数',
            type:$('.head-room-tag').eq(1).text().trim(),
            url:douyuCompetitionUrlArr[i],
            os:'douyu'
        };
        resultArr.push(obj);
    }

    //console.log(resultArr);
    pool.drain().then(() => pool.clear());
    out.write(JSON.stringify(resultArr));
    out.end();
}

getCompetition();

