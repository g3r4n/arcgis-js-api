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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Symbol3DLayer","./support/Symbol3DOutline","./support/Symbol3DFillMaterial","../core/accessorSupport/decorators"],function(e,t,o,r,l,i,n,a){var p=function(e){function t(t){var o=e.call(this)||this;return o.type="fill",o.material=null,o.outline=null,o}return o(t,e),l=t,t.prototype.clone=function(){return new l({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone()})},r([a.property()],t.prototype,"type",void 0),r([a.property({type:n["default"]})],t.prototype,"material",void 0),r([a.property({type:i["default"],json:{write:!0}})],t.prototype,"outline",void 0),t=l=r([a.subclass("esri.symbols.FillSymbol3DLayer")],t);var l}(a.declared(l));return p});