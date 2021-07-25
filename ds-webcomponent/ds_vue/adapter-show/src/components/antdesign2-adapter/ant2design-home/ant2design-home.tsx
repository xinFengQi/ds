import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ant2design-home',
  styleUrl: 'ant2design-home.css',
  shadow: false,
})
export class Ant2designHome {

  render() {
    return (
      <Host>
        <ant2vue-button></ant2vue-button>
        <ant2vue-icon></ant2vue-icon>
      </Host>
    );
  }

}
