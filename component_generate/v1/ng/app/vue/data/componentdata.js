if(!window.$VUE_DATA) {
    window.$VUE_DATA = {}
}
// component appComponentNavData
window.$VUE_DATA.component = [{
    path: '/component_interface',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    
                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    
                </article>  
            </div>
        </div>`, 
        markdown: ``,
        idxName: `数据模型`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/search_header_report_new',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="报表查询请求头-需优化">报表查询请求头-需优化</h2><h2 @click="scrollTop($event)" id="search-header-report-new">search-header-report-new</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">showAgent</td>
<td align="center">坐席</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showChannel</td>
<td align="center">坐席 渠道</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showAppId</td>
<td align="center">渠道/ 是否显示接入点</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showTime</td>
<td align="center">/ 是否显示接入点</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">shoLabel</td>
<td align="center">显示所有标签</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showClientName</td>
<td align="center">显示所有标签 访客名称</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showWordTime</td>
<td align="center">访客名称 留言日期</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showTelNum</td>
<td align="center">留言日期 热线号码</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showReport</td>
<td align="center">热线号码 报表类型</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showloginLog</td>
<td align="center">报表类型 显示登录日志搜索头</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="center">emitChose</td>
<td align="center">点击查询回调</td>
<td align="center">EventEmitter</td>
</tr>
<tr>
<td align="center">emitType</td>
<td align="center"></td>
<td align="center">EventEmitter</td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('报表查询请求头-需优化')" class="nav2 right_nav">报表查询请求头-需优化</a><a @click="scrollIdTop('search-header-report-new')" class="nav2 right_nav">search-header-report-new</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 报表查询请求头-需优化

## search-header-report-new

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| showAgent | 坐席 | Boolean | false | 
| showChannel | 坐席 渠道 | Boolean | false | 
| showAppId | 渠道/ 是否显示接入点 | Boolean | false | 
| showTime | / 是否显示接入点 | Boolean | false | 
| shoLabel | 显示所有标签 | Boolean | false | 
| showClientName | 显示所有标签 访客名称 | Boolean | false | 
| showWordTime | 访客名称 留言日期 | Boolean | false | 
| showTelNum | 留言日期 热线号码 | Boolean | false | 
| showReport | 热线号码 报表类型 | Boolean | false | 
| showloginLog | 报表类型 显示登录日志搜索头 | Boolean | false | 


### Output属性

| 属性值 | 描述 | 类型 |
| :----: | :----:| :----:  |
| emitChose | 点击查询回调 | EventEmitter | 
| emitType |  | EventEmitter | 


`,
        idxName: `报表查询请求头-需优化`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/_dfb_ng_component',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="component_generate -v1">component_generate -v1</h2><p>主要实现angualr的组件输入输出函数, 文档描述生成</p>
<h3 @click="scrollTop($event)" id="使用说明">使用说明</h3><h4 @click="scrollTop($event)" id="安装">安装</h4><pre><code>npm install -g dfbng</code></pre>
<h4 @click="scrollTop($event)" id="功能">功能</h4><ol>
<li>针对angular中组件进行收集，生成文档</li>
</ol>
<h4 @click="scrollTop($event)" id="固定规则">固定规则</h4><ol>
<li>读取组件.ts文件，文件必须以下列方式开头才会被识别为组件</li>
</ol>
<pre><code>/**
 * type: 类型一:类型二:类型三
 * name: &#39;组件名&#39;
 */</code></pre>
<ol start="2">
<li>读取文档,在组件.ts文件同级目录下的readme.md或者组件文件同名的.md文件会被读取，二者合并</li>
</ol>
<h3 @click="scrollTop($event)" id="代码结构">代码结构</h3><h4 @click="scrollTop($event)" id="代码说明">代码说明</h4><ol>
<li>使用babel进行ast生成</li>
<li>利用访问者模式进行ast解析，生成自己想要的数据</li>
<li>通过解析的数据生成markdown，html, json,vue项目等文件</li>
<li>使用npm link进行npm全局测试</li>
<li>使用npm发布，进行安装，名为dfbng</li>
</ol>
<h4 @click="scrollTop($event)" id="代码限制">代码限制</h4><ol>
<li>暂时只允许单例编译</li>
</ol>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('component_generate -v1')" class="nav2 right_nav">component_generate -v1</a><a @click="scrollIdTop('使用说明')" class="nav3 right_nav">使用说明</a><a @click="scrollIdTop('安装')" class="nav4 right_nav">安装</a><a @click="scrollIdTop('功能')" class="nav4 right_nav">功能</a><a @click="scrollIdTop('固定规则')" class="nav4 right_nav">固定规则</a><a @click="scrollIdTop('代码结构')" class="nav3 right_nav">代码结构</a><a @click="scrollIdTop('代码说明')" class="nav4 right_nav">代码说明</a><a @click="scrollIdTop('代码限制')" class="nav4 right_nav">代码限制</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## component_generate -v1
主要实现angualr的组件输入输出函数, 文档描述生成

### 使用说明

#### 安装
'''
npm install -g dfbng
'''

#### 功能

1. 针对angular中组件进行收集，生成文档

#### 固定规则

1. 读取组件.ts文件，文件必须以下列方式开头才会被识别为组件

'''
/**
 * type: 类型一:类型二:类型三
 * name: '组件名'
 */
'''
2. 读取文档,在组件.ts文件同级目录下的readme.md或者组件文件同名的.md文件会被读取，二者合并

### 代码结构

#### 代码说明
1. 使用babel进行ast生成
2. 利用访问者模式进行ast解析，生成自己想要的数据
3. 通过解析的数据生成markdown，html, json,vue项目等文件
4. 使用npm link进行npm全局测试
5. 使用npm发布，进行安装，名为dfbng

#### 代码限制
1. 暂时只允许单例编译`,
        idxName: `工具文档介绍`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/_project_readme',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="component_generate -v1">component_generate -v1</h2><p>主要实现angualr的组件输入输出函数, 文档描述生成</p>
<h3 @click="scrollTop($event)" id="使用说明">使用说明</h3><h4 @click="scrollTop($event)" id="安装">安装</h4><pre><code>npm install -g dfbng</code></pre>
<h4 @click="scrollTop($event)" id="功能">功能</h4><ol>
<li>针对angular中组件进行收集，生成文档</li>
</ol>
<h4 @click="scrollTop($event)" id="固定规则">固定规则</h4><ol>
<li>读取组件.ts文件，文件必须以下列方式开头才会被识别为组件</li>
</ol>
<pre><code>/**
 * type: 类型一:类型二:类型三
 * name: &#39;组件名&#39;
 */</code></pre>
<ol start="2">
<li>读取文档,在组件.ts文件同级目录下的readme.md或者组件文件同名的.md文件会被读取，二者合并</li>
</ol>
<h3 @click="scrollTop($event)" id="代码结构">代码结构</h3><h4 @click="scrollTop($event)" id="代码说明">代码说明</h4><ol>
<li>使用babel进行ast生成</li>
<li>利用访问者模式进行ast解析，生成自己想要的数据</li>
<li>通过解析的数据生成markdown，html, json,vue项目等文件</li>
<li>使用npm link进行npm全局测试</li>
<li>使用npm发布，进行安装，名为dfbng</li>
</ol>
<h4 @click="scrollTop($event)" id="代码限制">代码限制</h4><ol>
<li>暂时只允许单例编译</li>
</ol>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('component_generate -v1')" class="nav2 right_nav">component_generate -v1</a><a @click="scrollIdTop('使用说明')" class="nav3 right_nav">使用说明</a><a @click="scrollIdTop('安装')" class="nav4 right_nav">安装</a><a @click="scrollIdTop('功能')" class="nav4 right_nav">功能</a><a @click="scrollIdTop('固定规则')" class="nav4 right_nav">固定规则</a><a @click="scrollIdTop('代码结构')" class="nav3 right_nav">代码结构</a><a @click="scrollIdTop('代码说明')" class="nav4 right_nav">代码说明</a><a @click="scrollIdTop('代码限制')" class="nav4 right_nav">代码限制</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## component_generate -v1
主要实现angualr的组件输入输出函数, 文档描述生成

### 使用说明

#### 安装
'''
npm install -g dfbng
'''

#### 功能

1. 针对angular中组件进行收集，生成文档

#### 固定规则

1. 读取组件.ts文件，文件必须以下列方式开头才会被识别为组件

'''
/**
 * type: 类型一:类型二:类型三
 * name: '组件名'
 */
'''
2. 读取文档,在组件.ts文件同级目录下的readme.md或者组件文件同名的.md文件会被读取，二者合并

### 代码结构

#### 代码说明
1. 使用babel进行ast生成
2. 利用访问者模式进行ast解析，生成自己想要的数据
3. 通过解析的数据生成markdown，html, json,vue项目等文件
4. 使用npm link进行npm全局测试
5. 使用npm发布，进行安装，名为dfbng

#### 代码限制
1. 暂时只允许单例编译`,
        idxName: `项目文档介绍`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},]
