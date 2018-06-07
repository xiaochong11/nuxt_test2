// conf/db.js
// MySQL数据库联接配置

let mysql = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database:'test',
    port: 8889
}

if(process.env.NODE_ENV === 'production'){
    console.log('生产环境');
    mysql = {
        host: '127.0.0.1',
        user: 'root',
        password: '1qwertyA',
        database:'zhiboke',
        port:3306
    }
}
export default {
    mysql:mysql
    // mysql: {
    //     host: '172.16.58.55',
    //     user: 'root',
    //     password: '1qwertyA',
    //     database:'zhiboke', // 前面建的user表位于这个数据库中
    //     port: 3306
    // }
};