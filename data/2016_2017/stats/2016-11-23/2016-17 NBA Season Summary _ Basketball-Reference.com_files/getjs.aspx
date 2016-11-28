(function(){
    /* jshint ignore:start */
    var pp_options={"cf":"728x90","PPTOKEN":{"1":"~~DOMAIN~~","2":"~~HOP~~"},"tppg":"","asv":"29","esid":"","cwod":"","maOpts":{"enabled":false,"maxSeqNum":0,"periodMax":0,"periodMin":0,"rotatingPassback":false,"skipRotation":false},"epid":"","cn":"1","crtg":"","cp":"560006","ct":"506065","cu":"http://ads.contextweb.com/TagPublish/GetAd.aspx","cwfl":"","ccid":"","wp":"0","brk":"false","ca":"VIEWAD"};
    /* jshint ignore:end */
    window.pp = window.pp || {};
    if(typeof(window.pp.Ad)=='undefined'){
        if(pp_options.prp !== undefined && pp_options.prp !== null && typeof(pp_options.prp) !== 'string'){
            for(var i = 0; i < pp_options.prp.length; i++){
                document.write("<scr" + "ipt type=\"text/javascript\" src=\"" + pp_options.prp[i] + "\"></scr" + "ipt>"); // jshint ignore:line
            }
        }
        window.pp_options = pp_options;
        window.pp_display_ad = 1;
        document.write("<scr" + "ipt type=\"text/javascript\" src=\"http://ads.contextweb.com/TagPublish/getjs.static.js?v=29\"></scr" + "ipt>"); // jshint ignore:line
    } else {
        new pp.Ad(pp_options).display();
    }
})();