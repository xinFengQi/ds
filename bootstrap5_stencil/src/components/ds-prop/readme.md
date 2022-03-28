# 标准组件的参数组件

用于写入组件参数的组件，多用于静态文档项目中;


<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description | Type                                                                                        | Default           |
| ------------------- | --------- | ----------- | ------------------------------------------------------------------------------------------- | ----------------- |
| `name` _(required)_ | `name`    | 参数名称        | `string`                                                                                    | `undefined`       |
| `parentEl`          | --        | 父节点         | `HTMLElement \| ParentNode`                                                                 | `undefined`       |
| `type`              | `type`    | 参数类型        | `DataType.array \| DataType.boolean \| DataType.json \| DataType.number \| DataType.string` | `DataType.string` |


## Events

| Event     | Description | Type                                        |
| --------- | ----------- | ------------------------------------------- |
| `getProp` | 解析参数后回调事件   | `CustomEvent<{ key: string; value: any; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
