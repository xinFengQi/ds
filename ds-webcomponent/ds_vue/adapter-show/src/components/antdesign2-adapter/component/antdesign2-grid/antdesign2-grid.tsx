import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-grid',
  styleUrl: 'antdesign2-grid.css',
})
export class Antdesign2Grid {
  @State()
  expend1 = false;

  render() {
    return (
      <Host>
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-row">
              <vue2-ant __name="a-col" v-span="12">
                <span class="col_demo dan">col-12</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="12">
                <span class="col_demo shen">col-12</span>
              </vue2-ant>
            </vue2-ant>
            <vue2-ant __name="a-row">
              <vue2-ant __name="a-col" v-span="8">
                <span class="col_demo dan">col-8</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="8">
                <span class="col_demo shen">col-8</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="8">
                <span class="col_demo dan">col-8</span>
              </vue2-ant>
            </vue2-ant>
            <vue2-ant __name="a-row">
              <vue2-ant __name="a-col" v-span="6">
                <span class="col_demo dan">col-6</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="6">
                <span class="col_demo shen">col-6</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="6">
                <span class="col_demo dan">col-6</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="6">
                <span class="col_demo shen">col-6</span>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-row">
<vue2-ant __name="a-col" v-span="12">
  <span class="col_demo dan">col-12</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="12">
  <span class="col_demo shen">col-12</span>
</vue2-ant>
</vue2-ant>
<vue2-ant __name="a-row">
<vue2-ant __name="a-col" v-span="8">
  <span class="col_demo dan">col-8</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="8">
  <span class="col_demo shen">col-8</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="8">
  <span class="col_demo dan">col-8</span>
</vue2-ant>
</vue2-ant>
<vue2-ant __name="a-row">
<vue2-ant __name="a-col" v-span="6">
  <span class="col_demo dan">col-6</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="6">
  <span class="col_demo shen">col-6</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="6">
  <span class="col_demo dan">col-6</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="6">
  <span class="col_demo shen">col-6</span>
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
