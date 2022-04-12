import { r as registerInstance, h, g as getElement } from './index-4c5a6b9b.js';
import { D as DataType } from './type.interface-66dd2cb8.js';

const DsUtil = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.getRecurveNodeSync = (nodes, keys, childKey = 'childrens') => {
      if (!nodes || !Array.isArray(nodes)) {
        return [];
      }
      const newNodes = [];
      nodes.forEach(async (v) => {
        const obj = {};
        keys &&
          keys.forEach(vKey => {
            obj[vKey] = v[vKey];
          });
        newNodes.push(Object.assign(Object.assign({}, obj), { [childKey]: this.getRecurveNodeSync(v[childKey], keys, childKey) }));
      });
      return newNodes;
    };
    /** 判断两个数值是否相同 */
    this.isEqualSync = (a, b) => {
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
    };
    /**值校验 */
    this.valueVerifySync = (value, type) => {
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
  /** 初始化信息 */
  async init() {
    return this.hostDiv;
  }
  /** 递归获取节点,筛选自己需要的属性值 */
  async getRecurveNode(nodes, keys, childKey = 'childrens') {
    if (!nodes || !Array.isArray(nodes)) {
      return [];
    }
    const newNodes = [];
    await nodes.forEach(async (v) => {
      const obj = {};
      keys &&
        keys.forEach(vKey => {
          obj[vKey] = v[vKey];
        });
      newNodes.push(Object.assign(Object.assign({}, obj), { [childKey]: await this.getRecurveNode(v[childKey], keys, childKey) }));
    });
    return newNodes;
  }
  render() {
    return h("div", null);
  }
  get hostDiv() { return getElement(this); }
};

export { DsUtil as ds_util };
