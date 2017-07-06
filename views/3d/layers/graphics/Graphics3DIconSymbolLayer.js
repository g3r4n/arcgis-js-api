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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","dojo/_base/lang","dojo/when","./Graphics3DSymbolLayer","./Graphics3DGraphicLayer","./Graphics3DDrapedGraphicLayer","./ElevationAligners","./Graphics3DSymbolCommonCode","./SignedDistanceFunctions","../support/FastSymbolUpdates","./graphicUtils","../../../../core/screenUtils","../../../../core/sniff","../../../../core/Logger","../../../../core/Error","../../../../symbols/support/symbolUtils","../../../../Color","../../../../geometry/Polygon","../../support/projectionUtils","../../lib/glMatrix","../../webgl-engine/Stage","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/lib/RenderGeometry","../../webgl-engine/lib/Texture","../../webgl-engine/materials/HUDMaterial","../../../../core/urlUtils"],function(e,t,i,r,a,s,n,o,l,u,c,h,p,d,_,f,g,m,v,y,S,b,x,z,I,R,P,M,C){function O(e){return"cross"===e||"x"===e}function A(e){var t,i=W,r=i*H;switch("primitive:"===e.substring(0,10)&&(e=e.substring(10)),e){case X.PRIM_CIRCLE:t=c.computeSignedDistancefieldCicle(i,r);break;case X.PRIM_SQUARE:t=c.computeSignedDistancefieldSquare(i,r,!1);break;case X.PRIM_KITE:t=c.computeSignedDistancefieldSquare(i,r,!0);break;case X.PRIM_CROSS:t=c.computeSignedDistancefieldCrossAndX(i,r,!1);break;case X.PRIM_X:t=c.computeSignedDistancefieldCrossAndX(i,r,!0)}return new P(t,"sdf_"+e,{mipmap:!1,wrapClamp:!0,width:W,height:W,components:4})}var U=f.getLogger("esri.views.3d.graphics"),V=b.vec3d,E=b.vec4d,T=b.mat4d,D=T.identity(),G=[0,0,1],w=[0,0,0,0],L=[0,0,0],F=[1,1,1],j=["center","bottom","top","left","right","bottom-left","bottom-right","top-left","top-right"],B="circle",q=16,k=1.5,W=128,H=.5,N=[H/2,H/2,1-H/2,1-H/2],X={PRIM_CIRCLE:"circle",PRIM_SQUARE:"square",PRIM_CROSS:"cross",PRIM_X:"x",PRIM_KITE:"kite"},Z=[W*H,W*H],K=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!0},t}return i(t,e),t.prototype._prepareResources=function(){var e=this.symbol,t=Math.round(null!=e.size?d.pt2px(e.size):q);this._size=null,this._symbolTextureRatio=1,this._primitive=null;var i=this._getStageIdHint();if(!this._isPropertyDriven("size")){var r=p.validateSymbolLayerSize(t);if(r)return this._logWarning(r),void this.reject()}this._isPropertyDriven("size")&&64>t&&(t=64);var a=e.resource||{primitive:B,href:void 0},s={anchorPos:this._getAnchorPos(e)},n=this.symbolContainer;if(this._hasVisibleVerticalOffset(n)){var o=n.verticalOffset,l=o.screenLength,u=o.minWorldLength,c=o.maxWorldLength;s.verticalOffset={screenLength:d.pt2px(l),minWorldLength:u||0,maxWorldLength:null!=c?c:1/0}}if(this._context.screenSizePerspectiveEnabled&&(s.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings),a.href)this._outlineSize=this._getOutlineSize(e,null),s.color=this._getFillColor(e,null),s.outlineColor=this._getOutlineColor(e),s.outlineSize=this._outlineSize,s.textureIsSignedDistanceField=!1,this._prepareImageResources(t,s,i);else{var h=a.primitive||B,_="primitive:"+h;if(this._primitive=h,this._outlineSize=this._getOutlineSize(e,h),s.color=this._getFillColor(e,h),s.outlineColor=this._getOutlineColor(e),s.outlineSize=this._outlineSize,O(h)&&0===s.outlineSize)return void this.reject();this.texture=this._context.sharedResources.textures.acquire(_,A),this._textureURI=_,s.textureIsSignedDistanceField=!0,s.distanceFieldBoundingBox=N,s.textureId=this.texture.getId(),this._size=[t,t],this._symbolTextureRatio=1/H,this._createMaterialsAndAddToStage(s,this._context.stage,i),this.resolve()}},t.prototype._getOutlineSize=function(e,t){var i=0;return i=e.outline&&null!=e.outline.size?d.pt2px(e.outline.size):O(t)?k:0,Math.max(i,0)},t.prototype._getOutlineColor=function(e){var t=this._getLayerOpacity();if(e.outline){if(null!=e.outline.color){var i=v.toUnitRGB(e.outline.color),r=e.outline.color.a*t;return[i[0],i[1],i[2],r]}return[0,0,0,t]}return[0,0,0,t]},t.prototype._getFillColor=function(e,t){return O(t)?w:this._getMaterialOpacityAndColor()},t.prototype._getAnchorPos=function(e){return j.indexOf(e.anchor)>-1?e.anchor:"center"},t.prototype._prepareImageResources=function(e,t,i){var r=this,s=function(a){if(!r.isRejected()){var s=a.params,n=s.width/s.height;e?n>1?r._size=[e,Math.round(e/n)]:r._size=[Math.round(e*n),e]:r._size=[s.width,s.height],t.textureId=a.getId(),r._createMaterialsAndAddToStage(t,r._context.stage,i),r.resolve()}},n=m.getIconHref(this.symbolContainer,this.symbol);if(!_("esri-canvas-svg-support")&&C.isSVG(n)){var o="SVG symbols are not supported in IE11";return U.warn("#_prepareImageResources()",o),void this.reject(new g("SVG Not Supported",o))}a(this._context.sharedResources.textures.acquire(n,null,e),s,function(){r.reject()}),this._textureURI=n},t.prototype._createMaterialsAndAddToStage=function(e,t,i){this._fastUpdates=h.initFastSymbolUpdatesState(this._context.renderer,this._supportsShaderVisualVariables(),this._fastVisualVariableConvertOptions()),this._fastUpdates.enabled&&r.mixin(e,this._fastUpdates.materialParameters);var a=r.mixin({},e);a.verticalOffset=null,a.screenSizePerspective=null,a.occlusionTest=!1,a.shaderPolygonOffset=0,this._drapedMaterial=new M(a,i+"_iconDraped"),t.add(x.ModelContentType.MATERIAL,this._drapedMaterial),e.occlusionTest=!0,this._material=new M(e,i+"_icon"),t.add(x.ModelContentType.MATERIAL,this._material)},t.prototype.destroy=function(){this.isFulfilled()||this.reject(),this._material&&(this._context.stage.remove(x.ModelContentType.MATERIAL,this._material.getId()),this._material=null),this._drapedMaterial&&(this._context.stage.remove(x.ModelContentType.MATERIAL,this._drapedMaterial.getId()),this._drapedMaterial=null),this._textureURI&&(this._context.sharedResources.textures.release(this._textureURI),this._textureURI=null)},t.prototype._getGeometry=function(e){var t=e.geometry;return"extent"===t.type?u.placePointOnPolygon(y.fromExtent(t)):"polyline"===t.type?u.placePointOnPolyline(t):"polygon"===t.type?u.placePointOnPolygon(t):"point"===t.type?t:(this._logWarning("unsupported geometry type for icon symbol: "+t.type),null)},t.prototype._getScaleFactor=function(e){if(this._isPropertyDriven("size")&&e.size){for(var t=0;3>t;t++){var i=e.size[t];i&&"symbolValue"!==i&&"proportional"!==i&&(e.size[t]=d.pt2px(i))}var r=this._size[0]>this._size[1]?this._size[0]:this._size[1];if("symbolValue"===e.size[0])return 1;if(isFinite(+e.size[0]))return+e.size[0]/r;if(isFinite(+e.size[2]))return+e.size[2]/r}return 1},t.prototype.createGraphics3DGraphic=function(e,t){var i=this._getGeometry(e);if(null===i)return null;var r="graphic"+e.uid,a=this._getVertexOpacityAndColor(t),s=1;this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size||(s=this._getScaleFactor(t)),s*=this._symbolTextureRatio;var n=[this._size[0]*s,this._size[1]*s],o=this.getGraphicElevationInfo(e);return"on-the-ground"===o.mode?this._createAsOverlay(e,i,a,n,o,r,e.uid):this._createAs3DShape(e,i,a,n,o,r,e.uid)},t.prototype.layerPropertyChanged=function(e,t,i){if("opacity"===e){var r=this._getFillColor(this.symbol,this._primitive);this._drapedMaterial.setParameterValues({color:r}),this._material.setParameterValues({color:r});var a=this._getOutlineColor(this.symbol);return this._drapedMaterial.setParameterValues({outlineColor:a}),this._material.setParameterValues({outlineColor:a}),!0}if("elevationInfo"===e){var s=this._elevationInfo.mode;this._updateElevationInfo();var n=this._elevationInfo.mode;if("on-the-ground"===s&&"on-the-ground"===n)return!0;if(s!==n&&("on-the-ground"===s||"on-the-ground"===n))return!1;var o=u.needsElevationUpdates2D(n)||"absolute-height"===n;for(var l in t){var c=t[l],h=i(c);if(h&&!h.isDraped()){var p=c.graphic,d=this.getGraphicElevationInfo(p);h.needsElevationUpdates=o,h.elevationInfo.set(d)}}return!0}return!1},t.prototype.applyRendererDiff=function(e,t,i,r){for(var a in e.diff)switch(a){case"visualVariables":if(!h.updateFastSymbolUpdatesState(this._fastUpdates,t,this._fastVisualVariableConvertOptions()))return!1;this._material.setParameterValues(this._fastUpdates.materialParameters),this._drapedMaterial.setParameterValues(this._fastUpdates.materialParameters);break;default:return!1}return!0},t.prototype.setDrawOrder=function(e,t,i){this._drapedMaterial&&(this._drapedMaterial.setRenderPriority(e),i[this._drapedMaterial.getId()]=!0)},t.prototype._defaultElevationInfoNoZ=function(){return Q},t.prototype._createAs3DShape=function(e,t,i,r,a,s,o){var c=this,p=this._getFastUpdateAttrValues(e),d=p?function(e){return h.evaluateModelTransform(c._fastUpdates.materialParameters,p,e)}:null,_=I.createPointGeometry(G,null,i,r,J,null,p),f=new z(_,s),g=[f],m=this._context.layer.id,v=u.createStageObjectForPoint.call(this,t,g,[[this._material]],null,null,a,s,m,o,!0,d);if(null===v)return null;var y=l.perObjectElevationAligner,S=new n(this,v.object,g,null,null,y,a);return S.alignedTerrainElevation=v.terrainElevation,S.needsElevationUpdates=u.needsElevationUpdates2D(a.mode)||"absolute-height"===a.mode,S.getScreenSize=this._createScreenSizeGetter(r,d),S.calculateRelativeScreenBounds=function(e){return c._material.calculateRelativeScreenBounds(S.getScreenSize(),1,e)},u.extendPointGraphicElevationInfo(S,t,this._context.elevationProvider),S},t.prototype._createAsOverlay=function(e,t,i,r,a,s,n){var l=this;this._drapedMaterial.setRenderPriority(this._symbolLayerOrder);var c=V.create();S.pointToVector(t,c,this._context.overlaySR),c[2]=this._getDrapedZ();var p=this._context.clippingExtent;if(p&&!u.pointInBox2D(c,p))return null;var d=this._getFastUpdateAttrValues(e),_=d?function(e){return h.evaluateModelTransform(l._fastUpdates.materialParameters,d,e)}:null,f=I.createPointGeometry(G,c,i,r,null,null,d),g=new R(f);g.material=this._drapedMaterial,g.center=c,g.bsRadius=0,g.transformation=D,g.name=s,g.uniqueName=s+"#"+f.id;var m=new o(this,[g],null,null,null,a);return m.getScreenSize=this._createScreenSizeGetter(r,_),m.calculateRelativeScreenBounds=function(e){return l._drapedMaterial.calculateRelativeScreenBounds(m.getScreenSize(),1,e)},m},t.prototype._createScreenSizeGetter=function(e,t){var i=this._outlineSize+2;if(this._fastUpdates.enabled){var r=e[0]/this._symbolTextureRatio,a=e[1]/this._symbolTextureRatio;return function(e){void 0===e&&(e=new Array(2));var s=t(D);return e[0]=s[0]*r+i,e[1]=s[5]*a+i,e}}var s=e[0]/this._symbolTextureRatio+i,n=e[1]/this._symbolTextureRatio+i;return function(e){return void 0===e&&(e=new Array(2)),e[0]=s,e[1]=n,e}},t.prototype._supportsShaderVisualVariables=function(){return!0},t.prototype._fastVisualVariableConvertOptions=function(){var e=this._size[0]>this._size[1]?this._size[0]:this._size[1],t=[e,e,e],i=d.px2pt(1),r=e*i,a=[r,r,r];return{modelSize:t,symbolSize:a,unitInMeters:i,transformation:{anchor:L,scale:F,rotation:L}}},t.prototype._hasVisibleVerticalOffset=function(e){return this.symbolContainer&&"point-symbol-3d"===this.symbolContainer.type&&this.symbolContainer.hasVisibleVerticalOffset()},t}(s);K.PRIMITIVE_SIZE=Z,K.VALID_ANCHOR_STRINGS=j;var Q={mode:"relative-to-ground",offset:0},J=E.createFrom(0,0,0,1);return K});