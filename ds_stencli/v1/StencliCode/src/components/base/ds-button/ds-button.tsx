import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {

  /** 根据类型显示按钮的样式 */
  @Prop() dsType: 'default' | 'primary' | 'dashed' | 'link' | 'text'
    = 'default';

  render() {
    return (
        <button class={{ button: true, [this.dsType]: true }} >
          <slot></slot>
        </button >

    );
  }

}
