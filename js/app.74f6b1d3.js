(function(n){function e(e){for(var r,c,a=e[0],d=e[1],i=e[2],l=0,h=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(n[r]=d[r]);p&&p(e);while(h.length)h.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,c=1;c<t.length;c++){var d=t[c];0!==o[d]&&(r=!1)}r&&(u.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},o={app:0},u=[];function c(n){return a.p+"js/"+({}[n]||n)+"."+{"chunk-08f37a46":"b54534e4","chunk-2d0bdcec":"7d2615e5","chunk-2d0d32d2":"e25b1480","chunk-2d0daa6d":"2dcc5aa3","chunk-2d0e2114":"781682c2","chunk-2d20e872":"b34519f5","chunk-2d2102cc":"f314a63e","chunk-2d21e30b":"68fbd510","chunk-2d21eaef":"3c3ac3d1","chunk-2d22d746":"aca96ed7","chunk-2d22fd2e":"4b93a784","chunk-328f5dbd":"753da3c5"}[n]+".js"}function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(n){var e=[],t=o[n];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise((function(e,r){t=o[n]=[e,r]}));e.push(t[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=c(n);var i=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(l);var t=o[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;i.message="Loading chunk "+n+" failed.\n("+r+": "+u+")",i.name="ChunkLoadError",i.type=r,i.request=u,t[1](i)}o[n]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a.oe=function(n){throw console.error(n),n};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var p=i;u.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=t("bc3a"),u=t.n(o),c=t("a7fe"),a=t.n(c),d=t("9062"),i=t.n(d),l=(t("e40d"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),p=[],h={name:"App",data:function(){return{}}},f=h,s=(t("5c0b"),t("2877")),b=Object(s["a"])(f,l,p,!1,null,null,null),m=b.exports,v=(t("d3b7"),t("8c4f")),k=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"home"},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[n._v("首頁")]),n._v(" | "),t("router-link",{attrs:{to:"/products"}},[n._v("產品列表")]),n._v(" | "),t("router-link",{attrs:{to:"/cart"}},[n._v("購物車")]),n._v(" | "),t("router-link",{attrs:{to:"/about"}},[n._v("關於我們")]),n._v(" | "),t("router-link",{attrs:{to:"/checkout"}},[n._v("結帳付款")]),n._v(" | "),t("router-link",{attrs:{to:"/admin/products"}},[n._v("後台產品列表")])],1),t("router-view")],1)},y=[],_={name:"Home",data:function(){return{}}},g=_,w=Object(s["a"])(g,k,y,!1,null,null,null),O=w.exports;r["a"].use(v["a"]);var j=[{path:"/",component:O,children:[{path:"",name:"Index",component:function(){return t.e("chunk-2d21e30b").then(t.bind(null,"d504"))}},{path:"/products",name:"Products",component:function(){return t.e("chunk-08f37a46").then(t.bind(null,"e6dc"))}},{path:"/product/:id",name:"Product",component:function(){return t.e("chunk-328f5dbd").then(t.bind(null,"d2f1"))}},{path:"/cart",name:"Cart",component:function(){return t.e("chunk-2d2102cc").then(t.bind(null,"b789"))}},{path:"/about",name:"About",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"/checkout",name:"Checkout",component:function(){return t.e("chunk-2d0e2114").then(t.bind(null,"7cb4"))}},{path:"/checkoutFinish",name:"CheckoutFinish",component:function(){return t.e("chunk-2d22fd2e").then(t.bind(null,"ea51"))}}]},{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-2d0d32d2").then(t.bind(null,"5c3a"))},children:[{path:"products",name:"BackendProducts",component:function(){return t.e("chunk-2d0daa6d").then(t.bind(null,"6d09"))}},{path:"coupons",name:"BackendCoupons",component:function(){return t.e("chunk-2d0bdcec").then(t.bind(null,"2e25"))}},{path:"orders",name:"BackendOrders",component:function(){return t.e("chunk-2d20e872").then(t.bind(null,"b06d"))}},{path:"pictures",name:"BackendPictures",component:function(){return t.e("chunk-2d21eaef").then(t.bind(null,"d739"))}}]},{path:"*",redirect:"/"}],P=new v["a"]({routes:j}),x=P;r["a"].config.productionTip=!1,r["a"].component("Loading",i.a),r["a"].use(a.a,u.a),new r["a"]({router:x,render:function(n){return n(m)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";var r=t("9c0c"),o=t.n(r);o.a},"9c0c":function(n,e,t){}});
//# sourceMappingURL=app.74f6b1d3.js.map