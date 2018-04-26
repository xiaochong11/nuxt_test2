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
                console.log(111);
                res.json({
                    code:'200',
                    data:'OK'
                })
            }else{
                res.json({
                    code:'500',
                    data:'OK'
                })
            }

        }catch(err){
            res.json({
                code:'500',
                data:err
            })
        }
    }
};

export default userDao;