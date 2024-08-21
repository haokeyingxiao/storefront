"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["plugin_wishlist_persist-wishlist_plugin_js"],{7642:(t,e,s)=>{s.d(e,{Z:()=>n});var r=s(1374);class o{setItem(t,e){return this._storage[t]=e}getItem(t){return Object.prototype.hasOwnProperty.call(this._storage,t)?this._storage[t]:null}removeItem(t){return delete this._storage[t]}key(t){return Object.values(this._storage)[t]||null}clear(){return this._storage={}}constructor(){this._storage={}}}class i{_chooseStorage(){return i._isSupported(window.localStorage)?this._storage=window.localStorage:i._isSupported(window.sessionStorage)?this._storage=window.sessionStorage:r.Z.isSupported()?this._storage=r.Z:this._storage=new o}static _isSupported(t){try{let e="__storage_test";return t.setItem(e,"1"),t.removeItem(e),!0}catch(t){return!1}}_validateStorage(){if("function"!=typeof this._storage.setItem)throw Error('The storage must have a "setItem" function');if("function"!=typeof this._storage.getItem)throw Error('The storage must have a "getItem" function');if("function"!=typeof this._storage.removeItem)throw Error('The storage must have a "removeItem" function');if("function"!=typeof this._storage.key)throw Error('The storage must have a "key" function');if("function"!=typeof this._storage.clear)throw Error('The storage must have a "clear" function')}getStorage(){return this._storage}constructor(){this._storage=null,this._chooseStorage(),this._validateStorage()}}let n=Object.freeze(new i).getStorage()},609:(t,e,s)=>{s.d(e,{Z:()=>o});var r=s(9568);class o extends r.Z{init(){this.products={}}load(){this.$emitter.publish("Wishlist/onProductsLoaded",{products:this.products})}has(t){return!!this.products[t]}add(t){this.products[t]=new Date().toISOString(),this.$emitter.publish("Wishlist/onProductAdded",{products:this.products,productId:t})}remove(t){delete this.products[t],this.$emitter.publish("Wishlist/onProductRemoved",{products:this.products,productId:t})}getCurrentCounter(){return this.products?Object.keys(this.products).length:0}getProducts(){return this.products}}},6299:(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var r=s(609),o=s(7642),i=s(4049),n=s(3107);class a extends r.Z{init(){super.init(),this.httpClient=new n.Z,this.httpClient.setErrorHandlingInternal(!0)}load(){this._merge(()=>{this.httpClient.get(this.options.listPath,t=>{this.products=JSON.parse(t),super.load()})})}add(t,e){this.httpClient.post(e.path,null,e=>{if(JSON.parse(e).success){super.add(t);return}console.warn("unable to add product to wishlist")})}remove(t,e){this.httpClient.post(e.path,null,e=>{let s=JSON.parse(e);if(Object.prototype.hasOwnProperty.call(s,"success")){!1===s.success&&console.warn("unable to remove product to wishlist"),super.remove(t);return}})}_merge(t){this.storage=o.Z;let e="wishlist-"+(window.salesChannelId||""),s=JSON.parse(this.storage.getItem(e));s&&this.httpClient.post(this.options.mergePath,JSON.stringify({productIds:Object.keys(s)}),r=>{if(!r)throw Error("Unable to merge product wishlist from anonymous user");this.$emitter.publish("Wishlist/onProductMerged",{products:s}),this.storage.removeItem(e),this._block=i.Z.querySelector(document,".flashbags"),this._block.innerHTML=r,this._pagelet(),t()}),t()}_pagelet(){this.httpClient.post(this.options.pageletPath,"",t=>{t&&(this._block=i.Z.querySelector(document,".cms-listing-row"),this._block.innerHTML=t)})}}},3107:(t,e,s)=>{s.d(e,{Z:()=>r});class r{get(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",r=this._createPreparedRequest("GET",t,s);return this._sendRequest(r,null,e)}post(t,e,s){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";r=this._getContentType(e,r);let o=this._createPreparedRequest("POST",t,r);return this._sendRequest(o,e,s)}delete(t,e,s){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";r=this._getContentType(e,r);let o=this._createPreparedRequest("DELETE",t,r);return this._sendRequest(o,e,s)}patch(t,e,s){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";r=this._getContentType(e,r);let o=this._createPreparedRequest("PATCH",t,r);return this._sendRequest(o,e,s)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(t){this._errorHandlingInternal=t}_registerOnLoaded(t,e){e&&(!0===this._errorHandlingInternal?(t.addEventListener("load",()=>{e(t.responseText,t)}),t.addEventListener("abort",()=>{console.warn("the request to ".concat(t.responseURL," was aborted"))}),t.addEventListener("error",()=>{console.warn("the request to ".concat(t.responseURL," failed with status ").concat(t.status))}),t.addEventListener("timeout",()=>{console.warn("the request to ".concat(t.responseURL," timed out"))})):t.addEventListener("loadend",()=>{e(t.responseText,t)}))}_sendRequest(t,e,s){return this._registerOnLoaded(t,s),t.send(e),t}_getContentType(t,e){return t instanceof FormData&&(e=!1),e}_createPreparedRequest(t,e,s){return this._request=new XMLHttpRequest,this._request.open(t,e),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),s&&this._request.setRequestHeader("Content-type",s),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}}}]);