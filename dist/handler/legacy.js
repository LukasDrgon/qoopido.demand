/**! Qoopido.demand 4.0.5 (MIT OR GPL-3.0+) | https://github.com/dlueth/qoopido.demand | (c) 2017 Dirk Lueth */
!function(){"use strict";function e(e,n,r,t){function o(){var e,t=this,o=t.deferred,d=i[t.path]&&i[t.path].probe;r.process.call(t),d&&(e=d())?provide(function(){return e}):o.reject(new n("error probing",t.path))}function d(){}var i={};return demand.on("postConfigure:"+e,function(e){i=t(e)?e:{}}),d.prototype={onPreProcess:function(){var e=this,n=i[e.path]&&i[e.path].dependencies;n&&(e.enqueue=demand.apply(null,n))},process:function(){var e=this,r=o.bind(e);e.enqueue===!0?r():e.enqueue.then(r,function(){e.deferred.reject(new n("error resolving",e.path,arguments))})}},new(d.extends(r))}provide(["path","/demand/failure","/demand/handler/module","/demand/validator/isObject"],e)}();
//# sourceMappingURL=legacy.js.map
