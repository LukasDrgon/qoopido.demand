/**! Qoopido.demand 4.0.7 (MIT OR GPL-3.0+) | https://github.com/dlueth/qoopido.demand | (c) 2017 Dirk Lueth */
!function(){"use strict";function e(e,n,r,t){function o(){var e,t=this,o=t.deferred,d=u[t.path]&&u[t.path].probe;r.process(t),d&&(e=d())?provide(function(){return e}):o.reject(new n("error probing",t.path))}function d(){}var u={};return demand.on("postConfigure:"+e,function(e){u=t(e)?e:{}}),d.prototype={onPreProcess:function(e){var n=u[e.path]&&u[e.path].dependencies;n&&(e.enqueue=demand.apply(null,n))},process:function(e){var r=o.bind(e);e.enqueue===!0?r():e.enqueue.then(r,function(){e.deferred.reject(new n("error resolving",e.path,arguments))})}},new(d.extends(r))}provide(["path","/demand/failure","/demand/handler/module","/demand/validator/isObject"],e)}();
//# sourceMappingURL=legacy.js.map
