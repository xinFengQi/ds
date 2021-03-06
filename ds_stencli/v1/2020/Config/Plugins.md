# 插件

## Stencli插件

默认情况下，Stencil不附带Sass或者PostCss支持。但是，可以使用该plugins配置数组添加其中任何一个。

```
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  plugins: [
    sass()
  ]
};
```

## Rollup 插件

该rollupPlugins配置可用于添加您自己的Rollup插件。在源码中，tencil附带了一些内置插件，包括node-resolve和commonjs，因为Rollup插件的执行顺序很重要，所以stencil提供了一个API，可以在node-resolve之前和commonjs转换之后注入自定义插件：

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

## 相关插件

1. @stencil/less
2. @stencil/postcss
3. @stencil/sass
4. @stencil/stylus

## Node Polyfills

有关其他示例，请参见模块构建打包中的Node Polyfills。