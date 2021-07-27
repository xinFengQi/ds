import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'ant2design-home',
  styleUrl: 'ant2design-home.css',
  shadow: false,
})
export class Ant2designHome {
  @State()
  isShoe = false;

  pageHeaDerRef = null;
  pageHeaDerRef1 = null;

  componentDidLoad() {
    console.log('增加emit', this.pageHeaDerRef)
    this.pageHeaDerRef.vueEmit.back = function(){
      console.log('点击返回2');
    };
    // this.pageHeaDerRef1.vueEmit.back = () => {
    //   console.log('点击返回2');
    // };
  }

  render() {
    return (
      <Host>
        <antdesign2-preview></antdesign2-preview>
      </Host>
    );
  }
}
