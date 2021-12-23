import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-configprovider',
  styleUrl: 'antdesign2-configprovider.css',
  
})
export class Antdesign2Configprovider {

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
