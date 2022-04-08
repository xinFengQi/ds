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


## 属性
|属性(Property)|属性(Attribute)|    描述    |        类型        |                                                                    默认值                                                                    |
|--------------|---------------|------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|  `menuTree`  |      --       |`目录树数据`|`Dsb5MenuTreeData[]`|`[    {      name: '第一季',      childrens: [        {          name: '第一一级',        },      ],    },    {      name: '第二季',    },  ]`|


## 事件
|  事件名  |     描述     |                      类型                       |
|----------|--------------|-------------------------------------------------|
|  `add`   |`增加点击事件`|`{ el: HTMLDivElement; node: Dsb5MenuTreeData; }`|
|`clickNav`|  `点击事件`  |               `Dsb5MenuTreeData`                |
|  `edit`  |`编辑点击事件`|`{ el: HTMLDivElement; node: Dsb5MenuTreeData; }`|
| `remove` |`删除点击事件`|`{ el: HTMLDivElement; node: Dsb5MenuTreeData; }`|


## 方法
### addNode(key: string, newNode: Dsb5MenuTreeData) => Promise<void>

#### 返回值
Promise<void>
### editNode(newNode: Dsb5MenuTreeData) => Promise<void>

#### 返回值
Promise<void>
### removeNode(key: string) => Promise<void>

#### 返回值
Promise<void>
