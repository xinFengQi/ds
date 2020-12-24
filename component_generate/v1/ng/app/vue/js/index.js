function vueInit(id) {
    const routes = [
        {
            path: '/',
            component: $VUE_DATA.appComponent,
            children: [
                {
                    path: '/',
                    component: $VUE_DATA.component[0].component
                },
            ]
        },
    ];
    routes[0].children = routes[0].children.concat($VUE_DATA.component)
    console.log(routes)
    const router = new VueRouter({
        routes
    })
    const vue = new Vue({
        router,
    }).$mount(id)
}