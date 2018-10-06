import mohair from 'mohair';
import executeQuery from '../base/index';

import filter from '../../util/text-censor';

let anchorTable = mohair.table('anchor_info');
let anchorCommentTable =  mohair.table('anchor_comment');
let anchorRecommendTable = mohair.table('anchor_recommend');

let anchorDao = {
    async getDirAnchor(req,res,next){
        let params = req.query;
        console.log(params);
        let anchorQuery={}
        if(!params.all){
            anchorQuery = anchorTable
                        .where({deleted:0,anchor_dir_id:params.dir_id})
                        .select('anchor_info.*,count(anchor_comment.anchor_id) AS comment_count')
                        .order('show_order ASC,comment_count DESC')
                        .group('anchor_info.anchor_id')
                        .join('left JOIN anchor_comment ON anchor_info.anchor_id = anchor_comment.anchor_id');
        }else{
            anchorQuery=anchorTable.select('*').order('show_order ASC');
        }
        console.log(anchorQuery.sql());
        try{
            let result = await executeQuery(anchorQuery.sql(),anchorQuery.params());

            if(result){
                //依照时间过滤
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

    async getSearchAnchor(req,res,next){
        let params = req.query;
        console.log(params);
        let anchorQuery={}
        if(!params.all){
            anchorQuery = anchorTable
                .where('anchor_info.deleted = ?',0)
                // .where('anchor_name LIKE',`%${params.searchItem}%`)
                .where('anchor_name LIKE ?',`%${params.searchItem}%`)
                .select('anchor_info.*,count(anchor_comment.anchor_id) AS comment_count')
                .order('show_order ASC')
                .group('anchor_info.anchor_id')
                .join('left JOIN anchor_comment ON anchor_info.anchor_id = anchor_comment.anchor_id');
        }else{
            anchorQuery=anchorTable.select('*').order('show_order ASC');
        }
        console.log(anchorQuery.sql());
        try{
            let result = await executeQuery(anchorQuery.sql(),anchorQuery.params());
            console.log(result);
            if(result){
                //依照时间过滤
                // let nowTime = new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
                // result = result.filter((arr,index)=>{
                //     return  arr.start_time === "00:00:00"||(arr.start_time>=nowTime&&arr.end_time<=nowTime)
                // });
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

    //推荐主播
    async addAnchor(req,res,next){
        let params = req.body;
        params.recommend_date = new Date();
        let anchorQuery = anchorRecommendTable.insert(params);
        console.log(anchorQuery.sql());
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
    async upadteAnchorTimes(req,res,next) {
        let params = req.query;
        console.log(params.anchor_id);
        let anchorQuery = anchorTable.where({anchor_id:params.anchor_id}).update({anchor_times:mohair.raw('anchor_times+1')});
        console.log('sss:'+anchorQuery.sql())
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
    async getAnchorComment(req,res,next) {
        let params = req.query;
        let limit = 3;
        let offset = params.page*limit;
        let anchorQuery = anchorTable
                            .where({deleted:0,'anchor_info.anchor_id':params.anchor_id})
                            .select('anchor_info.*,avg(anchor_comment.rate) AS rateAvg')
                            .group('anchor_info.anchor_id')
                            .join('left JOIN anchor_comment ON anchor_info.anchor_id = anchor_comment.anchor_id');


        let anchorCommentQuery = anchorCommentTable
                                .where({anchor_id:params.anchor_id})
                                .order('comment_up desc,comment_id desc')
                                .join('left JOIN general_user ON general_user.user_id = anchor_comment.comment_auth_id')
                                .limit(limit)
                                .offset(offset)
                                .select('anchor_comment.*,general_user.user_nickname,general_user.user_avatar');

        console.log(anchorCommentQuery.sql());
        try {
            let anchorInfo = await executeQuery(anchorQuery.sql(), anchorQuery.params());

            let commentList = await executeQuery(anchorCommentQuery.sql(), anchorCommentQuery.params());
            commentList.forEach((comment)=>{
                if(comment.anonymous===0){
                    //这会使用户名为空的也显示为匿名网友
                    comment.comment_auth_name = comment.user_nickname||'匿名网友';
                    comment.comment_auth_avatar = comment.user_avatar ||'http://img3.imgtn.bdimg.com/it/u=924427432,4036562115&fm=27&gp=0.jpg';
                }else{
                    comment.comment_auth_name = '匿名网友';
                    comment.comment_auth_avatar = 'http://img3.imgtn.bdimg.com/it/u=924427432,4036562115&fm=27&gp=0.jpg';
                }
                comment.user_nickname = '';
                comment.user_avatar = '';
            });
            res.json({
                code: 200,
                data: {
                    anchorInfo: anchorInfo[0],
                    commentList
                }
            })
        }catch(err){
            res.json({
                code: 500,
                data: err
            })
        }

        // let anchorQuery = anchorTable
        //     .where({deleted:0,'anchor_info.anchor_id':params.anchor_id})
        //     .select('anchor_info.*,anchor_comment.*')
        //     .group('anchor_info.anchor_id')
        //     .join('left JOIN anchor_comment ON anchor_info.anchor_id = anchor_comment.anchor_id');
        // try{
        //     let result = await executeQuery(anchorQuery.sql(), anchorQuery.params());
        //     res.json({
        //         code: 200,
        //         data: result
        //     })
        // }catch(err){
        //     res.json({
        //         code:500,
        //         data:err
        //     })
        // }
    },

    async postAnchorComment(req,res,next) {
        let params = req.body;
        params.comment_date = new Date();
        params.content = filter(params.content,60).replace('\n','<br/>');
        console.log(params);
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
    async updateCommentTimes(req,res,next){
        let params = req.query;
        console.log('update');
        let anchorCommentQuery;
        if(params.item === 'up'){
            console.log('up');
            anchorCommentQuery= anchorCommentTable.where({comment_id:params.comment_id}).update({comment_up:mohair.raw('comment_up+1')});
        }else if(params.item === 'down'){
           anchorCommentQuery = anchorCommentTable.where({comment_id:params.comment_id}).update({comment_down:mohair.raw('comment_down+1')});
        }

        try{
            let result = await executeQuery(anchorCommentQuery.sql(),anchorCommentQuery.params());
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
    }
};

export default anchorDao;