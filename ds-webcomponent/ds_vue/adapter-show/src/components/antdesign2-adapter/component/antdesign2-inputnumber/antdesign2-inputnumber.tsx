import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-inputnumber',
  styleUrl: 'antdesign2-inputnumber.css',
  scoped: true,
})
export class Antdesign2Inputnumber {

    
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
