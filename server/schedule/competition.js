const phantom = require('phantom');
const cheerio = require('cheerio');
let fs = require('fs');
let path = require('path');

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
//https://www.zhanqi.tv/search?q=%E8%B5%9B%E4%BA%8B
let out = fs.createWriteStream(path.resolve(__dirname,'../data/competition.json'));

async function getHuyaCompetition() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        //console.info('Requesting', requestData.url);
    });

    const status = await page.open(huyaComPetitionUrl);
    const content = await page.property('content');

    let $ = cheerio.load(content);

    $(".live-list li").each((i,ele)=>{
        let obj={
            imgUrl:$(ele).find('img').attr('src'),
            title:$(ele).find('.title.new-clickstat').text().trim(),
            nick:$(ele).find('.txt').find('.nick').eq(0).text().trim(),
            num:$(ele).find('.js-num').text().trim(),
            type:$(ele).find('.game-type>a').text()
        }
        resultArr.push(obj);
    });
};
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
//斗鱼需要自己去找
async function getDouyuCompetitionSingle(url) {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        //console.info('Requesting', requestData.url);
    });

    const status = await page.open(url);
    const content = await page.property('content');
    console.log(content);
    let $ = cheerio.load(content);


    let obj={
        imgUrl: $('.anchor-pic').find('img').attr('src'),
        title:$('.relate-text').find('h2').text().trim(),
        // nick:$(body).find('.webm-nickname').find('h1').text().trim(),
        num:$('.hot-v-con').find('.hot-v').text().trim(),
        // type:$(body).find('.head-room-tag').text().trim()
    };
    resultArr.push(obj);
    console.log(resultArr);
    await instance.exit();

}


// out.write(JSON.stringify(resultArr));
// out.end();

//getHuyaCompetition();
getDouyuCompetitionSingle(douyuCompetitionUrlArr[0])