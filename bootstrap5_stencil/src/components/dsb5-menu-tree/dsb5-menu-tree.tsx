import { Component, Host, h, Prop, Event, EventEmitter, forceUpdate, Element } from '@stencil/core';
import { Dsb5MenuTreeData } from '../../interface/component.interface';

/**
 * @componentName 目录树
 * @componentType 布局
 * @docsOrder 2
 *
 */
@Component({
  tag: 'dsb5-menu-tree',
  styleUrl: 'dsb5-menu-tree.css',
  shadow: false,
  scoped: true,
})
export class Dsb5MenuTree {
  @Element() el: HTMLDivElement;

  /**目录树数据 */
  @Prop() menuTree: Dsb5MenuTreeData[] = [
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
  @Event() clickNav: EventEmitter<Dsb5MenuTreeData>;

  // 点击事件
  navClick = (e: MouseEvent, nav: Dsb5MenuTreeData) => {
    console.log(e, nav);
    if (nav.childrens) {
      nav.expend = !nav.expend;
    }
    forceUpdate(this.el);
    this.clickNav.emit(nav);
  };

  // 右击事件
  onMouseDown(e: MouseEvent, nav: Dsb5MenuTreeData) {
    e.stopPropagation();
    e.preventDefault();
    console.log(e, nav);
  }

  getNavTree(menu: Dsb5MenuTreeData[]) {
    if (!menu || menu.length === 0) {
      return;
    }
    let outputHtml = [];
    menu.forEach(nav => {
      outputHtml.push(
        <nav class="navbar flex-column align-items-stretch p-2 pb-0 pt-0">
          <summary onClick={e => this.navClick(e, nav)} onContextMenu={e => this.onMouseDown(e, nav)} 
             class="container-fluid container-fluid-center">
            {!nav.expend && nav.childrens ? <i class="bi bi-folder-plus"></i> : null}
            {nav.expend && nav.childrens ? <i class="bi bi-folder-minus"></i> : null}
            {!nav.childrens ? <i class="bi bi-file-earmark-text"></i> : null}
            <span class="navbar-nav">{nav.name}</span>
          </summary>
          {nav.childrens && Array.isArray(nav.childrens) && nav.expend ? this.getNavTree(nav.childrens) : null}
        </nav>,
      );
    });
    return outputHtml;
  }

  render() {
    return <Host class="dsb5_menu_div">{this.getNavTree(this.menuTree)}</Host>;
  }
}
