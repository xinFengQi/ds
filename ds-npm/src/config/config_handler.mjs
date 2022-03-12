
import fs from 'fs-extra'
import nodePath from 'path'

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





export { getDsnConfig }