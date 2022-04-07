import { Component, Host, h, Element, Prop } from '@stencil/core';

/**
 * @componentName 文本域
 * @componentType 表单
 * @docsOrder 2
 *
 */
@Component({
  tag: 'dsb5-textarea',
  styleUrl: 'dsb5-textarea.css',
  shadow: false,
  scoped: true,
})
export class Dsb5Textarea {

  @Element() hostDiv: HTMLElement;

  @Prop() rows: number = 6;


  render() {
    return (
      <Host>
         <textarea class="form-control" rows={this.rows}></textarea>
      </Host>
    );
  }

}
