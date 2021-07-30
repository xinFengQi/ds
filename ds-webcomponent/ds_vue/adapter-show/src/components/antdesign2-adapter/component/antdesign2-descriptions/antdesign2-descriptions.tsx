import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-descriptions',
  styleUrl: 'antdesign2-descriptions.css',
  
})
export class Antdesign2Descriptions {

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
