import { Component, forceUpdate, Event, Element, h, Prop, EventEmitter } from '@stencil/core';

export interface dsMenuTree {
  name: string;
  expend?: boolean;
  origin?: any;
  childrens?: dsMenuTree[];
}

/**
 * 展示树结构的数据，主要是使用文件目录树结构
 */
@Component({
  tag: 'dsb4-menu',
  styleUrl: 'dsb4-menu.css',
  shadow: false,
})
export class Dsb4Menu {
  @Element() el: HTMLDivElement;

  /**目录树数据 */
  @Prop() menuTree: dsMenuTree[] = [
    {
      name: '第一季',
      childrens: [
        {
          name: '第一一级',
        },
      ],
    },
    {
      name: '第二季',
    },
  ];

  /** 点击事件 */
  @Event() clickNav: EventEmitter<dsMenuTree>;

  navClick = (e, nav) => {
    console.log(e, nav);
    if (nav.childrens) {
      nav.expend = !nav.expend;
    }
    forceUpdate(this.el);
    this.clickNav.emit(nav);
  };

  getNavTree(menu: dsMenuTree[]) {
    if (!menu || menu.length === 0) {
      return;
    }
    let outputHtml = [];
    menu.forEach(nav => {
      outputHtml.push(
        <nav class="navbar flex-column align-items-stretch p-2 pb-0 pt-0">
          <summary  onClick={e => this.navClick(e, nav)} class="container-fluid container-fluid-center">
              { !nav.expend && nav.childrens ?<i class="bi bi-folder-plus"></i>: null} 
              { nav.expend && nav.childrens ?<i class="bi bi-folder-minus"></i>: null} 
              { !nav.childrens ? <i class="bi bi-file-earmark-text"></i>: null} 
              <span  class="navbar-nav">
              {nav.name}
            </span>
          </summary>
          {nav.childrens && Array.isArray(nav.childrens) && nav.expend ? this.getNavTree(nav.childrens) : null}
        </nav>,
      );
    });
    return outputHtml;
  }

  render() {
    return <div class="dsb4_menu_div">{this.getNavTree(this.menuTree)}</div>;
  }
}
