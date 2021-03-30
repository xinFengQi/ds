/*
 * @Date: 2021-03-30 17:44:48
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-30 18:18:22
 */
import { Component, Host, Element, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'ds-radio',
  styleUrl: 'ds-radio.css',
  shadow: true,
})
export class DsRadio {

  @Element() el: HTMLElement;

  /** 当前的选择的样式 */
  @Prop({ mutable: true }) checkStatus: boolean = true;
  @Event() checkStatusChange: EventEmitter<boolean>;

  inputEl: HTMLInputElement;


  componentDidLoad() {
    this.el.style.display = "block";
    this.changeStatus(this.checkStatus);
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

  changeStatus = (newValue: boolean) => {
    this.inputEl.checked = newValue;
  }

  // 得到是否是不可以状态
  getDisabled = () => {
    return !!this.el.attributes.getNamedItem('disabled')
  }
  // 得到input样式
  getInputClass = () => {
    const isDisabled = this.getDisabled();
    return {
      radio_class: true,
      radio_class_select_disable: this.checkStatus && isDisabled,
      radio_class_disabled: isDisabled,
    }
  }

  // 单选框点击事件
  checkClick = (_e: PointerEvent) => {
    this.checkStatus = !this.checkStatus;
    this.inputEl.checked = this.checkStatus;
    this.checkStatusChange.emit(this.checkStatus);
  }

  render() {
    return (
      <Host>
        <div class={{ host_div: true, host_disabled: this.getDisabled() }}>
          <input onClick={this.checkClick} type="radio" ref={(el) => this.inputEl = el}
            class={this.getInputClass()}
          ></input>
          <slot></slot>
        </div >
      </Host>
    );
  }

}
