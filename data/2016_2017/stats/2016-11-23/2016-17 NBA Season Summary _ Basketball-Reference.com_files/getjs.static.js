!function t(e,i,n){function r(s,a){if(!i[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[s]={exports:{}};e[s][0].call(d.exports,function(t){var i=e[s][1][t];return r(i?i:t)},d,d.exports,t,e,i,n)}return i[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(t,e,i){var n=t(8).UserDataLoader;window.JSON=window.JSON||t(9);var r=function(t){this.userDataLoader=new n,this.options=t,this.callbackQueue=[]};r.prototype={loadUserData:function(t){if(t||(t=function(){}),!this.options)return void t(null,null);if(this.cachedUserData)return void t(this.cachedUserData.error,this.cachedUserData.results);this.callbackQueue.push(t);var e=this;this.userDataLoader.loadAllUserData({timeout:this.options.timeout,partners:this.options.partners,responseHandler:function(t,i){e.handleLoadedUserData(t,i)}})},handleLoadedUserData:function(t,e){this.cachedUserData={error:t,results:e};for(var i;void 0!==(i=this.callbackQueue.pop());)try{i(t,e)}catch(n){}var r=this;setTimeout(function(){r.userDataLoader.close()},this.options.closeTimeout||5e3)},encodeUserData:function(t){return t?encodeURIComponent(JSON.stringify(t)):""}},e.exports=r},{8:8,9:9}],2:[function(require,module,exports){var IframeUtil=require(4),UserDataProvider=require(1),HttpClient=require(3);window.pp=window.pp||{},window.pp.allAds=window.pp.allAds||{},window.pp.adCounter=window.pp.adCounter||0,window.pp.AJAX_READY_STATES={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},window.pp.HTTP_STATUS={OK:200,OK_NO_DATA:204},window.pp.requestActions={VIEWAD:"VIEWAD",BID:"BID"},window.pp.updateMaOpts=function(t,e){try{var i=this.allAds[t];return i.maOpts=e,i}catch(n){}},window.pp.beforeRenderAd=function(t){var e=this.allAds[t];e.completeRotatingAd()},window.pp.afterRenderAd=function(t){try{var e=this.allAds[t];0!==e.maSeqNum||e.options.rif||document.write("</div>"),e.scheduleMA()}catch(i){}},window.pp.Ad=window.pp.Ad||function(t){this.options=t,this.FrameStatus={JS:0,IFRAME:1,IFRAME_BREAKOUT:2,DOUBLE_IFRAME:3},this.errorStep="",this.adRect=this.parseAdSize(),this.callback=t.callback,this.adUnitId=t.adUnitId,this.maSeqNum=0,null!==this.adRect&&this.options.hasOwnProperty("maOpts")&&(this.maOpts=this.options.maOpts,this.maEnabled=this.options.maOpts.enabled),t.csud&&t.rif&&(window.pp.userDataProvider=window.pp.userDataProvider||new UserDataProvider(t.csud))},window.pp.Ad.prototype={loopingPrefix:"cwl_",kvPrefix:"cwkv_",append:function(t){this.placeHolderElement.appendChild(t)},display:function(){try{if(this.isBidCall()||(this.adContainerId="pp_ad_container_"+window.pp.adCounter++,document.write('<div class="pp_placeholder" id="'+this.adContainerId+'_ph"></div>'),this.placeHolderElement=document.getElementById(this.adContainerId+"_ph"),this.options.rif&&document.write('<iframe class="pp_ad_container" id="'+this.adContainerId+'_iframe" width="'+this.adRect.width+'" height="'+this.adRect.height+'" scrolling="no" frameBorder="0" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0"></iframe>'),window.pp.allAds[this.adContainerId]=this),this.setState(),this.options.rif&&window.pp.userDataProvider){var t=this;window.pp.userDataProvider.loadUserData(function(e,i){i&&(t.clientSideUserData=window.pp.userDataProvider.encodeUserData(i)),t.getAd()})}else this.getAd()}catch(e){-1==this.getAdUrl.indexOf("?")&&this.buildGetAdUrlFromOptions(this.options);var i=this.getAdUrl+this.buildGetAdUrl();i=i+(i.indexOf("?")>-1?"&":"?")+"jserr="+this.exMsg(e)+"&errSt="+this.errorStep;var n=document.createElement("script");n.src=i,this.append(n)}},isBidCall:function(){return this.options.ca==window.pp.requestActions.BID},setState:function(){try{this.evalQueryString(),this.storage=navigator,this.getAdUrl=this.options.cu,this.isDefined(this.options.cwif)||(this.options.cwif=!1),this.smartFileLocation=this.getSmartFileLocation(),this.frameStatus=this.getDisplayType(),this.tile=this.getTile(this.frameStatus,this.storage,this.kvPrefix),this.isOpera=this.isOpera(),this.position=this.getPosition()}catch(t){throw this.setErrorStep("setSt"),t}},isDefined:function(t){return"undefined"!=typeof t},getAd:function(){try{var t=this;this.isInIFrame()||(this.isDefined(this.getAdUrl)?(this.attachUnloadHandler(function(){t.onUnload(t.loopingPrefix,t.kvPrefix,t.storage)}),this.isBidCall()?this.apiRespond(this.callback):(this.getAdUrl+=this.buildGetAdUrl(),this.writeAd())):this.append(document.createTextNode("Thank you, your file's location is:  "+window.location)))}catch(e){throw this.setErrorStep("getAd"),e}},apiRespond:function(t){HttpClient.makeRequest({url:this.getAdUrl+this.buildGetAdUrl(),cors:!0,success:function(e){t(e)},error:function(e,i){t(i)}})},getDisplayType:function(){try{return window==top?this.FrameStatus.JS:document.location.host==top.document.location.host?this.FrameStatus.IFRAME_BREAKOUT:this.FrameStatus.IFRAME}catch(t){try{if(top&&parent==top)return this.FrameStatus.IFRAME;if(parent.document.referrer)return this.FrameStatus.IFRAME}catch(e){}return this.FrameStatus.DOUBLE_IFRAME}},getTile:function(t,e,i){try{if(!this.isJSOrIFrameBreakout())return-1;var n=i+"tile";return void 0===e[n]&&(e[n]=0),++e[n]}catch(r){return-1}},isInIFrame:function(){return this.options.cwif||this.isJSOrIFrameBreakout()||!this.smartFileLocation?!1:this.breakOutFromFrames()},evalQueryString:function(){var query=location.search.slice(1);!this.isEmpty(query)&&this.strContains(query,"this.options.cwif")&&eval(unescape(query))},isEmpty:function(t){return!t||null===t||"string"==typeof t&&("null"==t||!this.isDefined(t)||""===t.replace(/\s*/,""))},breakOutFromFrames:function(){var t=this.smartFileLocation+"?this.options.cwif=true;";for(var e in this.options)t+=this.getKeyValueString("this.options."+e,this.options[e]);var i=this.getBreakOutFrame(this.smartFileLocation);return i?(i.location.replace(t),!0):!1},getKeyValueString:function(t,e){return this.isEmpty(e)?"":t+"='"+e+"';"},getBreakOutFrame:function(t){var e=window;try{var i=t.split("//")[1].split("/")[0],n=e.location.host;if(n==i)return null;for(;e.parent.window!=e.top&&(n=e.parent.location.host,!this.strContains(n,i));)e=e.parent.window}catch(r){}return e},attachUnloadHandler:function(t){try{var e=window;if(this.isDefined(e.addEventListener)&&!this.isOpera)e.addEventListener("beforeunload",t,!1);else if(this.isDefined(e.attachEvent)&&!this.isOpera)e.attachEvent("onbeforeunload",t);else{var i=e.onload;e.onload="function"!=typeof i?t:function(){i(),t()}}}catch(n){throw this.setErrorStep("unload"),n}},onUnload:function(t,e,i){try{var n;for(n in i)0===n.indexOf(t)&&(i[n]=0),0===n.indexOf(e)&&(i[n]=0)}catch(r){}},buildGetAdUrl:function(){var t=this.buildGetAdUrlFromOptions(this.options);return t+="&rq="+this.getLoopingCount(),t+="&dw="+this.getWidth(),t+="&cwu="+this.processUrlForQSValue(this.getUrl()),t+="&cwr="+this.processUrlForQSValue(this.getReferrer()),t+="&mrnd="+this.getRandomNumber(),t+="&if="+this.frameStatus,t+="&tl="+this.tile,t+="&pxy="+this.position,t+="&cxy="+this.getClientDimensions(),t+="&dxy="+this.getDocumentDimensions(),t+="&tz="+(new Date).getTimezoneOffset(),t+="&ln="+this.getLanguage(),this.clientSideUserData&&(t+="&csud="+this.clientSideUserData),t},buildGetAdUrlFromOptions:function(t){var e="";return e+="?tagver=1",e+=this.safeQs("ca",t.ca),e+=this.safeQs("cp",t.cp),e+=this.safeQs("ct",t.ct),e+=this.safeQs("cwod",t.cwod),e+=this.safeQs("epid",t.epid),e+=this.safeQs("esid",t.esid),e+=this.safeQs("ifurl",t.ifurl),t.tppg&&(e+=this.safeQs("tppg",this.processUrlForQSValue(t.tppg))),e+=this.safeQs("brk",t.brk),e+=this.safeQs("ccid",t.ccid),e+=this.safeQs("wp",t.wp),e+=this.safeQs("cf",this.processUrlForQSValue(t.cf)),e+=this.safeQs("asv",t.asv),e+=this.safeQs("cw",t.cw),e+=this.safeQs("ch",t.ch),e+=this.safeQs("fp",t.fp),e+=this.addPubTokens(t.PPTOKEN)},addPubTokens:function(t){var e="";if(this.isDefined(t)&&null!==t)for(var i in t)e+=this.safeQs("PPTOKEN_"+i,t[i]);return e},safeQs:function(t,e){return this.isDefined(e)?"&"+t+"="+e:""},processUrlForQSValue:function(t){var e=escape(t);return e=e.replace(/\+/g,"%2B"),e=e.replace(/\//g,"%2F")},getLoopingCount:function(){try{var t=this.loopingPrefix+this.options.ct+"_"+this.options.cf+"_"+this.options.esid+"_"+this.position;return this.storage[t]?this.storage[t]++:this.storage[t]=1,this.storage[t]}catch(e){return this.setErrorStep("loop"),1}},getWidth:function(){var t=0;try{if(!document.body){var e=document.createElement("div");e.id="cwViz1",e.style.width="0px",e.style.height="0px",e.style.display="none",e.style.visibility="hidden",e.innerHTML="o",this.append(e)}self.innerWidth?t=self.innerWidth:document.documentElement&&document.documentElement.clientHeight?t=document.documentElement.clientWidth:document.body&&(t=document.body.clientWidth)}catch(i){t=-1}return t},getUrl:function(){var t="",e="",i="",n=window;try{if(this.isJSOrIFrameBreakout())return top.location}catch(r){}try{if(e=document.location,e==top.location)t=e;else for(;;){if(t=n.document.location,n.document.referrer&&(i=n.document.referrer),n==n.parent)break;n.document.referrer&&(t=i),n=n.parent}(""===t||null===t||void 0===t)&&(t=i?i:e)}catch(r){i&&""!==i?t=i:""===t&&(t=e)}return t},getReferrer:function(){try{if(this.isJSOrIFrameBreakout())return top.document.referrer}catch(t){}return""},getPosition:function(){var t=[0,0];try{if(t=this.getOffsetPosition(this.isBidCall()?document.getElementById(this.adUnitId):this.placeHolderElement),window!=top){var e=this.getIFramePosition();t[0]+=e[0],t[1]+=e[1]}}catch(i){}return t},getRandomNumber:function(){return Math.floor(1e8*Math.random())},getOffsetPosition:function(t){var e=[0,0];if(null!==t&&void 0!==t){var i=t.getBoundingClientRect();e=[Math.round(i.left),Math.round(i.top)]}return e},getIFramePosition:function(){var t=this.getTopFrame();if(null===t||void 0===t)throw-15;try{return this.getOffsetPosition(t.frameElement)}catch(e){}for(var i=top.document.getElementsByTagName("IFRAME"),n=0;n<i.length;n++){var r=i[n].contentWindow.location;if(r==t.location)return this.getOffsetPosition(i[n])}},getTopFrame:function(){try{for(var t=[],e=window,i=20;--i>0;){if(t.push(e),e===top||null===e.parent)return t[t.length-2];e=e.parent}return null}catch(n){return null}},getClientDimensions:function(){try{var t=window.innerWidth||top.document.documentElement.clientWidth||top.document.body.clientWidth,e=window.innerHeight||top.document.documentElement.clientHeight||top.document.body.clientHeight;return[t,e]}catch(i){return""}},getDocumentDimensions:function(){try{return[top.window.document.body.offsetWidth,top.window.document.body.offsetHeight]}catch(t){return""}},getLanguage:function(){try{if(navigator){var t=[];return navigator.language&&t.push(navigator.language),navigator.userLanguage&&t.push(navigator.userLanguage),navigator.browserLanguage&&t.push(navigator.browserLanguage),navigator.systemLanguage&&t.push(navigator.systemLanguage),t.join(",")}}catch(e){}return""},writeAd:function(){if(this.options.rif){var t=IframeUtil.getDocument(document.getElementById(this.adContainerId+"_iframe"));this.requiresDocOpen()&&t.open(),t.write(this.getAdIframeMarkup()),this.requiresDocOpen()&&t.close()}else document.write('<div class="pp_ad_container" id="'+this.adContainerId+'">'+this.getAdScriptTag())},parseAdSize:function(){try{var t=this.options.cf.split(/x/i);return{width:t[0],height:t[1]}}catch(e){}return null},getAdScriptTag:function(){return'<script type="text/javascript" src="'+this.getAdScriptTagURL()+'"></script>'},getAdScriptTagURL:function(){var t=this.getAdUrl;return this.maSeqNum>0&&(t+="&ma="+this.maSeqNum),this.adContainerId&&(t+="&acid="+this.adContainerId),t},scheduleIsAllowed:function(){return this.maOpts.enabled&&this.maOpts.periodMax>0&&this.maOpts.periodMin>0&&this.maOpts.periodMax>=this.maOpts.periodMin&&this.maSeqNum<this.maOpts.maxSeqNum},scheduleMA:function(){if(this.scheduleIsAllowed()){var t=this;setTimeout(function(){t.maSeqNum++,t.writeMA()},Math.round(1e3*(t.maOpts.periodMin+Math.random()*(t.maOpts.periodMax-t.maOpts.periodMin))))}},writeMA:function(){var t=this.options.rif?IframeUtil.getDocument(document.getElementById(this.adContainerId+"_iframe")):document,e=this.options.rif?t.body:t.getElementById(this.adContainerId),i=t.createElement("iframe");i.setAttribute("marginwidth",0),i.setAttribute("marginheight",0),i.setAttribute("allowtransparency",!0),i.setAttribute("frameborder",0),i.setAttribute("frameBorder",0),i.setAttribute("scrolling","no"),i.setAttribute("height",this.adRect.height),i.setAttribute("width",this.adRect.width),i.className="pp_ad_container",i.style.display="none",e.appendChild(i);var n=IframeUtil.getDocument(i);this.requiresDocOpen()&&n.open(),n.write(this.getAdIframeMarkup()),this.requiresDocOpen()&&n.close()},getAdIframeMarkup:function(){return"<html><body style='margin:0;padding:0;overflow:hidden;background-color:transparent;'>"+this.getAdScriptTag()+"</body></html>"},completeRotatingAd:function(){var t;if(t=this.options.rif?IframeUtil.getDocument(document.getElementById(this.adContainerId+"_iframe")).body:document.getElementById(this.adContainerId),t&&0!==this.maSeqNum)if(this.maOpts.skipRotation)t.childNodes.length>1&&t.removeChild(t.lastChild);else{for(;t.childNodes.length>1;)t.removeChild(t.firstChild);t.childNodes.length>0&&(t.firstChild.style.display="block")}},isJSOrIFrameBreakout:function(){return this.frameStatus==this.FrameStatus.JS||this.frameStatus==this.FrameStatus.IFRAME_BREAKOUT},exMsg:function(t){try{if("object"==typeof t)return escape(this.isDefined(JSON)&&this.isDefined(JSON.stringify)?JSON.stringify(t):t.toString())}catch(e){}return escape(t)},strContains:function(t,e){return t&&e&&-1!=t.toLowerCase().indexOf(e.toLowerCase())},getSmartFileLocation:function(){try{if(this.isDefined(this.options.cwfl)&&this.options.cwfl.length>0)return this.options.cwfl;if(this.isDefined(window.cwfl))return window.cwfl}catch(t){this.setErrorStep("smartFile")}return!1},isOpera:function(){try{return this.strContains(navigator.userAgent,"opera")}catch(t){return this.setErrorStep("opera"),!1}},requiresDocOpen:function(){var t=this;return this.requiresDocOpenCached=this.requiresDocOpenCached||function(){try{return!t.strContains(navigator.userAgent,"msie")}catch(e){return!0}}(),this.requiresDocOpenCached},setErrorStep:function(t){this.errorStep+="|"+t}},"undefined"!=typeof pp_display_ad&&"undefined"!=typeof pp_options&&new pp.Ad(pp_options).display()},{1:1,3:3,4:4}],3:[function(t,e,i){window.JSON=window.JSON||t(9);var n={makeRequest:function(t){try{t.method=t.method||"GET",t.success=t.success||function(t){},t.error=t.error||function(t,e){},t.cors=t.cors||!1;var e=null;window.XMLHttpRequest?e=new XMLHttpRequest:window.ActiveXObject&&(e=new ActiveXObject("Microsoft.XMLHTTP")),e.open(t.method||"GET",t.url,1),e.onreadystatechange=function(){4===e.readyState&&n.handleResponse(t,e)},t.cors&&(e.withCredentials=!0,e.setRequestHeader("Content-type","text/plain")),e.send(t.body||null)}catch(i){t.error(i,null)}},handleResponse:function(t,e){var i=e.responseText;try{if(200==e.status){if(i){var n=e.getResponseHeader("Content-type");return n&&n.indexOf("application/json")>-1?void t.success(JSON.parse(i)):void t.success(i)}}else if(e.status>300)return void t.error(new Error("Response code:"+e.status),i);t.success(null)}catch(r){t.error(r,i)}}};e.exports=n},{9:9}],4:[function(t,e,i){var n=t(5),r={getDocument:function(t){return t.contentDocument||t.contentWindow.document},createIFrame:function(t,e,i,r,o,s){var a=t.createElement("iframe");if(a.width=i,a.height=r,a.style.border="0px",a.scrolling="no",a.frameborder=0,a.allowtransparency=!0,a.margin="0",a.padding="0",a.frameBorder="0",a.id=n.random("div_"),e.appendChild(a),o&&(a.src=o),s){var c=["<html><head></head><body style='margin: 0px; background-color: transparent; padding: 0px;'>",s,"</body></html>"].join("");a.contentWindow.contents=c,a.src='javascript:window["contents"]'}return a}};e.exports=r},{5:5}],5:[function(t,e,i){var n={random:function(t){return(t||"")+Math.floor(Math.random()*Math.pow(10,8))}};e.exports=n},{}],6:[function(t,e,i){window.JSON=window.JSON||t(9);var n=function(){this.iframes={},this.init()};n.counter=0,n.prototype={handleResponse:function(t){if(t&&t.id){var e=this.iframes[t.id];if(e){try{e.handleResponse(t.error,t.result)}catch(i){}try{clearTimeout(e.timeoutFn)}catch(n){}delete this.iframes[t.id],this.removeDomElement(e)}}},init:function(){var t=this;t.hasPostMessage()&&(t.windowEventListener=function(e){try{t.handleResponse(JSON.parse(e.data))}catch(i){}},window.addEventListener?window.addEventListener("message",t.windowEventListener):window.attachEvent("onmessage",t.windowEventListener))},hasPostMessage:function(){return window.postMessage?!0:!1},loadUserData:function(t){var e=this,i=++n.counter,r=escape(JSON.stringify({id:i,payload:t.payload})),o=document.createElement("iframe");if(o.style.width="0px",o.style.height="0px",o.style.display="none",o.handleResponse=t.responseHandler,this.iframes[i]=o,t.timeout&&(o.timeoutFn=setTimeout(function(){e.handleResponse({error:"timeout",id:i})},t.timeout)),o.src=t.url+"#"+r,!this.hasPostMessage()){var s=function(){try{o.contentWindow.name&&e.handleResponse(JSON.parse(o.contentWindow.name))}catch(t){o.onload=s}},a=function(){};o.onload=s,o.onerror=a,o.attachEvent&&(o.attachEvent("onload",s),o.attachEvent("onerror",a))}return document.body.appendChild(o),this},loadAllUserData:function(t){var e={},i=(new Date).getTime(),n=1,r=function(){0===--n&&t.responseHandler(void 0,{rtime:(new Date).getTime()-i,partnerResponses:e})},o=function(t){return function(n,o){var s={};n&&(s.error=n),o&&(s.result=o),s.rtime=(new Date).getTime()-i,e[t]=s,r()}};for(var s in t.partners){var a=t.partners[s];n++,this.loadUserData({url:a.url,timeout:a.timeout||t.timeout,payload:a.payload,responseHandler:o(s)})}r()},close:function(){this.windowEventListener&&(window.removeEventListener?window.removeEventListener("message",this.windowEventListener):window.detachEvent("message",this.windowEventListener));for(var t in this.iframes){var e=this.iframes[t];delete this.iframes[t],this.removeDomElement(e)}},removeDomElement:function(t){try{t&&t.parentNode&&t.parentNode.removeChild(t)}catch(e){}}},e.exports=n},{9:9}],7:[function(t,e,i){window.JSON=window.JSON||t(9);var n=function(){};n.prototype={hasPostMessage:function(){return window.postMessage?!0:!1},parseRequest:function(){return JSON.parse(unescape(window.location.href.split("#")[1]))},listen:function(t){try{var e,i=this,n=i.parseRequest(),r=function(t,e){try{t&&(t=t.message?t.message:"General Error");var r=JSON.stringify({error:t,result:e,id:n.id});if(i.hasPostMessage())window.parent.postMessage(r,"*");else{window.name=r;var o=document.referrer.split("/")[2];window.location.href="//"+o+"/favicon.ico"}}catch(s){}};try{e=t(n.payload,r)}catch(o){return void r(o)}void 0!==e&&null!==e&&r(null,e)}catch(s){}}},e.exports=n},{9:9}],8:[function(t,e,i){e.exports={UserDataLoader:t(6),UserDataProvider:t(7)}},{6:6,7:7}],9:[function(t,e,i){(function(t){(function(){function n(t,e){function i(t){if(i[t]!==g)return i[t];var n;if("bug-string-char-index"==t)n="a"!="a"[0];else if("json"==t)n=i("json-stringify")&&i("json-parse");else{var o,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var c=e.stringify,d="function"==typeof c&&y;if(d){(o=function(){return 1}).toJSON=o;try{d="0"===c(0)&&"0"===c(new r)&&'""'==c(new s)&&c(v)===g&&c(g)===g&&c()===g&&"1"===c(o)&&"[1]"==c([o])&&"[null]"==c([g])&&"null"==c(null)&&"[null,null,null]"==c([g,v,null])&&c({a:[o,!0,!1,null,"\x00\b\n\f\r	"]})==a&&"1"===c(null,o)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new u(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==c(new u(864e13))&&'"-000001-01-01T00:00:00.000Z"'==c(new u(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==c(new u(-1))}catch(l){d=!1}}n=d}if("json-parse"==t){var h=e.parse;if("function"==typeof h)try{if(0===h("0")&&!h(!1)){o=h(a);var f=5==o.a.length&&1===o.a[0];if(f){try{f=!h('"	"')}catch(l){}if(f)try{f=1!==h("01")}catch(l){}if(f)try{f=1!==h("1.")}catch(l){}}}}catch(l){f=!1}n=f}}return i[t]=!!n}t||(t=a.Object()),e||(e=a.Object());var r=t.Number||a.Number,s=t.String||a.String,c=t.Object||a.Object,u=t.Date||a.Date,d=t.SyntaxError||a.SyntaxError,l=t.TypeError||a.TypeError,h=t.Math||a.Math,f=t.JSON||a.JSON;"object"==typeof f&&f&&(e.stringify=f.stringify,e.parse=f.parse);var p,m,g,w=c.prototype,v=w.toString,y=new u(-0xc782b5b800cec);try{y=-109252==y.getUTCFullYear()&&0===y.getUTCMonth()&&1===y.getUTCDate()&&10==y.getUTCHours()&&37==y.getUTCMinutes()&&6==y.getUTCSeconds()&&708==y.getUTCMilliseconds()}catch(S){}if(!i("json")){var O="[object Function]",A="[object Date]",b="[object Number]",E="[object String]",D="[object Array]",C="[object Boolean]",U=i("bug-string-char-index");if(!y)var T=h.floor,I=[0,31,59,90,120,151,181,212,243,273,304,334],N=function(t,e){return I[e]+365*(t-1970)+T((t-1969+(e=+(e>1)))/4)-T((t-1901+e)/100)+T((t-1601+e)/400)};if((p=w.hasOwnProperty)||(p=function(t){var e,i={};return(i.__proto__=null,i.__proto__={toString:1},i).toString!=v?p=function(t){var e=this.__proto__,i=t in(this.__proto__=null,this);return this.__proto__=e,i}:(e=i.constructor,p=function(t){var i=(this.constructor||e).prototype;return t in this&&!(t in i&&this[t]===i[t])}),i=null,p.call(this,t)}),m=function(t,e){var i,n,r,s=0;(i=function(){this.valueOf=0}).prototype.valueOf=0,n=new i;for(r in n)p.call(n,r)&&s++;return i=n=null,s?m=2==s?function(t,e){var i,n={},r=v.call(t)==O;for(i in t)r&&"prototype"==i||p.call(n,i)||!(n[i]=1)||!p.call(t,i)||e(i)}:function(t,e){var i,n,r=v.call(t)==O;for(i in t)r&&"prototype"==i||!p.call(t,i)||(n="constructor"===i)||e(i);(n||p.call(t,i="constructor"))&&e(i)}:(n=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],m=function(t,e){var i,r,s=v.call(t)==O,a=!s&&"function"!=typeof t.constructor&&o[typeof t.hasOwnProperty]&&t.hasOwnProperty||p;for(i in t)s&&"prototype"==i||!a.call(t,i)||e(i);for(r=n.length;i=n[--r];a.call(t,i)&&e(i));}),m(t,e)},!i("json-stringify")){var _={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},F="000000",M=function(t,e){return(F+(e||0)).slice(-t)},R="\\u00",x=function(t){for(var e='"',i=0,n=t.length,r=!U||n>10,o=r&&(U?t.split(""):t);n>i;i++){var s=t.charCodeAt(i);switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=_[s];break;default:if(32>s){e+=R+M(2,s.toString(16));break}e+=r?o[i]:t.charAt(i)}}return e+'"'},L=function(t,e,i,n,r,o,s){var a,c,u,d,h,f,w,y,S,O,U,I,_,F,R,P;try{a=e[t]}catch(k){}if("object"==typeof a&&a)if(c=v.call(a),c!=A||p.call(a,"toJSON"))"function"==typeof a.toJSON&&(c!=b&&c!=E&&c!=D||p.call(a,"toJSON"))&&(a=a.toJSON(t));else if(a>-1/0&&1/0>a){if(N){for(h=T(a/864e5),u=T(h/365.2425)+1970-1;N(u+1,0)<=h;u++);for(d=T((h-N(u,0))/30.42);N(u,d+1)<=h;d++);h=1+h-N(u,d),f=(a%864e5+864e5)%864e5,w=T(f/36e5)%24,y=T(f/6e4)%60,S=T(f/1e3)%60,O=f%1e3}else u=a.getUTCFullYear(),d=a.getUTCMonth(),h=a.getUTCDate(),w=a.getUTCHours(),y=a.getUTCMinutes(),S=a.getUTCSeconds(),O=a.getUTCMilliseconds();a=(0>=u||u>=1e4?(0>u?"-":"+")+M(6,0>u?-u:u):M(4,u))+"-"+M(2,d+1)+"-"+M(2,h)+"T"+M(2,w)+":"+M(2,y)+":"+M(2,S)+"."+M(3,O)+"Z"}else a=null;if(i&&(a=i.call(e,t,a)),null===a)return"null";if(c=v.call(a),c==C)return""+a;if(c==b)return a>-1/0&&1/0>a?""+a:"null";if(c==E)return x(""+a);if("object"==typeof a){for(F=s.length;F--;)if(s[F]===a)throw l();if(s.push(a),U=[],R=o,o+=r,c==D){for(_=0,F=a.length;F>_;_++)I=L(_,a,i,n,r,o,s),U.push(I===g?"null":I);P=U.length?r?"[\n"+o+U.join(",\n"+o)+"\n"+R+"]":"["+U.join(",")+"]":"[]"}else m(n||a,function(t){var e=L(t,a,i,n,r,o,s);e!==g&&U.push(x(t)+":"+(r?" ":"")+e)}),P=U.length?r?"{\n"+o+U.join(",\n"+o)+"\n"+R+"}":"{"+U.join(",")+"}":"{}";return s.pop(),P}};e.stringify=function(t,e,i){var n,r,s,a;if(o[typeof e]&&e)if((a=v.call(e))==O)r=e;else if(a==D){s={};for(var c,u=0,d=e.length;d>u;c=e[u++],a=v.call(c),(a==E||a==b)&&(s[c]=1));}if(i)if((a=v.call(i))==b){if((i-=i%1)>0)for(n="",i>10&&(i=10);n.length<i;n+=" ");}else a==E&&(n=i.length<=10?i:i.slice(0,10));return L("",(c={},c[""]=t,c),r,s,n,"",[])}}if(!i("json-parse")){var P,k,J=s.fromCharCode,q={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},j=function(){throw P=k=null,d()},B=function(){for(var t,e,i,n,r,o=k,s=o.length;s>P;)switch(r=o.charCodeAt(P)){case 9:case 10:case 13:case 32:P++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=U?o.charAt(P):o[P],P++,t;case 34:for(t="@",P++;s>P;)if(r=o.charCodeAt(P),32>r)j();else if(92==r)switch(r=o.charCodeAt(++P)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=q[r],P++;break;case 117:for(e=++P,i=P+4;i>P;P++)r=o.charCodeAt(P),r>=48&&57>=r||r>=97&&102>=r||r>=65&&70>=r||j();t+=J("0x"+o.slice(e,P));break;default:j()}else{if(34==r)break;for(r=o.charCodeAt(P),e=P;r>=32&&92!=r&&34!=r;)r=o.charCodeAt(++P);t+=o.slice(e,P)}if(34==o.charCodeAt(P))return P++,t;j();default:if(e=P,45==r&&(n=!0,r=o.charCodeAt(++P)),r>=48&&57>=r){for(48==r&&(r=o.charCodeAt(P+1),r>=48&&57>=r)&&j(),n=!1;s>P&&(r=o.charCodeAt(P),r>=48&&57>=r);P++);if(46==o.charCodeAt(P)){for(i=++P;s>i&&(r=o.charCodeAt(i),r>=48&&57>=r);i++);i==P&&j(),P=i}if(r=o.charCodeAt(P),101==r||69==r){for(r=o.charCodeAt(++P),(43==r||45==r)&&P++,i=P;s>i&&(r=o.charCodeAt(i),r>=48&&57>=r);i++);i==P&&j(),P=i}return+o.slice(e,P)}if(n&&j(),"true"==o.slice(P,P+4))return P+=4,!0;if("false"==o.slice(P,P+5))return P+=5,!1;if("null"==o.slice(P,P+4))return P+=4,null;j()}return"$"},Q=function(t){var e,i;if("$"==t&&j(),"string"==typeof t){if("@"==(U?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=B(),"]"!=t;i||(i=!0))i&&(","==t?(t=B(),"]"==t&&j()):j()),","==t&&j(),e.push(Q(t));return e}if("{"==t){for(e={};t=B(),"}"!=t;i||(i=!0))i&&(","==t?(t=B(),"}"==t&&j()):j()),(","==t||"string"!=typeof t||"@"!=(U?t.charAt(0):t[0])||":"!=B())&&j(),e[t.slice(1)]=Q(B());return e}j()}return t},H=function(t,e,i){var n=W(t,e,i);n===g?delete t[e]:t[e]=n},W=function(t,e,i){var n,r=t[e];if("object"==typeof r&&r)if(v.call(r)==D)for(n=r.length;n--;)H(r,n,i);else m(r,function(t){H(r,t,i)});return i.call(t,e,r)};e.parse=function(t,e){var i,n;return P=0,k=""+t,i=Q(B()),"$"!=B()&&j(),P=k=null,e&&v.call(e)==O?W((n={},n[""]=i,n),"",e):i}}}return e.runInContext=n,e}var r="function"==typeof define&&define.amd,o={"function":!0,object:!0},s=o[typeof i]&&i&&!i.nodeType&&i,a=o[typeof window]&&window||this,c=s&&o[typeof e]&&e&&!e.nodeType&&"object"==typeof t&&t;if(!c||c.global!==c&&c.window!==c&&c.self!==c||(a=c),s&&!r)n(a,s);else{var u=a.JSON,d=a.JSON3,l=!1,h=n(a,a.JSON3={noConflict:function(){return l||(l=!0,a.JSON=u,a.JSON3=d,u=d=null),h}});a.JSON={parse:h.parse,stringify:h.stringify}}r&&define(function(){return h})}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[2]);