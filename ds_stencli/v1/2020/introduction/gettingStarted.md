# 入门

## 开始一个新的项目

Stencli需要[NodeJs](https://nodejs.org/en/)和npm的最新LTS版本，(长期支持版本)。

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
    请注意，您将需要使用npm 6或更高版本。
</div>

```
npm init stencli
```

Stencli可用于创建独立的组件或者整个应用程序。运行init后，系统将提示您，以便您选择要启动的项目类型。

```
? Pick a starter › - Use arrow-keys. Return to submit.
使用下键选择一个启动器，使用回车键确定
❯  ionic-pwa     Everything you need to build fast, production ready PWAs
                 您需要快速构建的、可用于生产的PWAs(增强型网页应用,无需下载就可如app一样放置在桌面)
   app           Minimal starter for building a Stencil app or website
                 创建模板应用程序或网站的最小入门级
   component     Collection of web components that can be used anywhere
                 可以在任何地方使用的web组件的集合
```

更新Stencli
要获取最新版本的@Stencli/core,可以运行：

```
npm install @stencil/core@latest --save-exact
```