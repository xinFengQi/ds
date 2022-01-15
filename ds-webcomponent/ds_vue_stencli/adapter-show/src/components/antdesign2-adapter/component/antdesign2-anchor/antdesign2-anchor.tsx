import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-anchor',
  styleUrl: 'antdesign2-anchor.css',
  
})
export class Antdesign2Anchor {

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
