import { Component, Host, h, Element, forceUpdate, Prop } from '@stencil/core';
import { BaseCompoent } from './../../core/BaseCompoent';

@Component({
  tag: 'dsb5-webcomponent-show',
  styleUrl: 'dsb5-webcomponent-show.css',
  shadow: false,
  scoped: true,
})
export class Dsb5WebcomponentShow {
  @Element() hostDiv: HTMLElement;

  /** 内容展示方式 */
  @Prop() type: null | 'row' = null;

  // 是否展示代码
  showCode = false;
  showHtml = '';

  // 继承基础组件
  baseComponent = new BaseCompoent();

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
    console.log('复制成功');
  }

  render() {
    return (
      <Host>
        <div
          class={{
            main_content: true,
            main_content_flex: this.type === 'row',
          }}
        >
          <slot></slot>
        </div>
        <div class="main_toobar">
          <i
            id={this.baseComponent.id + 'tooltip_1'}
            class="bi bi-code-slash"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="代码"
            onClick={() => this.showCodeClick()}
          ></i>
          <i
            id={this.baseComponent.id + 'tooltip_2'}
            class="bi bi-file-earmark-text"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="复制"
            onClick={() => this.copyCode()}
          ></i>
        </div>
        <div class="main_detail">
          {this.showCode ? (
            <div class="code">
              <pre class="padding0 margin0">{this.showHtml}</pre>
            </div>
          ) : null}
        </div>
      </Host>
    );
  }
}
