/*! Qoopido.demand 3.5.6 | https://github.com/dlueth/qoopido.demand | (c) 2016 Dirk Lueth */
!function(e){"use strict";function t(e){return c.href=e,c}function r(e,t,r){return i.test(t[1])||(e=e.replace(t[0],r)),e}function s(){return{matchType:/^text\/css/,onPreRequest:function(){var e=this,t=e.url;e.url=".css"!==t.slice(-4)?t+".css":t},onPostRequest:function(){for(var e,s=this,n=t(s.url+"/.."),c=n.href,i="//"+n.host,h=s.source;e=u.exec(h);)h=r(h,e,'url("'+t(a.test(e[1])?i+e[1]:c+e[1]).href+'")');for(;e=o.exec(h);)h=r(h,e,'@import "'+t(a.test(e[1])?i+e[1]:c+e[1]).href+'"');s.source=h},process:function(){var t=this,r=e.querySelector('[demand-path="'+t.path+'"]'),s=t.source;r||(r=e.createElement("style"),r.type="text/css",r.setAttribute("demand-path",t.path),n.appendChild(r)),"STYLE"===r.tagName&&(r.styleSheet?r.styleSheet.cssText=s:r.textContent=s),provide(function(){return r})}}}var n=e.getElementsByTagName("head")[0],c=e.createElement("a"),u=/url\s*\(\s*["']?(.+?)["']?\s*\)/gi,o=/@import\s+["'](.+?)["']/gi,a=/^\//i,i=/^data:|http(s?):|\/\//i;provide(s)}(document);
//# sourceMappingURL=css.js.map
