import mohair from 'mohair';
import executeQuery from '../base/index';
let noticeTable = mohair.table('notice');
import {dateFormat} from '../../util/index';
let noticeDao = {
    getNotice:async function(req,res,next){
        let params = req.query;
        try{
            let selectQuery = noticeTable.select().where({'type':params.type,deleted:0});
            let notice = await executeQuery(selectQuery.sql(),selectQuery.params());
            res.json({
                code:200,
                data:notice[0]
            })
        }catch(err){
            res.json({
                code:500,
                data:err
            })
        }
    },

};

export default noticeDao;