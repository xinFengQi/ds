// 性能检测包——主要是为了读取一些信息，时间内存等

const startTime = new Date().getTime();
// 时间map
const timeMap = {
    '1':  {
        time: startTime,
        order: 1
    }
}

console.log('1-0:代码开始计时和计算内存')

function dsGetTime(id='1'){
    const currentTime = new Date().getTime();
    let logStr = id+ '-'
    if(timeMap.hasOwnProperty(id)) {
        const timeDiff = (currentTime - timeMap[id].time) / 1000  + 's';
        logStr = logStr + timeMap[id].order+ ':距离上次log执行时间:' + timeDiff
        timeMap[id].time = currentTime
    } else {
        timeMap[id] = {
            time: currentTime,
            order: 1 
        }
        logStr = logStr + timeMap[id].order+ ':id为'+id+'的log开始计时'
    }
    timeMap[id].order =  timeMap[id].order + 1;
    logStr = logStr + ';代码已执行时间:' + (currentTime-startTime)/1000 + 's'
    console.log(logStr)
}

// 内存
// process.memoryUsage
// { rss: 130772992,  // 总内存占用
//     heapTotal: 121925632, // 堆占用的内存，包括用到的和没用到的。
//     heapUsed: 106210400, // 用到的堆的部分
//     external: 2984477 } // V8 引擎内部的 C++ 对象占用的内存。
console.log(process.memoryUsage())
const startMemory = process.memoryUsage()
const memoryMap = {
    '1': {
        memory: startMemory,
        order: 1
    }
}

function getM(num) {
    return (num / 1024 /1024).toFixed(2) + 'M' 
}

function dsGetMemory(id='1'){
    const currentMemory = process.memoryUsage();
    let logStr = id+ '-'
    if(memoryMap.hasOwnProperty(id)) {
        const memoryRssDiff = getM(currentMemory.rss - memoryMap[id].memory.rss);
        const memoryHeapUsedDiff = getM(currentMemory.heapUsed - memoryMap[id].memory.heapUsed);
        logStr = logStr + memoryMap[id].order+ ':距离上次log执行内存增加:' + memoryRssDiff;
        logStr = logStr + ';堆内存增加:' + memoryHeapUsedDiff
        memoryMap[id].memory = currentMemory
    } else {
        memoryMap[id] = {
            time: currentMemory,
            order: 1 
        }
        logStr = logStr + memoryMap[id].order+ ':id为'+id+'的log开始计算内存'
    }
    memoryMap[id].order =  memoryMap[id].order + 1;
    logStr = logStr + ';代码已执行内存中增加:' + getM(currentMemory.rss - startMemory.rss);
    logStr = logStr + ';堆内存增加:' + getM(currentMemory.heapUsed - startMemory.heapUsed);
    console.log(logStr)
}


function dsGetLog(id='1') {
    dsGetTime(id)
    dsGetMemory(id)
}


module.exports = {
    dsGetTime,
    dsGetMemory,
    dsGetLog
}