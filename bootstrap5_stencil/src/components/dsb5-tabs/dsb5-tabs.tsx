import { Component, Host, h, Prop, Element, forceUpdate } from '@stencil/core';
import { BaseCompoent } from '../../core/BaseCompoent';

@Component({
  tag: 'dsb5-tabs',
  styleUrl: 'dsb5-tabs.css',
  shadow: false,
  scoped: true,
})
export class Dsb5Tabs {
  @Element() hostDiv: HTMLElement;

  @Prop() tabs: string[] = [];

  // 基础组件minix
  baseCompoent = new BaseCompoent();

  // 当前的tab索引
  selectIndex = 0;

  contentEl: any;

  componentWillRender() {
    return true;
  }

  // 选择标签
  selectTab(index: number) {
    this.selectIndex = index;
    forceUpdate(this.hostDiv);
  }

  render() {
    return (
      <Host>
        <ul class="nav nav-tabs" role="tablist">
          {this.tabs.map((tab, i) => {
            return (
              <li class="nav-item" role="presentation">
                <button
                  class={{ 'nav-link': true, 'active': i === this.selectIndex }}
                  id={`${this.baseCompoent.id}_${i}_tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${this.baseCompoent.id}_${i}`}
                  type="button"
                  role="tab"
                  aria-controls={`${this.baseCompoent.id}_${i}`}
                  aria-selected={i === this.selectIndex}
                  onClick={() => this.selectTab(i)}
                >
                  {tab}
                </button>
              </li>
            );
          })}
        </ul>
        <div class="tab-content">
          {this.tabs.map((tab, i) => {
            return (
              <div
                class={{ 'tab-pane': true, 'fade': true, 'show': i === this.selectIndex, 'active': i === this.selectIndex }}
                id={`#${this.baseCompoent.id}_${i}`}
                role="tabpanel"
                aria-labelledby={`${this.baseCompoent.id}_${i}_tab`}
              >
                <slot name={tab}></slot>
              </div>
            );
          })}
        </div>
      </Host>
    );
  }
}
