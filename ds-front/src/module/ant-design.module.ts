import { Button, Layout, Menu } from 'ant-design-vue';
import { App } from 'vue';


export function importAnt(app: App<Element>) {
    app.use(Button);
    app.use(Layout);
    app.use(Menu);


}