(function(e){function t(t){for(var o,c,r=t[0],i=t[1],p=t[2],u=0,l=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(l.length)l.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},s=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("f23d"),s=n("5530"),c=(n("159b"),n("b64b"),n("d81d"),n("b0c0"),n("2909")),r=(n("fb6a"),n("4de4"),n("ac1f"),n("1276"),n("a15b"),n("c740"),n("a434"),{}),i={},p=0;function d(e,t){var n={key:e+"__"+p++,handler:t};return r[e]?r[e].push(n):r[e]=[n],n.key}function u(e,t){return i[e]&&t.apply(t,Object(c["a"])(i[e])),d(e,t)}function l(e,t){i[e]&&t.apply(t,Object(c["a"])(i[e]))}function f(){var e=[].slice.call(arguments,0),t=e[0],n=e.slice(1);i[t]=Object(c["a"])(n),r[t]&&(r[t].forEach((function(e){e.handler.apply(e.handler,Object(c["a"])(n))})),r[t]=r[t].filter((function(e){return!e.once})))}function b(e){if(e){var t=e.split("__");t.pop();var n=t.join("__"),o=r[n].findIndex((function(t){return t.key=e}));r[n].splice(o,1)}}var h={name:"vue2_webcomponent_adapter",data:function(){return{componentMap:{}}},mounted:function(){var e=this;l("keys",(function(t){t&&Array.isArray(t)&&t.forEach((function(t){e.initComponentToKey(t)}))})),d("key",(function(t){t&&e.initComponentToKey(t)}))},updated:function(){var e=this;Object.keys(this.componentMap).forEach((function(t){if(e.$refs[t]&&e.componentMap[t]&&!e.componentMap[t].isEl&&(e.componentMap[t].el=e.$refs[t],e.componentMap[t].isEl=!0,e.$refs[t]&&e.$refs[t].$el)){for(var n=e.componentMap[t].slot.default||[],o=0;o<n.length;o++){var a=n[o];1===e.$refs[t].$el.nodeType&&e.$refs[t].$el.appendChild(a)}var s=[];e.getEl(e.$refs[t].$el,s),f("vueComponentCreate_".concat(t),s),f("vueComponentDataChange_".concat(t),e.componentMap[t])}}))},methods:{initComponentToKey:function(e){var t=this;this.componentMap[e]={isEl:!1,el:this.$refs[e]},this.componentMap[e].OnComponentDestory=u("componentDestory_".concat(e),(function(e){t.componentMap[e]&&(delete t.componentMap[e],t.componentMap=Object(s["a"])({},t.componentMap))})),this.componentMap[e].OnComponentCreate=u("componentCreate_".concat(e),(function(n){t.componentMap[e]=Object(s["a"])(Object(s["a"])({},t.componentMap[e]),n),t.componentMap=Object(s["a"])({},t.componentMap)})),this.componentMap[e].OnComponentEmitChange=u("componentEmitChange_".concat(e),(function(n){n&&t.componentMap[e]&&(t.componentMap[e].emit=n)})),this.componentMap[e].OnComponentPropChange=u("componentPropChange_".concat(e),(function(n){n&&t.componentMap[e]&&(t.componentMap[e].prop=n)})),this.componentMap[e].OnComponentChildrenChange=u("componentChildrenChange_".concat(e),(function(n){n&&t.componentMap[e]&&(t.componentMap[e].childrens=n,f("vueComponentDataChange_".concat(e),t.componentMap[e]))}))},getEl:function(e,t){e.nextElementSibling&&3===e.nodeType?(t.push(e),this.getEl(e.nextElementSibling,t)):t.push(e)},getScopedSlots:function(e,t){var n=this,o={};return Object.keys(t).forEach((function(a){"default"!==a&&(o[a]=function(){return n.getOtherSlot(e,t[a])})})),o},getOtherSlot:function(e,t){var n=null;return 1===t.nodeType?(t.removeAttribute("slot"),n=e(t.localName)):(!t.parentNode||t.parentNode&&"VUE2-ANT"===t.parentNode.nodeName)&&(n=t.nodeValue),setTimeout((function(){1===t.nodeType?n.elm.parentNode&&n.elm.parentNode.replaceChild&&n.elm.parentNode.replaceChild(t,n.elm):t.parentNode&&"VUE2-ANT"===t.parentNode.nodeName&&(t.parentNode.innerText="")})),n},getVueChildrens:function(e,t,n){var o=this,a=[];return n.forEach((function(t){a.push(o.getOtherSlot(e,t))})),t&&Object.keys(t).map((function(n){var c=e(t[n].name,{key:n,prop:Object(s["a"])({},t[n].prop),attrs:Object(s["a"])({},t[n].prop),on:Object(s["a"])({},t[n].emit),scopedSlots:o.getScopedSlots(e,t[n].slot)},o.getVueChildrens(e,t[n].childrens,t[n].slot.default));a.push(c)})),a}},render:function(){var e=this,t=arguments[0];return t("div",[Object.keys(this.componentMap).map((function(n){if(e.componentMap[n].key&&!e.componentMap[n].isChildren)return console.log("开始渲染:",e.componentMap,n),t(e.componentMap[n].name,{ref:n,key:n,prop:Object(s["a"])({},e.componentMap[n].prop),attrs:Object(s["a"])({},e.componentMap[n].prop),on:Object(s["a"])({},e.componentMap[n].emit),scopedSlots:e.getScopedSlots(t,e.componentMap[n].slot)},e.getVueChildrens(t,e.componentMap[n].childrens,e.componentMap[n].slot.default))}))])}},j=(n("202f"),n("d4ec")),m=n("bee2"),v=n("257e"),y=n("262e"),g=n("2caf"),k=n("9072"),O=n("ade3"),C=(n("99af"),n("caad"),n("2532"),n("5319"),0),M=[],E=function(e){Object(y["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.call(this),Object(O["a"])(Object(v["a"])(e),"key","vue2_ant_"+C++),Object(O["a"])(Object(v["a"])(e),"tagName",null),Object(O["a"])(Object(v["a"])(e),"prop",{}),Object(O["a"])(Object(v["a"])(e),"propIn",["__name","id","__children"]),Object(O["a"])(Object(v["a"])(e),"componentData",null),M.push(e.key),f("keys",[].concat(M)),f("key",e.key),e.vueEmit={},e.vueChildren={},e}return Object(m["a"])(n,[{key:"isChildren",value:function(){return this.parentNode&&"VUE2-ANT"===this.parentNode.nodeName&&"VUE2-ANT"===this.nodeName}},{key:"isSlot",value:function(){return this.parentNode&&this.parentNode.hasAttribute("slot")}},{key:"connectedCallback",value:function(){var e=this;if(!this.isSlot()){var t=this.initSlotData(),n=this.childNodes;this.tagName=this.attributes.__name.value,this.attributes.forEach((function(t){e.propIn.includes(t.name)||(e.prop[t.name]=t.value)})),this.componentData={key:this.key,name:this.tagName,prop:this.prop,emit:this.vueEmit,slot:t,childresNode:n,elOn:null,isChildren:this.isChildren()},this.listeningAttrbutes(),this.listeningVueEmit(),this.initEmit(),f("componentCreate_".concat(this.key),this.componentData),this.isChildren()?this.parentNode.vueChildren[this.key]=this.componentData:this.componentData.elOn=d("vueComponentCreate_".concat(this.key),(function(t){t&&t.forEach((function(t,n){var o=e.key+"_"+n;document.getElementById(o)&&e.removeChild(document.getElementById(o)),t.id=o,e.appendChild(t)}))}))}}},{key:"initEmit",value:function(){var e=this;this.componentData.dataChangeOn=d("vueComponentDataChange_".concat(this.key),(function(t){t&&(e.componentData=Object(s["a"])(Object(s["a"])({},e.componentData),t),e.isChildren()&&(e.parentNode.vueChildren[e.key]=e.componentData))}))}},{key:"initSlotData",value:function(){var e={},t=[];if(this.childNodes&&0!==!this.childNodes.length)return this.normalize(),this.childNodes.forEach((function(n){n&&"VUE2-ANT"!==n.nodeName&&("#text"===n.nodeName&&0===n.nodeValue.replace(/\n/g,"").replace(/ /g,"").length||(n.getAttribute&&n.getAttribute("slot")?e[n.getAttribute("slot")]=n:t.push(n)))})),e.default=t,e}},{key:"disconnectedCallback",value:function(){this.componentData&&(this.isChildren()?delete this.parentNode.vueChildren[this.key]:(b(this.componentData.elOn),f("componentDestory_".concat(this.key),this.key)))}},{key:"listeningAttrbutes",value:function(){var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,t={attributes:!0,childList:!0},n=new e((function(e){e.forEach((function(e){"attributes"==e.type&&console.log("change"),e.type}))}));n.observe(this,t)}},{key:"listeningVueEmit",value:function(){var e=this,t=new Proxy(this.vueEmit,{set:function(t,n,o){return t[n]=o,f("componentEmitChange_".concat(e.key),Object(s["a"])({},t)),!0},get:function(e,t){return e[t]}});this.vueEmit=t;var n=new Proxy(this.vueChildren,{set:function(t,n,o){return t[n]=o,f("componentChildrenChange_".concat(e.key),Object(s["a"])({},t)),!0},get:function(e,t){return e[t]}});this.vueChildren=n}}]),n}(Object(k["a"])(HTMLElement));customElements.get("vue2-ant")||customElements.define("vue2-ant",E),o["a"].use(a["a"]),o["a"].config.productionTip=!1;var _=document.createElement("div");_.id="vue2_ad",new o["a"]({render:function(e){return e(h)}}).$mount(_)}});
//# sourceMappingURL=app.js.map