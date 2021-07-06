/*
 * @Date: 2021-03-29 15:07:17
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-30 17:58:10
 */
import { Component, Host, h, Element, State, Prop, Event, EventEmitter } from '@stencil/core';

export type CheckStatus = 'none' | 'part' | 'all';

@Component({
  tag: 'ds-checkbox',
  styleUrl: 'ds-checkbox.css',
  shadow: true,
})
export class DsCheckbox {

  @Element() el: HTMLElement;

  /** 当前的选择的样式 */
  @Prop({ mutable: true }) checkStatus: CheckStatus = 'part';
  @Event() checkStatusChange: EventEmitter<CheckStatus>;

  @State() isDisabled = false;

  inputEl: HTMLInputElement;


  componentDidLoad() {
    this.el.style.display = "block"
  }

  componentDidRender() {
    // 将元素的attr加入到内部的标签中
    const h5Attr = ['disabled'];
    h5Attr.forEach(item => {
      const elAttr = this.el.attributes.getNamedItem(item);
      if (elAttr) {
        const attr = document.createAttribute(item);
        attr.value = elAttr.value;
        this.inputEl.attributes.setNamedItem(attr)
      }
    });
  }

  componentShouldUpdate(newValue, _oldValue, propName) {
    if (propName === 'checkStatus') {
      this.changeStatus(newValue);
    }
  }

  changeStatus = (newValue: CheckStatus) => {
    if (newValue === 'none') {
      this.inputEl.checked = false;
    } else if (newValue === 'all') {
      this.inputEl.checked = true;
    }
  }

  // 得到是否是不可以状态
  getDisabled = () => {
    return !!this.el.attributes.getNamedItem('disabled')
  }

  // 得到input样式
  getInputClass = () => {
    const isDisabled = this.getDisabled();
    return {
      checkbox_class: this.checkStatus !== 'part',
      checkbox_class_disabled: this.checkStatus !== 'part' && isDisabled,
      checkbox_class_part: this.checkStatus === 'part' && !isDisabled,
      checkbox_class_part_disabled: this.checkStatus === 'part' && isDisabled,
    }
  }

  // 多选框点击事件
  checkClick = () => {
    if (this.inputEl.checked) {
      this.checkStatus = 'all'
    } else {
      this.checkStatus = 'none'
    }
    this.checkStatusChange.emit(this.checkStatus);
  }

  render() {
    return (
      <Host>
        <div class={{ host_div: true, host_disabled: this.getDisabled() }}>
          <input onClick={this.checkClick} type="checkbox" ref={(el) => this.inputEl = el}
            class={this.getInputClass()}
          ></input>
          <slot></slot>
        </div >
      </Host>
    );
  }

}
