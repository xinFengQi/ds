# Stencli的目标和宗旨

Stencli旨在将最流行的前端框架的最佳概念组合到编译时（compile-time）工具中，而不是运行时（run-time）工具中。需要强调的是，Stencli的目标不是成为或者被视为“框架”，而是提供出色的开发人员体验和框架所期望的工具。同时在浏览器中运行时使用Web标准。在许多情况下，鉴于浏览器现在具有可用的功能，Stencli可以用作传统前端框架的替代品，尽管它不是必须这么做。

## 网络标准

最后由Stencli生成的组建是建立在Web组件之上的，因此它们可以在任何主要框架中工作，也可以根本没有框架。此外，其他严重依赖的标准包括ES模块和动态导入，这些模块已被证明可以取代传统的捆绑程序，从而增加了不必要的复杂性和运行时JavaScript。通过使用Web标准，开发人员可以学习和采用世界各地记录的标准API。而不是不断变化的自定义框架API。

## 自动优化

开发人员必须进行无数次优化和调整，以提高组件和网站的性能。使用编译器，Stencil能够将组件代码作为输入进行分析，并生成优化的组件代码作为输出。

## 未来友好

随着软件开发领域的不断发展，编译器也将不断发展。不需要完全重写组件，编译器可以继续使用标准组件模型作为通用输入来进行优化。该编译器允许开发人员创建对未来友好的组件，同时仍保持最新更新，而无需一遍又一遍重写组件。此外，如果任何API发生了变化，编译器就可以进行自动调整，并确切通知开发人员需要更新的内容。

## 运行时性能

与编写用户需要下载并解析应用程序才能运行的JavaScript定制客户端不同，Stencil更喜欢使用直接在浏览器中构建的非常出色的api。这些api包括自定义元素等。

## 微小的API

Stencil故意不附带需要反复学习的大型定制API，而是严重依赖于(你猜对了)web标准。同样，我们的目标不是创建另一个框架，而是为开发人员提供工具，使用浏览器中已经成熟的api生成未来友好的组件。API越小，就越容易学习，也越不易破坏。

## 开发过程中的框架特性

如果你还没有注意到，我们认为网络标准很好，提供了很多好处。虽然使用没有任何结构的web标准当然是可能的，而且实际上有很多这样的用例是合适的，但我们发现，随着应用程序和团队的扩展，它很快就变得难以管理。开发人员经常被框架所吸引，因为它们具有出色的工具、定义好的结构，以及允许开发人员快速构建应用程序的能力。Stencil最大的目标之一是在开发过程中拥有优秀的框架特性和一流的工具，但生成面向未来的web标准代码，而不是定制的特定于框架的代码。

## 广泛的浏览器支持

对于少数不支持现代浏览器特性和api的浏览器，Stencil将自动按需填充它们。这意味着，对于已经在本地支持该特性的浏览器，它们将不必下载和解析任何不必要的JavaScript。好消息是，在今天的web环境中，大多数现代api都已经针对Stencil的需求发布了。开箱即用的浏览器支持包括IE11和更高版本。





