const fs = require('fs')
const parser = require('@babel/parser').parse;
const generate = require('@babel/generator')
const traverse = require('@babel/traverse');


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

// 获取描述，注释
function getDec(node, line) {
    let leadingComments = '';
    if (node.leadingComments) {
        leadingComments = node.leadingComments.map(v => v.value).join(';')
    }
    let trailingComments = '';
    if (node.trailingComments) {
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
            if (isFirst) {
                if (path.node.leadingComments) {
                    componentInfo.dec = path.node.leadingComments[0].value.replace(/\*/g, '')
                        .split('\r\n').map(v => v.trim())
                        .filter(s => s && s.length > 0)
                        .map(v => {
                            const ar = v.split(':').map(p => p.trim())
                            return { [ar[0]]: ar.slice(1, ar.length).join(':') }
                        }).reduce((a, b) => {
                            return { ...a, ...b }
                        })
                }
                componentInfo.filePath = file;
                componentInfo.inputArr = [];
                componentInfo.outputArr = [];
                isFirst = false;
            }
        },
        // 进入类的属性节点
        ClassProperty: (path) => {
            const node = path.node;
            if (node.decorators && node.decorators[0].expression) {
                if (node.decorators[0].expression.callee.name === 'Input') {
                    componentInfo.inputArr.push({
                        key: node.key.name,
                        dec: getDec(node, node.loc.start.line).trim(),
                        type: getParamsType(node),
                        default: getParamsDefaultValue(node)
                    })
                } else if (node.decorators[0].expression.callee.name === 'Output') {
                    componentInfo.outputArr.push({
                        key: node.key.name,
                        dec: getDec(node, node.loc.start.line).trim(),
                        type: getParamsType(node)
                    })
                }

            }
        },
        // 进入类的描述节点___查询providers
        ClassDeclaration: (path) => {
            const componentDecoratorArgs = path.node.decorators.filter(s => s.expression.callee.name === 'Component')[0]
            if (componentDecoratorArgs) {
                const componentProviders = componentDecoratorArgs.expression.arguments[0].properties.filter(s => s.key.name === 'providers')[0]
                if (componentProviders) {
                    const providersMap = componentProviders.value.elements.map(s => s.properties.map(p => {
                        return {
                            key: p.key.name,
                            value: generate.default(p.value).code
                        }
                    }))
                    // componentInfo.componentProviders = providersMap
                    const providersArr = providersMap.map(ss => ss.filter(pp => pp.key === 'provide').map(pp => pp.value)).join(',').split(',')
                    if (providersArr.includes('NG_VALUE_ACCESSOR')) {
                        componentInfo.inNgModel = true;
                        componentInfo.inputArr.push({
                            key: `[(ngModel)]`,
                            dec: '双向绑定的值，可做表单组件',
                            type: 'any',
                            default: ''
                        })
                        componentInfo.outputArr.push({
                            key: 'ngModelChange',
                            dec: '双向绑定值变化事件',
                            type: 'EventEmitter<any>',
                        })
                    }
                }
            }
        }
    })
    return componentInfo;
}

// 获取参数类型
function getParamsType(node) {
    let type = '';
    if (node.typeAnnotation) {
        type = node.typeAnnotation.typeAnnotation.type
    } else {
        if (node.value) {
            type = node.value.type
        }
    }
    return switchType(type, node);
}

function switchType(type, node) {
    let outType = '';
    const outTypeArr = []
    function byGenerate(node) {
        const typeValue = { ...node.typeAnnotation };
        return generate.default(typeValue).code.replace(':', '').trim()
    }
    switch (type) {
        case 'ArrowFunctionExpression':
            {
                const typeValue = { ...node.value };
                delete typeValue['body']
                outType = 'Function:' + generate.default(typeValue).code.replace('=>', '').trim()
            }
            break;
        case 'TSUnionType':
            {
                const typeValue = { ...node.typeAnnotation.typeAnnotation }
                if (typeValue.types) {
                    typeValue.types.forEach(s => {
                        outTypeArr.push(s.literal.value ? s.literal.value : "''")
                    })
                }
                outType = outTypeArr.join('|')
            }
            break;
        case 'TSTypeReference':
            outType = byGenerate(node)
            break;
        case 'TSArrayType':
            outType = byGenerate(node)
            break;
        case 'TSTypeLiteral':
            outType = byGenerate(node)
            break;
        case 'NewExpression':
            {
                outType = node.value.callee.name
                break;
            }
        case 'TSStringKeyword':
            outType = 'string';
            break;
        case 'TSBooleanKeyword':
            outType = 'boolean';
            break;
        case 'StringLiteral':
            outType = 'string';
            break;
        case 'BooleanLiteral':
            outType = 'boolean';
            break;
        case 'TSAnyKeyword':
            outType = 'any';
            break;
        default: {
            outType = type
        }
    }
    return outType
}



// 获取参数默认值
function getParamsDefaultValue(node) {
    if (node.value) {
        return generate.default(node.value).code
    } else {
        return ''
    }
}



module.exports = {
    getCodeTreeByfile,
    getInterFaceAllByFile,
    getComponentAllByFile
}