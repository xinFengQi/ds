import { Component, Element, h, Event, Host, EventEmitter, Prop } from '@stencil/core';

/**
 * @componentName 参数组件
 *
 */
@Component({
  tag: 'ds-prop',
  shadow: true,
})
export class DsProp {
  @Element() el: HTMLElement;

  /** 父节点 */
  @Prop() parentEl: HTMLElement | ParentNode;

  /** 参数名称 */
  @Prop() name!: string;

  /** 参数类型 */
  @Prop() type: 'string' | 'array' | 'json' = 'string';

  /** 解析参数后回调事件 */
  @Event() getProp: EventEmitter<{ key: string; value: any }>;

  // 获取到的值
  value = '';

  connectedCallback() {
    const text = this.el.innerHTML.replace(/\n|\r| /g, '');
    try {
      const lowerType = this.type.toLocaleLowerCase();
      if (lowerType === 'array' || lowerType === 'json') {
        this.value = JSON.parse(text);
      }
    } catch (error) {
      console.error(error);
    }
  }

  componentDidLoad() {
    if (!this.parentEl) {
      this.parentEl = this.el.parentNode;
    }
    this.parentEl[this.name] = this.value;
    this.getProp.emit({ key: this.name, value: this.value });
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
