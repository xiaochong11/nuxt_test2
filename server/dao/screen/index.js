import mohair from 'mohair';
import executeQuery from '../base/index';

let screenTable = mohair.table('screen_info');

//首页展示内容接口
let indexDao = {
    async getList(req,res,next){
        let params = req.query;
        let screenQuery={}
        console.log(params);
        if(Object.keys(params).length === 0){//空对象的时候
            screenQuery =screenTable.where({deleted:0}).select('*');
        }else{
            screenQuery=screenTable.select('*');
        }

        try{
            let result = await executeQuery(screenQuery.sql(),screenQuery.params());

            if(result[0]){
                res.json({
                    code:200,
                    data:result[0]
                })
            }else{
                res.json({
                    code:500,
                    data:'查询结果为空'
                })
            }
        }catch(err){
            res.json({
                code:500,
                data:err
            })
        }
    },
    async updateIndexData(req,res,next){
        let params = req.body;
        console.log(params);
        let screenQuery = screenTable.where({id:params.row.id}).update(params.row);
        try{
            let result = await executeQuery(screenQuery.sql(),screenQuery.params());
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
    async addIndexData(req,res,next){
        let params = req.body;
        console.log(666);
        params.date = new Date();
        let screenQuery = screenTable.insert(params);
        try{
            let result = await executeQuery(screenQuery.sql(),screenQuery.params());
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

export default indexDao;