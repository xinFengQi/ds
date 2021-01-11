# 组件样式

## Shadow(阴影) DOM

### 什么是Shadow Dom

Shadow Dow是浏览器内置的API，允许进行DOM封装和样式封装。Shadow Dom可以使我们的组件不受周围环境影响。这就意味着我们不必担心css的正确定义范围，也不必担心内部DOM会受到组件外部的内容干扰。

### 浏览器支持

目前原生支持Shadow Dom的浏览器如下所示：

1. Chrome
2. Firefox
3. Safari
4. Opera

在不支持Shadow Dom的浏览器中，我们将会使用scoped css(限定范围的CSS),这为您提供了Shadow DOM附带的样式封装，但不需要加载一个巨大的Shadow DOM polyfill。

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
  对范围内的CSS感到困惑？不用担心，我们稍后会详细解释。
</div>

## Stencli中的Shadow Dom

默认情况下，使用Stencli构建的Web组件默认未打开Shadow Dom。要在使用Stencli构建的Web组件中使用SHadow Dom，可以在@Component()装饰器的参数中配置shadow为true。下面是一个示例：

```
@Component({
  tag: 'shadow-component',
  styleUrl: 'shadow-component.css',
  shadow: true
})
export class ShadowComponent {

}
```

## 使用Shadow Dom要记住的事情

QuerySelector: 使用Shadow DOM并要查询Web组件内的元素时，必须使用this.el.shadowRoot.querySelector()。这是因为Web组件内的所有DOM都在Shadow DOM创建的shadowRoot中。

Global Styles:要使用Shadow DOM从外部对组件进行样式设置，必须使用[CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)或建议的[CSS Shadow Parts](https://meowni.ca/posts/part-theme-explainer/)。

通常，您将样式包装在组件的标签名称中，如下所示：

```
my-element {
  color: black;
}
my-element div {
  background: blue;
}
```

启用S​​hadow DOM后，shadow根目录中的元素将成为作用域，并且组件外部的样式将不适用。所以，可以简化组件内部的CSS选择器，将上面的示例可以转换为：

```
:host {
  color: black;
}
div {
  background: blue;
}
```

## Scoped css(限定范围的CSS)

当前不支持Shadow DOM的浏览器中，使用Stencil构建的Web组件将退回到使用范限定范围的CSS，而不是加载大型Shadow DOM polyfill。Scoped CSS通过在运行时为每个样式附加一个data属性来自动将CSS范围化为一个元素。

## Global styles(全局样式)

虽然Stencli鼓励开发人员编写限定于每个组件范围的样式，但有时也需要全局样式，该项目无论使用哪种组件时都可以被适用。

为此，stencil.config.ts提供了一个指向样式表路径的globalStyle可选设置。

```
export const config: Config = {
  namespace: 'app',
  globalStyle: 'src/global/global.css',
  outputTarget: [{
    type: 'www'
  }]
}
```
编译器将会在global.css执行压缩(minification)，自动修复(autoprefixing )和插件(plugins),并为www和dist输出目标生成一个输出文件。生成的文件将始终具有.css扩展名，并使用指定的命名空间(namespace)命名。

在上面的示例中，由于名称空间(namespace)为app，因此生成的全局样式文件将位于：./www/build/app.css。

此文件必须在index.html应用程序的中手动导入，您可以在src/index.html中找到：

```
<link rel="stylesheet" href="/build/app.css">
```

记住，全局样式应该为全局样式保留，也就是说，你应该尽量避免用它来设计你的组件，t同时，一些有趣的使用情况可以是:

1. 主题：定义整个应用程序中使用的css变量
2. 使用@font-face加载字体
3. 应用广泛的字体类型
4. 页面风格背景
5. css重置(CSS resets)

## CSS变量

### 什么是css变量？

CSS变量与Sass变量非常相似，但是内置于浏览器中。允许您为您的应用程序的CSS属性指定使用CSS变量。

### 用例

CSS变量的一种用例是颜色。如果您的应用具有在整个应用中使用的主要主题颜色，则可以在应用中为其创建变量，然后在需要该颜色的任何地方使用该变量，而不必在应用中的每个位置都写相同的颜色。另外，如果您需要更改此颜色，则只需更改变量，然后整个应用程序中对会对其进行更新。

### 在Stencli中使用CSS变量

以下是在Stencli中使用CSS变量的最佳步骤：

1. 创建一个CSS文件来保存您的变量定义。我们通常建议在src/global/文件夹位置下创建variables.css文件。
2. 然后，您可以将此配置globalStyle: 'src/global/variables.css'放入stencil.config.ts文件中。

之后，您可以开始定义变量了。

### 定义CSS变量

这是定义CSS变量的示例：

```
/* 在src/global/variables.css文件中 */

:root {
  --app-primary-color: #488aff;
}
```

在此示例中，我们定义了一个CSS变量--app-primary-color，该变量的值设置为 #488aff的颜色值。此示例中的:root选择器是CSS伪类，它在项目的根元素上（通常是&lt;html>）定义了变量，以便可以在您的应用程序中使用该变量。

### 使用CSS变量

这是使用上面定义的CSS变量的示例：

```
h1 {
  color: var(--app-primary-color)
}

```
这会将我们在CSS变量中定义的颜色（在这种情况下是#488aff）应用于h1元素。

## IE浏览器的支持

IE11本身不支持CSS变量，但是stencil可以尽可能的提供polyfill，因为不可能像polyfillJS一样使用polyfill CSS功能。

关于Stencli提供的CSS变量的Polyfill相对于原生就支持它的浏览器有很多限制，并且会导致大量的性能开销。

1. 全局CSS变量只能在:root或html中声明，它们不能是动态的。
2. 只有shadow或scoped的样式表可以具有动态CSS变量。
3. 组件内的CSS变量只能在:host(...)选择器内定义。

```
:host() {
  /* This works */
  --color: black;
}
:host(.white) {
  /* This works */
  --color: white;
}
.selector {
  /* This DOES NOT work in IE11 */
  --color: red;
}
```

组件中的CSS变量可以在任何选择器中使用(var(--thing))。

在IE11中使用CSS变量的性能开销在CPU时间和内存方面有所增加。这是因为为了“模拟”CSS变量的动态特性，填充器需要动态地为每个实例生成不同的样式表。例如，如果你在DOM中有200个my-cmp元素，填充材料将会附加200个类似的&lt;style&gt;标记来样式化每个元素。

IE11要处理的样式表的总量会迅速增长，消耗大量的内存，并且每次样式失效都需要大量的计算。