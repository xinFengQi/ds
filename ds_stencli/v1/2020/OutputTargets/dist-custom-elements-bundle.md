# 自定义元素包

disti -custom-elements-bundle输出目标用于作为单个bundle生成定制元素。即使输出以“single”包的形式结束，生成它也是为了确保组件是可被摇树优化的。例如，如果一个组件库中有100个组件，但是一个外部项目仅从输出包(库)中导入了一个组件，那么只有该组件使用的代码才会被拉入项目。这是由于Stencil使用了ES模块，并且编译器生成了友好的代码供压缩程序分析和理解。

```
outputTargets: [
  {
    type: 'dist-custom-elements-bundle',
  },
];
```

## 定义导出的自定义元素

默认情况下，自定义元素包将被写入dist/custom-elements/index.js。可以使用输出目标(output target)的dir配置来配置此目录。生成的index.js文件包含对每个组件类的导出，并将其样式包含在导出的包(库)中。但是，此构建不会自动定义自定义元素或应用任何polyfill。

以下是在包中定义自定义元素的示例：

```
import { HelloWorld } from 'my-library/dist/custom-elements';

customElements.define('hello-world', HelloWorld);
```

如果某个组件依赖于其他组件，则需要手动注册每个组件。这是很无趣和性能低的，因此，为方便起见，导出(捆绑)包(库)还导出了defineCustomElements()方法。

当defineCustomElements()被调用时，它会定义捆绑的每个组件。但是，它不会自动运行，并且如果不被导入和被执行它也不会被调用。如果导入了未使用的组件，这也可能影响导出(捆绑)包(库)的大小。

```
import { defineCustomElements } from 'my-library/dist/custom-elements';

defineCustomElements();
```

生成的导出(捆绑)包(库)将导出每个组件类，并且已经捆绑了样式。但是，它没有定义自定义元素或应用任何polyfill。

## 使用内置资源

出于性能原因，生成的导出(捆绑)包(库)不包括JavaScript输出中内置的本地资源，所以建议将静态资源保留为外部文件。将它们保持在外部，可以确保可以按需请求它们，而不是将其内容压缩到JS文件中，或者添加许多URL供导出(捆绑)程序添加到输出中。其中确保对本地资源对外部构建和http服务器可使用的一种方法是设置资源路径setAssetPath()。

该setAssetPath()功能用于手动设置可以找到静态资源的基本路径。对于延迟加载的输出目标，将自动设置静态资源路径，并将资源复制到正确的构建目录。对于自定义元素构建，setAssetPath(path)应该使用来定制静态资源路径，但是还是具体取决于它们在http服务器上的位置。

如果组件的脚本是type="module"，则建议使用import.meta.url，例如setAssetPath(import.meta.url)。其他选项包括setAssetPath(document.currentScript.src)，或使用打包程序的replace插件在构建时动态设置路径，例如setAssetPath(process.env.ASSET_PATH)。

```
import { defineCustomElements, setAssetPath } from 'my-library/dist/custom-elements';

setAssetPath(document.currentScript.src);
defineCustomElements();
```

确保将资源复制到应用程序的公共目录中。这个配置取决于你的脚本是如何绑定的，或者是否绑定，以及你的资源可以从哪里加载。文件如何复制到产品构建目录取决于打包程序或工具。下面的配置提供了一些例子，演示了如何使用流行的打包程序自动完成这一操作。

## 分发自定义元素

您的组件库可以很容易地在NPM上分发，类似于@ionic/core的做法。通过这样，您的库的使用者可以决定如何将您的库导入到他们的项目。对于dist-custom-elements-bundle，默认导入位置为my-library/dist/custom-elements-bundle，但是需要在package.json文件中进行进一步配置。

要使自定义元素捆绑(导出)包的作为入口模块，请将package.json的module属性设置为："dist/custom-elements-bundle/index.js"
另外，请确保将@stencil/core设置为程序包的依赖项。

```
{
  "module": "dist/custom-elements-bundle/index.js",
  "dependencies": {
    "@stencil/core": "latest"
  },
  ...
}
```

注意：如果您同时分配dist和dist-custom-elements-bundle，那么由你来选择它们中的哪一个应该在模块条目中可用。

现在，您可以将库发布到[Node Package Manager（NPM）](https://www.npmjs.com/)。有关设置package.json文件和发布的更多信息，请参见：将组件库发布到NPM。

## 打包配置(捆绑器配置示例)

使用自定义元素导出包因您使用的打包工具而异。这些示例将帮助您的用户通过webpack和Rollup打包您的组件。

以下示例假定您的组件库以my-library形式发布到NPM 。您应该将此名称更改为您实际用来发布库的名称。

用户将需要在导入之前安装您的库。

```
npm install my-library
```

### webpack.config.js

webpack的配置如下图所示。注意，资产是如何通过CopyPlugin工具从库的node_module文件夹复制到dist/assets的。如果你的库包含本地资源，这一点很重要。

```
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'node_modules/my-library/dist/my-library/assets'),
          to: path.resolve(__dirname, 'dist/assets'),
        },
      ],
    }),
  ],
};
```

### rollup.config.js

rollup的配置如下图所示。注意，资产是如何通过CopyPlugin工具从库的node_module文件夹复制到dist/assets的。如果你的库包含本地资源，这一点很重要。

```
import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [{ dir: path.resolve('dist/'), format: 'es' }],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extensions: ['.css'],
    }),
    copy({
      targets: [
        {
          src: path.resolve(__dirname, 'node_modules/my-library/dist/my-library/assets'),
          dest: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
};
```

## 这与“ dist”输出目标有何不同？

diste -custom-elements-bundle将每个组件构建为HTMLElement扩展的独立类。输出是一个已经附加了样式的标准化自定义元素，并且没有任何模板的延迟加载。对于已经在处理打包优化、延迟加载和定义自定义元素本身的项目，这可能是首选。

另一方面，dist输出目标更适合那些希望允许组件自己惰性加载的项目，而不需要设置打包配置来这样做。

## 浏览器支持

如果要在IE11上使用该库，建议您改用dist输出目标，因为它会按需加载所需的polyfill。该dist-custom-elements-bundle建议仅针已经支持自定义元素，Shadow DOM和CSS变量（基本上没有IE11或Edge 12-18）的现代浏览器中。如果要在旧版浏览器中使用此版本，则使用这些组件的项目时必须提供自己的polyfill，并将输出正确降级为ES5。

好消息是，这些特性已被现代Web开发广泛支持：

1. 自定义元素支持
2. Shadow DOM支持
3. CSS变量支持
4. ES模块
5. 异步/等待