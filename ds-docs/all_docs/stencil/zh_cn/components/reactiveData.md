# 响应式数据

当组件上的Prop或者State更改时，stencil组件也会更新。为了提高性能和简化操作，stencil仅比较引用的更改，并且在数组或者对象内部的数据更改时不会重新渲染呈现。

## 渲染方式

当组件由于状态更改(Prop或者State更改)而更改时，该render()方法将按计划运行。

## @Watch()装饰器

当用户更新属性时，@Watch()将触发它所附加的方法，并将该属性的新值与旧值一起传递给该方法。@Watch()对于验证Prop或处理带有副作用的属性(变化会影响其他的属性变化或者方法执行的属性)是很有用的。

最初加载组件时， @Watch()装饰器不会触发。

```
import { Prop, Watch } from '@stencil/core';

export class LoadingIndicator {
  @Prop() activated: boolean;

  @Watch('activated')
  watchHandler(newValue: boolean, oldValue: boolean) {
    console.log('The new value of activated is: ', newValue);
  }
```

## 处理数组和对象

要更新数组或者对象数据，请使用以下技术，这些技术正在迅速成为现代JavaScript工具类的核心部分。

### 更新数组

对于数组，标准可变数组操作（例如push()和）unshift()不会触发组件更新。相反，应使用非可变数组运算符，因为它们会返回新数组的副本。其中包括map()和filter()，以及ES6扩展运算符语法。

例如，要将一个新项目推送到数组中，需要创建一个新数组，其中包含已有的值和末尾的新值:

```
@State() items: string[];

// our original array
this.items = ['ionic', 'stencil', 'webcomponents'];

// update the array
this.items = [
  ...this.items,
  'awesomeness'
]
```

...this.items该语法是JavaScript的一个相对较新的功能,它可以“扩展”给定的对象。在此处阅读有关Spread(扩展)运算符的更多信息。

### 更新对象

扩展操作符也应该用于更新对象。与数组一样，改变对象不会在Stencil中触发视图更新，但返回对象的新副本可以触发视图更新。下面是一个例子:

```
@State() myCoolObject;

// our original object
this.myCoolObject = {first: '1', second: '2'}

// update our object
this.myCoolObject = { ...myCoolObject, third: '3' }
```