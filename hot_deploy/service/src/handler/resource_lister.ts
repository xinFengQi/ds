import * as os from 'os';
import * as osUtils from 'os-utils';
import * as process_cmd from 'child_process';
import * as iconv from 'iconv-lite';

// 当前进程数据
// 当前进程使用情况
function current_process() {
    // heapTotal 和 heapUsed 代表 V8 的内存使用情况。
    // external 代表 V8 管理的，绑定到 Javascript 的 C++ 对象的内存使用情况。
    // rss 是驻留集大小, 是给这个进程分配了多少物理内存（占总分配内存的一部分），包含所有的 C++ 和 JavaScript 对象与代码。
    // arrayBuffers 指分配给 ArrayBuffer 和 SharedArrayBuffer 的内存，包括所有的 Node.js Buffer
    const info = process.memoryUsage();
    console.log('总分配内存', (info.rss / 1024 / 1024).toFixed(2) + 'M')
    console.log('V8的总内存', (info.heapTotal / 1024 / 1024).toFixed(2) + 'M')
    console.log('V8的内存已使用', (info.heapUsed / 1024 / 1024).toFixed(2) + 'M')
    console.log('内存使用占比', ((info.heapUsed / info.heapTotal) * 100).toFixed(2) + '%')
}

// 当前服务器资源使用情况
async function current_os() {
    const ostype = os.type();
    const allMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + 'G';
    const cpuAlreadyUse = <string>await os_cpu();
    const upnetUse = currentNet(4, <string>await os_upnet());
    const memoryAlreadyUse = ((os.freemem() / os.totalmem()) * 100).toFixed(2) + '%';
    // console.log('操作系统', ostype)
    // console.log('内存空闲空间', (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + 'G');
    // console.log('总内存', allMemory);
    // console.log('内存使用率', memoryAlreadyUse);
    // console.log('cup使用率', cpuAlreadyUse)
    // console.log('上行网速：', upnetUse)
    return {
        ostype,
        allMemory,
        cpuAlreadyUse,
        upnetUse,
        memoryAlreadyUse
    }
}


// 获取cpu的使用率
function os_cpu() {
    return new Promise((res, rej) => {
        osUtils.cpuUsage(function (value) {
            // currCPU = value;
            res((value * 100.0).toFixed(2) + "%")
        });
    })
}

function os_upnet() {
    return new Promise((reslove, reject) => {
        const cmd_on = process_cmd.exec('ping www.baidu.com', { encoding: 'buffer' }, function (error, stdout, stderr) {
            if (error) {
                reject(error)
                console.log("error:" + error);
            }
            const info = iconv.decode(stdout, 'cp936').replace(/ /g, '');
            if (info.includes('丢失=0') || info.includes('Lost=0')) {
                console.log('网络正常')
            }
            let avg_time = '0ms';
            if (info.includes('平均=')) {
                avg_time = info.split('平均=')[1];
            } else if (info.includes('Average=')) {
                avg_time = info.split('Average=')[1];
            }
            reslove(avg_time)
            // console.log('平均4KB时间', avg_time)
            // console.log("stdout:" + info.toString());
            // console.log("stderr:" + stderr);
        });

        if (cmd_on.stdout) {
            cmd_on.stdout.on('data', data => {
                // console.log(iconv.decode(data, 'cp936'))
            })
        }
    })
}

// 计算网速
function currentNet(netData: number, netTime: string) {
    let time = '0kb/s';
    if (netTime.includes('ms')) {
        const netTimeNum = Number(netTime.replace('ms', ''));
        if (!isNaN(netTimeNum)) {
            time = ((1000 / netTimeNum) * netData).toFixed(0) + 'kb/s';
        }
    } else if (netTime.includes('s')) {
        const netTimeNum = Number(netTime.replace('s', ''));
        if (!isNaN(netTimeNum)) {
            time = (netData / netTimeNum).toFixed(0) + 'kb/s';
        }
    }
    return time;
}



export {
    current_os
}
