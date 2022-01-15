import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-popover',
  styleUrl: 'antdesign2-popover.css',
  
})
export class Antdesign2Popover {

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
