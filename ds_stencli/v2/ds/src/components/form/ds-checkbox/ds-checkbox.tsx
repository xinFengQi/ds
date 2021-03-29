import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-checkbox',
  styleUrl: 'ds-checkbox.css',
  shadow: true,
})
export class DsCheckbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
