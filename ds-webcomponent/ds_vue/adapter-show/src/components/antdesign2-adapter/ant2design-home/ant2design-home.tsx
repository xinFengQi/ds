import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ant2design-home',
  styleUrl: 'ant2design-home.css',
  shadow: false,
})
export class Ant2designHome {
  render() {
    return (
      <Host>
        <vue2-ant __name="a-breadcrumb" v-separator="34">
          <vue2-ant __name="a-breadcrumb-item">
            <span>首页</span>
          </vue2-ant>
          <vue2-ant __name="a-breadcrumb-item" href="/#">
            <span>第二页</span>
          </vue2-ant>
          <vue2-ant __name="a-breadcrumb-item" href="/#">
            <span>第三页</span>
          </vue2-ant>
          <vue2-ant __name="a-breadcrumb-item">
            <span>第四页</span>
          </vue2-ant>
        </vue2-ant>

        <code-show>
          
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-breadcrumb" v-separator="34">
              <vue2-ant __name="a-breadcrumb-item">
                <span>首页</span>
              </vue2-ant>
              <vue2-ant __name="a-breadcrumb-item" href="/#">
                <span>第二页</span>
              </vue2-ant>
              <vue2-ant __name="a-breadcrumb-item" href="/#">
                <span>第三页</span>
              </vue2-ant>
              <vue2-ant __name="a-breadcrumb-item">
                <span>第四页</span>
              </vue2-ant>
            </vue2-ant>

         
          </div>
        </code-show>

        <antdesign2-preview></antdesign2-preview>
      </Host>
    );
  }
}
