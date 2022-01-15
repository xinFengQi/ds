import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-pageheader',
  styleUrl: 'antdesign2-pageheader.css',
  
})
export class Antdesign2Pageheader {

  @State()
  expend1 = false;
  pageHeaDerRef = null;

  componentDidLoad() {
    if (this.pageHeaDerRef) {
      this.pageHeaDerRef.vueEmit.back = () => {
        console.log('返回事件点击')
      };
  
    }
  }


  render() {
    return (
      <div class="show_main_content">
            <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant
              __name="a-page-header"
              ref={el => (this.pageHeaDerRef = el)}
              sub-title="This is a subtitle"
              v-title="Title"
              style={{ border: '1px solid rgb(235, 237, 240)' }}
            ></vue2-ant>
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
