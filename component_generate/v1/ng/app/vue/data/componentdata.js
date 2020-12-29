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
                    <h2 @click="scrollTop($event)" id="AdComponent">AdComponent</h2><p>来源地址: F:/TypeScript/angularTest/src/app/component/ad.component.ts</p>
<pre><code class="language-javascript">export interface AdComponent {
  data: any;
}</code></pre>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('AdComponent')" class="nav2 right_nav">AdComponent</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## AdComponent
来源地址: F:/TypeScript/angularTest/src/app/component/ad.component.ts
'''javascript
export interface AdComponent {
  data: any;
}
'''

`,
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

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('component_generate -v1')" class="nav2 right_nav">component_generate -v1</a><a @click="scrollIdTop('使用说明')" class="nav3 right_nav">使用说明</a><a @click="scrollIdTop('安装')" class="nav4 right_nav">安装</a><a @click="scrollIdTop('功能')" class="nav4 right_nav">功能</a><a @click="scrollIdTop('固定规则')" class="nav4 right_nav">固定规则</a><a @click="scrollIdTop('代码结构')" class="nav3 right_nav">代码结构</a><a @click="scrollIdTop('代码说明')" class="nav4 right_nav">代码说明</a>
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
5. 使用npm发布，进行安装，名为dfbng`,
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
                    <h1 @click="scrollTop($event)" id="AngularTest">AngularTest</h1><p>This project was generated with <a href="https://github.com/angular/angular-cli">Angular CLI</a> version 7.1.4.</p>
<h2 @click="scrollTop($event)" id="Development server">Development server</h2><p>Run <code>ng serve</code> for a dev server. Navigate to <code>http://localhost:4200/</code>. The app will automatically reload if you change any of the source files.</p>
<h2 @click="scrollTop($event)" id="Code scaffolding">Code scaffolding</h2><p>Run <code>ng generate component component-name</code> to generate a new component. You can also use <code>ng generate directive|pipe|service|class|guard|interface|enum|module</code>.</p>
<h2 @click="scrollTop($event)" id="Build">Build</h2><p>Run <code>ng build</code> to build the project. The build artifacts will be stored in the <code>dist/</code> directory. Use the <code>--prod</code> flag for a production build.</p>
<h2 @click="scrollTop($event)" id="Running unit tests">Running unit tests</h2><p>Run <code>ng test</code> to execute the unit tests via <a href="https://karma-runner.github.io">Karma</a>.</p>
<h2 @click="scrollTop($event)" id="Running end-to-end tests">Running end-to-end tests</h2><p>Run <code>ng e2e</code> to execute the end-to-end tests via <a href="http://www.protractortest.org/">Protractor</a>.</p>
<h2 @click="scrollTop($event)" id="Further help">Further help</h2><p>To get more help on the Angular CLI use <code>ng help</code> or go check out the <a href="https://github.com/angular/angular-cli/blob/master/README.md">Angular CLI README</a>.</p>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('AngularTest')" class="nav1 right_nav">AngularTest</a><a @click="scrollIdTop('Development server')" class="nav2 right_nav">Development server</a><a @click="scrollIdTop('Code scaffolding')" class="nav2 right_nav">Code scaffolding</a><a @click="scrollIdTop('Build')" class="nav2 right_nav">Build</a><a @click="scrollIdTop('Running unit tests')" class="nav2 right_nav">Running unit tests</a><a @click="scrollIdTop('Running end-to-end tests')" class="nav2 right_nav">Running end-to-end tests</a><a @click="scrollIdTop('Further help')" class="nav2 right_nav">Further help</a>
                </article>  
            </div>
        </div>`, 
        markdown: `# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run 'ng serve' for a dev server. Navigate to 'http://localhost:4200/'. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run 'ng generate component component-name' to generate a new component. You can also use 'ng generate directive|pipe|service|class|guard|interface|enum|module'.

## Build

Run 'ng build' to build the project. The build artifacts will be stored in the 'dist/' directory. Use the '--prod' flag for a production build.

## Running unit tests

Run 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use 'ng help' or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
`,
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
