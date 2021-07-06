# 组件装饰器

每个Stencli组件都必须使用@stencil/core包中的@Component()装饰器来装饰。在最简单的情况下，开发人员必须为组件提供一个HTML标记名。通常，还会使用styleUrl，甚至是styleUrls，可以为不同的应用程序模式/主题提供多个不同的样式表。 

为styleUrl(s)写入.css文件的相对url。

```
import { Component } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css'
})
export class TodoList {

}
```

## 组件参数

在@Component(opts: ComponentOptions)需要包含所有组件级特征的所需的对象。该tag名称是唯一必需的属性，但也有很多其他选项：

```
export interface ComponentOptions {
  /**
   *  web组件的标签名称。理想情况下，标签名必须是全局唯一的，
   *  所以建议为同一个集合中的所有组件选择一个唯一的前缀。
   *
   *  此外，标签名称必须包含一个'-'
   */
  tag: string;

  /**
   * 如果为' true '，组件将使用限定作用域的样式表。类似于shadow-dom,
   * 但是默认没有隔离. 默认为`false`.
   */
  scoped?: boolean;

  /**
   * 如果' true '，该组件将使用原生的shadow-dom封装，如果浏览器
   * 不支持本机的shadow-dom。默认为“假”。
   */
  shadow?: boolean;

  /**
   * 一些外部样式表文件的相对URL。应该是一个'.css'为后缀的文件，除非一些  
   * 像' @stencil/sass '一样安装外部插件。
   */
  styleUrl?: string;

  /**
   * 与' styleUrl '类似，但允许为不同的模式指定不同的样式表。
   */
  styleUrls?: string[] | d.ModeStyles;

  /**
   * 包含内联CSS而不是使用外部样式表的url。
   * 该特性的性能特征与使用外部样式表相同
   *
   * 注意，你不能使用sass或less，只有'css'允许使用'styles'，如果你需要更高级的特性，请使用'styleUrl'。
   */
  styles?: string;

  /**
   * 到组件所需的资源文件夹的相对链接数组。
   */
  assetsDirs?: string[];

  /**
   * @deprecated使用' assetsDirs '代替
   */
  assetsDir?: string;
}
```

## 嵌入或嵌套组件

通过将HTML标签(标记)添加到JSX代码中，可以轻松组成组件。由于这些组件只是HTML标签，因此无需导入任何内容即可在另一个Stencil组件中使用Stencil组
这是在另一个组件中使用组件的示例：

```
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-embedded-component'
})
export class MyEmbeddedComponent {
  @Prop() color: string = 'blue';

  render() {
    return (
      <div>My favorite color is {this.color}</div>
    );
  }
}
```

```
import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-parent-component'
})
export class MyParentComponent {

  render() {
    return (
      <div>
        <my-embedded-component color="red"></my-embedded-component>
      </div>
    );
  }
}
```

将my-parent-component包括对一个my-embedded-component请参考render()功能。