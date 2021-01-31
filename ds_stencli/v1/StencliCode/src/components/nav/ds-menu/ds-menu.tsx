import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-menu',
  styleUrl: 'ds-menu.css',
  shadow: true,
})
export class DsMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
