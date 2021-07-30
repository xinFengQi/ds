import { Component, h,  State } from '@stencil/core';

@Component({
  tag: 'antdesign2-input',
  styleUrl: 'antdesign2-input.css',
  
})
export class Antdesign2Input {

  
  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
      <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant style={{ width: '140px' }} __name="a-input" placeholder="基础输入">
              <vue2-ant __name="a-icon" __slot="prefix" type="user"></vue2-ant>
              <vue2-ant __name="a-tooltip" __slot="suffix" title="Extra information">
                <vue2-ant __name="a-icon" type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }}></vue2-ant>
              </vue2-ant>
            </vue2-ant>
            <br></br>

            <vue2-ant __name="a-input-search" placeholder="输入显示加载显示" loading enter-button></vue2-ant>
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
