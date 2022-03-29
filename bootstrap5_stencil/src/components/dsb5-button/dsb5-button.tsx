import { Component, Host, h, Prop } from '@stencil/core';
import { ComponentType, SizeType } from '../../interface/type.interface';

/**
 * @componentName 按钮
 * @componentType 基础
 * @slot default - 展示的内容
 *
 */
@Component({
  tag: 'dsb5-button',
  styleUrl: 'dsb5-button.css',
  shadow: false,
  scoped: true,
})
export class Dsb5Button {
  /** 按钮的类型 */
  @Prop() type: ComponentType = ComponentType.primary;

  /** 按钮outline类型 */
  @Prop() outline = false;

  /** 按钮大小 */
  @Prop() size: SizeType | null = null;



  render() {
    return (
      <Host>
        <button
          type="button"
          class={{
            btn: true,
            [`btn-${this.type}`]: !this.outline,
            [`btn-outline-${this.type}`]: this.outline,
            [`btn-${this.size}`]: !!this.size,
          }}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
