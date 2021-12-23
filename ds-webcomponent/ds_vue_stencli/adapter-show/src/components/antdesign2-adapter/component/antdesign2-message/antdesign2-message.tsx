import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-message',
  styleUrl: 'antdesign2-message.css',
  
})
export class Antdesign2Message {

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
