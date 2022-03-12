// 路径编码
export function pathFomate(path) {
    return encodeURIComponent(path)
}

// 去除路径前面的./ 或者 /
export function giteePathHandler(path) {
    if (path.startsWith('/')) {
        return path.replace('/', '');
    }
    if (path.startsWith('./')) {
        return path.replace('./', '');
    }
    return path;
}