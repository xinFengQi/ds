import { getExtensionApi, isBrowserExtebsion } from './environment';

// 订阅数据监听的代码
let subIndex = 0;
let subs: any[] = [];
function setWebLocalStorgeValue(value: any) {
    if (typeof value === 'number') {
        return value + '';
    } else if (typeof value === 'object') {
        return JSON.stringify(value);
    } else if (!value) {
        value = '';
    }
    return value;
}

function getWebLocalStorgeValue(value: any) {
    if(value === 'null') {
        return '';
    }
    if (!isNaN(Number(value))) {
        return Number(value);
    } else if (value.startsWith('[') && value.endsWith(']')) {
        return JSON.parse(value);
    }
    return value;
}

// 设置变量
function setLocalVariable(key: string, value: any) {
    return new Promise((resolve) => {
        if (isBrowserExtebsion()) {
            if (!getExtensionApi() || !getExtensionApi().storage) {
                resolve(null);
                return;
            }
            getExtensionApi().storage.local.set({ [key]: value }, () => {
                resolve(true);
            });
            return;
        }
        localStorage.setItem(key, setWebLocalStorgeValue(value));
        resolve(true);
        subs.filter((v) => v.key === key).forEach((v) => {
            v.fn.apply(null, [value]);
        });
    });
}

// 获取变量
function getLocalVariable(key: string) {
    return new Promise((resolve) => {
        if (isBrowserExtebsion()) {
            if (!getExtensionApi() || !getExtensionApi().storage) {
                resolve(null);
                return;
            }
            getExtensionApi().storage.local.get(
                { [key]: null },
                (item: any) => {
                    resolve(item[key]);
                }
            );
            return;
        }
        const data = localStorage.getItem(key);
        if (data) {
            resolve(getWebLocalStorgeValue(data)) ;
        } else {
            resolve(null);
        }
    });
}

function getLocalVariableSub(key: string, cb: Function) {
    subIndex = subIndex + 1;
    getLocalVariable(key).then((data) => {
        cb(data);
    });
    subs.push({ id: subIndex, key, fn: cb });
    return subIndex;
}

function deleteLocalVariableSub(subI: number) {
    subs = subs.filter((v) => v.id !== subI);
}



export default {
    deleteLocalVariableSub,
    getLocalVariableSub,
    getLocalVariable,
    setLocalVariable
}