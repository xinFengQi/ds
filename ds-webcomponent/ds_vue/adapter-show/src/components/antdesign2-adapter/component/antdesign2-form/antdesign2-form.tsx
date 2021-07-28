import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-form',
  styleUrl: 'antdesign2-form.css',
  scoped: true,
})
export class Antdesign2Form {

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
