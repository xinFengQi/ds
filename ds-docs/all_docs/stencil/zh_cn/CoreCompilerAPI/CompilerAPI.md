<!--
 * @Date: 2021-01-21 15:11:41
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 15:58:03
-->
# stencil编译器的核心API

以在 @stencil/core/compiler/stencil.js找到编译器API。该模块可以在NodeJS环境，Web Worker和浏览器窗口中工作。
stencil.min.js在浏览器中使用该文件时，也会提供并推荐该文件。

```
// NodeJS (commonjs)
const stencil = require('@stencil/core/compiler');

// Web Worker from CDN URL (add the version to in the URL)
importScripts('https://cdn.jsdelivr.net/npm/@stencil/core@[VERSION]/compiler/stencil.min.js');
// self.stencil will be available after the script import

// Browser Window
<script src="https://cdn.jsdelivr.net/npm/@stencil/core@[VERSION]/compiler/stencil.min.js"></script>
// window.stencil will be available after the script executes
```

## transpile()

```
transpile(code: string, opts?: TranspileOptions): Promise<TranspileResults>
```

transpile()函数将源代码以字符串形式作为第一个参数,第二个参数中包含各种选项.该函数是无状态的,并返回一个Promise的结果,包括诊断和已编译的代码。该transpile()函数不处理任何打包,压缩或预编译任何CSS，比如Sass或Less。

transpileSync()是同样可用的，同时有着同样的功能,可以同步调用。但是TypeScript必须在全局中已经被加载后才能被正常工作，因为异步transpile()函数将自动加载TypeScript。

由于使用了TypeScript，源代码将从TypeScript转换为JavaScript，不需要Babel预设。此外，结果还包括一个导入数组，其中包含在源文件中找到的所有导入路径。transpile选项可以用来设置模块格式，比如cjs，以及JavaScript的目标版本，比如es2017。


## transpileSync()

```
transpileSync(code: string, opts?: TranspileOptions): TranspileResults
```

transpile()功能的同步等效项。在浏览器环境中使用时，TypeScript必须已经全局可用，因为异步 transpile()功能将自动加载TypeScript。


## createCompiler()

```
createCompiler(config: Config): Promise<Compiler>
```

编译器是一种实用工具，它汇集了许多工具来构建优化的组件，比如编译器、打包工具和压缩工具。在使用CLI时，stencil构建命令为各种构建(例如生产构建)或开发期间的Debug模式使用编译器。如果只有一个文件需要被编译(将源代码从TypeScript转换为JavaScript)，那么应该使用transpile()函数。

给定Stencil配置，此方法异步返回一个编译器实例。所提供的配置应该已经使用loadConfig({…})方法创建。

下面是一个运行完整构建的NodeJS环境示例。

```
import { createNodeLogger, createNodeSystem } from '@stencil/core/cli';
import { createCompiler, loadConfig } from '@stencil/core/compiler';

const logger = createNodeLogger(process);
const sys = createNodeSystem(process);
const validated = await loadConfig({
  logger,
  sys,
  config: {
    /* user config */
  },
});
const compiler = await createCompiler(validated.config);
const results = await compiler.build();
```

## createSystem()

```
createSystem(): CompilerSystem
```

编译器使用CompilerSystem实例来访问所有文件系统读取和写入。当从CLI使用时，CLI将提供基于NodeJS自己的系统。此方法提供了仅在内存中且独立于任何平台的编译器系统。


## 依赖关系

```
dependencies: CompilerDependency[]
```

ependencies数组仅用于提供信息，用于说明编译器所构建和使用的依赖项版本。例如，此处列出了用于此版本Stencil的TypeScript，Rollup和Terser版本。

## loadConfig()

```
loadConfig(init?: LoadConfigInit): Promise<LoadConfigResults>
```

loadConfig(init)方法用于获取原始配置信息，并将其转换为编译器和开发服务器可用的配置对象。该init参数应给予一个已经创建的系统和日志记录器也可通过编译器使用。

## optimizeCss()

```
optimizeCss(cssInput?: OptimizeCssInput): Promise<OptimizeCssOutput>
```

编译器用来优化CSS的实用函数。

## optimizeJs()

```
optimizeJs(jsInput?: OptimizeJsInput): Promise
```

编译器用来优化JavaScript的实用函数。了解JavaScript目标将进一步应用压缩优化，而不是普通意义上的压缩。

## path

```
path: PlatformPath
```

NodeJS提供的pathAPI功能，但能够在任何环境中运行。此pathAPI仅是POSIX版本：[https : //nodejs.org/api/path.html](https://nodejs.org/api/path.html)


## version(版本)

```
version: string
```

@stencil/core的最新版本。