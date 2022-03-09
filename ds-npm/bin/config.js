#!/usr/bin/env node

import program from 'commander' // 设计命令行
import fs from 'fs-extra'
import logSymbols from 'log-symbols'
import chalk from 'chalk'


program.command('config').alias('dc')
    .option('-init, --i', '初始化配置文件')
    .option('-update, --u', '更新配置文件')
    .option('--stencli', '加入配置文件生成的可选项')
    .option('--gitee', '加入配置文件生成的可选项')
    .option('-token <access_token>', '写入gitee的配置')
    .option('-repo <repo>', '写入gitee的配置')
    .option('-owner <owner>', '写入gitee的配置')
    .description('dsn的配置命令集合,可使用--help查看细节')
    .action((options) => {
        console.log(options)
        // 写配置
        if (options.Token || options.Repo || options.Owner) {
            setGiteeConfig(options);
        }
        if (options.Init || options.i) {
            initConfigFile(options)
        }

    })


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

if (process.argv[1].indexOf('config.js') > -1) {
    const data = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)).toString());
    // dsn -V|--version
    program.version(data.version);

    program.parse(process.argv);
}


