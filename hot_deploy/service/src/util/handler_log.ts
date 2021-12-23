import { createWriteStream, ensureFileSync } from 'fs-extra';

ensureFileSync('./log/log.txt');

var logger = createWriteStream('./log/log.txt',
    {
        flags: 'a' // 'a' means appending (old data will be preserved) 
    })

const showLog = function (oriLogFunc: any, io?: any) {
    return function () {
        //判断配置文件是否开启日志调试
        if (true) {
            try {
                if(io) {
                    io.emit('serverlog', { message: [...arguments] })
                }
                writerLog(...arguments)
                oriLogFunc.call(console, ...arguments);
            } catch (e) {
                console.error('console.log error', e);
            }
        }
    }
};

function writerLog(...arg: any) {
    arg = [...arg].map(
        v => {
            if(typeof v === 'object') {
                return JSON.stringify(v)
            } else {
                return v
            }
        });
    logger.write(arg.join('\n'))
    logger.write('\n')
}

// cmd显示的util
const cmdActiveUtil = (function () {
    let timer: any = null;
    const start = function () {
        if (timer) {
            return;
        }
        timer = setInterval(() => {
            // console.info('.');
            // io.emit('serverlogCommon', '.')
            process.stdout.write(".");
        }, 500)
    }
    const end = function () {
        clearInterval(timer)
        timer = null
    }
    return {
        start: start,
        end: end
    }
})();


export {
    showLog,
    cmdActiveUtil
}