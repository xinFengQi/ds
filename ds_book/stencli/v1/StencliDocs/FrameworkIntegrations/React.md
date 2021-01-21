<!--
 * @Date: 2021-01-21 16:25:44
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 17:27:22
-->

# React

对于使用create-react-app脚本构建的应用程序，包含组件库的最简单方法是从index.js文件调用defineCustomElements()。注意，在这个场景中，如果你需要在Edge或IE11上运行，就需要使用applyPolyfills。

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// test-component is the name of our made up Web Component that we have
// published to npm:
import { applyPolyfills, defineCustomElements } from 'test-components/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements();
});
```

遵循上述步骤将使您的Web组件能够在React中使用，但是还必须考虑一些其他复杂性。 [https://custom-elements-everywhere.com/](https://custom-elements-everywhere.com/)包含当前问题的提要。

## 属性和事件

在使用标准HTML定制元素时，React目前最大的缺陷是，包含非标量数据(即不是字符串或数字的数据)的属性不能正确传递，定制事件也不能正确处理。解决这两个问题的方法是将自定义标签包装在React组件中，获取自定义元素的ref，并使用ref来设置非标量属性并通过addEventListener添加事件监听器。下面是一个例子，展示了属性传递是如何工作的:

```
import React, { useRef, useEffect } from 'react';
import { Forecast } from '../models';
import { iconPaths } from '../util';

const DailyForecast: React.FC<{ forecast: Forecast; scale: string }> = ({ forecast, scale }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    (elementRef.current as any)!.iconPaths = iconPaths;
    (elementRef.current as any)!.forecasts = forecast;
  }, [forecast]);

  return <kws-daily-forecast scale={scale} ref={elementRef}></kws-daily-forecast>;
};

export default DailyForecast;
```

在此示例中，具有三个属性：forecast是一个对象数组，iconPaths一个对象和scale一个字符串。由于scale是字符串，因此可以正常处理。但是，其他两个属性是非标量的，必须通过将其设置ref为Custom Element。这样包装这个自定义标签可以防止你可能需要为每一个kws-daily-forecast实例来获取一个ref，因为你将会这样使用DailyForecast React组件:

```
<DailyForecast scale={scale} forecast={f}></DailyForecast>
```

## 绑定

将所有自定义元素手动包装在React组件中是一个好习惯，但是很快就会变得乏味。

通过绑定，Web组件被包装在React组件中，然后立即可作为React组件使用。这样做的一些优点是您可以获得组件的类型。React的主要问题之一是React无法正确地将属性传递给开箱即用的Web组件，React只能将字符串和数字传递给组件，并且不能监听自定义事件。有了绑定，这些组件就好像它们是React组件一样，并且所有属性（包括函数，对象和数组）都可以正确传递。绑定还通过创建名为“ on”的属性来监听自定义事件。这些使React开发人员可以像对待React组件一样与Web组件进行交互。

## 安装

```
npm install @stencil/react-output-target --save-dev
```

## Stencli配置设置

```
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'demo',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'component-library',
      proxiesFile: '../component-library-react/src/components.ts',
    }),
    {
      type: 'dist',
    },
  ],
};
```

### COMPONENTCOREPACKAGE

### PROXIESFILE



## 设置React组件库

Github上提供了一个示例组件库包，因此您可以开始使用。此存储库可能会作为您的Stencil组件库的同级对象存在。[https://github.com/ionic-team/stencil-ds-react-template](https://github.com/ionic-team/stencil-ds-react-template)

## 用法

```
import { DemoComponent } from 'component-library-react';
```