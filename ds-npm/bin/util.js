#!/usr/bin/env node

const program = require('commander');
const fs = require('fs-extra');
const nodePath = require('path');
const { utilExecute } = require('../src/util/index')

initUtilCmd();

function initUtilCmd() {
    program.command('fileutil').alias('dfu')
        .option('-copy', '根据配置文件进行简单复制')
        .option('-move', '根据配置文件进行移动')
        .option('-config <dir>', '输入配置文件地址') // 设置配置的文件路径 暂未使用，后期使用
        .option('--key <config>', '需要进行文件处理的配置key')
        .option('--src <config>', '需要处理文件的原路径')
        .option('--dest <config>', '需要处理文件的生成路径')
        .description('文件处理的工具命令集合')
        .action((options) => {
            utilExecute(options);
        })
}



if (process.argv[1].indexOf('util.js') > -1) {
    const data = JSON.parse(fs.readFileSync(nodePath.resolve(__dirname, '../package.json')).toString());
    // dsn -V|--version
    program.version(data.version);

    program.parse(process.argv);
}

module.exports = {
    utilExecute
}
