import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-if',
  styleUrl: 'ds-if.css',
  shadow: true,
})
export class DsIf {


  /** 是否显示 */
  @Prop() dsValue: boolean = false;

  hostDiv!: HTMLDivElement;



  componentDidRender() {
    if (this.hostDiv) {
      this.hostDiv.style.display = "inline";
    }
  }




  render() {
    return (
      <Host ref={(el) => this.hostDiv = el as HTMLDivElement}>
        {
            !!this.dsValue?<slot></slot>:null
        }
      </Host>
    )
  }

}
