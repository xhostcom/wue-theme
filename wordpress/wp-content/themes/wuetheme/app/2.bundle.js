(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{405:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this.$createElement,e=this._self._c||n;return e("section",{staticClass:"outer-container",attrs:{id:"pageWrapper"}},[this.loader?e("loader"):this._e(),this._v(" "),e("div",{staticClass:"blog-post post inner-container",attrs:{id:"single-post"},domProps:{innerHTML:this._s(this.content)}})],1)};o._withStripped=!0;var i=t(81),r=t.n(i),a=t(408),l=t(113),s={name:"Post",data:function(){return{postPromise:null,initialLoad:this.$store.getters.isInitialLoad,content:"",post:{},title:null,documentTitle:technomad.bloginfo.name,loader:!0}},components:{loader:t(114).a},mixins:[l.a,a.a],methods:{},computed:{slug:function(){return this.$route.params.slug}},watch:{},beforeMount:function(){},mounted:function(){var n=this;if(console.log("wtf"),this.initialLoad){var e=document.getElementById("initialLoader");document.body.removeChild(e),this.content=technomad.initialData.post.content.rendered,console.log("this.content",this.content),this.$store.dispatch("setInitialLoadFalse"),this.$store.dispatch("setLoaderFalse"),this.title=technomad.initialData.title,this.$store.dispatch("setPageTitle",this.title),this.documentTitle=this.title+" - "+technomad.bloginfo.name,this.$store.dispatch("setDocumentTitle",this.documentTitle),this.loader=!1,this.mountedStuff()}else{this.loader=!0;var t=technomad.host+"/wp-json/wp/v2/posts?slug="+this.$route.params.slug;r.a.get(t).then(function(e){n.post=e.data[0],n.content=n.post.content.rendered,n.$store.dispatch("setPageTitle",n.post.title.rendered),n.title=n.post.title.rendered,n.$store.dispatch("setLoaderFalse"),n.documentTitle=n.title+" - "+technomad.bloginfo.name,n.$store.dispatch("setDocumentTitle",n.documentTitle),n.loader=!1,n.ajaxStuff()}).catch(function(e){console.log("error",e),n.$store.dispatch("setLoaderFalse")})}},updated:function(){},activated:function(){this.$store.dispatch("setLoaderFalse"),this.$store.dispatch("setPageTitle",this.title),this.$store.dispatch("setDocumentTitle",this.documentTitle)}},p=(t(417),t(10)),f=Object(p.a)(s,o,[],!1,null,null,null);f.options.__file="src/components/main/single/Post.vue";e.default=f.exports},408:function(n,e,t){"use strict";t(82);e.a={methods:{ajaxStuff:function(){this.setInternalRouterLinksInsideContent()},scrollToTop:function(n){}},beforeRouteUpdate:function(n,e,t){t()},beforeRouteLeave:function(n,e,t){t()}}},411:function(n,e,t){var o=t(418);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(33)(o,i);o.locals&&(n.exports=o.locals)},417:function(n,e,t){"use strict";var o=t(411);t.n(o).a},418:function(n,e,t){(e=n.exports=t(32)(!1)).i(t(419),""),e.push([n.i,"/*displayflex*/\n.flex,\n.navlink {\n  display: flexbox;\n  display: -webkit-box;\n  /* OLD - iOS 6-, Safari 3.1-6, BB7 */\n  display: -ms-flexbox;\n  /* TWEENER - IE 10 */\n  display: -webkit-flex;\n  /* NEW - Safari 6.1+. iOS 7.1+, BB10 */\n  display: -moz-box;\n  display: flex;\n}\n/* flexcolumn*/\n.flexColumn {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flexbox-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n/* flexrow*/\n.flexRow {\n  -moz-box-orient: horizontal;\n  -webkit-box-orient: horizontal;\n  box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -moz-box-direction: horizontal;\n  -ms-flexbox-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n/* alignitemscenter */\n.alignItemsCenter,\n.navlink {\n  box-align: center;\n  -moz-box-align: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n}\n/* alignitemsstretch*/\n.alignItemsStretch {\n  box-align: stretch;\n  -moz-box-align: stretch;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  -ms-grid-row-align: stretch;\n  align-items: stretch;\n}\n/*alignitemsend */\n.alignItemsEnd {\n  box-align: end;\n  -moz-box-align: end;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: end;\n  -ms-grid-row-align: flex-end;\n  align-items: flex-end;\n}\n/*alignitemsstart */\n.alignItemsStart {\n  box-align: start;\n  -moz-box-align: start;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  -ms-grid-row-align: flex-start;\n  align-items: flex-start;\n}\n/*justifybetween */\n.justifyBetween {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  -moz-box-pack: justify;\n  justify-content: space-between;\n}\n/* justifyaround*/\n.justifyAround {\n  -webkit-justify-content: space-around;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n/* justifycenter*/\n.justifyCenter,\n.navlink {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n/* justifyend*/\n.justifyEnd {\n  -webkit-box-pack: end;\n  -moz-box-pack: end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n/* justifystart*/\n.justifyStart {\n  -webkit-box-pack: start;\n  -moz-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n/*wrap */\n.flexWrap {\n  -moz-box-wrap: wrap;\n  -webkit-box-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  -ms-flexbox-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.alignSelfStretch {\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n}\n.alignSelfStart {\n  -webkit-align-self: flex-start;\n  -ms-flex-item-align: start;\n  align-self: flex-start;\n}\n.alignSelfEnd {\n  -webkit-align-self: flex-end;\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n}\n.flexOne {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1;\n  -ms-flex: 1 1;\n  flex: 1 1;\n}\n.orange1,\n.orange1 > a {\n  background-color: #fbc924;\n}\n.orange2,\n.orange2 > a {\n  background-color: #f38b2f;\n}\n.orange3,\n.orange3 > a {\n  background-color: #ed712e;\n}\n.blue1,\n.blue1 > a {\n  background-color: #7cdbfd;\n}\n.blue2,\n.blue2 > a {\n  background-color: #7ad6ff;\n}\n.blue2,\n.blue2 > a {\n  background-color: #7ad6ff;\n}\n.green4,\n.green4 > a {\n  background-color: #afd91f;\n}\n.green4,\n.green4 > a {\n  background-color: #afd91f;\n}\n.green2,\n.green2 > a {\n  background-color: #587831;\n}\n.appBackGroundColor {\n  background-color: white;\n}\n.navlink {\n  display: flexbox;\n  display: -webkit-box;\n  /* OLD - iOS 6-, Safari 3.1-6, BB7 */\n  display: -ms-flexbox;\n  /* TWEENER - IE 10 */\n  display: -webkit-flex;\n  /* NEW - Safari 6.1+. iOS 7.1+, BB10 */\n  display: -moz-box;\n  display: flex;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  box-align: center;\n  -moz-box-align: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n  width: auto;\n  text-align: center;\n}\n.navlink a {\n  color: #39af78;\n  font-weight: bold;\n  font-size: 2rem;\n  transform: scale(1);\n  transition: 0.3s ease;\n}\n.navlink:hover a {\n  transform: scale(1.2);\n  color: white;\n}\n.navlink a.active {\n  color: white;\n}\n#main_header_title {\n  margin-bottom: 2rem;\n}\n",""])},419:function(n,e,t){(n.exports=t(32)(!1)).push([n.i,"/* Magnific Popup CSS */\n.mfp-bg {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1042;\n  overflow: hidden;\n  position: fixed;\n  background: #0b0b0b;\n  opacity: 0.8; }\n\n.mfp-wrap {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1043;\n  position: fixed;\n  outline: none !important;\n  -webkit-backface-visibility: hidden; }\n\n.mfp-container {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  padding: 0 8px;\n  box-sizing: border-box; }\n\n.mfp-container:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle; }\n\n.mfp-align-top .mfp-container:before {\n  display: none; }\n\n.mfp-content {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 auto;\n  text-align: left;\n  z-index: 1045; }\n\n.mfp-inline-holder .mfp-content,\n.mfp-ajax-holder .mfp-content {\n  width: 100%;\n  cursor: auto; }\n\n.mfp-ajax-cur {\n  cursor: progress; }\n\n.mfp-zoom-out-cur, .mfp-zoom-out-cur .mfp-image-holder .mfp-close {\n  cursor: -moz-zoom-out;\n  cursor: -webkit-zoom-out;\n  cursor: zoom-out; }\n\n.mfp-zoom {\n  cursor: pointer;\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n\n.mfp-auto-cursor .mfp-content {\n  cursor: auto; }\n\n.mfp-close,\n.mfp-arrow,\n.mfp-preloader,\n.mfp-counter {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none; }\n\n.mfp-loading.mfp-figure {\n  display: none; }\n\n.mfp-hide {\n  display: none !important; }\n\n.mfp-preloader {\n  color: #CCC;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  text-align: center;\n  margin-top: -0.8em;\n  left: 8px;\n  right: 8px;\n  z-index: 1044; }\n  .mfp-preloader a {\n    color: #CCC; }\n    .mfp-preloader a:hover {\n      color: #FFF; }\n\n.mfp-s-ready .mfp-preloader {\n  display: none; }\n\n.mfp-s-error .mfp-content {\n  display: none; }\n\nbutton.mfp-close,\nbutton.mfp-arrow {\n  overflow: visible;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n  display: block;\n  outline: none;\n  padding: 0;\n  z-index: 1046;\n  box-shadow: none;\n  touch-action: manipulation; }\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\n.mfp-close {\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-decoration: none;\n  text-align: center;\n  opacity: 0.65;\n  padding: 0 0 18px 10px;\n  color: #FFF;\n  font-style: normal;\n  font-size: 28px;\n  font-family: Arial, Baskerville, monospace; }\n  .mfp-close:hover,\n  .mfp-close:focus {\n    opacity: 1; }\n  .mfp-close:active {\n    top: 1px; }\n\n.mfp-close-btn-in .mfp-close {\n  color: #333; }\n\n.mfp-image-holder .mfp-close,\n.mfp-iframe-holder .mfp-close {\n  color: #FFF;\n  right: -6px;\n  text-align: right;\n  padding-right: 6px;\n  width: 100%; }\n\n.mfp-counter {\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #CCC;\n  font-size: 12px;\n  line-height: 18px;\n  white-space: nowrap; }\n\n.mfp-arrow {\n  position: absolute;\n  opacity: 0.65;\n  margin: 0;\n  top: 50%;\n  margin-top: -55px;\n  padding: 0;\n  width: 90px;\n  height: 110px;\n  -webkit-tap-highlight-color: transparent; }\n  .mfp-arrow:active {\n    margin-top: -54px; }\n  .mfp-arrow:hover,\n  .mfp-arrow:focus {\n    opacity: 1; }\n  .mfp-arrow:before,\n  .mfp-arrow:after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin-top: 35px;\n    margin-left: 35px;\n    border: medium inset transparent; }\n  .mfp-arrow:after {\n    border-top-width: 13px;\n    border-bottom-width: 13px;\n    top: 8px; }\n  .mfp-arrow:before {\n    border-top-width: 21px;\n    border-bottom-width: 21px;\n    opacity: 0.7; }\n\n.mfp-arrow-left {\n  left: 0; }\n  .mfp-arrow-left:after {\n    border-right: 17px solid #FFF;\n    margin-left: 31px; }\n  .mfp-arrow-left:before {\n    margin-left: 25px;\n    border-right: 27px solid #3F3F3F; }\n\n.mfp-arrow-right {\n  right: 0; }\n  .mfp-arrow-right:after {\n    border-left: 17px solid #FFF;\n    margin-left: 39px; }\n  .mfp-arrow-right:before {\n    border-left: 27px solid #3F3F3F; }\n\n.mfp-iframe-holder {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n  .mfp-iframe-holder .mfp-content {\n    line-height: 0;\n    width: 100%;\n    max-width: 900px; }\n  .mfp-iframe-holder .mfp-close {\n    top: -40px; }\n\n.mfp-iframe-scaler {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  padding-top: 56.25%; }\n  .mfp-iframe-scaler iframe {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n    background: #000; }\n\n/* Main image in popup */\nimg.mfp-img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  line-height: 0;\n  box-sizing: border-box;\n  padding: 40px 0 40px;\n  margin: 0 auto; }\n\n/* The shadow behind the image */\n.mfp-figure {\n  line-height: 0; }\n  .mfp-figure:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 40px;\n    bottom: 40px;\n    display: block;\n    right: 0;\n    width: auto;\n    height: auto;\n    z-index: -1;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n    background: #444; }\n  .mfp-figure small {\n    color: #BDBDBD;\n    display: block;\n    font-size: 12px;\n    line-height: 14px; }\n  .mfp-figure figure {\n    margin: 0; }\n\n.mfp-bottom-bar {\n  margin-top: -36px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  cursor: auto; }\n\n.mfp-title {\n  text-align: left;\n  line-height: 18px;\n  color: #F3F3F3;\n  word-wrap: break-word;\n  padding-right: 36px; }\n\n.mfp-image-holder .mfp-content {\n  max-width: 100%; }\n\n.mfp-gallery .mfp-image-holder .mfp-figure {\n  cursor: pointer; }\n\n@media screen and (max-width: 800px) and (orientation: landscape), screen and (max-height: 300px) {\n  /**\n       * Remove all paddings around the image on small screen\n       */\n  .mfp-img-mobile .mfp-image-holder {\n    padding-left: 0;\n    padding-right: 0; }\n  .mfp-img-mobile img.mfp-img {\n    padding: 0; }\n  .mfp-img-mobile .mfp-figure:after {\n    top: 0;\n    bottom: 0; }\n  .mfp-img-mobile .mfp-figure small {\n    display: inline;\n    margin-left: 5px; }\n  .mfp-img-mobile .mfp-bottom-bar {\n    background: rgba(0, 0, 0, 0.6);\n    bottom: 0;\n    margin: 0;\n    top: auto;\n    padding: 3px 5px;\n    position: fixed;\n    box-sizing: border-box; }\n    .mfp-img-mobile .mfp-bottom-bar:empty {\n      padding: 0; }\n  .mfp-img-mobile .mfp-counter {\n    right: 5px;\n    top: 3px; }\n  .mfp-img-mobile .mfp-close {\n    top: 0;\n    right: 0;\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    background: rgba(0, 0, 0, 0.6);\n    position: fixed;\n    text-align: center;\n    padding: 0; } }\n\n@media all and (max-width: 900px) {\n  .mfp-arrow {\n    -webkit-transform: scale(0.75);\n    transform: scale(0.75); }\n  .mfp-arrow-left {\n    -webkit-transform-origin: 0;\n    transform-origin: 0; }\n  .mfp-arrow-right {\n    -webkit-transform-origin: 100%;\n    transform-origin: 100%; }\n  .mfp-container {\n    padding-left: 6px;\n    padding-right: 6px; } }\n",""])}}]);