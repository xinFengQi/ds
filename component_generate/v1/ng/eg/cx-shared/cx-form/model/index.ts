import { ValidatorFn } from '@angular/forms';

// 键值类型
export interface ValueLabel {
    value: any;
    label: string;
}

// 按钮类型
export interface BreadcrumbBtuData {
    title: string;
    type: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    onClick: (...value: any[]) => void;
}

// 富文本配置
export interface RichTextParams {
    // 内容高度
    height?: string;
    // 内容宽度
    width?: string;
    // 插件列表
    plugins?: string;
    // toolbar
    toolbar?: string;
}

// 表单模型配置
export interface CxFromModel {
    // 表单元素键值
    key: string;
    // 表单元素类型
    type: 'select' | 'input' | 'radio' | 'datetime' | 'richText' | 'uploadFile' | 'inputgroup' | 'datetimeStartEnd' | 'textarea' | 'judgecondition';
    // 表单元素标签值
    label: string;
    // 默认提示
    placeholder?: string;
    // 是否不展示表单元素标签
    noShowLabel?: boolean;
    // 是否不是必填
    noRequire?: boolean | string;
    // 是否不是必填错误提示
    noRequireErrorTip?: boolean;
    // 是否禁用
    disabled?: boolean;
    // 默认值
    default?: any;
    // 是否不展示
    noShow?: boolean;
    // 额外的校验器
    extraValidator?: ValidatorFn[];
    // 下拉选数据
    selectData?: ValueLabel[];
    // 单选数据
    radioData?: ValueLabel[];
    // 输入组的参数
    inputGroupModel?: InputGroupModel;
    // 时间开始结束元素数据
    dateTimeStartEndModel?: DateTimeStartEndModel;
    // 缓存上次数据
    __cache?: CxFromModel;
    // 长度
    length?: number;
}

// 输入组配置数据
export interface InputGroupModel {
    beforeArr?: ValueLabel[];
    afterArr?: ValueLabel[];
    writerFn?: (value: any) => string;
    changeFn?: (value: any) => string;
}

// 日期开始结束选择框配置
export interface DateTimeStartEndModel {
    labelStart?: string;
    isNoShowLabelStart?: boolean;
    labelEnd?: string;
    isNoShowLabelEnd?: boolean;
}

// 表单元素基础配置
export interface CxFormConfig {
    // 富文本选项
    richParams?: RichTextParams;
    fileParams?: UploadFileParams;
    toolbar?: string;
}

// 富文本配置
export interface RichTextParams {
    // 内容高度
    height?: string;
    // 内容宽度
    width?: string;
    // 插件列表
    plugins?: string;
    // toolbar
    toolbar?: string;
    // toolbar多余功能显示方式
    toolbar_mode?: 'wrap' | 'sliding' | 'floating' | 'Scrolling';
    // 长度
    length?: number;
}

// 上传组件配置
export interface UploadFileParams {
    // 上传最大文件数
    maxLength?: number;
    // 上传文件url
    uploadFileUrl?: string;
    // 删除文件url
    deleteFileUrl?: string;
    // 只读
    onlyRead?: boolean;
    // 文件大小
    fileSize?: number;
}

// 表单订阅中心数据
export interface FormSubject {
    type: 'fileDelete';
    data?: any;
}
