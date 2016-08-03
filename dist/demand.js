/*! Qoopido.demand 3.0.5 | https://github.com/dlueth/qoopido.demand | (c) 2016 Dirk Lueth */
!function(e,t,n,r,o,i,c,a,s,u,l){"use strict";function f(e){var t,n,r,o=ve[e];if(o)for(t=X.call(arguments,1),n=0;r=o[n];n++)r.apply(ie,t)}function p(e){P(console,"undefined")||console.error(e.toString())}function h(e,t){H(e,function(){return t})}function d(e){for(var t,n,r,o=[],i=0;t=e[i];i++)r=t.match(le),t=t.replace(le,""),e[i]=(r?"mock:"+r.slice(1).join(""):"mock:")+"!"+t,n=(ge[t]||(ge[t]=S.defer())).pledge,o.push(n);return A.apply(ie,e),S.all(o)}function m(e){return e.replace(fe,"\\$&")}function g(e,t){return new RegExp(e,t)}function v(){return+new Date}function y(e){return de.href=e,de.href}function w(e,t){return e=e.replace(le,""),ae.test(e)||se.test(e)||(e="/"+y((t&&y(t+"/../")||"/")+e).replace($,"")),e}function k(e,t){var n,r,o;if(P(e,ne)){if(n=w(e,t),t&&(e===_||e===B||e===F)){switch(e){case _:n=K+n,r=function(){var e,n=A.bind(t);for(e in A)n[e]=A[e];return n};break;case B:n=K+n,r=function(){return H.bind(t)};break;case F:n=V+t,r=function(){return t}}!me[n]&&H(n,r)}return(me[n]||(me[n]=new O(n,R(e,t)))).pledge}return q(e,S)?e:(o=S.defer(),o.resolve(e),o.pledge)}function R(e,t){var n,r,o=e.match(le),i=he.pattern;if(e=w(e,t),!se.test(e))for(n in i)i[n].matches(e)&&(!r||r.weight<i[n].weight)&&(r=i[n]);return{mock:!(!o||!o[1]),cache:o&&o[2]?"+"===o[2]:ie,handler:o&&o[3]||he.handler,version:o&&o[4]||he.version,lifetime:o&&o[5]&&1e3*o[5]||he.lifetime,url:r?y(r.process(e)):e}}function b(e){var t=e.handler;f("preProcess",e),e.deferred.pledge.state===Z&&(t.onPreProcess&&t.onPreProcess.call(e),t.process&&D.add(e))}function x(e){return"[object Array]"===N.call(e)}function j(e){return e&&P(e,"object")}function P(e,t){return typeof e===t}function q(e,t){return e instanceof t}function C(e){return P(e,"number")&&isFinite(e)&&Math.floor(e)===e&&e>=0}function E(){for(var e,t,n,r,o,i=arguments[0],c=1;(e=arguments[c])!==l;c++)for(t in e)n=i[t],o=e[t],o!==l&&(j(o)?(r=j(n),n=o.length!==l?r&&n.length!==l?n:[]:r&&n.length===l?n:{},i[t]=E(n,o)):i[t]=o);return i}function T(e,t){var n=this;n.weight=e.length,n.url=y(t).replace(ue,"$1"),n.matchPattern=g("^"+m(e)),n.matchUrl=g("^"+m(t))}function O(e,t){var n,r,c=this,a=S.defer(),s=a.pledge,l=t.handler;return c.deferred=a,c.path=e,c.url=t.url,c.cache=t.cache,c.version=t.version,c.lifetime=t.lifetime,A(Q+l).then(function(e){c.handler=e,c.mock=t.mock?ge[c.path]:ie,e.onPreRequest&&e.onPreRequest.call(c),c.mock?c.mock.dependencies?c.mock.dependencies.then(function(){c.mock.resolve(c)},c.mock.reject):c.mock.resolve(c):c.cache!==!1&&U.get(c)?o(function(){b(c)}):(f("preRequest",c),s.state===Z&&(n=$.test(c.url)?new u:new ce,n.onprogress=function(){},n.ontimeout=n.onerror=n.onabort=function(){a.reject(new I("timeout requesting",c.path))},n.onload=function(){var t=n.getResponseHeader&&n.getResponseHeader("content-type");r=i(r),"status"in n&&200!==n.status||t&&e.matchType&&!e.matchType.test(t)?a.reject(new I("error requesting",c.path)):(c.source=n.responseText,f("postRequest",c),s.state===Z&&(e.onPostRequest&&e.onPostRequest.call(c),b(c),c.cache!==!1&&s.then(function(){U.set(c)})))},n.open("GET",c.url,!0),n.send(),r=o(function(){n.readyState<4&&n.abort()},he.timeout)))},a.reject),a}function S(e){function t(){r(ee,arguments)}function n(){r(te,arguments)}function r(e,t){var n,r;if(o.state===Z){for(o.state=e,o.value=t;n=i[e].shift();)r=n.handler.apply(ie,t),r&&"function"==typeof r.then?r.then(n.deferred.resolve,n.deferred.reject):n.deferred.resolve(r);i=ie}}var o=this,i={resolved:[],rejected:[]};o.then=function(e,t){var n=S.defer();if(o.state===Z)e&&i[ee].push({handler:e,deferred:n}),t&&i[te].push({handler:t,deferred:n});else switch(o.state){case ee:n.resolve(e&&e.apply(ie,o.value));break;case te:n.reject(t&&t.apply(ie,o.value))}return n.pledge},e(t,n)}function I(e,t,n){this.message=e,t&&(this.module=t),n&&(this.stack=X.call(n))}function M(){this.items=0,this.stack=[]}function A(){var e,t=X.call(arguments),n=this!==window?this:ie,r=0;for(f("preResolve",t,n);e=t[r];r++)t[r]=k(e,n);return f("postResolve",t,n),S.all(t)}function H(){var e,t,n,r=arguments,o=P(r[0],ne)?r[0]:ie,i=x(r[o?1:0])?r[o?1:0]:ie,c=i?r[o?2:1]:r[o?1:0];if(!o&&D.current&&(o=D.current.path,D.current=ie,D.items>0&&D.process()),!o)throw"unspecified anonymous provide";o=w(o,this),e=me[o]||(me[o]=S.defer()),t=e.pledge,n=P(c,oe),t.state===Z&&(i?A.apply(o,i).then(function(){e.resolve(n?c.apply(ie,arguments):c)},function(){p(new I("error providing",o,arguments))}):e.resolve(n?c():c))}var $,D,U,X=a.slice,L=a.concat,N=s.toString,_="demand",B="provide",F="path",G="/"+_+"/",J=G+"storage/",Q=G+"handler/",z=G+"plugin/",K=G+"local",V=G+"paths",W=G+"function/",Y=G+"validator/",Z="pending",ee="resolved",te="rejected",ne="string",re="boolean",oe="function",ie=null,ce="XDomainRequest"in e&&e.XDomainRequest||u,ae=/^\//,se=/^(http(s?):)?\/\//i,ue=/(.+)\/$/,le=/^(mock:)?([+-])?((?:[-\w]+\/?)+)?(?:@(\d+\.\d+.\d+))?(?:#(\d+))?!/,fe=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,pe=/^cache(Miss|Hit|Clear|Exceed)|(pre|post)(Configure.*|Resolve|Request|Process|Cache)$/,he={cache:{},timeout:8e3,pattern:{},modules:{},handler:"module"},de=t.createElement("a"),me={},ge={},ve={};T.prototype={matches:function(e){return this.matchPattern.test(e)},remove:function(e){return e.replace(this.matchUrl,"")},process:function(e){return e.replace(this.matchPattern,this.url)}},S.prototype={state:Z},S.defer=function(){var e={};return e.pledge=new S(function(t,n){e.resolve=t,e.reject=n}),e},S.all=function(e){function t(e,t){t.then(function(){i[e]=X.call(arguments),s++,n()},function(){c.push(X.call(arguments)),n()})}function n(){s===a?o.resolve.apply(ie,L.apply([],i)):c.length+s===a&&o.reject.apply(ie,L.apply([],c))}for(var r,o=S.defer(),i=[],c=[],a=e.length,s=0,u=0;r=e[u];u++)t(u,r);return o.pledge},S.race=function(e){for(var t,n=S.defer(),r=0;t=e[r];r++)t.then(n.resolve,n.reject);return n.pledge},I.prototype={toString:function(){var e=this,t=_+": "+e.message+" "+(e.module?'"'+e.module+'"':"");return e.stack&&(t=I.traverse(e.stack,t,1)),t}},I.traverse=function(e,t,n){for(var r,o=new Array(n+1).join(" "),i=0;r=e[i];i++)t+="\n"+o+"> "+r.message+" "+(r.module?'"'+r.module+'"':""),r.stack&&(t=I.traverse(r.stack,t,n+1));return t},M.prototype={add:function(){D.stack=D.stack.concat(X.call(arguments)),D.items+=arguments.length,!D.current&&D.process()},process:function(){var e;D.items&&(D.items--,e=D.current=D.stack.shift(),e.handler.process.call(e),f("postProcess",e))}},A.configure=function(e){var t,n,r=e.cache,o=e.version,i=e.timeout,c=e.lifetime,a=e.base,s=e.pattern,u=e.modules,l=he.modules;if(P(r,re))he.cache[""]={weight:0,state:r};else if(j(r))for(t in r)he.cache[t]={weight:t.length,state:r[t]};if(P(o,ne)&&(he.version=o),C(i)&&(he.timeout=1e3*Math.min(Math.max(i,2),12)),C(c)&&c>0&&(he.lifetime=1e3*c),P(a,ne)&&""!==a&&(he.pattern.base=new T("",a)),j(s))for(t in s)"base"!==t&&(he.pattern[t]=new T(t,s[t]));if(j(u))for(t in u)t!==J&&(n=l[t]=l[t]||{},f("preConfigure:"+t,n),E(n,u[t]),f("postConfigure:"+t,n))},A.remove=function(e){me[e]&&(!!me[e].cache&&U.clean.path(e),delete me[e],delete ge[e])},A.on=function(e,t){var n,r;if(P(e,ne)&&P(t,oe))for(e=e.split(" ");n=e.shift();)pe.test(n)&&((ve[n]||(ve[n]=[])).push(t),0===n.indexOf("postConfigure:")&&(r=he.modules[n.substr(14)],r!==l&&t(r)));return A},A.list=function(e){var t,n,r;if(e){t=[];for(n in me)r=me[n].pledge,r.state!==e&&r.cache!==e||t.push(n)}else t=Object.keys(me);return t},function(){function t(){function t(e){var t,n,r;if(e.cache!==ie)return e.cache;for(t in he.cache)n=he.cache[t],0===e.path.indexOf(t)&&(!r||n.weight>r.weight)&&(r=n);return r?r.state:!1}function r(){this.clear.expired()}var o="["+_+"]",i="[state]",c="[value]",a=g("^"+m(o)+"\\[(.+?)\\]"+m(i)+"$"),s=function(){try{return"localStorage"in e&&e.localStorage}catch(t){return!1}}(),u=s&&"remainingSpace"in s;return r.prototype={get:function(e){var r,a,u,l=e.path;if(s&&t(e)){if(r=o+"["+l+"]",a=n.parse(s.getItem(r+i)),u=e.deferred.pledge,a&&a.version===e.version&&a.url===e.url&&(!a.expires&&!e.lifetime||a.expires>v()))return u.cache="hit",e.source=s.getItem(r+c),f("cacheHit",e),e.source;u.cache="miss",f("cacheMiss",e),this.clear.path(l)}},set:function(e){var r,a,l,p=e.path;if(s&&t(e)){f("preCache",e),r=e.lifetime,a=o+"["+p+"]",e.state={version:e.version,expires:r?v()+r:r,url:e.url};try{if(l=u?s.remainingSpace:ie,s.setItem(a+c,e.source),s.setItem(a+i,n.stringify(e.state)),l!==ie&&s.remainingSpace===l)throw"QUOTA_EXCEEDED_ERR";f("postCache",e)}catch(h){f("cacheExceed",e)}}},clear:{path:function(e){var t;s&&(t=o+"["+e+"]",s.removeItem(t+i),s.removeItem(t+c),f("cacheClear",e))},all:function(){var e,t;if(s)for(e in s)t=e.match(a),t&&this.path(t[1])},expired:function(){var e,t,r;if(s)for(e in s)t=e.match(a),t&&(r=n.parse(s.getItem(o+"["+t[1]+"]"+i)),r&&r.expires>0&&r.expires<=v()&&this.path(t[1]))}}},A.clear=(U=new r).clear,U}H(J,t)}(),function(){function e(){var e=t.getElementsByTagName("head")[0],n=/\/\/#\s+sourceMappingURL\s*=\s*(?!(?:http[s]?:)?\/\/)(.+?)\.map/g;return{matchType:/^(application|text)\/(x-)?javascript/,onPreRequest:function(){var e=this.url;this.url=".js"!==e.slice(-3)?e+".js":e},onPostRequest:function(){var e,t,r=this,o=r.source;if(o){for(;e=n.exec(o);)ae.test(e[1])?(de.href=r.url,t=de.protocol+"//"+de.host+e[1]):t=y(r.url+"/../"+e[1]),o=o.replace(e[0],"//# sourceMappingURL="+t+".map");r.source=o}},process:function(){var n,r=this.source;r&&(n=t.createElement("script"),n.async=!0,n.text=r,n.setAttribute("demand-path",this.path),e.appendChild(n))}}}H(Q+"module",e)}(),function(){function e(e){function r(e){t=j(e)?e:{}}return A.on("postConfigure:"+n,r),{matchType:e.matchType,onPostRequest:e.onPostRequest,onPreProcess:function(){var n=this,r=n.deferred,o=t[n.path];d(o).then(function(){D.add.apply(null,arguments),e.process.call(n),A.apply(null,o).then(r.resolve,function(){r.reject(new I("error resolving",n.path,arguments))})},function(){r.reject(new I("error mocking",null,arguments))})}}}var t,n=Q+"bundle";H(n,["/demand/handler/module"],e)}(),function(){function e(){function e(e){if(j(e)){s.length=0;for(a in e)s.push({prefix:a,weight:a.length,fn:e[a]})}}function r(e){for(var t,n,r=0;t=s[r];r++)0===e.indexOf(t.prefix)&&(!n||t.weight>n.weight)&&(n=t);return n}function o(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(0),t&=t;return t}function i(e){var t,n,r=e.matches,o={pattern:{},modules:{"/demand/handler/bundle":{}}},i=0;for(o.pattern[e.id]=e.fn(r),o.modules["/demand/handler/bundle"][e.id]=t=[];n=r[i];i++)t.push(n.id);return o}function c(e){return me[e]&&me[e].pledge||ge[e]&&ge[e].pledge}var a,s=[];return A.on("postConfigure:"+t,e),A.on("preResolve",function(e,a){for(var s,u,l,f,p,h,d,m,g={},v=0;s=e[v];v++)P(s,"string")&&(u=w(s,a),!c(u)&&(l=R(s,a))&&"module"===l.handler&&(f=r(u))&&(g[f.prefix]||(g[f.prefix]={fn:f.fn,matches:[]})).matches.push({id:u,path:s,index:v}));if(p=Object.keys(g),p.length)for(h in g)if(d=g[h],m=d.matches,m.length>1){for(d.id=t+"/"+o(n.stringify(d.matches)),v=0;s=m[v];v++)e[s.index]="mock:!"+s.id;A.configure(i(d)),A("bundle!"+d.id)}}),!0}var t=z+"genie";H(t,e)}(),$=g("^"+m(y("/"))),A.configure({cache:!0,base:"/",pattern:{"/demand":y((c&&c.url||location.href)+"/../").slice(0,-1)}}),c&&c.settings&&A.configure(c.settings),h(Y+"isArray",x),h(Y+"isObject",j),h(Y+"isTypeOf",P),h(Y+"isInstanceOf",q),h(Y+"isPositiveInteger",C),h(W+"merge",E),h(G+"pledge",S),h(G+"reason",I),D=new M,e.demand=A,e.provide=H,c&&c.main&&A(c.main)}(this,document,JSON,XMLHttpRequest,setTimeout,clearTimeout,"demand"in this&&demand,Array.prototype,Object.prototype,XMLHttpRequest);
//# sourceMappingURL=demand.js.map
