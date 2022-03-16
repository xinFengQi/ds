import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-space',
  styleUrl: 'antdesign2-space.css',
  scoped: true
})
export class Antdesign2Space {
  @State() expend5 = false;

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend5 = !this.expend5)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-space">
              <span>间距</span>
              <vue2-ant __name="a-button" type="primary">
                <span>按钮</span>
              </vue2-ant>
              <vue2-ant __name="a-button" type="primary">
                <vue2-ant __name="a-upload">
                  <vue2-ant __name="a-button">
                    <vue2-ant __name="a-icon" type="upload"></vue2-ant>
                    点击上传
                  </vue2-ant>
                </vue2-ant>
              </vue2-ant>
              <vue2-ant __name="a-popconfirm" v-title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
                <vue2-ant __name="a-button">
                  <span> 确认</span>
                </vue2-ant>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend5 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-space">
<span>间距</span>
<vue2-ant __name="a-button" type="primary">
  <span>按钮</span>
</vue2-ant>
<vue2-ant __name="a-button" type="primary">
  <vue2-ant __name="a-upload">
    <vue2-ant __name="a-button">
      <vue2-ant __name="a-icon" type="upload">
      </vue2-ant>
      点击上传
    </vue2-ant>
  </vue2-ant>
</vue2-ant>
<vue2-ant __name="a-popconfirm" v-title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
  <vue2-ant __name="a-button">
    <span> 确认</span>
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
