import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-389a1a77.js';

const dsb5InputCss = ".sc-dsb5-input-h{display:block}.error_border.sc-dsb5-input{border-color:red !important}";

const Dsb5Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    /** 当前的值 */
    this.value = null;
  }
  componentShouldUpdate(oldData, newData, prop) {
    if (prop === 'value') {
      return oldData !== newData;
    }
    return true;
  }
  // 数据改变
  onChange(el) {
    this.valueChange.emit(el.target.value);
  }
  render() {
    return (h(Host, null, h("div", { class: "input-group" }, h("input", { type: "text", class: { 'form-control': true, error_border: this.error }, value: this.value, onChange: el => this.onChange(el), onInput: el => this.onChange(el), placeholder: this.placeholder }))));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5Input.style = dsb5InputCss;

export { Dsb5Input as dsb5_input };
