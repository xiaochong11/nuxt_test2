// const fs = require('fs');
// const path = require('path');
import fs from 'fs';
import path from 'path';
const jwt = require('jsonwebtoken');

function verifyToken(token){
    console.log('进入验证');
    let cert = fs.readFileSync(path.join(__dirname, '../../config/rsa_public_key.pem'));//公钥
    console.log(cert);
    let res;
    try{
        let result = jwt.verify(token, cert, {algorithms: ['RS256']}) || {};
        let {exp = 0} = result,current = Math.floor(Date.now()/1000);
        if(current <= exp){
             res = result.data || {};
        }
    }catch(e){
        console.log(e);
    }
    return res;
}

async function check(req,res,next){
    let url= req.originalUrl;
    if (url.indexOf('/admin/') > -1 && url.indexOf('/admin/login') <= -1) {//需要校验登录态
        let token = req.headers.token;
        console.log(token);
        if (token) {
            let result = verifyToken(token);
            let {uid} = result;
            console.log(uid);
            if (uid) {
                await next();
            } else {
                res.json({
                    code:501,
                    data:'token invalid'
                })
            }
        } else {
            console.log('走了这里');
            res.json({
                code:501,
                data:'no token'
            })
        }
    } else {
        await next();
    }
}

export default check;
