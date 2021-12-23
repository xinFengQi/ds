import express from 'express';

import config from './config';

import { listerOsResource } from './timer/resource.timer';

const hot_deployRouter = require('./business/hot_deploy/router.express');

const { initServeGit } = require('./handler/git_operate')

import { setIo, getIo } from './handler/io.util'
import { initSocke } from './business/hot_deploy/server.socket'

import { initSocketClient } from './business/hot_deploy/client.socket';
import { showLog } from './util/handler_log';
import { initStaticServe } from './handler/server_web_list';


// 定时器执行区域
listerOsResource();


// 静态服务器处理区域
initStaticServe()

// git处理区域
initServeGit()



//创建服务器程序
const app = express();

// socket处理区域
var http = require('http').Server(app)
var io = require('socket.io')(http);
setIo(io);
// 服务端socket
initSocke();
// 客户端socket
initSocketClient()


// 重写log方法，将其输出到文件中及发送到前端
console.log = showLog(console.log, getIo())



// 解决跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// 创建总路由
app.use('/hot_deploy', hot_deployRouter)



http.listen(config.server.port, (err: any) => {
    if (err == null) {
        console.log('启动成功~~' + config.server.port);
        console.log('当前环境', process.env.NODE_ENV)
    } else {
        console.log('启动失败~~' + config.server.port + err.message);
    }
});


