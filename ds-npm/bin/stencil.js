#!/usr/bin/env node

import program from 'commander' // 设计命令行
import { getDsnConfig } from '../src/config/index.js';
import { stencilDistComplie } from '../src/stencil/index.js'
import fs from 'fs-extra';

initstencilCmd();

function initstencilCmd() {
    program.command('stencil').alias('scil')
        .option('-config <dir>', '设置配置的文件路径')
        .option('-complie, --c', ' 将生成文件编译集合')
        .description('stencil命令集合')
        .action((options) => {
            console.log(options)
            stencilCompolie(options);
        })
}

function stencilCompolie(options) {
    if (!options.Complie && !options.c) {
        return;
    }
    const { customConfig, defaultConfig } = options.config ? getDsnConfig(options.config) : getDsnConfig();
    // 准备生成的文件夹
    const distGiteePath = (customConfig && customConfig.stencil && customConfig.stencil.outputGitDist)
        ? customConfig.stencil.outputGitDist : defaultConfig.stencil.outputGitDist;
    // 组件信息的json数据
    const jsonPath = (customConfig && customConfig.stencil && customConfig.stencil.distJsonPath)
        ? customConfig.stencil.distJsonPath : defaultConfig.stencil.distJsonPath;
    // stencil生成的目标文件夹
    const outputDist = (customConfig && customConfig.stencil && customConfig.stencil.distPath)
        ? customConfig.stencil.distPath : defaultConfig.stencil.distPath;
    stencilDistComplie(distGiteePath, jsonPath, outputDist);
}


if (process.argv[1].indexOf('stencil.js') > -1) {
    const data = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)).toString());
    // dsn -V|--version
    program.version(data.version);

    program.parse(process.argv);
}

