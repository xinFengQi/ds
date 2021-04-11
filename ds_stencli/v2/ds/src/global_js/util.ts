/*
 * @Date: 2021-03-23 13:16:22
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-29 11:08:37
 */

class util {

    random = ('ds' + new Date().getTime()) + (Math.random() * 10000).toFixed(0)
    i = 0;
    constructor() {
    }

    // 获取随机id
    getId() {
        return this.random + (this.i++);
    }

    // 节流函数 参数: 
    debounceTime(fun: Function, time: number) {
        let timer = null;
        return (...arg) => {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            timer = setTimeout(() => {
                fun.apply(arg)
            }, time)
        }
    }

}

export const dsUtil = new util();