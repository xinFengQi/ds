<!--
 * @Date: 2021-01-21 10:56:59
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-21 11:31:33
-->
# Service Workers

Service Workers是PWA必不可少的非常强大的api ，但可能很难使用。为了解决这个问题，我们决定使用Workbox在Stencil中为Service Workers提供支持。

## 什么是Workbox?

Workbox是一个可以大大简化Service Worker API的库。它使您可以快速生成Service Workers，该Service Workers可以处理静态资源缓存，使用路由（类似于Express）缓存远程资源，甚至可以进行离线Google Analytics（分析）。由于我们建立在Workbox之上，因此您可以轻松使用其提供的任何功能。有关Workbox的更多信息，[请查看其文档](https://developers.google.com/web/tools/workbox/)

### 用法

当使用Stencil构建应用时，Stencil编译器会自动为你生成一个service worker，并注入必要的代码来在你的index.html中注册service worker。此外，由于Stencil生成的文件是散列(哈希)的，所以每次您进行生产构建并向应用程序推送更新时，service worker都会知道要更新，因此确保您的用户不会被站点的陈旧版本卡住。

让我们来看看为你的项目启用service worker所需的步骤:

1. cd 进入您的项目
2. 运行npm run build

就这样!您的www文件夹中应该有一个sw.js文件，并在您的www/index.html文件中注册service worker的代码。

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
默认情况下，组件启动器未启用service worker，因为组件集合不需要service worker
</div>

### 配置项

stencil实现下面的Workbox, 并且默认情况下使用该generateSW模式从config对象生成service worker。因此，它支持所有[Workbox generateSW config](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config)选项。这是Stencil使用的默认配置：

```
{
  globPatterns: [
    '**/*.{js,css,json,html}'
  ]
};
```

此配置可以对所有应用程序资源进行预缓存。

要修改此配置，您可以使用serviceWorker模板配置的参数。这是一个例子：

```
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png}'
        ]
      }
    }
  ]
};
```


### 禁用service worker

如果您不希望在构建过程中生成service worker，则可以将其关闭。要禁用此功能，请在www输出目标中将serviceWorker属性设置为null。

## 使用定制service worker

已经有了service worker但是还是想包含一些定制代码?我们也支持这一点。通过为service worker指定源文件，Stencil将切换到Workbox的injectManifest模式。这使您能够完全控制service worker，同时仍然允许您自动注入预缓存清单列表。
让我们来看看这个功能所需的步骤:
首先，我们需要将自定义service worker的路径传递给serviceWorker配置中的swSrc属性。下面是一个例子:

```
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js'
      }
    }
  ]
};
```

现在，我们需要在我们的定制service worker中包括一些样板文件代码：

```
// 从“npm ls workbox-build”的版本更改中获取
importScripts('workbox-v4.3.1/workbox-sw.js');

//您的定制service worker代码

// 预缓存清单列表文件将注入到以下行
self.workbox.precaching.precacheAndRoute([]);
```

此代码导入Workbox库，创建service worker的新实例，并告诉Workbox在何处插入预缓存数组。

### 当更新可用时，显示重新加载弹框

默认情况下，当一个新的service worker可用时，它将被下载，然后进入等待激活的状态。新的service worker在站点的所有选项卡关闭并再次访问该站点之前不会接管该功能。这是为了避免与从缓存中提供的文件发生冲突的意外行为，并且在许多情况下都能很好地工作。

如果你想让你的用户选择立即访问新的更新，一个常见的方法是向他们展示一个toast，让他们知道更新，并提供一个“重新加载”按钮。重新加载让新的service worker接管，提供新内容，并触发页面重新加载，以避免缓存问题。

下面的示例结合Ionic框架展示了这一点，但与toast相关的代码应该很容易适用于任何UI。将以下内容添加到根组件(通常是app-root.tsx)。

```
@Listen("swUpdate", { target: 'window' })
async onServiceWorkerUpdate() {
  const registration = await navigator.serviceWorker.getRegistration();

  if (!registration?.waiting) {
    // If there is no waiting registration, this is the first service
    // worker being installed.
    return;
  }

  const toast = await toastController.create({
    message: "New version available.",
    buttons: [{ text: 'Reload', role: 'reload' }],
    duration: 0
  });

  await toast.present();

  const { role } = await toast.onWillDismiss();

  if (role === 'reload') {
    registration.waiting.postMessage("skipWaiting");
  }
}
```

每次安装新的service worker时，Stencil都会发出swUpdate事件。当service worker在等待注册时，会显示弹框。单击reload按钮后，将向等待的service worker发送一条消息，让它知道要接管。此消息需要由service worker处理;因此，我们需要创建一个自定义的(例如src/sw.js)文件，并添加一个监听器来调用skipWaiting()。

```
importScripts("workbox-v4.3.1/workbox-sw.js");

self.addEventListener("message", ({ data }) => {
  if (data === "skipWaiting") {
    self.skipWaiting();
  }
});

self.workbox.precaching.precacheAndRoute([]);
```

<div style="background: #fdf5e4;
    margin: 0;color:#9a6400;
    padding: 10px 18px 10px;
    border-radius: 4px;display: flex;
    align-items: center;margin-bottom:10px;line-height: 1.6;
    font-size: 14px;">
不要忘记在您的stencil配置中设置swSrc。
</div>

最后，我们希望在新的service worker接管后重新加载应用程序，这样就不会再从缓存中提供过时的代码。我们可以通过在根组件的componentWillLoad生命周期钩子中附加一个事件监听器来使用service worker的controllerchange事件。

```
componentWillLoad() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .getRegistration()
      .then(registration => {
        if (registration?.active) {
          navigator.serviceWorker.addEventListener(
            'controllerchange',
            () => window.location.reload()
          );
        }
      })
  }
}
```

### 处理推送事件

定制serviceWorker的常见用例是处理浏览器推送通知。但是，在我们能够显示推送通知之前，我们首先需要使用Notifications API向用户请求权限。

```
if ('Notification' in window && 'serviceWorker' in navigator) {
  Notification.requestPermission(status => {
    // status will either be 'default', 'granted' or 'denied'
    console.log(`Notification permissions have been ${status}`);
  });
}
```

始终可以使用Notification.permission来检查当前权限状态。

要在被授予许可后向用户显示通知，我们可以使用serviceWorker的注册方法（在我们的自定义serviceWorker中）showNotification。

```
self.registration.showNotification('Hakuna matata.');
```

通常，我们会有一个后端向客户端发送推送通知，我们希望我们的service worker来处理它们。为此，我们可以在我们的工作器中注册一个事件监听器来处理推送事件。事件类型为PushEvent，数据字段类型为PushMessageData。

```
self.addEventListener('push', event => {
  console.log(`Push received with data "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    data: { href: '/users/donald' },
    actions: [
      { action: 'details', title: 'Details' },
      { action: 'dismiss', title: 'Dismiss' },
    ],
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
```

如果数据是JSON字符串，data.json()则可用于立即获取解析的数据。该event.waitUntil方法用于确保serviceWorker在异步showNotification操作完成之前不会终止。

此外，我们可能希望点击处理通知。该API提供的事件为notificationclick和notificationclose。

```
self.addEventListener('notificationclick', event => {
  const notification = event.notification;
  const action = event.action;

  if (action === 'dismiss') {
    notification.close();
  } else {
    // This handles both notification click and 'details' action,
    // because some platforms might not support actions.
    clients.openWindow(notification.data.href);
    notification.close();
  }
});
```

现在我们的service worker能够接收和处理推送通知，但是我们仍然需要将客户端注册到后端。浏览器为此提供了一个推送服务，你的应用程序可以订阅它。订阅对象包含一个端点URL，该URL具有每个客户机的唯一标识符。您可以将通知发送到该URL，该URL使用订阅对象提供的公钥加密。
为了实现这一点，我们首先需要让每个客户机订阅浏览器的推送服务，然后将订阅对象发送到后端。然后，后端可以生成推送通知，用公钥加密它们，并将它们发送到订阅端点URL。
首先，我们将实现一个函数来为用户订阅推送服务，作为最佳实践，推送服务应该由用户动作触发，该动作表示他们想要接收推送通知。假设通知权限已经被授予，可以使用以下函数。

```
async function subscribeUser() {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready;

    const subscription = await registration.pushManager
      .subscribe({ userVisibleOnly: true })
      .catch(console.error);

    if (!subscription) {
      return;
    }

    // the subscription object is what we want to send to our backend
    console.log(subscription.endpoint);
  }
}
```

每次访问我们的应用程序时，我们还应该检查订阅，因为订阅对象可以更改。

```
self.registration.pushManager.getSubscription().then(subscription => {
  if (!subscription) {
    // ask the user to register for push
    return;
  }

  // update the database
  console.log(subscription);
});
```

### 进一步阅读
有关推送通知和相关API的更多信息，请参阅“[推送通知的Web基础知识简介](https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications)”和[MDN推送API文档](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)。
David Brunelle的这个Twitter线程介绍了如何在PWA中实现版本控制，以便处理API的重大更改。这里的问题是，启用了Service Worker的应用程序将继续针对更新后的API提供过期（缓存）的应用程序。为了解决这个问题，可以执行版本检查。##