

/**
 * 令牌桶算法
 * 1. 需要一个桶，限制范围的桶
 * 2. 每次会减少桶中的内容，
 * 3. 如果桶中没有数据，则不允许执行
 */


let time = 500;

let bucketNum = 1000;
/** 
 * 计算频率 frequencyNum/ time  每个单位时间内的请求量
 * 每固定时间清空一次频率计数
 */
let frequencyNum = 0;


function settingBucket(bucketNumParams, timeParams) {
    time = timeParams;
    bucketNum = bucketNumParams;
    setTimeout(() => {
        addBucketNum(frequencyNum ? frequencyNum / 3 : bucketNum / 5);
    }, time)

}



function addBucketNum(num) {
    bucketNum = bucketNum + num;
    bucketNum = bucketNum > 100 ? bucketNum : 100;
}

function removeBucketNum(num) {
    frequencyNum = frequencyNum + num;
    bucketNum = bucketNum - num;
    if (bucketNum < 0) {
        bucketNum = 0;
        return false;
    }
    return true;
}


module.exports = {
    removeBucketNum,
    settingBucket
}