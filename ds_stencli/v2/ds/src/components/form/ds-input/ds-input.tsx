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
    const h5Attr = ['type', 'value', 'disabled'];
    h5Attr.forEach(item => {
      const elAttr = this.el.attributes.getNamedItem(item);
      if(elAttr) {
        const attr = document.createAttribute(item);
        attr.value = elAttr.value;
        this.inputEl.attributes.setNamedItem(attr)
      }
    })
    console.log([this.el, this.inputEl])

  }

  render() {
    return (
      <Host>
        <input class="input_class" placeholder="12123sd" 
          ref={(el) => this.inputEl = el}></input>
      </Host>
    );
  }

}
