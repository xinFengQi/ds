

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
function gettocRouterLink(arr) {
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
    console.log(indexNavMap)
    return { appComponent: getAppComponent(indexNavMap), componentData: componentDataStr }
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

function getAppComponent(navData) {
    const htmlTemplate = fs.readFileSync(path.resolve(vuebaseUrl, './appcomponent.template')).toString();
    return htmlTemplate.replace('{{{navDatas}}}', JSON.stringify(navData))
}


module.exports = {
    gettocRouterLink
}