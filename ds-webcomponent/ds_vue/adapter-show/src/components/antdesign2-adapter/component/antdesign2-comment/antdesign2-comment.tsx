import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-comment',
  styleUrl: 'antdesign2-comment.css',
  
})
export class Antdesign2Comment {

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
