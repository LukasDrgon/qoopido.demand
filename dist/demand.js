/*! Qoopido.demand 3.0.0 | https://github.com/dlueth/qoopido.demand | (c) 2016 Dirk Lueth */
!function(e,t,r,n,c,a,o){"use strict";function i(){for(var e,t=this!==window?this:te,r=U.call(arguments),n=0;e=r[n];n++)r[n]=I.dependency(e,t);return x.all(r)}function s(e){var t,r=e.cache,n=e.version,c=e.timeout,a=e.lifetime,o=e.base,i=e.pattern,s=e.modules,u=le.modules;if(b(r,Z))le.cache[""]={weight:0,state:r};else if(j(r))for(t in r)le.cache[t]={weight:t.length,state:r[t]};if(b(n,Y)&&(le.version=n),P(c)&&(le.timeout=1e3*Math.min(Math.max(c,2),12)),P(a)&&a>0&&(le.lifetime=1e3*a),b(o,Y)&&""!==o&&(le.pattern.base=new E("",o)),j(i))for(t in i)"base"!==t&&(le.pattern[t]=new E(t,i[t]));if(j(s))for(t in s)t!==F&&(u[t]=s[t])}function u(e){fe[e]&&(!!fe[e].cache&&C.clean.path(e),delete fe[e],delete pe[e])}function l(e,t){var r;if(b(e,Y)&&b(t,ee))for(e=e.split(" ");r=e.shift();)ue.test(r)&&(he[r]||(he[r]=[])).push(t);return i}function f(e){var t,r,n,c=he[e];if(c)for(t=U.call(arguments,1),r=0;n=c[r];r++)n.apply(te,t)}function p(e){var t,r,n;if(e){t=[];for(r in fe)n=fe[r].pledge,n.state!==e&&n.cache!==e||t.push(r)}else t=Object.keys(fe);return t}function h(){var e,t,r,n=arguments,c=b(n[0],Y)?n[0]:te,a=k(n[c?1:0])?n[c?1:0]:te,o=a?n[c?2:1]:n[c?1:0];if(!c&&O.current&&(c=O.current.path,O.current=te,O.items>0&&O.process()),!c)throw"unspecified anonymous provide";c=I.path(c,this),e=fe[c]||(fe[c]=x.defer()),t=e.pledge,r=b(o,ee),t.state===K&&(a?i.apply(c,a).then(function(){e.resolve(r?o.apply(te,arguments):o)},function(){d(new q("error providing",c,arguments))}):e.resolve(r?o():o))}function d(e){b(console,"undefined")||console.error(e.toString())}function m(e){for(var t,r,n,c=[],a=0;t=e[a];a++)n=t.match(ie),t=t.replace(ie,""),e[a]=(n?"mock:"+n.slice(1).join(""):"mock:")+"!"+t,r=(pe[t]=x.defer()).pledge,r.then(function(e){delete pe[e.path]}),c.push(r);return i.apply(te,e),x.all(c)}function v(e,t){h(e,function(){return t})}function g(e){return e.replace(se,"\\$&")}function y(e,t){return new RegExp(e,t)}function w(){return+new Date}function k(e){return"[object Array]"===H.call(e)}function j(e){return e&&b(e,"object")}function b(e,t){return typeof e===t}function R(e,t){return e instanceof t}function P(e){return b(e,"number")&&isFinite(e)&&Math.floor(e)===e&&e>=0}function x(e){function t(){n(V,arguments)}function r(){n(W,arguments)}function n(e,t){var r;c.state===K&&(c.state=e,c.value=t,a[e].forEach(function(e){try{r=e.handler.apply(te,t),r&&"function"==typeof r.then?r.then(e.defered.resolve,e.defered.reject):e.defered.resolve(r)}catch(n){e.defered.reject(n)}}))}var c=this,a={resolved:[],rejected:[]};c.then=function(e,t){var r=x.defer();if(c.state===K)e&&a[V].push({handler:e,defered:r}),t&&a[W].push({handler:t,defered:r});else switch(c.state){case V:try{r.resolve(e&&e.apply(te,c.value))}catch(n){r.reject(n)}break;case W:try{r.reject(t&&t.apply(te,c.value))}catch(n){r.reject(n)}}return r.pledge},e(t,r)}function E(e,t){var r=this;r.weight=e.length,r.url=I.url(t).replace(oe,"$1"),r.matchPattern=y("^"+g(e)),r.matchUrl=y("^"+g(t))}function q(e,t,r){var n=this;n.message=e,t&&(n.module=t),r&&(n.stack=U.call(r))}function S(){var e=this;e.items=0,e.stack=[]}function T(e,t){var r,n,o=this,s=x.defer(),u=s.pledge,l=t.handler;return o.deferred=s,o.path=e,o.url=t.url,o.cache=t.cache,o.version=t.version,o.lifetime=t.lifetime,i(G+l).then(function(e){o.handler=e,o.mock=t.mock?pe[o.path]:te,e.onPreRequest&&e.onPreRequest.call(o),o.mock?o.mock.dependencies?o.mock.dependencies.then(function(){o.mock.resolve(o)},o.mock.reject):o.mock.resolve(o):o.cache!==!1&&C.get(o)?c(function(){I.loader(o)}):(f("preRequest",o),u.state===K&&(r=M.test(o.url)?new re:new ne,r.onprogress=function(){},r.ontimeout=r.onerror=r.onabort=function(){s.reject(new q("timeout requesting",o.path))},r.onload=function(){var t=r.getResponseHeader&&r.getResponseHeader("content-type");n=a(n),"status"in r&&200!==r.status||t&&e.matchType&&!e.matchType.test(t)?s.reject(new q("error requesting",o.path)):(o.source=r.responseText,f("postRequest",o),u.state===K&&(e.onPostRequest&&e.onPostRequest.call(o),I.loader(o),o.cache!==!1&&u.then(function(){C.set(o)})))},r.open("GET",o.url,!0),r.send(),n=c(function(){r.readyState<4&&r.abort()},le.timeout)))},s.reject),s}var I,M,O,C,A=Array.prototype,U=A.slice,$=A.concat,D=Object.prototype,H=D.toString,X=t.createElement("a"),L="demand",N="provide",_="settings",B="/"+L+"/",F=B+"storage/",G=B+"handler/",J=B+"local",Q=B+"settings",z=B+"validator/",K="pending",V="resolved",W="rejected",Y="string",Z="boolean",ee="function",te=null,re=n,ne="XDomainRequest"in e&&e.XDomainRequest||re,ce=/^\//,ae=/^(http(s?):)?\/\//i,oe=/(.+)\/$/,ie=/^(mock:)?([+-])?((?:[-\w]+\/?)+)?(?:@(\d+\.\d+.\d+))?(?:#(\d+))?(!)?/,se=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,ue=/^cache(Miss|Hit|Clear|Exceed)|(pre|post)(Request|Process|Cache)$/,le={cache:{},timeout:8e3,pattern:{},modules:{},handler:"module"},fe={},pe={},he={};I={url:function(e){return X.href=e,X.href},path:function(e,t){return e=e.replace(ie,""),ce.test(e)||ae.test(e)||(e="/"+I.url((t&&I.url(t+"/../")||"/")+e).replace(M,"")),e},dependency:function(e,t){var r,n,c=b(e,Y)?I.path(e,t):te;if(c){if(t&&(e===L||e===N||e===_)){switch(e){case L:c=J+c,r=function(){var e,r=i.bind(t);for(e in i)r[e]=i[e];return r};break;case N:c=J+c,r=function(){return h.bind(t)};break;case _:c=Q+t,r=function(){return le.modules[t]||te}}!fe[c]&&h(c,r)}return(fe[c]||(fe[c]=new T(c,I.parameter(e,t)))).pledge}return n=x.defer(),n.resolve(e),n.pledge},parameter:function(e,t){var r,n,c=e.match(ie),a=le.pattern;if(e=I.path(e,t),!ae.test(e))for(r in a)a[r].matches(e)&&(!n||n.weight<a[r].weight)&&(n=a[r]);return{mock:!(!c||!c[1]),cache:c&&c[2]?"+"===c[2]:te,handler:c&&c[3]||le.handler,version:c&&c[4]||le.version,lifetime:c&&c[5]&&1e3*c[5]||le.lifetime,url:n?I.url(n.process(e)):e}},loader:function(e){var t=e.handler;f("preProcess",e),e.deferred.pledge.state===K&&(t.onPreProcess&&t.onPreProcess.call(e),t.process&&O.add(e))}},x.prototype={state:K},x.defer=function(){var e={};return e.pledge=new x(function(t,r){e.resolve=t,e.reject=r}),e},x.all=function(e){function t(){o===a?r.resolve.apply(te,$.apply([],n)):c.length+o===a&&r.reject.apply(te,$.apply([],c))}var r=x.defer(),n=[],c=[],a=e.length,o=0;return e.forEach(function(e,r){e.then(function(){n[r]=U.call(arguments),o++,t()},function(){c.push(U.call(arguments)),t()})}),r.pledge},x.race=function(e){var t=x.defer();return e.forEach(function(e){e.then(t.resolve,t.reject)}),t.pledge},E.prototype={matches:function(e){return this.matchPattern.test(e)},remove:function(e){return e.replace(this.matchUrl,"")},process:function(e){var t=this;return e.replace(t.matchPattern,t.url)}},q.prototype={toString:function(){var e=this,t=L+": "+e.message+" "+(e.module?'"'+e.module+'"':"");return e.stack&&(t=q.traverse(e.stack,t,1)),t}},q.traverse=function(e,t,r){var n=new Array(r+1).join(" ");return e.forEach(function(e){t+="\n"+n+"> "+e.message+" "+(e.module?'"'+e.module+'"':""),e.stack&&(t=q.traverse(e.stack,t,r+1))}),t},S.prototype={add:function(){O.stack=O.stack.concat(U.call(arguments)),O.items+=arguments.length,!O.current&&O.process()},process:function(){var e;O.items&&(O.items--,e=O.current=O.stack.shift(),e.handler.process.call(e),f("postProcess",e))}},M=y("^"+g(I.url("/"))),s({cache:!0,base:"/",pattern:{"/demand":I.url((o&&o.url||location.href)+"/../").slice(0,-1)}}),o&&o.settings&&s(o.settings),v(B+"queue",(O=new S).add),v(B+"mock",m),v(B+"pledge",x),v(B+"reason",q),v(B+"function/resolveUrl",I.url),v(z+"isArray",k),v(z+"isObject",j),v(z+"isTypeOf",b),v(z+"isInstanceOf",R),v(z+"isPositiveInteger",P),i.configure=s,i.remove=u,i.on=l,i.list=p,e.demand=i,e.provide=h,function(){function e(){var e=t.getElementsByTagName("head")[0],r=/\/\/#\s+sourceMappingURL\s*=\s*(?!(?:http[s]?:)?\/\/)(.+?)\.map/g;return{matchType:/^(application|text)\/javascript/,onPreRequest:function(){var e=this,t=e.url;e.url=".js"!==t.slice(-3)?t+".js":t},onPostRequest:function(){var e,t,n=this,c=n.source;if(c){for(;e=r.exec(c);)ce.test(e[1])?(X.href=n.url,t=X.protocol+"//"+X.host+e[1]):t=I.url(n.url+"/../"+e[1]),c=c.replace(e[0],"//# sourceMappingURL="+t+".map");n.source=c}},process:function(){var r,n=this,c=n.source;c&&(r=t.createElement("script"),r.async=!0,r.text=c,r.setAttribute("demand-path",n.path),e.appendChild(r))}}}h(G+"module",e)}(),function(){function t(){function t(e){var t,r,n;if(e.cache!==te)return e.cache;for(t in le.cache)r=le.cache[t],0===e.path.indexOf(t)&&(!n||r.weight>n.weight)&&(n=r);return n?n.state:!1}function n(){}var c="["+L+"]",a="[state]",o="[value]",s=y("^"+g(c)+"\\[(.+?)\\]"+g(a)+"$"),u=function(){try{return"localStorage"in e&&e.localStorage}catch(t){return!1}}(),l=u&&"remainingSpace"in u;return n.prototype={get:function(e){var n,i,s,l=e.path;if(u&&t(e)){if(n=c+"["+l+"]",i=r.parse(u.getItem(n+a)),s=e.deferred.pledge,i&&i.version===e.version&&i.url===e.url&&(!i.expires&&!e.lifetime||i.expires>w()))return s.cache="hit",e.source=u.getItem(n+o),f("cacheHit",e),e.source;s.cache="miss",f("cacheMiss",e),this.clear.path(l)}},set:function(e){var n,i,s,p=e.path;if(u&&t(e)){f("preCache",e),n=e.lifetime,i=c+"["+p+"]",e.state={version:e.version,expires:n?w()+n:n,url:e.url};try{if(s=l?u.remainingSpace:te,u.setItem(i+o,e.source),u.setItem(i+a,r.stringify(e.state)),s!==te&&u.remainingSpace===s)throw"QUOTA_EXCEEDED_ERR";f("postCache",e)}catch(h){f("cacheExceed",e)}}},clear:{path:function(e){var t;u&&(t=c+"["+e+"]",u.removeItem(t+a),u.removeItem(t+o),f("cacheClear",e))},all:function(){var e,t;if(u)for(e in u)t=e.match(s),t&&this.path(t[1])},expired:function(){var e,t,n;if(u)for(e in u)t=e.match(s),t&&(n=r.parse(u.getItem(c+"["+t[1]+"]"+a)),n&&n.expires>0&&n.expires<=w()&&this.path(t[1]))}}},C=new n,C.clear.expired(),i.clear=C.clear,C}h(F,t)}(),o&&o.main&&i(o.main)}(this,document,JSON,XMLHttpRequest,setTimeout,clearTimeout,"demand"in this&&demand);
//# sourceMappingURL=demand.js.map
