const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

import mohair from 'mohair';
import executeQuery from '../base/index';
let adminTable = mohair.table('admin_user');

//生成token的方法
function  generateToken(data){
    let created = Math.floor(Date.now() / 1000);
    let cert = fs.readFileSync(path.join(__dirname, '../../config/rsa_private_key.pem'));//私钥
    let token = jwt.sign({
        data,
        exp: created + 3600 * 24
    }, cert, {algorithm: 'RS256'});
    return token;
}



let userDao = {
    async login(req,res,next){
        let params = req.body;
        let userQuery =adminTable.where({admin_name:params.admin_name}).select();
        try{
            let result = await executeQuery(userQuery.sql(),userQuery.params());
            console.log(result[0].admin_password);
            if(result[0]&&result[0].admin_password===params.password){
                console.log(result[0].admin_idgit);

                res.json({
                    code:200,
                    data:generateToken({uid:result[0].admin_id})
                })
            }else{
                res.json({
                    code:500,
                    data:'no user'
                })
            }

        }catch(err){
            console.log(err);
            res.json({
                code:500,
                data:err
            })
        }
    }
};

export default userDao;