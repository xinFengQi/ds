import { Component, Element, h, Event, Host, EventEmitter, Prop } from '@stencil/core';
import { DataType } from '../../interface/type.interface';

/**
 * @componentName 参数组件
 * @componentType 基础
 * @docsOrder 1
 */
@Component({
  tag: 'ds-prop',
  shadow: true,
})
export class DsProp {
  @Element() el: HTMLElement;

  /** 父节点 */
  @Prop({ mutable: true }) parentEl: HTMLElement | ParentNode;

  /** 参数名称 */
  @Prop() name!: string;

  /** 参数类型 */
  @Prop() type: DataType = DataType.string;

  /** 解析参数后回调事件 */
  @Event() getProp: EventEmitter<{ key: string; value: any }>;

  // 获取到的值
  value: any = null;

  connectedCallback() {
    const text = this.el.innerHTML.replace(/\n|\r| /g, '').trim();
    try {
      const lowerType = this.type.toLocaleLowerCase();
      if (lowerType === 'array' || lowerType === 'json') {
        this.value = JSON.parse(text);
      }
      if (lowerType === 'boolean') {
        if(text === 'false' || text === '0') {
          this.value === false;
        } else {
          this.value = Boolean(text);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  componentWillLoad() {
    if (!this.parentEl) {
      this.parentEl = this.el.parentNode;
    }
  }

  componentDidLoad() {
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
