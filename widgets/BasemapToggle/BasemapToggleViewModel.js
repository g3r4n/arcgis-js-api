// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../support/basemapUtils","../../core/Accessor","../../core/Evented","../../support/basemapDefinitions","../../support/basemapUtils"],function(e,t,r,a,p,o,n,s,i,l){var u=function(e){function t(t){var r=e.call(this,t)||this;return r._basemapCache={},r.nextBasemap=l.ensureType("hybrid",r._basemapCache),r.view=null,r.toggle=r.toggle.bind(r),r}return r(t,e),t.prototype.destroy=function(){this.view=null},Object.defineProperty(t.prototype,"activeBasemap",{get:function(){return l.ensureType(this.get("view.map.basemap")||"topo",this._basemapCache)},enumerable:!0,configurable:!0}),t.prototype.castNextBasemap=function(e){return l.ensureType(e,this._basemapCache)},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.toggle=function(){if("disabled"!==this.state){var e=this.activeBasemap,t=this.nextBasemap;this.view.map.basemap=t,this.nextBasemap=e,this.emit("toggle",{previous:e,current:t})}},t.getThumbnailUrl=function(e){if(!e)return null;var t=e.thumbnailUrl;if(t)return t;var r=o.getWellKnownBasemapId(e);if(r)return i[r].thumbnailUrl;var a=e.baseLayers.find(function(e){return!!e.get("portalItem.thumbnailUrl")});return a?a.get("portalItem.thumbnailUrl"):null},a([p.property({dependsOn:["view.map.basemap"],readOnly:!0})],t.prototype,"activeBasemap",null),a([p.property()],t.prototype,"nextBasemap",void 0),a([p.cast("nextBasemap")],t.prototype,"castNextBasemap",null),a([p.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),a([p.property()],t.prototype,"view",void 0),a([p.property()],t.prototype,"toggle",null),t=a([p.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],t)}(p.declared(n,s));return u});