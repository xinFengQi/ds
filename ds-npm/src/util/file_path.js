
const os = require('os');
const nodePath = require('path');

function osType() {
    if (os.type() == 'Windows_NT') {
        return 'windows'
    } else if (os.type() == 'Darwin') {
        return 'mac'
    } else if (os.type() == 'Linux') {
        return 'linux'
    } else {
        return null
    }
}



// 如果文件名需要进行拼接，则需要如此使用
function getExcPath(str) {
    const url = nodePath.resolve(__dirname, str)
    return url;
}


module.exports = {
    getExcPath
}