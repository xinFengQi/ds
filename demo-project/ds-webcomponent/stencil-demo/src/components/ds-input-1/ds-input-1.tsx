import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-input-1',
  shadow: false,
})
export class DsInput1 {
  @Prop() dsValue = null;

  @Event() dsValueChange: EventEmitter<string>;

  dataChange(el) {
    console.log('------------', el.target.value)
    this.dsValueChange.emit(el.target.value);
  }

  render() {
    return (
      <Host>
        <input value={this.dsValue} onInput={el => this.dataChange(el)}></input>
        <slot></slot>
      </Host>
    );
  }
}
