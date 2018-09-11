const fs = require('fs');
const http = require('http');
const https = require('https');
const path =require('path');

import express from 'express'
import bodyParser from 'body-parser';
import { Nuxt, Builder } from 'nuxt'
import {timed} from "./schedule/index";

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000;


import filter from './util/text-censor/index'


app.set('port', port)
//express.static 函数提供的路径相对于您在其中启动 node 进程的目录。
app.use('/static',express.static('static'));
app.use(express.static('./')); //./这是命令运行的位置

app.use(bodyParser.json({limit: '1mb'}));  //这里指定参数使用 json 格式
app.use(bodyParser.urlencoded({
    extended: true
}));

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
const httpServer = http.createServer(app);
//io

var io = require('socket.io')(httpServer);

/*
	*新手必读
	*function中的socket为每个客户端单独连接的socket实例，只通知当前连接用户
	*io.sockets 通知所有连接用户
	*socket.broadcast 给除了自己以外的客户端广播消息
*/
io.on('connection', function (socket) {
    /*是否是新用户标识*/
    var isNewPerson = true;
    /*当前登录用户*/
    var username = null;
    // /*监听登录*/
    // socket.on('login',function(data){
    //     for(var i=0;i<users.length;i++){
    //         if(users[i].username === data.username){
    //             isNewPerson = false;
    //             break;
    //         }else{
    //             isNewPerson = true;
    //         }
    //     }
    //     if(isNewPerson){
    //         username = data.username;
    //         users.push({
    //             username:data.username
    //         })
    //         let resdata = {
    //             //username: data.username,	/*发送方用户名*/
    //             msgType: 0, 	/*信息类型：0为系统消息，1为客户端消息*/
    //             msgDate:  new Date(), 	/*植入服务器时间*/
    //             message: '系统消息：'+data.username+'已加入群聊',
    //
    //         }
    //
    //         /*登录成功*/
    //         socket.emit('loginSuccess',{username:data.username});
    //
    //         /*向所有连接的客户端广播add事件*/
    //         io.sockets.emit('receiveMessage',resdata);
    //
    //         //io.sockets.emit('add',resdata);
    //         console.log('登录成功:',resdata)
    //
    //         /*给除了自己以外的客户端广播消息 2017-12-20*/
    //         // socket.broadcast.emit('add',resdata);
    //
    //         /*人数变更，广播给所有连接用户*/
    //         console.log('当前连接的用户为：',users);
    //         io.sockets.emit('amountChange',users.length);
    //     }else{
    //         /*登录失败*/
    //         socket.emit('loginFail','');
    //     }
    // })

    /*监听发送消息*/
    socket.on('postMessage',function(data){
        let message = filter(data.message);
        let color = message.indexOf('*')<=-1&&message.indexOf('加油')>-1?'#179936':'#fff';
        let resData = {
            username: '匿名用户',		/*发送方用户名*/
            msgType: 1, 			/*信息类型：0为系统消息，1为客户端消息*/
            msgDate:  new Date(), 	/*植入服务器时间*/
            message: message,
            color:color
        };


        io.sockets.emit('receiveMessage',resData);
        // console.log('接受到信息======:',resData)
    })


    // setInterval(()=>{
    //     io.sockets.emit('receiveMessage',{
    //         username:'张学友',
    //         message:'这是我的弹幕'
    //     });
    // },1000)
    /*退出登录*/
    // socket.on('disconnect',function(){
    //
    //     //username  为13行的当前登录用户。也可前端传参进来主动触发
    //     let resdata = {
    //         // username: username,
    //         msgType: 0,
    //         msgDate:  new Date(),
    //         message: '系统消息：'+username+'已退出群聊',
    //
    //     };
    //     io.sockets.emit('receiveMessage',resdata);
    //
    //     console.log('退出===',username)
    //
    //
    //     /*向所有连接的客户端广播leave事件*/
    //     io.sockets.emit('leave',username);
    //     users.map(function(val,index){
    //         if(val.username === username){
    //             users.splice(index,1);
    //         }
    //         /*人数变更，广播给所有连接用户*/
    //         console.log('当前连接的用户为：',users);
    //         io.sockets.emit('amountChange',users.length);
    //
    //
    //     })
    // })
})
//https相关
if(process.env.NODE_ENV === 'production'){
    const privateKey = fs.readFileSync(path.resolve(__dirname,'cert_ali/1538367494158.key'),'utf8');
    const certificate = fs.readFileSync(path.resolve(__dirname,'cert_ali/1538367494158.pem'), 'utf8');
    // const ca = fs.readFileSync(path.resolve(__dirname,'cert/chain.pem'), 'utf8');

    const credentials = {
        key: privateKey,
        cert: certificate,
        // ca: ca
    };
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(443,'www.zhiboke.site')
}else{

}

httpServer.listen(port, host);

console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

//定时任务
timed();