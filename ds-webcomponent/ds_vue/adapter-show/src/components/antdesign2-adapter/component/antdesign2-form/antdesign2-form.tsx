import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-form',
  styleUrl: 'antdesign2-form.css',
  
})
export class Antdesign2Form {

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
