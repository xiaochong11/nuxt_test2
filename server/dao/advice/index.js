import mohair from 'mohair';
import executeQuery from '../base/index';
let adviceTable = mohair.table('advice_info');

let adviceDao = {
    async postAdvice(req,res,next){
        let params = req.body;
        console.log(params);
        let adviceQuery =adviceTable.insert(params);
        try{
            let result = await executeQuery(adviceQuery.sql(),adviceQuery.params())
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

export default adviceDao;