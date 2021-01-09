# 使用JSX

模板组件使用JSX来呈现，JSX是一种流行的声明式模板语法。每个组件都有一个render函数，它返回一个组件树，这些组件在运行时呈现给DOM。

## 基础

该render函数用于输出将要渲染到屏幕上的组件树。

```
class MyComponent {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>This is JSX!</p>
      </div>
    );
  }
}
```

在此示例中，我们返回一个JSX表示形式div，其中包含两个子元素：一个h1元素和一个p元素。

## 宿主(host)元素

如果要修改宿主(host)元素本身，例如向组件本身添加类或属性，请使用<Host>功能组件。

## 数据绑定

组件通常需要呈现动态数据。要在JSX中执行此操作，请使用{ }来包起一个变量：

```
render() {
  return (
    <div>Hello {this.name}</div>
  )
}
```
<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
    如果您熟悉ES6模板变量，则JSX变量非常相似，只是没有$：
</div>

```
//ES6
`Hello ${this.name}`

//JSX
Hello {this.name}
```

## 条件渲染

如果要有条件地呈现不同的内容，则可以使用JavaScript if / else语句：在这里，如果name未定义，则可以呈现不同的内容。

```
render() {
  if (this.name) {
    return ( <div>Hello {this.name}</div> )
  } else {
    return ( <div>Hello, World</div> )
  }
}
```

此外，可以使用JavaScript三元运算符创建内联条件：

```
render() {
  return (
    <div>
    {this.name
      ? <p>Hello {this.name}</p>
      : <p>Hello World</p>
    }
    </div>
  );
}
```

请注意： Stencil重用DOM元素可以获得更好的性能。思考下以下代码：

```
{someCondition
  ? <my-counter initialValue={2} />
  : <my-counter initialValue={5} />
}
```
上面的代码的行为与以下代码完全相同：

```
<my-counter initialValue={someCondition ? 2 : 5} />
```

因此，如果某些条件发生变化，&lt;my-counter>的内部状态不会被重置，它的生命周期方法(如componentWillLoad())也不会被触发。相反，条件只会触发对同一个组件的更新。

如果要在条件中销毁并重新创建组件，则可以分配key属性。这告诉Stencil组件实际上是不同的同级元素：

```
{someCondition
  ? <my-counter key="a" initialValue={2} />
  : <my-counter key="b" initialValue={5} />
}
```

这样，如果someCondition发生更改，您将获得一个&lt;my-counter>具有新内部状态的新组件，该组件还将运行生命周期方法componentWillLoad()和componentDidLoad()。

## 插槽

组件通常需要在其组件树中的特定位置动态渲染子元素，所以允许开发人员使用我们的组件时提供子元素内容，而且我们的组件会将子代组件或者内容放置在正确的位置。

为此，您可以使用my-component组件中使用Slot标签。

```
// my-component.tsx

render() {
  return (
    <div>
      <h2>A Component</h2>
      <div><slot /></div>
    </div>
  );
}
```
然后，如果用户在创建我们的my-component时传递了子组件，my-component则会将该组件放在&lt;div>上面的第二个元素中：

```
render(){
  return(
    <my-component>
      <p>Child Element</p>
    </my-component>
  )
}
```
每个插槽也可以使用name来指定插槽输出位置：


```
// my-component.tsx

render(){
  return [
    <slot name="item-start" />,
    <h1>Here is my main content</h1>,
    <slot name="item-end" />
  ]
}
```

```
render(){
  return(
    <my-component>
      <p slot="item-start">I'll be placed before the h1</p>
      <p slot="item-end">I'll be placed after the h1</p>
    </my-component>
  )
}
```

## 循环

可以在JSX中使用传统循环在创建JSX树时创建循环，也可以使用数组运算符（例如map在现有JSX中内联时）创建循环。

在下面的示例中，我们将假定该组件具有一个名为todos的本地属性，该属性的含义是待办事项的列表。我们将在数组上使用map函数，以遍历数组中的每一项，并将其转换为其他内容，在本例中转换为JSX。

```
render() {
  return (
    <div>
      {this.todos.map((todo) =>
        <div>
          <div>{todo.taskName}</div>
          <div>{todo.isCompleted}</div>
        </div>
      )}
    </div>
  )
}

```

该map函数的每一步都会创建一个新的JSX子树，并将其添加到从map中返回的数组中，然后将其绘制在其上方的JSX树中。

如果列表是动态的，即可以更改，添加，删除或重新排序其中的每一项，则应该使用key为每个元素分配唯一的名称，以使其具有稳定的标识。这使Stencil可以重用DOM元素以获得更好的性能。选择key值的最佳方法是使用一个字符串，该字符串在同级项中唯一标识该列表项（通常您的数据已经具有ID）。


<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
   不要将map函数中的index变量用作key。它不能表示项目的稳定标识，因为如果更改列表的顺序或将元素添加到列表的开头，则index可能会更改。因此，它不适合作为key。
</div>

```
render() {
  return (
    <div>
      {this.todos.map((todo) =>
        <div key={todo.uid}>
          <div>{todo.taskName}</div>
          <div>{todo.isCompleted}</div>
          <button onClick={() => this.remove(todo)}>X</button>
        </div>
      )}
    </div>
  )
}

```

数组中使用的键在同级之间应该唯一。但是，它们不必在全项目范围或者全组件范围内唯一。

## 处理用户输入及事件

Stencli使用原生的DOM事件。

这是处理按钮单击的示例。注意箭头功能的使用。

```
...
export class MyComponent {
  private handleClick = () => {
    alert('Received the button click!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Me!</button>
    );
  }
}
```

这是监听input的change事件的另一个示例。注意箭头功能的使用。

```
...
export class MyComponent {
  private inputChanged = (event: Event) => {
    console.log('input changed: ', (event.target as HTMLInputElement).value);
  }

  render() {
    return (
      <input onChange={this.inputChanged}/>
    );
  }
}

```

## 复杂的模板内容

到目前为止，我们已经看到了仅返回单个元素的示例。我们还可以将元素嵌套在根元素中。

在一个组件具有多个“顶层”元素的情况下，该render函数可以返回一个数组。注意&lt;div>元素之间的逗号。

```
render() {
  return ([
  // first top level element
  <div class="container">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>,

  // second top level element, note the , above
  <div class="another-container">
    ... more html content ...
  </div>
  ]);
}
```
也可以使用innerHTML直接将内容内联到元素中。例如，当动态加载一个svg，然后想要在div中渲染它时，这是很有用的。就像正常的HTML一样工作：

```
<div innerHTML={svgContent}></div>
```

## 获取对DOM元素的引用

在需要直接引用元素的情况下(例如通常使用的document.querySelector)，您可能需要在JSX中使用ref。让我们看一下在表单中使用ref的示例：

```
@Component({
  tag: 'app-home',
})
export class AppHome {

  textInput!: HTMLInputElement;

  handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log(this.textInput.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(el) => this.textInput = el as HTMLInputElement} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

在此示例中，我们ref用来获取对输入的引用(ref={(el) => this.textInput = el as HTMLInputElement})。然后，我们可以使用该ref做一些事情，例如直接从文本输入中获取值(this.textInput.value)。

## 避免共享JSX节点

渲染器缓存元素以提高查找性能。但是这样做的副作用是不应该在同一个渲染器中完全共享完全相同的JSX的节点。

在下面的示例中，sharedNode变量在render()函数中多次重用。渲染器能够通过缓存引用来优化其DOM元素查找，但是，这在重用节点时会引起问题。所以始终建议生成唯一的节点，如下面的更改示例。

```
@Component({
  tag: 'my-cmp',
})
export class MyCmp {

  render() {
-    const sharedNode = <div>Text</div>;
    return (
      <div>
-        {sharedNode}
-        {sharedNode}
+        <div>Text</div>
+        <div>Text</div>
      </div>
    );
  }
}
```

或者，可以使用创建工厂函数来返回公共JSX节点，因为返回的值将是唯一的实例。例如：

```
@Component({
  tag: 'my-cmp',
})
export class MyCmp {

  getText() {
    return <div>Text</div>;
  }

  render() {
    return (
      <div>
        {this.getText()}
        {this.getText()}
      </div>
    );
  }
}

```

## 其他资源

[了解StencilJS应用程序的JSX](https://www.joshmorony.com/understanding-jsx-for-stencil-js-applications/)