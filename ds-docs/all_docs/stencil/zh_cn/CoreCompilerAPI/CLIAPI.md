<!--
 * @Date: 2021-01-21 15:45:27
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 15:57:06
-->
# stencil脚手架核心API

CLI API可以在@stencil/core/ CLI找到，并通过bin/stencil运行

## createNodeLogger()

```
createNodeLogger(process: any): Logger
```
基于NodeJS API创建一个“日志”，该日志将由编译器和dev-server使用。默认情况下，CLI使用此方法创建NodeJS日志。应该将NodeJS“进程”对象作为第一个参数提供。

## createNodeSystem()

```
createNodeSystem(process: any): CompilerSystem
```

根据编译器使用的NodeJS api创建“系统”。这包括使用NodeJS的所有文件系统读写操作。编译器本身不知道Node的fs模块和其他系统api，例如使用crypto进行加密算法操作。NodeJS的“process(进程)”对象应该作为第一个参数提供。


## parseFlags()

```
parseFlags(args: string[]): ConfigFlags
```

CLI用来将命令行参数解析为类型化的ConfigFlags对象。这是内部使用方式的一个示例：parseFlags(process.argv.slice(2))。

## run()

```
run(init: CliInitOptions): Promise<void>
```

使用给定的选项运行CLI。这是Stencil的默认bin/stencil文件使用的，但也可以在外部使用。

## runTask()

```
runTask(process: any, config: Config, task: TaskCommand): Promise<void>
```

运行给定NodeJS process，Stencilconfig和task命令的单个任务。