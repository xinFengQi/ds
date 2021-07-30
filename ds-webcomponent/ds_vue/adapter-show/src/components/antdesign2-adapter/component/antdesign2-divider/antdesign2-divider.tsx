import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-divider',
  styleUrl: 'antdesign2-divider.css',
  
})
export class Antdesign2Divider {

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
