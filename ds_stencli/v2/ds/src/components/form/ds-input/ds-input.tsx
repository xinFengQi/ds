/*
 * @Date: 2021-03-29 15:07:01
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-30 16:52:59
 */
import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'ds-input',
  styleUrl: 'ds-input.css',
  shadow: true,
})
export class DsInput {

  @Element() el: HTMLElement;


  inputEl: HTMLElement

  componentDidLoad() {
    // 将元素的attr加入到内部的标签中
    const h5Attr = ['type', 'value', 'disabled', 'placeholder'];
    h5Attr.forEach(item => {
      const elAttr = this.el.attributes.getNamedItem(item);
      if (elAttr) {
        const attr = document.createAttribute(item);
        attr.value = elAttr.value;
        this.inputEl.attributes.setNamedItem(attr)
      }
    })
  }

  render() {
    return (
      <Host>
        <input class="input_class"
          ref={(el) => this.inputEl = el}></input>
      </Host>
    );
  }

}
