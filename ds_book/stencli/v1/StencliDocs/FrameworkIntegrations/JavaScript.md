<!--
 * @Date: 2021-01-21 16:26:08
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 17:42:21
-->

# 没有框架的组件

直接将使用Stencil构建的组件集成到没有JavaScript框架的项目中。如果您使用的是简单的HTML页面，则可以通过script标签添加组件。例如，如果我们将组件发布到npm，则可以通过CDN加载组件，如下所示：

```
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic.js"></script>
  </head>
  <body>
    <ion-toggle></ion-toggle>
  </body>
</html>
```

另外，如果您想利用ES模块，则可以使用import语句引入这些组件。请注意，type ="module"仅在现代浏览器中有效（在IE11或Edge 12-18中不可用）。

```
<html>
  <head>
    <script type="module">
      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@ionic/core/loader/index.es2017.mjs';
      defineCustomElements();
    </script>
  </head>
  <body>
    <ion-toggle></ion-toggle>
  </body>
</html>
```

## 从非JSX元素传递对象(Prop)属性

### 手动设置属性(prop)

```
import { Prop } from '@stencil/core';

export class TodoList {
  @Prop() myObject: object;
  @Prop() myArray: Array<string>;
}
```

```
<todo-list></todo-list>
<script>
  const todoListElement = document.querySelector('todo-list');
  todoListElement.myObject = {};
  todoListElement.myArray = [];
</script>
```

## 监听Prop(属性)变化

```
import { Prop, State, Watch } from '@stencil/core';

export class TodoList {
  @Prop() myObject: string;
  @Prop() myArray: string;
  @State() myInnerObject: object;
  @State() myInnerArray: Array<string>;

  componentWillLoad() {
    this.parseMyObjectProp(this.myObject);
    this.parseMyArrayProp(this.myArray);
  }

  @Watch('myObject')
  parseMyObjectProp(newValue: string) {
    if (newValue) this.myInnerObject = JSON.parse(newValue);
  }

  @Watch('myArray')
  parseMyArrayProp(newValue: string) {
    if (newValue) this.myInnerArray = JSON.parse(newValue);
  }
}
```

```
<todo-list my-object="{}" my-array="[]"></todo-list>
```