import { r as registerInstance, h } from './index-4c5a6b9b.js';
import { D as DataType } from './type.interface-66dd2cb8.js';

function valueVerifyFun(value, type) {
  let flag = { valid: false, realValue: null };
  if (value === null || value === undefined) {
    return flag;
  }
  if (type === DataType.number) {
    flag.realValue = Number(value);
    flag.valid = isNaN(flag.realValue);
    return flag;
  }
  if (type === DataType.boolean) {
    try {
      flag.realValue = Boolean(value);
      flag.valid = false;
    }
    catch (error) {
      flag.valid = true;
    }
    return flag;
  }
  if (type === DataType.array || type === DataType.json) {
    try {
      flag.realValue = JSON.parse(value);
      if (typeof flag.realValue === 'object') {
        flag.valid = false;
      }
    }
    catch (error) {
      flag.valid = true;
    }
    return flag;
  }
  flag.realValue = value;
  return flag;
}
function isEqualFun(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  if (a === b) {
    return true;
  }
  if (typeof a === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return false;
}

const DsUtil = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** 判断两个数值是否相同 */
    this.isEqualSync = (a, b) => {
      return isEqualFun(a, b);
    };
    /**值校验 */
    this.valueVerifySync = (value, type) => {
      return valueVerifyFun(value, type);
    };
    /**防抖函数 */
    this.debounceTimeSync = (fun, time) => {
      let timer = null;
      return (...arg) => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(() => {
          fun.apply(arg);
        }, time);
      };
    };
  }
  render() {
    return h("div", null);
  }
};

export { DsUtil as ds_util };
