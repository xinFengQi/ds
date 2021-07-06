const fs = require('fs')
const parser = require('@babel/parser').parse;
const generate = require('@babel/generator')
const traverse = require('@babel/traverse');
const codeFrameColumns = require('@babel/code-frame');


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

lastDecArr = []
// 获取描述，注释
function getDec(node, line) {
    let leadingComments = '';
    if (node.leadingComments) {
        leadingComments = node.leadingComments.filter(v => !lastDecArr.includes(v)).map(v => v.value).join(';')
    }
    lastDecArr = [];
    let trailingComments = '';
    if (node.trailingComments) {
        lastDecArr = node.trailingComments.filter(s => s.loc.start.line === line);
        trailingComments = lastDecArr.map(v => v.value).join(';')
    }
    return leadingComments + trailingComments;
}

componentInfotype = false;
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
            componentInfotype = false
            if (node.decorators && node.decorators[0].expression) {
                if (node.decorators[0].expression.callee && node.decorators[0].expression.callee.name === 'Input') {
                    componentInfo.inputArr.push({
                        key: node.key.name,
                        dec: getDec(node, node.loc.start.line).trim(),
                        type: getParamsType(node),
                        interfaceTypesLink: [],
                        default: getParamsDefaultValue(node)
                    })
                    componentInfotype = true;
                } else if (node.decorators[0].expression.callee && node.decorators[0].expression.callee.name === 'Output') {
                    componentInfo.outputArr.push({
                        key: node.key.name,
                        dec: getDec(node, node.loc.start.line).trim(),
                        type: getParamsType(node),
                    })
                }

            }
        },
        TSTypeReference: (path) => {
            if(componentInfotype && componentInfo.inputArr.length > 0) {
                componentInfo.inputArr[ componentInfo.inputArr.length-1].interfaceTypesLink.push(path.node.typeName.name);
            }
        },
        // 进入类的描述节点___查询providers
        ClassDeclaration: (path) => {
            if (!path.node.decorators) {
                return
            }
            const componentDecoratorArgs = path.node.decorators.filter(s => s.expression.callee.name === 'Component')[0]
            if (componentDecoratorArgs) {
                const componentProviders = componentDecoratorArgs.expression.arguments[0].properties.filter(s => s.key.name === 'providers')[0]
                if (componentProviders) {
                    const providersMap = componentProviders.value.elements.map(s => {
                        if (s.properties) {
                            return s.properties.map(p => {
                                return {
                                    key: p.key.name,
                                    value: generate.default(p.value).code
                                }
                            })
                        } else {
                            return []
                        }
                    })
                    // componentInfo.componentProviders = providersMap
                    const providersArr = providersMap.map(ss => ss.filter(pp => pp.key === 'provide').map(pp => pp.value)).join(',').split(',')
                    if (providersArr.includes('NG_VALUE_ACCESSOR')) {
                        componentInfo.inNgModel = true;
                        componentInfo.inputArr.push({
                            key: `[(ngModel)]`,
                            dec: '双向绑定的值，可做表单组件',
                            type: 'any',
                            interfaceTypesLink: [],
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
                outType = 'Function' + generate.default(typeValue).code.replace('=>', '').trim()
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
        case 'TSArrayType':
        case 'TSTypeLiteral':
            outType =  byGenerate(node);
            break;
        case 'NewExpression':
            {
                outType = node.value.callee.name
                break;
            }
        case 'StringLiteral':
        case 'TSStringKeyword':
            outType = 'String';
            break;
        case 'TSBooleanKeyword':
            outType = 'Boolean';
            break;
        case 'BooleanLiteral':
            outType = 'Boolean';
            break;
        case 'TSAnyKeyword':
            outType = 'Any';
            break;
        case 'NumericLiteral':
            outType = 'Number';
            break;
        case 'ArrayExpression':
            outType = 'Array';
            break;
        default:
            outType = type
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