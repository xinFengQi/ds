import { Component, Host, h, Element, Prop, EventEmitter, Event } from '@stencil/core';

/**
 * @componentName js执行组件
 *
 */
@Component({
  tag: 'ds-script',
  shadow: true,
})
export class DsScript {
  @Element() el: HTMLElement;

  /** 父节点 */
  @Prop() parentEl: HTMLElement | ParentNode;

  /** 解析参数后回调事件 */
  @Event() getExecute: EventEmitter<any>;

  // 初始化获取的js代码片段
  jstext = '';

  // 是否已经执行了js代码
  isExecute = false;

  connectedCallback() {
    this.jstext = this.el.innerHTML;
  }

  componentDidLoad() {
    if (!this.parentEl) {
      this.parentEl = this.el.parentNode;
    }
    new Function('$el', this.jstext)(this.parentEl);
    this.getExecute.emit(true);
  }

  render() {
    return (
      <Host>
        <span style={{ display: 'none' }}>
          <slot></slot>
        </span>
      </Host>
    );
  }
}
