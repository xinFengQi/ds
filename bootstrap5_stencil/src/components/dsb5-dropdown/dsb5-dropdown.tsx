import { Component, Host, h } from '@stencil/core';

/**
 * @componentName 下拉选择
 * @componentType 布局
 *
 */
@Component({
  tag: 'dsb5-dropdown',
  styleUrl: 'dsb5-dropdown.css',
  shadow: true,
})
export class Dsb5Dropdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
