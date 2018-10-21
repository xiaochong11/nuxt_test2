import mohair from 'mohair';
import executeQuery from '../base/index';
let userCommentTable = mohair.table('anchor_comment');
let userTable = mohair.table('general_user');
import osArr from '../../config/osArr';
let  userAnchorTable = mohair.table('user_anchor_attention');
let  shareRecordTable = mohair.table('share_record');
let rankDao = {
    getUserCommentRank:async function(req,res,next){
        let params = req.query;
        let selectQuery = userCommentTable
            .where('anchor_comment.comment_auth_id != 0 and anchor_comment.deleted=0')
            .select('general_user.*,anchor_comment.*,count(anchor_comment.comment_id) AS comment_count')
            .group('comment_auth_id')
            .join('left JOIN general_user ON general_user.user_id = anchor_comment.comment_auth_id')
            .order('comment_count DESC')
            .offset(0)
            .limit(10);

        try{
            let result = await executeQuery(selectQuery.sql(),selectQuery.params());
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
    getAnchorAttentionRank:async function(req,res,next){
        let params = req.query;
        let selectQuery = userAnchorTable
            .where('anchor_info.deleted=0')
            .select('user_anchor_attention.*,anchor_info.*,count(user_anchor_attention.attention_id) AS attention_count')
            .group('user_anchor_attention.anchor_id')
            .join('left JOIN anchor_info ON anchor_info.anchor_id = user_anchor_attention.anchor_id')
            .order('attention_count DESC')
            .offset(0)
            .limit(10);

        try{
            let result = await executeQuery(selectQuery.sql(),selectQuery.params());
            result.forEach((anchor)=>{
                anchor.osName = osArr.find((osObj)=>{
                    return osObj.os === anchor.anchor_os
                }).name.replace('直播','');
            })
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
    getUserShareRank:async function(req,res,next){
        let params = req.query;
        let selectQuery = shareRecordTable
            .select('general_user.*,share_record.*,count(share_record.open_id) AS open_count')
            .group('share_record.share_user_id')
            .join('left JOIN general_user ON general_user.user_id = share_record.share_user_id')
            .order('open_count DESC')
            .offset(0)
            .limit(10);

        try{
            let result = await executeQuery(selectQuery.sql(),selectQuery.params());
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



export default rankDao;