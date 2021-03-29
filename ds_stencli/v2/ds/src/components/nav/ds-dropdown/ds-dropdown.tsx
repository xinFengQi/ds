/*
 * @Date: 2021-03-26 16:22:31
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-26 18:29:08
 */
import { Component, Host, h, Prop, Element, forceUpdate } from '@stencil/core';
import { Direction } from '../../../components_js/model';

@Component({
  tag: 'ds-dropdown',
  styleUrl: 'ds-dropdown.css',
})
export class DsDropdown {


  @Element() el: HTMLElement

  @Prop({ mutable: true }) isShow: boolean = false;

  @Prop() operate: 'focus' | 'click' | 'contextmenu' = 'click';

  @Prop() direction: Direction = 'rt';

  e2: any;

  x = 0;
  y = 0;

  addEventListenerIsShow = null;
  private handlerClick = (e: MouseEvent) => {
    const targets = e.composedPath().map((v: any) => v.nodeName);
    if (targets.includes('DS-OVERLAY')) {
      return;
    }
    this.isShow = false;
  }


  componentDidLoad() {
    this.el.style.display = "block"
    if (this.operate === 'click' || this.operate === 'contextmenu') {
      // 处理鼠标点击其他地方事件
      document.addEventListener('click', this.handlerClick, false);
    }
  }

  disconnectedCallback() {
    if (this.operate === 'click' || this.operate === 'contextmenu') {
      document.removeEventListener('click', this.handlerClick, false);
    }
    if (this.addEventListenerIsShow) {
      this.addEventListenerIsShow.dom.removeEventListener(this.addEventListenerIsShow.onName, this.addEventListenerIsShow.handler, false);
    }
  }

  // 鼠标点击事件
  private slotClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.operate !== 'click') {
      return;
    }
    this.getOverlayXY(e);
    this.isShow = true;
  }

  // 右击事件
  private slotContextmenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.operate !== 'contextmenu') {
      return;
    }
    this.getOverlayXY(e);
    this.isShow = true;
  }

  // 鼠标移出事件
  private slotBlur = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.operate !== 'focus') {
      return;
    }
    console.log([e], '=========')
   this.handlerClick(e);
  }

  // 鼠标移入事件
  private slotFocus = (e: MouseEvent) => {
    console.log([e])
    e.preventDefault();
    e.stopPropagation();
    if (this.operate !== 'focus') {
      return;
    }
    this.getOverlayXY(e);
    this.isShow = true;
  }

  getOverlayXY(e: MouseEvent) {
    switch (this.direction) {
      case 'auto': {
        this.x = e.pageX;
        this.y = e.pageY;
        break;
      }
      case 'bc': {
        break;
      }
      case 'br': {
        break;
      }
      case 'rt': {
        this.x = e.pageX + e.target['clientWidth'] - e.offsetX;
        this.y = e.pageY - e.offsetY;
        break;
      }
      default: {
        // bl
        this.x = e.pageX - e.offsetX;
        this.y = e.pageY + e.target['clientHeight'] - e.offsetY;
      }
    }
  }

  getOverlayElement = (e2) => {
    if (this.e2) {
      return;
    }
    this.e2 = e2;
    forceUpdate(this.el)
  }
  render() {
    return (
      <Host class="ds-dropdown" oncontextmenu={this.slotContextmenu} onClick={this.slotClick} onMouseOver={this.slotFocus}
        onmouseleave={this.slotBlur}>
        <slot></slot>
        {
          this.isShow ?
            <ds-overlay ref={(e2 => this.getOverlayElement(e2))} elment={this.e2} class="ds-dropdown menu" x={this.x} y={this.y}>
              <slot name="menu"></slot>
            </ds-overlay>
            : null
        }
      </Host>
    );
  }

}
