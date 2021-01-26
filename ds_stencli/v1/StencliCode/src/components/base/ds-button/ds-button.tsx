/*
 * @Date: 2021-01-25 09:21:12
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-26 09:33:07
 */
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

  /** 是否可点击 */
  @Prop() dsDisabled = false;

  /** 是否可点击 */
  @Prop() dsDanger = false;

  /** 设置载入状态 */
  @Prop() dsLoadding = false;


  private btuClick = (e: Event) => {
    if (this.dsDisabled || this.dsLoadding) {
      e.stopPropagation();
    }
  }

  render() {
    return (
      <div onClick={this.btuClick} class='block'>
        <button disabled={this.dsDisabled}
          class={{
            button: true,
            [this.dsType]: true,
            danger: this.dsDanger,
            loadding: this.dsLoadding
          }} >
          <slot></slot>
        </button >
      </div>
    );
  }

}
