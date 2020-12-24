
// 代码启动进程
const { readDir, isTsOrJs } = require('./util/handler_file');
const { getCodeTreeByfile, getInterFaceAllByFile, getComponentAllByFile } = require('./util/babel_util');
const { mdToHtml, mdToVueHtml, getComponentMDByInfo, getInterFaceMdStr } = require('./util/marked_html')
const { generateMDTable } = require('./util/marked_html')
const { gettocRouterLink } = require('./util/vue_html');
const fs = require('fs');
const fileDirPath = './eg';

const files = readDir(fileDirPath)
let interFaceAllArr = []
let componentAllArr = []
files.forEach(file => {
    if (isTsOrJs(file)) {
        const codeTree = getCodeTreeByfile(file);
        const fileName = file.split('\\')[file.split('\\').length - 1].split('.')[0];
        // 解析接口数据
        const interFaceAll = getInterFaceAllByFile(codeTree, file);
        interFaceAllArr = [...interFaceAllArr, ...interFaceAll]
        // 解析组件数据
        const componentInfo = getComponentAllByFile(codeTree, file);
        componentInfo.key = fileName;
        if (componentInfo.dec) {
            if (componentInfo.inputArr.length > 0) {
                componentInfo.inputMarkTable = generateMDTable(['属性值', '描述', '类型', '默认值'], componentInfo.inputArr, ['key', 'dec', 'type', 'default'])
            }
            if (componentInfo.outputArr.length > 0) {
                componentInfo.outputMarkTable = generateMDTable(['属性值', '描述', '类型', '默认值'], componentInfo.outputArr, ['key', 'dec', 'type', 'default'])
            }
            const mdFileContent = getComponentMDByInfo(componentInfo);
            fs.writeFileSync(`./dist/${fileName}.json`, JSON.stringify(codeTree))
            fs.writeFileSync(`./app/markdown/${fileName}.md`, mdFileContent)
            fs.writeFileSync(`./app/html/${fileName}.html`, mdToHtml(mdFileContent))
            componentInfo.vuehtml = mdToVueHtml(mdFileContent)
            componentAllArr.push(componentInfo)
            console.log(fileName+'解析成功')
        }
    }
})

const {appComponent, componentData} = gettocRouterLink(componentAllArr);
fs.writeFileSync('./dist/component.json', JSON.stringify(componentAllArr))
fs.writeFileSync(`./app/markdown/interface.md`, getInterFaceMdStr(interFaceAllArr))
fs.writeFileSync(`./app/html/interface.html`,  mdToHtml(getInterFaceMdStr(interFaceAllArr)))
fs.writeFileSync(`./app/vue/data/appcomponent.data.js`, appComponent)
fs.writeFileSync(`./app/vue/data/componentdata.js`, componentData)

