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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/Error","./Layer","./mixins/ScaleRangeLayer","../core/accessorSupport/decorators","./mixins/RefreshableLayer"],function(e,r,t,a,n,s,o,i,c,p){var y=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="base-dynamic",r}return t(r,e),r.prototype.getImageUrl=function(e,r,t){throw new s("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")},r.prototype.fetchImage=function(e,r,t,a){var s=this.getImageUrl(e,r,t),o={responseType:"image",allowImageDataAccess:a&&a.allowImageDataAccess||!1};return a&&a.timestamp&&(o.query={_ts:a.timestamp}),"string"==typeof s?n(s,o).then(function(e){return e.data}):s.then(function(e){return n(e,o)}).then(function(e){return e.data})},a([c.shared({"2d":"../views/2d/layers/BaseDynamicLayerView2D","3d":"../views/3d/layers/DynamicLayerView3D"})],r.prototype,"viewModulePaths",void 0),a([c.property({readOnly:!0,value:"base-dynamic"})],r.prototype,"type",void 0),r=a([c.subclass("esri.layers.BaseDynamicLayer")],r)}(c.declared(o,p,i));return y});