/*
 * @Date: 2021-03-22 16:58:16
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-22 17:55:25
 */
import { Component, Host, h, Element, Prop } from '@stencil/core';

// 拖拽 包围一个属性，将内部变为可推拽属性
@Component({
  tag: 'ds-drag',
  styleUrl: 'ds-drag.css',
  shadow: true,
})
export class DsDrag {

  @Element() el: HTMLElement;

  @Prop() operate = 'copy'


  componentDidLoad() {
    this.el.ondragstart =  (event: any) => {
      // console.log('开始拖拽');
      event.dataTransfer.effectAllowed = this.operate
      event.dataTransfer.setData('id', event.target.id);
    }
    this.el.ondrag = function () {
      // console.log('拖拽中');
    }
    this.el.ondragend = function () {
      // console.log('拖拽结束')
    }
  }

  render() {
    return (
      <Host draggable="true" id="aa">
        <slot></slot>
      </Host>
    );
  }

}
