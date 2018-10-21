import mohair from 'mohair';
import executeQuery from '../base/index';
let anchorTable = mohair.table('anchor_info');

let addAnchorDao = {
    async addAnchorArr(anchorArr,dir_id){
        //insertMany([{name: 'alice'}, {name: 'bob'}]);
        try{
            let selectAnchorQuery = anchorTable.select('*').where({anchor_dir_id:dir_id});
            let anchorDBArr = await executeQuery(selectAnchorQuery.sql(),selectAnchorQuery.params());
            //console.log(anchorDBArr);
            anchorArr.forEach((anchor,index)=>{
                anchorDBArr.forEach((anchorDB)=>{
                    if(anchor.anchor_link === anchorDB.anchor_link){
                        anchorArr.splice(index,1);
                    };
                    if(anchor.anchor_img === anchorDB.anchor_img){
                        anchorArr.splice(index,1);
                    }
                })
            });
            let addAnchorQuery = anchorTable.insertMany(anchorArr);
            let result = await executeQuery(addAnchorQuery.sql(),addAnchorQuery.params());
            console.log(result);
        }catch(err){
           console.log(err);
        }
    }
}

export default addAnchorDao;