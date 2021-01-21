# SEO元标记和静态网页生成

Web Apps需要列出有关内容的详细元信息，以便最大化SEO并提供良好的社交媒体嵌入体验。

Stencil预渲染的一个好处是，大多数DOM API也可以在NodeJS环境中使用。例如，要设置文档标题，只需运行document.title = "Page Title"。或可以使用与浏览器中常见的DOM API（例如document.head和document.createElement('meta')）相同的方式添加和更新元标记。这意味着您的组件运行时可能已经能够在预渲染过程中完成许多自定义工作。

同时，Prerender配置还提供了许多选项，允许修改单个页面。例如，afterHydrate(document, url)钩子可以在将文档序列化为HTML字符串之前，用于更新已解析的文档。document参数的使用与在网页中的document没有什么不同，而url参数是所呈现页面的url位置。

在下面的示例中，该afterHydrate(document, url)钩子通过url的路径名设置文档标题。

```
import { PrerenderConfig } from '@stencil/core';

export const config: PrerenderConfig = {
  afterHydrate(document, url) {
    document.title = url.pathname;
  }
};
```

## @stencil/helmet

当使用Stencil构建静态站点时，通过使用该@stencil/helmet包可以使动态管理元标记更加容易。

首先，安装软件包：

```
npm install --save-dev @stencil/helmet
```

然后，要更新&lt;head>文档中的meta标签，请使用&lt;Helmet>功能组件：

```
import Helmet from '@stencil/helmet';

const MyComponent = ({ title, description }: Props) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="..." />
    <meta name="twitter:creator" content="..." />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="..." />

    <meta property="fb:page_id" content="..." />
    <meta property="og:url" content="..." />
    <meta property="og:type" content="..." />
    <meta property="og:title" content="..." />

    <meta property="og:image" content="..." />
    <meta property="og:description" content="..." />
    <meta property="og:site_name" content="..." />
    <meta property="article:publisher" content="..." />
    <meta property="og:locale" content="..." />
  </Helmet>
)
```

可在任何可见的组件上使用此组件，并且&lt;ead>中的元标记将被更新。