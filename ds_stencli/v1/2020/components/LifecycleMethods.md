# 组件生命周期方法

组件具有多种生命周期方法，可用于了解组件“即将”和“已完成”加载，更新和渲染。可以将这些方法添加到组件中，以便在适当的时间进行逻辑操作。

在组件类中实现以下方法之一，Stencil将以正确的顺序自动调用它们：

![生命周期](/img/LifecycleMethods1.png)


## connectedCallback()

每次组件连接到DOM时调用。首次连接组件时，此方法在before之前调用componentWillLoad。

重要的是要注意，每次在DOM中增加或移动元素时，都可以多次调用此方法。

```
const el = document.createElement('my-cmp');
document.body.appendChild(el);
// connectedCallback() called
// componentWillLoad() called (first time)

el.remove();
// disconnectedCallback()

document.body.appendChild(el);
// connectedCallback() called again, but `componentWillLoad` is not.
```

此生命周期钩子遵循与“自定义元素规范”中描述的语义，这是个好的措施。

## offlineedCallback()

每次组件与DOM断开连接时即调用，即可以多次分派该组件，不要将其与“ onDestroy”事件混淆。

该生命周期钩子遵循与Custom Elements Spec描述的语义。

## componentWillLoad()

在组件首次连接到DOM后立即调用一次。由于此方法仅被调用一次，因此是异步加载数据的好地方。
可以返回一个promise，可以用来等待第一个渲染。

## componentDidLoad()

组件完全加载后立即调用一次，第一次调用render()发生。

## componentShouldUpdate()

当组件的Prop或State属性更改并且将要重新渲染时，将调用此钩子。这个钩子接收三个参数：新值，旧值和更改状态的名称。它应该返回一个布尔值，以指示组件是否应重新渲染true（false）。

需要注意的是，该方法将不会在初始渲染之前执行，即在组件首次附加到dom时，或者在下一帧中已计划重新渲染时都不会执行。

假设组件的以下两个prop同步更改：

```
component.somePropA = 42;
component.somePropB = 88;
```

该componentShouldUpdate函数会先调用， 参数为(42，undefined和somePropA)。如果函数返回true，则由于已计划进行重新渲染，因此不会再次调用该函数。相反，如果第一个钩子返回false，由component.somePropB = 88赋值触发，componentShouldUpdate则将使用再次调用， 并将88，undefined并将其somePropB作为参数。

由于此挂钩的执行可能是有条件的，因此依靠它来监视道具更改不是很好，而是使用@Watch装饰器。

## componentWillRender()

在每个render()之前调用。
可以返回一个promise，可以用来等待即将到来的渲染。

## componentDidRender()

在每个render()之后调用。

## componentWillUpdate()

当组件即将因为某些Prop()或State()改变而被更新时调用。它从来不会在第一个render()期间被调用。

可以返回一个promise，可以用来等待下一个渲染。

## componentDidUpdate()

在组件更新后调用。它从来不会在第一个render()期间被调用。

## 渲染状态

总是建议在componentWillRender()中进行所有渲染状态更新，因为这个方法会在render()方法之前被调用。另外，使用componentDidLoad()、componentDidUpdate()和componentDidRender()方法更新渲染状态将导致另一次重新渲染，这对性能来说并不理想。

如果必须在componentDidUpdate()或componentDidRender()中更新状态，它可能会使组件陷入无限循环。如果在componentDidUpdate()中更新状态是不可避免的，那么该方法还应该提供一种方法来检测prop或state是否“脏”(数据实际上是不同的还是与之前相同的)。通过进行脏检查componentDidUpdate()能够避免渲染相同的数据，从而再次调用componentDidUpdate()。

在下面的示例中，我们有一个简单的组件层次结构。编号列表显示了生命周期方法将触发的顺序。

```
  <cmp-a>
    <cmp-b>
      <cmp-c></cmp-c>
    </cmp-b>
  </cmp-a>
```

cmp-a -- componentWillLoad()
cmp-b -- componentWillLoad()
cmp-c -- componentWillLoad()
cmp-c -- componentDidLoad()
cmp-b -- componentDidLoad()
cmp-a -- componentDidLoad()

即使某些组件可能已经加载或尚未加载，整个组件层次结构也会等待其子组件完成加载和渲染完成。

## 异步生命周期方法

生命周期方法还可以返回promises而使该方法可以异步检索数据或执行任何异步任务。一个很好的例子是获取要在组件中渲染的数据。例如，您正在获取站点渲染之前所呈现的内容数据。但是因为fetch()是异步的，所以重要的是componentWillLoad()返回一个Promise以确保在其所有内容都呈现之前，不将其父组件视为“已加载”。

下面是一个示例，显示了如何componentWillLoad()使其父组件等待其完成数据加载。

```
componentWillLoad() {
  return fetch('/some-data.json')
    .then(response => response.json())
    .then(data => {
      this.content = data;
    });
}
```

## 示例

这个简单的示例显示了一个时钟，并每秒更新一次当前时间。将组件添加到DOM后，计时器启动。一旦将其从DOM中删除，计时器就会停止。

```
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'custom-clock'
})
export class CustomClock {

  timer: number;

  @State() time: number = Date.now();

  connectedCallback() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.time).toLocaleTimeString();

    return (
      <span>{ time }</span>
    );
  }
}
```