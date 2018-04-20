import mohair from 'mohair';
import executeQuery from '../base/index';

let articleTable = mohair.table('article_info');
let articleDao = {
    postArticle:async function(req,res,next){
        let params = req.body;
        // console.log(req)
        console.log(req.body);
        let articleQuery =articleTable.insert(params);
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
};

export default articleDao;