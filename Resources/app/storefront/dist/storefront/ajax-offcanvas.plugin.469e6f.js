"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["ajax-offcanvas.plugin"],{7:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(9062),a=s(3107),i=s(2363);let r=null;class o extends n.Z{static open(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"left",i=!(arguments.length>4)||void 0===arguments[4]||arguments[4],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:n.Z.REMOVE_OFF_CANVAS_DELAY(),o=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"";if(!e)throw Error("A url must be given!");n.r._removeExistingOffCanvas();let c=n.r._createOffCanvas(a,o,l,i);this.setContent(e,t,s,i,r),n.r._openOffcanvas(c)}static setContent(e,t,s,n,l){let c=new a.Z;super.setContent('<div class="offcanvas-body">'.concat(i.Z.getTemplate(),"</div>"),n,l),r&&r.abort();let d=e=>{super.setContent(e,n,l),"function"==typeof s&&s(e)};r=t?c.post(e,t,o.executeCallback.bind(this,d)):c.get(e,o.executeCallback.bind(this,d))}static executeCallback(e,t){"function"==typeof e&&e(t),window.PluginManager.initializePlugins()}}},9062:(e,t,s)=>{s.d(t,{Z:()=>c,r:()=>l});var n=s(5206),a=s(9138),i=s(3266);let r="offcanvas";class o{open(e,t,s,n,a,i,r){this._removeExistingOffCanvas();let o=this._createOffCanvas(s,i,r,n);this.setContent(e,n,a),this._openOffcanvas(o,t)}setContent(e,t){let s=this.getOffCanvas();s[0]&&(s[0].innerHTML=e,this._registerEvents(t))}setAdditionalClassName(e){this.getOffCanvas()[0].classList.add(e)}getOffCanvas(){return document.querySelectorAll(".".concat(r))}close(e){let t=this.getOffCanvas();i.Z.iterate(t,e=>{bootstrap.Offcanvas.getInstance(e).hide()}),setTimeout(()=>{this.$emitter.publish("onCloseOffcanvas",{offCanvasContent:t})},e)}goBackInHistory(){window.history.back()}exists(){return this.getOffCanvas().length>0}_openOffcanvas(e,t){window.focusHandler.saveFocusState("offcanvas"),o.bsOffcanvas.show(),window.history.pushState("offcanvas-open",""),"function"==typeof t&&t()}_registerEvents(e){let t=n.Z.isTouchDevice()?"touchend":"click",s=this.getOffCanvas();i.Z.iterate(s,t=>{let n=()=>{setTimeout(()=>{t.remove(),window.focusHandler.resumeFocusState("offcanvas"),this.$emitter.publish("onCloseOffcanvas",{offCanvasContent:s})},e),t.removeEventListener("hide.bs.offcanvas",n)};t.addEventListener("hide.bs.offcanvas",n)}),window.addEventListener("popstate",this.close.bind(this,e),{once:!0});let a=document.querySelectorAll(".".concat("js-offcanvas-close"));i.Z.iterate(a,s=>s.addEventListener(t,this.close.bind(this,e)))}_removeExistingOffCanvas(){o.bsOffcanvas=null;let e=this.getOffCanvas();return i.Z.iterate(e,e=>e.remove())}_getPositionClass(e){return"left"===e?"offcanvas-start":"right"===e?"offcanvas-end":"offcanvas-".concat(e)}_createOffCanvas(e,t,s,n){let a=document.createElement("div");if(a.classList.add(r),a.classList.add(this._getPositionClass(e)),a.setAttribute("tabindex","-1"),!0===t&&a.classList.add("is-fullwidth"),s){let e=typeof s;if("string"===e)a.classList.add(s);else if(Array.isArray(s))s.forEach(e=>{a.classList.add(e)});else throw Error('The type "'.concat(e,'" is not supported. Please pass an array or a string.'))}return document.body.appendChild(a),o.bsOffcanvas=new bootstrap.Offcanvas(a,{backdrop:!1!==n||"static"}),a}constructor(){this.$emitter=new a.Z}}let l=Object.freeze(new o);class c{static open(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"left",n=!(arguments.length>3)||void 0===arguments[3]||arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:350,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";l.open(e,t,s,n,a,i,r)}static setContent(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:350;l.setContent(e,t,s)}static setAdditionalClassName(e){l.setAdditionalClassName(e)}static close(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:350;l.close(e)}static exists(){return l.exists()}static getOffCanvas(){return l.getOffCanvas()}static REMOVE_OFF_CANVAS_DELAY(){return 350}}},3107:(e,t,s)=>{s.d(t,{Z:()=>n});class n{get(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",n=this._createPreparedRequest("GET",e,s);return this._sendRequest(n,null,t)}post(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let a=this._createPreparedRequest("POST",e,n);return this._sendRequest(a,t,s)}delete(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let a=this._createPreparedRequest("DELETE",e,n);return this._sendRequest(a,t,s)}patch(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let a=this._createPreparedRequest("PATCH",e,n);return this._sendRequest(a,t,s)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(e){this._errorHandlingInternal=e}_registerOnLoaded(e,t){t&&(!0===this._errorHandlingInternal?(e.addEventListener("load",()=>{t(e.responseText,e)}),e.addEventListener("abort",()=>{console.warn("the request to ".concat(e.responseURL," was aborted"))}),e.addEventListener("error",()=>{console.warn("the request to ".concat(e.responseURL," failed with status ").concat(e.status))}),e.addEventListener("timeout",()=>{console.warn("the request to ".concat(e.responseURL," timed out"))})):e.addEventListener("loadend",()=>{t(e.responseText,e)}))}_sendRequest(e,t,s){return this._registerOnLoaded(e,s),e.send(t),e}_getContentType(e,t){return e instanceof FormData&&(t=!1),t}_createPreparedRequest(e,t,s){return this._request=new XMLHttpRequest,this._request.open(e,t),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),s&&this._request.setRequestHeader("Content-type",s),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}},3327:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(2363);let a="element-loader-backdrop";class i extends n.Z{static create(e){e.classList.add("has-element-loader"),i.exists(e)||(i.appendLoader(e),setTimeout(()=>{let t=e.querySelector(".".concat(a));t&&t.classList.add("element-loader-backdrop-open")},1))}static remove(e){e.classList.remove("has-element-loader");let t=e.querySelector(".".concat(a));t&&t.remove()}static exists(e){return e.querySelectorAll(".".concat(a)).length>0}static getTemplate(){return'\n        <div class="'.concat(a,'">\n            <div class="loader" role="status">\n                <span class="').concat("visually-hidden",'">Loading...</span>\n            </div>\n        </div>\n        ')}static appendLoader(e){e.insertAdjacentHTML("beforeend",i.getTemplate())}}},2363:(e,t,s)=>{s.d(t,{L:()=>i,Z:()=>r});var n=s(3266);let a="loader",i={BEFORE:"before",AFTER:"after",INNER:"inner"};class r{create(){if(!this.exists()){if(this.position===i.INNER){this.parent.innerHTML=r.getTemplate();return}this.parent.insertAdjacentHTML(this._getPosition(),r.getTemplate())}}remove(){let e=this.parent.querySelectorAll(".".concat(a));n.Z.iterate(e,e=>e.remove())}exists(){return this.parent.querySelectorAll(".".concat(a)).length>0}_getPosition(){return this.position===i.BEFORE?"afterbegin":"beforeend"}static getTemplate(){return'<div class="'.concat(a,'" role="status">\n                    <span class="').concat("visually-hidden",'">Loading...</span>\n                </div>')}static SELECTOR_CLASS(){return a}constructor(e,t=i.BEFORE){this.parent=e instanceof Element?e:document.body.querySelector(e),this.position=t}}}}]);