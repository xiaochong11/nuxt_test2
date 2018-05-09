import {jwt} from '../../util/index'

import mohair from 'mohair';
import executeQuery from '../base/index';
let adminTable = mohair.table('admin_user');





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
                    data:jwt.generateToken({uid:result[0].admin_id})
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