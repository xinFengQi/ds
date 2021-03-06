<!--
 * @Date: 2021-01-21 12:01:43
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 12:14:39
-->

# Deno运行时

实验性项目: 对于Deno以及Stencil将如何使用它，还为时过早，因此我们将其标记为实验性项目。

传统上，Stencil和当今许多用于Web生态系统的CLI在Node之上运行。但是，Stencil编译器并不仅限于Node环境，还可以从任何JavaScript运行时执行，例如浏览器主线程，Web worker线程或最新的JS运行时Deno！Deno是使用V8并内置于Rust的JavaScript和TypeScript的简单，现代且安全的运行时。

1. Deno 安装
2. Deno手册
3. Deno运行时API

Stencil的体系结构允许它被传递一个与运行时交互的系统(sys)。例如，Node的fs将使用readdir()，并且必须传递回调函数，而Deno使用readDir()(大写字母D)并返回一个promise。同样的概念也适用于浏览器和web worker系统，这允许编译器在任何JS运行时都保持通用和通用。

## 安装Deno Stencil CLI

Stencil编译器及其命令行界面（CLI）也可以用Deno执行，但其工作方式与传统的Node CLI不同。最大的区别是Deno没有集中式的包管理器，因此Deno没有npm等效的包管理器。

于Deno，没有npm install命令，而是指定要安装的可执行脚本的外部URL。安装Deno之后，运行以下命令：

```
deno install -n stencil --allow-read --allow-write --allow-net https://stenciljs.com/cli.ts
```

让我们进一步解释一下此命令的作用：


|   命令/参数     |     描述 |   
| :----:          | :----:   | 
| deno            |Deno命令已经安装 。    | 
| install         |  安装程序脚本参数。| 
| -n              | 您将在安装时赋予可执行文件的名称。| 
| stencil         | stencil 是此示例中可执行文件的名称，但可以根据您的需要进行自定义。| 
| --allow-read    |CLI将需要访问文件，因此此选项允许它读取本地文件。| 
| --allow-write   |	CLI也将需要写入文件。| 
| --allow-net     |CLI将需要访问网络以安装依赖项。| 
| https://stenciljs.com/cli.ts     | Stencli的Deno安装程序的位置。  | 

不要担心，这个命令不需要在每次运行带有Deno的Stencil时都运行，相反，它只是安装它，并给您的机器提供可执行名称Stencil。在安装过程中，您将看到其他脚本文件来自何处，在我们的例子中是https://cdn.jsdelivr.net/npm/。

安装后，您便可以使用全局stencil命令了，可以通过运行CLI的help命令对其进行测试：

```
stencil help
```

## 更新Deno Stencil CLI

要更新已安装的Deno Stencil CLI，请添加-f选项以“强制”覆盖现有可执行文件并重新安装最新的可执行文件。

```
deno install -n stencil --allow-read --allow-write --allow-net -f https://stenciljs.com/cli.ts
```

## 运行Deno Stencil CLI

成功运行安装stencil程序脚本之后，可以使用与Node CLI相同的选项来使用可执行文件。请参阅CLI文档以获取所有可用选项或运行stencil help。

即使stencil现在是一个全局可执行文件，它的目标仍然是运行每个应用程序的本地stencil版本。所安装的命令只是一个条目，但它并没有被锁定到特定的编译器版本中。当运行stencil命令时，它会使用本地安装的install stencil编译器，如果还没有安装，它会动态加载最新的stencil版本。

Deno CLI还处于实验阶段，还没有移植generate命令。