/*
 *  样板文件中心
 *  样板名， 样板文件地址， 对比json替换
 */

const { api, apiMenu, getRequestData, returnJSON, io } = require('../util/getway_express');

const { addDB, getDBByKey, deleteDBByKey, getDB, updateDBByKey } = require('../db/dbUtil');
const nodePtah = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');
const { fileToZip } = require('./util_zip');
const uuid = require('uuid');


@apiMenu({ name: 'templateOperate', dec: '模板中心的http服务' })
class templateOperateHttp {

    // 获取样板内容
    @api({
        url: '/templateOperate/file',
        type: 'post',
        dec: '获取样板文件',
        resParam: [
            {
                field: 'templateName',
                dec: '模版名',
                require: true,
                type: 'string',
                default: 'test1'
            },
            {
                field: 'replaceKey',
                dec: '需要模版替换的值',
                require: true,
                type: 'object',
                default: {}
            },
        ]
    })
    async getTemplateOperateFile(req, res) {
        const handlerData = await handlerTemplateOperate(req, res);
        if (!handlerData) {
            return;
        }
        const { copyDir, dir, data } = handlerData;
        fs.mkdirSync(copyDir);
        const returnObject = handlerFileOrFloder(dir, data.replaceKey, copyDir);
        // 处理文件/文件夹，生成文件或者压缩包 传送到后端
        if (!returnObject.dir) {
            res.json(returnJSON.fail({ message: '未生成文件' }))
        }
        const copyDirPath = copyDir + '/' + returnObject.dir;
        const copyDirInfoIsFile = fs.statSync(copyDirPath).isFile();
        let fileStream = null;
        let zipPath = null;
        if (copyDirInfoIsFile) {
            fileStream = fs.createReadStream(copyDirPath)
        } else {
            zipPath = await fileToZip(copyDir + '.zip', copyDir)
            fileStream = fs.createReadStream(zipPath)
        }
        fileStream.pipe(res);
        fileStream.on('end', () => {
            if (zipPath) {
                // 删除缓存的压缩文件
                fsExtra.removeSync(zipPath)
            }
            // 删除生产的缓存文件夹
            fsExtra.removeSync(copyDir + '/' + returnObject.dir)
            fsExtra.rmdirSync(copyDir)
        })
    }



    // 获取样板文件
    @api({
        url: '/templateOperate',
        type: 'post',
        dec: '获取样板文件',
        resParam: [
            {
                field: 'templateName',
                dec: '模版名',
                require: true,
                type: 'string',
                default: 'test1'
            },
            {
                field: 'replaceKey',
                dec: '需要模版替换的值',
                require: true,
                type: 'object',
                default: {}
            },
        ]
    })
    async getTemplateOperate(req, res) {
        const handlerData = await handlerTemplateOperate(req, res);
        const returnObject = handlerFileOrFloder(handlerData.dir, handlerData.data.replaceKey, null);
        handlerData ? res.json(returnJSON.success(returnObject)) : null
    }



}



// 模版操作的接口处理
async function handlerTemplateOperate(req, res) {
    const data = await getRequestData.getPostData(req);
    if (!data.templateName || !data.replaceKey) {
        res.json(returnJSON.error({ message: '参数缺少' }))
        return null;
    }
    const templateInfo = getDBByKey('templateData', 'data', 'templateName', data.templateName)[0]
    if (!templateInfo) {
        res.json(returnJSON.fail({ message: '此模版不存在' }))
        return null;
    }
    if (!!!templateInfo.fliePath) {
        res.json(returnJSON.fail({ info: templateInfo, message: '提供的模版地址不存在，请检查此模版信息' }))
        return null;
    }
    const dir = nodePtah.resolve(__dirname, templateInfo.fliePath);
    if (!fs.existsSync(dir)) {
        res.json(returnJSON.fail({ info: templateInfo, message: '提供的模版地址不存在，请检查文件是否存在' }))
        return null;
    }
    return { copyDir: nodePtah.resolve(__dirname, 'temp', uuid.v1()), dir, data };
}


// 处理文件或者处理文件夹
function handlerFileOrFloder(dir, replaceKey, copyDir) {
    const isFile = fs.statSync(dir).isFile();
    const originDir = dir.split(nodePtah.sep).pop();
    const ouputObj = { dir: '', str: '', childrens: [] }
    ouputObj.dir = replaceStr(originDir, replaceKey)
    if (isFile) {
        ouputObj.str = replaceStr(fs.readFileSync(dir) + ' ', replaceKey)
        if (copyDir) {
            const writerPath = nodePtah.resolve(copyDir, ouputObj.dir);
            fsExtra.ensureDirSync(copyDir)
            fs.writeFileSync(writerPath, ouputObj.str)
        }
    } else {
        // 是文件夹，存在递归
        const dirs = fs.readdirSync(dir);
        dirs.forEach(fi => {
            const copyDirData = copyDir ? (copyDir + '/' + ouputObj.dir) : null
            ouputObj.childrens.push(handlerFileOrFloder(dir + '/' + fi, replaceKey, copyDirData))
        })
    }
    return ouputObj;
}


// 处理文本替换
function replaceStr(str, replaceKey) {
    return str.replace(/{{(.+)}}/g, (origin, groupOne) => {
        return replaceKey[groupOne] || origin;
    })
}
