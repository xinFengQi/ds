import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
 

  async componentWillLoad() {
    return true;
  }

  gotoBtu = [
    {
      name: '首页',
      url: '/',
    },
    {
      name: '测试路由跳转',
      url: '/test/fbDong',
    },
  ];

  render() {
    return (
      <div>
        {this.gotoBtu.map(v => {
          return (
            <stencil-route-link url={v.url}>
              <button>{v.name}</button>
            </stencil-route-link>
          );
        })}

        <main>
          <stencil-router root="/ct/">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/test/:name" component="app-test" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
