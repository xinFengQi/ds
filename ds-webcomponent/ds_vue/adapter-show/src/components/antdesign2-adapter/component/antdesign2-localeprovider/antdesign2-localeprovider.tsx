import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-localeprovider',
  styleUrl: 'antdesign2-localeprovider.css',
  
})
export class Antdesign2Localeprovider {

@State()
expend1 = false; 
 render() {
    return (
      <div class="show_main_content">
        <slot></slot>
      </div>
    );
  }

}
