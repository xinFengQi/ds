import { createApp } from 'vue'
import App from './homepage.vue'


import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
import menu from 'ant-design-vue/lib/menu'
import 'ant-design-vue/lib/menu/style/css'; 
import collapse from 'ant-design-vue/lib/collapse'
import 'ant-design-vue/lib/collapse/style/css';
import input from 'ant-design-vue/lib/input'
import 'ant-design-vue/lib/input/style/css';
import Layout from 'ant-design-vue/lib/layout'
import 'ant-design-vue/lib/layout/style/css'; 

import pageHeader from 'ant-design-vue/lib/page-header'
import 'ant-design-vue/lib/page-header/style/css'; 
import typography from 'ant-design-vue/lib/typography';
import 'ant-design-vue/lib/typography/style/css'; 
import form from 'ant-design-vue/lib/form';
import 'ant-design-vue/lib/form/style/css'; 
import tooltip from 'ant-design-vue/lib/tooltip';
import 'ant-design-vue/lib/tooltip/style/css'; 

const app = createApp(App)

app.use(Layout);
app.use(Button);
app.use(menu);
app.use(collapse);
app.use(input);
app.use(pageHeader);
app.use(typography);
app.use(form);
app.use(tooltip);








app.mount('#app');
