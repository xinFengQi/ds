import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-calendar',
  styleUrl: 'antdesign2-calendar.css',
  
})
export class Antdesign2Calendar {

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
