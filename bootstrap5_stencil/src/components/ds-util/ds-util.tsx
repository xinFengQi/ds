import { Component, h, Prop, Method, Element } from '@stencil/core';
import { DataType } from '../../interface/type.interface';
import { valueVerifyFun, isEqualFun, ValueVerifyFunReturn } from './ds-util-fun';

type PropKeys = string | 'childrens';
type GenericsInter<T> = {
  [z: string]: any | T[];
  childrens?: T[];
};

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
    this.getRecurveNode;
    return this.hostDiv;
  }
  /** 递归获取节点，去掉不需要的属性值 */
  @Method()
  async getRecurveNode<T extends GenericsInter<T>, K extends keyof T>(
    nodes: GenericsInter<T>[],
    keys: K[],
    childKey: PropKeys = 'childrens',
  ): Promise<Promise<{ [x: string]: T }>[] | []> {
    if (!nodes || !Array.isArray(nodes)) {
      return [];
    }
    const newNodes = nodes.map(async (v: T) => {
      const obj = {} as T;
      keys &&
        keys.forEach(vKey => {
          obj[vKey] = v[vKey];
        });
      return {
        ...obj,
        [childKey]: await this.getRecurveNode(v[childKey] as T[], keys, childKey),
      };
    });
    return newNodes;
  }

  /** 判断两个数值是否相同 */
  @Prop() isEqualSync = (a: any, b: any) => {
    return isEqualFun(a, b);
  };

  /**值校验 */
  @Prop()
  valueVerifySync = (value: string, type: DataType): ValueVerifyFunReturn => {
    return valueVerifyFun(value, type);
  };

  /**防抖函数 */
  @Prop()
  debounceTimeSync = (fun: Function, time: number) => {
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
