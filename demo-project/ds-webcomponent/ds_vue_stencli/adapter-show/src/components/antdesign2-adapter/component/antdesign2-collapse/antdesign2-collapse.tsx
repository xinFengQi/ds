import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-collapse',
  styleUrl: 'antdesign2-collapse.css',
  
})
export class Antdesign2Collapse {

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
