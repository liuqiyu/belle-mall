webpackJsonp([0],{"2Nv9":function(t,a){},"B+19":function(t,a){},HH3x:function(t,a){},NwYw:function(t,a,e){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"i-footer"},[a("div",{staticClass:"i-guarantee"},[a("div",{staticClass:"common-width"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:e("WYJ/"),alt:""}})])])]),this._v(" "),a("div",{staticClass:"i-copyright"},[a("div",{staticClass:"common-width"},[a("span",{staticClass:"copyright"},[this._v("© 2008-2018 liuqiyu 版权所有")]),this._v(" "),a("span",{staticClass:"contact"},[this._v("联系方式（QQ）：1064839051 ")])])])])}]};var i=e("VU/8")({},s,!1,function(t){e("HH3x")},"data-v-00a82f4a",null);a.a=i.exports},Umeb:function(t,a){},"WYJ/":function(t,a,e){t.exports=e.p+"static/img/guarantee.7e70840.jpg"},"ar/2":function(t,a){},dYIK:function(t,a){},tlId:function(t,a){},xCHB:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Dd8w"),i=e.n(s),n=e("NYxO"),r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"i-header"},[e("div",{staticClass:"common-width"},[t._m(0),t._v(" "),e("div",{staticClass:"i-search-wrapper"},[e("i-input",{staticClass:"m-input",attrs:{size:"large"},model:{value:t.keyword,callback:function(a){t.keyword=a},expression:"keyword"}},[e("Button",{attrs:{slot:"append"},on:{click:t.onSearch},slot:"append"},[t._v("搜索")])],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"i-logo"},[a("span",[this._v("BELLE GO")]),this._v(" "),a("p",[this._v("美丽生活 这里开始")])])}]};var o=e("VU/8")({data:function(){return{keyword:"口红，女包，高跟鞋，婚纱，项链"}},methods:{onSearch:function(){this.$Message.info("已显示全部数据")}}},r,!1,function(t){e("xYz4")},null,null).exports,l={props:{data:{type:Object},showPannel:!0},methods:i()({},Object(n.b)(["addCart"]),{showDetails:function(t){this.$router.push({path:"/details",query:{type:t.type,id:t.id}})}})},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.showPannel?e("section",{staticClass:"pro-pannel"},[e("header",[e("p",{staticClass:"title"},[t._v(t._s(t.data.title))])]),t._v(" "),e("div",{staticClass:"pro-body clearfix"},[e("div",{staticClass:"big-banner"},[e("img",{attrs:{src:t.data.bannerUrl,alt:""}})]),t._v(" "),e("div",{staticClass:"column clearfix"},t._l(t.data.list,function(a,s){return e("div",{key:s,staticClass:"column-item",on:{click:function(e){t.addCart(a)}}},[e("div",{staticClass:"img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.url,expression:"cell.url"}],attrs:{alt:a.name}})]),t._v(" "),e("div",{staticClass:"description"},[e("p",{staticClass:"describe"},[t._v(t._s(a.brandName)+" "+t._s(a.title)+" "+t._s(a.tags))]),t._v(" "),e("p",{staticClass:"price"},[t._v("￥"+t._s(a.price))])])])}))])]):t._e()},staticRenderFns:[]};var d=e("VU/8")(l,c,!1,function(t){e("tlId")},"data-v-12b667cd",null).exports,u={render:function(){var t=this.$createElement,a=this._self._c||t;return this.showLoading?a("div",{staticClass:"i-loading",style:{height:this.height+"px"}},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"load-c",size:"48"}}),this._v(" "),a("div",{staticClass:"loading-text"},[this._v("Loading")])],1)],1):this._e()},staticRenderFns:[]};var h=e("VU/8")({props:{showLoading:!0,height:{default:200}}},u,!1,function(t){e("ar/2")},"data-v-7dd50ae6",null).exports,v={props:{bannerData:{type:Array},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},height:0,arrow:{type:String,default:"never"},speed:{type:Number,default:4e3}},data:function(){return{showLoading:!0,timer:null}},components:{iLoading:h},created:function(){var t=this;this.timer=setTimeout(function(){t.showLoading=!1},500)},destroyed:function(){clearTimeout(this.timer)}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner"},[e("iLoading",{attrs:{showLoading:t.showLoading,height:t.height}}),t._v(" "),e("Carousel",{attrs:{autoplay:t.autoplay,loop:t.loop,height:t.height,arrow:t.arrow,"autoplay-speed":t.speed}},t._l(t.bannerData,function(t,a){return e("CarouselItem",{key:a},[e("div",{staticClass:"carousel-item"},[e("img",{attrs:{src:t.imageUrl,alt:"",width:"1920"}})])])}))],1)},staticRenderFns:[]};var f=e("VU/8")(v,p,!1,function(t){e("2Nv9")},"data-v-6bb123a5",null).exports,m=e("NwYw"),_={render:function(){var t=this.$createElement,a=this._self._c||t;return a("header",{staticClass:"i-h-title"},[a("span",{staticClass:"title"},[a("Icon",{attrs:{type:this.type}}),this._v(" "+this._s(this.title))],1)])},staticRenderFns:[]};var g=e("VU/8")({props:{title:null,type:null}},_,!1,function(t){e("dYIK")},"data-v-f77577e4",null).exports,w={props:{list:{type:Array}},methods:{toDetails:function(t){this.$router.push({path:"/details",query:{type:t.type,id:t.id}})}}},C={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pro-list clearfix"},t._l(t.list,function(a,s){return e("div",{key:s,staticClass:"pro-cell",on:{click:function(e){t.toDetails(a)}}},[e("div",{staticClass:"img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.url,expression:"cell.url"}],attrs:{alt:a.name}})]),t._v(" "),e("div",{staticClass:"description"},[e("p",{staticClass:"describe"},[t._v(t._s(a.brandName)+" "+t._s(a.title)+" "+t._s(a.tags))]),t._v(" "),e("p",{staticClass:"price"},[t._v("￥"+t._s(a.price))])])])}))},staticRenderFns:[]};var y=e("VU/8")(w,C,!1,function(t){e("Umeb")},"data-v-63e54990",null).exports,D={data:function(){return{areaTitle:"专属分类",areaType:"pound",likeTitle:"猜你喜欢",likeType:"heart",likeLoading:!0,timer:null,showLipstickData:!0,showFemaleBagData:!1,showHighHeeledData:!1,showWeddingDressData:!1,showNeckLaceData:!1}},components:{IHeader:o,ProPannel:d,iCarousel:f,iFooter:m.a,iTitle:g,proList:y,iLoading:h},computed:i()({},Object(n.d)({lipstickData:function(t){return t.prolist.lipstickData},femaleBagData:function(t){return t.prolist.femaleBagData},highHeeledData:function(t){return t.prolist.highHeeledData},weddingDressData:function(t){return t.prolist.weddingDressData},necklaceData:function(t){return t.prolist.necklaceData},uLikeList:function(t){return t.prolist.uLikeList},mainBanner:function(t){return t.prolist.mainBanner}})),created:function(){document.addEventListener("scroll",this.getList)},methods:{getList:function(){var t=this,a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;this.timer=setTimeout(function(){a>500&&a<1e3?t.showFemaleBagData=!0:a>=1e3&&a<1500?t.showHighHeeledData=!0:a>=1500&&a<2e3?t.showWeddingDressData=!0:a>=2e3&&a<2500?t.showNeckLaceData=!0:a>=3200&&(t.likeLoading=!1)},500)}},destroyed:function(){document.removeEventListener("scroll",this.getList),clearTimeout(this.timer)}},L={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"overview"},[e("IHeader"),t._v(" "),e("iCarousel",{attrs:{bannerData:t.mainBanner,height:500}}),t._v(" "),e("div",{staticClass:"i-area"},[e("div",{staticClass:"common-width"},[e("iTitle",{attrs:{type:t.areaType,title:t.areaTitle}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"pro-list"},[e("div",{staticClass:"common-width"},[e("ProPannel",{attrs:{data:t.lipstickData,showPannel:t.showLipstickData}}),t._v(" "),e("div",{staticClass:"pro-sec"},[e("iLoading",{attrs:{showLoading:!t.showFemaleBagData}}),t._v(" "),e("ProPannel",{attrs:{data:t.femaleBagData,showPannel:t.showFemaleBagData}})],1),t._v(" "),e("div",{staticClass:"pro-sec"},[e("iLoading",{attrs:{showLoading:!t.showHighHeeledData}}),t._v(" "),e("ProPannel",{attrs:{data:t.highHeeledData,showPannel:t.showHighHeeledData}})],1),t._v(" "),e("div",{staticClass:"pro-sec"},[e("iLoading",{attrs:{showLoading:!t.showWeddingDressData}}),t._v(" "),e("ProPannel",{attrs:{data:t.weddingDressData,showPannel:t.showWeddingDressData}})],1),t._v(" "),e("div",{staticClass:"pro-sec"},[e("iLoading",{attrs:{showLoading:!t.showNeckLaceData}}),t._v(" "),e("ProPannel",{attrs:{data:t.necklaceData,showPannel:t.showNeckLaceData}})],1)],1)]),t._v(" "),e("div",{staticClass:"u-may-like"},[e("div",{staticClass:"common-width"},[e("iTitle",{attrs:{type:t.likeType,title:t.likeTitle}}),t._v(" "),e("iLoading",{attrs:{showLoading:t.likeLoading}}),t._v(" "),t.likeLoading?t._e():e("proList",{attrs:{list:t.uLikeList}})],1)]),t._v(" "),e("iFooter")],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"areas clearfix"},[e("div",{staticClass:"area-item",staticStyle:{background:"#cbe5f8"}},[t._v("口红")]),t._v(" "),e("div",{staticClass:"area-item",staticStyle:{background:"#ffdadd"}},[t._v("女包")]),t._v(" "),e("div",{staticClass:"area-item",staticStyle:{background:"#caecf7"}},[t._v("高跟鞋")]),t._v(" "),e("div",{staticClass:"area-item",staticStyle:{background:"#d0defb"}},[t._v("婚纱")]),t._v(" "),e("div",{staticClass:"area-item",staticStyle:{background:"#ffefae"}},[t._v("项链")])])}]};var k=e("VU/8")(D,L,!1,function(t){e("B+19")},"data-v-6b1b5581",null);a.default=k.exports},xYz4:function(t,a){}});