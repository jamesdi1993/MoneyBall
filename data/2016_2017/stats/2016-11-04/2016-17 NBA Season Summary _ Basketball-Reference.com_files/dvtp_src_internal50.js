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

function getCurrentTime() {
    "use strict";
    if (Date.now) {
        return Date.now();
    }
    return (new Date()).getTime();
}

function doesBrowserSupportHTML5Push() {
    "use strict";
    return typeof window.parent.postMessage === 'function' && window.JSON;
}

function dv_GetParam(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS, 'i');
    var results = regex.exec(url);
    if (results == null)
        return null;
    else
        return results[1];
}

function dv_GetKeyValue(url) {
    var keyReg = new RegExp(".*=");
    var keyRet = url.match(keyReg)[0];
    keyRet = keyRet.replace("=", "");

    var valReg = new RegExp("=.*");
    var valRet = url.match(valReg)[0];
    valRet = valRet.replace("=", "");

    return { key: keyRet, value: valRet };
}

function dv_Contains(array, obj) {
    var i = array.length;
    while (i--) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

function dv_GetDynamicParams(url, prefix) {
    try {
        prefix = (prefix != undefined && prefix != null) ? prefix : 'dvp';
        var regex = new RegExp("[\\?&](" + prefix + "_[^&]*=[^&#]*)", "gi");
        var dvParams = regex.exec(url);

        var results = [];
        while (dvParams != null) {
            results.push(dvParams[1]);
            dvParams = regex.exec(url);
        }
        return results;
    }
    catch (e) {
        return [];
    }
}

function dv_createIframe() {
    var iframe;
    if (document.createElement && (iframe = document.createElement('iframe'))) {
        iframe.name = iframe.id = 'iframe_' + Math.floor((Math.random() + "") * 1000000000000);
        iframe.width = 0;
        iframe.height = 0;
        iframe.style.display = 'none';
        iframe.src = 'about:blank';
    }

    return iframe;
}

function dv_GetRnd() {
    return ((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 16);
}

function dv_SendErrorImp(serverUrl, errorsArr) {

    for (var j = 0; j < errorsArr.length; j++) {
        var errorObj = errorsArr[j];
        var errorImp = dv_CreateAndGetErrorImp(serverUrl, errorObj);
        dv_sendImgImp(errorImp);
    }
}

function dv_CreateAndGetErrorImp(serverUrl, errorObj) {
    var errorQueryString = '';
    for (var key in errorObj) {
        if (errorObj.hasOwnProperty(key)) {
            if (key.indexOf('dvp_jsErrUrl') == -1) {
                errorQueryString += '&' + key + '=' + errorObj[key];
            } else {
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
    if (window._dv_win.location.protocol === 'https:') {
        windowProtocol = 'https:';
        sslFlag = '&ssl=1';
    }

    var errorImp = windowProtocol + '//' + serverUrl + sslFlag + errorQueryString;
    return errorImp;
}

function dv_sendImgImp(url) {
    (new Image()).src = url;
}

function dv_getPropSafe(obj, propName) {
    try {
        if (obj)
            return obj[propName];
    } catch (e) {
    }
}

function dvType() {
    var that = this;
    var eventsForDispatch = {};
    this.t2tEventDataZombie = {};

    this.processT2TEvent = function (data, tag) {
        try {
            if (tag.ServerPublicDns) {
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;

                if (!tag.uniquePageViewId) {
                    tag.uniquePageViewId = data.uniquePageViewId;
                }

                tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
                $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
            }
        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tProcess=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (ex) {
            }
        }
    };

    this.processTagToTagCollision = function (collision, tag) {
        var i;
        for (i = 0; i < collision.eventsToFire.length; i++) {
            this.pubSub.publish(collision.eventsToFire[i], tag.uid);
        }
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        tpsServerUrl += '&colltid=' + collision.allReasonsForTagBitFlag;

        for (i = 0; i < collision.reasons.length; i++) {
            var reason = collision.reasons[i];
            tpsServerUrl += '&' + reason.name + "ms=" + reason.milliseconds;
        }

        if (collision.thisTag) {
            tpsServerUrl += '&tlts=' + collision.thisTag.t2tLoadTime;
        }
        if (tag.uniquePageViewId) {
            tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
        }
        $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    this.processBSIdFound = function (bsID, tag) {
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        tpsServerUrl += '&bsimpid=' + bsID;
        if (tag.uniquePageViewId) {
            tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
        }
        $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    this.processBABSVerbose = function (verboseReportingValues, tag) {
        var queryString = "";
        //get each frame, translate


        var dvpPrepend = "&dvp_BABS_";
        queryString += dvpPrepend + 'NumBS=' + verboseReportingValues.bsTags.length;

        for (var i = 0; i < verboseReportingValues.bsTags.length; i++) {
            var thisFrame = verboseReportingValues.bsTags[i];

            queryString += dvpPrepend + 'GotCB' + i + '=' + thisFrame.callbackReceived;
            queryString += dvpPrepend + 'Depth' + i + '=' + thisFrame.depth;

            if (thisFrame.callbackReceived) {
                if (thisFrame.bsAdEntityInfo && thisFrame.bsAdEntityInfo.comparisonItems) {
                    for (var itemIndex = 0; itemIndex < thisFrame.bsAdEntityInfo.comparisonItems.length; itemIndex++) {
                        var compItem = thisFrame.bsAdEntityInfo.comparisonItems[itemIndex];
                        queryString += dvpPrepend + "tag" + i + "_" + compItem.name + '=' + compItem.value;
                    }
                }
            }
        }

        if (queryString.length > 0) {
            var tpsServerUrl = '';
            if (tag) {
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
            }
            var requestString = tpsServerUrl + queryString;
            $dv.domUtilities.addImage(requestString, tag.tagElement.parentElement);
        }
    };

    var messageEventListener = function (event) {
        try {
            var timeCalled = getCurrentTime();
            var data = window.JSON.parse(event.data);
            if (!data.action) {
                data = window.JSON.parse(data);
            }
            var myUID;
            var visitJSHasBeenCalledForThisTag = false;
            if ($dv.tags) {
                for (var uid in $dv.tags) {
                    if ($dv.tags.hasOwnProperty(uid) && $dv.tags[uid] && $dv.tags[uid].t2tIframeId === data.iFrameId) {
                        myUID = uid;
                        visitJSHasBeenCalledForThisTag = true;
                        break;
                    }
                }
            }

            var tag;
            switch (data.action) {
                case 'uniquePageViewIdDetermination':
                    if (visitJSHasBeenCalledForThisTag) {
                        $dv.processT2TEvent(data, $dv.tags[myUID]);
                        $dv.t2tEventDataZombie[data.iFrameId] = undefined;
                    }
                    else {
                        data.wasZombie = 1;
                        $dv.t2tEventDataZombie[data.iFrameId] = data;
                    }
                    break;
                case 'maColl':
                    tag = $dv.tags[myUID];
                    if (!tag.uniquePageViewId) {
                        tag.uniquePageViewId = data.uniquePageViewId;
                    }
                    data.collision.commonRecievedTS = timeCalled;
                    $dv.processTagToTagCollision(data.collision, tag);
                    break;
                case 'bsIdFound':
                    tag = $dv.tags[myUID];
                    if (!tag.uniquePageViewId) {
                        tag.uniquePageViewId = data.uniquePageViewId;
                    }
                    $dv.processBSIdFound(data.id, tag);
                    break;
                case 'babsVerbose':
                    try {
                        tag = $dv.tags[myUID];
                        $dv.processBABSVerbose(data, tag);
                    } catch (err) {
                    }
                    break;
            }

        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tListener=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (ex) {
            }
        }
    };

    if (window.addEventListener)
        addEventListener("message", messageEventListener, false);
    else
        attachEvent("onmessage", messageEventListener);

    this.pubSub = new function () {
        var subscribers = [];
        var prerenderHistory={};

        var publishRtnEvent = function(eventName,uid){
            var actionsResults = [];
            try{
                if (subscribers[eventName + uid] instanceof Array)
                    for (var i = 0; i < subscribers[eventName + uid].length; i++) {
                        var funcObject = subscribers[eventName + uid][i];
                        if (funcObject && funcObject.Func && typeof funcObject.Func == "function" && funcObject.ActionName) {
                            var isSucceeded = runSafely(function () {
                                return funcObject.Func(uid);
                            });
                            actionsResults.push(encodeURIComponent(funcObject.ActionName) + '=' + (isSucceeded ? '1' : '0'));
                        }
                    }
            }
           catch(e){}
            return actionsResults;
        }

        this.publishHistoryRtnEvent = function (uid) {
            var actionsResults = [];

            if (prerenderHistory && prerenderHistory[uid]){
                for (var key in prerenderHistory[uid]){
                    if (prerenderHistory[uid][key])
                        actionsResults.push.apply(actionsResults,publishRtnEvent(prerenderHistory[uid][key],uid));
                }
                prerenderHistory[uid]=[];
            }

            return actionsResults;
        };

        this.subscribe = function (eventName, uid, actionName, func) {
            if (!subscribers[eventName + uid])
                subscribers[eventName + uid] = [];
            subscribers[eventName + uid].push({Func: func, ActionName: actionName});
        };

        this.publish = function (eventName, uid) {
            var actionsResults = [];
            try {
                if (eventName && uid) {
                    if (that.isEval == undefined) {
                        actionsResults = publishRtnEvent(eventName, uid);
                    }
                    else {
                        if ($dv && $dv.tags[uid] && $dv.tags[uid].prndr) {
                            prerenderHistory[uid] = prerenderHistory[uid] || [];
                            prerenderHistory[uid].push(eventName);
                        }
                        else {
                            actionsResults.push.apply(actionsResults, this.publishHistoryRtnEvent(uid));
                            actionsResults.push.apply(actionsResults, publishRtnEvent(eventName, uid));
                        }
                    }
                }
            } catch(e){}
            return actionsResults.join('&');
        };
    };

    this.domUtilities = new function () {
        function getDefaultParent() {
            return document.body || document.head || document.documentElement;
        }

        this.addImage = function (url, parentElement, useGET ) {
            if (!useGET && navigator.sendBeacon) {
                var message = appendCacheBuster(url);
                navigator.sendBeacon(message, {});
            } else {
                parentElement = parentElement || getDefaultParent();
                var image = parentElement.ownerDocument.createElement("img");
                image.width = 0;
                image.height = 0;
                image.style.display = 'none';
                image.src = appendCacheBuster(url);
                parentElement.insertBefore(image, parentElement.firstChild);
            }
        };

        this.addScriptResource = function (url, parentElement) {
            parentElement = parentElement || getDefaultParent();
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.src = appendCacheBuster(url);
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addScriptCode = function (srcCode, parentElement) {
            parentElement = parentElement || getDefaultParent();
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.innerHTML = srcCode;
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addHtml = function (srcHtml, parentElement) {
            parentElement = parentElement || getDefaultParent();
            var divElem = parentElement.ownerDocument.createElement("div");
            divElem.style = "display: inline";
            divElem.innerHTML = srcHtml;
            parentElement.insertBefore(divElem, parentElement.firstChild);
        }
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
        }
    };

    this.tagsType.prototype = new this.tagsPrototype();
    this.tagsType.prototype.constructor = this.tags;
    this.tags = new this.tagsType();

    this.tag = function () {
    }
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

    this.registerEventCall = function (impressionId, eventObject, timeoutMs, isRegisterEnabled) {
        if (typeof isRegisterEnabled !== 'undefined' && isRegisterEnabled === true) {
            addEventCallForDispatch(impressionId, eventObject);

            if (typeof timeoutMs === 'undefined' || timeoutMs == 0 || isNaN(timeoutMs))
                dispatchEventCallsNow(impressionId, eventObject);
            else {
                if (timeoutMs > 2000)
                    timeoutMs = 2000;

                var that = this;
                setTimeout(
                    function () {
                        that.dispatchEventCalls(impressionId);
                    }, timeoutMs);
            }

        } else {
            var url = this.tags[impressionId].protocol + '//' + this.tags[impressionId].ServerPublicDns + "/event.gif?impid=" + impressionId + '&' + createQueryStringParams(eventObject);
            this.domUtilities.addImage(url, this.tags[impressionId].tagElement.parentNode);
        }
    };
    var mraidObjectCache;
    this.getMraid = function () {
        var context = window._dv_win || window;
        var iterationCounter = 0;
        var maxIterations = 20;

        function getMraidRec (context) {
            iterationCounter++;
            var isTopWindow = context.parent == context;
            if (context.mraid || isTopWindow) {
                return context.mraid;
            } else {
                return ( iterationCounter <= maxIterations ) && getMraidRec(context.parent);
            }
        }

        try {
            return mraidObjectCache = mraidObjectCache || getMraidRec(context);
        } catch (e) {
        }
    };

    var dispatchEventCallsNow = function (impressionId, eventObject) {
        addEventCallForDispatch(impressionId, eventObject);
        dispatchEventCalls(impressionId);
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

    this.dispatchRegisteredEventsFromAllTags = function () {
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] !== 'function' && typeof this.tags[impressionId] !== 'undefined')
                this.dispatchEventCalls(impressionId);
        }
    };

    this.dispatchEventCalls = function (impressionId) {
        if (typeof eventsForDispatch[impressionId] !== 'undefined' && eventsForDispatch[impressionId] != null) {
            var url = this.tags[impressionId].protocol + '//' + this.tags[impressionId].ServerPublicDns + "/event.gif?impid=" + impressionId + '&' + createQueryStringParams(eventsForDispatch[impressionId]);
            this.domUtilities.addImage(url, this.tags[impressionId].tagElement.parentElement);
            eventsForDispatch[impressionId] = null;
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
}

function dv_baseHandler(){function db(){try{return{vdcv:13,vdcd:eval(function(a,d,e,i,m,C){m=function(a){return(a<d?"":m(parseInt(a/d)))+(35<(a%=d)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;e--;)C[m(e)]=i[e]||m(e);i=[function(a){return C[a]}];m=function(){return"\\w+"};e=1}for(;e--;)i[e]&&(a=a.replace(RegExp("\\b"+m(e)+"\\b","g"),i[e]));return a}("(y(){1o{m K=[1k];1o{m D=1k;3v(D!=D.1W&&D.1r.3w.3u){K.1n(D.1r);D=D.1r}}1x(e){}y 1s(V){1o{15(m i=0;i<K.1v;i++){14(V(K[i]))9 K[i]==1k.1W?-1:1}9 0}1x(e){9 1j}}y 21(X){9 1s(y(G){9 G[X]!=1j})}y 1Y(G,1Z,V){15(m X 3t G){14(X.2d(1Z)>-1&&(!V||V(G[X])))9 3q}9 3r}y g(s){m h=\"\",t=\"3s.;j&3x}3y/0:3E'3F=B(3D-3C!,3z)5r\\\\{ >3A+3B\\\"3p<\";15(i=0;i<s.1v;i++)f=s.2b(i),e=t.2d(f),0<=e&&(f=t.2b((e+41)%3o)),h+=f;9 h}m c=['3d\"1a-3e\"3c\"3b','p','l','60&p','p','{','-5,!u<}\"38}\"','p','J','-39}\"<3a','p','=o','\\\\}24\"2f\"1h\\\\}24\"2f\"3f}2\"<,u\"<5}?\"4','e','J=',':<3g}T}<\"','p','h','\\\\}6-2}\"E(k\"O}8?\\\\}6-2}\"E(k\"2a<N\"[1i*1t\\\\\\\\1F-3m<1C\"1B\"3n]12}C\"W','e','3l','\"1d\\\\}3k\"I<-3h\"1K\"5\"3i}1A<}3j\"1d\\\\}1l}1q>1p-1b}2}\"1K\"5\"3G}1A<}3I','e','=J','1m}U\"<5}48\"n}F\\\\}Z[49}47:46]d}7\\\\}Z[t:1O\"43]d}7\\\\}Z[44})5-u<}t]d}7\\\\}Z[45]d}7\\\\}Z[4a}4b]d}4i','e','4j',':4h}<\"Q-4g/2M','p','4c','\\\\}H<U/17}7\\\\}H<U/!d}8','e','=l','\\\\}1z!4d\\\\}1z!4e)p?\"4','e','40','37:,','p','3Z','1m}U\"<5}1g:3O\\\\}6-2}\"3P\".42-2}\"3N-3M<N\"3J<3K<3L}C\"3H<3Q<3R[<]E\"27\"1a}\"2}\"3X[<]E\"27\"1a}\"2}\"E<}13&3Y\"1\\\\}1N\\\\3W\\\\}1N\\\\3V}1q>1p-1b}2}\"z<3S-2}\"3T\"2.42-2}\"3U=4k\"n}2q\"n}P=2o','e','x','2j)','p','+','\\\\}25)u\"2g\\\\}25)u\"2p?\"4','e','2m','\\\\}1M}s<2l\\\\}1M}s<2k\" 2n-2h?\"4','e','2i','\\\\}6-2}\"E(k\"O}8?\\\\}6-2}\"E(k\"36<:[\\\\2U}}2M][\\\\2V,5}2]2W}C\"W','e','2T','1u\\\\}2S}2P\\\\}2Q$2R','e','2X',':2Y<Z','p','34','\\\\}b-35\\\\}b-33}32\\\\}b-2Z<30?\"4','e','31','\\\\}b\"1L\\\\}b\"1G-2O?\"4','e','2r','1u\\\\}2N:,2y}U\"<5}2z\"n}2A<2x<1H}2w','e','2t','\\\\}H<U/2u&2e\"E/2c\\\\}H<U/2v}C\"26\\\\}H<U/f[&2e\"E/2c\\\\}H<U/2B[S]]2C\"2J}8?\"4','e','2K','2L}2I}2H>2s','p','2E','\\\\}18:<1e}s<2F}7\\\\}18:<1e}s<2G<}f\"u}28\\\\}29\\\\}18:<1e}s<C[S]E:1O\"17}8','e','l{','4K\\'<}5B\\\\T}5A','p','==','\\\\}v<20\\\\}v<1V\\\\<Z\"1U\\\\}v<1Q<22\"?\"4','e','5z','\\\\}b\"2f\"5x\\\\}5y<5C?\"4','e','o{','\\\\}19}\"11}5D\"-5I\"2f\"q\\\\}w\"<5}5H?\"4','e','o+',' &Q)&5G','p','5E','\\\\}b.:2}\"c\"<5F}7\\\\}5w}7\\\\}5v<}f\"u}28\\\\}29\\\\}1l:}\"d}8','e','5l','5m\"5-\\'5k:2M','p','J{','\\\\}6-2}\"E(k\"O}8?\\\\}6-2}\"E(k\"2a<N\"[1i*1t\\\\\\\\1F-1C\"1B/5j<5h]12}C\"W','e','4l',')5i!5n}s<C','p','5o','\\\\}1y.L>g;Q\\'T)Y.5u\\\\}1y.L>g;5t&&5s>Q\\'T)Y.I?\"4','e','l=','Q:<Z<:5','p','5p','\\\\}1H\\\\}b\"5q\\\\}w\"<5}1S\"23}/1R\\\\}6-2}\"1P<}13&5J\\\\}w\"<5}16\"}u-61=?1m}U\"<5}1g\"1I\"n}5Y\\\\}19}\"1f\"<5}5Z\"1T\"n}F\"5W','e','5P','\\\\}1w-U\\\\1h\\\\}1w-5O\\\\}1w-\\\\<}?\"4','e','5N','5L-N:5Q','p','5R','\\\\}1c\"5V\\\\}1c\"5U\"<5}5S\\\\}1c\"5T||\\\\}5X?\"4','e','h+','\\\\}w\"<5}16\"}u-5f\\\\}1l}1q>1p-1b}2}\"q\\\\}w\"<5}16\"}u-2D','e','=S','4F}4E','p','4D','\\\\}v<20\\\\}v<1V\\\\<Z\"1U\\\\}v<1Q<22\"1h\"1d\\\\}v<4B}U\"<5}t?\"4','e','J+','c>A','p','=','\\\\}6-2}\"E(k\"O}8?\\\\}6-2}\"E(k\"1D<:[<Z*1t:Z,1E]F:<4C[<Z*4G]12}C\"W','e','h=','4H-2}\"1f\"<5}d}8','e','4M','\\\\}6-2}\"E(k\"O}8?\\\\}6-2}\"E(k\"1D<:[<Z*4L}1E]R<-C[1i*5g]12}C\"W','e','4I','1u\\\\}1J\"\\\\4J\\\\}1J\"\\\\4A','e','4z','\\\\}4q}Z<}4r}7\\\\}4p<f\"d}7\\\\}4o/<}C!!4m<\"42.42-2}\"17}7\\\\}4n\"<5}d}8?\"4','e','4s','T>;4t\"<4f','p','h{','\\\\}4y<u-4x\\\\4w}7\\\\}18<}4u}8?\"4','e','4v','\\\\}4N\\\\}4O}<(57?\"4','e','56','\\\\}b\"1L\\\\}b\"1G-55}U\"<5}1g\"1I\"n}F\\\\}19}\"1f\"<5}16\"E<}13&53}54=58\"1T\"n}F\"59?\"4','e','5e','\\\\}5d<5c a}5a}7\\\\}b}5b\"52 51- 17}8','e','4T','4S\\\\}w\"<5}4R}4P\"5M&M<C<}4Q}C\"26\\\\}w\"<5}1S\"23}/1R\\\\}6-2}\"4U\\\\}6-2}\"1P<}13&4V[S]50=?\"4','e','l+'];m 10=[];15(m j=0;j<c.1v;j+=3){m r=c[j+1]=='p'?21(g(c[j])):1s(y(G){9 4Z(1Y.4Y()+g(c[j]))});14(r>0||r<0)10.1n(r*1X(g(c[j+2])));4W 14(r==1j)10.1n(-4X*1X(g(c[j+2])))}9 10}1x(e){9[-5K]}})();",
62,374,"    Ma2vsu4f2  ZEZ5Ua a44OO a44 return  ZE  P1       a2MQ0242U  var aM        ZE3 ZE45Uu  function     tmpWnd   wnd ZEBM   wndz    5ML44P1  _     func 3RSvsu4f2 prop   results  WDE42 Z27 if for E35f fP1 ZE_ ZENuM2 g5 N5 ZEuZ QN25sF ZU5 E45Uu qD8 OO fMU null window ZE2 qsa push try Tg5 U5Z2c parent ch  U5q length ZEuf catch ZEcIT_0 ZE_Y Z2s MuU kN7 5ML44qWZ _t BuZfEU5 UT ZP1 MQ8M2 Zzt__ ENM5 UIuCTZOO ZELZg5 Zz5 uf EM2s2MM2ME M5E32 tOO E3M2sP1tuB5a U3q2D8M2 3OO M5E top parseInt co str M5OO ex C3 vB4u ZEf35M ZEufB 3RSOO  U25sF ZELMMuQOO 5ML44qWfUM charAt 2Qfq indexOf BV2U  u_Z2U5Z2OO 2cM4 JJ Ld0 CEC2 COO oo Mu HnDqD ujuM PSHM2 oJ  lJ fOO fDE42 a44nD f32M_faB tzsa q5D8M2 F5ENaB4 fD Ef2  hx CP1 CF fY45 5IMu aNP1 ox M2  Zzt_M NTZ f_tDOOU5q Zzt_ _tD Zzt__uZ_M eS UmBu Um tDE42 Jl u_faB 2MUaMQE NLZZM2ff Je sOO 2MUaMQEU5 hJ 2MUaMQOO 5ML44qtZ _M g5a fgM2Z2 u4f Q42 2Z0 C2 Na r5 ZBu 25a QN211ta 2ZtOO ZEf2 eo kUM EVft 82 1bqyJIma true false Ue in href while location PzA YDoMw8FRp3gd94 LnG NhCZ lkSvfxWX uic2EHVO Q6T s7 Kt QN2P1ta  2Zt tDHs5Mq 1SH i2E42 2qtfUM fbQIuCpu uMF21 EC2 99D sq2 1Z5Ua EUM2u tDRm E2 E2fUuN2z21 OO2 sqt he lS   r5Z2t tUZ tUBt 24t ZA2 qD8M2 tf5a tB LMMt ho AOO AEBuf2g  uM u_a a44nDqD ee DM2 eJ gI ZEu445Uu ZENuM ZEf2A ZE4u CcM4P1 lo _c N4uU2_faUU2ffP1 Jo f2MP1 bM5 ZENM lh B_UB_tD M511tsa Z25 xS 7K B24 1tfMmN4uQ2Mt Z5Ua oe B__tDOOU5q UufUuZ2 1tB2uU5 eh ZE_NUCOO ZE_NUCEYp_c U2f fzuOOuE42 Eu u1 lx EM2s2MM2MOO squ else 100 toString eval D11m M5 5M2f sqtfQ uNfQftD11m NTZOOqsa ol a2TZ HnUu Ma2HnnDqD UP1 _f 4Zf ZEUuU Jx 2P1 1tNk4CEN3Nt fN4uQLZfEVft 2u4 kZ ALZ02M ll gaf 4Qg5 oh hh 5NOO  AbL _I IOO ZErF ZErP1 fNNOO ZE0N2U Jh s5 Z5 u4buf2Jl a44OOkuZwkwZ8ezhn7wZ8ezhnwE3 hl 4P1 rLTp E3M2sD 4kE sq 999 ___U  JS M2sOO oS _ZBf le OOq CfE35aMfUuN CfEf2U CfOO Ma2nnDqDvsu4f2 ZE35aMfUuND FN1 E3M2szsu4f2nUu  2DRm".split(" "),
0,{}))}}catch(d){return{vdcv:13,vdcd:"0"}}}function Aa(){try{if("object"==typeof window.$ovv||"object"==typeof window.parent.$ovv)return!0}catch(d){}return!1}function ha(d){if(window._dv_win.document.body)return window._dv_win.document.body.insertBefore(d,window._dv_win.document.body.firstChild),!0;var a=0,c=function(){if(window._dv_win.document.body)try{window._dv_win.document.body.insertBefore(d,window._dv_win.document.body.firstChild)}catch(e){}else a++,150>a&&setTimeout(c,20)};setTimeout(c,20);
return!1}function ia(d){var a;if(document.createElement&&(a=document.createElement("iframe")))a.name=a.id=window._dv_win.dv_config.emptyIframeID||"iframe_"+Math.floor(1E12*(Math.random()+"")),a.width=0,a.height=0,a.style.display="none",a.src=d;return a}function Ba(d){var a={};try{for(var c=RegExp("[\\?&]([^&]*)=([^&#]*)","gi"),e=c.exec(d);null!=e;)"eparams"!==e[1]&&(a[e[1]]=e[2]),e=c.exec(d);return a}catch(i){return a}}function eb(d){try{if(1>=d.depth)return{url:"",depth:""};var a,c=[];c.push({win:window._dv_win.top,
depth:0});for(var e,i=1,m=0;0<i&&100>m;){try{if(m++,e=c.shift(),i--,0<e.win.location.toString().length&&e.win!=d)return 0==e.win.document.referrer.length||0==e.depth?{url:e.win.location,depth:e.depth}:{url:e.win.document.referrer,depth:e.depth-1}}catch(C){}a=e.win.frames.length;for(var s=0;s<a;s++)c.push({win:e.win.frames[s],depth:e.depth+1}),i++}return{url:"",depth:""}}catch(g){return{url:"",depth:""}}}function ja(d){var a=String(),c,e,i;for(c=0;c<d.length;c++)i=d.charAt(c),e="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(i),
0<=e&&(i="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((e+47)%94)),a+=i;return a}function fb(){try{if("function"===typeof window.callPhantom)return 99;try{if("function"===typeof window.top.callPhantom)return 99}catch(d){}if(void 0!=window.opera&&void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&
"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(!0==document.webkitHidden||!1==document.webkitHidden))return 3;if(void 0!=document.isConnected&&void 0!=document.webkitHidden&&(!0==document.webkitHidden||!1==document.webkitHidden))return 6;if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&void 0!=window.InstallTrigger.install)return 2;if(void 0!=document.uniqueID&&
"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||void 0!=document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject)||window.document&&window.document.updateSettings&&"function"==typeof window.document.updateSettings)return 1;var a=!1;try{var c=document.createElement("p");c.innerText=".";c.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px";a=void 0!=c.style.textShadow}catch(e){}return(0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")||
window.webkitAudioPannerNode&&window.webkitConvertPointFromNodeToPage)&&a&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(i){return 0}}this.createRequest=function(){var d,a,c;window._dv_win.$dv.isEval=1;window._dv_win.$dv.DebugInfo={};var e=!1,i=!1,m,C,s=!1,g=window._dv_win,Ca=0,Da=!1,Ea=getCurrentTime();window._dv_win.t2tTimestampData=[{dvTagCreated:Ea}];var P;try{for(P=0;10>=P;P++)if(null!=g.parent&&g.parent!=g)if(0<g.parent.location.toString().length)g=g.parent,Ca++,s=!0;else{s=
!1;break}else{0==P&&(s=!0);break}}catch(vb){s=!1}var H;0==g.document.referrer.length?H=g.location:s?H=g.location:(H=g.document.referrer,Da=!0);var Fa="",ka=null,la=null;try{window._dv_win.external&&(ka=void 0!=window._dv_win.external.QueuePageID?window._dv_win.external.QueuePageID:null,la=void 0!=window._dv_win.external.CrawlerUrl?window._dv_win.external.CrawlerUrl:null)}catch(wb){Fa="&dvp_extErr=1"}if(!window._dv_win._dvScriptsInternal||!window._dv_win.dvProcessed||0==window._dv_win._dvScriptsInternal.length)return null;
var Q=window._dv_win._dvScriptsInternal.pop(),D=Q.script;this.dv_script_obj=Q;this.dv_script=D;window._dv_win.t2tTimestampData[0].dvWrapperLoadTime=Q.loadtime;window._dv_win.dvProcessed.push(Q);var b=D.src;if(void 0!=window._dv_win.$dv.CommonData.BrowserId&&void 0!=window._dv_win.$dv.CommonData.BrowserVersion&&void 0!=window._dv_win.$dv.CommonData.BrowserIdFromUserAgent)d=window._dv_win.$dv.CommonData.BrowserId,a=window._dv_win.$dv.CommonData.BrowserVersion,c=window._dv_win.$dv.CommonData.BrowserIdFromUserAgent;
else{for(var Ga=dv_GetParam(b,"useragent"),Ha=Ga?decodeURIComponent(Ga):navigator.userAgent,E=[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7|Edge/",verRegex:"(MSIE |rv:| Edge/)"},{id:2,brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",
verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}],ma=0,Ia="",w=0;w<E.length;w++)if(null!=Ha.match(RegExp(E[w].brRegex))){ma=E[w].id;if(null==E[w].verRegex)break;var na=Ha.match(RegExp(E[w].verRegex+"[0-9]*"));if(null!=na)var gb=na[0].match(RegExp(E[w].verRegex)),Ia=na[0].replace(gb[0],"");break}var Ja=fb();d=Ja;a=Ja===ma?Ia:"";c=ma;window._dv_win.$dv.CommonData.BrowserId=d;window._dv_win.$dv.CommonData.BrowserVersion=
a;window._dv_win.$dv.CommonData.BrowserIdFromUserAgent=c}var x,hb="https:"===window._dv_win.location.protocol?"https:":"http:",oa=!0,pa=window.parent.postMessage&&window.JSON,Ka=!1;if("0"==dv_GetParam(b,"t2te")||window._dv_win.dv_config&&!0===window._dv_win.dv_config.supressT2T)Ka=!0;if(pa&&!1===Ka&&5!=window._dv_win.$dv.CommonData.BrowserId)try{var qa=window._dv_win.dv_config.t2turl||"https://cdn3.doubleverify.com/t2tv7.html";x=ia(qa);oa=ha(x)}catch(xb){}window._dv_win.$dv.DebugInfo.dvp_HTML5=pa?
"1":"0";var R=dv_GetParam(b,"region")||"",S="http:",La="0";"https"==b.match("^https")&&"https"==window._dv_win.location.toString().match("^https")&&(S="https:",La="1");try{for(var ib=g,ra=g,sa=0;10>sa&&ra!=window._dv_win.top;)sa++,ra=ra.parent;ib.depth=sa;var Ma=eb(g);dv_aUrlParam="&aUrl="+encodeURIComponent(Ma.url);dv_aUrlDepth="&aUrlD="+Ma.depth;dv_referrerDepth=g.depth+Ca;Da&&g.depth--}catch(yb){dv_aUrlDepth=dv_aUrlParam=dv_referrerDepth=g.depth=""}for(var Na=dv_GetDynamicParams(b,"dvp"),T=dv_GetDynamicParams(b,
"dvpx"),U=0;U<T.length;U++){var Oa=dv_GetKeyValue(T[U]);T[U]=Oa.key+"="+encodeURIComponent(Oa.value)}"41"==R&&(R=50>100*Math.random()?"41":"8",Na.push("dvp_region="+R));var Pa=Na.join("&"),Qa=T.join("&"),jb=window._dv_win.dv_config.tpsAddress||"tps"+R+".doubleverify.com",I="visit.js";switch(dv_GetParam(b,"dvapi")){case "1":I="dvvisit.js";break;case "5":I="query.js";break;default:I="visit.js"}window._dv_win.$dv.DebugInfo.dvp_API=I;for(var V="ctx cmp ipos sid plc adid crt btreg btadsrv adsrv advid num pid crtname unit chnl uid scusrid tagtype sr dt isdvvid dup app sup dvvidver".split(" "),
J=[],p=0;p<V.length;p++){var ta=dv_GetParam(b,V[p])||"";J.push(V[p]+"="+ta);""!==ta&&(window._dv_win.$dv.DebugInfo["dvp_"+V[p]]=ta)}var kb=dv_GetParam(b,"isdvvid")||"",Ra=dv_GetParam(b,"tagtype")||"",t=window._dv_win.$dv.getMraid();if(1!=kb&&!t&&("video"==Ra||"1"==Ra)){Aa()||J.push("prplyd=1");var Sa="AICB_"+(window._dv_win.dv_config&&window._dv_win.dv_config.dv_GetRnd?window._dv_win.dv_config.dv_GetRnd():dv_GetRnd());window._dv_win[Sa]=function(a){e=!0;m=a;window._dv_win.$dv&&!0==i&&window._dv_win.$dv.registerEventCall(C,
{prplyd:0,dvvidver:a})};var lb=J.join("&"),Ta=window._dv_win.document.createElement("script"),qa=S+"//cdn.doubleverify.com/dvvid_src.js?"+lb+"&AICB="+Sa;Ta.src=qa;window._dv_win.document.body.appendChild(Ta)}for(var ua="turl icall dv_callback useragent xff timecheck".split(" "),p=0;p<ua.length;p++){var Ua=dv_GetParam(b,ua[p]);null!=Ua&&J.push(ua[p]+"="+(Ua||""))}var mb=J.join("&"),y;var nb=function(){try{return!!window.sessionStorage}catch(a){return!0}},ob=function(){try{return!!window.localStorage}catch(a){return!0}},
pb=function(){var a=document.createElement("canvas");if(a.getContext&&a.getContext("2d")){var b=a.getContext("2d");b.textBaseline="top";b.font="14px 'Arial'";b.textBaseline="alphabetic";b.fillStyle="#f60";b.fillRect(0,0,62,20);b.fillStyle="#069";b.fillText("!image!",2,15);b.fillStyle="rgba(102, 204, 0, 0.7)";b.fillText("!image!",4,17);return a.toDataURL()}return null};try{var q=[];q.push(["lang",navigator.language||navigator.browserLanguage]);q.push(["tz",(new Date).getTimezoneOffset()]);q.push(["hss",
nb()?"1":"0"]);q.push(["hls",ob()?"1":"0"]);q.push(["odb",typeof window.openDatabase||""]);q.push(["cpu",navigator.cpuClass||""]);q.push(["pf",navigator.platform||""]);q.push(["dnt",navigator.doNotTrack||""]);q.push(["canv",pb()]);var k=q.join("=!!!=");if(null==k||""==k)y="";else{for(var K=function(a){for(var b="",d,e=7;0<=e;e--)d=a>>>4*e&15,b+=d.toString(16);return b},qb=[1518500249,1859775393,2400959708,3395469782],k=k+String.fromCharCode(128),z=Math.ceil((k.length/4+2)/16),A=Array(z),h=0;h<z;h++){A[h]=
Array(16);for(var B=0;16>B;B++)A[h][B]=k.charCodeAt(64*h+4*B)<<24|k.charCodeAt(64*h+4*B+1)<<16|k.charCodeAt(64*h+4*B+2)<<8|k.charCodeAt(64*h+4*B+3)}A[z-1][14]=8*(k.length-1)/Math.pow(2,32);A[z-1][14]=Math.floor(A[z-1][14]);A[z-1][15]=8*(k.length-1)&4294967295;for(var W=1732584193,X=4023233417,Y=2562383102,Z=271733878,$=3285377520,l=Array(80),F,n,u,v,aa,h=0;h<z;h++){for(var f=0;16>f;f++)l[f]=A[h][f];for(f=16;80>f;f++)l[f]=(l[f-3]^l[f-8]^l[f-14]^l[f-16])<<1|(l[f-3]^l[f-8]^l[f-14]^l[f-16])>>>31;F=W;
n=X;u=Y;v=Z;aa=$;for(f=0;80>f;f++){var Va=Math.floor(f/20),rb=F<<5|F>>>27,G;c:{switch(Va){case 0:G=n&u^~n&v;break c;case 1:G=n^u^v;break c;case 2:G=n&u^n&v^u&v;break c;case 3:G=n^u^v;break c}G=void 0}var sb=rb+G+aa+qb[Va]+l[f]&4294967295;aa=v;v=u;u=n<<30|n>>>2;n=F;F=sb}W=W+F&4294967295;X=X+n&4294967295;Y=Y+u&4294967295;Z=Z+v&4294967295;$=$+aa&4294967295}y=K(W)+K(X)+K(Y)+K(Z)+K($)}}catch(zb){y=null}y=null!=y?"&aadid="+y:"";var Wa=b,b=(window._dv_win.dv_config.visitJSURL||S+"//"+jb+"/"+I)+"?"+mb+"&dvtagver=6.1.src&srcurlD="+
g.depth+"&curl="+(null==la?"":encodeURIComponent(la))+"&qpgid="+(null==ka?"":ka)+"&ssl="+La+"&refD="+dv_referrerDepth+"&htmlmsging="+(pa?"1":"0")+y+Fa;(t=window._dv_win.$dv.getMraid())&&(b+="&ismraid=1");Aa()&&(b+="&isovv=1");var tb=b,j="";try{var r=window._dv_win,j=j+("&chro="+(void 0===r.chrome?"0":"1")),j=j+("&hist="+(r.history?r.history.length:"")),j=j+("&winh="+r.innerHeight),j=j+("&winw="+r.innerWidth),j=j+("&wouh="+r.outerHeight),j=j+("&wouw="+r.outerWidth);r.screen&&(j+="&scah="+r.screen.availHeight,
j+="&scaw="+r.screen.availWidth)}catch(Ab){}b=tb+(j||"");"http:"==b.match("^http:")&&"https"==window._dv_win.location.toString().match("^https")&&(b+="&dvp_diffSSL=1");var Xa=D&&D.parentElement&&D.parentElement.tagName&&"HEAD"===D.parentElement.tagName;if(!1===oa||Xa)b+="&dvp_isBodyExistOnLoad="+(oa?"1":"0"),b+="&dvp_isOnHead="+(Xa?"1":"0");Pa&&(b+="&"+Pa);Qa&&(b+="&"+Qa);var L="srcurl="+encodeURIComponent(H);window._dv_win.$dv.DebugInfo.srcurl=H;var ba;var ca=window._dv_win[ja("=@42E:@?")][ja("2?46DE@C~C:8:?D")];
if(ca&&0<ca.length){var va=[];va[0]=window._dv_win.location.protocol+"//"+window._dv_win.location.hostname;for(var da=0;da<ca.length;da++)va[da+1]=ca[da];ba=va.reverse().join(",")}else ba=null;ba&&(L+="&ancChain="+encodeURIComponent(ba));var M=dv_GetParam(b,"uid");null==M?(M=dv_GetRnd(),b+="&uid="+M):(M=dv_GetRnd(),b=b.replace(/([?&]uid=)(?:[^&])*/i,"$1"+M));var wa=4E3;/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&7>=new Number(RegExp.$1)&&(wa=2E3);var Ya=navigator.userAgent.toLowerCase();if(-1<Ya.indexOf("webkit")||
-1<Ya.indexOf("chrome")){var Za="&referrer="+encodeURIComponent(window._dv_win.location);b.length+Za.length<=wa&&(b+=Za)}dv_aUrlParam.length+dv_aUrlDepth.length+b.length<=wa&&(b+=dv_aUrlDepth,L+=dv_aUrlParam);var $a=db(),b=b+("&vavbkt="+$a.vdcd),b=b+("&lvvn="+$a.vdcv),b=b+("&"+this.getVersionParamName()+"="+this.getVersion()),b=b+("&eparams="+encodeURIComponent(ja(L))),b=b+("&brid="+d+"&brver="+a+"&bridua="+c);window._dv_win.$dv.DebugInfo.dvp_BRID=d;window._dv_win.$dv.DebugInfo.dvp_BRVR=a;window._dv_win.$dv.DebugInfo.dvp_BRIDUA=
c;var N;void 0!=window._dv_win.$dv.CommonData.Scenario?N=window._dv_win.$dv.CommonData.Scenario:(N=this.getTrafficScenarioType(window._dv_win),window._dv_win.$dv.CommonData.Scenario=N);b+="&tstype="+N;window._dv_win.$dv.DebugInfo.dvp_TS=N;var ea="";try{window.top==window?ea="1":window.top.location.host==window.location.host&&(ea="2")}catch(Bb){ea="3"}var fa=window._dv_win.document.visibilityState,ab=function(){var a=!1;try{a=t&&"function"===typeof t.getState&&"loading"===t.getState()}catch(d){b+=
"&dvp_mrgsf=1"}return a},xa=ab();if("prerender"===fa||xa)b+="&prndr=1",xa&&(b+="&dvp_mrprndr=1");var bb="dvCallback_"+(window._dv_win.dv_config&&window._dv_win.dv_config.dv_GetRnd?window._dv_win.dv_config.dv_GetRnd():dv_GetRnd()),ub=this.dv_script;window._dv_win[bb]=function(a,d,c,f){var g=getCurrentTime();i=!0;C=c;d.$uid=c;d=Ba(Wa);a.tags.add(c,d);d=Ba(b);a.tags[c].set(d);a.tags[c].beginVisitCallbackTS=g;a.tags[c].set({tagElement:ub,dv_protocol:S,protocol:hb,uid:c});a.tags[c].ImpressionServedTime=
getCurrentTime();a.tags[c].getTimeDiff=function(){return(new Date).getTime()-this.ImpressionServedTime};try{"undefined"!=typeof f&&null!==f&&(a.tags[c].ServerPublicDns=f),a.tags[c].adServingScenario=ea,a.tags[c].t2tIframeCreationTime=Ea,a.tags[c].t2tProcessed=!1,a.tags[c].t2tIframeId=x.id,a.tags[c].t2tIframeWindow=x.contentWindow,$dv.t2tEventDataZombie[x.id]&&(a.tags[c].uniquePageViewId=$dv.t2tEventDataZombie[x.id].uniquePageViewId,$dv.processT2TEvent($dv.t2tEventDataZombie[x.id],a.tags[c]))}catch(j){}!0==
e&&a.registerEventCall(c,{prplyd:0,dvvidver:m});if("prerender"===fa)if(f=window._dv_win.document.visibilityState,"prerender"!==f&&"unloaded"!==f)a.tags[c].set({prndr:0}),a.registerEventCall(c,{prndr:0}),a&&a.pubSub&&a.pubSub.publishHistoryRtnEvent(c);else{var h;"undefined"!==typeof window._dv_win.document.hidden?h="visibilitychange":"undefined"!==typeof window._dv_win.document.mozHidden?h="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?h="msvisibilitychange":"undefined"!==
typeof window._dv_win.document.webkitHidden&&(h="webkitvisibilitychange");var k=function(){var b=window._dv_win.document.visibilityState;"prerender"===fa&&("prerender"!==b&&"unloaded"!==b)&&(fa=b,a.tags[c].set({prndr:0}),a.registerEventCall(c,{prndr:0}),a&&a.pubSub&&a.pubSub.publishHistoryRtnEvent(c),window._dv_win.document.removeEventListener(h,k))};window._dv_win.document.addEventListener(h,k,!1)}else if(xa){var l=function(){"function"===typeof t.removeEventListener&&t.removeEventListener("ready",
l);a.tags[c].set({prndr:0});a.registerEventCall(c,{prndr:0});a&&a.pubSub&&a.pubSub.publishHistoryRtnEvent(c)};ab()?"function"===typeof t.addEventListener&&t.addEventListener("ready",l):(a.tags[c].set({prndr:0}),a.registerEventCall(c,{prndr:0}),a&&a.pubSub&&a.pubSub.publishHistoryRtnEvent(c))}};for(var cb,ga="auctionid vermemid source buymemid anadvid ioid cpgid cpid sellerid pubid advcode iocode cpgcode cpcode pubcode prcpaid auip auua".split(" "),ya=[],O=0;O<ga.length;O++){var za=dv_GetParam(Wa,
ga[O]);null!=za&&(ya.push("dvp_"+ga[O]+"="+za),ya.push(ga[O]+"="+za))}(cb=ya.join("&"))&&(b+="&"+cb);return b+"&jsCallback="+bb};this.sendRequest=function(d){var a;a=this.getVersionParamName();var c=this.getVersion(),e={};e[a]=c;e.dvp_jsErrUrl=d;e.dvp_jsErrMsg=encodeURIComponent("Error loading visit.js");window._dv_win.dv_config=window._dv_win.dv_config||{};window._dv_win.dv_config.tpsErrAddress=window._dv_win.dv_config.tpsAddress||"tps30.doubleverify.com";a='try{ script.onerror = function(){ try{(new Image()).src = "'+
dv_CreateAndGetErrorImp(window._dv_win.dv_config.tpsErrAddress+"/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1",e)+'";}catch(e){}}}catch(e){}';a='<html><head></head><body><script id="TPSCall" type="text/javascript" src="'+d+'"><\/script><script type="text/javascript">var script = document.getElementById("TPSCall"); if (script && script.readyState) { script.onreadystatechange = function() { if (script.readyState == "complete") document.close(); }; if(script.readyState == "complete") document.close(); } else document.close(); '+
a+"<\/script></body></html>";c=ia("about:blank");this.dv_script.id=c.id.replace("iframe","script");dv_GetParam(d,"uid");ha(c);d=dv_getPropSafe(c,"contentDocument")||dv_getPropSafe(dv_getPropSafe(c,"contentWindow"),"document")||dv_getPropSafe(window._dv_win.frames[c.name],"document");window._dv_win.t2tTimestampData.push({beforeVisitCall:getCurrentTime()});if(d){d.open();if(c=c.contentWindow||window._dv_win.frames[c.name])c.$dv=window._dv_win.$dv;d.write(a)}else d=a.replace(/'/g,"\\'"),d='javascript: (function(){document.open(); document.domain="'+
window.document.domain+"\"; window.$dv = window.parent.$dv; document.write('"+encodeURIComponent(d)+"');})()",c=ia(d),this.dv_script.id=c.id.replace("iframe","script"),ha(c);return!0};this.isApplicable=function(){return!0};this.onFailure=function(){window._dv_win._dvScriptsInternal.unshift(this.dv_script_obj);var d=window._dv_win.dvProcessed,a=this.dv_script_obj;null!=d&&(void 0!=d&&a)&&(a=d.indexOf(a),-1!=a&&d.splice(a,1));return window._dv_win.$dv.DebugInfo};this.getTrafficScenarioType=function(d){var d=
d||window,a=d._dv_win.$dv.Enums.TrafficScenario;try{if(d.top==d)return a.OnPage;for(var c=0;d.parent!=d&&1E3>c;){if(d.parent.document.domain!=d.document.domain)return a.CrossDomain;d=d.parent;c++}return a.SameDomain}catch(e){}return a.CrossDomain};this.getVersionParamName=function(){return"jsver"};this.getVersion=function(){return"93"}};


function dv_src_main(dv_baseHandlerIns, dv_handlersDefs) {

    this.baseHandlerIns = dv_baseHandlerIns;
    this.handlersDefs = dv_handlersDefs;

    this.exec = function () {
        try {
            window._dv_win = (window._dv_win || window);
            window._dv_win.$dv = (window._dv_win.$dv || new dvType());

            window._dv_win.dv_config = window._dv_win.dv_config || {};
            window._dv_win.dv_config.tpsErrAddress = window._dv_win.dv_config.tpsAddress || 'tps30.doubleverify.com';

            var errorsArr = (new dv_rolloutManager(this.handlersDefs, this.baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0)
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src', errorsArr);
        }
        catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_isLostImp=1', { dvp_jsErrMsg: encodeURIComponent(e) });
            } catch (e) { }
        }
    }
}

try {
    window._dv_win = window._dv_win || window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];
    (new dv_src_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
} catch (e) { }

