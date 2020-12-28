function vueInit(id) {
    const routes = [
        {
            path: '/',
            component: $VUE_DATA.appComponent,
            children: [
                {
                    path: '/',
                    component: $VUE_DATA.component[$VUE_DATA.component.length -1].component
                },
                ...$VUE_DATA.component
            ]
        },
    ];
    console.log(routes)
    const router = new VueRouter({
        mode: 'hash',
        routes
    })
    const vue = new Vue({
        router,
    }).$mount(id)
}