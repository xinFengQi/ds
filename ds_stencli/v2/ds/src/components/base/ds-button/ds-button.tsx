import { Component, h, Prop } from '@stencil/core';

/**
 * 基础按钮
 * @slot default - 在按钮内部使用
 * @belongTo base - 基础
 */
@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {

  /** 
   * 根据类型显示按钮的样式 
   */
  @Prop() dsType: 'default' | 'primary' | 'dashed' | 'link' | 'text'
    = 'default';

  /** 是否可点击 */
  @Prop() dsDisabled = false;

  /** 是否是危险样式 */
  @Prop() dsDanger = false;

  /** 设置载入状态 */
  @Prop() dsLoadding = false;

  /** 
   * 是否显示demo
   * @isShow false
   */
  @Prop() demo = false;


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
          {
            this.demo ? '测试按钮' : null
          }
        </button >
      </div>
    );
  }

}
