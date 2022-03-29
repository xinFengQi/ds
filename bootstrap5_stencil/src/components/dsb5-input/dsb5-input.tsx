import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { BaseCompoent } from '../../core/BaseCompoent';
import { SizeType } from '../../interface/type.interface';

/**
 * @componentName 输入框
 * @componentType 表单
 *
 */
@Component({
  tag: 'dsb5-input',
  styleUrl: 'dsb5-input.css',
  shadow: false,
  scoped: true,
})
export class Dsb5Input {
  @Element() hostDiv: HTMLElement;

  /** 是否是输入框组 */
  @Prop() type: 'group' | null = null;

  /** placeholder值 */
  @Prop() placeholder: string;

  /**是否是错误 */
  @Prop() error: boolean;

  /** 按钮大小 */
  @Prop() size: SizeType | null = null;

  /** 当前的值 */
  @Prop({ mutable: true }) value: any = null;

  /** 值变化的事件 */
  @Event() valueChange: EventEmitter<any>;

  // 继承基础组件
  baseComponent = new BaseCompoent();

  componentShouldUpdate(oldData, newData, prop) {
    if (prop === 'value') {
      return oldData !== newData;
    }
    return true;
  }

  // 数据改变
  onChange(el: any) {
    this.valueChange.emit(el.target.value);
  }

  render() {
    return (
      <Host>
        {this.type === 'group' ? (
          <div class={{ 'input-group': true, [`input-group-${this.size}`]: !!this.size }}>
            <slot></slot>
          </div>
        ) : (
          <div class={{ 'input-group': true, [`input-group-${this.size}`]: !!this.size }}>
            <input
              type="text"
              class={{ 'form-control': true, 'error_border': this.error }}
              value={this.value}
              onChange={el => this.onChange(el)}
              onInput={el => this.onChange(el)}
              placeholder={this.placeholder}
            ></input>
          </div>
        )}
      </Host>
    );
  }
}
