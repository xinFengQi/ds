
import path from 'path';
import { ConfigInterface } from './config.interface';

let env = process.env.NODE_ENV || 'production';
env = env.toLowerCase();

let config: ConfigInterface;
const flieNameMine = process.env.NODE_ENV?.trim() == 'development' ? 'ts': 'js'
// 载入配置文件
const file = path.resolve(__dirname, (env + '.config.'+flieNameMine).replace(' ', ''));
try {
    config = module.exports = require(file);
    console.log('加载: [%s] %s', env, file);
} catch (err) {
    console.error('Cannot load config: [%s] %s', env, file);
    throw err;
}


export default config;