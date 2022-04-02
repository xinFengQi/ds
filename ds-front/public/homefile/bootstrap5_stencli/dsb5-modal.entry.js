import { r as registerInstance, e as createEvent, i as forceUpdate, h, f as Host, g as getElement } from './index-4c5a6b9b.js';
import { B as BaseCompoent } from './BaseCompoent-00b95334.js';
import './bootstrap.esm-e5ba53a8.js';

const dsb5ModalCss = ".sc-dsb5-modal-h{display:block}.dsb5_no_fiexed.sc-dsb5-modal{position:relative;z-index:unset}.dsb5_show.sc-dsb5-modal{display:block}";

const Dsb5Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cacel = createEvent(this, "cacel", 7);
    this.ok = createEvent(this, "ok", 7);
    /** 弹框的位置 */
    this.location = 'center';
    /** 弹框是否是浮动的 */
    this.fixed = true;
    /** 是否显示 */
    this.show = true;
    /** 是否显示关闭按钮 */
    this.close = false;
    /** 弹框的底部 */
    this.footer = true;
    this.existFooterSolt = false;
    // 基础组件minix
    this.baseCompoent = new BaseCompoent();
    this.bodyOverFlowCache = null;
  }
  // 组件初始化连接时
  connectedCallback() {
    this.baseCompoent.connectedCallback(this.hostDiv, null, (slots) => {
      this.existFooterSolt = !!slots.find(v => v.slot === 'footer');
    });
  }
  componentDidLoad() {
    this.changeBodyOverFlow();
  }
  // 数值更新
  componentShouldUpdate(_newData, _oldData, prop) {
    if (prop === 'show') {
      this.changeBodyOverFlow();
      if (_newData) {
        setTimeout(() => {
          forceUpdate(this.hostDiv);
        });
      }
    }
    return true;
  }
  changeBodyOverFlow() {
    if (this.fixed && this.show) {
      this.bodyOverFlowCache = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = this.bodyOverFlowCache;
    }
  }
  closeModal() {
    this.show = false;
    this.cacel.emit();
  }
  okModal() {
    this.ok.emit();
  }
  render() {
    return (h(Host, null, this.show && this.fixed && h("div", { class: "modal-backdrop fade show" }), h("slot", null), h("div", { class: {
        'modal': true,
        'fade': true,
        'show': this.show,
        'dsb5_no_fiexed': !this.fixed,
        'dsb5_show': this.show,
        'modal-dialog-centered': this.show && this.location === 'center',
      }, tabindex: "-1", "aria-labelledby": this.baseCompoent.id + 'title', "aria-hidden": "true" }, h("div", { class: "modal-dialog modal-dialog-scrollable" }, h("div", { class: "modal-content" }, this.dstitle && (h("div", { class: "modal-header" }, h("h5", { class: "modal-title", id: this.baseCompoent.id + 'title' }, this.dstitle), h("button", { onClick: () => this.closeModal(), type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" }))), h("div", { class: "modal-body" }, h("slot", { name: "content" })), (this.footer || this.existFooterSolt) && (h("div", { class: "modal-footer" }, h("slot", { name: "footer" }), !this.existFooterSolt && (h("div", null, h("button", { onClick: () => this.closeModal(), type: "button", class: "btn btn-secondary mr_1", "data-bs-dismiss": "modal" }, "\u5173\u95ED"), h("button", { onClick: () => this.okModal(), type: "button", class: "btn btn-primary" }, "\u786E\u5B9A"))))))))));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5Modal.style = dsb5ModalCss;

export { Dsb5Modal as dsb5_modal };
