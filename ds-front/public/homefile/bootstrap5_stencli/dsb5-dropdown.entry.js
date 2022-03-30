import { r as registerInstance, e as createEvent, i as forceUpdate, h, f as Host, g as getElement } from './index-4c5a6b9b.js';
import { B as BaseCompoent } from './BaseCompoent-00b95334.js';
import { C as ComponentType } from './type.interface-66dd2cb8.js';
import './bootstrap.esm-e5ba53a8.js';

const dsb5DropdownCss = ".sc-dsb5-dropdown-h{display:block}.dropdown-menu.sc-dsb5-dropdown{padding:0}.dropdown-item.sc-dsb5-dropdown{cursor:pointer}.dropdown-divider.sc-dsb5-dropdown{height:0;margin:0.5rem 0;overflow:hidden;border-top:1px solid rgba(0,0,0,.15)}";

const Dsb5Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.getSelectData = createEvent(this, "getSelectData", 7);
    // 基础组件minix
    this.baseCompoent = new BaseCompoent();
    /** 是否变更值 */
    this.valueChange = false;
    /** 下拉选择选项 */
    this.data = [];
    /** 按钮颜色 */
    this.color = ComponentType.empty;
    this.selectValue = null;
  }
  selectData(ev, data) {
    ev.stopPropagation();
    ev.preventDefault();
    this.selectValue = typeof data === 'string' ? data : data.text;
    forceUpdate(this.hostDiv);
    this.getSelectData.emit(data);
  }
  // 通过类型获取html
  getTypeHtml(da) {
    if (typeof da === 'string') {
      return h("div", { class: "dropdown-item" }, da);
    }
    else {
      if (da.type === 'line') {
        return h("hr", { class: "dropdown-divider" });
      }
      else {
        return h("div", { class: "dropdown-item" }, da.text);
      }
    }
  }
  render() {
    return (h(Host, { class: "btn-group pd0 mg0" }, h("div", { class: "btn-group" }, h("button", { class: {
        'btn': true,
        [`btn-${this.color}`]: true,
        'dropdown-toggle': true,
      }, type: "button", id: this.baseCompoent.id, "data-bs-toggle": "dropdown", "aria-expanded": "false" }, this.valueChange && this.selectValue ? this.selectValue : h("slot", null)), h("ul", { class: "dropdown-menu", "aria-labelledby": this.baseCompoent.id }, this.data.map((da) => {
      return h("li", { onClick: ev => this.selectData(ev, da) }, this.getTypeHtml(da));
    })))));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5Dropdown.style = dsb5DropdownCss;

export { Dsb5Dropdown as dsb5_dropdown };
