import { r as registerInstance, h, f as Host } from './index-4c5a6b9b.js';
import { C as ComponentType } from './type.interface-66dd2cb8.js';

const dsb5ButtonCss = "";

const Dsb5Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** 按钮的类型 */
    this.type = ComponentType.primary;
    /** 按钮outline类型 */
    this.outline = false;
    /** 按钮大小 */
    this.size = null;
  }
  render() {
    return (h(Host, { class: {
        btn: true,
        [`btn-${this.type}`]: !this.outline,
        pd0: true,
        mg0: true,
      } }, h("button", { type: "button", class: {
        btn: true,
        [`btn-${this.type}`]: !this.outline,
        [`btn-outline-${this.type}`]: this.outline,
        [`btn-${this.size}`]: !!this.size,
      } }, h("slot", null))));
  }
};
Dsb5Button.style = dsb5ButtonCss;

export { Dsb5Button as dsb5_button };
