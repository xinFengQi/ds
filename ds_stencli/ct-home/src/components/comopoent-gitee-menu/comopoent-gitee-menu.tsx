import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'comopoent-gitee-menu',
  styleUrl: 'comopoent-gitee-menu.css',
  shadow: false,
})
export class ComopoentGiteeMenu {
  @State()
  inputDatas = [];

  // 获取到的目录数据
  originData = [];
  // 过滤输入框
  filterValue = 'index.html';

  filterValueChange(event) {
    this.filterValue = event.target.value;
  }

  componentWillLoad() {
    this.initData();
  }

  initData = () => {
    (window as any).ds.axios.get('https://gitee.com/api/v5/repos/dongfubao/ct/git/trees/master?access_token=e9694199cc954120b37d5d449a56a752&recursive=1').then(v => {
      this.originData = [...this.sortTree(v.data.tree)];
      this.filterClick();
    });
  };

  private sortTree(data: any) {
    const treeData = [];
    const fileTree = [];
    data.forEach(v => {
      if (v.type === 'tree') {
        treeData.push(v);
      } else {
        fileTree.push(v);
      }
    });
    return [...treeData, ...fileTree].sort((a, b) => {
      return b.path.split('/').length - a.path.split('/').length;
    });
  }

  filterClick() {
    const treeDatas = this.originData.filter(it => this.getFilterData(it, this.filterValue)).map(it => this.getRecusionOrigin(it));
    const inputDatas = [];
    treeDatas.forEach(it => {
      if (it.pathArr) {
        this.getTree(inputDatas, it);
      } else {
        inputDatas.push(it);
      }
    });
    this.inputDatas = [...inputDatas];
  }

  private getFilterData(it, str: string) {
    return it.type === 'blob' && it.path.indexOf(str) > -1;
  }

  private getRecusionOrigin(it) {
    const pathArr = it.path.split('/');
    const fileName = pathArr.pop();
    if (pathArr.length === 0) {
      return {
        name: it.path,
        origin: it,
      };
    }
    return {
      name: pathArr.join('/'),
      pathArr: pathArr,
      childrens: [
        {
          name: fileName,
          origin: it,
        },
      ],
    };
  }

  private getTree(arr, it) {
    const navName = [...it.pathArr].shift();
    const index = arr.findIndex(its => its.name === navName);
    if (index < 0) {
      const inData = {};
      it.pathArr.reduce((a, b, c) => {
        a.name = b;
        if (c === it.pathArr.length - 1) {
          a.childrens = it.childrens;
        } else {
          a.childrens = [{}];
        }
        return a.childrens[0];
      }, inData);
      arr.push(inData);
    } else {
      it.pathArr.shift();
      if (it.pathArr.length === 0) {
        arr[index].childrens.push(it.childrens[0]);
      } else {
        this.getTree(arr[index].childrens, it);
      }
    }
  }

  clickNav(ev) {
    const data = ev.detail;
    if (data.childrens && data.childrens.length > 0) {
      return;
    }
    if (data.origin && data.origin.path) {
      window.open('https://dongfubao.gitee.io/ct/' + data.origin.path, '_blank');
    }
  }

  render() {
    return (
      <Host>
        <input value={this.filterValue} onInput={event => this.filterValueChange(event)} />
        <button onClick={() => this.filterClick()}>过滤</button>
        <dsb4-menu id="dsb4_menu" menuTree={this.inputDatas} onClickNav={ev => this.clickNav(ev)}></dsb4-menu>
      </Host>
    );
  }
}
