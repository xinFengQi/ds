import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-rate',
  styleUrl: 'antdesign2-rate.css',
  scoped: true
})
export class Antdesign2Rate {

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
