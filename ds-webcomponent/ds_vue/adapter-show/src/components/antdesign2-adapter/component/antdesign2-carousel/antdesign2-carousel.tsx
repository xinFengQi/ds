import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-carousel',
  styleUrl: 'antdesign2-carousel.css',
  
})
export class Antdesign2Carousel {

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
