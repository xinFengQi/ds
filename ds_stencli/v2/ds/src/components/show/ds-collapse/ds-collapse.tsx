/*
 * @Date: 2021-03-25 16:05:17
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-26 11:29:50
 */
import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'ds-collapse',
  styleUrl: 'ds-collapse.css',
  shadow: true,
})
export class DsCollapse {

  @Element() el: HTMLElement;

  /** 打开的折叠板 */
  @Prop({mutable: true}) activeIndex: number;

  /** 是否关闭其他的折叠面板 */
  @Prop() isCloseOther: boolean = false;

  /** 当展开时状态改变 */
  @Event() activeIndexChange: EventEmitter<number>;


  listenArr = [];

  componentDidRender() {
    this.listenArr.forEach(v => {
      v.node.removeEventListener(v.name, v.handler);
    })
    // 处理子组件属性
    let lastIndex = 0;
    let panelNum = 0;
    this.el.childNodes.forEach((node: HTMLElement, index: number) => {
      if (node.tagName === 'DS-COLLAPSE-PANEL') {
        node.style.display = 'block';
        if (lastIndex === 0) {
          node.style['border-radius'] = '4px 4px 0px 0px';
        }
        lastIndex = index;
        (node as any).dsLast = false;
        const panelNumIndex = panelNum;
        const addList = {
          node,
          name: 'dsIsActiveChange',
          handler: () => {
            this.activeIndex = panelNumIndex;
            this.activeIndexChange.emit(this.activeIndex)
            if (this.isCloseOther) {
              let nodeCliNum = 0;
              this.el.childNodes.forEach((nodeCli: any) => {
                if (nodeCli.tagName === 'DS-COLLAPSE-PANEL') {
                  if (nodeCliNum !== this.activeIndex) {
                    nodeCli.dsIsActive = false;
                  }
                  nodeCliNum++
                }
              });
            }
          }
        }
        node?.addEventListener(addList.name, addList.handler);
        this.listenArr.push(addList);
        panelNum++
      }
    });
    const lastNode = (this.el.childNodes.item(lastIndex) as HTMLElement);
    lastNode.style['border-radius'] = '0px 0px 4px 4px';
    lastNode.style['border-bottom'] = '0px';
    (lastNode as any).dsLast = true;
  }


  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
