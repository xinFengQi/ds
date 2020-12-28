const marked = require('marked')
const rendererMD = new marked.Renderer();


// 将接口数组生产md文档字符串
function getInterFaceMdStr(interFaceAllArr) {
    let inFaceStr = '';
    interFaceAllArr.forEach(
        str => {
            if (str.name) {
                inFaceStr = `${inFaceStr}## ${str.name}\n`
            }
            if (str.dec) {
                inFaceStr = `${inFaceStr}注释: \n`
                inFaceStr = inFaceStr + '```javascript\n'
                inFaceStr = inFaceStr + str.dec.replace(/\*/g, '') + '\n'
                inFaceStr = inFaceStr + '```\n\n'
            }
            if (str.filePath) {
                inFaceStr = `${inFaceStr}来源地址: ${str.filePath}\n`
            }
            if (str.type) {
                str.code = `${str.type} ${str.code}`;
            }
            inFaceStr = inFaceStr + '```javascript\n'
            inFaceStr = inFaceStr + str.code.replace(/\n\n/g, '\n') + '\n'
            inFaceStr = inFaceStr + '```\n\n'
        }
    )
    return inFaceStr
}

// 生成表格
function generateMDTable(tableHeaderArr, data, dataKeyArr) {
    let str = `| ${tableHeaderArr.join(` | `)} |\n`;
    str = str + tableHeaderArr.reduce((s, a) => {
        if (s === tableHeaderArr[0]) {
            return `| :----: | :----:`
        }
        return s + `| :----: `
    }) + ` |\n`
    data.forEach(item => {
        str = str + `| ${dataKeyArr.map(v => {
            if (typeof (v) === 'string') {
                return item[v].replace(/\|/g, '&#124;').replace(/</g, '&lt;').replace(/\n/g, '<br />')
            } else if (v instanceof Array && v.length == 2) {
                let outStr = item[v[0]].replace(/\|/g, '&#124;').replace(/</g, '&lt;').replace(/\n/g, '<br/>');
                item[v[1]].forEach(s => {
                    const link = encodeURI(`component_interface?id=${s}`)
                    const strRoutLink = `<router-link :to="'${link}'">` + s + '</router-link>'
                    outStr = outStr.replace(s, strRoutLink)
                })
                return outStr
            }
            return ''
        }).join(` | `)} | \n`
    })
    return str;
}

// 生成组件信息
function getComponentMDByInfo(componentInfo) {
    let str = '';
    str = str + '## ' + componentInfo.dec.title + '\n\n'
    str = str + '## ' + componentInfo.key + '\n\n'
    if (componentInfo.inputMarkTable) {
        str = str + '### Input属性\n\n'
        str = str + componentInfo.inputMarkTable + '\n\n'
    }
    if (componentInfo.outputMarkTable) {
        str = str + '### Output属性\n\n'
        str = str + componentInfo.outputMarkTable + '\n\n'
    }

    return str;
}




function mdToVueHtml(content) {
    // content = content.replace(/</g, '&lt')
    let tocNav = '';
    rendererMD.heading = function (text, level) {
        tocNav = tocNav + `<a @click="scrollIdTop('${text}')" class="nav${level} right_nav">${text}</a>`;
        return `<h${level} @click="scrollTop($event)" id="${text}">${text}</h${level}>`
    }
    const markedStr = marked(content, { renderer: rendererMD });
    const outPutStr = createTemplate().replace('{{{content}}}', markedStr).replace('{{{nav}}}', tocNav)
    return outPutStr
}

function mdToHtml(content) {
    content = content.replace(/</g, '&lt')
    return createHtmlTemplate().replace('{{{content}}}', marked(content, { renderer: rendererMD }))
}


// 普通markdown转为html
function createHtmlTemplate() {
    const template = `<!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8" >
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>md文件转html页面</title>
        <style>
            .markdown-body {
                box-sizing: border-box;
                min-width: 200px;
                max-width: 980px;
                margin: 0 auto;
                padding: 45px;
            }
            @media (max-width: 767px) {
                .markdown-body {
                    padding: 15px;
                }
            }
        </style>
        <link rel="stylesheet" href="../resource/purple/purple.css">
        </head>
        <body>
            <article class="markdown-body">
                {{{content}}}
            </article>  
        </body>
    </html>`;
    return template;
}

function createTemplate() {
    const template = `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    {{{content}}}
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    {{{nav}}}
                </article>  
            </div>
        </div>`;
    return template;
}

module.exports = {
    getInterFaceMdStr,
    mdToHtml,
    mdToVueHtml,
    generateMDTable,
    getComponentMDByInfo
}