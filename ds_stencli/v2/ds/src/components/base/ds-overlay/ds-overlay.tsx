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

  @Prop() elment:HTMLElement = null;

  @Prop() x = 0;
  @Prop() y = 0;

  cloneEl: HTMLElement


  componentDidLoad() {
      if (this.isFirst) {
        this.cloneEl = this.elment.cloneNode(true) as any
        this.cloneEl['isFirst'] = false;
        this.el.style.display = 'none';
        this.cloneEl.style.left = this.x + 'px'
        this.cloneEl.style.top = this.y + 'px'

        this.cloneEl.style.display = 'block'
        const cloneAttr = this.cloneEl.children.length ? this.cloneEl.children.item(0).attributes: null;
        if(cloneAttr) {
          if(cloneAttr.getNamedItem('slot')) {
            cloneAttr.removeNamedItem('slot')
          }
          if(cloneAttr.getNamedItem('hidden')) {
            cloneAttr.removeNamedItem('hidden')
          }
        }
        document.body.appendChild(this.cloneEl);
      }
  }


  disconnectedCallback() {
   if(this.cloneEl) {
     document.body.removeChild(this.cloneEl);
     this.cloneEl = null;
   }
  }


  render() {
    return (
      <Host>
        {/* <slot></slot> */}
      </Host>
    );
  }

}
