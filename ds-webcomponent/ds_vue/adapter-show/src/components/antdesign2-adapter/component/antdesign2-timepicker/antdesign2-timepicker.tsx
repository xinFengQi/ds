import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-timepicker',
  styleUrl: 'antdesign2-timepicker.css',
  scoped: true,
})
export class Antdesign2Timepicker {
  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant use12-hours __name="a-time-picker" format="h:mm a">
              <vue2-ant __name="span" __slot="addon">
                底部
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
