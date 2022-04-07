# 目录树

目录树组件

### 基础示例

1. 基础使用
<dsb5-webcomponent-show>
  <dsb5-menu-tree>
  </dsb5-menu-tree>
</dsb5-webcomponent-show>

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description | Type                 | Default                                                                                                                                          |
| ---------- | --------- | ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `menuTree` | --        | 目录树数据       | `Dsb5MenuTreeData[]` | `[     {       name: '第一季',       childrens: [         {           name: '第一一级',         },       ],     },     {       name: '第二季',     },   ]` |


## Events

| Event      | Description | Type                            |
| ---------- | ----------- | ------------------------------- |
| `clickNav` | 点击事件        | `CustomEvent<Dsb5MenuTreeData>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
