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
      url: '/ct',
    },
    {
      name: '测试路由跳转',
      url: '/ct/test/fbDong',
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
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/ct" component="app-home" exact={true} />
              <stencil-route url="/ct/test/:name" component="app-test" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
