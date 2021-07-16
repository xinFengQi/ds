class util {

    random = ('ds' + new Date().getTime()) + (Math.random() * 10000).toFixed(0)
    i = 0;
    constructor() {
    }

    /** 获取随机id: */
    public getId() {
        return this.random + (this.i++);
    }

    /** 节流函数 参数: */
    public debounceTime(fun: Function, time: number) {
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