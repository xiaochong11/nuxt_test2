import mohair from 'mohair';
import executeQuery from '../base/index';

let indexTable = mohair.table('index_info');

//首页展示内容接口
let indexDao = {
    async getList(req,res,next){
        let params = req.query;
        let IndexQuery={}
        if(Object.keys(params).length === 0){
            IndexQuery =indexTable.where({deleted:0}).select('*').order('show_order ASC');
        }else{
            IndexQuery=indexTable.select('*').order('show_order ASC');
        }

        try{
            let result = await executeQuery(IndexQuery.sql(),IndexQuery.params());
            let indexObj={
                bannerList:[],
                hotList:[],
                recommandList:[]
            };
            if(result){
                //依照时间过滤

                let nowTime = new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
                result = result.filter((arr,index)=>{
                    return  arr.start_time === "00:00:00"||(arr.start_time>=nowTime&&arr.end_time<=nowTime)
                });
                console.log(result);
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
        params.add_date = new Date();
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