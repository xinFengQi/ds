<!--
 * @Date: 2021-01-15 09:59:48
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-20 11:04:51
-->
# 自动生成Readme.md文件

stencil能够自动生成readme.md文件。这是一个可选择的功能，它可以将readme.md文件保存在组件的同一根目录下。使用此功能后，其他人可以轻松地找到和阅读有关一个组件的规格文档，特别的是。md文件被放置在Github上的目录中，它将默认readme.md文件作为页面的主要内容.

要自动生成readme.md文件，请将docs-readme输出目标添加到您的stencil.config.ts：

```
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    { type: 'docs-readme' }
  ]
};
```

另一种选择是添加标志--docs-readme，例如：

```
stencil build --docs-readme
```

## 为自动生成的文件添加自定义标记
生成readme.md文件后，您可以自定义它与您自己的markdown内容。只需在以下注释上方添加您自己的markdown即可：

```
<!-- Auto Generated Below -->.
```

## 自定义页脚

可以通过向footer输出目标添加属性来删除或自定义页脚。如果需要，可以使用Markdown来增强页脚。

```
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    { 
      type: 'docs-readme',
      footer: '*Built with love!*',
    }
  ]
};
```

## 生成目录

默认情况下，将在相应的组件目录中生成自述文件。可以通过输出目标配置的dir属性更改此行为。指定一个目录将创建{dir}/{component}/readme.md结构。

```
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    { 
      type: 'docs-readme',
      dir: 'output'
    }
  ]
};
```

## 严格模式

在输出目标配置中添加strict: true将导致Stencil在构建项目时缺少文档时输出警告。

```
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    { 
      type: 'docs-readme',
      strict: true
    }
  ]
};
```