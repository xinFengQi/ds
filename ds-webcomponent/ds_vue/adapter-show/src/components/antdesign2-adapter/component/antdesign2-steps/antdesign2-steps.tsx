import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-steps',
  styleUrl: 'antdesign2-steps.css',
  scoped: true
})
export class Antdesign2Steps {

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
