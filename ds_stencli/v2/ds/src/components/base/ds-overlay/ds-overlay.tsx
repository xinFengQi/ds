/*
 * @Date: 2021-03-26 17:24:01
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-26 18:43:09
 */
import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ds-overlay',
  styleUrl: 'ds-overlay.css',
})
export class DsOverlay {

  @Element() el: HTMLElement;

  @Prop() isFirst = true;


  componentDidLoad() {
    if (this.isFirst) {
      const el = this.el.cloneNode(true) as any
      el.isFirst = false;
      this.el.style.display = 'none';
      el.children.item(0).attributes.removeNamedItem('hidden')
      document.body.appendChild(el);
    }
  }




  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
