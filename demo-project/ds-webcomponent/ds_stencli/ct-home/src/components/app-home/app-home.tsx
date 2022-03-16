import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  scoped: true,
})
export class AppHome {


  render() {
    return (
      <div class="app-home">
        <h3 >gitee中ct仓库的目录</h3>
        <comopoent-gitee-menu></comopoent-gitee-menu>
      </div>
    );
  }
}
