/*
 * @Date: 2021-03-22 16:58:16
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-25 14:14:01
 */
import { Component, Host, h, Element, Prop } from '@stencil/core';
import { dsComponentStore } from '../../../../global_js/store_private';
import { dsUtil } from '../../../../global_js/util';

// 拖拽 包围一个属性，将内部变为可推拽属性
@Component({
  tag: 'ds-drag',
  styleUrl: 'ds-drag.css',
  shadow: true,
})
export class DsDrag {

  @Element() el: HTMLElement;

  /** 移动得操作，其实主要是传值，会有不同得样式，逻辑依靠这个判断 */
  @Prop() operate: 'copy' | 'move' = 'copy'

  /** 是否可以拖拽 */
  @Prop() isDrag: boolean = true;

  /** 是否可以变更大小 */
  @Prop() isResize: boolean = true;

  /** 携带的数据 */
  @Prop() data: any = null;

  id = '';
  slotDiv = null;

  componentWillLoad() {
    this.id = this.el.id || dsUtil.getId();
  }
  componentDidLoad() {
    this.el.draggable = this.isDrag;

    this.el.onmousedown = (_e) => {
      dsComponentStore.dropDrapDataStore.set('clickDownXY', {
        clickDownX: _e.offsetX,
        clickDownY: _e.offsetY
      })
    }

    this.el.ondragstart = (event: any) => {
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

  private removeLRDrag = () => {
    this.removeDrag();
    dsComponentStore.dropDrapDataStore.set('resizeDirection', 'lr');
  }

  private removeUDDrag = () => {
    this.removeDrag();
    dsComponentStore.dropDrapDataStore.set('resizeDirection', 'ud');
  }

  private removeCKDrag = () => {
    this.removeDrag();
    dsComponentStore.dropDrapDataStore.set('resizeDirection', 'ck');
  }

  private removeDrag = () => {
    this.el.draggable = this.isDrag && false;
    dsComponentStore.dropDrapDataStore.set('isResize', true);
    dsComponentStore.dropDrapDataStore.set('resizeDom', this.slotDiv);
  }

  private addDrag = () => {
    this.el.draggable = this.isDrag && true;
  }

  private getElContenr = () => {
    return this.isResize ?
      (<div class="resize_class">
        <div class="resize_class_top">
          <div ref={(el) => this.slotDiv = el as HTMLDivElement} class="resize_class_top_right"><slot></slot></div>
          <div onMouseDown={this.removeLRDrag} onMouseLeave={this.addDrag} class="resize_class_top_left"></div>
        </div>
        <div class="resize_class_bottom">
          <div class="resize_class_bottom_right" onMouseDown={this.removeUDDrag} onMouseLeave={this.addDrag}></div>
          <div class="resize_class_bottom_left" onMouseDown={this.removeCKDrag} onMouseLeave={this.addDrag}></div>
        </div>
      </div>)
      :
      (<slot></slot>)
  }

  render() {
    return (
      <Host draggable="true" id={this.id}>
        {this.getElContenr()}
      </Host>
    )
  }

}
