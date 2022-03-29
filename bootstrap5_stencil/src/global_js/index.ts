import '@popperjs/core';
import 'bootstrap';
import '../core/BaseCompoent';

(function dsb5Global() {
  const funMap = {
    dsb5Alert: 'dsb5-alert',
    dsUtil: 'ds-util',
  };

  const funInterce: { [key: string]: HTMLElement } = {};

  if (!window['ds']) {
    window['ds'] = {};
  }
  if (!window['dsb5']) {
    window['dsb5'] = {};
  }
  window['ds'].tsetFun = tsetFun;

  Object.keys(funMap).forEach(name => {
    Object.defineProperty(window['dsb5'], name, {
      set: () => {},
      get: getFun(name),
    });
  });

  function getFun(name: string) {
    return () => {
      const elName = funMap[name];
      if (!elName) {
        throw '未获取到类示例';
      }
      let el = funInterce[elName];
      if (!el) {
        console.log('创建了服务节点:', elName)
        el = document.createElement(elName);
        el.id = elName;
        el.style.display = 'none';
        document.body.append(el);
        funInterce[elName] = el;
      }
      return el;
    };
  }

  function tsetFun(str: any) {
    return str;
  }
})();
