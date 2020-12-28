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
<h2 @click="scrollTop($event)" id="OpenTabDetailModel">OpenTabDetailModel</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/contact-center.service.ts</p>
<pre><code class="language-javascript">export interface OpenTabDetailModel {
  type: &#39;visitorPlan&#39;;
  data: any;
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
<h2 @click="scrollTop($event)" id="TaskListModel">TaskListModel</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/side/task-list/services/task.service.ts</p>
<pre><code class="language-javascript">interface TaskListModel {
  type: number;
  customerName: string;
  callCount: number;
  telNumber: string;
  customerRep: boolean;
  active: boolean;
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
<h2 @click="scrollTop($event)" id="DataItem">DataItem</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/cpcommon-form/detail-form/detail-form.component.ts</p>
<pre><code class="language-javascript">interface DataItem {
  taskId: string;
  number: number | string;
  custName: string;
  mobile: string;
  status: number;
  unoName: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="ColumnItem">ColumnItem</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/cpcommon-form/detail-form/detail-form.component.ts</p>
<pre><code class="language-javascript">interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
}</code></pre>
<h2 @click="scrollTop($event)" id="Data">Data</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/cpcommon-form/steps-form/step-addnum/step-addnum.component.ts</p>
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
<h2 @click="scrollTop($event)" id="Task">Task</h2><p>注释: </p>
<pre><code class="language-javascript"> 自定义任务信息对象类型</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/preview-call/preview-call.service.ts</p>
<pre><code class="language-javascript">// 自定义任务信息对象类型
interface Task {
  id?: string;
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
<h2 @click="scrollTop($event)" id="Task">Task</h2><p>注释: </p>
<pre><code class="language-javascript"> 自定义任务信息对象类型</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/visit-plan/vp-step.service.ts</p>
<pre><code class="language-javascript">// 自定义任务信息对象类型
interface Task {
  id?: string;
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
  allocationDetail: any[];
  customers: any;
}</code></pre>
<h2 @click="scrollTop($event)" id="ArrangeInfo">ArrangeInfo</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-datashow/model/index.ts</p>
<pre><code class="language-javascript">export interface ArrangeInfo {
  key: string;
  label: string | number;
  value: string | number;
  beferValue?: string;
  afterValue?: string;
  type?: &#39;dic&#39;;
  dicData?: ValueLabel[];
  onClick?: (event?: ArrangeInfo) =&gt; void;
  changeFn?: (...a: any) =&gt; string | number;
  maxlength?: number;
  existNoShow?: boolean; // 存在不显示情况
  color?: string;
  theme?: &#39;primary&#39;;
  fontWeight?: number;
  _style?: {
    [key: string]: any;
  };
  _class?: {
    [key: string]: boolean;
  };
  _isCursor?: boolean;
  _shortValue?: string | number;
  _showTooltip?: boolean;
}</code></pre>
<h2 @click="scrollTop($event)" id="SelectValue">SelectValue</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/judge-condition/judge-condition.component.ts</p>
<pre><code class="language-javascript">interface SelectValue {
  name: number;
  contain: number;
  value: ValueLabel[];
  cache?: SelectValue;
}</code></pre>
<h2 @click="scrollTop($event)" id="ValueLabel">ValueLabel</h2><p>注释: </p>
<pre><code class="language-javascript"> 键值类型</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface ValueLabel {
  value: any;
  label: string;
  disabled?: boolean;
  hide?: boolean;
  color?: string;
}</code></pre>
<h2 @click="scrollTop($event)" id="BreadcrumbBtuData">BreadcrumbBtuData</h2><p>注释: </p>
<pre><code class="language-javascript"> 按钮类型</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface BreadcrumbBtuData {
  title: string;
  type: &#39;primary&#39; | &#39;default&#39; | &#39;dashed&#39; | &#39;text&#39; | &#39;link&#39;;
  loading?: boolean;
  clickLoading?: (isLoading?: boolean) =&gt; void;
  onClick: (...value: any[]) =&gt; void;
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
  disabled?: boolean; // ng表单不联动
  ngDisabled?: boolean; // 只读
  readonly?: boolean; // 默认值
  default?: any; // 是否不展示
  noShow?: boolean; // 额外的校验器
  extraValidator?: ValidatorFn[]; // 下拉选数据
  selectData?: ValueLabel[]; // 单选数据
  radioData?: ValueLabel[]; // 输入组的参数
  inputGroupModel?: InputGroupModel; // 时间开始结束元素数据
  dateTimeStartEndModel?: DateTimeStartEndModel; // 条件内容数据
  judgeCondition?: JudgeCondition; // 缓存上次数据
  __cache?: CxFromModel; // 长度
  length?: number;
}</code></pre>
<h2 @click="scrollTop($event)" id="InputGroupModel">InputGroupModel</h2><p>注释: </p>
<pre><code class="language-javascript"> 输入组配置数据</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface InputGroupModel {
  beforeArr?: ValueLabel[];
  beforeDisabled?: boolean;
  afterArr?: ValueLabel[];
  afterDisabled?: boolean;
  inputType?: &#39;text&#39; | &#39;number&#39;;
  inputReadonly?: boolean;
  inputDisabled?: boolean;
  writerFn?: (value: any) =&gt; any[];
  changeFn?: (a: any, b: any, c: any) =&gt; any;
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
<h2 @click="scrollTop($event)" id="JudgeCondition">JudgeCondition</h2><p>注释: </p>
<pre><code class="language-javascript"> 条件选择的配置</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface JudgeCondition {
  disableds?: {
    nameDisabled?: boolean;
    contaionDisabled?: boolean;
    valueDisabled?: boolean;
  };
  data: JudgeConditionData;
}</code></pre>
<h2 @click="scrollTop($event)" id="JudgeConditionData">JudgeConditionData</h2><p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface JudgeConditionData {
  [key: string]: {
    disabled?: boolean;
    value: ValueLabel;
    data: ValueLabel[];
    selectData?: ValueLabel[];
    getContentFn?: () =&gt; (name: string) =&gt; Promise&lt;any&gt;;
    __getContentFn?: (name: string) =&gt; Promise&lt;any&gt;;
  };
}</code></pre>
<h2 @click="scrollTop($event)" id="CxFormConfig">CxFormConfig</h2><p>注释: </p>
<pre><code class="language-javascript"> 表单元素基础配置</code></pre>
<p>来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts</p>
<pre><code class="language-javascript">export interface CxFormConfig {
  // 富文本选项
  richParams?: RichTextParams;
  fileParams?: UploadFileParams;
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
  length?: number; // placeholder
  placeholder?: string; // 图片上传url
  uploadFileUrl?: string; // 限制文件大小
  fileSize?: number;
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
  id?: number | string;
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
                    <a @click="scrollIdTop('ViewInfo')" class="nav2 right_nav">ViewInfo</a><a @click="scrollIdTop('OpenTabDetailModel')" class="nav2 right_nav">OpenTabDetailModel</a><a @click="scrollIdTop('IVisitorInfo')" class="nav2 right_nav">IVisitorInfo</a><a @click="scrollIdTop('ViewInfo')" class="nav2 right_nav">ViewInfo</a><a @click="scrollIdTop('Paging')" class="nav2 right_nav">Paging</a><a @click="scrollIdTop('ViewInfo')" class="nav2 right_nav">ViewInfo</a><a @click="scrollIdTop('TaskListModel')" class="nav2 right_nav">TaskListModel</a><a @click="scrollIdTop('TaskList')" class="nav2 right_nav">TaskList</a><a @click="scrollIdTop('Menu')" class="nav2 right_nav">Menu</a><a @click="scrollIdTop('ReuseTitle')" class="nav2 right_nav">ReuseTitle</a><a @click="scrollIdTop('ReuseTabCached')" class="nav2 right_nav">ReuseTabCached</a><a @click="scrollIdTop('ReuseTabNotify')" class="nav2 right_nav">ReuseTabNotify</a><a @click="scrollIdTop('ReuseItem')" class="nav2 right_nav">ReuseItem</a><a @click="scrollIdTop('ReuseContextEvent')" class="nav2 right_nav">ReuseContextEvent</a><a @click="scrollIdTop('ReuseContextCloseEvent')" class="nav2 right_nav">ReuseContextCloseEvent</a><a @click="scrollIdTop('ReuseContextI18n')" class="nav2 right_nav">ReuseContextI18n</a><a @click="scrollIdTop('ReuseCustomContextMenu')" class="nav2 right_nav">ReuseCustomContextMenu</a><a @click="scrollIdTop('ReuseComponentHandle')" class="nav2 right_nav">ReuseComponentHandle</a><a @click="scrollIdTop('ReuseComponentRef')" class="nav2 right_nav">ReuseComponentRef</a><a @click="scrollIdTop('ReuseComponentInstance')" class="nav2 right_nav">ReuseComponentInstance</a><a @click="scrollIdTop('OnReuseInit')" class="nav2 right_nav">OnReuseInit</a><a @click="scrollIdTop('OnReuseDestroy')" class="nav2 right_nav">OnReuseDestroy</a><a @click="scrollIdTop('IVisitorChatLimit')" class="nav2 right_nav">IVisitorChatLimit</a><a @click="scrollIdTop('EventModel')" class="nav2 right_nav">EventModel</a><a @click="scrollIdTop('DataItem')" class="nav2 right_nav">DataItem</a><a @click="scrollIdTop('ColumnItem')" class="nav2 right_nav">ColumnItem</a><a @click="scrollIdTop('Data')" class="nav2 right_nav">Data</a><a @click="scrollIdTop('Task')" class="nav2 right_nav">Task</a><a @click="scrollIdTop('Task')" class="nav2 right_nav">Task</a><a @click="scrollIdTop('ArrangeInfo')" class="nav2 right_nav">ArrangeInfo</a><a @click="scrollIdTop('SelectValue')" class="nav2 right_nav">SelectValue</a><a @click="scrollIdTop('ValueLabel')" class="nav2 right_nav">ValueLabel</a><a @click="scrollIdTop('BreadcrumbBtuData')" class="nav2 right_nav">BreadcrumbBtuData</a><a @click="scrollIdTop('CxFromModel')" class="nav2 right_nav">CxFromModel</a><a @click="scrollIdTop('InputGroupModel')" class="nav2 right_nav">InputGroupModel</a><a @click="scrollIdTop('DateTimeStartEndModel')" class="nav2 right_nav">DateTimeStartEndModel</a><a @click="scrollIdTop('JudgeCondition')" class="nav2 right_nav">JudgeCondition</a><a @click="scrollIdTop('JudgeConditionData')" class="nav2 right_nav">JudgeConditionData</a><a @click="scrollIdTop('CxFormConfig')" class="nav2 right_nav">CxFormConfig</a><a @click="scrollIdTop('RichTextParams')" class="nav2 right_nav">RichTextParams</a><a @click="scrollIdTop('UploadFileParams')" class="nav2 right_nav">UploadFileParams</a><a @click="scrollIdTop('FormSubject')" class="nav2 right_nav">FormSubject</a><a @click="scrollIdTop('BreadcrumbData')" class="nav2 right_nav">BreadcrumbData</a><a @click="scrollIdTop('MessageInfo')" class="nav2 right_nav">MessageInfo</a><a @click="scrollIdTop('Data')" class="nav2 right_nav">Data</a><a @click="scrollIdTop('ClientParamsInter')" class="nav2 right_nav">ClientParamsInter</a><a @click="scrollIdTop('HotlineParamsInter')" class="nav2 right_nav">HotlineParamsInter</a><a @click="scrollIdTop('TreeNodeInterface')" class="nav2 right_nav">TreeNodeInterface</a>
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

## OpenTabDetailModel
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/contact-center.service.ts
'''javascript
export interface OpenTabDetailModel {
  type: 'visitorPlan';
  data: any;
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

## TaskListModel
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/contact-center/side/task-list/services/task.service.ts
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

## DataItem
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/cpcommon-form/detail-form/detail-form.component.ts
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
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/cpcommon-form/detail-form/detail-form.component.ts
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
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/cpcommon-form/steps-form/step-addnum/step-addnum.component.ts
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

## Task
注释: 
'''javascript
 自定义任务信息对象类型
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/preview-call/preview-call.service.ts
'''javascript
// 自定义任务信息对象类型
interface Task {
  id?: string;
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

## Task
注释: 
'''javascript
 自定义任务信息对象类型
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-page/contact-plan/visit-plan/vp-step.service.ts
'''javascript
// 自定义任务信息对象类型
interface Task {
  id?: string;
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
  allocationDetail: any[];
  customers: any;
}
'''

## ArrangeInfo
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-datashow/model/index.ts
'''javascript
export interface ArrangeInfo {
  key: string;
  label: string | number;
  value: string | number;
  beferValue?: string;
  afterValue?: string;
  type?: 'dic';
  dicData?: ValueLabel[];
  onClick?: (event?: ArrangeInfo) => void;
  changeFn?: (...a: any) => string | number;
  maxlength?: number;
  existNoShow?: boolean; // 存在不显示情况
  color?: string;
  theme?: 'primary';
  fontWeight?: number;
  _style?: {
    [key: string]: any;
  };
  _class?: {
    [key: string]: boolean;
  };
  _isCursor?: boolean;
  _shortValue?: string | number;
  _showTooltip?: boolean;
}
'''

## SelectValue
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/judge-condition/judge-condition.component.ts
'''javascript
interface SelectValue {
  name: number;
  contain: number;
  value: ValueLabel[];
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
  disabled?: boolean;
  hide?: boolean;
  color?: string;
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
  loading?: boolean;
  clickLoading?: (isLoading?: boolean) => void;
  onClick: (...value: any[]) => void;
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
  disabled?: boolean; // ng表单不联动
  ngDisabled?: boolean; // 只读
  readonly?: boolean; // 默认值
  default?: any; // 是否不展示
  noShow?: boolean; // 额外的校验器
  extraValidator?: ValidatorFn[]; // 下拉选数据
  selectData?: ValueLabel[]; // 单选数据
  radioData?: ValueLabel[]; // 输入组的参数
  inputGroupModel?: InputGroupModel; // 时间开始结束元素数据
  dateTimeStartEndModel?: DateTimeStartEndModel; // 条件内容数据
  judgeCondition?: JudgeCondition; // 缓存上次数据
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
  beforeDisabled?: boolean;
  afterArr?: ValueLabel[];
  afterDisabled?: boolean;
  inputType?: 'text' | 'number';
  inputReadonly?: boolean;
  inputDisabled?: boolean;
  writerFn?: (value: any) => any[];
  changeFn?: (a: any, b: any, c: any) => any;
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

## JudgeCondition
注释: 
'''javascript
 条件选择的配置
'''

来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface JudgeCondition {
  disableds?: {
    nameDisabled?: boolean;
    contaionDisabled?: boolean;
    valueDisabled?: boolean;
  };
  data: JudgeConditionData;
}
'''

## JudgeConditionData
来源地址: C:/F_code/work/CxCloud/cxcloud-app/cxcloud-portal-webapp/src/app/cx-shared/cx-form/model/index.ts
'''javascript
export interface JudgeConditionData {
  [key: string]: {
    disabled?: boolean;
    value: ValueLabel;
    data: ValueLabel[];
    selectData?: ValueLabel[];
    getContentFn?: () => (name: string) => Promise<any>;
    __getContentFn?: (name: string) => Promise<any>;
  };
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
  length?: number; // placeholder
  placeholder?: string; // 图片上传url
  uploadFileUrl?: string; // 限制文件大小
  fileSize?: number;
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
  id?: number | string;
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
<tr>
<td align="center">labelSpan</td>
<td align="center"></td>
<td align="center">Number</td>
<td align="center">10</td>
</tr>
<tr>
<td align="center">valueSpan</td>
<td align="center"></td>
<td align="center">Number</td>
<td align="center">10</td>
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
| labelSpan |  | Number | 10 | 
| valueSpan |  | Number | 10 | 


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
<tr>
<td align="center">labelSpan</td>
<td align="center"></td>
<td align="center">Number</td>
<td align="center">3</td>
</tr>
<tr>
<td align="center">valueSpan</td>
<td align="center"></td>
<td align="center">Number</td>
<td align="center">0</td>
</tr>
<tr>
<td align="center">isShowButton</td>
<td align="center"></td>
<td align="center">Boolean</td>
<td align="center">true</td>
</tr>
<tr>
<td align="center">footerButtonData</td>
<td align="center">按钮选项</td>
<td align="center">Array</td>
<td align="center">[&#39;okBtu&#39;, &#39;cacelOk&#39;]</td>
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
| labelSpan |  | Number | 3 | 
| valueSpan |  | Number | 0 | 
| isShowButton |  | Boolean | true | 
| footerButtonData | 按钮选项 | Array | ['okBtu', 'cacelOk'] | 


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
                    <h2 @click="scrollTop($event)" id="富文本组件">富文本组件</h2><h2 @click="scrollTop($event)" id="tinymce-ngx">tinymce-ngx</h2><h3 @click="scrollTop($event)" id="Input属性">Input属性</h3><table>
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
<tr>
<td align="center">reInit</td>
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
                    <a @click="scrollIdTop('富文本组件')" class="nav2 right_nav">富文本组件</a><a @click="scrollIdTop('tinymce-ngx')" class="nav2 right_nav">tinymce-ngx</a><a @click="scrollIdTop('Input属性')" class="nav3 right_nav">Input属性</a><a @click="scrollIdTop('Output属性')" class="nav3 right_nav">Output属性</a>
                </article>  
            </div>
        </div>`, 
        markdown: `## 富文本组件

## tinymce-ngx

### Input属性

| 属性值 | 描述 | 类型 | 默认值 |
| :----: | :----:| :----: | :----:  |
| [(ngModel)] | 双向绑定的值，可做表单组件 | any |  | 
| richTextParams |  | <router-link :to="'component_interface?id=RichTextParams'">RichTextParams</router-link> |  | 
| isDelete |  | Any |  | 
| reInit |  | Any |  | 


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
},]
