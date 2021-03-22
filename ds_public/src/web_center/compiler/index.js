/*
 * @Date: 2021-03-15 14:31:24
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-22 16:41:49
 */
const fs = require('fs')
const nodePath = require('path')
const beautify = require('js-beautify');
// 测试成页面数

const pageJson = JSON.parse(fs.readFileSync(nodePath.resolve(__dirname, './mock_data/页面树.json')));

if (!pageJson.id) {
    throw "页面必须要设置id"
}
const u = pageJson.id;
let i = 0;

outputObj = {
    // 页面html结构
    componentHtmlStr: '',
    // dom结构的属性的初始化及初始化监听
    componentPropertyInit: ''

}

pageJson.childres ? pageJson.childres.forEach(js => {
    generatePageDom(js, outputObj)
}) : null




const templateStr = fs.readFileSync(nodePath.resolve(__dirname, './template/index.html')).toString()
const replaceKey = {
    title: pageJson.title,
    htmldata: outputObj.componentHtmlStr,
    initPageData: outputObj.componentPropertyInit,
    state: fs.readFileSync(nodePath.resolve(__dirname, './mock_data/状态树.json')).toString()
}
const indexHtmlData = replaceStr(templateStr, replaceKey)

fs.writeFileSync(nodePath.resolve(__dirname, './mock_data/index.html'), beautify.html(indexHtmlData))

// 递归页面树json，生成各种数据
function generatePageDom(domJson, outputObj) {
    const type = domJson.type
    if (type === 'ds' || type === 'h5') {
        generatePageOne(domJson, outputObj);
        if (domJson.childres && domJson.childres.length > 0) {
            domJson.childres.forEach(dom => {
                generatePageDom(dom, outputObj)
            })
        }
        outputObj.componentHtmlStr = `${outputObj.componentHtmlStr}\n</${domJson.name}>`
    } else if (type === 'text') {
        outputObj.componentHtmlStr = `${outputObj.componentHtmlStr}\n${domJson.value.value}\n`
    }
}

// 生成DOM树结构
function generatePageOne(domJson, outputObj) {
    // 初始化页面
    const id = u + '_' + (i++)
    outputObj.componentHtmlStr = `${outputObj.componentHtmlStr}
                                        <${domJson.name} id="${id}">`

    // 初始化属性及事件
    outputObj.componentPropertyInit = `${outputObj.componentPropertyInit}const ${id} = document.getElementById('${id}');`
    const domProperty = domJson.property;
    const domEvents = domJson.events;
    Object.keys(domProperty).forEach(property => {
        const pro = domProperty[property];
        const idpropertyVar = `${id}.${property}`
        if (pro.isStore) {
            outputObj.componentPropertyInit = `${outputObj.componentPropertyInit}${idpropertyVar}=store.storeGet('${pro.value}');`
            outputObj.componentPropertyInit = `${outputObj.componentPropertyInit}store.on('${pro.value}', (value) => {${idpropertyVar} = value});`
        } else {
            let va = pro.value;
            if (typeof (pro.value) === 'string') {
                va = `'${pro.value}'`
            }
            outputObj.componentPropertyInit = `${outputObj.componentPropertyInit}${idpropertyVar}=${va};`
        }
    })
    Object.keys(domEvents).forEach(ev => {
        const pro = domEvents[ev];
        const idEvVar = `${id}.${ev}`
        outputObj.componentPropertyInit = `${outputObj.componentPropertyInit}${idEvVar}=${pro};`

    })
}


// 处理文本替换
function replaceStr(str, replaceKey) {
    return str.replace(/{{(.+)}}/g, (origin, groupOne) => {
        return replaceKey[groupOne] || origin;
    })
}
