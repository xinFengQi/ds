import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-pageheader',
  styleUrl: 'antdesign2-pageheader.css',
  scoped: true,
})
export class Antdesign2Pageheader {

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
