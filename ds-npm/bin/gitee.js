#!/usr/bin/env node

import program from 'commander' // 设计命令行
import fs from 'fs-extra'
import logSymbols from 'log-symbols'
import chalk from 'chalk'
import { isUEmpty } from '../src/util/index.js';
import { getDsnConfig } from '../src/config/index.js';
import nodePath from 'path'
import { giteeDirUpload, giteeDirDownload, setPushConfig, setPullConfig } from '../src/gitee/index.js'

program.command('gitee').alias('dg')
    .option('-config <dir>', '输入配置文件地址') // 设置配置的文件路径
    .option('-push', '根据配置上传文件')
    .option('-pull', '根据配置下载文件')
    .option('-chrome', 'chrome插件下载')
    .option('--path <path>', '根据配置下载文件')
    .description('dsn-gitee命令集合')
    .action((options) => {
        console.log(options)
        if (options.Push) {
            giteePush(options);
        }
        if (options.Push && options.path) {
            giteePull(options.path)
        }

        if (options.Chrome) {
            chromeInit()
        }
    })


// chrome插件下载
function chromeInit() {
    // 在公共库
    setPullConfig('16cf2bb0ab7fa12779bfec47f2c3ee9a', 'demonstrate_storage', 'semonstrate', () => {
        console.log(logSymbols.success, 'chrome插件初始化成功,地址是:', chalk.green(downFilePath),
            '请将此地址放入扩展中')
        console.log(logSymbols.success, '查看文档', chalk.green('https://dongfubao.gitee.io/ct'))
    })
    // 下载文件文件
    const downFilePath = new URL('../downFile', import.meta.url).toString().replace('file:///', '');
    giteeDirDownload(downFilePath, 'lib/chrome_extension')

}




// 下载文件
function giteePull(giteePath) {

}


// 上传文件
function giteePush(options) {
    // 获取配置
    const { customConfig, defaultConfig } = options.config ? getDsnConfig(options.config) : getDsnConfig();
    // 获取需要上传的文件位置
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
        const isPackage = fs.existsSync('./package.json');
        const pageJsonData = isPackage ? JSON.parse(fs.readFileSync('./package.json').toString()) : {};
        gitPath = [gitPathJson.base, ...gitPathJson.package.map(s => (pageJsonData[s] || ''))]
            .filter(s => s).join('/')
    }
    // 获取删除的远程文件夹
    let deleteGitPath = (customConfig && customConfig.gitee && customConfig.gitee.deleteGitPath)
        ? customConfig.gitee.deleteGitPath : defaultConfig.gitee.deleteGitPath;
    deleteGitPath = deleteGitPath.map(pas => gitPath ? (gitPath + '/' + pas) : pas);
    // 获取gitee配置，
    const { access_token, repo, owner } = getGiteeConfig(customConfig, defaultConfig);
    setPushConfig(access_token, repo, owner)
    // 上传文件
    giteeDirUpload(distPath, gitPath, deleteGitPath)
}


// 获取配置
function getGiteeConfig(customConfig, defaultConfig) {
    const currentConfig = customConfig ? { ...customConfig.gitee_info } : {};
    const baseConfig = defaultConfig ? { ...defaultConfig.gitee_info } : {};
    for (const key in currentConfig) {
        if (!currentConfig[key]) {
            delete currentConfig[key]
        }
    }
    const allConfig = { ...baseConfig, ...currentConfig };
    const allConfigKeys = Object.keys(allConfig);
    const index = allConfigKeys.findIndex(key => !allConfig[key])
    if (index > -1) {
        console.log(logSymbols.info, chalk.red(`${allConfigKeys[index]}配置为空`));
        return;
    }
    return allConfig;
}


if (process.argv[1].indexOf('gitee.js') > -1) {
    const data = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)).toString());
    // dsn -V|--version
    program.version(data.version);

    program.parse(process.argv);
}

