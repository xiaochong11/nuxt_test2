import mohair from 'mohair';
import executeQuery from '../base/index';

let anchorTable = mohair.table('anchor_info');
let anchorCommentTable =  mohair.table('anchor_comment');

let anchorDao = {
    async getDirAnchor(req,res,next){
        let params = req.query;
        console.log(params);
        let anchorQuery={}
        if(!params.all){
            anchorQuery = anchorTable
                                    .where({deleted:0,anchor_dir_id:params.dir_id})
                                    .select('anchor_info.*,count(anchor_comment.comment_id) AS comment_count')
                                    .order('show_order ASC')
                                    .join('left JOIN anchor_comment ON anchor_info.anchor_id = anchor_comment.anchor_id');
        }else{
            anchorQuery=anchorTable.select('*').order('show_order ASC');
        }
        console.log(anchorQuery.sql());
        try{
            let result = await executeQuery(anchorQuery.sql(),anchorQuery.params());

            if(result){
                //依照时间过滤
                let nowTime = new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
                result = result.filter((arr,index)=>{
                    return  arr.start_time === "00:00:00"||(arr.start_time>=nowTime&&arr.end_time<=nowTime)
                });
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

    async getAnchorComment(req,res,next) {
        let params = req.query;
        let anchorCommentQuery = anchorCommentTable.where({anchor_id:params.anchor_id}).select();
        try {
            let result = await executeQuery(anchorCommentQuery.sql(), anchorCommentQuery.params());
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

    async postAnchorComment(req,res,next) {
        let params = req.query;
        params.comment_date = new Date();
        let anchorCommentQuery = anchorCommentTable.insert(params);
        try {
            let result = await executeQuery(anchorCommentQuery.sql(), anchorCommentQuery.params());
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

    async updateAnchor(req,res,next){
        let params = req.body;
        console.log(params);
        let anchorQuery = anchorTable.where({anchor_id:params.row.id}).update(params.row);
        try{
            let result = await executeQuery(anchorQuery.sql(),anchorQuery.params());
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
    async addAnchor(req,res,next){
        let params = req.body;
        params.add_date = new Date();
        let anchorQuery = anchorTable.insert(params);
        try{
            let result = await executeQuery(anchorQuery.sql(),anchorQuery.params());
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

export default anchorDao;