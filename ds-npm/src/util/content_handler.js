const fs = require('fs-extra');
const logSymbols = require('log-symbols');
const chalk = require('chalk');

// 文件复制
function dsnCopyFile(src, dest, isMove) {
    const isSrc = fs.existsSync(src);
    if(!isSrc) {
        throw `${src}文件夹不存在,请检查复制配置`
    }
    const copyResult = fs.copySync(src, dest)
    console.log(logSymbols.success, chalk.green(`${src}文件(夹)复制到了${dest}中`));
    if(isMove) {
        fs.removeSync(src)
        console.log(logSymbols.success, chalk.green(`${src}文件(夹)已删除`));
    }
    return copyResult;
}

// 文件内容替换
function contentReplace(paths, reg, cb) {
    paths.forEach(path => {
        const str = fs.readFileSync(path).toString()
        const newStr = str.replace(reg, cb)
        fs.writeFileSync(path, newStr)
    })
}

// 去除多余空格
function removeSpace(str) {
    return str.replace(/( )+/g,' ')
}

// 判断是否为空
function isUEmpty(str) {
    return [null, undefined].includes(str)
}


module.exports = {
    contentReplace,
    removeSpace,
    isUEmpty,
    dsnCopyFile
}