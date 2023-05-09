(function(){"use strict";var t={177:function(t,e,r){r.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown"},[e("button",{staticClass:"dropdown__button",style:t.buttonStyle,on:{click:function(e){t.isDropdownShow=!t.isDropdownShow}}},[t.button.img?e("img",{class:{"order-reverse":t.button.reverse},attrs:{src:t.button.img,"aria-hidden":"true"}}):t._e(),e("span",[t._v(t._s(t.button.text))])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.isDropdownShow,expression:"isDropdownShow"}],staticClass:"dropdown__list",style:t.listStyle},t._l(t.options,(function(r){return e("li",{key:r.id,staticClass:"dropdown__item",on:{click:function(e){return t.$emit("check",r.id)}}},[t._t("option",(function(){return[t._v(" "+t._s(r.value)+" ")]}),{option:r})],2)})),0)])},n=[],o={name:"dropdown",props:{options:{type:Array,required:!0},button:{type:Object,required:!1,default:()=>({img:"",text:"Открыть",reverse:!1})},listStyle:{type:Object,required:!1},buttonStyle:{type:Object,required:!1}},data(){return{isDropdownShow:!1}}},s=o,a=r(1),c=(0,a.Z)(s,i,n,!1,null,"7f82a1ba",null),u=c.exports},760:function(t,e,r){r.d(e,{Z:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"products__list"},t._l(t.products,(function(t){return e("li",{key:t.id,staticClass:"products__item card"},[e("router-link",{staticClass:"card__link",attrs:{to:{name:"product",params:{id:t.id}}}},[e("product-item",{attrs:{product:t}})],1)],1)})),0)},n=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card__inner"},[e("div",{staticClass:"card__top"},[e("div",{staticClass:"card__full-info"},[e("p",{staticClass:"card__title"},[t._v(" "+t._s(t.product.brand)+" ")]),e("p",{staticClass:"card__text"},[t._v(" "+t._s(t.product.text)+" ")])]),e("img",{staticClass:"card__image",attrs:{src:t.product.img,alt:t.product.description,width:"352",height:"420"}})]),e("span",{staticClass:"card__price"},[t._v(" "+t._s(t.product.price)+" руб ")]),e("span",{staticClass:"card__brand"},[e("span",{staticClass:"card__brand-name"},[t._v("Бренд")]),e("span",{staticClass:"card__brand-info"},[t._v(t._s(t.product.brand))])]),e("span",{staticClass:"card__description"},[t._v(" "+t._s(t.product.description)+" ")])])},s=[],a={name:"product-item",props:{product:{type:Object,required:!0}}},c=a,u=r(1),p=(0,u.Z)(c,o,s,!1,null,"ac970696",null),d=p.exports,l={components:{ProductItem:d},name:"product-list",props:{products:{type:Array,required:!0}}},f=l,h=(0,u.Z)(f,i,n,!1,null,"004f17bf",null),m=h.exports},464:function(t,e,r){var i=r(144),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"header__inner"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:r(574),alt:"Курсовой макет",width:"242",height:"32"}})]),e("nav",{staticClass:"header__nav"},[e("button",{staticClass:"header__nav-button auth",attrs:{title:"Профиль"}},[e("img",{attrs:{src:r(475),alt:"Профиль"}}),t._e()]),e("router-link",{staticClass:"header__nav-button",attrs:{to:"/cart"}},[e("img",{attrs:{src:r(173),alt:"Корзина",title:"Корзина",width:"20",height:"20"}})])],1)],1)])]),e("router-view",{staticClass:"main"}),t._m(0)],1)},o=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("p",[t._v(" © 2023 ОБУ ИТЦ. Все права защищены. ")])])])}],s=r(1),a={},c=(0,s.Z)(a,n,o,!1,null,null,null),u=c.exports,p=r(345),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("section",{staticClass:"home"},[e("div",{staticClass:"controls"},[e("dropdown",{staticClass:"filter",attrs:{options:t.filterOptions,button:{img:r(946),text:"Фильтры"}},on:{check:t.checkFilterOption},scopedSlots:t._u([{key:"option",fn:function({option:i}){return[e("div",{staticClass:"filter__check",class:{"filter__check--current":i.isCheck}},[e("img",{staticClass:"filter__check-image",attrs:{src:r(697),width:"8px",height:"6px"}})]),e("span",{staticClass:"filter__value"},[t._v(t._s(i.value))])]}}])}),e("dropdown",{staticClass:"sort",attrs:{"list-style":{width:"230px",right:0,left:"auto"},options:t.sortOptions,button:{img:r(127),text:t.sortButtonText,reverse:!0}},on:{check:t.checkSortOption}})],1),e("product-list",{attrs:{products:t.productItems}})],1)])},l=[],f=r(177),h=r(760),m=r(629),v={components:{Dropdown:f.Z,ProductList:h.Z},mounted(){this.productItems=this.products},data(){return{productItems:[],currentDefaultSort:[],currentSortOption:"По умолчанию",currentFilterOptions:[],filterOptions:[{id:1,value:"Акне Студия",isCheck:!1},{id:2,value:"АМИ Париж",isCheck:!1},{id:3,value:"Вквадрате2",isCheck:!1},{id:4,value:"Каменный остров",isCheck:!1}],sortButtonText:"По умолчанию",sortOptions:[{id:1,value:"По умолчанию"},{id:2,value:"Сначала доступные"},{id:3,value:"Сначала догорие"}]}},computed:{...(0,m.Se)(["products"])},methods:{checkFilterOption(t){const e=this.filterOptions.find((e=>e.id===t));e.isCheck=!e.isCheck,!0===e.isCheck?this.currentFilterOptions.push(e.value):this.currentFilterOptions=this.currentFilterOptions.filter((t=>t!==e.value)),this.filterProducts()},filterProducts(){if(!this.currentFilterOptions.length)return this.productItems=this.products,void("По умолчанию"!==this.currentSortOption&&this.sortProducts());const t=[];this.products.forEach((e=>{this.currentFilterOptions.includes(e.brand)&&!t.includes(e)&&t.push(e)})),this.productItems=t,this.sortProducts()},checkSortOption(t){const e=this.sortOptions.find((e=>e.id===t));this.sortButtonText=e.value,this.currentSortOption=e.value,this.sortProducts()},sortProducts(){switch(this.currentSortOption){case"По умолчанию":this.sortByDefault();break;case"Сначала доступные":this.sortByAvail();break;case"Сначала догорие":this.sortByPrice();break}},sortByDefault(){this.filterProducts()},sortByPrice(){const t=this.productItems.concat().sort((function(t,e){const r=Number(t.price.split(" ").join("")),i=Number(e.price.split(" ").join(""));return i-r}));this.productItems=[...t]},sortByAvail(){const t=[],e=[];this.productItems.forEach((r=>r.availability?t.push(r):e.push(r))),this.productItems=[...t,...e]}}},g=v,b=(0,s.Z)(g,d,l,!1,null,"5aad8fb4",null),_=b.exports;i.ZP.use(p.ZP);const y=[{path:"/",name:"home",component:_},{path:"/cart",name:"cart",component:function(){return r.e(657).then(r.bind(r,657))}},{path:"/product/:id",name:"product",component:function(){return r.e(794).then(r.bind(r,794))}}],C=new p.ZP({mode:"history",base:"/",routes:y});var x=C;i.ZP.use(m.ZP);var w=new m.ZP.Store({state:{auth:{state:!1,name:""},cartItems:[],products:[{id:1,img:r(167),slides:[r(167),r(494),r(902),r(243)],availability:!1,price:"30 000",brand:"Каменный остров",description:"Жилет с нашивкой компасом",text:"Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет"},{id:2,img:r(2),slides:[r(2),r(766),r(488),r(219)],availability:!0,price:"18 800",brand:"АМИ Париж",description:"Полосатая рубашка с коротким рукавом",text:"В этой модели АМИ Париж представляет смелый взгляд на классический силуэт рубашки"},{id:3,img:r(936),slides:[r(936),r(156),r(790),r(85)],availability:!1,price:"47 300",brand:"Вквадрате2",description:"Укороченные брюки с вышитым логотипом",text:"Сделано в Италии"},{id:4,img:r(428),slides:[r(428),r(355),r(26),r(517)],availability:!0,price:"19 000",brand:"Акне Студия",description:"Полосатый двубортный блейзер",text:"Лацканы из светло-серой шерсти в вертикальную полоску"},{id:5,img:r(167),slides:[r(167),r(494),r(902),r(243)],availability:!0,price:"25 000",brand:"Каменный остров",description:"Жилет с нашивкой компасом",text:"Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет"}]},getters:{products:t=>t.products,auth:t=>t.auth,cart:t=>t.cartItems},mutations:{login(t,e){t.auth=e},logout(t,e){t.auth=e},setCartItems(t,e){t.cartItems.push(e)},changeCartItem(t,e){t.cartItems.find((t=>t.id===e.id)).size=e.size},deleteCartItem(t,e){t.cartItems.filter((t=>t.id!==e.id))}},actions:{},modules:{}});i.ZP.config.productionTip=!1,new i.ZP({router:x,store:w,render:function(t){return t(u)}}).$mount("#app")},127:function(t,e,r){t.exports=r.p+"img/arrow-down.a277a4e1.svg"},173:function(t,e,r){t.exports=r.p+"img/cart-icon.946a4bec.svg"},697:function(t,e,r){t.exports=r.p+"img/check-icon.a4025bc3.svg"},946:function(t,e,r){t.exports=r.p+"img/filter-icon.11c55d71.svg"},574:function(t,e,r){t.exports=r.p+"img/logo.7f9b5b06.svg"},475:function(t,e,r){t.exports=r.p+"img/user-icon.43236a56.svg"},428:function(t,e,r){t.exports=r.p+"img/acne-1.6955b6ce.jpg"},355:function(t,e,r){t.exports=r.p+"img/acne-2.2b214724.jpg"},26:function(t,e,r){t.exports=r.p+"img/acne-3.c1739925.jpg"},517:function(t,e,r){t.exports=r.p+"img/acne-4.7adde8ff.jpg"},2:function(t,e,r){t.exports=r.p+"img/paris-1.221e9439.jpg"},766:function(t,e,r){t.exports=r.p+"img/paris-2.df5787cd.jpg"},488:function(t,e,r){t.exports=r.p+"img/paris-3.04122519.jpg"},219:function(t,e,r){t.exports=r.p+"img/paris-4.751a67d1.jpg"},936:function(t,e,r){t.exports=r.p+"img/square-1.49de429e.jpg"},156:function(t,e,r){t.exports=r.p+"img/square-2.0162de4b.jpg"},790:function(t,e,r){t.exports=r.p+"img/square-3.9870bfe7.jpg"},85:function(t,e,r){t.exports=r.p+"img/square-4.e273c72b.jpg"},167:function(t,e,r){t.exports=r.p+"img/stone-1.18f24452.jpg"},494:function(t,e,r){t.exports=r.p+"img/stone-2.4b7f31f6.jpg"},902:function(t,e,r){t.exports=r.p+"img/stone-3.0e0c296e.jpg"},243:function(t,e,r){t.exports=r.p+"img/stone-4.87e6a251.jpg"}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,i,n,o){if(!i){var s=1/0;for(p=0;p<t.length;p++){i=t[p][0],n=t[p][1],o=t[p][2];for(var a=!0,c=0;c<i.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((function(t){return r.O[t](i[c])}))?i.splice(c--,1):(a=!1,o<s&&(s=o));if(a){t.splice(p--,1);var u=n();void 0!==u&&(e=u)}}return e}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[i,n,o]}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,i){return r.f[i](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{657:"67837baa",794:"2f66d4fb"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{657:"0328042d",794:"a2c1a86b"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="project:";r.l=function(i,n,o,s){if(t[i])t[i].push(n);else{var a,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var d=u[p];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+o){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",e+o),a.src=i),t[i]=[n];var l=function(e,r){a.onerror=a.onload=null,clearTimeout(f);var n=t[i];if(delete t[i],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((function(t){return t(r)})),e)return e(r)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,i,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(r){if(o.onerror=o.onload=null,"load"===r.type)i();else{var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=a,o.parentNode&&o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=s,o.href=e,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var n=r[i],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===t||o===e))return n}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){n=s[i],o=n.getAttribute("data-href");if(o===t||o===e)return n}},i=function(i){return new Promise((function(n,o){var s=r.miniCssF(i),a=r.p+s;if(e(s,a))return n();t(i,a,null,n,o)}))},n={143:0};r.f.miniCss=function(t,e){var r={657:1,794:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=i(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}}(),function(){var t={143:0};r.f.j=function(e,i){var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var o=new Promise((function(r,i){n=t[e]=[r,i]}));i.push(n[2]=o);var s=r.p+r.u(e),a=new Error,c=function(i){if(r.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,n[1](a)}};r.l(s,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,o,s=i[0],a=i[1],c=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(c)var p=c(r)}for(e&&e(i);u<s.length;u++)o=s[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(p)},i=self["webpackChunkproject"]=self["webpackChunkproject"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(464)}));i=r.O(i)})();
//# sourceMappingURL=app.c0623235.js.map