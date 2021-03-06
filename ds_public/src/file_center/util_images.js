// const images = require('images');
const fs = require('fs');
const fsExtra = require('fs-extra');
const nodePath = require('path');
const useLib = '';
let sharp = '';
if (useLib === 'sharp') {
    sharp = require('sharp');
}
let images = ''
if (useLib === 'images') {
    images = require('images')
}




function handlerNumber(width, height) {
    return isNaN(width) || isNaN(height)
}

// 获取文件名-通过原来名字加后缀形成
function getFileName(path, poxfix) {
    const paths = nodePath.normalize(path).split(nodePath.sep).map(v => v);
    const pathsLen = paths.length;
    const names = paths[pathsLen - 1].split('.');
    const namesLen = names.length;
    const reqturnPath = paths.slice(0, pathsLen - 1).join('/') + '/' + names.slice(0, namesLen - 1).join('.') + poxfix + '.' + names[namesLen - 1];
    return { fileName: reqturnPath };
}

// 获取水印应该加到原图片哪里-距离直接取了10像素
async function getLocationXYSharp(location, image, imageLogo) {
    const { width, height } = await image.metadata();
    const logoMete = await imageLogo.metadata();
    const widthLogo = logoMete.width;
    const heightLogo = logoMete.height;
    let returnData = [10, 10];
    switch (location) {
        case 'bottomRight':
            returnData = [width - widthLogo - 10, height - heightLogo - 10];
            break;
        case 'bottom':
            returnData = [(width - widthLogo) / 2, height - heightLogo - 10];
            break;
        case 'bottomLeft':
            returnData = [10, height - heightLogo - 10];
            break;
    }
    return returnData;
}



function getLocationXY(location, image, imageLogo) {
    const [width, height] = [image.width(), image.height()];
    const [widthLogo, heightLogo] = [imageLogo.width(), imageLogo.height()];
    let returnData = [10, 10];
    switch (location) {
        case 'bottomRight':
            returnData = [width - widthLogo - 10, height - heightLogo - 10];
            break;
        case 'bottom':
            returnData = [(width - widthLogo) / 2, height - heightLogo - 10];
            break;
        case 'bottomLeft':
            returnData = [10, height - heightLogo - 10];
            break;
    }
    return returnData;
}
// 添加水印
function addlogo(path, logoPath, location = 'bottomRight') {
    if (!fs.existsSync(path)) {
        return { isSuccess: false, message: '原始文件不存在' };
    }
    if (!fs.existsSync(logoPath)) {
        return { isSuccess: false, message: 'logo文件不存在' };
    }
    const image = images(path);
    const imageLogo = images(logoPath);
    const locationArr = getLocationXY(location, image, imageLogo);
    const { fileName } = getFileName(path, '_logo')
    const returnImage = image.draw(imageLogo, locationArr[0], locationArr[1]).save(fileName, { quality: 50 });
    return { isSuccess: true, logo: true, image: returnImage, filePath: fileName };
}


// 添加水印-sharp库
async function addLogoSharp(path, logoPath, location = 'bottomRight') {
    if (!fs.existsSync(path)) {
        return { isSuccess: false, message: '原始文件不存在' };
    }
    if (!fs.existsSync(logoPath)) {
        return { isSuccess: false, message: 'logo文件不存在' };
    }
    const image = await sharp(path);
    const imageLogo = await sharp(logoPath);
    const locationArr = await getLocationXYSharp(location, image, imageLogo);
    console.log(locationArr)
    const { fileName } = getFileName(path, '_logo')
    const returnImage = await image.composite([{
        input: logoPath,
        top: locationArr[0],
        left: locationArr[1],
    }]).toFile(fileName);
    return { isSuccess: true, image: returnImage, filePath: fileName };
}
// 普通裁剪
function tailorPic(path, width, height) {
    width = Number(width);
    height = Number(height);

    if (handlerNumber(width, height)) {
        return { isSuccess: false, message: '宽度或者高度数据无法解析' };
    }
    if (!fs.existsSync(path)) {
        return { isSuccess: false, message: '原始文件不存在' };
    }
    const image = images(path);
    const { fileName } = getFileName(path, '_' + width + '_' + height)
    const zipSize = width > height ? width : height;
    const returnImage = images(image.size(zipSize), 0, 0, width, height).save(fileName, { quality: 50 });
    // const returnImage = image.size(zipSize).save(fileName, { quality: 50 });
    return { isSuccess: true, size: `${width}_${height}`, image: returnImage, filePath: fileName };
}


// 普通裁剪-sharp库
async function tailorPicSharp(path, width, height) {
    width = Number(width);
    height = Number(height);
    if (handlerNumber(width, height)) {
        return { isSuccess: false, message: '宽度或者高度数据无法解析' };
    }
    if (!fs.existsSync(path)) {
        return { isSuccess: false, message: '原始文件不存在' };
    }
    const image = await sharp(path);
    const { fileName } = getFileName(path, '_' + width + '_' + height)
    const zipSize = width > height ? width : height;
    const returnImage = await image.resize(zipSize, zipSize, { fit: 'fill' }).extract({ left: 0, top: 0, width, height }).toFile(fileName);
    return { isSuccess: true, image: returnImage, filePath: fileName };
}


// 压缩图片及放大照片
function zipPic(path, width, height) {
    width = Number(width);
    height = Number(height);
    if (handlerNumber(width, height)) {
        return { isSuccess: false, message: '宽度或者高度数据无法解析' };
    }
    if (!fs.existsSync(path)) {
        return { isSuccess: false, message: '原始文件不存在' };
    }
    const image = images(path);
    const { fileName } = getFileName(path, '_' + width + '-' + height)
    const returnImage = image.size(width, height).save(fileName, { quality: 50 });
    return { isSuccess: true, size: `${width}-${height}`, image: returnImage, filePath: fileName };
}

// 压缩图片及放大照片-sharp库
async function zipPicSharp(path, width, height) {
    width = Number(width);
    height = Number(height);
    if (handlerNumber(width, height)) {
        return { isSuccess: false, message: '宽度或者高度数据无法解析' };
    }
    if (!fs.existsSync(path)) {
        return { isSuccess: false, message: '原始文件不存在' };
    }
    const image = await sharp(path);
    const { fileName } = getFileName(path, '_' + width + '-' + height)
    const returnImage = await image.resize(width, height, { fit: 'fill' }).toFile(fileName);
    return { isSuccess: true, image: returnImage, filePath: fileName };
}



const SupportType = "png" | "jpg" | "gif" | "bmp" | "raw" | "webp";

function isSupportType(type) {
    return SupportType.includes(type);
}


let moduleExport = null;

if (useLib === 'sharp') {
    moduleExport = {
        addlogo: addLogoSharp,
        tailorPic: tailorPicSharp,
        zipPic: zipPicSharp,
        isSupportType
    }
}

if (useLib === 'images') {
    moduleExport = {
        addlogo,
        tailorPic,
        zipPic,
        isSupportType
    }
}

module.exports = moduleExport;