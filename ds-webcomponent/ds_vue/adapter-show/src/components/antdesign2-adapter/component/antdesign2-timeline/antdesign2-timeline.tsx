import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-timeline',
  styleUrl: 'antdesign2-timeline.css',
  
})
export class Antdesign2Timeline {

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
