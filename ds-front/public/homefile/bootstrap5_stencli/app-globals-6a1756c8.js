import './bootstrap.esm-e5ba53a8.js';
import './BaseCompoent-c2010ea0.js';

(function dsb5Global() {
  const funMap = {
    dsb5Alert: 'dsb5-alert',
    dsUtil: 'ds-util',
  };
  const funInterce = {};
  if (!window['ds']) {
    window['ds'] = {};
  }
  if (!window['dsb5']) {
    window['dsb5'] = {};
  }
  const getFun = (name) => {
    console.log(this, '===');
    return () => {
      const elName = funMap[name];
      if (!elName) {
        throw '未获取到类示例';
      }
      let el = funInterce[elName];
      if (el) {
        return el;
      }
      console.log('创建了服务节点:', elName);
      el = document.createElement(elName);
      el.id = elName;
      el.style.display = 'none';
      document.body.append(el);
      console.log('11111111111111111111', el);
      funInterce[elName] = el;
      return el;
    };
  };
  window['ds'].initFun = getFun;
  Object.keys(funMap).forEach(name => {
    Object.defineProperty(window['dsb5'], name, {
      set: () => { },
      get: getFun(name),
    });
  });
  // 全局监听一些事件
  document.addEventListener('contextmenu', (ev) => {
    console.log('来自全局监听:', ev);
  });
})();
const globalFn = () => { };

const globalScripts = globalFn;

export { globalScripts as g };
