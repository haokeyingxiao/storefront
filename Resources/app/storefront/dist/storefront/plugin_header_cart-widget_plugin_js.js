"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["plugin_header_cart-widget_plugin_js"],{7642:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(1374);class o{setItem(e,t){return this._storage[e]=t}getItem(e){return Object.prototype.hasOwnProperty.call(this._storage,e)?this._storage[e]:null}removeItem(e){return delete this._storage[e]}key(e){return Object.values(this._storage)[e]||null}clear(){return this._storage={}}constructor(){this._storage={}}}class n{_chooseStorage(){return n._isSupported(window.localStorage)?this._storage=window.localStorage:n._isSupported(window.sessionStorage)?this._storage=window.sessionStorage:s.Z.isSupported()?this._storage=s.Z:this._storage=new o}static _isSupported(e){try{let t="__storage_test";return e.setItem(t,"1"),e.removeItem(t),!0}catch(e){return!1}}_validateStorage(){if("function"!=typeof this._storage.setItem)throw Error('The storage must have a "setItem" function');if("function"!=typeof this._storage.getItem)throw Error('The storage must have a "getItem" function');if("function"!=typeof this._storage.removeItem)throw Error('The storage must have a "removeItem" function');if("function"!=typeof this._storage.key)throw Error('The storage must have a "key" function');if("function"!=typeof this._storage.clear)throw Error('The storage must have a "clear" function')}getStorage(){return this._storage}constructor(){this._storage=null,this._chooseStorage(),this._validateStorage()}}let i=Object.freeze(new n).getStorage()},4813:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var s=r(9568),o=r(3107),n=r(7642);class i extends s.Z{init(){this._client=new o.Z,this.insertStoredContent(),this.fetch()}insertStoredContent(){n.Z.setItem(this.options.emptyCartWidgetStorageKey,this.el.innerHTML);let e=n.Z.getItem(this.options.cartWidgetStorageKey);e&&(this.el.innerHTML=e),this.$emitter.publish("insertStoredContent")}fetch(){this._client.get(window.router["frontend.checkout.info"],(e,t)=>{if(!(t.status>=500)){if(204===t.status){n.Z.removeItem(this.options.cartWidgetStorageKey);let e=n.Z.getItem(this.options.emptyCartWidgetStorageKey);e&&(this.el.innerHTML=e);return}n.Z.setItem(this.options.cartWidgetStorageKey,e),this.el.innerHTML=e,this.$emitter.publish("fetch",{content:e})}})}}i.options={cartWidgetStorageKey:"cart-widget-template",emptyCartWidgetStorageKey:"empty-cart-widget"}},3107:(e,t,r)=>{r.d(t,{Z:()=>s});class s{get(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",s=this._createPreparedRequest("GET",e,r);return this._sendRequest(s,null,t)}post(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";s=this._getContentType(t,s);let o=this._createPreparedRequest("POST",e,s);return this._sendRequest(o,t,r)}delete(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";s=this._getContentType(t,s);let o=this._createPreparedRequest("DELETE",e,s);return this._sendRequest(o,t,r)}patch(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";s=this._getContentType(t,s);let o=this._createPreparedRequest("PATCH",e,s);return this._sendRequest(o,t,r)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(e){this._errorHandlingInternal=e}_registerOnLoaded(e,t){t&&(!0===this._errorHandlingInternal?(e.addEventListener("load",()=>{t(e.responseText,e)}),e.addEventListener("abort",()=>{console.warn("the request to ".concat(e.responseURL," was aborted"))}),e.addEventListener("error",()=>{console.warn("the request to ".concat(e.responseURL," failed with status ").concat(e.status))}),e.addEventListener("timeout",()=>{console.warn("the request to ".concat(e.responseURL," timed out"))})):e.addEventListener("loadend",()=>{t(e.responseText,e)}))}_sendRequest(e,t,r){return this._registerOnLoaded(e,r),e.send(t),e}_getContentType(e,t){return e instanceof FormData&&(t=!1),t}_createPreparedRequest(e,t,r){return this._request=new XMLHttpRequest,this._request.open(e,t),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),r&&this._request.setRequestHeader("Content-type",r),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}}}]);