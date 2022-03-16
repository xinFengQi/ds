import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-popconfirm',
  styleUrl: 'antdesign2-popconfirm.css',
  
})
export class Antdesign2Popconfirm {

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
