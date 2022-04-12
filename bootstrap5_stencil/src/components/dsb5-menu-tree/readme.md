# 目录树

目录树组件

### 基础示例

1. 基础使用
<dsb5-webcomponent-show>
  <dsb5-menu-tree>
    <ds-script>
      $el.addEventListener('edit', function(el){
        console.log(el.detail)
        el.detail.el.editNode({
          key: el.detail.node.key,
          name: '123123'
        }).then(function(v){})
      })
   </ds-script>
  </dsb5-menu-tree>
</dsb5-webcomponent-show>

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description | Type                 | Default                                                                                                                                          |
| ---------- | --------- | ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `menuTree` | --        | 目录树数据       | `Dsb5MenuTreeData[]` | `[     {       name: '第一季',       childrens: [         {           name: '第一一级',         },       ],     },     {       name: '第二季',     },   ]` |


## Events

| Event      | Description | Type                                                           |
| ---------- | ----------- | -------------------------------------------------------------- |
| `add`      | 增加点击事件      | `CustomEvent<{ el: HTMLDivElement; node: Dsb5MenuTreeData; }>` |
| `clickNav` | 点击事件        | `CustomEvent<Dsb5MenuTreeData>`                                |
| `edit`     | 编辑点击事件      | `CustomEvent<{ el: HTMLDivElement; node: Dsb5MenuTreeData; }>` |
| `remove`   | 删除点击事件      | `CustomEvent<{ el: HTMLDivElement; node: Dsb5MenuTreeData; }>` |


## Methods

### `addNode(key: string, newNode: Dsb5MenuTreeData) => Promise<Dsb5MenuTreeData[]>`

增加节点

#### Returns

Type: `Promise<Dsb5MenuTreeData[]>`



### `editNode(newNode: Dsb5MenuTreeData) => Promise<Dsb5MenuTreeData[]>`

编辑节点

#### Returns

Type: `Promise<Dsb5MenuTreeData[]>`



### `removeNode(key: string) => Promise<Dsb5MenuTreeData[]>`

移除节点

#### Returns

Type: `Promise<Dsb5MenuTreeData[]>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
