define(["require","THREE","module/component/ModelFrame","module/GlobalVar"],function(e){"use strict";function i(e,t){this._modelFrame=null,this._attachedModel=t,this._init(e)}var t=e("THREE"),n=e("module/component/ModelFrame"),r=e("module/GlobalVar");return i.prototype._init=function(e){var r=new t.CylinderGeometry(1,1,e.y,3);r.rotateX(Math.PI/2),this._modelFrame=new n(r),this._modelFrame.setColor(16776960),this._modelFrame.setPosition(e)},i.prototype.getPosition=function(){return this._modelFrame.get().model.position},i.prototype.detachModel=function(){this._attachedModel.detachSupport(this)},i.prototype.dispose=function(){this._modelFrame.dispose()},i.prototype.get=function(){return{model:this._modelFrame.get().model,box:this._modelFrame.get().box}},i.prototype.update=function(){this._modelFrame.update()},i});