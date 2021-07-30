import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-pagination',
  styleUrl: 'antdesign2-pagination.css',
  scoped: true
})
export class Antdesign2Pagination {

  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-pagination" number-total="50" show-less-items></vue2-ant>
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
