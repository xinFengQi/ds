/*
 * @Date: 2021-03-22 16:57:55
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-25 14:17:10
 */
import { Component, Host, h, Element } from '@stencil/core';
import { dsComponentStore } from '../../../../global_js/store_private';
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
    // 处理放大缩小
    let lastX = 0;
    let lastY = 0;
    // 处理移动
    let clickDownX = 0;
    let clickDownY = 0;
    const dropDrapDataStore = dsComponentStore.dropDrapDataStore;
    this.el.onmousemove = (e: MouseEvent) => {
      if (dropDrapDataStore.get('isResize')) {
        const resizeDirection = dropDrapDataStore.get('resizeDirection');
        const resizeDom = dropDrapDataStore.get('resizeDom');
        if (resizeDirection === 'lr' || resizeDirection == 'ck') {
          resizeDom.style.width = resizeDom.clientWidth + (e.x - lastX) + 'px'
        }
        if (resizeDirection === 'ud' || resizeDirection == 'ck') {
          resizeDom.style.height = resizeDom.clientHeight + (e.y - lastY) + 'px'
        }
      }
      lastX = e.x;
      lastY = e.y;
    }
    this.el.onmouseup = (_e) => {
      dsComponentStore.dropDrapDataStore.set('isResize', false);
    }
    this.el.ondragenter =  () => {
      // console.log('进入目标元素')
      const sta =  dsComponentStore.dropDrapDataStore.get('clickDownXY');
      clickDownX =  sta.clickDownX;
      clickDownY = sta.clickDownY;
      
    }
    this.el.ondragover = function (event) {
      // console.log('在目标元素中拖拽');
      // console.log(event)
      event.preventDefault()
    }
    this.el.ondragleave = function () {
      // console.log('拖放离开目标元素')
    }
  
    this.el.onmousedown = (_e) => {
      dsComponentStore.dropDrapDataStore.set('clickDownXY', {
        clickDownX: _e.offsetX,
        clickDownY: _e.offsetY
      })
      clickDownX =  _e.offsetX;
      clickDownY = _e.offsetY;

    }
    // 处理移动
    this.el.ondrop = (event: DragEvent) => {
      if (event.offsetY - clickDownY < 0 || event.offsetX - clickDownX < 0) {
        return;
      }
      const id = event.dataTransfer.getData('id');
      let idEl = document.getElementById(id) as any;
      if (event.dataTransfer.effectAllowed === 'copy') {
        idEl = idEl.cloneNode(true);
        idEl.id = dsUtil.getId();
        idEl.operate = 'move'
      }
      idEl.style.position = "absolute";
      idEl.style.top = event.offsetY - clickDownY + "px";
      idEl.style.left = event.offsetX - clickDownX + "px";
      idEl.style.border = "1px solid red";
      (event.target as any).appendChild(idEl);
      const json = this.generateJson(this.el, 'root');
      console.log(json)
    }

  }


  generateJson = (dom: Element, data?: any) => {
    let childrens = [];
    if (dom.children) {
      const len = dom.children.length;
      for (let i = 0; i < len; i++) {
        const element = dom.children.item(i);
        if (element.attributes.getNamedItem('data')) {
          childrens.push(this.generateJson(element));
        }
      }
    }
    return {
      id: dom.id,
      data: data ? data : dom.attributes.getNamedItem('data').value,
      childrens
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
