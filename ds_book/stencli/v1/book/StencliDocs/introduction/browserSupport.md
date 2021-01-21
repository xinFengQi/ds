# 浏览器支持

Stencli构建的web组件可在所有被广泛使用的台式机和移动浏览器中天然的或者近天然的运行。

1. chrome 60+
2. Safari 10.1+
3. Firefox 63 +
4. Edge 79+
5. IE 11, Edge16-18 支持捆绑的polyfills(填充或者补充代码，以实现某种不兼容的语法或者功能)

Web组件围绕"定制元素V1"规范(以跨浏览器的方式定义和创建实质上新的HTML标记)的一组标准化浏览器API，它是现以失效的v0规范的后继者。

Chrome,Firefox和Safari(包括ios)原生支持自定义元素！Edge中的支持目前正在开发中。

对于没有natively(自然)支持的浏览器，一个小的polyfill可以帮助开发人员无缝的使用Custom Elements(自定义元素)，并且几乎没有性能开销。

Stencli使用动态加载实现仅在需要它的浏览器上加载自定义元素polyfill。借助这种polyfill，Stencil的支持的浏览器包括Chrome(以及所有基于Chrome内核的浏览器),Safari,Firefox,Edge和E11

|        | Chrome 60+ | Safari 10.1+ | Firefox 63+ | Edge 79+ | Edge 16-18 | IE 11 |
| :----: | :----:| :----: | :----:  |
| [CSS变量](https://caniuse.com/css-variables) | 支持  | 支持 | 支持  |支持 | 支持 | 不支持 | 
| [自定义元素](https://caniuse.com/custom-elementsv1) | 支持  | 支持  |支持 |支持 | 不支持 | 不支持 | 
| [Shadow Dom(阴影Dom)](https://caniuse.com/shadowdomv1) | 支持   | 支持 |支持 |支持 | 不支持 | 不支持 | 
| [es2017](https://caniuse.com/async-functions) | 支持  | 支持  |支持 |支持 | 支持 | 不支持 | 
| [ES Modules(Es模块)](https://caniuse.com/es6-module) | 支持   | 支持 |支持 |支持 | 支持 | 不支持 | 


