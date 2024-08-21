"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["plugin_forms_form-cms-handler_plugin_js"],{1407:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s(9568),i=s(3107);class r extends n.Z{init(){this._client=new i.Z,this._getButton(),this._getHiddenSubmit(),this._registerEvents(),this._getCmsBlock(),this._getConfirmationText()}sendAjaxFormSubmit(){let{_client:e,el:t,options:s}=this,n=new FormData(t);e.post(t.action,n,this._handleResponse.bind(this),s.contentType)}_registerEvents(){this.el.addEventListener("submit",this._handleSubmit.bind(this)),this._button&&(this._button.addEventListener("submit",this._handleSubmit.bind(this)),this._button.addEventListener("click",this._handleSubmit.bind(this)))}_getConfirmationText(){let e=this.el.querySelector('input[name="confirmationText"]');e&&(this._confirmationText=e.value)}_getButton(){this._button=this.el.querySelector("button")}_getCmsBlock(){this._block=this.el.closest(this.options.cmsBlock)}_getHiddenSubmit(){this._hiddenSubmit=this.el.querySelector(this.options.hiddenSubmitSelector)}_handleSubmit(e){e.preventDefault(),this.el.checkValidity()?this._submitForm():this._showValidation()}_showValidation(){this._hiddenSubmit.click()}_submitForm(){this.$emitter.publish("beforeSubmit"),this.sendAjaxFormSubmit(),this.el.reset()}_handleResponse(e){let t=JSON.parse(e);if(this.$emitter.publish("onFormResponse",e),t.length>0){let e=!0,s="";for(let n=0;n<t.length;n+=1)("danger"===t[n].type||"info"===t[n].type)&&(e=!1),s+=t[n].alert;this._createResponse(e,s)}else window.location.reload()}_createResponse(e,t){if(e)this._confirmationText&&(t=this._confirmationText),this._block.innerHTML='<div class="confirm-message">'.concat(t,"</div>");else{let e=this._block.querySelector(".confirm-alert");e&&e.remove();let s='<div class="confirm-alert">'.concat(t,"</div>");this._block.insertAdjacentHTML("beforeend",s)}this._block.scrollIntoView({behavior:"smooth",block:"end"})}}r.options={hiddenClass:"d-none",hiddenSubmitSelector:".submit--hidden",formContentSelector:".form-content",cmsBlock:".cms-block",contentType:"application/x-www-form-urlencoded"}},3107:(e,t,s)=>{s.d(t,{Z:()=>n});class n{get(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",n=this._createPreparedRequest("GET",e,s);return this._sendRequest(n,null,t)}post(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let i=this._createPreparedRequest("POST",e,n);return this._sendRequest(i,t,s)}delete(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let i=this._createPreparedRequest("DELETE",e,n);return this._sendRequest(i,t,s)}patch(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(t,n);let i=this._createPreparedRequest("PATCH",e,n);return this._sendRequest(i,t,s)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(e){this._errorHandlingInternal=e}_registerOnLoaded(e,t){t&&(!0===this._errorHandlingInternal?(e.addEventListener("load",()=>{t(e.responseText,e)}),e.addEventListener("abort",()=>{console.warn("the request to ".concat(e.responseURL," was aborted"))}),e.addEventListener("error",()=>{console.warn("the request to ".concat(e.responseURL," failed with status ").concat(e.status))}),e.addEventListener("timeout",()=>{console.warn("the request to ".concat(e.responseURL," timed out"))})):e.addEventListener("loadend",()=>{t(e.responseText,e)}))}_sendRequest(e,t,s){return this._registerOnLoaded(e,s),e.send(t),e}_getContentType(e,t){return e instanceof FormData&&(t=!1),t}_createPreparedRequest(e,t,s){return this._request=new XMLHttpRequest,this._request.open(e,t),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),s&&this._request.setRequestHeader("Content-type",s),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}}}]);