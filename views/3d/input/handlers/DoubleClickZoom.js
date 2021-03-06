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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support","../../state/helpers/PickingHelper","../../state/controllers/global/ZoomStepController","../../state/controllers/local/ZoomStepController"],function(e,t,o,i,n,r,l,a){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t,o){var i=e.call(this,!0)||this;return i.view=t,i.pickingHelper=new r.PickingHelper(t),i.registerIncoming("double-click",o,function(e){return i.handleDoubleClick(e)}),i}return o(t,e),t.prototype.handleDoubleClick=function(e){var t=e.data;if(n.eventMatchesPointerType(t["native"],"primary")){var o=this.view.state.isGlobal?new l.ZoomStepController(this.view,this.pickingHelper,"animation"):new a.ZoomStepController(this.view,this.pickingHelper,"animation");this.view.state.switchCameraController(o),o.zoomStep(Math.log(.5)/Math.log(.6),[t.x,this.view.height-t.y]),e.stopPropagation()}},t}(i.InputHandler);t.DoubleClickZoom=p});