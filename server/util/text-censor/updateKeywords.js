var fs = require('fs');
var path = require('path');

var path1 = path.resolve(__dirname,'./keywords.txt');
var path2 = path.resolve(__dirname,'./keywords.js');

function censor1(){
    let data =''
    const readerStream = fs.createReadStream(path1,{encoding: 'UTF-8'});
    const writeStream = fs.createWriteStream(path2);
    readerStream.on('data', function(chunk) {
        data += chunk;
    });
    readerStream.on('end',function(){
        let dataArr = data.split('\n');

        dataArr.forEach((arr)=>{
            keyArrays = keyArrays.concat(arr);
        })
        //console.log(keyArrays);
        writeStream.write("export default"+JSON.stringify(keyArrays));
        writeStream.end();
    })

}
// function censor(){
//
// }
// module.exports={censor};

censor1();