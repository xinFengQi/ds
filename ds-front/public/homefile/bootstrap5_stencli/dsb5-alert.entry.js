import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-4c5a6b9b.js';
import { B as BaseCompoent } from './BaseCompoent-c2010ea0.js';
import { C as ComponentType } from './type.interface-66dd2cb8.js';
import './bootstrap.esm-e5ba53a8.js';

const dsb5AlertCss = ".sc-dsb5-alert-h{display:block}.alert_fixed.sc-dsb5-alert{position:fixed;top:10px;left:0;right:0;margin-left:auto;margin-right:auto;min-width:300px;max-width:450px;z-index:99999}.alert_padding.sc-dsb5-alert{padding:5px 1rem !important}";

const Dsb5Alert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeemit = createEvent(this, "closeemit", 7);
    /** 弹框是否是浮动的 */
    this.fixed = true;
    /** 弹框的类型 */
    this.type = ComponentType.primary;
    /** 是否显示 */
    this.show = true;
    /** 是否显示关闭按钮 */
    this.close = false;
    /** 延迟关闭 */
    this.delay = 3000;
    // 基础组件minix
    this.baseCompoent = new BaseCompoent();
  }
  componentDidLoad() {
    this.baseCompoent.toastInit(this.hostDiv);
    if (!this.delay && this.close) {
      this.alertRef.addEventListener('closed.bs.alert', () => {
        this.hostDiv.remove();
        this.closeemit.emit(true);
      });
    }
    if (this.delay) {
      setTimeout(() => {
        this.hostDiv.remove();
        this.closeemit.emit(true);
      }, this.delay);
    }
  }
  /**
   * 显示弹框组件;
   * 用法: dsb5.dsb5Alert.showAlert({content: '测试弹框'});
   *
   **/
  async showAlert(opt) {
    if (!opt) {
      throw '调用的showAlert未传入参数';
    }
    const el = document.createElement('dsb5-alert');
    el.fixed = true;
    if (opt.hasOwnProperty('content')) {
      el.content = opt.content;
    }
    if (opt.hasOwnProperty('type')) {
      el.type = opt.type;
    }
    if (opt.hasOwnProperty('close')) {
      el.close = opt.close;
    }
    document.body.append(el);
  }
  render() {
    if (this.show) {
      return (h(Host, null, h("div", { class: {
          alert_fixed: this.fixed,
        } }, h("div", { ref: el => (this.alertRef = el), class: {
          'alert': true,
          [`alert-${this.type}`]: true,
          'alert-dismissible': true,
          'fade': true,
          'show': true,
          'alert_padding': this.fixed,
        }, role: "alert" }, this.content, h("slot", null), this.close ? h("button", { type: "button", class: "btn-close", "data-bs-dismiss": "alert", "aria-label": "Close" }) : null))));
    }
  }
  get hostDiv() { return getElement(this); }
};
Dsb5Alert.style = dsb5AlertCss;

export { Dsb5Alert as dsb5_alert };
