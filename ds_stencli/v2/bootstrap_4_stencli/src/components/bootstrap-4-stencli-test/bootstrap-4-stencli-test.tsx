import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bootstrap-4-stencli-test',
  styleUrl: 'bootstrap-4-stencli-test.css',
  shadow: true,
})
export class Bootstrap4StencliTest {

  render() {
    return (
      <Host>
          <h1>测试页面</h1>
      </Host>
    );
  }

}
