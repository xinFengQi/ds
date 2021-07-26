import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './main_jsx';
import 'ant-design-vue/dist/antd.css';

import './vue2_ant_adapter';

Vue.use(Antd);

Vue.config.productionTip = false

const el = document.createElement('template');
el.id = 'vue2_ad';

// document.body.appendChild(el)

new Vue({
  render: h => h(App),
}).$mount(el)


