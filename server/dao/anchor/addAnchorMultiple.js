import mohair from 'mohair';
import executeQuery from '../base/index';
let anchorTable = mohair.table('anchor_info');

let anchorDao = {
    async addAnchorArr(anchorArr){
        //insertMany([{name: 'alice'}, {name: 'bob'}]);
        let anchorQuery = anchorTable.insertMany(anchorArr);
        try{
            let result = await executeQuery(anchorQuery.sql(),anchorQuery.params());
            console.log(result);
        }catch(err){
           console.log(err);
        }
    }
}

export default anchorDao;