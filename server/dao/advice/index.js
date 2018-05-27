import mohair from 'mohair';
import executeQuery from '../base/index';
import filter from '../../util/text-censor/index';
let adviceTable = mohair.table('advice_info');

let adviceDao = {
    async postAdvice(req,res,next){
        let params = req.body;
        params.advice_content = filter(params.advice_content);
        params.advice_contact = filter(params.advice_contact);
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
    },
    async getAdviceList(req,res,next){
        let adviceQuery =adviceTable.order('advice_id desc').select('*').limit(4);
        try{
            let result = await executeQuery(adviceQuery.sql(),adviceQuery.params())
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

};

export default adviceDao;