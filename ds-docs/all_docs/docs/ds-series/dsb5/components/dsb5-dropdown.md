# 下拉选择

## 示例

1. 基础使用示例
   <dsb5-webcomponent-show>
   <dsb5-dropdown>
   <ds-prop name="data" type="array">
   ["1","1",{"text": 12},{"type":"line"},{"text": 14}]
   </ds-prop>
   </dsb5-dropdown>
   </dsb5-webcomponent-show>



   

## 属性
|属性(Property)|属性(Attribute)|     描述     |                                                                                                         类型                                                                                                         |       默认值        |
|--------------|---------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
|   `color`    |    `color`    |  `按钮颜色`  |`ComponentType.danger \| ComponentType.dark \| ComponentType.empty \| ComponentType.info \| ComponentType.light \| ComponentType.primary \| ComponentType.secondary \| ComponentType.success \| ComponentType.warning`|`ComponentType.empty`|
|    `data`    |      --       |`下拉选择选项`|                                                                                           `Dsb5DropdownData[] \| string[]`                                                                                           |        `[]`         |
|`valueChange` |`value-change` | `是否变更值` |                                                                                                      `boolean`                                                                                                       |       `false`       |


## 事件
|    事件名     |     描述     |                         类型                         |
|---------------|--------------|------------------------------------------------------|
|`getselectdata`|`弹框关闭事件`|`Dsb5DropdownDataLine | Dsb5DropdownDataText | string`|
