import mohair from 'mohair';
import executeQuery from '../base/index';
let shareRecordTable = mohair.table('share_record');
import {dateFormat} from '../../util/index';
let shareDao = {
    addShareRecord:async function(req,res,next){
        let params = req.body;
        if(params.share_user_id === params.open_user_id){
            res.json({
                code:200,
                data:'分享链接本用户打开'
            })
        }
        try{
            let selectQuery = shareRecordTable.select().where({share_user_id:params.share_user_id,open_user_id:params.open_user_id});
            let record = await executeQuery(selectQuery.sql(),selectQuery.params());
            if(record && record.length>0){
                res.json({
                    code:200,
                    data:'分享链接被该用户已打开过'
                })
            }
            if(record && record.length===0){
                params.open_date = new Date();
                let insertQuery = shareRecordTable.insert(params);
                let result = await executeQuery(insertQuery.sql(),insertQuery.params());
                res.json({
                    code:200,
                    data:'分享链接被该用户第一次打开'
                })
            }

        }catch(err){
            res.json({
                code:500,
                data:err
            })
        }
    },

};

export default shareDao;