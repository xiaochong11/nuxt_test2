const phantom = require('phantom');
const cheerio = require('cheerio');
import anchorDao from '../dao/anchor/addAnchorMultiple';
let resultArr = [];
let urlArr = [

];

let urlObj0 =  {
    url:'https://www.huya.com/g/wzry',
    anchor_os:'huya',
    anchor_dir_id:1,
}

let urlObj1 = {
    url:'https://www.huya.com/g/lol',
    anchor_os:'huya',
    anchor_dir_id:2,
}

let urlObj2 ={
    url:'https://www.huya.com/g/3203',
    anchor_os:'huya',
    anchor_dir_id:2
}

let urlObj3 ={
    url:'https://www.huya.com/g/1663',
    anchor_os:'huya',
    anchor_dir_id:7
}


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
            anchor_num:$(ele).find('#activityCount').text().trim(),
            anchor_roomnum:$(ele).find('.host-rid').text().trim().replace(/[^0-9]/ig,""),
            recommend_auth_id:0,
            anchor_dir_id:obj.anchor_dir_id,
            add_date:new Date()
        }
        resultArr.push(anchor_obj);
    });
    if(resultArr.length>0){
        console.log(resultArr);
        anchorDao.addAnchorArr(resultArr,obj.anchor_dir_id);
    }else{
        console.log('resultArr为空');
    }

}


getAnchor(urlObj0);