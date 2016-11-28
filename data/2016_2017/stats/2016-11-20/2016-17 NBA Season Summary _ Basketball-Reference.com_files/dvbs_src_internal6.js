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

function dv_Contains(array, obj) {
    var i = array.length;
    while (i--) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

function dv_GetDynamicParams(url) {
    try {
        var regex = new RegExp("[\\?&](dvp_[^&]*=[^&#]*)", "gi");
        var dvParams = regex.exec(url);

        var results = new Array();
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

function dv_sendScriptRequest(url) {
    document.write('<scr' + 'ipt type="text/javascript" src="' + url + '"></scr' + 'ipt>');
}

function dv_getPropSafe(obj, propName) {
    try {
        if (obj)
            return obj[propName];
    } catch (e) {
    }
}

function dvBsType() {
    var that = this;
    var eventsForDispatch = {};
    this.t2tEventDataZombie = {};

    this.processT2TEvent = function (data, tag) {
        try {
            if (tag.ServerPublicDns) {
                data.timeStampCollection.push({"beginProcessT2TEvent": getCurrentTime()});
                data.timeStampCollection.push({'beginVisitCallback': tag.beginVisitCallbackTS});
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;

                if (!tag.uniquePageViewId) {
                    tag.uniquePageViewId = data.uniquePageViewId;
                }

                tpsServerUrl += '&dvp_upvid=' + tag.uniquePageViewId;
                tpsServerUrl += '&dvp_numFrames=' + data.totalIframeCount;
                tpsServerUrl += '&dvp_numt2t=' + data.totalT2TiframeCount;
                tpsServerUrl += '&dvp_frameScanDuration=' + data.scanAllFramesDuration;
                tpsServerUrl += '&dvp_scene=' + tag.adServingScenario;
                tpsServerUrl += '&dvp_ist2twin=' + (data.isWinner ? '1' : '0');
                tpsServerUrl += '&dvp_numTags=' + Object.keys($dvbs.tags).length;
                tpsServerUrl += '&dvp_isInSample=' + data.isInSample;
                tpsServerUrl += (data.wasZombie) ? '&dvp_wasZombie=1' : '&dvp_wasZombie=0';
                tpsServerUrl += '&dvp_ts_t2tCreatedOn=' + data.creationTime;
                if (data.timeStampCollection) {
                    if (window._dv_win.t2tTimestampData) {
                        for (var tsI = 0; tsI < window._dv_win.t2tTimestampData.length; tsI++) {
                            data.timeStampCollection.push(window._dv_win.t2tTimestampData[tsI]);
                        }
                    }

                    for (var i = 0; i < data.timeStampCollection.length; i++) {
                        var item = data.timeStampCollection[i];
                        for (var propName in item) {
                            if (item.hasOwnProperty(propName)) {
                                tpsServerUrl += '&dvp_ts_' + propName + '=' + item[propName];
                            }
                        }
                    }
                }
                $dvbs.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
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
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        var additions = [
            '&dvp_collisionReasons=' + collision.reasonBitFlag,
            '&dvp_ts_reporterDvTagCreated=' + collision.thisTag.dvTagCreatedTS,
            '&dvp_ts_reporterVisitJSMessagePosted=' + collision.thisTag.visitJSPostMessageTS,
            '&dvp_ts_reporterReceivedByT2T=' + collision.thisTag.receivedByT2TTS,
            '&dvp_ts_collisionPostedFromT2T=' + collision.postedFromT2TTS,
            '&dvp_ts_collisionReceivedByCommon=' + collision.commonRecievedTS,
            '&dvp_collisionTypeId=' + collision.allReasonsForTagBitFlag
        ];
        tpsServerUrl += additions.join("");

        for (i = 0; i < collision.reasons.length; i++) {
            var reason = collision.reasons[i];
            tpsServerUrl += '&dvp_' + reason + "MS=" + collision[reason + "MS"];
        }

        if (tag.uniquePageViewId) {
            tpsServerUrl += '&dvp_upvid=' + tag.uniquePageViewId;
        }
        $dvbs.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    var messageEventListener = function (event) {
        try {
            var timeCalled = getCurrentTime();
            var data = window.JSON.parse(event.data);
            if (!data.action) {
                data = window.JSON.parse(data);
            }
            if (data.timeStampCollection) {
                data.timeStampCollection.push({messageEventListenerCalled: timeCalled});
            }
            var myUID;
            var visitJSHasBeenCalledForThisTag = false;
            if ($dvbs.tags) {
                for (var uid in $dvbs.tags) {
                    if ($dvbs.tags.hasOwnProperty(uid) && $dvbs.tags[uid] && $dvbs.tags[uid].t2tIframeId === data.iFrameId) {
                        myUID = uid;
                        visitJSHasBeenCalledForThisTag = true;
                        break;
                    }
                }
            }

            switch (data.action) {
                case 'uniquePageViewIdDetermination' :
                    if (visitJSHasBeenCalledForThisTag) {
                        $dvbs.processT2TEvent(data, $dvbs.tags[myUID]);
                        $dvbs.t2tEventDataZombie[data.iFrameId] = undefined;
                    }
                    else {
                        data.wasZombie = 1;
                        $dvbs.t2tEventDataZombie[data.iFrameId] = data;
                    }
                    break;
                case 'maColl':
                    var tag = $dvbs.tags[myUID];
                    //mark we got a message, so we'll stop sending them in the future
                    tag.AdCollisionMessageRecieved = true;
                    if (!tag.uniquePageViewId) {
                        tag.uniquePageViewId = data.uniquePageViewId;
                    }
                    data.collision.commonRecievedTS = timeCalled;
                    $dvbs.processTagToTagCollision(data.collision, tag);
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
            if (parentElement) {
                var scriptElem = parentElement.ownerDocument.createElement("script");
                scriptElem.type = 'text/javascript';
                scriptElem.src = appendCacheBuster(url);
                parentElement.insertBefore(scriptElem, parentElement.firstChild);
            }
            else {
                addScriptResourceFallBack(url);
            }
        };

        function addScriptResourceFallBack(url) {
            var scriptElem = document.createElement('script');
            scriptElem.type = "text/javascript";
            scriptElem.src = appendCacheBuster(url);
            var firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(scriptElem, firstScript);
        }

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

function dv_baseHandler(){function H(i,a,j,d,b,k,z,l,w){var e,g,c;void 0==a.dvregion&&(a.dvregion=0);var m,s,D;try{c=d;for(g=0;10>g&&c!=window._dv_win.top;)g++,c=c.parent;d.depth=g;e=L(d);m="&aUrl="+encodeURIComponent(e.url);s="&aUrlD="+e.depth;D=d.depth+b;k&&d.depth--}catch(J){s=m=D=d.depth=""}void 0!=a.aUrl&&(m="&aUrl="+a.aUrl);b=a.script.src;k="&ctx="+(dv_GetParam(b,"ctx")||"")+"&cmp="+(dv_GetParam(b,"cmp")||"")+"&plc="+(dv_GetParam(b,"plc")||"")+"&sid="+(dv_GetParam(b,"sid")||"")+"&advid="+(dv_GetParam(b,
"advid")||"")+"&adsrv="+(dv_GetParam(b,"adsrv")||"")+"&unit="+(dv_GetParam(b,"unit")||"")+"&uid="+a.uid+"&tagtype="+(dv_GetParam(b,"tagtype")||"")+"&adID="+(dv_GetParam(b,"adID")||"")+"&app="+(dv_GetParam(b,"app")||"")+"&sup="+(dv_GetParam(b,"sup")||"");(c=dv_GetParam(b,"xff"))&&(k+="&xff="+c);(c=dv_GetParam(b,"useragent"))&&(k+="&useragent="+c);if(void 0!=window._dv_win.$dvbs.CommonData.BrowserId&&void 0!=window._dv_win.$dvbs.CommonData.BrowserVersion&&void 0!=window._dv_win.$dvbs.CommonData.BrowserIdFromUserAgent)e=
window._dv_win.$dvbs.CommonData.BrowserId,g=window._dv_win.$dvbs.CommonData.BrowserVersion,c=window._dv_win.$dvbs.CommonData.BrowserIdFromUserAgent;else{var u=c?decodeURIComponent(c):navigator.userAgent;e=[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7|Edge/",verRegex:"(MSIE |rv:| Edge/)"},{id:2,brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",
verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}];c=0;g="";for(var f=0;f<e.length;f++)if(null!=u.match(RegExp(e[f].brRegex))){c=e[f].id;if(null==e[f].verRegex)break;u=u.match(RegExp(e[f].verRegex+"[0-9]*"));null!=u&&(g=u[0].match(RegExp(e[f].verRegex)),g=u[0].replace(g[0],""));break}e=
f=M();g=f===c?g:"";window._dv_win.$dvbs.CommonData.BrowserId=e;window._dv_win.$dvbs.CommonData.BrowserVersion=g;window._dv_win.$dvbs.CommonData.BrowserIdFromUserAgent=c}k+="&brid="+e+"&brver="+g+"&bridua="+c;(c=dv_GetParam(b,"turl"))&&(k+="&turl="+c);(c=dv_GetParam(b,"tagformat"))&&(k+="&tagformat="+c);c="";try{var h=window._dv_win.parent;c+="&chro="+(void 0===h.chrome?"0":"1");c+="&hist="+(h.history?h.history.length:"");c+="&winh="+h.innerHeight;c+="&winw="+h.innerWidth;c+="&wouh="+h.outerHeight;
c+="&wouw="+h.outerWidth;h.screen&&(c+="&scah="+h.screen.availHeight,c+="&scaw="+h.screen.availWidth)}catch(x){}var k=k+c,E;h=function(){try{return!!window.sessionStorage}catch(a){return!0}};c=function(){try{return!!window.localStorage}catch(a){return!0}};g=function(){var a=document.createElement("canvas");if(a.getContext&&a.getContext("2d")){var b=a.getContext("2d");b.textBaseline="top";b.font="14px 'Arial'";b.textBaseline="alphabetic";b.fillStyle="#f60";b.fillRect(0,0,62,20);b.fillStyle="#069";
b.fillText("!image!",2,15);b.fillStyle="rgba(102, 204, 0, 0.7)";b.fillText("!image!",4,17);return a.toDataURL()}return null};try{e=[];e.push(["lang",navigator.language||navigator.browserLanguage]);e.push(["tz",(new Date).getTimezoneOffset()]);e.push(["hss",h()?"1":"0"]);e.push(["hls",c()?"1":"0"]);e.push(["odb",typeof window.openDatabase||""]);e.push(["cpu",navigator.cpuClass||""]);e.push(["pf",navigator.platform||""]);e.push(["dnt",navigator.doNotTrack||""]);e.push(["canv",g()]);var n=e.join("=!!!=");
if(null==n||""==n)E="";else{h=function(a){for(var b="",v,c=7;0<=c;c--)v=a>>>4*c&15,b+=v.toString(16);return b};c=[1518500249,1859775393,2400959708,3395469782];var n=n+String.fromCharCode(128),t=Math.ceil((n.length/4+2)/16),y=Array(t);for(g=0;g<t;g++){y[g]=Array(16);for(e=0;16>e;e++)y[g][e]=n.charCodeAt(64*g+4*e)<<24|n.charCodeAt(64*g+4*e+1)<<16|n.charCodeAt(64*g+4*e+2)<<8|n.charCodeAt(64*g+4*e+3)}y[t-1][14]=8*(n.length-1)/Math.pow(2,32);y[t-1][14]=Math.floor(y[t-1][14]);y[t-1][15]=8*(n.length-1)&
4294967295;n=1732584193;e=4023233417;var f=2562383102,u=271733878,C=3285377520,p=Array(80),A,r,v,B,I;for(g=0;g<t;g++){for(var q=0;16>q;q++)p[q]=y[g][q];for(q=16;80>q;q++)p[q]=(p[q-3]^p[q-8]^p[q-14]^p[q-16])<<1|(p[q-3]^p[q-8]^p[q-14]^p[q-16])>>>31;A=n;r=e;v=f;B=u;I=C;for(q=0;80>q;q++){var K=Math.floor(q/20),H=A<<5|A>>>27,F;c:{switch(K){case 0:F=r&v^~r&B;break c;case 1:F=r^v^B;break c;case 2:F=r&v^r&B^v&B;break c;case 3:F=r^v^B;break c}F=void 0}var N=H+F+I+c[K]+p[q]&4294967295;I=B;B=v;v=r<<30|r>>>2;
r=A;A=N}n=n+A&4294967295;e=e+r&4294967295;f=f+v&4294967295;u=u+B&4294967295;C=C+I&4294967295}E=h(n)+h(e)+h(f)+h(u)+h(C)}}catch(P){E=null}a=(window._dv_win.dv_config.verifyJSURL||a.protocol+"//"+(window._dv_win.dv_config.bsAddress||"rtb"+a.dvregion+".doubleverify.com")+"/verify.js")+"?jsCallback="+a.callbackName+"&jsTagObjCallback="+a.tagObjectCallbackName+"&num=6"+k+"&srcurlD="+d.depth+"&ssl="+a.ssl+"&refD="+D+a.tagIntegrityFlag+a.tagHasPassbackFlag+"&htmlmsging="+(z?"1":"0")+(null!=E?"&aadid="+E:
"");(d=dv_GetDynamicParams(b).join("&"))&&(a+="&"+d);if(!1===l||w)a=a+("&dvp_isBodyExistOnLoad="+(l?"1":"0"))+("&dvp_isOnHead="+(w?"1":"0"));j="srcurl="+encodeURIComponent(j);if((l=window._dv_win[G("=@42E:@?")][G("2?46DE@C~C:8:?D")])&&0<l.length){w=[];w[0]=window._dv_win.location.protocol+"//"+window._dv_win.location.hostname;for(d=0;d<l.length;d++)w[d+1]=l[d];l=w.reverse().join(",")}else l=null;l&&(j+="&ancChain="+encodeURIComponent(l));l=4E3;/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&7>=new Number(RegExp.$1)&&
(l=2E3);if(b=dv_GetParam(b,"referrer"))b="&referrer="+b,a.length+b.length<=l&&(a+=b);m.length+s.length+a.length<=l&&(a+=s,j+=m);m=O();a+="&vavbkt="+m.vdcd;a+="&lvvn="+m.vdcv;"prerender"===window._dv_win.document.visibilityState&&(a+="&prndr=1");return a+="&eparams="+encodeURIComponent(G(j))+"&"+i.getVersionParamName()+"="+i.getVersion()}function O(){try{return{vdcv:14,vdcd:eval(function(a,j,d,b,k,i){k=function(a){return(a<j?"":k(parseInt(a/j)))+(35<(a%=j)?String.fromCharCode(a+29):a.toString(36))};
if(!"".replace(/^/,String)){for(;d--;)i[k(d)]=b[d]||k(d);b=[function(a){return i[a]}];k=function(){return"\\w+"};d=1}for(;d--;)b[d]&&(a=a.replace(RegExp("\\b"+k(d)+"\\b","g"),b[d]));return a}("(v(){1r{m W=[1p];1r{m w=1p;57(w!=w.23&&w.1m.56.58){W.1l(w.1m);w=w.1m}}1y(e){}v 1q(Q){1r{13(m i=0;i<W.1u;i++){17(Q(W[i]))b W[i]==1p.23?-1:1}b 0}1y(e){b 1o}}v 24(X){b 1q(v(H){b H[X]!=1o})}v 26(H,28,Q){13(m X 54 H){17(X.1J(28)>-1&&(!Q||Q(H[X])))b 50}b 53}v g(s){m h=\"\",t=\"52.;j&5m}5h/0:4W'4V=B(4p-4s!,4v)5r\\\\{ >4P+4U\\\"4J<\";13(i=0;i<s.1u;i++)f=s.1X(i),e=t.1J(f),0<=e&&(f=t.1X((e+41)%6a)),h+=f;b h}m c=['6c\"1h-6b\"6n\"5L','p','l','60&p','p','{','\\\\}5D-5w<\"5R\\\\}5T<Z?\"4','e','3d','-5,!u<}\"3V}\"','p','J','-4a}\"<3p','p','=o','\\\\}1G\"2f\"1a\\\\}1G\"2f\"3x}2\"<,u\"<5}?\"4','e','J=',':<5G}T}<\"','p','h','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1C<N\"[1e*1t\\\\\\\\1z-2C<1A\"1U\"2n]15}C\"O','e','3f','\"19\\\\}2Z\"I<-30\"2i\"5\"2U}29<}2P\"19\\\\}1w}1k>1d-1b}2}\"2i\"5\"2I}29<}2H','e','=J','1n}U\"<5}3e\"n}F\\\\}Z[4n}3Z:3Y]k}6\\\\}Z[t:1I\"3g]k}6\\\\}Z[40})5-u<}t]k}6\\\\}Z[43]k}6\\\\}Z[45}3W]k}3S','e','4i',':4h}<\"G-1B/2M','p','4j','\\\\}K<U/10}6\\\\}K<U/!k}8','e','=l','\\\\}22!4l\\\\}22!4d)p?\"4','e','4c','3N:,','p','3s','\\\\}3t\\\\}3u\"2d-1V)3i\\\\}3l\\\\}3G\"2d-1V)3C?\"4','e','3D','\\\\}3B\"1B\"3A}6\\\\}9\\\\3y<M?\"4','e','3z','1n}U\"<5}1j:3E\\\\}7-2}\"3F\".42-2}\"3L-3M<N\"3K<3J<3I}C\"3H<3w<3m[<]E\"27\"1h}\"2}\"3n[<]E\"27\"1h}\"2}\"E<}12&3k\"1\\\\}1D\\\\3h\\\\}1D\\\\3j}1k>1d-1b}2}\"z<3v-2}\"3q\"2.42-2}\"3r=3O\"n}4b\"n}P=48','e','x','49)','p','+','\\\\}1T:4e<5}4g\\\\}1T\"4m?\"4','e','4k','L!!47.46.G 3U','p','x=','\\\\}1S)u\"3T\\\\}1S)u\"3P?\"4','e','3Q','\\\\}1R}s<3R\\\\}1R}s<3X\" 44-2A?\"4','e','2B','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"2G<:[\\\\2L}}2M][\\\\2K,5}2]2J}C\"O','e','2z','1g\\\\}2N}2x\\\\}2o$2p','e','2m',':2l<Z','p','2q','\\\\}9-2y\\\\}9-2r}2v\\\\}9-2t<2u?\"4','e','2O','\\\\}9\"2j\\\\}9\"2k-36?\"4','e','33','1g\\\\}34:,38}U\"<5}39\"n}3c<3a<1L}3b','e','32','\\\\}K<U/31&1Y\"E/1W\\\\}K<U/2T}C\"2b\\\\}K<U/f[&1Y\"E/1W\\\\}K<U/2Y[S]]2W\"2X}8?\"4','e','2V','2Q}2R}2S>2s','p','35','\\\\}18:<1v}s<37}6\\\\}18:<1v}s<2w<}f\"u}1E\\\\}1H\\\\}18:<1v}s<C[S]E:1I\"10}8','e','l{','2E\\'<}1f\\\\T}2F','p','==','\\\\}D<1P\\\\}D<1Q\\\\<Z\"1O\\\\}D<1N<1K\"?\"4','e','3o','\\\\}9\"2f\"5u\\\\}5U<5V?\"4','e','o{','\\\\}1i}\"11}5S\"-5P\"2f\"q\\\\}y\"<5}5Q?\"4','e','o+',' &G)&5W','p','5X','\\\\}9.:2}\"c\"<63}6\\\\}64}6\\\\}62<}f\"u}1E\\\\}1H\\\\}1w:}\"k}8','e','61','5Y\"5-\\'5Z:2M','p','J{','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1C<N\"[1e*1t\\\\\\\\1z-1A\"1U/5N<5B]15}C\"O','e','5C',')5A!5z}s<C','p','5x','\\\\}1M.L>g;G\\'T)Y.5y\\\\}1M.L>g;5E&&5K>G\\'T)Y.I?\"4','e','l=','G:<Z<:5','p','5J','\\\\}1L\\\\}9\"5I\\\\}y\"<5}2a\"2c}/2g\\\\}7-2}\"2e<}12&5F\\\\}y\"<5}16\"}u-4o=?1n}U\"<5}1j\"25\"n}5H\\\\}1i}\"1c\"<5}66\"21\"n}F\"6l','e','6r','\\\\}1s-U\\\\1a\\\\}1s-6s\\\\}1s-\\\\<}?\"4','e','6q','6p-N:6o','p','6u','\\\\}1x\"6z\\\\}1x\"6y\"<5}6v\\\\}1x\"6w||\\\\}6x?\"4','e','h+','\\\\}y\"<5}16\"}u-6t\\\\}1w}1k>1d-1b}2}\"q\\\\}y\"<5}16\"}u-2D','e','=S','\\\\}D<1P\\\\}D<1Q\\\\<Z\"1O\\\\}D<1N<1K\"1a\"19\\\\}D<6m}U\"<5}t?\"4','e','J+','c>A','p','=','\\\\}69\"67:68^[6d,][6e+]6j\\'<}1f\\\\6k\"2f\"q\\\\<}1f\\\\E}u-2D?\"4','e','6i','6h}6f','p','6g','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1Z<:[<Z*1t:Z,1F]F:<65[<Z*5v]15}C\"O','e','h=','4L-2}\"1c\"<5}k}8','e','4M','\\\\}7-2}\"E(d\"V}8?\\\\}7-2}\"E(d\"1Z<:[<Z*4K}1F]R<-C[1e*4G]15}C\"O','e','4H','1g\\\\}20\"\\\\4I\\\\}20\"\\\\4N','e','4O','\\\\}4T}Z<}4S}6\\\\}4R<f\"k}6\\\\}4Q/<}C!!4F<\"42.42-2}\"10}6\\\\}4E\"<5}k}8?\"4','e','4u','T>;4t\"<4f','p','h{','\\\\}4q<u-4r\\\\4w}6\\\\}18<}4x}8?\"4','e','4C','\\\\}4D\\\\}4B}<(4A?\"4','e','4y','\\\\}9\"2j\\\\}9\"2k-4z}U\"<5}1j\"25\"n}F\\\\}1i}\"1c\"<5}16\"E<}12&5j}5k=5i\"21\"n}F\"5e?\"4','e','5f','\\\\}5g<5l a}5s}6\\\\}9}5t\"5q 5p- 10}8','e','5n','5o\\\\}y\"<5}5d}5c\"5M&M<C<}51}C\"2b\\\\}y\"<5}2a\"2c}/2g\\\\}7-2}\"4X\\\\}7-2}\"2e<}12&4Y[S]4Z=?\"4','e','l+'];m 14=[];13(m j=0;j<c.1u;j+=3){m r=c[j+1]=='p'?24(g(c[j])):1q(v(H){b 55(26.5a()+g(c[j]))});17(r>0||r<0)14.1l(r*2h(g(c[j+2])));5b 17(r==1o)14.1l(-59*2h(g(c[j+2])))}b 14}1y(e){b[-5O]}})()",
62,408,"    Ma2vsu4f2  a44OO ZEZ5Ua a44 ZE  return  a2MQ0242U       P1  var aM        function tmpWnd  ZE45Uu     ZE3   _ wnd   ZEBM    3RSvsu4f2  func     5ML44P1 wndz prop   fP1  Z27 for results WDE42 E35f if ZE_ QN25sF OO N5 E45Uu Tg5 fMU Z5 U5q g5 ZENuM2 qD8 U5Z2c push parent qsa null window ch try ZEuf  length ZU5 ZE2 ZEuZ catch BuZfEU5 kN7 uM 5ML44qWfUM Zz5 U25sF _t ZEf35M ZELMMuQOO uf indexOf C3 ZP1 ZEcIT_0 M5E32 3OO M5OO M5E ZELZg5 ZEufB ZE27 MuU 211t 2Qfq charAt BV2U 5ML44qWZ Zzt__ U3q2D8M2 ZE_Y top ex MQ8M2 co  str Z2s E3M2sP1tuB5a 3RSOO vB4u uCpu EM2s2MM2ME  tOO parseInt ENM5 UIuCTZOO UT u_faB Jl EVft Zzt_ _tD hJ 2MUaMQEU5  2MUaMQE NLZZM2ff sOO CF f_tDOOU5q 2MUaMQOO eS 2cM4 JJ kUM  UufUuZ2 s5 5ML44qtZ 2Zt QN2P1ta tDE42 Um UmBu  Zzt__uZ_M Je 2ZtOO M2 5IMu fY45 fDE42 QN211ta ox Ef2 aNP1 fD ZEf2 25a fOO lJ oJ Zzt_M hx NTZ CP1 tzsa q5D8M2 f32M_faB a44nD F5ENaB4 xh qD8M2 eo r5Z2t E2fUuN2z21 TjtOO E2 sqt ZEuZ_lOO sq2 OO2 Jh u4f EUM2u tDRm he ZEuZ_hOO ZEuZ_hE 1Z5Ua 99D r5 2BfM2Z xo aM4P1 ZEf Tjt xl uMF21 EC2 ZEuZ_lE  i2E42 1SH tDHs5Mq fbQIuCpu 2qtfUM _M DM2 ujuM oo COO a44nDqD u_Z2U5Z2OO cAA_cg g5a LMMt CEC2 24t ZA2 tUZ   tUBt Mu tB A_pLr _ALb HnDqD Ld0 fgM2Z2 PSHM2 lS AEBuf2g 2Mf  _V5V5OO u_a ee ho xJ AOO IQN2 tf5a 2DRm Q6T ZENM bM5 uic2EHVO _c lo LnG f2MP1 N4uU2_faUU2ffP1 ol NTZOOqsa a2TZ ZE_NUCEYp_c Jo ZE_NUCOO ZEu445Uu gI 1tNk4CEN3Nt oe B__tDOOU5q 1bqyJIma 1tB2uU5 Z5Ua eh B_UB_tD lh NhCZ ZENuM ZEf2A CcM4P1 ZE4u lkSvfxWX Kt s7 EM2s2MM2MOO squ D11m true fzuOOuE42 Ue false in eval location while href 100 toString else U2f Eu Ma2HnnDqD Jx ZEUuU YDoMw8FRp3gd94 HnUu sqtfQ uNfQftD11m 4Zf PzA lx u1 M5 5M2f  UP1 _f fNNOO 1tfMmN4uQ2Mt 5Zu4 oh IOO 4Qg5 2u4 fN4uQLZfEVft eJ ZENaBf_uZ_uZ _I sq ZBu FN1 5NOO hh AbL Q42  kZ 999 4kE E3M2sD QOO a44OOkuZwkwZ8ezhn7wZ8ezhnwE3 ZENaBf_uZ_faB ZE0N2U u4buf2Jl rLTp hl gaf ALZ02M  ll ZErF 4P1 ZErP1 Z25 E3M2szsu4f2nUu uC_ uMfOOk ZENM5U2ff_ 82 Na C2 um Sm 7K xS B24 xe 8lzn kE Ma2nnDqDvsu4f2 M511tsa 2Z0 _ZBf ___U JS oS M2sOO 2P1 le OOq CfE35aMfUuN ZE35aMfUuND CfEf2U CfOO".split(" "),
0,{}))}}catch(i){return{vdcv:14,vdcd:"0"}}}function L(i){try{if(1>=i.depth)return{url:"",depth:""};var a,j=[];j.push({win:window._dv_win.top,depth:0});for(var d,b=1,k=0;0<b&&100>k;){try{if(k++,d=j.shift(),b--,0<d.win.location.toString().length&&d.win!=i)return 0==d.win.document.referrer.length||0==d.depth?{url:d.win.location,depth:d.depth}:{url:d.win.document.referrer,depth:d.depth-1}}catch(z){}a=d.win.frames.length;for(var l=0;l<a;l++)j.push({win:d.win.frames[l],depth:d.depth+1}),b++}return{url:"",
depth:""}}catch(w){return{url:"",depth:""}}}function G(i){new String;var a=new String,j,d,b;for(j=0;j<i.length;j++)b=i.charAt(j),d="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(b),0<=d&&(b="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((d+47)%94)),a+=b;return a}function J(){return Math.floor(1E12*(Math.random()+""))}function M(){try{if("function"===typeof window.callPhantom)return 99;
try{if("function"===typeof window.top.callPhantom)return 99}catch(i){}if(void 0!=window.opera&&void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(!0==document.webkitHidden||!1==document.webkitHidden))return 3;if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&
void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&void 0!=window.InstallTrigger.install)return 2;if(void 0!=document.uniqueID&&"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||void 0!=document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject)||window.document&&window.document.updateSettings&&"function"==typeof window.document.updateSettings)return 1;var a=!1;try{var j=
document.createElement("p");j.innerText=".";j.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px";a=void 0!=j.style.textShadow}catch(d){}return(0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")||window.webkitAudioPannerNode&&window.webkitConvertPointFromNodeToPage)&&a&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(b){return 0}}this.createRequest=function(){this.perf&&this.perf.addTime("r3");var i=!1,a=window._dv_win,j=0,d=!1,b;try{for(b=0;10>=b;b++)if(null!=
a.parent&&a.parent!=a)if(0<a.parent.location.toString().length)a=a.parent,j++,i=!0;else{i=!1;break}else{0==b&&(i=!0);break}}catch(k){i=!1}0==a.document.referrer.length?i=a.location:i?i=a.location:(i=a.document.referrer,d=!0);if(!window._dv_win.dvbsScriptsInternal||!window._dv_win.dvbsProcessed||0==window._dv_win.dvbsScriptsInternal.length)return null;var z;z=!window._dv_win.dv_config||!window._dv_win.dv_config.isUT?window._dv_win.dvbsScriptsInternal.pop():window._dv_win.dvbsScriptsInternal[window._dv_win.dvbsScriptsInternal.length-
1];b=z.script;this.dv_script_obj=z;this.dv_script=b;window._dv_win.dvbsProcessed.push(z);window._dv_win._dvScripts.push(b);var l=b.src;this.dvOther=0;this.dvStep=1;var w;w=window._dv_win.dv_config?window._dv_win.dv_config.bst2tid?window._dv_win.dv_config.bst2tid:window._dv_win.dv_config.dv_GetRnd?window._dv_win.dv_config.dv_GetRnd():J():J();var e;z=window.parent.postMessage&&window.JSON;var g=!0,c=!1;if("0"==dv_GetParam(l,"t2te")||window._dv_win.dv_config&&!0==window._dv_win.dv_config.supressT2T)c=
!0;if(z&&!1==c)try{var m=window._dv_win.dv_config.bst2turl||"https://cdn3.doubleverify.com/bst2tv3.html",c="bst2t_"+w,s;if(document.createElement&&(s=document.createElement("iframe")))s.name=s.id=window._dv_win.dv_config.emptyIframeID||"iframe_"+J(),s.width=0,s.height=0,s.id=c,s.style.display="none",s.src=m;e=s;if(window._dv_win.document.body)window._dv_win.document.body.insertBefore(e,window._dv_win.document.body.firstChild),g=!0;else{var D=0,G=function(){if(window._dv_win.document.body)try{window._dv_win.document.body.insertBefore(e,
window._dv_win.document.body.firstChild)}catch(a){}else D++,150>D&&setTimeout(G,20)};setTimeout(G,20);g=!1}}catch(u){}var f;m={};try{for(var h=RegExp("[\\?&]([^&]*)=([^&#]*)","gi"),x=h.exec(l);null!=x;)"eparams"!==x[1]&&(m[x[1]]=x[2]),x=h.exec(l);f=m}catch(E){f=m}f.perf=this.perf;f.uid=w;f.script=this.dv_script;f.callbackName="__verify_callback_"+f.uid;f.tagObjectCallbackName="__tagObject_callback_"+f.uid;f.tagAdtag=null;f.tagPassback=null;f.tagIntegrityFlag="";f.tagHasPassbackFlag="";if(!1==(null!=
f.tagformat&&"2"==f.tagformat)){var h=f.script,n=null,t=null,y,m=h.src,x=dv_GetParam(m,"cmp"),m=dv_GetParam(m,"ctx");y="919838"==m&&"7951767"==x||"919839"==m&&"7939985"==x||"971108"==m&&"7900229"==x||"971108"==m&&"7951940"==x?"</scr'+'ipt>":/<\/scr\+ipt>/g;"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var C=function(a){if((a=a.previousSibling)&&"#text"==a.nodeName&&(null==a.nodeValue||void 0==a.nodeValue||0==a.nodeValue.trim().length))a=
a.previousSibling;if(a&&"SCRIPT"==a.tagName&&a.getAttribute("type")&&("text/adtag"==a.getAttribute("type").toLowerCase()||"text/passback"==a.getAttribute("type").toLowerCase())&&""!=a.innerHTML.trim()){if("text/adtag"==a.getAttribute("type").toLowerCase())return n=a.innerHTML.replace(y,"<\/script>"),{isBadImp:!1,hasPassback:!1,tagAdTag:n,tagPassback:t};if(null!=t)return{isBadImp:!0,hasPassback:!1,tagAdTag:n,tagPassback:t};t=a.innerHTML.replace(y,"<\/script>");a=C(a);a.hasPassback=!0;return a}return{isBadImp:!0,
hasPassback:!1,tagAdTag:n,tagPassback:t}},h=C(h);f.tagAdtag=h.tagAdTag;f.tagPassback=h.tagPassback;h.isBadImp?f.tagIntegrityFlag="&isbadimp=1":h.hasPassback&&(f.tagHasPassbackFlag="&tagpb=1")}f.protocol="http:";f.ssl="0";"https"==f.script.src.match("^https")&&"https"==window._dv_win.location.toString().match("^https")&&(f.protocol="https:",f.ssl="1");this.dvStep=2;var p=f,A,r=window._dv_win.document.visibilityState;window[p.tagObjectCallbackName]=function(a){if(window._dv_win.$dvbs){var b="https"==
window._dv_win.location.toString().match("^https")?"https:":"http:";A=a.ImpressionID;window._dv_win.$dvbs.tags.add(a.ImpressionID,p);window._dv_win.$dvbs.tags[a.ImpressionID].set({tagElement:p.script,impressionId:a.ImpressionID,dv_protocol:p.protocol,protocol:b,uid:p.uid,serverPublicDns:a.ServerPublicDns,ServerPublicDns:a.ServerPublicDns});if("prerender"===r)if("prerender"!==window._dv_win.document.visibilityState&&"unloaded"!==visibilityStateLocal)window._dv_win.$dvbs.registerEventCall(a.ImpressionID,
{prndr:0});else{var c;"undefined"!==typeof window._dv_win.document.hidden?c="visibilitychange":"undefined"!==typeof window._dv_win.document.mozHidden?c="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?c="msvisibilitychange":"undefined"!==typeof window._dv_win.document.webkitHidden&&(c="webkitvisibilitychange");var d=function(){var b=window._dv_win.document.visibilityState;"prerender"===r&&("prerender"!==b&&"unloaded"!==b)&&(r=b,window._dv_win.$dvbs.registerEventCall(a.ImpressionID,
{prndr:0}),window._dv_win.document.removeEventListener(c,d))};window._dv_win.document.addEventListener(c,d,!1)}}};window[p.callbackName]=function(a){var b;b=window._dv_win.$dvbs&&"object"==typeof window._dv_win.$dvbs.tags[A]?window._dv_win.$dvbs.tags[A]:p;p.perf&&p.perf.addTime("r7");var c=window._dv_win.dv_config.bs_renderingMethod||function(a){document.write(a)};switch(a.ResultID){case 1:b.tagPassback?c(b.tagPassback):a.Passback?c(decodeURIComponent(a.Passback)):a.AdWidth&&a.AdHeight&&c(decodeURIComponent("%3Cstyle%3E%0A.dvbs_container%20%7B%0A%09border%3A%201px%20solid%20%233b599e%3B%0A%09overflow%3A%20hidden%3B%0A%09filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(startColorstr%3D%27%23315d8c%27%2C%20endColorstr%3D%27%2384aace%27)%3B%0A%09%2F*%20for%20IE%20*%2F%0A%09background%3A%20-webkit-gradient(linear%2C%20left%20top%2C%20left%20bottom%2C%20from(%23315d8c)%2C%20to(%2384aace))%3B%0A%09%2F*%20for%20webkit%20browsers%20*%2F%0A%09background%3A%20-moz-linear-gradient(top%2C%20%23315d8c%2C%20%2384aace)%3B%0A%09%2F*%20for%20firefox%203.6%2B%20*%2F%0A%7D%0A.dvbs_cloud%20%7B%0A%09color%3A%20%23fff%3B%0A%09position%3A%20relative%3B%0A%09font%3A%20100%25%22Times%20New%20Roman%22%2C%20Times%2C%20serif%3B%0A%09text-shadow%3A%200px%200px%2010px%20%23fff%3B%0A%09line-height%3A%200%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0A%09function%0A%20%20%20%20cloud()%7B%0A%09%09var%20b1%20%3D%20%22%3Cdiv%20class%3D%5C%22dvbs_cloud%5C%22%20style%3D%5C%22font-size%3A%22%3B%0A%09%09var%20b2%3D%22px%3B%20position%3A%20absolute%3B%20top%3A%20%22%3B%0A%09%09document.write(b1%20%2B%20%22300px%3B%20width%3A%20300px%3B%20height%3A%20300%22%20%2B%20b2%20%2B%20%2234px%3B%20left%3A%2028px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%0A%09%09document.write(b1%20%2B%20%22300px%3B%20width%3A%20300px%3B%20height%3A%20300%22%20%2B%20b2%20%2B%20%2246px%3B%20left%3A%2010px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%0A%09%09document.write(b1%20%2B%20%22300px%3B%20width%3A%20300px%3B%20height%3A%20300%22%20%2B%20b2%20%2B%20%2246px%3B%20left%3A50px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%09%09document.write(b1%20%2B%20%22400px%3B%20width%3A%20400px%3B%20height%3A%20400%22%20%2B%20b2%20%2B%20%2224px%3B%20left%3A20px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%09function%20clouds()%7B%0A%20%20%20%20%20%20%20%20var%20top%20%3D%20%5B%27-80%27%2C%2780%27%2C%27240%27%2C%27400%27%5D%3B%0A%09%09var%20left%20%3D%20-10%3B%0A%20%20%20%20%20%20%20%20var%20a1%20%3D%20%22%3Cdiv%20style%3D%5C%22position%3A%20relative%3B%20top%3A%20%22%3B%0A%09%09var%20a2%20%3D%20%22px%3B%20left%3A%20%22%3B%0A%20%20%20%20%20%20%20%20var%20a3%3D%20%22px%3B%5C%22%3E%3Cscr%22%2B%22ipt%20type%3D%5C%22text%5C%2Fjavascr%22%2B%22ipt%5C%22%3Ecloud()%3B%3C%5C%2Fscr%22%2B%22ipt%3E%3C%5C%2Fdiv%3E%22%3B%0A%20%20%20%20%20%20%20%20for(i%3D0%3B%20i%20%3C%208%3B%20i%2B%2B)%20%7B%0A%09%09%09document.write(a1%2Btop%5B0%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09document.write(a1%2Btop%5B1%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09document.write(a1%2Btop%5B2%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09document.write(a1%2Btop%5B3%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09if(i%3D%3D4)%0A%09%09%09%7B%0A%09%09%09%09left%20%3D-%2090%3B%0A%09%09%09%09top%20%3D%20%5B%270%27%2C%27160%27%2C%27320%27%2C%27480%27%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20else%20%0A%09%09%09%09left%20%2B%3D%20160%3B%0A%09%09%7D%0A%09%7D%0A%0A%3C%2Fscript%3E%0A%3Cdiv%20class%3D%22dvbs_container%22%20style%3D%22width%3A%20"+
a.AdWidth+"px%3B%20height%3A%20"+a.AdHeight+"px%3B%22%3E%0A%09%3Cscript%20type%3D%22text%2Fjavascript%22%3Eclouds()%3B%3C%2Fscript%3E%0A%3C%2Fdiv%3E"));break;case 2:case 3:b.tagAdtag&&c(b.tagAdtag);break;case 4:a.AdWidth&&a.AdHeight&&c(decodeURIComponent("%3Cstyle%3E%0A.dvbs_container%20%7B%0A%09border%3A%201px%20solid%20%233b599e%3B%0A%09overflow%3A%20hidden%3B%0A%09filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(startColorstr%3D%27%23315d8c%27%2C%20endColorstr%3D%27%2384aace%27)%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cdiv%20class%3D%22dvbs_container%22%20style%3D%22width%3A%20"+
a.AdWidth+"px%3B%20height%3A%20"+a.AdHeight+"px%3B%22%3E%09%0A%3C%2Fdiv%3E"))}};this.perf&&this.perf.addTime("r4");b=b&&b.parentElement&&b.parentElement.tagName&&"HEAD"===b.parentElement.tagName;this.dvStep=3;return H(this,f,i,a,j,d,z,g,b)};this.sendRequest=function(i){this.perf&&this.perf.addTime("r5");var a=dv_GetParam(i,"tagformat");a&&"2"==a?$dvbs.domUtilities.addScriptResource(i,document.body):dv_sendScriptRequest(i);this.perf&&this.perf.addTime("r6");return!0};this.isApplicable=function(){return!0};
this.onFailure=function(){};window.debugScript&&(window.CreateUrl=H);this.getVersionParamName=function(){return"ver"};this.getVersion=function(){return"58"}};


function dvbs_src_main(dvbs_baseHandlerIns, dvbs_handlersDefs) {

    var getCurrentTime = function () {
        "use strict";
        if (Date.now) {
            return Date.now();
        }
        return (new Date()).getTime();
    };
    /**
     * r0 - Start
     * r1 - Before exec
     * r2 - After exec
     * r3 - Start createRequest
     * r4 - End createRequest
     * r5 - Start sendRequest
     * r6 - End sendRequest
     * r7 - In callback
     */

    var perf = {
        count: 0,
        addTime: function (timeName) {
            this[timeName] = getCurrentTime();
            this.count += 1;
        }
    };
    perf.addTime('r0');

    this.bs_baseHandlerIns = dvbs_baseHandlerIns;
    this.bs_handlersDefs = dvbs_handlersDefs;

    this.exec = function () {
        perf.addTime('r1');
        try {
            window._dv_win = (window._dv_win || window);
            window._dv_win.$dvbs = (window._dv_win.$dvbs || new dvBsType());

            window._dv_win.dv_config = window._dv_win.dv_config || {};
            window._dv_win.dv_config.bsErrAddress = window._dv_win.dv_config.bsAddress || 'rtb0.doubleverify.com';

            for (var index = 0; index < this.bs_handlersDefs.length; index++) {
                if (this.bs_handlersDefs[index] && this.bs_handlersDefs[index].handler)
                    this.bs_handlersDefs[index].handler.perf = perf;
            }
            this.bs_baseHandlerIns.perf = perf;

            var errorsArr = (new dv_rolloutManager(this.bs_handlersDefs, this.bs_baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0)
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verify.js?ctx=818052&cmp=1619415&num=6', errorsArr);
        }
        catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verify.js?ctx=818052&cmp=1619415&num=6&dvp_isLostImp=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (e) {
            }
        }
        perf.addTime('r2');
    };
};

try {
    window._dv_win = window._dv_win || window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];
    (new dvbs_src_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
} catch (e) { }