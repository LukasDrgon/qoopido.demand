/*! Qoopido.demand 2.0.5 | https://github.com/dlueth/qoopido.demand | (c) 2015 Dirk Lueth */
!function(t){"use strict";function e(e,n,i){function a(e,n,i){t.cookie="demand["+e+"]="+encodeURIComponent(n)+"; expires="+i+"; path=/"}function o(t){for(var e,n,i=0;e=s[i];i++)0===t.indexOf(e.pattern)&&(!n||e.weight>n.weight)&&(n=e);return n?n.state:!1}var r,c,s=[];if(n(e))for(c in e)s.push({pattern:c,weight:c.length,state:e[c]});else i(e,"boolean")&&(r=e);return demand.on("cacheMiss cacheClear",function(t){t="string"==typeof t?t:t.path,(r||o(t))&&a(t,"","Thu, 01 Jan 1970 00:00:00 GMT")}).on("postCache",function(t){(r||o(t.path))&&a(t.path,JSON.stringify(t.state),"Fri, 31 Dec 9999 23:59:59 GMT")}),!0}provide(["settings","/demand/validator/isObject","/demand/validator/isTypeOf"],e)}(document);
//# sourceMappingURL=cookie.js.map
