# 可以分发的输出目标

dist类型会将组件生成为一个可重用的库，可以自动延迟加载，比如Ionic。创建发行版时，项目的package.json也必须更新。同时，生成的包是可摇树优化的，确保只有导入的组件才会在构建中加载。

```
outputTargets: [
  {
    type: 'dist'
  }
]
```

## 这与“ dist-custom-elements-bundle”输出目标有何不同？

首先，Stencil被设计为仅在页面上实际使用组件时才延迟加载自身。这种方法有很多好处，例如，只需向任何页面添加一个脚本标签就可以使用整个库，但只有实际使用的组件是被下载的。例如，@ionic/core包含超过100个组件，但一个网页可能只需要ion-toggle。dist输出目标不需要请求整个组件库，也不需要为ion-toggle生成定制包，它可以生成一个很小的加载清单以便按需加载它的任何组件。

另一方面，disti-custom-elements-bundle是直接构建HTMLElement扩展的定制元素，没有任何延迟加载。自定义元素包不应用polyfill，也不自动定义每个定制元素(自定义web组件)。对于那些处理打包、延迟加载和定义自定义元素本身的项目来说，这可能是首选。

幸运的是，两个构建都可以同时生成，并以相同的发行版本交付。由组件库的使用者决定要使用哪个内部版本。

## 配置


|   属性     |                 描述 |                   默认值 | 
| :----:       | :----:              | :----:                    |
|dir | dir配置指定了公共分发目录。这个目录通常是在npm包中能找到的dist目录。这个目录是直接从源文件构建和重新构建的。此外，由于这是一个构建目标，所有文件都将在每次构建后被删除并重新构建，因此最好总是将源文件复制到这个目录中。同时不要将该目录提交给存储库。    | dist | 
|empty | 默认情况下，在每次构建之前，该dir目录将清空所有文件。但是，为防止清空此目录，请将此值更改为false。    | true | 

## 发布

接下来，您可以将库发布到Node Package Manager（NPM）。有关设置package.json文件和发布的更多信息，请参见：将组件库发布到NPM。


## 发布选项

每个输出目标，打包形式和分发形式各有其优缺点。幸运的是，您只需要担心为组件编写一些好的源代码，而Stencil将处理生成各种打包项目代码的过程，并且库的使用者可以决定如何将组件应用于其外部项目。以下是一些选项。

### Script 标签

使用一个script标签链接到你发布的NPM模块的CDN副本上，例如:
&lt;script type="module" src='https://cdn.jsdelivr.net/npm/my-name@0.0.1/dist/myname.js'>&lt;/script>。
初始脚本本身非常小,它只是一个很小的注册表,并不代表整个库。
您可以在该网页的任何位置使用库中的任何组件。
不管实际的组件是用HTML编写的，还是用普通的JavaScript、jQuery、React等创建的。
只有页面上使用的组件才会被请求和延迟加载。

### 使用打包工具导入dist

运行npm install my-name——save
在根组件中添加一个导入: import my-component;
stencil将自动为stencil库设置延迟加载功能。
然后，您可以在模板、JSX、html等的任何地方使用该元素

## 将dist导入到另一个stencil应用程序中

运行npm install my-name——save
在根组件中添加一个导入: import my-component;
stencil将自动为stencil库设置延迟加载功能。
然后，您可以在模板、JSX、html等的任何地方使用该元素