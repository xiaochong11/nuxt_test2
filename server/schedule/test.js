var phantom = require('phantom');
var _ph, _page, _outObj;


var delay = function(s){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,s);
    });
};

phantom
    .create()
    .then(ph => {
        _ph = ph;
        return _ph.createPage();
    })
    .then(page => {
        _page = page;
        return _page.open('http://www.huya.com/m');
    })
    .then(status => {
        console.log(status);
        let content='';
        delay(5000);
        content =  _page.property('content');
        return content;
    })
    .then(content => {
        console.log(content);
        _page.close();
        _ph.exit();
    })
    .catch(e => console.log(e));