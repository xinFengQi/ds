import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-skeleton',
  styleUrl: 'antdesign2-skeleton.css',
  
})
export class Antdesign2Skeleton {

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
