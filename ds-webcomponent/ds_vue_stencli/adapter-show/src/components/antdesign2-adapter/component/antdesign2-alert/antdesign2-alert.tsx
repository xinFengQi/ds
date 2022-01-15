import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-alert',
  styleUrl: 'antdesign2-alert.css',
})
export class Antdesign2Alert {
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
