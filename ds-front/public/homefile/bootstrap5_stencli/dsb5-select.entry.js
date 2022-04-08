import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-4c5a6b9b.js';

const dsb5SelectCss = ".sc-dsb5-select-h{display:block}";

const Dsb5Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valuechange = createEvent(this, "valuechange", 7);
    /** 当前的值 */
    this.value = null;
  }
  componentDidLoad() {
    this.selectValue();
  }
  componentShouldUpdate(oldData, newData, prop) {
    if (prop === 'value') {
      return oldData !== newData;
    }
    return true;
  }
  // 获取value值后赋值
  selectValue() {
    var _a;
    if (!this.selectEl) {
      return;
    }
    const child = this.selectEl.children;
    const len = child.length;
    for (let i = 0; i < len; i++) {
      const el = child.item(i);
      if (((_a = child.item(i)) === null || _a === void 0 ? void 0 : _a.localName) === 'option') {
        el.value === this.value ? (el.selected = true) : (el.selected = false);
      }
    }
  }
  // 数据改变
  onChange(el) {
    el.stopPropagation();
    el.preventDefault();
    this.valuechange.emit(el.target['value']);
  }
  render() {
    return (h(Host, null, h("select", { ref: el => (this.selectEl = el), onChange: el => this.onChange(el), class: "form-select", "aria-label": "Default select example" }, h("slot", null))));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5Select.style = dsb5SelectCss;

export { Dsb5Select as dsb5_select };
