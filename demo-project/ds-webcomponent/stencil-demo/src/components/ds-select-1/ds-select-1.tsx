import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-select-1',
  shadow: false,
})
export class DsSelect1 {
  @Prop() dsValue = null;

  @Event() dsValueChange: EventEmitter<string>;

  dataChange(el: any) {
    el.stopPropagation();
    el.preventDefault();
    this.dsValueChange.emit(el.target.value);
  }

  render() {
    return (
      <Host>
        <select onChange={el => this.dataChange(el)}>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
      </Host>
    );
  }
}
