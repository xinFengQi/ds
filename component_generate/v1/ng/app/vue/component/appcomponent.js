if (!window.$VUE_DATA) {
    window.$VUE_DATA = {}
}
window.$VUE_DATA.appComponent = {
    template: `
        <div class="vueContent"> 
            <div class="left">
                <div class="divfixed">
                    <div class="input_search_div">
                        <input class="input_search" v-model="inputContent" placeholder="搜索" type="text"/>
                    </div>
                    <left-nav :navData="navData"></left-nav>
                </div>
            </div>
            <router-view></router-view>
        </div>`,
    data: () => {
        return {
            navData: $VUE_DATA.appComponentNavData[0],
            timer: null,
            inputContent: ''
        }
    },
    watch: {
        inputContent(value, oldValue) {
            if(value !== oldValue) {
                this.gotoSearch(value);
            }
        },
        $route: {
            handler() {
                console.log('=======================路由变化')
                // if (!this.$route.query.value) {
                //    this.inputContent = ''
                // }
            },
            deep: true,
        }
    },
    mounted(){
        if (this.$route.query.value) {
            this.inputContent = this.$route.query.value
            this.gotoSearch(this.inputContent)
        }
    },
    methods: {
        gotoSearch(value) {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(() => {
                if (value.length == 0) {
                    if (this.$route.query.value) {
                        this.$router.push({ path: '/' })
                     }
                } else {
                    this.$router.push({ path: '/vue_search', query: { value: value } })
                }
            }, 500)
        }

    }
}


window.$VUE_DATA.searchComponent = {
    template: `
        <div class="search_Content">
            <div v-if="showContent.length === 0">
                暂无数据
            </div>
            <div v-for="(item, index) in showContent" :key="item.path">
                <router-link :to="item.path">{{item.idxName}}</router-link>
            </div>
        </div>`,
    data: () => {
        return {
            showContent: []
        }
    },
    watch: {
        $route: {
            handler() {
                if (this.$route.query.value) {
                    this.handleContent(this.$route.query.value)
                }
            },
            deep: true,
        }
    },
    mounted() {
        if (this.$route.query.value) {
            this.handleContent(this.$route.query.value)
        }
    },
    methods: {
        handleContent(value) {
            const content = $VUE_DATA.idx.search(value.trim())
            this.showContent = []
            console.log(content)
            content.forEach(s => {
                const item = window.$VUE_DATA.componentSearchData.find(it => it.path === s.ref)
                this.showContent.push(item)
                console.log(item)
            })
        }
    }
}

