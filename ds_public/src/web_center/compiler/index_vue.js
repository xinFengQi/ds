/*
 * @Date: 2021-03-22 09:07:16
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-22 16:41:04
 */
const fs = require('fs')
const nodePath = require('path')
const beautify = require('js-beautify');
// 测试成页面数

const pageJson = JSON.parse(fs.readFileSync(nodePath.resolve(__dirname, './mock_data/file_list/page.json')));

if (!pageJson.id) {
    throw "页面必须要设置id"
}
const u = pageJson.id;
let i = 0;

outputObj = {
    // 页面html结构
    componentHtmlStr: '',
}

pageJson.childres ? pageJson.childres.forEach(js => {
    generatePageDom(js, outputObj)
}) : null



const templateStr = fs.readFileSync(nodePath.resolve(__dirname, `./template/index_vue.html`)).toString()
const replaceKey = {
    title: pageJson.title,
    pageId: u,
    htmldata: outputObj.componentHtmlStr,
    state: fs.readFileSync(nodePath.resolve(__dirname, './mock_data/file_list/state.json')).toString()
}
const indexHtmlData = replaceStr(templateStr, replaceKey)

fs.writeFileSync(nodePath.resolve(__dirname, `./mock_data/${pageJson.id}_vue.html`), beautify.html(indexHtmlData))

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
        if (domJson.value.isReactive) {
            outputObj.componentHtmlStr = `${outputObj.componentHtmlStr}\n{{${domJson.value.value}}}\n`
        } else {
            outputObj.componentHtmlStr = `${outputObj.componentHtmlStr}\n${domJson.value.value}\n`
        }
    }
}

// 生成DOM树结构
function generatePageOne(domJson, outputObj) {
    const propertys = []

    // 初始化属性及事件
    const domProperty = domJson.property;
    const domEvents = domJson.events;
    const domDirectives = domJson.directives;

    // 处理属性
    domProperty ? Object.keys(domProperty).forEach(property => {
        const pro = domProperty[property];
        if (pro.isStore) {
            propertys.push(`v-bind:${property}="${pro.value}"`)
        } else {
            let va = pro.value;
            if (typeof (va) === 'string') {
                propertys.push(`${property}="${va}"`)
                va = `'${pro.value}'`
            } else {

            }
        }
    }) : null;
    // 处理事件
    domDirectives ? Object.keys(domDirectives).forEach(ev => {
        const pro = domDirectives[ev];
        propertys.push(`${ev}="${pro}"`)
    }) : null;
    // 处理指令  v-for v-if等
    domEvents ? Object.keys(domEvents).forEach(ev => {
        const pro = domEvents[ev];
        propertys.push(`v-on:${ev}="${pro}"`)
    }) : null;
    // 初始化页面
    const id = u + '_' + (i++)
    outputObj.componentHtmlStr = `${outputObj.componentHtmlStr}
                                        <${domJson.name} id="${domJson.id ? domJson.id : id}" ${propertys.join(' ')}>`

}


// 处理文本替换
function replaceStr(str, replaceKey) {
    return str.replace(/{{(.+)}}/g, (origin, groupOne) => {
        return replaceKey[groupOne] || origin;
    })
}
