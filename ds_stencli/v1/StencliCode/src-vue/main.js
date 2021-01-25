/*
 * @Date: 2021-01-22 10:28:55
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-25 17:14:26
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";

import { defineCustomElements } from '../dist/dist/loader';

defineCustomElements();

const vue = createApp(App)

vue.use(router)

vue.config.ignoredElements = [/test-\w*/];

vue.mount('#vue')
