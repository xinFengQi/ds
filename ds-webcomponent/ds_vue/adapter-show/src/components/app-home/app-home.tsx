import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <stencil-route-link url="ant2vue">
          <button class="ion-button">ant design for vue 展示</button>
        </stencil-route-link>
      </div>
    );
  }
}
