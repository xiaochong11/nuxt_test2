import mohair from 'mohair';
import executeQuery from '../base/index';

let articleTable = mohair.table('article_info');
let articleDao = {
    async postArticle(req,res,next){
        let params = req.body;
        // console.log(req)
        console.log(params);
        params.article_create_date = new Date();
        let articleQuery =articleTable.insert(params);
        try{
            let result = await executeQuery(articleQuery.sql(),articleQuery.params())
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
    async updateArticle(req,res,next){
        let params = req.body;
        // console.log(req)
        console.log(params);
        params.article_edit_date = new Date();
        let articleQuery =articleTable.update(params).where({article_id:params.article_id});
        try{
            let result = await executeQuery(articleQuery.sql(),articleQuery.params())
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
    async getArticleList(req,res,next){
        let params = req.query;

        let articleQuery =articleTable.select('*');
        try{
            let result = await executeQuery(articleQuery.sql(),articleQuery.params())
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
    async getArticle(req,res,next){
        let params = req.query;
        let articleQuery =articleTable.where({article_id:params.article_id}).select();
        try{
            let result = await executeQuery(articleQuery.sql(),articleQuery.params());
            res.json({
                code:200,
                data:result[0]
            })
        }catch(err){
            res.json({
                code:500,
                data:err
            })
        }
    }
};

export default articleDao;