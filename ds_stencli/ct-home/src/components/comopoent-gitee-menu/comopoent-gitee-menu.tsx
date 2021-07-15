import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'comopoent-gitee-menu',
  styleUrl: 'comopoent-gitee-menu.css',
  shadow: false,
})
export class ComopoentGiteeMenu {
  @State()
  inputDatas = [];

  componentWillLoad() {
    this.initData();
  }

  initData = () => {
    (window as any).ds.axios.get('https://gitee.com/api/v5/repos/dongfubao/ct/git/trees/master?access_token=e9694199cc954120b37d5d449a56a752&recursive=1').then(v => {
      const treeDatas = v.data.tree.filter(it => it.type === 'blob').map(it => this.getRecusionOrigin(it));
      const inputDatas = [];
      treeDatas.forEach(it => {
        if (it.pathArr) {
          this.getTree(inputDatas, it);
        } else {
          inputDatas.push(it);
        }
      });
      this.inputDatas = [...inputDatas];
      console.log(this.inputDatas);
    });
  };

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

  render() {
    return (
      <Host>
        21123123
        <dsb4-menu id="dsb4_menu" menuTree={this.inputDatas}></dsb4-menu>
      </Host>
    );
  }
}
