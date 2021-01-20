<!--
 * @Date: 2021-01-20 17:07:17
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-20 19:06:57
-->

# 模块打包

Stencil使用Rollup来打包组件。本指南将为您可能遇到的一些最常见的打包问题解释和推荐一些变通方法。

## 每个模块一个组件

为了让Stencil最有效地打包你的组件，你必须为每个TypeScript文件声明一个组件(用@Component装饰的类)，而且组件本身必须有一个唯一的导出。通过这样做，Stencil能够轻松地分析应用程序内的整个组件图，并最好地理解组件应该如何捆绑在一起。在底层，它使用Rollup打包工具有效地将共享代码打包在一起。此外，延迟加载是Stencil的默认特性，因此代码分割已经自动进行，并且只动态导入页面上正在使用的组件。
包含组件的模块是入口点，这意味着其他模块不应该从它们中导入任何东西。

下面的例子是不合法的：

<b><p>src/components/my-cmp.tsx：</p></b>

```
// This module has a component, you cannot export anything else
export function someUtilFunction() {
  console.log('do stuff');
}

@Component({
  tag: 'my-cmp'
})
export class MyCmp {}
```
在这种情况下，编译器将发出如下错误：

```
[ ERROR ]  src/components/my-cmp.tsx:4:1
        To allow efficient bundling, modules using @Component() can only have a single export which is the component
        class itself. Any other exports should be moved to a separate file. For further information check out:
        https://stenciljs.com/docs/module-bundling

  L4:  export function someUtilFunction() {
  L5:   console.log('do stuff');
```
解决方案是将所有共享函数或类移动到另一个.ts文件，如下所示：

<b><p>src/utils.ts：</p></b>

```
export function someUtilFunction() {
  console.log('do stuff');
}
```

<b><p>src/components/my-cmp.tsx：</p></b>


```
import  { someUtilFunction } from '../utils.ts';

@Component({
  tag: 'my-cmp'
})
export class MyCmp {}
```

<b><p>src/components/my-cmp-two.tsx：</p></b>


```
import { someUtilFunction } from '../utils.ts';


@Component({
  tag: 'my-cmp-two'
})
export class MyCmpTwo {}
```

## CommonJS依赖项