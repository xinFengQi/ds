import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-radio',
  styleUrl: 'antdesign2-radio.css',
  scoped: true,
})
export class Antdesign2Radio {
  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-radio-group">
              <vue2-ant __name="a-radio" value="a">
                <span>单选框</span>
              </vue2-ant>
              <vue2-ant __name="a-radio" value="b">
                <span>单选框</span>
              </vue2-ant>
              <vue2-ant __name="a-radio" value="c">
                <span>单选框</span>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-radio-group">
              <vue2-ant __name="a-radio-button" value="a">
                Hangzhou
              </vue2-ant>
              <vue2-ant __name="a-radio-button" value="b">
                Shanghai
              </vue2-ant>
              <vue2-ant __name="a-radio-button" value="c">
                Beijing
              </vue2-ant>
              <vue2-ant __name="a-radio-button" value="d">
                Chengdu
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
