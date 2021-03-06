
// 文件内容替换
function content_replace(paths, reg, cb) {
    paths.forEach(path => {
        const str = fs.readFileSync(path).toString()
        const newStr = str.replace(reg, cb)
        fs.writeFileSync(path, newStr)
    })

}
module.export = {
    content_replace
}