/*
 * @Date: 2021-03-22 16:57:55
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-23 13:29:47
 */
import { Component, Host, h, Element } from '@stencil/core';
import { dsUtil } from '../../../../global_js/util';

// 拖拽 包围一个属性，将内部变为画布，可以放置推拽物
@Component({
  tag: 'ds-drop',
  styleUrl: 'ds-drop.css',
  shadow: true,
})
export class DsDrop {

  @Element() el: HTMLElement;


  componentDidLoad() {
    this.el.ondragenter = function () {
      // console.log('进入目标元素')
    }
    this.el.ondragover = function (event) {
      // console.log('在目标元素中拖拽');
      // console.log(event)
      event.preventDefault()
    }
    this.el.ondragleave = function () {
      // console.log('拖放离开目标元素')
    }
    this.el.ondrop = function (event: any) {
      const id = event.dataTransfer.getData('id');
      let idEl = document.getElementById(id) as any;
      if (event.dataTransfer.effectAllowed === 'copy') {
        idEl = idEl.cloneNode(true);
        idEl.id = dsUtil.getId();
        idEl.operate = 'move'
      }
      idEl.style.position = "absolute";
      idEl.style.top = event.offsetY + "px";
      idEl.style.left = event.offsetX + "px";
      idEl.style.border = "1px solid red";
      event.target.appendChild(idEl);
    }

  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
