import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-switch',
  styleUrl: 'antdesign2-switch.css',
  scoped: true,
})
export class Antdesign2Switch {
  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-switch" checked-children="开" un-checked-children="关" default-checked></vue2-ant>
            <br />
            <vue2-ant __name="a-switch" checked-children="1" un-checked-children="0"></vue2-ant>
            <br />
            <vue2-ant __name="a-switch">
              <vue2-ant __name="a-icon" __slot="checkedChildren" type="check"></vue2-ant>
              <vue2-ant __name="a-icon" __slot="unCheckedChildren" type="close"></vue2-ant>
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
