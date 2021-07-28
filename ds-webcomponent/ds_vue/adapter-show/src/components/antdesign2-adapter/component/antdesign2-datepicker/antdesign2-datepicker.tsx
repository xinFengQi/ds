import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-datepicker',
  styleUrl: 'antdesign2-datepicker.css',
  
})
export class Antdesign2Datepicker {
  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-date-picker"></vue2-ant>
            <vue2-ant __name="a-month-picker" placeholder="选择月份"></vue2-ant>
            <vue2-ant __name="a-range-picker"></vue2-ant>
            <vue2-ant __name="a-week-picker" placeholder="选择周"></vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {` 
<vue2-ant __name="a-date-picker"></vue2-ant>
<vue2-ant __name="a-month-picker" placeholder="选择月份"></vue2-ant>
<vue2-ant __name="a-range-picker"></vue2-ant>
<vue2-ant __name="a-week-picker" placeholder="选择周"></vue2-ant>

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
