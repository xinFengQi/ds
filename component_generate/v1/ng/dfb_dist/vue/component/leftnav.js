function initLeftNavComponent() {
    Vue.component('left-nav', {
        template: `<div>
                        <template v-for="(key, i) in Object.keys(navData).reverse()">
                            <template v-if="key == '__value'">
                                <div :class="'nav'+getIndex(index+1)" v-for="(value, iv) in navData[key]">
                                    <router-link :to="value.link">{{value.title}}</router-link>
                                </div>
                            </template>
                            <template v-if="key != '__value' && key != 'isShow'">
                               <div @click="isShowToggle(navData[key])" :class="'nav'+getIndex(index+1)"> {{key}} </div>
                                <left-nav v-if="!navData[key].isShow" :navData="navData[key]" :index="getIndex(index+1)"></left-nav>
                            </template>
                           
                        </template>
                   </div>`,
        props: ['navData', 'index'],
        data: () => {
            return {
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
                item.isShow = !item.isShow;
                this.$forceUpdate();
                // this.$set(item, 'isShow', !item.isShow)
            }
        },

    })
}