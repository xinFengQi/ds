
const process_cmd = require('child_process').exec;
const process_cmdFile = require('child_process').execFile;
const iconv = require('iconv-lite');
const fsExtra = require('fs-extra');
const path = require('path');

const config = require('../config').default;
const { setPreject, getPreject, getOsResource } = require('../cache/resource.cache');

import request from 'request';
import { cmdActiveUtil } from '../util/handler_log'

// 初始化服务器上git项目
function initServeGit() {
    if (!config.gitsConfig) {
        throw '没有git地址配置'
    }
    const gitsConfig = config.gitsConfig;
    gitsConfig.forEach((gitConfig: any) => {
        fsExtra.ensureDirSync(gitConfig.localPath);
    })

    // 读取服务器中的git仓库
    gitsConfig.forEach((gitConfig: any) => {
        let libProjectArr = [];
        const gitlocalPath = path.resolve(gitConfig.localPath, gitConfig.gitName);
        console.log('准备仓库操作', gitConfig.localPath, gitConfig.gitName)
        if (!fsExtra.existsSync(gitlocalPath)) {
            // git clone url 从githup克隆命令
            optergithup_util('git clone ' + gitConfig.gitLink, gitConfig.localPath, (err: any) => {
                if (err) {
                    console.log('克隆仓库出现错误,', err)
                    return
                }
                console.log(gitConfig.gitLink + '仓库已克隆', gitConfig.localPath)
                libProjectArr = checkLocalLib(gitlocalPath, gitConfig.gitName);
                judgeIsDeploy(libProjectArr, true);
            });
        } else {
            optergithup_util('git pull ' + gitConfig.gitLink, gitlocalPath, (err: any) => {
                if (err) {
                    console.log('仓库拉取出现错误,', err)
                    return
                }
                console.log(gitConfig.gitLink + '仓库重新拉取', gitConfig.localPath, gitConfig.gitName)
                libProjectArr = checkLocalLib(gitlocalPath, gitConfig.gitName);
                judgeIsDeploy(libProjectArr, true);
            });
        }
    })

}

// 递归读取文件后进行是否部署读取
function judgeIsDeploy(libProjectArr: any, isMgre?: boolean) {
    // 判断是否已部署
    libProjectArr.forEach(
        (project: any) => {
            let dirs = fsExtra.readdirSync(project.localaddress);
            dirs= dirs.map( (v:string) => v.toLowerCase())
            if (dirs.includes('__ds_hot_config_preject.json')) {
                project.isDeploy = 1
                project.baseUrl = getWebAddress(project);
            } else {
                project.isDeploy = 0
            }
            if (dirs.includes('README.md'.toLowerCase())) {
                project.redemeMd ={type: 'md', content: fsExtra.readFileSync(path.resolve(project.localaddress, 'README.md')).toString() } 
            } 
        });
    setPreject(config.server.value, libProjectArr, isMgre);
}

// 读取地址
function getWebAddress(project: any) {
    let web = '';
    if (project.hotconfig.type === 'node_server_front') {
        // node后端部署
    } else if (project.hotconfig.type === 'client_front') {
        // 纯前端部署
        let serveConfig = config.nodeConfig.filter((v: any) => v.name == project.hotconfig.buildname);
        switch (serveConfig[0].type) {
            case 'nginx':
                console.log(project)
                web = serveConfig[0].web + project.hotconfig.name
                break;
            case 'tomcat':
                web = serveConfig[0].web + project.hotconfig.name
                break;
            case 'ds_node':
                break;
            default:
                throw `服务器上不存在${serveConfig.hotconfig.buildname}容器环境`
        }
    }
    return web;
}


// 递归读取部署项目数组
function checkLocalLib(filespath: string, gitName: string) {
    let libProjectArr: any[] = []
    if (fsExtra.existsSync(filespath)) {
        const files = fsExtra.readdirSync(filespath);
        files.forEach((file: string) => {
            const filePath = path.resolve(filespath, file);
            const sata = fsExtra.statSync(filePath);
            if (sata.isDirectory()) {
                libProjectArr = [...libProjectArr, ...checkLocalLib(filePath, gitName)]
            } else {
                if (file === 'ds_hot_config.json') {
                    console.log('读取到一个项目' + filespath + '配置数据')
                    libProjectArr.push({
                        localaddress: filespath,
                        gitName: gitName,
                        hotconfig: JSON.parse(fsExtra.readFileSync(filePath, { encoding: 'utf8' }))
                    })
                }
            }
        });
    }
    return libProjectArr;
}

// 打印log
function log_buf(...a: any) {
    a.forEach(
        (v: any) => {
            if (v) {
                if (Buffer.isBuffer(v)) {
                    console.log(iconv.decode(v))
                } else {
                    console.log(v)
                }
            }
        }
    )
}



// 操作cmd的函数
function optergithup_util(cmd: string, cwd: any, cb: any) {
    cmdActiveUtil.start()
    console.log('执行', cmd)
    const cmd_on = process_cmd(cmd, { cwd: cwd }, (err: any, stdout: any, stderr: any) => {
        if (err) {
            cb(stderr)
            cmdActiveUtil.end()
            return;
        }
        log_buf(err, stdout, stderr)
        cmdActiveUtil.end()
        cb(null, stdout)
    })
    cmd_on.stdout.on('data', (data: any) => {
        log_buf(data);
    })
}

// 操作.bat文件的函数
function optergithupFile_util(cmd: any, cwd: any, cb: any) {
    console.log('执行', cmd)
    const cmd_on = process_cmdFile(cmd, { cwd: cwd }, (err: any, stdout: any, stderr: any) => {
        if (err) {
            cb(err)
            return;
        }
        log_buf(err, stdout, stderr)
        cb(null, stdout)
    })
    cmd_on.stdout.on('data', (data: any) => {
        log_buf(data);
    })
}



/* 整理部署的类型
 node_server_front --- node服务类型  需要有node_modules, 需要有运行命令, 需要有端口， 可以在任意目录， 运行好了后访问路径为ip+端口号，还需要配置nginx
 ds3_client  --- 纯前端项目， 只需要打包好的文件夹，需要选择放入路径，
                                            ---------如果是nginx，直接放入html中，
                                                        如果是tomcar还需要重启tomcat
                                                        如果是放入node服务静态文件夹，还需要配置ngnix

所有一切均认大小写
*/


// 准备部署
function startDeploy(address: string, obserCB: any) {
    // 验证是否部署
    const dirs = path.resolve(address, '__ds_hot_config_preject.json');
    fsExtra.ensureFileSync(dirs);
    // 部署子服务器
    const childrenValues = getOsResource(config.server.value);
    if(childrenValues && childrenValues.childrens) {
        childrenValues.children.forEach((v: any) => {
            startChildrenDeploy(v, address);
        })
    }
  
    const { projectConfig, serveConfig } = checkOperate(address, obserCB);
    const giturlArr = address.split(projectConfig.gitName)
    optergithup_util('git checkout master '+ '.'+giturlArr[1].replace(/\\/g,'/'), giturlArr[0] +'/' +projectConfig.gitName, (err: any) => {
        if (err) {
            console.log('仓库拉取出现错误', err)
            return
        }
        console.log( '仓库重新拉取', address)
        if (projectConfig.hotconfig.type === 'node_server_front') {
            // node后端部署
            afterEnd(projectConfig, serveConfig, obserCB)
        } else if (projectConfig.hotconfig.type === 'client_front') {
            // 纯前端部署
            frontEndDeploy(projectConfig, serveConfig, obserCB);
        }
        judgeIsDeploy( getPreject(config.server.value));
    });
}

// 部署子服务器
function startChildrenDeploy(osResource: any, address: string){
    request.get(`http://${osResource.value}:${osResource.port}/hot_deploy/executeDeploy?value=${osResource.value}&address=${address}`, 
        (err, res, body) => {
        if(!err) {
            console.log('部署子服务器返回', JSON.parse(body).data)
        } else {
            console.log(res)
        }
    })
}

// 前期检查操作是否存在问题
function checkOperate(address: string, obserCB: any) {
    let projectConfig = getPreject(config.server.value).filter((v: { localaddress: string; }) => v.localaddress === address);
    console.log(projectConfig, '------------------')
    if (projectConfig.length === 0) {
        obserCB({ status: 'error', message: '服务器仓库不存在此地址' })
        throw '服务器仓库不存在此地址'
    }
    if (projectConfig.length > 1) {
        obserCB({ status: 'error', message: '服务器仓库中此地址存在问题或者服务器运行存在错误' })
        throw '服务器仓库中此地址存在问题或者服务器运行存在错误'
    }
    projectConfig = projectConfig[0]

    const nodeConfig = config.nodeConfig

    let serveConfig = nodeConfig.filter((v: { name: any; }) => v.name == projectConfig.hotconfig.buildname);
    if (serveConfig.length === 0) {
        obserCB({ status: 'error', message: '服务器不存在此部署环境' })
        throw '服务器不存在此部署环境'
    }
    if (serveConfig.length > 1) {
        obserCB({ status: 'error', message: '服务器部署方式存在同名' })
        throw '服务器部署方式存在同名'
    }
    serveConfig = serveConfig[0]
    const newTime = new Date().getTime();
    if (projectConfig.updateTime && newTime - projectConfig.updateTime < 5000) {
        obserCB({ status: 'error', message: '操作频繁, 5秒后再操作' })
        throw '操作频繁, 5秒后再操作'
    }
    projectConfig.updateTime = newTime
    return { projectConfig, serveConfig }
}

// node 后端执行npm i
function nodeNpmCmdInstall(osResource: any, projectConfig:any,  obserCB: any ) {
    console.log(projectConfig);
    if(projectConfig.hotconfig.buildinstall) {
        optergithup_util(projectConfig.hotconfig.buildinstall, projectConfig.localaddress, () => {
            console.log('npm依赖安装完成')
            obserCB({ status: 'success', message: 'npm依赖安装完成' })
        })
        // 安装子服务器依赖
        if(osResource && osResource.childrens) {
            osResource.childrens.forEach(
                (v: any) => {
                    nodeChildrenNpmCmdInstall(v, projectConfig.localaddress)
                }
            )
        }
    } else {
        obserCB({ status: 'error', message: '无需安装依赖' })
    }
   
}

// 安装子服务器依赖
function nodeChildrenNpmCmdInstall(osResource: any, address: string){
    request.get(`http://${osResource.value}:${osResource.port}/hot_deploy/installDepend?value=${osResource.value}&address=${address}`, 
        (err, res, body) => {
        if(!err) {
            console.log('安装子服务器依赖返回', JSON.parse(body).data)
        } else {
            console.log(res)
        }
    })
}


// 前端部署
function frontEndDeploy(projectConfig: any, serveConfig: { type: any; },
    obserCB: (arg0: { status: string; message: string; }) => void) {
    switch (serveConfig.type) {
        case 'nginx':
            frontEndDeployNginx(projectConfig, serveConfig, obserCB);
            break;
        case 'tomcat':
            frontEndDeployTomcat(projectConfig, serveConfig, obserCB);
            break;
        case 'ds_node':
            break;
        default:
            obserCB({ status: 'error', message: `服务器上不存在${serveConfig.type}容器或者环境` })
            throw `服务器上不存在${serveConfig.type}容器环境`
    }
}

// nginx 前端部署处理
function frontEndDeployNginx(proconfig: {
    hotconfig:
    { name: number; buildpath: any; }; localaddress: any;
}, serconfig: { type?: any; path?: any; },
    obserCB: {
        (arg0: { status: string; message: string; }): void;
        (arg0: { status: string; message: string; upversions?: any; }): void;
    }) {
    // 判断nginx内部是否存在部署文件，如有，将其命名带上版本号
    const nginxhtmlpath = path.resolve(serconfig.path, 'html')
    const nginxProNamePath = path.resolve(nginxhtmlpath, proconfig.hotconfig.name);
    const copyPath = path.resolve(proconfig.localaddress, proconfig.hotconfig.buildpath);
    if (!fsExtra.existsSync(copyPath)) {
        obserCB({ status: 'error', message: `打包文件${copyPath}不存在` })
        return;
        // throw `打包文件${copyPath}不存在`
    }
    const time = new Date().getTime();
    const reNamesavePath = path.resolve(nginxhtmlpath, proconfig.hotconfig.name + time);
    copyFileSava(nginxProNamePath, copyPath, reNamesavePath)
    obserCB({ status: 'success', message: `部署成功`, upversions: proconfig.hotconfig.name + time })
}

// tomcat 前端部署
function frontEndDeployTomcat(proconfig:
    { hotconfig: { name: number; buildpath: any; }; localaddress: any; },
    serconfig: { type?: any; path?: any; }, obserCB: {
        (arg0: { status: string; message: string; }):
            void; (arg0: { status: string; message: string; upversions?: any; }): void;
    }) {
    console.log(proconfig, serconfig)
    const tomcathtmlpath = path.resolve(serconfig.path, 'webapps')
    const tomcatProNamePath = path.resolve(tomcathtmlpath, proconfig.hotconfig.name);
    const copyPath = path.resolve(proconfig.localaddress, proconfig.hotconfig.buildpath);
    if (!fsExtra.existsSync(copyPath)) {
        obserCB({ status: 'error', message: `打包文件${copyPath}不存在` })
        return
        // throw `打包文件${copyPath}不存在`
    }
    const time = new Date().getTime();
    const reNamesavePath = path.resolve(tomcathtmlpath, proconfig.hotconfig.name + time);
    copyFileSava(tomcatProNamePath, copyPath, reNamesavePath)

    obserCB({ status: 'success', message: `部署成功`, upversions: proconfig.hotconfig.name + time })

    const batTomcatPath = path.resolve(serconfig.path, 'bin')
    const shutdownPath = path.resolve(batTomcatPath, 'shutdown.bat')
    const startupnPath = path.resolve(batTomcatPath, 'startup.bat')
    // 解决tomcat重启问题
    optergithupFile_util(shutdownPath, batTomcatPath, () => {
        console.log('tomcat关闭完成')
        optergithupFile_util(startupnPath, batTomcatPath, () => {
            console.log('tomcat重启完成')

        })
    })
}

// ds_node 前端部署 暂时不写入 todo

// 文件复制，并保留其原文件
function copyFileSava(src: any, dist: any, saveurl: any) {
    if (fsExtra.existsSync(src)) {
        // todo 读取版本号
        try {
            fsExtra.renameSync(src, saveurl)
        } catch (error) {
            throw '存在多人操作此目录，操作失效'
        }
    }
    // 将文件夹复制到ngnix的静态文件夹中
    fsExtra.copySync(
        dist,
        src
    )
}

// nginx的config文件处理
function updateNginxConfig(serconfig: { path: any; }) {
    const nginxconfigpath = path.resolve(serconfig.path, 'conf/nginx.conf');
    const confStr = fsExtra.readFileSync(nginxconfigpath, { encoding: 'utf-8' });
    // console.log(confStr);
    const a = confStr.split('location / {')
    const b = a[1].split('}');

    const alfet = a[0] + 'location / {' + b[0] + '}' + '\n'
    const aright = b.slice(1, b.length).join('}')
    const newConfig = alfet + getNginxLocationTel('test') + aright;
    console.log(newConfig)
    fsExtra.writeFile(nginxconfigpath, newConfig).then(
        (err: any) => {
            if (!err) {
                console.log('写入nginx配置成功')
            }
        });

}

// nginx配置模板
function getNginxLocationTel(projectName: string) {
    return `
    location ${projectName}/ {
        root   html;
        index  index.html index.htm;
    }`
}

// 后端部署
function afterEnd(projectConfig: any, serveConfig: { type: any; },
    obserCB: (arg0: { status: string; message: string; }) => void) {
    console.log(projectConfig, serveConfig);
    switch (serveConfig.type) {
        case 'node_pm2':
            afterEndDeployNodePm2(projectConfig, serveConfig, obserCB);
            break;
        default:
            obserCB({ status: 'error', message: `服务器上不存在${serveConfig.type}容器或者环境` })
            return
            // throw `服务器上不存在${serveConfig.type}容器或者环境`
    }
}

// 后端 node pm2 部署 
function afterEndDeployNodePm2(projectConfig: {
    hotconfig: { buildcmd: string; buildReloadcmd: string };
    localaddress: string; isDeploy: number
}, serveConfig: { type: any; },
    obserCB: { (arg0: { status: string; message: string; }): void; (arg0: { status: string; message: string; }): void; }) {
    // 不存在node_modules 则执行npm i
    const cmdstr = projectConfig.isDeploy ? projectConfig.hotconfig.buildReloadcmd : projectConfig.hotconfig.buildcmd
    if(!projectConfig.hotconfig.buildReloadcmd) {
        return
    }
    optergithup_util(cmdstr, projectConfig.localaddress, (err: any) => {
        if (err) {
            obserCB({ status: 'error', message: `err` })
        } else {
            obserCB({ status: 'success', message: `部署成功` })
        }
    })
}
// pm2ListAnalysis();
// pm2 list解析
function pm2ListAnalysis() {
    optergithup_util('pm2 list', null, (err: any, out: string) => {
        if (err) {
            throw '不存在pm2命令，请检查服务器'
        }
        const str = out.replace('┌─────┬──────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐', '')
            .replace('└─────┴──────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘', '')
            .replace('├─────┼──────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤', '');
        const arr = str.split('│').map(v => v.trim()).filter(v => v.length > 0)
        const legth = arr.length;
        const list = [];
        for (let index = 0; index < (legth - 13) / 13; index++) {
            const j = (index + 1) * 13;
            const obj: any = {}
            for (let indexTwo = 0; indexTwo < 13; indexTwo++) {
                obj[arr[indexTwo]] = arr[j + indexTwo];
            }
            list.push(obj)
        }
        console.log(list)
    })
}

// git clone url 从GitHub拉去代码命令
// optergithup_util('git pull', path.resolve(gitConfig.localPath, gitConfig.gitName));

// git checkout master src  win从GitHub更新文件夹命令
// optergithup_util('git checkout master [filename]',);

// 服务器开机自检，需要去验证所有配置的容器及环境是否存在

// 没有pm2就执行npm i pm2 -g
// 没有tomcat， ngnix就报错




module.exports = {
    initServeGit,
    startDeploy,
    startChildrenDeploy,
    nodeNpmCmdInstall,
    nodeChildrenNpmCmdInstall
}