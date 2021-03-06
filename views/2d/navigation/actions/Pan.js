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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../viewpointUtils","../../../navigation/Momentum","../../../3d/lib/glMatrix"],function(t,e,i,o,n,m,a,r,s){var u=function(t){function e(e){var i=t.call(this)||this;return i.animationTime=0,i.momentumEstimator=new r.ScreenspaceMomentumEstimator(.05,600,6,.92),i.momentum=null,i.momentumVelocityX=0,i.momentumVelocityY=0,i.momentumFinished=!1,i.viewpoint=a.create(),i.watch("momentumFinished",function(t){t&&i.navigation.stop()}),i}return i(e,t),e.prototype.begin=function(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e)},e.prototype.update=function(t,e){this.addToEstimator(e);var i=e.pointers[0],o=i.currentEvent.x,n=i.currentEvent.y,m=i.previousEvent;o=m?m.x-o:-o,n=m?n-m.y:n,t.viewpoint=a.translateBy(this.viewpoint,t.viewpoint,[o||0,n||0])},e.prototype.end=function(t,e){this.addToEstimator(e),this.momentum=this.momentumEstimator.evaluateMomentum(),this.animationTime=0,this.momentum&&(this.momentumVelocityX=(this.momentum.dataNewest[0]-this.momentum.dataOldest[0])/this.momentum.dataTimeDelta,this.momentumVelocityY=(this.momentum.dataNewest[1]-this.momentum.dataOldest[1])/this.momentum.dataTimeDelta,this.onAnimationUpdate(t)),this.navigation.end()},e.prototype.addToEstimator=function(t){var e=t.pointers[0],i=e.currentEvent.x,o=e.currentEvent.y;this.momentumEstimator.add(i,o,s.vec3.createFrom(i,o,0),.001*t.currentState.timestamp)},e.prototype.onAnimationUpdate=function(t){var e=this;this.navigation.animationManager.animateContinous(t.viewpoint,function(i,o){e.momentumFinished=!e.momentum||e.momentum.isFinished(e.animationTime);var n=.001*o;if(!e.momentumFinished){var m=e.momentum.velocityFactor(e.animationTime),r=m*e.momentumVelocityX*n,s=m*e.momentumVelocityY*n;t.viewpoint=a.translateBy(i,i,[-r,s])}e.animationTime+=n})},e.prototype.stopMomentumNavigation=function(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())},o([n.property()],e.prototype,"momentumFinished",void 0),o([n.property()],e.prototype,"viewpoint",void 0),o([n.property()],e.prototype,"navigation",void 0),e=o([n.subclass("esri.views.2d.navigation.actions.Pan")],e)}(n.declared(m));return u});