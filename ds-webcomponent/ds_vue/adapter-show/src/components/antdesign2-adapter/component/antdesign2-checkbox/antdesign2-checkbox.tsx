import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-checkbox',
  styleUrl: 'antdesign2-checkbox.css',
  
})
export class Antdesign2Checkbox {
  @State()
  expend1 = false;
  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-checkbox">
              <span>多选框</span>
            </vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-checkbox">
  <span>多选框</span>
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
