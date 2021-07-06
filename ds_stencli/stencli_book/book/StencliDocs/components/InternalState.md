# @State()装饰器

@State()装饰器可以用来管理内部数据的工具。这意味着用户不能从组件外部修改该数据，但组件可以按照自己认为合适的方式修改它。对@State()属性的任何更改都会导致组件渲染函数被再次调用。

## 示例

本示例使用@Steate()和@Listen装饰器。我们定义一个名为open的类属性并且用@State()装饰它。使用时，@Listen()会响应点击事件以切换open值。

```
import { Component, State, Listen, h } from '@stencil/core';

@Component({
  tag: 'my-toggle-button'
})

export class MyToggleButton {
  @State() open: boolean;

  @Listen('click', { capture: true })
  handleClick() {
    this.open = !this.open;
  }

  render() {
    return <button>
      {this.open ? "On" : "Off"}
    </button>;
  }
}
```

对于更高级的用例，状态可以是更复杂的类型，在下面的示例中，我们维护一个Todo类型的值列表

```
import { State } from '@stencil/core';

type Todo = {
  done: boolean,
  description: string,
}

export class TodoList {

  @State() completedTodos: Todo[];

  completeTodo(todo: Todo) {
    // 这将导致我们的渲染函数再次被调用
    this.completedTodos = [...this.completedTodos, todo];
  }
}
```

## 什么时候使用

并非所有内置状态都需要装饰@State()，实际上，当你确定该值不会更改或者不需要重新触发渲染时，则避免使用它是一个好习惯：

```
class Component {
 
  // 如果' cacheData '改变了，我们不想重新渲染组件，
  // 我们不用@State来修饰它
  cacheData = SOME_BIG_DATA;

  // 如果这个状态改变了，我们想再次运行render()
  @State() value;
}
```