# 工具函数

工具函数，


<ds-script >
        dsb5.dsUtil.isEqualSync
</ds-script>

## isEqualSync

<dsb5-function-execute fun="dsb5.dsUtil.isEqualSync" time="1">
    <ds-prop name="params" type="array">
       ["111", "111"]
    </ds-prop>
    <ds-prop name="result" type="boolean">
       true
    </ds-prop>
</dsb5-function-execute>

#### 注释信息
判断两个数值是否相同
#### 同步方法
isEqualSync(a: any, b: any) => boolean


## valueVerifySync

<dsb5-function-execute fun="dsb5.dsUtil.valueVerifySync" time="1">   
    <ds-prop name="params" type="array">
       ["111", "number"]
    </ds-prop>
    <ds-prop name="result" type="json">
       {"valid": false, "realValue": 111}
    </ds-prop>
</dsb5-function-execute>

#### 注释信息
值校验
#### 同步方法
valueVerifySync(value: string, type: DataType) => ValueVerifyFunReturn

