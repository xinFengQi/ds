export * from './content_handler.mjs'
import { dsnCopyFile } from './content_handler.mjs'
import fs from 'fs-extra'
import logSymbols from 'log-symbols'
import chalk from 'chalk'
import program from 'commander' // 设计命令行
import { getDsnConfig } from '../config/index.mjs';
import { removeSpace } from '../util/index.mjs';


function initUtilCmd() {
    program.command('fileutil').alias('dfu')
        .option('-H').option('--h')   // 帮助
        .option('-copy')    // 根据配置文件进行简单复制
        .option('-move')    // 根据配置文件进行移动
        .option('--key <config>')    // 需要进行文件处理的配置key
        .option('--src <config>')    // 需要处理文件的原路径
        .option('--dest <config>')    // 需要处理文件的生成路径
        .description('针对文件处理的工具类')
        .action((options) => {
            console.log(options)
            if (options.Copy) {
                handlerFileCopy(options)
            }
            if (options.Move) {
                handlerFileCopy(options, true)
            }
            dsnUtilHelp(options);
        })
}


// 复制文件夹的逻辑
function handlerFileCopy(options, isMove) {
    // 获取配置
    const { customConfig } = getDsnConfig();
    const configKey = isMove ? 'move' : 'copy'
    try {
        // 优先获取写的其一配置
        if (options.src || options.dest) {
            dsnCopyFile(options.src ?? './', options.dest ?? './', isMove)
        }
        // 没有写入路径则读取文件配置的内容
        if (!options.src && !options.dest && customConfig.fileHandler && customConfig.fileHandler[configKey]) {
            if (Array.isArray(customConfig.fileHandler[configKey])) {
                if (options.key) {
                    console.log(logSymbols.warning, chalk.yellow('copy配置是一个数组,key值无用'));
                }
                customConfig.fileHandler[configKey].forEach(cpItem => {
                    dsnCopyFile(cpItem.src ?? './', cpItem.dest ?? './', isMove)
                })
            } else {
                options.key ?
                    handlerFileCopyByKey(customConfig, options.key, configKey, isMove)
                    : handlerFileCopyByKey(customConfig, 'default', configKey, isMove)
            }
        }
    } catch (error) {
        throw '配置出错或者出现未知错误，请自行检查文件是否损坏'
    }


}

function handlerFileCopyByKey(customConfig, key, configKey, isMove) {
    console.log(logSymbols.info, chalk.yellow(`执行${key}内的配置`));
    const config = customConfig.fileHandler[configKey][key]
    if (!config) {
        throw "配置错误，请重新检测"
    }
    if (Array.isArray(config)) {
        config.forEach(cpItem => {
            dsnCopyFile(cpItem.src ?? './', cpItem.dest ?? './', isMove)
        })
    } else {
        dsnCopyFile(config.src ?? './', config.dest ?? './', isMove)
    }
}





function dsnUtilHelp(options) {
    if (options.h || options.H) {
        console.log(removeSpace(`
            fileutil 针对文件处理的工具类，简写dfu
                --h|-H 查看帮助
                -copy  根据配置文件进行简单复制
                -move  根据配置文件进行移动
                    --key <config> 需要进行文件处理的配置key
                    --src <config> 需要处理文件的原路径
                    --dest <config> 需要处理文件的生成路径
            `))
    }
}




export { initUtilCmd };