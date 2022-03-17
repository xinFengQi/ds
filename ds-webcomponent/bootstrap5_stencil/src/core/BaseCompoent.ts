export class BaseCompoent {
  id = 'c' + new Date().getTime() + (Math.random() * 1000).toFixed(0);

  componentWillRender(el: HTMLElement, cb: (prop) => any) {
    const child = el.children;
    const len = child.length;
    for (let i = 0; i < len; i++) {
      const el = child.item(i);
      if (el?.localName === 'ds-prop') {
        el.addEventListener('getProp', (event: CustomEvent) => {
          cb(event.detail);
        });
      }
    }
  }
}
