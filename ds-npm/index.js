#!/usr/bin/env node

const program = require('commander');  // 设计命令行
const inquirer = require('inquirer'); // 命令行答询
const handlebars = require('handlebars');// 修改字符
const ora = require('ora');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const fs = require('fs-extra');
const nodePath = require('path');
const { getDsnConfig } = require('./src/config/index.js');




const data = JSON.parse(fs.readFileSync(nodePath.resolve(__dirname, './package.json')).toString());
// dsn -V|--version
program.version(data.version);

// 测试
program.command('test')
    .description('测试命令行')
    .action(() => {
        console.log(logSymbols.info, '获取到的配置文件', getDsnConfig());
        console.log(logSymbols.info, chalk.green(`当前目录是${path.resolve()}`));
    })

require('./bin/config.js');
require('./bin/gitee.js');
require('./bin/util.js');

if(process.argv) {
    program.parse(process.argv);
}
