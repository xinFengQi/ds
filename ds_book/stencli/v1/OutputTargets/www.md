# Webapp输出目标： www

www输出目标类型是面向web应用和网站的，托管在http服务器上，它可以通过预渲染和service workers使用，就像你正在阅读的这个网站。如果没有提供outputTarget配置，它将默认只有www类型。

即使项目仅打算构建可重用的组件库，www输出目标对于在整个开发过程中构建和测试组件也很有用。

```
outputTargets: [
  {
    type: 'www'
  }
]
```

## 配置


|   属性     |                 描述 |                   默认值 | 
| :----:       | :----:              | :----:                    |
|baseUrl |  baseUrl表示要提供服务的站点的“基础”url。例如，该站点的基本url是https://dongfubao.gitee.io/ct/。但是，如果整个站点的输出放置在一个子目录中，那么该目录的路径应该是baseUrl。例如，此翻译文档是一个独立的文档站点，位于https://dongfubao.gitee.io/ct/内的/Stencli目录中。在本例中，于https://dongfubao.gitee.io/ct/Stencli/将是基础url。   | / | 
|buildDir | buildDir是Stencli生成脚本的目录，比如组件文件。对于生产版本，该目录将包含每个组件的es5和esm版本。(别担心，用户只请求浏览器需要的一个。)    | build | 
|dir |   dir配置指定web分发目录。这个目录通常是要提供静态文件应用程序的根目录。这个目录是直接从源文件构建和重新构建的。同时，由于这是一个构建目标，所有文件都将在每次构建后被删除并重新构建，因此最好总是将源文件复制到这个目录中。建议不要将该目录提交给存储库。  | www | 
| empty|  默认情况下，在每次构建之前，dir目录将清空所有文件。但是，为了防止该目录被清空，可以将此值更改为false。   | true | 
|indexHtml |  indexHtml属性表示根索引html文件的位置。   | index.html | 
|serviceWorker |  serviceWorker配置可让您自定义由Stencil编译器自动生成的service worker。要覆盖Stencil的默认值，请设置Workbox文档中列出的配置项。   |  | 
