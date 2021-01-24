<!--
 * @Date: 2021-01-21 16:25:56
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 17:38:52
-->

# Ember

在Ember中使用模板组件非常容易，这要感谢Ember-cli-Stencil插件。它处理:
1. 将所需文件导入到您的vendor.js
2. 将组件定义复制到assets 目录中
3. (可选)生成包装器组件，以提高与旧版Ember的兼容性

通过安装Ember插件开始

```
ember install ember-cli-stencil
```

现在，在构建应用程序时，依赖项中的Stencli集合将自动被发现并拉入应用程序。您可以在hbs文件中开始使用自定义标签，而无需做进一步的工作。有关更多信息，请查看ember-cli-stencil文档。