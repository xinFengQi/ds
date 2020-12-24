function initLeftNavComponent() {
    Vue.component('left-nav', {
        template: `<div>
                        <div v-for="(item, i) in navData">
                            {{item.title}}
                            <left-nav v-if="item.__value" :navData="item.__value"></left-nav>
                            测试组件是否成功
                        </div>
                   </div>`,
        props: ['navData'],
        data: () => {
            return {

            }
        },
        mounted: () => {
            console.log('组件被加载')
        } 
    })
}