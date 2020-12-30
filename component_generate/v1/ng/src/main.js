
// 代码启动进程
const { readDir, isTsOrJs } = require('./util/handler_file');
const { getCodeTreeByfile, getInterFaceAllByFile, getComponentAllByFile } = require('./util/babel_util');
const { mdToHtml, mdToVueHtml, getComponentMDByInfo, getInterFaceMdStr } = require('./util/marked_html')
const { generateMDTable } = require('./util/marked_html')
const { gettocRouterLink } = require('./util/vue_html');

const fs = require('fs-extra');
const path = require('path')
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const ora = require('ora');


function getPath(str) {
    return path.resolve(__dirname, '../', str);
}

function generateMain(fileDirPath) {
    const timeHeader = new Date().getTime();
    fs.ensureDirSync(getPath(`./app${timeHeader}`))
    fs.copySync(getPath('app'), getPath(`./app${timeHeader}`))
    const files = readDir(fileDirPath)
    let interFaceAllArr = []
    let componentAllArr = []
    let spinnerStart = ora(`检索文件中...`).start();
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
                spinnerStart.succeed(`检索到${fileName}`)
                const spinner = ora(`正在解析${fileName}...`).start();
                if (componentInfo.inputArr.length > 0) {
                    componentInfo.inputMarkTable = generateMDTable(['属性值', '描述', '类型', '默认值'], componentInfo.inputArr, ['key', 'dec', ['type', 'interfaceTypesLink'], 'default'])
                }
                if (componentInfo.outputArr.length > 0) {
                    componentInfo.outputMarkTable = generateMDTable(['属性值', '描述', '类型'], componentInfo.outputArr, ['key', 'dec', 'type'])
                }
                const componentDecMDA = path.resolve(path.dirname(file), `${fileName}.component.md`);
                const componentDecMDB = path.resolve(path.dirname(file), `${fileName}.md`);
                const readmeDecMD = path.resolve(path.dirname(file), `readme.md`);
                componentInfo.componentDecMD = ''
                if (fs.existsSync(componentDecMDA)) {
                    componentInfo.componentDecMD = componentInfo.componentDecMD + fs.readFileSync(componentDecMDA).toString() + '\n'
                }
                if (fs.existsSync(componentDecMDB)) {
                    componentInfo.componentDecMD = componentInfo.componentDecMD + fs.readFileSync(componentDecMDB).toString() + '\n'
                }
                if (fs.existsSync(readmeDecMD)) {
                    componentInfo.componentDecMD = componentInfo.componentDecMD + fs.readFileSync(readmeDecMD).toString() + '\n'
                }
                const mdFileContent = getComponentMDByInfo(componentInfo);
                fs.ensureFileSync(getPath(`./app${timeHeader}/dist_json/${fileName}.json`))
                fs.writeFileSync(getPath(`./app${timeHeader}/dist_json/${fileName}.json`), JSON.stringify(codeTree))
                fs.ensureFileSync(getPath(`./app${timeHeader}/dist_markdown/${fileName}.md`))
                fs.writeFileSync(getPath(`./app${timeHeader}/dist_markdown/${fileName}.md`), mdFileContent)
                fs.ensureFileSync(getPath(`./app${timeHeader}/dist_html/${fileName}.html`))
                fs.writeFileSync(getPath(`./app${timeHeader}/dist_html/${fileName}.html`), mdToHtml(mdFileContent))
                componentInfo.markdown = mdFileContent
                componentInfo.vuehtml = mdToVueHtml(mdFileContent)
                componentAllArr.push(componentInfo)
                spinner.succeed(`${fileName}解析成功`);
                spinnerStart = ora(`检索文件中...`).start();
            }
        }
    })
    spinnerStart.succeed(`检索到完成`)
    // 接口的md， html
    const spinner1 = ora(`正在解析接口数据模型解析...`).start();
    const interFaceMd = getInterFaceMdStr(interFaceAllArr);
    fs.ensureFileSync(getPath(`./app${timeHeader}/dist_json/interface.json`))
    fs.writeFileSync(getPath(`./app${timeHeader}/dist_json/interface.json`), JSON.stringify(interFaceAllArr))
    fs.ensureFileSync(getPath(`./app${timeHeader}/dist_markdown/interface.md`))
    fs.writeFileSync(getPath(`./app${timeHeader}/dist_markdown/interface.md`), interFaceMd)
    fs.ensureFileSync(getPath(`./app${timeHeader}/dist_html/interface.html`))
    fs.writeFileSync(getPath(`./app${timeHeader}/dist_html/interface.html`), mdToHtml(interFaceMd))
    spinner1.succeed(`接口数据模型解析成功`);

    // 项目情况信息
    const spinner2 = ora(`正在生成编译文件...`).start();
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
    fs.ensureFileSync(getPath(`./app${timeHeader}/dist_json/interface.json`))
    fs.writeFileSync(getPath(`./app${timeHeader}/dist_json/component.json`), JSON.stringify(componentAllArr))
    fs.ensureFileSync(getPath(`./app${timeHeader}/vue/data/appcomponent.data.js`))
    fs.writeFileSync(getPath(`./app${timeHeader}/vue/data/appcomponent.data.js`), appComponent)
    fs.ensureFileSync(getPath(`./app${timeHeader}/vue/data/componentdata.js`))
    fs.writeFileSync(getPath(`./app${timeHeader}/vue/data/componentdata.js`), componentData)

    // 在当前执行目录下生成编译文件
    fs.emptyDirSync('./dfb_dist')
    fs.copySync(getPath(`./app${timeHeader}`), './dfb_dist')
    fs.removeSync(getPath(`./app${timeHeader}`))
    spinner2.succeed(`生成编译文件成功`);

}


const testPath = 'C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src'


generateMain(testPath)

module.exports = {
    generateMain
}