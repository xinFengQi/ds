<!--
 * @Date: 2021-01-20 11:13:55
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-20 11:25:55
-->
# 自定义文档生成

Stencil公开了一个名为docs-custom的输出目标，用户可以在其中访问生成的docs json数据。该特性可用于生成定制的markdown，或在构建过程中对json数据执行其他逻辑。与其他文档输出目标一样，支持严格模式。
要使用这个输出目标，只需将以下内容添加到您的Stencli配置中。

```
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
          // Custom logic goes here
      }
    }
  ]
};
```

## 配置项

|   属性     |     描述 |       默认值 | 
| :----:       | :----:   | :----:    |
|generator |   以docs json数据作为参数的函数。  |  |
|strict	 |   	如果设置为true，则在缺少文档时，Stencil将输出警告。  | false | 


## 自定义文档数据模型

生成的JSON数据文档将以JsonDocs的类型出现，JsonDocs包含主要组件数组，主要组件数组包含Stencli/core找到的组件以及时间戳和编译器等元信息

### JsonDocs

|   属性     |     描述 |     
| :----:       | :----:   | 
|components |  类型为JsonDocsComponent[]的数组，它包含组件信息  | 
|timestamp	 |    steing类型的时间戳 | 
|compiler	 |   对象类型，包含typescriptVersion，compiler和version。  | 

### JsonDocsComponent

|   属性     |     描述 |     
| :----:       | :----:   | 
|dirPath |  组件目录路径  | 
|fileName	 |   文档名称 | 
|filePath	 |   文件路径  | 
|readmePath	 |   readme.md文件路径  | 
|usagesDir	 |   	用法目录路径  | 
|encapsulation	 |   组件encapsulation类型。可能的值是shadow，scoped，none  | 
|tag	 |   	.tsx文件中描述的组件标签  | 
|readme	 |   	组件readme.md第一行内容  | 
|docs		 |描述写在@Component之上的注释例如/ **文档示例* /| 
|docsTags  |   为.tsx文件形式编写的注释（以JSDoc的方式）将在此处收集  | 
|usage	 |     | 
|props	 |   	组件属性信息的数组  | 
|methods	 |   	组件方法信息的数组  | 
|events	 |     | 
|listeners	 |     | 
|styles	 |     | 
|slots	 |     | 
|parts	 |     | 
|dependents	 |   	使用当前组件的组件数组  | 
|dependencies	 |   当前组件中使用的组件数组  | 
|dependencyGraph	 |   	描述组件耦合树  | 

