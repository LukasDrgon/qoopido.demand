/**! Qoopido.demand 4.2.3 | https://github.com/dlueth/qoopido.demand | (c) 2017 Dirk Lueth */
!function(){"use strict";function t(t){function e(t){var e,n=document.createDocumentFragment();for(o.innerHTML=t;e=o.firstElementChild;)n.appendChild(e);return n}function n(){}var r=/^text\/html/,o=document.createElement("body");return n.prototype={validate:function(t){return r.test(t)},onPreRequest:function(t){var e=t.url.pathname;t.url.pathname=".html"!==e.slice(-".html".length)?e+".html":e},process:function(t){provide(function(){return e(t.source)})}},new(n.extends(t))}provide(["/demand/abstract/handler"],t)}();
//# sourceMappingURL=html.js.map
