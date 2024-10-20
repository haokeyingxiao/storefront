"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["filter-multi-select.plugin"],{9304:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(9568),l=i(4049);class o extends s.Z{_init(){super._init(),this._validateMethods();let e=l.Z.querySelector(document,this.options.parentFilterPanelSelector);this.listing=window.PluginManager.getPluginInstanceFromElement(e,"Listing"),this.listing.registerFilter(this),this._preventDropdownClose()}_preventDropdownClose(){let e=l.Z.querySelector(this.el,this.options.dropdownSelector,!1);e&&e.addEventListener("click",e=>{e.stopPropagation()})}_validateMethods(){if("function"!=typeof this.getValues)throw Error("[".concat(this._pluginName,'] Needs the method "getValues"\''));if("function"!=typeof this.getLabels)throw Error("[".concat(this._pluginName,'] Needs the method "getLabels"\''));if("function"!=typeof this.reset)throw Error("[".concat(this._pluginName,'] Needs the method "reset"\''));if("function"!=typeof this.resetAll)throw Error("[".concat(this._pluginName,'] Needs the method "resetAll"\''))}}o.options={parentFilterPanelSelector:".cms-element-product-listing-wrapper",dropdownSelector:".filter-panel-item-dropdown"}},400:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var s=i(4049),l=i(3266),o=i(9304),n=i(1857),r=i.n(n);class a extends o.Z{init(){this.selection=[],this.counter=s.Z.querySelector(this.el,this.options.countSelector),this.mainFilterButton=s.Z.querySelector(this.el,this.options.mainFilterButtonSelector,!1),this._registerEvents()}_registerEvents(){let e=s.Z.querySelectorAll(this.el,this.options.checkboxSelector);l.Z.iterate(e,e=>{e.addEventListener("change",this._onChangeFilter.bind(this))})}getValues(){let e=s.Z.querySelectorAll(this.el,"".concat(this.options.checkboxSelector,":checked"),!1),t=[];e?l.Z.iterate(e,e=>{t.push(e.id)}):t=[],this.selection=t,this._updateCount();let i={};return i[this.options.name]=t,i}getLabels(){let e=s.Z.querySelectorAll(this.el,"".concat(this.options.checkboxSelector,":checked"),!1),t=[];return e?l.Z.iterate(e,e=>{t.push({label:e.dataset.label,id:e.id})}):t=[],t}setValuesFromUrl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!1,i=e[this.options.name],l=i?i.split("|"):[],o=this.selection.filter(e=>!l.includes(e)),n=l.filter(e=>!this.selection.includes(e));return(o.length>0||n.length>0)&&(t=!0),n.forEach(e=>{let t=s.Z.querySelector(this.el,'[id="'.concat(e,'"]'),!1);t&&(t.checked=!0,this.selection.push(t.id))}),o.forEach(e=>{this.reset(e),this.selection=this.selection.filter(t=>t!==e)}),this._updateCount(),t}_onChangeFilter(){this.listing.changeListing(!0,{p:1})}reset(e){let t=s.Z.querySelector(this.el,'[id="'.concat(e,'"]'),!1);t&&(t.checked=!1)}resetAll(){this.selection.filter=[];let e=s.Z.querySelectorAll(this.el,"".concat(this.options.checkboxSelector,":checked"),!1);e&&l.Z.iterate(e,e=>{e.checked=!1})}refreshDisabledState(e){let t=e[this.options.name];if(!t.entities||t.entities.length<1){this.disableFilter();return}this.enableFilter(),this._disableInactiveFilterOptions(t.entities.map(e=>e.id))}_disableInactiveFilterOptions(e){let t=s.Z.querySelectorAll(this.el,this.options.checkboxSelector);l.Z.iterate(t,t=>{!0!==t.checked&&(e.includes(t.id)?this.enableOption(t):this.disableOption(t))})}disableOption(e){let t=e.closest(this.options.listItemSelector);t.classList.add("disabled"),t.setAttribute("title",this.options.snippets.disabledFilterText),e.disabled=!0}enableOption(e){let t=e.closest(this.options.listItemSelector);t.removeAttribute("title"),t.classList.remove("disabled"),e.disabled=!1}enableAllOptions(){let e=s.Z.querySelectorAll(this.el,this.options.checkboxSelector);l.Z.iterate(e,e=>{this.enableOption(e)})}disableFilter(){let e=s.Z.querySelector(this.el,this.options.mainFilterButtonSelector);e.classList.add("disabled"),e.setAttribute("disabled","disabled"),e.setAttribute("title",this.options.snippets.disabledFilterText)}enableFilter(){let e=s.Z.querySelector(this.el,this.options.mainFilterButtonSelector);e.classList.remove("disabled"),e.removeAttribute("disabled"),e.removeAttribute("title")}_updateCount(){this.counter.textContent=this.selection.length?"(".concat(this.selection.length,")"):"",this._updateAriaLabel()}_updateAriaLabel(){if(this.options.snippets.ariaLabel){if(0===this.selection.length){this.mainFilterButton.setAttribute("aria-label",this.options.snippets.ariaLabel);return}this.mainFilterButton.setAttribute("aria-label","".concat(this.options.snippets.ariaLabel," (").concat(this.options.snippets.ariaLabelCount.replace("%count%",this.selection.length.toString()),")"))}}}a.options=r()(o.Z.options,{checkboxSelector:".filter-multi-select-checkbox",countSelector:".filter-multi-select-count",listItemSelector:".filter-multi-select-list-item",snippets:{disabledFilterText:"Filter not active",ariaLabel:"",ariaLabelCount:""},mainFilterButtonSelector:".filter-panel-item-toggle"})}}]);