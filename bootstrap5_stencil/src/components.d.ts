/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ComponentType, DataType, SizeType } from "./interface/type.interface";
import { ValueVerifyFunReturn } from "./components/ds-util/ds-util-fun";
import { Dsb5DropdownData, Dsb5FromModel, Dsb5MenuTreeData } from "./interface/component.interface";
export namespace Components {
    interface DsProp {
        /**
          * 参数名称
         */
        "name": string;
        /**
          * 父节点
         */
        "parentEl": HTMLElement | ParentNode;
        /**
          * 参数类型
         */
        "type": DataType;
    }
    interface DsScript {
        /**
          * 父节点
         */
        "parentEl": HTMLElement | ParentNode;
    }
    interface DsUtil {
        /**
          * 防抖函数
         */
        "debounceTimeSync": (fun: Function, time: number) => (...arg: any[]) => void;
        /**
          * 初始化信息
         */
        "init": () => Promise<HTMLElement>;
        /**
          * 判断两个数值是否相同
         */
        "isEqualSync": (a: any, b: any) => boolean;
        /**
          * 值校验
         */
        "valueVerifySync": (value: string, type: DataType) => ValueVerifyFunReturn;
    }
    interface Dsb5Alert {
        /**
          * 是否显示关闭按钮
         */
        "close"?: boolean;
        /**
          * 弹框的内容
         */
        "content": string;
        /**
          * 延迟关闭
         */
        "delay"?: null | number;
        /**
          * 弹框是否是浮动的
         */
        "fixed"?: boolean;
        /**
          * 是否显示
         */
        "show"?: boolean;
        /**
          * 显示弹框组件; 用法: dsb5.dsb5Alert.showAlert({content: '测试弹框'});
         */
        "showAlert": (opt: { content: string; type?: ComponentType; close?: boolean; delay?: number; }) => Promise<void>;
        /**
          * 弹框的类型
         */
        "type"?: ComponentType;
    }
    interface Dsb5ApiParams {
        /**
          * 表单结构
         */
        "forms": Dsb5FromModel[];
    }
    interface Dsb5Button {
        /**
          * 按钮outline类型
         */
        "outline": boolean;
        /**
          * 按钮大小
         */
        "size": SizeType | null;
        /**
          * 按钮的类型
         */
        "type": ComponentType;
    }
    interface Dsb5Dropdown {
        /**
          * 按钮颜色
         */
        "color"?: ComponentType;
        /**
          * 下拉选择选项
         */
        "data": Dsb5DropdownData[] | string[];
        /**
          * 是否变更值
         */
        "valueChange": boolean;
    }
    interface Dsb5FunctionExecute {
        /**
          * 需要执行的全局函数
         */
        "fun": string;
        /**
          * 需要执行函数的参数
         */
        "params": any[];
        /**
          * 执行函数的结果
         */
        "result": any[];
        /**
          * 执行次数
         */
        "time": number;
    }
    interface Dsb5FunctionParams {
    }
    interface Dsb5Input {
        /**
          * 是否是错误
         */
        "error": boolean;
        /**
          * placeholder值
         */
        "placeholder": string;
        /**
          * 按钮大小
         */
        "size": SizeType | null;
        /**
          * 当前的值
         */
        "value": string;
    }
    interface Dsb5MenuTree {
        /**
          * 增加节点
         */
        "addNode": (key: string, newNode: Dsb5MenuTreeData) => Promise<void | any[]>;
        /**
          * 编辑节点
         */
        "editNode": (newNode: Dsb5MenuTreeData) => Promise<void | any[]>;
        /**
          * 目录树数据
         */
        "menuTree": Dsb5MenuTreeData[];
        /**
          * 移除节点
         */
        "removeNode": (key: string) => Promise<void | any[]>;
    }
    interface Dsb5Modal {
        /**
          * 是否显示关闭按钮
         */
        "close"?: boolean;
        /**
          * 弹框的标题
         */
        "dstitle": string;
        /**
          * 弹框是否是浮动的
         */
        "fixed"?: boolean;
        /**
          * 弹框的底部
         */
        "footer": string | HTMLElement | null | boolean;
        /**
          * 弹框的位置
         */
        "location"?: 'top' | 'center';
        /**
          * 是否显示
         */
        "show"?: boolean;
    }
    interface Dsb5Select {
        /**
          * 当前的值
         */
        "value": any;
    }
    interface Dsb5Tabs {
        "tabs": string[];
    }
    interface Dsb5Test {
        /**
          * 一个字符串参数
         */
        "prop": string;
        /**
          * 一个字符串数组参数1
         */
        "propArr": string[];
    }
    interface Dsb5Textarea {
        "rows": number;
    }
    interface Dsb5WebcomponentShow {
        /**
          * 内容展示方式
         */
        "type": null | 'row';
    }
}
declare global {
    interface HTMLDsPropElement extends Components.DsProp, HTMLStencilElement {
    }
    var HTMLDsPropElement: {
        prototype: HTMLDsPropElement;
        new (): HTMLDsPropElement;
    };
    interface HTMLDsScriptElement extends Components.DsScript, HTMLStencilElement {
    }
    var HTMLDsScriptElement: {
        prototype: HTMLDsScriptElement;
        new (): HTMLDsScriptElement;
    };
    interface HTMLDsUtilElement extends Components.DsUtil, HTMLStencilElement {
    }
    var HTMLDsUtilElement: {
        prototype: HTMLDsUtilElement;
        new (): HTMLDsUtilElement;
    };
    interface HTMLDsb5AlertElement extends Components.Dsb5Alert, HTMLStencilElement {
    }
    var HTMLDsb5AlertElement: {
        prototype: HTMLDsb5AlertElement;
        new (): HTMLDsb5AlertElement;
    };
    interface HTMLDsb5ApiParamsElement extends Components.Dsb5ApiParams, HTMLStencilElement {
    }
    var HTMLDsb5ApiParamsElement: {
        prototype: HTMLDsb5ApiParamsElement;
        new (): HTMLDsb5ApiParamsElement;
    };
    interface HTMLDsb5ButtonElement extends Components.Dsb5Button, HTMLStencilElement {
    }
    var HTMLDsb5ButtonElement: {
        prototype: HTMLDsb5ButtonElement;
        new (): HTMLDsb5ButtonElement;
    };
    interface HTMLDsb5DropdownElement extends Components.Dsb5Dropdown, HTMLStencilElement {
    }
    var HTMLDsb5DropdownElement: {
        prototype: HTMLDsb5DropdownElement;
        new (): HTMLDsb5DropdownElement;
    };
    interface HTMLDsb5FunctionExecuteElement extends Components.Dsb5FunctionExecute, HTMLStencilElement {
    }
    var HTMLDsb5FunctionExecuteElement: {
        prototype: HTMLDsb5FunctionExecuteElement;
        new (): HTMLDsb5FunctionExecuteElement;
    };
    interface HTMLDsb5FunctionParamsElement extends Components.Dsb5FunctionParams, HTMLStencilElement {
    }
    var HTMLDsb5FunctionParamsElement: {
        prototype: HTMLDsb5FunctionParamsElement;
        new (): HTMLDsb5FunctionParamsElement;
    };
    interface HTMLDsb5InputElement extends Components.Dsb5Input, HTMLStencilElement {
    }
    var HTMLDsb5InputElement: {
        prototype: HTMLDsb5InputElement;
        new (): HTMLDsb5InputElement;
    };
    interface HTMLDsb5MenuTreeElement extends Components.Dsb5MenuTree, HTMLStencilElement {
    }
    var HTMLDsb5MenuTreeElement: {
        prototype: HTMLDsb5MenuTreeElement;
        new (): HTMLDsb5MenuTreeElement;
    };
    interface HTMLDsb5ModalElement extends Components.Dsb5Modal, HTMLStencilElement {
    }
    var HTMLDsb5ModalElement: {
        prototype: HTMLDsb5ModalElement;
        new (): HTMLDsb5ModalElement;
    };
    interface HTMLDsb5SelectElement extends Components.Dsb5Select, HTMLStencilElement {
    }
    var HTMLDsb5SelectElement: {
        prototype: HTMLDsb5SelectElement;
        new (): HTMLDsb5SelectElement;
    };
    interface HTMLDsb5TabsElement extends Components.Dsb5Tabs, HTMLStencilElement {
    }
    var HTMLDsb5TabsElement: {
        prototype: HTMLDsb5TabsElement;
        new (): HTMLDsb5TabsElement;
    };
    interface HTMLDsb5TestElement extends Components.Dsb5Test, HTMLStencilElement {
    }
    var HTMLDsb5TestElement: {
        prototype: HTMLDsb5TestElement;
        new (): HTMLDsb5TestElement;
    };
    interface HTMLDsb5TextareaElement extends Components.Dsb5Textarea, HTMLStencilElement {
    }
    var HTMLDsb5TextareaElement: {
        prototype: HTMLDsb5TextareaElement;
        new (): HTMLDsb5TextareaElement;
    };
    interface HTMLDsb5WebcomponentShowElement extends Components.Dsb5WebcomponentShow, HTMLStencilElement {
    }
    var HTMLDsb5WebcomponentShowElement: {
        prototype: HTMLDsb5WebcomponentShowElement;
        new (): HTMLDsb5WebcomponentShowElement;
    };
    interface HTMLElementTagNameMap {
        "ds-prop": HTMLDsPropElement;
        "ds-script": HTMLDsScriptElement;
        "ds-util": HTMLDsUtilElement;
        "dsb5-alert": HTMLDsb5AlertElement;
        "dsb5-api-params": HTMLDsb5ApiParamsElement;
        "dsb5-button": HTMLDsb5ButtonElement;
        "dsb5-dropdown": HTMLDsb5DropdownElement;
        "dsb5-function-execute": HTMLDsb5FunctionExecuteElement;
        "dsb5-function-params": HTMLDsb5FunctionParamsElement;
        "dsb5-input": HTMLDsb5InputElement;
        "dsb5-menu-tree": HTMLDsb5MenuTreeElement;
        "dsb5-modal": HTMLDsb5ModalElement;
        "dsb5-select": HTMLDsb5SelectElement;
        "dsb5-tabs": HTMLDsb5TabsElement;
        "dsb5-test": HTMLDsb5TestElement;
        "dsb5-textarea": HTMLDsb5TextareaElement;
        "dsb5-webcomponent-show": HTMLDsb5WebcomponentShowElement;
    }
}
declare namespace LocalJSX {
    interface DsProp {
        /**
          * 参数名称
         */
        "name": string;
        /**
          * 解析参数后回调事件
         */
        "onGetProp"?: (event: CustomEvent<{ key: string; value: any }>) => void;
        /**
          * 父节点
         */
        "parentEl"?: HTMLElement | ParentNode;
        /**
          * 参数类型
         */
        "type"?: DataType;
    }
    interface DsScript {
        /**
          * 解析参数后回调事件
         */
        "onGetExecute"?: (event: CustomEvent<any>) => void;
        /**
          * 父节点
         */
        "parentEl"?: HTMLElement | ParentNode;
    }
    interface DsUtil {
        /**
          * 防抖函数
         */
        "debounceTimeSync"?: (fun: Function, time: number) => (...arg: any[]) => void;
        /**
          * 判断两个数值是否相同
         */
        "isEqualSync"?: (a: any, b: any) => boolean;
        /**
          * 值校验
         */
        "valueVerifySync"?: (value: string, type: DataType) => ValueVerifyFunReturn;
    }
    interface Dsb5Alert {
        /**
          * 是否显示关闭按钮
         */
        "close"?: boolean;
        /**
          * 弹框的内容
         */
        "content": string;
        /**
          * 延迟关闭
         */
        "delay"?: null | number;
        /**
          * 弹框是否是浮动的
         */
        "fixed"?: boolean;
        /**
          * 弹框关闭事件
         */
        "onCloseemit"?: (event: CustomEvent<boolean>) => void;
        /**
          * 是否显示
         */
        "show"?: boolean;
        /**
          * 弹框的类型
         */
        "type"?: ComponentType;
    }
    interface Dsb5ApiParams {
        /**
          * 表单结构
         */
        "forms"?: Dsb5FromModel[];
        /**
          * 返回变更的数据
         */
        "onFormchange"?: (event: CustomEvent<{ valid: boolean; value: Dsb5FromModel[][] }>) => void;
    }
    interface Dsb5Button {
        /**
          * 按钮outline类型
         */
        "outline"?: boolean;
        /**
          * 按钮大小
         */
        "size"?: SizeType | null;
        /**
          * 按钮的类型
         */
        "type"?: ComponentType;
    }
    interface Dsb5Dropdown {
        /**
          * 按钮颜色
         */
        "color"?: ComponentType;
        /**
          * 下拉选择选项
         */
        "data"?: Dsb5DropdownData[] | string[];
        /**
          * 弹框关闭事件
         */
        "onGetselectdata"?: (event: CustomEvent<Dsb5DropdownData | string>) => void;
        /**
          * 是否变更值
         */
        "valueChange"?: boolean;
    }
    interface Dsb5FunctionExecute {
        /**
          * 需要执行的全局函数
         */
        "fun": string;
        /**
          * 需要执行函数的参数
         */
        "params"?: any[];
        /**
          * 执行函数的结果
         */
        "result"?: any[];
        /**
          * 执行次数
         */
        "time"?: number;
    }
    interface Dsb5FunctionParams {
        /**
          * 返回变更的数据
         */
        "onFormchange"?: (event: CustomEvent<{ valid: boolean; value: Dsb5FromModel[] }>) => void;
    }
    interface Dsb5Input {
        /**
          * 是否是错误
         */
        "error"?: boolean;
        /**
          * 值变化的事件
         */
        "onValuechange"?: (event: CustomEvent<string>) => void;
        /**
          * placeholder值
         */
        "placeholder"?: string;
        /**
          * 按钮大小
         */
        "size"?: SizeType | null;
        /**
          * 当前的值
         */
        "value"?: string;
    }
    interface Dsb5MenuTree {
        /**
          * 目录树数据
         */
        "menuTree"?: Dsb5MenuTreeData[];
        /**
          * 增加点击事件
         */
        "onAdd"?: (event: CustomEvent<{ el: HTMLDivElement; node: Dsb5MenuTreeData }>) => void;
        /**
          * 点击事件
         */
        "onClickNav"?: (event: CustomEvent<Dsb5MenuTreeData>) => void;
        /**
          * 编辑点击事件
         */
        "onEdit"?: (event: CustomEvent<{ el: HTMLDivElement; node: Dsb5MenuTreeData }>) => void;
        /**
          * 删除点击事件
         */
        "onRemove"?: (event: CustomEvent<{ el: HTMLDivElement; node: Dsb5MenuTreeData }>) => void;
    }
    interface Dsb5Modal {
        /**
          * 是否显示关闭按钮
         */
        "close"?: boolean;
        /**
          * 弹框的标题
         */
        "dstitle"?: string;
        /**
          * 弹框是否是浮动的
         */
        "fixed"?: boolean;
        /**
          * 弹框的底部
         */
        "footer"?: string | HTMLElement | null | boolean;
        /**
          * 弹框的位置
         */
        "location"?: 'top' | 'center';
        /**
          * 弹框取消关闭事件
         */
        "onCacel"?: (event: CustomEvent<null>) => void;
        /**
          * 弹框确认关闭事件
         */
        "onOk"?: (event: CustomEvent<null>) => void;
        /**
          * 是否显示
         */
        "show"?: boolean;
    }
    interface Dsb5Select {
        /**
          * 值变化的事件
         */
        "onValuechange"?: (event: CustomEvent<any>) => void;
        /**
          * 当前的值
         */
        "value"?: any;
    }
    interface Dsb5Tabs {
        "tabs"?: string[];
    }
    interface Dsb5Test {
        /**
          * 一个字符串参数
         */
        "prop"?: string;
        /**
          * 一个字符串数组参数1
         */
        "propArr"?: string[];
    }
    interface Dsb5Textarea {
        "rows"?: number;
    }
    interface Dsb5WebcomponentShow {
        /**
          * 内容展示方式
         */
        "type"?: null | 'row';
    }
    interface IntrinsicElements {
        "ds-prop": DsProp;
        "ds-script": DsScript;
        "ds-util": DsUtil;
        "dsb5-alert": Dsb5Alert;
        "dsb5-api-params": Dsb5ApiParams;
        "dsb5-button": Dsb5Button;
        "dsb5-dropdown": Dsb5Dropdown;
        "dsb5-function-execute": Dsb5FunctionExecute;
        "dsb5-function-params": Dsb5FunctionParams;
        "dsb5-input": Dsb5Input;
        "dsb5-menu-tree": Dsb5MenuTree;
        "dsb5-modal": Dsb5Modal;
        "dsb5-select": Dsb5Select;
        "dsb5-tabs": Dsb5Tabs;
        "dsb5-test": Dsb5Test;
        "dsb5-textarea": Dsb5Textarea;
        "dsb5-webcomponent-show": Dsb5WebcomponentShow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ds-prop": LocalJSX.DsProp & JSXBase.HTMLAttributes<HTMLDsPropElement>;
            "ds-script": LocalJSX.DsScript & JSXBase.HTMLAttributes<HTMLDsScriptElement>;
            "ds-util": LocalJSX.DsUtil & JSXBase.HTMLAttributes<HTMLDsUtilElement>;
            "dsb5-alert": LocalJSX.Dsb5Alert & JSXBase.HTMLAttributes<HTMLDsb5AlertElement>;
            "dsb5-api-params": LocalJSX.Dsb5ApiParams & JSXBase.HTMLAttributes<HTMLDsb5ApiParamsElement>;
            "dsb5-button": LocalJSX.Dsb5Button & JSXBase.HTMLAttributes<HTMLDsb5ButtonElement>;
            "dsb5-dropdown": LocalJSX.Dsb5Dropdown & JSXBase.HTMLAttributes<HTMLDsb5DropdownElement>;
            "dsb5-function-execute": LocalJSX.Dsb5FunctionExecute & JSXBase.HTMLAttributes<HTMLDsb5FunctionExecuteElement>;
            "dsb5-function-params": LocalJSX.Dsb5FunctionParams & JSXBase.HTMLAttributes<HTMLDsb5FunctionParamsElement>;
            "dsb5-input": LocalJSX.Dsb5Input & JSXBase.HTMLAttributes<HTMLDsb5InputElement>;
            "dsb5-menu-tree": LocalJSX.Dsb5MenuTree & JSXBase.HTMLAttributes<HTMLDsb5MenuTreeElement>;
            "dsb5-modal": LocalJSX.Dsb5Modal & JSXBase.HTMLAttributes<HTMLDsb5ModalElement>;
            "dsb5-select": LocalJSX.Dsb5Select & JSXBase.HTMLAttributes<HTMLDsb5SelectElement>;
            "dsb5-tabs": LocalJSX.Dsb5Tabs & JSXBase.HTMLAttributes<HTMLDsb5TabsElement>;
            "dsb5-test": LocalJSX.Dsb5Test & JSXBase.HTMLAttributes<HTMLDsb5TestElement>;
            "dsb5-textarea": LocalJSX.Dsb5Textarea & JSXBase.HTMLAttributes<HTMLDsb5TextareaElement>;
            "dsb5-webcomponent-show": LocalJSX.Dsb5WebcomponentShow & JSXBase.HTMLAttributes<HTMLDsb5WebcomponentShowElement>;
        }
    }
}
