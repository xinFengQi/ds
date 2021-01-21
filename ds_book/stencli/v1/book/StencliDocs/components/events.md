# 事件

不存在Stencli事件这种东西，相反，Stencli鼓励使用DOM事件。但是，Stencil也提供了一个API来使组件可以发出的指定事件和侦听指定事件。它通过@Event()和@Listen()装饰器做到这一点。

## Event装饰器

组件可以使用事件发射器(Event Emitter)来发出数据和事件。

要使用Custom DOM事件以供其他组件处理，请使用@Event()装饰器。

```
import { Event, EventEmitter } from '@stencil/core';

...
export class TodoList {

  @Event() todoCompleted: EventEmitter<Todo>;

  todoCompletedHandler(todo: Todo) {
    this.todoCompleted.emit(todo);
  }
}
```

上面的代码将调度一个名为todoCompleted的自定义DOM事件。

Event(opts: EventOptions)装饰器接受一个选项对象作为参数来构造一个分派事件的行为。选项和默认值如下所述。

```
export interface EventOptions {
  /**
   * 用于覆盖默认值的自定义事件名称的字符串
   */
  eventName?: string;
  /**
   * 一个布尔类型的值，设置事件是否通过DOM向上冒泡。
   */
  bubbles?: boolean;

  /**
   * 一个布尔的值，设置事件是否可取消。
   */
  cancelable?: boolean;

  /**
   * 一个布尔的值，指示事件是否可以跨越阴影(shadow)DOM和常规DOM之间的边界。
   */
  composed?: boolean;
}
```

例：

```
import { Event, EventEmitter } from '@stencil/core';

...
export class TodoList {

  // Event called 'todoCompleted' that is "composed", "cancellable" and it will bubble up!
  @Event({
    eventName: 'todoCompleted',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) todoCompleted: EventEmitter<Todo>;

  todoCompletedHandler(todo: Todo) {
    const event = this.todoCompleted.emit(todo);
    if(!event.defaultPrevented) {
      // 如果没有阻止事件冒泡，执行一些默认的逻辑代码
    }
  }
}
```

## Listen装饰器

Listen()装饰器用于监听DOM事件，包括来自@Events的事件。

在下面的示例中，假设子组件TodoList使用EventEmitter发出todoCompleted事件。

```
import { Listen } from '@stencil/core';

...
export class TodoApp {

  @Listen('todoCompleted')
  todoCompletedHandler(event: CustomEvent<Todo>) {
    console.log('Received the custom todoCompleted event: ', event.detail);
  }
}
```

### @Listen()的选项参数

@Listen (eventName选择?: ListenOptions)包含三个可选参数，用于配置DOM事件监听器的附加方式。

```
export interface ListenOptions {
  target?: 'body' | 'document' | 'window';
  capture?: boolean;
  passive?: boolean;
}
```

可用的选项是target，capture和passive：

#### target

除了宿主元素(Host)本身之外，还可以为事件注册处理程序。target选项可用于更改事件监听器的附加位置，这对于监听应用程序范围的事件非常有用。

在下面的示例中，我们将监听发自window的滚动事件：

```
  @Listen('scroll', { target: 'window' })
  handleScroll(ev) {
    console.log('the body was scrolled', ev);
  }

```

#### passive

默认情况下，Stencil使用几个默认的方法来确定它是否必须附加passive事件侦听器。passive选项可以用来改变默认行为。

请查看https://developers.google.com/web/updates/2016/06/passive-event-listeners了解更多信息。

#### capture

默认情况下，带有@Listen的事件监听器不会被“捕获(capture)”。当事件监听器被设置为“捕获(capture)“时(即capture选项设置为true时)，这意味着事件将在“捕获阶段”被分派。查看https://www.quirksmode.org/js/events_order.html以获取更多信息。

```
  @Listen('click', { capture: true })
  handleClick(ev) {
    console.log('click');
  }
```

### 键盘(Keyboard)事件

对于键盘事件，您可以在中使用标准keydown事件，@Listen()并使用event.keyCode或event.which获取键的码值，或使用event.key获取键的字符串表示形式。

```
@Listen('keydown')
handleKeyDown(ev: KeyboardEvent){
  if (ev.key === 'ArrowDown'){
    console.log('down arrow pressed')
  }
}
```

有关键盘事件的键值或键码的更多信息，请参见w3c规范。

## 在JSX中使用事件

在Stencli编译的应用程序或者组件中，您还可以直接在JSX中将监听器绑定到事件，例如和与正常的DOM事件非常相似的onClick事件。

让我们使用上面我们已经写好的TodoList组件：

```
import { Event, EventEmitter } from '@stencil/core';

...
export class TodoList {

  @Event() todoCompleted: EventEmitter<Todo>;

  todoCompletedHandler(todo: Todo) {
    this.todoCompleted.emit(todo);
  }
}
```

现在，我们可以使用以下语法在JSX中的组件上直接监听此事件：

```
<todo-list onTodoCompleted={ev => this.someMethod(ev)} />
```

## 监听来自非JSX元素的事件

```
<todo-list></todo-list>
<script>
  const todoListElement = document.querySelector('todo-list');
  todoListElement.addEventListener('todoCompleted', event => { /* your listener */ })
</script>
```