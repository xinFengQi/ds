<!--
 * @Date: 2021-01-21 17:50:41
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 17:59:33
-->

# 测试

Stencil中的测试分为两种不同的类型:单元测试和端到端(e2e)测试。这两种类型都使用Jest作为JavaScript测试解决方案。端到端测试的浏览器环境是使用Puppeteer完成的，它提供了许多优点，可以开始将Stencil整合到它的构建中。

## 单元测试与端到端测试

关于如何进行测试以及应将什么视为单元测试，端到端测试甚至集成测试的哲学不计其数。为了简化所有步骤，Stencil对其进行了细分，以便开发人员可以确定何时使用每种类型的测试。

单元测试侧重于单独测试组件的方法。例如，当给一个方法指定参数X时，它应该返回Y。

端到端测试关注的是组件如何在DOM中呈现，以及各个组件如何协同工作。例如，当my-component具有X属性时，子组件就会呈现文本Y，并期望接收事件z。端到端测试使用Puppeteer而不是Node环境。这允许端到端测试在实际的浏览器中运行，以提供更真实的结果。

通过不模糊JavaScript测试和DOM测试之间的界限，可以在大型团队之间快速构建测试。

## 测试命令

以下是npm可以添加到应用package.json文件中的示例脚本。注意，该命令是stencil test，--spec对于单元测试和--e2e端到端测试，带有可选标志。

```
"scripts": {
  "test": "stencil test --spec",
  "test.watch": "stencil test --spec --watch",
  "test.e2e": "stencil test --e2e"
}
```

所有这些配置都包含在Stencil App Starter和Stencil Component Starter中，因此，如果您使用这些模板之一来启动项目，则无需添加任何内容。此处提供此信息主要是出于参考目的。

### 测试配置

Stencil将从它已经收集的数据中应用默认值。例如，Stencil已经知道要查看哪些目录，以及哪些文件是spec和e2e文件。Jest仍然可以使用相同的配置名进行配置，但是现在使用stencil默认配置测试属性。更多信息请参阅测试配置文档。

```
import { Config } from '@stencil/core';

export const config: Config = {
  testing: {
    testPathIgnorePatterns: [...]
  }
};
```

## VS Code中的运行和调试测试

向.vscode/launch添加以下配置。可以使用VS Code Debugger为编辑器中当前活动的文件运行Stencil测试运行程序。只需确保您位于要运行的测试文件中，然后分别选择调试配置（取决于是spec测试还是e2e测试），然后单击执行按钮即可。


```
{
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "E2E Test Current File",
      "cwd": "${workspaceFolder}",
      "program": "${workspaceFolder}/node_modules/.bin/stencil",
      "args": ["test", "--e2e", "${relativeFile}"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Spec Test Current File",
      "cwd": "${workspaceFolder}",
      "program": "${workspaceFolder}/node_modules/.bin/stencil",
      "args": ["test", "--spec", "${relativeFile}"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true
    }
  ]
}
```

## 其他资源

[StencilJS中的单元测试基础](https://www.joshmorony.com/the-basics-of-unit-testing-in-stencil-js/)