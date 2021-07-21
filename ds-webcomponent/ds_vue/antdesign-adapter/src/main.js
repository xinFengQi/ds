import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import './vue2_ant_adapter';

const app = createApp(App);
app.config.productionTip = false;

app.use(Antd);

const el = document.createElement('div');
el.id = 'vue2_ad';

document.body.appendChild(el)

app.mount(el);





