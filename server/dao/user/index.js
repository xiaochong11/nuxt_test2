import mohair from 'mohair';
import executeQuery from '../base/index';
let userTable = mohair.table('admin_user');

let userDao = {
    getAll:async function(req,res,next){
        let param = req.query || req.params;
        let userQuery =userTable.select('*');

        try{
            let result = await executeQuery(userQuery.sql(),userQuery.params())
            res.json({
                code:'200',
                data:result
            })
        }catch(err){
            res.json({
                code:'500',
                data:err
            })
        }

    },
};

export default userDao;