import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-form-1',
  shadow: false,
})
export class DsForm1 {

  inputValueChange(el) {
    el.stopPropagation();
    el.preventDefault();
    console.log(el.detail, 'input数据变化');
  }
  selectValueChange(el) {
    el.stopPropagation();
    el.preventDefault();
    console.log(el.detail, 'select数据变化');
  }

  render() {
    return (
      <Host>
        <ds-input-1 onDsValueChange={el => this.inputValueChange(el)}>
          <ds-select-1 onDsValueChange={el => this.selectValueChange(el)}></ds-select-1>
        </ds-input-1>
      </Host>
    );
  }
}
