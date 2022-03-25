import { r as registerInstance, i as forceUpdate, h, f as Host, g as getElement } from './index-389a1a77.js';
import './bootstrap.esm-c7444ea8.js';
import { C as ComponentType } from './type.interface-4c7cb78a.js';
import { B as BaseCompoent } from './BaseCompoent-b6139ac3.js';

const dsb5WebcomponentShowCss = ".sc-dsb5-webcomponent-show-h{display:block}.main_content.sc-dsb5-webcomponent-show{border:1px solid var(--bs-lightgray);padding:10px;display:flex;justify-content:center;flex-direction:column}.main_content_flex.sc-dsb5-webcomponent-show{flex-direction:row}.main_toobar.sc-dsb5-webcomponent-show{display:flex;justify-content:center;border:1px solid var(--bs-lightgray);border-top:0px}.main_detail.sc-dsb5-webcomponent-show{border:1px solid var(--bs-lightgray);border-top:0px}";

const Dsb5WebcomponentShow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** 内容展示方式 */
    this.type = null;
    // 是否展示代码
    this.showCode = false;
    this.showHtml = '';
    // 继承基础组件
    this.baseComponent = new BaseCompoent();
  }
  connectedCallback() {
    this.showHtml = this.hostDiv.innerHTML.replace(/\<!----\>/g, '');
  }
  componentDidLoad() {
    this.baseComponent.toolTipInit(this.hostDiv);
  }
  // 展示代码
  showCodeClick() {
    this.showCode = !this.showCode;
    forceUpdate(this.hostDiv);
  }
  // 复制代码
  copyCode() {
    const input = document.createElement('input');
    input.value = this.showHtml; // 修改文本框的内容
    document.body.appendChild(input);
    input.select(); // 选中文本
    document.execCommand('copy'); // 执行浏览器复制命令
    document.body.removeChild(input);
    dsb5.dsb5Alert.showAlert({ content: '复制成功', type: ComponentType.success });
    console.log('复制成功');
  }
  render() {
    return (h(Host, null, h("div", { class: {
        main_content: true,
        main_content_flex: this.type === 'row',
      } }, h("slot", null)), h("div", { class: "main_toobar" }, h("i", { id: this.baseComponent.id + 'tooltip_1', class: "bi bi-code-slash", "data-bs-toggle": "tooltip", "data-bs-placement": "top", title: "\u4EE3\u7801", onClick: () => this.showCodeClick() }), h("i", { id: this.baseComponent.id + 'tooltip_2', class: "bi bi-file-earmark-text", "data-bs-toggle": "tooltip", "data-bs-placement": "top", title: "\u590D\u5236", onClick: () => this.copyCode() })), h("div", { class: "main_detail" }, this.showCode ? (h("div", { class: "code" }, h("pre", { class: "padding0 margin0" }, this.showHtml))) : null)));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5WebcomponentShow.style = dsb5WebcomponentShowCss;

export { Dsb5WebcomponentShow as dsb5_webcomponent_show };
