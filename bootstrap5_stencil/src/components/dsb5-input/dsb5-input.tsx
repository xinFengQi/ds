import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';

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

  /** placeholder值 */
  @Prop() placeholder: string;

  /**是否是错误 */
  @Prop() error: boolean;

  /** 当前的值 */
  @Prop({ mutable: true }) value: any = null;
  /** 值变化的事件 */
  @Event() valueChange: EventEmitter<any>;

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
        <div class="input-group">
          <input type="text" class={{'form-control': true, error_border: this.error}} value={this.value} onChange={el => this.onChange(el)} onInput={el => this.onChange(el)} placeholder={this.placeholder}></input>
        </div>
      </Host>
    );
  }
}
