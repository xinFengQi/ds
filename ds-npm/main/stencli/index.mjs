import program from 'commander' // 设计命令行
import { removeSpace, getDsnConfig } from '../util/index.mjs';
import { stencliDistComplie } from './complie_json.mjs'

function initStencliCmd() {
    program.command('stencli')
        .alias('scli')
        .option('-config <dir>') // 设置配置的文件路径
        .option('-H')    
        .option('-h')   // 帮助
        .option('-complie')
        .option('-c')    // 将生成文件编译集合
        .description('stencli命令集合')
        .action((options) => {
            console.log(options)
            stencliHelp(options);
            stencliCompolie(options);
        })
}

function stencliCompolie(options) {
    if (!options.Complie && !options.c) {
        return;
    }
    const { customConfig, defaultConfig } = options.config ? getDsnConfig(options.config) : getDsnConfig();
    // 准备生成的文件夹
    const distGiteePath = (customConfig && customConfig.stencli && customConfig.stencli.outputGitDist)
        ? customConfig.stencli.outputGitDist : defaultConfig.stencli.outputGitDist;
    // 组件信息的json数据
    const jsonPath = (customConfig && customConfig.stencli && customConfig.stencli.distJsonPath)
        ? customConfig.stencli.distJsonPath : defaultConfig.stencli.distJsonPath;
    // stencli生成的目标文件夹
    const outputDist = (customConfig && customConfig.stencli && customConfig.stencli.distPath)
        ? customConfig.stencli.distPath : defaultConfig.stencli.distPath;
    stencliDistComplie(distGiteePath, jsonPath, outputDist);
}


function stencliHelp(options) {
    if (!Object.keys(options).length || options.h || options.H) {
        console.log(removeSpace(`
                stencli命令行工具，简写scli
                -h|-H 查看帮助
                -complie|-c  将生成文件编译集合,上传到git上的预处理
            `))
    }
}



export { initStencliCmd };