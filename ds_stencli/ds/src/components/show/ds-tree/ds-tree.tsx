/*
 * @Date: 2021-03-26 10:47:05
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-26 16:13:52
 */
import { Component, Host, h, Prop,Event, forceUpdate, Element, EventEmitter } from '@stencil/core';
import { dsUtil } from '../../../global_js/util';

export interface DsTreeData {
  key: string;
  name: string;
  active: boolean;
  originData: { key: any };
  childrens: DsTreeData[];
}

@Component({
  tag: 'ds-tree',
  styleUrl: 'ds-tree.css',
  shadow: true,
})
export class DsTree {

  @Element() el: HTMLDivElement;

  /** 数据源 */
  @Prop() data: DsTreeData[] = null;

  /** 数据源 */
  @Event() clickData: EventEmitter<DsTreeData>;

  componentDidLoad() {
    this.dataGenerate();
  }

  componentShouldUpdate(newValue, _oldValue, propName) {
    if (propName === 'data' && Array.isArray(newValue)) {
      this.dataGenerate();
    }
  }

  /**
   * 重新为数据赋予属性
   */
  private dataGenerate() {
    this.data && this.data.forEach((da: DsTreeData) => {
      if (!da.name) {
        throw "ds-tree组件的data必须存在name属性"
      }
      if (!da.key) {
        da.key = dsUtil.getId()
      };
      if (!da.hasOwnProperty('active')) {
        da.active = false;
      }
      da.originData = { ...da };
    })
  }

  // 展开tree
  private expandtree = (e: Event, da: DsTreeData) => {
    e.preventDefault();
    e.stopPropagation();
    if (da.childrens && da.childrens.length) {
      da.active = !da.active;
      /** 这里会更新整个树的结构，需要优化 youhua */
      forceUpdate(this.el);
    }
  }

  private clickTree = (da: DsTreeData)  => {
    this.clickData.emit(da);
  }

  private treeTitle = (da: DsTreeData) => {
    return (
      <div key={da.key} >
        <div class="tree_title" onClick={() => this.clickTree(da)}>
          {
            da.childrens && da.childrens.length ?
              da.active ?
                <div onClick={(e) => this.expandtree(e, da)} class="tree_icon">&lt;</div> :
                <div onClick={(e) => this.expandtree(e, da)} class="tree_icon">&gt;</div>
              : null
          }
          <slot></slot>
          {da.name}
        </div>
        {
          (da.childrens && da.childrens.length && da.active) ?
            <div class="tree_children">
              <ds-tree data={da.childrens}></ds-tree>
            </div>
            : null
        }
      </div>
    )
  }

  render() {
    if (!this.data) {
      return null;
    }
    if (!Array.isArray(this.data)) {
      throw "ds-tree组件的data属性必须是数组属性"
    }
    return (
      <Host>
        {
          this.data.map((da: DsTreeData) => {
            return this.treeTitle(da);
          })
        }
        <slot></slot>
      </Host>
    );
  }

}
