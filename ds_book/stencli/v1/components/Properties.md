# @Prop()装饰器

Prop是在元素上公开的自定义属性/属性，开发人员可以为其提供值。应该使用Props将数据从父组件向下传递到子组件，而子组件不应该知道和引用父组件的任何内容。组件需要使用@Prop()装饰器显式声明它们希望接收的Prop(属性)。Prop可以是number，string，boolean，或甚至是Object或Array类型的数据。默认情况下，修改用装饰器@Prop()装饰的成员时，组件将进行有效地重新渲染。

```
import { Prop } from '@stencil/core';

...
export class TodoList {
  @Prop() color: string;
  @Prop() favoriteNumber: number;
  @Prop() isSelected: boolean;
  @Prop() myHttpService: MyHttpService;
}
```

在TodoList教程中，可通过this操作员访问Prop。

```
logColor() {
  console.log(this.color)
}
```

在外部，Prop设置在元素上。

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
    在HTML中，必须使用破折号设置属性：
</div>

```
<todo-list color="blue" favorite-number="24" is-selected="true"></todo-list>
```

在JSX中，您可以使用camelCase设置属性：

```
<todo-list color="blue" favoriteNumber={24} isSelected="true"></todo-list>
```

也可以从元素通过JS访问它们。

```
const todoListElement = document.querySelector('todo-list');
console.log(todoListElement.myHttpService); // MyHttpService
console.log(todoListElement.color); // blue
```

## Prop参数

这@Prop(opts?: PropOptions)装饰接受一个可选参数来指定某些选项，如mutability，DOM的属性的名称，及该属性的值应该或不应该被反射到DOM。

```
export interface PropOptions {
  attribute?: string;
  mutable?: boolean;
  reflect?: boolean;
}
```

## Prop可变性

很重要的一点是，默认情况下，Prop从组件逻辑内部是不可变的。用户设置值后，组件将无法在内部对其进行更新。

但是可以通过将Prop声明为mutable来明确允许其从组件内部进行更改，如下例所示：

```
import { Prop } from '@stencil/core';

...
export class NameElement {

  @Prop({ mutable: true }) name: string = 'Stencil';

  componentDidLoad() {
    this.name = 'Stencil 0.7.0';
  }
}
```

## Prop名称

属性和组件属性紧密相连，但不一定是同一件事。组件属性(attributes )是HTML的概念，但属性(properties )是JS面向对象编程中的概念。

在Stencil中，@Prop()应用于属性的装饰器将指示Stencil编译器也侦​​听DOM属性中的更改。

通常，属性的名称与属性相同，但并非总是如此。以以下组件为例：

```
import { Component, Prop } from '@stencil/core';

@Component({ tag: 'my-cmp' })
class Component {
  @Prop() value: string;
  @Prop() isValid: boolean;
  @Prop() controller: MyController;
}
```

该组件具有3个属性，但是编译器将仅创建2个属性：value和is-valid。

```
<my-cmp value="Hello" is-valid></my-cmp>
```

请注意，该controller类型不是原始类型，因为DOM属性只能是字符串，所以没有一个关联的DOM属性称为“控制器”是没有意义的。

同时，该isValid属性遵循camelCase命名，但是属性不区分大小写，因此属性名称默认为is-valid。

幸运的是，可以使用装饰器@Prop()的attribute选项来更改此“默认”行为

```
import { Component, Prop } from '@stencil/core';

@Component({ tag: 'my-cmp' })
class Component {
  @Prop() value: string;
  @Prop({ attribute: 'valid' }) isValid: boolean;
  @Prop({ attribute: 'controller' }) controller: MyController;
}
```

通过使用此选项，我们可以明确知道哪些属性具有关联的DOM属性及其名称。

## 将属性(Properties)值反映到属性(Attributes)

在某些情况下，使属性(Prop)与属性(attribute)保持同步可能很有用。在这种情况下，您可以将@Prop()装饰器中的reflect选项设置为true，因为它的默认值为false：

```
@Prop({
  reflect: true
})
```

当“Prop”设置“reflect”时，表示它们的值将作为HTML属性呈现在DOM中：

以以下组件为例：

```
@Component({ tag: 'my-cmp' })
class Cmp {
  @Prop({ reflect: true }) message = 'Hello';
  @Prop({ reflect: false }) value = 'The meaning of life...';
  @Prop({ reflect: true }) number = 42;
}
```

在DOM中呈现时，它将看起来像：

```
<my-cmp message="Hello" number="42"></my-cmp>
```

请注意，设置“reflect”为true的属性(properties )将呈现为属性(attributes),而未设置“reflect”为true的属性(properties)则不会呈现

虽然未设置为“reflect”的属性(properties)（例如“value”）未呈现为属性(attributes)，但这并不意味着它不存在,该value属性(properties)仍包含The meaning of life...分配的值：

```
const cmp = document.querySelector('my-cmp');
console.log(cmp.value); // 输出'The meaning of life...'
```

## 支持默认值和验证

在属性上设置默认值：

```
import { Prop } from '@stencil/core';

...
export class NameElement {
  @Prop() name: string = 'Stencil';
}
```

要验证Prop，您可以使用 @Watch() 装饰器：

```
import { Prop, Watch } from '@stencil/core';

...
export class TodoList {
  @Prop() name: string = 'Stencil';

  @Watch('name')
  validateName(newValue: string, oldValue: string) {
    const isBlank = typeof newValue !== 'string' || newValue === '';
    const has2chars = typeof newValue === 'string' && newValue.length >= 2;
    if (isBlank) { throw new Error('name: required') };
    if (!has2chars) { throw new Error('name: has2chars') };
  }
}
```