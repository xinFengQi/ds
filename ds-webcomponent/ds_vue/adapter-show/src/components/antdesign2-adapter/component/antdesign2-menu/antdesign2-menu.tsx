import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-menu',
  styleUrl: 'antdesign2-menu.css',
  scoped: true,
})
export class Antdesign2Menu {

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
