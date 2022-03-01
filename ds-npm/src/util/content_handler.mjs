
// 文件内容替换
function content_replace(paths, reg, cb) {
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


export {
    content_replace,
    removeSpace,
    isUEmpty
}