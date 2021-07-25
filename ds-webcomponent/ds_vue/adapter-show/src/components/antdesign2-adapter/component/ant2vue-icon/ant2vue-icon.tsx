import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ant2vue-icon',
  styleUrl: 'ant2vue-icon.css',
  shadow: true,
})
export class Ant2vueIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
