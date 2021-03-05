// const images = require('images');
const fs = require('fs');
// const sharp = require('sharp');
const images = require('images')


// 获取文件名-通过原来名字加后缀形成
function getFileName(path, poxfix) {
    const paths = path.split('/');
    const pathsLen = paths.length;
    const names = paths[pathsLen - 1].split('.');
    const namesLen = names.length;
    return paths.slice(0, pathsLen - 1).join('/') + '/' + names.slice(0, namesLen - 1).join('.') + poxfix + '.' + names[namesLen - 1];
}

// // 获取水印应该加到原图片哪里-距离直接取了10像素
// async function getLocationXYSharp(location, image, imageLogo) {
//     const { width, height } = await image.metadata();
//     const logoMete = await imageLogo.metadata();
//     const widthLogo = logoMete.width;
//     const heightLogo = logoMete.height;
//     let returnData = [10, 10];
//     switch (location) {
//         case 'bottomRight':
//             returnData = [width - widthLogo - 10, height - heightLogo - 10];
//             break;
//         case 'bottom':
//             returnData = [(width - widthLogo) / 2, height - heightLogo - 10];
//             break;
//         case 'bottomLeft':
//             returnData = [10, height - heightLogo - 10];
//             break;
//     }
//     return returnData;
// }


// // 添加水印-sharp库
// async function addLogoSharp(path, logoPath, location = 'bottomRight') {
//     if (!fs.existsSync(path)) {
//         return { isSuccess: false, message: '原始文件不存在' };
//     }
//     if (!fs.existsSync(logoPath)) {
//         return { isSuccess: false, message: 'logo文件不存在' };
//     }
//     const image = await sharp(path);
//     const imageLogo = await sharp(logoPath);
//     const locationArr = getLocationXYSharp(location, image, imageLogo);
//     const fileName = getFileName(path, '_logo')
//     const returnImage = await image.overlayWith(imageLogo, { top: locationArr[0], left: locationArr[1] }).toFile(fileName);
//     return { isSuccess: true, image: returnImage, filePath: fileName };
// }

// // 普通裁剪-sharp库
// async function tailorPicSharp(path, width, height) {
//     if (!fs.existsSync(path)) {
//         return { isSuccess: false, message: '原始文件不存在' };
//     }
//     const image = await sharp(path);
//     const fileName = getFileName(path, '_' + width + '_' + height)
//     const zipSize = width > height ? width : height;
//     const returnImage = await image.resize(zipSize, zipSize, { fit: 'fill' }).extract({ left: 0, top: 0, width, height }).toFile(fileName);
//     return { isSuccess: true, image: returnImage, filePath: fileName };
// }



// // 压缩图片及放大照片-sharp库
// async function zipPicSharp(path, width, height) {
//     if (!fs.existsSync(path)) {
//         return { isSuccess: false, message: '原始文件不存在' };
//     }
//     const image = await images(path);
//     const fileName = getFileName(path, '_' + width + '_' + height)
//     const returnImage = await image.resize(width, height, { fit: 'fill' }).toFile(fileName);
//     return { isSuccess: true, image: returnImage, filePath: fileName };
// }

// function getSupportTypeSharp() {
//     return [];
// }
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
    const fileName = getFileName(path, '_logo')
    const returnImage = image.draw(imageLogo, locationArr[0], locationArr[1]).save(fileName, { quality: 50 });
    return { isSuccess: true, image: returnImage, filePath: fileName };
}

// 普通裁剪
function tailorPic(path, width, height) {
    if (!fs.existsSync(path)) {
        return { isSuccess: false, message: '原始文件不存在' };
    }
    const image = images(path);
    const paths = path.split('/');
    const pathsLen = paths.length;
    const fileName = getFileName(path, '_' + width + '_' + height)
    const zipSize = width > height ? width : height;
    const returnImage = images(image.size(zipSize), 0, 0, width, height).save(fileName, { quality: 50 });
    return { isSuccess: true, image: returnImage, filePath: fileName };
}



// 压缩图片及放大照片
function zipPic(path, width, height) {
    if (!fs.existsSync(path)) {
        return { isSuccess: false, message: '原始文件不存在' };
    }
    const image = images(path);
    const fileName = getFileName(path, '_' + width + '_' + height)
    const returnImage = image.size(width, height).save(fileName, { quality: 50 });
    return { isSuccess: true, image: returnImage, filePath: fileName };
}

function getSupportType(){
    return images.SupportType;
}


module.exports = {
    addlogo,
    tailorPic,
    zipPic,
    getSupportType,
    // addLogoSharp,
    // tailorPicSharp,
    // zipPicSharp,
    // getSupportTypeSharp
}