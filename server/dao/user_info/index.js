import mohair from 'mohair';
import executeQuery from '../base/index';
let userAnchorTable = mohair.table('user_anchor_attention');
let anchorCommentTable = mohair.table('anchor_comment');
function dateFtt(fmt,date)
{ //author: meizz
    var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}
let userInfoDao = {
    addAttention:async function(req,res,next){
        let params = req.body;
        params.attention_date = new Date();
        try{
            let insertQuery = userAnchorTable.insert(params);
            let result = await executeQuery(insertQuery.sql(),insertQuery.params());
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
    checkAttention:async function(req,res,next){
        let params = req.query;
        let selectQuery = userAnchorTable.select().where({user_id:params.user_id,anchor_id:params.anchor_id})
        try{
            let result = await executeQuery(selectQuery.sql(),selectQuery.params());
            if(result && result[0]){
                res.json({
                    code:200,
                    data:{
                        isAttention:true
                    },
                })
            }else{
                res.json({
                    code:200,
                    data:{
                        isAttention:false
                    },
                })
            }
        }catch(err){
            res.json({
                code:500,
                data:err
            })
        }
    },
    getUserAttention:async function(req,res,next){
        let params = req.query;
        let selectQuery = userAnchorTable
                            .select('*')
                            .where({user_id:params.user_id})
                            .order('user_anchor_attention.attention_date')
                            .join('left JOIN anchor_info ON anchor_info.anchor_id = user_anchor_attention.anchor_id')
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
    getUserComment:async function(req,res,next){
        let params = req.query;
        let selectQuery = anchorCommentTable
            .select('*')
            .where({comment_auth_id:params.user_id})
            // .group("anchor_comment.comment_id")
            .join('left JOIN anchor_info ON anchor_info.anchor_id = anchor_comment.anchor_id')
        try{
            let commentArr = await executeQuery(selectQuery.sql(),selectQuery.params());
            commentArr.forEach((comment)=>{
                comment.comment_date = dateFtt('yyyy-MM-dd hh:mm:ss',new Date(comment.comment_date));
            });
            res.json({
                code:200,
                data:commentArr
            })
        }catch(err){
            res.json({
                code:500,
                data:err
            })
        }
    },

};

export default userInfoDao;