import { Component, h, Method, Prop } from '@stencil/core';
import { DataType } from '../../interface/type.interface';
import { valueVerifyFun, isEqualFun } from './ds-util-fun';
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
  // 判断两个数值是否相同
  @Prop() isEqualSync = (a: any, b: any) => {
    return isEqualFun(a, b);
  };

  @Method()
  async isEqual(a: any, b: any) {
    return isEqualFun(a, b);
  }

  // 值校验
  @Prop()
  valueVerifySync = (value: string, type: DataType) => {
    return valueVerifyFun(value, type);
  };

  @Method()
  async valueVerify(value: string, type: DataType) {
    return valueVerifyFun(value, type);
  }

  render() {
    return <div></div>;
  }
}
