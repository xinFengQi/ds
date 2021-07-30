import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-drawer',
  styleUrl: 'antdesign2-drawer.css',
  
})
export class Antdesign2Drawer {

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
