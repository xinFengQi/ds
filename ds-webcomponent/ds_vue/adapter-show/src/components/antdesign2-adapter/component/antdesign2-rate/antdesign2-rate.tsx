import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-rate',
  styleUrl: 'antdesign2-rate.css',
  scoped: true,
})
export class Antdesign2Rate {
  @State()
  expend1 = false;

  rateRef = null;

  componentDidLoad() {
    if (this.rateRef) {
      this.rateRef.setProp('tooltips', ['terrible', 'bad', 'normal', 'good', 'wonderful']);
    }
  }

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant ref={el => (this.rateRef = el)} __name="a-rate"></vue2-ant>
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
