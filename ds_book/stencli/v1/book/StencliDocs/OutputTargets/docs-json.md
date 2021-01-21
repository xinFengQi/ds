<!--
 * @Date: 2021-01-20 11:08:05
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-20 11:22:28
-->
# 文档json数据

虽然使用markdown格式自动生成的readme文件很方便，但在某些情况下，最好以json数据的形式获取所有文档。要将文档构建为json，请使用——docs-json标志，然后是json文件的写入路径。

```
  scripts: {
    "docs.data": "stencil build --docs-json path/to/docs.json"
  }
```

另一个选择是将docs-json输出目标添加到中stencil.config.ts，以便在每次构建时自动生成此文件：

```
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    { type: 'docs-json' }
  ]
};
```

查看typescript的JSON输出:[https://github.com/ionic-team/stencil/blob/master/src/declarations/stencil-public-docs.ts](https://github.com/ionic-team/stencil/blob/master/src/declarations/stencil-public-docs.ts)

## CSS变量

当您通过css / scss文件中的jsdoc样式注释指定CSS变量时，Stencil还将记录这些CSS变量：

```
/**
 * @prop --background: Background of the button
 * @prop --background-activated: Background of the button when activated
 * @prop --background-focused: Background of the button when focused
 */
```

## 插槽(slot)

可以通过在组件装饰器上方的文档注释中添加@slot标记来记录插槽。
```
/**
 * @slot slotName - slotDescription
 * @slot buttonContent - Slot for the content of the button
 */
```

## 用法说明文件

组件的usage子目录中的.md文件的内容将被添加到生成的json的usage属性中。

```
src/
  components/
    my-component/
      usage/
        usage-example.md
        another-example.md
      my-component.css
      my-component.tsx
```


## 自定义JSDocs标签

除了读取预定义的JSDoc标签外，用户还可以提供自己的自定义标签，这些标签也将包含在JSON数据中。这使团队更容易提供自己的文档和约定以在JSON数据内构建。例如，如果我们在源代码中添加如下注释：

```
/**
 * @myDocTag someName - some value
 * @myOtherDocTag someOtherName - some other name
 */
```
它最终将像这样在JSON数据中显示：

```
"docsTags": [
  {
    "text": "someName - some value",
    "name": "myDocTag"
  },
  {
    "text": "someOtherName - some other name",
    "name": "myOtherDocTag"
  }
],
```