function initLeftNavComponent() {
    Vue.component('left-nav', {
        template: `<div>
                        <template v-for="(item, i) in Object.keys(navData).reverse()">
                            
                            <template v-if="item == '__value' && navData[item].isShow">
                                <div :class="'nav'+getIndex(index+1)" v-for="(value, iv) in navData[item]">
                                    <router-link :to="value.link">{{value.title}}</router-link>
                                </div>
                            </template>
                            <template v-if="item != '__value'">
                               <div @click="isShowToggle(navData[item])" :class="'nav'+getIndex(index+1)"> {{item}} </div>
                                <left-nav v-if="navData[item].isShow" :navData="navData[item]" :index="getIndex(index+1)"></left-nav>
                            </template>
                           
                        </template>
                   </div>`,
        props: ['navData', 'index'],
        data: () => {
            return {
                isShow: false
            }
        },
        created: () => {
        },
        methods: {
            getIndex(index) {
                return index ? index : 1
            },
            isShowToggle(item) {
                console.log(item)
                item.isShow = !item.isShow
            }
        },

    })
}