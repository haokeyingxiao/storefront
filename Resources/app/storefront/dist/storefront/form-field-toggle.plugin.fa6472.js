"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["form-field-toggle.plugin"],{6618:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var i=s(9568),a=s(4049),l=s(3266);class r extends i.Z{init(){this._getTargets(),this._getControlValue(),this._registerEvents(),this._onChange(),this._triggerNested=a.Z.getDataAttribute(this.el,this.options.triggerNestedDataAttribute,!1)}_getTargets(){let t=a.Z.getDataAttribute(this.el,this.options.targetDataAttribute);if((a.Z.getDataAttribute(this.el,this.options.scopeDataAttribute,!1)||this.options.scopeAll)===this.options.scopeAll){this._targets=a.Z.querySelectorAll(document,t);return}let e=this.el.closest(a.Z.getDataAttribute(this.el,this.options.parentSelectorDataAttribute));this._targets=a.Z.querySelectorAll(e,t)}_getControlValue(){this._value=a.Z.getDataAttribute(this.el,this.options.valueDataAttribute)}_registerEvents(){this.el.removeEventListener("change",this._onChange.bind(this)),this.el.addEventListener("change",this._onChange.bind(this))}_onChange(){let t=this._shouldShowTarget();l.Z.iterate(this._targets,e=>{t?this._showTarget(e):this._hideTarget(e)}),this.$emitter.publish("onChange")}_shouldShowTarget(){let t=this.el.type;return"checkbox"===t||"radio"===t?this.el.checked===this._value:this.el.value===this._value}_hideTarget(t){let e=this._getFields(t);l.Z.iterate(e,t=>{a.Z.hasAttribute(t,"required")&&(t.classList.add(this.options.wasRequiredCls),t.removeAttribute("required")),t.setAttribute("disabled","disabled"),a.Z.hasAttribute(t,"disabled")&&t.classList.remove(this.options.wasDisabledCls)}),t.classList.remove(this.options.showCls),t.classList.add(this.options.hiddenCls)}_showTarget(t){let e=this._getFields(t);l.Z.iterate(e,t=>{t.classList.contains(this.options.wasRequiredCls)&&(t.classList.remove(this.options.wasRequiredCls),t.setAttribute("required","required")),a.Z.hasAttribute(t,"disabled")&&(t.removeAttribute("disabled"),t.classList.add(this.options.wasDisabledCls))}),this._triggerNested&&l.Z.iterate(e,t=>{if(t.matches('[data-form-field-toggle="true"]')){let e=window.PluginManager.getPluginInstanceFromElement(t,"FormFieldToggle");e&&e._onChange()}}),t.classList.remove(this.options.hiddenCls),t.classList.add(this.options.showCls)}_getFields(t){return a.Z.querySelectorAll(t,"input, select, textarea",!1)}}r.options={hiddenCls:"d-none",showCls:"d-block",scopeAll:"all",targetDataAttribute:"data-form-field-toggle-target",valueDataAttribute:"data-form-field-toggle-value",wasRequiredCls:"js-field-toggle-was-required",wasDisabledCls:"js-field-toggle-was-disabled",scopeDataAttribute:"data-form-field-toggle-scope",parentSelectorDataAttribute:"data-form-field-toggle-parent-selector",triggerNestedDataAttribute:"data-form-field-toggle-trigger-nested"}}}]);