
const fs = require('fs');
const path = require('path')
// 递归读取需读取的文件数据
function readDir(dirpath) {
    let fileArr = [];
    const fileInfo = fs.statSync(dirpath)
    if (!fileInfo.isDirectory) {
        return;
    }
    const dir = fs.readdirSync(dirpath);
    dir.forEach(item => {
        const fileInfo = fs.statSync(path.resolve(dirpath, item))
        if (fileInfo.isDirectory()) {
            fileArr = [...fileArr, ...readDir(path.resolve(dirpath, item))]
        } else {
            fileArr.push(path.resolve(dirpath, item))
        }
    })
    return fileArr
}

function isTsOrJs(file){
    return ['.js', '.ts'].includes((path.extname(file)).toLocaleLowerCase());
}


module.exports = {
    readDir,
    isTsOrJs
}