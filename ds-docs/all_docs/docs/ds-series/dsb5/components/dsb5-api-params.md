# 单列多行表单

<dsb5-webcomponent-show>
    <dsb5-api-params>
    <ds-script>
    console.log('---------------')
      $el.addEventListener('formchange', function(el){
        console.log(el.detail)
      })
   </ds-script>
    </dsb5-api-params>
</dsb5-webcomponent-show>


## 属性
|属性(Property)|属性(Attribute)|   描述   |      类型       |                                                                                         默认值                                                                                         |
|--------------|---------------|----------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   `forms`    |      --       |`表单结构`|`Dsb5FromModel[]`|`[    {      type: DataType.string,      name: 'key值',    },    {      type: DataType.string,      name: 'value值',    },    {      type: DataType.string,      name: '描述',    },  ]`|


## 事件
|   事件名   |      描述      |                     类型                      |
|------------|----------------|-----------------------------------------------|
|`formchange`|`返回变更的数据`|`{ valid: boolean; value: Dsb5FromModel[][]; }`|
