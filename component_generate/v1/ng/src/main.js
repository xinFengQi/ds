
// 代码启动进程
const { readDir, isTsOrJs } = require('./util/handler_file');
const { getCodeTreeByfile, getInterFaceAllByFile, getComponentAllByFile } = require('./util/babel_util');
const { mdToHtml, mdToVueHtml, getComponentMDByInfo, getInterFaceMdStr } = require('./util/marked_html')
const { generateMDTable } = require('./util/marked_html')
const { gettocRouterLink } = require('./util/vue_html');
const fs = require('fs');
const fileDirPath = 'C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src';

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
        if (componentInfo.dec && componentInfo.dec.title && componentInfo.dec.type) {
            if (componentInfo.inputArr.length > 0) {
                componentInfo.inputMarkTable = generateMDTable(['属性值', '描述', '类型', '默认值'], componentInfo.inputArr, ['key', 'dec', ['type', 'interfaceTypesLink'], 'default'])
            }
            if (componentInfo.outputArr.length > 0) {
                componentInfo.outputMarkTable = generateMDTable(['属性值', '描述', '类型'], componentInfo.outputArr, ['key', 'dec', 'type'])
            }
            const mdFileContent = getComponentMDByInfo(componentInfo);
            fs.writeFileSync(`./app/dist_json/${fileName}.json`, JSON.stringify(codeTree))
            fs.writeFileSync(`./app/dist_markdown/${fileName}.md`, mdFileContent)
            fs.writeFileSync(`./app/dist_html/${fileName}.html`, mdToHtml(mdFileContent))
            componentInfo.markdown = mdFileContent
            componentInfo.vuehtml = mdToVueHtml(mdFileContent)
            componentAllArr.push(componentInfo)
            console.log(fileName+'解析成功')
        }
    }
})

// 接口的md， html
const interFaceMd =  getInterFaceMdStr(interFaceAllArr);
fs.writeFileSync('./app/dist_json/interface.json', JSON.stringify(interFaceAllArr))
fs.writeFileSync(`./app/dist_markdown/interface.md`, interFaceMd)
fs.writeFileSync(`./app/dist_html/interface.html`,  mdToHtml(interFaceMd))


const nvaContet = [
    {
        dec: {
            type: 'interface',
            title: '数据模型'
        },
        vuehtml: mdToVueHtml(interFaceMd),
        markdown: interFaceMd,
        key: 'component-interface'
    },
    ...componentAllArr,
   
]
const {appComponent, componentData} = gettocRouterLink(nvaContet);
fs.writeFileSync('./app/dist_json/component.json', JSON.stringify(componentAllArr))
fs.writeFileSync(`./app/vue/data/appcomponent.data.js`, appComponent)
fs.writeFileSync(`./app/vue/data/componentdata.js`, componentData)

