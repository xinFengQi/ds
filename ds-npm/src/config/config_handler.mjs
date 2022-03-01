
import fs from 'fs-extra'
import logSymbols from 'log-symbols'
import chalk from 'chalk'

// 获取config的配置
function getDsnConfig(configpath = './dsn.config.json') {
    const isConfig = fs.existsSync(configpath);

    const dsnConfig = { defaultConfig: null, customConfig: null };
    if (isConfig) {
        dsnConfig.customConfig = JSON.parse(
            (fs.readFileSync(configpath)).toString()
        );
    }

    dsnConfig.defaultConfig = JSON.parse(fs.readFileSync
        (new URL('../../dsn.config.json', import.meta.url)).toString()
    );
    return dsnConfig;
}


// 生成配置文件
function generateConfigFile() {
    const isConfig = fs.existsSync('./dsn.config.json');
    if (isConfig) {
        console.log(logSymbols.warning, chalk.yellow('配置文件已存在'));
        return;
    }
    const data = fs.readFileSync
        (new URL('../../dsn.config.json', import.meta.url)).toString()
    fs.writeFileSync('./dsn.config.json', data);
    console.log(logSymbols.success, chalk.green('配置文件生成成功'));
}



export { getDsnConfig, generateConfigFile }