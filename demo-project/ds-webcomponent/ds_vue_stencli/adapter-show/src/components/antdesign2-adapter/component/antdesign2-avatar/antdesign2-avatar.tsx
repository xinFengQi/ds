import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-avatar',
  styleUrl: 'antdesign2-avatar.css',
  
})
export class Antdesign2Avatar {

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
