function dv_rolloutManager(handlersDefsArray, baseHandler) {
    this.handle = function () {
        var errorsArr = [];

        var handler = chooseEvaluationHandler(handlersDefsArray);
        if (handler) {
            var errorObj = handleSpecificHandler(handler);
            if (errorObj === null)
                return errorsArr;
            else {
                var debugInfo = handler.onFailure();
                if (debugInfo) {
                    for (var key in debugInfo) {
                        if (debugInfo.hasOwnProperty(key)) {
                            if (debugInfo[key] !== undefined || debugInfo[key] !== null) {
                                errorObj[key] = encodeURIComponent(debugInfo[key]);
                            }
                        }
                    }
                }
                errorsArr.push(errorObj);
            }
        }

        var errorObjHandler = handleSpecificHandler(baseHandler);
        if (errorObjHandler) {
            errorObjHandler['dvp_isLostImp'] = 1;
            errorsArr.push(errorObjHandler);
        }
        return errorsArr;
    }

    function handleSpecificHandler(handler) {
        var url;
        var errorObj = null;

        try {
            url = handler.createRequest();
            if (url) {
                if (!handler.sendRequest(url))
                    errorObj = createAndGetError('sendRequest failed.',
                        url,
                        handler.getVersion(),
                        handler.getVersionParamName(),
                        handler.dv_script);
            } else
                errorObj = createAndGetError('createRequest failed.',
                    url,
                    handler.getVersion(),
                    handler.getVersionParamName(),
                    handler.dv_script,
                    handler.dvScripts,
                    handler.dvStep,
                    handler.dvOther
                    );
        }
        catch (e) {
            errorObj = createAndGetError(e.name + ': ' + e.message, url, handler.getVersion(), handler.getVersionParamName(), (handler ? handler.dv_script : null));
        }

        return errorObj;
    }

    function createAndGetError(error, url, ver, versionParamName, dv_script, dvScripts, dvStep, dvOther) {
        var errorObj = {};
        errorObj[versionParamName] = ver;
        errorObj['dvp_jsErrMsg'] = encodeURIComponent(error);
        if (dv_script && dv_script.parentElement && dv_script.parentElement.tagName && dv_script.parentElement.tagName == 'HEAD')
            errorObj['dvp_isOnHead'] = '1';
        if (url)
            errorObj['dvp_jsErrUrl'] = url;
        if (dvScripts) {
            var dvScriptsResult = '';
            for (var id in dvScripts) {
                if (dvScripts[id] && dvScripts[id].src) {
                    dvScriptsResult += encodeURIComponent(dvScripts[id].src) + ":" + dvScripts[id].isContain + ",";
                }
            }
            //errorObj['dvp_dvScripts'] = encodeURIComponent(dvScriptsResult);
           // errorObj['dvp_dvStep'] = dvStep;
           // errorObj['dvp_dvOther'] = dvOther;
        }
        return errorObj;
    }

    function chooseEvaluationHandler(handlersArray) {
        var config = window._dv_win.dv_config;
        var index = 0;
        var isEvaluationVersionChosen = false;
        if (config.handlerVersionSpecific) {
            for (var i = 0; i < handlersArray.length; i++) {
                if (handlersArray[i].handler.getVersion() == config.handlerVersionSpecific) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }
        else if (config.handlerVersionByTimeIntervalMinutes) {
            var date = config.handlerVersionByTimeInputDate || new Date();
            var hour = date.getUTCHours();
            var minutes = date.getUTCMinutes();
            index = Math.floor(((hour * 60) + minutes) / config.handlerVersionByTimeIntervalMinutes) % (handlersArray.length + 1);
            if (index != handlersArray.length) //This allows a scenario where no evaluation version is chosen
                isEvaluationVersionChosen = true;
        }
        else {
            var rand = config.handlerVersionRandom || (Math.random() * 100);
            for (var i = 0; i < handlersArray.length; i++) {
                if (rand >= handlersArray[i].minRate && rand < handlersArray[i].maxRate) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }

        if (isEvaluationVersionChosen == true && handlersArray[index].handler.isApplicable())
            return handlersArray[index].handler;
        else
            return null;
    }    
}

function dv_GetParam(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
        return null;
    else
        return results[1];
}

function dv_SendErrorImp(serverUrl, errorsArr) {

    for (var j = 0; j < errorsArr.length; j++) {
        var errorQueryString = '';
        var errorObj = errorsArr[j];
        for (key in errorObj) {
            if (errorObj.hasOwnProperty(key)) {
                if (key.indexOf('dvp_jsErrUrl') == -1) {
                    errorQueryString += '&' + key + '=' + errorObj[key];
                }
                else {
                    var params = ['ctx', 'cmp', 'plc', 'sid'];
                    for (var i = 0; i < params.length; i++) {
                        var pvalue = dv_GetParam(errorObj[key], params[i]);
                        if (pvalue) {
                            errorQueryString += '&dvp_js' + params[i] + '=' + pvalue;
                        }
                    }
                }
            }
        }

        var windowProtocol = 'http:';
        var sslFlag = '&ssl=0';
        if (window.location.protocol === 'https:') {
            windowProtocol = 'https:';
            sslFlag = '&ssl=1';
        }
        var errorImp = windowProtocol + '//' + serverUrl + sslFlag + errorQueryString;
        dv_sendRequest(errorImp);
    }
}

function dv_sendRequest(url) {
    document.write('<scr' + 'ipt language="javascript" src="' + url + '"></scr' + 'ipt>');
}

function dv_GetRnd() {
    return ((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 16);
}

function doesBrowserSupportHTML5Push() {
    "use strict";
    return typeof window.parent.postMessage === 'function' && window.JSON;
}
    

function dvBsrType() {
    'use strict';
    var that = this;
    var eventsForDispatch = {};


    this.pubSub = new function () {

        var subscribers = [];

        this.subscribe = function(eventName, uid, actionName, func) {
            if (!subscribers[eventName + uid])
                subscribers[eventName + uid] = [];
            subscribers[eventName + uid].push({ Func: func, ActionName: actionName });
        };

        this.publish = function (eventName, uid) {
            var actionsResults = [];
            if (eventName && uid && subscribers[eventName + uid] instanceof Array)
                for (var i = 0; i < subscribers[eventName + uid].length; i++) {
                    var funcObject = subscribers[eventName + uid][i];
                    if (funcObject && funcObject.Func && typeof funcObject.Func == "function" && funcObject.ActionName) {
                        var isSucceeded = runSafely(function () {
                            return funcObject.Func(uid);
                        });
                        actionsResults.push(encodeURIComponent(funcObject.ActionName) + '=' + (isSucceeded ? '1' : '0'));
                    }
                }
            return actionsResults.join('&');
        };
    };

    this.domUtilities = new function () {

        this.addImage = function (url, parentElement) {
            var image = parentElement.ownerDocument.createElement("img");
            image.width = 0;
            image.height = 0;
            image.style.display = 'none';
            image.src = appendCacheBuster(url);
            parentElement.insertBefore(image, parentElement.firstChild);
        };

        this.addScriptResource = function (url, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.src = appendCacheBuster(url);
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addScriptCode = function (srcCode, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.innerHTML = srcCode;
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addHtml = function(srcHtml, parentElement) {
            var divElem = parentElement.ownerDocument.createElement("div");
            divElem.style = "display: inline";
            divElem.innerHTML = srcHtml;
            parentElement.insertBefore(divElem, parentElement.firstChild);
        };
    };

    this.resolveMacros = function (str, tag) {
        var viewabilityData = tag.getViewabilityData();
        var viewabilityBuckets = viewabilityData && viewabilityData.buckets ? viewabilityData.buckets : {};
        var upperCaseObj = objectsToUpperCase(tag, viewabilityData, viewabilityBuckets);
        var newStr = str.replace('[DV_PROTOCOL]', upperCaseObj.DV_PROTOCOL);
        newStr = newStr.replace('[PROTOCOL]', upperCaseObj.PROTOCOL);
        newStr = newStr.replace(/\[(.*?)\]/g, function (match, p1) {
            var value = upperCaseObj[p1];
            if (value === undefined || value === null)
                value = '[' + p1 + ']';
            return encodeURIComponent(value);
        });
        return newStr;
    };

    this.settings = new function () {
    };

    this.tagsType = function () { };

    this.tagsPrototype = function () {
        this.add = function(tagKey, obj) {
            if (!that.tags[tagKey])
                that.tags[tagKey] = new that.tag();
            for (var key in obj)
                that.tags[tagKey][key] = obj[key];
        };
    };

    this.tagsType.prototype = new this.tagsPrototype();
    this.tagsType.prototype.constructor = this.tags;
    this.tags = new this.tagsType();

    this.tag = function () { }
    this.tagPrototype = function () {
        this.set = function (obj) {
            for (var key in obj)
                this[key] = obj[key];
        };
        
        this.getViewabilityData = function () {
        };
    };

    this.tag.prototype = new this.tagPrototype();
    this.tag.prototype.constructor = this.tag;


    this.getTagObjectByService = function (serviceName) {
    
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] === 'object'
                && this.tags[impressionId].services
                && this.tags[impressionId].services[serviceName]
                && !this.tags[impressionId].services[serviceName].isProcessed) {
                this.tags[impressionId].services[serviceName].isProcessed = true;
                return this.tags[impressionId];
            }
        }
        

        return null;
    };

    this.addService = function (impressionId, serviceName, paramsObject) {

        if (!impressionId || !serviceName)
            return;

        if (!this.tags[impressionId])
            return;
        else {
            if (!this.tags[impressionId].services)
                this.tags[impressionId].services = { };

            this.tags[impressionId].services[serviceName] = {
                params: paramsObject,
                isProcessed: false
            };
        }
    };

    this.Enums = {
        BrowserId: { Others: 0, IE: 1, Firefox: 2, Chrome: 3, Opera: 4, Safari: 5 },
        TrafficScenario: { OnPage: 1, SameDomain: 2, CrossDomain: 128 }
    };

    this.CommonData = {};

    var runSafely = function (action) {
        try {
            var ret = action();
            return ret !== undefined ? ret : true;
        } catch (e) { return false; }
    };

    var objectsToUpperCase = function () {
        var upperCaseObj = {};
        for (var i = 0; i < arguments.length; i++) {
            var obj = arguments[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    upperCaseObj[key.toUpperCase()] = obj[key];
                }
            }
        }
        return upperCaseObj;
    };

    var appendCacheBuster = function (url) {
        if (url !== undefined && url !== null && url.match("^http") == "http") {
            if (url.indexOf('?') !== -1) {
                if (url.slice(-1) == '&')
                    url += 'cbust=' + dv_GetRnd();
                else
                    url += '&cbust=' + dv_GetRnd();
            }
            else
                url += '?cbust=' + dv_GetRnd();
        }
        return url;
    };

    this.dispatchRegisteredEventsFromAllTags = function () {
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] !== 'function' && typeof this.tags[impressionId] !== 'undefined')
                dispatchEventCalls(impressionId, this);
        }
    };

    var dispatchEventCalls = function (impressionId, dvObj) {
        var tag = dvObj.tags[impressionId];
        var eventObj = eventsForDispatch[impressionId];
        if (typeof eventObj !== 'undefined' && eventObj != null) {
            var url = tag.protocol + '//' + tag.ServerPublicDns + "/bsevent.gif?impid=" + impressionId + '&' + createQueryStringParams(eventObj);
            dvObj.domUtilities.addImage(url, tag.tagElement.parentElement);
            eventsForDispatch[impressionId] = null;
        }
    };

    this.registerEventCall = function (impressionId, eventObject, timeoutMs) {
        addEventCallForDispatch(impressionId, eventObject);

        if (typeof timeoutMs === 'undefined' || timeoutMs == 0 || isNaN(timeoutMs))
            dispatchEventCallsNow(this, impressionId, eventObject);
        else {
            if (timeoutMs > 2000)
                timeoutMs = 2000;

            var dvObj = this;
            setTimeout(function () {
                dispatchEventCalls(impressionId, dvObj);
            }, timeoutMs);
        }
    };

    var dispatchEventCallsNow = function (dvObj, impressionId, eventObject) {
        addEventCallForDispatch(impressionId, eventObject);
        dispatchEventCalls(impressionId, dvObj);
    };

    var addEventCallForDispatch = function (impressionId, eventObject) {
        for (var key in eventObject) {
            if (typeof eventObject[key] !== 'function' && eventObject.hasOwnProperty(key)) {
                if (!eventsForDispatch[impressionId])
                    eventsForDispatch[impressionId] = {};
                eventsForDispatch[impressionId][key] = eventObject[key];
            }
        }
    };

    if (window.addEventListener) {
        window.addEventListener('unload', function () { that.dispatchRegisteredEventsFromAllTags(); }, false);
        window.addEventListener('beforeunload', function () { that.dispatchRegisteredEventsFromAllTags(); }, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onunload', function () { that.dispatchRegisteredEventsFromAllTags(); }, false);
        window.attachEvent('onbeforeunload', function () { that.dispatchRegisteredEventsFromAllTags(); }, false);
    }
    else {
        window.document.body.onunload = function () { that.dispatchRegisteredEventsFromAllTags(); };
        window.document.body.onbeforeunload = function () { that.dispatchRegisteredEventsFromAllTags(); };
    }

    var createQueryStringParams = function (values) {
        var params = '';
        for (var key in values) {
            if (typeof values[key] !== 'function') {
                var value = encodeURIComponent(values[key]);
                if (params === '')
                    params += key + '=' + value;
                else
                    params += '&' + key + '=' + value;
            }
        }

        return params;
    };

 
}

function dv_baseHandler(){function B(e,d,b,a,k,c,p){var i,m,n;n=window._dv_win.dv_config&&window._dv_win.dv_config.bst2tid?window._dv_win.dv_config.bst2tid:dv_GetRnd();var H,B=window.parent.postMessage&&window.JSON,h=!0,r=!1;if("0"==dv_GetParam(e.dvparams,"t2te")||window._dv_win.dv_config&&!0==window._dv_win.dv_config.supressT2T)r=!0;if(B&&!1==r)try{r="https://cdn3.doubleverify.com/bst2tv3.html";window._dv_win&&(window._dv_win.dv_config&&window._dv_win.dv_config.bst2turl)&&(r=window._dv_win.dv_config.bst2turl);
var D="bst2t_"+n,q;if(document.createElement&&(q=document.createElement("iframe")))q.name=q.id="iframe_"+dv_GetRnd(),q.width=0,q.height=0,q.id=D,q.style.display="none",q.src=r;H=q;if(window._dv_win.document.body)window._dv_win.document.body.insertBefore(H,window._dv_win.document.body.firstChild),h=!0;else{var K=0,L=function(){if(window._dv_win.document.body)try{window._dv_win.document.body.insertBefore(H,window._dv_win.document.body.firstChild)}catch(b){}else K++,150>K&&setTimeout(L,20)};setTimeout(L,
20);h=!1}}catch(X){}r=e.rand;q="__verify_callback_"+r;r="__tagObject_callback_"+r;window[q]=function(b){try{if(void 0==b.ResultID)document.write(1!=b?e.tagsrc:e.altsrc);else switch(b.ResultID){case 1:b.Passback?document.write(decodeURIComponent(b.Passback)):document.write(e.altsrc);break;case 2:case 3:document.write(e.tagsrc)}}catch(a){}};var M="http:",N="http:",O="0";"https"==window._dv_win.location.toString().match("^https")&&(M="https:","https"==p.src.match("^https")&&(N="https:",O="1"));var I=
window._dv_win.document.visibilityState;window[r]=function(b){try{var a={};a.protocol=M;a.ssl=O;a.dv_protocol=N;a.serverPublicDns=b.ServerPublicDns;a.ServerPublicDns=b.ServerPublicDns;a.tagElement=p;a.redirect=e;a.impressionId=b.ImpressionID;window._dv_win.$dvbsr.tags.add(b.ImpressionID,a);if("prerender"===I)if("prerender"!==window._dv_win.document.visibilityState&&"unloaded"!==visibilityStateLocal)window._dv_win.$dvbsr.registerEventCall(b.ImpressionID,{prndr:0});else{var c;"undefined"!==typeof window._dv_win.document.hidden?
c="visibilitychange":"undefined"!==typeof window._dv_win.document.mozHidden?c="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?c="msvisibilitychange":"undefined"!==typeof window._dv_win.document.webkitHidden&&(c="webkitvisibilitychange");var d=function(){var a=window._dv_win.document.visibilityState;"prerender"===I&&("prerender"!==a&&"unloaded"!==a)&&(I=a,window._dv_win.$dvbsr.registerEventCall(b.ImpressionID,{prndr:0}),window._dv_win.document.removeEventListener(c,d))};
window._dv_win.document.addEventListener(c,d,!1)}}catch(f){}};void 0==e.dvregion&&(e.dvregion=0);var D="http:",P="0";"https"==window.location.toString().match("^https")&&(D="https:",P="1");try{for(var f=b,w=0;10>w&&f!=window.top;)w++,f=f.parent;b.depth=w;var j=S(b);m="&aUrl="+encodeURIComponent(j.url);i="&aUrlD="+j.depth;var Q=b.depth+a;k&&b.depth--}catch(Y){i=m=Q=b.depth=""}void 0!=e.aUrl&&(m="&aUrl="+e.aUrl);var C;a=function(){try{return!!window.sessionStorage}catch(b){return!0}};k=function(){try{return!!window.localStorage}catch(b){return!0}};
j=function(){var b=document.createElement("canvas");if(b.getContext&&b.getContext("2d")){var a=b.getContext("2d");a.textBaseline="top";a.font="14px 'Arial'";a.textBaseline="alphabetic";a.fillStyle="#f60";a.fillRect(0,0,62,20);a.fillStyle="#069";a.fillText("!image!",2,15);a.fillStyle="rgba(102, 204, 0, 0.7)";a.fillText("!image!",4,17);return b.toDataURL()}return null};try{f=[];f.push(["lang",navigator.language||navigator.browserLanguage]);f.push(["tz",(new Date).getTimezoneOffset()]);f.push(["hss",
a()?"1":"0"]);f.push(["hls",k()?"1":"0"]);f.push(["odb",typeof window.openDatabase||""]);f.push(["cpu",navigator.cpuClass||""]);f.push(["pf",navigator.platform||""]);f.push(["dnt",navigator.doNotTrack||""]);f.push(["canv",j()]);var l=f.join("=!!!=");if(null==l||""==l)C="";else{for(var a=function(a){for(var b="",c,d=7;0<=d;d--)c=a>>>4*d&15,b+=c.toString(16);return b},k=[1518500249,1859775393,2400959708,3395469782],l=l+String.fromCharCode(128),x=Math.ceil((l.length/4+2)/16),y=Array(x),j=0;j<x;j++){y[j]=
Array(16);for(f=0;16>f;f++)y[j][f]=l.charCodeAt(64*j+4*f)<<24|l.charCodeAt(64*j+4*f+1)<<16|l.charCodeAt(64*j+4*f+2)<<8|l.charCodeAt(64*j+4*f+3)}y[x-1][14]=8*(l.length-1)/Math.pow(2,32);y[x-1][14]=Math.floor(y[x-1][14]);y[x-1][15]=8*(l.length-1)&4294967295;for(var l=1732584193,f=4023233417,w=2562383102,E=271733878,F=3285377520,s=Array(80),z,t,u,v,G,j=0;j<x;j++){for(var g=0;16>g;g++)s[g]=y[j][g];for(g=16;80>g;g++)s[g]=(s[g-3]^s[g-8]^s[g-14]^s[g-16])<<1|(s[g-3]^s[g-8]^s[g-14]^s[g-16])>>>31;z=l;t=f;u=
w;v=E;G=F;for(g=0;80>g;g++){var R=Math.floor(g/20),T=z<<5|z>>>27,A;c:{switch(R){case 0:A=t&u^~t&v;break c;case 1:A=t^u^v;break c;case 2:A=t&u^t&v^u&v;break c;case 3:A=t^u^v;break c}A=void 0}var U=T+A+G+k[R]+s[g]&4294967295;G=v;v=u;u=t<<30|t>>>2;t=z;z=U}l=l+z&4294967295;f=f+t&4294967295;w=w+u&4294967295;E=E+v&4294967295;F=F+G&4294967295}C=a(l)+a(f)+a(w)+a(E)+a(F)}}catch(Z){C=null}b=(window._dv_win&&window._dv_win.dv_config&&window._dv_win.dv_config.verifyJSCURL?dvConfig.verifyJSCURL+"?":D+"//rtb"+
e.dvregion+".doubleverify.com/verifyc.js?")+e.dvparams+"&num=5&srcurlD="+b.depth+"&callback="+q+"&jsTagObjCallback="+r+"&ssl="+P+"&refD="+Q+"&htmlmsging="+(B?"1":"0")+"&guid="+n+(null!=C?"&aadid="+C:"");d="dv_url="+encodeURIComponent(d);if(!1==h||c)b=b+("&dvp_isBodyExistOnLoad="+(h?"1":"0"))+("&dvp_isOnHead="+(c?"1":"0"));if((c=window[J("=@42E:@?")][J("2?46DE@C~C:8:?D")])&&0<c.length){h=[];h[0]=window.location.protocol+"//"+window.location.hostname;for(n=0;n<c.length;n++)h[n+1]=c[n];c=h.reverse().join(",")}else c=
null;c&&(d+="&ancChain="+encodeURIComponent(c));if(!1==/MSIE (\d+\.\d+);/.test(navigator.userAgent)||7<new Number(RegExp.$1)||2E3>=m.length+i.length+b.length)b+=i,d+=m;if(void 0!=window._dv_win.$dvbsr.CommonData.BrowserId&&void 0!=window._dv_win.$dvbsr.CommonData.BrowserVersion&&void 0!=window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent)c=window._dv_win.$dvbsr.CommonData.BrowserId,i=window._dv_win.$dvbsr.CommonData.BrowserVersion,m=window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent;else{c=
[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7|Edge/",verRegex:"(MSIE |rv:| Edge/)"},{id:2,brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",
verRegex:"Version/"}];m=0;i="";n=navigator.userAgent;for(h=0;h<c.length;h++)if(null!=n.match(RegExp(c[h].brRegex))){m=c[h].id;if(null==c[h].verRegex)break;n=n.match(RegExp(c[h].verRegex+"[0-9]*"));null!=n&&(i=n[0].match(RegExp(c[h].verRegex)),i=n[0].replace(i[0],""));break}c=h=V();i=h===m?i:"";window._dv_win.$dvbsr.CommonData.BrowserId=c;window._dv_win.$dvbsr.CommonData.BrowserVersion=i;window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent=m}b+="&brid="+c+"&brver="+i+"&bridua="+m;"prerender"===
window._dv_win.document.visibilityState&&(b+="&prndr=1");m=W();b+="&vavbkt="+m.vdcd;b+="&lvvn="+m.vdcv;return b+"&eparams="+encodeURIComponent(J(d))}function W(){try{return{vdcv:13,vdcd:eval(function(d,b,a,e,c,p){c=function(a){return(a<b?"":c(parseInt(a/b)))+(35<(a%=b)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;a--;)p[c(a)]=e[a]||c(a);e=[function(a){return p[a]}];c=function(){return"\\w+"};a=1}for(;a--;)e[a]&&(d=d.replace(RegExp("\\b"+c(a)+"\\b","g"),e[a]));return d}("(y(){1o{m K=[1k];1o{m D=1k;3v(D!=D.1W&&D.1r.3w.3u){K.1n(D.1r);D=D.1r}}1x(e){}y 1s(V){1o{15(m i=0;i<K.1v;i++){14(V(K[i]))9 K[i]==1k.1W?-1:1}9 0}1x(e){9 1j}}y 21(X){9 1s(y(G){9 G[X]!=1j})}y 1Y(G,1Z,V){15(m X 3t G){14(X.2d(1Z)>-1&&(!V||V(G[X])))9 3q}9 3r}y g(s){m h=\"\",t=\"3s.;j&3x}3y/0:3E'3F=B(3D-3C!,3z)5r\\\\{ >3A+3B\\\"3p<\";15(i=0;i<s.1v;i++)f=s.2b(i),e=t.2d(f),0<=e&&(f=t.2b((e+41)%3o)),h+=f;9 h}m c=['3d\"1a-3e\"3c\"3b','p','l','60&p','p','{','-5,!u<}\"38}\"','p','J','-39}\"<3a','p','=o','\\\\}24\"2f\"1h\\\\}24\"2f\"3f}2\"<,u\"<5}?\"4','e','J=',':<3g}T}<\"','p','h','\\\\}6-2}\"E(k\"O}8?\\\\}6-2}\"E(k\"2a<N\"[1i*1t\\\\\\\\1F-3m<1C\"1B\"3n]12}C\"W','e','3l','\"1d\\\\}3k\"I<-3h\"1K\"5\"3i}1A<}3j\"1d\\\\}1l}1q>1p-1b}2}\"1K\"5\"3G}1A<}3I','e','=J','1m}U\"<5}48\"n}F\\\\}Z[49}47:46]d}7\\\\}Z[t:1O\"43]d}7\\\\}Z[44})5-u<}t]d}7\\\\}Z[45]d}7\\\\}Z[4a}4b]d}4i','e','4j',':4h}<\"Q-4g/2M','p','4c','\\\\}H<U/17}7\\\\}H<U/!d}8','e','=l','\\\\}1z!4d\\\\}1z!4e)p?\"4','e','40','37:,','p','3Z','1m}U\"<5}1g:3O\\\\}6-2}\"3P\".42-2}\"3N-3M<N\"3J<3K<3L}C\"3H<3Q<3R[<]E\"27\"1a}\"2}\"3X[<]E\"27\"1a}\"2}\"E<}13&3Y\"1\\\\}1N\\\\3W\\\\}1N\\\\3V}1q>1p-1b}2}\"z<3S-2}\"3T\"2.42-2}\"3U=4k\"n}2q\"n}P=2o','e','x','2j)','p','+','\\\\}25)u\"2g\\\\}25)u\"2p?\"4','e','2m','\\\\}1M}s<2l\\\\}1M}s<2k\" 2n-2h?\"4','e','2i','\\\\}6-2}\"E(k\"O}8?\\\\}6-2}\"E(k\"36<:[\\\\2U}}2M][\\\\2V,5}2]2W}C\"W','e','2T','1u\\\\}2S}2P\\\\}2Q$2R','e','2X',':2Y<Z','p','34','\\\\}b-35\\\\}b-33}32\\\\}b-2Z<30?\"4','e','31','\\\\}b\"1L\\\\}b\"1G-2O?\"4','e','2r','1u\\\\}2N:,2y}U\"<5}2z\"n}2A<2x<1H}2w','e','2t','\\\\}H<U/2u&2e\"E/2c\\\\}H<U/2v}C\"26\\\\}H<U/f[&2e\"E/2c\\\\}H<U/2B[S]]2C\"2J}8?\"4','e','2K','2L}2I}2H>2s','p','2E','\\\\}18:<1e}s<2F}7\\\\}18:<1e}s<2G<}f\"u}28\\\\}29\\\\}18:<1e}s<C[S]E:1O\"17}8','e','l{','4K\\'<}5B\\\\T}5A','p','==','\\\\}v<20\\\\}v<1V\\\\<Z\"1U\\\\}v<1Q<22\"?\"4','e','5z','\\\\}b\"2f\"5x\\\\}5y<5C?\"4','e','o{','\\\\}19}\"11}5D\"-5I\"2f\"q\\\\}w\"<5}5H?\"4','e','o+',' &Q)&5G','p','5E','\\\\}b.:2}\"c\"<5F}7\\\\}5w}7\\\\}5v<}f\"u}28\\\\}29\\\\}1l:}\"d}8','e','5l','5m\"5-\\'5k:2M','p','J{','\\\\}6-2}\"E(k\"O}8?\\\\}6-2}\"E(k\"2a<N\"[1i*1t\\\\\\\\1F-1C\"1B/5j<5h]12}C\"W','e','4l',')5i!5n}s<C','p','5o','\\\\}1y.L>g;Q\\'T)Y.5u\\\\}1y.L>g;5t&&5s>Q\\'T)Y.I?\"4','e','l=','Q:<Z<:5','p','5p','\\\\}1H\\\\}b\"5q\\\\}w\"<5}1S\"23}/1R\\\\}6-2}\"1P<}13&5J\\\\}w\"<5}16\"}u-61=?1m}U\"<5}1g\"1I\"n}5Y\\\\}19}\"1f\"<5}5Z\"1T\"n}F\"5W','e','5P','\\\\}1w-U\\\\1h\\\\}1w-5O\\\\}1w-\\\\<}?\"4','e','5N','5L-N:5Q','p','5R','\\\\}1c\"5V\\\\}1c\"5U\"<5}5S\\\\}1c\"5T||\\\\}5X?\"4','e','h+','\\\\}w\"<5}16\"}u-5f\\\\}1l}1q>1p-1b}2}\"q\\\\}w\"<5}16\"}u-2D','e','=S','4F}4E','p','4D','\\\\}v<20\\\\}v<1V\\\\<Z\"1U\\\\}v<1Q<22\"1h\"1d\\\\}v<4B}U\"<5}t?\"4','e','J+','c>A','p','=','\\\\}6-2}\"E(k\"O}8?\\\\}6-2}\"E(k\"1D<:[<Z*1t:Z,1E]F:<4C[<Z*4G]12}C\"W','e','h=','4H-2}\"1f\"<5}d}8','e','4M','\\\\}6-2}\"E(k\"O}8?\\\\}6-2}\"E(k\"1D<:[<Z*4L}1E]R<-C[1i*5g]12}C\"W','e','4I','1u\\\\}1J\"\\\\4J\\\\}1J\"\\\\4A','e','4z','\\\\}4q}Z<}4r}7\\\\}4p<f\"d}7\\\\}4o/<}C!!4m<\"42.42-2}\"17}7\\\\}4n\"<5}d}8?\"4','e','4s','T>;4t\"<4f','p','h{','\\\\}4y<u-4x\\\\4w}7\\\\}18<}4u}8?\"4','e','4v','\\\\}4N\\\\}4O}<(57?\"4','e','56','\\\\}b\"1L\\\\}b\"1G-55}U\"<5}1g\"1I\"n}F\\\\}19}\"1f\"<5}16\"E<}13&53}54=58\"1T\"n}F\"59?\"4','e','5e','\\\\}5d<5c a}5a}7\\\\}b}5b\"52 51- 17}8','e','4T','4S\\\\}w\"<5}4R}4P\"5M&M<C<}4Q}C\"26\\\\}w\"<5}1S\"23}/1R\\\\}6-2}\"4U\\\\}6-2}\"1P<}13&4V[S]50=?\"4','e','l+'];m 10=[];15(m j=0;j<c.1v;j+=3){m r=c[j+1]=='p'?21(g(c[j])):1s(y(G){9 4Z(1Y.4Y()+g(c[j]))});14(r>0||r<0)10.1n(r*1X(g(c[j+2])));4W 14(r==1j)10.1n(-4X*1X(g(c[j+2])))}9 10}1x(e){9[-5K]}})();",
62,374,"    Ma2vsu4f2  ZEZ5Ua a44OO a44 return  ZE  P1       a2MQ0242U  var aM        ZE3 ZE45Uu  function     tmpWnd   wnd ZEBM   wndz    5ML44P1  _     func 3RSvsu4f2 prop   results  WDE42 Z27 if for E35f fP1 ZE_ ZENuM2 g5 N5 ZEuZ QN25sF ZU5 E45Uu qD8 OO fMU null window ZE2 qsa push try Tg5 U5Z2c parent ch  U5q length ZEuf catch ZEcIT_0 ZE_Y Z2s MuU kN7 5ML44qWZ _t BuZfEU5 UT ZP1 MQ8M2 Zzt__ ENM5 UIuCTZOO ZELZg5 Zz5 uf EM2s2MM2ME M5E32 tOO E3M2sP1tuB5a U3q2D8M2 3OO M5E top parseInt co str M5OO ex C3 vB4u ZEf35M ZEufB 3RSOO  U25sF ZELMMuQOO 5ML44qWfUM charAt 2Qfq indexOf BV2U  u_Z2U5Z2OO 2cM4 JJ Ld0 CEC2 COO oo Mu HnDqD ujuM PSHM2 oJ  lJ fOO fDE42 a44nD f32M_faB tzsa q5D8M2 F5ENaB4 fD Ef2  hx CP1 CF fY45 5IMu aNP1 ox M2  Zzt_M NTZ f_tDOOU5q Zzt_ _tD Zzt__uZ_M eS UmBu Um tDE42 Jl u_faB 2MUaMQE NLZZM2ff Je sOO 2MUaMQEU5 hJ 2MUaMQOO 5ML44qtZ _M g5a fgM2Z2 u4f Q42 2Z0 C2 Na r5 ZBu 25a QN211ta 2ZtOO ZEf2 eo kUM EVft 82 1bqyJIma true false Ue in href while location PzA YDoMw8FRp3gd94 LnG NhCZ lkSvfxWX uic2EHVO Q6T s7 Kt QN2P1ta  2Zt tDHs5Mq 1SH i2E42 2qtfUM fbQIuCpu uMF21 EC2 99D sq2 1Z5Ua EUM2u tDRm E2 E2fUuN2z21 OO2 sqt he lS   r5Z2t tUZ tUBt 24t ZA2 qD8M2 tf5a tB LMMt ho AOO AEBuf2g  uM u_a a44nDqD ee DM2 eJ gI ZEu445Uu ZENuM ZEf2A ZE4u CcM4P1 lo _c N4uU2_faUU2ffP1 Jo f2MP1 bM5 ZENM lh B_UB_tD M511tsa Z25 xS 7K B24 1tfMmN4uQ2Mt Z5Ua oe B__tDOOU5q UufUuZ2 1tB2uU5 eh ZE_NUCOO ZE_NUCEYp_c U2f fzuOOuE42 Eu u1 lx EM2s2MM2MOO squ else 100 toString eval D11m M5 5M2f sqtfQ uNfQftD11m NTZOOqsa ol a2TZ HnUu Ma2HnnDqD UP1 _f 4Zf ZEUuU Jx 2P1 1tNk4CEN3Nt fN4uQLZfEVft 2u4 kZ ALZ02M ll gaf 4Qg5 oh hh 5NOO  AbL _I IOO ZErF ZErP1 fNNOO ZE0N2U Jh s5 Z5 u4buf2Jl a44OOkuZwkwZ8ezhn7wZ8ezhnwE3 hl 4P1 rLTp E3M2sD 4kE sq 999 ___U  JS M2sOO oS _ZBf le OOq CfE35aMfUuN CfEf2U CfOO Ma2nnDqDvsu4f2 ZE35aMfUuND FN1 E3M2szsu4f2nUu  2DRm".split(" "),
0,{}))}}catch(e){return{vdcv:13,vdcd:"0"}}}function S(e){try{if(1>=e.depth)return{url:"",depth:""};var d,b=[];b.push({win:window.top,depth:0});for(var a,k=1,c=0;0<k&&100>c;){try{if(c++,a=b.shift(),k--,0<a.win.location.toString().length&&a.win!=e)return 0==a.win.document.referrer.length||0==a.depth?{url:a.win.location,depth:a.depth}:{url:a.win.document.referrer,depth:a.depth-1}}catch(p){}d=a.win.frames.length;for(var i=0;i<d;i++)b.push({win:a.win.frames[i],depth:a.depth+1}),k++}return{url:"",depth:""}}catch(m){return{url:"",
depth:""}}}function J(e){new String;var d=new String,b,a,k;for(b=0;b<e.length;b++)k=e.charAt(b),a="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(k),0<=a&&(k="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((a+47)%94)),d+=k;return d}function V(){try{if("function"===typeof window.callPhantom)return 99;try{if("function"===typeof window.top.callPhantom)return 99}catch(e){}if(void 0!=window.opera&&
void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(!0==document.webkitHidden||!1==document.webkitHidden))return 3;if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&
void 0!=window.InstallTrigger.install)return 2;if(void 0!=document.uniqueID&&"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||void 0!=document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject)||window.document&&window.document.updateSettings&&"function"==typeof window.document.updateSettings)return 1;var d=!1;try{var b=document.createElement("p");b.innerText=".";b.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px";
d=void 0!=b.style.textShadow}catch(a){}return(0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")||window.webkitAudioPannerNode&&window.webkitConvertPointFromNodeToPage)&&d&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(k){return 0}}this.createRequest=function(){var e=!1,d=window,b=0,a=!1;try{for(dv_i=0;10>=dv_i;dv_i++)if(null!=d.parent&&d.parent!=d)if(0<d.parent.location.toString().length)d=d.parent,b++,e=!0;else{e=!1;break}else{0==dv_i&&(e=!0);break}}catch(k){e=
!1}0==d.document.referrer.length?e=d.location:e?e=d.location:(e=d.document.referrer,a=!0);var c=document.getElementsByTagName("script");for(dv_i in c)if(c[dv_i].src){var p=c[dv_i].src;if(p=p&&p.match(/bsredirect5(_plain)?\.js\?callback=/)?p.replace(/^.+?callback=(.+?)(&|$)/,"$1"):null)if((this.redirect=eval(p+"()"))&&!this.redirect.done)return this.redirect.done=!0,d=B(this.redirect,e,d,b,a,c[dv_i]&&c[dv_i].parentElement&&c[dv_i].parentElement.tagName&&"HEAD"===c[dv_i].parentElement.tagName,c[dv_i]),
d+="&"+this.getVersionParamName()+"="+this.getVersion()}};this.isApplicable=function(){return!0};this.onFailure=function(){};this.sendRequest=function(e){dv_sendRequest(e);return!0};if(window.debugScript&&(!window.minDebugVersion||10>=window.minDebugVersion))window.DvVerify=B,window.createRequest=this.createRequest;this.getVersionParamName=function(){return"ver"};this.getVersion=function(){return"32"}};


function dv_bs5_main(dv_baseHandlerIns, dv_handlersDefs) {

    this.baseHandlerIns = dv_baseHandlerIns;
    this.handlersDefs = dv_handlersDefs;

    this.exec = function () {
        try {
            window._dv_win = (window._dv_win || window);
            window._dv_win.$dvbsr = (window._dv_win.$dvbsr || new dvBsrType());

            window._dv_win.dv_config = window._dv_win.dv_config || {};
            window._dv_win.dv_config.bsErrAddress = window._dv_win.dv_config.bsAddress || 'rtb0.doubleverify.com';
            
            var errorsArr = (new dv_rolloutManager(this.handlersDefs, this.baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0)
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verifyc.js?ctx=818052&cmp=1619415&num=5', errorsArr);
        }
        catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verifyc.js?ctx=818052&cmp=1619415&num=5&dvp_isLostImp=1', { dvp_jsErrMsg: encodeURIComponent(e) });
            } catch (e) { }
        }
    }
}

try {
    window._dv_win = window._dv_win || window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];

    if(!window.debugScript) {
        (new dv_bs5_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
    }
} catch (e) { }