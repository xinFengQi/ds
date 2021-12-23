import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-notification',
  styleUrl: 'antdesign2-notification.css',
  
})
export class Antdesign2Notification {

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
