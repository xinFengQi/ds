import {
    Button,
    Layout,
    Menu,
    Collapse,
    Input,
    Card,
    Modal,
    DatePicker,
    Tag,
    PageHeader,
    Typography,
    Tooltip,
    Form,
    Switch,
    Breadcrumb,
    Table,
    Divider
} from 'ant-design-vue';
import { App } from 'vue';
import moment from 'moment';
import {  } from 'ant-design-vue/lib/menu';

moment.locale('zh-cn');

export function importAnt(app: App<Element>) {
    app.use(Button);
    app.use(Layout);
    app.use(Menu);
    app.use(Collapse);
    app.use(Input);
    app.use(Card);
    app.use(Modal);
    app.use(DatePicker);
    app.use(Tag);
    app.use(PageHeader);
    app.use(Typography);
    app.use(Form);
    app.use(Tooltip);
    app.use(Switch);
    app.use(Breadcrumb);
    app.use(Table);
    app.use(Divider);


}
