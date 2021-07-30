import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-tag',
  styleUrl: 'antdesign2-tag.css',
  
})
export class Antdesign2Tag {

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
