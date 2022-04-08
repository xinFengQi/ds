# 标准组件的参数组件

用于写入组件参数的组件，多用于静态文档项目中;



## 属性
|属性(Property)|属性(Attribute)|   描述   |                                           类型                                            |     默认值      |
|--------------|---------------|----------|-------------------------------------------------------------------------------------------|-----------------|
| `name(必填)` |    `name`     |`参数名称`|                                         `string`                                          |       --        |
|  `parentEl`  |      --       | `父节点` |                                `HTMLElement \| ParentNode`                                |       --        |
|    `type`    |    `type`     |`参数类型`|`DataType.array \| DataType.boolean \| DataType.json \| DataType.number \| DataType.string`|`DataType.string`|


## 事件
| 事件名  |        描述        |             类型             |
|---------|--------------------|------------------------------|
|`getProp`|`解析参数后回调事件`|`{ key: string; value: any; }`|
