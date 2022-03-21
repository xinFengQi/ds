# 警告框

1. 警告及信息弹框，用于各种与用户交互的场景;
2. 也可以做特殊颜色的卡片展示

## 使用范例

### 基础示例

1. 就在当前展示区域展示
2. 可以用于颜色的卡片展示
   <dsb5-webcomponent-show>
   <dsb5-alert content="这是一个默认的弹框" fixed="false"></dsb5-alert>
   <dsb5-alert content="这是一个隐藏的弹框" fixed="false" show="false"></dsb5-alert>
   <dsb5-alert content="这是一个成功的弹框" fixed="false" type="success" close="true"></dsb5-alert>
   <dsb5-alert content="这是一个失败的弹框" fixed="false" type="danger"></dsb5-alert>
   <dsb5-alert content="这是一个失败的弹框" fixed="false" type="danger">
   <div>这里是自定义内容</div>
   </dsb5-alert>
   </dsb5-webcomponent-show>

### 弹框示例

1. 直接在 html 上展示
   <dsb5-webcomponent-show>
   <dsb5-alert id="alertfixed_default" content="这是一个默认的弹框"></dsb5-alert>
   <button style="width: 150px">
   点击关闭
   <ds-script>
      console.log([$el]);
      $el.onclick = function(){
            const node = document.getElementById('alertfixed_default');
            node.show = !node.show;
            if(node.show) {
                $el.innerText = '点击关闭'  
            } else {
                $el.innerText = '点击开启'  
            }
      }
   </ds-script>
   </button>
   </dsb5-webcomponent-show>

1. 点击，使用服务创建
   <dsb5-webcomponent-show>
   <button style="width: 150px">弹框展示</button>
   </dsb5-webcomponent-show>

<!-- Auto Generated Below -->
