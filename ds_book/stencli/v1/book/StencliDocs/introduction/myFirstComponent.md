# 我的第一个组件

通过添加带有.tsx扩展名的新文件(例如my-first-component.tsx)并将其放置在src/components目录中来创建Stencli组件。该.tsx的文件后缀名是必须的，因为Stencil组件使用的是内置的JSX和TypeScript。

这是一个Stencli组建的内容示例：

```
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-first-component',
})
export class MyComponent {

  // Indicate that name should be a public property on the component
  // 指示该名称应是组件上的公共属性
  @Prop() name: string;

  render() {
    return (
      <p>
        My name is {this.name}
      </p>
    );
  }
}
```

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
    不完全了解发生了什么事？不用担心，我们稍后将详细解释每一项。
</div>

编译后，就可以像其他任何标签一样在HTML中使用此组件。        


```html
<my-first-component name="Max"></my-first-component>
```

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
   Web组件的标记中必须带有-。firstComponent将不是有效的标签名称。
</div>

渲染后，浏览器将显示My name is Max。

## 那么，这里到底发生了什么？

让我们慢慢深入了解。

我们看到的第一块是@Component装饰器。该装饰器将有关我们组件的元数据提供给Stencil编译器。可以在此处设置信息，例如要使用的标签和外部样式，并由编译器获取。

在@Component()装饰器下面，我们有一个标准的JavaScript类。在这里，您将编写大量代码，使您的模板组件发挥作用。这里可以编写函数或提供业务逻辑。

为了让组件渲染到屏幕上，我们必须声明一个返回JSX的渲染函数。如果您不确定JSX是什么，不要担心，我们将在模板文档中详细讨论它。


简单来说，我们的渲染函数需要返回我们想要推送到DOM的HTML的一种表现形式。

在name对类属性也应用了一个装饰器，@Prop()。该装饰器告诉编译器该属性是组件的公共属性，用户应对其进行设置。我们将此属性设置如下：


```html
<my-first-component name="Max"></my-first-component>
```

任何用@Prop()装饰的属性会被自动监视。如果组件的用户更改了元素的name属性，组件将再次触发渲染函数，更新显示的内容。

## 组件生成器

Stencil CLI可以为您生成新的组件。如果你使用了其中一个启动器，你可以在你的项目中运行generate npm脚本，它将启动交互式生成器。

```shell
npm run generate
```

或者，您可以直接调用Stencil CLI的generate命令（g简称）。如果尚未stencil全局安装，请在命令前面加上npx。

```shell
stencil generate
```

您可以选择将组件标签名称直接传递给命令。请记住，组件标签名称必须小写，并至少包含一个连字符。在第二步中，生成器将询问您要生成哪些文件。这使您可以引导样式表以及spec和e2e测试以及组件文件。

所有组件都将在该src/components文件夹中生成。在其中，将使用与您提供的组件标签名称相同的名称创建一个文件夹，并在该文件夹中生成文件。还可以指定一个或多个子文件夹来生成组件。

例如，如果您指定pages/page-home作为组件标签名称，则将在中生成文件src/components/pages/page-home。

```shell
stencil generate pages/page-home
```

```shell
src
 |- components
     |- pages
         |- page-home
             |- page-home.css
             |- page-home.e2e.ts
             |- page-home.spec.ts
             |- page-home.tsx
```