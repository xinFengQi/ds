import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-select',
  styleUrl: 'antdesign2-select.css',
  scoped: true
})
export class Antdesign2Select {

  
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
