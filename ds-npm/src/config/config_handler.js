
const fs = require('fs');
const nodePath = require('path');


// 获取config的配置
module.exports.getDsnConfig = (configpath = './dsn.config.json') => {
    const isConfig = fs.existsSync(configpath);

    const dsnConfig = { defaultConfig: null, customConfig: null };
    if (isConfig) {
        dsnConfig.customConfig = JSON.parse(
            (fs.readFileSync(configpath)).toString()
        );
    }
    dsnConfig.defaultConfig = JSON.parse(fs.readFileSync
        (nodePath.resolve(__dirname, '../../dsn.config.json')).toString()
    );
    return dsnConfig;
}



