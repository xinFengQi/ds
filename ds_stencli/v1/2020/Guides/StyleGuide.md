<!--
 * @Date: 2021-01-21 10:40:01
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 16:11:36
-->

# Stencli样式指南

这是组件样式指南，由Stencil的核心团队在内部创建和实施，目的是使Ionic Core组件标准化。这仅应作为其他团队创建自己的样式指南的参考。随意修改您团队的偏好。

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
为了执行此（或您团队的）样式指南，我们建议利用诸如TSLint之类的静态分析工具。ionic遵循tslint-ionic-rules。同时，社区维护的软件包tslint-stencil提供了专门用于编写Stencil组件的规则。
</div>

## 文件结构

1. 每个文件一个组件。
2. 每个目录一个组件。尽管将相似的组件分组到同一目录可能很有意义，但我们发现，当每个组件都有自己的目录时，记录组件会更容易。
3. 组件的实现（.tsx）和样式应位于同一目录中。

来自ionic-core的示例：

```
├── my-card
│   ├── my-card.ios.css
│   ├── my-card.md.css
│   ├── my-card.css
│   ├── my-card.tsx
│   └── test
│       └── basic
│           ├── e2e.js
│           └── index.html
├── my-card-content
│   ├── my-card-content.ios.css
│   ├── my-card-content.md.css
│   ├── my-card-content.css
│   └── my-card-content.tsx
├── my-card-title
│   ├── my-card-title.ios.css
│   ├── my-card-title.md.css
│   ├── my-card-title.css
```

## 命名

### HTML标签

#### 前缀

当你要创建一组要跨不同项目使用的组件时，这个前缀扮演着重要的角色，比如@ionic/core。Web组件没有作用域，因为它们是在网页中全局声明的，这意味着需要一个“唯一的”前缀来防止冲突。该前缀还能够帮助快速识别组件集合。此外，web组件还需要在标记名称中包含一个“-”破折号，因此使用第一部分来命名组件的名称空间是非常合适的。
我们不建议使用“stencil”作为前缀，因为stencil不产生stencil组件，而是输出符合标准的web组件。
不要这样做:

```
<stencil-component>
<stnl-component>
```

而是应该使用您自己的命名或标记。例如，ionic组件都以ion-开头。

```
<ion-button>
<ion-header>
```

#### 名称

组件不是动作，它们在概念上是“事物”。用名词代替动词更好，比如用“animation”代替“animating”。例如，"input"， "tab"， "nav"， "menu"。

#### 修饰符

当几个组件是相关的和/或耦合的，最好是共享名称，然后添加不同的修饰符，例如:

```
<ion-card>
<ion-card-header>
<ion-card-content>
```

### 组件（TS类）

组件的ES6类的名称不应带有前缀，因为类是作用域的。没有碰撞的危险

```
@Component({
  tag: 'ion-button'
})
export class Button { ... }

@Component({
  tag: 'ion-menu'
})
export class Menu { ... }
```

### TypeScript

1. 遵循 tslint-ionic-rules
2. 装饰器和变量在一行

```
@Prop() name: string;
@Element() el: HTMLElement;
```

1. 方法装饰器应为多行

```
@Listen('click')
onClick() {
  ...
}
```

尽可能使用私有变量和方法：它们用于检测死代码和强制封装。请注意，这是TypeScript提供的一个特性，用来帮助加固你的代码，但是使用private、public或protected不会对实际的JavaScript输出产生影响。

使用Method/Prop/Event/Component装饰器的代码应具有jsdocs注释：这允许在拥有TypeScript智能感知的编辑器中生成文档和提示，并提供更好的用户体验

## 代码组织

罗伯特·c·马丁的干净代码和报纸的比喻

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
源文件的组织方式应像报纸上的文章一样，最高级别的摘要位于顶部，而越来越多的细节则位于下方。从顶部函数调用的函数位于其正下方，依此类推直至最低层，而最详细的函数则位于底部。这是组织源代码的一种好方法，即使IDE使功能的位置不太重要，因为它易于导航和导航。

</div>

### 高级示例(评论)

```
@Component({
  tag: 'ion-something',
  styleUrls: {
    ios: 'something.ios.css',
    md: 'something.md.css',
    wp: 'something.wp.css'
  }
})
export class Something {

  /**
   * 1. Own Properties
   * Always set the type if a default value has not
   * been set. If a default value is being set, then type
   * is already inferred. List the own properties in
   * alphabetical order. Note that because these properties
   * do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
  num: number;
  someText = 'default';

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el: HTMLElement;

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   */
  @State() isValidated: boolean;
  @State() status = 0;

  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are
   * different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */
  @Prop() content: string;
  @Prop() enabled: boolean;
  @Prop() menuId: string;
  @Prop() type = 'overlay';

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   * This makes sense since both statements are strongly connected.
   * - If renaming the instance variable name you must also update the name in @Watch()
   * - Code is easier to follow and maintain.
   */
  @Prop() swipeEnabled = true;

  @Watch('swipeEnabled')
  swipeEnabledChanged(newSwipeEnabled: boolean, oldSwipeEnabled: boolean) {
    this.updateState();
  }

  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */
  @Event() ionClose: EventEmitter;
  @Event() ionDrag: EventEmitter;
  @Event() ionOpen: EventEmitter;

  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  connectedCallback() {}
  disconnectedCallback() {}
  componentWillLoad() {}
  componentDidLoad() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillRender() {}
  componentShouldRender(newVal: any, oldVal: any, propName: string) {}
  componentDidRender() {}

  /**
   * 7. Listeners
   * It is ok to place them in a different location
   * if makes more sense in the context. Recommend
   * starting a listener method with "on".
   * Always use two lines.
   */
  @Listen('click', { enabled: false })
  onClick(ev: UIEvent) {
    console.log('hi!')
  }

  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Public Methods must be async.
   * Requires JSDocs for public API documentation.
   */
  @Method()
  async open(): Promise<boolean> {
    // ...
    return true;
  }

  @Method()
  async close(): Promise<void> {
    // ...
  }

  /**
   * 9. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */
  prepareAnimation(): Promise<void> {
    // ...
  }

  updateState() {
    // ...
  }

  /**
   * 10. render() function
   * Always the last public method in the class.
   * If private methods present, they are below public methods.
   */
  render() {
    return (
      <Host
        attribute="navigation"
        side={this.isRightSide ? 'right' : 'left'}
        type={this.type}
        class=\{\{
          'something-is-animating': this.isAnimating
        }}
      >
        <div class='menu-inner page-inner'>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
```