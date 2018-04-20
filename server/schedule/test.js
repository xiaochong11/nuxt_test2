const phantom = require('phantom');
const cheerio = require('cheerio');

const huyaRankUrl = 'http://hd.huya.com/rank/';
const doyuRankUrl = 'https://www.doseeing.com/rank/gift/1440';
const pandaRankUrl = "http://panda.doseeing.com/rank/gift/1440";

async function getHuyaAllRank() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        //console.info('Requesting', requestData.url);
    });

    const status = await page.open(huyaRankUrl);
    const content = await page.property('content');
    //console.log(content);
    let $ = cheerio.load(content);
    //console.log($('h1').text());
    let resultArr = [];

    $("#all-rank .top-user").find('.name').each((i,ele)=>{
        let name = $(ele).contents().filter(function (index, content) {
            return content.nodeType === 3;
        }).text().trim();
        //console.log('text:'+name);
        resultArr.push(name);
    });

    $('#all-rank .ordinary-user').find('li').find('span,a').each((i,ele)=>{
        // let text = $(this).find('span').text();
        let name = $(ele).text().trim();
        resultArr.push(name);
    });

    console.log(resultArr);
    await instance.exit();
};


async function getDouyuAllRank() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        //console.info('Requesting', requestData.url);
    });

    const status = await page.open(doyuRankUrl);
    const content = await page.property('content');
    // /console.log(content);
    let $ = cheerio.load(content);
    let resultArr = [];

    $('.nickname').each((i,ele)=>{
        let name =$(ele).text().trim();
        resultArr.push(name);
    });

    console.log(resultArr);
    await instance.exit();
};

async function getPandaAllRank() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        //console.info('Requesting', requestData.url);
    });

    const status = await page.open(pandaRankUrl);
    const content = await page.property('content');
    // /console.log(content);
    let $ = cheerio.load(content);
    let resultArr = [];

    $('strong').find('span').each((i,ele)=>{
        let name =$(ele).text().trim();
        resultArr.push(name);
    });

    console.log(resultArr);
    await instance.exit();
};


//getHuyaAllRank();
//getDouyuAllRank();
getPandaAllRank();