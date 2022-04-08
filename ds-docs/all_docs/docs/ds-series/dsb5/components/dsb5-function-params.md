# 单列表单

<dsb5-webcomponent-show>
    <dsb5-function-params>
    <ds-script>
    console.log('---------------')
      $el.addEventListener('formchange', function(el){
        console.log(el.detail)
      })
   </ds-script>
    </dsb5-function-params>
</dsb5-webcomponent-show>


## 事件
|   事件名   |      描述      |                    类型                     |
|------------|----------------|---------------------------------------------|
|`formchange`|`返回变更的数据`|`{ valid: boolean; value: Dsb5FromModel[]; }`|
