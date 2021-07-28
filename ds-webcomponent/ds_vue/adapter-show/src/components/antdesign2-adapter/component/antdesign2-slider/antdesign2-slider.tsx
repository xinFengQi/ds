import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-slider',
  styleUrl: 'antdesign2-slider.css',
  scoped: true,
})
export class Antdesign2Slider {
  @State()
  expend1 = false;

  sliderRef = null;

  componentDidLoad() {
    if (this.sliderRef) {
      this.sliderRef.setProp('default-value', [20, 50]);
    }
  }

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-slider" number-default-value="30"></vue2-ant>
            <vue2-ant range ref={el => (this.sliderRef = el)} __name="a-slider"></vue2-ant>
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
        <h2>Switch 开关</h2>
      </div>
    );
  }
}
