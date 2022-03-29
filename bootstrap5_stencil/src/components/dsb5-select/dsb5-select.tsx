import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';

/**
 * @componentName 下拉列表
 * @componentType 表单
 *
 */
@Component({
  tag: 'dsb5-select',
  styleUrl: 'dsb5-select.css',
  shadow: false,
  scoped: true,
})
export class Dsb5Select {
  @Element() hostDiv: HTMLElement;

  selectEl: HTMLSelectElement;
  /** 当前的值 */
  @Prop() value: any = null;
  /** 值变化的事件 */
  @Event() valueChange: EventEmitter<any>;

  componentDidLoad() {
    this.selectValue();
  }

  componentShouldUpdate(oldData, newData, prop) {
    console.log(oldData, newData, prop, '===============')
    if (prop === 'value') {
      return oldData !== newData;
    }
    return true;
  }

  // 获取value值后赋值
  selectValue() {
    if (!this.selectEl) {
      return;
    }
    const child = this.selectEl.children;
    const len = child.length;
    for (let i = 0; i < len; i++) {
      const el: any = child.item(i);
      if (child.item(i)?.localName === 'option') {
        el.value === this.value ? (el.selected = true) : (el.selected = false);
      }
    }
  }

  // 数据改变
  onChange(el: any) {
    this.valueChange.emit(el.target.value);
  }

  render() {
    return (
      <Host>
        <select ref={el => (this.selectEl = el)} onChange={el => this.onChange(el)} class="form-select" aria-label="Default select example">
          <slot></slot>
        </select>
      </Host>
    );
  }
}
