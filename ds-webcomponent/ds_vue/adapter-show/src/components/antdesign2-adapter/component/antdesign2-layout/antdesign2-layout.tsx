import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-layout',
  styleUrl: 'antdesign2-layout.css',
})
export class Antdesign2Layout {
  @State()
  expend4 = false;

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend4 = !this.expend4)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-layout">
              <vue2-ant __name="a-layout-header">
                <span class="layout_demo ">头部</span>
              </vue2-ant>
              <vue2-ant __name="a-layout-content">
                <span class="layout_demo  layout_demo_contnet dan">内容</span>
              </vue2-ant>
              <vue2-ant __name="a-layout-footer">
                <span class="layout_demo">底部</span>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-layout">
              <vue2-ant __name="a-layout-header">
                <span class="layout_demo ">头部</span>
              </vue2-ant>
              <vue2-ant __name="a-layout">
                <vue2-ant __name="a-layout-sider">
                  <span class="layout_demo  layout_demo_contnet dan">侧边栏</span>
                </vue2-ant>
                <vue2-ant __name="a-layout-content">
                  <span class="layout_demo  layout_demo_contnet dan">内容</span>
                </vue2-ant>
              </vue2-ant>
              <vue2-ant __name="a-layout-footer">
                <span class="layout_demo">底部</span>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-layout">
              <vue2-ant __name="a-layout-sider">
                <span class="layout_demo  layout_demo_contnet dan">侧边栏</span>
              </vue2-ant>
              <vue2-ant __name="a-layout">
                <vue2-ant __name="a-layout-header">
                  <span class="layout_demo ">头部</span>
                </vue2-ant>
                <vue2-ant __name="a-layout-content">
                  <span class="layout_demo  layout_demo_contnet dan">内容</span>
                </vue2-ant>
                <vue2-ant __name="a-layout-footer">
                  <span class="layout_demo">底部</span>
                </vue2-ant>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend4 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-layout">
<vue2-ant __name="a-layout-header">
  <span class="layout_demo ">头部</span>
</vue2-ant>
<vue2-ant __name="a-layout-content">
  <span class="layout_demo  layout_demo_contnet dan">内容</span>
</vue2-ant>
<vue2-ant __name="a-layout-footer">
  <span class="layout_demo">底部</span>
</vue2-ant>
</vue2-ant>


<vue2-ant __name="a-layout">
<vue2-ant __name="a-layout-header">
  <span class="layout_demo ">头部</span>
</vue2-ant>
<vue2-ant __name="a-layout">
  <vue2-ant __name="a-layout-sider">
    <span class="layout_demo  layout_demo_contnet dan">侧边栏</span>
  </vue2-ant>
  <vue2-ant __name="a-layout-content">
    <span class="layout_demo  layout_demo_contnet dan">内容</span>
  </vue2-ant>
</vue2-ant>
<vue2-ant __name="a-layout-footer">
  <span class="layout_demo">底部</span>
</vue2-ant>
</vue2-ant>

<vue2-ant __name="a-layout">
<vue2-ant __name="a-layout-sider">
  <span class="layout_demo  layout_demo_contnet dan">侧边栏</span>
</vue2-ant>
<vue2-ant __name="a-layout">
  <vue2-ant __name="a-layout-header">
    <span class="layout_demo ">头部</span>
  </vue2-ant>
  <vue2-ant __name="a-layout-content">
    <span class="layout_demo  layout_demo_contnet dan">内容</span>
  </vue2-ant>
  <vue2-ant __name="a-layout-footer">
    <span class="layout_demo">底部</span>
  </vue2-ant>
</vue2-ant>
</vue2-ant>

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
