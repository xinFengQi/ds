/*
 * @Date: 2021-03-06 09:16:26
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-06 17:10:34
 */

/*
 * 文件中心思想
 *  1. 上传分为三个文件夹，temp，upload, file,  其中file未来作为开发固定的文件夹，不算业务文件夹 上传要选择使用自动命名及使用原名
 */

const { api, apiMenu, getRequestData, returnJSON, io } = require('../util/getway_express');

const { addDB, getDBByKey, deleteDBByKey, getDB, updateDBByKey } = require('../db/dbUtil');

const multiparty = require('multiparty')
const fsExtra = require('fs-extra');
const fs = require('fs');
const nodepath = require('path');

require('./template_operate');
const imagesUtil = require('./util_images');

const tempPath = nodepath.resolve(__dirname, 'temp').replace(nodepath.sep === '/' ? /\//g : /\\/g, '/')
const uploadPath = nodepath.resolve(__dirname, 'upload')
const logoPath = nodepath.resolve(__dirname, 'png/logo.png');
fsExtra.ensureDirSync(uploadPath);
fsExtra.ensureDirSync(tempPath);

// 表单的上传——不分片
function formDataUpload(form, req, res, isPic) {
    form.parse(req, async (err, fields, files) => {
        if (err) {
            res.json(returnJSON.fail({ message: err }))
            return;
        }
        const returnArr = [];
        for (const key in files) {
            if (Object.hasOwnProperty.call(files, key)) {
                await handlerFiles(files[key], returnArr, isPic, fields);
            }
        }
        res.json(returnJSON.success({ paths: returnArr }))
    })
}

// 处理文件
async function handlerFiles(element, returnArr, isPic, fields) {

    for (let index = 0; index < element.length; index++) {
        const file = element[index];
        const { fieldName, originalFilename, path, size } = file;
        if (!originalFilename) {
            return;
        }
        const { type } = getRequestData.getUrlPathData(originalFilename)

        const normalizePath = nodepath.normalize(path).replace(nodepath.sep === '/' ? /\//g : /\\/g, '/');
        const returnPath = normalizePath.split(tempPath).pop();
        const returnJSON = {
            originalFilename,
            path: returnPath,
            fields
        };
        returnJSON.type = type;
        if (imagesUtil && isPic) {
            await handlerImage(returnJSON, fields, fieldName, path)
        }
        if (!imagesUtil && isPic) {
            returnJSON.handlerPic = '服务器暂时不能二次处理图片';
        }
        returnArr.push(returnJSON)
    }
}

// 处理经过处理的图片的信息
function handlerFile(da) {
    if (da.image) {
        delete da.image
    }
    if (da.filePath) {
        da.filePath = da.filePath.split(tempPath).pop();
    }
}

// 处理图片，进行二次操作
async function handlerImage(returnJSON, fields, fieldName, path) {
    returnJSON.handlerPic = []
    const operate = fields[fieldName] || []
    const isLogo = operate.includes('logo');
    if (isLogo) {
        const da = await imagesUtil.addlogo(path, logoPath);
        handlerFile(da);
        returnJSON.handlerPic.push(da);
    }
    const operateSize = operate.filter(s => s !== 'logo');
    for (let index = 0; index < operateSize.length; index++) {
        const op = operateSize[index];
        const opCut = op.split('_');
        const opZip = op.split('-');
        let da = { isSuccess: false, message: '操作数据无法解析' };
        if (opCut.length === 2) {
            da = await imagesUtil.tailorPic(path, opCut[0], opCut[1]);
        } else if (opZip.length === 2) {
            da = await imagesUtil.zipPic(path, opZip[0], opZip[1]);
        }
        if (isLogo && da.filePath) {
            da = await imagesUtil.addlogo(da.filePath, logoPath);
        }
        handlerFile(da);
        returnJSON.handlerPic.push(da);
    }
}



@apiMenu({ name: 'fileCenter', dec: '文件中心的服务' })
class fileCenterHttp {


    //表单—— 图片上传事件，允许待操作命令
    @api({
        url: '/fileCenter/picUpload/**',
        type: 'post',
        dec: 'formdata图片上传,可设置水印及剪切，压缩，以同键值的数组获取操作如a: file,  a: ["logo", "200_300", "200-300"]',
    })
    async picUpload(req, res) {
        const orginUrlData = getRequestData.getUrlPathData(req.originalUrl, 2);
        try {
            var form = new multiparty.Form();
            form.encoding = 'utf-8';
            const saveFilePath = nodepath.resolve(tempPath, orginUrlData.path);
            fsExtra.ensureDirSync(saveFilePath)
            form.uploadDir = saveFilePath;
            formDataUpload(form, req, res, true);
        } catch (error) {
            res.json(returnJSON.fail({ message: '出现意外错误', error }))

        }

    }

    //表单——文件上传事件，
    @api({
        url: '/fileCenter/upload/**',
        type: 'post',
        dec: 'formdata图片上传,可设置水印及剪切，压缩，以同键值的数组获取操作如a: file,  a: ["logo", "200_300", "200-300"]',
    })
    async upload(req, res) {
        const orginUrlData = getRequestData.getUrlPathData(req.originalUrl, 2);
        try {
            var form = new multiparty.Form();
            form.encoding = 'utf-8';
            const saveFilePath = nodepath.resolve(tempPath, orginUrlData.path);
            fsExtra.ensureDirSync(saveFilePath)
            form.uploadDir = saveFilePath;
            formDataUpload(form, req, res, false);
        } catch (error) {
            res.json(returnJSON.fail({ message: '出现意外错误', error }))
        }

    }

    //文件——下载
    @api({
        url: '/fileCenter/download/**',
        type: 'get',
        dec: '下载文件',
    })
    async downloadFile(req, res) {
        const orginUrlData = getRequestData.getUrlPathData(req.originalUrl, 2);
        const { path } = orginUrlData;
        let range = req.headers["range"];
        let p = '';
        if(path === 'temp' || path === 'file' || path.startsWith('temp/') || path.startsWith('file/')) {
            p = nodepath.resolve(__dirname, path)
        } else {
            p = nodepath.resolve(uploadPath, path)
        }
        if (!fs.existsSync(p)) {
            res.json(returnJSON.fail({ message: '不存在此文件或者文件夹' }))
            return;
        }
        if(fs.statSync(p).isDirectory()) {
            res.json(returnJSON.success({ dirs: fs.readdirSync(p).map(v => path+'/'+v) }))
            return;
        }
        // 存在 range 请求头将返回范围请求的数据
        if (range) {
            // 获取范围请求的开始和结束位置
            let [, start, end] = range.match(/(\d*)-(\d*)/);
            // 错误处理
            let statObj = null;
            try {
                statObj = fs.statSync(p);
            } catch (e) {
                res.end("Not Found");
            }
            // 文件总字节数
            let total = statObj.size;
            // 处理请求头中范围参数不传的问题
            start = start ? parseInt(start) : 0;
            end = end ? parseInt(end) : total - 1;
            // 响应客户端
            res.statusCode = 206;
            res.setHeader("Accept-Ranges", "bytes");
            res.setHeader("Content-Range", `bytes ${start}-${end}/${total}`);
            fs.createReadStream(p, {
                start,
                end
            }).pipe(res);
        } else {
            // 没有 range 请求头时将整个文件内容返回给客户端
            fs.createReadStream(p).pipe(res);
        }


    }




}