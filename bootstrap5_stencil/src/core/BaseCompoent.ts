import { Toast, Tooltip } from 'bootstrap';

export class BaseCompoent {
  id = 'c' + new Date().getTime() + (Math.random() * 1000).toFixed(0);

  toolTipInit(el: HTMLElement) {
    var tooltipTriggerList = [].slice.call(el.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }

  toastInit(el: HTMLElement) {
    Array.from(el.querySelectorAll('.toast')).forEach(toastNode => new Toast(toastNode).show());
  }

  /**
   * 获取子节点下面的参数集合，返回给父组件
   * @param el 父组件节点实例
   * @param cb 返回的回调函数
   */
   connectedCallback(el: HTMLElement, cb: (prop: { key: string; value: any }[]) => void) {
    const child = el.children;
    const len = child.length;
    const propElArr = [];
    let propArr = [];
    let propNum = 0;
    const next = () => {
      if (propArr.length === propNum) {
        cb(propArr);
        propArr = [];
      }
    };
    for (let i = 0; i < len; i++) {
      const elChildren = child.item(i);
      if (elChildren?.localName === 'ds-prop') {
        propElArr.push(elChildren);
      }
      if (elChildren?.localName === 'ds-script') {
        (elChildren as any).parentEl = el;
        console.log('执行了一段代码')
      }
    }
    propNum = propElArr.length;
    propElArr.forEach(elChildren => {
      elChildren.addEventListener('getProp', (event: CustomEvent) => {
        propArr.push(event.detail);
        next();
      });
    });
  }
}
