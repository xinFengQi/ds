import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-tree',
  styleUrl: 'antdesign2-tree.css',
  
})
export class Antdesign2Tree {

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
