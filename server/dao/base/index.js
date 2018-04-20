import pool from './pool';

function executeQuery(query,params){
    return new Promise(function (resolve,reject){
        pool.getConnection(function(err,connection){
            if (err) {
                connection.release();
                reject(err);
            }
            connection.query(query,params,function(err,rows,fields){
                connection.release();
                if(err) {
                   reject(err);
                }else{
                    resolve(rows);
                }
            });
            // connection.on('error', function(err) {
            //     reject(err);
            // });
        });
    });

}
export default executeQuery;