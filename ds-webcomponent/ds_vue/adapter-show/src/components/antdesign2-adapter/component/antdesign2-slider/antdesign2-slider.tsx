import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-slider',
  styleUrl: 'antdesign2-slider.css',
  scoped: true
})
export class Antdesign2Slider {

    
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
