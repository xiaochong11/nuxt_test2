const phantom = require('phantom');
const cheerio = require('cheerio');
import anchorDao from '../dao/anchor/addAnchorMultiple';
let resultArr = [];
let urlArr = [
    {
        url:'https://www.huya.com/g/wzry',
        anchor_os:'huya',
        anchor_dir_id:1,
    }
];

async function getAnchor(obj) {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
        console.info('Requesting', requestData.url);
    });

    const status = await page.open(obj.url);
    const content = await page.property('content');
    await instance.exit();
    let $ = cheerio.load(content);


    $(".live-list li").each((i,ele)=>{
        let anchor_obj={
            anchor_name:$(ele).find('.txt').find('.nick').eq(0).text().trim(),
            anchor_img:$(ele).find('.avatar>img').attr('data-original'),
            anchor_intro:$(ele).find('.title.new-clickstat').text().trim(),
            anchor_os:obj.anchor_os,
            anchor_link:$(ele).find('.video-info').attr('href').trim(),
            anchor_num:$(ele).find('.js-num').text().trim(),
            recommend_auth_id:0,
            anchor_dir_id:obj.anchor_dir_id,
            add_date:new Date()
        }
        resultArr.push(anchor_obj);
    });
    if(resultArr.length>0){
        console.log(resultArr);
        anchorDao.addAnchorArr(resultArr);
    }else{
        console.log('resultArr为空');
    }

}


urlArr.forEach((obj)=>{
    getAnchor(obj);
});