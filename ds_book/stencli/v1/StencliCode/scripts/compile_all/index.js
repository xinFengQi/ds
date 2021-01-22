/*
 * @Date: 2021-01-22 14:53:30
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-22 17:44:37
 */
console.log('开始编译');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs-extra');

const { nameMap, staticPath, staticTemplatePath } = require('./config/config');
const { buildFrame, watchBuildFrame } = require('./build/build');
const { threadId } = require('worker_threads');


app.use(express.static(staticPath));



let i = 0;
const nameMapKeys = Object.keys(nameMap);

console.log(staticPath)

// 初始化dist文件夹
fs.emptyDirSync(staticPath);

fs.readdir(staticTemplatePath, (err, files) => {
    if(err) {
        throw('不存在dist文件夹')
    }
    files.forEach(v => {
        fs.copySync(path.resolve(staticTemplatePath, v), path.resolve(staticPath, v))
    })
})

// 开始运行将三大框架编译
// nameMapKeys.forEach(key => {
//     buildFrame(key, null, () => {
//         console.log(key + '编译成功');
//         i++;
//         initDevServe();
//         watchBuildFrame(key)
//     })
// })


function initDevServe() {
    if (i < nameMapKeys.length) {
        return;
    }
    app.listen(5000, () => {
        console.log('服务器启动: http://localhost:5000');
    });
}


