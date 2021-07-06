import { Component, h, Prop } from '@stencil/core';


export interface dsMenuTree {
  name: string;
  origin?: any;
  childrens?: dsMenuTree[];
}


@Component({
  tag: 'dsb4-menu',
  styleUrl: 'dsb4-menu.css',
  shadow: false,
})
export class Dsb4Menu {

  @Prop() menuTree: dsMenuTree[] = [
    {
      name: '第一季',
      childrens: [
        {
          name: '第一一级'
        }
      ]
    },
    {
      name: '第二季'
    },
  ];

  navClick = (e, nav) => {
    console.log(e, nav);
  }


  getNavTree(menu: dsMenuTree[]) {
    if (!menu || menu.length === 0) {
      return;
    }
    let outputHtml = [];
    menu.forEach(nav => {
      outputHtml.push(
        <nav class="navbar navbar-light bg-secondary flex-column align-items-stretch p-2 pb-0 pt-0">
          <div class="container-fluid">
            <span onClick={(e) => this.navClick(e, nav)} class="navbar-brand" >{nav.name}</span>
          </div>
          {
            (nav.childrens && Array.isArray(nav.childrens)) ? this.getNavTree(nav.childrens) : null
          }
        </nav>
      )
    })
    return outputHtml;
  }

  render() {
    return (
      <div class="dsb4_menu_div">
        {this.getNavTree(this.menuTree)}
      </div>
    );
  }

}
