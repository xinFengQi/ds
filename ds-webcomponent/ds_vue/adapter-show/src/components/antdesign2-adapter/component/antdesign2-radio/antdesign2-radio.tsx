import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-radio',
  styleUrl: 'antdesign2-radio.css',
  scoped: true
})
export class Antdesign2Radio {

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
