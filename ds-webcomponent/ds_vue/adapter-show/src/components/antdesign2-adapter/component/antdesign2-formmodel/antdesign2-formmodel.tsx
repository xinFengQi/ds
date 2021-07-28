import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-formmodel',
  styleUrl: 'antdesign2-formmodel.css',
  scoped: true,
})
export class Antdesign2Formmodel {

  @State()
  expend1 = false;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
