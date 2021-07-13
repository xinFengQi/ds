




import program from 'commander' // 设计命令行
import { removeSpace, getDsnConfig, generateConfigFile } from '../util/index.mjs';

function initDsnUtilCmd() {
    program.command('dsnutil')
        .alias('du')
        .option('-config <dir>') // 设置配置的文件路径
        .option('-H')    
        .option('-h')   // 帮助
        .option('-init')
        .option('-i')    // 将配置文件生成
        .description('dsn的工具函数')
        .action((options) => {
            console.log(options)
            dsnUtilHelp(options);
            initConfigFile(options)
        })
}


function initConfigFile(options) {
    if (!options.Init && !options.i) {
        return;
    }
    generateConfigFile();
}



function dsnUtilHelp(options) {
    if (!Object.keys(options).length || options.h || options.H) {
        console.log(removeSpace(`
            dsnutil dsn的工具函数，简写du
                -h|-H 查看帮助
                -init|-i  将配置文件生成
            `))
    }
}



export { initDsnUtilCmd };















export * from './content_replace.mjs'
export * from './dsn_util.mjs'


