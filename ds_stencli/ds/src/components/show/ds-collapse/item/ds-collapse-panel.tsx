import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

/**
 * @slot 默认插槽 - 折叠面板展示的内容
 * @slot name - 标题的slot插槽
 */
@Component({
  tag: 'ds-collapse-panel',
  styleUrl: 'ds-collapse-panel.css',
  shadow: true,
})
export class DsCollapsePanel {

  /** 是否展开 */
  @Prop({ mutable: true }) dsIsActive: boolean = false;

  /** 当展开时状态改变 */
  @Event() dsIsActiveChange: EventEmitter<boolean>;

  /** 是否时最后一个 */
  @Prop() dsLast: boolean = false;

  /** 标题 */
  @Prop() name: string = null;



  openCollapse = () => {
    this.dsIsActive = !this.dsIsActive;
    this.dsIsActiveChange.emit(this.dsIsActive);
  }

  render() {
    return (
      <Host>
        <div class={{ ds_collapse: true, ds_collapse_nobottom: !this.dsIsActive && this.dsLast }} onClick={this.openCollapse}>
          {!!this.dsIsActive ?
            <span class="ds_collapse_arrow"> &lt;</span>
            :
            <span class="ds_collapse_arrow"> &gt;</span>
          }
          {this.name ? this.name : <slot name="name"></slot>}
        </div>
        {
          !!this.dsIsActive ?
            <div class={{ ds_collapse_content: true, ds_collapse_content_last: this.dsLast }}>
              <slot></slot>
            </div>
            :
            null
        }
      </Host>
    );
  }

}
