var tns=function(){function a(){for(var a,b,c,d=arguments[0]||{},e=1,f=arguments.length;e<f;e++)if(null!==(a=arguments[e]))for(b in a)c=a[b],d!==c&&c!==undefined&&(d[b]=c);return d}function b(a){return["true","false"].indexOf(a)>=0?JSON.parse(a):a}function c(a,b,c,d){if(d)try{a.setItem(b,c)}catch(e){}return c}function d(){var a=window.tnsId;return window.tnsId=a?a+1:1,"tns"+window.tnsId}function e(){var a=document,b=a.body;return b||(b=a.createElement("body"),b.fake=!0),b}function f(a){var b="";return a.fake&&(b=L.style.overflow,a.style.background="",a.style.overflow=L.style.overflow="hidden",L.appendChild(a)),b}function g(a,b){a.fake&&(a.remove(),L.style.overflow=b,L.offsetHeight)}function h(){var a=document,b=e(),c=f(b),d=a.createElement("div"),h=!1;b.appendChild(d);try{for(var i,j="(10px * 10)",k=["calc"+j,"-moz-calc"+j,"-webkit-calc"+j],l=0;l<3;l++)if(i=k[l],d.style.width=i,100===d.offsetWidth){h=i.replace(j,"");break}}catch(m){}return b.fake?g(b,c):d.remove(),h}function i(){var a=document,b=e(),c=f(b),d=a.createElement("div"),h=a.createElement("div"),i="",j=!1;d.className="tns-t-subp2",h.className="tns-t-ct";for(var k=0;k<70;k++)i+="<div></div>";return h.innerHTML=i,d.appendChild(h),b.appendChild(d),j=Math.abs(d.getBoundingClientRect().left-h.children[67].getBoundingClientRect().left)<2,b.fake?g(b,c):d.remove(),j}function j(){var a,b=document,c=e(),d=f(c),h=b.createElement("div"),i=b.createElement("style"),j="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return i.type="text/css",h.className="tns-mq-test",c.appendChild(i),c.appendChild(h),i.styleSheet?i.styleSheet.cssText=j:i.appendChild(b.createTextNode(j)),a=window.getComputedStyle?window.getComputedStyle(h).position:h.currentStyle.position,c.fake?g(c,d):h.remove(),"absolute"===a}function k(a){var b=document.createElement("style");return a&&b.setAttribute("media",a),document.querySelector("head").appendChild(b),b.sheet?b.sheet:b.styleSheet}function l(a,b,c,d){"insertRule"in a?a.insertRule(b+"{"+c+"}",d):a.addRule(b,c,d)}function m(a,b){"deleteRule"in a?a.deleteRule(b):a.removeRule(b)}function n(a){return("insertRule"in a?a.cssRules:a.rules).length}function o(a,b){return Math.atan2(a,b)*(180/Math.PI)}function p(a,b){var c=!1,d=Math.abs(90-Math.abs(a));return d>=90-b?c="horizontal":d<=b&&(c="vertical"),c}function q(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d)}function r(a,b){return a.hasAttribute(b)}function s(a,b){return a.getAttribute(b)}function t(a){return"undefined"!=typeof a.item}function u(a,b){if(a=t(a)||a instanceof Array?a:[a],"[object Object]"===Object.prototype.toString.call(b))for(var c=a.length;c--;)for(var d in b)a[c].setAttribute(d,b[d])}function v(a,b){a=t(a)||a instanceof Array?a:[a],b=b instanceof Array?b:[b];for(var c=b.length,d=a.length;d--;)for(var e=c;e--;)a[d].removeAttribute(b[e])}function w(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b}function x(a,b){"none"!==a.style.display&&(a.style.display="none")}function y(a,b){"none"===a.style.display&&(a.style.display="")}function z(a){return"none"!==window.getComputedStyle(a).display}function A(a){if("string"==typeof a){var b=[a],c=a.charAt(0).toUpperCase()+a.substr(1);["Webkit","Moz","ms","O"].forEach(function(d){"ms"===d&&"transform"!==a||b.push(d+c)}),a=b}for(var d=document.createElement("fakeelement"),e=(a.length,0);e<a.length;e++){var f=a[e];if(d.style[f]!==undefined)return f}return!1}function B(a){if(!a)return!1;if(!window.getComputedStyle)return!1;var b,c=document,d=e(),h=f(d),i=c.createElement("p"),j=a.length>9?"-"+a.slice(0,-9).toLowerCase()+"-":"";return j+="transform",d.insertBefore(i,null),i.style[a]="translate3d(1px,1px,1px)",b=window.getComputedStyle(i).getPropertyValue(j),d.fake?g(d,h):i.remove(),b!==undefined&&b.length>0&&"none"!==b}function C(a,b){var c=!1;return/^Webkit/.test(a)?c="webkit"+b+"End":/^O/.test(a)?c="o"+b+"End":a&&(c=b.toLowerCase()+"end"),c}function D(a,b,c){for(var d in b){var e=["touchstart","touchmove"].indexOf(d)>=0&&!c&&S;a.addEventListener(d,b[d],e)}}function E(a,b){for(var c in b){var d=["touchstart","touchmove"].indexOf(c)>=0&&S;a.removeEventListener(c,b[c],d)}}function F(){return{topics:{},on:function(a,b){this.topics[a]=this.topics[a]||[],this.topics[a].push(b)},off:function(a,b){if(this.topics[a])for(var c=0;c<this.topics[a].length;c++)if(this.topics[a][c]===b){this.topics[a].splice(c,1);break}},emit:function(a,b){b.type=a,this.topics[a]&&this.topics[a].forEach(function(c){c(b,a)})}}}function G(a,b,c,d,e,f,g){function h(){f-=i,k+=l,a.style[b]=c+k+j+d,f>0?setTimeout(h,i):g()}var i=Math.min(f,10),j=e.indexOf("%")>=0?"%":"px",e=e.replace(j,""),k=Number(a.style[b].replace(c,"").replace(d,"").replace(j,"")),l=(e-k)/f*i;setTimeout(h,i)}Object.keys||(Object.keys=function(a){var b=[];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var H=window,I=H.requestAnimationFrame||H.webkitRequestAnimationFrame||H.mozRequestAnimationFrame||H.msRequestAnimationFrame||function(a){return setTimeout(a,16)},J=window,K=J.cancelAnimationFrame||J.mozCancelAnimationFrame||function(a){clearTimeout(a)},L=document.documentElement,M="classList"in document.createElement("_"),N=M?function(a,b){return a.classList.contains(b)}:function(a,b){return a.className.indexOf(b)>=0},O=M?function(a,b){N(a,b)||a.classList.add(b)}:function(a,b){N(a,b)||(a.className+=" "+b)},P=M?function(a,b){N(a,b)&&a.classList.remove(b)}:function(a,b){N(a,b)&&(a.className=a.className.replace(b,""))},Q=!1;try{var R=Object.defineProperty({},"passive",{get:function(){Q=!0}});window.addEventListener("test",null,R)}catch(U){}var S=!!Q&&{passive:!0},T=function(e){function f(a){for(var b in a)bc||("slideBy"===b&&(a[b]="page"),"edgePadding"===b&&(a[b]=!1),"autoHeight"===b&&(a[b]=!1)),"responsive"===b&&f(a[b])}function g(a){a&&(Nc=Pc=Qc=Rc=Ic=Sc=Vc=Wc=!1)}function t(){for(var a=bc?hd-$c:hd;a<0;)a+=sc;return a%sc+1}function H(a){return a=a?Math.max(0,Math.min(Lc?sc-1:sc-Fc,a)):0,bc?a+$c:a}function J(a){for(null==a&&(a=hd),bc&&(a-=$c);a<0;)a+=sc;return Math.floor(a%sc)}function L(){var a,b=J();return a=Hd?b:Ac||zc?Math.ceil((b+1)*$d/sc-1):Math.floor(b/Fc),!Lc&&bc&&hd===kd&&(a=$d-1),a}function M(){if(zc||Ac&&!Hc)return sc-1;var a=Ac?"fixedWidth":"items",b=[];if((Ac||e[a]<sc)&&b.push(e[a]),_b)for(var c in _b){var d=_b[c][a];d&&(Ac||d<sc)&&b.push(d)}return b.length||b.push(0),Math.ceil(Ac?Hc/Math.min.apply(null,b):Math.max.apply(null,b))}function Q(){return Hb.innerWidth||Gb.documentElement.clientWidth||Gb.body.clientWidth}function R(a){return"top"===a?"afterbegin":"beforeend"}function S(a){var b,c,d=Gb.createElement("div");return a.appendChild(d),b=d.getBoundingClientRect(),c=b.right-b.left,d.remove(),c||S(a.parentNode)}function U(){var a=Bc?2*Bc-Cc:0;return S(pc)-a}function V(a){if(e[a])return!0;if(_b)for(var b in _b)if(_b[b][a])return!0;return!1}function W(a,b){if(null==b&&(b=tc),"items"===a&&Ac)return Math.floor((Dc+Cc)/(Ac+Cc))||1;var c=e[a];if(_b)for(var d in _b)b>=parseInt(d)&&a in _b[d]&&(c=_b[d][a]);return"slideBy"===a&&"page"===c&&(c=W("items")),bc||"slideBy"!==a&&"items"!==a||(c=Math.floor(c)),c}function X(a){return Nb?Nb+"("+100*a+"% / "+_c+")":100*a/_c+"%"}function Y(a,b,c,d,e){var f="";if(a!==undefined){var g=a;b&&(g-=b),f=lc?"margin: 0 "+g+"px 0 "+a+"px;":"margin: "+a+"px 0 "+g+"px 0;"}else if(b&&!c){var h="-"+b+"px",i=lc?h+" 0 0":"0 "+h+" 0";f="margin: 0 "+i+";"}return!bc&&e&&Sb&&d&&(f+=ba(d)),f}function Z(a,b,c){return a?(a+b)*_c+"px":Nb?Nb+"("+100*_c+"% / "+c+")":100*_c/c+"%"}function $(a,b,c){var d;if(a)d=a+b+"px";else{bc||(c=Math.floor(c));var e=bc?_c:c;d=Nb?Nb+"(100% / "+e+")":100/e+"%"}return d="width:"+d,"inner"!==ac?d+";":d+" !important;"}function _(a){var b="";if(!1!==a){b=(lc?"padding-":"margin-")+(lc?"right":"bottom")+": "+a+"px;"}return b}function aa(a,b){var c=a.substring(0,a.length-b).toLowerCase();return c&&(c="-"+c+"-"),c}function ba(a){return aa(Sb,18)+"transition-duration:"+a/1e3+"s;"}function ca(a){return aa(Ub,17)+"animation-duration:"+a/1e3+"s;"}function da(){if(V("autoHeight")||zc||!lc){var a=oc.querySelectorAll("img");q(a,function(a){var b=a.src;b&&b.indexOf("data:image")<0?(D(a,Nd),a.src="",a.src=b,O(a,"loading")):Yc||za(a)}),I(function(){Ea(w(a),function(){xc=!0})}),!zc&&lc&&(a=Ca(hd,Math.min(hd+Fc-1,_c-1))),Yc?ea():I(function(){Ea(w(a),ea)})}else bc&&Xa(),ga(),ha()}function ea(){if(zc){var a=Lc?hd:sc-1;!function b(){rc[a-1].getBoundingClientRect().right.toFixed(2)===rc[a].getBoundingClientRect().left.toFixed(2)?fa():setTimeout(function(){b()},16)}()}else fa()}function fa(){lc&&!zc||(Ja(),zc?(bd=Va(),vd&&(wd=la()),kd=gd(),g(td||wd)):Cb()),bc&&Xa(),ga(),ha()}function ga(){if(Ka(),mc.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ua()+"</span>  of "+sc+"</div>"),yc=mc.querySelector(".tns-liveregion .current"),Id){var a=Sc?"stop":"start";me?u(me,{"data-action":a}):e.autoplayButtonOutput&&(mc.insertAdjacentHTML(R(e.autoplayPosition),'<button data-action="'+a+'">'+oe[0]+a+oe[1]+Uc[0]+"</button>"),me=mc.querySelector("[data-action]")),me&&D(me,{click:lb}),Sc&&(hb(),Vc&&D(oc,Ad),Wc&&D(oc,Bd))}if(Gd){if(Yd)u(Yd,{"aria-label":"Carousel Pagination"}),Xd=Yd.children,q(Xd,function(a,b){u(a,{"data-nav":b,tabindex:"-1","aria-label":ee+(b+1),"aria-controls":sd})});else{for(var b="",c=Hd?"":'style="display:none"',d=0;d<sc;d++)b+='<button data-nav="'+d+'" tabindex="-1" aria-controls="'+sd+'" '+c+' aria-label="'+ee+(d+1)+'"></button>';b='<div class="tns-nav" aria-label="Carousel Pagination">'+b+"</div>",mc.insertAdjacentHTML(R(e.navPosition),b),Yd=mc.querySelector(".tns-nav"),Xd=Yd.children}if(Eb(),Sb){var f=Sb.substring(0,Sb.length-18).toLowerCase(),g="transition: all "+Jc/1e3+"s";f&&(g="-"+f+"-"+g),l(Xc,"[aria-controls^="+sd+"-item]",g,n(Xc))}u(Xd[be],{"aria-label":ee+(be+1)+fe}),v(Xd[be],"tabindex"),O(Xd[be],de),D(Yd,zd)}Fd&&(Rd||Td&&Ud||(mc.insertAdjacentHTML(R(e.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+sd+'">'+Oc[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+sd+'">'+Oc[1]+"</button></div>"),Rd=mc.querySelector(".tns-controls")),Td&&Ud||(Td=Rd.children[0],Ud=Rd.children[1]),e.controlsContainer&&u(Rd,{"aria-label":"Carousel Navigation",tabindex:"0"}),(e.controlsContainer||e.prevButton&&e.nextButton)&&u([Td,Ud],{"aria-controls":sd,tabindex:"-1"}),(e.controlsContainer||e.prevButton&&e.nextButton)&&(u(Td,{"data-controls":"prev"}),u(Ud,{"data-controls":"next"})),Pd=Oa(Td),Qd=Oa(Ud),Ra(),Rd?D(Rd,yd):(D(Td,yd),D(Ud,yd))),na()}function ha(){if(bc&&Wb){var a={};a[Wb]=ab,D(oc,a)}Qc&&D(oc,Dd,e.preventScrollOnTouch),Rc&&D(oc,Ed),Ic&&D(Gb,Cd),"inner"===ac?qd.on("outerResized",function(){ka(),qd.emit("innerLoaded",Fb())}):(_b||Ac||zc||Mc||!lc)&&D(Hb,{resize:ja}),Mc&&("outer"===ac?qd.on("innerLoaded",Da):td||Da()),wa(),td?ra():wd&&pa(),qd.on("indexChanged",Fa),"inner"===ac&&qd.emit("innerLoaded",Fb()),"function"==typeof pd&&pd(Fb()),uc=!0}function ia(){if(Xc.disabled=!0,Xc.ownerNode&&Xc.ownerNode.remove(),E(Hb,{resize:ja}),Ic&&E(Gb,Cd),Rd&&E(Rd,yd),Yd&&E(Yd,zd),E(oc,Ad),E(oc,Bd),me&&E(me,{click:lb}),Sc&&clearInterval(ge),bc&&Wb){var a={};a[Wb]=ab,E(oc,a)}Qc&&E(oc,Dd),Rc&&E(oc,Ed);var b=[qc,Sd,Vd,Wd,Zd,ne];Zb.forEach(function(a,c){var d="container"===a?mc:e[a];if("object"==typeof d){var f=!!d.previousElementSibling&&d.previousElementSibling,g=d.parentNode;d.outerHTML=b[c],e[a]=f?f.nextElementSibling:g.firstElementChild}}),Zb=fc=gc=hc=ic=lc=mc=nc=oc=pc=qc=rc=sc=kc=tc=zc=Ac=Bc=Cc=Dc=Fc=Gc=Hc=Ic=Jc=Kc=Lc=Mc=Xc=Yc=vc=Zc=$c=_c=ad=bd=cd=dd=ed=fd=gd=hd=id=jd=kd=wc=md=nd=od=pd=qd=rd=sd=td=ud=vd=wd=xd=yd=zd=Ad=Bd=Cd=Dd=Ed=Fd=Gd=Hd=Id=Jd=Kd=Ld=Md=Nd=xc=Nc=Oc=Rd=Sd=Td=Ud=Pd=Qd=Pc=Yd=Zd=Xd=$d=_d=ae=be=ce=de=ee=fe=Sc=Tc=le=Uc=Vc=me=ne=Wc=oe=ge=he=ie=je=ke=te=ue=pe=qe=re=ve=se=we=Qc=Rc=null;for(var c in this)"rebuild"!==c&&(this[c]=null);uc=!1}function ja(a){I(function(){ka(tb(a))})}function ka(a){if(uc){"outer"===ac&&qd.emit("outerResized",Fb(a)),tc=Q();var b,c=kc,d=!1;_b&&(ma(),(b=c!==kc)&&qd.emit("newBreakpointStart",Fb(a)));var f,h,i=Fc,j=td,k=wd,o=Ic,p=Nc,q=Pc,r=Qc,s=Rc,t=Sc,u=Vc,v=Wc,w=hd;if(b){var z=Ac,A=Mc,B=Oc,C=Ec,F=Uc;if(!Pb)var G=Cc,I=Bc}if(Ic=W("arrowKeys"),Nc=W("controls"),Pc=W("nav"),Qc=W("touch"),Ec=W("center"),Rc=W("mouseDrag"),Sc=W("autoplay"),Vc=W("autoplayHoverPause"),Wc=W("autoplayResetOnVisibility"),b&&(td=W("disable"),Ac=W("fixedWidth"),Jc=W("speed"),Mc=W("autoHeight"),Oc=W("controlsText"),Uc=W("autoplayText"),Tc=W("autoplayTimeout"),Pb||(Bc=W("edgePadding"),Cc=W("gutter"))),g(td),Dc=U(),lc&&!zc||td||(Ja(),lc||(Cb(),d=!0)),(Ac||zc)&&(bd=Va(),kd=gd()),(b||Ac)&&(Fc=W("items"),Gc=W("slideBy"),(h=Fc!==i)&&(Ac||zc||(kd=gd()),xe())),b&&td!==j&&(td?ra():sa()),vd&&(b||Ac||zc)&&(wd=la())!==k&&(wd?(Ya(Wa(H(0))),pa()):(qa(),d=!0)),g(td||wd),Sc||(Vc=Wc=!1),Ic!==o&&(Ic?D(Gb,Cd):E(Gb,Cd)),Nc!==p&&(Nc?Rd?y(Rd):(Td&&y(Td),Ud&&y(Ud)):Rd?x(Rd):(Td&&x(Td),Ud&&x(Ud))),Pc!==q&&(Pc?y(Yd):x(Yd)),Qc!==r&&(Qc?D(oc,Dd,e.preventScrollOnTouch):E(oc,Dd)),Rc!==s&&(Rc?D(oc,Ed):E(oc,Ed)),Sc!==t&&(Sc?(me&&y(me),he||je||hb()):(me&&x(me),he&&ib())),Vc!==u&&(Vc?D(oc,Ad):E(oc,Ad)),Wc!==v&&(Wc?D(Gb,Bd):E(Gb,Bd)),b){if(Ac===z&&Ec===C||(d=!0),Mc!==A&&(Mc||(nc.style.height="")),Nc&&Oc!==B&&(Td.innerHTML=Oc[0],Ud.innerHTML=Oc[1]),me&&Uc!==F){var J=Sc?1:0,K=me.innerHTML,L=K.length-F[J].length;K.substring(L)===F[J]&&(me.innerHTML=K.substring(0,L)+Uc[J])}}else Ec&&(Ac||zc)&&(d=!0);if((h||Ac&&!zc)&&($d=Db(),Eb()),f=hd!==w,f?(qd.emit("indexChanged",Fb()),d=!0):h?f||Fa():(Ac||zc)&&(wa(),Ka(),ta()),h&&!bc&&La(),!td&&!wd){if(b&&!Pb&&(Mc===autoheightTem&&Jc===speedTem||Ga(),Bc===I&&Cc===G||(nc.style.cssText=Y(Bc,Cc,Ac,Jc,Mc)),lc)){bc&&(oc.style.width=Z(Ac,Cc,Fc));var M=$(Ac,Cc,Fc)+_(Cc);m(Xc,n(Xc)-1),l(Xc,"#"+sd+" > .tns-item",M,n(Xc))}Mc&&Da(),d&&(Xa(),id=hd)}b&&qd.emit("newBreakpointEnd",Fb(a))}}function la(){if(!Ac&&!zc){return sc<=(Ec?Fc-(Fc-1)/2:Fc)}var a=Ac?(Ac+Cc)*sc:vc[sc],b=Bc?Dc+2*Bc:Dc+Cc;return Ec&&(b-=Ac?(Dc-Ac)/2:(Dc-(vc[hd+1]-vc[hd]-Cc))/2),a<=b}function ma(){kc=0;for(var a in _b)a=parseInt(a),tc>=a&&(kc=a)}function na(){!Sc&&me&&x(me),!Pc&&Yd&&x(Yd),Nc||(Rd?x(Rd):(Td&&x(Td),Ud&&x(Ud)))}function oa(){Sc&&me&&y(me),Pc&&Yd&&y(Yd),Nc&&(Rd?y(Rd):(Td&&y(Td),Ud&&y(Ud)))}function pa(){if(!xd){if(Bc&&(nc.style.margin="0px"),$c)for(var a="tns-transparent",b=$c;b--;)bc&&O(rc[b],a),O(rc[_c-b-1],a);na(),xd=!0}}function qa(){if(xd){if(Bc&&Pb&&(nc.style.margin=""),$c)for(var a="tns-transparent",b=$c;b--;)bc&&P(rc[b],a),P(rc[_c-b-1],a);oa(),xd=!1}}function ra(){if(!ud){if(Xc.disabled=!0,oc.className=oc.className.replace(rd.substring(1),""),v(oc,["style"]),Lc)for(var a=$c;a--;)bc&&x(rc[a]),x(rc[_c-a-1]);if(lc&&bc||v(nc,["style"]),!bc)for(var b=hd,c=hd+sc;b<c;b++){var d=rc[b];v(d,["style"]),P(d,fc),P(d,ic)}na(),ud=!0}}function sa(){if(ud){if(Xc.disabled=!1,oc.className+=rd,Xa(),Lc)for(var a=$c;a--;)bc&&y(rc[a]),y(rc[_c-a-1]);if(!bc)for(var b=hd,c=hd+sc;b<c;b++){var d=rc[b],e=b<hd+Fc?fc:ic;d.style.left=100*(b-hd)/Fc+"%",O(d,e)}oa(),ud=!1}}function ta(){var a=ua();yc.innerHTML!==a&&(yc.innerHTML=a)}function ua(){var a=va(),b=a[0]+1,c=a[1]+1;return b===c?b+"":b+" to "+c}function va(a){null==a&&(a=Wa());var b,c,d,e=hd;if(Ec||Bc?(zc||Ac)&&(c=-(parseFloat(a)+Bc),d=c+Dc+2*Bc):zc&&(c=vc[hd],d=c+Dc),zc)vc.forEach(function(a,f){f<_c&&((Ec||Bc)&&a<=c+.5&&(e=f),d-a>=.5&&(b=f))});else{if(Ac){var f=Ac+Cc;Ec||Bc?(e=Math.floor(c/f),b=Math.ceil(d/f-1)):b=e+Math.ceil(Dc/f)-1}else if(Ec||Bc){var g=Fc-1;if(Ec?(e-=g/2,b=hd+g/2):b=hd+g,Bc){var h=Bc*Fc/Dc;e-=h,b+=h}e=Math.floor(e),b=Math.ceil(b)}else b=e+Fc-1;e=Math.max(e,0),b=Math.min(b,_c-1)}return[e,b]}function wa(){Yc&&!td&&Ca.apply(null,va()).forEach(function(a){if(!N(a,Md)){var b={};b[Wb]=function(a){a.stopPropagation()},D(a,b),D(a,Nd),a.src=s(a,"data-src");var c=s(a,"data-srcset");c&&(a.srcset=c),O(a,"loading")}})}function xa(a){za(ub(a))}function ya(a){Aa(ub(a))}function za(a){O(a,"loaded"),Ba(a)}function Aa(a){O(a,"failed"),Ba(a)}function Ba(a){O(a,"tns-complete"),P(a,"loading"),E(a,Nd)}function Ca(a,b){for(var c=[];a<=b;)q(rc[a].querySelectorAll("img"),function(a){c.push(a)}),a++;return c}function Da(){var a=Ca.apply(null,va());I(function(){Ea(a,Ia)})}function Ea(a,b){return xc?b():(a.forEach(function(b,c){N(b,Md)&&a.splice(c,1)}),a.length?void I(function(){Ea(a,b)}):b())}function Fa(){wa(),Ka(),ta(),Ra(),Ma()}function Ga(){bc&&Mc&&(jc.style[Sb]=Jc/1e3+"s")}function Ha(a,b){for(var c=[],d=a,e=Math.min(a+b,_c);d<e;d++)c.push(rc[d].offsetHeight);return Math.max.apply(null,c)}function Ia(){var a=Mc?Ha(hd,Fc):Ha($c,sc),b=jc||nc;b.style.height!==a&&(b.style.height=a+"px")}function Ja(){vc=[0];var a=lc?"left":"top",b=lc?"right":"bottom",c=rc[0].getBoundingClientRect()[a];q(rc,function(d,e){e&&vc.push(d.getBoundingClientRect()[a]-c),e===_c-1&&vc.push(d.getBoundingClientRect()[b]-c)})}function Ka(){var a=va(),b=a[0],c=a[1];q(rc,function(a,d){d>=b&&d<=c?r(a,"aria-hidden")&&(v(a,["aria-hidden","tabindex"]),O(a,Ld)):r(a,"aria-hidden")||(u(a,{"aria-hidden":"true",tabindex:"-1"}),P(a,Ld))})}function La(){for(var a=hd+Math.min(sc,Fc),b=_c;b--;){var c=rc[b];b>=hd&&b<a?(O(c,"tns-moving"),c.style.left=100*(b-hd)/Fc+"%",O(c,fc),P(c,ic)):c.style.left&&(c.style.left="",O(c,ic),P(c,fc)),P(c,gc)}setTimeout(function(){q(rc,function(a){P(a,"tns-moving")})},300)}function Ma(){if(Pc&&(be=ae>=0?ae:L(),ae=-1,be!==ce)){var a=Xd[ce],b=Xd[be];u(a,{tabindex:"-1","aria-label":ee+(ce+1)}),P(a,de),u(b,{"aria-label":ee+(be+1)+fe}),v(b,"tabindex"),O(b,de),ce=be}}function Na(a){return a.nodeName.toLowerCase()}function Oa(a){return"button"===Na(a)}function Pa(a){return"true"===a.getAttribute("aria-disabled")}function Qa(a,b,c){a?b.disabled=c:b.setAttribute("aria-disabled",c.toString())}function Ra(){if(Nc&&!Kc&&!Lc){var a=Pd?Td.disabled:Pa(Td),b=Qd?Ud.disabled:Pa(Ud),c=hd<=jd,d=!Kc&&hd>=kd;c&&!a&&Qa(Pd,Td,!0),!c&&a&&Qa(Pd,Td,!1),d&&!b&&Qa(Qd,Ud,!0),!d&&b&&Qa(Qd,Ud,!1)}}function Sa(a,b){Sb&&(a.style[Sb]=b)}function Ta(){return Ac?(Ac+Cc)*_c:vc[_c]}function Ua(a){null==a&&(a=hd);var b=Bc?Cc:0;return zc?(Dc-b-(vc[a+1]-vc[a]-Cc))/2:Ac?(Dc-Ac)/2:(Fc-1)/2}function Va(){var a=Bc?Cc:0,b=Dc+a-Ta();return Ec&&!Lc&&(b=Ac?-(Ac+Cc)*(_c-1)-Ua():Ua(_c-1)-vc[_c-1]),b>0&&(b=0),b}function Wa(a){null==a&&(a=hd);var b;if(lc&&!zc)if(Ac)b=-(Ac+Cc)*a,Ec&&(b+=Ua());else{var c=Qb?_c:Fc;Ec&&(a-=Ua()),b=100*-a/c}else b=-vc[a],Ec&&zc&&(b+=Ua());return ad&&(b=Math.max(b,bd)),b+=!lc||zc||Ac?"px":"%"}function Xa(a){Sa(oc,"0s"),Ya(a)}function Ya(a){null==a&&(a=Wa()),oc.style[dd]=ed+a+fd}function Za(a,b,c,d){var e=a+Fc;Lc||(e=Math.min(e,_c));for(var f=a;f<e;f++){var g=rc[f];d||(g.style.left=100*(f-hd)/Fc+"%"),hc&&Tb&&(g.style[Tb]=g.style[Vb]=hc*(f-a)/1e3+"s"),P(g,b),O(g,c),d&&Zc.push(g)}}function $a(a,b){cd&&xe(),(hd!==id||b)&&(qd.emit("indexChanged",Fb()),qd.emit("transitionStart",Fb()),Mc&&Da(),he&&a&&["click","keydown"].indexOf(a.type)>=0&&ib(),od=!0,ye())}function _a(a){return a.toLowerCase().replace(/-/g,"")}function ab(a){if(bc||od){if(qd.emit("transitionEnd",Fb(a)),!bc&&Zc.length>0)for(var b=0;b<Zc.length;b++){var c=Zc[b];c.style.left="",Vb&&Tb&&(c.style[Vb]="",c.style[Tb]=""),P(c,gc),O(c,ic)}if(!a||!bc&&a.target.parentNode===oc||a.target===oc&&_a(a.propertyName)===_a(dd)){if(!cd){var d=hd;xe(),hd!==d&&(qd.emit("indexChanged",Fb()),Xa())}"inner"===ac&&qd.emit("innerLoaded",Fb()),od=!1,id=hd}}}function bb(a,b){if(!wd)if("prev"===a)cb(b,-1);else if("next"===a)cb(b,1);else{if(od){if(ld)return;ab()}var c=J(),d=0;if("first"===a?d=-c:"last"===a?d=bc?sc-Fc-c:sc-1-c:("number"!=typeof a&&(a=parseInt(a)),isNaN(a)||(b||(a=Math.max(0,Math.min(sc-1,a))),d=a-c)),!bc&&d&&Math.abs(d)<Fc){var e=d>0?1:-1;d+=hd+d-sc>=jd?sc*e:2*sc*e*-1}hd+=d,bc&&Lc&&(hd<jd&&(hd+=sc),hd>kd&&(hd-=sc)),J(hd)!==J(id)&&$a(b)}}function cb(a,b){if(od){if(ld)return;ab()}var c;if(!b){a=tb(a);for(var d=ub(a);d!==Rd&&[Td,Ud].indexOf(d)<0;)d=d.parentNode;var e=[Td,Ud].indexOf(d);e>=0&&(c=!0,b=0===e?-1:1)}if(Kc){if(hd===jd&&-1===b)return void bb("last",a);if(hd===kd&&1===b)return void bb("first",a)}b&&(hd+=Gc*b,zc&&(hd=Math.floor(hd)),$a(c||a&&"keydown"===a.type?a:null))}function db(a){if(od){if(ld)return;ab()}a=tb(a);for(var b,c=ub(a);c!==Yd&&!r(c,"data-nav");)c=c.parentNode;if(r(c,"data-nav")){var b=ae=Number(s(c,"data-nav")),d=Ac||zc?b*sc/$d:b*Fc;bb(Hd?b:Math.min(Math.ceil(d),sc-1),a),be===b&&(he&&ib(),ae=-1)}}function eb(){ge=setInterval(function(){cb(null,le)},Tc),he=!0}function fb(){clearInterval(ge),he=!1}function gb(a,b){u(me,{"data-action":a}),me.innerHTML=oe[0]+a+oe[1]+b}function hb(){eb(),me&&gb("stop",Uc[1])}function ib(){fb(),me&&gb("start",Uc[0])}function jb(){Sc&&!he&&(hb(),je=!1)}function kb(){he&&(ib(),je=!0)}function lb(){he?(ib(),je=!0):(hb(),je=!1)}function mb(){Gb.hidden?he&&(fb(),ke=!0):ke&&(eb(),ke=!1)}function nb(){he&&(fb(),ie=!0)}function ob(){ie&&(eb(),ie=!1)}function pb(a){a=tb(a);var b=[Ib.LEFT,Ib.RIGHT].indexOf(a.keyCode);b>=0&&cb(a,0===b?-1:1)}function qb(a){a=tb(a);var b=[Ib.LEFT,Ib.RIGHT].indexOf(a.keyCode);b>=0&&(0===b?Td.disabled||cb(a,-1):Ud.disabled||cb(a,1))}function rb(a){a.focus()}function sb(a){a=tb(a);var b=Gb.activeElement;if(r(b,"data-nav")){var c=[Ib.LEFT,Ib.RIGHT,Ib.ENTER,Ib.SPACE].indexOf(a.keyCode),d=Number(s(b,"data-nav"));c>=0&&(0===c?d>0&&rb(Xd[d-1]):1===c?d<$d-1&&rb(Xd[d+1]):(ae=d,bb(d,a)))}}function tb(a){return a=a||Hb.event,vb(a)?a.changedTouches[0]:a}function ub(a){return a.target||Hb.event.srcElement}function vb(a){return a.type.indexOf("touch")>=0}function wb(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function xb(){return p(o(ue.y-te.y,ue.x-te.x),md)===e.axis}function yb(a){if(od){if(ld)return;ab()}Sc&&he&&fb(),ve=!0,se&&(K(se),se=null);var b=tb(a);qd.emit(vb(a)?"touchStart":"dragStart",Fb(a)),!vb(a)&&["img","a"].indexOf(Na(ub(a)))>=0&&wb(a),ue.x=te.x=b.clientX,ue.y=te.y=b.clientY,bc&&(pe=parseFloat(oc.style[dd].replace(ed,"")),Sa(oc,"0s"))}function zb(a){if(ve){var b=tb(a);ue.x=b.clientX,ue.y=b.clientY,bc?se||(se=I(function(){Ab(a)})):("?"===nd&&(nd=xb()),nd&&(Od=!0)),Od&&a.preventDefault()}}function Ab(a){if(!nd)return void(ve=!1);if(K(se),ve&&(se=I(function(){Ab(a)})),"?"===nd&&(nd=xb()),nd){!Od&&vb(a)&&(Od=!0);try{a.type&&qd.emit(vb(a)?"touchMove":"dragMove",Fb(a))}catch(d){}var b=pe,c=we(ue,te);if(!lc||Ac||zc)b+=c,b+="px";else{b+=Qb?c*Fc*100/((Dc+Cc)*_c):100*c/(Dc+Cc),b+="%"}oc.style[dd]=ed+b+fd}}function Bb(a){if(ve){se&&(K(se),se=null),bc&&Sa(oc,""),ve=!1;var b=tb(a);ue.x=b.clientX,ue.y=b.clientY;var c=we(ue,te);if(Math.abs(c)){if(!vb(a)){var d=ub(a);D(d,{click:function f(a){wb(a),E(d,{click:f})}})}bc?se=I(function(){if(lc&&!zc){var b=-c*Fc/(Dc+Cc);b=c>0?Math.floor(b):Math.ceil(b),hd+=b}else{var d=-(pe+c);if(d<=0)hd=jd;else if(d>=vc[_c-1])hd=kd;else for(var e=0;e<_c&&d>=vc[e];)hd=e,d>vc[e]&&c<0&&(hd+=1),e++}$a(a,c),qd.emit(vb(a)?"touchEnd":"dragEnd",Fb(a))}):nd&&cb(a,c>0?-1:1)}}"auto"===e.preventScrollOnTouch&&(Od=!1),md&&(nd="?"),Sc&&!he&&eb()}function Cb(){(jc||nc).style.height=vc[hd+Fc]-vc[hd]+"px"}function Db(){var a=Ac?(Ac+Cc)*sc/Dc:sc/Fc;return Math.min(Math.ceil(a),sc)}function Eb(){if(Pc&&!Hd&&$d!==_d){var a=_d,b=$d,c=y;for(_d>$d&&(a=$d,b=_d,c=x);a<b;)c(Xd[a]),a++;_d=$d}}function Fb(a){return{container:oc,slideItems:rc,navContainer:Yd,navItems:Xd,controlsContainer:Rd,hasControls:Fd,prevButton:Td,nextButton:Ud,items:Fc,slideBy:Gc,cloneCount:$c,slideCount:sc,slideCountNew:_c,index:hd,indexCached:id,displayIndex:t(),navCurrentIndex:be,navCurrentIndexCached:ce,pages:$d,pagesCached:_d,sheet:Xc,isOn:uc,event:a||{}}}e=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},e||{});var Gb=document,Hb=window,Ib={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},Jb={},Kb=e.useLocalStorage;if(Kb){var Lb=navigator.userAgent,Mb=new Date;try{Jb=Hb.localStorage,Jb?(Jb.setItem(Mb,Mb),Kb=Jb.getItem(Mb)==Mb,Jb.removeItem(Mb)):Kb=!1,Kb||(Jb={})}catch(U){Kb=!1}Kb&&(Jb.tnsApp&&Jb.tnsApp!==Lb&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(a){Jb.removeItem(a)}),localStorage.tnsApp=Lb)}var Nb=Jb.tC?b(Jb.tC):c(Jb,"tC",h(),Kb),Ob=Jb.tPL?b(Jb.tPL):c(Jb,"tPL",i(),Kb),Pb=Jb.tMQ?b(Jb.tMQ):c(Jb,"tMQ",j(),Kb),Qb=Jb.tTf?b(Jb.tTf):c(Jb,"tTf",A("transform"),Kb),Rb=Jb.t3D?b(Jb.t3D):c(Jb,"t3D",B(Qb),Kb),Sb=Jb.tTDu?b(Jb.tTDu):c(Jb,"tTDu",A("transitionDuration"),Kb),Tb=Jb.tTDe?b(Jb.tTDe):c(Jb,"tTDe",A("transitionDelay"),Kb),Ub=Jb.tADu?b(Jb.tADu):c(Jb,"tADu",A("animationDuration"),Kb),Vb=Jb.tADe?b(Jb.tADe):c(Jb,"tADe",A("animationDelay"),Kb),Wb=Jb.tTE?b(Jb.tTE):c(Jb,"tTE",C(Sb,"Transition"),Kb),Xb=Jb.tAE?b(Jb.tAE):c(Jb,"tAE",C(Ub,"Animation"),Kb),Yb=Hb.console&&"function"==typeof Hb.console.warn,Zb=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],$b={};if(Zb.forEach(function(a){if("string"==typeof e[a]){var b=e[a],c=Gb.querySelector(b);if($b[a]=b,!c||!c.nodeName)return void(Yb&&console.warn("Can't find",e[a]));e[a]=c}}),e.container.children.length<1)return void(Yb&&console.warn("No slides found in",e.container));var _b=e.responsive,ac=e.nested,bc="carousel"===e.mode;if(_b){0 in _b&&(e=a(e,_b[0]),delete _b[0]);var cc={};for(var dc in _b){var ec=_b[dc];ec="number"==typeof ec?{items:ec}:ec,cc[dc]=ec}_b=cc,cc=null}if(bc||f(e),!bc){e.axis="horizontal",e.slideBy="page",e.edgePadding=!1;var fc=e.animateIn,gc=e.animateOut,hc=e.animateDelay,ic=e.animateNormal}var jc,kc,lc="horizontal"===e.axis,mc=Gb.createElement("div"),nc=Gb.createElement("div"),oc=e.container,pc=oc.parentNode,qc=oc.outerHTML,rc=oc.children,sc=rc.length,tc=Q(),uc=!1;_b&&ma(),bc&&(oc.className+=" tns-vpfix");var vc,wc,xc,yc,zc=e.autoWidth,Ac=W("fixedWidth"),Bc=W("edgePadding"),Cc=W("gutter"),Dc=U(),Ec=W("center"),Fc=zc?1:Math.floor(W("items")),Gc=W("slideBy"),Hc=e.viewportMax||e.fixedWidthViewportWidth,Ic=W("arrowKeys"),Jc=W("speed"),Kc=e.rewind,Lc=!Kc&&e.loop,Mc=W("autoHeight"),Nc=W("controls"),Oc=W("controlsText"),Pc=W("nav"),Qc=W("touch"),Rc=W("mouseDrag"),Sc=W("autoplay"),Tc=W("autoplayTimeout"),Uc=W("autoplayText"),Vc=W("autoplayHoverPause"),Wc=W("autoplayResetOnVisibility"),Xc=k(),Yc=e.lazyload,Zc=(e.lazyloadSelector,[]),$c=Lc?function(){var a=M(),b=bc?Math.ceil((5*a-sc)/2):4*a-sc;return b=Math.max(a,b),V("edgePadding")?b+1:b}():0,_c=bc?sc+2*$c:sc+$c,ad=!(!Ac&&!zc||Lc),bd=Ac?Va():null,cd=!bc||!Lc,dd=lc?"left":"top",ed="",fd="",gd=function(){return Ac?function(){return Ec&&!Lc?sc-1:Math.ceil(-bd/(Ac+Cc))}:zc?function(){for(var a=_c;a--;)if(vc[a]>=-bd)return a}:function(){return Ec&&bc&&!Lc?sc-1:Lc||bc?Math.max(0,_c-Math.ceil(Fc)):_c-1}}(),hd=H(W("startIndex")),id=hd,jd=(t(),0),kd=zc?null:gd(),ld=e.preventActionWhenRunning,md=e.swipeAngle,nd=!md||"?",od=!1,pd=e.onInit,qd=new F,rd=" tns-slider tns-"+e.mode,sd=oc.id||d(),td=W("disable"),ud=!1,vd=e.freezable,wd=!(!vd||zc)&&la(),xd=!1,yd={click:cb,keydown:qb},zd={click:db,keydown:sb},Ad={mouseover:nb,mouseout:ob},Bd={visibilitychange:mb},Cd={keydown:pb},Dd={touchstart:yb,touchmove:zb,touchend:Bb,touchcancel:Bb},Ed={mousedown:yb,mousemove:zb,mouseup:Bb,mouseleave:Bb},Fd=V("controls"),Gd=V("nav"),Hd=!!zc||e.navAsThumbnails,Id=V("autoplay"),Jd=V("touch"),Kd=V("mouseDrag"),Ld="tns-slide-active",Md="tns-complete",Nd={load:xa,error:ya},Od="force"===e.preventScrollOnTouch;if(Fd)var Pd,Qd,Rd=e.controlsContainer,Sd=e.controlsContainer?e.controlsContainer.outerHTML:"",Td=e.prevButton,Ud=e.nextButton,Vd=e.prevButton?e.prevButton.outerHTML:"",Wd=e.nextButton?e.nextButton.outerHTML:"";if(Gd)var Xd,Yd=e.navContainer,Zd=e.navContainer?e.navContainer.outerHTML:"",$d=zc?sc:Db(),_d=0,ae=-1,be=L(),ce=be,de="tns-nav-active",ee="Carousel Page ",fe=" (Current Slide)";if(Id)var ge,he,ie,je,ke,le="forward"===e.autoplayDirection?1:-1,me=e.autoplayButton,ne=e.autoplayButton?e.autoplayButton.outerHTML:"",oe=["<span class='tns-visually-hidden'>"," animation</span>"];if(Jd||Kd)var pe,qe,re,se,te={},ue={},ve=!1,we=lc?function(a,b){return a.x-b.x}:function(a,b){return a.y-b.y};zc||g(td||wd),Qb&&(dd=Qb,ed="translate",Rb?(ed+=lc?"3d(":"3d(0px, ",fd=lc?", 0px, 0px)":", 0px)"):(ed+=lc?"X(":"Y(",fd=")")),bc&&(oc.className=oc.className.replace("tns-vpfix","")),function(){if(V("gutter"),mc.className="tns-outer",nc.className="tns-inner",mc.id=sd+"-ow",nc.id=sd+"-iw",""===oc.id&&(oc.id=sd),rd+=Ob||zc?" tns-subpixel":" tns-no-subpixel",rd+=Nb?" tns-calc":" tns-no-calc",zc&&(rd+=" tns-autowidth"),rd+=" tns-"+e.axis,oc.className+=rd,bc?(jc=Gb.createElement("div"),jc.id=sd+"-mw",jc.className="tns-ovh",mc.appendChild(jc),jc.appendChild(nc)):mc.appendChild(nc),Mc&&((jc||nc).className+=" tns-ah"),pc.insertBefore(mc,oc),nc.appendChild(oc),q(rc,function(a,b){O(a,"tns-item"),a.id||(a.id=sd+"-item"+b),!bc&&ic&&O(a,ic),u(a,{"aria-hidden":"true",tabindex:"-1"})}),$c){for(var a=Gb.createDocumentFragment(),b=Gb.createDocumentFragment(),c=$c;c--;){var d=c%sc,f=rc[d].cloneNode(!0);if(v(f,"id"),b.insertBefore(f,b.firstChild),bc){var g=rc[sc-1-d].cloneNode(!0);v(g,"id"),a.appendChild(g)}}oc.insertBefore(a,oc.firstChild),oc.appendChild(b),rc=oc.children}}(),function(){if(!bc)for(var a=hd,b=hd+Math.min(sc,Fc);a<b;a++){var c=rc[a];c.style.left=100*(a-hd)/Fc+"%",O(c,fc),P(c,ic)}if(lc&&(Ob||zc?(l(Xc,"#"+sd+" > .tns-item","font-size:"+Hb.getComputedStyle(rc[0]).fontSize+";",n(Xc)),l(Xc,"#"+sd,"font-size:0;",n(Xc))):bc&&q(rc,function(a,b){a.style.marginLeft=X(b)})),Pb){if(Sb){var d=jc&&e.autoHeight?ba(e.speed):"";l(Xc,"#"+sd+"-mw",d,n(Xc))}d=Y(e.edgePadding,e.gutter,e.fixedWidth,e.speed,e.autoHeight),l(Xc,"#"+sd+"-iw",d,n(Xc)),bc&&(d=lc&&!zc?"width:"+Z(e.fixedWidth,e.gutter,e.items)+";":"",Sb&&(d+=ba(Jc)),l(Xc,"#"+sd,d,n(Xc))),d=lc&&!zc?$(e.fixedWidth,e.gutter,e.items):"",e.gutter&&(d+=_(e.gutter)),bc||(Sb&&(d+=ba(Jc)),Ub&&(d+=ca(Jc))),d&&l(Xc,"#"+sd+" > .tns-item",d,n(Xc))}else{Ga(),nc.style.cssText=Y(Bc,Cc,Ac,Mc),bc&&lc&&!zc&&(oc.style.width=Z(Ac,Cc,Fc));var d=lc&&!zc?$(Ac,Cc,Fc):"";Cc&&(d+=_(Cc)),d&&l(Xc,"#"+sd+" > .tns-item",d,n(Xc))}if(_b&&Pb)for(var f in _b){f=parseInt(f);var g=_b[f],d="",h="",i="",j="",k="",m=zc?null:W("items",f),o=W("fixedWidth",f),p=W("speed",f),r=W("edgePadding",f),s=W("autoHeight",f),t=W("gutter",f);Sb&&jc&&W("autoHeight",f)&&"speed"in g&&(h="#"+sd+"-mw{"+ba(p)+"}"),("edgePadding"in g||"gutter"in g)&&(i="#"+sd+"-iw{"+Y(r,t,o,p,s)+"}"),bc&&lc&&!zc&&("fixedWidth"in g||"items"in g||Ac&&"gutter"in g)&&(j="width:"+Z(o,t,m)+";"),Sb&&"speed"in g&&(j+=ba(p)),j&&(j="#"+sd+"{"+j+"}"),("fixedWidth"in g||Ac&&"gutter"in g||!bc&&"items"in g)&&(k+=$(o,t,m)),"gutter"in g&&(k+=_(t)),!bc&&"speed"in g&&(Sb&&(k+=ba(p)),Ub&&(k+=ca(p))),k&&(k="#"+sd+" > .tns-item{"+k+"}"),(d=h+i+j+k)&&Xc.insertRule("@media (min-width: "+f/16+"em) {"+d+"}",Xc.cssRules.length)}}(),da();var xe=function(){return Lc?bc?function(){var a=jd,b=kd;a+=Gc,b-=Gc,Bc?(a+=1,b-=1):Ac&&(Dc+Cc)%(Ac+Cc)&&(b-=1),$c&&(hd>b?hd-=sc:hd<a&&(hd+=sc))}:function(){if(hd>kd)for(;hd>=jd+sc;)hd-=sc;else if(hd<jd)for(;hd<=kd-sc;)hd+=sc}:function(){hd=Math.max(jd,Math.min(kd,hd))}}(),ye=function(){return bc?function(){Sa(oc,""),Sb||!Jc?(Ya(),Jc&&z(oc)||ab()):G(oc,dd,ed,fd,Wa(),Jc,ab),lc||Cb()}:function(){Zc=[];var a={};a[Wb]=a[Xb]=ab,E(rc[id],a),
D(rc[hd],a),Za(id,fc,gc,!0),Za(hd,ic,fc),Wb&&Xb&&Jc&&z(oc)||ab()}}();return{version:"2.9.2",getInfo:Fb,events:qd,goTo:bb,play:jb,pause:kb,isOn:uc,updateSliderHeight:Ia,refresh:da,destroy:ia,rebuild:function(){return T(a(e,$b))}}};return T}();
