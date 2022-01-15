import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-table',
  styleUrl: 'antdesign2-table.css',
  
})
export class Antdesign2Table {

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
