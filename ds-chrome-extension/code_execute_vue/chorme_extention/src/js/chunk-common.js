(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"22cd":function(e,t,n){"use strict";var a=n("7a23"),o={class:"home_tool"},c=Object(a["createTextVNode"])("保存此次数据更新，不会影响本地书签内容"),i={class:"home_main"},r={class:"home_content"},s={key:0,class:"home_tool"},l={key:1,class:"data_show_tool"},d={key:0,class:"home_task_list"};function u(e,t,n,u,b,f){var h=Object(a["resolveComponent"])("a-button"),p=Object(a["resolveComponent"])("HomeMenu"),m=Object(a["resolveComponent"])("a-input"),j=Object(a["resolveComponent"])("HomeContent"),g=Object(a["resolveComponent"])("HomeTaskList");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",o,[n.edit?(Object(a["openBlock"])(),Object(a["createBlock"])(h,{key:0,type:"primary",onClick:f.saveUpdate},{default:Object(a["withCtx"])((function(){return[c]})),_:1},8,["onClick"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])(p,{onGetShowMenu:t[1]||(t[1]=function(e){return f.getShowMenu(e)}),onGetShowPublicMenu:t[2]||(t[2]=function(e){return f.getShowPublicMenu(e)}),onGetAllMenu:t[3]||(t[3]=function(e){return f.getAllMenu(e)}),onDeleteItem:t[4]||(t[4]=function(e){return f.deleteItem(e)}),edit:n.edit},null,8,["edit"])]),Object(a["createVNode"])("div",r,[n.edit?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",s,[Object(a["createVNode"])(m,{class:"input_search",value:b.value,"onUpdate:value":t[5]||(t[5]=function(e){return b.value=e}),placeholder:"搜索书签"},null,8,["value"])])),n.edit&&!b.isShowPublic&&!b.value&&b.showContentData&&b.showContentData.length?(Object(a["openBlock"])(),Object(a["createBlock"])("div",l," 数据时间标识: "+Object(a["toDisplayString"])(f.getDate(b.showContentData[0].dateAdded)),1)):Object(a["createCommentVNode"])("",!0),b.value&&b.searchContentData&&b.searchContentData.length?(Object(a["openBlock"])(),Object(a["createBlock"])(j,{key:2,edit:n.edit,style:{overflow:"auto",flex:"1"},showContentData:b.searchContentData},null,8,["edit","showContentData"])):Object(a["createCommentVNode"])("",!0),!b.isShowPublic&&!b.value&&b.showContentData&&b.showContentData.length?(Object(a["openBlock"])(),Object(a["createBlock"])(j,{key:3,edit:n.edit,style:{overflow:"auto",flex:"1"},showContentData:b.showContentData,onDeleteItem:t[6]||(t[6]=function(e){return f.deleteItem(e)})},null,8,["edit","showContentData"])):Object(a["createCommentVNode"])("",!0),b.isShowPublic&&!b.value&&b.showPublicContentData&&b.showPublicContentData.length?(Object(a["openBlock"])(),Object(a["createBlock"])(j,{key:4,edit:!1,style:{overflow:"auto",flex:"1"},showContentData:b.showPublicContentData},null,8,["showContentData"])):Object(a["createCommentVNode"])("",!0)]),n.edit||!b.isHomeTaskList&&!b.isHomeTaskListPublic?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",d,[Object(a["createVNode"])(g)]))])],64)}n("4de4"),n("159b"),n("caad"),n("2532");var b={key:0,class:"opate"};function f(e,t,n,o,c,i){var r=Object(a["resolveComponent"])("DeleteOutlined"),s=Object(a["resolveComponent"])("a-menu-item"),l=Object(a["resolveComponent"])("a-menu");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])(l,{mode:"inline",selectedKeys:c.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=function(e){return c.selectedKeys=e}),"inline-collapsed":e.collapsed},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.machineMenu,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:e.dateAdded+"",onClick:function(t){return i.getClickMenu(e)}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.title),1),n.edit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",b,[Object(a["createVNode"])(r,{onClick:function(t){return i.deleteMenu(t,e)}},null,8,["onClick"])])):Object(a["createCommentVNode"])("",!0)]})),_:2},1032,["onClick"])})),128)),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pubilcMachineMenu,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:e.dateAdded+"",onClick:function(t){return i.getClickPublicMenu(e)}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.title),1)]})),_:2},1032,["onClick"])})),128))]})),_:1},8,["selectedKeys","inline-collapsed"])])}var h=n("279a"),p=n("b1c8"),m={name:"homeMenu",props:{edit:Boolean},components:{DeleteOutlined:p["a"]},data:function(){return{selectedKeys:[],machineMenu:[],pubilcMachineMenu:[]}},mounted:function(){var e=this;h["a"].getBookMarks(this.edit).then((function(t){e.machineMenu=t,console.log("个人的",e.machineMenu),e.$emit("getShowMenu",e.machineMenu[0]),e.$emit("getAllMenu",e.machineMenu),e.selectedKeys=[e.machineMenu[0].dateAdded+""]})).catch((function(e){console.log("获取书签出错:",e)})),h["a"].getPublicBookMarks().then((function(t){e.edit||(e.pubilcMachineMenu=t,console.log("公共的",e.pubilcMachineMenu))})).catch((function(e){console.log("获取公共书签出错:",e)}))},methods:{getClickMenu:function(e){this.$emit("getShowMenu",e)},getClickPublicMenu:function(e){this.$emit("getShowPublicMenu",e)},deleteMenu:function(e,t){e.stopPropagation(),e.preventDefault(),console.log("删除导航",t),this.machineMenu=this.machineMenu.filter((function(e){return e.dateAdded!==t.dateAdded})),this.machineMenu.length&&this.selectedKeys.includes(t.dateAdded+"")?(this.selectedKeys=[this.machineMenu[0].dateAdded+""],this.getClickMenu(this.machineMenu[0])):this.getClickMenu(null),this.$emit("deleteItem",t)}}};n("476b");m.render=f;var j=m,g={key:0,class:"opate"},_={class:"show_contain"},k={key:0,class:"opate"};function O(e,t,n,o,c,i){var r=Object(a["resolveComponent"])("DeleteOutlined"),s=Object(a["resolveComponent"])("HomeContent",!0),l=Object(a["resolveComponent"])("a-collapse-panel"),d=Object(a["resolveComponent"])("a-button"),u=Object(a["resolveComponent"])("a-collapse");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])(u,{activeKey:c.activeKeys,"onUpdate:activeKey":t[1]||(t[1]=function(e){return c.activeKeys=e})},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(i.getIsChildren,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:e.dateAdded+""},{header:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.title)+" ",1),n.edit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",g,[Object(a["createVNode"])(r,{onClick:function(t){return i.deleteMenu(t,e)}},null,8,["onClick"])])):Object(a["createCommentVNode"])("",!0)]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{showContentData:e.children,onDeleteItem:function(t){return i.deleteItem(t,e)},edit:n.edit},null,8,["showContentData","onDeleteItem","edit"])]})),_:2},1024)})),128)),Object(a["createVNode"])("div",_,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(i.getNoChildren,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:e.dateAdded+"",type:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("a",{href:e.url,target:"_blank"},Object(a["toDisplayString"])(e.title),9,["href"]),n.edit?(Object(a["openBlock"])(),Object(a["createBlock"])("span",k,[Object(a["createVNode"])(r,{onClick:function(t){return i.deleteMenu(t,e)}},null,8,["onClick"])])):Object(a["createCommentVNode"])("",!0)]})),_:2},1024)})),128))])]})),_:1},8,["activeKey"])])}n("d81d");var v={name:"homeContent",components:{DeleteOutlined:p["a"]},props:{showContentData:[],edit:Boolean},data:function(){return{activeKeys:[]}},computed:{getIsChildren:function(){return this.showContentData&&Array.isArray(this.showContentData)&&this.showContentData.filter((function(e){return e.children&&e.children.length}))},getNoChildren:function(){return this.showContentData&&Array.isArray(this.showContentData)&&this.showContentData.filter((function(e){return e.url&&(!e.children||0===e.children.length)}))}},watch:{showContentData:function(e){this.activeKeys=e.filter((function(e){return e.children&&e.children.length})).map((function(e){return e.dateAdded+""}))}},mounted:function(){this.activeKeys=this.showContentData.filter((function(e){return e.children&&e.children.length})).map((function(e){return e.dateAdded+""}))},methods:{deleteMenu:function(e,t){e.stopPropagation(),e.preventDefault(),t.isDelete=!0,this.$emit("deleteItem",t)},deleteItem:function(e,t){t.children=t.children.filter((function(t){return t.dateAdded!==e.dateAdded&&t.title!==e.title})),this.$emit("deleteItem",e)}}};n("80a3");v.render=O;var C=v,w=Object(a["withScopeId"])("data-v-6a1a0a2e");Object(a["pushScopeId"])("data-v-6a1a0a2e");var y={class:"home_tasklist"},V={class:"task_tool"},L=Object(a["createTextVNode"])("新增任务"),D={class:"form_col"},M=Object(a["createVNode"])("label",{class:"form_col_label"},"名称:",-1),N={class:"form_col"},A=Object(a["createVNode"])("label",{class:"form_col_label"},"时间:",-1),S={class:"form_col"},B=Object(a["createVNode"])("label",{class:"form_col_label"},"内容:",-1),x={class:"tag_list"},P=Object(a["createTextVNode"])("已超时"),I=Object(a["createTextVNode"])("进行中"),T=Object(a["createTextVNode"])("未进行");Object(a["popScopeId"])();var F=w((function(e,t,n,o,c,i){var r=Object(a["resolveComponent"])("a-button"),s=Object(a["resolveComponent"])("a-input"),l=Object(a["resolveComponent"])("a-date-picker"),d=Object(a["resolveComponent"])("a-textarea"),u=Object(a["resolveComponent"])("a-modal"),b=Object(a["resolveComponent"])("a-tag"),f=Object(a["resolveComponent"])("a-card");return Object(a["openBlock"])(),Object(a["createBlock"])("div",y,[Object(a["createVNode"])("div",V,[Object(a["createVNode"])(r,{type:"primary",onClick:i.addTaskList},{default:w((function(){return[L]})),_:1},8,["onClick"])]),Object(a["createVNode"])(u,{visible:c.addVisible,"onUpdate:visible":t[4]||(t[4]=function(e){return c.addVisible=e}),title:"新增任务",okText:"保存",cancelText:"取消",onOk:i.addTaskData,centered:!0,maskClosable:!1,confirmLoading:c.confirmLoading},{default:w((function(){return[Object(a["createVNode"])("div",D,[M,Object(a["createVNode"])(s,{class:"form_col_input",value:c.title,"onUpdate:value":t[1]||(t[1]=function(e){return c.title=e})},null,8,["value"])]),Object(a["createVNode"])("div",N,[A,Object(a["createVNode"])(l,{class:"form_col_input",locale:c.locale,"show-time":"",placeholder:"选择时间",value:c.time,"onUpdate:value":t[2]||(t[2]=function(e){return c.time=e})},null,8,["locale","value"])]),Object(a["createVNode"])("div",S,[B,Object(a["createVNode"])(d,{class:"form_col_input",autoSize:{minRows:8,maxRows:15},value:c.content,"onUpdate:value":t[3]||(t[3]=function(e){return c.content=e})},null,8,["value"])])]})),_:1},8,["visible","onOk","confirmLoading"]),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.taskList,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(f,{class:"card",title:e.title,key:e.title+t,bodyStyle:c.cardBodyStyle},{extra:w((function(){return[Object(a["createVNode"])("a",{onClick:function(t){return i.deleteTask(e)}},"删除",8,["onClick"])]})),default:w((function(){return[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(i.getData(e.time)),1),Object(a["createVNode"])("pre",null,Object(a["toDisplayString"])(e.content),1),Object(a["createVNode"])("div",x,[0===e.status?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:0,color:"error"},{default:w((function(){return[P]})),_:1})):Object(a["createCommentVNode"])("",!0),1===e.status?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:1,color:"success"},{default:w((function(){return[I]})),_:1})):Object(a["createCommentVNode"])("",!0),2===e.status?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:2,color:"default"},{default:w((function(){return[T]})),_:1})):Object(a["createCommentVNode"])("",!0)])]})),_:2},1032,["title","bodyStyle"])})),128))])})),z=n("2909"),U=(n("99af"),n("4e82"),n("f64c")),J=n("40a7"),R=n("c1df"),H=n.n(R),K={name:"HomeTaskList",props:{msg:String},data:function(){return{locale:J["a"],cardBodyStyle:{padding:"5px 10px"},taskList:[],addVisible:!1,title:"",content:"",time:null,confirmLoading:!1}},mounted:function(){var e=this;h["a"].getTasklist().then((function(t){var n=[];t.privateCode&&(n=[].concat(Object(z["a"])(n),Object(z["a"])(t.privateCode))),e.dataSort(n),console.log(t,"获取的任务列表")}))},methods:{getData:function(e){return H()(e).format("YYYY/MM/DD HH:mm:ss")},dataSort:function(e){var t=(new Date).getTime(),n=108e5,a=[],o=[],c=[];e.forEach((function(e){e.time-t<0?(e.status=0,a.push(e)):e.time-t<=n?(e.status=1,c.push(e)):(e.status=2,o.push(e))})),a=a.sort((function(e,t){return e.time-t.time})),c=c.sort((function(e,t){return e.time-t.time})),this.taskList=[].concat(Object(z["a"])(a),Object(z["a"])(c),o)},addTaskList:function(){this.addVisible=!0},addTaskData:function(){var e=this;if(console.log(this.title,this.time._d,this.content),this.title&&this.time&&this.time._d){var t={title:this.title,time:new Date(this.time._d).getTime(),content:this.content};this.taskList.push(t),this.dataSort(this.taskList),this.confirmLoading=!0,h["a"].uploadTaskList(this.taskList).then((function(t){t?(U["a"].success("更新成功"),e.addVisible=!1,e.title="",e.content=""):U["a"].error("更新失败"),e.confirmLoading=!1}))}else U["a"].error("请填写完整")},deleteTask:function(e){var t=e.title+e.time;this.taskList=this.taskList.filter((function(e){return e.title+e.time!==t})),h["a"].uploadTaskList(this.taskList).then((function(e){e?U["a"].success("更新成功"):U["a"].error("更新失败")}))}}};n("fa9f");K.render=F,K.__scopeId="data-v-6a1a0a2e";var E=K,$=n("5f14");function Y(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours(),":").concat(e.getMinutes())}var W={name:"home",components:{HomeMenu:j,HomeContent:C,HomeTaskList:E},props:{edit:Boolean},data:function(){return{isShowPublic:!1,searchContentData:[],showPublicContentData:[],showPublicContentDataStr:[],showContentData:[],showContentDataStr:"[]",allData:[],value:"",deleteMarkData:[],isHomeTaskList:!1,isHomeTaskListPublic:!1}},watch:{value:function(e){this.searchContentData=this.loopSearchMarks(this.isShowPublic?JSON.parse(this.showPublicContentDataStr):JSON.parse(this.showContentDataStr),e.toLowerCase())}},mounted:function(){var e=this;$["a"].getLocalVariable("__gitee_tasklist_private_open").then((function(t){e.isHomeTaskList=t})),$["a"].getLocalVariable("__gitee_tasklist_public_open").then((function(t){e.isHomeTaskListPublic=t}))},methods:{getDate:function(e){return Y(new Date(e))},loopSearchMarks:function(e,t){var n=this;if(!e)return[];var a=e.filter((function(e){return!e.url||e.title.toLowerCase().indexOf(t)>-1||t.indexOf(e.title.toLowerCase())>-1}));return a&&a.length&&a.forEach((function(e){e.children=n.loopSearchMarks(e.children,t)})),a},loopDeleteMarks:function(e,t){var n=this;if(!e)return[];var a=e.filter((function(e){return t.includes((function(t){return e.dateAdded!==t.dateAdded&&e.title!==t.title}))}));return a&&a.length&&a.forEach((function(e){e.children=n.loopDeleteMarks(e.children,t)})),a},saveUpdate:function(){var e=this.loopDeleteMarks(this.allData,this.deleteMarkData);console.log(this.allData,this.deleteMarkData,e,"保存所有更新========================"),h["a"].uploadBookMarks(e).then((function(e){e&&alert("更新成功")}))},getAllMenu:function(e){this.allData=e},getShowMenu:function(e){this.isShowPublic=!1,console.log(e,"会展示的菜单"),this.showContentData=e?e.children:[],this.showContentDataStr=JSON.stringify(this.showContentData)},getShowPublicMenu:function(e){this.isShowPublic=!0,console.log(e,"会展示的公共菜单"),this.showPublicContentData=e?e.children:[],this.showPublicContentDataStr=JSON.stringify(this.showPublicContentData)},deleteItem:function(e){this.deleteMarkData.push(e),this.showContentData=this.showContentData.filter((function(t){return t.dateAdded!==e}))}}};n("8cda");W.render=u;t["a"]=W},"279a":function(e,t,n){"use strict";var a=n("2909"),o=n("5530"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("d81d"),n("4de4"),n("c740"),n("5f14")),i=n("bc3a"),r=n.n(i);function s(){return new Promise((function(e,t){var n=c["a"].getLocalVariable("__gitee_ds_public_flag"),a=c["a"].getLocalVariable("__gitee_public_access_token"),o=c["a"].getLocalVariable("__gitee_public_owner"),i=c["a"].getLocalVariable("__gitee_public_repo"),r=c["a"].getLocalVariable("__giteeMarks_public_open");r.then((function(c){c?d([null,n,a,o,i],e,t,!0):e([])}))}))}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(t,n){var a=c["a"].getBookmarks(),o=c["a"].getLocalVariable("__gitee_ds_flag"),i=c["a"].getLocalVariable("__gitee_access_token"),r=c["a"].getLocalVariable("__gitee_owner"),s=c["a"].getLocalVariable("__gitee_repo"),l=c["a"].getLocalVariable("__giteeMarks_private_open");l.then((function(c){d(c?[a,o,i,r,s]:[a],t,n,e)}))}))}function d(e,t,n,c){Promise.all(e).then((function(e){var i=[];if(e[1]&&e[2]&&e[3]&&e[4]){var s="https://gitee.com/api/v5/repos/".concat(e[3],"/").concat(e[4],"/contents/chrome_bookMark%2F").concat(e[1],".json?access_token=").concat(e[2]);r.a.get(s).then((function(n){if(n.data&&(Array.isArray(n.data)&&n.data.length>0||!Array.isArray(n.data))){var r=JSON.parse(decodeURIComponent(atob(n.data.content))).map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{title:e.title||e.dateAdded,dateAdded:e.dateAdded})}));e[0]&&!c?(r=r.filter((function(t){return t.dateAdded!==e[0].dateAdded&&t.children[0].dateAdded!==e[0].children[0].dateAdded})),i=[Object(o["a"])(Object(o["a"])({},e[0]),{},{title:"本地书签",dateAdded:e[0].dateAdded})].concat(Object(a["a"])(r))):i=Object(a["a"])(r),console.log("内容是",i),t(i)}else t([])})).catch((function(e){n({msg:"gitee的数据获取错误",err:e})}))}else e[0]?(i=[Object(o["a"])(Object(o["a"])({},e[0]),{},{title:"本地书签",dateAdded:e[0].dateAdded})],t(i)):n({msg:"本地书签未获取到"})}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t){var n=c["a"].getBookmarks(),a=c["a"].getLocalVariable("__gitee_ds_flag"),o=c["a"].getLocalVariable("__gitee_access_token"),i=c["a"].getLocalVariable("__gitee_owner"),s=c["a"].getLocalVariable("__gitee_repo");Promise.all([n,a,o,i,s]).then((function(n){if(!n[1]||!n[2]||!n[3]||!n[4])return console.log("存在配置为空"),void t(!1);r.a.get("https://gitee.com/api/v5/repos/".concat(n[3],"/").concat(n[4],"/contents/chrome_bookMark%2F").concat(n[1],".json?access_token")+"=".concat(n[2])).then((function(a){console.log("文件是否存在",a);var o=new FormData;o.append("access_token",n[2]);var c=n[0];if(c||e)if(a.data&&(Array.isArray(a.data)&&a.data.length>0||!Array.isArray(a.data))){if(e)o.append("content",btoa(encodeURIComponent(JSON.stringify(e))));else{var i=JSON.parse(decodeURIComponent(atob(a.data.content)));Array.isArray(i)||(i=[i]);var s=i.findIndex((function(e){return e.dateAdded===c.dateAdded||e.children[0].dateAdded===c.children[0].dateAdded}));s<0?i.push(c):i[s]=c,console.log("内容是",i),o.append("content",btoa(encodeURIComponent(JSON.stringify(i))))}o.append("message",n[1]+"更新书签"),o.append("sha",a.data.sha),r.a.put("https://gitee.com/api/v5/repos/".concat(n[3],"/").concat(n[4],"/contents/")+"chrome_bookMark%2F".concat(n[1],".json"),o).then((function(e){e?(console.log("远程更新本地书签",e),t(!0)):alert("更新失败")}))}else o.append("content",btoa(encodeURIComponent(JSON.stringify([c])))),o.append("message",n[1]+"新增书签"),r.a.post("https://gitee.com/api/v5/repos/".concat(n[3],"/").concat(n[4],"/")+"contents/chrome_bookMark%2F".concat(n[1],".json"),o).then((function(e){e?(console.log("远程新建本地书签",e),t(!0)):alert("新增失败")}));else alert("本地没有书签")}))}))}))}function b(){var e=c["a"].getLocalVariable("__gitee_code_ds_flag"),t=c["a"].getLocalVariable("__gitee_code_ds_pubilc_flag"),n=c["a"].getLocalVariable("__giteeCodes_private_open"),a=c["a"].getLocalVariable("__giteeCodes_public_open"),o=c["a"].getLocalVariable("__gitee_code_access_token"),i=c["a"].getLocalVariable("__gitee_code_owner"),s=c["a"].getLocalVariable("__gitee_code_repo"),l=c["a"].getLocalVariable("__gitee_code_public_access_token"),d=c["a"].getLocalVariable("__gitee_code_public_owner"),u=c["a"].getLocalVariable("__gitee_code_public_repo");return new Promise((function(c){Promise.all([e,t,o,i,s,l,d,u,n,a]).then((function(e){if(e[8]&&e[0]&&(!e[2]||!e[3]||!e[4]))return console.log("存在配置为空"),void c(!1);if(e[9]&&e[1]&&(!e[5]||!e[6]||!e[7]))return console.log("存在配置为空"),void c(!1);var t=null;e[8]&&e[0]&&(t=r.a.get("https://gitee.com/api/v5/repos/".concat(e[3],"/").concat(e[4],"/contents/chrome_codeScript%2F").concat(e[0],".json?access_token=").concat(e[2])));var n=null;e[9]&&e[1]&&(n=r.a.get("https://gitee.com/api/v5/repos/".concat(e[6],"/").concat(e[7],"/contents/chrome_codeScript%2F").concat(e[1],".json?access_token=").concat(e[5]))),Promise.all([t,n]).then((function(e){e||c({});var t=e[0].data,n=e[1]&&e[1].data,a={};t&&(Array.isArray(t)&&t.length>0||!Array.isArray(t))&&(console.log("存在私人脚本"),a.privateCode=JSON.parse(decodeURIComponent(atob(t.content)))),n&&(Array.isArray(n)&&n.length>0||!Array.isArray(n))&&(console.log("存在公共脚本脚本"),a.publicCode=JSON.parse(decodeURIComponent(atob(n.content)))),c(a)}))}))}))}function f(e){var t=c["a"].getLocalVariable("__gitee_code_ds_flag"),n=c["a"].getLocalVariable("__gitee_code_access_token"),a=c["a"].getLocalVariable("__gitee_code_owner"),o=c["a"].getLocalVariable("__gitee_code_repo");return console.log(e),new Promise((function(c){Promise.all([t,n,a,o]).then((function(t){if(!t[0]||!t[1]||!t[2]||!t[3])return console.log("存在配置为空"),void c(!1);r.a.get("https://gitee.com/api/v5/repos/".concat(t[2],"/").concat(t[3],"/contents/chrome_codeScript%2F").concat(t[0],".json?access_token")+"=".concat(t[1])).then((function(n){console.log("文件是否存在",n);var a=new FormData;a.append("access_token",t[1]),n.data&&(Array.isArray(n.data)&&n.data.length>0||!Array.isArray(n.data))?(a.append("content",btoa(encodeURIComponent(JSON.stringify(e)))),a.append("message",t[1]+"更新执行代码"),a.append("sha",n.data.sha),r.a.put("https://gitee.com/api/v5/repos/".concat(t[2],"/").concat(t[3],"/contents/")+"chrome_codeScript%2F".concat(t[0],".json"),a).then((function(e){e?(console.log("远程更新脚本库",e),c(!0)):alert("更新失败")}))):(a.append("content",btoa(encodeURIComponent(JSON.stringify(e)))),a.append("message",t[1]+"新增执行代码"),r.a.post("https://gitee.com/api/v5/repos/".concat(t[2],"/").concat(t[3],"/")+"contents/chrome_codeScript%2F".concat(t[0],".json"),a).then((function(e){e?(console.log("远程新建脚本",e),c(!0)):alert("新增失败")})))}))}))}))}function h(){var e=c["a"].getLocalVariable("__gitee_tasklist_ds_flag"),t=c["a"].getLocalVariable("__gitee_tasklist_ds_pubilc_flag"),n=c["a"].getLocalVariable("__gitee_tasklist_private_open"),a=c["a"].getLocalVariable("__gitee_tasklist_public_open"),o=c["a"].getLocalVariable("__gitee_tasklist_access_token"),i=c["a"].getLocalVariable("__gitee_tasklist_owner"),s=c["a"].getLocalVariable("__gitee_tasklist_repo"),l=c["a"].getLocalVariable("__gitee_tasklist_public_access_token"),d=c["a"].getLocalVariable("__gitee_tasklist_public_owner"),u=c["a"].getLocalVariable("__gitee_tasklist_public_repo");return new Promise((function(c){Promise.all([e,t,o,i,s,l,d,u,n,a]).then((function(e){if(e[8]&&e[0]&&(!e[2]||!e[3]||!e[4]))return console.log("存在配置为空"),void c(!1);if(e[9]&&e[1]&&(!e[5]||!e[6]||!e[7]))return console.log("存在配置为空"),void c(!1);var t=null;e[8]&&e[0]&&(t=r.a.get("https://gitee.com/api/v5/repos/".concat(e[3],"/").concat(e[4],"/contents/chrome_taskList%2F").concat(e[0],".json?access_token=").concat(e[2])));var n=null;e[9]&&e[1]&&(n=r.a.get("https://gitee.com/api/v5/repos/".concat(e[6],"/").concat(e[7],"/contents/chrome_taskList%2F").concat(e[1],".json?access_token=").concat(e[5]))),Promise.all([t,n]).then((function(e){var t=e[0].data,n=e[1]&&e[1].data,a={};t&&(Array.isArray(t)&&t.length>0||!Array.isArray(t))&&(console.log("存在私人任务"),a.privateCode=JSON.parse(decodeURIComponent(atob(t.content)))),n&&(Array.isArray(n)&&n.length>0||!Array.isArray(n))&&(console.log("存在公共任务"),a.publicCode=JSON.parse(decodeURIComponent(atob(n.content)))),c(a)}))}))}))}function p(e){var t=c["a"].getLocalVariable("__gitee_tasklist_ds_flag"),n=c["a"].getLocalVariable("__gitee_tasklist_access_token"),a=c["a"].getLocalVariable("__gitee_tasklist_owner"),o=c["a"].getLocalVariable("__gitee_tasklist_repo");console.log(e);var i=e.map((function(e){return{title:e.title,time:e.time,content:e.content}}));return new Promise((function(e){Promise.all([t,n,a,o]).then((function(t){if(!t[0]||!t[1]||!t[2]||!t[3])return console.log("存在配置为空"),void e(!1);r.a.get("https://gitee.com/api/v5/repos/".concat(t[2],"/").concat(t[3],"/contents/chrome_taskList%2F").concat(t[0],".json?access_token")+"=".concat(t[1])).then((function(n){console.log("文件是否存在",n);var a=new FormData;a.append("access_token",t[1]),n.data&&(Array.isArray(n.data)&&n.data.length>0||!Array.isArray(n.data))?(a.append("content",btoa(encodeURIComponent(JSON.stringify(i)))),a.append("message",t[1]+"更新执行任务"),a.append("sha",n.data.sha),r.a.put("https://gitee.com/api/v5/repos/".concat(t[2],"/").concat(t[3],"/contents/")+"chrome_taskList%2F".concat(t[0],".json"),a).then((function(t){t?(console.log("远程更新任务列表",t),e(!0)):alert("更新失败")}))):(a.append("content",btoa(encodeURIComponent(JSON.stringify(i)))),a.append("message",t[1]+"新增任务列表"),r.a.post("https://gitee.com/api/v5/repos/".concat(t[2],"/").concat(t[3],"/")+"contents/chrome_taskList%2F".concat(t[0],".json"),a).then((function(t){t?(console.log("远程新建任务列表",t),e(!0)):alert("新增失败")})))}))}))}))}t["a"]={getPublicBookMarks:s,getBookMarks:l,uploadBookMarks:u,getCode:b,uploadCode:f,getTasklist:h,uploadTaskList:p}},"44d2f":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=c,e.exports=o,o.id="4678"},"476b":function(e,t,n){"use strict";n("deb6")},"5f14":function(e,t,n){"use strict";var a=n("1da1"),o=n("ade3"),c=n("53ca"),i=(n("96cf"),n("a9e3"),n("2ca0"),n("8a79"),n("d3b7"),n("caad"),n("159b"),n("4de4"),n("b0c0"),window.chrome),r="web",s=navigator.userAgent;s.indexOf("Chrome")>=0&&s.indexOf("Safari")>=0?(r="chrome-extension",i=window.chrome):s.indexOf("Firefox")>=0&&(r="firefox-extension",i=window.browser);var l=["chrome-extension","firefox-extension"],d=0,u=[];function b(e){return"number"===typeof e?e+"":"object"===Object(c["a"])(e)?JSON.stringify(e):(e||(e=""),e)}function f(e){return isNaN(Number(e))?e.startsWith("[")&&e.endsWith("]")?JSON.parse(e):e:Number(e)}function h(e,t){var n=this;return new Promise((function(a){var c=t;if(l.includes(r)){if(!i||!i.storage)return void a(null);i.storage.local.set(Object(o["a"])({},e,c),(function(){a(!0)}))}else"web"===r&&(c=b(t),localStorage.setItem(e,c),a(!0));a(null),u.filter((function(t){return t.key===e})).forEach((function(e){e.fn.apply(n,[t])}))}))}function p(e){return new Promise((function(t){if(l.includes(r)){if(!i||!i.storage)return void t(null);i.storage.local.get(Object(o["a"])({},e,null),(function(n){t(n[e])}))}else if("web"===r){var n=localStorage.getItem(e);t(n?f(n):null)}else t(null)}))}function m(e,t){return j.apply(this,arguments)}function j(){return j=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=d+1,e.next=3,p(t);case 3:return o=e.sent,n(o),u.push({id:a,key:t,fn:n}),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function g(e){this.subs=this.subs.filter((function(t){return t.id!==e}))}function _(){return k.apply(this,arguments)}function k(){return k=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){i&&i.bookmarks?i.bookmarks.getTree((function(t){e(t[0])})):e(null)})));case 1:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function O(e,t){if(!i||!i.extension||!i.contextMenus||!i.tabs)return null;var n=i.extension.getURL(t);i.contextMenus.create({title:e,onclick:function(){i.tabs.create({url:n})}})}function v(e){if(!i||!i.contextMenus)return null;window.chrome.contextMenus.create({type:"separator",title:e||(new Date).getTime()+"",onclick:function(){}})}function C(e,t){if(!i||!i.contextMenus||!i.tabs)return null;var n=i.contextMenus.create({title:e,onclick:function(){i.tabs.query({active:!0,currentWindow:!0},(function(e){if(!e.length)return null;if(e[0].url.startsWith("chrome://"))return alert("不允许在标签页执行代码"),null;var n=e[0].id;i.tabs.executeScript(n,{code:t})}))}});return n}function w(e){if(!i||!i.contextMenus)return null;i.contextMenus.remove(e)}function y(e,t,n){if(!i||!i.runtime)return null;"chrome-extension"===r?i.runtime.sendMessage({name:e,data:t},(function(e){n(e)})):"firefox-extension"===r&&i.runtime.sendMessage({name:e,data:t}).then((function(e){n(e)}))}function V(e,t,n){if(!i||!i.runtime)return null;i.runtime.onMessage.addListener((function(a,o,c){a.name===e&&n(a.data),c(t)}))}t["a"]={getBookmarks:_,getLocalVariable:p,getLocalVariableSub:m,deleteLocalVariableSub:g,setLocalVariable:h,addLinkMenu:O,addSeparatorMenu:v,addExtrueCodeMenu:C,deleteMenu:w,sendMessage:y,onMessage:V}},"6add":function(e,t,n){},7258:function(e,t,n){},"80a3":function(e,t,n){"use strict";n("6add")},"8cda":function(e,t,n){"use strict";n("44d2f")},deb6:function(e,t,n){},fa9f:function(e,t,n){"use strict";n("7258")}}]);
//# sourceMappingURL=chunk-common.js.map