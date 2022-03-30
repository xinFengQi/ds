import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-4c5a6b9b.js';
import { B as BaseCompoent } from './BaseCompoent-00b95334.js';
import { D as DataType } from './type.interface-66dd2cb8.js';
import './bootstrap.esm-e5ba53a8.js';

const DsProp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.getProp = createEvent(this, "getProp", 7);
    /** 参数类型 */
    this.type = DataType.string;
    // 获取到的值
    this.value = null;
    // 基础组件minix
    this.baseCompoent = new BaseCompoent();
  }
  componentWillLoad() {
    if (!this.parentEl) {
      this.parentEl = this.el.parentNode;
    }
  }
  connectedCallback() {
    this.el.slot = this.baseCompoent.id;
    const text = this.el.innerHTML.replace(/\n|\r| /g, '').trim();
    try {
      const lowerType = this.type.toLocaleLowerCase();
      if (lowerType === 'array' || lowerType === 'json') {
        this.value = JSON.parse(text);
      }
      if (lowerType === 'boolean') {
        if (text === 'false' || text === '0') {
          this.value === false;
        }
        else {
          this.value = Boolean(text);
        }
      }
    }
    catch (error) {
      console.error(error);
    }
  }
  componentDidLoad() {
    this.parentEl[this.name] = this.value;
    this.getProp.emit({ key: this.name, value: this.value });
  }
  render() {
    return (h(Host, null, h("span", { style: { display: 'none' } }, h("slot", null))));
  }
  get el() { return getElement(this); }
};

export { DsProp as ds_prop };
