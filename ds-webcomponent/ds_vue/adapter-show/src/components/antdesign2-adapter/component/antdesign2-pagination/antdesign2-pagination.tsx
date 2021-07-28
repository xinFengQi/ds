import { Component, Host, h, State } from '@stencil/core';

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
        <slot></slot>
      </div>
    );
  }

}
