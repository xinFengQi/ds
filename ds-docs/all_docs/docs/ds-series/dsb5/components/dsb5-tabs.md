# tab 组件

标签导航组件

### 基础示例

1. 仅仅用于切换展示
2. 不涉及其他如缓存等任何功能的tab切换
<dsb5-webcomponent-show>
  <dsb5-tabs>
    <ds-prop name="tabs" type="array">
       ["第一个tab", "第二个tab"]
    </ds-prop>
    <div slot="第二个tab">
      第二个tab，第二个tab，第二个tab，第二个tab
    </div>
    <div slot="第一个tab">
      第一个tab，第一个tab，第一个tab，第一个tab
    </div>
  </dsb5-tabs>
</dsb5-webcomponent-show>


## 属性
|属性(Property)|属性(Attribute)|描述|   类型   |默认值|
|--------------|---------------|----|----------|------|
|    `tabs`    |      --       | -- |`string[]`| `[]` |
