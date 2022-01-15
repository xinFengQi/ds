import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-badge',
  styleUrl: 'antdesign2-badge.css',
  
})
export class Antdesign2Badge {

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
