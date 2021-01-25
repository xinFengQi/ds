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

  private btuClick = (e: Event) => {
    if (this.dsDisabled) {
      e.stopPropagation();
    }
  }

  render() {
    console.log(this.dsType, this.dsDisabled);
    return (
      <div onClick={this.btuClick} class='block'>
        <button disabled={this.dsDisabled} class={{ button: true, [this.dsType]: true, danger: this.dsDanger }} >
          <slot></slot>
        </button >
      </div>
    );
  }

}
