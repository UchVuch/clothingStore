"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[794],{794:function(t,s,e){e.r(s),e.d(s,{default:function(){return f}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("section",{staticClass:"product"},[s("div",{staticClass:"product__left"}),s("div",{staticClass:"product__right"},[s("h2",{staticClass:"title"},[t._v(t._s(t.product.brand))]),s("p",{staticClass:"product__desc"},[t._v(" "+t._s(t.product.description)+" ")]),s("p",{staticClass:"product__text"},[t._v(" "+t._s(t.product.text)+" ")]),s("div",{staticClass:"product__price"},[t._v(" "+t._s(t.product.price)+" руб ")]),s("dropdown",{staticClass:"select-size",attrs:{"button-style":{paddingBlock:"12px",border:"1px solid #EAECF0",borderRadius:"8px",width:"204px"},"list-style":{top:"56px"},button:{img:e(127),text:t.sizeValue,reverse:!0},options:t.completeSizeOptions},on:{check:t.changeSize},scopedSlots:t._u([{key:"option",fn:function({option:i}){return[s("div",{staticClass:"select-size__item"},[s("span",{staticClass:"select-size__value"},[t._v(t._s(i.value))]),s("div",{staticClass:"select-size__check",class:{"select-size__check--current":i.isCheck}},[s("img",{attrs:{src:e(697),width:"8px",height:"6px"}})])])]}}])}),s("default-button",{on:{click:function(s){return t.$store.commit("setCartItems",t.productForCart)}}},[t._v(" Добавить в корзину ")])],1)])])},c=[],o=e(177),r=function(){var t=this,s=t._self._c;return s("button",{staticClass:"default-button",style:{backgroundColor:t.bgColor,color:t.color},on:{click:function(s){return t.$emit("click",s)}}},[t._t("default",(function(){return[t._v("Кнопка")]}))],2)},u=[],l={name:"default-button",props:{bgColor:String,color:String}},n=l,a=e(1),d=(0,a.Z)(n,r,u,!1,null,"4c2d6c72",null),p=d.exports,h=e(629),_={components:{Dropdown:o.Z,DefaultButton:p},mounted(){this.product=this.products.find((t=>t.id===this.productId))},data(){return{product:{},productId:Number(this.$route.params.id),sizeValue:"Выберите размер",sizeOptions:[{id:1,value:"XS",isCheck:!1},{id:2,value:"S",isCheck:!1},{id:3,value:"M",isCheck:!1},{id:4,value:"L",isCheck:!1},{id:5,value:"XL",isCheck:!1},{id:6,value:"XXL",isCheck:!1}]}},computed:{...(0,h.Se)(["products"]),productForCart(){return{...this.product,size:this.sizeValue,date:"Доставка займёт от 5 до 10 дней"}},completeSizeOptions(){return this.sizeOptions.forEach((t=>t.value===this.sizeValue?t.isCheck=!t.isCheck:t.isCheck=!1)),this.sizeOptions}},methods:{changeSize(t){const s=this.sizeOptions.find((s=>s.id===t));this.sizeValue=s.value,console.log(this.sizeValue)}}},C=_,v=(0,a.Z)(C,i,c,!1,null,"210553bc",null),f=v.exports}}]);
//# sourceMappingURL=794.2f66d4fb.js.map