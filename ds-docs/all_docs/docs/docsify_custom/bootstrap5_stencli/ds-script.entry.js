import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-389a1a77.js';

const DsScript = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.getExecute = createEvent(this, "getExecute", 7);
    // 初始化获取的js代码片段
    this.jstext = '';
    // 是否已经执行了js代码
    this.isExecute = false;
  }
  connectedCallback() {
    if (this.el) {
      this.jstext = this.el.innerHTML;
    }
  }
  componentWillLoad() {
    if (!this.parentEl) {
      this.parentEl = this.el.parentNode;
    }
  }
  componentDidLoad() {
    new Function('$el', this.jstext)(this.parentEl);
    this.getExecute.emit(true);
  }
  render() {
    return (h(Host, null, h("span", { style: { display: 'none' } }, h("slot", null))));
  }
  get el() { return getElement(this); }
};

export { DsScript as ds_script };
