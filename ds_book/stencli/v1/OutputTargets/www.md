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
|buildDir |     | build | 
|dir |     | build | 
|indexHtml |     | build | 
|serviceWorker |     | build | 
