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



   
<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                                                                                                                                                                                                                   | Default               |
| ------------- | -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `color`       | `color`        | 按钮颜色        | `ComponentType.danger \| ComponentType.dark \| ComponentType.empty \| ComponentType.info \| ComponentType.light \| ComponentType.primary \| ComponentType.secondary \| ComponentType.success \| ComponentType.warning` | `ComponentType.empty` |
| `data`        | --             | 下拉选择选项      | `Dsb5DropdownData[] \| string[]`                                                                                                                                                                                       | `[]`                  |
| `valueChange` | `value-change` | 是否变更值       | `boolean`                                                                                                                                                                                                              | `false`               |


## Events

| Event           | Description | Type                                                                  |
| --------------- | ----------- | --------------------------------------------------------------------- |
| `getselectdata` | 弹框关闭事件      | `CustomEvent<Dsb5DropdownDataLine \| Dsb5DropdownDataText \| string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
