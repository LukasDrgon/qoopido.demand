/**! Qoopido.demand 4.1.4 | https://github.com/dlueth/qoopido.demand | (c) 2017 Dirk Lueth */
!function(t){"use strict";function n(n){function r(n){var r,e=t.getItem(n);if(e&&(r=e.match(d)))return Array.prototype.slice.call(r,1)}function e(t){return"["+i+"]["+t+"]["+o+"]"}function a(t){var n,a=t.match(u);a&&(n=r(e(a[1])),n[5]=a[1],this.push(n))}function c(t,n){return t[4]<n[4]?-1:t[4]>n[4]?1:0}var i="demand",o="state",u=new RegExp("^\\["+i+"\\]\\[(.+?)\\]\\["+o+"\\]$"),d=/^(.+?),(\d+),(\d*),(.+?),(\d+)$/;return n(t,function(t){var n,a=t.match(u);a&&(n=r(e(a[1])),n[4]||demand.clear.path(a[1]))}),function(r){var e,i=[];for(n(t,a,i),i.sort(c);r>0&&i.length;)e=i.shift(),r-=e[1],demand.clear.path(e[5])}}provide(["/demand/function/iterate"],n)}(localStorage);
//# sourceMappingURL=dispose.js.map
