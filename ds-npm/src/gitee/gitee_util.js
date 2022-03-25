// 路径编码
module.exports.pathFomate = (path) => {
    return encodeURIComponent(path)
}

// 去除路径前面的./ 或者 /
module.exports.giteePathHandler =  (path) => {
    if (path.startsWith('/')) {
        return path.replace('/', '');
    }
    if (path.startsWith('./')) {
        return path.replace('./', '');
    }
    return path;
}