/*
 * @Date: 2021-02-22 16:37:22
 * @LastEditors: dongfb
 * @LastEditTime: 2021-02-22 17:40:38
 */
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-card',
  styleUrl: 'ds-card.css',
  shadow: true,
})
export class DsCard {

  /** 卡片操作组 */
  @Prop() dsAction = [];

  render() {
    return (
      <div class="card">
        <div class="title">
          测试
          <ds-button ds-type="link">测试</ds-button>
        </div>
        <div class="content"></div>
        <div class="footer">
          测试
          <ds-button ds-type="link">测试</ds-button>
        </div>
      </div>
    );
  }

}
