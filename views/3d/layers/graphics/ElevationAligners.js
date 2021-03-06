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

define(["require","exports","../../../../geometry/Point","../../lib/glMatrix","../../support/projectionUtils","../../support/debugFlags","../../webgl-engine/lib/Util","./Graphics3DSymbolCommonCode","./graphicUtils"],function(e,t,a,r,n,o,i,s,l){function u(e,a,r,n){var i=r.spatialReference;v.spatialReference=i;for(var l=e.getGeometryRecords(),u=l.length,c="absolute-height"!==a.mode,p=0,h=0;u>h;h++){var m=l[h].geometry,b=l[h].getShaderTransformation(),A=m.getData();E[0]=b[12],E[1]=b[13],E[2]=b[14],m.invalidateBoundingInfo();for(var I=A.getVertexAttr(),M=I[d.POSITION],S=M.data,O=I.mapPos.data,x=M.size,D=S.length/x,R=0,_=0,y=!1,V=0,L=0;D>L;L++){v.x=O[_++],v.y=O[_++],v.z=O[_++],f[0]=S[R],f[1]=S[R+1],f[2]=S[R+2];var P=s.computeElevation(r,v,a,n,c?g:null);if(c&&(V+=g.terrainElevation),T[0]=S[R]+E[0],T[1]=S[R+1]+E[1],T[2]=S[R+2]+E[2],n.setAltitude(P,T),S[R]=T[0]-E[0],S[R+1]=T[1]-E[1],S[R+2]=T[2]-E[2],o.TESTS_DISABLE_UPDATE_THROTTLE_THRESHOLDS)y=!0;else{var U=t.updateThresholdInMeters/n.unitInMeters;(Math.abs(f[0]-S[R])>=U||Math.abs(f[1]-S[R+1])>=U||Math.abs(f[2]-S[R+2])>=U)&&(y=!0)}R+=x}p+=V/D,y&&e.geometryVertexAttrsUpdated(h)}return p/u}function c(e,a,r,i,u){var c=a.centerPointInElevationSR,d=0,p=0;if(e.metadata.usesVerticalDistanceToGround)d=s.computeElevation(r,c,a,i,g),l.updateVertexAttributeAuxpos1w(e,g.verticalDistanceToGround),p=g.terrainElevation;else{var v="absolute-height"!==a.mode;d=s.computeElevation(r,c,a,i,v?g:null),v&&(p=g.terrainElevation)}var E=e.getObjectTransformation(),f=[E[12],E[13],E[14]];o.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(T[0]=c.x,T[1]=c.y,T[2]=d,n.computeLinearTransformation(c.spatialReference,T,E,i.spatialReference)&&e.setObjectTransformation(E)):i.setAltitudeOfTransformation(d,E);var h=t.updateThresholdInMeters/i.unitInMeters;return(Math.abs(E[12]-f[0])>=h||Math.abs(E[13]-f[1])>=h||Math.abs(E[14]-f[2])>=h)&&e.setObjectTransformation(E),p}Object.defineProperty(t,"__esModule",{value:!0});var d=i.VertexAttrConstants,p=r.vec3d,v=new a,T=p.create(),E=p.create(),f=p.create(),g={verticalDistanceToGround:0,terrainElevation:0};t.perVertexElevationAligner=u,t.perObjectElevationAligner=c,t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0});