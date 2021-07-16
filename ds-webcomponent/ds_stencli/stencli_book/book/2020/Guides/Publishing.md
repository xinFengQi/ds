<!--
 * @Date: 2021-01-21 11:49:19
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 12:00:54
-->

# 发布组件库

有许多方式可以发布和分发组件库，以供外部项目使用。Stencil的好处之一是可以轻松生成适合您的用例的各种输出目标。

## 发布的NPM

第一步和强烈建议的步骤是 发布组件库NPM。Npm是一个在线软件注册中心，用于共享库，工具，实用程序，软件包等。将库发布到NPM后，其他项目便可以将组件库作为依赖项添加并在其自己的项目中使用这些组件。

## package.json

该package.json文件的目的是为其他工具提供有关如何查找程序包文件的说明，并提供有关程序包的信息。例如，打包工具（如Rollup和Webpack）使用此配置来查找项目的清单条目文件。

使用编译器的一个优点是它能够为设置项目进行最佳分发提供帮助。以下是在项目package.json文件中找到的常见设置：

```
{
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "es2015": "dist/esm/index.mjs",
  "es2017": "dist/esm/index.mjs",
  "types": "dist/types/interface.d.ts",
  "unpkg": "dist/ionic/ionic.js",
  "collection:main": "dist/collection/index.js",
  "collection": "dist/collection/collection-manifest.json",
  "files": [
    "dist/",
    "css/",
    "loader/"
  ]
}
```

|   属性     |     描述 |  推荐 |    
| :----:  | :----:   | :----:       | 
| main |  CommonJS模块格式的入口文件。	 | dist/index.js |
| module |  ES模块格式的输入文件。ES模块是标准化和推荐的格式。	 | dist/index.mjs | 
| es2015 |  通常用于框架打包。	 | dist/esm/index.mjs | 
| es2017 |  通常用于框架打包。	 | dist/esm/index.mjs | 
| types | 项目类型的输入文件。 	 | dist/types/index.d.ts | 
| unpkg |  项目unpkg CDN请求的入口文件。	 | dist/{NAMESPACE}/{NAMESPACE}.js | 

该collection属性用于允许其他Stencil应用程序中的延迟加载。

注意：如果您同时分配dist和dist-custom-elements-bundle，那么最好选择其中一个作为主要条目清单，这取决于您。