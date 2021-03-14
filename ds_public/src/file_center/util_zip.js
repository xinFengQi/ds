let fs = require('fs')
let archiver = require('archiver')


function fileToZip(outputPath, inputPath, cb) {

    return new Promise((reslove, reject) => {
        // 创建文件输出流
        let output = fs.createWriteStream(outputPath);
        let archive = archiver('zip', {
            zlib: { level: 9 } // 设置压缩级别
        })

        // 文件输出流结束
        output.on('close', () => {
            console.log(`总共 ${archive.pointer()} 字节`)
            console.log('archiver完成文件的归档，文件输出流描述符已关闭')
            reslove(outputPath);
        })

        // 数据源是否耗尽
        output.on('end', function () {
            console.log('数据源已耗尽')
        })

        // 存档警告
        archive.on('warning', (err) => {
            if (err.code === 'ENOENT') {
                console.warn('stat故障和其他非阻塞错误')
            } else {
                throw err
            }
        })

        // 存档出错
        archive.on('error', function (err) {
            throw err
        })

        // 存档结束
        archive.on('end', function () {
            console.log('压缩结束')
        })

        // 通过管道方法将输出流存档到文件
        archive.pipe(output)

        archive.directory(inputPath, false)
        // 完成归档
        archive.finalize()
    })

}



module.exports = {
    fileToZip
}