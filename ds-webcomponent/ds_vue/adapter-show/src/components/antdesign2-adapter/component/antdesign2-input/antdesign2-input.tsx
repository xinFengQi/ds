import { Component, Host, h,  State } from '@stencil/core';

@Component({
  tag: 'antdesign2-input',
  styleUrl: 'antdesign2-input.css',
  scoped: true,
})
export class Antdesign2Input {

  
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
