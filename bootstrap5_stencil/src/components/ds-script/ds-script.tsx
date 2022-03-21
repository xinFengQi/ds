import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ds-script',
  shadow: true,
})
export class DsScript {
  /** 父节点 */
  @Prop() parentEl: HTMLElement | ParentNode;

  @Element() el: HTMLElement;

  // 初始化获取的js代码片段
  jstext = '';

  // 是否已经执行了js代码
  isExecute = false;

  componentDidLoad() {
    this.jstext = this.el.innerHTML;
    if (!this.parentEl) {
      this.parentEl = this.el.parentNode;
    }
    new Function('$el', this.jstext)(this.parentEl);
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
