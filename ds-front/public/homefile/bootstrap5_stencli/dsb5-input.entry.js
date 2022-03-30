import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-4c5a6b9b.js';
import { B as BaseCompoent } from './BaseCompoent-00b95334.js';
import './bootstrap.esm-e5ba53a8.js';

const dsb5InputCss = ".sc-dsb5-input-h{display:block}.error_input_border.sc-dsb5-input{border:0px !important}.error_border.sc-dsb5-input{border:1px solid red !important;border-radius:0.25rem}";

const Dsb5Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    /** 按钮大小 */
    this.size = null;
    /** 当前的值 */
    this.value = null;
    // 继承基础组件
    this.baseComponent = new BaseCompoent();
  }
  connectedCallback() {
    this.baseComponent.connectedCallback(this.hostDiv, null, (slots) => {
      // 针对前后缀是纯文本增加类名
      const slot = ['prefix', 'suffix'];
      const element = ['span', 'label'];
      slots.forEach(v => {
        if (slot.includes(v.slot) && element.includes(v.localName.toLocaleLowerCase())) {
          v.classList.add('input-group-text');
        }
      });
    });
  }
  componentWillRender() {
  }
  // 数值更新
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
    return (h(Host, null, h("div", { class: { 'input-group': true, [`input-group-${this.size}`]: !!this.size, 'error_border': this.error } }, h("slot", { name: 'prefix' }), h("input", { type: "text", class: { 'form-control': true, 'error_input_border': this.error }, value: this.value, onChange: el => this.onChange(el), onInput: el => this.onChange(el), placeholder: this.placeholder }), h("slot", { name: 'suffix' }))));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5Input.style = dsb5InputCss;

export { Dsb5Input as dsb5_input };
