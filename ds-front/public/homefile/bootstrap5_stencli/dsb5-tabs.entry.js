import { r as registerInstance, i as forceUpdate, h, f as Host, g as getElement } from './index-4c5a6b9b.js';
import { B as BaseCompoent } from './BaseCompoent-c2010ea0.js';
import './bootstrap.esm-e5ba53a8.js';

const dsb5TabsCss = ".sc-dsb5-tabs-h{display:block}";

const Dsb5Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabs = [];
    // 基础组件minix
    this.baseCompoent = new BaseCompoent();
    // 当前的tab索引
    this.selectIndex = 0;
  }
  componentWillRender() {
    return true;
  }
  // 选择标签
  selectTab(index) {
    this.selectIndex = index;
    forceUpdate(this.hostDiv);
  }
  render() {
    return (h(Host, null, h("ul", { class: "nav nav-tabs", role: "tablist" }, this.tabs.map((tab, i) => {
      return (h("li", { class: "nav-item", role: "presentation" }, h("button", { class: { 'nav-link': true, 'active': i === this.selectIndex }, id: `${this.baseCompoent.id}_${i}_tab`, "data-bs-toggle": "tab", "data-bs-target": `#${this.baseCompoent.id}_${i}`, type: "button", role: "tab", "aria-controls": `${this.baseCompoent.id}_${i}`, "aria-selected": i === this.selectIndex, onClick: () => this.selectTab(i) }, tab)));
    })), h("div", { class: "tab-content" }, this.tabs.map((tab, i) => {
      return (h("div", { class: { 'tab-pane': true, 'fade': true, 'show': i === this.selectIndex, 'active': i === this.selectIndex }, id: `#${this.baseCompoent.id}_${i}`, role: "tabpanel", "aria-labelledby": `${this.baseCompoent.id}_${i}_tab` }, h("slot", { name: tab })));
    }))));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5Tabs.style = dsb5TabsCss;

export { Dsb5Tabs as dsb5_tabs };
