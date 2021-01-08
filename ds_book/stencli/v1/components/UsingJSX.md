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


