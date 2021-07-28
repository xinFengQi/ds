import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-switch',
  styleUrl: 'antdesign2-switch.css',
  scoped: true
})
export class Antdesign2Switch {

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
