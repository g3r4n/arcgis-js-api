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

define(["require","exports","../../webgl-engine/materials/RibbonLineMaterial","../../webgl-engine/materials/NativeLineMaterial","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],function(e,t,i,n,r,a){function o(e){var t={width:e.width,color:e.color,miterLimit:e.miterLimit,polygonOffset:!0};return"miter"===e.join||"bevel"===e.join?t.join=e.join:(t.join="miter",e.join&&console.warn("unsupported join type for line symbol: "+e.join)),new i(t,e.idHint+"_ribbonlinemat")}function l(e){return new n(e.width,e.color,e.idHint+"_nativelinemat")}function s(e){var t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}function d(e,t,i,n,a){var o,l,d,w;if(i=i&&!s(e)){for(var b=new Float32Array(e.length+3),g=0;g<e.length;g++)b[g]=e[g];var m=b.length;b[m-3]=e[0],b[m-2]=e[1],b[m-1]=e[2],l=b,o=e.length/3+1,d=new Uint32Array(2*(o-1)),w=new Uint32Array(2*(o-1))}else o=e.length/3,d=new Uint32Array(2*(o-1)),w=new Uint32Array(2*(o-1)),l=e;var u=new Float32Array(1);u[0]=a;for(var v=0,I=0,c=0;o-1>c;c++)d[v++]=c,d[v++]=c+1,w[I++]=0,w[I++]=0;var y={},O={};y[f.POSITION]=d,y[f.COLOR]=w,y[f.SIZE]=w,O[f.POSITION]={size:3,data:l,offsetIdx:0,strideIdx:3},O[f.COLOR]={size:4,data:n,offsetIdx:0,strideIdx:4},O[f.SIZE]={size:1,data:u,offsetIdx:0,strideIdx:1},t&&(y.mapPos=d,O.mapPos={size:3,data:t,offsetIdx:0,strideIdx:3});var x=new r(O,y,r.DefaultOffsets,"line");return x}Object.defineProperty(t,"__esModule",{value:!0});var f=a.VertexAttrConstants;t.createRibbonMaterial=o,t.createNativeMaterial=l,t.isClosed=s,t.createPolylineGeometry=d});