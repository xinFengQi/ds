#!/usr/bin/env node

import program from 'commander' // 设计命令行
import inquirer from 'inquirer' // 命令行答询
import handlebars from 'handlebars' // 修改字符
import ora from 'ora'
import chalk from 'chalk'
import logSymbols from 'log-symbols'
import fs from 'fs-extra'
import path, { parse } from 'path'
import { initStencliCmd } from './main/stencli/index.mjs'
import  { initGiteeCmd } from './main/gitee/index.mjs';
import { removeSpace, getDsnConfig, initDsnUtilCmd } from './main/util/index.mjs';

// dsn -V|--version
program.version('1.0.0');

// 初始化一些项目
program.command('test')
    .description('测试命令行')
    .action(() => {
        console.log(logSymbols.info, '获取到的配置文件', getDsnConfig());
        console.log(logSymbols.info, chalk.green(`当前目录是${path.resolve()}`));
    })


initStencliCmd();
initGiteeCmd();
initDsnUtilCmd();

program.command('list')
    .description('查看所有的命令')
    .action(() => {
        console.log(`
        test 测试一些数据
        list 查看所有命令
        stencli|scli
            -h|-H 帮助
            -c|-complie 将目标文件移入准备上传到gitee的文件夹
        gitee|ge 
            -h|-H 帮助
            -pull|-p 文件上传进ct的gitee
        dsnutil|du
            -h|-H 查看帮助
            -init|-i  将配置文件生成
    `);
    })

program.parse(process.argv);