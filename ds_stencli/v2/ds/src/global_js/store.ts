/*
 * @Date: 2021-02-22 17:42:52
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-17 14:06:15
 */
import { createStore, ObservableMap } from '@stencil/store';


// 保存的监听方法
interface HandlerOnCache {
    propObject: (...arg) => any;
    firstProperty: string;
    lastValue: any;
    cb: (...arg) => any;
    count: number;
}
export class dsStoreJs {


    private count = 0;
    // 储存strncli的store实例
    private store: ObservableMap<any> = null;
    // 缓存监听事件，执行监听方法
    private onHandler: HandlerOnCache[] = [];
    // 缓存通过路径读取或写入的方法事件
    parsePathMap = {};


    constructor(data) {
        this.store = createStore(data);
        this.store.use({
            set: (propName, currentValue, oldValue) => {
                console.log(`%cstore的set:%o,%o,%o`, "color: red", propName, currentValue, oldValue)
                this.onHandler.forEach(da => {
                    if (da.firstProperty !== propName) {
                        return;
                    }
                    const value = da.propObject(this.store.state);
                    if (value === da.lastValue) {
                        return;
                    }
                    da.lastValue = value;
                    da.cb(value);
                })
            },
            get: (currentValue) => {
                console.log('%cstore的get:%o', "color: red", currentValue)

            }
        })
    }

    on(propObject: string, cb: (...arg) => any) {
        console.log(`%c进行${propObject}属性的监听,会执行方法:%o`, "color: red", cb);
        const parsePathFunction = this.parsePath(propObject);
        this.onHandler.push({
            propObject: parsePathFunction.get,
            firstProperty: parsePathFunction.segments[0],
            lastValue: parsePathFunction.get(this.store.state),
            cb,
            count: this.count++
        });
        return this.count;
    }

    destory(count: number) {
        const index = this.onHandler.findIndex(v => v.count === count);
        if (index > -1) {
            this.onHandler.splice(index, 1);
        }
    }

    storeGet(path: string) {
        const parsePathData = this.parsePath(path);
        return parsePathData.get(this.store.state);
    }


    storeSet(path: string, value: any) {
        const parsePathData = this.parsePath(path);
        const lastValue = this.store.state[parsePathData.segments[0]];
        const currentValue = parsePathData.set(this.store.state[parsePathData.segments[0]], value);
        if (Array.isArray(lastValue)) {
            this.store.state[parsePathData.segments[0]] = [...currentValue];
        } else {
            this.store.state[parsePathData.segments[0]] = { ...currentValue };
        }
    }




    // 将字符串类型通过对象生成数据
    parsePath(path: string): { segments: string[], get: (arg: Object) => any , set:(arg,value) => any} {
        const isNotIncloudsArray = path.indexOf('[') < 0;
        if (isNotIncloudsArray && this.parsePathMap[path]) {
            return this.parsePathMap[path]
        }
        const bailRE = /\[(\S+?)\]/g;
        const emptyRE = /\"|\'/g;
        const segments = path.replace(emptyRE, '').replace(bailRE, (_index, value) => {
            return '.' + value;
        }).split('.');
        const len = segments.length;
        const parsePathMapOne = {
            segments,
            get: (obj) => {
                if (!obj) return null;
                if(len === 1) return obj;
                for (let i = 0; i < len; i++) {
                    obj = obj[segments[i]] // 取出属性的值 所以这个地方会执行getter
                }
                return obj; // 返回属性的值
            },
            set: (obj, value) => {
                if (!obj) return null;
                let objCache = obj;
                for (let i = 1; i < len - 1; i++) {
                    objCache = objCache[segments[i]] // 取出属性的值 所以这个地方会执行getter
                }
                objCache[segments[len - 1]] = value;
                return obj
            }
        }
        if (isNotIncloudsArray) {
            this.parsePathMap[path] = parsePathMapOne;
        }
        // 闭包
        return parsePathMapOne;
    }


}