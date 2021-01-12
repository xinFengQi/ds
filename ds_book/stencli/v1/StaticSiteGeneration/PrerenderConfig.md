# 用于生成静态站点(SSG)的预渲染配置

从1.13.0开始, prerender的可选配置可以在预渲染www输出目标时使用。该prerender.config.ts文件可以在序列化为HTML之前进一步更新每个页面的已解析文档。

在stencil.config.ts中，使用prerenderConfig属性将路径设置为预渲染配置文件路径，例如：

```
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://stenciljs.com/',
      prerenderConfig: './prerender.config.ts',
    }
  ]
};
```
接下来，在prerender.config.ts文件内部，它应该使用该PrerenderConfig接口导出对象config

```
import { PrerenderConfig } from '@stencil/core';
export const config: PrerenderConfig = {
  ...
};
```

|   配置项     |                 描述 |                   默认值 | 
| :----:       | :----:              | :----:                    |
| afterHydrate(document, url) | 在每个文档hydrated后运行，但在将其序列化为HTML字符串之前运行。|  | 
| beforeHydrate(document, url) | 在每个文档hydrated之前运行。  |   |
| afterSerializeTemplate(html) | 在模板文档对象序列化成HTML格式的字符串后运行。返回一个HTML字符串，用于作为所有预呈现页面的基本模板。   |  |
| beforeSerializeTemplate(document) | 在模板文档对象序列化为HTML格式的字符串之前运行。返回要序列化的文档，该文档将成为所有预呈现页面的基本模板html。  |   |
| canonicalUrl(url) | 一个用来生成规范链接的钩子。标签在&lt;head&gt;每个预先渲染的页面。返回null不会向页面添加规范的url标记。   |  |
| crawlUrls| 在预渲染时，抓取<a href>元素中的同源url。   | true  |
| entryUrls | 	开始预渲染的url。默认情况下，使用/的根URL。 | ['/'] |
| filterAnchor(attrs, base) | 返回true给定的&lt;a>标签元素是否应该被抓取。   |  |
| filterUrl(url, base) | 如果给定的URL需要预渲染，则返回true。   |  |
| filePath(url, filePath) | 返回预渲染的HTML内容应该写入的文件路径。   |  |
| hydrateOptions(url) | 返回Hydrate选项，用于每个单独的预渲染页面。   |  |
| loadTemplate(filePath) | 返回模板文件的内容。模板是用于所有预渲染页面的基本HTML。   |  |
| normalizeUrl(href, base) | 用于从给定的字符串和当前页面的基URL规范化页面的URL。主要用于读取锚的href属性值并将其规范化为URL。   |  |
| staticSite| 静态站点生成(SSG)。不包括模板的客户端JavaScript，自定义元素或预加载模块。   | false |
|trailingSlash | 开始预渲染的url。缺省情况下，使用/的根URL。   | false |

## 单页Hydrate选项
除了使用进行整个预渲染过程的prerender.config.ts设置外，您还可以为每页设置单独的Hydrate选项。该hydrateOptions(url)钩子可用于进一步配置每个页面。下面是带有hydrateOptions()挂钩的prerender配置的示例，该配置返回每个页面的选项。
```
import { PrerenderConfig } from '@stencil/core';

export const config: PrerenderConfig = {
  hydrateOptions(url) {
    return {
      prettyHtml: true
    };
  }
};
```

|   配置项     |                 描述 |                   默认值 | 
| :----:       | :----:              | :----:                    |
|addModulePreloads | 最终被请求的模块添加&lt;link rel="modulepreload">    | true | 
| approximateLineWidth | 设置HTML应该尽量保持的大致行宽。注意，这是“近似的”，因为HTML可能经常不能以精确的行宽分割。另外，新创建的行是HTML中已经有空白的地方，比如属性之前或单词之间的空格。 |  100 |
|canonicalUrl |   在&lt;链接上设置href属性rel="canonical"&gt;标签&lt;head&gt;。如果该值没有定义，它将确保一个规范的链接标签不包含在&lt;head&gt;中。 |  |
| clientHydrateAnnotations |  包括客户端JavaScript使用的HTML注释和属性，以读取HTML的结构并重建每个组件。 | true  |
| constrainTimeouts |  限制setTimeout()为1ms，但仍然是异步的。也只允许setInterval()触发一次，也限制为1ms。  |  true |
| cookie  | 设置document.cookie   | true  |
| direction | 在最顶层&lt;html>设置dir属性。	 |  |
| excludeComponents |  这里列出的组件标记名称不会预渲染，也不会在客户端进行hydrated。这里列出的组件将作为自定义元素被忽略，其处理方式与&lt;div>没有区别。  |  |
| inlineExternalStyleSheets | 从&lt;link rel="样式表"&gt;改为内联到&lt;style&gt;元素。   | true |
| language   |  在最顶层&lt;html>设置lang属性。 |  |
|maxHydrateCount   | 一页上要hydrate的最大组件树。  | 300 |
| minifyScriptElements | 缩小&lt;script&gt;元素的JavaScript内容。   | true |
| minifyStyleElements | 缩小&lt;style&gt元素中的CSS内容。   | true |
| prettyHtml   | 以良好的缩进格式格式化HTML。   | false |
| referrer | 设置document.referrer   |  |
| removeAttributeQuotes |  	尽可能删除属性值中的引号。  | true |
| removeBooleanAttributeQuotes |  从标准化的布尔属性(例如hidden或checked)中移除=""。  | true |
| removeEmptyAttributes |  当class、dir、id、lang和name、title这些标准化属性的值为空时，删除它们。  | true |
| removeHtmlComments | 删除HTML注释。  | true |
| removeScripts | 删除文档中出现的所有&lt;script>元素。   | false |
| removeUnusedStyles |   删除文档中不使用的CSS元素。 | true |
| resourcesUrl |  运行时用于资源(如静态资源目录)的url。  |  |
| runtimeLogging |  将运行时控制台日志打印到NodeJS进程。  | false |
| staticComponents |  这里列出的组件将只进行预渲染或服务器端渲染，而不会在客户端进行hydrated。这对于那些非动态且不需要在浏览器中定义为自定义元素的组件非常有用。例如，页眉或页脚组件就是一个很好的例子，它们可能不需要任何客户端JavaScript。  | false |
| staticDocument |  整个文档应该是静态的。这对于应该是静态的特定页面(而不是整个站点)很有用。如果整个站点是静态的，那么应该使用prerender配置上的staticSite属性。如果只有某些组件应该是静态的，那么使用staticComponents代替。  | false |
| timeout | 等待页面完成渲染直到抛出超时错误的毫秒数。   | 15000 |
| title |  设置document.title  |  |
| url |  设置location.href  |  |
| userAgent | 设置navigator.userAgent  |  |
