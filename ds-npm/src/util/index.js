const contentHandler = require('./content_handler.js');
const filePath = require('./file_path.js');

const logSymbols = require('log-symbols');
const chalk = require('chalk');
const { getDsnConfig } = require('../config/index.js');
const { dsnCopyFile } = require('./content_handler.js');

const utilExecute = (options) => {
    console.log(options)
    if (options.Copy) {
        handlerFileCopy(options)
    }
    if (options.Move) {
        handlerFileCopy(options, true)
    }
}

// 复制文件夹的逻辑
function handlerFileCopy(options, isMove) {
    // 获取配置
    const { customConfig } = getDsnConfig();
    const configKey = isMove ? 'move' : 'copy'
    try {
        // 优先获取写的其一配置
        if (options.src || options.dest) {
            dsnCopyFile(options.src || './', options.dest || './', isMove)
        }
        // 没有写入路径则读取文件配置的内容
        if (!options.src && !options.dest && customConfig.fileHandler && customConfig.fileHandler[configKey]) {
            if (Array.isArray(customConfig.fileHandler[configKey])) {
                if (options.key) {
                    console.log(logSymbols.warning, chalk.yellow('copy配置是一个数组,key值无用'));
                }
                customConfig.fileHandler[configKey].forEach(cpItem => {
                    dsnCopyFile(cpItem.src || './', cpItem.dest || './', isMove)
                })
            } else {
                options.key ?
                    handlerFileCopyByKey(customConfig, options.key, configKey, isMove)
                    : handlerFileCopyByKey(customConfig, 'default', configKey, isMove)
            }
        }
    } catch (error) {
        console.log(logSymbols.error,chalk.red(error))
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
            dsnCopyFile(cpItem.src || './', cpItem.dest || './', isMove)
        })
    } else {
        dsnCopyFile(config.src || './', config.dest || './', isMove)
    }
}




module.exports = {
    ...contentHandler,
    ...filePath,
    utilExecute
}