import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-affix',
  styleUrl: 'antdesign2-affix.css',
  scoped: true,
})
export class Antdesign2Affix {

  @State()
  expend1 = false;

  affixNum = 100;

  affixEl = null;

  componentDidLoad() {
   
  }

  render() {
    return (
      <Host>
         <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant ref={el => (this.affixEl = el)} __name="a-affix" number-offset-top={this.affixNum} v-target={this.affixEl}>
              <vue2-ant __name="a-button" type="primary">
                <span>固定</span>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-affix" offset-top={this.affixNum}>
  <vue2-ant __name="a-button" type="primary">
    <span>固定</span>
  </vue2-ant>
</vue2-ant>
`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
      </Host>
    );
  }

}
