
// 代码启动进程
const { readDir, isTsOrJs } = require('./util/handler_file');
const { getCodeTreeByfile, getInterFaceAllByFile,getInterFaceMdStr, getComponentAllByFile } = require('./util/babel_util');
const fs = require('fs');
const fileDirPath = 'C:/F_code/personal/ds/component_generate/v1/ng/eg';

const files = readDir(fileDirPath)
let interFaceAllArr = []
let componentAllArr = []
files.forEach(file => {
    if (isTsOrJs(file)) {
        const codeTree = getCodeTreeByfile(file);
        // const fileName = file.split('\\')[file.split('\\').length-1].split('.')[0];
        // fs.writeFileSync(`./dist/${fileName}.json`, JSON.stringify(codeTree))
        // 解析接口数据
        const interFaceAll = getInterFaceAllByFile(codeTree, file);
        interFaceAllArr = [...interFaceAllArr, ...interFaceAll]
        // 解析组件数据
        const componentInfo = getComponentAllByFile(codeTree, file);
        if(componentInfo.dec) {
            componentAllArr.push(componentInfo)
        }
    }
})
fs.writeFileSync('./dist/component.json', JSON.stringify(componentAllArr))
fs.writeFileSync('./dist/interface.md', getInterFaceMdStr(interFaceAllArr))