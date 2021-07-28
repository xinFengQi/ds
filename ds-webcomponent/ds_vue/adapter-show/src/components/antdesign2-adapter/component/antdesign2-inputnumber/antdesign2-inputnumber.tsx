import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-inputnumber',
  styleUrl: 'antdesign2-inputnumber.css',
})
export class Antdesign2Inputnumber {
  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-input-number" number-min="1" number-max="10"></vue2-ant>
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
