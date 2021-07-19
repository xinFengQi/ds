import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import * as Adapter from './vue2_ant_adapter';

const app = createApp(App);
app.config.productionTip = false;

app.use(Antd);


// 加载js
function loadJS(url, type) {
    return new Promise((resolve, reject) => {
        if (!type) {
            type = 'text/javascript';
        }
        const scriptEl = document.createElement('script');
        scriptEl.type = type;
        //IE
        if (scriptEl.readyState) {
            scriptEl.onreadystatechange = function () {
                if (scriptEl.readyState == 'loaded' || scriptEl.readyState == 'complete') {
                    scriptEl.onreadystatechange = null;
                    resolve(true);
                }
            };
        } else {
            //其他浏览器
            scriptEl.onload = function () {
                resolve(true);
            };
            scriptEl.onError = function () {
                reject(true)
            }
        }
        scriptEl.src = url;
        document.getElementsByTagName('head')[0].appendChild(scriptEl);
    });
}

const el = document.createElement('div');
el.id = 'vue2_ad';

document.body.appendChild(el)

loadJS('/ct/component/js_util_stencli/0.0.1/component/js_util_stencli.esm.js', 'module').then(() => {
    Adapter.initAdapter();
    app.mount(el);
})





