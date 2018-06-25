import mohair from 'mohair';
import executeQuery from '../base/index';

let dirTable = mohair.table('live_directory');

let dirDao = {
    async getAllDir(req,res,next){
        let params = req.query;
        let dirQuery={};
        dirQuery=dirTable.select('*').order('show_order ASC');
        try{
            let result = await executeQuery(dirQuery.sql(),dirQuery.params());
            console.log(result);
            if(result){
                res.json({
                    code:200,
                    data:result
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
    async updateDirData(req,res,next){
        let params = req.body;
        console.log(params);
        let dirQuery = dirTable.where({id:params.row.id}).update(params.row);
        try{
            let result = await executeQuery(dirQuery.sql(),dirQuery.params());
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
    async addDir(req,res,next){
        let params = req.body;
        params.add_date = new Date();
        let dirQuery = dirTable.insert(params);
        try{
            let result = await executeQuery(dirQuery.sql(),dirQuery.params());
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

export default dirDao;