import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-space',
  styleUrl: 'ds-space.css',
  shadow: true,
})
export class DsSpace {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
