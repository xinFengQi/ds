import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-list',
  styleUrl: 'antdesign2-list.css',
  
})
export class Antdesign2List {

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
