try{window.parent._dv_win['dvCallback_1478240653427534']($dv,window,'52e5b42634f0419faa41bace05de40ae','tps11011.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForMA', function() {var tag = $dv.tags[$uid];var targetWin = tag.t2tIframeWindow;if(!targetWin){var t2tIframeId = tag.t2tIframeId;if(t2tIframeId){var iFrame = window.parent.getElementById(t2tIframeId);if(iFrame){targetWin = iFrame.contentWindow;}}}if(targetWin){var dateNow = 0;if(Date.now){dateNow = Date.now();} else {dateNow = +new Date();}var message = {action : 'notifyMultipleAdsAdEntityInformationReady',adEntityInformation : {comparisonItems : [{name : 'cmp', value : 3877407, bitFlag : 1, maxTimeMS : 5000, eventToFire : 'CampaignMultipleAd'},{name : 'clcd', value : 1147020, bitFlag : 2, maxTimeMS : 5000},{name : 'plmt', value : 3877432, bitFlag : 4, maxTimeMS : 5000},{name : 'mp', value : 3160, bitFlag : 8, maxTimeMS : 5000},{name : 'adv', value : 561672, bitFlag : 16, maxTimeMS : 5000, eventToFire : 'LobMultipleAd'},{name : 'cmpMP', value : 1163222122120, bitFlag : 32, maxTimeMS : 5000}],dvTagCreatedTS : tag.t2tIframeCreationTime,visitJSPostMessageTS : dateNow}};var stringifyFunc = null;if(window.JSON){stringifyFunc = window.JSON.stringify;} else {if(window.parent && window.parent.JSON){stringifyFunc = window.parent.JSON.stringify;}}if(!stringifyFunc){return;}var msgString = stringifyFunc(message);targetWin.postMessage(msgString, '*');setTimeout(function(){targetWin.postMessage(msgString, '*');}, 100);setTimeout(function(){targetWin.postMessage(msgString, '*');}, 500);}});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
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
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 3877407},{name : 'plmt', value : 3877432}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });var impId = '52e5b42634f0419faa41bace05de40ae';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var ifu = '';var alu = 'http://ad.doubleclick.net/ddm/clk/291583327;106680815;k';var lbl='';var d=null,e=dvObj==window.$dv,h=e?parent:window,k=dvObj.tags[impId].protocol+"//"+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+"/"+(e?"event":"bsevent")+".gif?impid="+impId,l=0,m=0,n=[],p=[],q=10;function r(a,c){function b(b){return f=function(g){g.preventDefault();if(!u[c<<q*b]&&(rhe(c,c<<q*b),u[c<<q*b]=!0,a)){events=i[b];for(g=0;g<events.length;g++)a.removeEventListener?a.removeEventListener(events[g],f):a.detachEvent?a.detachEvent("on"+events[g],f):a["on"+events[g]]=f}}}var i=[["click"],["focus"],"input change keyup textInput keypress paste".split(" ")],u=[];u[c]=!1;if(a)for(var j=0;j<i.length;j++){events=i[j];for(var o=0;o<events.length;o++)a.addEventListener?a.addEventListener(events[o],b(j),!0):a.attachEvent?a.attachEvent("on"+events[o],b(j)):a["on"+events[o]]=b(j)}}window.rhe=function(a,c){void 0==c&&(c=a);var b="",i="";"number"===typeof a&&void 0==n[a]&&(n[a]=!0,l+=a,b="&"+lbl+"heas="+l);"number"===typeof c&&void 0==p[c]&&(p[c]=!0,m+=c,i="&dvp_hease="+m);dvObj.domUtilities.addImage(k+"&"+lbl+"hea=1"+b+i,dvObj.tags[impId].tagElement.parentNode)};h.rhe=rhe;function s(a,c){var b=document.createElement(a);b.id=(c||a)+"-"+impId;b.style.visibility="hidden";b.style.position="absolute";b.style.display="none";return b}function t(a){var c=v;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);"createEvent"in document?(b=document.createEvent("HTMLEvents"),b.initEvent("change",!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent("onchange",b))}})}var w=s("form");w.submit=function(){window.rhe(1,1)};var v=s("input","txt");v.name=v.id;v.type="text";t("value");t("textContent");var x=s("input","btn");x.name=x.id;x.type="button";var y=s("input","sbmt");y.name=y.id;y.type="submit";y.click=function(){window.rhe(2,2)};var z=s("a");z.href="javascript:window.rhe(16,16);";if(""!=alu){var A=s("a");A.href=alu}h.document.body.insertBefore(w,d);h.document.body.insertBefore(z,d);w.insertBefore(v,d);w.insertBefore(x,d);w.insertBefore(y,d);r(v,8);r(x,4);r(y,2);r(w,1);""!=alu&&(A=s("a","alu"),A.href=alu,h.document.body.insertBefore(A,d),r(A,32));if(""!=ifu){var B=s("iframe");B.src=ifu;h.document.body.insertBefore(B,d);r(B,64)};} catch (e) {}; });var impId = '52e5b42634f0419faa41bace05de40ae';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {function u(){function v(a,c){a.addEventListener?a.addEventListener("mousemove",c):a.attachEvent?a.attachEvent("onmousemove",c):a.onmousemove=c}function k(a){var a=a||window.event,c=a.pageX,d=a.pageY;void 0===c&&(c=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,d=a.clientY+document.body.scrollTop+document.documentElement.scrollTop);e++;0==e?f=new Date:20==e&&(r=new Date,a=r.getTime(),a==f.getTime()&&a++,g=1E3*(h/e/(a-f.getTime())),0<=i&&(l=(l*i+g)/(i+1)),i++,g>m&&(m=Math.floor(g)),e=-1,h=0,f=new Date);0<j&&(a=Math.sqrt((c-j)*(c-j)+(d-n)*(d-n)),h+=a,o+=a);j=c;n=d}var w=function(){var a={};"object"===typeof window.$dvbs&&(a.c=impId,a.b=$dvbs,a.a="/bsevent.gif");"object"===typeof window.$dvbsr&&(a.c=impId,a.b=$dvbsr,a.a="/bsevent.gif");"object"===typeof window.$dv&&(a.c=$uid,a.b=$dv,a.a="/event.gif");return a}().a,p=impId,f,r,j=-1,n=-1,g=0,e=-1,h=0,m=0,o=0,l=0,i=0,s=dvObj==window.$dv?parent:window,q=0,t;this.exec=function(){t=(new Date).getTime();var a=("5;15;30;45").split(";"),c;for(c in a){var d=parseInt(a[c]);!1==isNaN(d)&&setTimeout(function(){var a=c;q++;if(q>=10){var b=s.document;b.removeEventListener?b.removeEventListener("mousemove",k):b.detachEvent?b.detachEvent("onmousemove",k):b.onmousemove=null}else{var b=[],d="avs="+Math.floor(l),e="tdis="+Math.floor(o);b.push("mxs="+m);b.push(d);b.push(e);!0==true&&b.push("dvp_mtec="+q);!0==true&&b.push("dvp_mtco="+a);!0==false&&(a="dvp_mt_lstti="+(new Date).getTime(),b.push("dvp_mt_stti="+t),b.push(a));a=dvObj.tags[p];a=a.dv_protocol+"//"+(a.ServerPublicDns||a.serverPublicDns)+w+"?impid="+p;d=[];if("undefined"!==typeof b)for(e=0;e<b.length;e++)d.push(b[e]);a+="&"+d.join("&");dvObj.domUtilities.addImage(a,dvObj.tags[p].tagElement.parentElement)}},1E3*d)}v(s.document,k)}}try{(new u).exec()}catch(x){};} catch (e) {}; });$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});try { var obj = {}; var my_win = window.parent; var tp_win = window;  if (my_win.addEventListener) { var my_scrl = function() { tp_win.$dv.registerEventCall(tp_win.$uid, {'dvp_scrl':'1'}); my_win.removeEventListener('scroll', my_scrl); }; my_win.addEventListener('scroll', my_scrl);  var my_time = function() { if (tp_win.$dv && tp_win.$dv.tags[tp_win.$uid] && tp_win.$dv.tags[tp_win.$uid].getTimeDiff) { var wint = tp_win.$dv.tags[tp_win.$uid].getTimeDiff(); tp_win.$dv.registerEventCall(tp_win.$uid, {'dvp_wint': wint}); }; my_win.removeEventListener('beforeunload', my_time); my_win.removeEventListener('unload', my_time); }; my_win.addEventListener('beforeunload', my_time); my_win.addEventListener('unload', my_time); }  obj.dvp_orie = my_win.orientation === undefined ? '0' : '1'; obj.dvp_touc = typeof document.ontouchstart === undefined ? '0' : '1';  obj.dvp_ossa = my_win.navigator.standalone === undefined ? '0' : '1'; obj.dvp_chro = my_win.chrome === undefined ? '0' : '1'; obj.dvp_istp = my_win.top === my_win ? '1' : '0'; obj.dvp_hist = my_win.history ? window.history.length : '';  obj.dvp_inh = my_win.innerHeight; obj.dvp_inw = my_win.innerWidth; obj.dvp_ouh = my_win.outerHeight; obj.dvp_ouw = my_win.outerWidth; if (my_win.screen) { obj.dvp_scah = my_win.screen.availHeight; obj.dvp_scaw = my_win.screen.availWidth; } if (my_win.document && my_win.document.body) { obj.dvp_dbch = my_win.document.body.clientHeight; obj.dvp_dbcw = my_win.document.body.clientWidth; } obj.dvp_pyo = my_win.pageYOffset; obj.dvp_pxo = my_win.pageXOffset;  obj.dvp_manfh = '0'; var html_elem = document.getElementsByTagName('html'); if (html_elem.length > 0) { var manf = html_elem[0].getAttribute('manifest'); obj.dvp_manfh = manf ? manf : '0'; }  obj.dvp_meta = '0'; var metas = ['application-name','mobile-web-app-capable', 'apple-mobile-web-app-capable']; var meta_arr = document.getElementsByTagName('meta'); for(var i = 0; i < meta_arr.length; i++) { for(var j = 0; j < metas.length; j++) { if (meta_arr[i].hasAttribute(metas[j])) { obj.dvp_meta += ('_' + j); } } }  var dvp_manif = '0'; var link_arr = document.head.getElementsByTagName('link'); for(var i = 0; i < link_arr.length; i++) { if (link_arr[i].hasAttribute('rel') && link_arr[i].getAttribute('rel') == 'manifest') { dvp_manif = link_arr[i].getAttribute('href'); break; } }  var domElements = my_win.document.getElementsByTagName('*'); obj.dvp_fde = 0;  for (var i = 0; i < domElements.length || i <= 50; i++) {  if (domElements[i] && domElements[i].tagName) { var domElement = domElements[i].tagName.toLowerCase(); if (domElement != 'script' && domElement != 'html' && domElement != 'title' && domElement != 'head' && domElement != 'body' && domElement != 'style') { obj.dvp_fde++; } } }  tp_win.$dv.registerEventCall(tp_win.$uid, obj); } catch(e) {};$dv.pubSub.subscribe('MeasurementCapabilityDetected', $uid, 'HA2_RAF', function() {if (typeof (requestAnimationFrame) == 'undefined')    return;if ($dv.tags[$uid].getViewabilityData && typeof $dv.tags[$uid].getViewabilityData == 'function') {    var raf = 0;    var rafFunc = function() { raf++; parent.requestAnimationFrame(rafFunc); };    rafFunc();    var lastRaf = 0;    var isRafv = function() {        var ret = false;        if (raf - lastRaf > 10) {            ret = true;        }        lastRaf = raf;        return ret;    };    var consHid = 0;    var lastVdat = {};    var storeLastVdat = function(vdat) {        lastVdat['bucket_100'] = vdat['bucket_100'];        lastVdat['bucket_90_99'] = vdat['bucket_90_99'];    };    var isViewable = function() {        var ret = false;        try {            var vdat = $dv.tags[$uid].getViewabilityData().buckets;            if (vdat['bucket_100'] > lastVdat['bucket_100'] || vdat['bucket_90_99'] > lastVdat['bucket_90_99']) {                ret = true;            }            storeLastVdat(vdat);        } catch (ex) {}        return ret;    };    var intervalFunc = null;    var checkHid = function() {        if (isViewable() && !document.hidden && !isRafv()) {            consHid++;        }        else {            consHid = 0;        }        if (consHid >= 5) {            $dv.registerEventCall($uid, { dvp_hatrafc: 1});            if (intervalFunc != null) {                clearInterval(intervalFunc);            }        }    };    intervalFunc = setInterval(checkHid, 1000);}});var newAvoValues = {};if ($dv.tags[$uid].AVO == undefined) $dv.tags[$uid].AVO = {};for (var id in newAvoValues){if (newAvoValues[id] != undefined){$dv.tags[$uid].AVO[id]= newAvoValues[id];}};$dv.tags[$uid].AVO.rpv = 1;$dv.tags[$uid].set({ is_projected_viewability: 0, projected_view_rate: '', projected_error_rate: '' });$dv.CommonData.deviceType = 1;function IVCallback(ViewAssureBootstrapper) {    if(ViewAssureBootstrapper && typeof(ViewAssureBootstrapper)==='function') {       ViewAssureBootstrapper({ 'serverSettings': { 'protocol': 'http://', 'templateVersion': '11', 'TKH': '3925974815634101563' } });   } else {       new dv_InViewService({ 'protocol': 'http://' }).inViewManager();     }};var hasAvsEval = 0;var avsScrVer = '629';if(hasAvsEval && Math.random()*100 < 50) {   var avsScrVer = '629'; } var script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'http://cdn.doubleverify.com/avs' + avsScrVer + '.js'; document.body.appendChild(script);var impId = '52e5b42634f0419faa41bace05de40ae';var dvObj = $dv;var isLogToDvp = true;var isTpImp = dvObj == window.$dv;var rtnName = isTpImp ? 'ImpressionServed' : 'BeforeDecisionRender';var eventStr = isTpImp ? 'event' : 'bsevent'; var contextWin = isTpImp ? parent : window;dvObj.pubSub.subscribe(rtnName, impId, 'CLIP_RTN', function () {function h(a){function f(b){setTimeout(function(){for(var c=b.localDescription.sdp.split("\n"),a=0;a<c.length;++a)0===c[a].indexOf("a=candidate:")&&g(c[a])},1E3)}function g(b){var c=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(b)[1],b=/(host)/.exec(b)[1];void 0===e[c]&&"host"===b&&(b={},b[!0===isLogToDvp?"dvp_lip":"lip"]=c,a(null,b));e[c]=!0}var e={};(function(){var b=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;if(b){var c={optional:[{RtpDataChannels:!0}]},e={iceServers:[]};try{var d=new b(e,c);d.b=function(a){a.a&&g(a.a.a)};d.createDataChannel("");d.createOffer(function(a){d.setLocalDescription(a,function(){},function(){});f(d)},function(b){a({dvp_liperr:("createOffer_failed: "+b.message).slice(0,100)},null)})}catch(i){a({dvp_liperr:("createOffer_failed: "+i.message).slice(0,100)},null)}}else a({dvp_lipdis:"1"},null)})()}try{h(function(a,f){dvObj.registerEventCall(impId,null===a?f:a)})}catch(j){};});try{$dv.pubSub.publish('ImpressionServed', $uid);}catch(e){}