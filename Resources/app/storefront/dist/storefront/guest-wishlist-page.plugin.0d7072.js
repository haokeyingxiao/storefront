"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["guest-wishlist-page.plugin"],{5539:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var r=s(9568),n=s(3107),i=s(3327);class a extends r.Z{init(){i.Z.create(this.el),this.httpClient=new n.Z,this._getWishlistStorage(),this._loadProductListForGuest()}_getWishlistStorage(){let e=document.querySelector("#wishlist-basket");e&&(this._wishlistStorage=window.PluginManager.getPluginInstanceFromElement(e,"WishlistStorage"),this._wishlistStorage.load())}_loadProductListForGuest(){let e=Object.entries(this._wishlistStorage.getProducts()).map(e=>{let[t,s]=e;return{productId:t,dateTime:new Date(s).getTime()}}).sort((e,t)=>t.dateTime-e.dateTime).map(e=>e.productId);this.httpClient.post(this.options.pageletRouter.path,JSON.stringify({productIds:e}),t=>{this.el.innerHTML=t;let s=this.el.querySelectorAll("form.product-wishlist-form");s&&s.length===e.length||this._cleanInvalidGuestProductIds(e,s),s&&s.length>0&&s.forEach(e=>{this._removeGuestProductFormHandler(e)}),i.Z.remove(this.el),window.PluginManager.initializePlugins()})}_removeGuestProductFormHandler(e){e.addEventListener("submit",t=>{t.preventDefault();let s=e.getAttribute("action").split("/"),r=s[s.length-1];if(r){let t=e.closest(".cms-listing-col");this._wishlistStorage.remove(r),t.remove(),0===this._wishlistStorage.getCurrentCounter()&&this._loadProductListForGuest()}})}_cleanInvalidGuestProductIds(e,t){let s=[];t.forEach(e=>{let t=e.getAttribute("action").split("/"),r=t[t.length-1];s.push(r)}),e.forEach(e=>{-1===s.indexOf(e)&&this._wishlistStorage.remove(e)})}}},3107:(e,t,s)=>{s.d(t,{Z:()=>r});class r{get(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",r=this._createPreparedRequest("GET",e,s);return this._sendRequest(r,null,t)}post(e,t,s){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";r=this._getContentType(t,r);let n=this._createPreparedRequest("POST",e,r);return this._sendRequest(n,t,s)}delete(e,t,s){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";r=this._getContentType(t,r);let n=this._createPreparedRequest("DELETE",e,r);return this._sendRequest(n,t,s)}patch(e,t,s){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";r=this._getContentType(t,r);let n=this._createPreparedRequest("PATCH",e,r);return this._sendRequest(n,t,s)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(e){this._errorHandlingInternal=e}_registerOnLoaded(e,t){t&&(!0===this._errorHandlingInternal?(e.addEventListener("load",()=>{t(e.responseText,e)}),e.addEventListener("abort",()=>{console.warn("the request to ".concat(e.responseURL," was aborted"))}),e.addEventListener("error",()=>{console.warn("the request to ".concat(e.responseURL," failed with status ").concat(e.status))}),e.addEventListener("timeout",()=>{console.warn("the request to ".concat(e.responseURL," timed out"))})):e.addEventListener("loadend",()=>{t(e.responseText,e)}))}_sendRequest(e,t,s){return this._registerOnLoaded(e,s),e.send(t),e}_getContentType(e,t){return e instanceof FormData&&(t=!1),t}_createPreparedRequest(e,t,s){return this._request=new XMLHttpRequest,this._request.open(e,t),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),s&&this._request.setRequestHeader("Content-type",s),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}},3327:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(2363);let n="element-loader-backdrop";class i extends r.Z{static create(e){e.classList.add("has-element-loader"),i.exists(e)||(i.appendLoader(e),setTimeout(()=>{let t=e.querySelector(".".concat(n));t&&t.classList.add("element-loader-backdrop-open")},1))}static remove(e){e.classList.remove("has-element-loader");let t=e.querySelector(".".concat(n));t&&t.remove()}static exists(e){return e.querySelectorAll(".".concat(n)).length>0}static getTemplate(){return'\n        <div class="'.concat(n,'">\n            <div class="loader" role="status">\n                <span class="').concat("visually-hidden",'">Loading...</span>\n            </div>\n        </div>\n        ')}static appendLoader(e){e.insertAdjacentHTML("beforeend",i.getTemplate())}}},2363:(e,t,s)=>{s.d(t,{L:()=>i,Z:()=>a});var r=s(3266);let n="loader",i={BEFORE:"before",AFTER:"after",INNER:"inner"};class a{create(){if(!this.exists()){if(this.position===i.INNER){this.parent.innerHTML=a.getTemplate();return}this.parent.insertAdjacentHTML(this._getPosition(),a.getTemplate())}}remove(){let e=this.parent.querySelectorAll(".".concat(n));r.Z.iterate(e,e=>e.remove())}exists(){return this.parent.querySelectorAll(".".concat(n)).length>0}_getPosition(){return this.position===i.BEFORE?"afterbegin":"beforeend"}static getTemplate(){return'<div class="'.concat(n,'" role="status">\n                    <span class="').concat("visually-hidden",'">Loading...</span>\n                </div>')}static SELECTOR_CLASS(){return n}constructor(e,t=i.BEFORE){this.parent=e instanceof Element?e:document.body.querySelector(e),this.position=t}}}}]);