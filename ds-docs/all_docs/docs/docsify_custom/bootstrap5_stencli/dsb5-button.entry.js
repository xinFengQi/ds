import { r as registerInstance, h, f as Host } from './index-389a1a77.js';
import { C as ComponentType } from './type.interface-4c7cb78a.js';

const dsb5ButtonCss = ".sc-dsb5-button-h{display:block}.btn.sc-dsb5-button{margin-right:5px}";

const Dsb5Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** 按钮的类型 */
    this.type = ComponentType.primary;
    /** 弹框的类型 */
    this.outline = false;
  }
  render() {
    return (h(Host, null, h("button", { type: "button", class: { btn: true, [`btn-${this.type}`]: !this.outline, [`btn-outline-${this.type}`]: this.outline } }, h("slot", null))));
  }
};
Dsb5Button.style = dsb5ButtonCss;

export { Dsb5Button as dsb5_button };
