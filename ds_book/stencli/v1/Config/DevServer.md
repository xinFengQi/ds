# 集成开发服务器

Stencil带有集成的开发服务器以简化开发。通过集成构建过程和，Stencil能够大大改善开发体验，而无需复杂的构建脚本和配置。随着应用程序构建和重新构建的进行，编译器能够与开发服务器进行通信，反之亦然。

## 热模块替换

编译器已经提供了观察模式与开发服务器配合使用，它可以更进一步，只重新加载浏览器中已更改的内容。Hot Module Replacement（热模块替换）允许应用程序在浏览器中保持其状态，同时在保存代码文件后以其更新的逻辑视图切换各个组件。

## 样式替换

Web组件可以自带自己的css，可以使用shadow dom，也可以有单独的样式标签(&lt;style>&lt;/style>)。传统上，实时加载的外部css链接通常可以做到这一点，但是，在shadow roots中使用内联样式更新组件是一个挑战。通过集成的开发服务器，Stencil能够动态更新所有组件的样式而不需要刷新页面，无论它们是否使用shadow dom。

## 开发错误

如果在开发过程中发生错误（例如，使用无效语法解析错误），Stencil不仅会在控制台中记录错误和错误源，还会在应用程序上覆盖该错误，以便于阅读。

## 在编辑器中打开

当显示的开发错误在浏览器中覆盖项目时，可单击指向源文本的行号，这可以直接在IDE中打开源文件。

## 开发服务器配置

|   属性     |                 描述 |                   默认值 | 
| :----:       | :----:              | :----:                    |
| address |  开发服务器使用的IP地址。默认值为0.0.0.0，它指向本地计算机上的所有IPv4地址，例如localhost  | 0.0.0.0 | 
| basePath |  	服务器要使用的基本路径。默认为根路径名。| / |
| https |  		默认情况下，开发服务器通过http协议运行。相反，您可以通过提供自己的SSL证书和密钥在https上运行它（请参见下面的示例）。| false |
| initialLoadUrl |  	开发服务器应首先打开的URL。| / |
| logRequests |  对服务器的每个请求都将记录在终端中。| false |
| openBrowser |  默认情况下，启动开发服务器时，将在默认浏览器中打开本地开发URL。但是，为防止打开此URL，请将此值更改为false。| true |
| reloadStrategy |  查看和更新文件时，默认情况下，开发服务器将使用hmr（热模块替换）来更新页面，而不刷新整个页面。要使页面完全刷新使用pageReload。要禁用任何重新加载，请使用null。| hmr |
| port |  	设置服务器的端口。 | 3333 |

例子：

```
import { readFileSync } from 'fs';
import { Config } from '@stencil/core';

export const config: Config = {
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
    https: {
      cert: readFileSync('cert.pem', 'utf8'),
      key: readFileSync('key.pem', 'utf8')
    }
  }
};
```