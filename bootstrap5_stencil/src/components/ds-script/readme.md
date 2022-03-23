# 标准组件的js执行组件

用于写入组件的特殊js逻辑的组件，多用于静态文档项目中

## 使用注意
1. 在md中使用不能有换行，换行会解析成其他的html片段
2. 结束就使用分号隔开，避免无法解析语句

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description | Type                        | Default     |
| ---------- | --------- | ----------- | --------------------------- | ----------- |
| `parentEl` | --        | 父节点         | `HTMLElement \| ParentNode` | `undefined` |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `getExecute` | 解析参数后回调事件   | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
