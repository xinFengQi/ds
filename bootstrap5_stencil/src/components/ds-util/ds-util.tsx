import { Component, h, Prop, Method, Element } from '@stencil/core';
import { DataType } from '../../interface/type.interface';
import { ValueVerifyFunReturn, GenericsNode, PropNodeKeys } from './ds-util-model';

/**
 * @componentName 工具函数
 * @componentType 工具
 * @lib true
 *
 */
@Component({
  tag: 'ds-util',
  shadow: false,
})
export class DsUtil {
  @Element() hostDiv: HTMLElement;

  /** 初始化信息 */
  @Method()
  async init() {
    return this.hostDiv;
  }
  /** 递归获取节点,筛选自己需要的属性值 */
  @Method()
  async getRecurveNode<T extends GenericsNode<T>, K extends keyof T>(nodes: GenericsNode<T>[], keys: K[], childKey: PropNodeKeys = 'childrens') {
    if (!nodes || !Array.isArray(nodes)) {
      return [];
    }
    const newNodes: T[] = [];
    await nodes.forEach(async (v: T) => {
      const obj = {} as T;
      keys &&
        keys.forEach(vKey => {
          obj[vKey] = v[vKey];
        });
      newNodes.push({
        ...obj,
        [childKey]: await this.getRecurveNode(v[childKey] as T[], keys, childKey),
      });
    });
    return newNodes;
  }
  @Prop()
  getRecurveNodeSync = <T extends GenericsNode<T>, K extends keyof T>(nodes: GenericsNode<T>[], keys: K[], childKey: PropNodeKeys = 'childrens') => {
    if (!nodes || !Array.isArray(nodes)) {
      return [];
    }
    const newNodes: T[] = [];
    nodes.forEach(async (v: T) => {
      const obj = {} as T;
      keys &&
        keys.forEach(vKey => {
          obj[vKey] = v[vKey];
        });
      newNodes.push({
        ...obj,
        [childKey]: this.getRecurveNodeSync(v[childKey] as T[], keys, childKey),
      });
    });
    return newNodes;
  };

  /** 判断两个数值是否相同 */
  @Prop() isEqualSync = (a: any, b: any) => {
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
  @Prop()
  valueVerifySync = (value: string, type: DataType): ValueVerifyFunReturn => {
    let flag: ValueVerifyFunReturn = { valid: false, realValue: null };
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
      } catch (error) {
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
      } catch (error) {
        flag.valid = true;
      }
      return flag;
    }
    flag.realValue = value;
    return flag;
  };

  /**防抖函数 */
  @Prop() debounceTimeSync = (fun: Function, time: number) => {
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

  render() {
    return <div></div>;
  }
}
