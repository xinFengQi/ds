import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-progress',
  styleUrl: 'antdesign2-progress.css',
  
})
export class Antdesign2Progress {

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
