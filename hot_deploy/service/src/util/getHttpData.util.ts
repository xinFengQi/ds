
// post取值
module.exports.getPostData = function (req: any) {
    return new Promise((resolve, reject) => {
        var array: any[]= [];
        req.on('data', function (chunk: any) {
            array.push(chunk);
        });
        req.on('end', function () {
            var postBody: any = Buffer.concat(array);
            postBody = postBody.toString('utf8');
            resolve(JSON.parse(postBody));
        });
    })
}



// 获取用户get提交的数据
module.exports.getGetData = function (req: { query: unknown; }) {
    return new Promise((resolve, reject) => {
        resolve(req.query)
    })
}