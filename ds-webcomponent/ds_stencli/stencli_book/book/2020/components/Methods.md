# @Method装饰器

@Method()装饰器用于暴露出公共API方法。使用@Method()装饰器装饰的函数可以从元素中直接调用。即它们是可以从外部调用的!

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
   开发人员应尝试尽可能少地使用公开的方法，而默认使用尽可能多的属性和事件。随着应用程序的扩展，我们发现通过@Prop而不使用公共方法更易于管理和传递数据。
</div>

```
import { Method } from '@stencil/core';

export class TodoList {

  @Method()
  async showPrompt() {
    // show a prompt
  }
}
```

像这样调用方法：

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
开发人员应确保在尝试调用公共方法之前，使用自定义元素注册表的whenDefined方法定义组件。
</div>

```
(async () => {
  await customElements.whenDefined('todo-list');
  const todoListElement = document.querySelector('todo-list');
  await todoListElement.showPrompt();
})();
```

## 公共方法必须一步

Stencil的体系结构在所有级别都是异步的，这带来了许多性能优势和易用性。通过使用@Method装饰器确保公开的方法可返回一个promise：

开发人员可以在没有componentOnReady()的情况下在之前实现需要加载的方法，componentOnReady()将调用方法队列，并在组件完成加载后进行解析。

与组件的相互作用是一样的，无论它已经充分水合(hydrated)都仍然需要进行惰性加载。

通过使组件的公共API保持异步，应用程序可以将组件透明地移动到Web Worker，并且API仍然相同。

只有具有@Method装饰器的公开暴露方法才需要返回promise。其他所有的组件方法都是该组件专用的，不需要异步。

```
// VALID: using async
@Method()
async myMethod() {
  return 42;
}

// VALID: using Promise.resolve()
@Method()
myMethod2() {
  return Promise.resolve(42);
}

// VALID: even if it returns nothing, it needs to be async
@Method()
async myMethod3() {
  console.log(42);
}

// INVALID
@Method()
notOk() {
  return 42;
}
```

## 私人方法

非公共方法仍然可以用于组织组件的业务逻辑，并且它们不必返回Promise。

```
class Component {
  // 因为' getData '不是通过@Method暴露的公共方法
  // 它不需要时异步的
  getData() {
    return this.someData;
  }
  render() {
    return (
      <div>{this.getData()}</div>
    );
  }
}
```