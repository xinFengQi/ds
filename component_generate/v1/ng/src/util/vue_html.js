

const fs = require('fs');
const { type } = require('os');
const path = require('path')
const vuebaseUrl = './app/template';

/*
{
    dec: {
        type: 
        title:
    },
    vuehtml: 
}
*/
// 暂定二层
function gettocRouterLink(arr) {
    const indexRouterNavTel = fs.readFileSync(path.resolve(vuebaseUrl, './index.router.template')).toString();
    const indexRouterNavClickTel = fs.readFileSync(path.resolve(vuebaseUrl, './index.router_click.template')).toString();
    const dataComponentPath = fs.readFileSync(path.resolve(vuebaseUrl, './componentdata.component.template')).toString();

    const indexNavMap = {}
    let componentPathStr = ''
    arr.forEach(element => {
        const keys = element.key.replace(/-/g, '_');
        getNavTreeByType(element, indexNavMap)
        componentPathStr = componentPathStr + dataComponentPath.replace('{{{routerName}}}', keys).replace('{{{template}}}', element.vuehtml)
    });
    const dataTel = fs.readFileSync(path.resolve(vuebaseUrl, './componentdata.template')).toString();
    const componentDataStr = dataTel.replace('{{{componentInfo}}}', componentPathStr)
    return { indexHtml: getIndexHtml(getHtmlByNavtree(indexRouterNavTel, indexRouterNavClickTel, indexNavMap, 0)), componentData: componentDataStr }
}

// 根据nav树生成代码
function getHtmlByNavtree(indexRouterNavTel, indexRouterNavClickTel, tree, i) {
    i = i + 1;
    let str = ''
    for (const key in tree) {
        if (key !== '__value') {
            str = str + indexRouterNavClickTel.replace('{{{navLevel}}}', i).replace('{{{routername}}}', key) + '\n'
            str = str + getHtmlByNavtree(indexRouterNavTel, indexRouterNavClickTel, tree[key], i)
        }
    }
    console.log(Object.keys(tree))
    if (tree.__value) {
        tree.__value.forEach(t => {
            const keys = t.key.replace(/-/g, '_');
            str = str + indexRouterNavTel.replace('{{{navLevel}}}', i).replace('{{{router}}}', keys).replace('{{{routername}}}', t.dec.title) + '\n'
        })
    }

    return str
}


// 根据type生成nav树
function getNavTreeByType(item, typemap) {
    const typeArr = item.dec.type.split(':');
    let dataMap = { ...typemap }, outputDataMap = typemap, i = 0;
    let type = typeArr[i]
    for (i; i < typeArr.length; i++) {
        type = typeArr[i]
        if (dataMap.hasOwnProperty(type)) {
            dataMap = { ...dataMap[type] }
            outputDataMap = outputDataMap[type]
        } else {
            break;
        }
    }
    if (i === typeArr.length) {
        outputDataMap.__value.push(item)
    } else {
        if (type) {
            outputDataMap[type] = { __value: [] }
            outputDataMap[type].__value = [item]
        } else {
            if (outputDataMap.__value) {
                outputDataMap.__value.push(item)
            } else {
                outputDataMap.__value = [item]
            }
        }

    }
}

function getIndexHtml(toc) {
    const htmlTemplate = fs.readFileSync(path.resolve(vuebaseUrl, './index.template')).toString();
    return htmlTemplate.replace('{{{toc}}}', toc)
}


module.exports = {
    gettocRouterLink
}