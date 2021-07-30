import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-statistic',
  styleUrl: 'antdesign2-statistic.css',
  
})
export class Antdesign2Statistic {

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
