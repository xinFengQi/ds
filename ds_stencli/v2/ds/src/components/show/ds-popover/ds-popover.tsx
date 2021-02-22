import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-popover',
  styleUrl: 'ds-popover.css',
  shadow: true,
})
export class DsPopover {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
