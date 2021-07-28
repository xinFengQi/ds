import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-timepicker',
  styleUrl: 'antdesign2-timepicker.css',
  scoped: true
})
export class Antdesign2Timepicker {

  
  @State()
  expend1 = false;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
