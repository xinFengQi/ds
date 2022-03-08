<!--
 * @Date: 2021-01-21 16:25:37
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 17:11:38
-->
# Angular

在Angular CLI项目中使用模板构建的web组件集合需要两个步骤。

1. 在使用组件的模块中包含CUSTOM_ELEMENTS_SCHEMA。
2. 从main.ts调用defineCustomElements()(或其他合适的地方)。

## 包括自定义标签架构

在module中包含CUSTOM_ELEMENTS_SCHEMA允许在HTML标记中使用web组件，而编译器不会产生错误。这段代码应该添加到AppModule和其他所有使用自定义标签的module中。下面是一个把它添加到AppModule的例子:

```
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

任何使用自定义标签的module都需要包含CUSTOM_ELEMENTS_SCHEMA。

## 调用defineCustomElements

使用“stencil”构建的组件集合包含一个用于加载集合中的组件的主函数。该函数被称为defineCustomElements()，它需要在应用程序引导过程中调用一次。main.ts就是这样方便调用的地方:

```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target config
import { defineCustomElements } from 'test-components/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements();
```

## Edge和IE11的polyfills

如果您希望自定义标签能够在较老的浏览器上工作，您应该添加defineCustomElements()函数的applyPolyfills()函数。

## 使用ViewChild和ViewChildren访问组件

一旦包含组件，就可以使用ViewChild和ViewChildren在代码中引用组件,在以下示例中:

```
import {Component, ElementRef, ViewChild} from '@angular/core';

import 'test-components';

@Component({
    selector: 'app-home',
    template: `<test-components #test></test-components>`,
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

    @ViewChild('test') myTestComponent: ElementRef<HTMLTestComponentElement>;

    async onAction() {
        await this.myTestComponent.nativeElement.testComponentMethod();
    }
}
```

## 绑定

Angular在与Web组件集成方面有一个很好的方案，但是在开发人员体验存在一些问题。通过绑定，Web组件将被包裹在Angular组件中，然后立即可作为Angular组件使用。这样做的优点是您可以获得组件的类型，并且还可以在输入中使用ngModel。然后，开发人员从Angular应用程序中使用Web组件时，会导入一个实际的Angular库，并让他们感觉好像他们正在与Angular组件进行交互。

## 安装

```
npm install @stencil/angular-output-target --save-dev
```

## stencil配置设置

要使用AngularOutputPlugin，首先将其导入到stencil.config.ts文件中。然后将其添加为OutputTarget。

```
import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'demo',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'component-library',
      directivesProxyFile: '../component-library-angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
    },
  ],
};
```

### COMPONENTCOREPACKAGE

这是核心stencil包的NPM包名。在Ionic的例子中，我们选择了“@ionic/core”。这是发布的软件包，仅包含您的Web组件。然后，这个包会被Angular包作为一个依赖来使用

### PROXIESFILE

这是由outputTarget生成的输出文件。该文件应引用其他程序包位置。在示例情况下，我们选择同级目录的src目录。然后，我们将创建一个Angular包，该包将导出此文件中定义的所有组件。

### VALUEACCESSORCONFIGS
为了使ngmodel在输入组件上起作用，我们需要定义有关输入组件的某些信息。不幸的是，Stencil编译器无法推断组件的意图，因为这是一个非常概念性的想法。

## Angular组件库的设置

Github上提供了一个示例组件库包，因此您可以开始使用。此存储库可能会作为您的Stencil组件库的同级对象存在。[https://github.com/ionic-team/stencil-ds-angular-template](https://github.com/ionic-team/stencil-ds-angular-template)

## 用法

```
import { ComponentLibraryModule } from 'component-library-angular';

@NgModule({
  ...
  imports: [
    ComponentLibraryModule
  ],
  ...
})
export class AppModule { }
```