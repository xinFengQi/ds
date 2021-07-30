import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-select',
  styleUrl: 'antdesign2-select.css',
  scoped: true
})
export class Antdesign2Select {



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
