import { r as registerInstance, h } from './index-389a1a77.js';
import { D as DataType } from './type.interface-4c7cb78a.js';

function valueVerifyFun(value, type) {
  let flag = { valid: false, realValue: value };
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
    catch (error) { }
    return flag;
  }
  if (type === DataType.array || type === DataType.json) {
    try {
      flag.realValue = JSON.parse(value);
      if (typeof flag.realValue === 'object') {
        flag.valid = false;
      }
    }
    catch (error) { }
    return flag;
  }
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
  }
  render() {
    return h("div", null);
  }
};

export { DsUtil as ds_util };
