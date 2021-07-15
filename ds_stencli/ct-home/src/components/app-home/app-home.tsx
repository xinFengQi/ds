import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {


  render() {
    return (
      <div class="app-home">
        <h3 class="app_home_h3">gitee中ct仓库的目录</h3>
        <comopoent-gitee-menu></comopoent-gitee-menu>
      </div>
    );
  }
}
