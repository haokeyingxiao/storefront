"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["plugin_magnifier_magnifier_plugin_js"],{2308:(e,t,i)=>{i.d(t,{FM:()=>o,P:()=>r});class s{get dimension(){return this.entries.length}validateDimensions(e){if(this.dimension!==e.dimension)throw Error("[Vector] dimension mismatch expected ".concat(this.dimension," got ").concat(e.dimension))}get x(){return this.entries[0]}set x(e){this.entries[0]=e}get y(){return this.entries[1]}set y(e){this.dimension>1&&(this.entries[1]=e)}get z(){return this.entries[2]}set z(e){this.dimension>2&&(this.entries[2]=e)}get w(){return this.entries[3]}set w(e){this.dimension>3&&(this.entries[3]=e)}length(){return Math.sqrt(this.entries.reduce((e,t)=>e+=t*t,0))}add(e){return this.validateDimensions(e),new this.constructor(this.entries.map((t,i)=>t+e.entries[i]))}multiply(e){if(e instanceof s)return this.validateDimensions(e),new this.constructor(this.entries.map((t,i)=>t*e.entries[i]));if("number"!=typeof e||Number.isNaN(e))throw Error("[Vector] multiply: factor must be number or vector");return new this.constructor(this.entries.map(t=>e*t))}subtract(e){return this.add(e.multiply(-1))}divide(e){if(e instanceof s)return new this.constructor(this.entries.map((t,i)=>t/e.entries[i]));if(0===e)throw Error("Can't divide by 0");return this.multiply(1/e)}normalize(){return new this.constructor(this.divide(this.length()))}equals(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];let o=t[0]instanceof s?t[0]:new s(Array.isArray(t[0])?t[0]:t);try{return this.validateDimensions(o),this.entries.reduce((e,t,i)=>(t!==o.entries[i]&&(e=!1),e),!0)}catch(e){return!1}}dot(e){return this.validateDimensions(e),this.entries.reduce((t,i,s)=>t+=i*e.entries[s],0)}clamp(e,t){return"number"==typeof e&&(e=new this.constructor(Array(this.dimension).fill(e))),"number"==typeof t&&(t=new this.constructor(Array(this.dimension).fill(t))),new this.constructor(this.entries.map((i,s)=>i<e.entries[s]?e.entries[s]:i>t.entries[s]?t.entries[s]:i))}constructor(e){this.entries=e.map((e,t)=>{if("number"!=typeof e)throw Error("[Vector] argument ".concat(t," must be a number ").concat(typeof e," given."));return e})}}class o extends s{angle(){return(Math.atan2(this.y,this.x)*(180/Math.PI)+360)%360}constructor(e,t){if(e instanceof s){super(e.entries.slice(0,2));return}if(Array.isArray(e)){super(e.slice(0,2));return}super([e,t])}}class r extends s{cross(e){return new this.constructor(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}constructor(e,t,i){if(e instanceof s){super(e.entries.slice(0,3));return}if(Array.isArray(e)){super(e.slice(0,3));return}super([e,t,i])}}},8964:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var s=i(9568),o=i(4049),r=i(2308),n=i(447),a=i(3266);class m extends s.Z{init(){this._imageContainers=o.Z.querySelectorAll(this.el,this.options.imageContainerSelector),this.options.magnifierOverGallery?this._zoomImageContainer=o.Z.querySelector(this.el,this.options.zoomImageContainerSelector):this._zoomImageContainer=o.Z.querySelector(document,this.options.zoomImageContainerSelector),this._registerEvents()}_registerEvents(){a.Z.iterate(this._imageContainers,e=>{let t=o.Z.querySelector(e,this.options.imageSelector,!1);t&&(t.addEventListener("mousemove",i=>this._onMouseMove(i,e,t),!1),e.addEventListener("mouseout",e=>this._stopMagnify(e),!1))})}_isActive(){return -1!==[n.Z.isLG(),n.Z.isXL(),n.Z.isXXL()].indexOf(!0)}_setCursor(e,t){e&&(e.style.cursor=t)}_onMouseMove(e,t,i){if(this._isActive()&&(this._setCursor(i,this.options.cursorType),this._createOverlay(t),this._createZoomImage(),this._getImageUrl(i),this._imageUrl&&this._zoomImage&&this._overlay)){let s=this._getContainerPos(t),o=this._getImagePos(i),n=this._getImageDimensions(i),a=this._getImageSize(i),m=this._getOverlaySize(a),l=s.subtract(o);l.x=Math.abs(l.x),l.y=Math.abs(l.y);let c=new r.FM(e.pageX,e.pageY).subtract(o),h=c.divide(a).clamp(0,1);this._setOverlayPosition(l,m,a,h),this._setZoomImage(c,a,m,n)}this.$emitter.publish("onMouseMove")}_setOverlayPosition(e,t,i,s){let o=e.subtract(t.divide(2));return o=(o=o.add(i.multiply(s))).clamp(e,e.add(i).subtract(t)),this._overlay.style.left="".concat(o.x,"px"),this._overlay.style.top="".concat(o.y,"px"),o}_setZoomImage(e,t,i,s){this._setZoomImageSize(t),this._zoomImage.style.backgroundImage="url('".concat(this._imageUrl,"')");let o=this.calculateZoomBackgroundImageSize(s,t);this._zoomImage.style.backgroundSize="".concat(o.x,"px ").concat(o.y,"px");let r=this.calculateZoomImageBackgroundPosition(e,t,i,s,o);this._zoomImage.style.backgroundPosition="-".concat(r.x,"px -").concat(r.y,"px"),this.$emitter.publish("setZoomImagePosition")}_setZoomImageSize(e){let t=e.y/e.x,i=this._getZoomImageSize(),s=this.options.keepAspectRatioOnZoom?this.options.scaleZoomImage?i.x*t:i.y:i.x;this._zoomImage.style.height="".concat(s,"px"),this._zoomImage.style.minHeight="".concat(s,"px")}calculateZoomImageBackgroundPosition(e,t,i,s,o){let n=t.subtract(t.divide(this.options.zoomFactor)).subtract(new r.FM(1,1)),a=e.subtract(i.divide(2)).clamp(0,t.subtract(i)).divide(n),m=this.getImageOrientation(s,t),l=1-1/this.options.zoomFactor;return this.options.keepAspectRatioOnZoom&&(a=a.clamp(0,1)),0===m?(a=a.multiply(new r.FM(l,1)),a=(a=this.calculateImagePosition(a,t,s,"y","x")).multiply(new r.FM(1,l))):1===m&&(a=a.multiply(new r.FM(1,l)),a=(a=this.calculateImagePosition(a,t,s,"x","y")).multiply(new r.FM(l,1))),o.multiply(a)}calculateImagePosition(e,t,i,s,o){let r=(1-i[s]*(t[o]/t[s])/(i[o]/1))/2;return e[o]=this.calculateOffsetPercent(r,e[o]),e}calculateOffsetPercent(e,t){return e+(1-2*e)*t}calculateZoomBackgroundImageSize(e,t){let i=this.getImageOrientation(e,t),s=this._getZoomImageSize(),o=new r.FM(0,0);return 1===i?o=new r.FM(s.x,s.x*e.y/e.x):0===i&&(o=new r.FM(s.y*e.x/e.y,s.y)),o.multiply(this.options.zoomFactor)}getImageOrientation(e,t){return this._assertEqualFactors(e,t)?t.x>t.y?0:1:t.x/t.y>e.x/e.y?1:0}_assertEqualFactors(e,t){let i=this._roundToTwoDigits(e.x/e.y);return this._roundToTwoDigits(t.x/t.y)===i}_getContainerPos(e){let t=e.getBoundingClientRect();return new r.FM(t.left+window.pageXOffset,t.top+window.pageYOffset)}_getImagePos(e){let t=e.getBoundingClientRect();return new r.FM(t.left+window.pageXOffset,t.top+window.pageYOffset)}_getImageDimensions(e){let{naturalWidth:t,naturalHeight:i}=e;return new r.FM(t,i)}_getImageSize(e){let t=e.getBoundingClientRect();return new r.FM(t.width,t.height)}_getZoomImageSize(){let e=this._zoomImage.getBoundingClientRect();return new r.FM(e.width,e.height)}_getOverlaySize(e){let t=e.divide(this.options.zoomFactor);if(!this.options.keepAspectRatioOnZoom){let e=Math.min(t.x,t.y);t.x=e,t.y=e}return this._overlay.style.width="".concat(Math.ceil(t.x),"px"),this._overlay.style.height="".concat(Math.ceil(t.y),"px"),t}_createOverlay(e){if(this._overlay=e.querySelector(".".concat(this.options.overlayClass)),this._overlay)return this._overlay;let t='<div class="magnifier-overlay  '.concat(this.options.overlayClass,'">&nbsp;</div>');return this._overlay=e.insertAdjacentHTML("beforeend",t),this.$emitter.publish("createOverlay"),this._overlay}_removeOverlay(){let e=document.querySelectorAll(".".concat(this.options.overlayClass));a.Z.iterate(e,e=>e.remove()),this.$emitter.publish("removeOverlay")}_createZoomImage(){if(this._zoomImage=this._zoomImageContainer.querySelector(".".concat(this.options.zoomImageClass)),this._zoomImage)return this._zoomImage;this._zoomImageContainer.style.position="relative";let e='<div class="magnifier-zoom-image  '.concat(this.options.zoomImageClass,'">&nbsp;</div>');return this._zoomImage=this._zoomImageContainer.insertAdjacentHTML("beforeend",e),this.$emitter.publish("createZoomImage"),this._zoomImage}_removeZoomImage(){let e=document.querySelectorAll(".".concat(this.options.zoomImageClass));a.Z.iterate(e,e=>e.remove()),this.$emitter.publish("removeZoomImage")}_getImageUrl(e){this._imageUrl=o.Z.getDataAttribute(e,this.options.fullImageDataAttribute),this.$emitter.publish("getImageUrl")}_stopMagnify(){this._removeZoomImage(),this._removeOverlay();let e=o.Z.querySelectorAll(document,this.options.imageSelector);a.Z.iterate(e,e=>this._setCursor(e,"default")),this.$emitter.publish("stopMagnify")}_roundToTwoDigits(e){return Math.round(1e3*e)/1e3}}m.options={zoomFactor:3,imageContainerSelector:".js-magnifier-container",imageSelector:".js-magnifier-image",fullImageDataAttribute:"data-full-image",zoomImageContainerSelector:".js-magnifier-zoom-image-container",overlayClass:"js-magnifier-overlay",zoomImageClass:"js-magnifier-zoom-image",magnifierOverGallery:!1,scaleZoomImage:!1,keepAspectRatioOnZoom:!0,cursorType:"none"}}}]);