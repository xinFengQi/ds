<!--
 * @Date: 2021-01-21 16:25:49
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 17:35:39
-->

# Vue

为了在Vue应用程序中使用自定义元素库，必须修改应用程序以定义自定义元素，并通知Vue编译器在编译过程中忽略哪些元素。这些都可以在main.js文件中完成。

假设你已经运行了npm install——save test-components，并且这个test-component是我们已经发布到npm的组件的名字，你就把这些组件导入到main中.js的文件

1. 导入节点模块
2. 告诉Vue忽略自定义元素标签(请参阅参考资料[https://vuejs.org/v2/api/#ignoredElements](https://vuejs.org/v2/api/#ignoredElements))
3. 将Stenciljs组件代码绑定到window对象

```
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from 'test-components/loader';

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/test-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App)
}).$mount('#app');
```

然后，这些组件应该在任何Vue组件中都可用

```
render() {
  return (
    <div>
      <test-stencil-component></test-stencil-component>
    </div>
  )
}
```

Vue提供了几种不同的方法来在应用程序中安装和使用框架。已经在使用vue-cliES2015和WebPack作为主要选项创建的Vue应用程序上测试了上述用于集成Stencil自定义标签库的技术。如果应用程序是使用其他选项生成的，则类似的技术也应起作用。

