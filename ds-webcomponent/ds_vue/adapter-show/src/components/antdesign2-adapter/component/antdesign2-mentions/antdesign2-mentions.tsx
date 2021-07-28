import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-mentions',
  styleUrl: 'antdesign2-mentions.css',
  
})
export class Antdesign2Mentions {

  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
         <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-mentions">
              <vue2-ant __name="a-mentions-option" value="afc163">
                afc163
              </vue2-ant>
              <vue2-ant __name="a-mentions-option" value="zombieJ">
                zombieJ
              </vue2-ant>
              <vue2-ant __name="a-mentions-option" value="zombieJ">
                zombieJ
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
