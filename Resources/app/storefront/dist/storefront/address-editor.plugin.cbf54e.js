"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["address-editor.plugin"],{2931:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var n=s(9568),r=s(3107),o=s(5965),i=s(5878),a=s(3019),l=s(4049),d=s(3266);class c extends n.Z{init(){if(!this.options.changeShipping&&!this.options.changeBilling)throw Error('One or both of the options "changeShipping" or "changeShipping" has to be true!');this._client=new r.Z,this._registerEvents()}_registerEvents(){let e=this._getModal.bind(this);this.el.removeEventListener("click",e),this.el.addEventListener("click",e)}_getModal(e){e.preventDefault();try{this._btnLoader=new o.Z(e.currentTarget),this._btnLoader.create()}catch(e){console.warn("[AddressEditorPlugin] Unable to create loading indicator on button",e)}let t=this._getRequestData();this.$emitter.publish("beforeGetModal"),this._client.abort(),this._client.post(this.options.url,JSON.stringify(t),e=>this._openModal(e))}_getRequestData(){return{id:this.options.addressId,changeableAddresses:{changeShipping:this.options.changeShipping,changeBilling:this.options.changeBilling}}}_openModal(e){let t=new a.Z(e);window.focusHandler.saveFocusState("address-editor"),t.open(this._onOpen.bind(this,t),0);let s=t.getModal();s.addEventListener("hidden.bs.modal",()=>{window.focusHandler.resumeFocusState("address-editor")}),s.classList.add(this.options.editorModalClass)}_onOpen(e){try{this._btnLoader.remove()}catch(e){console.warn("[AddressEditorPlugin] Unable to remove loading indicator from button",e)}window.PluginManager.initializePlugins().then(()=>{this._registerModalEvents(e)}),this.$emitter.publish("onOpen",{pseudoModal:e})}_registerModalEvents(e){this._registerCollapseCallback(e),this._registerAjaxSubmitCallback(e),this.$emitter.publish("registerModalEvents",{pseudoModal:e})}_registerCollapseCallback(e){let t=e.getModal(),s=l.Z.querySelectorAll(t,'[data-bs-toggle="collapse"]',!1);s&&d.Z.iterate(s,s=>{let n=l.Z.getDataAttribute(s,"data-bs-target"),r=l.Z.querySelector(t,n),o=l.Z.getDataAttribute(r,"data-bs-parent");l.Z.querySelector(t,o).addEventListener("hidden.bs.collapse",()=>{e.updatePosition(),this.$emitter.publish("collapseHidden",{pseudoModal:e})})}),this.$emitter.publish("registerCollapseCallback",{pseudoModal:e})}_registerAjaxSubmitCallback(e){let t=e.getModal(),s=l.Z.querySelectorAll(t,"[data-form-ajax-submit]",!1);s&&d.Z.iterate(s,s=>{let n=window.PluginManager.getPluginInstanceFromElement(s,"FormAjaxSubmit");n&&n.addCallback(()=>{if(this._registerAjaxSubmitCallback(e),!l.Z.querySelectorAll(t,"".concat(n.options.replaceSelectors[0]," .is-invalid"),!1)&&s.classList.contains(this.options.closeEditorClass)){if(e.close(),i.Z.create(),"function"==typeof URL){let e=new URL(window.location.href);e.searchParams.delete("redirected"),window.location.assign(e.toString())}else window.location.reload()}})}),this.$emitter.publish("registerAjaxSubmitCallback",{pseudoModal:e})}}c.options={url:window.router["frontend.account.addressbook"],addressId:!1,changeShipping:!1,changeBilling:!1,editorModalClass:"address-editor-modal",closeEditorClass:"js-close-address-editor"}},3107:(e,t,s)=>{s.d(t,{Z:()=>n});class n{get(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",n=this._createPreparedRequest("GET",e,s);return this._sendRequest(n,null,t)}post(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let r=this._createPreparedRequest("POST",e,n);return this._sendRequest(r,t,s)}delete(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let r=this._createPreparedRequest("DELETE",e,n);return this._sendRequest(r,t,s)}patch(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let r=this._createPreparedRequest("PATCH",e,n);return this._sendRequest(r,t,s)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(e){this._errorHandlingInternal=e}_registerOnLoaded(e,t){t&&(!0===this._errorHandlingInternal?(e.addEventListener("load",()=>{t(e.responseText,e)}),e.addEventListener("abort",()=>{console.warn("the request to ".concat(e.responseURL," was aborted"))}),e.addEventListener("error",()=>{console.warn("the request to ".concat(e.responseURL," failed with status ").concat(e.status))}),e.addEventListener("timeout",()=>{console.warn("the request to ".concat(e.responseURL," timed out"))})):e.addEventListener("loadend",()=>{t(e.responseText,e)}))}_sendRequest(e,t,s){return this._registerOnLoaded(e,s),e.send(t),e}_getContentType(e,t){return e instanceof FormData&&(t=!1),t}_createPreparedRequest(e,t,s){return this._request=new XMLHttpRequest,this._request.open(e,t),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),s&&this._request.setRequestHeader("Content-type",s),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}},5774:(e,t,s)=>{s.d(t,{ZP:()=>p,ar:()=>l});var n=s(5206),r=s(3266);let o="modal-backdrop",i="modal-backdrop-open",a="no-scroll",l=350,d={ON_CLICK:"backdrop/onclick"};class c{create(e){this._removeExistingBackdrops(),document.body.insertAdjacentHTML("beforeend",this._getTemplate());let t=document.body.lastChild;document.documentElement.classList.add(a),setTimeout(function(){t.classList.add(i),"function"==typeof e&&e()},75),this._dispatchEvents()}remove(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=this._getBackdrops();r.Z.iterate(t,e=>e.classList.remove(i)),setTimeout(this._removeExistingBackdrops.bind(this),e),document.documentElement.classList.remove(a)}_dispatchEvents(){let e=n.Z.isTouchDevice()?"touchstart":"click";document.addEventListener(e,function(e){e.target.classList.contains(o)&&document.dispatchEvent(new CustomEvent(d.ON_CLICK))})}_getBackdrops(){return document.querySelectorAll(".".concat(o))}_removeExistingBackdrops(){if(!1===this._exists())return;let e=this._getBackdrops();r.Z.iterate(e,e=>e.remove())}_exists(){return document.querySelectorAll(".".concat(o)).length>0}_getTemplate(){return'<div class="'.concat(o,'"></div>')}constructor(){return c.instance||(c.instance=this),c.instance}}let h=Object.freeze(new c);class p{static create(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;h.create(e)}static remove(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;h.remove(e)}static SELECTOR_CLASS(){return o}}},5965:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(2363);class r extends n.Z{create(){super.create(),this._isButtonElement()?this.parent.disabled=!0:this._isAnchorElement()&&this.parent.classList.add("disabled")}remove(){super.remove(),this._isButtonElement()?this.parent.disabled=!1:this._isAnchorElement()&&this.parent.classList.remove("disabled")}_isButtonElement(){return"button"===this.parent.tagName.toLowerCase()}_isAnchorElement(){return"a"===this.parent.tagName.toLowerCase()}constructor(e,t="before"){if(super(e,t),!this._isButtonElement()&&!this._isAnchorElement())throw Error("Parent element is not of type <button> or <a>")}}},2363:(e,t,s)=>{s.d(t,{L:()=>o,Z:()=>i});var n=s(3266);let r="loader",o={BEFORE:"before",AFTER:"after",INNER:"inner"};class i{create(){if(!this.exists()){if(this.position===o.INNER){this.parent.innerHTML=i.getTemplate();return}this.parent.insertAdjacentHTML(this._getPosition(),i.getTemplate())}}remove(){let e=this.parent.querySelectorAll(".".concat(r));n.Z.iterate(e,e=>e.remove())}exists(){return this.parent.querySelectorAll(".".concat(r)).length>0}_getPosition(){return this.position===o.BEFORE?"afterbegin":"beforeend"}static getTemplate(){return'<div class="'.concat(r,'" role="status">\n                    <span class="').concat("visually-hidden",'">Loading...</span>\n                </div>')}static SELECTOR_CLASS(){return r}constructor(e,t=o.BEFORE){this.parent=e instanceof Element?e:document.body.querySelector(e),this.position=t}}},5878:(e,t,s)=>{s.d(t,{Z:()=>a});var n=s(2363),r=s(5774);class o extends n.Z{create(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];!this.exists()&&e&&(r.ZP.create(),document.querySelector(".".concat(r.ZP.SELECTOR_CLASS())).insertAdjacentHTML("beforeend",n.Z.getTemplate()))}remove(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];super.remove(),e&&r.ZP.remove()}constructor(){super(document.body)}}let i=Object.freeze(new o);class a{static create(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];i.create(e)}static remove(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];i.remove(e)}}},3019:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(4049),r=s(5774);let o="js-pseudo-modal";class i{open(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.ar;this._hideExistingModal(),this._create(),setTimeout(this._open.bind(this,e),t)}close(){let e=this.getModal();this._modalInstance=bootstrap.Modal.getInstance(e),this._modalInstance.hide()}getModal(){return this._modal||this._create(),this._modal}updatePosition(){this._modalInstance.handleUpdate()}updateContent(e,t){this._content=e,this._setModalContent(e),this.updatePosition(),"function"==typeof t&&t.bind(this)()}_hideExistingModal(){try{let e=n.Z.querySelector(document,".".concat(o," .modal"),!1);if(!e)return;let t=bootstrap.Modal.getInstance(e);if(!t)return;t.hide()}catch(e){console.warn("[PseudoModalUtil] Unable to hide existing pseudo modal before opening pseudo modal: ".concat(e.message))}}_open(e){this.getModal(),this._modal.addEventListener("hidden.bs.modal",this._modalWrapper.remove),this._modal.addEventListener("shown.bs.modal",e),this._modalInstance.show()}_create(){this._modalMarkupEl=n.Z.querySelector(document,this._templateSelector),this._createModalWrapper(),this._modalWrapper.innerHTML=this._content,this._modal=this._createModalMarkup(),this._modalInstance=new bootstrap.Modal(this._modal,{backdrop:this._useBackdrop}),document.body.insertAdjacentElement("beforeend",this._modalWrapper)}_createModalWrapper(){this._modalWrapper=n.Z.querySelector(document,".".concat(o),!1),this._modalWrapper||(this._modalWrapper=document.createElement("div"),this._modalWrapper.classList.add(o))}_createModalMarkup(){let e=n.Z.querySelector(this._modalWrapper,".modal",!1);if(e)return e;let t=this._modalWrapper.innerHTML;return this._modalWrapper.innerHTML=this._modalMarkupEl.innerHTML,this._setModalContent(t),n.Z.querySelector(this._modalWrapper,".modal")}_setModalTitle(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{n.Z.querySelector(this._modalWrapper,this._templateTitleSelector).innerHTML=e}catch(e){}}_setModalContent(e){let t=n.Z.querySelector(this._modalWrapper,this._templateContentSelector);t.innerHTML=e;try{let e=n.Z.querySelector(t,this._templateTitleSelector);e&&(this._setModalTitle(e.innerHTML),e.parentNode.removeChild(e))}catch(e){}}constructor(e,t=!0,s=".".concat("js-pseudo-modal-template"),n=".".concat("js-pseudo-modal-template-content-element"),r=".".concat("js-pseudo-modal-template-title-element")){this._content=e,this._useBackdrop=t,this._templateSelector=s,this._templateContentSelector=n,this._templateTitleSelector=r}}}}]);