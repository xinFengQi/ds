<!--
 * @Date: 2021-01-20 17:07:17
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 09:56:25
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

Rollup依赖于ES模块(ESM)来正确的对模块依赖进行摇树优化，不幸的是，一些第三方库使用CommonJS模块系统发布它们的代码，这并不理想。

由于CommonJS库现在仍然很常见，所以Stencil自带了已经安装和配置好的rollup-plugin-commonjs。在编译时，该rollup-plugin-commonjs插件会尽最大努力将CommonJS转换为ESM，但这并不是一件容易的事。CommonJS本质上是动态的，而ESM在设计上是静态的。

Stencil的配置公开了一个传递给Rollup CommonJS插件的属性commonjs，您可以使用此设置来解决某些打包问题。

## NamedModules：X不会被X导出

有时，Rollup不能正确地静态分析CommonJS模块，它会遗漏一些命名导出。幸运的是，我们可以使用一个变通方法。

正如我们已经知道，stencil.config.ts公开了一个commonjs属性，在这种情况下，我们可以充分利用的namedExports特性。

假设，当试图使用commonjs-dep模块的hello命名导出时，Rollup失败了:

```
// NamedModules: hello is not exported by commonjs-dep
import { hello } from 'commonjs-dep';
```

我们可以使用stencil.config.ts文件中的config.commonjs.namedExports设置来解决此问题：

```
export const config = {
  commonjs: {
    namedExports: {
       // commonjs-dep has a "hello" export
      'commonjs-dep': ['hello']
    }
  }
}
```

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
我们可以为有问题的依赖项设置nameexports映射，在本例中，我们在commonjs-dep模块中显式地定义了命名的hello导出。
</div>

有关更多信息，请查看rollup-plugin-commonjs文档。

## 自定义Rollup 插件

Stencil.config.ts中提供了一个API来将自定义的rollup插件传递到捆绑过程。在底层，stencil提供了一些内置的插件，包括node-resolve和commonjs，因为一些rollup插件的执行顺序很重要，stencil提供了一个API来在node-resolve转换之前和commonjs转换之后注入自定义插件:

注入自定义插件：
```
export const config = {
  rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
      resolvePlugin()
    ],
    after: [
      // Plugins injected after commonjs()
      nodePolyfills()
    ]
  }
}
```
根据经验，应该将需要解析模块的插件放在中before，而将代码转换插件（例如：node-polyfills，replace...）放在中after。请遵循插件的文档，以确保它以正确的顺序执行。

## Node(Node.js) Polyfills

根据项目所依赖的库，可能需要rollup-plugin-node-polyfills插件。在这种情况下，构建时将显示类似如下的错误消息。

```
[ ERROR ]  Bundling Node Builtin
           For the import "crypto" to be bundled from 'problematic-dep',
           ensure the "rollup-plugin-node-polyfills" plugin is installed
           and added to the stencil config plugins.
```

这是由于某些第三方依赖项使用了浏览器中不可用的[Node API](https://nodejs.org/dist/latest-v10.x/docs/api/)引起的，该rollup-plugin-node-polyfills插件通过透明地填充浏览器中缺少的API来工作。

##### 1.安装rollup-plugin-node-polyfills

```
npm install rollup-plugin-node-polyfills --save-dev
```

##### 2. 更新stencil.config.ts文件引入插件

```
import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'mycomponents',
  rollupPlugins: {
    after: [
      nodePolyfills(),
    ]
  }
};
```

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
注意:rollup-plugin-node-polyfills是一个代码转换插件，所以它需要在commonjs转换插件之后运行，这就是它被放在“after”插件数组中的原因。
</div>

## 严格模式

ES模块总是在严格模式下解析。这意味着，当Rollup解析使用某些非严格结构(如八进制字面量)的模块时，它们将被视为语法错误。一些较老的CommonJS模块依赖于这些结构，如果你依赖于它们，你的打包工具就会崩溃。我们对此无能为力。
幸运的是，没有任何好的理由不使用严格模式，所以这个问题的解决方案是游说这些模块的作者更新它们。

来源：[https://github.com/rollup/rollup-plugin-commonjs#strict-mode](https : //github.com/rollup/rollup-plugin-commonjs#strict-mode)