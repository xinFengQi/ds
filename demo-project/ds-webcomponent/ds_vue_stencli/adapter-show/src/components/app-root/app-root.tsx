import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route url="/ant2vue/peview" component="antdesign2-preview" />
            <stencil-route url="/ant2vue/:name" component="ant2design-home" />
          </stencil-route-switch>
        </stencil-router>
      </main>
    );
  }
}
