/**! Qoopido.demand 4.2.1 | https://github.com/dlueth/qoopido.demand | (c) 2017 Dirk Lueth */
!function(){"use strict";function e(e,n,t,r){function o(){var e,r=this,o=r.dfd,u=a[r.path]&&a[r.path].probe;t.process(r),u&&(e=u())?provide(function(){return e}):o.reject(new n("error probing",r.path))}function u(){}var a={};return demand.on("postConfigure:"+e,function(e){a=r(e)?e:{}}),u.prototype={onPreRequest:function(e){var n=a[e.path]&&a[e.path].dependencies;t.onPreRequest(e),n&&(e.enqueue=demand.apply(null,n))},onPreProcess:function(e){var n=a[e.path]&&a[e.path].dependencies;n&&"boolean"==typeof e.enqueue&&(e.enqueue=demand.apply(null,n))},process:function(e){var t=o.bind(e);e.enqueue===!0?t():e.enqueue.then(t,function(){e.dfd.reject(new n("error resolving",e.path,arguments))})}},new(u.extends(t))}provide(["path","/demand/failure","/demand/handler/module","/demand/validator/isObject"],e)}();
//# sourceMappingURL=legacy.js.map
