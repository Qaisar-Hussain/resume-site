"use strict";(globalThis.webpackChunkunsplash_web=globalThis.webpackChunkunsplash_web||[]).push([[7159],{9706:(e,t,n)=>{n.d(t,{L:()=>i});var o=n(57842);const i=n(74235).kr9(o.YP)},67159:(e,t,n)=>{n.d(t,{q:()=>_,Z:()=>J});var o={};n.r(o),n.d(o,{load_more_button_label:()=>A});var i=n(85893),r=n(41210),l=n(3735),s=n(30845),a=n(86706),c=n(91384),d=n(66132),h=n(70549),p=n(18711),u=n(88141),f=n(4094),I=n(43882),g=n(69184),m=n(57842),S=n(87976),b=n(33037),O=n(93416),v=n(15964),x=n(9435),P=n(74235),j=n(4991),R=n(55360),N=n(6671),y=n(9706),E=n(73505);n(60860),n(37105),n(27306);const A=()=>"Load more photos",q=e=>o,k=(0,E.G)(q);function w(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const _=()=>(0,i.jsx)(P.tJQ,{className:"HxaG2",children:(0,i.jsx)(P.tJQ,{className:"ATnvl",children:f.w6H(0,17).map((e=>(0,i.jsx)(P.tJQ,{className:"dycl5",children:(0,i.jsx)(P.tJQ,{className:"PwSsU O84oE"})},e)))})}),C=(0,O.DO)()({shouldRequireInfiniteScrollOptIn:!1,getNoContentEl:I.HP((()=>(0,i.jsx)(j.Z,{type:"photos"}))),getPlaceholderEl:I.HP((()=>(0,i.jsx)(_,{})))}),Z=S.Ue();class B extends P.wA2{constructor(){super(...arguments),w(this,"getInfiniteScrollSetting",(e=>{let{shouldRequireInfiniteScrollOptIn:t}=e;return t?Z.mk.OptInRequired({optedIn:!1}):Z.mk.Enabled})),w(this,"state",{infiniteScrollSetting:this.getInfiniteScrollSetting(this.props)}),w(this,"toggleInfiniteScrollOptIn",(()=>{const{infiniteScrollSetting:e}=this.state;Z.match({OptInRequired:e=>{let{optedIn:t}=e;const n=Z.mk.OptInRequired({optedIn:(0,b.ff)(t)});this.setState({infiniteScrollSetting:n})},[S._]:l.Q1})(e)})),w(this,"fetchDataAndBuildActions",(0,s.Z)((e=>(0,l.ls)(e,g.UI((0,l.ls)(u.Yq,h.N.traverseArray(h.dp),(e=>{let[t,n]=e;return[(0,d.VA)(n),d.aU.mk.HandleNextPhotoFeedPageResponse({feedId:this.props.feedId,photoIds:t.map((e=>e.id))})]}))))))),w(this,"createPhotoFeedIdContextValue",(0,s.Z)((e=>m.G(e))))}UNSAFE_componentWillReceiveProps(e){if(e.shouldRequireInfiniteScrollOptIn!==this.props.shouldRequireInfiniteScrollOptIn){const t=this.getInfiniteScrollSetting(e);this.setState({infiniteScrollSetting:t})}}render(){const{photoFeedOption:e,photosOption:t,children:n,getNoContentEl:o,getPlaceholderEl:l,renderBeneathLoadMoreButton:s,feedId:a,fetchPhotos:c,notifier$:d,intersectionObserverRoot:h,intersectionObserverRootMarginBottom:p,t:u}=this.props,{infiniteScrollSetting:f}=this.state,I=!1===Z.match({OptInRequired:e=>{let{optedIn:t}=e;return t},Enabled:()=>!0})(f);return(0,i.jsx)(y.L.Provider,{value:this.createPhotoFeedIdContextValue(a),children:(0,i.jsx)(R.f,{renderItems:n,feedItemsOption:t,feedStateOption:e,getScrollFooterEl:()=>(0,i.jsx)(P.tJQ,{className:"rx4AP",children:Z.match({OptInRequired:e=>{let{optedIn:t}=e;return t?(0,i.jsx)(N.Z,{}):(0,i.jsxs)(P.PRT,{children:[(0,i.jsx)(P.tJQ,{className:"gDCZZ",children:(0,i.jsx)(P.Jgb,{className:(0,x.yO)({type:x.L$.Outline}),onClick:this.toggleInfiniteScrollOptIn,type:"button",children:u.load_more_button_label()})}),s?.()]})},Enabled:()=>(0,i.jsx)(N.Z,{})})(f)}),getNoContentEl:o,getPlaceholderEl:l,shouldDisableInfiniteScroll:I,fetchDataAndBuildActions:this.fetchDataAndBuildActions(c),notifier$:d,intersectionObserverRoot:h,intersectionObserverRootMarginBottom:p},(0,r.Vv)(a))})}}const F=(0,p.O)()((()=>{const e=(0,v.XT)(),t=(0,v.u0)();return(n,o)=>({photoFeedOption:e(n,o.feedId),photosOption:t(n,o.feedId)})})),J=(0,l.zG)(B,(0,a.$j)(F),k,(e=>(0,c.b9)(e,C)))}}]);
//# sourceMappingURL=7159.9aafc468e677cb73326c.js.map