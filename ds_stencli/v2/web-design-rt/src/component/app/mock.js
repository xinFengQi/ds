export const componentJSON = {
  "timestamp": "2021-06-30T22:42:21",
  "compiler": {
    "name": "@stencil/core",
    "version": "2.4.0",
    "typescriptVersion": "4.1.3"
  },
  "components": [
    {
      "filePath": "./src/components/nav/ds-breadcrumb/ds-breadcrumb.tsx",
      "encapsulation": "shadow",
      "tag": "ds-breadcrumb",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "demo",
          "type": "boolean",
          "mutable": false,
          "attr": "demo",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsData",
          "type": "DsBreadcrumbDataModel[]",
          "mutable": false,
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "[{\n    name: '第一级',\n    type: 'link',\n    onClick: () => {\n      console.log('点击了第一级')\n    }\n  }, {\n    name: '第二级',\n    type: 'text',\n  }]",
          "values": [
            {
              "type": "DsBreadcrumbDataModel[]"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/base/ds-button/ds-button.tsx",
      "encapsulation": "shadow",
      "tag": "ds-button",
      "readme": "<!--\n * @Icon 2021-01-25 09:21:12\n-->\n# ds-button\n\n名称: 按钮\n\n## 设计思路\n\n### 已有思路\n1. 基本的原生butoon标签\n2. 根据类型设计五种按钮\n3. 可以设置危险按钮\n4. 可以设置不能点击\n\n\n### 未来实现\n\n1. 可以设置主色,由代码生成五种类型的按钮\n2. 图标加入\n3. 可以设置其他形状，例如圆形等\n\n## 开发备注\n[2021-1-26]\n1. 基本样式完成\n\n\n",
      "docs": "<!--\n * @Icon 2021-01-25 09:21:12\n-->",
      "docsTags": [
        {
          "text": "someOtherName - some other name",
          "name": "myOtherDocTag"
        }
      ],
      "usage": {},
      "props": [
        {
          "name": "demo",
          "type": "boolean",
          "mutable": false,
          "attr": "demo",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsDanger",
          "type": "boolean",
          "mutable": false,
          "attr": "ds-danger",
          "reflectToAttr": false,
          "docs": "是否是危险样式",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsDisabled",
          "type": "boolean",
          "mutable": false,
          "attr": "ds-disabled",
          "reflectToAttr": false,
          "docs": "是否可点击",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsLoadding",
          "type": "boolean",
          "mutable": false,
          "attr": "ds-loadding",
          "reflectToAttr": false,
          "docs": "设置载入状态",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsType",
          "type": "\"dashed\" | \"default\" | \"link\" | \"primary\" | \"text\"",
          "mutable": false,
          "attr": "ds-type",
          "reflectToAttr": false,
          "docs": "根据类型显示按钮的样式",
          "docsTags": [
            {
              "text": "someOtherName - some other name",
              "name": "myOtherDocTag"
            }
          ],
          "default": "'default'",
          "values": [
            {
              "value": "dashed",
              "type": "string"
            },
            {
              "value": "default",
              "type": "string"
            },
            {
              "value": "link",
              "type": "string"
            },
            {
              "value": "primary",
              "type": "string"
            },
            {
              "value": "text",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [
        "ds-card"
      ],
      "dependencies": [],
      "dependencyGraph": {
        "ds-card": [
          "ds-button"
        ]
      }
    },
    {
      "filePath": "./src/components/show/ds-card/ds-card.tsx",
      "encapsulation": "shadow",
      "tag": "ds-card",
      "readme": "<!--\n * @Date: 2021-01-25 09:21:12\n * @LastEditors: dongfb\n * @LastEditTime: 2021-02-22 16:51:52\n-->\n# ds-button\n\n名称: 卡片\n\n## 设计思路\n\n### 已有思路\n\n\n\n### 未来实现\n\n\n\n## 开发备注\n[2021-02-22]\n1. 基本样式完成\n\n\n",
      "docs": "<!--\n * @Date: 2021-01-25 09:21:12\n * @LastEditors: dongfb\n * @LastEditTime: 2021-02-22 16:51:52\n-->",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "dsAction",
          "type": "any[]",
          "mutable": false,
          "reflectToAttr": false,
          "docs": "卡片操作组",
          "docsTags": [],
          "default": "[]",
          "values": [
            {
              "type": "any[]"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [
        "ds-button"
      ],
      "dependencyGraph": {
        "ds-card": [
          "ds-button"
        ]
      }
    },
    {
      "filePath": "./src/components/form/ds-checkbox/ds-checkbox.tsx",
      "encapsulation": "shadow",
      "tag": "ds-checkbox",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "checkStatus",
          "type": "\"all\" | \"none\" | \"part\"",
          "mutable": true,
          "attr": "check-status",
          "reflectToAttr": false,
          "docs": "当前的选择的样式",
          "docsTags": [],
          "default": "'part'",
          "values": [
            {
              "value": "all",
              "type": "string"
            },
            {
              "value": "none",
              "type": "string"
            },
            {
              "value": "part",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [
        {
          "event": "checkStatusChange",
          "detail": "\"all\" | \"none\" | \"part\"",
          "bubbles": true,
          "cancelable": true,
          "composed": true,
          "docs": "",
          "docsTags": []
        }
      ],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/show/ds-collapse/ds-collapse.tsx",
      "encapsulation": "shadow",
      "tag": "ds-collapse",
      "readme": "# ds-collapse\n\n名称: 折叠面板\n\n## 设计思路\n\n### 已有思路\n\n\n\n### 未来实现\n\n\n\n## 开发备注\n[2021-03-25]\n1. 基本样式完成\n\n\n",
      "docs": "名称: 折叠面板",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "activeIndex",
          "type": "number",
          "mutable": true,
          "attr": "active-index",
          "reflectToAttr": false,
          "docs": "打开的折叠板",
          "docsTags": [],
          "values": [
            {
              "type": "number"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "isCloseOther",
          "type": "boolean",
          "mutable": false,
          "attr": "is-close-other",
          "reflectToAttr": false,
          "docs": "是否关闭其他的折叠面板",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [
        {
          "event": "activeIndexChange",
          "detail": "number",
          "bubbles": true,
          "cancelable": true,
          "composed": true,
          "docs": "当展开时状态改变",
          "docsTags": []
        }
      ],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/show/ds-collapse/item/ds-collapse-panel.tsx",
      "encapsulation": "shadow",
      "tag": "ds-collapse-panel",
      "docs": "",
      "docsTags": [
        {
          "text": "默认插槽 - 折叠面板展示的内容",
          "name": "slot"
        },
        {
          "text": "name - 标题的slot插槽",
          "name": "slot"
        }
      ],
      "usage": {},
      "props": [
        {
          "name": "dsIsActive",
          "type": "boolean",
          "mutable": true,
          "attr": "ds-is-active",
          "reflectToAttr": false,
          "docs": "是否展开",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsLast",
          "type": "boolean",
          "mutable": false,
          "attr": "ds-last",
          "reflectToAttr": false,
          "docs": "是否时最后一个",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "mutable": false,
          "attr": "name",
          "reflectToAttr": false,
          "docs": "标题",
          "docsTags": [],
          "default": "null",
          "values": [
            {
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [
        {
          "event": "dsIsActiveChange",
          "detail": "boolean",
          "bubbles": true,
          "cancelable": true,
          "composed": true,
          "docs": "当展开时状态改变",
          "docsTags": []
        }
      ],
      "listeners": [],
      "styles": [],
      "slots": [
        {
          "name": "name",
          "docs": "标题的slot插槽"
        },
        {
          "name": "默认插槽",
          "docs": "折叠面板展示的内容"
        }
      ],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/layout/ds-divider/ds-divider.tsx",
      "encapsulation": "shadow",
      "tag": "ds-divider",
      "readme": "<!--\n * @Date: 2021-01-25 09:21:12\n * @LastEditors: dongfb\n * @LastEditTime: 2021-01-25 10:42:50\n-->\n# ds-divider\n\n名称: 分割线\n\n## 设计思路\n\n### 已有思路\n\n1. 正常分割线\n\n## 开发备注\n\n\n",
      "docs": "<!--\n * @Date: 2021-01-25 09:21:12\n * @LastEditors: dongfb\n * @LastEditTime: 2021-01-25 10:42:50\n-->",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "demo",
          "type": "boolean",
          "mutable": false,
          "attr": "demo",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsDashed",
          "type": "boolean",
          "mutable": false,
          "attr": "ds-dashed",
          "reflectToAttr": false,
          "docs": "是否虚线",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsTextDirection",
          "type": "\"center\" | \"left\" | \"right\"",
          "mutable": false,
          "attr": "ds-text-direction",
          "reflectToAttr": false,
          "docs": "文本位置",
          "docsTags": [],
          "default": "'center'",
          "values": [
            {
              "value": "center",
              "type": "string"
            },
            {
              "value": "left",
              "type": "string"
            },
            {
              "value": "right",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsType",
          "type": "\"horizontal\" | \"vertical\"",
          "mutable": false,
          "attr": "ds-type",
          "reflectToAttr": false,
          "docs": "分割线的类型,水平还是垂直",
          "docsTags": [],
          "default": "'horizontal'",
          "values": [
            {
              "value": "horizontal",
              "type": "string"
            },
            {
              "value": "vertical",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/util/drop_drap/ds-drag/ds-drag.tsx",
      "encapsulation": "shadow",
      "tag": "ds-drag",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "data",
          "type": "any",
          "mutable": false,
          "attr": "data",
          "reflectToAttr": false,
          "docs": "携带的数据",
          "docsTags": [],
          "default": "null",
          "values": [
            {
              "type": "any"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "isDrag",
          "type": "boolean",
          "mutable": false,
          "attr": "is-drag",
          "reflectToAttr": false,
          "docs": "是否可以拖拽",
          "docsTags": [],
          "default": "true",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "isResize",
          "type": "boolean",
          "mutable": false,
          "attr": "is-resize",
          "reflectToAttr": false,
          "docs": "是否可以变更大小",
          "docsTags": [],
          "default": "true",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "operate",
          "type": "\"copy\" | \"move\"",
          "mutable": false,
          "attr": "operate",
          "reflectToAttr": false,
          "docs": "移动得操作，其实主要是传值，会有不同得样式，逻辑依靠这个判断",
          "docsTags": [],
          "default": "'copy'",
          "values": [
            {
              "value": "copy",
              "type": "string"
            },
            {
              "value": "move",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/util/drop_drap/ds-drop/ds-drop.tsx",
      "encapsulation": "shadow",
      "tag": "ds-drop",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/nav/ds-dropdown/ds-dropdown.tsx",
      "encapsulation": "none",
      "tag": "ds-dropdown",
      "readme": "<!--\n * @Date: 2021-03-26 10:47:14\n * @LastEditors: dongfb\n * @LastEditTime: 2021-03-26 16:22:59\n-->\n# ds-dropdown\n\n名称: 下拉菜单\n\n## 设计思路\n\n### 已有思路\n\n\n\n### 未来实现\n必须实现碰撞位移功能，不能在边缘位置出现遮盖\n\n\n## 开发备注\n[2021-03-26]\n1. 基本样式完成\n[2021-03-27]\n1. 完成右击显示\n2. 完成bl方向的显示\n3. \n\n\n",
      "docs": "<!--\n * @Date: 2021-03-26 10:47:14\n * @LastEditors: dongfb\n * @LastEditTime: 2021-03-26 16:22:59\n-->",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "direction",
          "type": "\"bc\" | \"bl\" | \"br\" | \"lb\" | \"lc\" | \"lt\" | \"rb\" | \"rc\" | \"rt\" | \"tc\" | \"tl\" | \"tr\"",
          "mutable": false,
          "attr": "direction",
          "reflectToAttr": false,
          "docs": "展示的位置显示，存在边缘修改",
          "docsTags": [],
          "default": "'bl'",
          "values": [
            {
              "value": "bc",
              "type": "string"
            },
            {
              "value": "bl",
              "type": "string"
            },
            {
              "value": "br",
              "type": "string"
            },
            {
              "value": "lb",
              "type": "string"
            },
            {
              "value": "lc",
              "type": "string"
            },
            {
              "value": "lt",
              "type": "string"
            },
            {
              "value": "rb",
              "type": "string"
            },
            {
              "value": "rc",
              "type": "string"
            },
            {
              "value": "rt",
              "type": "string"
            },
            {
              "value": "tc",
              "type": "string"
            },
            {
              "value": "tl",
              "type": "string"
            },
            {
              "value": "tr",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "isShow",
          "type": "boolean",
          "mutable": true,
          "attr": "is-show",
          "reflectToAttr": false,
          "docs": "是否展示，可以由外界控制",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "operate",
          "type": "\"click\" | \"contextmenu\" | \"focus\"",
          "mutable": false,
          "attr": "operate",
          "reflectToAttr": false,
          "docs": "什么操作可以触发展示",
          "docsTags": [],
          "default": "'click'",
          "values": [
            {
              "value": "click",
              "type": "string"
            },
            {
              "value": "contextmenu",
              "type": "string"
            },
            {
              "value": "focus",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [
        "ds-overlay"
      ],
      "dependencyGraph": {
        "ds-dropdown": [
          "ds-overlay"
        ]
      }
    },
    {
      "filePath": "./src/components/directives/ds-for/ds-for.tsx",
      "encapsulation": "shadow",
      "tag": "ds-for",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "dsValue",
          "type": "any[]",
          "mutable": false,
          "reflectToAttr": false,
          "docs": "是否显示",
          "docsTags": [],
          "default": "[]",
          "values": [
            {
              "type": "any[]"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/directives/ds-if/ds-if.tsx",
      "encapsulation": "shadow",
      "tag": "ds-if",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "dsValue",
          "type": "boolean",
          "mutable": false,
          "attr": "ds-value",
          "reflectToAttr": false,
          "docs": "是否显示",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/form/ds-input/ds-input.tsx",
      "encapsulation": "shadow",
      "tag": "ds-input",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/nav/ds-menu/ds-menu.tsx",
      "encapsulation": "shadow",
      "tag": "ds-menu",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/base/ds-overlay/ds-overlay.tsx",
      "encapsulation": "none",
      "tag": "ds-overlay",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "direction",
          "type": "\"bc\" | \"bl\" | \"br\" | \"lb\" | \"lc\" | \"lt\" | \"rb\" | \"rc\" | \"rt\" | \"tc\" | \"tl\" | \"tr\"",
          "mutable": false,
          "attr": "direction",
          "reflectToAttr": false,
          "docs": "overlay所在的位置",
          "docsTags": [],
          "default": "'bl'",
          "values": [
            {
              "value": "bc",
              "type": "string"
            },
            {
              "value": "bl",
              "type": "string"
            },
            {
              "value": "br",
              "type": "string"
            },
            {
              "value": "lb",
              "type": "string"
            },
            {
              "value": "lc",
              "type": "string"
            },
            {
              "value": "lt",
              "type": "string"
            },
            {
              "value": "rb",
              "type": "string"
            },
            {
              "value": "rc",
              "type": "string"
            },
            {
              "value": "rt",
              "type": "string"
            },
            {
              "value": "tc",
              "type": "string"
            },
            {
              "value": "tl",
              "type": "string"
            },
            {
              "value": "tr",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "elment",
          "type": "HTMLElement",
          "mutable": false,
          "reflectToAttr": false,
          "docs": "传入需要在下拉菜单的节点，供克隆到document上使用",
          "docsTags": [],
          "default": "null",
          "values": [
            {
              "type": "HTMLElement"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "isFirst",
          "type": "boolean",
          "mutable": false,
          "attr": "is-first",
          "reflectToAttr": false,
          "docs": "是否是第一次点击，不需要被引用者使用，内部使用",
          "docsTags": [],
          "default": "true",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "parentEvent",
          "type": "MouseEvent",
          "mutable": false,
          "reflectToAttr": false,
          "docs": "点击或者移入的事件Event",
          "docsTags": [],
          "default": "null",
          "values": [
            {
              "type": "MouseEvent"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [
        "ds-dropdown"
      ],
      "dependencies": [],
      "dependencyGraph": {
        "ds-dropdown": [
          "ds-overlay"
        ]
      }
    },
    {
      "filePath": "./src/components/show/ds-popover/ds-popover.tsx",
      "encapsulation": "shadow",
      "tag": "ds-popover",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/form/ds-radio/ds-radio.tsx",
      "encapsulation": "shadow",
      "tag": "ds-radio",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "checkStatus",
          "type": "boolean",
          "mutable": true,
          "attr": "check-status",
          "reflectToAttr": false,
          "docs": "当前的选择的样式",
          "docsTags": [],
          "default": "true",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [
        {
          "event": "checkStatusChange",
          "detail": "boolean",
          "bubbles": true,
          "cancelable": true,
          "composed": true,
          "docs": "",
          "docsTags": []
        }
      ],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    },
    {
      "filePath": "./src/components/layout/ds-space/ds-space.tsx",
      "encapsulation": "none",
      "tag": "ds-space",
      "readme": "<!--\n * @Date: 2021-01-25 09:21:12\n * @LastEditors: dongfb\n * @LastEditTime: 2021-01-25 10:42:50\n-->\n# ds-space\n\n名称: 间距\n\n## 设计思路\n\n### 已有思路\n\n1. 针对内部元素进行的排列，类似就是flex的布局\n\n## 开发备注\n\n\n",
      "docs": "<!--\n * @Date: 2021-01-25 09:21:12\n * @LastEditors: dongfb\n * @LastEditTime: 2021-01-25 10:42:50\n-->",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "demo",
          "type": "boolean",
          "mutable": false,
          "attr": "demo",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsDirection",
          "type": "\"horizontal\" | \"vertical\"",
          "mutable": false,
          "attr": "ds-direction",
          "reflectToAttr": false,
          "docs": "内部布局，垂直还是水平",
          "docsTags": [],
          "default": "'horizontal'",
          "values": [
            {
              "value": "horizontal",
              "type": "string"
            },
            {
              "value": "vertical",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsSize",
          "type": "number",
          "mutable": false,
          "attr": "ds-size",
          "reflectToAttr": false,
          "docs": "间距的大小，单位px",
          "docsTags": [],
          "default": "24",
          "values": [
            {
              "type": "number"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [
        "ds-space-item"
      ],
      "dependencyGraph": {
        "ds-space": [
          "ds-space-item"
        ]
      }
    },
    {
      "filePath": "./src/components/layout/ds-space/item/ds-space-item.tsx",
      "encapsulation": "none",
      "tag": "ds-space-item",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "dsDirection",
          "type": "\"horizontal\" | \"vertical\"",
          "mutable": false,
          "attr": "ds-direction",
          "reflectToAttr": false,
          "docs": "外部布局，垂直还是水平",
          "docsTags": [],
          "default": "'horizontal'",
          "values": [
            {
              "value": "horizontal",
              "type": "string"
            },
            {
              "value": "vertical",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsLast",
          "type": "boolean",
          "mutable": false,
          "attr": "ds-last",
          "reflectToAttr": false,
          "docs": "是否是最后一个子元素",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsSize",
          "type": "number",
          "mutable": false,
          "attr": "ds-size",
          "reflectToAttr": false,
          "docs": "间距的大小，单位px",
          "docsTags": [],
          "default": "0",
          "values": [
            {
              "type": "number"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [
        "ds-space"
      ],
      "dependencies": [],
      "dependencyGraph": {
        "ds-space": [
          "ds-space-item"
        ]
      }
    },
    {
      "filePath": "./src/components/nav/ds-tabs/ds-tab/ds-tab.tsx",
      "encapsulation": "shadow",
      "tag": "ds-tab",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [
        "ds-tabs"
      ],
      "dependencies": [],
      "dependencyGraph": {
        "ds-tabs": [
          "ds-tab"
        ]
      }
    },
    {
      "filePath": "./src/components/nav/ds-tabs/ds-tabs.tsx",
      "encapsulation": "shadow",
      "tag": "ds-tabs",
      "readme": "<!--\n * @Date: 2021-03-26 10:47:14\n * @LastEditors: dongfb\n * @LastEditTime: 2021-03-26 10:47:36\n-->\n# ds-tabs\n\n名称: tabs目录展示\n\n## 设计思路\n\n### 已有思路\n\n\n\n### 未来实现\n\n\n\n## 开发备注\n[2021-05-31]\n1. 基本思路完成\n\n\n",
      "docs": "<!--\n * @Date: 2021-03-26 10:47:14\n * @LastEditors: dongfb\n * @LastEditTime: 2021-03-26 10:47:36\n-->",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "demo",
          "type": "boolean",
          "mutable": false,
          "attr": "demo",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsDirection",
          "type": "\"horizontal\" | \"vertical\"",
          "mutable": false,
          "attr": "ds-direction",
          "reflectToAttr": false,
          "docs": "内部布局，垂直还是水平",
          "docsTags": [],
          "default": "'horizontal'",
          "values": [
            {
              "value": "horizontal",
              "type": "string"
            },
            {
              "value": "vertical",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsSize",
          "type": "number",
          "mutable": false,
          "attr": "ds-size",
          "reflectToAttr": false,
          "docs": "间距的大小，单位px",
          "docsTags": [],
          "default": "8",
          "values": [
            {
              "type": "number"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [
        "ds-tab"
      ],
      "dependencyGraph": {
        "ds-tabs": [
          "ds-tab"
        ]
      }
    },
    {
      "filePath": "./src/components/show/ds-tree/ds-tree.tsx",
      "encapsulation": "shadow",
      "tag": "ds-tree",
      "readme": "<!--\n * @Date: 2021-03-26 10:47:14\n * @LastEditors: dongfb\n * @LastEditTime: 2021-03-26 10:47:36\n-->\n# ds-tree\n\n名称: 树结构展示\n\n## 设计思路\n\n### 已有思路\n\n\n\n### 未来实现\n\n\n\n## 开发备注\n[2021-03-26]\n1. 基本样式完成\n\n\n",
      "docs": "<!--\n * @Date: 2021-03-26 10:47:14\n * @LastEditors: dongfb\n * @LastEditTime: 2021-03-26 10:47:36\n-->",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "data",
          "type": "DsTreeData[]",
          "mutable": false,
          "reflectToAttr": false,
          "docs": "数据源",
          "docsTags": [],
          "default": "null",
          "values": [
            {
              "type": "DsTreeData[]"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [
        {
          "event": "clickData",
          "detail": "DsTreeData",
          "bubbles": true,
          "cancelable": true,
          "composed": true,
          "docs": "数据源",
          "docsTags": []
        }
      ],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [
        "ds-tree"
      ],
      "dependencies": [
        "ds-tree"
      ],
      "dependencyGraph": {
        "ds-tree": [
          "ds-tree"
        ]
      }
    },
    {
      "filePath": "./src/components/base/ds-typography/ds-typography.tsx",
      "encapsulation": "none",
      "tag": "ds-typography",
      "readme": "<!--\n * @Date: 2021-01-25 09:21:12\n * @LastEditors: dongfb\n * @LastEditTime: 2021-01-25 10:42:50\n-->\n# ds-typography\n\n名称: 排版\n\n## 设计思路\n\n### 已有思路\n\n1. 普通文档展示的样式\n2. h1-h7级的样式及普通p，span标签的样式\n3. 设计危险，警告，默认，成功等样式\n\n## 开发备注\n\n\n",
      "docs": "<!--\n * @Date: 2021-01-25 09:21:12\n * @LastEditors: dongfb\n * @LastEditTime: 2021-01-25 10:42:50\n-->",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "demo",
          "type": "boolean",
          "mutable": false,
          "attr": "demo",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "false",
          "values": [
            {
              "type": "boolean"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsTag",
          "type": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"p\" | \"span\"",
          "mutable": false,
          "attr": "ds-tag",
          "reflectToAttr": false,
          "docs": "主元素显示的HTml",
          "docsTags": [],
          "default": "'p'",
          "values": [
            {
              "value": "h1",
              "type": "string"
            },
            {
              "value": "h2",
              "type": "string"
            },
            {
              "value": "h3",
              "type": "string"
            },
            {
              "value": "h4",
              "type": "string"
            },
            {
              "value": "h5",
              "type": "string"
            },
            {
              "value": "p",
              "type": "string"
            },
            {
              "value": "span",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        },
        {
          "name": "dsType",
          "type": "\"danger\" | \"default\" | \"disabled\" | \"secondary\" | \"success\" | \"warning\"",
          "mutable": false,
          "attr": "ds-type",
          "reflectToAttr": false,
          "docs": "文本类型",
          "docsTags": [],
          "default": "'success'",
          "values": [
            {
              "value": "danger",
              "type": "string"
            },
            {
              "value": "default",
              "type": "string"
            },
            {
              "value": "disabled",
              "type": "string"
            },
            {
              "value": "secondary",
              "type": "string"
            },
            {
              "value": "success",
              "type": "string"
            },
            {
              "value": "warning",
              "type": "string"
            }
          ],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "listeners": [],
      "styles": [],
      "slots": [],
      "parts": [],
      "dependents": [],
      "dependencies": [],
      "dependencyGraph": {}
    }
  ]
}