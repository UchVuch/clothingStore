"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[657],{657:function(t,s,e){e.r(s),e.d(s,{default:function(){return z}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("section",{staticClass:"cart"},[s("div",{staticClass:"cart__top"},[s("h2",{staticClass:"title"},[t._v("Коризна")]),t.cart.length?s("div",{staticClass:"cart__content"},[s("ul",{staticClass:"cart__list"},t._l(t.cart,(function(t){return s("li",{key:t.id,staticClass:"cart__item"},[s("cart-item",{attrs:{item:t}})],1)})),0),s("div",{staticClass:"cart__total"},[s("div",{staticClass:"cart__total-inner"},[s("p",{staticClass:"cart__total-suptext"},[t._v("Итого")]),s("p",{staticClass:"cart__total-sum"},[t._v("К оплате "+t._s(t.totalSum)+" руб")]),s("ul",{staticClass:"cart__total-table"},[t._l(t.cart,(function(e){return s("li",{staticClass:"cart__total-item"},[s("span",[t._v(t._s(e.brand))]),s("span",{staticClass:"cart__total-table-sum"},[t._v(t._s(e.price)+" руб")])])})),s("li",{staticClass:"cart__total-item"},[s("span",[t._v("Доставка")]),s("span",{staticClass:"cart__total-table-sum"},[t._v(t._s(t.deliverySum)+" руб")])])],2)])])]):s("p",{staticClass:"cart-none"},[t._v(" Ваша карзина пуста ")])]),t.cart.length?t._e():s("div",{staticClass:"cart__bottom"},[s("h2",{staticClass:"title cart__bottom title"},[t._v("Но у нас есть персональные предложения для вас")]),s("product-list",{attrs:{products:t.products}})],1)])])},a=[],c=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cart-item"},[s("img",{attrs:{src:t.item.img,alt:t.item.description,width:"240",height:"272"}}),s("div",{staticClass:"cart-item__info"},[s("div",{staticClass:"cart-item__top"},[s("div",{staticClass:"cart-item__price"},[t._v(" "+t._s(t.item.price)+" руб ")]),s("div",{staticClass:"cart-item__brand"},[s("span",[t._v("Бренд")]),s("span",[t._v(t._s(t.item.brand))])]),s("div",{staticClass:"cart-item__desc"},[t._v(" "+t._s(t.item.description)+" ")]),s("div",{staticClass:"cart-item__size"},[s("span",[t._v("Размер")]),s("span",{staticClass:"cart-item__size-value"},[t._v(t._s(t.sizeValue))]),s("dropdown",{staticClass:"select-size",attrs:{"button-style":{padding:0,textDecoration:"underline",fontSize:"14px",lineHeight:"20px"},"list-style":{top:"22px"},button:{text:"Изменить"},options:t.completeSizeOptions},on:{check:t.changeSize},scopedSlots:t._u([{key:"option",fn:function({option:i}){return[s("div",{staticClass:"select-size__item"},[s("span",{staticClass:"select-size__value"},[t._v(t._s(i.value))]),s("div",{staticClass:"select-size__check",class:{"select-size__check--current":i.isCheck}},[s("img",{attrs:{src:e(697),width:"8px",height:"6px"}})])])]}}])})],1)]),s("div",{staticClass:"cart-item__bottom"},[s("p",[t._v(t._s(t.item.date))]),s("button",{staticClass:"delete",on:{click:t.deleteItem}},[t._v("Удалить")])])])])},l=[],r=e(177),n={components:{Dropdown:r.Z},name:"cart-item",props:{item:{type:Object,required:!0}},data(){return{sizeValue:this.item.size,sizeOptions:[{id:1,value:"XS",isCheck:!1},{id:2,value:"S",isCheck:!1},{id:3,value:"M",isCheck:!1},{id:4,value:"L",isCheck:!1},{id:5,value:"XL",isCheck:!1},{id:6,value:"XXL",isCheck:!1}],itemId:this.$props.item.id}},computed:{completeSizeOptions(){return this.sizeOptions.forEach((t=>t.value===this.sizeValue?t.isCheck=!t.isCheck:t.isCheck=!1)),this.sizeOptions}},methods:{changeSize(t){const s=this.sizeOptions.find((s=>s.id===t));this.sizeValue=s.value,this.$store.commit("changeCartItem",{id:this.itemId,size:s.value})},deleteItem(){this.$store.commit("deleteCartItem",{id:this.itemId})}}},_=n,o=e(1),d=(0,o.Z)(_,c,l,!1,null,"7d40357f",null),u=d.exports,p=e(760),m=e(629),v={components:{CartItem:u,ProductList:p.Z},data(){return{deliverySum:750}},computed:{totalSum(){return this.cart.reduce(((t,s)=>t+Number(s.price.split(" ").join(""))),0)+this.deliverySum},...(0,m.Se)(["cart","products"])},methods:{}},h=v,C=(0,o.Z)(h,i,a,!1,null,"15f1d7c4",null),z=C.exports}}]);
//# sourceMappingURL=657.67837baa.js.map