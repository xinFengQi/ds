import { Component, h,Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'code-show',
  styleUrl: 'code-show.css',
  shadow: false,
})
export class CodeShow {


  @Event() expendChange: EventEmitter<boolean>;



  expendToggle = () => {
    this.expendChange.emit()
  }


  render() {
    return (
      <div class="code_show_main">
        <slot></slot>
        <div class="btu_main">
          <button onClick={
            () => this.expendToggle()}>展开代码</button>
        </div>
        <slot name="code"></slot>
      </div>
    );
  }

}
