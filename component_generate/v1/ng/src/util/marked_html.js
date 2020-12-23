const marked = require('marked')


// 将接口数组生产md文档字符串
function getInterFaceMdStr(interFaceAllArr) {
    let inFaceStr = '';
    interFaceAllArr.forEach(
        str => {
            if (str.dec || str.name) {
                inFaceStr = `${inFaceStr}## ${str.name}\n`
                inFaceStr = `${inFaceStr}### ${str.dec ? str.dec : ''}\n`
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


function generateMDTable(tableHeaderArr, data, dataKeyArr) {
    let str = `| ${tableHeaderArr.join(` | `)} |\n`;
    str = str + tableHeaderArr.reduce((s, a) => {
        if(s === tableHeaderArr[0]) {
            return `| :----: | :----:`
        }
        return s + `| :----: `
    }) + ` |\n`
    data.forEach(item => {
        str = str + `| ${dataKeyArr.map(v => {
            if(item[v]) {
               return item[v].replace(/\|/g, '&#124;').replace(/\n/g, '<br>')
            } else {
                return ''
            }
        }).join(` | `)} | \n`
    })
    return str;
}


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
    content = content.replace(/</g, '&lt')
    return  createTemplate().replace('{{{content}}}', marked(content))
}

function mdToHtml(content) {
    content = content.replace(/</g, '&lt')
    return  createHtmlTemplate().replace('{{{content}}}', marked(content))
}



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
        <div>
            <article class="markdown-body">
                {{{content}}}
            </article>  
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