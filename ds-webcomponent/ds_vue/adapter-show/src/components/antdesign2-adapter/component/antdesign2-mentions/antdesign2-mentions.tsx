import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-mentions',
  styleUrl: 'antdesign2-mentions.css',
  scoped: true,
})
export class Antdesign2Mentions {

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
