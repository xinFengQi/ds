import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-menu',
  styleUrl: 'antdesign2-menu.css',
  
})
export class Antdesign2Menu {

  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
          <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-menu" mode="horizontal">
              <vue2-ant __name="a-menu-item" key="mail">
                <vue2-ant __name="a-icon" type="mail"></vue2-ant>
                <span>邮箱</span>
              </vue2-ant>
              <vue2-ant __name="a-menu-item" key="app" disabled>
                <vue2-ant __name="a-icon" type="appstore"></vue2-ant>app
              </vue2-ant>

              <vue2-ant __name="a-sub-menu">
                <span slot="title" class="submenu-title-wrapper">
                  <vue2-ant __name="a-icon" type="setting"></vue2-ant>Navigation Three - Submenu
                </span>
                <vue2-ant __name="a-menu-item-group" v-title="Item 1">
                  <vue2-ant __name="a-menu-item" key="setting:1">
                    Option 1
                  </vue2-ant>
                  <vue2-ant __name="a-menu-item" key="setting:2">
                    Option 2
                  </vue2-ant>
                  <vue2-ant __name="a-menu-item" key="setting:3">
                    Option 3
                  </vue2-ant>
                </vue2-ant>
              </vue2-ant>

              <vue2-ant __name="a-menu-item" key="alipay">
                <a href="#" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-menu" style={{ width: '256px' }} mode="inline">
              <vue2-ant __name="a-sub-menu" key="sub1">
                <span slot="title">
                  <vue2-ant __name="a-icon" type="mail"></vue2-ant>
                  <span>这啥</span>
                </span>
                <vue2-ant __name="a-menu-item-group" key="g2" v-title="Item 2">
                  <vue2-ant id="2222222" __name="a-menu-item" key="3">
                    Option 3
                  </vue2-ant>
                </vue2-ant>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-menu" mode="inline">
              <vue2-ant __name="a-menu-item" key="mail">
                <vue2-ant __name="a-icon" type="mail"></vue2-ant>
                <span>邮箱</span>
              </vue2-ant>
              <vue2-ant __name="a-menu-item" key="app" disabled>
                app
                <vue2-ant __name="a-icon" type="appstore"></vue2-ant>
              </vue2-ant>

              <vue2-ant __name="a-sub-menu">
                <span slot="title">
                  <vue2-ant __name="a-icon" type="setting"></vue2-ant>
                  Navigation Three - Submenu
                </span>
                <vue2-ant __name="a-menu-item-group" v-title="Item 1">
                  <vue2-ant __name="a-menu-item" key="setting:1">
                    Option 1
                  </vue2-ant>
                  <vue2-ant __name="a-menu-item" key="setting:2">
                    Option 2
                  </vue2-ant>
                  <vue2-ant __name="a-menu-item" key="setting:3">
                    Option 3
                  </vue2-ant>
                </vue2-ant>
              </vue2-ant>

              <vue2-ant __name="a-menu-item" key="alipay">
                <a href="#" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
      </div>
    );
  }

}
