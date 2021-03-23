/*
 * @Date: 2021-03-23 13:16:22
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-23 13:21:30
 */

class util {

    random = ('ds' + new Date().getTime()) + (Math.random() * 10000).toFixed(0)
    i = 0;
    constructor() {
    }

    getId() {
        return this.random + (this.i++);
    }

}

export const dsUtil = new util();