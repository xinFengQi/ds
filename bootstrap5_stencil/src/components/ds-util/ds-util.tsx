import { Component, h, Prop, Method, Element } from '@stencil/core';
import { DataType } from '../../interface/type.interface';
import { valueVerifyFun, isEqualFun, ValueVerifyFunReturn } from './ds-util-fun';
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
