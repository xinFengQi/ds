<!--
 * @Date: 2021-01-20 16:50:54
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-20 17:04:21
-->
# Hydrate App

HydrateApps是由相同组件组成的捆绑包，但经过编译后可以在NodeJS服务器上水合并生成HTML。这是内部预渲染使用的同一NodeJS应用程序，也是Angular Universal SSR用于Ionic的同一NodeJS应用程序。像Stencil组件一样，HydrateApps本身不限于一个框架

请注意，Stencli不会使用Puppeteer进行SSR或预渲染。

## 如何使用HydrateApps

服务器端渲染（SSR）可以通过类似于预渲染的方式来完成。您可以添加{ type: 'dist-hydrate-script' }到中stencil.config.js中而不是使用CLI的--prerender标志。这将在您的根项目目录中生成一个HydrateApp，可以被您的节点服务器导入和使用。
发布组件库后，您可以将hydrate应用程序导入到服务器的代码中，如下所示：

```
import { hydrateDocument } from 'yourpackage/hydrate';
```

该应用程序有两个功能，hydrateDocument和renderToString。hydrateDocument的一个优点是它可以获取已经解析过的现有文档。而renderToString函数则输入一个原始的html字符串，并对文档进行解析。

hydrateDocument:在提供web页面之前，可以将hydrateDocument作为服务器响应逻辑的一部分。hydrateDocument接受两个参数，一个文档和一个配置对象。该函数将返回水化结果的promise 。可以从返回结果中的html属性解析生成的html。

取自Ionic Angular服务器的示例：

```
import { hydrateDocument } from 'yourpackage/hydrate';

export function hydrateComponents(doc) {
  return hydrateDocument(doc)
    .then((hydrateResults) => {
      // execute logic based on results
      console.log(hydrateResults.html);
      return hydrateResults;
    });
}
```

##### HYDRATEDOCUMENT选项

```
canonicalUrl - string
constrainTimeouts - boolean
clientHydrateAnnotations - boolean
cookie - string
direction - string
language - string
maxHydrateCount - number
referrer - string
removeScripts - boolean
removeUnusedStyles - boolean
resourcesUrl - string
timeout - number
title - string
url - string
userAgent - string
```

renderToString: hydrateApp也有一个renderToString函数，允许你传入一个html字符串，同时返回一个水化结果的promise。第二个参数是可以更改标记输出的config对象。与hydrateDocument类似，结果字符串可以从html属性解析。

取自Ionic Core的示例:

```
const results = await hydrate.renderToString(srcHtml, {
  prettyHtml: true,
  removeScripts: true
});

console.log(results.html);
```

##### RENDERTOSTRING选项

```
approximateLineWidth - number
prettyHtml - boolean
removeAttributeQuotes - boolean
removeBooleanAttributeQuotes - boolean
removeEmptyAttributes - boolean
removeHtmlComments - boolean
afterHydrate - boolean
beforeHydrate - boolean
```