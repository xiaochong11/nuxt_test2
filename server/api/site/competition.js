import { Router } from 'express';
import fs from 'fs'
import path from 'path'
const router = Router();

router.get('/getCompetition', function (req, res, next) {
    const readerStream = fs.createReadStream(path.resolve(__dirname,'../../data/competition.json'));
    // 设置编码为 utf8。
    readerStream.setEncoding('UTF8');
    let competitionList='';
    readerStream.on('data', function(chunk) {
        competitionList += chunk;
    });
    readerStream.on('end',function(){
        // console.log('data:'+competitionList);
        res.json({
            code:200,
            data:competitionList
        })
    })

    // var data=fs.readFileSync(path.resolve(__dirname,'../../data/competition.json'),"utf-8");
    // res.json({
    //     code:200,
    //     data:data
    // })

});

export default router;