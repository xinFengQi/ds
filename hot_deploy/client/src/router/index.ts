import Vue from 'vue'
import Router from 'vue-router'
import LayOutPage from '@/layout/index.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            redirect: '/home'
        },
        {
            path: '/home',
            name: '首页',
            component: LayOutPage
        }
    ]
})