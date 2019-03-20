(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{290:function(e,t,n){e.exports=n(762)},600:function(e,t){},602:function(e,t){},761:function(e,t,n){},762:function(e,t,n){"use strict";n.r(t);var o=n(286),a=n.n(o),r=(n(757),n(289)),i=n.n(r),s=n(55),c=n(56),u=n(58),l=n(57),d=n(59),p=n(3),m=n.n(p),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=(0,this.props.getComponent)("BaseLayout",!0);return m.a.createElement("div",{className:"doc-wrapper"},this.renderSidebar(),m.a.createElement(e,null))}},{key:"renderSidebar",value:function(){var e=(0,this.props.getComponent)("Sidebar",!0);return"success"===this.props.specSelectors.loadingStatus()?m.a.createElement(e,this.props):null}}]),t}(m.a.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=(0,this.props.getComponent)("SidebarItem",!0),n=this.props.bunqSelectors.getSidebarEndpoints();return m.a.createElement("div",{className:"sidebar"},m.a.createElement("a",{href:"https://www.bunq.com",className:"sidebar-logo-container"},m.a.createElement("span",{className:"sidebar-logo"})),m.a.createElement("h3",{className:"sidebar-title"},"TOPICS"),m.a.createElement("ul",{className:"sidebar-list"},t.topics.map(function(t,n){return m.a.createElement(e,{key:n,tag:t.tag,name:t.name})})),m.a.createElement("h3",{className:"sidebar-title"},"RESOURCES"),m.a.createElement("ul",{className:"sidebar-list"},n.map(function(t,n){return m.a.createElement(e,{key:n,tag:t,name:t,isApiEndpoint:!0})})))}}]),t}(m.a.Component);h.topics=[{tag:"introduction",name:"Introduction"},{tag:"oauth",name:"OAuth"},{tag:"authentication",name:"Authentication"},{tag:"psd2",name:"PSD2 service provider"},{tag:"signing",name:"Signing"},{tag:"headers",name:"Headers"},{tag:"errors",name:"Errors"},{tag:"api-conventions",name:"API Conventions"},{tag:"callbacks",name:"Callbacks"},{tag:"pagination",name:"Pagination"},{tag:"moving-to-production",name:"Moving to Production"},{tag:"android-emulator",name:"Android Emulator"},{tag:"quickstart-opening-a-session",name:"Quickstart: Opening a Session"},{tag:"quickstart-payment-request",name:"Quickstart: Payment Request"},{tag:"quickstart-create-a-tab-payment",name:"Quickstart: Create a Tab payment"}];var f=h,w=n(174),v=n.n(w),y=function(e){function t(e){var n;Object(s.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this,e));var o=e.tag,a=e.name,r=e.isApiEndpoint;return n.state={tag:o,hash:"#/".concat(o),name:a,isApiEndpoint:r||!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"scrollToOperation",value:function(e){var t;e.preventDefault(),window.history.pushState(null,null,this.state.hash),t=this.state.isApiEndpoint?"#operations-tag-".concat(this.state.tag):"#topic-".concat(this.state.tag),window.setTimeout(function(){var e=document.querySelector(".swagger-ui"),n=document.querySelector(t);n&&v.a.createScroller(e).to(n.parentElement)},200)}},{key:"render",value:function(){var e=this;return m.a.createElement("li",null,m.a.createElement("a",{href:this.state.hash,onClick:function(t){return e.scrollToOperation(t)}},this.state.name))}},{key:"componentDidUpdate",value:function(){this.state.isApiEndpoint||this.props.bunqSelectors.initializeScrollToTopic(this.state.tag)}}]),t}(m.a.Component),b={updateSidebarEndpoints:function(e){var t=[];if(e.tags){var n=!0,o=!1,a=void 0;try{for(var r,i=e.tags[Symbol.iterator]();!(n=(r=i.next()).done);n=!0){var s=r.value;t.push(s.name)}}catch(c){o=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}}return{type:"BUNQ_UPDATE_SIDEBAR_ENDPOINTS",payload:t}},updateApiSpecification:function(e,t){return function(n){return t.bunqActions.updateSidebarEndpoints(JSON.parse(n)),e(n)}},readyToScrollSupportLegacyUrls:function(e,t){return function(n,o){var a=t.layoutSelectors.getScrollToKey();a&&"operations"===(a=a.toJS())[0]&&a[1]===n[1]&&e(a,o),e(n,o)}}},S={updateSidebarEndpoints:function(e,t){return e.set("tags",t.payload)}},E={getSidebarEndpoints:function(e){return e.get("tags")||[]},initializeScrollToTopic:function(e,t){return function(e){var n=document.querySelector("#topic-".concat(t));n&&e.layoutActions.readyToScroll(["topic",t],n.parentElement)}},getIsShownKeyFromUrlHashArray:function(e,t){return function(t,n){var o=e(n);if("operations-tag"===o[0]){var a=!0,r=!1,i=void 0;try{for(var s,c=f.topics[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){if(s.value.tag===o[1])return["topic",o[1]]}}catch(u){r=!0,i=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}}return o}}},k=function(){return{components:{BunqLayout:g,Sidebar:f,SidebarItem:y},statePlugins:{bunq:{actions:{updateSidebarEndpoints:b.updateSidebarEndpoints},reducers:{BUNQ_UPDATE_SIDEBAR_ENDPOINTS:S.updateSidebarEndpoints},selectors:{getSidebarEndpoints:E.getSidebarEndpoints,initializeScrollToTopic:E.initializeScrollToTopic}},layout:{wrapActions:{readyToScroll:b.readyToScrollSupportLegacyUrls},wrapSelectors:{isShownKeyFromUrlHashArray:E.getIsShownKeyFromUrlHashArray}},spec:{wrapActions:{updateSpec:b.updateApiSpecification}}}}},O=function(){return{statePlugins:{spec:{wrapSelectors:{allowTryItOutFor:function(){return function(){return!1}}}}}}};function T(){!function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_GOOGLE_TAG_MANAGER_CONTAINER_ID;e&&function(e,t,n,o,a){e[o]=e[o]||[],e[o].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var r=t.getElementsByTagName(n)[0],i=t.createElement(n);i.async=!0,i.src="https://www.googletagmanager.com/gtm.js?id="+a,r.parentNode.insertBefore(i,r)}(window,document,"script","dataLayer",e)}(),window.removeEventListener("scroll",T),window.removeEventListener("keydown",T),window.removeEventListener("mousedown",T),window.removeEventListener("touchstart",T)}var A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(760),n(761);i.a.config(),a()({url:"https://raw.githubusercontent.com/bunq/doc/master/swagger.json",dom_id:"#root",deepLinking:!0,layout:"BunqLayout",plugins:[k,O]}),window.addEventListener("load",function(){var e=!0;window.cookieconsent.initialise({position:"bottom",content:{message:"We use cookies when you continue to use our website.",dismiss:"got it!",link:"Learn more",href:"https://www.bunq.com/privacy"},container:document.querySelector(".react-root"),onInitialise:function(){this.hasConsented()&&(T(),e=!1)}}),window.cookieconsent.hasInitialised&&e&&(window.addEventListener("scroll",T),window.addEventListener("keydown",T),window.addEventListener("mousedown",T),window.addEventListener("touchstart",T))}),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");A?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):N(e)})}}()}},[[290,1,2]]]);
//# sourceMappingURL=main.ad9b50a5.chunk.js.map