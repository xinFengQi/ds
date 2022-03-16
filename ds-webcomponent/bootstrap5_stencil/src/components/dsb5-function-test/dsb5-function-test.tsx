import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dsb5-function-test',
  styleUrl: 'dsb5-function-test.css',
  shadow: false,
})
export class Dsb5FunctionTest {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
