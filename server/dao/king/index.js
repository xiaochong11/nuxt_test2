import mohair from 'mohair';
import executeQuery from '../base/index';

let kingTable = mohair.table('king_peak');
let kingDao = {
    async getPeakData(req,res,next){
        let params = req.query;

        let kingQuery =kingTable.select('*');
        try{
            let result = await executeQuery(kingQuery.sql(),kingQuery.params())
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
    async updatePeakData(req,res,next){
        let params = req.body;
        // console.log(req)
        console.log(params.row.nickname);
        let kingQuery = kingTable.where({order_id:params.row.order_id}).update(params.row);
        let kingQuery1 = kingTable.update({update_date:new Date()});
        try{
            let result = await executeQuery(kingQuery.sql(),kingQuery.params());
            let result1 = await executeQuery(kingQuery1.sql(),kingQuery1.params());
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
    //暂时废弃了
    async updatePeakTime(req,res,next){
        let params = req.body;
        let kingQuery =kingTable.update(params);
        try{
            let result = await executeQuery(kingQuery.sql(),kingQuery.params())
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
};

export default kingDao;