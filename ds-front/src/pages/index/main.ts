import { importAnt } from '@/module/ant-design.module';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

importAnt(app);


app.use(store).use(router).mount('#app');
