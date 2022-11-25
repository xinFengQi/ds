import { Component, Host, h, Prop, Event, EventEmitter, forceUpdate, Element, Method } from '@stencil/core';
import { BaseCompoent } from '../../core/BaseCompoent';
import { Dsb5MenuTreeData } from '../../interface/component.interface';


/**
 * @componentName 树
 * @componentType 布局
 * @docsOrder 2
 *
 */
@Component({
  tag: 'dsb5-menu-tree',
  styleUrl: 'dsb5-menu-tree.css',
  shadow: false,
  scoped: true,
})
export class Dsb5MenuTree {
  @Element() el: HTMLDivElement;

  /**目录树数据 */
  @Prop({ mutable: true }) menuTree: Dsb5MenuTreeData[] = [
    {
      name: '第一季',
      childrens: [
        {
          name: '第一一级',
        },
      ],
    },
    {
      name: '第二季',
    },
  ];

  menuTreeMap: { [key: string]: Dsb5MenuTreeData } = {};

  /** 点击事件 */
  @Event() clickNav: EventEmitter<Dsb5MenuTreeData>;

  /** 编辑点击事件 */
  @Event() edit: EventEmitter<{ el: HTMLDivElement; node: Dsb5MenuTreeData }>;
  /** 增加点击事件 */
  @Event() add: EventEmitter<{ el: HTMLDivElement; node: Dsb5MenuTreeData }>;
  /** 删除点击事件 */
  @Event() remove: EventEmitter<{ el: HTMLDivElement; node: Dsb5MenuTreeData }>;

  // 基础组件minix
  baseCompoent = new BaseCompoent();

  // 点击事件
  navClick = (e: MouseEvent, nav: Dsb5MenuTreeData) => {
    console.log(e, nav);
    if (nav.childrens) {
      nav.expend = !nav.expend;
    }
    forceUpdate(this.el);
    this.clickNav.emit(nav);
  };

  // 右击事件
  onMouseDown(e: MouseEvent, nav: Dsb5MenuTreeData) {
    e.stopPropagation();
    e.preventDefault();
    this.clickNav.emit(nav);
  }

  /** 编辑节点 */
  @Method()
  async editNode(newNode: Dsb5MenuTreeData) {
    if (!newNode.key) {
      throw '不存在key, 无法修改节点';
    }
    if (newNode.name) {
      this.menuTreeMap[newNode.key].name = newNode.name;
    }
    forceUpdate(this.el);
    return this.menuTree;
  }

  editTree(ev: MouseEvent, nav: Dsb5MenuTreeData) {
    ev.stopPropagation();
    ev.preventDefault();
    this.edit.emit({ el: this.el, node: nav });
  }

  /** 增加节点 */
  @Method()
  async addNode(key: string, newNode: Dsb5MenuTreeData) {
    if (!key) {
      throw '不存在key, 无法修改节点';
    }
    if (this.menuTreeMap[key]) {
      this.menuTreeMap[key].expend  = true;
      if (this.menuTreeMap[key].childrens) {
        this.menuTreeMap[key].childrens.push(newNode);
      } else {
        this.menuTreeMap[key].childrens = [newNode];
      }
    } else {
      this.menuTree.push(newNode);
    }
    forceUpdate(this.el);
    return this.menuTree;
  }

  addTree(ev: MouseEvent, nav: Dsb5MenuTreeData) {
    ev.stopPropagation();
    ev.preventDefault();
    this.add.emit({ el: this.el, node: nav });
  }

  /** 移除节点 */
  @Method()
  async removeNode(key: string) {
    if (!key) {
      throw '不存在key, 无法修改节点';
    }
    if (!this.menuTreeMap[key]) {
      throw '存在意外的错误';
    }
    if (this.menuTreeMap[key]) {
      if (this.menuTreeMap[key].parentNode === 'root') {
        this.menuTree = this.menuTree.filter(v => v.key !== key);
      } else {
        if (!(this.menuTreeMap[key].parentNode as Dsb5MenuTreeData).childrens) {
          throw '不存在key, 无法修改节点';
        }
        (this.menuTreeMap[key].parentNode as Dsb5MenuTreeData).childrens = (this.menuTreeMap[key].parentNode as Dsb5MenuTreeData).childrens.filter(v => v.key !== key);
      }
    }
    forceUpdate(this.el);
    return this.menuTree;
  }

  removeTree(ev: MouseEvent, nav: Dsb5MenuTreeData) {
    ev.stopPropagation();
    ev.preventDefault();
    this.remove.emit({ el: this.el, node: nav });
  }


  // 递归获取节点，去掉不需要的属性值
  async getRecurveNode(nodes: Dsb5MenuTreeData[]) {
    return await dsb5.dsUtil.getRecurveNode(nodes, ['key', 'name','expend', 'origin'], 'childrens')
  }

  getNavTree(menu: Dsb5MenuTreeData[], parentNode: 'root' | Dsb5MenuTreeData, key: string) {
    if (!menu || menu.length === 0) {
      return;
    }
    let outputHtml = [];
    menu.forEach((nav, i) => {
      nav.parentNode = parentNode;
      nav.key = key + '_' + i;
      this.menuTreeMap[nav.key] = nav;
      outputHtml.push(
        <nav class={{ 'navbar': true, 'flex-column': true, 'align-items-stretch': true, 'pd0': true, 'pl_1': parentNode !== 'root' }}>
          <summary onClick={e => this.navClick(e, nav)} onContextMenu={e => this.onMouseDown(e, nav)} class="container-fluid container-fluid-center">
            {!nav.expend && nav.childrens ? <i class="bi bi-folder-plus"></i> : null}
            {nav.expend && nav.childrens ? <i class="bi bi-folder-minus"></i> : null}
            {!nav.childrens ? <i class="bi bi-file-earmark-text"></i> : null}
            <div class="navbar-nav">
              <span class="navbar-nav-name">{nav.name}</span>
              <span class="navbar-nav-tool">
                <i onClick={ev => this.editTree(ev, nav)} class="bi bi-pen-fill"></i>
                <i onClick={ev => this.addTree(ev, nav)} class="bi bi-plus-circle-fill"></i>
                <i onClick={ev => this.removeTree(ev, nav)} class="bi bi-dash-circle-fill"></i>
              </span>
            </div>
          </summary>
          {nav.childrens && Array.isArray(nav.childrens) && nav.expend ? this.getNavTree(nav.childrens, nav, nav.key) : null}
        </nav>,
      );
    });
    return outputHtml;
  }

  render() {
    return <Host class="dsb5_menu_div">{this.getNavTree(this.menuTree, 'root', this.baseCompoent.id + 'tree')}</Host>;
  }
}
