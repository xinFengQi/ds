const { reverse } = require("dns");
const { resolve } = require("path");
const { rejects } = require("assert");

const a = "345  ";

String.prototype.trima = function() {
    const a = this.toString();
    if(typeof(a) === 'string') {
        let startIndex = 0, endIndex = a.length, strLength = a.length;
        for (let index = 0; index < strLength; index++) {
            const element = a[index];
            if(element !== ' ' && startIndex === 0) {
                startIndex = index;
                break;
            } 
        }
        for (let index = strLength - 1; index > -1 ; index--) {
            const element = a[index];
            if(element !== ' ' && endIndex === strLength) {
                endIndex = index + 1;
                break;
            } 
        }
        return a.slice(startIndex, endIndex)
    } else {
        throw '参数不是字符串'
    }
}



console.log(a.trima())


function reverseMethod(str){
    const outstr = [];
    let len = str.length;
    for (let index = len - 1; index > -1; index--) {
        const element = str[index];
        outstr.push(element)
    }
    return outstr.join('')
}

console.log(reverseMethod(a))

const ArrayA = [1,2,3,4,5,6,7,8,9,9,10];
const NumB = 15

function ArrayATwoAddNumB(ArrayA, NumB) {
    const ArrayALen = ArrayA.length;
    const outArr = []
    for (let index = 0; index < ArrayALen; index++) {
        const element = ArrayA[index];
        const differenceValue = NumB - element;
        const Otherindex = ArrayA.findIndex(v => v === differenceValue);
        if(Otherindex > -1 && Otherindex !== index && Otherindex > index) {
            outArr.push([index, Otherindex])
        }
    }
    return outArr
}

console.log(ArrayATwoAddNumB(ArrayA, NumB))



const oneTime = ["11:22", "22:21", "02:23", "22: 22"];

function timedifferenceMin(timeArr) {
    const toggleValue = (str) => {
        const strArr = str.split(':').map(v => {
            if(isNaN(Number(v))) {
                return ''
            }  else {
                return Number(v)
            }
        })
        if(!!strArr[0] && !!strArr[1] ) {
            return strArr[0] * 60 + strArr[1] 
        } else {
            return ''
        }
    }
    const outTimeNum = timeArr.map(v => toggleValue(v)).filter(v => !!v)
    // 求差算法 暴力
    const len1 = outTimeNum.length;
    const diffValue = []
    for (let i = 0; i < len1; i++) {
        const a = outTimeNum[i];
        for (let j = i + 1; j < len1; j++) {
            const b = outTimeNum[j];
            diffValue.push(Math.abs(a - b));
        }
    }
    // 最小值算法 (排序)
    diffValue.sort( (a, b) => {
        return a-b;
      })
    
    return diffValue[0]
}

console.log(timedifferenceMin(oneTime))


const userId = "24536457568679"
let  i = 0

/**
 *
 *
 * @param {*} userId   id参数
 * @param {*} ajaxPromiss ajax请求方法， promiss,具体看例子
 * @returns 
 */
function getUersById(userId, ajaxPromiss){
    const userObj = {};
    return new Promise((resolve, reject) => {
        if(userObj.hasOwnProperty(userId)) {
            resolve(userObj[userId])
        } else {
            ajaxPromiss.then(
                v => {
                    resolve(v)
                }
            ).catch(
                err => reject(err)
            )
        }
    })
   
}

// 模拟ajax请求
const getUserInfo = (user) => {
    return new Promise((resolve, rejects) => {
        console.log('跑了一次')
        resolve({name: '请求测试'})
    })
}
const methos = getUersById(userId, getUserInfo(userId));

methos.then(
    v => {
        console.log('得到结果1', v)
    }   
)
methos.then(
    v => {
        console.log('得到结果2', v)
    }
)

const getSchoolInfo = (user) => {
    return new Promise((resolve, rejects) => {
        console.log('跑一次')
        resolve({name: '请求测试新的'})
    })
}

const schoolmethos = getUersById(userId, getSchoolInfo(userId));


schoolmethos.then(
    v => {
        console.log('得到结果1', v)
    }
)
schoolmethos.then(
    v => {
        console.log('得到结果2', v)
    }
)