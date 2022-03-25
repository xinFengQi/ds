import { r as registerInstance, h, f as Host } from './index-389a1a77.js';
import { a as Toast, T as Tooltip } from './bootstrap.esm-c7444ea8.js';

const dsb5TestCss = ":host{display:block}";

const bootstrap5StencliTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.testBjs = () => {
      Array.from(document.querySelectorAll('.toast')).forEach(toastNode => new Toast(toastNode).show());
    };
  }
  componentDidLoad() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }
  render() {
    return (h(Host, null, h("button", { onClick: () => this.testBjs(), type: "button", class: "btn btn-primary" }, "\u6253\u5F00toast"), h("span", { class: "d-inline-block", tabindex: "0", "data-bs-toggle": "tooltip", title: "Disabled tooltip" }, h("button", { class: "btn btn-primary", type: "button", disabled: true }, "Disabled button")), h("button", { type: "button", class: "btn btn-primary", "data-bs-toggle": "modal", "data-bs-target": "#exampleModal" }, "\u5C55\u793A\u6A21\u6001\u6846"), h("div", { class: "position-fixed bottom-0 end-0 p-3", style: { 'z-index': '11' } }, h("div", { id: "liveToast", class: "toast hide", role: "alert", "aria-live": "assertive", "aria-atomic": "true" }, h("div", { class: "toast-header" }, h("strong", { class: "me-auto" }, "Bootstrap"), h("small", null, "11 mins ago"), h("button", { type: "button", class: "btn-close", "data-bs-dismiss": "toast", "aria-label": "Close" })), h("div", { class: "toast-body" }, "Hello, world! This is a toast message."))), h("div", { class: "modal fade", id: "exampleModal", tabindex: "-1", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" }, h("div", { class: "modal-dialog" }, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h5", { class: "modal-title", id: "exampleModalLabel" }, "\u6A21\u6001\u6807\u9898"), h("button", { type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })), h("div", { class: "modal-body" }, "\u8FD9\u5565\u5185\u5BB9"), h("div", { class: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", "data-bs-dismiss": "modal" }, "\u5173\u95ED"), h("button", { type: "button", class: "btn btn-primary" }, "\u4FDD\u5B58")))))));
  }
};
bootstrap5StencliTest.style = dsb5TestCss;

export { bootstrap5StencliTest as dsb5_test };
