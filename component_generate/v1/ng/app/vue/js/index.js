function vueInit(id) {
    console.log($VUE_DATA.component)
    const router = new VueRouter({
        routes: $VUE_DATA.component
    })
    const vue = new Vue({
        router,
    }).$mount(id)

}