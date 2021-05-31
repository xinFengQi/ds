import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-tab',
  styleUrl: 'ds-tab.css',
  shadow: true,
})
export class DsTab {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
