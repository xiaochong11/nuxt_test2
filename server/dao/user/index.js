import mohair from 'mohair';
import executeQuery from '../base/index';
import wxConfig from '../../config/wxConfig';
let userTable = mohair.table('general_user');
// let  request = require('request');
import request from 'request';
let userDao = {
    getAll:async function(req,res,next){
        let param = req.query || req.params;
        let userQuery =userTable.select('*');

        try{
            let result = await executeQuery(userQuery.sql(),userQuery.params())
            res.json({
                code:200,
                data:result
            })
        }catch(err){
            res.json({
                code:500,
                data:err
            })
        }

    },
    wxStart:async function(req,res,next){
        let param = req.query;
        console.log(param.code);
        let urlStr = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + wxConfig.appId + '&secret=' + wxConfig.appSecret + '&js_code=' + param.code + '&grant_type=authorization_code';
        // let openid = '';
        request(urlStr, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                let data = JSON.parse(body);
                console.log(data);
                let openid = data.openid;
                if(openid){
                    console.log(openid);
                    let userQuery = userTable.select().where({'openid':openid+''});
                    console.log(userQuery.sql(),userQuery.params());
                    //这里也可以用await
                    executeQuery(userQuery.sql(),userQuery.params()).then((result)=>{
                        // console.log(result);
                        if(result.length===1){
                            res.json({
                                code:200,
                                data:result[0]
                            })
                        }else{
                            // console.log('else');
                            let userQuery1 = userTable.insert({openid:openid});
                            console.log(userQuery1.sql(),userQuery1.params());
                            executeQuery(userQuery1.sql(),userQuery1.params()).then((result)=>{
                                res.json({
                                    code:200,
                                    data:{
                                        user_id:result.insertId,
                                        openid:openid
                                    }
                                })
                            })
                        }

                    });
                }else{
                    res.json({
                        code:501,
                        data:'没有获取到openid'
                    })
                }

            }else{
                res.json({
                    code:501,
                    data:err
                })
            }
        });
    },
    wxUpdateUser:async function(req,res,next){
        let param = req.body;
        console.log(param);
        let userQuery = userTable.where({user_id:param.user_id}).update(param);
        try{
            let result = await executeQuery(userQuery.sql(),userQuery.params());
            console.log(result);
            res.json({
                code:200,
                data:'OK'
            })
        }catch(err){
            res.json({
                code:500,
                data:err
            })
        }
    }
};

export default userDao;