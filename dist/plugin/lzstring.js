/**! Qoopido.demand 4.2.0 | https://github.com/dlueth/qoopido.demand | (c) 2017 Dirk Lueth */
!function(){"use strict";function t(t,e,n,o){function r(t,e){function n(){b===e?(g.push(i(v)),b=0,v=0):b++}function o(){if(p.call(s,h)){if(h.charCodeAt(0)<256){for(r=0;r<w;r++)v<<=1,n();for(a=h.charCodeAt(0),r=0;r<8;r++)v=v<<1|1&a,n(),a>>=1}else{for(a=1,r=0;r<w;r++)v=v<<1|a,n(),a=0;for(a=h.charCodeAt(0),r=0;r<16;r++)v=v<<1|1&a,n(),a>>=1}d--,0===d&&(d=Math.pow(2,w),w++),delete s[h]}else for(a=c[h],r=0;r<w;r++)v=v<<1|1&a,n(),a>>=1;d--}var r,a,c={},s={},u="",f="",h="",d=2,l=3,w=2,g=[],v=0,b=0,C=0;for(e-=1;t[C];C++)u=t.charAt(C),p.call(c,u)||(c[u]=l++,s[u]=!0),f=h+u,p.call(c,f)?h=f:(o(),0===d&&(d=Math.pow(2,w),w++),c[f]=l++,h=String(u));for(""!==h&&(o(),0===d&&w++),a=2,r=0;r<w;r++)v=v<<1|1&a,n(),a>>=1;for(;;){if(v<<=1,b===e){g.push(i(v));break}b++}return g.join("")}function a(t,e,n){function o(e){for(m=0,k=1;k!==e;)s=M.val&M.position,M.position>>=1,0===M.position&&(M.position=n,M.val=c(t,M.index++)),m|=(s>0?1:0)*k,k<<=1}var r,a,i,s,u,f=[],p=4,g=4,v=3,b="",C=[],M={val:c(t,0),position:n,index:1},m=0,A=d,k=1;for(a=0;a<3;a++)f[a]=a;switch(o(A),r=m){case 0:o(l),u=h(m);break;case 1:o(w),u=h(m);break;case 2:return""}for(f[3]=u,i=u,C.push(u);;){if(M.index>e)return"";switch(o(Math.pow(2,v)),u=m){case 0:o(l),f[g++]=h(m),u=g-1,p--;break;case 1:o(w),f[g++]=h(m),u=g-1,p--;break;case 2:return C.join("")}if(0===p&&(p=Math.pow(2,v),v++),f[u])b=f[u];else{if(u!==g)return null;b=i+i.charAt(0)}C.push(b),f[g++]=i+b.charAt(0),p--,i=b,0===p&&(p=Math.pow(2,v),v++)}}function i(t){return h(t+32)}function c(t,e){return t.charCodeAt(e)-32}function s(t){return t?r(t,15)+" ":""}function u(t){return t?a(t,t.length,16384):""}function f(t){for(var e,n,o=0;e=g[o];o++)0===t.indexOf(e.pattern)&&(!n||e.weight>n.weight)&&(n=e);return!!n&&n.state}var h=String.fromCharCode,p=Object.prototype.hasOwnProperty,d=Math.pow(2,2),l=Math.pow(2,8),w=Math.pow(2,16),g=[{pattern:t,weight:t.length,state:!1}],v={};return demand.on("postConfigure:"+t,function(t){n(t)?(g.length=0,e(t,function(t,e){g.push({pattern:t,weight:t.length,state:e})})):o(t,"boolean")&&g.push({pattern:"",weight:0,state:t})}).on("cacheHit",function(t){f(t.path)&&(v[t.id]=!0)}).on("preCache",function(t){f(t.path)&&(t.source=s(t.source))}).on("preProcess",function(t){v[t.id]&&(t.source=u(t.source))}),{compress:s,decompress:u}}provide(["path","/demand/function/iterate","/demand/validator/isObject","/demand/validator/isTypeOf"],t)}();
//# sourceMappingURL=lzstring.js.map
