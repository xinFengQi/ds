import program from 'commander' // 设计命令行
import fs from 'fs-extra'
import { removeSpace, getDsnConfig, isUEmpty } from '../util/index.mjs';
import { giteeDirUpload } from './pull_gitee.mjs'
function initGiteeCmd() {
    program.command('gitee')
        .alias('ge')
        .option('-config <dir>') // 设置配置的文件路径
        .option('-H')
        .option('-h')   // 帮助
        .option('-pull')
        .option('-p')    // 上传
        .description('dsn-gitee命令集合')
        .action((options) => {
            console.log(options)
            giteeHelp(options);
            giteePull(options);
        })
}

function giteePull(options) {
    if (!options.Pull && !options.p) {
        return;
    }
    // 获取配置
    const { customConfig, defaultConfig } = options.config ? getDsnConfig(options.config) : getDsnConfig();
    // 获取stencil.config.ts的打包位置
    const distPath = (customConfig && customConfig.gitee && !isUEmpty(customConfig.gitee.outputGitDist))
        ? customConfig.gitee.outputGitDist : defaultConfig.gitee.outputGitDist;
    // 获取上传到那个文件夹
    const gitPathJson = (customConfig && customConfig.gitee && !isUEmpty(customConfig.gitee.gitPath))
        ? customConfig.gitee.gitPath : defaultConfig.gitee.gitPath;
    let gitPath = '';
    if (typeof gitPathJson === 'string') {
        gitPath = gitPathJson;
    } else {
        // 根据pagejson获取获取文件夹信息
        const pageJsonData = JSON.parse(fs.readFileSync('./package.json').toString());
        gitPath = [gitPathJson.base, ...gitPathJson.package.map(s => pageJsonData[s])]
            .filter(s => s).join('/')
    }
    // 获取删除的远程文件夹
    let deleteGitPath = (customConfig && customConfig.gitee && customConfig.gitee.deleteGitPath)
        ? customConfig.gitee.deleteGitPath : defaultConfig.gitee.deleteGitPath;
    deleteGitPath = deleteGitPath.map(pas => gitPath ? (gitPath + '/' + pas) : pas);
    giteeDirUpload(distPath, gitPath, deleteGitPath)
}


function giteeHelp(options) {
    if (!Object.keys(options).length || options.h || options.H) {
        console.log(removeSpace(`
                ds的gitee命令行工具，简写ge
                -h|-H 查看帮助
                -pull|-p  文件上传进ct的gitee
            `))
    }
}



export { initGiteeCmd };