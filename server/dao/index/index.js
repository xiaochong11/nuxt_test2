import mohair from 'mohair';
import executeQuery from '../base/index';

let indexTable = mohair.table('index_info');

//首页展示内容接口
let indexDao = {
    async getList(req,res,next){
        let params = req.query;
        let IndexQuery={}
        if(params){
            IndexQuery=indexTable.select('*');
        }else{
            IndexQuery =indexTable.where({deleted:0}).select('*');
        }

        try{
            let result = await executeQuery(IndexQuery.sql(),IndexQuery.params());
            let indexObj={
                bannerList:[],
                hotList:[],
                recommandList:[]
            };
            if(result){
                result.forEach((arr,index)=>{
                    if(arr.type==="banner"){
                        indexObj.bannerList.push(arr)
                    }
                    if(arr.type==="hot"){
                        indexObj.hotList.push(arr)
                    }
                    if(arr.type==="recommand"){
                        indexObj.recommandList.push(arr)
                    }
                })
                res.json({
                    code:200,
                    data:indexObj
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
        let indexQuery = indexTable.where({id:params.row.id}).update(params.row);
        try{
            let result = await executeQuery(indexQuery.sql(),indexQuery.params());
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
        let indexQuery = indexTable.insert(params);
        try{
            let result = await executeQuery(indexQuery.sql(),indexQuery.params());
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