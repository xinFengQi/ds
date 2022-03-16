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
import card from 'ant-design-vue/lib/card'
import 'ant-design-vue/lib/card/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
import modal from 'ant-design-vue/lib/modal'
import 'ant-design-vue/lib/modal/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件

import DataPicker from 'ant-design-vue/lib/date-picker'
import 'ant-design-vue/lib/date-picker/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
import moment from 'moment';
import message from 'ant-design-vue/lib/message';
import 'ant-design-vue/lib/message/style/css'; 
import tag from 'ant-design-vue/lib/tag';
import 'ant-design-vue/lib/tag/style/css'; 
moment.locale('zh-cn')

const app = createApp(App)

app.use(Button);
app.use(menu);
app.use(collapse);
app.use(input);
app.use(card);
app.use(modal);
app.use(DataPicker);
app.use(message)
app.use(tag)




app.mount('#app');
