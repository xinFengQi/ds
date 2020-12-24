if(!window.$VUE_DATA) {
    window.$VUE_DATA = {}
}
window.$VUE_DATA.component = [{
    path: '/datetime_single',
    component: { template: `
        <div>
            <article class="markdown-body">
                <h2 id="单个时间选择组件">单个时间选择组件</h2>
<h2 id="datetime-single">datetime-single</h2>
<h3 id="input属性">Input属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[(ngModel)]</td>
<td align="center">双向绑定的值，可做表单组件</td>
<td align="center">any</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">disableDate</td>
<td align="center">不可以选择的日期</td>
<td align="center">Function:(current: Date): boolean</td>
<td align="center">(current: Date): boolean =&gt; {&amp;ltbr&gt;  return differenceInCalendarDays(current, new Date()) &amp;lt 0;&amp;ltbr&gt;}</td>
</tr>
<tr>
<td align="center">placeHolder</td>
<td align="center">输入框默认选择项</td>
<td align="center">string</td>
<td align="center">&#39;请选择日期&#39;</td>
</tr>
<tr>
<td align="center">format</td>
<td align="center">返回的数据格式</td>
<td align="center">&#39;&#39;&#124;YYYY-MM-DD HH:mm:ss</td>
<td align="center">&#39;YYYY-MM-DD HH:mm:ss&#39;</td>
</tr>
</tbody></table>
<h3 id="output属性">Output属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">ngModelChange</td>
<td align="center">双向绑定值变化事件</td>
<td align="center">EventEmitter&amp;ltany&gt;</td>
<td align="center"></td>
</tr>
</tbody></table>

            </article>  
        </div>` },
},{
    path: '/datetime_start_end',
    component: { template: `
        <div>
            <article class="markdown-body">
                <h2 id="时间期限选择组件只用于表单">时间期限选择组件——只用于表单</h2>
<h2 id="datetime-start-end">datetime-start-end</h2>
<h3 id="input属性">Input属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[(ngModel)]</td>
<td align="center">双向绑定的值，可做表单组件</td>
<td align="center">any</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">data</td>
<td align="center"></td>
<td align="center">CxFromModel</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">format</td>
<td align="center">日期的数据格式</td>
<td align="center">&#39;&#39;&#124;YYYY-MM-DD HH:mm:ss</td>
<td align="center">&#39;YYYY-MM-DD HH:mm:ss&#39;</td>
</tr>
<tr>
<td align="center">showTime</td>
<td align="center">展示时间</td>
<td align="center">boolean</td>
<td align="center">true</td>
</tr>
</tbody></table>
<h3 id="output属性">Output属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">ngModelChange</td>
<td align="center">双向绑定值变化事件</td>
<td align="center">EventEmitter&amp;ltany&gt;</td>
<td align="center"></td>
</tr>
</tbody></table>

            </article>  
        </div>` },
},{
    path: '/file_upload',
    component: { template: `
        <div>
            <article class="markdown-body">
                <h2 id="文件上传组件">文件上传组件</h2>
<h2 id="file-upload">file-upload</h2>
<h3 id="input属性">Input属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[(ngModel)]</td>
<td align="center">双向绑定的值，可做表单组件</td>
<td align="center">any</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">systemName</td>
<td align="center">* ds0.0.2</td>
<td align="center">string</td>
<td align="center">&#39;&#39;</td>
</tr>
<tr>
<td align="center">reviewFileUrl</td>
<td align="center">查看图片路径</td>
<td align="center">string</td>
<td align="center">&#39;&#39;</td>
</tr>
<tr>
<td align="center">onlyRead</td>
<td align="center">只读</td>
<td align="center">boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">formSub</td>
<td align="center">监听Subject</td>
<td align="center">Subject&amp;ltFormSubject&gt;</td>
<td align="center">new Subject()</td>
</tr>
<tr>
<td align="center">fileUploadParams</td>
<td align="center"></td>
<td align="center">UploadFileParams</td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 id="output属性">Output属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">ngModelChange</td>
<td align="center">双向绑定值变化事件</td>
<td align="center">EventEmitter&amp;ltany&gt;</td>
<td align="center"></td>
</tr>
</tbody></table>

            </article>  
        </div>` },
},{
    path: '/form_component',
    component: { template: `
        <div>
            <article class="markdown-body">
                <h2 id="使用简单表单时配置表单组件">使用简单表单时配置表单组件</h2>
<h2 id="form-component">form-component</h2>
<h3 id="input属性">Input属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">formModel</td>
<td align="center">表单模型数据</td>
<td align="center">CxFromModel[]</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">formElementBaseConfig</td>
<td align="center">表单元素配置</td>
<td align="center">CxFormConfig</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">formElementConfig</td>
<td align="center">定制表单元素配置</td>
<td align="center">{&amp;ltbr&gt;  [key: string]: RichTextParams &#124; UploadFileParams;&amp;ltbr&gt;}</td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 id="output属性">Output属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">formValueChange</td>
<td align="center">表单改变检测</td>
<td align="center">EventEmitter</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">ok</td>
<td align="center">表单确认返回</td>
<td align="center">EventEmitter</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">cacel</td>
<td align="center">表单取消返回</td>
<td align="center">EventEmitter</td>
<td align="center"></td>
</tr>
</tbody></table>

            </article>  
        </div>` },
},{
    path: '/form_detail',
    component: { template: `
        <div>
            <article class="markdown-body">
                <h2 id="使用简单表单时预览组件">使用简单表单时预览组件</h2>
<h2 id="form-detail">form-detail</h2>
<h3 id="input属性">Input属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">formModel</td>
<td align="center">表单模型数据</td>
<td align="center">CxFromModel[]</td>
<td align="center"></td>
</tr>
</tbody></table>

            </article>  
        </div>` },
},{
    path: '/input_group',
    component: { template: `
        <div>
            <article class="markdown-body">
                <h2 id="同行输入组组件">同行输入组组件</h2>
<h2 id="input-group">input-group</h2>
<h3 id="input属性">Input属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[(ngModel)]</td>
<td align="center">双向绑定的值，可做表单组件</td>
<td align="center">any</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">placeHolder</td>
<td align="center">输入框默认选择项</td>
<td align="center">string</td>
<td align="center">&#39;&#39;</td>
</tr>
<tr>
<td align="center">inputGroupModel</td>
<td align="center"></td>
<td align="center">InputGroupModel</td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 id="output属性">Output属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">ngModelChange</td>
<td align="center">双向绑定值变化事件</td>
<td align="center">EventEmitter&amp;ltany&gt;</td>
<td align="center"></td>
</tr>
</tbody></table>

            </article>  
        </div>` },
},{
    path: '/tinymce_ngx',
    component: { template: `
        <div>
            <article class="markdown-body">
                <h2 id="富文本组件">富文本组件</h2>
<h2 id="tinymce-ngx">tinymce-ngx</h2>
<h3 id="input属性">Input属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[(ngModel)]</td>
<td align="center">双向绑定的值，可做表单组件</td>
<td align="center">any</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">richTextParams</td>
<td align="center"></td>
<td align="center">RichTextParams</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">isDelete</td>
<td align="center"></td>
<td align="center">any</td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 id="output属性">Output属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">ngModelChange</td>
<td align="center">双向绑定值变化事件</td>
<td align="center">EventEmitter&amp;ltany&gt;</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">isEdit</td>
<td align="center">是否在编辑</td>
<td align="center">EventEmitter</td>
<td align="center"></td>
</tr>
</tbody></table>

            </article>  
        </div>` },
},{
    path: '/content_breadcrumb',
    component: { template: `
        <div>
            <article class="markdown-body">
                <h2 id="使用二级及以上面包屑时使用的组件">使用二级及以上面包屑时使用的组件</h2>
<h2 id="content-breadcrumb">content-breadcrumb</h2>
<h3 id="input属性">Input属性</h3>
<table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">data</td>
<td align="center">面包屑数据</td>
<td align="center">BreadcrumbData[]</td>
<td align="center"></td>
</tr>
</tbody></table>

            </article>  
        </div>` },
},]
