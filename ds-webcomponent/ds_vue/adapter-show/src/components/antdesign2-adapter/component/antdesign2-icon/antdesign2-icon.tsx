import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-icon',
  styleUrl: 'antdesign2-icon.css',
  scoped: true,
})
export class Antdesign2Icon {

  @State()
  expend1 = false;

  render() {
    return (
      <Host>
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-icon" v-type="step-backward" style={{ 'font-size': '30px' }}></vue2-ant>
            <vue2-ant __name="a-icon" type="step-forward" style={{ 'font-size': '30px' }}></vue2-ant>
            <vue2-ant __name="a-icon" type="fast-backward" style={{ 'font-size': '30px' }}></vue2-ant>
            <vue2-ant __name="a-icon" type="fast-forward" style={{ 'font-size': '30px' }}></vue2-ant>
            <vue2-ant __name="a-icon" type="shrink" style={{ 'font-size': '30px' }}></vue2-ant>
            <vue2-ant __name="a-icon" type="arrows-alt" style={{ 'font-size': '30px' }}></vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-icon" v-type="step-backward"  style={{'font-size': '30px'}}>
</vue2-ant>
<vue2-ant __name="a-icon" type="step-forward" style={{'font-size': '30px'}}>
</vue2-ant>
<vue2-ant __name="a-icon" type="fast-backward" style={{'font-size': '30px'}}>
</vue2-ant>
<vue2-ant __name="a-icon" type="fast-forward" style={{'font-size': '30px'}}>
</vue2-ant>
<vue2-ant __name="a-icon" type="shrink" style={{'font-size': '30px'}}>
</vue2-ant>
<vue2-ant __name="a-icon" type="arrows-alt" style={{'font-size': '30px'}}>
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
