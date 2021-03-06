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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/lang","./PointCloudFilter"],function(e,r,t,i,o,l,n){var u=function(e){function r(r){var t=e.call(this)||this;return t.requiredClearBits=null,t.requiredSetBits=null,t.type="bitfield",t}return t(r,e),n=r,r.prototype.clone=function(){return new n({field:this.field,requiredClearBits:l.clone(this.requiredClearBits),requiredSetBits:l.clone(this.requiredSetBits)})},i([o.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],r.prototype,"requiredClearBits",void 0),i([o.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],r.prototype,"requiredSetBits",void 0),i([o.property()],r.prototype,"type",void 0),r=n=i([o.subclass("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],r);var n}(o.declared(n));return u});