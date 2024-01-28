import{s as U,e as d,c as p,b as v,f as u,l as g,i as $,k as z,m as G,n as T,a as H,g as S,o as J,t as I,d as V,p as k,h as b,q as K,j}from"../chunks/scheduler.bTGyuiJn.js";import{S as L,i as Q,t as y,c as F,a as w,g as M,b as W,d as X,m as Y,e as Z}from"../chunks/index._NyPdpr1.js";import{e as N}from"../chunks/radixNetworkConstants.gbOvRwhS.js";import{t as ee,T as te}from"../chunks/transactionManager.1pGo5uiP.js";import{s as P}from"../chunks/entityCache.819eA3K0.js";function R(n,e,l){var f;const t=n.slice();t[4]=e[l];const i=t[4].intentHash===((f=t[0])==null?void 0:f.intentHash);return t[5]=i,t}function se(n){let e,l="No transactions yet";return{c(){e=d("div"),e.textContent=l,this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-fsroox"&&(e.textContent=l),this.h()},h(){g(e,"class","col-span-10 h-full flex flex-col justify-center items-center text-2xl text-slate-700 font-semibold")},m(t,i){$(t,e,i)},p:T,i:T,o:T,d(t){t&&u(e)}}}function le(n){let e,l,t,i,f=N(n[1]),r=[];for(let s=0;s<f.length;s+=1)r[s]=A(R(n,f,s));let a=n[0]&&q(n);return{c(){e=d("div");for(let s=0;s<r.length;s+=1)r[s].c();l=H(),t=d("div"),a&&a.c(),this.h()},l(s){e=p(s,"DIV",{class:!0});var c=v(e);for(let _=0;_<r.length;_+=1)r[_].l(c);c.forEach(u),l=S(s),t=p(s,"DIV",{class:!0});var o=v(t);a&&a.l(o),o.forEach(u),this.h()},h(){g(e,"class","col-span-2 flex flex-col-reverse justify-end bg-white border-r border-r-slate-300"),g(t,"class","col-span-8")},m(s,c){$(s,e,c);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);$(s,l,c),$(s,t,c),a&&a.m(t,null),i=!0},p(s,c){if(c&3){f=N(s[1]);let o;for(o=0;o<f.length;o+=1){const _=R(s,f,o);r[o]?r[o].p(_,c):(r[o]=A(_),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=f.length}s[0]?a?(a.p(s,c),c&1&&w(a,1)):(a=q(s),a.c(),w(a,1),a.m(t,null)):a&&(M(),y(a,1,1,()=>{a=null}),F())},i(s){i||(w(a),i=!0)},o(s){y(a),i=!1},d(s){s&&(u(e),u(l),u(t)),J(r,s),a&&a.d()}}}function A(n){let e,l,t,i=(n[4].label?n[4].label:"<unnamed>")+"",f,r,a,s=P(n[4].intentHash,10,7)+"",c,o,_,x;function O(){return n[3](n[4])}return{c(){e=d("button"),l=d("div"),t=d("span"),f=I(i),r=H(),a=d("span"),c=I(s),o=H(),this.h()},l(m){e=p(m,"BUTTON",{class:!0});var h=v(e);l=p(h,"DIV",{class:!0});var E=v(l);t=p(E,"SPAN",{class:!0});var C=v(t);f=V(C,i),C.forEach(u),r=S(E),a=p(E,"SPAN",{});var D=v(a);c=V(D,s),D.forEach(u),E.forEach(u),o=S(h),h.forEach(u),this.h()},h(){g(t,"class","block whitespace-nowrap overflow-hidden text-ellipsis"),g(l,"class","w-full flex justify-between gap-8"),g(e,"class","w-full px-4 py-2 text-slate-500 text-sm font-medium border-b border-b-slate-300 hover:bg-slate-100 hover:text-primary-700"),k(e,"text-primary-700",n[5]),k(e,"bg-slate-200",n[5]),k(e,"hover:bg-slate-200",n[5])},m(m,h){$(m,e,h),b(e,l),b(l,t),b(t,f),b(l,r),b(l,a),b(a,c),b(e,o),_||(x=K(e,"click",O),_=!0)},p(m,h){n=m,h&2&&i!==(i=(n[4].label?n[4].label:"<unnamed>")+"")&&j(f,i),h&2&&s!==(s=P(n[4].intentHash,10,7)+"")&&j(c,s),h&3&&k(e,"text-primary-700",n[5]),h&3&&k(e,"bg-slate-200",n[5]),h&3&&k(e,"hover:bg-slate-200",n[5])},d(m){m&&u(e),_=!1,x()}}}function q(n){let e,l;return e=new te({props:{closable:!1,transactionResult:B(n[0])}}),{c(){W(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,i){Y(e,t,i),l=!0},p(t,i){const f={};i&1&&(f.transactionResult=B(t[0])),e.$set(f)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function ne(n){let e,l,t,i;const f=[le,se],r=[];function a(s,c){return s[1].length>0?0:1}return l=a(n),t=r[l]=f[l](n),{c(){e=d("div"),t.c(),this.h()},l(s){e=p(s,"DIV",{class:!0});var c=v(e);t.l(c),c.forEach(u),this.h()},h(){g(e,"class","w-full h-full grid grid-cols-10 border border-slate-300 box-border")},m(s,c){$(s,e,c),r[l].m(e,null),i=!0},p(s,[c]){let o=l;l=a(s),l===o?r[l].p(s,c):(M(),y(r[o],1,1,()=>{r[o]=null}),F(),t=r[l],t?t.p(s,c):(t=r[l]=f[l](s),t.c()),w(t,1),t.m(e,null))},i(s){i||(w(t),i=!0)},o(s){y(t),i=!1},d(s){s&&u(e),r[l].d()}}}async function B(n){return{ok:n.status==="CommittedSuccess",intentHash:n.intentHash,status:n.status,error:""}}function ae(n,e,l){let t;const i=ee.transactions;z(n,i,a=>l(1,t=a));let f;return[f,t,i,a=>l(0,f=a)]}class ue extends L{constructor(e){super(),Q(this,e,ae,ne,U,{})}}export{ue as component};
