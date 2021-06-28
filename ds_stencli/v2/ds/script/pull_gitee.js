console.log('读取打包文件')
const fs = require('fs-extra');
const request = require('request')


// 获取stencli.config.ts的打包位置
const distPath = './dist/book';


const isExtraDist = fs.existsSync(distPath);
if (!isExtraDist) {
    throw '找不到打包文件'
}
console.log('找到打包文件')
// bug1: 同名组件会覆盖掉

// 连接gitee

const gitOwner = 'dongfubao'
const gitRepo = 'ct';
const access_token = 'e9694199cc954120b37d5d449a56a752';

// 根据pagejson获取获取文件夹信息
const pageJsonData = JSON.parse(fs.readFileSync('./package.json').toString())

// const gitPath = 'component' + '/'+pageJsonData.name + '/' + pageJsonData.version

const gitPath = 'Stencli';

function pathFomate(path) {
    return path.replace(/\//g, '%2F')
}


const taskInfos = [
    [{
        fun: deleteDirPath,
        arg: [gitPath]
    }],
    [{ fun: uploadDir, arg: [distPath, gitPath] }]
]

deleteDirPathNext(0, taskInfos[0], taskInfos);

function deleteDirPathNext(time, taskInfo, taskInfos) {
    if (taskInfo.length > 0) {
        const funInfo = taskInfo.shift();
        funInfo.fun.apply(this, [...funInfo.arg,taskInfo, taskInfo]).then(da => {
            deleteDirPathNext(time, taskInfo, taskInfos)
        })
    } else {
        time = time + 1;
        console.log(`第${time}个任务结束`)
        if(taskInfos[time]) {
            taskInfo = taskInfos[time];
            taskInfo[0].arg.push(taskInfo)
            deleteDirPathNext(time, taskInfo, taskInfos)
        }
    }
}



function deleteDirPath(path, taskInfo) {
    return new Promise((resolve, reject) => {
        // 获取仓库下路径信息
        const getPathInfoUrl = `https://gitee.com/api/v5/repos/${gitOwner}/${gitRepo}/contents/${pathFomate(path)}?access_token=${access_token}`;
        request(getPathInfoUrl, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                console.log(error, response)
                console.log(path + '获取文件路径信息失败！！！')
                resolve(true)
                return
            }
            body = JSON.parse(body)
            if (Array.isArray(body)) {
                body.forEach(da => {
                    if (da.type === 'file') {
                        taskInfo.push({ fun: deleteFilePath, arg: [da.path, da.sha] })
                    } else {
                        taskInfo.push({ fun: deleteDirPath, arg: [da.path] })
                    }
                })
            } else {
                taskInfo.push({ fun: deleteFilePath, arg: [body.path, body.sha] })
            }
            resolve(true)
        });
    })

}

function deleteFilePath(path, sha) {
    return new Promise((resolve, reject) => {

        // 删除gitee相对组件文件夹
        const detelePathUrl = `https://gitee.com/api/v5/repos/${gitOwner}/${gitRepo}/contents/${pathFomate(path)}?access_token=${access_token}&sha=${sha}&message=delete`;
        request({
            url: detelePathUrl,
            method: 'DELETE'
        }, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                console.log(path + '删除文件失败！！！')
                taskInfo.push({ fun: deleteFilePath, arg: [path, sha, next] })
                resolve(true)
                return;
            }
            resolve(true)
            console.log(path + '删除文件成功！！！')

        });
    });

}


// 上传组件文件夹进入gitee
function uploadDir(path, gitPath, taskInfo) {
    return new Promise((resolve, reject) => {
        const distPathInfo = fs.statSync(path);
        if (distPathInfo.isDirectory()) {
            const dirs = fs.readdirSync(path);
            dirs.forEach(dir => {
                uploadDir(path + '/' + dir, gitPath + '/' + dir, taskInfo)
            })
        } else {
            taskInfo.push({ fun: uploadFile, arg: [path, gitPath] })
        }
        resolve(true)
    })

}

function uploadFile(path, gitPath) {
    return new Promise((resolve, reject) => {
        // 上传文件
        const formData = {
            content: fs.readFileSync(path).toString('base64'),
            access_token,
            message: '上传'
        };
        let options = {
            method: 'POST',
            url: `https://gitee.com/api/v5/repos/${gitOwner}/${gitRepo}/contents/${pathFomate(gitPath)}`,
            headers: { 'Content-Type': 'multipart/form-data' },
            formData: formData
        };
        request(options, function (error, response, body) {
            if (error || response.statusCode !== 201) {
                console.log(body)
                console.log(path + '上传文件失败！！！')
                resolve(true)
                return;
            }
            resolve(true)
            console.log(path + '上传文件成功！！！')
        });
    })

}
