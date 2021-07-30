import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-treeselect',
  styleUrl: 'antdesign2-treeselect.css',
  
})
export class Antdesign2Treeselect {

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
