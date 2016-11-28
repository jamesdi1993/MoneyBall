-function(){"use strict";var f;var h=function(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},k=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},l=function(a){if(k(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&k(a))return a;return null};var m=function(a,b,d){var c;d?(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,!0,!0,d)):(c=document.createEvent("Event"),c.initEvent(a,!0,!0));b.dispatchEvent(c);return c};function n(){this.i={}}n.prototype.add=function(a,b){var d="string"==typeof a?a:a.getString();this.i[d]||(this.i[d]=[]);this.i[d].push(b)};var p=function(a){var b=[],d="object"==typeof gwd&&"GwdId"in gwd,c;for(c in a.i)b.push(d?new gwd.GwdId(c):c);return b},q=function(a,b){return b?a.i["string"==typeof b?b:b.getString()]||[]:[]};function r(a,b){this.c=a;this.N=b;this.A=this.F.bind(this)}r.prototype.observe=function(a){if(a.nodeType==Node.ELEMENT_NODE)for(var b=p(this.c),d=0;d<b.length;d++){var c=t(b[d]);if(c&&h(a,c)){var e=q(this.c,b[d]);e&&e.forEach(function(a){c.addEventListener(a.event,this.A,!1)}.bind(this))}}};var u=function(a,b){if(b.nodeType==Node.ELEMENT_NODE)for(var d=p(a.c),c=0;c<d.length;c++){var e=t(d[c]);if(e&&h(b,e)){var g=q(a.c,d[c]);g&&g.forEach(function(a){e.removeEventListener(a.event,this.A,!1)}.bind(a))}}};
r.prototype.F=function(a){this.N(a)};var t=function(a){return"string"==typeof a?document.getElementById(a):a.getElement(document)};document.registerElement("gwd-metric-event");document.registerElement("gwd-metric-configuration");document.registerElement("gwd-exit");document.registerElement("gwd-timer");var v=function(){};goog.inherits(v,HTMLElement);f=v.prototype;
f.createdCallback=function(){document.body.style.opacity="0";this.I=this.T.bind(this);this.C=this.V.bind(this);this.J=this.U.bind(this);this.o=this.S.bind(this);this.m=this.R.bind(this);this.s=m.bind(null,"expandfinish",this);this.l=m.bind(null,"collapsefinish",this);this.A=this.F.bind(this);this.L=this.W.bind(this);this.M=this.X.bind(this);this.v=this.w=!1;this.G=[];this.u=!1;this.ba=this.hasAttribute("fullscreen");this.j=null;this.f=!1;this.B=window.innerHeight>=window.innerWidth?1:2;this.b=null};
f.attachedCallback=function(){Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START,this.o);Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,this.m);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,this.o);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,this.m);Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH,this.s);Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,this.l);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,
this.s);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,this.l);this.a=this.querySelector("[is=gwd-pagedeck]");this.a.addEventListener("pagetransitionend",this.L,!1);this.b=document.getElementById(this.getAttribute("data-provider"));var a=this.querySelector("gwd-metric-configuration"),b=new n;if(a)for(var a=Array.prototype.slice.call(a.getElementsByTagName("gwd-metric-event")),d=0;d<a.length;d++){var c=a[d],e=c.getAttribute("source");if(e){var g=c.getAttribute("exit"),
c={event:c.getAttribute("event"),Y:c.getAttribute("metric")||g,O:c.hasAttribute("cumulative"),exit:g};b.add(w(e),c)}}this.c=b;this.K=new r(this.c,this.A);window.addEventListener("resize",this.M,!1)};
f.detachedCallback=function(){Enabler.removeEventListener(studio.events.StudioEvent.INIT,this.I);Enabler.removeEventListener(studio.events.StudioEvent.VISIBLE,this.C);Enabler.removeEventListener(studio.events.StudioEvent.PAGE_LOADED,this.J);Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_START,this.o);Enabler.removeEventListener(studio.events.StudioEvent.COLLAPSE_START,this.m);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,this.o);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,
this.m);Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_FINISH,this.s);Enabler.removeEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,this.l);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,this.s);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,this.l);this.a.removeEventListener("pagetransitionend",this.L,!1);window.removeEventListener("resize",this.M,!1)};
f.initAd=function(){this.u=!1;var a=this.I;Enabler.removeEventListener(studio.events.StudioEvent.INIT,a);Enabler.addEventListener(studio.events.StudioEvent.INIT,a);Enabler.isInitialized()&&a()};f.exit=function(a,b,d,c){Enabler.exit(a,b);("undefined"==typeof c||c)&&x(this);d&&this.goToPage()};f.exitOverride=function(a,b,d,c){Enabler.exitOverride(a,b);("undefined"==typeof c||c)&&x(this);d&&this.goToPage()};f.incrementCounter=function(a,b){Enabler.counter(a,b)};f.startTimer=function(a){Enabler.startTimer(a)};
f.stopTimer=function(a){Enabler.stopTimer(a)};f.reportManualClose=function(){Enabler.reportManualClose()};f.F=function(a){var b=a.target,d=w(b),c=d+": "+a.type,e;a:{e=q(this.c,d);for(var g=0;g<e.length;g++)if(e[g].event==a.type){e=e[g];break a}e=void 0}e.exit&&a.detail&&a.detail.url?(Enabler.exitOverride(d+": "+e.exit,a.detail.url),a.detail.handled=!0,a.detail.collapse&&this.goToPage()):(a=l(b))&&a.gwdIsActive()&&this.incrementCounter(e.Y||c,e.O)};
f.T=function(){if(this.hasAttribute("polite-load")){var a=this.J;Enabler.isPageLoaded()?a():Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,a)}else y(this.C)};var y=function(a){Enabler.isVisible()?a():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,a)};
v.prototype.V=function(a){if(this.u)this.b&&z(this);else{var b;a&&(b=a.detail);a=this.aa.bind(this,b);if(this.b)if(this.b){b=this.b.getData();var d=this.Z.bind(this,a);b?d():a();this.b.addEventListener("ready",d)}else a();else a()}};v.prototype.U=function(){y(this.C)};v.prototype.Z=function(a){z(this);a()};var z=function(a){var b=document.getElementsByTagName("gwd-data-binder");if(0<b.length){var b=b[0],d=a.b.getData(),c=a.a.getElementsBySelector("*"),c=c.concat(a.a.getPages());b.bindData(d,c)}};
v.prototype.aa=function(a){this.u||(this.u=!0,document.body.style.opacity="",m("adinitialized",this,a),this.goToPage())};
v.prototype.goToPage=function(a,b,d,c,e){var g=this.a.getPage(this.a.currentIndex);if(a=a?this.a.getPage(a):this.a.getDefaultPage())this.g=a.id,b&&(this.h={transition:b,duration:d,P:c,direction:e}),g&&a&&!this.w&&!g.hasAttribute("expanded")&&a.hasAttribute("expanded")?A(this):g&&a&&!this.v&&g.hasAttribute("expanded")&&!a.hasAttribute("expanded")?this.f?Enabler.requestFullscreenCollapse():Enabler.requestCollapse():(this.v=this.w=!1,this.D())};
var A=function(a){if(a.ba&&!1!==a.j)if(a.j)a.f=!0,Enabler.requestFullscreenExpand();else{var b=function(a){(this.j=!!a.supported)&&m("fullscreensupport",this);A(this);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT,b)}.bind(a);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT,b);Enabler.queryFullscreenSupport()}else Enabler.requestExpand()};f=v.prototype;
f.S=function(){m("expandstart",this);this.w=!0;this.f?Enabler.finishFullscreenExpand():Enabler.finishExpand();setTimeout(this.D.bind(this),30)};f.R=function(){m("collapsestart",this);this.v=!0;this.f?(Enabler.finishFullscreenCollapse(),this.f=!1):Enabler.finishCollapse();this.g||(this.reportManualClose(),this.g=this.a.getDefaultPage().id);setTimeout(this.D.bind(this),30)};
f.X=function(){if(!this.g){var a=window.innerHeight>=window.innerWidth?1:2;this.B!=a&&(this.B=a,(a=this.a.getPage(this.a.currentIndex))&&setTimeout(this.goToPage.bind(this,a.id),0))}};f.D=function(){if(this.g){this.B=window.innerHeight>=window.innerWidth?1:2;var a=this.a.getOrientationSpecificPage(this.B,this.g);this.h?this.a.goToPage(a.id,this.h.transition,this.h.duration,this.h.P,this.h.direction):this.a.goToPage(a.id);this.f&&a.classList.add("fs")}this.h=this.g=void 0};
f.W=function(a){this.v=this.w=!1;if(a.target==this.a){var b=a.detail;a=b.outgoingPage;b=b.incomingPage;if(a&&(u(this.K,a),(a=a.querySelectorAll("video"))&&0<a.length))for(this.H=[];this.G.length;)studio.video.Reporter.detach(this.G.shift());this.K.observe(b);if((a=b.querySelectorAll("video"))&&0<a.length){var b=studio.video&&studio.video.Reporter,d=this.$.bind(this);this.H=Array.prototype.slice.call(a);b?d():Enabler.loadModule(studio.module.ModuleId.VIDEO,d)}}};
f.$=function(){for(var a,b;this.H.length;)if(b=this.H.shift(),a=w(b))studio.video.Reporter.attach(a,b,b.autoplay),this.G.push(a)};var w=function(a){return"object"==typeof gwd&&"GwdId"in gwd?(new gwd.GwdId(a)).getString():"string"==typeof a?a:a.id},x=function(a){Array.prototype.slice.call(a.a.querySelectorAll("video, gwd-youtube, audio")).forEach(function(a){a.pause()})};v.prototype.attributeChangedCallback=null;document.registerElement("gwd-doubleclick",{prototype:v.prototype});}()
