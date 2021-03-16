/*
 * @Date: 2021-02-22 17:42:52
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-16 17:33:25
 */
import { createStore, ObservableMap } from '@stencil/store';

export class dsStoreJs {

    private store: ObservableMap<any> = null;
    private onHandler = [];
    constructor(data) {
        this.store = createStore(data);
        this.store.use({
            set: (propName, currentValue, oldValue) => {
                console.log('store的set', propName, currentValue, oldValue)
                this.onHandler.forEach(da => {
                    if(da.firstProperty !== propName) {
                        return;
                    }
                    const value = da.propObject(this.store.state);
                    if(value === da.lastValue) {
                        return;
                    }
                    da.lastValue = value;
                    da.cb(value);
                })
            },
            get: (currentValue) => {
                console.log('store的get', currentValue)

            }
        })
    }

    on(propObject: string, cb) {
        console.log(`进行${propObject}属性的监听,会执行方法:`, cb);
        const parsePathFunction = this.parsePath(propObject);
        this.onHandler.push({
            propObject: parsePathFunction.cb,
            firstProperty: parsePathFunction.segments[0],
            lastValue: parsePathFunction.cb(this.store.state),
            cb
        });
    }


    parsePath(path) {
        const bailRE = /\[(\S+?)\]/g;
        const emptyRE = /\"|\'/g;
        const segments = path.replace(emptyRE, '').replace(bailRE, (_index, value) => {
            return '.' + value;
        }).split('.')
        // 闭包
        return {
            segments,
            cb: (obj) => {
                for (let i = 0; i < segments.length; i++) {
                    if (!obj) return
                    obj = obj[segments[i]] // 取出属性的值 所以这个地方会执行getter
                }
                return obj; // 返回属性的值
            }
        }
    }


}