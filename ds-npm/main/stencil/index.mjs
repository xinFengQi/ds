import program from 'commander' // 设计命令行
import { removeSpace, getDsnConfig } from '../util/index.mjs';
import { stencilDistComplie } from './complie_json.mjs'

function initstencilCmd() {
    program.command('stencil')
        .alias('scil')
        .option('-config <dir>') // 设置配置的文件路径
        .option('-H')    
        .option('-h')   // 帮助
        .option('-complie')
        .option('-c')    // 将生成文件编译集合
        .description('stencil命令集合')
        .action((options) => {
            console.log(options)
            stencilHelp(options);
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


function stencilHelp(options) {
    if (!Object.keys(options).length || options.h || options.H) {
        console.log(removeSpace(`
                stencil命令行工具，简写scil
                -h|-H 查看帮助
                -complie|-c  将生成文件编译集合,上传到git上的预处理
            `))
    }
}



export { initstencilCmd };