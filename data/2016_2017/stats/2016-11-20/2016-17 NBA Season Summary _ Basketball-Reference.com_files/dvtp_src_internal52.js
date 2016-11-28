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

function dv_baseHandler(){function db(){try{return{vdcv:14,vdcd:eval(function(a,d,e,i,m,C){m=function(a){return(a<d?"":m(parseInt(a/d)))+(35<(a%=d)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;e--;)C[m(e)]=i[e]||m(e);i=[function(a){return C[a]}];m=function(){return"\\w+"};e=1}for(;e--;)i[e]&&(a=a.replace(RegExp("\\b"+m(e)+"\\b","g"),i[e]));return a}("(v(){1r{m W=[1p];1r{m w=1p;57(w!=w.23&&w.1m.56.58){W.1l(w.1m);w=w.1m}}1y(e){}v 1q(Q){1r{13(m i=0;i<W.1u;i++){17(Q(W[i]))b W[i]==1p.23?-1:1}b 0}1y(e){b 1o}}v 24(X){b 1q(v(H){b H[X]!=1o})}v 26(H,28,Q){13(m X 54 H){17(X.1J(28)>-1&&(!Q||Q(H[X])))b 50}b 53}v g(s){m h=\"\",t=\"52.;j&5m}5h/0:4W'4V=B(4p-4s!,4v)5r\\\\{ >4P+4U\\\"4J<\";13(i=0;i<s.1u;i++)f=s.1X(i),e=t.1J(f),0<=e&&(f=t.1X((e+41)%6a)),h+=f;b h}m c=['6c\"1h-6b\"6n\"5L','p','l','60&p','p','{','\\\\}5D-5w<\"5R\\\\}5T<Z?\"4','e','3d','-5,!u<}\"3V}\"','p','J','-4a}\"<3p','p','=o','\\\\}1G\"2f\"1a\\\\}1G\"2f\"3x}2\"<,u\"<5}?\"4','e','J=',':<5G}T}<\"','p','h','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1C<N\"[1e*1t\\\\\\\\1z-2C<1A\"1U\"2n]15}C\"O','e','3f','\"19\\\\}2Z\"I<-30\"2i\"5\"2U}29<}2P\"19\\\\}1w}1k>1d-1b}2}\"2i\"5\"2I}29<}2H','e','=J','1n}U\"<5}3e\"n}F\\\\}Z[4n}3Z:3Y]k}6\\\\}Z[t:1I\"3g]k}6\\\\}Z[40})5-u<}t]k}6\\\\}Z[43]k}6\\\\}Z[45}3W]k}3S','e','4i',':4h}<\"G-1B/2M','p','4j','\\\\}K<U/10}6\\\\}K<U/!k}8','e','=l','\\\\}22!4l\\\\}22!4d)p?\"4','e','4c','3N:,','p','3s','\\\\}3t\\\\}3u\"2d-1V)3i\\\\}3l\\\\}3G\"2d-1V)3C?\"4','e','3D','\\\\}3B\"1B\"3A}6\\\\}9\\\\3y<M?\"4','e','3z','1n}U\"<5}1j:3E\\\\}7-2}\"3F\".42-2}\"3L-3M<N\"3K<3J<3I}C\"3H<3w<3m[<]E\"27\"1h}\"2}\"3n[<]E\"27\"1h}\"2}\"E<}12&3k\"1\\\\}1D\\\\3h\\\\}1D\\\\3j}1k>1d-1b}2}\"z<3v-2}\"3q\"2.42-2}\"3r=3O\"n}4b\"n}P=48','e','x','49)','p','+','\\\\}1T:4e<5}4g\\\\}1T\"4m?\"4','e','4k','L!!47.46.G 3U','p','x=','\\\\}1S)u\"3T\\\\}1S)u\"3P?\"4','e','3Q','\\\\}1R}s<3R\\\\}1R}s<3X\" 44-2A?\"4','e','2B','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"2G<:[\\\\2L}}2M][\\\\2K,5}2]2J}C\"O','e','2z','1g\\\\}2N}2x\\\\}2o$2p','e','2m',':2l<Z','p','2q','\\\\}9-2y\\\\}9-2r}2v\\\\}9-2t<2u?\"4','e','2O','\\\\}9\"2j\\\\}9\"2k-36?\"4','e','33','1g\\\\}34:,38}U\"<5}39\"n}3c<3a<1L}3b','e','32','\\\\}K<U/31&1Y\"E/1W\\\\}K<U/2T}C\"2b\\\\}K<U/f[&1Y\"E/1W\\\\}K<U/2Y[S]]2W\"2X}8?\"4','e','2V','2Q}2R}2S>2s','p','35','\\\\}18:<1v}s<37}6\\\\}18:<1v}s<2w<}f\"u}1E\\\\}1H\\\\}18:<1v}s<C[S]E:1I\"10}8','e','l{','2E\\'<}1f\\\\T}2F','p','==','\\\\}D<1P\\\\}D<1Q\\\\<Z\"1O\\\\}D<1N<1K\"?\"4','e','3o','\\\\}9\"2f\"5u\\\\}5U<5V?\"4','e','o{','\\\\}1i}\"11}5S\"-5P\"2f\"q\\\\}y\"<5}5Q?\"4','e','o+',' &G)&5W','p','5X','\\\\}9.:2}\"c\"<63}6\\\\}64}6\\\\}62<}f\"u}1E\\\\}1H\\\\}1w:}\"k}8','e','61','5Y\"5-\\'5Z:2M','p','J{','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1C<N\"[1e*1t\\\\\\\\1z-1A\"1U/5N<5B]15}C\"O','e','5C',')5A!5z}s<C','p','5x','\\\\}1M.L>g;G\\'T)Y.5y\\\\}1M.L>g;5E&&5K>G\\'T)Y.I?\"4','e','l=','G:<Z<:5','p','5J','\\\\}1L\\\\}9\"5I\\\\}y\"<5}2a\"2c}/2g\\\\}7-2}\"2e<}12&5F\\\\}y\"<5}16\"}u-4o=?1n}U\"<5}1j\"25\"n}5H\\\\}1i}\"1c\"<5}66\"21\"n}F\"6l','e','6r','\\\\}1s-U\\\\1a\\\\}1s-6s\\\\}1s-\\\\<}?\"4','e','6q','6p-N:6o','p','6u','\\\\}1x\"6z\\\\}1x\"6y\"<5}6v\\\\}1x\"6w||\\\\}6x?\"4','e','h+','\\\\}y\"<5}16\"}u-6t\\\\}1w}1k>1d-1b}2}\"q\\\\}y\"<5}16\"}u-2D','e','=S','\\\\}D<1P\\\\}D<1Q\\\\<Z\"1O\\\\}D<1N<1K\"1a\"19\\\\}D<6m}U\"<5}t?\"4','e','J+','c>A','p','=','\\\\}69\"67:68^[6d,][6e+]6j\\'<}1f\\\\6k\"2f\"q\\\\<}1f\\\\E}u-2D?\"4','e','6i','6h}6f','p','6g','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1Z<:[<Z*1t:Z,1F]F:<65[<Z*5v]15}C\"O','e','h=','4L-2}\"1c\"<5}k}8','e','4M','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1Z<:[<Z*4K}1F]R<-C[1e*4G]15}C\"O','e','4H','1g\\\\}20\"\\\\4I\\\\}20\"\\\\4N','e','4O','\\\\}4T}Z<}4S}6\\\\}4R<f\"k}6\\\\}4Q/<}C!!4F<\"42.42-2}\"10}6\\\\}4E\"<5}k}8?\"4','e','4u','T>;4t\"<4f','p','h{','\\\\}4q<u-4r\\\\4w}6\\\\}18<}4x}8?\"4','e','4C','\\\\}4D\\\\}4B}<(4A?\"4','e','4y','\\\\}9\"2j\\\\}9\"2k-4z}U\"<5}1j\"25\"n}F\\\\}1i}\"1c\"<5}16\"E<}12&5j}5k=5i\"21\"n}F\"5e?\"4','e','5f','\\\\}5g<5l a}5s}6\\\\}9}5t\"5q 5p- 10}8','e','5n','5o\\\\}y\"<5}5d}5c\"5M&M<C<}51}C\"2b\\\\}y\"<5}2a\"2c}/2g\\\\}7-2}\"4X\\\\}7-2}\"2e<}12&4Y[S]4Z=?\"4','e','l+'];m 14=[];13(m j=0;j<c.1u;j+=3){m r=c[j+1]=='p'?24(g(c[j])):1q(v(H){b 55(26.5a()+g(c[j]))});17(r>0||r<0)14.1l(r*2h(g(c[j+2])));5b 17(r==1o)14.1l(-59*2h(g(c[j+2])))}b 14}1y(e){b[-5O]}})()",
62,408,"    Ma2vsu4f2  a44OO ZEZ5Ua a44 ZE  return  a2MQ0242U       P1  var aM        function tmpWnd  ZE45Uu     ZE3   _ wnd   ZEBM    3RSvsu4f2  func     5ML44P1 wndz prop   fP1  Z27 for results WDE42 E35f if ZE_ QN25sF OO N5 E45Uu Tg5 fMU Z5 U5q g5 ZENuM2 qD8 U5Z2c push parent qsa null window ch try ZEuf  length ZU5 ZE2 ZEuZ catch BuZfEU5 kN7 uM 5ML44qWfUM Zz5 U25sF _t ZEf35M ZELMMuQOO uf indexOf C3 ZP1 ZEcIT_0 M5E32 3OO M5OO M5E ZELZg5 ZEufB ZE27 MuU 211t 2Qfq charAt BV2U 5ML44qWZ Zzt__ U3q2D8M2 ZE_Y top ex MQ8M2 co  str Z2s E3M2sP1tuB5a 3RSOO vB4u uCpu EM2s2MM2ME  tOO parseInt ENM5 UIuCTZOO UT u_faB Jl EVft Zzt_ _tD hJ 2MUaMQEU5  2MUaMQE NLZZM2ff sOO CF f_tDOOU5q 2MUaMQOO eS 2cM4 JJ kUM  UufUuZ2 s5 5ML44qtZ 2Zt QN2P1ta tDE42 Um UmBu  Zzt__uZ_M Je 2ZtOO M2 5IMu fY45 fDE42 QN211ta ox Ef2 aNP1 fD ZEf2 25a fOO lJ oJ Zzt_M hx NTZ CP1 tzsa q5D8M2 f32M_faB a44nD F5ENaB4 xh qD8M2 eo r5Z2t E2fUuN2z21 TjtOO E2 sqt ZEuZ_lOO sq2 OO2 Jh u4f EUM2u tDRm he ZEuZ_hOO ZEuZ_hE 1Z5Ua 99D r5 2BfM2Z xo aM4P1 ZEf Tjt xl uMF21 EC2 ZEuZ_lE  i2E42 1SH tDHs5Mq fbQIuCpu 2qtfUM _M DM2 ujuM oo COO a44nDqD u_Z2U5Z2OO cAA_cg g5a LMMt CEC2 24t ZA2 tUZ   tUBt Mu tB A_pLr _ALb HnDqD Ld0 fgM2Z2 PSHM2 lS AEBuf2g 2Mf  _V5V5OO u_a ee ho xJ AOO IQN2 tf5a 2DRm Q6T ZENM bM5 uic2EHVO _c lo LnG f2MP1 N4uU2_faUU2ffP1 ol NTZOOqsa a2TZ ZE_NUCEYp_c Jo ZE_NUCOO ZEu445Uu gI 1tNk4CEN3Nt oe B__tDOOU5q 1bqyJIma 1tB2uU5 Z5Ua eh B_UB_tD lh NhCZ ZENuM ZEf2A CcM4P1 ZE4u lkSvfxWX Kt s7 EM2s2MM2MOO squ D11m true fzuOOuE42 Ue false in eval location while href 100 toString else U2f Eu Ma2HnnDqD Jx ZEUuU YDoMw8FRp3gd94 HnUu sqtfQ uNfQftD11m 4Zf PzA lx u1 M5 5M2f  UP1 _f fNNOO 1tfMmN4uQ2Mt 5Zu4 oh IOO 4Qg5 2u4 fN4uQLZfEVft eJ ZENaBf_uZ_uZ _I sq ZBu FN1 5NOO hh AbL Q42  kZ 999 4kE E3M2sD QOO a44OOkuZwkwZ8ezhn7wZ8ezhnwE3 ZENaBf_uZ_faB ZE0N2U u4buf2Jl rLTp hl gaf ALZ02M  ll ZErF 4P1 ZErP1 Z25 E3M2szsu4f2nUu uC_ uMfOOk ZENM5U2ff_ 82 Na C2 um Sm 7K xS B24 xe 8lzn kE Ma2nnDqDvsu4f2 M511tsa 2Z0 _ZBf ___U JS oS M2sOO 2P1 le OOq CfE35aMfUuN ZE35aMfUuND CfEf2U CfOO".split(" "),
0,{}))}}catch(d){return{vdcv:14,vdcd:"0"}}}function ia(d){if(window._dv_win.document.body)return window._dv_win.document.body.insertBefore(d,window._dv_win.document.body.firstChild),!0;var a=0,c=function(){if(window._dv_win.document.body)try{window._dv_win.document.body.insertBefore(d,window._dv_win.document.body.firstChild)}catch(e){}else a++,150>a&&setTimeout(c,20)};setTimeout(c,20);return!1}function ja(d){var a;if(document.createElement&&(a=document.createElement("iframe")))a.name=a.id=window._dv_win.dv_config.emptyIframeID||
"iframe_"+Math.floor(1E12*(Math.random()+"")),a.width=0,a.height=0,a.style.display="none",a.src=d;return a}function Ba(d){var a={};try{for(var c=RegExp("[\\?&]([^&]*)=([^&#]*)","gi"),e=c.exec(d);null!=e;)"eparams"!==e[1]&&(a[e[1]]=e[2]),e=c.exec(d);return a}catch(i){return a}}function eb(d){try{if(1>=d.depth)return{url:"",depth:""};var a,c=[];c.push({win:window._dv_win.top,depth:0});for(var e,i=1,m=0;0<i&&100>m;){try{if(m++,e=c.shift(),i--,0<e.win.location.toString().length&&e.win!=d)return 0==e.win.document.referrer.length||
0==e.depth?{url:e.win.location,depth:e.depth}:{url:e.win.document.referrer,depth:e.depth-1}}catch(C){}a=e.win.frames.length;for(var s=0;s<a;s++)c.push({win:e.win.frames[s],depth:e.depth+1}),i++}return{url:"",depth:""}}catch(g){return{url:"",depth:""}}}function ka(d){var a=String(),c,e,i;for(c=0;c<d.length;c++)i=d.charAt(c),e="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(i),0<=e&&(i="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((e+
47)%94)),a+=i;return a}function fb(){try{if("function"===typeof window.callPhantom)return 99;try{if("function"===typeof window.top.callPhantom)return 99}catch(d){}if(void 0!=window.opera&&void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(!0==document.webkitHidden||
!1==document.webkitHidden))return 3;if(void 0!=document.isConnected&&void 0!=document.webkitHidden&&(!0==document.webkitHidden||!1==document.webkitHidden))return 6;if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&void 0!=window.InstallTrigger.install)return 2;if(void 0!=document.uniqueID&&"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||void 0!=
document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject)||window.document&&window.document.updateSettings&&"function"==typeof window.document.updateSettings)return 1;var a=!1;try{var c=document.createElement("p");c.innerText=".";c.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px";a=void 0!=c.style.textShadow}catch(e){}return(0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")||window.webkitAudioPannerNode&&window.webkitConvertPointFromNodeToPage)&&
a&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(i){return 0}}this.createRequest=function(){var d,a,c;window._dv_win.$dv.isEval=1;window._dv_win.$dv.DebugInfo={};var e=!1,i=!1,m,C,s=!1,g=window._dv_win,Ca=0,Da=!1,Ea=getCurrentTime();window._dv_win.t2tTimestampData=[{dvTagCreated:Ea}];var Q;try{for(Q=0;10>=Q;Q++)if(null!=g.parent&&g.parent!=g)if(0<g.parent.location.toString().length)g=g.parent,Ca++,s=!0;else{s=!1;break}else{0==Q&&(s=!0);break}}catch(vb){s=!1}var H;0==g.document.referrer.length?
H=g.location:s?H=g.location:(H=g.document.referrer,Da=!0);var Fa="",la=null,ma=null;try{window._dv_win.external&&(la=void 0!=window._dv_win.external.QueuePageID?window._dv_win.external.QueuePageID:null,ma=void 0!=window._dv_win.external.CrawlerUrl?window._dv_win.external.CrawlerUrl:null)}catch(wb){Fa="&dvp_extErr=1"}if(!window._dv_win._dvScriptsInternal||!window._dv_win.dvProcessed||0==window._dv_win._dvScriptsInternal.length)return null;var R=window._dv_win._dvScriptsInternal.pop(),D=R.script;this.dv_script_obj=
R;this.dv_script=D;window._dv_win.t2tTimestampData[0].dvWrapperLoadTime=R.loadtime;window._dv_win.dvProcessed.push(R);var b=D.src;if(void 0!=window._dv_win.$dv.CommonData.BrowserId&&void 0!=window._dv_win.$dv.CommonData.BrowserVersion&&void 0!=window._dv_win.$dv.CommonData.BrowserIdFromUserAgent)d=window._dv_win.$dv.CommonData.BrowserId,a=window._dv_win.$dv.CommonData.BrowserVersion,c=window._dv_win.$dv.CommonData.BrowserIdFromUserAgent;else{for(var Ga=dv_GetParam(b,"useragent"),Ha=Ga?decodeURIComponent(Ga):
navigator.userAgent,E=[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7|Edge/",verRegex:"(MSIE |rv:| Edge/)"},{id:2,brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},
{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}],na=0,Ia="",w=0;w<E.length;w++)if(null!=Ha.match(RegExp(E[w].brRegex))){na=E[w].id;if(null==E[w].verRegex)break;var oa=Ha.match(RegExp(E[w].verRegex+"[0-9]*"));if(null!=oa)var gb=oa[0].match(RegExp(E[w].verRegex)),Ia=oa[0].replace(gb[0],"");break}var Ja=fb();d=Ja;a=Ja===na?Ia:"";c=na;window._dv_win.$dv.CommonData.BrowserId=d;window._dv_win.$dv.CommonData.BrowserVersion=a;window._dv_win.$dv.CommonData.BrowserIdFromUserAgent=
c}var x,hb="https:"===window._dv_win.location.protocol?"https:":"http:",pa=!0,qa=window.parent.postMessage&&window.JSON,Ka=!1;if("0"==dv_GetParam(b,"t2te")||window._dv_win.dv_config&&!0===window._dv_win.dv_config.supressT2T)Ka=!0;if(qa&&!1===Ka&&5!=window._dv_win.$dv.CommonData.BrowserId)try{var ra=window._dv_win.dv_config.t2turl||"https://cdn3.doubleverify.com/t2tv7.html";x=ja(ra);pa=ia(x)}catch(xb){}window._dv_win.$dv.DebugInfo.dvp_HTML5=qa?"1":"0";var S=dv_GetParam(b,"region")||"",T="http:",La=
"0";"https"==b.match("^https")&&"https"==window._dv_win.location.toString().match("^https")&&(T="https:",La="1");try{for(var ib=g,sa=g,ta=0;10>ta&&sa!=window._dv_win.top;)ta++,sa=sa.parent;ib.depth=ta;var Ma=eb(g);dv_aUrlParam="&aUrl="+encodeURIComponent(Ma.url);dv_aUrlDepth="&aUrlD="+Ma.depth;dv_referrerDepth=g.depth+Ca;Da&&g.depth--}catch(yb){dv_aUrlDepth=dv_aUrlParam=dv_referrerDepth=g.depth=""}for(var Na=dv_GetDynamicParams(b,"dvp"),U=dv_GetDynamicParams(b,"dvpx"),V=0;V<U.length;V++){var Oa=dv_GetKeyValue(U[V]);
U[V]=Oa.key+"="+encodeURIComponent(Oa.value)}"41"==S&&(S=50>100*Math.random()?"41":"8",Na.push("dvp_region="+S));var Pa=Na.join("&"),Qa=U.join("&"),jb=window._dv_win.dv_config.tpsAddress||"tps"+S+".doubleverify.com",I="visit.js";switch(dv_GetParam(b,"dvapi")){case "1":I="dvvisit.js";break;case "5":I="query.js";break;default:I="visit.js"}window._dv_win.$dv.DebugInfo.dvp_API=I;for(var W="ctx cmp ipos sid plc adid crt btreg btadsrv adsrv advid num pid crtname unit chnl uid scusrid tagtype sr dt isdvvid dup app sup dvvidver".split(" "),
J=[],p=0;p<W.length;p++){var ua=dv_GetParam(b,W[p])||"";J.push(W[p]+"="+ua);""!==ua&&(window._dv_win.$dv.DebugInfo["dvp_"+W[p]]=ua)}var kb=dv_GetParam(b,"isdvvid")||"",Ra=dv_GetParam(b,"tagtype")||"",t=window._dv_win.$dv.getMraid(),K;a:{try{if("object"==typeof window.$ovv||"object"==typeof window.parent.$ovv){K=!0;break a}}catch(zb){}K=!1}if(K&&1!=kb&&!t&&("video"==Ra||"1"==Ra)){K||J.push("prplyd=1");var Sa="AICB_"+(window._dv_win.dv_config&&window._dv_win.dv_config.dv_GetRnd?window._dv_win.dv_config.dv_GetRnd():
dv_GetRnd());window._dv_win[Sa]=function(a){e=!0;m=a;window._dv_win.$dv&&!0==i&&window._dv_win.$dv.registerEventCall(C,{prplyd:0,dvvidver:a})};var lb=J.join("&"),Ta=window._dv_win.document.createElement("script"),ra=T+"//cdn.doubleverify.com/dvvid_src.js?"+lb+"&AICB="+Sa;Ta.src=ra;window._dv_win.document.body.appendChild(Ta)}for(var va="turl icall dv_callback useragent xff timecheck".split(" "),p=0;p<va.length;p++){var Ua=dv_GetParam(b,va[p]);null!=Ua&&J.push(va[p]+"="+(Ua||""))}var mb=J.join("&"),
y;var nb=function(){try{return!!window.sessionStorage}catch(a){return!0}},ob=function(){try{return!!window.localStorage}catch(a){return!0}},pb=function(){var a=document.createElement("canvas");if(a.getContext&&a.getContext("2d")){var b=a.getContext("2d");b.textBaseline="top";b.font="14px 'Arial'";b.textBaseline="alphabetic";b.fillStyle="#f60";b.fillRect(0,0,62,20);b.fillStyle="#069";b.fillText("!image!",2,15);b.fillStyle="rgba(102, 204, 0, 0.7)";b.fillText("!image!",4,17);return a.toDataURL()}return null};
try{var q=[];q.push(["lang",navigator.language||navigator.browserLanguage]);q.push(["tz",(new Date).getTimezoneOffset()]);q.push(["hss",nb()?"1":"0"]);q.push(["hls",ob()?"1":"0"]);q.push(["odb",typeof window.openDatabase||""]);q.push(["cpu",navigator.cpuClass||""]);q.push(["pf",navigator.platform||""]);q.push(["dnt",navigator.doNotTrack||""]);q.push(["canv",pb()]);var k=q.join("=!!!=");if(null==k||""==k)y="";else{for(var L=function(a){for(var b="",d,e=7;0<=e;e--)d=a>>>4*e&15,b+=d.toString(16);return b},
qb=[1518500249,1859775393,2400959708,3395469782],k=k+String.fromCharCode(128),z=Math.ceil((k.length/4+2)/16),A=Array(z),h=0;h<z;h++){A[h]=Array(16);for(var B=0;16>B;B++)A[h][B]=k.charCodeAt(64*h+4*B)<<24|k.charCodeAt(64*h+4*B+1)<<16|k.charCodeAt(64*h+4*B+2)<<8|k.charCodeAt(64*h+4*B+3)}A[z-1][14]=8*(k.length-1)/Math.pow(2,32);A[z-1][14]=Math.floor(A[z-1][14]);A[z-1][15]=8*(k.length-1)&4294967295;for(var X=1732584193,Y=4023233417,Z=2562383102,$=271733878,aa=3285377520,l=Array(80),F,n,u,v,ba,h=0;h<z;h++){for(var f=
0;16>f;f++)l[f]=A[h][f];for(f=16;80>f;f++)l[f]=(l[f-3]^l[f-8]^l[f-14]^l[f-16])<<1|(l[f-3]^l[f-8]^l[f-14]^l[f-16])>>>31;F=X;n=Y;u=Z;v=$;ba=aa;for(f=0;80>f;f++){var Va=Math.floor(f/20),rb=F<<5|F>>>27,G;c:{switch(Va){case 0:G=n&u^~n&v;break c;case 1:G=n^u^v;break c;case 2:G=n&u^n&v^u&v;break c;case 3:G=n^u^v;break c}G=void 0}var sb=rb+G+ba+qb[Va]+l[f]&4294967295;ba=v;v=u;u=n<<30|n>>>2;n=F;F=sb}X=X+F&4294967295;Y=Y+n&4294967295;Z=Z+u&4294967295;$=$+v&4294967295;aa=aa+ba&4294967295}y=L(X)+L(Y)+L(Z)+L($)+
L(aa)}}catch(Ab){y=null}y=null!=y?"&aadid="+y:"";var Wa=b,b=(window._dv_win.dv_config.visitJSURL||T+"//"+jb+"/"+I)+"?"+mb+"&dvtagver=6.1.src&srcurlD="+g.depth+"&curl="+(null==ma?"":encodeURIComponent(ma))+"&qpgid="+(null==la?"":la)+"&ssl="+La+"&refD="+dv_referrerDepth+"&htmlmsging="+(qa?"1":"0")+y+Fa;(t=window._dv_win.$dv.getMraid())&&(b+="&ismraid=1");K&&(b+="&isovv=1");var tb=b,j="";try{var r=window._dv_win,j=j+("&chro="+(void 0===r.chrome?"0":"1")),j=j+("&hist="+(r.history?r.history.length:"")),
j=j+("&winh="+r.innerHeight),j=j+("&winw="+r.innerWidth),j=j+("&wouh="+r.outerHeight),j=j+("&wouw="+r.outerWidth);r.screen&&(j+="&scah="+r.screen.availHeight,j+="&scaw="+r.screen.availWidth)}catch(Bb){}b=tb+(j||"");"http:"==b.match("^http:")&&"https"==window._dv_win.location.toString().match("^https")&&(b+="&dvp_diffSSL=1");var Xa=D&&D.parentElement&&D.parentElement.tagName&&"HEAD"===D.parentElement.tagName;if(!1===pa||Xa)b+="&dvp_isBodyExistOnLoad="+(pa?"1":"0"),b+="&dvp_isOnHead="+(Xa?"1":"0");
Pa&&(b+="&"+Pa);Qa&&(b+="&"+Qa);var M="srcurl="+encodeURIComponent(H);window._dv_win.$dv.DebugInfo.srcurl=H;var ca;var da=window._dv_win[ka("=@42E:@?")][ka("2?46DE@C~C:8:?D")];if(da&&0<da.length){var wa=[];wa[0]=window._dv_win.location.protocol+"//"+window._dv_win.location.hostname;for(var ea=0;ea<da.length;ea++)wa[ea+1]=da[ea];ca=wa.reverse().join(",")}else ca=null;ca&&(M+="&ancChain="+encodeURIComponent(ca));var N=dv_GetParam(b,"uid");null==N?(N=dv_GetRnd(),b+="&uid="+N):(N=dv_GetRnd(),b=b.replace(/([?&]uid=)(?:[^&])*/i,
"$1"+N));var xa=4E3;/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&7>=new Number(RegExp.$1)&&(xa=2E3);var Ya=navigator.userAgent.toLowerCase();if(-1<Ya.indexOf("webkit")||-1<Ya.indexOf("chrome")){var Za="&referrer="+encodeURIComponent(window._dv_win.location);b.length+Za.length<=xa&&(b+=Za)}dv_aUrlParam.length+dv_aUrlDepth.length+b.length<=xa&&(b+=dv_aUrlDepth,M+=dv_aUrlParam);var $a=db(),b=b+("&vavbkt="+$a.vdcd),b=b+("&lvvn="+$a.vdcv),b=b+("&"+this.getVersionParamName()+"="+this.getVersion()),b=b+
("&eparams="+encodeURIComponent(ka(M))),b=b+("&brid="+d+"&brver="+a+"&bridua="+c);window._dv_win.$dv.DebugInfo.dvp_BRID=d;window._dv_win.$dv.DebugInfo.dvp_BRVR=a;window._dv_win.$dv.DebugInfo.dvp_BRIDUA=c;var O;void 0!=window._dv_win.$dv.CommonData.Scenario?O=window._dv_win.$dv.CommonData.Scenario:(O=this.getTrafficScenarioType(window._dv_win),window._dv_win.$dv.CommonData.Scenario=O);b+="&tstype="+O;window._dv_win.$dv.DebugInfo.dvp_TS=O;var fa="";try{window.top==window?fa="1":window.top.location.host==
window.location.host&&(fa="2")}catch(Cb){fa="3"}var ga=window._dv_win.document.visibilityState,ab=function(){var a=!1;try{a=t&&"function"===typeof t.getState&&"loading"===t.getState()}catch(d){b+="&dvp_mrgsf=1"}return a},ya=ab();if("prerender"===ga||ya)b+="&prndr=1",ya&&(b+="&dvp_mrprndr=1");var bb="dvCallback_"+(window._dv_win.dv_config&&window._dv_win.dv_config.dv_GetRnd?window._dv_win.dv_config.dv_GetRnd():dv_GetRnd()),ub=this.dv_script;window._dv_win[bb]=function(a,d,c,f){var g=getCurrentTime();
i=!0;C=c;d.$uid=c;d=Ba(Wa);a.tags.add(c,d);d=Ba(b);a.tags[c].set(d);a.tags[c].beginVisitCallbackTS=g;a.tags[c].set({tagElement:ub,dv_protocol:T,protocol:hb,uid:c});a.tags[c].ImpressionServedTime=getCurrentTime();a.tags[c].getTimeDiff=function(){return(new Date).getTime()-this.ImpressionServedTime};try{"undefined"!=typeof f&&null!==f&&(a.tags[c].ServerPublicDns=f),a.tags[c].adServingScenario=fa,a.tags[c].t2tIframeCreationTime=Ea,a.tags[c].t2tProcessed=!1,a.tags[c].t2tIframeId=x.id,a.tags[c].t2tIframeWindow=
x.contentWindow,$dv.t2tEventDataZombie[x.id]&&(a.tags[c].uniquePageViewId=$dv.t2tEventDataZombie[x.id].uniquePageViewId,$dv.processT2TEvent($dv.t2tEventDataZombie[x.id],a.tags[c]))}catch(j){}!0==e&&a.registerEventCall(c,{prplyd:0,dvvidver:m});if("prerender"===ga)if(f=window._dv_win.document.visibilityState,"prerender"!==f&&"unloaded"!==f)a.tags[c].set({prndr:0}),a.registerEventCall(c,{prndr:0}),a&&a.pubSub&&a.pubSub.publishHistoryRtnEvent(c);else{var h;"undefined"!==typeof window._dv_win.document.hidden?
h="visibilitychange":"undefined"!==typeof window._dv_win.document.mozHidden?h="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?h="msvisibilitychange":"undefined"!==typeof window._dv_win.document.webkitHidden&&(h="webkitvisibilitychange");var k=function(){var b=window._dv_win.document.visibilityState;"prerender"===ga&&("prerender"!==b&&"unloaded"!==b)&&(ga=b,a.tags[c].set({prndr:0}),a.registerEventCall(c,{prndr:0}),a&&a.pubSub&&a.pubSub.publishHistoryRtnEvent(c),window._dv_win.document.removeEventListener(h,
k))};window._dv_win.document.addEventListener(h,k,!1)}else if(ya){var l=function(){"function"===typeof t.removeEventListener&&t.removeEventListener("ready",l);a.tags[c].set({prndr:0});a.registerEventCall(c,{prndr:0});a&&a.pubSub&&a.pubSub.publishHistoryRtnEvent(c)};ab()?"function"===typeof t.addEventListener&&t.addEventListener("ready",l):(a.tags[c].set({prndr:0}),a.registerEventCall(c,{prndr:0}),a&&a.pubSub&&a.pubSub.publishHistoryRtnEvent(c))}};for(var cb,ha="auctionid vermemid source buymemid anadvid ioid cpgid cpid sellerid pubid advcode iocode cpgcode cpcode pubcode prcpaid auip auua".split(" "),
za=[],P=0;P<ha.length;P++){var Aa=dv_GetParam(Wa,ha[P]);null!=Aa&&(za.push("dvp_"+ha[P]+"="+Aa),za.push(ha[P]+"="+Aa))}(cb=za.join("&"))&&(b+="&"+cb);return b+"&jsCallback="+bb};this.sendRequest=function(d){var a;a=this.getVersionParamName();var c=this.getVersion(),e={};e[a]=c;e.dvp_jsErrUrl=d;e.dvp_jsErrMsg=encodeURIComponent("Error loading visit.js");window._dv_win.dv_config=window._dv_win.dv_config||{};window._dv_win.dv_config.tpsErrAddress=window._dv_win.dv_config.tpsAddress||"tps30.doubleverify.com";
a='try{ script.onerror = function(){ try{(new Image()).src = "'+dv_CreateAndGetErrorImp(window._dv_win.dv_config.tpsErrAddress+"/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1",e)+'";}catch(e){}}}catch(e){}';a='<html><head></head><body><script id="TPSCall" type="text/javascript" src="'+d+'"><\/script><script type="text/javascript">var script = document.getElementById("TPSCall"); if (script && script.readyState) { script.onreadystatechange = function() { if (script.readyState == "complete") document.close(); }; if(script.readyState == "complete") document.close(); } else document.close(); '+
a+"<\/script></body></html>";c=ja("about:blank");this.dv_script.id=c.id.replace("iframe","script");dv_GetParam(d,"uid");ia(c);d=dv_getPropSafe(c,"contentDocument")||dv_getPropSafe(dv_getPropSafe(c,"contentWindow"),"document")||dv_getPropSafe(window._dv_win.frames[c.name],"document");window._dv_win.t2tTimestampData.push({beforeVisitCall:getCurrentTime()});if(d){d.open();if(c=c.contentWindow||window._dv_win.frames[c.name])c.$dv=window._dv_win.$dv;d.write(a)}else d=a.replace(/'/g,"\\'"),d='javascript: (function(){document.open(); document.domain="'+
window.document.domain+"\"; window.$dv = window.parent.$dv; document.write('"+encodeURIComponent(d)+"');})()",c=ja(d),this.dv_script.id=c.id.replace("iframe","script"),ia(c);return!0};this.isApplicable=function(){return!0};this.onFailure=function(){window._dv_win._dvScriptsInternal.unshift(this.dv_script_obj);var d=window._dv_win.dvProcessed,a=this.dv_script_obj;null!=d&&(void 0!=d&&a)&&(a=d.indexOf(a),-1!=a&&d.splice(a,1));return window._dv_win.$dv.DebugInfo};this.getTrafficScenarioType=function(d){var d=
d||window,a=d._dv_win.$dv.Enums.TrafficScenario;try{if(d.top==d)return a.OnPage;for(var c=0;d.parent!=d&&1E3>c;){if(d.parent.document.domain!=d.document.domain)return a.CrossDomain;d=d.parent;c++}return a.SameDomain}catch(e){}return a.CrossDomain};this.getVersionParamName=function(){return"jsver"};this.getVersion=function(){return"94"}};


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

