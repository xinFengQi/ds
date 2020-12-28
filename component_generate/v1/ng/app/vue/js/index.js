function vueInit(id) {
    // 去掉重复路径报错
    const originalPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
    }
    const routes = [
        {
            path: '/',
            component: $VUE_DATA.appComponent,
            children: [
                {
                    path: '/',
                    component: $VUE_DATA.component[$VUE_DATA.component.length - 1].component
                },
                {
                    path: '/vue_search',
                    component: $VUE_DATA.searchComponent
                },
                ...$VUE_DATA.component
            ]
        },
    ];
    const router = new VueRouter({
        mode: 'hash',
        routes
    })
    const vue = new Vue({
        router,
    }).$mount(id)
}