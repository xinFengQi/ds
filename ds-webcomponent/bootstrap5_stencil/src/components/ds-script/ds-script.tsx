import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-script',
  shadow: true,
})
export class DsScript {
  render() {
    return (
      <Host>
        <span style={{ display: 'none' }}>
          <slot></slot>
        </span>
      </Host>
    );
  }
}
