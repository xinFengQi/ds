#!/usr/bin/env node

import program from 'commander' // 设计命令行
import inquirer from 'inquirer' // 命令行答询
import handlebars from 'handlebars' // 修改字符
import ora from 'ora'
import chalk from 'chalk'
import logSymbols from 'log-symbols'
import fs from 'fs-extra'
import path, { parse } from 'path'
import { initstencilCmd } from './src/stencil/index.mjs'
import { initGiteeCmd } from './src/gitee/index.mjs';
import { getDsnConfig, initDsnConfigCmd } from './src/config/index.mjs';


const data = JSON.parse(fs.readFileSync(new URL('./dsn.config.json', import.meta.url)).toString());
// dsn -V|--version
program.version(data.version);

// 初始化一些项目
program.command('test')
    .description('测试命令行')
    .action(() => {
        console.log(logSymbols.info, '获取到的配置文件', getDsnConfig());
        console.log(logSymbols.info, chalk.green(`当前目录是${path.resolve()}`));
    })


initstencilCmd();
initGiteeCmd();
initDsnConfigCmd();


program.command('help')
    .description('查看所有的命令')
    .action(() => {
        consoleAllCmd()
    })

program.option('-h')
    .option('--help')
    .description('查看所有的命令')
    .action(() => {
        consoleAllCmd()
    })



function consoleAllCmd() {
    console.log(`
    test 测试
    help 查看所有命令
    config|dc
        -h|-H 查看帮助
        -init|-i  将配置文件生成
    gitee|dg 
        -h|-H 帮助
        -push|-p 文件上传进ct的gitee
    stencil|scil
        -h|-H 帮助
        -c|-complie 将目标文件移入准备上传到gitee的文件夹
`);
}

program.parse(process.argv);