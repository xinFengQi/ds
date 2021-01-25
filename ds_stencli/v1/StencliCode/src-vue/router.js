/*
 * @Date: 2021-01-25 14:24:51
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-25 17:24:55
 */
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import dsButton from "./page/base/ds-vue-button.vue";
const routes = [
    {
        path: "/base",
        component: () => import('./page/base.vue'),
        children: [
            {
                path: "ds-button",
                component: dsButton,
            },
        ]
    }
]

const routerHistory = createWebHashHistory()

var router = createRouter({
    history: routerHistory,
    routes
})
export default router;