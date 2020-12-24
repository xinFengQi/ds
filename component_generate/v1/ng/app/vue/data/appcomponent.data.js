if (!window.$VUE_DATA) {
    window.$VUE_DATA = {}
}
window.$VUE_DATA.appComponent = {
    template: `
        <div class="vueContent"> 
            <div class="left">
                <left-nav :navData="navData"></left-nav>
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
            <div class="right">

            </div>
        </div>`,
    data: () => {
        return {
            navData: {"form-element":{"__value":[{"title":"单个时间选择组件","key":"datetime_single","link":"/datetime_single"},{"title":"时间期限选择组件——只用于表单","key":"datetime_start_end","link":"/datetime_start_end"},{"title":"同行输入组组件","key":"input_group","link":"/input_group"},{"title":"富文本组件","key":"tinymce_ngx","link":"/tinymce_ngx"}],"typr":{"__value":[{"title":"文件上传组件","key":"file_upload","link":"/file_upload"}]}},"form":{"__value":[{"title":"使用简单表单时配置表单组件","key":"form_component","link":"/form_component"},{"title":"使用简单表单时预览组件","key":"form_detail","link":"/form_detail"}]},"layout":{"__value":[{"title":"使用二级及以上面包屑时使用的组件","key":"content_breadcrumb","link":"/content_breadcrumb"}]}}
        }
    }
}
