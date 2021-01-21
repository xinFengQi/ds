<!--
 * @Date: 2021-01-20 15:36:29
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-20 16:49:35
-->
# Web Workers

Web Worker是一项受广泛支持的技术（Chrome，Firefox，Safari，Edge和IE11），它允许JavaScript在不同的线程中执行，从而最大程度地利用多个CPU；并且最重要的是不阻塞主线程。

主线程是Javascript默认运行的地方,具有访问document，window和其他的DOM API。问题在于，长时间运行的JS会阻止浏览器运行平滑的动画（CSS动画，过渡，canvas，svg ...），从而使您的网站存在的卡断。这就是为什么如果您的应用程序需要运行CPU密集型任务，Web Workers是一个很大的帮助。

## 何时使用Web Workers?

首先要了解的是何时使用Web Worker，何时不使用Web Worker，因为它们带有一系列成本和限制：

1. 无法访问DOM。这意味着你不能与document，window或网页中的任何元素互动。
2. 无法访问任何@stencil/core的API。例如，您无法在Web Worker中声明和使用组件，原因与无法访问DOM相同。
3. Web Worker具有其自己的隔离状态，因为每个worker具有各自的内存空间。例如，在主线程上声明的变量不能直接在工作线程中引用。
4. 在工作线程和主线程之间传递数据时会产生开销。通常，最好将往返于Web Worker的数据量减至最少，并注意发送数据的工作是否比在主线程上直接运行花费更多的时间。
5. 通信总是异步的。幸运的是，promise和async/await让这变得相对容易，但重要的是要理解线程之间的通信总是异步的。
5. 只能传递实现结构化克隆算法的原语和对象。最好的理解是，任何可以序列化为JSON的数据都是安全的。

简而言之，使用工作程序将线程阻塞（或UI阻塞，防止用户与页面交互）的逻辑移动到Web Worker中通常是一个好主意，例如实时代码语法高亮显示。


## 使用Web Workers的最佳实践

1. 在web Workers中使用纯函数算法。(input1, input2) => output。web Workers逻辑本身可以非常复杂，但是输入和输出数据应保持相当简单。
2. 寻找减少主线程和工作线程之间传递数据的方法。
3. 类实例不能作为数据传递。相反，只有可以JSON序列化的数据可以被传递。
4. 最小化工作程序中的状态，更好的是完全避免保持任何状态（例如，不要将redux放在工作程序中）。
5. web Workers的成本应该很容易摊销，因为它会做一些占用大量CPU的工作。

## 普通的Web Workers如何“工作”?

浏览器带有一个WorkerAPI，该API的工作方式如下：

```
const worker = new Worker('/my-worker.js');
worker.postMessage(['send message to worker']);
worker.onmessage = (ev) => {
  console.log('data from worker', ev.data);
};
```
该API功能强大，但级别很低，并且编写复杂的应用程序很繁琐，因为事件驱动的工作方式很容易导致[意大利面条式代码(spaghetti-code)](https://en.wikipedia.org/wiki/Spaghetti_code)，并且很容易会漏掉强类型的函数和数据。


有关更多信息，请查看我们的朋友在HTML5Rocks上的[精彩教程](https://www.html5rocks.com/en/tutorials/workers/basics/)。

Web Worker还需要生成一个单独的JavaScript包，比如上面示例中的my-worker.js文件。这意味着您通常需要额外的构建脚本和工具，将worker入口点编译并打包到另一个.js文件中。此外，主包必须能够引用工作包的文件位置，在编译、绑定、缩小、文件名哈希和部署到生产服务器等待，这常常是一个挑战。

 幸运的是，Stencil可以帮助您解决以下两个问题：
 1. 工具: 编译，打包，哈希命名，工作程序包的url路径引用;
 2. 通信: 将基于事件的通信转换为Promises，同时保持类型引用;

 ## Stencli中的Web Workers

正如我们已经提到的，Stencil的编译器可以帮助您在生产中无缝地使用Web Workers。src目录中以.worker.ts结尾的所有TypeScript文件将自动使用Web Workers。例如:

<b><p>src/stuff.worker.ts:</p></b>

```
export const sum = async (a: number, b: number) => {
  return a + b;
}

export const expensiveTask = async (buffer: ArrayBuffer) => {
  for (let i = 0; i < buffer.length; i++) {
    // do a lot of processing
  }
  return buffer;
};
```

<b><p>src/my-app/my-app.tsx:</p></b>

```
import { Component } from '@stencil/core';

// 直接导入worker.
// Stencil将自动传教
// 在一个worker中运行模块。
//  ide和TypeScript会处理这个导入
// 与其他ESM模块导入没有区别。
import { sum, expensiveTask } from '../../stuff.worker';

@Component({
  tag: 'my-cmp'
}
export class MyApp {

  async componentWillLoad() {
      // sum()将在worker中运行,结果就是一个Promise<number>
    const result = await sum(1, 2);
    console.log(result); // 3

    // expensiveTask()不会阻塞主线程，
    //因为它在worker中并行运行。
    //注意函数必须是异步的。
    const newBuffer = await expensiveTask(buffer);
    console.log(newBuffer);
  }
}
```

在底层，Stencil编译一个worker文件，并使用标准的new worker () API来实例化这个worker。然后，它为每个导出函数创建代理，这样开发人员就可以使用结构化编程构造(而不是基于事件的构造)与它进行交互。

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
Worker已经被放置在不同的模块中，并使用new Worker()动态加载。你应该避免使用dynamic import()来加载它们，因为这会导致两个网络请求。相反，使用ES模块导入，因为它只导入用于与worker通信的代理。
</div>

### 在worker中导入

在worker中导入ESM模块是正常的，在底层，编译器将worker的所有依赖打包到一个单独的文件中，该文件成为worker的入口点，一个无依赖的文件，可以毫无问题地运行。

<b><p>src/loader.worker.ts：:</p></b>

```
import upngjs from 'upng-js';
import { Images } from './materials';

export const loadTexture = async (imagesSrcs: Images) => {
  const images = await Promise.all(
    imagesSrcs.map(loadOriginalImage)
  );
  return images;
}

async function loadOriginalImage(src: string) {
  const res = await fetch(src);
  const png = upngjs.decode(await res.arrayBuffer());
  return png;
}
```

在这个例子中，我们正在构建一个名为loader.worker的工作器。它导入了一个NPM依赖(upngjs，用于解析png文件)和一个本地模块(./materials)。Stencil将使用Rollup来打包所有依赖项，并在运行时删除所有导入。请注意，如果在worker内部和外部导入代码，代码将被复制。

#### 动态导入

为了在worker中动态加载脚本，Web worker提供了一个方便的API, importScript()。

下面是一个如何使用importScript()从CDN直接使用typescript的例子。

```
importScripts("https://cdn.jsdelivr.net/npm/typescript@latest/lib/typescript.js");
```

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
不要使用importScript()导入使用NPM或yarn安装的NPM依赖项。像往常一样使用正常的ES模块导入，这样打包工具就可以理解它。
</div>

### Worker回调

在大多数情况下，我们只需要等待Promise解析输出数据即可。但是，原生Promises的局限性在于它仅提供一个返回值。传统回调仍然大放异彩的地方是，可以使用不同的数据多次调用它。

假设我们有一个长期运行的过程，可能需要几秒钟才能完成，使用Promise我们无法定期接收任务的进度，因为我们所能做的就是等待Promise解决。

Stencil的worker的一个功能是能够将回调传递给方法，并且在worker内，可以在任务解决之前根据需要执行尽可能多的回调。

在下面的示例中，为任务分配了一个数字，该数字从提供的数字开始递减，并且在到达时任务完成0。但是，在递减计数期间，主线程仍将每秒接收一次更新。此示例将从中控制台日志5到0

<b><p>src/loader.worker.ts：:</p></b>

```
export const countDown = (num: number, progress: (p: number) => void) => {
  return new Promise(resolve => {
    const tmr = setInterval(() => {
      num--;
      if (num > 0) {
        progress(num);
      } else {
        clearInterval(tmr);
        resolve(num);
      }
    }, 1000);
  });
};
```

<b><p>src/my-app/my-app.tsx:</p></b>

```
import { Component } from '@stencil/core';
import { countDown } from '../countdown.worker';

@Component({
  tag: 'my-cmp'
}
export class MyApp {

  componentWillLoad() {
    const startNum = 5;
    console.log('start', startNum);

    countDown(startNum, (p) => {
      console.log('progress', p);
    }).then(result => {
      console.log('finish', result);
    });
  }
}
```
执行后，结果将花费5秒钟并记录：

start 5
progress 4
progress 3
progress 2
progress 1
finish 0

## 高级案例

有时还是有可能使用实际的Worker实例，因为需要手动的使用postMessage()和onmessage。但是在打包worker程序，主程序包正确引用工具程序包的url路径仍然是一个巨大的挑战。在这种情况下，Stencil还有一个API可以直接公开worker，这样它就可以代替前面提到的代理。

对于直接工作者引用，请在ESM导入的末尾添加?worker。这个虚拟ES模块将导出:

1. worker：实际的Worker实例。
2. workerPath：Worker入口点的路径（通常是.js文件的路径）。
3. workerName：Worker程序的名称，可用于调试目的。

<b><p>src/my-app/my-app.tsx：:</p></b>

```
import { Component } from '@stencil/core';
import { sum } from '../../stuff.worker';

// Using the ?worker query, allows to access the worker instance directly.
import { worker } from '../../stuff.worker.ts?worker';

@Component({
  tag: 'my-cmp'
}
export class MyApp {

  componentWillLoad() {
    // Use worker api directly
    worker.postMessage(['send data manually']);

    // Use the proxy
    const result = await sum(1, 2);
    console.log(result); // 3
  }
}
```

您甚至可以使用此功能手动创建多个Worker:

```
import { workerPath } from '../../stuff.worker.ts?worker';

const workerPool = [
  new Worker(workerPath),
  new Worker(workerPath),
  new Worker(workerPath),
  new Worker(workerPath),
];
```

在此示例中，我们仅利用编译器执行的打包功能获取worker的入口点workerPath，然后手动创建workerPool。

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
如果一个worker未被使用，Stencil将不会实例化它，它利用摇树优化来做这件事。
</div>

### WORKER终止

可以使用Worker.terminate()API终止任何Web Worker，但是由于Stencil创建了一个在所有代理方法之间共享的worker，因此不建议手动终止它。如果您有使用terminate和重建Worker的用例，则建议workerPath直接使用和创建一个新Worker：

```
import { workerPath } from '../../stuff.worker.ts?worker';
const worker = new Worker(workerPath);
// ...
worker.terminate()
```