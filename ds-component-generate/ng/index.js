#!/usr/bin/env node

const program = require('commander'); // 设计命令行
const inquirer = require('inquirer'); // 命令行答询
const handlebars = require('handlebars'); // 修改字符
const ora = require('ora');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const fs = require('fs-extra');
const path = require('path')
const { generateMain } = require('./src/main');
// dsn -V|--version
program.version('0.0.1');

// 初始化一些项目
program.command('build component')
    .description('解析文件')
    .action(() => {
        // console.log(process.execPath)
        // console.log(__dirname)
        // console.log(path.resolve(__dirname, './app'))
        // console.log(process.cwd())
        generateMain(path.resolve('./src'))
        console.log(logSymbols.success, chalk.green('编译成功，目录是dfb_dist'));
    })

program.command('list')
    .description('查看所有项目')
    .action(() => {
        console.log(`
        build component 组件文档解析
    `);

    })

program.parse(process.argv);