/*
 * @Date: 2021-01-22 15:58:20
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-22 17:11:00
 * @descript: 编译框架
 */

const exec = require('child_process').exec;
const { nameMap, staticPath } = require('../config/config');
const path = require('path');
const fs = require('fs-extra');



// 编译框架文件编译
const buildFrame = (name, shells, exitCB) => {

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

// 将框架编译的css编译到dist的index的html中
indexHtmlBuild = (name) => {
    if (!nameMap.hasOwnProperty(name)) {
        throwError("不存在这个框架");
        return;
    }
    const buildIndexPath = path.resolve(nameMap[name].buildDistPath, 'index.html');
    const distIndexPath = path.resolve(staticPath, 'index.html');
    if (!fs.existsSync(buildIndexPath) || !fs.existsSync(distIndexPath)) {
        throwError("调用此方法顺序报错！");
        return;
    }
    const buildIndexString = fs.readFileSync(buildIndexPath).toString();
    const distIndexString = fs.readFileSync(distIndexPath).toString();

    if (distIndexString.split(`<!--${name}-css-->`).length !== 3 || distIndexString.split(`<!--${name}-js-->`).length !== 3) {
        console.log(name)
        throwErro("文件模板错误");
        return;
    }

    let buildCss = buildIndexString.split('<link')
        .map(v => '<link ' + v.split('>')[0] + '>')
        .filter(v => (v.indexOf('favicon.ico') < 0 && v.indexOf('href') > 0))
        .map(v => v.split('href="')
            .reduce((a, b) => a + 'href="./' + name + (b.startsWith('/') ? b : ('/' + b)))).join('\n');
    buildCss = `<!--${name}-css-->\n` + buildCss + `\n<!--${name}-css-->\n`

    let buildJs = buildIndexString.split('<script')
        .map(v => '<script ' + v.split('</script>')[0] + '</script>')
        .filter(v => (v.indexOf('src') > 0 || v.indexOf('function') > 0))
        .map(v => v.split('src="').reduce((a, b) => a + ' src="./' + name + (b.startsWith('/') ? b : ('/' + b)))).join('\n');
    buildJs = `<!--${name}-js-->\n` + buildJs + `\n<!--${name}-js-->\n`

    const buildDistIndexCssArr = distIndexString.split(`<!--${name}-css-->`)
    const buildDistIndexCss = buildDistIndexCssArr[0] + buildCss + buildDistIndexCssArr[2];

    const buildDistIndexJsArr = buildDistIndexCss.split(`<!--${name}-js-->`)
    const buildDistIndexJs = buildDistIndexJsArr[0] + buildJs + buildDistIndexJsArr[2];

    fs.writeFileSync(distIndexPath, buildDistIndexJs);


}


// 观察文件夹读写
const watchBuildFrame = (name, cbSuccess) => {

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
                    shellExample = null;
                    console.log(key + ':重新编译成功');
                    console.log(event, fileName);
                    cbSuccess();
                })

        }, 1000)
    })

}

module.exports = {
    buildFrame,
    watchBuildFrame,
    indexHtmlBuild
}