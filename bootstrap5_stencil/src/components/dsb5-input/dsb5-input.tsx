import { Component, Host, h, Prop } from '@stencil/core';

/**
 * @componentName 输入框
 *
 */
@Component({
  tag: 'dsb5-input',
  styleUrl: 'dsb5-input.css',
  shadow: false,
  scoped: true,
})
export class Dsb5Input {

  /** placeholder值 */
  @Prop() placeholder:string;

  render() {
    return (
      <Host>
        <div class="input-group">
          <input type="text" class="form-control" placeholder={this.placeholder}></input>
        </div>
      </Host>
    );
  }
}
