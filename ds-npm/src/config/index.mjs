import program from 'commander' // 设计命令行
import { generateConfigFile } from './config_handler.mjs'
function initDsnConfigCmd() {
    program.command('dsconfig')
        .alias('dc')
        .option('-H')
        .option('-h')   // 帮助
        .option('-init')
        .option('-i')    // 将配置文件生成
        .option('-token <access_token>') // 写入token
        .option('-repo <repo>') // 写入token
        .option('-owner <owner>') // 写入token
        .description('dsn的配置及版本处理')
        .action((options) => {
            console.log(options)
            initConfigFile(options)
            dsnUtilHelp(options)
        })
}


// 初始化配置
function initConfigFile(options) {
    if (!options.Init && !options.i) {
        return;
    }
    generateConfigFile();
}

// 写入配置
function setGiteeConfig(options) {
    if(options.Token) {
        
    }

}


function dsnUtilHelp(options) {
    if (!Object.keys(options).length || options.h || options.H) {
        console.log(removeSpace(`
        dsconfig dsn的配置及版本处理，简写dc
                -h|-H 查看帮助
                -init|-i  将配置文件生成
            `))
    }
}



export { initDsnConfigCmd };
export * from './config_handler.mjs'
