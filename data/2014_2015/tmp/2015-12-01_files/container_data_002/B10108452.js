document.write('\x3cscript\x3e(function() {(function(){var h\x3dthis,k\x3dfunction(a){var b\x3dtypeof a;if(\x22object\x22\x3d\x3db)if(a){if(a instanceof Array)return\x22array\x22;if(a instanceof Object)return b;var c\x3dObject.prototype.toString.call(a);if(\x22[object Window]\x22\x3d\x3dc)return\x22object\x22;if(\x22[object Array]\x22\x3d\x3dc||\x22number\x22\x3d\x3dtypeof a.length\x26\x26\x22undefined\x22!\x3dtypeof a.splice\x26\x26\x22undefined\x22!\x3dtypeof a.propertyIsEnumerable\x26\x26!a.propertyIsEnumerable(\x22splice\x22))return\x22array\x22;if(\x22[object Function]\x22\x3d\x3dc||\x22undefined\x22!\x3dtypeof a.call\x26\x26\x22undefined\x22!\x3dtypeof a.propertyIsEnumerable\x26\x26!a.propertyIsEnumerable(\x22call\x22))return\x22function\x22}else return\x22null\x22;else if(\x22function\x22\x3d\x3db\x26\x26\x22undefined\x22\x3d\x3dtypeof a.call)return\x22object\x22;return b},l\x3dfunction(a,b){var c\x3dArray.prototype.slice.call(arguments,1);return function(){var b\x3dc.slice();b.push.apply(b,arguments);return a.apply(this,b)}};var m\x3dfunction(a,b){for(var c in a)b.call(void 0,a[c],c,a)};var n\x3dfunction(a){a\x3da?a.toLowerCase():\x22\x22;switch(a){case \x22normal\x22:return\x22normal\x22;case \x22lightbox\x22:return\x22lightbox\x22;case \x22push_down\x22:return\x22push_down\x22}return null};var p\x3d{i:\x22ad_container_id\x22,A:\x22hideObjects\x22,X:\x22mtfTop\x22,W:\x22mtfLeft\x22,ca:\x22zindex\x22,m:\x22mtfDuration\x22,aa:\x22wmode\x22,Z:\x22preferFlash\x22,s:\x22as_kw\x22,u:\x22as_lat\x22,v:\x22as_lng\x22,B:\x22mtfIFPath\x22,o:\x22expansionMode\x22,U:\x22top_container\x22,T:\x22mtfTopFloat\x22,S:\x22mtfTopDuration\x22,V:\x22mtfTopWmode\x22,P:\x22right_container\x22,O:\x22mtfRightFloat\x22,N:\x22mtfRightDuration\x22,R:\x22mtfRightWmode\x22,H:\x22bottom_container\x22,G:\x22mtfBottomFloat\x22,F:\x22mtfBottomDuration\x22,I:\x22mtfBottomWmode\x22,L:\x22left_container\x22,K:\x22mtfLeftFloat\x22,J:\x22mtfLeftDuration\x22,M:\x22mtfLeftWmode\x22,$:\x22mtfRenderFloatInplace\x22,ba:\x22tryToWriteHtmlInline\x22,j:\x22debugjs\x22,C:\x22dcapp\x22,g:\x22breakoutiframe\x22,D:\x22inMobileAdSdk\x22},r\x3dfunction(a){m(a,function(b,c){if(c.toLowerCase()in q){var e\x3dq[c.toLowerCase()];c in a\x26\x26delete a[c];a[e]\x3db}})},q\x3dfunction(){var a\x3d{};m(p,function(b){a[b.toLowerCase()]\x3db});return a}();var u\x3dfunction(a){this.a\x3da;var b;a:{for(b in a.displayConfigParameters){b:if(a\x3dt,\x22string\x22\x3d\x3dtypeof a)a\x3d\x22string\x22\x3d\x3dtypeof b\x26\x261\x3d\x3db.length?a.indexOf(b,0):-1;else{for(var c\x3d0;c\x3ca.length;c++)if(c in a\x26\x26a[c]\x3d\x3d\x3db){a\x3dc;break b}a\x3d-1}if(!(0\x3c\x3da)){b\x3d!0;break a}}b\x3d!1}this.f\x3db},t\x3d[\x22ad_container_id\x22],v\x3dfunction(a){return a.f?a.a.displayConfigParameters:a.a.creativeParameters},w\x3dfunction(a,b){for(var c\x3d0;c\x3ca.a.primaryFiles.length;++c)if(a.a.primaryFiles[c].type\x3d\x3db)return!0;return!1};var x\x3d{pattern:/rendering_lib_((?:[0-9_]+)|(?:latest))\\.js$/,c:\x22rendering_lib_db_$1.js\x22},y\x3d{pattern:/\\/[a-z_0-9]+_rendering_lib/,c:\x22/iframe_buster\x22},z\x3d{pattern:/(.*\\/)(.*_)rendering_lib_((?:[0-9_]+)|(?:latest))\\.js$/,c:\x22$1inapp_html_inpage_rendering_lib_$3.js\x22},A\x3d{pattern:/\\/[0-9]+\\/[a-z_0-9]+rendering_lib.+$/,c:\x22/ads/studio/cached_libs/modernizr_2.8.3_ec185bb44fe5e6bf7455d6e8ef37ed0e_no-classes.js\x22},E\x3dfunction(a){var b\x3dv(a),c\x3da.a.renderingLibraryData,e\x3dc.renderingLibrary,d\x3dc.version;if(d\x3d!/express|image_gallery|dfa7banner|inapp/.test(e)\x26\x26(\x22latest\x22\x3d\x3dd||0\x3c\x3dB(d,\x22200_74\x22))){if(d\x3d!w(a,\x22FLASH\x22)){a:{for(d\x3d0;d\x3ca.a.primaryFiles.length;++d){var f\x3da.a.primaryFiles[d].expandingDisplayProperties;if(f\x26\x26\x22lightbox\x22\x3d\x3dn(f.expansionMode)){d\x3d!0;break a}}d\x3d!1}d\x3d!d}d\x3dd\x26\x26null!\x3dwindow.mraid}d\x26\x26(e\x3de.replace(z.pattern,z.c));\x22true\x22\x3d\x3db.debugjs\x26\x26(e\x3de.replace(x.pattern,x.c));(b\x3dh.self\x3d\x3dh.top)||(b\x3dwindow.Y\x26\x26window.Y.SandBox\x26\x26window.Y.SandBox.vendor,d\x3dwindow.$sf\x26\x26window.$sf.ext,f\x3dwindow.$WLXRmAd,b\x3d!!(window.IN_ADSENSE_IFRAME||b||d||f));if(!b){a:if(b\x3dv(a).breakoutiframe)b\x3d!!b\x26\x26\x22true\x22\x3d\x3db.toLowerCase();else{b\x3da.a.primaryFiles;for(d\x3d0;d\x3cb.length;d++){var f\x3db[d].renderAs,g\x3d0\x3d\x3d(parseInt(b[d].width,10)||0)\x26\x260\x3d\x3d(parseInt(b[d].height,10)||0);if(\x22EXPANDABLE\x22\x3d\x3df||\x22FLOATING\x22\x3d\x3df\x26\x26!g){b\x3d!0;break a}}b\x3d!1}b\x3d!b}if(b||a.a.previewMode){a:{a\x3de;b\x3dC();for(d\x3d0;d\x3cb.renderingLibraries.length;d++)if(f\x3db.renderingLibraries[d],f.url\x3d\x3da\x26\x26f.bootstrapFunction){a\x3df;break a}a\x3dnull}a?a.bootstrapFunction():(a\x3dC(),D(e,!1,void 0,void 0,void 0,!0),a.renderingLibraries.push({version:c.version,url:e,loading:!0,bootstrapFunction:null}))}else c\x3de.replace(y.pattern,y.c),D(c,!0)},B\x3dfunction(a,b){for(var c\x3dF(a),e\x3dF(b),d\x3dMath.min(c.length,e.length),f\x3d0;f\x3cd;f++)if(c[f]!\x3de[f])return c[f]-e[f];return c.length-e.length},F\x3dfunction(a){a\x3da.split(\x22_\x22);for(var b\x3d[],c\x3d0;c\x3ca.length;c++)b.push(parseInt(a[c],10));return b},D\x3dfunction(a,b,c,e,d,f){var g\x3ddocument.createElement(\x22script\x22);g.src\x3da;g.type\x3dc?c:\x22text/javascript\x22;g.async\x3d!!b;f\x26\x26(g.crossOrigin\x3d\x22anonymous\x22);e\x26\x26(g.onload\x3de);d\x26\x26(g.onerror\x3dd);a\x3ddocument.getElementsByTagName(\x22head\x22);(a\x26\x260!\x3da.length?a[0]:document.documentElement).appendChild(g)},C\x3dfunction(){return window.dclkStudioV3\x3dwindow.dclkStudioV3||{creatives:[],renderingLibraries:[],creativeCount:1}},G\x3dfunction(a){try{if(null!\x3d(a[\x22cps-top-iframe-beacon\x22]?a[\x22cps-top-iframe-beacon\x22]:null))return!0}catch(b){}return a\x3d\x3da.parent?!1:G(a.parent)},H\x3dfunction(a){if(null!\x3da){r(a.creativeParameters);if(null!\x3da.html5Features)for(var b\x3d0;b\x3ca.html5Features.length;++b)\x22CSS_ANIMATIONS\x22\x3d\x3da.html5Features[b]\x26\x26(a.html5Features[b]\x3d\x22Modernizr.cssanimations\x22);!a.previewMode\x26\x26G(h)\x26\x26(a.previewMode\x3d!0);a\x3dnew u(a);b\x3dC();b.creatives.push(a.a);var c\x3da.a.creativeParameters;c.creative_unique_id\x3dc.cid+\x22_\x22+b.creativeCount++;b\x3dv(a).ad_container_id;a:if((c\x3dv(a).mtfRenderFloatInplace)\x26\x26\x22true\x22\x3d\x3dc.toLowerCase())c\x3d!0;else{for(var c\x3da.a.primaryFiles,e\x3d0;e\x3cc.length;e++){var d\x3dc[e].renderAs;if(\x22EXPANDABLE\x22\x3d\x3dd||\x22BANNER\x22\x3d\x3dd){c\x3d!0;break a}}c\x3d!1}!c||b\x26\x26\x22\x22!\x3db||(b\x3d\x22dclk-studio-creative_\x22+(new Date).getTime(),document.write([\x27\x3cdiv id\x3d\x22\x27,b,\x27\x22\x3e\x3c/div\x3e\x27].join(\x22\x22)),c\x3da.a,c.creativeParameters.ad_container_id\x3db,c.creativeParameters.generate_ad_slot\x3d\x22true\x22,null\x3d\x3dc.displayConfigParameters\x26\x26(c.displayConfigParameters\x3d{}),c.displayConfigParameters.ad_container_id\x3db);c\x3da.a;b\x3dc.renderingLibraryData;e\x3db.version;if(w(a,\x22HTML5\x22)\x26\x26!(\x22latest\x22\x3d\x3de||0\x3c\x3dB(e,\x22200_108\x22))\x26\x26(c\x3dc.html5Features,!(\x22Modernizr\x22in h)\x26\x26\x22array\x22\x3d\x3dk(c)\x26\x260\x3cc.length)){e\x3d!1;for(d\x3d0;d\x3cc.length;d++)if(\x22svgFilters\x22!\x3dc[d]\x26\x26\x22svgFeImage\x22!\x3dc[d]){e\x3d!0;break}e\x26\x26D(b.renderingLibrary.replace(A.pattern,A.c),!1)}b\x3dv(a);c\x3db.inMobileAdSdk;\x221\x22\x3d\x3db.dcapp||\x221\x22\x3d\x3dc||/Android ([2-3]|4\\.[0-3])/.test(navigator.userAgent)?(b\x3dl(E,a),window.mraid?(D(\x22mraid.js\x22,!1,\x22text/x-do-not-download\x22,null,null),E(a)):D(\x22mraid.js\x22,!1,\x22text/javascript\x22,b,b)):E(a)}},I\x3d[\x22studio\x22,\x22rendering\x22,\x22BowResponse\x22,\x22processCreativeData\x22],J\x3dh;I[0]in J||!J.execScript||J.execScript(\x22var \x22+I[0]);for(var K;I.length\x26\x26(K\x3dI.shift());){var L;if(L\x3d!I.length)L\x3dvoid 0!\x3d\x3dH;L?J[K]\x3dH:J[K]?J\x3dJ[K]:J\x3dJ[K]\x3d{}};})();var creativeData \x3d {width: \x27300\x27,height: \x27250\x27,slotWidth: \x27300\x27,slotHeight: \x27250\x27,renderingLibraryData: {version: \x27200_150\x27,renderingLibrary: \x27https://s0.2mdn.net/879366/express_html_inpage_rendering_lib_200_150.js\x27},impressionUrl: \x27\x27,eventTrackingBaseUrl: \x27https://ad.doubleclick.net/activity;src\\x3d3932036;pid\\x3d136109354;aid\\x3d309230732;ko\\x3d0;cid\\x3d73983296;rid\\x3d73862796;rv\\x3d3;\x27,customEventTrackingBaseUrl: \x27https://ad.doubleclick.net/activity;src\\x3d3932036;pid\\x3d136109354;aid\\x3d309230732;ko\\x3d0;cid\\x3d73983296;rid\\x3d73862796;rv\\x3d3;\x27,clickUrl: \x27https://adclick.g.doubleclick.net/pcs/click?xai\\x3dAKAOjsuVX9q7tNG-T2XHJCXSgH6Xd9932d7ZEQIqMfPkFZKK-nd6zZ2LJeVRQ65YYeq5Z-ahXuZxgc5HWrxdBhMN1QBp_cvPRGa6vYJFulgV6RIyOtjnDtNbCz2meDc9ImF72ZrzF9NQiQ\\x26sig\\x3dCg0ArKJSzJ9pPEaiVBxUEAE\\x26urlfix\\x3d1\\x26rm_eid\\x3d[rm_exit_id]\\x26adurl\\x3dhttp://insight.adsrvr.org/track/clk%3Fimp%3De1ddfc8e-713e-4e86-a750-266f5ec48cbc%26ag%3Dnf1t9ci%26crid%3Dtj3a5o40%26cf%3D%26fq%3D0%26td_s%3Dwww.basketball-reference.com%26rcats%3D%26mcat%3D%26mste%3D%26mfld%3D3%26mssi%3D%26mfsi%3Dapf6z6v1ah%26sv%3Dgoogle%26uhow%3D167%26agsa%3D%26rgco%3DUnited%2520States%26rgre%3DCalifornia%26rgme%3D807%26rgci%3DSan%2520Jose%26rgz%3D95126%26dt%3DPC%26osf%3DOSX%26os%3DOther%26br%3DFirefox%26svpid%3D1%26rlangs%3Den%26mlang%3D%26did%3D%26rcxt%3DOther%26tmpc%3D9.02%26vrtd%3D%26osi%3D%26osv%3D%26daid%3D%26dnr%3D0%26vpb%3D%26svsc%3D%26dur%3DChsKB3Q4ZXlsMHAiEAjBjbcBEgl0dGRjdXN0b20%253D%26crrelr%3D%26svscid%3D1%26r%3Dhttps://adclick.g.doubleclick.net/aclk%253Fsa%253Dl%2526ai%253DCUgi331wMWNKYO9jqiQO2mKqgCZmi8ZRGjpKgjlfAjbcBEAEgAGDJnvmGyKOgGYIBF2NhLXB1Yi01MzE5NDUzMzYwOTIzMjUzoAHahvPoA8gBCeACAKgDAaoE5wFP0OQbODPpQLTbc5KIWH_G1kiLMLXczdVGUkWSJzZCbyypbuKCKPrHiZsgQUy5DpB6GqVVwr3hz4xhiowFzPV0f5K5tz8tOh1EKaE1GuLnaizXENkXWCXMeEzRQGUvJS_eb_Vi2dN19iS3aYRoZEVSc-JTSRh9MtZPqxk8TP4ZgTgTEF51OVDvBjMbr8jk_IM-fqlGhO8gwIYnbcn8S8Y8hCWK7gM4Szdwpj9HbuJyWFDkpSLlBhY4mpRcscYdHo4s2StdJ5TFWPxldKB4mrEGki1MZpF5igAtfb2e6QzKNr7EMS0caPfgBAGABryxnIq6sezG9QGgBiGoB6a-G9gHANIIBQiAYRAB%2526num%253D1%2526sig%253DAOD64_1Iq0C-vmMTJQmIKHE3e8YXDyeFNA%2526client%253Dca-pub-5319453360923253%2526adurl%253D\x27,thirdPartyUrls: [],clickString: \x27BO32l4FwMWIuEK4TviQOjsobIDwAAAAAQATgB4AQCiAWk_OgEoAZH\x27,activeViewUrlPrefix: \x27\x27,activeViewMetadata: \x27ocy\\x3d1\\x26efp\\x3d1\\x26la\\x3d0\\x26\x27,dynamicData: \x27\x27,creativeParameters: {\x27CREATIVE_PARAMETER_ASSETS_DATA\x27: \x27{\\\\\\x221-FY16_NTU_QBC_BeInspired_SaveYourSpot_Jillian_300x250.jpg\\\\\\x22:\\\\\\x223932036/1-FY16_NTU_QBC_BeInspired_SaveYourSpot_Jillian_300x250.jpg\\\\\\x22,\\\\\\x221472691475878/FY16_NTU_QBC_BeInspired_RegisterNow_Jillian_300x250.html\\\\\\x22:\\\\\\x223932036/1472691475878/FY16_NTU_QBC_BeInspired_RegisterNow_Jillian_300x250.html\\\\\\x22}\x27, \x27CREATIVE_PARAMETER_VIDEO_ASSETS_DATA\x27: \x27[]\x27, \x27CREATIVE_PARAMETER_VIDEO_DATA\x27: \x27[]\x27, \x27CREATIVE_PARAMETER_LAYOUT_CONFIG\x27: \x27\x27, \x27sn\x27: \x27N5506.284566THETRADEDESK\x27, \x27sid\x27: \x272209113\x27, \x27aid\x27: \x27309230732\x27, \x27buy\x27: \x2710108452\x27, \x27cid\x27: \x2773983296\x27, \x27pid\x27: \x27136109354\x27, \x27rv\x27: \x273\x27, \x27adv\x27: \x273932036\x27, \x27exit_suffix\x27: \x27dclid\\x3d%edclid!\x27, \x27geo\x27: \x27ct\\x3dUS\\x26st\\x3dCA\\x26city\\x3d13315\\x26dma\\x3d197\\x26zp\\x3d95128\\x26bw\\x3d3\x27, \x27clickN\x27: \x271\x27, \x27crlt\x27: \x27*wKxJ)aD7H\x27, \x27prcl\x27: \x27s\x27, \x27sttr\x27: \x27233\x27, \x27xdt\x27: \x271\x27, \x27av_ad_key\x27: \x272034006177\x27, \x27displayHTML5\x27: \x27true\x27},previewMode: false,flashVersion: \x270\x27,html5Features: [\x27Modernizr.canvas\x27],translated_layout: false,primaryFiles: [{type: \x27IMAGE\x27,renderAs: \x27BACKUP_IMAGE\x27,width: \x27300\x27,height: \x27250\x27,url: \x27https://s0.2mdn.net/3932036/1-FY16_NTU_QBC_BeInspired_SaveYourSpot_Jillian_300x250.jpg\x27,hideFlashObjects: false,zIndex: \x27\x27,customCss: \x27\x27}, {type: \x27HTML5\x27,renderAs: \x27BANNER\x27,width: \x27300\x27,height: \x27250\x27,url: \x27https://s0.2mdn.net/3932036/1472691475878/FY16_NTU_QBC_BeInspired_RegisterNow_Jillian_300x250.html\x27,hideFlashObjects: false,zIndex: \x27\x27,customCss: \x27\x27}],standardEvents: [{name: \x27DISPLAY_TIMER\x27,reportingId: \x272\x27}, {name: \x27INTERACTION_TIMER\x27,reportingId: \x273\x27}, {name: \x27INTERACTIVE_IMPRESSION\x27,reportingId: \x274\x27}, {name: \x27FULL_SCREEN_VIDEO_PLAYS\x27,reportingId: \x275\x27}, {name: \x27FULL_SCREEN_VIDEO_COMPLETES\x27,reportingId: \x276\x27}, {name: \x27FULL_SCREEN_AVERAGE_VIEW_TIME\x27,reportingId: \x277\x27}, {name: \x27MANUAL_CLOSE\x27,reportingId: \x278\x27}, {name: \x27BACKUP_IMAGE_IMPRESSION\x27,reportingId: \x279\x27}, {name: \x27EXPAND_TIMER\x27,reportingId: \x2710\x27}, {name: \x27VIDEO_PLAY\x27,reportingId: \x2711\x27}, {name: \x27VIDEO_VIEW_TIMER\x27,reportingId: \x2712\x27}, {name: \x27VIDEO_COMPLETE\x27,reportingId: \x2713\x27}, {name: \x27VIDEO_INTERACTION\x27,reportingId: \x2714\x27}, {name: \x27VIDEO_PAUSE\x27,reportingId: \x2715\x27}, {name: \x27VIDEO_MUTE\x27,reportingId: \x2716\x27}, {name: \x27VIDEO_REPLAY\x27,reportingId: \x2717\x27}, {name: \x27VIDEO_MIDPOINT\x27,reportingId: \x2718\x27}, {name: \x27FULL_SCREEN_VIDEO\x27,reportingId: \x2719\x27}, {name: \x27VIDEO_STOP\x27,reportingId: \x2720\x27}, {name: \x27VIDEO_UNMUTE\x27,reportingId: \x27149645\x27}, {name: \x27FULL_SCREEN\x27,reportingId: \x27286263\x27}, {name: \x27DYNAMIC_CREATIVE_IMPRESSION\x27,reportingId: \x27536393\x27}, {name: \x27HTML5_CREATIVE_IMPRESSION\x27,reportingId: \x27871060\x27}, {name: \x27VIDEO_FIRST_QUARTILE\x27,reportingId: \x27960584\x27}, {name: \x27VIDEO_THIRD_QUARTILE\x27,reportingId: \x27960585\x27}],exitEvents: [{name: \x27clickTag\x27,reportingId: \x273548491\x27,destinationUrl: \x27https://quickbooksconnect.com/smallbusiness\x27,targetWindow: \x27_blank\x27,windowProperties: \x27\x27,backUpExit: false}, {name: \x27backup image click through url\x27,reportingId: \x273548489\x27,destinationUrl: \x27https://quickbooksconnect.com/smallbusiness\x27,targetWindow: \x27_blank\x27,windowProperties: \x27\x27,backUpExit: true}, {name: \x27clickTag1\x27,reportingId: \x273548490\x27,destinationUrl: \x27https://quickbooksconnect.com/smallbusiness\x27,targetWindow: \x27_blank\x27,windowProperties: \x27\x27,backUpExit: false}],timerEvents: [],counterEvents: []};try {studio.rendering.BowResponse.processCreativeData(creativeData);} catch (e) {/* ignore errors but don\x27t kill js execution. */}})();\x3c/script\x3e\x3cnoscript\x3e\x3ca target\x3d\x22_blank\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjsuVX9q7tNG-T2XHJCXSgH6Xd9932d7ZEQIqMfPkFZKK-nd6zZ2LJeVRQ65YYeq5Z-ahXuZxgc5HWrxdBhMN1QBp_cvPRGa6vYJFulgV6RIyOtjnDtNbCz2meDc9ImF72ZrzF9NQiQ\x26amp;sig\x3dCg0ArKJSzJ9pPEaiVBxUEAE\x26amp;urlfix\x3d1\x26amp;rm_eid\x3d3548489\x26amp;adurl\x3dhttp://insight.adsrvr.org/track/clk%3Fimp%3De1ddfc8e-713e-4e86-a750-266f5ec48cbc%26ag%3Dnf1t9ci%26crid%3Dtj3a5o40%26cf%3D%26fq%3D0%26td_s%3Dwww.basketball-reference.com%26rcats%3D%26mcat%3D%26mste%3D%26mfld%3D3%26mssi%3D%26mfsi%3Dapf6z6v1ah%26sv%3Dgoogle%26uhow%3D167%26agsa%3D%26rgco%3DUnited%2520States%26rgre%3DCalifornia%26rgme%3D807%26rgci%3DSan%2520Jose%26rgz%3D95126%26dt%3DPC%26osf%3DOSX%26os%3DOther%26br%3DFirefox%26svpid%3D1%26rlangs%3Den%26mlang%3D%26did%3D%26rcxt%3DOther%26tmpc%3D9.02%26vrtd%3D%26osi%3D%26osv%3D%26daid%3D%26dnr%3D0%26vpb%3D%26svsc%3D%26dur%3DChsKB3Q4ZXlsMHAiEAjBjbcBEgl0dGRjdXN0b20%253D%26crrelr%3D%26svscid%3D1%26r%3Dhttps://adclick.g.doubleclick.net/aclk%253Fsa%253Dl%2526ai%253DCUgi331wMWNKYO9jqiQO2mKqgCZmi8ZRGjpKgjlfAjbcBEAEgAGDJnvmGyKOgGYIBF2NhLXB1Yi01MzE5NDUzMzYwOTIzMjUzoAHahvPoA8gBCeACAKgDAaoE5wFP0OQbODPpQLTbc5KIWH_G1kiLMLXczdVGUkWSJzZCbyypbuKCKPrHiZsgQUy5DpB6GqVVwr3hz4xhiowFzPV0f5K5tz8tOh1EKaE1GuLnaizXENkXWCXMeEzRQGUvJS_eb_Vi2dN19iS3aYRoZEVSc-JTSRh9MtZPqxk8TP4ZgTgTEF51OVDvBjMbr8jk_IM-fqlGhO8gwIYnbcn8S8Y8hCWK7gM4Szdwpj9HbuJyWFDkpSLlBhY4mpRcscYdHo4s2StdJ5TFWPxldKB4mrEGki1MZpF5igAtfb2e6QzKNr7EMS0caPfgBAGABryxnIq6sezG9QGgBiGoB6a-G9gHANIIBQiAYRAB%2526num%253D1%2526sig%253DAOD64_1Iq0C-vmMTJQmIKHE3e8YXDyeFNA%2526client%253Dca-pub-5319453360923253%2526adurl%253Dhttps://quickbooksconnect.com/smallbusiness\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/3932036/1-FY16_NTU_QBC_BeInspired_SaveYourSpot_Jillian_300x250.jpg\x22 width\x3d\x22300\x22 height\x3d\x22250\x22 border\x3d\x220\x22 /\x3e\x3c/a\x3e\x3cimg width\x3d\x220px\x22 height\x3d\x220px\x22 style\x3d\x22visibility:hidden\x22 border\x3d\x220\x22 src\x3d\x22\x22 /\x3e\x3c/noscript\x3e');