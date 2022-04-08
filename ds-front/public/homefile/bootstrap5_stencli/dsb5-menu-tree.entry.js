import { r as registerInstance, e as createEvent, i as forceUpdate, h, f as Host, g as getElement } from './index-4c5a6b9b.js';
import { B as BaseCompoent } from './BaseCompoent-00b95334.js';
import './bootstrap.esm-e5ba53a8.js';

const dsb5MenuTreeCss = ".dsb5_menu_div.sc-dsb5-menu-tree{display:block;width:100%}.container-fluid-center.sc-dsb5-menu-tree{justify-content:left !important}.bi.sc-dsb5-menu-tree{margin-right:4px}.navbar-nav.sc-dsb5-menu-tree{display:flex;justify-content:space-between;flex-direction:row;width:calc(100% - 20px)}.navbar-nav-name.sc-dsb5-menu-tree{flex:1}";

const Dsb5MenuTree = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickNav = createEvent(this, "clickNav", 7);
    this.edit = createEvent(this, "edit", 7);
    this.add = createEvent(this, "add", 7);
    this.remove = createEvent(this, "remove", 7);
    /**目录树数据 */
    this.menuTree = [
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
    this.menuTreeMap = {};
    // 基础组件minix
    this.baseCompoent = new BaseCompoent();
    // 点击事件
    this.navClick = (e, nav) => {
      console.log(e, nav);
      if (nav.childrens) {
        nav.expend = !nav.expend;
      }
      forceUpdate(this.el);
      this.clickNav.emit(nav);
    };
  }
  // 右击事件
  onMouseDown(e, nav) {
    e.stopPropagation();
    e.preventDefault();
    this.clickNav.emit(nav);
  }
  editNode(newNode) {
    if (!newNode.key) {
      throw '不存在key, 无法修改节点';
    }
    if (newNode.name) {
      this.menuTreeMap[newNode.key].name = newNode.name;
    }
    forceUpdate(this.el);
  }
  editTree(ev, nav) {
    ev.stopPropagation();
    ev.preventDefault();
    this.edit.emit({ el: this.el, node: nav });
  }
  addNode(key, newNode) {
    if (!key) {
      throw '不存在key, 无法修改节点';
    }
    if (this.menuTreeMap[key]) {
      if (this.menuTreeMap[key].childrens) {
        this.menuTreeMap[key].childrens.push(newNode);
      }
      else {
        this.menuTreeMap[key].childrens = [newNode];
      }
    }
    else {
      this.menuTree.push(newNode);
    }
    forceUpdate(this.el);
  }
  addTree(ev, nav) {
    ev.stopPropagation();
    ev.preventDefault();
    this.add.emit({ el: this.el, node: nav });
  }
  removeNode(key) {
    if (!key) {
      throw '不存在key, 无法修改节点';
    }
    if (!this.menuTreeMap[key]) {
      throw '存在意外的错误';
    }
    if (this.menuTreeMap[key]) {
      if (this.menuTreeMap[key].parentNode === 'root') {
        this.menuTree = this.menuTree.filter(v => v.key !== key);
      }
      else {
        if (!this.menuTreeMap[key].parentNode.childrens) {
          throw '不存在key, 无法修改节点';
        }
        this.menuTreeMap[key].parentNode.childrens = this.menuTreeMap[key].parentNode.childrens.filter(v => v.key !== key);
      }
    }
    forceUpdate(this.el);
  }
  removeTree(ev, nav) {
    ev.stopPropagation();
    ev.preventDefault();
    this.remove.emit({ el: this.el, node: nav });
  }
  getNavTree(menu, parentNode, key) {
    if (!menu || menu.length === 0) {
      return;
    }
    let outputHtml = [];
    menu.forEach((nav, i) => {
      nav.parentNode = parentNode;
      nav.key = key + '_' + i;
      this.menuTreeMap[nav.key] = nav;
      outputHtml.push(h("nav", { class: { 'navbar': true, 'flex-column': true, 'align-items-stretch': true, 'pd0': true, 'pl_1': parentNode !== 'root' } }, h("summary", { onClick: e => this.navClick(e, nav), onContextMenu: e => this.onMouseDown(e, nav), class: "container-fluid container-fluid-center" }, !nav.expend && nav.childrens ? h("i", { class: "bi bi-folder-plus" }) : null, nav.expend && nav.childrens ? h("i", { class: "bi bi-folder-minus" }) : null, !nav.childrens ? h("i", { class: "bi bi-file-earmark-text" }) : null, h("div", { class: "navbar-nav" }, h("span", { class: "navbar-nav-name" }, nav.name), h("span", { class: "navbar-nav-tool" }, h("i", { onClick: ev => this.editTree(ev, nav), class: "bi bi-pen-fill" }), h("i", { onClick: ev => this.addTree(ev, nav), class: "bi bi-plus-circle-fill" }), h("i", { onClick: ev => this.removeTree(ev, nav), class: "bi bi-dash-circle-fill" })))), nav.childrens && Array.isArray(nav.childrens) && nav.expend ? this.getNavTree(nav.childrens, nav, nav.key) : null));
    });
    return outputHtml;
  }
  render() {
    return h(Host, { class: "dsb5_menu_div" }, this.getNavTree(this.menuTree, 'root', this.baseCompoent.id + 'tree'));
  }
  get el() { return getElement(this); }
};
Dsb5MenuTree.style = dsb5MenuTreeCss;

export { Dsb5MenuTree as dsb5_menu_tree };
