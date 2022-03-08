# 组件API

Stencil提供的整个API可以浓缩在一组装饰器、生命周期钩子和渲染方法中。

## 装饰器

装饰器是一种纯编译时构造，由Stencil用来收集关于组件的所有元数据、属性、属性和方法、可能发出的事件，甚至相关的样式表。一旦收集了所有的元数据，所有的装饰器就会从输出中删除，因此它们不会导致任何运行时开销。

1. @Component() 声明一个新的Web组件
2. @Prop() 声明暴露的属性(property/attribute)
3. @State() 声明组件的内部状态
4. @Watch() 声明在属性或状态更改时运行的钩子
5. @Element() 声明对host元素的引用
6. @Method()  声明暴露的公共方法
7. @Event() 声明组件可能发出的DOM事件
8. @Listen() 监听DOM事件

1. connectedCallback()
2. disconnectedCallback()
3. componentWillLoad()
4. componentDidLoad()
5. componentShouldUpdate(newValue, oldValue, propName): boolean
6. componentWillRender()
7. componentDidRender()
8. componentWillUpdate()
9. componentDidUpdate()
10. render()

## appLoad事件

除了特定于组件的生命周期挂钩之外，appload是当应用及其所有子组件完成加载时发出的一个特殊事件。您可以在window对象上监听它。

如果同一页面上有多个应用程序，则可以通过选中的event.detail.namespace确定哪个应用程序发出了事件。这将是您在stencil配置中设置的名称空间配置选项的值。

```
window.addEventListener('appload', (event) => {
  console.log(event.detail.namespace);
});
```

## 其他

Host: Host是一个功能组件，可以在render函数的根部使用它来为host元素本身设置属性和事件侦听器。

h(): 用于render()将JSX转换为虚拟DOM元素。

readTask(): 调度DOM读取任务。提供的回调将以最佳时机执行DOM读取，而不会引起布局混乱。

writeTask(): 调度DOM写入任务。提供的回调将在最佳时机执行DOM突变而不会引起布局抖动。

forceUpdate(): 即使状态未更改，也调度给定实例或元素的新渲染。注意forceUpdate()不是同步的，可能会在下一帧中执行DOM渲染。

getAssetPath（）：获取本地资源的路径。有关使用信息，请参阅“本地资源”页面。

setMode()

getMode()

getElement()