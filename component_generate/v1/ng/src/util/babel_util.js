const fs = require('fs')
const parser = require('@babel/parser').parse;
const traverse = require('@babel/traverse');
const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');


// 通过文件生成AST
function getCodeTreeByfile(filePath) {
    const str = fs.readFileSync(filePath).toString();
    const outstr = parser(str, {
        sourceType: "module",
        plugins: [
            "typescript",
            "decorators-legacy",
            "classProperties"
        ]
    });
    return outstr;
}

// 得到接口，通过文件
function getInterFaceAllByFile(codeTree, file) {
    const insterFaceMap = [];
    let a = {}
    traverse.default(codeTree, {
        // 是否存在导出
        ExportNamedDeclaration: (path) => {
            a.type = 'export';
            if (path.node.leadingComments) {
                a.dec = path.node.leadingComments.map(v => v.value).join(';')

            };
        },
        // 进入接口节点
        TSInterfaceDeclaration: (path) => {
            const node = path.node;
            const interFaceName = node.id.name;
            let inputData = {}
            if (path.node.leadingComments) {
                inputData.dec = path.node.leadingComments.map(v => v.value).join(';');
            }
            inputData = {
                ...inputData,
                name: interFaceName,
                code: path.toString(),
                ...a,
                filePath: file,
            }
            insterFaceMap.push(inputData)
            a = {}
        }
    })
    return insterFaceMap;
}

function getDec(node, line) {
    let leadingComments = '';
    if(node.leadingComments){
        leadingComments = node.leadingComments.map(v => v.value).join(';')
    }
    let trailingComments = '';
    if(node.trailingComments){
        trailingComments = node.trailingComments.filter(s => s.loc.start.line === line).map(v => v.value).join(';')
    }
    return leadingComments + trailingComments;
}

// 得到组件，通过文件
function getComponentAllByFile(codeTree, file) {
    const componentInfo = {};
    let isFirst = true
    traverse.default(codeTree, {
        // 取出组件第一个描述
        ImportDeclaration: (path) => {
            if(isFirst) {
                if(path.node.leadingComments) {
                    componentInfo.dec =  path.node.leadingComments[0].value;
                }
                componentInfo.filePath = file;
                componentInfo.inputArr = [];
                componentInfo.outputArr = [];
                isFirst = false;
            }
        },
        // 进入接口节点
        ClassProperty: (path) => {
          const node = path.node;
          if(node.decorators && node.decorators[0].expression) {
              if(node.decorators[0].expression.callee.name === 'Input') {
                componentInfo.inputArr.push({
                    key: node.key.name,
                    dec: getDec(node, node.loc.start.line)
                })
              } else if( node.decorators[0].expression.callee.name === 'Output') {
                componentInfo.outputArr.push({
                    key: node.key.name,
                    dec: getDec(node, node.loc.start.line)
                })
              }
            
          }
        } 
    })
    return componentInfo;
}

// 将接口数组生产md文档字符串
function getInterFaceMdStr(interFaceAllArr) {
    let inFaceStr = '';
    interFaceAllArr.forEach(
        str => {
            if (str.dec || str.name) {
                inFaceStr = `${inFaceStr}### ${str.dec ? str.dec : ''}_${str.name}\n`
            }
            if (str.filePath) {
                inFaceStr = `${inFaceStr}来源地址: ${str.filePath}\n`
            }
            if (str.type) {
                str.code = `${str.type} ${str.code}`;
            }
            inFaceStr = inFaceStr + '```javascript\n'
            inFaceStr = inFaceStr + str.code + '\n'
            inFaceStr = inFaceStr + '```\n\n'
        }
    )
    return inFaceStr
}

module.exports = {
    getCodeTreeByfile,
    getInterFaceAllByFile,
    getInterFaceMdStr,
    getComponentAllByFile
}