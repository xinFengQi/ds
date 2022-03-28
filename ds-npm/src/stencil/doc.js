
const fsExtra = require('fs-extra')
var yamlFront = require('yaml-front-matter');
const menu = ['基础', '布局', '交互', '表单', '文档', '工具'];

// 缓存文档目录
let lastDocsMenuStr = '';

// 生成目录
module.exports.generatorMenu = function (filename) {
    console.log('开始生成文件目录');
    fsExtra.ensureDirSync('./docs/.dstemp/docs');
    // 先去生成目录
    let _sidebarStr = '* [介绍](/readme.md)\n';
    // 解析文档目录
    _sidebarStr = _sidebarStr + generatorDocsMenu(filename)
    // 解析组件目录
    const componentMenu = generatorComponentMenu()
    _sidebarStr = _sidebarStr + componentMenu._sidebarStr;
    fsExtra.writeFileSync('./src/_sidebar.md', _sidebarStr)
    return componentMenu.docsJson;
}
// 解析文档目录
function generatorDocsMenu(filename) {
    if (filename) {
        return lastDocsMenuStr;
    }
    if (!fsExtra.existsSync('./docs')) {
        throw '必须存在docs目录, docs必须存在README.md文件'
    }
    if (!fsExtra.existsSync('./docs/README.md')) {
        throw 'docs必须存在README.md文件'
    }
    console.log('解析文档目录');
    let _sidebarStr = '';
    const dirs = fsExtra.readdirSync('./docs');
    const mds = [];
    dirs.forEach(dir => {
        const path = `./docs/${dir}`;
        if (fsExtra.statSync(path).isDirectory()) {
            return;
        }
        const content = yamlFront.loadFront(fsExtra.readFileSync(path));
        if (dir === 'README.md') {
            fsExtra.writeFileSync('./docs/.dstemp/README.md', content.__content);
        } else {
            fsExtra.writeFileSync(`./docs/.dstemp/docs/${dir}`, content.__content);
            mds.push({ name: dir, ...content, tag: dir });
        }
    })
    mds.sort((a, b) => {
        return a.order - b.order
    }).forEach(item => {
        _sidebarStr = _sidebarStr + `* [${item.name}](/docs/${item.tag}.md)\n`
    })
    lastDocsMenuStr = _sidebarStr;
    return _sidebarStr;
}

// 解析组件目录
function generatorComponentMenu() {
    let _sidebarStr = '';
    let docsJson = null;
    if (fsExtra.existsSync('./dist/docs.json')) {
        console.log('解析文档json数据')
        const docsAll = {
            '其他': []
        };
        docsJson = JSON.parse(fsExtra.readFileSync('./dist/docs.json').toString())
        docsJson.components.forEach(com => {
            const componentName = com.docsTags.find(v => v.name === 'componentName');
            if (!componentName) {
                return;
            }
            const componentType = com.docsTags.find(v => v.name === 'componentType');
            const docsPaths = `   * [${componentName ? componentName.text : com.tag}](/components/${com.tag}.md)\n`;
            if (!componentType) {
                docsAll['其他'].push(docsPaths);
            } else {
                if (docsAll[componentType.text]) {
                    docsAll[componentType.text].push(docsPaths)
                } else {
                    docsAll[componentType.text] = [docsPaths]
                }
            }
        })
        menu.forEach(v => {
            if (!docsAll[v].length) {
                return;
            }
            _sidebarStr = _sidebarStr + `* ${v}\n`
            docsAll[v].forEach(docPath => {
                _sidebarStr = _sidebarStr + docPath
            })
        })
    }
    return { docsJson, _sidebarStr }
}

// 生成文档
module.exports.generatorDocs = function (docsJson, filename) {
    fsExtra.ensureDirSync('./docs/.dstemp/components')
    if (!docsJson) {
        return;
    }
    docsJson.components.forEach(com => {
        if (filename && filename.indexOf(com.tag) < 0) {
            return;
        }
        let mdStr = com.readme;
        // 再次运行不会监听，所以需要自己读取
        if (filename) {
            console.log(filename, '===')
            const mdPath = './src' + '/' + filename.split(com.tag)[0] + com.tag + '/readme.md';
            if (fsExtra.existsSync(mdPath));
            const newMd = fsExtra.readFileSync(mdPath).toString().split('<!-- Auto Generated Below -->')[0].trim();
            if (newMd !== mdStr) {
                mdStr = newMd;
            }
        }
        const isLib = com.docsTags.find(v => v.name === 'lib');

        if (!isLib && com.props && com.props.length) {
            mdStr = generatorPropMd(mdStr, com)
        }

        // 生成事件
        if (!isLib && com.events && com.events.length) {
            mdStr = generatorEventMd(mdStr, com)
        }
        // 生成方法
        if (!isLib && com.methods && com.methods.length) {
            mdStr = generatorMethodMd(mdStr, com)
        }

        // lib 文档处理
        if (isLib) {
            let methodMap = {};
            if (com.methods && com.methods.length) {
                methodMap = { ...generatorLibSingleMethodMd(com) };
            }
            if (com.props && com.props.length) {
                com.props.forEach((prop) => {
                    if (!prop.isCheck) {
                        methodMap[prop.name] = generatorLibSinglePropMd(prop, true);
                    }
                })
            }
            Object.keys(methodMap).forEach(key => {
                mdStr = mdStr.replace(`<!-- ${key}信息 -->`, methodMap[key])
            })
        }
        fsExtra.writeFileSync(`./docs/.dstemp/components/${com.tag}.md`, mdStr)
    })
}


// 非lib的参数文档
function generatorPropMd(mdStr, com) {
    mdStr = mdStr + '\n\n## 属性\n'
    mdStr = mdStr + generatorDocsTable(
        [
            {
                header: '属性(Property)', value: (data) => {
                    return data.name + (data.required ? '(必填)' : '')
                }
            },
            { header: '属性(Attribute)', value: 'attr' },
            { header: '描述', value: 'docs' },
            {
                header: '类型', value: (data) => {
                    return data.values.map(v => {
                        return v.value ? v.value : v.type
                    }).join(' \\| ')
                }
            },
            { header: '默认值', value: 'default' },

        ], com.props
    )
    return mdStr;
}

// 非lib的事件文档
function generatorEventMd(mdStr, com) {
    mdStr = mdStr + '\n\n## 事件\n'
    mdStr = mdStr + generatorDocsTable(
        [
            { header: '事件名', value: 'event' },
            { header: '描述', value: 'docs' },
            { header: '类型', value: 'detail' },
        ], com.events
    )
    return mdStr;
}


// 非lib方法文档
function generatorMethodMd(mdStr, com) {
    mdStr = mdStr + '\n\n## 方法\n'
    com.methods.forEach(co => {
        mdStr = mdStr + `### ${co.signature}\n`;
        mdStr = mdStr + `${co.docs.replace(/\n/g, '   \n')}\n`;
        mdStr = mdStr + `#### 返回值\n`;
        mdStr = mdStr + `${co.returns.type}\n`;
    })
    return mdStr;
}

function generatorLibSingleMethodMd(com) {
    const methodMap = {};
    com.methods.forEach(co => {
        let str = '#### 注释信息\n' + `${co.docs.replace(/\n/g, '  \n')}\n`;
        str = str + '#### 异步方法\n';
        str = str + co.signature + '\n';
        const index = com.props.findIndex(v => v.name === co.name + 'Sync');
        if (index > -1) {
            com.props[index].isCheck = true;
            str = str + generatorLibSinglePropMd(com.props[index]);
        }
        methodMap[co.name] = str;
    })
    return methodMap;
}


function generatorLibSinglePropMd(prop, isSingle) {
    let str = '';
    if (isSingle) {
        str = str + '#### 注释信息\n' + `${prop.docs.replace(/\n/g, '  \n')}\n`;;
    }
    str = str + '#### 同步方法\n';
    str = str + prop.name + prop.type + '\n';
    return str;
}


// 生成表格
function generatorDocsTable(headers, datas) {
    const colMaxLength = [];
    headers.forEach(v => {
        let maxLength = getByteLen(v.header);
        datas.forEach(da => {
            let str = getPropValue(v.value, da);
            if (maxLength < getByteLen(str)) {
                maxLength = getByteLen(str);
            }
        })
        colMaxLength.push(maxLength);
    })

    let returnStr = '|';
    headers.forEach((header, i) => {
        returnStr = returnStr + addEmpty(header.header, colMaxLength[i]) + '|'
    })
    returnStr = returnStr + '\n|';
    headers.forEach((header, i) => {
        returnStr = returnStr + loopStr('-', colMaxLength[i]) + '|'
    })

    datas.forEach(da => {
        returnStr = returnStr + '\n|'
        headers.forEach((v, i) => {
            returnStr = returnStr + addEmpty(getPropValue(v.value, da), colMaxLength[i]) + '|'
        })
    })
    returnStr = returnStr + '\n';
    return returnStr;
}

// 从单个prop获取值
function getPropValue(key, data) {
    let valueStr = ''
    if (typeof key === 'string') {
        valueStr = data[key];
    }
    if (typeof key === 'function') {
        valueStr = key(data);
    }
    if (valueStr) {
        valueStr = '`' + valueStr + '`'
    }
    if (!valueStr) {
        valueStr = '--'
    }
    return valueStr
}

// 补空
function addEmpty(str, len) {
    if (getByteLen(str) >= len) {
        return str;
    }
    const strL = (len - getByteLen(str)) / 2;
    const halfEmpty = Math.floor(strL);
    const strs = loopStr(' ', halfEmpty)
    let returnStr = strs + str + strs;
    if (strL % 1 !== 0) {
        returnStr = returnStr + ' ';
    }
    return returnStr;
}
// 循环得到一个复制到字符串
function loopStr(str, len) {
    let getStr = '';
    for (let i = 0; i < len; i++) {
        getStr = getStr + str
    }
    return getStr;
}

// 获取长度，汉字算两个
function getByteLen(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        var length = val.charCodeAt(i);
        if (length >= 0 && length <= 128) {
            len += 1;
        }
        else {
            len += 2;
        }
    }
    return len;
}
