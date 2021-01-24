/*
 * @Date: 2021-01-22 10:10:32
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-22 15:42:16
 */
module.exports = {
    // 构建输出目录
    outputDir: "dist/vue",
    chainWebpack: config => {
        console.log(config);
        config.entry('app').clear().add('./src-vue/main.js')
    }

}