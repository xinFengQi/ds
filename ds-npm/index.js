#!/usr/bin/env node

import program from 'commander' // 设计命令行
import inquirer from 'inquirer' // 命令行答询
import handlebars from 'handlebars' // 修改字符
import ora from 'ora'
import chalk from 'chalk'
import logSymbols from 'log-symbols'
import fs from 'fs-extra'
import path, { parse } from 'path'

import { getDsnConfig } from './src/config/index.js';



// const data = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url)).toString());
// // dsn -V|--version
// program.version(data.version);

// 测试
program.command('test')
    .description('测试命令行')
    .action(() => {
        console.log(logSymbols.info, '获取到的配置文件', getDsnConfig());
        console.log(logSymbols.info, chalk.green(`当前目录是${path.resolve()}`));
    })

import './bin/config.js';
import './bin/stencil.js';
import './bin/gitee.js';
import './bin/util.js';

program.parse(process.argv);