
// 代码启动进程
const { readDir, isTsOrJs } = require('./util/handler_file');
const { getCodeTreeByfile, getInterFaceAllByFile, getComponentAllByFile } = require('./util/babel_util');
const { mdToHtml, mdToVueHtml, getComponentMDByInfo, getInterFaceMdStr } = require('./util/marked_html')
const { generateMDTable } = require('./util/marked_html')
const { gettocRouterLink } = require('./util/vue_html');
const fs = require('fs-extra');
const path = require('path')

function getPath(str) {
    return path.resolve(__dirname,'../' ,str);
}

function generateMain(fileDirPath) {
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
                const componentDecMDA = path.resolve(path.dirname(file), `${fileName}.component.md`);
                const componentDecMDB = path.resolve(path.dirname(file), `${fileName}.component.md`);
                const readmeDecMD = path.resolve(path.dirname(file), `readme.md`);
                componentInfo.componentDecMD = ''
                if(fs.existsSync(componentDecMDA)) {
                    componentInfo.componentDecMD = componentInfo.componentDecMD + fs.readFileSync(componentDecMDA).toString() + '\n'
                }
                if(fs.existsSync(componentDecMDB)) {
                    componentInfo.componentDecMD = componentInfo.componentDecMD + fs.readFileSync(componentDecMDB).toString() + '\n'
                }
                if(fs.existsSync(readmeDecMD)) {
                    componentInfo.componentDecMD = componentInfo.componentDecMD + fs.readFileSync(readmeDecMD).toString() + '\n'
                }
                const mdFileContent = getComponentMDByInfo(componentInfo);
                fs.ensureFileSync(getPath(`./app/dist_json/${fileName}.json`))
                fs.writeFileSync(getPath(`./app/dist_json/${fileName}.json`), JSON.stringify(codeTree))
                fs.ensureFileSync(getPath(`./app/dist_markdown/${fileName}.md`))
                fs.writeFileSync(getPath(`./app/dist_markdown/${fileName}.md`), mdFileContent)
                fs.ensureFileSync(getPath(`./app/dist_html/${fileName}.html`))
                fs.writeFileSync(getPath(`./app/dist_html/${fileName}.html`), mdToHtml(mdFileContent))
                componentInfo.markdown = mdFileContent
                componentInfo.vuehtml = mdToVueHtml(mdFileContent)
                componentAllArr.push(componentInfo)
                console.log(fileName + '解析成功')
            }
        }
    })

    // 接口的md， html
    const interFaceMd = getInterFaceMdStr(interFaceAllArr);
    fs.ensureFileSync(getPath(`./app/dist_json/interface.json`))
    fs.writeFileSync(getPath('./app/dist_json/interface.json'), JSON.stringify(interFaceAllArr))
    fs.ensureFileSync(getPath(`./app/dist_markdown/interface.md`))
    fs.writeFileSync(getPath(`./app/dist_markdown/interface.md`), interFaceMd)
    fs.ensureFileSync(getPath(`./app/dist_html/interface.html`))
    fs.writeFileSync(getPath(`./app/dist_html/interface.html`), mdToHtml(interFaceMd))

    // 项目情况信息
    fs.ensureFileSync(getPath(`./README.md`));
    const currentReadmeMd = fs.readFileSync(getPath(`./README.md`)).toString();
    fs.ensureFileSync(`./README.md`);
    const projectReadmeMd = fs.readFileSync(`./README.md`).toString();
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
        {
            dec: {
                type: '项目总览',
                title: '工具文档介绍'
            },
            vuehtml: mdToVueHtml(currentReadmeMd),
            markdown: currentReadmeMd,
            key: '_dfb-ng-component'
        },
        {
            dec: {
                type: '项目总览',
                title: '项目文档介绍'
            },
            vuehtml: mdToVueHtml(projectReadmeMd),
            markdown: projectReadmeMd,
            key: '_project-readme'
        },
        
    ]
    const { appComponent, componentData } = gettocRouterLink(nvaContet);
    fs.ensureFileSync(getPath(`./app/dist_json/interface.json`))
    fs.writeFileSync(getPath('./app/dist_json/component.json'), JSON.stringify(componentAllArr))
    fs.ensureFileSync(getPath(`./app/vue/data/appcomponent.data.js`))
    fs.writeFileSync(getPath(`./app/vue/data/appcomponent.data.js`), appComponent)
    fs.ensureFileSync(getPath(`./app/vue/data/componentdata.js`))
    fs.writeFileSync(getPath(`./app/vue/data/componentdata.js`), componentData)
}

module.exports = {
    generateMain
}