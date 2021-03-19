/*
 * @Date: 2021-03-15 14:31:24
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-19 15:58:15
 */

const fs = require('fs')
const nodePath = require('path')
const uuid = require('uuid');
// 测试成页面数

const pageJson =  JSON.parse(fs.readFileSync(nodePath.resolve(__dirname,  './mock_data/页面树.json')));
const u = uuid.v1();
let i = 0;

outputObj = {
    componentHtmlStr:'',
}

generatePageDom(pageJson, outputObj)

console.log(outputObj);

fs.writeFileSync(nodePath.resolve(__dirname,  './mock_data/index.html'), outputObj.componentHtmlStr)

function generatePageDom(domJson, outputObj) {
    const type = domJson.type
    if(type === 'ds' || type === 'h5') {
        const propertys = [];
        const id = u + (i++)
        outputObj.componentHtmlStr = `${outputObj.componentHtmlStr}
                                        <${domJson.name} id="${id}"  ${propertys.join(' ')} >`
        if(domJson.childres && domJson.childres.length > 0) {
            domJson.childres.forEach(dom => {
                generatePageDom(dom, outputObj)
            })
        }
        outputObj.componentHtmlStr = `${outputObj.componentHtmlStr}\n</${domJson.name}>`
    } else if(type === 'text') {
        outputObj.componentHtmlStr = `${outputObj.componentHtmlStr}\n${domJson.value.value}\n`
    }
}