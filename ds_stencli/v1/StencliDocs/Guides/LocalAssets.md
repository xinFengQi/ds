<!--
 * @Date: 2021-01-21 10:30:35
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 10:37:56
-->
# 本地静态资源

组件通常需要静态资源，例如图像，视频或任何类型的数据文件，Stencil包含某些功能使此任务变得容易。

## 组件的静态资源路径

让我们来看看如何使用本地静态资源的示例：

以下是组件的文件夹结构示例，其中包含组件，样式表和资源目录。

```
src/
  components/
    stencil-asset/
      assets/
        sunset.jpg
        beach.jpg
      stencil-asset.css
      stencil-asset.tsx
```

下面的stencil-asset.tsx文件将根据名为src的属性正确加载资源。

```
import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'stencil-asset',
  styleUrl: 'stencil-asset.css',
  assetsDirs: ['assets']
})
export class StencilAsset {

  @Prop() image = "sunset.jpg";

  render() {
   return <img src={getAssetPath(`./assets/${this.image}`)} />
  }
}
```

从该示例中可以看到，组件装饰器具有指向./assets文件夹的属性assetsDirs，它指示Stencil编译器将该文件夹复制到分发文件夹（dist或www）中。

然后，在组件的逻辑内，getAssetPath函数(从@stencil/core导入)用于确定从中加载资源的绝对路径。

## 用例

我们提出了一些用例：

1. 从SVG集合加载
2. 按需加载和应用字体
3. 加载图像或视频
