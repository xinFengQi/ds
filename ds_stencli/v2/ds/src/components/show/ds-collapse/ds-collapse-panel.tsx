/*
 * @Date: 2021-03-25 15:23:27
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-25 17:32:11
 */
import { Component, Host, h, State, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-collapse-panel',
  styleUrl: 'ds-collapse-panel.css',
  shadow: true,
})
export class DsCollapsePanel {

  /** 是否展开 */
  @Prop() dsIsActive: boolean = false;

  /** 当展开时状态改变 */
  @Event() dsIsActiveChange: EventEmitter<boolean>;

  /** 是否时最后一个 */
  @Prop() dsLast: boolean = false;


  openCollapse = () => {
    this.dsIsActive = !this.dsIsActive;
    this.dsIsActiveChange.emit(this.dsIsActive);
  }

  render() {
    return (
      <Host>
        <div class={{ ds_collapse: true, ds_collapse_nobottom: !this.dsIsActive && this.dsLast  }} onClick={this.openCollapse}>
          {!!this.dsIsActive ?
            <span class="ds_collapse_arrow"> &lt;</span>
            :
            <span class="ds_collapse_arrow"> &gt;</span>
          }
           啊哈哈哈
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
