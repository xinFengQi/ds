import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-breadcrumb',
  styleUrl: 'ds-breadcrumb.css',
  shadow: true,
})
export class DsBreadcrumb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
