
const path = require('path')
const fs = require('fs')
const testAPath = './template_test.js';


// readDir(testAPath)

// 递归读取需读取的文件数据
function readDir(dirpath) {
    const fileInfo = fs.statSync(dirpath)
    if(!fileInfo.isDirectory) {
        return;
    }
    const dir = fs.readdirSync(dirpath);
    dir.forEach(item => {
        const fileInfo = fs.statSync(path.resolve(dirpath, item))
        if(fileInfo.isDirectory()) {
            readDir(path.resolve(dirpath, item))
        } else {
            console.log(path.resolve(dirpath, item))
        }
    })
}

readInterface(testAPath)

// 读取文件中的接口数据
function readInterface(filepath) {
}