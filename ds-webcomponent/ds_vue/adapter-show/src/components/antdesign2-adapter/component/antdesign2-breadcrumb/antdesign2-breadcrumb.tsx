import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-breadcrumb',
  styleUrl: 'antdesign2-breadcrumb.css',
  scoped: true,
})
export class Antdesign2Breadcrumb {
  @State()
  expend1 = false;

  render() {
    return (
      <Host>
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
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

            <vue2-ant __name="a-breadcrumb">
              <span slot="separator" style={{ color: 'red' }}>
                &lt;
              </span>
              <vue2-ant __name="a-breadcrumb-item">首页</vue2-ant>
              <vue2-ant __name="a-breadcrumb-item" href="">
                第二页
              </vue2-ant>
              <vue2-ant __name="a-breadcrumb-item" href="">
                第三页
              </vue2-ant>
              <vue2-ant __name="a-breadcrumb-item">第四页</vue2-ant>
            </vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {`            <vue2-ant __name="a-breadcrumb" v-separator="34">
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

<vue2-ant __name="a-breadcrumb">
<span slot="separator" style={{ color: 'red' }}>
  &lt;
</span>
<vue2-ant __name="a-breadcrumb-item">首页</vue2-ant>
<vue2-ant __name="a-breadcrumb-item" href="">
  第二页
</vue2-ant>
<vue2-ant __name="a-breadcrumb-item" href="">
  第三页
</vue2-ant>
<vue2-ant __name="a-breadcrumb-item">第四页</vue2-ant>
</vue2-ant>

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
      </Host>
    );
  }
}
