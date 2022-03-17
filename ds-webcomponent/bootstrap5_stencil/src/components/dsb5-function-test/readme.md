# 函数执行组件

文档功能组件，执行挂载在window下面的函数，展示执行结果和执行过程中的基础信息


## 基础用例类型

(type="testCase")仅使用折叠面板展示函数执行信息


### 示例

<dsb5-function-test fun="dsutil.test1">   
    <ds-prop name="params" type="array">
       ["12"]
    </ds-prop>
    <ds-prop name="result" type="array">
       ["121"]
    </ds-prop>
</dsb5-function-test>
<hr />
<dsb5-function-test fun="dsutil.test1">   
    <ds-prop name="params" type="array">
      ["12"]
    </ds-prop>
    <ds-prop name="result" type="array">
      ["12"]
    </ds-prop>
</dsb5-function-test>


<!-- Auto Generated Below -->

