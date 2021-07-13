
import fs from 'fs-extra'

function getDsnConfig(configpath = './dsn.config.json') {
    const isConfig = fs.existsSync(configpath);
    const dsnConfig = { defaultConfig: null, customConfig: null };
    if (isConfig) {
        dsnConfig.customConfig = JSON.parse(
            (fs.readFileSync(configpath)).toString()
        );
    } else {
        dsnConfig.defaultConfig = JSON.parse(fs.readFileSync
            (new URL('../../dsn.config.json', import.meta.url)).toString()
        );
    }
    return dsnConfig;
}


function generateConfigFile() {
    const isConfig = fs.existsSync('./dsn.config.json');
    if (isConfig) {
        console.log('配置文件已存在');
        return;
    }
    const data = fs.readFileSync
        (new URL('../../dsn.config.json', import.meta.url)).toString()
    fs.writeFileSync('./dsn.config.json', data);
    console.log('配置文件生成成功');
}


export { getDsnConfig, generateConfigFile }