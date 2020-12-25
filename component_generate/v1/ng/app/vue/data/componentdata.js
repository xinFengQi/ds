if(!window.$VUE_DATA) {
    window.$VUE_DATA = {}
}
window.$VUE_DATA.component = [{
    path: '/video_view',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="video-view">video-view</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('video-view')" class="nav2 right_nav">video-view</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/app_reuse_strategy',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="app-reuse-strategy">app-reuse-strategy</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('app-reuse-strategy')" class="nav2 right_nav">app-reuse-strategy</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/localstorage',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="localstorage">localstorage</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('localstorage')" class="nav2 right_nav">localstorage</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/datetime_single',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="单个时间选择组件">单个时间选择组件</h2><h2 @click="scrollTop($event)" id="datetime-single">datetime-single</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
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
<td align="center">(current: Date): boolean =&gt; {<br>  return differenceInCalendarDays(current, new Date()) &lt; 0;<br>}</td>
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
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
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
<td align="center">EventEmitter<any></td>
<td align="center"></td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('单个时间选择组件')" class="nav2 right_nav">单个时间选择组件</a><a @click="scrollIdTop('datetime-single')" class="nav2 right_nav">datetime-single</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/datetime_start_end',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="时间期限选择组件——只用于表单">时间期限选择组件——只用于表单</h2><h2 @click="scrollTop($event)" id="datetime-start-end">datetime-start-end</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
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
<tr>
<td align="center">labelSpan</td>
<td align="center"></td>
<td align="center">number</td>
<td align="center">10</td>
</tr>
<tr>
<td align="center">valueSpan</td>
<td align="center"></td>
<td align="center">number</td>
<td align="center">10</td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
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
<td align="center">EventEmitter<any></td>
<td align="center"></td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('时间期限选择组件——只用于表单')" class="nav2 right_nav">时间期限选择组件——只用于表单</a><a @click="scrollIdTop('datetime-start-end')" class="nav2 right_nav">datetime-start-end</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/file_upload',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="文件上传组件">文件上传组件</h2><h2 @click="scrollTop($event)" id="file-upload">file-upload</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
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
<td align="center">Subject<FormSubject></td>
<td align="center">new Subject()</td>
</tr>
<tr>
<td align="center">fileUploadParams</td>
<td align="center"></td>
<td align="center">UploadFileParams</td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
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
<td align="center">EventEmitter<any></td>
<td align="center"></td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('文件上传组件')" class="nav2 right_nav">文件上传组件</a><a @click="scrollIdTop('file-upload')" class="nav2 right_nav">file-upload</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/form_component',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="使用简单表单时配置表单组件">使用简单表单时配置表单组件</h2><h2 @click="scrollTop($event)" id="form-component">form-component</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
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
<td align="center">{<br>  [key: string]: RichTextParams &#124; UploadFileParams;<br>}</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">labelSpan</td>
<td align="center"></td>
<td align="center">number</td>
<td align="center">3</td>
</tr>
<tr>
<td align="center">valueSpan</td>
<td align="center"></td>
<td align="center">number</td>
<td align="center">0</td>
</tr>
<tr>
<td align="center">isShowButton</td>
<td align="center"></td>
<td align="center">boolean</td>
<td align="center">true</td>
</tr>
<tr>
<td align="center">footerButtonData</td>
<td align="center">按钮选项</td>
<td align="center">Array</td>
<td align="center">[&#39;okBtu&#39;, &#39;cacelOk&#39;]</td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
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
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('使用简单表单时配置表单组件')" class="nav2 right_nav">使用简单表单时配置表单组件</a><a @click="scrollIdTop('form-component')" class="nav2 right_nav">form-component</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/form_detail',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="使用简单表单时预览组件">使用简单表单时预览组件</h2><h2 @click="scrollTop($event)" id="form-detail">form-detail</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
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
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('使用简单表单时预览组件')" class="nav2 right_nav">使用简单表单时预览组件</a><a @click="scrollIdTop('form-detail')" class="nav2 right_nav">form-detail</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/input_group',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="同行输入组组件">同行输入组组件</h2><h2 @click="scrollTop($event)" id="input-group">input-group</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
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
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
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
<td align="center">EventEmitter<any></td>
<td align="center"></td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('同行输入组组件')" class="nav2 right_nav">同行输入组组件</a><a @click="scrollIdTop('input-group')" class="nav2 right_nav">input-group</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/tinymce_ngx',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="富文本组件">富文本组件</h2><h2 @click="scrollTop($event)" id="tinymce-ngx">tinymce-ngx</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
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
<tr>
<td align="center">reInit</td>
<td align="center"></td>
<td align="center">any</td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
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
<td align="center">EventEmitter<any></td>
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
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('富文本组件')" class="nav2 right_nav">富文本组件</a><a @click="scrollIdTop('tinymce-ngx')" class="nav2 right_nav">tinymce-ngx</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/content_breadcrumb',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="使用二级及以上面包屑时使用的组件">使用二级及以上面包屑时使用的组件</h2><h2 @click="scrollTop($event)" id="content-breadcrumb">content-breadcrumb</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
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
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('使用二级及以上面包屑时使用的组件')" class="nav2 right_nav">使用二级及以上面包屑时使用的组件</a><a @click="scrollIdTop('content-breadcrumb')" class="nav2 right_nav">content-breadcrumb</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/index',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="index">index</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('index')" class="nav2 right_nav">index</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/class_name',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="class-name">class-name</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('class-name')" class="nav2 right_nav">class-name</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/call_monitor',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="call-monitor">call-monitor</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('call-monitor')" class="nav2 right_nav">call-monitor</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/call_monitor',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="call-monitor">call-monitor</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('call-monitor')" class="nav2 right_nav">call-monitor</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/monitor',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="monitor">monitor</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('monitor')" class="nav2 right_nav">monitor</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/alarm_setting',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="alarm-setting">alarm-setting</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('alarm-setting')" class="nav2 right_nav">alarm-setting</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/set_busy_number',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="set-busy-number">set-busy-number</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('set-busy-number')" class="nav2 right_nav">set-busy-number</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/set_give_up',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="set-give-up">set-give-up</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('set-give-up')" class="nav2 right_nav">set-give-up</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/set_ib_rate',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="set-ib-rate">set-ib-rate</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('set-ib-rate')" class="nav2 right_nav">set-ib-rate</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/set_queuing_number',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="set-queuing-number">set-queuing-number</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('set-queuing-number')" class="nav2 right_nav">set-queuing-number</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/set_service_level',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="set-service-level">set-service-level</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('set-service-level')" class="nav2 right_nav">set-service-level</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/client_operate',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="client-operate">client-operate</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('client-operate')" class="nav2 right_nav">client-operate</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/queue_monitor',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="queue-monitor">queue-monitor</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('queue-monitor')" class="nav2 right_nav">queue-monitor</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/statistical_monitor',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="statistical-monitor">statistical-monitor</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('statistical-monitor')" class="nav2 right_nav">statistical-monitor</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/polyfills',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="polyfills">polyfills</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('polyfills')" class="nav2 right_nav">polyfills</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},{
    path: '/test',
    component: { template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="undefined">undefined</h2><h2 @click="scrollTop($event)" id="test">test</h2>
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('undefined')" class="nav2 right_nav">undefined</a><a @click="scrollIdTop('test')" class="nav2 right_nav">test</a>
                </article>  
            </div>
        </div>`, methods: {
        scrollTop(e) {
            e.target.scrollIntoView()
        },
        scrollIdTop(id) {
             document.getElementById(id).scrollIntoView()
        }
    } },
},]
