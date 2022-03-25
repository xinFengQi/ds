# 按钮

1. 基础按钮

## 使用范例

### 基础示例

1. 基础按钮
   <dsb5-webcomponent-show type="row">
   <dsb5-button>测试按钮</dsb5-button>
   <dsb5-button type="success">测试按钮</dsb5-button>
   <dsb5-button type="danger">测试按钮</dsb5-button>
   <dsb5-button outline="true">测试按钮</dsb5-button>
   <dsb5-button type="success" outline="true">测试按钮</dsb5-button>
   <dsb5-button type="danger" outline="true">测试按钮</dsb5-button>

   </dsb5-webcomponent-show>


## 属性
|属性(Property)|属性(Attribute)|    描述    |                                                                                             类型                                                                                              |        默认值         |
|--------------|---------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
|  `outline`   |   `outline`   |`弹框的类型`|                                                                                           `boolean`                                                                                           |        `false`        |
|    `type`    |    `type`     |`按钮的类型`|`ComponentType.danger \| ComponentType.dark \| ComponentType.info \| ComponentType.light \| ComponentType.primary \| ComponentType.secondary \| ComponentType.success \| ComponentType.warning`|`ComponentType.primary`|
