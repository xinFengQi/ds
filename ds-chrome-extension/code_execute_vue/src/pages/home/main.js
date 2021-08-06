import { createApp } from 'vue'
import App from './home.vue'


import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
import menu from 'ant-design-vue/lib/menu'
import 'ant-design-vue/lib/menu/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件

import collapse from 'ant-design-vue/lib/collapse'
import 'ant-design-vue/lib/collapse/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
import input from 'ant-design-vue/lib/input'
import 'ant-design-vue/lib/input/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件




const app = createApp(App)

app.use(Button);
app.use(menu);
app.use(collapse);
app.use(input);


app.mount('#app');
