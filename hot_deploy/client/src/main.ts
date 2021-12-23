import Vue from 'vue'
import App from '@/App.vue'

import Router from './router';
import Store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false

Vue.use(ElementUI);

const socketUrl = process.env.NODE_ENV === 'development' ? 
'http://192.168.199.157:11000': 'http://47.102.97.25:11000'

Vue.use(new VueSocketIO({
  debug: false,
  connection: socketUrl,
  vuex: {
    store: Store,
    mutationPrefix: 'SOCKET_',
    actionPrefix: 'SOCKET_'
  }
}))



new Vue({
  router: Router,
  store: Store,
  render: h => h(App),
}).$mount('#app')
