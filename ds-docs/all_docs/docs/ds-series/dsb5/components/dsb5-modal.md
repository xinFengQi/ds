# 弹框

## 示例

### 平铺使用

<dsb5-webcomponent-show>
<dsb5-modal dstitle="平铺测试" fixed="false">
  <div slot="content">  平铺测试的内容</div> 
</dsb5-modal>
</dsb5-webcomponent-show>

### 弹框使用

1. 直接在 html 上展示
   <dsb5-webcomponent-show>
   <dsb5-modal id="modalfixed_default" dstitle="显示弹框" show="false">
   <div slot="test">测试
       </div>

      <div slot="content"><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div><div>这里面展示内 </div></div><div slot="footer">这是底部
       </div>
      </dsb5-modal>
      <dsb5-button style="width: 150px">
      点击开启
      <ds-script>  $el.onclick = function(){
               const node = document.getElementById('modalfixed_default');
               node.show = !node.show;
               if(node.show) {
                   $el.innerText = '点击关闭'  
               } else {
                   $el.innerText = '点击开启'  
               }
         }
      </ds-script>
      </dsb5-button>
      </dsb5-webcomponent-show>

<!-- 1. 点击，使用服务创建
   <dsb5-webcomponent-show>
   <dsb5-button style="width: 150px">
   显示弹框
   <ds-script>
   $el.onclick = function(){
   console.log('-------------------')
   }
   </ds-script>
   </dsb5-webcomponent-show> -->


## 属性
|属性(Property)|属性(Attribute)|       描述       |               类型               |  默认值  |
|--------------|---------------|------------------|----------------------------------|----------|
|   `close`    |    `close`    |`是否显示关闭按钮`|            `boolean`             | `false`  |
|  `dstitle`   |   `dstitle`   |   `弹框的标题`   |             `string`             |    --    |
|   `fixed`    |    `fixed`    |`弹框是否是浮动的`|            `boolean`             |  `true`  |
|   `footer`   |   `footer`    |   `弹框的底部`   |`HTMLElement \| boolean \| string`|  `true`  |
|  `location`  |  `location`   |   `弹框的位置`   |         `center \| top`          |`'center'`|
|    `show`    |    `show`     |    `是否显示`    |            `boolean`             |  `true`  |


## 事件
|事件名 |       描述       | 类型 |
|-------|------------------|------|
|`cacel`|`弹框取消关闭事件`|`null`|
| `ok`  |`弹框确认关闭事件`|`null`|
