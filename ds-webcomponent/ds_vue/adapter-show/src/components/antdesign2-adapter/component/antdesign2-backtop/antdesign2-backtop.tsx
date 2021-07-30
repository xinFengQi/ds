import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-backtop',
  styleUrl: 'antdesign2-backtop.css',
  
})
export class Antdesign2Backtop {

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
