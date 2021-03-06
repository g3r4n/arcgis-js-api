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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../state/helpers/PickingHelper","../../state/controllers/RotateController"],function(e,t,r,n,i,a){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,r){void 0===r&&(r=!1);var n=e.call(this,!0)||this;return n.view=t,n.invert=r,n.pickingHelper=new i.PickingHelper(t),n.registerIncoming("vertical-two-finger-drag",function(e){return n.handleTwoFinger(e)}),n}return r(t,e),t.prototype.handleTwoFinger=function(e){var t=this.invert?-1:1,r=[0,-e.data.delta*t];switch(e.data.action){case"begin":this.cameraController=new a.RotateController(this.view,this.pickingHelper,"center"),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(r);break;case"update":this.cameraController.update(r);break;case"end":this.cameraController.end(),this.cameraController=null}},t}(n.InputHandler);t.TwoFingerTilt=o});