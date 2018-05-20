var delay = function(r,s){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve([r,s]);
        },s);
    });
};

delay('a',0).then(function(v){
    console.log(v[0],v[1]);   // 顯示 a 0
    return delay('b',1000);   // 延遲一秒之後，告訴後面的函示顯示 b 1000
}).then(function(v){
    console.log(v[0],v[1]);   // 顯示 b 1000
    return delay('c',2000);   // 延遲兩秒之後，告訴後面的函示顯示 c 2000
}).then(function(v){
    console.log(v[0],v[1]);   // 顯示 c 2000
});