export class BaseCompoent {
  id = 'c' + new Date().getTime() + (Math.random() * 1000).toFixed(0);

  /**
   * 获取子节点下面的参数集合，返回给父组件
   * @param el 父组件节点实例
   * @param cb 返回的回调函数
   */
  componentWillRender(el: HTMLElement, cb: (prop: { key: string; value: any }[]) => void) {
    const child = el.children;
    const len = child.length;
    const propElArr = [];
    let propArr = [];
    let propNum = 0;
    const next = () => {
      if (propArr.length === propNum) {
        cb(propArr);
        propArr = []
      }
    }
    for (let i = 0; i < len; i++) {
      const el = child.item(i);
      if (el?.localName === 'ds-prop') {
        propElArr.push(el);
      }
    }
    propNum = propElArr.length;
    propElArr.forEach(el => {
      el.addEventListener('getProp', (event: CustomEvent) => {
        propArr.push(event.detail)
        next();
      });
    })
  }
}
