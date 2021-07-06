const { dsGetTime, dsGetMemory,dsGetLog } = require('./util/performance_check.js')

dsGetLog()
const a = []
for (let index = 0; index < 10000000; index++) {
    a.push(index)
}

dsGetLog()