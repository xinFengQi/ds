import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
} from 'vue-router';
import Home from '../views/home/home.vue';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/apis',
        name: 'ApiHome',
        component: () => import('../views/apis/apis.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
