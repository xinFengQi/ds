(function(e){function t(t){for(var a,r,s=t[0],d=t[1],i=t[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var d=n[s];0!==o[d]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={home:0},c=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=d;c.push([3,"chunk-vendors"]),n()})({"0869":function(e,t,n){"use strict";n("b7af")},"0876":function(e,t,n){},"22cd":function(e,t,n){"use strict";var a=n("7a23"),o={class:"home_main"},c={class:"home_content"},r={key:0,class:"home_tool"};function s(e,t,n,s,d,i){var l=Object(a["resolveComponent"])("HomeMenu"),u=Object(a["resolveComponent"])("a-input"),f=Object(a["resolveComponent"])("HomeContent");return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])(l,{onGetShowMenu:t[1]||(t[1]=function(e){return i.getShowMenu(e)}),edit:n.edit},null,8,["edit"])]),Object(a["createVNode"])("div",c,[n.edit?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[Object(a["createVNode"])(u,{class:"input_search",value:d.value,"onUpdate:value":t[2]||(t[2]=function(e){return d.value=e}),placeholder:"搜索书签"},null,8,["value"])])),d.showContentData&&d.showContentData.length?(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:1,edit:n.edit,style:{overflow:"auto",flex:"1"},showContentData:d.showContentData},null,8,["edit","showContentData"])):Object(a["createCommentVNode"])("",!0)])])}function d(e,t,n,o,c,r){var s=Object(a["resolveComponent"])("a-menu-item"),d=Object(a["resolveComponent"])("a-menu");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])(d,{mode:"inline",selectedKeys:c.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=function(e){return c.selectedKeys=e}),"inline-collapsed":e.collapsed},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.machineMenu,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:e.dateAdded+"",onClick:function(t){return r.getClickMenu(e)}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.title),1)]})),_:2},1032,["onClick"])})),128))]})),_:1},8,["selectedKeys","inline-collapsed"])])}var i=n("279a"),l={name:"homeMenu",props:{edit:Boolean},data:function(){return{selectedKeys:[],machineMenu:[]}},mounted:function(){var e=this;i["a"].getBookMarks(this.edit).then((function(t){e.machineMenu=t,e.$emit("getShowMenu",e.machineMenu[0]),e.selectedKeys=[e.machineMenu[0].dateAdded+""]})).catch((function(e){console.log("获取书签出错:",e)}))},methods:{getClickMenu:function(e){this.$emit("getShowMenu",e)}}};l.render=d;var u=l,f={class:"show_contain"};function b(e,t,n,o,c,r){var s=Object(a["resolveComponent"])("HomeContent",!0),d=Object(a["resolveComponent"])("a-collapse-panel"),i=Object(a["resolveComponent"])("a-button"),l=Object(a["resolveComponent"])("a-collapse");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])(l,{activeKey:c.activeKeys,"onUpdate:activeKey":t[1]||(t[1]=function(e){return c.activeKeys=e})},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.getIsChildren,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:e.dateAdded+"",header:e.title},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{showContentData:e.children},null,8,["showContentData"])]})),_:2},1032,["header"])})),128)),Object(a["createVNode"])("div",f,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.getNoChildren,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:e.dateAdded+"",type:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("a",{href:e.url,target:"_blank"},Object(a["toDisplayString"])(e.title),9,["href"])]})),_:2},1024)})),128))])]})),_:1},8,["activeKey"])])}n("4de4"),n("d81d");var j={name:"homeContent",props:{showContentData:[],edit:Boolean},data:function(){return{activeKeys:[]}},computed:{getIsChildren:function(){return this.showContentData&&Array.isArray(this.showContentData)&&this.showContentData.filter((function(e){return e.children&&e.children.length}))},getNoChildren:function(){return this.showContentData&&Array.isArray(this.showContentData)&&this.showContentData.filter((function(e){return e.url&&(!e.children||0===e.children.length)}))}},watch:{showContentData:function(e){this.activeKeys=e.filter((function(e){return e.children&&e.children.length})).map((function(e){return e.dateAdded+""}))}},mounted:function(){this.activeKeys=this.showContentData.filter((function(e){return e.children&&e.children.length})).map((function(e){return e.dateAdded+""}))},methods:{}};n("0869");j.render=b;var h=j,p={name:"home",components:{HomeMenu:u,HomeContent:h},props:{edit:Boolean},data:function(){return{showContentData:[],value:""}},methods:{getShowMenu:function(e){console.log(e,"会展示的菜单"),this.showContentData=e.children}}};n("ca5a");p.render=s;t["a"]=p},"279a":function(e,t,n){"use strict";var a=n("2909"),o=n("5530"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("d81d"),n("4de4"),n("c740"),n("5f14")),r=n("bc3a"),s=n.n(r);function d(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(n,r){var d=c["a"].getBookmarks(),i=c["a"].getLocalVariable("__gitee_ds_flag"),l=c["a"].getLocalVariable("__gitee_access_token"),u=c["a"].getLocalVariable("__gitee_owner"),f=c["a"].getLocalVariable("__gitee_repo");Promise.all([d,i,l,u,f]).then((function(c){c[1]="dongfubao",c[2]="e9694199cc954120b37d5d449a56a752",c[3]="dongfubao",c[4]="ct";var d=[];if(c[1]&&c[2]&&c[3]&&c[4]){var i="https://gitee.com/api/v5/repos/".concat(c[3],"/").concat(c[4],"/contents/chrome_bookMark%2F").concat(c[1],".json?access_token=").concat(c[2]);s.a.get(i).then((function(s){if(s.data&&(Array.isArray(s.data)&&s.data.length>0||!Array.isArray(s.data))){var i=JSON.parse(decodeURIComponent(atob(s.data.content))).map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{title:e.title||e.dateAdded,dateAdded:e.dateAdded})}));c[0]&&!t?(i=i.filter((function(e){return e.dateAdded!==c[0].dateAdded&&e.children[0].dateAdded!==c[0].children[0].dateAdded})),d=[Object(o["a"])(Object(o["a"])({},c[0]),{},{title:"本地书签",dateAdded:c[0].dateAdded})].concat(Object(a["a"])(i))):d=Object(a["a"])(i),console.log("内容是",e.machineMenu),n(d)}else r({msg:"gitee的数据获取错误"})}))}else c[0]?(d=[Object(o["a"])(Object(o["a"])({},c[0]),{},{title:"本地书签",dateAdded:c[0].dateAdded})],n(d)):r({msg:"本地书签未获取到"})}))}))}function i(){return new Promise((function(e){var t=c["a"].getBookmarks(),n=c["a"].getLocalVariable("__gitee_ds_flag"),a=c["a"].getLocalVariable("__gitee_access_token"),o=c["a"].getLocalVariable("__gitee_owner"),r=c["a"].getLocalVariable("__gitee_repo");Promise.all([t,n,a,o,r]).then((function(t){t[1]="dongfubao",t[2]="e9694199cc954120b37d5d449a56a752",t[3]="dongfubao",t[4]="ct",t[1]&&t[2]&&t[3]&&t[4]||(console.log("存在配置为空"),e(!1)),s.a.get("https://gitee.com/api/v5/repos/".concat(t[3],"/").concat(t[4],"/contents/chrome_bookMark%2F").concat(t[1],".json?access_token")+"=".concat(t[2])).then((function(n){console.log("文件是否存在",n);var a=new FormData;a.append("access_token",t[2]);var o=t[0];if(o)if(n.data&&(Array.isArray(n.data)&&n.data.length>0||!Array.isArray(n.data))){var c=JSON.parse(decodeURIComponent(atob(n.data.content)));console.log("内容是",c);var r=c.findIndex((function(e){return e.dateAdded===o.dateAdded||e.children[0].dateAdded!==o.children[0].dateAdded}));r<0?c.push(o):c[r]=o,a.append("content",btoa(encodeURIComponent(JSON.stringify(c)))),a.append("message",t[1]+"更新书签"),a.append("sha",n.data.sha),s.a.put("https://gitee.com/api/v5/repos/".concat(t[3],"/").concat(t[4],"/contents/")+"chrome_bookMark%2F".concat(t[1],".json"),a).then((function(t){t?(console.log("远程更新本地书签",t),e(!0)):alert("更新失败")}))}else a.append("content",btoa(encodeURIComponent(JSON.stringify([o])))),a.append("message",t[1]+"新增书签"),s.a.post("https://gitee.com/api/v5/repos/".concat(t[3],"/").concat(t[4],"/")+"contents/chrome_bookMark%2F".concat(t[1],".json"),a).then((function(t){t?(console.log("远程新建本地书签",t),e(!0)):alert("新增失败")}));else alert("本地没有书签")}))}))}))}t["a"]={getBookMarks:d,uploadBookMarks:i}},3:function(e,t,n){e.exports=n("81a6")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=c,e.exports=o,o.id="4678"},"5f14":function(e,t,n){"use strict";var a=n("1da1"),o=n("ade3"),c=(n("96cf"),n("d3b7"),window.chrome);function r(e,t){return new Promise((function(n){c&&c.storage?c.storage.sync.set(Object(o["a"])({},e,t),(function(){n(!0)})):n(null)}))}function s(e){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){c&&c.storage?c.storage.sync.get(Object(o["a"])({},t,null),(function(n){e(n[t])})):e(null)})));case 1:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function i(){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){c&&c.bookmarks?c.bookmarks.getTree((function(t){e(t[0])})):e(null)})));case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}t["a"]={getBookmarks:i,getLocalVariable:s,setLocalVariable:r}},"81a6":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=n("22cd"),c=n("c4c6"),r=n.n(c),s=(n("95d1"),n("a086")),d=n.n(s),i=(n("387f"),n("91f7")),l=n.n(i),u=(n("734c"),n("57df")),f=n.n(u),b=(n("1325"),Object(a["createApp"])(o["a"]));b.use(r.a),b.use(d.a),b.use(l.a),b.use(f.a),b.mount("#app")},b7af:function(e,t,n){},ca5a:function(e,t,n){"use strict";n("0876")}});
//# sourceMappingURL=home.js.map