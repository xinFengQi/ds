# 产出目标(生成的项目)

编译器更强大的功能之一是能够根据组件的“使用方式”生成各种版本。Stencil能够获取应用程序的源并将其编译为许多目标，例如要部署在http服务器上的webapp，作为要在npm上分发的第三方组件延迟加载库或有效的自定义元素捆绑(lib, bundle)包。默认情况下，Stencil应用程序的输出目标为适合Web应用程序的类型www。


## 输出目标类型：

1. dist-custom-elements-bundle：自定义元素
2. dist：可分发的js库(包)
3. www：网站
4. docs-readme：以markdown格式格式化的文档自述文件
5. docs-json：以JSON格式格式化的文档数据
6. docs-custom：自定义文档生成

例子：

```
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www'
    }
  ]
};
```

## 差异捆绑(打包)

同样要重点注意的是，要注意编译器将自动生成大量的bundle，以支持“差异捆绑”。这意味着在生产构建期间，Stencil将使用相同的源代码可为现代浏览器和旧版浏览器（IE11）生成代码.差异捆绑的优势在于，现代的浏览器可以避免所有的polyfills和消耗性能巨大的旧式JavaScript，并可以使用已经包含在浏览器中的现代API。

在下面的示例中，有两个脚本标签，但是，用户仅会请求其中一个。对于IE11用户，他们会下载app.js这是在文件ES5的语法，并拥有所有polyfills。对于使用现代浏览器的用户，他们将仅下载app.esm.js使用最新JavaScript功能（例如ES模块，动态导入，异步/等待，类等）的文件。

注意：buildEs5必须设置为true才能生成IE11 ES5文件

## 自动生成文档

随着应用程序的组件越来越多，团队规模和成员不断调整，所有组件应该都有良好的文档，文档本身也应该得到维护，这都是很重要的。虽然维护文档是开发人员必须做的一些最无趣的事情之一，但这并不意味着它可以被敷衍了事。

在整个构建过程中，编译器能够从每个组件中提取文档中以JSDocs注释包含的每个成员的类型（感谢TypeScript！）和CSS变量（CSS自定义属性）。

## 组件属性文档示例：

将@Prop()属性添加说明只需在前一行添加评论：

```
/** (optional) The icon to display */
@Prop() iconType = "";
```

## CSS示例：

当您通过css或scss文件中的jsdoc样式注释指定CSS变量时，Stencil也将记录这些CSS变量：

```
 :root {
   /**
    * @prop --primary: Primary header color.
    */
   --primary: blue;
 }
```