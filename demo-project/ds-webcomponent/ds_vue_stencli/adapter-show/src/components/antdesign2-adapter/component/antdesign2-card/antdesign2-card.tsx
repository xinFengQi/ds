import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-card',
  styleUrl: 'antdesign2-card.css',
  
})
export class Antdesign2Card {

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
