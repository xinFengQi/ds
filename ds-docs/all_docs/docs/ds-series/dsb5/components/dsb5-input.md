# 输入框

## 示例

1. 基础使用示例
   <dsb5-webcomponent-show>
   <dsb5-input>
   </dsb5-input>
   </dsb5-webcomponent-show>


2. 前后缀使用示例
   <dsb5-webcomponent-show>
   <dsb5-input>
   <dsb5-button slot="prefix">前缀</dsb5-button>
   <dsb5-button slot="suffix">后缀</dsb5-button>
   </dsb5-input>
   </dsb5-webcomponent-show>


## 属性
|属性(Property)|属性(Attribute)|     描述      |            类型            |默认值|
|--------------|---------------|---------------|----------------------------|------|
|   `error`    |    `error`    | `是否是错误`  |         `boolean`          |  --  |
|`placeholder` | `placeholder` |`placeholder值`|          `string`          |  --  |
|    `size`    |    `size`     |  `按钮大小`   |`SizeType.lg \| SizeType.sm`|`null`|
|   `value`    |    `value`    |  `当前的值`   |          `string`          |`null`|


## 事件
|   事件名    |     描述     |  类型  |
|-------------|--------------|--------|
|`valuechange`|`值变化的事件`|`string`|
