import { Component, Host, h, Prop, Element, forceUpdate } from '@stencil/core';

@Component({
  tag: 'ds-tabs',
  styleUrl: 'ds-tabs.css',
  shadow: true,
})
export class DsTabs {

  /** 间距的大小，单位px */
  @Prop() dsSize = 8;

  /** 内部布局，垂直还是水平 */
  @Prop() dsDirection: 'vertical' | 'horizontal' = 'horizontal';

  @Element() hostDiv: HTMLElement;

  @Prop() demo = false;


  tabs = [];

  activeIndex = 0;

  // 组件与dom连接后执行
  componentDidLoad() {
    this.hostDiv.style.display = "block"
  }

  componentWillRender() {
    this.tabs = [];
    // 修改子组件的item的属性
    const child = this.hostDiv.children;
    const len = child.length;
    for (let i = 0; i < len; i++) {
      const el = child.item(i);
      if (child.item(i)?.nodeName === 'DS-TAB' && el.getAttribute('slot')) {
        this.tabs.push({
          index: i,
          name: el.getAttribute('name') ? el.getAttribute('name') : 'tab' + (i + 1),
          slot: el.getAttribute('slot')
        })
      }
    }
    return true;
  }

  tabClick(event, i, tab) {
    console.log(event, tab)
    this.activeIndex = i;
    forceUpdate(this.hostDiv)
  }

  render() {
    return (
      <Host class="host">
        <div class={{
          ds_tab_host_h: this.dsDirection === 'horizontal',
        }}>
          <div class={{
            ds_tabs_main: true,
            ds_tabs_main_v: this.dsDirection === 'horizontal',
            ds_tabs_main_h: this.dsDirection === 'vertical',
          }}
          >
            {
              this.tabs.map((tab, i) => {
                return (
                  <div class="ds_tab" onClick={($event) => this.tabClick($event, i, tab)}>
                    {tab.name}
                  </div>
                )
              })
            }
          </div>

          {
            this.tabs.length ? (
              <div>
                <slot name={this.tabs[this.activeIndex].slot}></slot>
              </div>
            ) : null
          }
          {this.demo ? [
            <ds-tab slot="tab1">
              tab1
                </ds-tab>,
            <ds-tab slot="tab2">
              tab2
                </ds-tab>
          ] : null}
        </div>


      </Host>
    );
  }

}
