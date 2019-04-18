define(["require","THREE","module/GlobalVar"],function(e){"use strict";function o(e){this._scene=new t.Scene,this._init(),this._meshes=[]}var t=e("THREE"),n=e("module/GlobalVar"),r=new t.Vector2(0,0,0),i=new t.Raycaster,s=new t.Raycaster;return s.near=2.5,o.prototype.HIT_RESULT_CHANNEL={MESH:0,STATIC_MESH:1},o.prototype._init=function(){var e=new t.GridHelper(80,10);e.setColors(14211288,6711432),this.addStaticMesh(e);var n=new t.DirectionalLight(16777215,1.89);n.position.set(-1,-1,-1).normalize(),this.addLight(n),n=new t.DirectionalLight(16777215,1.2),n.position.set(1,1,1).normalize(),this.addLight(n),this.addLight(new t.AmbientLight("#556699"))},o.prototype.get=function(){return this._scene},o.prototype.addLight=function(e){this._scene.add(e)},o.prototype.addMesh=function(e){this._scene.add(e),this._meshes.push(e)},o.prototype.removeMesh=function(e){this._scene.remove(e);var t=this._meshes.indexOf(e),n=t>-1;n&&this._meshes.splice(t,1)},o.prototype.addStaticMesh=function(e){this._scene.add(e)},o.prototype.removeStaticMesh=function(e){this._scene.remove(e)},o.prototype.getVectorHitResultBy=function(e,t,n){s.set(e,t);var r=null;switch(n){case this.HIT_RESULT_CHANNEL.MESH:r=s.intersectObjects(this._meshes,!0);break;default:}return r},o.prototype.getHitResultBy=function(e,t){e.preventDefault();var s=n.sceneController.getCameraManager(),o=s.getViewport(),u=o.getBoundingClientRect(),a=(e.clientX-u.left)/u.width,f=(e.clientY-u.top)/u.height;r.set(a*2-1,-(f*2)+1),i.setFromCamera(r,s.get());var l=null;switch(t){case this.HIT_RESULT_CHANNEL.MESH:l=i.intersectObjects(this._meshes,!0);break;default:}return l},o});