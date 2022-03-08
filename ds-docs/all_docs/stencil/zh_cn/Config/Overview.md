# Stencil配置

在大多数情况下，该stencil.config.ts文件不需要任何自定义，因为Stencil自带了很好的默认值。通常，最好将配置保持为最小。您甚至可以完全删除stencil.config.ts文件，应用程序还是可以正常编译。同时，可以使用此配置在最低级别配置编译器。以下是许多可选的配置属性。

stencil.config.ts例子：

```
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'MyApp',
  srcDir: 'src'
};
```

设置是否应生成ES5的构建。默认为false。设置true还将为dev和prod模式创建es5构建。设置buildEs5为prod只会在生产模式下构建ES5。基本上，如果该应用不需要在旧版浏览器（IE11和Edge 18及更低版本）上运行，则可以安全地使用默认的buildEs5设置，设置为false，这也将缩短生产时间。除了创建es5版本外，应用程序可能需要对启用运行时选项以支持旧版浏览器。有关更多信息，请参见额外配置。

```
buildEs5: boolean | 'prod'
```

## bundles

默认情况下，Stencil将静态分析应用程序，并生成所有组件如何互连的组件图。从组件图中，它可以最好地决定应如何根据应用程序中组件之间的使用对组件进行分组。这样，便可以将组件捆绑在一起以减少网络请求。但是，可以使用bundlesconfig手动生成包。

bundles配置是表示组件是如何组合在一起延迟加载的对象数组。很少需要此配置，因为Stencil在后台自动处理此配置。

```
bundles: [
  { components: ['ion-button'] },
  { components: ['ion-card', 'ion-card-header'] }
]
```

## enableCache

默认： true

stencil将缓存生成结果，以加快重建速度。要禁用此功能，请设置enableCache为false。

```
enableCache: true
```

## globalScript

全局脚本配置选项采用文件路径作为值。

全局脚本在加载库/应用程序之前运行一次，因此您可以执行诸如建立与外部服务的连接或配置正在使用的库之类的操作。

应将要执行的代码放在全局脚本导出的默认函数中。确保全局脚本中的所有代码都包装在导出的函数中：

```
export default function() { // or export default async function()
  initServerConnection();
}
```


<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
   导出的函数也可以是async。
</div>

## globalStyle

stencil传统上是将许多组件编译到应用程序中，并且每个组件都有自己的分隔样式。但是，在所有组件和网站上都应具有“全局”样式的样式。全局CSS文件通常使用于设置CSS变量。

此外，该globalStyle配置可用于使用Sass，PostCss等预编译样式。

下面是一个示例文件夹结构，其中包含一个名为的Web应用程序的全局CSS文件app.css

```
src/
  components/
  global/
    app.css
```

全局样式配置将文件路径作为值。此文件的输出将转到buildDir。在此示例中，它将保存到www/build/app.css。

```
globalStyle: 'src/global/app.css'
```

查看有关如何在应用中使用全局样式的样式文档。

## hashFileNames

默认： true

在生产构建期间，将对每个生成的文件的内容进行哈希处理以表示内容，并将哈希值用作文件名。如果内容在两次构建之间未更新，则它将接收相同的文件名。内容更新时，文件名将不同。这样，已部署的应用程序可以“永久缓存”构建目录，并充分利用内容交付网络（CDN）和大量缓存文件来实现更快的应用程序。

```
hashFileNames: true
```

## hashedFileNameLength

默认： 8

当hashFileName配置设置为true，并且是正式版本时，该hashedFileNameLength配置用于确定文件名的哈希应包含多少个字符。

## namespace

默认： App

该namespace配置是一个字符串类型的值代表为应用程序命名空间。对于不打算用作可重用组件库的应用程序，默认值App就很好。但是，如果要将该应用程序用作第三方库（例如Ionic）使用，则需要唯一的名称空间。

```
namespace: "Ionic"
```

## outputTargets

请参阅输出目标文档。

## plugins

请参阅插件文档。

## devServer

请参阅Dev-Server文档。

## preamble

默认： undefined

该preamble配置是字符串类型的值，代表构建主文件中的序言。帮助保留注释或添加有关生成结果的相关信息。

```
preamble: 'Built with Stencil'
```

## srcDir

默认： src

srcDir配置指定了每个组件的源typescript文件所在的目录。模板应用程序的标准是使用src，这是默认值。

```
srcDir: 'src'
```

## taskQueue

默认： congestionAsync

设置stencil运行时使用的任务队列，默认情况下，任务队列调度使用congestionAsync进行跨帧的DOM读写以有效地渲染并减少布局抖动。您还可以尝试每种设置以确定哪种方式最适合您的用例。在一般情况下，如果您的应用程序有许多CPU密集型任务导致主线程被锁定，则建议尝试使用 Web Workers执行这些任务。
1. congestionAsync：DOM读写计划在下一帧进行，以防止布局混乱。当应用程序任务繁重且队列拥塞时，它将把工作分散在多个帧中，以防止阻塞主线程。但是，在某些情况下，尤其是在启动过程中，它也会引入不必要的回流。congestionAsync 非常适合在运行动画的同时还执行可能会锁定主线程逻辑的应用程序。
2. async：DOM读写计划在下一帧中进行，以防止布局混乱。在执行大量CPU任务期间，它不会重新安排在下一帧的时间进行渲染。 async是大多数应用程序的理想选择，如果应用程序执行繁重的任务导致主线程锁定，建议尝试使用Web Workers 而不是拥塞异步队列。
3. immediate：使writeTask()和readTask()回调同步执行。任务没有计划在下一帧中运行，但是请注意至少有一个微任务在执行。immediate对于不提供长时间运行和流畅动画的应用程序，此设置是理想的选择。像异步设置一样，如果应用程序执行繁重的任务导致主线程锁定，建议尝试使用Web Workers。

```
taskQueue: 'async'
```


## testing

请参阅测试配置文档。

## extras

请参阅Extras文档。