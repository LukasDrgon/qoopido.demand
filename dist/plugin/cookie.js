/*! Qoopido.demand 3.5.2 | https://github.com/dlueth/qoopido.demand | (c) 2016 Dirk Lueth */
!function(t){"use strict";function n(n,e,a,i){function o(t){a(t)?(u.length=0,e(t,function(t,n){u.push({pattern:t,weight:t.length,state:n})})):i(t,"boolean")&&(d=t)}function c(n,e,a){t.cookie="demand["+n+"]="+encodeURIComponent(e)+"; expires="+a+"; path=/"}function r(t){for(var n,e,a=0;n=u[a];a++)0===t.indexOf(n.pattern)&&(!e||n.weight>e.weight)&&(e=n);return!!e&&e.state}var d,u=[];return demand.on("postConfigure:"+n,o),demand.on("cacheMiss cacheClear",function(t){t="string"==typeof t?t:t.path,(d||r(t))&&c(t,"","Thu, 01 Jan 1970 00:00:00 GMT")}).on("postCache",function(t){(d||r(t.path))&&c(t.path,JSON.stringify(t.state),"Fri, 31 Dec 9999 23:59:59 GMT")}),!0}provide(["path","/demand/function/iterate","/demand/validator/isObject","/demand/validator/isTypeOf"],n)}(document);
//# sourceMappingURL=cookie.js.map
