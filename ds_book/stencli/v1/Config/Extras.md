# 额外的功能


extras配置包含为需要对polyfill脚本进行操作的DOM添加和删除运行时的选项。例如，当使用Slot polyfill时，并非所有DOM API都被完全填充。由于不是所有用户都需要额外的运行时，因此大多数都是可选择加入的。

默认情况下，Stencil不能在IE11, Edge 18及以下(Edge 18在它移动到Chromium之前)和Safari 10上工作。为了支持传统浏览器，浏览器需要下载并运行polyfills。通过使用extras配置，应用程序可以选择添加这些额外的运行时设置。

```
export const config: Config = {
  buildEs5: 'prod',
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  }
};
```

注意：buildEs5: 'prod'由于此示例需要支持旧版浏览器，因此也在配置中进行了设置。有关更多信息，请参见buildEs5配置。

## appendChildSlotFix

默认情况下，插槽(slot) polyfill不会更新appendChild(),因此会像shadow dom的工作方式一样将新的子节点附加到正确的子插槽(slot)中，这是需要的人可以选择加入的polyfill(腻子脚本)。

## cloneNodeFix

默认情况下，我们在运行时使用cloneNode()克隆组件时，slot polyfill不会生效。这是需要的人可以选择加入的polyfill(腻子脚本)


## cssVarsShim

包括适用于旧版浏览器的CSS自定义属性的polyfill / shim。

将其设置为的结果false后，您将需要为旧版构建手动提供“fallback”属性。在下面的css中，不会为IE11多填充css变量，因此开发人员将需要手动在css变量之前提供一个后备属性。如果应用程序不需要支持IE11，建议将cssVarsShim设置保留为默认值false。

## dynamicImportShim

动态导入(import())垫片(shim)。仅Edge 18及以下版本以及Firefox 67及以下版本才需要。如果不需要支持Edge 18及以下版本（Edge移至Chromium之前），则建议将其设置dynamicImportShim为false。默认为false。

## lifecycleDOMEvents

调度组件生命周期事件。默认情况下，不会调度这些事件，但通过启用此选项，这些事件可以在window上使用on监听。主要用于测试。

|   活动名称     |                 描述 |      
| :----:       | :----:              | 
| stencil_componentWillLoad |  为每个组件的调度componentWillLoad。 | 
| stencil_componentWillUpdate | 	为每个组件的调度componentWillUpdate。 | 
| stencil_componentWillRender | 为每个组件的调度componentWillRender。 | 
| stencil_componentDidLoad | 	为每个组件的调度componentDidLoad。 | 
| stencil_componentDidUpdate | 	为每个组件的调度componentDidUpdate。| 
| stencil_componentDidRender | 	为每个组件的调度componentDidRender。 | 


## safari10

Safari 10支持ES模块&lt;script type="module">，但未实现&lt;script nomodule>。设置safari10为时false，运行时不会修补对Safari 10的支持。如果应用程序不需要支持Safari 10，建议将其设置为false。默认为false。

## scriptDataOpts

可以将数据设置给&lt;script>元素的data-opts属性，然后将其传递到Stencil的初始引导程序。但是却很少使用，仅在非常特殊的情况下才需要此功能。设置为时false，将不会读取此数据。默认为false。

## shadowDomShim

如果启用为true，运行时将检查是否需要Shodow dom垫片(shim)。然而，如果它确定shadow dom已经被浏览器原生支持，那么它就不会请求shim。设置为false将使所有shodow dom不需要使用shim。如果应用程序不需要支持IE11或Edge 18及以下，建议将shadowDomShim设置为false。默认值为false。

## slotChildNodesFix

对于不支持shadow dom的浏览器(IE11和Edge 18及以下)，将填充slot以模拟相同的行为。但是，原生元素的childNodes和children的生成器器并没有被修补，所以只显示默认槽位(slot)的子节点和元素。默认值为false。