

const fs = require('fs');
const path = require('path')
const vuebaseUrl = './app/template';

/*
{
    dec: {
        type: 
        title:
    },
    vuehtml: 
    key:
}
*/
function gettocRouterLink(arr) {
    const dataComponentPath = fs.readFileSync(path.resolve(vuebaseUrl, './componentdata.component.template')).toString();
    const indexNavMap = {}
    let componentPathStr = ''
    arr.forEach(element => {
        const keys = element.key.replace(/-/g, '_');
        getNavTreeByType(element, indexNavMap)
        const htmlStr = element.vuehtml.replace(/`/g, '\'').replace(/\\/g, '/')
        const markdown = element.markdown.replace(/`/g, '\'').replace(/\\/g, '/')
        componentPathStr = componentPathStr + dataComponentPath.replace('{{{routerName}}}', keys)
                                                               .replace('{{{template}}}', htmlStr)
                                                               .replace('{{{markdown}}}', markdown)
                                                               .replace('{{{idxName}}}', element.dec.title)
    });
    const dataTel = fs.readFileSync(path.resolve(vuebaseUrl, './componentdata.template')).toString();
    const componentDataStr = dataTel.replace('{{{globalName}}}', 'component').replace('{{{componentInfo}}}', componentPathStr)
    const appComponentDataStr = dataTel.replace('{{{globalName}}}', 'appComponentNavData').replace('{{{componentInfo}}}', JSON.stringify(indexNavMap))
    return { appComponent: appComponentDataStr, componentData: componentDataStr }
}


// 根据type生成nav树
function getNavTreeByType(item, typemap) {
    if (!item.dec.type) {
        return
    }
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
    const keys = item.key.replace(/-/g, '_');
    if (i === typeArr.length) {
        outputDataMap.__value.push({ title: item.dec.title, key: keys, link: '/' + keys })
    } else {
        if (type) {
            outputDataMap[type] = { __value: [] }
            outputDataMap[type].__value = [{ title: item.dec.title, key: keys, link: '/' + keys }]
        } else {
            if (outputDataMap.__value) {
                outputDataMap.__value.push({ title: item.dec.title, key: keys, link: '/' + keys })
            } else {
                outputDataMap.__value = [{ title: item.dec.title, key: keys, link: '/' + keys }]
            }
        }

    }
}



module.exports = {
    gettocRouterLink
}