import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-result',
  styleUrl: 'antdesign2-result.css',
  
})
export class Antdesign2Result {

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
