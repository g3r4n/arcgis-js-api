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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Error","../../core/Logger","../../core/requireUtils","../../core/promiseUtils","../../core/urlUtils","../../portal/PortalItem","../../portal/Portal"],function(t,e,r,o,a,s,i,l,p,n,u,c,m){var h=l.getLogger("esri.layers.mixins.PortalLayer"),d=function(e){function s(){return null!==e&&e.apply(this,arguments)||this}return r(s,e),Object.defineProperty(s.prototype,"portalItem",{set:function(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))},enumerable:!0,configurable:!0}),s.prototype.writePortalItem=function(t,e,r){t&&t.id&&(e.itemId=t.id)},s.prototype.loadFromPortal=function(e){var r=this;return this.portalItem&&this.portalItem.id?p.when(t,"../../portal/support/layersLoader").then(function(t){return t.load({instance:r,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData}).otherwise(function(t){throw h.warn("Failed to load layer ("+r.title+", "+r.id+") portal item ("+r.portalItem.id+")\n  "+t),t})}):n.resolve()},s.prototype.read=function(t,e){var r=arguments;return e&&(e.layer=this),this.inherited(r)},s.prototype.write=function(t,e){var r=e&&e.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||m.getDefault());return r&&o&&!u.hasSamePortal(o.restUrl,r.restUrl)?(e.messages&&e.messages.push(new i("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},o([a.property({type:c})],s.prototype,"portalItem",null),o([a.writer("portalItem",{itemId:{type:String}})],s.prototype,"writePortalItem",null),s=o([a.subclass("esri.layers.mixins.PortalLayer")],s)}(a.declared(s));return d});