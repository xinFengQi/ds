<!--
 * @Date: 2021-01-21 16:25:31
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 16:33:09
-->

# 框架绑定

不幸的是，将web组件集成到现有应用程序中有时会很棘手。更多信息请访问https://custom-elements-everywhere.com/。为了适应各种各样的问题，Stencil团队创建了新的输出目标插件，使过程更简单。

这些插件会为所包含的每个框架绑定添加额外的输出目标。这个输出目标将输出一个原生的angular/react/vue库，就像你的组件最初是用这些框架编写的一样。


通过使用stencil绑定，你只需要构建一次组件，stencil就会发出angular/react/vue库，这样，组件的使用者就可以享受到框架的所有特性。

下面是一个使用这些插件的项目repo示例:[https://github.com/ionic-team/stencil-ds-plugins-demo](https://github.com/ionic-team/stencil-ds-plugins-demo)

1. Angular bindings
2. React bindings