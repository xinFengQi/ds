import { Component, Host, h, Prop, Element } from '@stencil/core';


export interface DsBreadcrumbDataModel {
  name: string;
  type: 'disabled' | 'link' | 'text',
  onClick: (...args) => void
}

@Component({
  tag: 'ds-breadcrumb',
  styleUrl: 'ds-breadcrumb.css',
  shadow: true,
})
export class DsBreadcrumb {


  @Prop() dsData: DsBreadcrumbDataModel[] = [];

  @Element() hostEl: any;

  splitSpan = [];

  // 加载渲染后，读取子节点
  componentDidRender() {
    this.splitSpan.forEach(el => {
      el.innerHTML = this.hostEl.children[0].innerHTML
    })
    return true;
  }

  singleMainOnclick = (event, da: DsBreadcrumbDataModel) => {
    if (da.type === 'link') {
      da.onClick(event, da);
    }
  }

  render() {
    console.log(this.dsData, '=============')
    return (
      <Host>
        {
          this.dsData.map((da, i) => {
            return (
              <div class={{
                single_main: true,
              }}
                onClick={(event) => this.singleMainOnclick(event, da)}>
                <span class={{
                  single_disabled: da.type === 'disabled',
                  single_text: da.type === 'text',
                  single_link: da.type === 'link',
                }}
                >{da.name}</span>
                {i !== this.dsData.length - 1 ? <span ref={(el) => this.splitSpan[i] = el as HTMLDivElement}></span> : null}
              </div>
            )
          })
        }
      </Host>
    );
  }

}
