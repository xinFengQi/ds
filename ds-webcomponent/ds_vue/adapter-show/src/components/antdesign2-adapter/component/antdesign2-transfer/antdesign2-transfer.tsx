import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-transfer',
  styleUrl: 'antdesign2-transfer.css',
  scoped: true
})
export class Antdesign2Transfer {

    
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
