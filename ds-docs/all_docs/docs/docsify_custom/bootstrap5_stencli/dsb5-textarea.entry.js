import { r as registerInstance, h, f as Host, g as getElement } from './index-4c5a6b9b.js';

const dsb5TextareaCss = ".sc-dsb5-textarea-h{display:block}";

const Dsb5Textarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.rows = 6;
  }
  render() {
    return (h(Host, null, h("textarea", { class: "form-control", rows: this.rows })));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5Textarea.style = dsb5TextareaCss;

export { Dsb5Textarea as dsb5_textarea };
