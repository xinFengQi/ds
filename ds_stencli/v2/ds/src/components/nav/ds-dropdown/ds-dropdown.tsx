/*
 * @Date: 2021-03-26 16:22:31
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-29 14:59:39
 */
import { Component, Host, h, Prop, Element, forceUpdate } from '@stencil/core';
import { Direction } from '../../../components_js/model';

@Component({
  tag: 'ds-dropdown',
  styleUrl: 'ds-dropdown.css',
})
export class DsDropdown {


  @Element() el: HTMLElement

  /** 是否展示，可以由外界控制 */
  @Prop({ mutable: true }) isShow: boolean = false;

  /** 什么操作可以触发展示 */
  @Prop() operate: 'focus' | 'click' | 'contextmenu' = 'click';

  /** 展示的位置显示，存在边缘修改 */
  @Prop() direction: Direction = 'bl';

  e2: any;

  parentEvent = null;

  addEventListenerIsShow = [];

  private handlerClick = (e: MouseEvent, type?: null | 'loop', cb?: (e: any) => void) => {
    if (type == 'loop') {
      if (this.loop(e)) {
        cb(e);
        return;
      }
    } else {
      if (this.noLoop(e)) {
        return;
      }
    }
    if (this.addEventListenerIsShow && this.addEventListenerIsShow.length) {
      this.addEventListenerIsShow.forEach(addEventListenerIsShow => {
        addEventListenerIsShow.dom.removeEventListener(addEventListenerIsShow.onName, addEventListenerIsShow.handler, false);
      })
      this.addEventListenerIsShow = []
    }
    this.isShow = false;
  }
  // 递归读取节点，到document为止
  loop(e) {
    if (!e) {
      return false;
    }
    if (e.nodeName === 'DS-OVERLAY') {
      return true;
    } else if (e.nodeName === 'BODY') {
      return false;
    }
    return this.loop(e.parentElement);
  }

  // 判断鼠标是否在弹出框内
  noLoop(e) {
    const targets = e.composedPath().map((v: any) => v.nodeName);
    if (targets.includes('DS-OVERLAY')) {
      return true;
    }
    return false;
  }


  // 组件与dom连接后执行
  componentDidLoad() {
    this.el.style.display = "block"
    if (this.operate === 'click' || this.operate === 'contextmenu') {
      // 处理鼠标点击其他地方事件
      document.addEventListener('click', this.handlerClick, false);
    }

  }

  // 组件取消与dom的链接
  disconnectedCallback() {
    if (this.operate === 'click' || this.operate === 'contextmenu') {
      document.removeEventListener('click', this.handlerClick, false);
    }
    if (this.addEventListenerIsShow && this.addEventListenerIsShow.length) {
      this.addEventListenerIsShow.forEach(addEventListenerIsShow => {
        addEventListenerIsShow.dom.removeEventListener(addEventListenerIsShow.onName, addEventListenerIsShow.handler, false);
      })
    }
  }

  // 鼠标点击事件
  private slotClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.operate !== 'click') {
      return;
    }
    this.parentEvent = e;
    this.isShow = true;
  }

  // 右击事件
  private slotContextmenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.operate !== 'contextmenu') {
      return;
    }
    this.parentEvent = e;
    this.isShow = true;
  }

  // 鼠标移出事件
  private slotBlur = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.operate !== 'focus') {
      return;
    }
    this.handlerClick(e['toElement'], 'loop', (e: any) => {
      // 针对多层次的下拉列表，进行冒泡监听
      const addEventListenerIsShow = {
        dom: e,
        onName: 'mouseleave',
        handler: this.slotBlur
      }
      addEventListenerIsShow.dom['addEventListener'](addEventListenerIsShow.onName, addEventListenerIsShow.handler, false);
      this.addEventListenerIsShow.push(addEventListenerIsShow)
    });
  }

  // 鼠标移入事件
  private slotFocus = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.operate !== 'focus') {
      return;
    }
    this.parentEvent = e;
    this.isShow = true;
  }

  // 获取到需要复制的节点，一次获取就可以了
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
            <ds-overlay ref={(e2 => this.getOverlayElement(e2))} elment={this.e2} class="ds-dropdown menu"
              parentEvent={this.parentEvent} direction={this.direction}>
              <slot name="menu"></slot>
            </ds-overlay>
            : null
        }
      </Host>
    );
  }

}
