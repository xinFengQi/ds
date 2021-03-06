if(!window.$VUE_DATA) {
    window.$VUE_DATA = {}
}
// component appComponentNavData
window.$VUE_DATA.component = [{
    path: '/component_interface',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="ViewInfo">ViewInfo</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/contact-center.service.ts</p>
<pre><code class="language-javascript">interface ViewInfo {
  name: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="IVisitorInfo">IVisitorInfo</h2><p>注释: </p>
<pre><code class="language-javascript">
   访客资料

  @export
  @Interface IVisitorInfo
</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/contact-center.type.ts</p>
<pre><code class="language-javascript">export interface IVisitorInfo {
  avatar: string;
  checked: boolean;
  createTime: number;
  name: string;
  isLine: boolean;
}</code></pre>
<h2 @click="scrollTop($event)" id="ViewInfo">ViewInfo</h2><p>注释: </p>
<pre><code class="language-javascript"> import moment from &#39;moment&#39;</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/side/queuing/queuing.service.ts</p>
<pre><code class="language-javascript">// import moment from &#39;moment&#39;
interface ViewInfo {
  name: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="Paging">Paging</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/side/queuing/queuing.type.ts</p>
<pre><code class="language-javascript">export interface Paging {
  lastTime?: number | string;
  visitorId: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="ViewInfo">ViewInfo</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/side/queuing/service-path.service.ts</p>
<pre><code class="language-javascript">interface ViewInfo {
  name: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="TaskList">TaskList</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/side/task-list/task-list.component.ts</p>
<pre><code class="language-javascript">interface TaskList {
  type: number;
  custName: string;
  totalCall: number;
  mobile: string;
  status: boolean;
}</code></pre>
<h2 @click="scrollTop($event)" id="Menu">Menu</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/menu.type.ts</p>
<pre><code class="language-javascript">export interface Menu {
  [key: string]: any;
  /** 文本 */
  text: string;
  /** i18n主键 */
  i18n?: string;
  /** 是否菜单组 */
  group?: boolean;
  /** 路由 */
  link?: string;
  /**
   * 路由是否精准匹配，默认：'false'，see:
   * - [#344](https://github.com/cipchk/ng-alain/issues/344)
   * - [RouterLinkActive](https://angular.io/api/router/RouterLinkActive#routerLinkActiveOptions)
   */
  linkExact?: boolean;
  /** 外部链接 */
  externalLink?: string;
  /** 链接 target */
  target?: &#39;_blank&#39; | &#39;_self&#39; | &#39;_parent&#39; | &#39;_top&#39;;
  /** 图标 */
  icon?: string;
  /** 徽标数，展示的数字。（注：'group:true' 无效） */
  badge?: number;
  /** 徽标数，显示小红点 */
  badge_dot?: boolean;
  /** 徽标 Badge 颜色 （默认：error， 所有颜色值见：https://github.com/cipchk/ng-alain/blob/master/_documents/utils.md#色彩） */
  badge_status?: string;
  /** 是否隐藏菜单 */
  hide?: boolean;
  /** 隐藏面包屑，指 'page-header' 组件的自动生成面包屑时有效 */
  hideInBreadcrumb?: boolean;
  /** ACL配置，若导入 '@delon/acl' 时自动有效，等同于 'ACLService.can(roleOrAbility: ACLCanType)' 参数值 */
  acl?: any;
  /** 是否快捷菜单项 */
  shortcut?: boolean;
  /** 快捷菜单根节点 */
  shortcut_root?: boolean;
  /** 是否允许复用，需配合 'reuse-tab' 组件 */
  reuse?: boolean;
  /** 二级菜单 */
  children?: Menu[];
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseTitle">ReuseTitle</h2><p>注释: </p>
<pre><code class="language-javascript">
  复用匹配模式
</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseTitle {
  text?: string;
  i18n?: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseTabCached">ReuseTabCached</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseTabCached {
  title: ReuseTitle;
  url: string;
  /** 是否允许关闭，默认：'true' */
  closable?: boolean;
  /** 当前滚动条位置 */
  position?: [number, number] | null;
  _snapshot: ActivatedRouteSnapshot;
  _handle: ReuseComponentHandle;
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseTabNotify">ReuseTabNotify</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseTabNotify {
  /** 事件类型 */
  active: &#39;add&#39; | &#39;override&#39; | &#39;title&#39; | &#39;clear&#39; | &#39;closable&#39; | &#39;close&#39; | &#39;closeRight&#39; | &#39;move&#39; | &#39;refresh&#39;;
  url?: string;
  title?: ReuseTitle;
  item?: ReuseTabCached;
  list?: ReuseTabCached[];
  [key: string]: any;
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseItem">ReuseItem</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseItem {
  url: string;
  title: string;
  closable: boolean;
  index: number;
  active: boolean;
  last: boolean;
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseContextEvent">ReuseContextEvent</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseContextEvent {
  event: MouseEvent;
  item: ReuseItem;
  customContextMenu?: ReuseCustomContextMenu[];
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseContextCloseEvent">ReuseContextCloseEvent</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseContextCloseEvent {
  type: CloseType;
  item: ReuseItem;
  includeNonCloseable: boolean;
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseContextI18n">ReuseContextI18n</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseContextI18n {
  close?: string;
  closeOther?: string;
  closeRight?: string;
  refresh?: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseCustomContextMenu">ReuseCustomContextMenu</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseCustomContextMenu {
  id: string;
  title: string;
  fn: (item: ReuseItem, menu: ReuseCustomContextMenu) =&gt; void;
  disabled?: (item: ReuseItem) =&gt; boolean;
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseComponentHandle">ReuseComponentHandle</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseComponentHandle {
  componentRef: ReuseComponentRef;
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseComponentRef">ReuseComponentRef</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseComponentRef {
  instance: ReuseComponentInstance;
}</code></pre>
<h2 @click="scrollTop($event)" id="ReuseComponentInstance">ReuseComponentInstance</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface ReuseComponentInstance {
  _onReuseInit: (type: ReuseHookOnReuseInitType) =&gt; void;
  _onReuseDestroy: () =&gt; void;
  destroy: () =&gt; void;
}</code></pre>
<h2 @click="scrollTop($event)" id="OnReuseInit">OnReuseInit</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface OnReuseInit {
  _onReuseInit: (type: ReuseHookOnReuseInitType) =&gt; void;
}</code></pre>
<h2 @click="scrollTop($event)" id="OnReuseDestroy">OnReuseDestroy</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts</p>
<pre><code class="language-javascript">export interface OnReuseDestroy {
  _onReuseDestroy: () =&gt; void;
}</code></pre>
<h2 @click="scrollTop($event)" id="TaskListModel">TaskListModel</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/task.service.ts</p>
<pre><code class="language-javascript">interface TaskListModel {
  type: number;
  customerName: string;
  callCount: number;
  telNumber: string;
  customerRep: boolean;
  active: boolean;
}</code></pre>
<h2 @click="scrollTop($event)" id="IVisitorChatLimit">IVisitorChatLimit</h2><p>注释: </p>
<pre><code class="language-javascript">
   会话上限

  @export
  @Interface IVisitorInfo
</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/user-info.type.ts</p>
<pre><code class="language-javascript">export interface IVisitorChatLimit {
  currentLimit: number;
  maxLimit: number;
}</code></pre>
<h2 @click="scrollTop($event)" id="EventModel">EventModel</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/websocket.service.ts</p>
<pre><code class="language-javascript">export interface EventModel {
  event: string;
  content: any;
}</code></pre>
<h2 @click="scrollTop($event)" id="Task">Task</h2><p>注释: </p>
<pre><code class="language-javascript"> 自定义任务信息对象类型</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/preview-call/preview-call.service.ts</p>
<pre><code class="language-javascript">// 自定义任务信息对象类型
interface Task {
  taskId: string;
  name: string;
  startTime: any;
  endTime: any;
  prompt: number | null;
  description: string;
  belong: number | null;
  status: number | null;
  attribution: any;
  allocationPolicy: number | null;
  allocationDetail: any;
  customers: any;
}</code></pre>
<h2 @click="scrollTop($event)" id="DataItem">DataItem</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/preview-call/preview-detail/preview-detail.component.ts</p>
<pre><code class="language-javascript">interface DataItem {
  taskId: string;
  number: number | string;
  custName: string;
  mobile: string;
  status: number;
  unoName: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="ColumnItem">ColumnItem</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/preview-call/preview-detail/preview-detail.component.ts</p>
<pre><code class="language-javascript">interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
}</code></pre>
<h2 @click="scrollTop($event)" id="Data">Data</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/preview-call/previewcall-addnum/previewcall-addnum.component.ts</p>
<pre><code class="language-javascript">interface Data {
  id: number;
  num: string;
  custName: string;
  mobile: string;
  disabled: boolean;
} // interface Info {
//     key: string;
//     custName: string;
//     mobile: string;
// }</code></pre>
<h2 @click="scrollTop($event)" id="SelectValue">SelectValue</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/judge-condition/judge-condition.component.ts</p>
<pre><code class="language-javascript">interface SelectValue {
  name: number;
  contain: number;
  value: number[];
  cache?: SelectValue;
}</code></pre>
<h2 @click="scrollTop($event)" id="ValueLabel">ValueLabel</h2><p>注释: </p>
<pre><code class="language-javascript"> 键值类型</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface ValueLabel {
  value: any;
  label: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="BreadcrumbBtuData">BreadcrumbBtuData</h2><p>注释: </p>
<pre><code class="language-javascript"> 按钮类型</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface BreadcrumbBtuData {
  title: string;
  type: &#39;primary&#39; | &#39;default&#39; | &#39;dashed&#39; | &#39;text&#39; | &#39;link&#39;;
  onClick: (...value: any[]) =&gt; void;
}</code></pre>
<h2 @click="scrollTop($event)" id="RichTextParams">RichTextParams</h2><p>注释: </p>
<pre><code class="language-javascript"> 富文本配置</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface RichTextParams {
  // 内容高度
  height?: string; // 内容宽度
  width?: string; // 插件列表
  plugins?: string; // toolbar
  toolbar?: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="CxFromModel">CxFromModel</h2><p>注释: </p>
<pre><code class="language-javascript"> 表单模型配置</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface CxFromModel {
  // 表单元素键值
  key: string; // 表单元素类型
  type: &#39;select&#39; | &#39;input&#39; | &#39;radio&#39; | &#39;datetime&#39; | &#39;richText&#39; | &#39;uploadFile&#39; | &#39;inputgroup&#39; | &#39;datetimeStartEnd&#39; | &#39;textarea&#39; | &#39;judgecondition&#39;; // 表单元素标签值
  label: string; // 默认提示
  placeholder?: string; // 是否不展示表单元素标签
  noShowLabel?: boolean; // 是否不是必填
  noRequire?: boolean | string; // 是否不是必填错误提示
  noRequireErrorTip?: boolean; // 是否禁用
  disabled?: boolean; // 默认值
  default?: any; // 是否不展示
  noShow?: boolean; // 额外的校验器
  extraValidator?: ValidatorFn[]; // 下拉选数据
  selectData?: ValueLabel[]; // 单选数据
  radioData?: ValueLabel[]; // 输入组的参数
  inputGroupModel?: InputGroupModel; // 时间开始结束元素数据
  dateTimeStartEndModel?: DateTimeStartEndModel; // 缓存上次数据
  __cache?: CxFromModel; // 长度
  length?: number;
}</code></pre>
<h2 @click="scrollTop($event)" id="InputGroupModel">InputGroupModel</h2><p>注释: </p>
<pre><code class="language-javascript"> 输入组配置数据</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface InputGroupModel {
  beforeArr?: ValueLabel[];
  afterArr?: ValueLabel[];
  writerFn?: (value: any) =&gt; string;
  changeFn?: (value: any) =&gt; string;
}</code></pre>
<h2 @click="scrollTop($event)" id="DateTimeStartEndModel">DateTimeStartEndModel</h2><p>注释: </p>
<pre><code class="language-javascript"> 日期开始结束选择框配置</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface DateTimeStartEndModel {
  labelStart?: string;
  isNoShowLabelStart?: boolean;
  labelEnd?: string;
  isNoShowLabelEnd?: boolean;
}</code></pre>
<h2 @click="scrollTop($event)" id="CxFormConfig">CxFormConfig</h2><p>注释: </p>
<pre><code class="language-javascript"> 表单元素基础配置</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface CxFormConfig {
  // 富文本选项
  richParams?: RichTextParams;
  fileParams?: UploadFileParams;
  toolbar?: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="RichTextParams">RichTextParams</h2><p>注释: </p>
<pre><code class="language-javascript"> 富文本配置</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface RichTextParams {
  // 内容高度
  height?: string; // 内容宽度
  width?: string; // 插件列表
  plugins?: string; // toolbar
  toolbar?: string; // toolbar多余功能显示方式
  toolbar_mode?: &#39;wrap&#39; | &#39;sliding&#39; | &#39;floating&#39; | &#39;Scrolling&#39;; // 长度
  length?: number;
}</code></pre>
<h2 @click="scrollTop($event)" id="UploadFileParams">UploadFileParams</h2><p>注释: </p>
<pre><code class="language-javascript"> 上传组件配置</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface UploadFileParams {
  // 上传最大文件数
  maxLength?: number; // 上传文件url
  uploadFileUrl?: string; // 删除文件url
  deleteFileUrl?: string; // 只读
  onlyRead?: boolean; // 文件大小
  fileSize?: number;
}</code></pre>
<h2 @click="scrollTop($event)" id="FormSubject">FormSubject</h2><p>注释: </p>
<pre><code class="language-javascript"> 表单订阅中心数据</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface FormSubject {
  type: &#39;fileDelete&#39;;
  data?: any;
}</code></pre>
<h2 @click="scrollTop($event)" id="BreadcrumbData">BreadcrumbData</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-layout/model/index.ts</p>
<pre><code class="language-javascript">export interface BreadcrumbData {
  title: string;
  url?: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="MessageInfo">MessageInfo</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/message-center/message-center.service.ts</p>
<pre><code class="language-javascript">export interface MessageInfo {
  id?: number;
  title: string;
  type: number;
  publishMethod: number;
  publishTime?: string;
  content: string;
  attachment: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="Data">Data</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/message-center/my-message/my-message.component.ts</p>
<pre><code class="language-javascript">interface Data {
  id: number;
  title: string;
  time: string;
  disabled: boolean;
}</code></pre>
<h2 @click="scrollTop($event)" id="ClientParamsInter">ClientParamsInter</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/statistical-report/report_clink/first-ib/first-ib.type.ts</p>
<pre><code class="language-javascript">interface ClientParamsInter {
  startTime: string;
  endTime: string;
  fields: string[];
  cnos: string[];
  statisticMethod: number;
  timeRangeType: number;
  offset: number;
  limit: number;
}</code></pre>
<h2 @click="scrollTop($event)" id="HotlineParamsInter">HotlineParamsInter</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/statistical-report/report_clink/first-ib/first-ib.type.ts</p>
<pre><code class="language-javascript">interface HotlineParamsInter {
  startTime: string;
  endTime: string;
  fields: string[];
  hotlines: string[];
  statisticMethod: number;
  timeRangeType: number;
  offset: number;
  limit: number;
}</code></pre>
<h2 @click="scrollTop($event)" id="TreeNodeInterface">TreeNodeInterface</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/system/organize-manage/organize-manage.component.ts</p>
<pre><code class="language-javascript">export interface TreeNodeInterface {
  key: number;
  name: string;
  description: string;
  updateTime: any;
  defaults: any;
  level?: number;
  expand?: boolean;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}</code></pre>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('ViewInfo')" class="nav2 right_nav">ViewInfo</a><a @click="scrollIdTop('IVisitorInfo')" class="nav2 right_nav">IVisitorInfo</a><a @click="scrollIdTop('ViewInfo')" class="nav2 right_nav">ViewInfo</a><a @click="scrollIdTop('Paging')" class="nav2 right_nav">Paging</a><a @click="scrollIdTop('ViewInfo')" class="nav2 right_nav">ViewInfo</a><a @click="scrollIdTop('TaskList')" class="nav2 right_nav">TaskList</a><a @click="scrollIdTop('Menu')" class="nav2 right_nav">Menu</a><a @click="scrollIdTop('ReuseTitle')" class="nav2 right_nav">ReuseTitle</a><a @click="scrollIdTop('ReuseTabCached')" class="nav2 right_nav">ReuseTabCached</a><a @click="scrollIdTop('ReuseTabNotify')" class="nav2 right_nav">ReuseTabNotify</a><a @click="scrollIdTop('ReuseItem')" class="nav2 right_nav">ReuseItem</a><a @click="scrollIdTop('ReuseContextEvent')" class="nav2 right_nav">ReuseContextEvent</a><a @click="scrollIdTop('ReuseContextCloseEvent')" class="nav2 right_nav">ReuseContextCloseEvent</a><a @click="scrollIdTop('ReuseContextI18n')" class="nav2 right_nav">ReuseContextI18n</a><a @click="scrollIdTop('ReuseCustomContextMenu')" class="nav2 right_nav">ReuseCustomContextMenu</a><a @click="scrollIdTop('ReuseComponentHandle')" class="nav2 right_nav">ReuseComponentHandle</a><a @click="scrollIdTop('ReuseComponentRef')" class="nav2 right_nav">ReuseComponentRef</a><a @click="scrollIdTop('ReuseComponentInstance')" class="nav2 right_nav">ReuseComponentInstance</a><a @click="scrollIdTop('OnReuseInit')" class="nav2 right_nav">OnReuseInit</a><a @click="scrollIdTop('OnReuseDestroy')" class="nav2 right_nav">OnReuseDestroy</a><a @click="scrollIdTop('TaskListModel')" class="nav2 right_nav">TaskListModel</a><a @click="scrollIdTop('IVisitorChatLimit')" class="nav2 right_nav">IVisitorChatLimit</a><a @click="scrollIdTop('EventModel')" class="nav2 right_nav">EventModel</a><a @click="scrollIdTop('Task')" class="nav2 right_nav">Task</a><a @click="scrollIdTop('DataItem')" class="nav2 right_nav">DataItem</a><a @click="scrollIdTop('ColumnItem')" class="nav2 right_nav">ColumnItem</a><a @click="scrollIdTop('Data')" class="nav2 right_nav">Data</a><a @click="scrollIdTop('SelectValue')" class="nav2 right_nav">SelectValue</a><a @click="scrollIdTop('ValueLabel')" class="nav2 right_nav">ValueLabel</a><a @click="scrollIdTop('BreadcrumbBtuData')" class="nav2 right_nav">BreadcrumbBtuData</a><a @click="scrollIdTop('RichTextParams')" class="nav2 right_nav">RichTextParams</a><a @click="scrollIdTop('CxFromModel')" class="nav2 right_nav">CxFromModel</a><a @click="scrollIdTop('InputGroupModel')" class="nav2 right_nav">InputGroupModel</a><a @click="scrollIdTop('DateTimeStartEndModel')" class="nav2 right_nav">DateTimeStartEndModel</a><a @click="scrollIdTop('CxFormConfig')" class="nav2 right_nav">CxFormConfig</a><a @click="scrollIdTop('RichTextParams')" class="nav2 right_nav">RichTextParams</a><a @click="scrollIdTop('UploadFileParams')" class="nav2 right_nav">UploadFileParams</a><a @click="scrollIdTop('FormSubject')" class="nav2 right_nav">FormSubject</a><a @click="scrollIdTop('BreadcrumbData')" class="nav2 right_nav">BreadcrumbData</a><a @click="scrollIdTop('MessageInfo')" class="nav2 right_nav">MessageInfo</a><a @click="scrollIdTop('Data')" class="nav2 right_nav">Data</a><a @click="scrollIdTop('ClientParamsInter')" class="nav2 right_nav">ClientParamsInter</a><a @click="scrollIdTop('HotlineParamsInter')" class="nav2 right_nav">HotlineParamsInter</a><a @click="scrollIdTop('TreeNodeInterface')" class="nav2 right_nav">TreeNodeInterface</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## ViewInfo
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/contact-center.service.ts
'''javascript
interface ViewInfo {
  name: string;
}
'''

## IVisitorInfo
注释: 
'''javascript

   访客资料
 
  @export
  @Interface IVisitorInfo
 
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/contact-center.type.ts
'''javascript
export interface IVisitorInfo {
  avatar: string;
  checked: boolean;
  createTime: number;
  name: string;
  isLine: boolean;
}
'''

## ViewInfo
注释: 
'''javascript
 import moment from 'moment'
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/side/queuing/queuing.service.ts
'''javascript
// import moment from 'moment'
interface ViewInfo {
  name: string;
}
'''

## Paging
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/side/queuing/queuing.type.ts
'''javascript
export interface Paging {
  lastTime?: number | string;
  visitorId: string;
}
'''

## ViewInfo
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/side/queuing/service-path.service.ts
'''javascript
interface ViewInfo {
  name: string;
}
'''

## TaskList
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/side/task-list/task-list.component.ts
'''javascript
interface TaskList {
  type: number;
  custName: string;
  totalCall: number;
  mobile: string;
  status: boolean;
}
'''

## Menu
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/menu.type.ts
'''javascript
export interface Menu {
  [key: string]: any;
  /** 文本 */
  text: string;
  /** i18n主键 */
  i18n?: string;
  /** 是否菜单组 */
  group?: boolean;
  /** 路由 */
  link?: string;
  /**
   * 路由是否精准匹配，默认：'false'，see:
   * - [#344](https://github.com/cipchk/ng-alain/issues/344)
   * - [RouterLinkActive](https://angular.io/api/router/RouterLinkActive#routerLinkActiveOptions)
   */
  linkExact?: boolean;
  /** 外部链接 */
  externalLink?: string;
  /** 链接 target */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** 图标 */
  icon?: string;
  /** 徽标数，展示的数字。（注：'group:true' 无效） */
  badge?: number;
  /** 徽标数，显示小红点 */
  badge_dot?: boolean;
  /** 徽标 Badge 颜色 （默认：error， 所有颜色值见：https://github.com/cipchk/ng-alain/blob/master/_documents/utils.md#色彩） */
  badge_status?: string;
  /** 是否隐藏菜单 */
  hide?: boolean;
  /** 隐藏面包屑，指 'page-header' 组件的自动生成面包屑时有效 */
  hideInBreadcrumb?: boolean;
  /** ACL配置，若导入 '@delon/acl' 时自动有效，等同于 'ACLService.can(roleOrAbility: ACLCanType)' 参数值 */
  acl?: any;
  /** 是否快捷菜单项 */
  shortcut?: boolean;
  /** 快捷菜单根节点 */
  shortcut_root?: boolean;
  /** 是否允许复用，需配合 'reuse-tab' 组件 */
  reuse?: boolean;
  /** 二级菜单 */
  children?: Menu[];
}
'''

## ReuseTitle
注释: 
'''javascript

  复用匹配模式
 
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseTitle {
  text?: string;
  i18n?: string;
}
'''

## ReuseTabCached
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseTabCached {
  title: ReuseTitle;
  url: string;
  /** 是否允许关闭，默认：'true' */
  closable?: boolean;
  /** 当前滚动条位置 */
  position?: [number, number] | null;
  _snapshot: ActivatedRouteSnapshot;
  _handle: ReuseComponentHandle;
}
'''

## ReuseTabNotify
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseTabNotify {
  /** 事件类型 */
  active: 'add' | 'override' | 'title' | 'clear' | 'closable' | 'close' | 'closeRight' | 'move' | 'refresh';
  url?: string;
  title?: ReuseTitle;
  item?: ReuseTabCached;
  list?: ReuseTabCached[];
  [key: string]: any;
}
'''

## ReuseItem
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseItem {
  url: string;
  title: string;
  closable: boolean;
  index: number;
  active: boolean;
  last: boolean;
}
'''

## ReuseContextEvent
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseContextEvent {
  event: MouseEvent;
  item: ReuseItem;
  customContextMenu?: ReuseCustomContextMenu[];
}
'''

## ReuseContextCloseEvent
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseContextCloseEvent {
  type: CloseType;
  item: ReuseItem;
  includeNonCloseable: boolean;
}
'''

## ReuseContextI18n
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseContextI18n {
  close?: string;
  closeOther?: string;
  closeRight?: string;
  refresh?: string;
}
'''

## ReuseCustomContextMenu
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseCustomContextMenu {
  id: string;
  title: string;
  fn: (item: ReuseItem, menu: ReuseCustomContextMenu) => void;
  disabled?: (item: ReuseItem) => boolean;
}
'''

## ReuseComponentHandle
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseComponentHandle {
  componentRef: ReuseComponentRef;
}
'''

## ReuseComponentRef
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseComponentRef {
  instance: ReuseComponentInstance;
}
'''

## ReuseComponentInstance
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface ReuseComponentInstance {
  _onReuseInit: (type: ReuseHookOnReuseInitType) => void;
  _onReuseDestroy: () => void;
  destroy: () => void;
}
'''

## OnReuseInit
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface OnReuseInit {
  _onReuseInit: (type: ReuseHookOnReuseInitType) => void;
}
'''

## OnReuseDestroy
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/reuse-tab.interfaces.ts
'''javascript
export interface OnReuseDestroy {
  _onReuseDestroy: () => void;
}
'''

## TaskListModel
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/task.service.ts
'''javascript
interface TaskListModel {
  type: number;
  customerName: string;
  callCount: number;
  telNumber: string;
  customerRep: boolean;
  active: boolean;
}
'''

## IVisitorChatLimit
注释: 
'''javascript

   会话上限
 
  @export
  @Interface IVisitorInfo
 
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/user-info.type.ts
'''javascript
export interface IVisitorChatLimit {
  currentLimit: number;
  maxLimit: number;
}
'''

## EventModel
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/core/service/websocket.service.ts
'''javascript
export interface EventModel {
  event: string;
  content: any;
}
'''

## Task
注释: 
'''javascript
 自定义任务信息对象类型
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/preview-call/preview-call.service.ts
'''javascript
// 自定义任务信息对象类型
interface Task {
  taskId: string;
  name: string;
  startTime: any;
  endTime: any;
  prompt: number | null;
  description: string;
  belong: number | null;
  status: number | null;
  attribution: any;
  allocationPolicy: number | null;
  allocationDetail: any;
  customers: any;
}
'''

## DataItem
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/preview-call/preview-detail/preview-detail.component.ts
'''javascript
interface DataItem {
  taskId: string;
  number: number | string;
  custName: string;
  mobile: string;
  status: number;
  unoName: string;
}
'''

## ColumnItem
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/preview-call/preview-detail/preview-detail.component.ts
'''javascript
interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
}
'''

## Data
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/preview-call/previewcall-addnum/previewcall-addnum.component.ts
'''javascript
interface Data {
  id: number;
  num: string;
  custName: string;
  mobile: string;
  disabled: boolean;
} // interface Info {
//     key: string;
//     custName: string;
//     mobile: string;
// }
'''

## SelectValue
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/judge-condition/judge-condition.component.ts
'''javascript
interface SelectValue {
  name: number;
  contain: number;
  value: number[];
  cache?: SelectValue;
}
'''

## ValueLabel
注释: 
'''javascript
 键值类型
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface ValueLabel {
  value: any;
  label: string;
}
'''

## BreadcrumbBtuData
注释: 
'''javascript
 按钮类型
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface BreadcrumbBtuData {
  title: string;
  type: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  onClick: (...value: any[]) => void;
}
'''

## RichTextParams
注释: 
'''javascript
 富文本配置
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface RichTextParams {
  // 内容高度
  height?: string; // 内容宽度
  width?: string; // 插件列表
  plugins?: string; // toolbar
  toolbar?: string;
}
'''

## CxFromModel
注释: 
'''javascript
 表单模型配置
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface CxFromModel {
  // 表单元素键值
  key: string; // 表单元素类型
  type: 'select' | 'input' | 'radio' | 'datetime' | 'richText' | 'uploadFile' | 'inputgroup' | 'datetimeStartEnd' | 'textarea' | 'judgecondition'; // 表单元素标签值
  label: string; // 默认提示
  placeholder?: string; // 是否不展示表单元素标签
  noShowLabel?: boolean; // 是否不是必填
  noRequire?: boolean | string; // 是否不是必填错误提示
  noRequireErrorTip?: boolean; // 是否禁用
  disabled?: boolean; // 默认值
  default?: any; // 是否不展示
  noShow?: boolean; // 额外的校验器
  extraValidator?: ValidatorFn[]; // 下拉选数据
  selectData?: ValueLabel[]; // 单选数据
  radioData?: ValueLabel[]; // 输入组的参数
  inputGroupModel?: InputGroupModel; // 时间开始结束元素数据
  dateTimeStartEndModel?: DateTimeStartEndModel; // 缓存上次数据
  __cache?: CxFromModel; // 长度
  length?: number;
}
'''

## InputGroupModel
注释: 
'''javascript
 输入组配置数据
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface InputGroupModel {
  beforeArr?: ValueLabel[];
  afterArr?: ValueLabel[];
  writerFn?: (value: any) => string;
  changeFn?: (value: any) => string;
}
'''

## DateTimeStartEndModel
注释: 
'''javascript
 日期开始结束选择框配置
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface DateTimeStartEndModel {
  labelStart?: string;
  isNoShowLabelStart?: boolean;
  labelEnd?: string;
  isNoShowLabelEnd?: boolean;
}
'''

## CxFormConfig
注释: 
'''javascript
 表单元素基础配置
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface CxFormConfig {
  // 富文本选项
  richParams?: RichTextParams;
  fileParams?: UploadFileParams;
  toolbar?: string;
}
'''

## RichTextParams
注释: 
'''javascript
 富文本配置
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface RichTextParams {
  // 内容高度
  height?: string; // 内容宽度
  width?: string; // 插件列表
  plugins?: string; // toolbar
  toolbar?: string; // toolbar多余功能显示方式
  toolbar_mode?: 'wrap' | 'sliding' | 'floating' | 'Scrolling'; // 长度
  length?: number;
}
'''

## UploadFileParams
注释: 
'''javascript
 上传组件配置
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface UploadFileParams {
  // 上传最大文件数
  maxLength?: number; // 上传文件url
  uploadFileUrl?: string; // 删除文件url
  deleteFileUrl?: string; // 只读
  onlyRead?: boolean; // 文件大小
  fileSize?: number;
}
'''

## FormSubject
注释: 
'''javascript
 表单订阅中心数据
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface FormSubject {
  type: 'fileDelete';
  data?: any;
}
'''

## BreadcrumbData
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-layout/model/index.ts
'''javascript
export interface BreadcrumbData {
  title: string;
  url?: string;
}
'''

## MessageInfo
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/message-center/message-center.service.ts
'''javascript
export interface MessageInfo {
  id?: number;
  title: string;
  type: number;
  publishMethod: number;
  publishTime?: string;
  content: string;
  attachment: string;
}
'''

## Data
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/message-center/my-message/my-message.component.ts
'''javascript
interface Data {
  id: number;
  title: string;
  time: string;
  disabled: boolean;
}
'''

## ClientParamsInter
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/statistical-report/report_clink/first-ib/first-ib.type.ts
'''javascript
interface ClientParamsInter {
  startTime: string;
  endTime: string;
  fields: string[];
  cnos: string[];
  statisticMethod: number;
  timeRangeType: number;
  offset: number;
  limit: number;
}
'''

## HotlineParamsInter
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/statistical-report/report_clink/first-ib/first-ib.type.ts
'''javascript
interface HotlineParamsInter {
  startTime: string;
  endTime: string;
  fields: string[];
  hotlines: string[];
  statisticMethod: number;
  timeRangeType: number;
  offset: number;
  limit: number;
}
'''

## TreeNodeInterface
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/system/organize-manage/organize-manage.component.ts
'''javascript
export interface TreeNodeInterface {
  key: number;
  name: string;
  description: string;
  updateTime: any;
  defaults: any;
  level?: number;
  expand?: boolean;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}
'''

`,
        idxName: `数据模型`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/datetime_single',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="单个时间选择组件">单个时间选择组件</h2><h2 @click="scrollTop($event)" id="datetime-single">datetime-single</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[(ngModel)]</td>
<td align="center">双向绑定的值，可做表单组件</td>
<td align="center">any</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">disableDate</td>
<td align="center">不可以选择的日期</td>
<td align="center">Function(current: <router-link :to="'component_interface?id=Date'">Date</router-link>): boolean</td>
<td align="center">(current: Date): boolean =&gt; {<br />  return differenceInCalendarDays(current, new Date()) &lt; 0;<br />}</td>
</tr>
<tr>
<td align="center">placeHolder</td>
<td align="center">输入框默认选择项</td>
<td align="center">String</td>
<td align="center">&#39;请选择日期&#39;</td>
</tr>
<tr>
<td align="center">format</td>
<td align="center">返回的数据格式</td>
<td align="center">&#39;&#39;&#124;YYYY-MM-DD HH:mm:ss</td>
<td align="center">&#39;YYYY-MM-DD HH:mm:ss&#39;</td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="center">ngModelChange</td>
<td align="center">双向绑定值变化事件</td>
<td align="center">EventEmitter&lt;any&gt;</td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('单个时间选择组件')" class="nav2 right_nav">单个时间选择组件</a><a @click="scrollIdTop('datetime-single')" class="nav2 right_nav">datetime-single</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 单个时间选择组件

## datetime-single

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| [(ngModel)] | 双向绑定的值，可做表单组件 | any |  | 
| disableDate | 不可以选择的日期 | Function(current: <router-link :to="'component_interface?id=Date'">Date</router-link>): boolean | (current: Date): boolean => {<br />  return differenceInCalendarDays(current, new Date()) &lt; 0;<br />} | 
| placeHolder | 输入框默认选择项 | String | '请选择日期' | 
| format | 返回的数据格式 | ''&#124;YYYY-MM-DD HH:mm:ss | 'YYYY-MM-DD HH:mm:ss' | 


### Output属性

| 属性值 | 描述 | 类型 |
| :----: | :----:| :----:  |
| ngModelChange | 双向绑定值变化事件 | EventEmitter&lt;any> | 


`,
        idxName: `单个时间选择组件`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/datetime_start_end',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="时间期限选择组件——只用于表单">时间期限选择组件——只用于表单</h2><h2 @click="scrollTop($event)" id="datetime-start-end">datetime-start-end</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[(ngModel)]</td>
<td align="center">双向绑定的值，可做表单组件</td>
<td align="center">any</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">data</td>
<td align="center"></td>
<td align="center"><router-link :to="'component_interface?id=CxFromModel'">CxFromModel</router-link></td>
<td align="center"></td>
</tr>
<tr>
<td align="center">format</td>
<td align="center">日期的数据格式</td>
<td align="center">&#39;&#39;&#124;YYYY-MM-DD HH:mm:ss</td>
<td align="center">&#39;YYYY-MM-DD HH:mm:ss&#39;</td>
</tr>
<tr>
<td align="center">showTime</td>
<td align="center">展示时间</td>
<td align="center">Boolean</td>
<td align="center">true</td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="center">ngModelChange</td>
<td align="center">双向绑定值变化事件</td>
<td align="center">EventEmitter&lt;any&gt;</td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('时间期限选择组件——只用于表单')" class="nav2 right_nav">时间期限选择组件——只用于表单</a><a @click="scrollIdTop('datetime-start-end')" class="nav2 right_nav">datetime-start-end</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 时间期限选择组件——只用于表单

## datetime-start-end

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| [(ngModel)] | 双向绑定的值，可做表单组件 | any |  | 
| data |  | <router-link :to="'component_interface?id=CxFromModel'">CxFromModel</router-link> |  | 
| format | 日期的数据格式 | ''&#124;YYYY-MM-DD HH:mm:ss | 'YYYY-MM-DD HH:mm:ss' | 
| showTime | 展示时间 | Boolean | true | 


### Output属性

| 属性值 | 描述 | 类型 |
| :----: | :----:| :----:  |
| ngModelChange | 双向绑定值变化事件 | EventEmitter&lt;any> | 


`,
        idxName: `时间期限选择组件——只用于表单`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/file_upload',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="文件上传组件">文件上传组件</h2><h2 @click="scrollTop($event)" id="file-upload">file-upload</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[(ngModel)]</td>
<td align="center">双向绑定的值，可做表单组件</td>
<td align="center">any</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">systemName</td>
<td align="center">* ds0.0.2</td>
<td align="center">String</td>
<td align="center">&#39;&#39;</td>
</tr>
<tr>
<td align="center">reviewFileUrl</td>
<td align="center">查看图片路径</td>
<td align="center">String</td>
<td align="center">&#39;&#39;</td>
</tr>
<tr>
<td align="center">onlyRead</td>
<td align="center">只读</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">formSub</td>
<td align="center">监听Subject</td>
<td align="center"><router-link :to="'component_interface?id=Subject'">Subject</router-link>&lt;<router-link :to="'component_interface?id=FormSubject'">FormSubject</router-link>&gt;</td>
<td align="center">new Subject()</td>
</tr>
<tr>
<td align="center">fileUploadParams</td>
<td align="center"></td>
<td align="center"><router-link :to="'component_interface?id=UploadFileParams'">UploadFileParams</router-link></td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="center">ngModelChange</td>
<td align="center">双向绑定值变化事件</td>
<td align="center">EventEmitter&lt;any&gt;</td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('文件上传组件')" class="nav2 right_nav">文件上传组件</a><a @click="scrollIdTop('file-upload')" class="nav2 right_nav">file-upload</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 文件上传组件

## file-upload

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| [(ngModel)] | 双向绑定的值，可做表单组件 | any |  | 
| systemName | * ds0.0.2 | String | '' | 
| reviewFileUrl | 查看图片路径 | String | '' | 
| onlyRead | 只读 | Boolean | false | 
| formSub | 监听Subject | <router-link :to="'component_interface?id=Subject'">Subject</router-link>&lt;<router-link :to="'component_interface?id=FormSubject'">FormSubject</router-link>> | new Subject() | 
| fileUploadParams |  | <router-link :to="'component_interface?id=UploadFileParams'">UploadFileParams</router-link> |  | 


### Output属性

| 属性值 | 描述 | 类型 |
| :----: | :----:| :----:  |
| ngModelChange | 双向绑定值变化事件 | EventEmitter&lt;any> | 


`,
        idxName: `文件上传组件`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/form_component',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="使用简单表单时配置表单组件">使用简单表单时配置表单组件</h2><h2 @click="scrollTop($event)" id="form-component">form-component</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">formModel</td>
<td align="center">表单模型数据</td>
<td align="center"><router-link :to="'component_interface?id=CxFromModel'">CxFromModel</router-link>[]</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">formElementBaseConfig</td>
<td align="center">表单元素配置</td>
<td align="center"><router-link :to="'component_interface?id=CxFormConfig'">CxFormConfig</router-link></td>
<td align="center"></td>
</tr>
<tr>
<td align="center">formElementConfig</td>
<td align="center">定制表单元素配置</td>
<td align="center">{<br/>  [key: string]: <router-link :to="'component_interface?id=RichTextParams'">RichTextParams</router-link> &#124; <router-link :to="'component_interface?id=UploadFileParams'">UploadFileParams</router-link>;<br/>}</td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="center">formValueChange</td>
<td align="center">表单改变检测</td>
<td align="center">EventEmitter</td>
</tr>
<tr>
<td align="center">ok</td>
<td align="center">表单确认返回</td>
<td align="center">EventEmitter</td>
</tr>
<tr>
<td align="center">cacel</td>
<td align="center">表单取消返回</td>
<td align="center">EventEmitter</td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('使用简单表单时配置表单组件')" class="nav2 right_nav">使用简单表单时配置表单组件</a><a @click="scrollIdTop('form-component')" class="nav2 right_nav">form-component</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 使用简单表单时配置表单组件

## form-component

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| formModel | 表单模型数据 | <router-link :to="'component_interface?id=CxFromModel'">CxFromModel</router-link>[] |  | 
| formElementBaseConfig | 表单元素配置 | <router-link :to="'component_interface?id=CxFormConfig'">CxFormConfig</router-link> |  | 
| formElementConfig | 定制表单元素配置 | {<br/>  [key: string]: <router-link :to="'component_interface?id=RichTextParams'">RichTextParams</router-link> &#124; <router-link :to="'component_interface?id=UploadFileParams'">UploadFileParams</router-link>;<br/>} |  | 


### Output属性

| 属性值 | 描述 | 类型 |
| :----: | :----:| :----:  |
| formValueChange | 表单改变检测 | EventEmitter | 
| ok | 表单确认返回 | EventEmitter | 
| cacel | 表单取消返回 | EventEmitter | 


`,
        idxName: `使用简单表单时配置表单组件`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/form_detail',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="使用简单表单时预览组件">使用简单表单时预览组件</h2><h2 @click="scrollTop($event)" id="form-detail">form-detail</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">formModel</td>
<td align="center">表单模型数据</td>
<td align="center"><router-link :to="'component_interface?id=CxFromModel'">CxFromModel</router-link>[]</td>
<td align="center"></td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('使用简单表单时预览组件')" class="nav2 right_nav">使用简单表单时预览组件</a><a @click="scrollIdTop('form-detail')" class="nav2 right_nav">form-detail</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 使用简单表单时预览组件

## form-detail

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| formModel | 表单模型数据 | <router-link :to="'component_interface?id=CxFromModel'">CxFromModel</router-link>[] |  | 


`,
        idxName: `使用简单表单时预览组件`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/input_group',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="同行输入组组件">同行输入组组件</h2><h2 @click="scrollTop($event)" id="input-group">input-group</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[(ngModel)]</td>
<td align="center">双向绑定的值，可做表单组件</td>
<td align="center">any</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">placeHolder</td>
<td align="center">输入框默认选择项</td>
<td align="center">String</td>
<td align="center">&#39;&#39;</td>
</tr>
<tr>
<td align="center">inputGroupModel</td>
<td align="center"></td>
<td align="center"><router-link :to="'component_interface?id=InputGroupModel'">InputGroupModel</router-link></td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="center">ngModelChange</td>
<td align="center">双向绑定值变化事件</td>
<td align="center">EventEmitter&lt;any&gt;</td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('同行输入组组件')" class="nav2 right_nav">同行输入组组件</a><a @click="scrollIdTop('input-group')" class="nav2 right_nav">input-group</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 同行输入组组件

## input-group

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| [(ngModel)] | 双向绑定的值，可做表单组件 | any |  | 
| placeHolder | 输入框默认选择项 | String | '' | 
| inputGroupModel |  | <router-link :to="'component_interface?id=InputGroupModel'">InputGroupModel</router-link> |  | 


### Output属性

| 属性值 | 描述 | 类型 |
| :----: | :----:| :----:  |
| ngModelChange | 双向绑定值变化事件 | EventEmitter&lt;any> | 


`,
        idxName: `同行输入组组件`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/tinymce_ngx',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="富文本组件">富文本组件</h2><h2 @click="scrollTop($event)" id="tinymce-ngx">tinymce-ngx</h2><h3 @click="scrollTop($event)" id="使用依赖">使用依赖</h3><p>在angular中引入&quot;src/assets/tinymce/tinymce.min.js&quot;</p>
<h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">[(ngModel)]</td>
<td align="center">双向绑定的值，可做表单组件</td>
<td align="center">any</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">richTextParams</td>
<td align="center"></td>
<td align="center"><router-link :to="'component_interface?id=RichTextParams'">RichTextParams</router-link></td>
<td align="center"></td>
</tr>
<tr>
<td align="center">isDelete</td>
<td align="center"></td>
<td align="center">Any</td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="center">ngModelChange</td>
<td align="center">双向绑定值变化事件</td>
<td align="center">EventEmitter&lt;any&gt;</td>
</tr>
<tr>
<td align="center">isEdit</td>
<td align="center">是否在编辑</td>
<td align="center">EventEmitter</td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('富文本组件')" class="nav2 right_nav">富文本组件</a><a @click="scrollIdTop('tinymce-ngx')" class="nav2 right_nav">tinymce-ngx</a><a @click="scrollIdTop('使用依赖')" class="nav3 right_nav">使用依赖</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 富文本组件

## tinymce-ngx

### 使用依赖

在angular中引入"src/assets/tinymce/tinymce.min.js"
### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| [(ngModel)] | 双向绑定的值，可做表单组件 | any |  | 
| richTextParams |  | <router-link :to="'component_interface?id=RichTextParams'">RichTextParams</router-link> |  | 
| isDelete |  | Any |  | 


### Output属性

| 属性值 | 描述 | 类型 |
| :----: | :----:| :----:  |
| ngModelChange | 双向绑定值变化事件 | EventEmitter&lt;any> | 
| isEdit | 是否在编辑 | EventEmitter | 


`,
        idxName: `富文本组件`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/content_breadcrumb',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="使用二级及以上面包屑时使用的组件">使用二级及以上面包屑时使用的组件</h2><h2 @click="scrollTop($event)" id="content-breadcrumb">content-breadcrumb</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">data</td>
<td align="center">面包屑数据</td>
<td align="center"><router-link :to="'component_interface?id=BreadcrumbData'">BreadcrumbData</router-link>[]</td>
<td align="center"></td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('使用二级及以上面包屑时使用的组件')" class="nav2 right_nav">使用二级及以上面包屑时使用的组件</a><a @click="scrollIdTop('content-breadcrumb')" class="nav2 right_nav">content-breadcrumb</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 使用二级及以上面包屑时使用的组件

## content-breadcrumb

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| data | 面包屑数据 | <router-link :to="'component_interface?id=BreadcrumbData'">BreadcrumbData</router-link>[] |  | 


`,
        idxName: `使用二级及以上面包屑时使用的组件`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/no_data',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="无数据时显示组件-需评审">无数据时显示组件-需评审</h2><h2 @click="scrollTop($event)" id="no-data">no-data</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">title</td>
<td align="center"></td>
<td align="center"></td>
<td align="center"></td>
</tr>
<tr>
<td align="center">border</td>
<td align="center"></td>
<td align="center">Boolean</td>
<td align="center">true</td>
</tr>
<tr>
<td align="center">refresh</td>
<td align="center">是否需要刷新</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">minHeight</td>
<td align="center"></td>
<td align="center">String</td>
<td align="center">&#39;150px&#39;</td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="center">onReFresh</td>
<td align="center">tslint:disable-next-line:no-output-on-prefix 点击刷新时</td>
<td align="center">Any</td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('无数据时显示组件-需评审')" class="nav2 right_nav">无数据时显示组件-需评审</a><a @click="scrollIdTop('no-data')" class="nav2 right_nav">no-data</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 无数据时显示组件-需评审

## no-data

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| title |  |  |  | 
| border |  | Boolean | true | 
| refresh | 是否需要刷新 | Boolean | false | 
| minHeight |  | String | '150px' | 


### Output属性

| 属性值 | 描述 | 类型 |
| :----: | :----:| :----:  |
| onReFresh | tslint:disable-next-line:no-output-on-prefix 点击刷新时 | Any | 


`,
        idxName: `无数据时显示组件-需评审`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/search_header_report_new',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="报表查询请求头-需优化">报表查询请求头-需优化</h2><h2 @click="scrollTop($event)" id="search-header-report-new">search-header-report-new</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">showAgent</td>
<td align="center">坐席</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showChannel</td>
<td align="center">渠道</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showAppId</td>
<td align="center">/ 是否显示接入点</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showTime</td>
<td align="center"></td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">shoLabel</td>
<td align="center">显示所有标签</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showClientName</td>
<td align="center">访客名称</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showWordTime</td>
<td align="center">留言日期</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showTelNum</td>
<td align="center">热线号码</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showReport</td>
<td align="center">报表类型</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
<tr>
<td align="center">showloginLog</td>
<td align="center">显示登录日志搜索头</td>
<td align="center">Boolean</td>
<td align="center">false</td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="center">emitChose</td>
<td align="center">点击查询回调</td>
<td align="center">EventEmitter</td>
</tr>
<tr>
<td align="center">emitType</td>
<td align="center"></td>
<td align="center">EventEmitter</td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('报表查询请求头-需优化')" class="nav2 right_nav">报表查询请求头-需优化</a><a @click="scrollIdTop('search-header-report-new')" class="nav2 right_nav">search-header-report-new</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 报表查询请求头-需优化

## search-header-report-new

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| showAgent | 坐席 | Boolean | false | 
| showChannel | 渠道 | Boolean | false | 
| showAppId | / 是否显示接入点 | Boolean | false | 
| showTime |  | Boolean | false | 
| shoLabel | 显示所有标签 | Boolean | false | 
| showClientName | 访客名称 | Boolean | false | 
| showWordTime | 留言日期 | Boolean | false | 
| showTelNum | 热线号码 | Boolean | false | 
| showReport | 报表类型 | Boolean | false | 
| showloginLog | 显示登录日志搜索头 | Boolean | false | 


### Output属性

| 属性值 | 描述 | 类型 |
| :----: | :----:| :----:  |
| emitChose | 点击查询回调 | EventEmitter | 
| emitType |  | EventEmitter | 


`,
        idxName: `报表查询请求头-需优化`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/tab_header',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="普通页面头部-需优化">普通页面头部-需优化</h2><h2 @click="scrollTop($event)" id="tab-header">tab-header</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
<th align="center">默认值</th>
</tr>
</thead>
<tbody><tr>
<td align="center">tabBtnList</td>
<td align="center"></td>
<td align="center"></td>
<td align="center"></td>
</tr>
</tbody></table>
<h3 @click="scrollTop($event)" id="Output属性">Output属性</h3><table>
<thead>
<tr>
<th align="center">属性值</th>
<th align="center">描述</th>
<th align="center">类型</th>
</tr>
</thead>
<tbody><tr>
<td align="center">tabBtnClick</td>
<td align="center"></td>
<td align="center">EventEmitter</td>
</tr>
</tbody></table>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('普通页面头部-需优化')" class="nav2 right_nav">普通页面头部-需优化</a><a @click="scrollIdTop('tab-header')" class="nav2 right_nav">tab-header</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 普通页面头部-需优化

## tab-header

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| tabBtnList |  |  |  | 


### Output属性

| 属性值 | 描述 | 类型 |
| :----: | :----:| :----:  |
| tabBtnClick |  | EventEmitter | 


`,
        idxName: `普通页面头部-需优化`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/_dfb_ng_component',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="component_generate -v1">component_generate -v1</h2><p>主要实现angualr的组件输入输出函数, 文档描述生成</p>
<h3 @click="scrollTop($event)" id="使用说明">使用说明</h3><h4 @click="scrollTop($event)" id="安装">安装</h4><pre><code>npm install -g dfbng</code></pre>
<h4 @click="scrollTop($event)" id="功能">功能</h4><ol>
<li>针对angular中组件进行收集，生成文档</li>
</ol>
<h4 @click="scrollTop($event)" id="固定规则">固定规则</h4><ol>
<li>读取组件.ts文件，文件必须以下列方式开头才会被识别为组件</li>
</ol>
<pre><code>/**
 * type: 类型一:类型二:类型三
 * name: &#39;组件名&#39;
 */</code></pre>
<ol start="2">
<li>读取文档,在组件.ts文件同级目录下的readme.md或者组件文件同名的.md文件会被读取，二者合并</li>
</ol>
<h3 @click="scrollTop($event)" id="代码结构">代码结构</h3><h4 @click="scrollTop($event)" id="代码说明">代码说明</h4><ol>
<li>使用babel进行ast生成</li>
<li>利用访问者模式进行ast解析，生成自己想要的数据</li>
<li>通过解析的数据生成markdown，html, json,vue项目等文件</li>
<li>使用npm link进行npm全局测试</li>
<li>使用npm发布，进行安装，名为dfbng</li>
</ol>
<h4 @click="scrollTop($event)" id="代码限制">代码限制</h4><ol>
<li>暂时只允许单例编译</li>
</ol>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('component_generate -v1')" class="nav2 right_nav">component_generate -v1</a><a @click="scrollIdTop('使用说明')" class="nav3 right_nav">使用说明</a><a @click="scrollIdTop('安装')" class="nav4 right_nav">安装</a><a @click="scrollIdTop('功能')" class="nav4 right_nav">功能</a><a @click="scrollIdTop('固定规则')" class="nav4 right_nav">固定规则</a><a @click="scrollIdTop('代码结构')" class="nav3 right_nav">代码结构</a><a @click="scrollIdTop('代码说明')" class="nav4 right_nav">代码说明</a><a @click="scrollIdTop('代码限制')" class="nav4 right_nav">代码限制</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## component_generate -v1
主要实现angualr的组件输入输出函数, 文档描述生成

### 使用说明

#### 安装
'''
npm install -g dfbng
'''

#### 功能

1. 针对angular中组件进行收集，生成文档

#### 固定规则

1. 读取组件.ts文件，文件必须以下列方式开头才会被识别为组件

'''
/**
 * type: 类型一:类型二:类型三
 * name: '组件名'
 */
'''
2. 读取文档,在组件.ts文件同级目录下的readme.md或者组件文件同名的.md文件会被读取，二者合并

### 代码结构

#### 代码说明
1. 使用babel进行ast生成
2. 利用访问者模式进行ast解析，生成自己想要的数据
3. 通过解析的数据生成markdown，html, json,vue项目等文件
4. 使用npm link进行npm全局测试
5. 使用npm发布，进行安装，名为dfbng

#### 代码限制
1. 暂时只允许单例编译`,
        idxName: `工具文档介绍`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},{
    path: '/_project_readme',
    component: { 
        template: `
        <div class="markdown_content">
            <div class="main">
                <article class="markdown-body">
                    <h2 @click="scrollTop($event)" id="component_generate -v1">component_generate -v1</h2><p>主要实现angualr的组件输入输出函数, 文档描述生成</p>
<h3 @click="scrollTop($event)" id="使用说明">使用说明</h3><h4 @click="scrollTop($event)" id="安装">安装</h4><pre><code>npm install -g dfbng</code></pre>
<h4 @click="scrollTop($event)" id="功能">功能</h4><ol>
<li>针对angular中组件进行收集，生成文档</li>
</ol>
<h4 @click="scrollTop($event)" id="固定规则">固定规则</h4><ol>
<li>读取组件.ts文件，文件必须以下列方式开头才会被识别为组件</li>
</ol>
<pre><code>/**
 * type: 类型一:类型二:类型三
 * name: &#39;组件名&#39;
 */</code></pre>
<ol start="2">
<li>读取文档,在组件.ts文件同级目录下的readme.md或者组件文件同名的.md文件会被读取，二者合并</li>
</ol>
<h3 @click="scrollTop($event)" id="代码结构">代码结构</h3><h4 @click="scrollTop($event)" id="代码说明">代码说明</h4><ol>
<li>使用babel进行ast生成</li>
<li>利用访问者模式进行ast解析，生成自己想要的数据</li>
<li>通过解析的数据生成markdown，html, json,vue项目等文件</li>
<li>使用npm link进行npm全局测试</li>
<li>使用npm发布，进行安装，名为dfbng</li>
</ol>
<h4 @click="scrollTop($event)" id="代码限制">代码限制</h4><ol>
<li>暂时只允许单例编译</li>
</ol>

                </article>  
            </div>
            <div class="right">
                <article class="divfixed">
                    <a @click="scrollIdTop('component_generate -v1')" class="nav2 right_nav">component_generate -v1</a><a @click="scrollIdTop('使用说明')" class="nav3 right_nav">使用说明</a><a @click="scrollIdTop('安装')" class="nav4 right_nav">安装</a><a @click="scrollIdTop('功能')" class="nav4 right_nav">功能</a><a @click="scrollIdTop('固定规则')" class="nav4 right_nav">固定规则</a><a @click="scrollIdTop('代码结构')" class="nav3 right_nav">代码结构</a><a @click="scrollIdTop('代码说明')" class="nav4 right_nav">代码说明</a><a @click="scrollIdTop('代码限制')" class="nav4 right_nav">代码限制</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## component_generate -v1
主要实现angualr的组件输入输出函数, 文档描述生成

### 使用说明

#### 安装
'''
npm install -g dfbng
'''

#### 功能

1. 针对angular中组件进行收集，生成文档

#### 固定规则

1. 读取组件.ts文件，文件必须以下列方式开头才会被识别为组件

'''
/**
 * type: 类型一:类型二:类型三
 * name: '组件名'
 */
'''
2. 读取文档,在组件.ts文件同级目录下的readme.md或者组件文件同名的.md文件会被读取，二者合并

### 代码结构

#### 代码说明
1. 使用babel进行ast生成
2. 利用访问者模式进行ast解析，生成自己想要的数据
3. 通过解析的数据生成markdown，html, json,vue项目等文件
4. 使用npm link进行npm全局测试
5. 使用npm发布，进行安装，名为dfbng

#### 代码限制
1. 暂时只允许单例编译`,
        idxName: `项目文档介绍`, 
        mounted(){
            if(this.$route.query.id) {
                const element =  document.getElementById(this.$route.query.id);
                if(element) {
                    element.scrollIntoView()
                }
            }
        },
        methods: {
            scrollTop(e) {
                e.target.scrollIntoView()
            },
            scrollIdTop(id) {
                document.getElementById(id).scrollIntoView()
            }
        }
    },
},]
