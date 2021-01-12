# 生成静态网页的基础

在构建时（而不是仅在服务器或客户端时）渲染组件，可以为您的应用程序带来显着的性能改进，并最大化SEO影响。

在Stencil中使用静态站点生成需要运行构建命令，从获取动态数据的组件生命周期方法返回promise，并确保正确发现和构建所有已知的URL。

## 静态构建

Stencli默认不预渲染组件。但是，可以使用--prerender标志将构建进行预渲染。

```
stencil build --prerender
```

## 渲染动态数据

许多组件需要基于从服务器获取的数据进行渲染。Stencil通过允许组件从componentWillLoad这样的生命周期方法返回Promise来处理这个问题(这也可以通过使用async/await来实现)。

例如，这是让Stencil等待渲染组件直到它从服务器获取数据的方式：

```
async componentWillLoad() {
  const ret = await fetch('https://.../api');

  this.thing = await ret.json();
}
```

## 与路由集成

因为Stencil实际上会导航到组件并执行组件，所以它完全支持路由器，包括Stencil路由。

访问路由参数和匹配不需要做任何更改。但是，要确保您的路由可以接受末尾的斜杠，因为预先渲染的静态内容将被视为在该路径加载index.html文件，因此浏览器可能会附加一个末尾的斜杠。

特别是，如果使用Stencil路由，请仔细检查exact={true}的用法，这可能会导致你的路由在加载时带有末尾的斜杠时不匹配。

## 页面与爬取检测URL

默认情况下，Stencil从基本URL/开始爬取您的应用程序，并发现所有需要索引的路径。默认情况下，这只会发现在构建时链接的页面，但可以轻松配置为构建应用程序的任何可能的URL。

生成每个页面并找到新链接时，Stencil将继续爬取和预渲染页面。

请参阅prerender config文档，以了解如何进一步自定义。

## 注意事项

在预渲染时，某些代码区域可能绝对不应该运行。为了帮助避免某些代码，Stencil提供了一个Build.isBrowser构建条件来告知预渲染跳过。这是如何使用此实用程序的示例：

```
import { Build } from '@stencil/core';

connectedCallback() {
  // Build.isBrowser is true when running in the
  // browser and false when being prerendered

  if (Build.isBrowser) {
    console.log('running in browser');
  } else {
    console.log('running in node while prerendering');
  }
}
```

还要注意，为浏览器构建生成的实际运行时将不包括因if (Build.isBrowser)语句而被排除的代码。在上面的例子中，只有console.log('running in browser')将包含在组件的运行时中。