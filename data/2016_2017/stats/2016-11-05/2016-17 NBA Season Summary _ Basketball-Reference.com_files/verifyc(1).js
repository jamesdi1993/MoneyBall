var ampCollectorContext = {dvObj : $dvbsr, impId : '9ac8c91f2e1d4348b6f77c6249e58c29', eventToSubsribe : 'AfterDecisionRender'};ampCollectorContext.dvObj.pubSub.subscribe(ampCollectorContext.eventToSubsribe, ampCollectorContext.impId, 'RTN_GoogleAmpDataCollector', function () {var dvObj = ampCollectorContext.dvObj;var impId = ampCollectorContext.impId;var cur = window;var amp;var tryNum = 0;try{while (cur!=cur.parent && !amp && tryNum<10){amp = window.context || window.parent.context;cur = cur.parent;tryNum++;}}catch(e){}var href ='';var referrer ='';var isAmp ='0';if (amp){isAmp ='1';referrer = encodeURIComponent(amp.referrer || '');href = encodeURIComponent((amp.location && amp.location.href) ? amp.location.href : '');}dvObj.registerEventCall(impId, {dvp_isAmp:isAmp, dvp_ampRef: referrer, dvp_ampHref: href });});setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'9ac8c91f2e1d4348b6f77c6249e58c29',
                comparisonItems:[{name : 'cmp', value : 3877407},{name : 'plmt', value : 3877432}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_1478240651233736');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var impId = '9ac8c91f2e1d4348b6f77c6249e58c29';var dvObj = $dvbsr;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var ifu = '';var alu = 'http://ad.doubleclick.net/ddm/clk/291583327;106680815;k';var lbl='';var d=null,e=dvObj==window.$dv,h=e?parent:window,k=dvObj.tags[impId].protocol+"//"+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+"/"+(e?"event":"bsevent")+".gif?impid="+impId,l=0,m=0,n=[],p=[],q=10;function r(a,c){function b(b){return f=function(g){g.preventDefault();if(!u[c<<q*b]&&(rhe(c,c<<q*b),u[c<<q*b]=!0,a)){events=i[b];for(g=0;g<events.length;g++)a.removeEventListener?a.removeEventListener(events[g],f):a.detachEvent?a.detachEvent("on"+events[g],f):a["on"+events[g]]=f}}}var i=[["click"],["focus"],"input change keyup textInput keypress paste".split(" ")],u=[];u[c]=!1;if(a)for(var j=0;j<i.length;j++){events=i[j];for(var o=0;o<events.length;o++)a.addEventListener?a.addEventListener(events[o],b(j),!0):a.attachEvent?a.attachEvent("on"+events[o],b(j)):a["on"+events[o]]=b(j)}}window.rhe=function(a,c){void 0==c&&(c=a);var b="",i="";"number"===typeof a&&void 0==n[a]&&(n[a]=!0,l+=a,b="&"+lbl+"heas="+l);"number"===typeof c&&void 0==p[c]&&(p[c]=!0,m+=c,i="&dvp_hease="+m);dvObj.domUtilities.addImage(k+"&"+lbl+"hea=1"+b+i,dvObj.tags[impId].tagElement.parentNode)};h.rhe=rhe;function s(a,c){var b=document.createElement(a);b.id=(c||a)+"-"+impId;b.style.visibility="hidden";b.style.position="absolute";b.style.display="none";return b}function t(a){var c=v;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);"createEvent"in document?(b=document.createEvent("HTMLEvents"),b.initEvent("change",!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent("onchange",b))}})}var w=s("form");w.submit=function(){window.rhe(1,1)};var v=s("input","txt");v.name=v.id;v.type="text";t("value");t("textContent");var x=s("input","btn");x.name=x.id;x.type="button";var y=s("input","sbmt");y.name=y.id;y.type="submit";y.click=function(){window.rhe(2,2)};var z=s("a");z.href="javascript:window.rhe(16,16);";if(""!=alu){var A=s("a");A.href=alu}h.document.body.insertBefore(w,d);h.document.body.insertBefore(z,d);w.insertBefore(v,d);w.insertBefore(x,d);w.insertBefore(y,d);r(v,8);r(x,4);r(y,2);r(w,1);""!=alu&&(A=s("a","alu"),A.href=alu,h.document.body.insertBefore(A,d),r(A,32));if(""!=ifu){var B=s("iframe");B.src=ifu;h.document.body.insertBefore(B,d);r(B,64)};} catch (e) {}; });var impId = '9ac8c91f2e1d4348b6f77c6249e58c29';var dvObj = $dvbsr;var isLogToDvp = true;var isTpImp = dvObj == window.$dv;var rtnName = isTpImp ? 'ImpressionServed' : 'BeforeDecisionRender';var eventStr = isTpImp ? 'event' : 'bsevent'; var contextWin = isTpImp ? parent : window;dvObj.pubSub.subscribe(rtnName, impId, 'CLIP_RTN', function () {function h(a){function f(b){setTimeout(function(){for(var c=b.localDescription.sdp.split("\n"),a=0;a<c.length;++a)0===c[a].indexOf("a=candidate:")&&g(c[a])},1E3)}function g(b){var c=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(b)[1],b=/(host)/.exec(b)[1];void 0===e[c]&&"host"===b&&(b={},b[!0===isLogToDvp?"dvp_lip":"lip"]=c,a(null,b));e[c]=!0}var e={};(function(){var b=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;if(b){var c={optional:[{RtpDataChannels:!0}]},e={iceServers:[]};try{var d=new b(e,c);d.b=function(a){a.a&&g(a.a.a)};d.createDataChannel("");d.createOffer(function(a){d.setLocalDescription(a,function(){},function(){});f(d)},function(b){a({dvp_liperr:("createOffer_failed: "+b.message).slice(0,100)},null)})}catch(i){a({dvp_liperr:("createOffer_failed: "+i.message).slice(0,100)},null)}}else a({dvp_lipdis:"1"},null)})()}try{h(function(a,f){dvObj.registerEventCall(impId,null===a?f:a)})}catch(j){};});


try{__tagObject_callback_520798736602({ImpressionID:"9ac8c91f2e1d4348b6f77c6249e58c29", ServerPublicDns:"tps605.doubleverify.com"});}catch(e){}
try{$dvbsr.pubSub.publish('BeforeDecisionRender', "9ac8c91f2e1d4348b6f77c6249e58c29");}catch(e){}
try{__verify_callback_520798736602({
ResultID:2,
Passback:"",
AdWidth:728,
AdHeight:90});}catch(e){}
try{$dvbsr.pubSub.publish('AfterDecisionRender', "9ac8c91f2e1d4348b6f77c6249e58c29");}catch(e){}
