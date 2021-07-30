import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-formmodel',
  styleUrl: 'antdesign2-formmodel.css',
  
})
export class Antdesign2Formmodel {

 

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
