var fs = require('fs');

fs.readFile('../data/competition.json', 'utf-8', function(err, data) {
    if(err) {
        console.error(err);
    } else {
        console.log("readFile");
    }
});
console.log('end. of readFile');

var data2 = fs.readFileSync('../data/competition.json', 'utf-8');
console.log("readFileSync");
console.log('end. of readFileSync');