import { importAnt } from '@/module/ant-design.module';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

importAnt(app);

app.mount('#app');
