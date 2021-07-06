import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'h5-div',
  styleUrl: 'h5-div.css',
  shadow: true,
})
export class H5Div {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
