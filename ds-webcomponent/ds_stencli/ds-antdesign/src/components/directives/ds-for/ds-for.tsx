import { Component, Host, h, forceUpdate, Prop, Watch } from '@stencil/core';
import { dsStoreJs } from '../../../global_js/store';

@Component({
  tag: 'ds-for',
  styleUrl: 'ds-for.css',
  shadow: true,
})
export class DsFor {


  /** 是否显示 */
  @Prop() dsValue: any[] = [];

  hostDiv!: HTMLDivElement;
  isShow = true;

  store: dsStoreJs = new dsStoreJs({});

  componentDidLoad() {
    if (!this.hostDiv) {
      return;
    }
    this.hostDiv.style.display = "inline";
    this.isShow = false;
    forceUpdate(this.hostDiv)
  }

  @Watch('dsValue')
  dsValueChange(newValue, oldValue) {
    console.log(newValue, oldValue)
    if (!this.hostDiv) {
      return;
    }
    forceUpdate(this.hostDiv)
  }

  // 此方法无法解决非字符串形式的属性值去渲染dom
  // 先使用vue的响应式

  getForItem(_item) {
    if (!this.hostDiv) {
      return ''
    }
    const innerHTML = this.hostDiv.innerHTML.replace(/\{(\S+?)\}/g, (_index, value) => {
      return  this.store.parsePath(value).get(_item);
    })
    return <div innerHTML={innerHTML}></div>
  }


  render() {
    return (
      <Host ref={(el) => this.hostDiv = el as HTMLDivElement}>
        {this.isShow ? <slot></slot>: null}
        {
          this.dsValue.map((item) => this.getForItem(item))
        }
      </Host>
    );
  }

}
