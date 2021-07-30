import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-tooltip',
  styleUrl: 'antdesign2-tooltip.css',
  
})
export class Antdesign2Tooltip {

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
