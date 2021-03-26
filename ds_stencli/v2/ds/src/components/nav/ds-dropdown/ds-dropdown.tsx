/*
 * @Date: 2021-03-26 16:22:31
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-26 18:29:08
 */
import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ds-dropdown',
  styleUrl: 'ds-dropdown.css'
})
export class DsDropdown {


  @Element() el: HTMLElement

  @Prop({ mutable: true }) isShow: boolean = false;

  @Prop() operate: 'focus' | 'click' = 'click';


  private handlerClick = () => {
    this.isShow = false;
  }

  componentDidLoad() {
    this.el.style.display = "block"
    if (this.operate === 'click') {
      // 处理鼠标点击其他地方事件
      document.addEventListener('click', this.handlerClick, false);
    }
  }

  disconnectedCallback() {
    if (this.operate === 'click') {
      document.removeEventListener('click', this.handlerClick, false);
    }
  }

  // 鼠标点击事件
  private slotClick = (e: Event) => {
    e.stopPropagation();
    if (this.operate !== 'click') {
      return;
    }
    this.isShow = true;
  }

  // 鼠标移出事件
  private slotBlur = () => {
    if (this.operate !== 'focus') {
      return;
    }
    this.isShow = false;
  }

  // 鼠标移入事件
  private slotFocus = () => {
    if (this.operate !== 'focus') {
      return;
    }
    this.isShow = true;
  }

  render() {
    return (
      <Host onClick={this.slotClick} onMouseOver={this.slotFocus} onMouseOut={this.slotBlur}>
        <slot></slot>
        {
          this.isShow ?
            <ds-overlay class="ds-dropdown menu">
              <slot name="menu"></slot>
            </ds-overlay>
            : null
        }
      </Host>
    );
  }

}
