/*
 * @Date: 2021-01-22 15:58:20
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-22 17:11:00
 * @descript: 编译框架
 */

const exec = require('child_process').exec;
const { nameMap } = require('../config/config');
const fs = require('fs-extra');



// 编译框架文件编译
module.exports.buildFrame = (name, shells, exitCB) => {

    if (!nameMap.hasOwnProperty(name)) {
        throwError("不存在这个框架");
        return;
    }

    const build = exec(nameMap[name].buildShell, []);
    if (shells) {
        shells(build)
    }
    // 捕获标准输出并将其打印到控制台 
    build.stdout.on('data', function (data) {
        // console.log(name + ':\n' + data);
    });

    // 捕获标准错误输出并将其打印到控制台 
    build.stderr.on('data', function (data) {
        console.log(name + ':error:\n' + data);
    });

    // 注册子进程关闭事件 
    build.on('close', function (code, signal) {
        console.log(name + 'close:' + code);
    });

    // 注册子进程关闭事件 
    build.on('exit', function (code, signal) {
        console.log(name + 'exit:' + code);
        exitCB();
    });


}


// 观察文件夹读写
module.exports.watchBuildFrame = (name) => {

    if (!nameMap.hasOwnProperty(name)) {
        throwError("不存在这个框架");
        return;
    }
    let timer = null, shellExample = null;

    fs.watch(nameMap[name].watchPath, {}, (event, fileName) => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            if (shellExample) {
                shellExample.kill()
            }
            buildFrame(name,
                (shell) => {
                    shellExample = shell;
                },
                () => {
                    shellExample = null
                    console.log(key + ':重新编译成功');
                    console.log(event, fileName);
                })

        }, 1000)
    })

}