import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'h5-span',
  styleUrl: 'h5-span.css',
  shadow: true,
})
export class H5Span {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
