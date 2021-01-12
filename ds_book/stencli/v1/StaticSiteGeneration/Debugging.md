# 对静态站点生成进行调试

静态网站生成（也称为预渲染）是在构建时执行组件，以生成渲染样式和标签的快照，以便在首次请求时将其有效地提供给搜索引擎和用户。

由于此步骤在Node.js进程而不是浏览器中运行，因此无法直接在浏览器中进行调试。但是，使用现有的Node.js调试技术进行调试很简单。

## 总览

该stencil build --prerender命令将首先为NodeJS环境构建hydrate脚本，然后使用该脚本来预渲染站点。对于生产版本，这可能是理想的。

但是，在调试时，您可能不需要继续重建hydrate脚本，而只需要在预渲染过程中进行调试。Stencli会在dist/hydrate其中创建一个文件，用于实际执行组件。

仅仅只需要预渲染（避免重建），可以使用stencil prerender dist/hydrate/index.js命令，并将脚本路径作为标志。

## 预渲染调试的技巧

默认情况下，预渲染将从渲染首页开始，在首页中查找链接，并在找到更多链接时继续对整个网站进行爬取。在调试时，不爬网站点中的每个URL而是只预渲染一个页面可能会更容易和快捷。要禁用爬取url，请设置预渲染配置中的crawlUrls: false。

接下来，您可以使用entryUrls配置来提供要渲染的路径数组，而不是从首页开始。

另外，在预渲染时会压缩运行时中打印的控制台日志（否则终端将被日志超载）。通过设置runtimeLogging: true，将在终端中打印运行时控制台日志。以下是用于预渲染调试的示例设置：

```
// prerender.config.ts
import { PrerenderConfig } from '@stencil/core';
export const config: PrerenderConfig = {
  crawlUrls: false,
  entryUrls: ['/example'],
  hydrateOptions: _url => {
    return {
      runtimeLogging: true
    };
  }
};
```

## VS代码中的调试

我们发现VS Code的调试器设置断点并逐步执行预渲染过程是最简单方法。

要在VS Code中调试预渲染过程，请进入“调试(Debug)”选项卡并创建一个launch.json包含以下内容的新文件：

```
// launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Prerender",
      "args": [
        "${workspaceFolder}/node_modules/@stencil/core/bin/stencil",
        "prerender",
        "${workspaceFolder}/dist/hydrate/index.js",
        "--max-workers=0",
        "--config=${workspaceFolder}/stencil.config.ts"
      ],
      "protocol": "inspector",
    }
  ]
}
```

这会为对应用程序进行hydrates 处理的脚本来创建新的调试配置。我们将启动stencil prerender命令，并为其提供可找到hydration脚本的路径。接下来，我们在使用--max-workers=0，这样我们不会在您的每个CPU上派生许多进程，不然将使调试变得困难。

## 其他调试

要在不同的工具中进行调试，请对VS Code配置中运行的命令采用类似的方法，从Node调用dist/hydrate/index.js脚本，提供传递的参数，并使用所选工具的系统为脚本设置断点。

## 断点和步进

要在预渲染期间调试组件，请在中找到组件的转译源dist/hydrate/index.js并设置断点（或在原始组件源中对原始语句使用debugger）。在预渲染过程运行时，将命中您的断点，并可以评估当前堆栈上下文。