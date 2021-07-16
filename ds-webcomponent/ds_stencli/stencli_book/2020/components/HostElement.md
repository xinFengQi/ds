# 使用宿主(Host)元素

stencil组件在它们得渲染方法中使用JSX来声明渲染它们的子组件，在大多数情况下，render()函数只描述将要呈现得子元素，但是它们也可以用来呈现宿主(host)元素得属性

## &lt;Host >

可以在渲染函数的根部使用Host功能组件，以便于为Host元素本身设置属性和事件监听器。就像其他的JSX一样工作：

```
// Host is imported from '@stencil/core'
import { Component, Host, h } from '@stencil/core';

@Component({tag: 'todo-list'})
export class TodoList {
  @Prop() open = false;
  render() {
    return (
      <Host
        aria-hidden={this.open ? 'false' : 'true'}
        class={{
          'todo-list': true,
          'is-open': this.open
        }}
      />
    )
  }

```

如果this.open === true, 它将呈现:

```
<todo-list class="todo-list is-open" aria-hidden="false"></todo-list>
```

与之相同，如果this.open === false:

```
<todo-list class="todo-list" aria-hidden="true"></todo-list>
```

&lt;Host >是一个虚拟组件，是由stencil公开的虚拟API，用于以声明方式去设置宿主(Host)元素的属性，它永远不会在DOM中呈现，例如，您永远不会在Chrome Dev Tools中看到&lt;Host>中看到；

### &lt;Host>可以作为一个&lt;Fragment>(Html片段)

&lt;Host>当需要在根级别渲染多个组件时，也可以使用它，例如：

```
@Component({tag: 'my-cmp'})
export class MyCmp {
  render() {
    return (
      <Host>
        <h1>Title</h1>
        <p>Message</p>
      </Host>
    );
  }
}
```

此JSX将呈现以下HTML：

```
<my-cmp>
  <h1>Title</h1>
  <p>Message</p>
</my-cmp>
```
即使我们不使用&lt;Host>的任何方法在host元素中呈现任何属性，它们也是在根级别呈现多元素的有用API。


## @Element() 装饰器

该@Element()装饰器是返回HTMLElement的实例去访问类示例中的宿主(Host)元素，因此可以在此处使用标准的DOM方法及事件。

```
import { Element } from '@stencil/core';

...
export class TodoList {

  @Element() el: HTMLElement;

  getListHeight(): number {
    return this.el.getBoundingClientRect().height;
  }
}
```

如果需要根据属性(Prop)或状态(State)来更新host元素，则应在render()使用该&lt;Host>元素的方法来进行更新。

## Styling(样式)

在样式页面查看有关样式的完整信息。

可以&lt;Host>中使用@Component装饰器中定义的元素标记将CSS应用与Host元素。

```
@Component({
  tag: 'my-cmp',
  styleUrl: 'my-cmp.css'
})
...
```
my-cmp.css：

```
my-cmp {
  width: 100px;
}
```

## Shadow(阴影) DOM

要注意的一点是，&lt;Host>在使用阴影DOM时对元素进行样式设置不能和之前的样式设置完全相同。不能使用my-cmp元素选择器，而必须使用:host。

```
@Component({
  tag: 'my-cmp',
  styleUrl: 'my-cmp.css'
})
...
```
my-cmp.css：

```
:host {
  width: 100px;
}
```