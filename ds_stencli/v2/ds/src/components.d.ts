/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DsBreadcrumbDataModel } from "./components/nav/ds-breadcrumb/ds-breadcrumb";
import { CheckStatus } from "./components/form/ds-checkbox/ds-checkbox";
import { Direction } from "./components_js/model";
import { DsTreeData } from "./components/show/ds-tree/ds-tree";
export namespace Components {
    interface DsBreadcrumb {
        "dsData": DsBreadcrumbDataModel[];
        "dsPreviewPrevite": boolean;
    }
    interface DsButton {
        /**
          * 是否是危险样式
         */
        "dsDanger": boolean;
        /**
          * 是否可点击
         */
        "dsDisabled": boolean;
        /**
          * 设置载入状态
         */
        "dsLoadding": boolean;
        "dsPreviewPrevite": boolean;
        /**
          * 根据类型显示按钮的样式
         */
        "dsType": 'default' | 'primary' | 'dashed' | 'link' | 'text';
    }
    interface DsCard {
        /**
          * 卡片操作组
         */
        "dsAction": any[];
    }
    interface DsCheckbox {
        /**
          * 当前的选择的样式
         */
        "checkStatus": CheckStatus;
    }
    interface DsCollapse {
        /**
          * 打开的折叠板
         */
        "activeIndex": number;
        /**
          * 是否关闭其他的折叠面板
         */
        "isCloseOther": boolean;
    }
    interface DsCollapsePanel {
        /**
          * 是否展开
         */
        "dsIsActive": boolean;
        /**
          * 是否时最后一个
         */
        "dsLast": boolean;
        /**
          * 标题
         */
        "name": string;
    }
    interface DsDivider {
        /**
          * 是否虚线
         */
        "dsDashed": boolean;
        "dsPreviewPrevite": boolean;
        /**
          * 文本位置
         */
        "dsTextDirection": 'center' | 'left' | 'right';
        /**
          * 分割线的类型,水平还是垂直
         */
        "dsType": 'horizontal' | 'vertical';
    }
    interface DsDrag {
        /**
          * 携带的数据
         */
        "data": any;
        /**
          * 是否可以拖拽
         */
        "isDrag": boolean;
        /**
          * 是否可以变更大小
         */
        "isResize": boolean;
        /**
          * 移动得操作，其实主要是传值，会有不同得样式，逻辑依靠这个判断
         */
        "operate": 'copy' | 'move';
    }
    interface DsDrop {
    }
    interface DsDropdown {
        /**
          * 展示的位置显示，存在边缘修改
         */
        "direction": Direction;
        /**
          * 是否展示，可以由外界控制
         */
        "isShow": boolean;
        /**
          * 什么操作可以触发展示
         */
        "operate": 'focus' | 'click' | 'contextmenu';
    }
    interface DsFor {
        /**
          * 是否显示
         */
        "dsValue": any[];
    }
    interface DsIf {
        /**
          * 是否显示
         */
        "dsValue": boolean;
    }
    interface DsInput {
    }
    interface DsMenu {
    }
    interface DsOverlay {
        /**
          * overlay所在的位置
         */
        "direction": Direction;
        /**
          * 传入需要在下拉菜单的节点，供克隆到document上使用
         */
        "elment": HTMLElement;
        /**
          * 是否是第一次点击，不需要被引用者使用，内部使用
         */
        "isFirst": boolean;
        /**
          * 点击或者移入的事件Event
         */
        "parentEvent": MouseEvent;
    }
    interface DsPopover {
    }
    interface DsRadio {
        /**
          * 当前的选择的样式
         */
        "checkStatus": boolean;
    }
    interface DsSpace {
        /**
          * 内部布局，垂直还是水平
         */
        "dsDirection": 'vertical' | 'horizontal';
        "dsPreviewPrevite": boolean;
        /**
          * 间距的大小，单位px
         */
        "dsSize": number;
    }
    interface DsSpaceItem {
        /**
          * 外部布局，垂直还是水平
         */
        "dsDirection": 'vertical' | 'horizontal';
        /**
          * 是否是最后一个子元素
         */
        "dsLast": boolean;
        /**
          * 间距的大小，单位px
         */
        "dsSize": number;
    }
    interface DsTab {
    }
    interface DsTabs {
        /**
          * 内部布局，垂直还是水平
         */
        "dsDirection": 'vertical' | 'horizontal';
        "dsPreviewPrevite": boolean;
        /**
          * 间距的大小，单位px
         */
        "dsSize": number;
    }
    interface DsTree {
        /**
          * 数据源
         */
        "data": DsTreeData[];
    }
    interface DsTypography {
        "dsPreviewPrevite": boolean;
        /**
          * 主元素显示的HTml
         */
        "dsTag": 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
        /**
          * 文本类型
         */
        "dsType": 'default' | 'secondary' | 'warning'
    | 'danger' | 'success' | 'disabled';
    }
}
declare global {
    interface HTMLDsBreadcrumbElement extends Components.DsBreadcrumb, HTMLStencilElement {
    }
    var HTMLDsBreadcrumbElement: {
        prototype: HTMLDsBreadcrumbElement;
        new (): HTMLDsBreadcrumbElement;
    };
    interface HTMLDsButtonElement extends Components.DsButton, HTMLStencilElement {
    }
    var HTMLDsButtonElement: {
        prototype: HTMLDsButtonElement;
        new (): HTMLDsButtonElement;
    };
    interface HTMLDsCardElement extends Components.DsCard, HTMLStencilElement {
    }
    var HTMLDsCardElement: {
        prototype: HTMLDsCardElement;
        new (): HTMLDsCardElement;
    };
    interface HTMLDsCheckboxElement extends Components.DsCheckbox, HTMLStencilElement {
    }
    var HTMLDsCheckboxElement: {
        prototype: HTMLDsCheckboxElement;
        new (): HTMLDsCheckboxElement;
    };
    interface HTMLDsCollapseElement extends Components.DsCollapse, HTMLStencilElement {
    }
    var HTMLDsCollapseElement: {
        prototype: HTMLDsCollapseElement;
        new (): HTMLDsCollapseElement;
    };
    interface HTMLDsCollapsePanelElement extends Components.DsCollapsePanel, HTMLStencilElement {
    }
    var HTMLDsCollapsePanelElement: {
        prototype: HTMLDsCollapsePanelElement;
        new (): HTMLDsCollapsePanelElement;
    };
    interface HTMLDsDividerElement extends Components.DsDivider, HTMLStencilElement {
    }
    var HTMLDsDividerElement: {
        prototype: HTMLDsDividerElement;
        new (): HTMLDsDividerElement;
    };
    interface HTMLDsDragElement extends Components.DsDrag, HTMLStencilElement {
    }
    var HTMLDsDragElement: {
        prototype: HTMLDsDragElement;
        new (): HTMLDsDragElement;
    };
    interface HTMLDsDropElement extends Components.DsDrop, HTMLStencilElement {
    }
    var HTMLDsDropElement: {
        prototype: HTMLDsDropElement;
        new (): HTMLDsDropElement;
    };
    interface HTMLDsDropdownElement extends Components.DsDropdown, HTMLStencilElement {
    }
    var HTMLDsDropdownElement: {
        prototype: HTMLDsDropdownElement;
        new (): HTMLDsDropdownElement;
    };
    interface HTMLDsForElement extends Components.DsFor, HTMLStencilElement {
    }
    var HTMLDsForElement: {
        prototype: HTMLDsForElement;
        new (): HTMLDsForElement;
    };
    interface HTMLDsIfElement extends Components.DsIf, HTMLStencilElement {
    }
    var HTMLDsIfElement: {
        prototype: HTMLDsIfElement;
        new (): HTMLDsIfElement;
    };
    interface HTMLDsInputElement extends Components.DsInput, HTMLStencilElement {
    }
    var HTMLDsInputElement: {
        prototype: HTMLDsInputElement;
        new (): HTMLDsInputElement;
    };
    interface HTMLDsMenuElement extends Components.DsMenu, HTMLStencilElement {
    }
    var HTMLDsMenuElement: {
        prototype: HTMLDsMenuElement;
        new (): HTMLDsMenuElement;
    };
    interface HTMLDsOverlayElement extends Components.DsOverlay, HTMLStencilElement {
    }
    var HTMLDsOverlayElement: {
        prototype: HTMLDsOverlayElement;
        new (): HTMLDsOverlayElement;
    };
    interface HTMLDsPopoverElement extends Components.DsPopover, HTMLStencilElement {
    }
    var HTMLDsPopoverElement: {
        prototype: HTMLDsPopoverElement;
        new (): HTMLDsPopoverElement;
    };
    interface HTMLDsRadioElement extends Components.DsRadio, HTMLStencilElement {
    }
    var HTMLDsRadioElement: {
        prototype: HTMLDsRadioElement;
        new (): HTMLDsRadioElement;
    };
    interface HTMLDsSpaceElement extends Components.DsSpace, HTMLStencilElement {
    }
    var HTMLDsSpaceElement: {
        prototype: HTMLDsSpaceElement;
        new (): HTMLDsSpaceElement;
    };
    interface HTMLDsSpaceItemElement extends Components.DsSpaceItem, HTMLStencilElement {
    }
    var HTMLDsSpaceItemElement: {
        prototype: HTMLDsSpaceItemElement;
        new (): HTMLDsSpaceItemElement;
    };
    interface HTMLDsTabElement extends Components.DsTab, HTMLStencilElement {
    }
    var HTMLDsTabElement: {
        prototype: HTMLDsTabElement;
        new (): HTMLDsTabElement;
    };
    interface HTMLDsTabsElement extends Components.DsTabs, HTMLStencilElement {
    }
    var HTMLDsTabsElement: {
        prototype: HTMLDsTabsElement;
        new (): HTMLDsTabsElement;
    };
    interface HTMLDsTreeElement extends Components.DsTree, HTMLStencilElement {
    }
    var HTMLDsTreeElement: {
        prototype: HTMLDsTreeElement;
        new (): HTMLDsTreeElement;
    };
    interface HTMLDsTypographyElement extends Components.DsTypography, HTMLStencilElement {
    }
    var HTMLDsTypographyElement: {
        prototype: HTMLDsTypographyElement;
        new (): HTMLDsTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "ds-breadcrumb": HTMLDsBreadcrumbElement;
        "ds-button": HTMLDsButtonElement;
        "ds-card": HTMLDsCardElement;
        "ds-checkbox": HTMLDsCheckboxElement;
        "ds-collapse": HTMLDsCollapseElement;
        "ds-collapse-panel": HTMLDsCollapsePanelElement;
        "ds-divider": HTMLDsDividerElement;
        "ds-drag": HTMLDsDragElement;
        "ds-drop": HTMLDsDropElement;
        "ds-dropdown": HTMLDsDropdownElement;
        "ds-for": HTMLDsForElement;
        "ds-if": HTMLDsIfElement;
        "ds-input": HTMLDsInputElement;
        "ds-menu": HTMLDsMenuElement;
        "ds-overlay": HTMLDsOverlayElement;
        "ds-popover": HTMLDsPopoverElement;
        "ds-radio": HTMLDsRadioElement;
        "ds-space": HTMLDsSpaceElement;
        "ds-space-item": HTMLDsSpaceItemElement;
        "ds-tab": HTMLDsTabElement;
        "ds-tabs": HTMLDsTabsElement;
        "ds-tree": HTMLDsTreeElement;
        "ds-typography": HTMLDsTypographyElement;
    }
}
declare namespace LocalJSX {
    interface DsBreadcrumb {
        "dsData"?: DsBreadcrumbDataModel[];
        "dsPreviewPrevite"?: boolean;
    }
    interface DsButton {
        /**
          * 是否是危险样式
         */
        "dsDanger"?: boolean;
        /**
          * 是否可点击
         */
        "dsDisabled"?: boolean;
        /**
          * 设置载入状态
         */
        "dsLoadding"?: boolean;
        "dsPreviewPrevite"?: boolean;
        /**
          * 根据类型显示按钮的样式
         */
        "dsType"?: 'default' | 'primary' | 'dashed' | 'link' | 'text';
    }
    interface DsCard {
        /**
          * 卡片操作组
         */
        "dsAction"?: any[];
    }
    interface DsCheckbox {
        /**
          * 当前的选择的样式
         */
        "checkStatus"?: CheckStatus;
        "onCheckStatusChange"?: (event: CustomEvent<CheckStatus>) => void;
    }
    interface DsCollapse {
        /**
          * 打开的折叠板
         */
        "activeIndex"?: number;
        /**
          * 是否关闭其他的折叠面板
         */
        "isCloseOther"?: boolean;
        /**
          * 当展开时状态改变
         */
        "onActiveIndexChange"?: (event: CustomEvent<number>) => void;
    }
    interface DsCollapsePanel {
        /**
          * 是否展开
         */
        "dsIsActive"?: boolean;
        /**
          * 是否时最后一个
         */
        "dsLast"?: boolean;
        /**
          * 标题
         */
        "name"?: string;
        /**
          * 当展开时状态改变
         */
        "onDsIsActiveChange"?: (event: CustomEvent<boolean>) => void;
    }
    interface DsDivider {
        /**
          * 是否虚线
         */
        "dsDashed"?: boolean;
        "dsPreviewPrevite"?: boolean;
        /**
          * 文本位置
         */
        "dsTextDirection"?: 'center' | 'left' | 'right';
        /**
          * 分割线的类型,水平还是垂直
         */
        "dsType"?: 'horizontal' | 'vertical';
    }
    interface DsDrag {
        /**
          * 携带的数据
         */
        "data"?: any;
        /**
          * 是否可以拖拽
         */
        "isDrag"?: boolean;
        /**
          * 是否可以变更大小
         */
        "isResize"?: boolean;
        /**
          * 移动得操作，其实主要是传值，会有不同得样式，逻辑依靠这个判断
         */
        "operate"?: 'copy' | 'move';
    }
    interface DsDrop {
    }
    interface DsDropdown {
        /**
          * 展示的位置显示，存在边缘修改
         */
        "direction"?: Direction;
        /**
          * 是否展示，可以由外界控制
         */
        "isShow"?: boolean;
        /**
          * 什么操作可以触发展示
         */
        "operate"?: 'focus' | 'click' | 'contextmenu';
    }
    interface DsFor {
        /**
          * 是否显示
         */
        "dsValue"?: any[];
    }
    interface DsIf {
        /**
          * 是否显示
         */
        "dsValue"?: boolean;
    }
    interface DsInput {
    }
    interface DsMenu {
    }
    interface DsOverlay {
        /**
          * overlay所在的位置
         */
        "direction"?: Direction;
        /**
          * 传入需要在下拉菜单的节点，供克隆到document上使用
         */
        "elment"?: HTMLElement;
        /**
          * 是否是第一次点击，不需要被引用者使用，内部使用
         */
        "isFirst"?: boolean;
        /**
          * 点击或者移入的事件Event
         */
        "parentEvent"?: MouseEvent;
    }
    interface DsPopover {
    }
    interface DsRadio {
        /**
          * 当前的选择的样式
         */
        "checkStatus"?: boolean;
        "onCheckStatusChange"?: (event: CustomEvent<boolean>) => void;
    }
    interface DsSpace {
        /**
          * 内部布局，垂直还是水平
         */
        "dsDirection"?: 'vertical' | 'horizontal';
        "dsPreviewPrevite"?: boolean;
        /**
          * 间距的大小，单位px
         */
        "dsSize"?: number;
    }
    interface DsSpaceItem {
        /**
          * 外部布局，垂直还是水平
         */
        "dsDirection"?: 'vertical' | 'horizontal';
        /**
          * 是否是最后一个子元素
         */
        "dsLast"?: boolean;
        /**
          * 间距的大小，单位px
         */
        "dsSize"?: number;
    }
    interface DsTab {
    }
    interface DsTabs {
        /**
          * 内部布局，垂直还是水平
         */
        "dsDirection"?: 'vertical' | 'horizontal';
        "dsPreviewPrevite"?: boolean;
        /**
          * 间距的大小，单位px
         */
        "dsSize"?: number;
    }
    interface DsTree {
        /**
          * 数据源
         */
        "data"?: DsTreeData[];
        /**
          * 数据源
         */
        "onClickData"?: (event: CustomEvent<DsTreeData>) => void;
    }
    interface DsTypography {
        "dsPreviewPrevite"?: boolean;
        /**
          * 主元素显示的HTml
         */
        "dsTag"?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
        /**
          * 文本类型
         */
        "dsType"?: 'default' | 'secondary' | 'warning'
    | 'danger' | 'success' | 'disabled';
    }
    interface IntrinsicElements {
        "ds-breadcrumb": DsBreadcrumb;
        "ds-button": DsButton;
        "ds-card": DsCard;
        "ds-checkbox": DsCheckbox;
        "ds-collapse": DsCollapse;
        "ds-collapse-panel": DsCollapsePanel;
        "ds-divider": DsDivider;
        "ds-drag": DsDrag;
        "ds-drop": DsDrop;
        "ds-dropdown": DsDropdown;
        "ds-for": DsFor;
        "ds-if": DsIf;
        "ds-input": DsInput;
        "ds-menu": DsMenu;
        "ds-overlay": DsOverlay;
        "ds-popover": DsPopover;
        "ds-radio": DsRadio;
        "ds-space": DsSpace;
        "ds-space-item": DsSpaceItem;
        "ds-tab": DsTab;
        "ds-tabs": DsTabs;
        "ds-tree": DsTree;
        "ds-typography": DsTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ds-breadcrumb": LocalJSX.DsBreadcrumb & JSXBase.HTMLAttributes<HTMLDsBreadcrumbElement>;
            "ds-button": LocalJSX.DsButton & JSXBase.HTMLAttributes<HTMLDsButtonElement>;
            "ds-card": LocalJSX.DsCard & JSXBase.HTMLAttributes<HTMLDsCardElement>;
            "ds-checkbox": LocalJSX.DsCheckbox & JSXBase.HTMLAttributes<HTMLDsCheckboxElement>;
            "ds-collapse": LocalJSX.DsCollapse & JSXBase.HTMLAttributes<HTMLDsCollapseElement>;
            "ds-collapse-panel": LocalJSX.DsCollapsePanel & JSXBase.HTMLAttributes<HTMLDsCollapsePanelElement>;
            "ds-divider": LocalJSX.DsDivider & JSXBase.HTMLAttributes<HTMLDsDividerElement>;
            "ds-drag": LocalJSX.DsDrag & JSXBase.HTMLAttributes<HTMLDsDragElement>;
            "ds-drop": LocalJSX.DsDrop & JSXBase.HTMLAttributes<HTMLDsDropElement>;
            "ds-dropdown": LocalJSX.DsDropdown & JSXBase.HTMLAttributes<HTMLDsDropdownElement>;
            "ds-for": LocalJSX.DsFor & JSXBase.HTMLAttributes<HTMLDsForElement>;
            "ds-if": LocalJSX.DsIf & JSXBase.HTMLAttributes<HTMLDsIfElement>;
            "ds-input": LocalJSX.DsInput & JSXBase.HTMLAttributes<HTMLDsInputElement>;
            "ds-menu": LocalJSX.DsMenu & JSXBase.HTMLAttributes<HTMLDsMenuElement>;
            "ds-overlay": LocalJSX.DsOverlay & JSXBase.HTMLAttributes<HTMLDsOverlayElement>;
            "ds-popover": LocalJSX.DsPopover & JSXBase.HTMLAttributes<HTMLDsPopoverElement>;
            "ds-radio": LocalJSX.DsRadio & JSXBase.HTMLAttributes<HTMLDsRadioElement>;
            "ds-space": LocalJSX.DsSpace & JSXBase.HTMLAttributes<HTMLDsSpaceElement>;
            "ds-space-item": LocalJSX.DsSpaceItem & JSXBase.HTMLAttributes<HTMLDsSpaceItemElement>;
            "ds-tab": LocalJSX.DsTab & JSXBase.HTMLAttributes<HTMLDsTabElement>;
            "ds-tabs": LocalJSX.DsTabs & JSXBase.HTMLAttributes<HTMLDsTabsElement>;
            "ds-tree": LocalJSX.DsTree & JSXBase.HTMLAttributes<HTMLDsTreeElement>;
            "ds-typography": LocalJSX.DsTypography & JSXBase.HTMLAttributes<HTMLDsTypographyElement>;
        }
    }
}
