import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-modal',
  styleUrl: 'antdesign2-modal.css',
  
})
export class Antdesign2Modal {

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
