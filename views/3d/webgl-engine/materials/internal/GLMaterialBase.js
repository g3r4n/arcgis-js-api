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

define(["require","exports","./MaterialUtil"],function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,r){this.id=i.__GLMaterial_id++,this.material=t}return t.prototype.getId=function(){return this.id},t.prototype.getMaterialId=function(){return this.material.getId()},t.prototype.isVisible=function(){return this.material.isVisible()},t.prototype.isRenderOccluded=function(){return this.material.isRenderOccluded()},t.prototype.getRenderPriority=function(){return this.material.getRenderPriority()},t}();e.GLMaterialBase=r,e["default"]=r});