interface Components {
  name?: string;
  n?: string; // 简写
  version?: string;
  v?: string; // 简写
}

class util {
  random = 'ds' + new Date().getTime() + (Math.random() * 10000).toFixed(0);
  i = 0;
  constructor() {}

  // 加载js
  loadJS(url: string, type: 'text/javascript' | 'module'): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!type) {
        type = 'text/javascript';
      }
      const scriptEl: any = document.createElement('script');
      scriptEl.type = type;
      //IE
      if (scriptEl.readyState) {
        scriptEl.onreadystatechange = function () {
          if (scriptEl.readyState == 'loaded' || scriptEl.readyState == 'complete') {
            scriptEl.onreadystatechange = null;
            resolve(true);
          }
        };
      } else {
        //其他浏览器
        scriptEl.onload = function () {
          resolve(true);
        };
        scriptEl.onError = function() {
            reject(true)
        }
      }
      scriptEl.src = url;
      document.getElementsByTagName('head')[0].appendChild(scriptEl);
    });
  }

  // 动态加载css
  loadCss(path: string) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !');
    }
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href = path;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
  }

  private loadCompontJSCss(name: string, version: string, baseUrl?: string) {
    if (!name || !version) {
      throw '组件name和version不能为空';
    }
    const jsPath = `${baseUrl ? baseUrl : '.'}/ct/component/${name}/${version}/component/${name}.esm.js`;
    const cssPath = `${baseUrl ? baseUrl : '.'}/ct/component//${name}/${version}/component/${name}.css`;
    return new Promise((resolve, reject) => {
      this.loadCss(cssPath);
      this.loadJS(jsPath, 'module').then(() => {
        resolve({ name: true });
      }).catch(() => {
        reject({ name: false });
      });
    });
  }

  // 动态加载组件
  loadComponent(components: Components | Components[], baseUrl?: string) {
    if (Array.isArray(components)) {
      const promiseArr = [];
      components.forEach(com => {
        const name = com.n || com.name;
        const version = com.v || com.version;
        promiseArr.push(this.loadCompontJSCss(name, version, baseUrl));
      });
      return Promise.all([...promiseArr]);
    }
    const name = components.n || components.name;
    const version = components.v || components.version;
    return this.loadCompontJSCss(name, version, baseUrl);
  }

  // 获取随机id
  getId() {
    return this.random + this.i++;
  }

  // 防抖函数 参数:
  debounceTime(fun: Function, time: number) {
    let timer = null;
    return (...arg) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        fun.apply(arg);
      }, time);
    };
  }
}

export const dsUtil = new util();
