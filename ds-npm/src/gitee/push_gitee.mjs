import fs from 'fs-extra';
import request from 'request';


let gitOwner = 'dongfubao'
let gitRepo = 'ct';
let access_token = 'e9694199cc954120b37d5d449a56a752';

function setConfig(token, repo, owner) {
    gitOwner = owner;
    gitRepo = repo;
    access_token = token;
}


//distPath 获取上传的文件位置
// gitPath 上传的位置
// deleteGitPath 需要删除的文件， 为空就是全删除
function giteeDirUpload(distPath, gitPath, deleteGitPath) {
    console.log({
        gitOwner,
        gitRepo,
        access_token
    })
    const isExtraDist = fs.existsSync(distPath);
    if (!isExtraDist) {
        throw `找不到上传文件;上传文件地址:${distPath}`
    }
    console.log('找到上传文件地址')
    // bug1: 同名组件会覆盖掉
    // 连接gitee
    const deleteGitPaths = (deleteGitPath && deleteGitPath.length) ? deleteGitPath : null;
    if (deleteGitPaths && !Array.isArray(deleteGitPaths)) {
        throw "deleteGitPath配置必须是数组"
    }
    const taskInfos = [
        [{
            fun: deleteDirPath,
            arg: [gitPath, deleteGitPaths]
        }],
        [{ fun: uploadDir, arg: [distPath, gitPath] }]
    ]

    deleteDirPathNext(0, taskInfos[0], taskInfos);

}

function pathFomate(path) {
    return path.replace(/\//g, '%2F')
}


function deleteDirPathNext(time, taskInfo, taskInfos) {
    if (taskInfo.length > 0) {
        const funInfo = taskInfo.shift();
        funInfo.fun.apply(this, [...funInfo.arg, taskInfo]).then(da => {
            deleteDirPathNext(time, taskInfo, taskInfos)
        })
    } else {
        time = time + 1;
        console.log(`第${time}个任务结束`)
        if (taskInfos[time]) {
            taskInfo = taskInfos[time];
            taskInfo[0].arg.push(taskInfo)
            deleteDirPathNext(time, taskInfo, taskInfos)
        }
    }
}



function deleteDirPath(path, deleteGitPaths, taskInfo) {
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
                    if (deleteGitPaths) {
                        const index = deleteGitPaths.findIndex(pat => da.path.startsWith(pat))
                        if (index < 0) {
                            return;
                        }
                    }

                    if (da.type === 'file') {
                        taskInfo.push({ fun: deleteFilePath, arg: [da.path, da.sha] })
                    } else {
                        taskInfo.push({ fun: deleteDirPath, arg: [da.path, deleteGitPaths] })
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
    console.log(access_token, gitOwner, gitRepo, gitPath)
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


export { setConfig, giteeDirUpload }