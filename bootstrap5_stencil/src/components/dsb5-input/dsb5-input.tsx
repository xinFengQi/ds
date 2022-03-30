import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { BaseCompoent } from '../../core/BaseCompoent';
import { SizeType } from '../../interface/type.interface';

/**
 * @componentName 输入框
 * @componentType 表单
 * @slot prefix - 前缀
 * @slot suffix - 后缀
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

  /** placeholder值 */
  @Prop() placeholder: string;

  /**是否是错误 */
  @Prop() error: boolean;

  /** 按钮大小 */
  @Prop() size: SizeType | null = null;

  /** 当前的值 */
  @Prop() value: string = null;

  /** 值变化的事件 */
  @Event() valueChange: EventEmitter<string>;

  // 继承基础组件
  baseComponent = new BaseCompoent();

  connectedCallback() {
    this.baseComponent.connectedCallback(this.hostDiv, null, (slots) => {
      // 针对前后缀是纯文本增加类名
      const slot = ['prefix', 'suffix'];
      const element = ['span', 'label'];
      slots.forEach(v => {
        if(slot.includes(v.slot) && element.includes(v.localName.toLocaleLowerCase())) {
          v.classList.add('input-group-text')
        }
      })
    })
  }

  componentWillRender() {
  }


  // 数值更新
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
        <div class={{ 'input-group': true, [`input-group-${this.size}`]: !!this.size, 'error_border': this.error }}>
          <slot name='prefix'></slot>
          <input
            type="text"
            class={{ 'form-control': true, 'error_input_border': this.error }}
            value={this.value}
            onChange={el => this.onChange(el)}
            onInput={el => this.onChange(el)}
            placeholder={this.placeholder}
          ></input>
          <slot name='suffix'></slot>
        </div>
      </Host>
    );
  }
}
