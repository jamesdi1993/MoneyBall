var tempwin = win = window; while (tempwin != tempwin.top) { try { if (tempwin.frameElement) { win = tempwin.parent; } } catch (e) { } tempwin = tempwin.parent; }
if (!win.__WS_BOOT) {
    function e(v) { var s = encodeURIComponent(v); return s.replace(/%(?![0-9a-fA-F]{2})/g, "%25"); } function h() { return e((window.location.href || '').split("?")[0].split("#")[0]); }
    win.__WS_BOOT = 1; var wsHost = (win.location.protocol == "https:" ? "https:" : "http:") + "//webservices.webspectator.com"; var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = wsHost + '/init?appId=JMCIDZ5Z&h=' + h() + '&t=' + +new Date(); var x = win.document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    
    var _qevents = _qevents || [];(function () { var d = document, e = d.createElement('script'), s = d.getElementsByTagName('script')[0]; e.src = (d.location.protocol === 'https:' ? 'https://secure' : 'http://edge') + '.quantserve.com/quant.js'; e.async = true; e.type = 'text/javascript'; s.parentNode.insertBefore(e, s); })(); _qevents.push({ qacct: 'p-HGAVM7nQJ_sep' });
}

