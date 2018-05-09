import fs from 'fs';
import path from 'path';
const jwt = require('jsonwebtoken');

//生成token的方法
//data是保存的数据，例子：let data={uid:1}
function  generateToken(data){
    let created = Math.floor(Date.now() / 1000);
    let cert = fs.readFileSync(path.join(__dirname, '../config/rsa_private_key.pem'));//私钥
    let token = jwt.sign({
        data,
        exp: created + 3600 * 24
    }, cert, {algorithm: 'RS256'});
    return token;
}

//验证token,最后的res。
// 上面的额生成方法，我们得到res.uid=1
function verifyToken(token){
    console.log('进入验证');
    let cert = fs.readFileSync(path.join(__dirname, '../config/rsa_public_key.pem'));//公钥
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

export default {generateToken,verifyToken}