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
    };

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
            // errorObj['dvp_dvScripts'] = encodeURIComponent(dvScriptsResult);
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

        this.subscribe = function (eventName, uid, actionName, func) {
            if (!subscribers[eventName + uid])
                subscribers[eventName + uid] = [];
            subscribers[eventName + uid].push({Func: func, ActionName: actionName});
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

        this.addHtml = function (srcHtml, parentElement) {
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

    this.tagsType = function () {
    };

    this.tagsPrototype = function () {
        this.add = function (tagKey, obj) {
            if (!that.tags[tagKey])
                that.tags[tagKey] = new that.tag();
            for (var key in obj)
                that.tags[tagKey][key] = obj[key];
        };
    };

    this.tagsType.prototype = new this.tagsPrototype();
    this.tagsType.prototype.constructor = this.tags;
    this.tags = new this.tagsType();

    this.tag = function () {
    };

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
                this.tags[impressionId].services = {};

            this.tags[impressionId].services[serviceName] = {
                params: paramsObject,
                isProcessed: false
            };
        }
    };

    this.Enums = {
        BrowserId: {Others: 0, IE: 1, Firefox: 2, Chrome: 3, Opera: 4, Safari: 5},
        TrafficScenario: {OnPage: 1, SameDomain: 2, CrossDomain: 128}
    };

    this.CommonData = {};

    var runSafely = function (action) {
        try {
            var ret = action();
            return ret !== undefined ? ret : true;
        } catch (e) {
            return false;
        }
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
        window.addEventListener('unload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
        window.addEventListener('beforeunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
        window.attachEvent('onbeforeunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
    }
    else {
        window.document.body.onunload = function () {
            that.dispatchRegisteredEventsFromAllTags();
        };
        window.document.body.onbeforeunload = function () {
            that.dispatchRegisteredEventsFromAllTags();
        };
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

function dv_baseHandler(){function K(){var e;e=!window._dv_win.dv_config||!window._dv_win.dv_config.isUT?window._dv_win.bsredirect5ScriptsInternal.pop():window._dv_win.bsredirect5ScriptsInternal[window._dv_win.bsredirect5ScriptsInternal.length-1];window._dv_win.bsredirect5Processed.push(e);return e.script}function B(e,d,b,a,k,c,t){var i,m,n;n=window._dv_win.dv_config&&window._dv_win.dv_config.bst2tid?window._dv_win.dv_config.bst2tid:dv_GetRnd();var H,B=window.parent.postMessage&&window.JSON,h=!0,
q=!1;if("0"==dv_GetParam(e.dvparams,"t2te")||window._dv_win.dv_config&&!0==window._dv_win.dv_config.supressT2T)q=!0;if(B&&!1==q)try{q="https://cdn3.doubleverify.com/bst2tv3.html";window._dv_win&&(window._dv_win.dv_config&&window._dv_win.dv_config.bst2turl)&&(q=window._dv_win.dv_config.bst2turl);var D="bst2t_"+n,p;if(document.createElement&&(p=document.createElement("iframe")))p.name=p.id="iframe_"+dv_GetRnd(),p.width=0,p.height=0,p.id=D,p.style.display="none",p.src=q;H=p;if(window._dv_win.document.body)window._dv_win.document.body.insertBefore(H,
window._dv_win.document.body.firstChild),h=!0;else{var L=0,M=function(){if(window._dv_win.document.body)try{window._dv_win.document.body.insertBefore(H,window._dv_win.document.body.firstChild)}catch(b){}else L++,150>L&&setTimeout(M,20)};setTimeout(M,20);h=!1}}catch(K){}q=e.rand;p="__verify_callback_"+q;q="__tagObject_callback_"+q;window[p]=function(b){try{if(void 0==b.ResultID)document.write(1!=b?e.tagsrc:e.altsrc);else switch(b.ResultID){case 1:b.Passback?document.write(decodeURIComponent(b.Passback)):
document.write(e.altsrc);break;case 2:case 3:document.write(e.tagsrc)}}catch(a){}};var N="http:",O="http:",P="0";"https"==window._dv_win.location.toString().match("^https")&&(N="https:","https"==t.src.match("^https")&&(O="https:",P="1"));var I=window._dv_win.document.visibilityState;window[q]=function(b){try{var a={};a.protocol=N;a.ssl=P;a.dv_protocol=O;a.serverPublicDns=b.ServerPublicDns;a.ServerPublicDns=b.ServerPublicDns;a.tagElement=t;a.redirect=e;a.impressionId=b.ImpressionID;window._dv_win.$dvbsr.tags.add(b.ImpressionID,
a);if("prerender"===I)if("prerender"!==window._dv_win.document.visibilityState&&"unloaded"!==visibilityStateLocal)window._dv_win.$dvbsr.registerEventCall(b.ImpressionID,{prndr:0});else{var c;"undefined"!==typeof window._dv_win.document.hidden?c="visibilitychange":"undefined"!==typeof window._dv_win.document.mozHidden?c="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?c="msvisibilitychange":"undefined"!==typeof window._dv_win.document.webkitHidden&&(c="webkitvisibilitychange");
var d=function(){var a=window._dv_win.document.visibilityState;"prerender"===I&&("prerender"!==a&&"unloaded"!==a)&&(I=a,window._dv_win.$dvbsr.registerEventCall(b.ImpressionID,{prndr:0}),window._dv_win.document.removeEventListener(c,d))};window._dv_win.document.addEventListener(c,d,!1)}}catch(f){}};void 0==e.dvregion&&(e.dvregion=0);var D="http:",Q="0";"https"==window.location.toString().match("^https")&&(D="https:",Q="1");try{for(var f=b,w=0;10>w&&f!=window.top;)w++,f=f.parent;b.depth=w;var j=T(b);
m="&aUrl="+encodeURIComponent(j.url);i="&aUrlD="+j.depth;var R=b.depth+a;k&&b.depth--}catch(Y){i=m=R=b.depth=""}void 0!=e.aUrl&&(m="&aUrl="+e.aUrl);var C;a=function(){try{return!!window.sessionStorage}catch(b){return!0}};k=function(){try{return!!window.localStorage}catch(b){return!0}};j=function(){var b=document.createElement("canvas");if(b.getContext&&b.getContext("2d")){var a=b.getContext("2d");a.textBaseline="top";a.font="14px 'Arial'";a.textBaseline="alphabetic";a.fillStyle="#f60";a.fillRect(0,
0,62,20);a.fillStyle="#069";a.fillText("!image!",2,15);a.fillStyle="rgba(102, 204, 0, 0.7)";a.fillText("!image!",4,17);return b.toDataURL()}return null};try{f=[];f.push(["lang",navigator.language||navigator.browserLanguage]);f.push(["tz",(new Date).getTimezoneOffset()]);f.push(["hss",a()?"1":"0"]);f.push(["hls",k()?"1":"0"]);f.push(["odb",typeof window.openDatabase||""]);f.push(["cpu",navigator.cpuClass||""]);f.push(["pf",navigator.platform||""]);f.push(["dnt",navigator.doNotTrack||""]);f.push(["canv",
j()]);var l=f.join("=!!!=");if(null==l||""==l)C="";else{for(var a=function(a){for(var b="",c,d=7;0<=d;d--)c=a>>>4*d&15,b+=c.toString(16);return b},k=[1518500249,1859775393,2400959708,3395469782],l=l+String.fromCharCode(128),x=Math.ceil((l.length/4+2)/16),y=Array(x),j=0;j<x;j++){y[j]=Array(16);for(f=0;16>f;f++)y[j][f]=l.charCodeAt(64*j+4*f)<<24|l.charCodeAt(64*j+4*f+1)<<16|l.charCodeAt(64*j+4*f+2)<<8|l.charCodeAt(64*j+4*f+3)}y[x-1][14]=8*(l.length-1)/Math.pow(2,32);y[x-1][14]=Math.floor(y[x-1][14]);
y[x-1][15]=8*(l.length-1)&4294967295;for(var l=1732584193,f=4023233417,w=2562383102,E=271733878,F=3285377520,r=Array(80),z,s,u,v,G,j=0;j<x;j++){for(var g=0;16>g;g++)r[g]=y[j][g];for(g=16;80>g;g++)r[g]=(r[g-3]^r[g-8]^r[g-14]^r[g-16])<<1|(r[g-3]^r[g-8]^r[g-14]^r[g-16])>>>31;z=l;s=f;u=w;v=E;G=F;for(g=0;80>g;g++){var S=Math.floor(g/20),U=z<<5|z>>>27,A;c:{switch(S){case 0:A=s&u^~s&v;break c;case 1:A=s^u^v;break c;case 2:A=s&u^s&v^u&v;break c;case 3:A=s^u^v;break c}A=void 0}var V=U+A+G+k[S]+r[g]&4294967295;
G=v;v=u;u=s<<30|s>>>2;s=z;z=V}l=l+z&4294967295;f=f+s&4294967295;w=w+u&4294967295;E=E+v&4294967295;F=F+G&4294967295}C=a(l)+a(f)+a(w)+a(E)+a(F)}}catch(Z){C=null}b=(window._dv_win&&window._dv_win.dv_config&&window._dv_win.dv_config.verifyJSCURL?dvConfig.verifyJSCURL+"?":D+"//rtb"+e.dvregion+".doubleverify.com/verifyc.js?")+e.dvparams+"&num=5&srcurlD="+b.depth+"&callback="+p+"&jsTagObjCallback="+q+"&ssl="+Q+"&refD="+R+"&htmlmsging="+(B?"1":"0")+"&guid="+n+(null!=C?"&aadid="+C:"");d="dv_url="+encodeURIComponent(d);
if(!1==h||c)b=b+("&dvp_isBodyExistOnLoad="+(h?"1":"0"))+("&dvp_isOnHead="+(c?"1":"0"));if((c=window[J("=@42E:@?")][J("2?46DE@C~C:8:?D")])&&0<c.length){h=[];h[0]=window.location.protocol+"//"+window.location.hostname;for(n=0;n<c.length;n++)h[n+1]=c[n];c=h.reverse().join(",")}else c=null;c&&(d+="&ancChain="+encodeURIComponent(c));if(!1==/MSIE (\d+\.\d+);/.test(navigator.userAgent)||7<new Number(RegExp.$1)||2E3>=m.length+i.length+b.length)b+=i,d+=m;if(void 0!=window._dv_win.$dvbsr.CommonData.BrowserId&&
void 0!=window._dv_win.$dvbsr.CommonData.BrowserVersion&&void 0!=window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent)c=window._dv_win.$dvbsr.CommonData.BrowserId,i=window._dv_win.$dvbsr.CommonData.BrowserVersion,m=window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent;else{c=[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7|Edge/",verRegex:"(MSIE |rv:| Edge/)"},{id:2,brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",
verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}];m=0;i="";n=navigator.userAgent;for(h=0;h<c.length;h++)if(null!=n.match(RegExp(c[h].brRegex))){m=c[h].id;if(null==c[h].verRegex)break;n=n.match(RegExp(c[h].verRegex+"[0-9]*"));null!=n&&(i=n[0].match(RegExp(c[h].verRegex)),i=n[0].replace(i[0],
""));break}c=h=W();i=h===m?i:"";window._dv_win.$dvbsr.CommonData.BrowserId=c;window._dv_win.$dvbsr.CommonData.BrowserVersion=i;window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent=m}b+="&brid="+c+"&brver="+i+"&bridua="+m;"prerender"===window._dv_win.document.visibilityState&&(b+="&prndr=1");m=X();b+="&vavbkt="+m.vdcd;b+="&lvvn="+m.vdcv;return b+"&eparams="+encodeURIComponent(J(d))}function X(){try{return{vdcv:14,vdcd:eval(function(d,b,a,e,c,t){c=function(a){return(a<b?"":c(parseInt(a/b)))+(35<
(a%=b)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;a--;)t[c(a)]=e[a]||c(a);e=[function(a){return t[a]}];c=function(){return"\\w+"};a=1}for(;a--;)e[a]&&(d=d.replace(RegExp("\\b"+c(a)+"\\b","g"),e[a]));return d}("(v(){1r{m W=[1p];1r{m w=1p;57(w!=w.23&&w.1m.56.58){W.1l(w.1m);w=w.1m}}1y(e){}v 1q(Q){1r{13(m i=0;i<W.1u;i++){17(Q(W[i]))b W[i]==1p.23?-1:1}b 0}1y(e){b 1o}}v 24(X){b 1q(v(H){b H[X]!=1o})}v 26(H,28,Q){13(m X 54 H){17(X.1J(28)>-1&&(!Q||Q(H[X])))b 50}b 53}v g(s){m h=\"\",t=\"52.;j&5m}5h/0:4W'4V=B(4p-4s!,4v)5r\\\\{ >4P+4U\\\"4J<\";13(i=0;i<s.1u;i++)f=s.1X(i),e=t.1J(f),0<=e&&(f=t.1X((e+41)%6a)),h+=f;b h}m c=['6c\"1h-6b\"6n\"5L','p','l','60&p','p','{','\\\\}5D-5w<\"5R\\\\}5T<Z?\"4','e','3d','-5,!u<}\"3V}\"','p','J','-4a}\"<3p','p','=o','\\\\}1G\"2f\"1a\\\\}1G\"2f\"3x}2\"<,u\"<5}?\"4','e','J=',':<5G}T}<\"','p','h','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1C<N\"[1e*1t\\\\\\\\1z-2C<1A\"1U\"2n]15}C\"O','e','3f','\"19\\\\}2Z\"I<-30\"2i\"5\"2U}29<}2P\"19\\\\}1w}1k>1d-1b}2}\"2i\"5\"2I}29<}2H','e','=J','1n}U\"<5}3e\"n}F\\\\}Z[4n}3Z:3Y]k}6\\\\}Z[t:1I\"3g]k}6\\\\}Z[40})5-u<}t]k}6\\\\}Z[43]k}6\\\\}Z[45}3W]k}3S','e','4i',':4h}<\"G-1B/2M','p','4j','\\\\}K<U/10}6\\\\}K<U/!k}8','e','=l','\\\\}22!4l\\\\}22!4d)p?\"4','e','4c','3N:,','p','3s','\\\\}3t\\\\}3u\"2d-1V)3i\\\\}3l\\\\}3G\"2d-1V)3C?\"4','e','3D','\\\\}3B\"1B\"3A}6\\\\}9\\\\3y<M?\"4','e','3z','1n}U\"<5}1j:3E\\\\}7-2}\"3F\".42-2}\"3L-3M<N\"3K<3J<3I}C\"3H<3w<3m[<]E\"27\"1h}\"2}\"3n[<]E\"27\"1h}\"2}\"E<}12&3k\"1\\\\}1D\\\\3h\\\\}1D\\\\3j}1k>1d-1b}2}\"z<3v-2}\"3q\"2.42-2}\"3r=3O\"n}4b\"n}P=48','e','x','49)','p','+','\\\\}1T:4e<5}4g\\\\}1T\"4m?\"4','e','4k','L!!47.46.G 3U','p','x=','\\\\}1S)u\"3T\\\\}1S)u\"3P?\"4','e','3Q','\\\\}1R}s<3R\\\\}1R}s<3X\" 44-2A?\"4','e','2B','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"2G<:[\\\\2L}}2M][\\\\2K,5}2]2J}C\"O','e','2z','1g\\\\}2N}2x\\\\}2o$2p','e','2m',':2l<Z','p','2q','\\\\}9-2y\\\\}9-2r}2v\\\\}9-2t<2u?\"4','e','2O','\\\\}9\"2j\\\\}9\"2k-36?\"4','e','33','1g\\\\}34:,38}U\"<5}39\"n}3c<3a<1L}3b','e','32','\\\\}K<U/31&1Y\"E/1W\\\\}K<U/2T}C\"2b\\\\}K<U/f[&1Y\"E/1W\\\\}K<U/2Y[S]]2W\"2X}8?\"4','e','2V','2Q}2R}2S>2s','p','35','\\\\}18:<1v}s<37}6\\\\}18:<1v}s<2w<}f\"u}1E\\\\}1H\\\\}18:<1v}s<C[S]E:1I\"10}8','e','l{','2E\\'<}1f\\\\T}2F','p','==','\\\\}D<1P\\\\}D<1Q\\\\<Z\"1O\\\\}D<1N<1K\"?\"4','e','3o','\\\\}9\"2f\"5u\\\\}5U<5V?\"4','e','o{','\\\\}1i}\"11}5S\"-5P\"2f\"q\\\\}y\"<5}5Q?\"4','e','o+',' &G)&5W','p','5X','\\\\}9.:2}\"c\"<63}6\\\\}64}6\\\\}62<}f\"u}1E\\\\}1H\\\\}1w:}\"k}8','e','61','5Y\"5-\\'5Z:2M','p','J{','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1C<N\"[1e*1t\\\\\\\\1z-1A\"1U/5N<5B]15}C\"O','e','5C',')5A!5z}s<C','p','5x','\\\\}1M.L>g;G\\'T)Y.5y\\\\}1M.L>g;5E&&5K>G\\'T)Y.I?\"4','e','l=','G:<Z<:5','p','5J','\\\\}1L\\\\}9\"5I\\\\}y\"<5}2a\"2c}/2g\\\\}7-2}\"2e<}12&5F\\\\}y\"<5}16\"}u-4o=?1n}U\"<5}1j\"25\"n}5H\\\\}1i}\"1c\"<5}66\"21\"n}F\"6l','e','6r','\\\\}1s-U\\\\1a\\\\}1s-6s\\\\}1s-\\\\<}?\"4','e','6q','6p-N:6o','p','6u','\\\\}1x\"6z\\\\}1x\"6y\"<5}6v\\\\}1x\"6w||\\\\}6x?\"4','e','h+','\\\\}y\"<5}16\"}u-6t\\\\}1w}1k>1d-1b}2}\"q\\\\}y\"<5}16\"}u-2D','e','=S','\\\\}D<1P\\\\}D<1Q\\\\<Z\"1O\\\\}D<1N<1K\"1a\"19\\\\}D<6m}U\"<5}t?\"4','e','J+','c>A','p','=','\\\\}69\"67:68^[6d,][6e+]6j\\'<}1f\\\\6k\"2f\"q\\\\<}1f\\\\E}u-2D?\"4','e','6i','6h}6f','p','6g','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1Z<:[<Z*1t:Z,1F]F:<65[<Z*5v]15}C\"O','e','h=','4L-2}\"1c\"<5}k}8','e','4M','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1Z<:[<Z*4K}1F]R<-C[1e*4G]15}C\"O','e','4H','1g\\\\}20\"\\\\4I\\\\}20\"\\\\4N','e','4O','\\\\}4T}Z<}4S}6\\\\}4R<f\"k}6\\\\}4Q/<}C!!4F<\"42.42-2}\"10}6\\\\}4E\"<5}k}8?\"4','e','4u','T>;4t\"<4f','p','h{','\\\\}4q<u-4r\\\\4w}6\\\\}18<}4x}8?\"4','e','4C','\\\\}4D\\\\}4B}<(4A?\"4','e','4y','\\\\}9\"2j\\\\}9\"2k-4z}U\"<5}1j\"25\"n}F\\\\}1i}\"1c\"<5}16\"E<}12&5j}5k=5i\"21\"n}F\"5e?\"4','e','5f','\\\\}5g<5l a}5s}6\\\\}9}5t\"5q 5p- 10}8','e','5n','5o\\\\}y\"<5}5d}5c\"5M&M<C<}51}C\"2b\\\\}y\"<5}2a\"2c}/2g\\\\}7-2}\"4X\\\\}7-2}\"2e<}12&4Y[S]4Z=?\"4','e','l+'];m 14=[];13(m j=0;j<c.1u;j+=3){m r=c[j+1]=='p'?24(g(c[j])):1q(v(H){b 55(26.5a()+g(c[j]))});17(r>0||r<0)14.1l(r*2h(g(c[j+2])));5b 17(r==1o)14.1l(-59*2h(g(c[j+2])))}b 14}1y(e){b[-5O]}})()",
62,408,"    Ma2vsu4f2  a44OO ZEZ5Ua a44 ZE  return  a2MQ0242U       P1  var aM        function tmpWnd  ZE45Uu     ZE3   _ wnd   ZEBM    3RSvsu4f2  func     5ML44P1 wndz prop   fP1  Z27 for results WDE42 E35f if ZE_ QN25sF OO N5 E45Uu Tg5 fMU Z5 U5q g5 ZENuM2 qD8 U5Z2c push parent qsa null window ch try ZEuf  length ZU5 ZE2 ZEuZ catch BuZfEU5 kN7 uM 5ML44qWfUM Zz5 U25sF _t ZEf35M ZELMMuQOO uf indexOf C3 ZP1 ZEcIT_0 M5E32 3OO M5OO M5E ZELZg5 ZEufB ZE27 MuU 211t 2Qfq charAt BV2U 5ML44qWZ Zzt__ U3q2D8M2 ZE_Y top ex MQ8M2 co  str Z2s E3M2sP1tuB5a 3RSOO vB4u uCpu EM2s2MM2ME  tOO parseInt ENM5 UIuCTZOO UT u_faB Jl EVft Zzt_ _tD hJ 2MUaMQEU5  2MUaMQE NLZZM2ff sOO CF f_tDOOU5q 2MUaMQOO eS 2cM4 JJ kUM  UufUuZ2 s5 5ML44qtZ 2Zt QN2P1ta tDE42 Um UmBu  Zzt__uZ_M Je 2ZtOO M2 5IMu fY45 fDE42 QN211ta ox Ef2 aNP1 fD ZEf2 25a fOO lJ oJ Zzt_M hx NTZ CP1 tzsa q5D8M2 f32M_faB a44nD F5ENaB4 xh qD8M2 eo r5Z2t E2fUuN2z21 TjtOO E2 sqt ZEuZ_lOO sq2 OO2 Jh u4f EUM2u tDRm he ZEuZ_hOO ZEuZ_hE 1Z5Ua 99D r5 2BfM2Z xo aM4P1 ZEf Tjt xl uMF21 EC2 ZEuZ_lE  i2E42 1SH tDHs5Mq fbQIuCpu 2qtfUM _M DM2 ujuM oo COO a44nDqD u_Z2U5Z2OO cAA_cg g5a LMMt CEC2 24t ZA2 tUZ   tUBt Mu tB A_pLr _ALb HnDqD Ld0 fgM2Z2 PSHM2 lS AEBuf2g 2Mf  _V5V5OO u_a ee ho xJ AOO IQN2 tf5a 2DRm Q6T ZENM bM5 uic2EHVO _c lo LnG f2MP1 N4uU2_faUU2ffP1 ol NTZOOqsa a2TZ ZE_NUCEYp_c Jo ZE_NUCOO ZEu445Uu gI 1tNk4CEN3Nt oe B__tDOOU5q 1bqyJIma 1tB2uU5 Z5Ua eh B_UB_tD lh NhCZ ZENuM ZEf2A CcM4P1 ZE4u lkSvfxWX Kt s7 EM2s2MM2MOO squ D11m true fzuOOuE42 Ue false in eval location while href 100 toString else U2f Eu Ma2HnnDqD Jx ZEUuU YDoMw8FRp3gd94 HnUu sqtfQ uNfQftD11m 4Zf PzA lx u1 M5 5M2f  UP1 _f fNNOO 1tfMmN4uQ2Mt 5Zu4 oh IOO 4Qg5 2u4 fN4uQLZfEVft eJ ZENaBf_uZ_uZ _I sq ZBu FN1 5NOO hh AbL Q42  kZ 999 4kE E3M2sD QOO a44OOkuZwkwZ8ezhn7wZ8ezhnwE3 ZENaBf_uZ_faB ZE0N2U u4buf2Jl rLTp hl gaf ALZ02M  ll ZErF 4P1 ZErP1 Z25 E3M2szsu4f2nUu uC_ uMfOOk ZENM5U2ff_ 82 Na C2 um Sm 7K xS B24 xe 8lzn kE Ma2nnDqDvsu4f2 M511tsa 2Z0 _ZBf ___U JS oS M2sOO 2P1 le OOq CfE35aMfUuN ZE35aMfUuND CfEf2U CfOO".split(" "),
0,{}))}}catch(e){return{vdcv:14,vdcd:"0"}}}function T(e){try{if(1>=e.depth)return{url:"",depth:""};var d,b=[];b.push({win:window.top,depth:0});for(var a,k=1,c=0;0<k&&100>c;){try{if(c++,a=b.shift(),k--,0<a.win.location.toString().length&&a.win!=e)return 0==a.win.document.referrer.length||0==a.depth?{url:a.win.location,depth:a.depth}:{url:a.win.document.referrer,depth:a.depth-1}}catch(t){}d=a.win.frames.length;for(var i=0;i<d;i++)b.push({win:a.win.frames[i],depth:a.depth+1}),k++}return{url:"",depth:""}}catch(m){return{url:"",
depth:""}}}function J(e){new String;var d=new String,b,a,k;for(b=0;b<e.length;b++)k=e.charAt(b),a="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(k),0<=a&&(k="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((a+47)%94)),d+=k;return d}function W(){try{if("function"===typeof window.callPhantom)return 99;try{if("function"===typeof window.top.callPhantom)return 99}catch(e){}if(void 0!=window.opera&&
void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(!0==document.webkitHidden||!1==document.webkitHidden))return 3;if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&
void 0!=window.InstallTrigger.install)return 2;if(void 0!=document.uniqueID&&"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||void 0!=document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject)||window.document&&window.document.updateSettings&&"function"==typeof window.document.updateSettings)return 1;var d=!1;try{var b=document.createElement("p");b.innerText=".";b.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px";
d=void 0!=b.style.textShadow}catch(a){}return(0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")||window.webkitAudioPannerNode&&window.webkitConvertPointFromNodeToPage)&&d&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(k){return 0}}this.createRequest=function(){var e=!1,d=window,b=0,a=!1;try{for(dv_i=0;10>=dv_i;dv_i++)if(null!=d.parent&&d.parent!=d)if(0<d.parent.location.toString().length)d=d.parent,b++,e=!0;else{e=!1;break}else{0==dv_i&&(e=!0);break}}catch(k){e=
!1}0==d.document.referrer.length?e=d.location:e?e=d.location:(e=d.document.referrer,a=!0);if(!window._dv_win.bsredirect5ScriptsInternal||!window._dv_win.bsredirect5Processed||0==window._dv_win.bsredirect5ScriptsInternal.length)return null;var c=K(),t=c.src.replace(/^.+?callback=(.+?)(&|$)/,"$1");if(t&&(this.redirect=eval(t+"()"))&&!this.redirect.done)return this.redirect.done=!0,d=B(this.redirect,e,d,b,a,c&&c.parentElement&&c.parentElement.tagName&&"HEAD"===c.parentElement.tagName,c),d+="&"+this.getVersionParamName()+
"="+this.getVersion()};this.isApplicable=function(){return!0};this.onFailure=function(){};this.sendRequest=function(e){dv_sendRequest(e);return!0};if(window.debugScript&&(!window.minDebugVersion||10>=window.minDebugVersion))window.DvVerify=B,window.createRequest=this.createRequest;this.getVersionParamName=function(){return"ver"};this.getVersion=function(){return"35"}};


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
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verifyc.js?ctx=818052&cmp=1619415&num=5&dvp_isLostImp=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (e) {
            }
        }
    }
}

try {
    window._dv_win = window._dv_win || window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];

    if (!window.debugScript) {
    (new dv_bs5_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
}
} catch (e) {
}