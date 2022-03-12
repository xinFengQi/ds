# 使用功能组件

功能组件与普通的Stencil Web组件完全不同，因为它们是Stencil的JSX编译器的一部分。从本质上讲，功能组件是一个功能，它接受Props对象并将其转换为JSX。

```
const Hello = props => <h1>Hello, {props.name}!</h1>;
```

当JSX Transpiler(转译器)遇到这样的组件时，它将获取其属性，将它们作为props对象传递给函数，然后用函数返回的JSX替换该组件。

```
<Hello name="World" />
```

功能组件也接受第二个参数children。

```
const Hello = (props, children) => [
  <h1>Hello, {props.name}</h1>,
  children
];
```

JSX Transpiler(转译器)将组件的所有子元素作为数组传递给函数的children参数。

```
<Hello name="World">
  <p>I'm a child element.</p>
</Hello>
```

stencil提供了一种FunctionalComponent通用类型，该类型允许为组件属性的指定接口。

```
// Hello.tsx

import { FunctionalComponent, h } from '@stencil/core';

interface HelloProps {
  name: string;
}

export const Hello: FunctionalComponent<HelloProps> = ({ name }) => (
  <h1>Hello, {name}!</h1>
);
```

## 子组件的工作

功能组件的第二个参数接收传递的子组件，但是为了与它们一起使用，FunctionalComponent提供了utils对象，该对象公开了map()一种转换子组件和forEach()读取子组件的方法。children不建议读取数组，因为stencil编译器在生产模式下可以重命名vNode属性。

```
export interface FunctionalUtilities {
  forEach: (children: VNode[], cb: (vnode: ChildNode, index: number, array: ChildNode[]) => void) => void;
  map: (children: VNode[], cb: (vnode: ChildNode, index: number, array: ChildNode[]) => ChildNode) => VNode[];
}
export interface ChildNode {
  vtag?: string | number | Function;
  vkey?: string | number;
  vtext?: string;
  vchildren?: VNode[];
  vattrs?: any;
  vname?: string;
}
```

例：

export const AddClass: FunctionalComponent = (_, children, utils) => (
  utils.map(children, child => ({
    ...child,
    vattrs: {
      ...child.vattrs,
      class: `${child.vattrs.class} add-class`
    }
  }
  ))
);

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
  在JSX中使用功能组件时，其名称必须以大写字母开头。因此，按原样导出它是有意义的。
</div>

## 免责声明

功能组件和类组件之间有一些主要区别。由于功能组件只是JSX中的语法糖，因此它们:

1. 没有被编译成web组件，
2. 不要创建DOM节点，
3. 没有Shadow DOM或scoped样式，
4. 没有生命周期挂钩，
5. 是无状态的。

在决定是否使用功能组件时，要记住的一个概念是，应用程序的UI通常可以是其状态的函数，即，在给定相同状态的情况下，它始终呈现相同的UI。如果组件必须保持状态，处理事件等，则它可能应该是类组件。如果组件的目的是简单地封装一些标记以便可以在您的应用程序中重用，则它可能是一个功能组件（尤其是如果您使用的是组件库，因此不需要设置其样式）。