import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-button',
  styleUrl: 'antdesign2-button.css',
  scoped: true
})
export class Antdesign2Button {

  @State()
  expend1 = false;

  clickBtuEl = null;

  componentDidLoad() {

    if (this.clickBtuEl) {
      this.clickBtuEl.vueEmit.click = () => {
        console.log('点击事件生效')
      };
    }
  }

  render() {
    return (
      <div class="show_main_content">
        <h2>Button 按钮</h2>
        <code-show onExpendChange={() => (this.expend1 = !this.expend1 )}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-button" type="primary">
              <span>Primary 按钮</span>
            </vue2-ant>
            <vue2-ant __name="a-button">
              <span>Default 按钮</span>
            </vue2-ant>
            <vue2-ant __name="a-button" type="dashed">
              <span>Dashed 按钮</span>
            </vue2-ant>
            <vue2-ant __name="a-button" type="danger">
              <span>Text 按钮</span>
            </vue2-ant>
            <vue2-ant __name="a-button" type="link">
              <span>Link 按钮</span>
            </vue2-ant>
            <vue2-ant __name="a-button" v-type="primary" loading>
              <span>Loading 按钮</span>
            </vue2-ant>
            <vue2-ant ref={el => (this.clickBtuEl = el as HTMLDivElement)} __name="a-button" v-type="primary">
              <span>click 按钮</span>
            </vue2-ant>
          </div>
          {this.expend1  ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-button" type="primary">
<span>Primary 按钮</span>
</vue2-ant>
<vue2-ant __name="a-button">
<span>Default 按钮</span>
</vue2-ant>
<vue2-ant __name="a-button" v-type="Dashed">
<span>Dashed 按钮</span>
</vue2-ant>
<vue2-ant __name="a-button" type="Text">
<span>Text 按钮</span>
</vue2-ant>
<vue2-ant __name="a-button" v-type="Link">
<span>Link 按钮</span>
</vue2-ant>
<vue2-ant __name="a-button" v-type="primary" loading>
<span>Loading 按钮</span>
</vue2-ant>
`}
            </pre>
          ) : null}
        </code-show>
      </div>
    );
  }
}
