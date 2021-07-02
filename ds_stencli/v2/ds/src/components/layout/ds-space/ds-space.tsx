import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-space',
  styleUrl: 'ds-space.css',
  shadow: false,
})
export class DsSpace {


  /** 间距的大小，单位px */
  @Prop() dsSize = 24;

  /** 内部布局，垂直还是水平 */
  @Prop() dsDirection: 'vertical' | 'horizontal' = 'horizontal';

  @Prop() demo = false;


  hostDiv!: HTMLDivElement;

  componentDidRender() {
    // 修改子组件的item的属性
    const child = this.hostDiv.children;
    const len = child.length;
    let laseIndex = 0;
    for (let i = 0; i < len; i++) {
      if (child.item(i)?.nodeName === 'DS-SPACE-ITEM') {
        child.item(i)?.setAttribute('ds-size', this.dsSize + '');
        child.item(i)?.setAttribute('ds-direction', this.dsDirection);
        laseIndex = i;
      }
    }
    child.item(laseIndex)?.setAttribute('ds-last', '1');
  }


  render() {
    return (
      <div ref={(el) => this.hostDiv = el as HTMLDivElement}
        class={{
          vertical: this.dsDirection === 'vertical',
          horizontal: this.dsDirection === 'horizontal',
        }}>
        <slot></slot>
        {
          this.demo ? [
              <ds-space-item>空格</ds-space-item>,
              <ds-space-item>空格</ds-space-item>
           ] : null

        }
      </div>
    );
  }

}
