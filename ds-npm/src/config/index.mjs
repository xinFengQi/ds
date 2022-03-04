import program from 'commander' // 设计命令行
import fs from 'fs-extra'
import logSymbols from 'log-symbols'
import chalk from 'chalk'

function initDsnConfigCmd() {
    program.command('config').alias('dc')
        .option('-H').option('--h')// 帮助
        .option('-init').option('-i') // 将配置文件生成
        .option('-update').option('-u') // 将配置文件生成
        .option('--stencli').option('--gitee') // 将配置文件生成
        .option('-token <access_token>') // 写入token
        .option('-repo <repo>') // 写入token
        .option('-owner <owner>') // 写入token
        .description('dsn的配置及版本处理')
        .action((options) => {
            console.log(options)
            if (options.Init || options.i) {
                initConfigFile(options)
            }
            // 写配置
            if (options.Token || options.Repo || options.Owner) {
                setGiteeConfig(options);
            }
            dsnUtilHelp(options)

        })
}


// 初始化配置
function initConfigFile(options) {
    const isConfig = fs.existsSync('./dsn.config.json');
    if (isConfig) {
        // todo 后期增量新增配置
        console.log(logSymbols.warning, chalk.yellow('配置文件已存在,请删除重新创建或者进行更新使用 dc -update'));
        return;
    }
    const data = fs.readFileSync
        (new URL('../../dsn.config.json', import.meta.url)).toString()
    const generateArr = ['gitee_info'];
    if (options.stencli) {
        generateArr.push('_stencil');
        generateArr.push('stencil');
    }
    if (options.gitee) {
        generateArr.push('_gitee');
        generateArr.push('gitee');
    }
    if (options.file) {
        generateArr.push('_fileHandler');
        generateArr.push('fileHandler');
    }
    const getAllConfig = lopoForEmpty(JSON.parse(data), generateArr);

    fs.writeFileSync('./dsn.config.json', JSON.stringify(getAllConfig));
    console.log(logSymbols.success, chalk.green('配置文件生成成功'));
}

// 递归清空当前配置
function lopoForEmpty(data, arr) {
    let keys = [];
    // 只选择要生成的配置
    if (arr && arr.length > 1) {
        Object.keys(data).forEach(k => {
            if (arr.includes(k)) {
                keys.push(k)
            } else {
                delete data[k]
            }
        })
    } else {
        keys = Object.keys(data);
    }
    keys.forEach(key => {
        if (key.startsWith('_')) {
            return;
        }
        if (typeof (data[key]) === 'string') {
            data[key] = '';
        } else if (typeof (data[key]) === 'object') {
            if (Array.isArray(data[key])) {
                if (typeof data[key][0] === 'string') {
                    data[key] = []
                } else if (typeof data[key][0] === 'object') {
                    data[key].forEach(dk => {
                        lopoForEmpty(dk)
                    })
                }
            } else {
                lopoForEmpty(data[key])
            }
        } else if (typeof (data[key]) === 'number') {
            data[key] = 0;
        }
    })
    return data;
}

// 写入配置
function setGiteeConfig(options) {
    const data = JSON.parse(fs.readFileSync(new URL('../../dsn.config.json', import.meta.url)).toString());
    if (options.Token) {
        console.log(logSymbols.info, `access_token配置从${data.gitee_info.access_token}修改为${options.Token}`);
        data.gitee_info.access_token = options.Token;
    }
    if (options.Repo) {
        console.log(logSymbols.info, `repo配置从${data.gitee_info.repo}修改为${options.Repo}`);
        data.gitee_info.repo = options.Repo;
    }
    if (options.Owner) {
        console.log(logSymbols.info, `owner配置从${data.gitee_info.owner}修改为${options.Owner}`);
        data.gitee_info.owner = options.Owner;
    }
    fs.writeFileSync(new URL('../../dsn.config.json', import.meta.url), JSON.stringify(data))
    console.log(logSymbols.success, `配置写入成功`);
}




function dsnUtilHelp(options) {
    if (options.h || options.H) {
        console.log(removeSpace(`
            config dsn的配置及版本处理，简写dc
                --h|-H 查看帮助
                -init|-i  将配置文件生成
                    --stencli 生成stencli的配置
                    --gitee 生成上传gitee的配置
                    --file 生成上传gitee的配置
                -token <access_token> 设置access_token
                -repo <repo> 设置repo
                -owner <owner> 设置owner
            `))
    }
}



export { initDsnConfigCmd };
export * from './config_handler.mjs'
