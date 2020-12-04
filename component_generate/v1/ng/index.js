
const path = require('path')
const fs = require('fs')
const testAPath = 'C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form';


readDir(testAPath)




// 递归读取需读取的文件数据

function readDir(dirpath) {
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