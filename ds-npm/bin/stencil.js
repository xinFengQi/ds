#!/usr/bin/env node

const program = require('commander');
const fs = require('fs-extra');
const { startMonitor } = require('../src/stencil/index.js');
const nodePath = require('path');


initStencilCmd();

function initStencilCmd() {
    program.command('stencil').alias('ds')
        .option('-init <config>', '初始化项目')
        .option('-dev', '执行项目运行')
        .description('标准web组件的项目命令集合')
        .action((options) => {
            stencilExecute(options);
        })
}

const stencilExecute = (options) => {
    console.log(options)
    if (options.Init) {
    }
    if (options.Dev) {
        startMonitor()
    }
}


if (process.argv[1].indexOf('stencil.js') > -1) {
    const data = JSON.parse(fs.readFileSync(nodePath.resolve(__dirname, '../package.json')).toString());
    // dsn -V|--version
    program.version(data.version);

    program.parse(process.argv);
}



module.exports = {
    stencilExecute
}