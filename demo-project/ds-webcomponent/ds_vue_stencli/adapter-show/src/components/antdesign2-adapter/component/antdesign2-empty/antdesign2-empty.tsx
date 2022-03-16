import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-empty',
  styleUrl: 'antdesign2-empty.css',
  
})
export class Antdesign2Empty {

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
