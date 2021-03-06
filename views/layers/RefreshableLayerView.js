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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor"],function(e,r,t,s,o,p){var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshTimestamp=null,r}return t(r,e),r.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},s([o.property()],r.prototype,"layer",void 0),s([o.aliasOf("layer.refreshInterval")],r.prototype,"refreshInterval",void 0),s([o.property({readOnly:!0})],r.prototype,"refreshTimestamp",void 0),r=s([o.subclass("esri.layers.mixins.RefreshableLayerView")],r)}(o.declared(p));return a});