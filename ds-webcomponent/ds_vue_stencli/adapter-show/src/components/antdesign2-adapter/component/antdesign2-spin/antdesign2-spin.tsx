import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-spin',
  styleUrl: 'antdesign2-spin.css',
  
})
export class Antdesign2Spin {

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
