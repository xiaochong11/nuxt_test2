const phantom = require('phantom');
const cheerio = require('cheerio');

const huyaComPetitionUrl = 'http://www.huya.com/m';
const douyuComPetitionUrl = 'https://www.douyu.com/search/?kw=%E8%B5%9B%E4%BA%8B&label=anchor';


async function getHuyaCompetition() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        //console.info('Requesting', requestData.url);
    });

    const status = await page.open(huyaComPetitionUrl);
    const content = await page.property('content');
    //console.log(content);
    let $ = cheerio.load(content);
    //console.log($('h1').text());
    let resultArr = [];

    $(".live-list li").each((i,ele)=>{
        let obj={
            imgUrl:$(ele).find('img').attr('src'),
            title:$(ele).find('.title.new-clickstat').text().trim(),
            nick:$(ele).find('.txt').find('.nick').eq(0).text().trim(),
            num:$(ele).find('.js-num').text().trim(),
            type:$(ele).find('.game-type>a').text()
        }
        //console.log('text:'+name);
        resultArr.push(obj);
    });
    console.log(resultArr);
    await instance.exit();
};

getHuyaCompetition();