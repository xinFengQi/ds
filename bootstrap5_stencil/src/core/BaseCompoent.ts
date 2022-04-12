import { Toast, Tooltip } from 'bootstrap';

export class BaseCompoent {
  id = 'c' + new Date().getTime() + (Math.random() * 1000).toFixed(0);

  public toolTipInit(el: HTMLElement) {
    var tooltipTriggerList = [].slice.call(el.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }

  public toastInit(el: HTMLElement) {
    Array.from(el.querySelectorAll('.toast')).forEach(toastNode => new Toast(toastNode).show());
  }

  /**
   * 获取子节点下面的参数集合，返回给父组件
   * @param el 父组件节点实例
   * @param cb 返回的回调函数
   */
  public connectedCallback(el: HTMLElement, propCb?: null | ((prop: { key: string; value: any }[], script: any) => void), slotCb?: (slots: Element[]) => void) {
    const child = el.children;
    const len = child.length;
    // 参数的变量
    const propElArr = [];
    let propDataArr = [];
    let propNum = 0;
    // 执行代码的变量
    const scriptElArr = [];
    let scriptDataArr = [];
    let scriptNum = 0;
    // 队列执行拦截器
    const next = () => {
      if (propDataArr.length === propNum && scriptDataArr.length === scriptNum) {
        propCb && propCb(propDataArr, scriptDataArr);
        propDataArr = [];
        scriptDataArr = [];
      }
    };
    const slots = [];
    // 判断所有子节点,标识特殊节点
    for (let i = 0; i < len; i++) {
      const elChildren = child.item(i);
      if (elChildren?.localName.toLocaleLowerCase() === 'ds-prop') {
        propElArr.push(elChildren);
      }
      if (elChildren?.localName.toLocaleLowerCase() === 'ds-script') {
        (elChildren as any).parentEl = el;
        scriptElArr.push(elChildren);
      }
      if (elChildren?.slot) {
        slots.push(elChildren);
      }
    }
    (slotCb && slots.length) && slotCb(slots);
    propNum = propElArr.length;
    scriptNum = scriptElArr.length;
    // 将获取参数的事件监听
    propElArr.forEach(elChildren => {
      elChildren.addEventListener('getProp', (event: CustomEvent) => {
        propDataArr.push(event.detail);
        next();
      });
    });
    // 将执行代码的事件监听
    scriptElArr.forEach(elChildren => {
      elChildren.addEventListener('getExecute', (event: CustomEvent) => {
        scriptDataArr.push(event.detail);
        next();
      });
    });
    next();
  }
}
