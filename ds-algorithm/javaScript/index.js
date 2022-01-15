const { dsGetTime, dsGetMemory, dsGetLog } = require('./util/performance_check.js')

const {
    removeBucketNum
} = require('./current_limiting/token_bucket');


dsGetLog()
const a = []
for (let index = 0; index < 10000000; index++) {
    a.push(index)
}

dsGetLog()


// 测试令牌桶
function extrue() {
    return new Promise((resolve, reject) => {
        let a = 0;
        for (let i = 0; i < 1000; i++) {
            a = a + i;
        }
        resolve(true);
    })
}

for(i=0; i<4000; i++) {
    if(removeBucketNum(1)) {
        extrue().then(v => {
            console.log(i)
        })
    } else {
        console.log(i)
    }
}