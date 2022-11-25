/**
 * 迪菲-赫尔曼算法-密钥交换算法
 * 个人理解思路：
 * 1. 每个人有一个自己的私钥，向外公开一个公钥
 * 2. 如果想发信息给另外一个人，两人则取自己的私钥和对方的公钥进行加密，获取共享公开-私密密钥公开出去
 * 3. 两人拿到公开私密密钥混合自己的私钥获取同样的私密密钥，两人通过同样的私密密钥进行加密通话；
 * 
 * 基础数学知识
 * 1. 钟算：钟表上有12个数字，每次当针路过12时，都会从1开始计时
 * 2. 幂函数：同样数字的快捷算法
 * 
 * 
 * 算法简述
 * 1. 设置钟大小，钟大小必须是一个素数(只有1和其本身两个除数)
 * 2. 设置基数，基数必须时钟大小的本原根(暂不知其意)
 * 3. 使用基数及钟大小生成一个可以参照表格
 * 4. 一个个人类，每次会在参照表格中选取一个数字作为私钥
 * 5. 一个联系类，将两个人的类实例作为构造函数，获取共享的密钥
 */


const clockNum = 349;
const publicBaseNum = 2;
const baseNums = [1, 2, 3, 6];   // 这里使用生成本原根算法

/** 获取随机钟表数 */
function getRamonNum(nM=100, baseM=1000) {
    const n = parseInt((Math.random()*nM).toFixed(0));
    const baseNum = baseNums[parseInt((Math.random()*baseM) % 4)]
    // console.log('获取的幂数基数是：', baseNum, '获取随机幂数N为：', n);
    return Math.pow(baseNum, n);
}


/** 获取钟数的值 */
function getPersonClockNum(num) {
    return num % clockNum;
}

class RandomPerson {
    privateKey = '';
    publicKey = '';
    constructor(PrivateKey) {
        this.privateKey = getPersonClockNum(PrivateKey);
        this.publicKey = getPersonClockNum(Math.pow(publicBaseNum, this.privateKey));
        // console.log(`创建私钥为${this.privateKey},公钥为${this.publicKey}的实体`);
    }

    setOtherPublicKey(num) {
        return new relationPerson(this.privateKey, num)
    }

}

class relationPerson {

    relationKey = '';

    constructor(privateK, otherPublicKey) {
        this.relationKey = getPersonClockNum(Math.pow(otherPublicKey, privateK));
        // console.log(`获取的独立联系密钥为${this.relationKey}`)
    }
}


const a = new RandomPerson(getRamonNum(10,10));
const b = new RandomPerson(getRamonNum(10,10));
const c = new RandomPerson(getRamonNum(10,10));
const d = new RandomPerson(getRamonNum(10,10));
console.log(`a的公钥${a.publicKey},私钥${a.privateKey}`);
console.log(`b的公钥${b.publicKey},私钥${b.privateKey}`);
console.log(`c的公钥${c.publicKey},私钥${c.privateKey}`);
console.log(`d的公钥${d.publicKey},私钥${d.privateKey}`);

const ab = a.setOtherPublicKey(b.publicKey);
const ba = b.setOtherPublicKey(a.publicKey);

console.log(`a和b的独立联系密钥是：${ab.relationKey}`)
console.log(`b和a的独立联系密钥是：${ba.relationKey}`)

const ac = a.setOtherPublicKey(c.publicKey);
const ca = c.setOtherPublicKey(a.publicKey);
console.log(`a和c的独立联系密钥是：${ac.relationKey}`)
console.log(`c和a的独立联系密钥是：${ca.relationKey}`)

const ad = a.setOtherPublicKey(d.publicKey);
const da = d.setOtherPublicKey(a.publicKey);
console.log(`a和d的独立联系密钥是：${ad.relationKey}`)
console.log(`d和a的独立联系密钥是：${da.relationKey}`)
