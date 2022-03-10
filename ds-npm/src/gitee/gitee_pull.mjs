import fs from 'fs-extra';
import request from 'request';
import nodePath from 'path'
import { pathFomate, giteePathHandler } from './gitee_util.mjs';
import md5 from 'md5'

let gitOwner = 'semonstrate'
let gitRepo = 'demonstrate_storage';
let access_token = '16cf2bb0ab7fa12779bfec47f2c3ee9a';

function setConfig(token, repo, owner) {
    gitOwner = owner;
    gitRepo = repo;
    access_token = token;
}


// 执行的任务队列

const taskInfos = [];
const allPath = [];



/**
 * 
 * 1. 下载保存的路径，远程的git的路径，及不下载的文件路径做为参数
 * 2. 读取到git路径的sha,然后递归获取所有目录，通过过滤生成任务对列
 * 3. 全部下载到缓存目录下面，以token+repo的md5值子目录，sha值加上文件名为名字
 * 4. 根据任务队列去下载，如果缓存中有，则不调用接口下载，如果没有或sha值不同，则下载更新
 * 5. 任务结束进行文件复制操作
 * 
 */


 giteeDirDownload('./test_forde', 'lib')


// distPath 获取下载的位置
// gitPath git上文件的位置
// filterGitPath 需要过滤的文件，这些文件或文件夹不需要下载
function giteeDirDownload(distPath, gitPath, filterGitPath) {
    console.log({
        gitOwner,
        gitRepo,
        access_token
    })
    // bug1: 同名文件会覆盖
    const filterGitPaths = (filterGitPath && filterGitPath.length) ? filterGitPath : null;
    if (filterGitPaths && !Array.isArray(filterGitPaths)) {
        throw "filterGitPath配置必须是数组"
    }
    if (filterGitPaths) {
        filterGitPath = filterGitPath.map(v => giteePathHandler(v));
    }
    const frontGitPaths = gitPath.split('/');
    frontGitPaths.pop();
    const frontGitPath = giteePathHandler(pathFomate(frontGitPaths.join('/')));
    getMenuSha(frontGitPath, distPath, gitPath, filterGitPath)

}

//  获取下载目录的sha值
function getMenuSha(frontGitPath, distPath, gitPath, filterGitPath) {
    const getPathInfoUrl = `https://gitee.com/api/v5/repos/${gitOwner}/${gitRepo}/contents/${frontGitPath}?access_token=${access_token}`;
    // 获取目录所在的sha值
    request(getPathInfoUrl, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            console.log(gitPath + '获取文件路径信息失败！！！')
            throw error
        }
        body = JSON.parse(body);
        const item = body.find(v => v.path === giteePathHandler(gitPath));
        if (!item) {
            throw '远程不存在文件'
        }
        loopAllTree(item.sha, distPath, filterGitPath)
    });
}


// 递归获取所有的路径
function loopAllTree(sha, distPath, filterGitPath) {
    const allTreePath = `https://gitee.com/api/v5/repos/${gitOwner}/${gitRepo}/git/trees/${sha}?access_token=${access_token}&recursive=1`;
    request(allTreePath, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            console.log('递归获取文件路径信息失败！！！')
            throw error
        }
        const allTree = JSON.parse(body).tree;
        const url = new URL('../../.dstemp', import.meta.url).toString().replace('file:///', '');
        allTree.forEach(tree => {
            // console.log(tree)
            if (tree.type !== 'blob') {
                return;
            }
            const singleTempath = `${url}/${encodeURIComponent(tree.sha)}/${tree.path}`;
            if (fs.existsSync(singleTempath)) {
                pushTaskInfo(cacheCopyFile, singleTempath, tree.sha, filterGitPath, null)
            } else {
                pushTaskInfo(downloadFile, singleTempath, tree.sha, filterGitPath, tree.path)
            }
        })
        taskInfosExtuce(0, taskInfos, distPath)
    });
}

// 根据过滤条件看是否进入下载对接
function pushTaskInfo(fun, distPath, gitPathSha, filterGitPath, treePath) {
    if (filterGitPath && (filterGitPath.includes(treePath) || filterGitPath.findIndex(v => treePath.startsWith(v)) > -1)) {
        return;
    }
    taskInfos.push({
        fun: fun,
        arg: [distPath, gitPathSha],
        isCache: !!!treePath
    })
}


// 任务队列执行
function taskInfosExtuce(time, taskInfos, distPath) {
    if (taskInfos.length === 0) {
        taskInfosEnd(distPath);
        return;
    }
    const funInfo = taskInfos.shift();
    funInfo.fun.apply(this, [...funInfo.arg]).then(da => {
        time = time + 1;
        if(funInfo.isCache) {
            console.log(`.${funInfo.arg[0].split(funInfo.arg[1])[1]}命中缓存,第${time}个任务结束`)
        } else {
            console.log(`.${funInfo.arg[0].split(funInfo.arg[1])[1]}下载完毕,第${time}个任务结束`)
        }
        taskInfosExtuce(time, taskInfos, distPath)
    })
}


// 将缓存的文件加入复制队列中
function cacheCopyFile(distPath, gitPathSha) {
    return new Promise((resolve) => {
        allPath.push({path: distPath, sha: gitPathSha});
        resolve(true)
    })
}


// 正式下载文件
function downloadFile(distPath, gitPathSha) {
    const doennUrl = `https://gitee.com/api/v5/repos/${gitOwner}/${gitRepo}/git/blobs/${gitPathSha}?access_token=${access_token}`
    return new Promise((resolve, reject) => {
        request(doennUrl, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                console.log(distPath, '下载文件失败！！！')
                reject(true)
                return;
            }
            body = JSON.parse(body);
            const bstr = new Buffer(body.content, 'base64').toString();
            fs.ensureFileSync(distPath)
            fs.writeFileSync(distPath, bstr);
            allPath.push({path: distPath, sha: gitPathSha});
            resolve(true)
        });
    })
}

function taskInfosEnd(distPath) {
    console.log('下载任务结束')
    const isExtraDist = fs.existsSync(distPath);
    if (!isExtraDist) {
        // 如果不存在，创建一个新文件夹
        fs.mkdirSync(distPath);
        console.log('创建下载文件路径')
    } else {
        console.log('找到下载保存文件路径')
    }
    allPath.forEach(v => {
        const filePath ='.' + v.path.split(v.sha)[1];
        const destPath = nodePath.resolve(distPath, filePath);
        fs.ensureFileSync(destPath)
        fs.copyFileSync(v.path, destPath);
    })
    console.log('文件保存成功:', nodePath.resolve(distPath))

}


export {
    setConfig,
    giteeDirDownload
}