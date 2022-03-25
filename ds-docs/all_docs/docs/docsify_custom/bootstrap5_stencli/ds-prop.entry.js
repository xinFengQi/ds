import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-389a1a77.js';
import { D as DataType } from './type.interface-4c7cb78a.js';

const DsProp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.getProp = createEvent(this, "getProp", 7);
    /** 参数类型 */
    this.type = DataType.string;
    // 获取到的值
    this.value = null;
  }
  connectedCallback() {
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
  componentWillLoad() {
    if (!this.parentEl) {
      this.parentEl = this.el.parentNode;
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
