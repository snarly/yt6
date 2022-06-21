yt6 = window.yt6 = window.document.getElementById('snarls_player')

if (!window.yt6d) { //data object for future use
  yt6d = window.yt6d = {}
}
  yt6d = window.yt6d
  yt6d.yt6 = window.yt6 = yt6
  yt6d.timers={}
  yt6d.linx={}
  yt6d.proxy={}
  yt6d.current={}
  yt6d.current.linx=[]
  yt6d.current.eid=[]
  yt6d.previous={}
  yt6d.previous.linx=[]
  yt6d.previous.eid=[]
  yt6d.playlist = {}
  yt6d.playlist.items = []
  yt6d.log = []
  yt6d.srt = {}

//if (window.yt6d && window.yt6d.yt6 != yt6)   yt6d.yt6 = window.yt6 = yt6


  if (yt6.loaded < 4) yt6.loaded = 1; window['status'] = yt6.loaded
  yt6.ytp = {}
  yt6.xhr = {}
  yt6.xhr.async = true || false
  var yt_alert_message = 'yt-alert-message'
  yt6.wallpaper = false
  yt6.poster = {}
  yt6.manifest = {}
  yt6.speed = 1
  yt6.age = {}
  yt6.errcount = 0

  if (location.href.indexOf('youtube.com/embed') > -1) yt6.ytp.embed = true
  yt6.body = document.getElementsByTagName('body')[0]
  if (yt6.body) {
    if (yt6.body.textContent) {
      yt6.txt = 'textContent'
    } else yt6.txt = 'innerText'
    if (yt6.body.getAttribute('id') == 'body' || yt6.ytp.embed) {
      yt6.layout = 12
    } else {
        yt6.layout = 16; //var yt_alert_message = 'yt-alert-message2'
      }
  }
  yt6.body2 = document.getElementsByTagName('body')[1]
  if (yt6.layout != 16 && window.spf && window.ytspf && window.ytspf.enabled) yt6.spf = (!yt6.body2) ? true : false // false for faux old layout

  yt6.size = 'default'
  yt6.l = 0; yt6.t = 0; yt6.z = 1; yt6.r = 0; yt6.yt_l = 0; yt6.yt_t = 0; yt6.yt_l_0 = ''; yt6.yt_z = 1; yt6.yt_r = 0




if (typeof Array.prototype.indexOf === 'undefined') {
    Array.prototype.indexOf = function (searchElement ) {  //, fromIndex
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }

//indexOfreplacement
}

if (typeof Array.isArray === 'undefined') {
  Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }
};



    var browserName = "undefined";


    // Chrome 1+
    if (window.chrome && (window.chrome.webstore || window.chrome.app || navigator.userAgent.indexOf(' Mobile') > -1)) {
	browserName = "Chromium";
      if (navigator.plugins) {
	if (navigator.plugins.length == 0 || (navigator.plugins.length >= 2 && (navigator.plugins[0].name && (navigator.plugins[0].name.indexOf('Chromium') == 0 || (navigator.plugins[1][0] && navigator.plugins[1][0].type == 'application/x-google-chrome-pdf')) ))) {
	  browserName = "Chromium";
        } else if (navigator.plugins[0].name === "Chrome PDF Plugin" && navigator.plugins[1].name === "Chrome PDF Viewer")
	  browserName = "Chrome";
      }
    }//;console.log((navigator.plugins[1][0].type == 'application/x-google-chrome-pdf')); console.log(navigator.plugins)
	
    // Edge 20+
    if ((!(document.documentMode) && window.StyleMedia) || (navigator.userAgent.indexOf(' Edg') > -1))
	browserName = "Edge";

    // Opera 8.0+
    if (window.opr || window.opera || (navigator.userAgent.indexOf(' OPR/') > -1))// && opr.addons
	browserName = "Opera";
	
    // Firefox 1.0+
    if (typeof InstallTrigger !== 'undefined')
	browserName = "Firefox";
		
    // Internet Explorer 6-11
    if ((/*@cc_on!@*/false) || (document.documentMode))
	browserName = "IE";

    // At least Safari 3+: "[object HTMLElementConstructor]"
    if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (browserName == 'undefined' && window.safari))
	browserName = "Safari";

    // Brave
    if ( (window.Brave && navigator.brave) ||
	(navigator.plugins && // if Brave's Ad-Shield is up, we can identify it
	 ( (navigator.plugins.length == 0 && browserName == 'Chromium' && navigator.userAgent.indexOf(' Mobile') == -1) ||
	    (navigator.plugins.length >= 2 && browserName != 'Chrome' &&
	     (   (navigator.plugins[0].name === "Chrome PDF Plugin" && navigator.plugins[1].name === "Chrome PDF Viewer")
	      || (navigator.userAgent.indexOf(' Mobile') > -1)
	      || (navigator.plugins[0] && navigator.plugins[0][0] && navigator.plugins[0][0].type == 'application/x-google-chrome-pdf')
	      || (navigator.plugins[1] && navigator.plugins[1][0] && navigator.plugins[1][0].type == 'application/x-google-chrome-pdf')
	      || (navigator.plugins[2] && navigator.plugins[2][0] && navigator.plugins[2][0].type == 'application/x-google-chrome-pdf')
	      || (navigator.plugins[3] && navigator.plugins[3][0] && navigator.plugins[3][0].type == 'application/x-google-chrome-pdf')
	 )  ))
       )) {
	if (browserName != 'Edge' && browserName != 'Opera') {
	  if (navigator.plugins[0] && navigator.plugins[0][0] && navigator.plugins[0][0].type == 'application/x-google-chrome-pdf') { browserName = "Vivaldi" }
	  if (browserName != 'Vivaldi' && !(navigator.plugins[2] && navigator.plugins[2][0] && navigator.plugins[2][0].type == 'application/pdf')) browserName = "Brave"
	}
	if (navigator.brave && typeof navigator.brave.isBrave == 'function') try {
	  navigator.brave.isBrave().then(function(r){
	    if (r) browserName = "Brave";
	  });
	} catch(e){}
    } else if (browserName == 'Chromium') {
	browserName = ((function(){ var z = false, y = '', i; if (navigator.plugins.length) for(var i in navigator.plugins) { if (navigator.plugins[i][0] && navigator.plugins[i][0].type != 'application/pdf') break; y = i }; if (y == navigator.plugins.length-1 || (typeof y == 'string' && y.indexOf('Chromium PDF') == 0)) z = true; return z })() ) ? 'Vivaldi' : 'Chromium'
      }

    // Yandex
    if (browserName.indexOf('Chrom') == 0 && navigator.userAgent.indexOf(' YaBrowser/') > -1)
	browserName = "Yandex";




/**
 * JavaScript Client Detection
 * (C) viazenetti GmbH (Christian Ludwig)
 */
(function (window) {
    {
        var unknown = '-';

        // screen
        var screenSize = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        // browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 4);
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Microsoft Edge';
            version = nAgt.substring(verOffset + 5);
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }

/*
	var other_browser = function detect_brave_browser() {
	  // initial assertions

	  if (!window.google_onload_fired //&&
	       //navigator.userAgent &&
	      //!navigator.userAgent.includes('Chrome')
	     ) {
	     if (nAgt.includes('Chrome')) {
		yt6.tmp = 'Chrome'
		if (nAgt.includes('Chromium')) yt6.tmp = 'Chromium'
		if (nAgt.includes('YaBrowser')) yt6.tmp = 'Yandex'
		if (nAgt.includes('Vivaldi')) yt6.tmp = 'Vivaldi'
	     } else yt6.tmp = false;

	     return yt6.tmp;
	  }

	  // set up test
	  var test = document.createElement('iframe');
	  test.style.display = 'none';
	  document.body.appendChild(test);

	  // empty frames only have this attribute set in Brave Shield
	  var is_brave = yt6.tmp = (test.contentWindow.google_onload_fired === true) ? 'Brave' : false;

	  // teardown test
	  test.parentNode.removeChild(test);

	  return yt6.tmp
	}

	if (other_browser()) browser = yt6.tmp
*/

        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // cookie
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
        }

        // system
        var os = unknown;
        var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS X':
                try { osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1] } catch(e) { osVersion = '?' };
                break;

            case 'Android':
                try { osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1] } catch(e) { osVersion = '?' };
                break;

            case 'iOS':
		try {
                  osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                  osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
		} catch(e) { osVersion = '?' }
                break;
        }
        
        // flash (you'll need to include swfobject)
        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
        var flashVersion = 'no check';
        if (typeof swfobject != 'undefined') {
            var fv = swfobject.getFlashPlayerVersion();
            if (fv.major > 0) {
                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
            }
            else  {
                flashVersion = unknown;
            }
        }
    }

    window.jscd = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
        flashVersion: flashVersion
    };
}(this));


    if (browserName == 'undefined') browserName = jscd.browser

    // cannot distinguish between most Chromium-based browsers, especially on mobile (Chrome, Vivaldi, Kiwi, Epic, Dolphine, etc.)
    //if (browserName == 'Chromium' && jscd.mobile) // simply call all of them "Chrome"
	//browserName = 'Chrome';

/*
console.log(
    'OS: ' + jscd.os +' '+ jscd.osVersion + '\n' +
	'Browser: ' + browserName + '\n' +
    'Browser: ' + jscd.browser +' '+ jscd.browserMajorVersion +
      ' (' + jscd.browserVersion + ')\n' + 
    'Mobile: ' + jscd.mobile + '\n' +
    'Flash: ' + jscd.flashVersion + '\n' +
    'Cookies: ' + jscd.cookies + '\n' +
    'Screen Size: ' + jscd.screen + '\n\n' +
    'Full User Agent: ' + navigator.userAgent
);
*/

	var osName;

	if (jscd.os.indexOf('Windows') != -1)
	osName = 'Windows';

	if (jscd.os.indexOf('Linux') != -1)
	osName = 'Linux';


// mobile device
if (typeof window.matchMedia == 'function' && (('ontouchstart' in window) || ('onmsgesturechange' in window)) &&
    (   (window.matchMedia("(orientation: portrait)") && window.matchMedia("(orientation: portrait)").matches)
     || (window.matchMedia("(orientation: landscape)") && window.matchMedia("(orientation: landscape)").matches)
    )
   ) {
  yt6.md = true
  if (typeof window.orientation != 'number' && screen.orientation && typeof screen.orientation.angle == 'number') window.orientation = clone(screen.orientation.angle)
  if (navigator.userAgent.indexOf('EdgA') > -1 || navigator.userAgent.indexOf('EdgiOS') > -1) browserName = 'Edge'
}


// Mobile layout
if (window.location.href.indexOf('//m.youtube.com') > -1) {

  yt6.mobile = true
  if (yt6.body && yt6.body.hasAttribute('modal-open-body')) yt6.body.removeAttribute('modal-open-body')

} else yt6.mobile = false





function gid(id) {

  if (!yt6.ytm) {
    var z = document.getElementById(id)
  } else var z = document.getElementById(id) || document.querySelector('#' + id)

 return z
}


function gclass(className, tag, elm){
	var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
	var tag = tag || "*";
	var elm = elm || document;
	var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);
	var returnElements = [];
	var current;
	var length = elements.length;
	var i = 0;
	for(i=0; i<length; i++){
		current = elements[i];
		if(testClass.test(current.className)){
			returnElements.push(current);
		}
	}
	return returnElements;
}

function gc(elem) {

  if (typeof document.getElementsByClassName == 'function') {
    var z = document.getElementsByClassName(elem)
  } else var z = gclass(elem)

 return z
}


function addEL(obj, event, func, u) {
  try {
    yt6.txt = 'innerText'
    if (obj.addEventListener) {
      yt6.txt = 'textContent'
      obj.addEventListener(event, func, u);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + event, func);
      } else {
	  obj['on' + event] = func
        }
  } catch(e) {}
}


function removeEL(obj, event, func, u) {
  try {
    yt6.txt = 'innerText'
    if (obj.removeEventListener) {
      yt6.txt = 'textContent'
      obj.removeEventListener(event, func, u);
    } else if (obj.detachEvent) {
        obj.detachEvent('on' + event, func);
      } else {
	  obj['on' + event] = null
        }
  } catch(e) {}
}


function getTarget(evt){
 evt = evt || window.event; // get window.event if evt is undefined (MSIE)

 // get srcElement if target is null (MSIE)
 var t = evt.target || evt.srcElement;

 //return id of <li> element when hovering over <li> or <a>
 if (t.nodeName.toLowerCase() == 'li') {
   return t;
 } else if (t.parentNode.nodeName.toLowerCase() == 'li') {
     return t.parentNode;
   } else {
	return t;
     }
}




if (typeof fnCheckLocation != 'number') {
var noads = setInterval(function(){
  var ads;
  ads = gc('videoAdUiSkipButton')[0]; if (ads) { ads.click();ads.setAttribute("class","videoAdUiSkipButton") }
  ads = gc('ytp-ad-skip-ad-slot')[0]; if (ads) { ads.click();ads.setAttribute("class","ytp-ad-skip-ad-slot") }
  ads = gc('ad-container ad-container-single-media-element-annotations ad-overlay')[0]; if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : '' }
  ads = gc('ytp-ad-overlay-slot')[0]; if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : '' }
  ads = gc("video-ads html5-stop-propagation")[0]; if (ads) { ads.parentNode.removeChild(ads) };
  ads = gid("google_companion_ad_div"); if (ads) { ads.parentNode.removeChild(ads) };
  ads = gid(mep_x("google_ads_frame")); if (ads) { ads.parentNode.removeChild(ads) };
  ads = gid('content'); if (ads) { ads.setAttribute('id','content') };
  ads = gid('player-ads'); if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : '' };
  if ((yt6 == undefined) || (typeof yt6.fnCheckLocation == 'number')) { clearInterval(noads) }

            },2000)
}


function fix_old_description() {

  if (yt6.layout == 12) {
    var z = gid('action-panel-details')
    if (z && z.firstChild == gid('watch-description') && z.firstChild == z.lastChild) {
      function GM_addStyle(text) {
	var newHTML = document.createElement("div");
	newHTML.innerHTML = text;
	document.getElementById("action-panel-details").appendChild(newHTML);
      }
      GM_addStyle("<button class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-collapsed-body yt-uix-gen204\" type=\"button\" onclick=\";return false;\" data-gen204=\"feature=watch-show-more-metadata\"><span class=\"yt-uix-button-content\">Show more</span></button>")
      GM_addStyle("<button class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-body\" type=\"button\" onclick=\";return false;\"><span class=\"yt-uix-button-content\">Show less</span></button>")
    } else return false
  } else return false
  return true

}


yt6.ads_off = true
yt6.no_cards = true
yt6.mute_on = true


function no_cards() {

  if (yt6.p && yt6.p.tagName == 'DIV') {
	var x = yt6.p.getElementsByClassName('ytp-button ytp-cards-button')[0]
	if (x) var y = yt6.p.getElementsByClassName('ytp-cards-teaser')[0]
	var z = gclass('ytp-ce-element','div',yt6.p)
	if (x || y || z[0]) {
	  if (!yt6.no_cards && !yt6.x) {
	    if (x) x.style.display = ''
	    if (y) y.style.display = ''
	    if (z[0]) for(i=0;i<z.length;i++){ z[i].style.display = '' }
	  } else {
	      if (x) x.style.display = 'none'
	      if (y) y.style.display = 'none'
	      if (z[0]) for(i=0;i<z.length;i++){ z[i].style.display = 'none' }
	    }
	}
  }

}

function qr(sr) {//var ok; if (sr && typeof sr.indexOf == 'function' && ( sr.indexOf('itag%3D18') > -1 || sr.indexOf('itag=18') > -1)) { ok = true; console.log('"'+sr+'"') } else var ok = false

  try { if (!sr) return null } catch(e) {}
  var qa = [];
  var prs = sr.toString()

  var prs2 = prs.split('//indexOfreplacement')[1]
  if (prs2) {
    var prs1 = prs.split('function (searchElement ) {')[0]
    prs2 = prs2.replace(/(\r\n|\n|\r)/gm," ").split('}')[1]
    prs = prs1 + prs2
  }

  prs = prs.split('&');

  if (typeof prs[1] != 'undefined') {
    for (i in prs) {
      if (typeof prs[i] == 'string') {
	var pra = prs[i].split('=')
	qa[pra[0]] = pra[1]
      }
    };
    
      var pra = prs[0].split('=')
      var prs = pra[0].split('?')
      if ((typeof pra[1] != 'undefined') && (typeof prs[1] != 'undefined')) {
	qa[pra[0].split('?')[1]] = pra[1]
      }

  } else {
      var prs = sr.split('/')
      for (i=4;i<prs.length;i=i+2) {
        qa[prs[i]] = prs[i+1]
      };
    }
    if (qa['n']) {
	//qa['n'] = yt6d.ndec(qa['n'])
    } else if (typeof qa['url'] == 'string') {
	pra = unescape(qa['url']).split('&n=')[1] || unescape(qa['url']).split('/n/')[1]
	if (pra) qa['n'] = pra.split('&')[0].split('/')[0]
      }
    var q = qual[qa['itag']]
  //if (ok) 
    if (q) if (qa['s']) { qa['s'] = decodeURIComponent(qa['s']); qual[qa['itag']]['s'] = qa['s'] } else { qa['s'] = decodeURIComponent(qual[qa['itag']]['s']) }
  yt6.qr = qa
  return qa
}



function clone(obj) {
    var copy

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date()
        copy.setTime(obj.getTime())
        return copy
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = []
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i])
        }
        return copy
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {}
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr])
        }
        return copy
    }

    alert("Unable to copy obj! Its type isn't supported.")
}




yt6.userprefV = [397,244,134,396,243,133,43,18]; yt6.userprefV_bak = []
yt6.userprefA = [251,140,258,256,141,172,171,250,249,139,600,599]; yt6.userprefA_bak = []
yt6.prev_media = []

  var qual = {
    5: {'t':'240p FLV H.263 + 64k MP3','a':'36',	'q':'small','m':'video/x-flv'},
    6: {'t':'270p FLV H.263 + 64k MP3','a':'18',	'q':'small','m':'video/x-flv'},
    13: {'t':'144p 3GP H.263 + 12k AMR','a':'17',	'q':'tiny','m':'video/mp4; codecs="s263, samr"'},
    17: {'t':'144p 3GP MPEG-4 + 24k AAC','a':'13',	'q':'tiny','m':'video/3gpp; codecs="mp4v.20.3, mp4a.40.2"'},
    18: {'t':'360p MP4 H.264 + 96k AAC','a':'134',	'q':'medium','m':'video/mp4; codecs="avc1.42001E, mp4a.40.2"'},
    22: {'t':'720p MP4 H.264 + 192k AAC','a':'45',	'q':'hd720','m':'video/mp4; codecs="avc1.42001F, mp4a.40.2"'},
    34: {'t':'360p FLV H.264 + 128k AAC','a':'18',	'q':'medium','m':'video/x-flv'},
    35: {'t':'480p FLV H.264 + 128k AAC','a':'59',	'q':'large','m':'video/x-flv'},
    36: {'t':'240p 3GP MPEG-4 + 36k AAC','a':'5',	'q':'small','m':'video/3gpp; codecs="mp4v.20.3, mp4a.40.2"'},
    37: {'t':'1080p MP4 H.264 + 192k AAC','a':'46',	'q':'hd1080','m':'video/mp4; codecs="avc1.42001F, mp4a.40.2"'},
    38: {'t':'3072p MP4 H.264 + 192k AAC','a':'46',	'q':'highres','m':'video/mp4; codecs="avc1.42001F, mp4a.40.2"'},
    43: {'t':'360p WebM VP8 + 128k Vorbis','a':'18',	'q':'medium','m':'video/webm; codecs="vp8.0, vorbis"'},
    44: {'t':'480p WebM VP8 + 128k Vorbis','a':'59',	'q':'large','m':'video/webm; codecs="vp8.0, vorbis"'},
    45: {'t':'720p WebM VP8 + 192k Vorbis','a':'22',	'q':'hd720','m':'video/webm; codecs="vp8.0, vorbis"'},
    46: {'t':'1080p WebM VP8 + 192k Vorbis','a':'37',	'q':'hd1080','m':'video/webm; codecs="vp8.0, vorbis"'},
    59: {'t':'480p MP4 H.264 /59/ + 128k AAC','a':'44',	'q':'large','m':'video/mp4; codecs="avc1.42001E, mp4a.40.2"'},
    78: {'t':'480p MP4 H.264 /78/ + 128k AAC','a':'44',	'q':'large','m':'video/mp4; codecs="avc1.42001E, mp4a.40.2"'},
    82: {'t':'360p MP4 3D + 96k AAC','a':'101',		'q':'medium','m':'video/mp4; codecs="avc1.42001E, mp4a.40.2"'},
    83: {'t':'240p MP4 3D + 96k AAC','a':'100',		'q':'small','m':'video/mp4; codecs="avc1.42001E, mp4a.40.2"'},
    84: {'t':'720p MP4 3D + 192k AAC','a':'102',	'q':'hd720','m':'video/mp4; codecs="avc1.42001F, mp4a.40.2"'},
    85: {'t':'1080p MP4 3D + 192k AAC','a':'102',	'q':'hd1080','m':'video/mp4; codecs="avc1.42001F, mp4a.40.2"'},
    100: {'t':'360p WebM 3D + 128k Vorbis','a':'82',	'q':'medium','m':'video/webm; codecs="vp8.0, vorbis"'},
    101: {'t':'360p WebM 3D + 192k Vorbis','a':'82',	'q':'medium','m':'video/webm; codecs="vp8.0, vorbis"'},
    102: {'t':'720p WebM 3D + 192k Vorbis','a':'84',	'q':'hd720','m':'video/webm; codecs="vp8.0, vorbis"'},
    132: {'t':'144p DASH H.264','a':'278','av1':'394',	'q':'tiny','m':'video/mp4; codecs="avc1.4d400c"'},
    133: {'t':'240p DASH H.264','a':'242','av1':'395',	'q':'small','m':'video/mp4; codecs="avc1.4d4015"'},
    134: {'t':'360p DASH H.264','a':'243','av1':'396',	'q':'medium','m':'video/mp4; codecs="avc1.4d401e"'},
    135: {'t':'480p DASH H.264','a':'244','av1':'397',	'q':'large','m':'video/mp4; codecs="avc1.4d401f"'},
    136: {'t':'720p DASH H.264','a':'247','av1':'398',	'q':'hd720','m':'video/mp4; codecs="avc1.4d401f"'},
    137: {'t':'1080p DASH H.264','a':'248','av1':'399',	'q':'hd1080','m':'video/mp4; codecs="avc1.640028"'},
    138: {'t':'4k/8k DASH H.264 vfps','a':'272','av1':'402','q':'highres','m':'video/mp4; codecs="avc1.640029"'},
    139: {'t':'48k DASH AAC','a':'249',			'q':'tiny','m':'audio/mp4; codecs="mp4a.40.2"'},
    140: {'t':'128k DASH AAC','a':'251',		'q':'tiny','m':'audio/mp4; codecs="mp4a.40.2"'},
    141: {'t':'256k DASH AAC','a':'172',		'q':'tiny','m':'audio/mp4; codecs="mp4a.40.2"'},
    142: {'t':'240p DASH H.264e','a':'133','av1':'395',	'q':'small','m':'video/mp4; codecs="encv.4d4015"'},//these formats contain encrypted data, currently only playable via YT's original player which uses an unknown decryption method for them
    143: {'t':'360p DASH H.264e','a':'134','av1':'396',	'q':'medium','m':'video/mp4; codecs="encv.4d401e"'},
    144: {'t':'480p DASH H.264e','a':'135','av1':'397',	'q':'large','m':'video/mp4; codecs="encv.4d401f"'},
    145: {'t':'720p DASH H.264e','a':'136','av1':'398',	'q':'hd720','m':'video/mp4; codecs="encv.4d401f"'},
    146: {'t':'1080p DASH H.264e','a':'137','av1':'399','q':'hd1080','m':'video/mp4; codecs="encv.640028"'},
    147: {'t':'1440p DASH H.264e','a':'264','av1':'400','q':'hd1440','m':'video/mp4; codecs="encv.64002a"'},
    148: {'t':'48k DASH HE AACe','a':'249',		'q':'tiny','m':'audio/mp4; codecs="enca.40.5"'},
    149: {'t':'128k DASH AACe','a':'251',		'q':'tiny','m':'audio/mp4; codecs="enca.40.2"'},
    160: {'t':'144p DASH H.264','a':'278','av1':'394',	'q':'tiny','m':'video/mp4; codecs="avc1.4d400c"'},
    161: {'t':'144p DASH H.264e','a':'132','av1':'394',	'q':'tiny','m':'video/mp4; codecs="encv.4d400c"'},
    167: {'t':'360p WebM VP8','a':'134',		'q':'medium','m':'video/webm; codecs="vp8.0"'},
    168: {'t':'480p WebM VP8 670k','a':'135',		'q':'large','m':'video/webm; codecs="vp8.0"'},
    169: {'t':'720p WebM VP8','a':'136',		'q':'hd720','m':'video/webm; codecs="vp8.0"'},
    170: {'t':'1080p WebM VP8','a':'137',		'q':'hd1080','m':'video/webm; codecs="vp8.0"'},
    171: {'t':'128k WebM Vorbis','a':'140',		'q':'tiny','m':'audio/webm; codecs="vorbis"'},
    172: {'t':'192k WebM Vorbis','a':'141',		'q':'tiny','m':'audio/webm; codecs="vorbis"'},
    218: {'t':'480p WebM VP8 720k','a':'135',		'q':'large','m':'video/webm; codecs="vp8.0"'},
    219: {'t':'480p WebM VP8 820k','a':'135',		'q':'large','m':'video/webm; codecs="vp8.0"'},
    241: {'t':'144p WebM VP9','a':'132',		'q':'tiny','m':'video/webm; codecs="vp9"'},
    242: {'t':'240p WebM VP9','a':'133',		'q':'small','m':'video/webm; codecs="vp9"'},
    243: {'t':'360p WebM VP9','a':'134',		'q':'medium','m':'video/webm; codecs="vp9"'},
    244: {'t':'480p WebM VP9','a':'135',		'q':'large','m':'video/webm; codecs="vp9"'},
    245: {'t':'480p WebM 900k VP9','a':'135',		'q':'large','m':'video/webm; codecs="vp9"'},
    246: {'t':'480p WebM 1400k VP9','a':'135',		'q':'large','m':'video/webm; codecs="vp9"'},
    247: {'t':'720p WebM VP9','a':'136',		'q':'hd720','m':'video/webm; codecs="vp9"'},
    248: {'t':'1080p WebM VP9','a':'137',		'q':'hd1080','m':'video/webm; codecs="vp9"'},
    249: {'t':'48k WebM Opus','a':'140',		'q':'tiny','m':'audio/webm; codecs="opus"'},
    250: {'t':'64k WebM Opus','a':'140',		'q':'tiny','m':'audio/webm; codecs="opus"'},
    251: {'t':'160k WebM Opus','a':'140',		'q':'tiny','m':'audio/webm; codecs="opus"'},
    256: {'t':'192k DASH AAC 6c','a':'251',		'q':'tiny','m':'audio/mp4; codecs="mp4a.40.5"'},
    258: {'t':'384k DASH AAC 6c','a':'251',		'q':'tiny','m':'audio/mp4; codecs="mp4a.40.2"'},
    264: {'t':'1440p DASH H.264','a':'271','av1':'400',	'q':'hd1440','m':'video/mp4; codecs="avc1.64002a"'},
    266: {'t':'2160p DASH H.264','a':'313','av1':'401',	'q':'hd2160','m':'video/mp4; codecs="avc1.64002a"'},
    271: {'t':'1440p WebM VP9','a':'264',		'q':'hd1440','m':'video/webm; codecs="vp9"'},
    272: {'t':'4320p WebM VP9','a':'138',		'q':'highres','m':'video/webm; codecs="vp9"'},
    278: {'t':'144p WebM VP9','a':'132',		'q':'tiny','m':'video/webm; codecs="vp9"'},
    298: {'t':'720p DASH H.264 ^fps','a':'302','av1':'398','q':'hd720','m':'video/mp4; codecs="avc1.4d4020"'},
    299: {'t':'1080p DASH H.264 ^fps','a':'303','av1':'399','q':'hd1080','m':'video/mp4; codecs="avc1.64002a"'},
    302: {'t':'720p WebM VP9 ^fps','a':'298',		'q':'hd720','m':'video/webm; codecs="vp9"'},
    303: {'t':'1080p WebM VP9 ^fps','a':'299',		'q':'hd1080','m':'video/webm; codecs="vp9"'},
    304: {'t':'1440p DASH H.264 ^fps','a':'308','av1':'400','q':'hd1440','m':'video/mp4; codecs="avc1.64002a"'},
    305: {'t':'2160p DASH H.264 ^fps','a':'315','av1':'401','q':'hd2160','m':'video/mp4; codecs="avc1.64002a"'},
    308: {'t':'1440p WebM VP9 ^fps','a':'304',		'q':'hd1440','m':'video/webm; codecs="vp9"'},
    313: {'t':'2160p WebM VP9','a':'266',		'q':'hd2160','m':'video/webm; codecs="vp9"'},
    315: {'t':'2160p WebM VP9 ^fps','a':'305',		'q':'hd2160','m':'video/webm; codecs="vp9"'},
    325: {'t':'384k DASH DTS ','a':'140',		'q':'tiny','m':'audio/mp4; codecs="dtse"'},
    328: {'t':'384k DASH E-AC-3 6c','a':'140',		'q':'tiny','m':'audio/mp4; codecs="ec-3"'},
    330: {'t':'144p WebM VP9 HDR','a':'132',		'q':'tiny','m':'video/webm; codecs="vp9.2"'},
    331: {'t':'240p WebM VP9 HDR','a':'133',		'q':'small','m':'video/webm; codecs="vp9.2"'},
    332: {'t':'360p WebM VP9 HDR','a':'134',		'q':'medium','m':'video/webm; codecs="vp9.2"'},
    333: {'t':'480p WebM VP9 HDR','a':'135',		'q':'large','m':'video/webm; codecs="vp9.2"'},
    334: {'t':'720p WebM VP9 HDR','a':'298',		'q':'hd720','m':'video/webm; codecs="vp9.2"'},
    335: {'t':'1080p WebM VP9 HDR','a':'299',		'q':'hd1080','m':'video/webm; codecs="vp9.2"'},
    336: {'t':'1440p WebM VP9 HDR','a':'264',		'q':'hd1440','m':'video/webm; codecs="vp9.2"'},
    337: {'t':'2160p WebM VP9 HDR','a':'138',		'q':'hd2160','m':'video/webm; codecs="vp9.2"'},
    380: {'t':'384k DASH AC-3 6c','a':'140',		'q':'tiny','m':'audio/mp4; codecs="ac-3"'},
    394: {'t':'144p DASH AV1','a':'278',		'q':'tiny','m':'video/mp4; codecs="av01.0.00M.08"'},
    395: {'t':'240p DASH AV1','a':'242',		'q':'small','m':'video/mp4; codecs="av01.0.00M.08"'},
    396: {'t':'360p DASH AV1','a':'243',		'q':'medium','m':'video/mp4; codecs="av01.0.01M.08"'},
    397: {'t':'480p DASH AV1','a':'244',		'q':'large','m':'video/mp4; codecs="av01.0.04M.08"'},
    398: {'t':'720p DASH AV1 xfps','a':'247',		'q':'hd720','m':'video/mp4; codecs="av01.0.08M.08"'},
    399: {'t':'1080p DASH AV1 xfps','a':'248',		'q':'hd1080','m':'video/mp4; codecs="av01.0.09M.08"'},
    400: {'t':'1440p DASH AV1 xfps','a':'308',		'q':'hd1440','m':'video/mp4; codecs="av01.0.12M.08"'},
    401: {'t':'2160p DASH AV1 xfps','a':'315',		'q':'hd2160','m':'video/mp4; codecs="av01.0.13M.08"'},
    402: {'t':'4320p DASH AV1 xfps','a':'272',		'q':'highres','m':'video/mp4; codecs="av01.0.16M.08"'},
    559: {'t':'2160p WebM VP9','a':'266',		'q':'hd2160','m':'video/webm; codecs="vp9"'},
    571: {'t':'4320p DASH AV1 HDR1','a':'272',		'q':'highres','m':'video/mp4; codecs="av01.0.16M.08"'},
    597: {'t':'144p DASH H.264 vfps','a':'598',		'q':'tiny','m':'video/mp4; codecs="avc1.4d400c"'},// new highly compressed low-resolution super tiny in size formats
    598: {'t':'144p WebM VP9','a':'597',		'q':'tiny','m':'video/webm; codecs="vp9.2"'},
    599: {'t':'30k DASH HE AAC','a':'600',		'q':'tiny','m':'audio/mp4; codecs="mp4a.40.5"'},
    600: {'t':'30k WebM Opus','a':'599',		'q':'tiny','m':'audio/webm; codecs="opus"'},
    694: {'t':'144p DASH AV1 HDR','a':'330',		'q':'tiny','m':'video/mp4; codecs="av01.0.00M.08"'},
    695: {'t':'240p DASH AV1 HDR','a':'331',		'q':'small','m':'video/mp4; codecs="av01.0.00M.08"'},
    696: {'t':'360p DASH AV1 HDR','a':'332',		'q':'medium','m':'video/mp4; codecs="av01.0.01M.08"'},
    697: {'t':'480p DASH AV1 HDR','a':'333',		'q':'large','m':'video/mp4; codecs="av01.0.04M.08"'},
    698: {'t':'720p DASH AV1 HDR','a':'334',		'q':'hd720','m':'video/mp4; codecs="av01.0.08M.08"'},
    699: {'t':'1080p DASH AV1 HDR','a':'335',		'q':'hd1080','m':'video/mp4; codecs="av01.0.09M.08"'},
    700: {'t':'1440p DASH AV1 HDR','a':'336',		'q':'hd1440','m':'video/mp4; codecs="av01.0.12M.08"'},
    701: {'t':'2160p DASH AV1 HDR','a':'337',		'q':'hd2160','m':'video/mp4; codecs="av01.0.13M.08"'},
    702: {'t':'4320p DASH AV1 HDR4a','a':'272',		'q':'highres','m':'video/mp4; codecs="av01.0.16M.08"'},
    703: {'t':'4320p DASH AV1 HDR4b','a':'272',		'q':'highres','m':'video/mp4; codecs="av01.0.16M.08"'}
  };


  var i,j,k,z;

for(var i=0;i<338;i++) if (qual[i]) { qual[i]['s'] = ''; qual[i]['w'] = ''; qual[i]['h'] = '' }

  yt6.fmts_fallback = {};
  yt6.fmts_fallback.V = {};
  yt6.fmts_fallback.V.uniq = {};
  yt6.fmts_fallback.A = {};
  yt6.fmts_fallback.A.uniq = {};
  yt6.fmts_fallback.V3D = {};
  yt6.fmts_fallback.V3D.uniq = {};
  yt6.fmts_fallback.other = {};
  yt6.fmts_fallback.other.uniq = {};


  yt6.fmts_fallback.V.av1 = [,,,,401,,,,,,400,,,,,,,,399,,,,,,,,,398,,,,,,,397,,,,,,,,,,,,396,,,,,,,395,,,,394,,,,,,,,,,,,,,,,,,,,,1
  ]
  yt6.fmts_fallback.V.uniq.av1 = clone(yt6.fmts_fallback.V.av1)

  yt6.fmts_fallback.V.webm = [,272,,337,,315,,313,,336,,308,,271,,335,303,,,248,,170,46,,334,302,,,247,,169,45,,333,,246,245,244,,219,218,168,44,,,332,,243,,167,43,,331,,242,,330,,278,241,,,598,,
  278,,
  ]
  yt6.fmts_fallback.V.uniq.webm = clone(yt6.fmts_fallback.V.webm)

  yt6.fmts_fallback.V.h264 = [138,,38,,,,305,,266,,,,304,,264,,,299,,,137,,,37,,,298,,,136,,,22,,,,,,135,,,,,78,59,,,,134,,,18,,,,133,,,,,132,160,,597,
  ,132,
  ]
  yt6.fmts_fallback.V.uniq.h264 = clone(yt6.fmts_fallback.V.h264)

  yt6.fmts_fallback.A.webm = [,,,,251,172,171,250,249,,600,,1]
  yt6.fmts_fallback.A.uniq.webm = clone(yt6.fmts_fallback.A.webm)

  yt6.fmts_fallback.A.aac = [258,256,141,140,,,,,,139,,599,1]
  yt6.fmts_fallback.A.dash = yt6.fmts_fallback.A.h264 = yt6.fmts_fallback.A.aac
  yt6.fmts_fallback.A.uniq.dash = yt6.fmts_fallback.A.uniq.h264 = yt6.fmts_fallback.A.uniq.aac = clone(yt6.fmts_fallback.A.aac)

  yt6.fmts_fallback.V3D.dash = yt6.fmts_fallback.V3D.h264 = [85,,84,,,82,83,1]
  yt6.fmts_fallback.V3D.uniq.h264 = clone(yt6.fmts_fallback.V3D.dash)

  yt6.fmts_fallback.V3D.webm = [,102,,101,100,,,1]
  yt6.fmts_fallback.V3D.uniq.webm = clone(yt6.fmts_fallback.V3D.webm)

  yt6.fmts_fallback.other = [35,34,6,5,36,17,13]
  yt6.fmts_fallback.other.uniq = clone(yt6.fmts_fallback.other)


  yt6.fmts_fallback.V.dash = []
  yt6.fmts_fallback.V.all = []
  yt6.fmts_fallback.A.all = []
  yt6.fmts_fallback.V3D.all = []

  yt6.fmts_fallback.V.uniq.dash = []
  yt6.fmts_fallback.V.uniq.all = []
  yt6.fmts_fallback.A.uniq.all = []
  yt6.fmts_fallback.V3D.uniq.all = []


function reverseArr(input) {
    var ret = new Array
    for(var i = input.length-1; i >= 0; i--) {
	//if (input[i] != 132)
        ret.push(input[i])
    }
    return ret
}

;(function(){

  for(i=0; i<yt6.fmts_fallback.V.h264.length;i++){
    if (yt6.fmts_fallback.V.h264[i] || yt6.fmts_fallback.V.webm[i] || yt6.fmts_fallback.V.av1[i]) {
      yt6.fmts_fallback.V.all[i] = clone(yt6.fmts_fallback.V.h264[i] || yt6.fmts_fallback.V.webm[i] || yt6.fmts_fallback.V.av1[i])
	  yt6.fmts_fallback.V.dash[i] = clone(yt6.fmts_fallback.V.h264[i] || yt6.fmts_fallback.V.av1[i])
      yt6.fmts_fallback.V.uniq.all[i] = clone(yt6.fmts_fallback.V.uniq.h264[i] || yt6.fmts_fallback.V.uniq.webm[i] || yt6.fmts_fallback.V.uniq.av1[i])
	  yt6.fmts_fallback.V.uniq.dash[i] = clone(yt6.fmts_fallback.V.uniq.h264[i] || yt6.fmts_fallback.V.uniq.av1[i]);
    }

    if (yt6.fmts_fallback.A.aac[i] || yt6.fmts_fallback.A.webm[i]) yt6.fmts_fallback.A.all[i] = clone(yt6.fmts_fallback.A.aac[i] || yt6.fmts_fallback.A.webm[i])
    if (yt6.fmts_fallback.A.uniq.aac[i] || yt6.fmts_fallback.A.uniq.webm[i]) yt6.fmts_fallback.A.uniq.all[i] = clone(yt6.fmts_fallback.A.uniq.aac[i] || yt6.fmts_fallback.A.uniq.webm[i])

    if (yt6.fmts_fallback.V3D.h264[i] || yt6.fmts_fallback.V3D.webm[i]) yt6.fmts_fallback.V3D.all[i] = clone(yt6.fmts_fallback.V3D.h264[i] || yt6.fmts_fallback.V3D.webm[i])
    if (yt6.fmts_fallback.V3D.uniq.h264[i] || yt6.fmts_fallback.V3D.uniq.webm[i]) yt6.fmts_fallback.V3D.uniq.all[i] = clone(yt6.fmts_fallback.V3D.uniq.h264[i] || yt6.fmts_fallback.V3D.uniq.webm[i])
  };

	yt6.fmts_fallback.A.revers = {}
	yt6.fmts_fallback.V.revers = {}
	yt6.fmts_fallback.V3D.revers = {}
	yt6.fmts_fallback.A.revers.webm = clone(yt6.fmts_fallback.A.uniq.webm)
	yt6.fmts_fallback.A.revers.aac = clone(yt6.fmts_fallback.A.uniq.aac)
	yt6.fmts_fallback.A.revers.all = clone(yt6.fmts_fallback.A.uniq.all)
	yt6.fmts_fallback.V.revers.webm = clone(yt6.fmts_fallback.V.uniq.webm)
	yt6.fmts_fallback.V.revers.h264 = clone(yt6.fmts_fallback.V.uniq.h264)
	yt6.fmts_fallback.V.revers.av1 = clone(yt6.fmts_fallback.V.uniq.av1)
	yt6.fmts_fallback.V.revers.dash = clone(yt6.fmts_fallback.V.uniq.dash)
	yt6.fmts_fallback.V.revers.all = clone(yt6.fmts_fallback.V.uniq.all)
	yt6.fmts_fallback.V3D.revers.webm = clone(yt6.fmts_fallback.V3D.uniq.webm)
	yt6.fmts_fallback.V3D.revers.h264 = clone(yt6.fmts_fallback.V3D.uniq.h264)
	yt6.fmts_fallback.V3D.revers.all = clone(yt6.fmts_fallback.V3D.uniq.all)



  // mirror elements to a zero separator to create the ascending part of the fallback line
  var z = [
	yt6.fmts_fallback.V.dash,
	yt6.fmts_fallback.V.h264,
	yt6.fmts_fallback.V.webm,
	yt6.fmts_fallback.A.aac,
	yt6.fmts_fallback.V.av1,
	yt6.fmts_fallback.V3D.h264,
	yt6.fmts_fallback.V3D.webm,
	yt6.fmts_fallback.V.all,
	yt6.fmts_fallback.A.all, // mirroring this may cause audio-only playback to falter when falling back from webm to aac (on mobile)
	yt6.fmts_fallback.V3D.all
  ]
  for (i=0; i<z.length; i++) {
    z[i].push.apply(z[i], reverseArr(z[i]))
    if (z[i] == yt6.fmts_fallback.V.webm) z[i].push.apply(z[i], yt6.fmts_fallback.A.webm)
    if (z[i] == yt6.fmts_fallback.V.h264) z[i].push.apply(z[i], yt6.fmts_fallback.A.aac)
    if (z[i] == yt6.fmts_fallback.V.dash) z[i].push.apply(z[i], yt6.fmts_fallback.A.aac)
    if (z[i] == yt6.fmts_fallback.V.all) z[i].push.apply(z[i], yt6.fmts_fallback.A.all)
  }
    //yt6.fmts_fallback.V.webm.push.apply(yt6.fmts_fallback.V.webm, yt6.fmts_fallback.V.dash)
    //yt6.fmts_fallback.V.dash.push.apply(yt6.fmts_fallback.V.dash, yt6.fmts_fallback.V.webm)

  var z = [
	yt6.fmts_fallback.A.uniq.webm,
	yt6.fmts_fallback.A.uniq.aac,
	yt6.fmts_fallback.A.uniq.all,
	yt6.fmts_fallback.V.uniq.webm,
	yt6.fmts_fallback.V.uniq.h264,
	yt6.fmts_fallback.V.uniq.av1,
	yt6.fmts_fallback.V.uniq.dash,
	yt6.fmts_fallback.V.uniq.all,
	yt6.fmts_fallback.V3D.uniq.webm,
	yt6.fmts_fallback.V3D.uniq.h264,
	yt6.fmts_fallback.V3D.uniq.all
  ]
  for (i=0; i<z.length; i++) {
    z[i].push.apply(z[i], reverseArr(z[i]))
  }

  var y, z = [
	yt6.fmts_fallback.A.revers.webm,
	yt6.fmts_fallback.A.revers.aac,
	yt6.fmts_fallback.A.revers.all,
	yt6.fmts_fallback.V.revers.webm,
	yt6.fmts_fallback.V.revers.h264,
	yt6.fmts_fallback.V.revers.av1,
	yt6.fmts_fallback.V.revers.dash,
	yt6.fmts_fallback.V.revers.all,
	yt6.fmts_fallback.V3D.revers.webm,
	yt6.fmts_fallback.V3D.revers.h264,
	yt6.fmts_fallback.V3D.revers.all
  ]
  for(i=0; i<z.length; i++) {
    z[i].reverse(); if (z[i][0] == 1) z[i][0] = undefined
    /*y = reverseArr(z[i])
    y.push.apply(y, z[i])

    if (z[i] == yt6.fmts_fallback.A.revers.webm) { y.splice(y.indexOf(1), 1); yt6.fmts_fallback.A.revers.webm = y }
    if (z[i] == yt6.fmts_fallback.A.revers.aac) { y.splice(y.indexOf(1), 1); yt6.fmts_fallback.A.revers.aac = y }
    if (z[i] == yt6.fmts_fallback.A.revers.all) { y.splice(y.indexOf(1), 1); yt6.fmts_fallback.A.revers.all = y }

    if (z[i] == yt6.fmts_fallback.V.revers.webm) yt6.fmts_fallback.V.revers.webm = y
    if (z[i] == yt6.fmts_fallback.V.revers.h264) yt6.fmts_fallback.V.revers.h264 = y
    if (z[i] == yt6.fmts_fallback.V.revers.av1) yt6.fmts_fallback.V.revers.av1 = y
    if (z[i] == yt6.fmts_fallback.V.revers.all) yt6.fmts_fallback.V.revers.all = y
    if (z[i] == yt6.fmts_fallback.V3D.revers.webm) yt6.fmts_fallback.V3D.revers.webm = y
    if (z[i] == yt6.fmts_fallback.V3D.revers.h264) yt6.fmts_fallback.V3D.revers.h264 = y
    if (z[i] == yt6.fmts_fallback.V3D.revers.all) yt6.fmts_fallback.V3D.revers.all = y*/
  }
})();





function get_quality(url) {

  var qs = qr(url), z;
  if (qs == null) return null
  if (qs.itag) z = qual[qs.itag]
  if (z) { qs = z['t'] || qs.itag } else qs = qs.itag
  yt6.qa = qs
  return qs
}


function rp(tx) {
  return tx.split('"').join('&quot;');
}


function dc(sg) {
  //return eval(fcnm + '("' + sg + '")');
  if ((gid('ytassetsjs') != null) && (typeof gid('ytassetsjs').fcnm != 'undefined')) {
    var fcnm = gid('ytassetsjs').fcnm
    return fcnm(sg);
  } else return sg
}



function conf(obj){
  var z, y
  if (window && window.ytplayer && window.ytplayer.config) {
    z = window.ytplayer.config
    if (window.ytplayer.config[obj]) y = window.ytplayer.config[obj]
  }
  return [z,y]
}


function def_link(){
  //if (!ytplayer.config) return ''
  //if (!ytplayer.config.args) return ''
  var c = conf('args')
  if (!(c[0] && c[1])) return ''
  yt6.sig = '&'
  var ft = [c[1].url_encoded_fmt_stream_map, c[1].adaptive_fmts]
  for (i in ft) {
    if (typeof ft[i] == 'string') {
      var z = ft ? ft[i].split(',') : '';
      for (j in z) {
	var qq = get_quality(z[j]);if (qq == null) continue;//alert('0qq')
	var qs = qr(z[j]);if (qs == null) continue;//alert('0qs')
	var href = unescape(qs.url).replace('http:', '').replace('https:', '');
	var sig = href
	var signame = (z[j].indexOf('lsig%3D') != -1) ? 'sig' : 'signature';
	if (qs.signature){
	  href += '&' + signame + '=' + qs[signame];
	  sig += '&' + signame + '=' + qs[signame];
	}
	if (qs.s) {//alert('Encrypted content! '+ qs.s + dc(qs.s) + gid('ytassetsjs').fcnm )
	  href += '&' + signame + '=' + dc(qs.s);
	  //yt6.encrypted = true // outdated
	}
	if (href.indexOf("&ratebypass=yes") == -1) { href += '&ratebypass=yes'}
	if (qq.indexOf("360p MP4 H.264") != -1) var def = href

      }
    }
  }
  if (sig) {
    if (sig.indexOf("&signature=") > -1) { sig = true } else { sig = false }
  }
  //yt6.encrypted = (sig && yt6.encrypted != true) ? false : true;
  return encodeURIComponent('https:' + def + '&' + sig)
}



/// $waitUntil
///      waits until a certain function returns true and then executes a code. checks the function periodically
/// parameters
///      check - a function that should return false or true
///      onComplete - a function to execute when the check function returns true
///      delay - time in milliseconds, specifies the time period between each check. default value is 100
///      timeout - time in milliseconds, specifies how long to wait and check the check function before giving up
function $waitUntil(check,onComplete,delay,timeout) {
  // if the check returns true, execute onComplete immediately
  if (check()) {
      onComplete()
      return
  }

  if (!delay) delay=100

  var timeoutPointer
  var intervalPointer=setInterval(function () {
      if (!check()) return // if check didn't return true, means we need another check in the next interval

      // if the check returned true, means we're done here. clear the interval and the timeout and execute onComplete
      clearInterval(intervalPointer)
      if (timeoutPointer) clearTimeout(timeoutPointer)
      if (typeof onComplete == 'function') onComplete()
  },delay)
  // if after timeout milliseconds function doesn't return true, abort
  if (timeout) timeoutPointer=setTimeout(function () {
      clearInterval(intervalPointer)
  },timeout)
}



function itag(me_src){
  if (typeof me_src == 'string') {
    var itagx
    if (me_src.indexOf('itag=') > -1) itagx = me_src.split('itag=')[1].split('&')[0]
    if (me_src.indexOf('itag/') > -1) itagx = me_src.split('itag/')[1].split('/')[0]
    if (itagx) { if (itagx == '278') itagx = 241; return (1*itagx) } else { return 999 }
  } else return 999
}



yt6.browser_tab = 'visible'

if (!window.onchange) {

(function() {
  var hidden = 'hidden';


  window.onchange = function (evt) {
    var v = 'visible', h = 'hidden',
        evtMap = {
          focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
        },
        pv = (yt6.browser_tab == 'hidden') ? h : v;

    evt = evt || window.event;
    if (evt.type && evt.type.indexOf('visibilitychange') != -1) {
      if ( (yt6.browser_tab == 'hidden' && (this[hidden] == false || typeof this[hidden] == 'undefined' )) || (yt6.browser_tab == 'visible' && (this[hidden] == true || typeof this[hidden] == 'undefined' )) ) {

          yt6.browser_tab = this[hidden] ? 'hidden' : 'visible';

      } else {
	      if (yt6.browser_tab == 'hidden') { yt6.browser_tab = 'visible' } else if (this[hidden]) { yt6.browser_tab = 'hidden' }
	    }
    } else if (evt.type in evtMap) {
	      yt6.browser_tab = evtMap[evt.type];
	    } else if (evt.type == 'change') {
	        if (typeof this[hidden] == 'undefined') {
	          if (yt6.browser_tab != 'visible') { yt6.browser_tab = 'hidden' }
	        } else {
	          }
	      } else {
		  //yt6.browser_tab = yt6.browser_tab
		}
    if (!yt6.browser_tab) yt6.browser_tab = 'visible'
    //console.log(pv +' '+ yt6.browser_tab)


    if (yt6.player1 && yt6.player1.media) {

	  var t0, t1, t2
	  if (Array.isArray(yt6.A_V) && yt6.A_V[itag(yt6.player1.media.src)]) { t1 = true; } //if (yt6.player2) yt6.Seek = 11 }
	  if (Array.isArray(yt6.A_) && yt6.A_[itag(yt6.player1.media.src)]) { t0 = true }

	  if (pv == 'hidden' && yt6.browser_tab == 'visible') { //ev_log(';h->v;')
	    if (yt6.x && yt6.md && !(yt6.layout == 16 && !yt6.mobile && !yt6.ytm && !yt6.ytg)) { yt6.Seek = 6 } else
	    if (Array.isArray(yt6.V_) && yt6.V_[itag(yt6.player1.media.src)]) {
	      if (yt6.player2 && yt6.player2.media) try {
		t1 = yt6.player1.getCurrentTime(), t2 = yt6.player2.getCurrentTime()
		if (yt6.x) {
		  if (typeof t1 == 'number' && typeof t2 == 'number' && Math.abs(t1 - t2) > 0.3) {
		    if (!(yt6.audiox && t1 > yt6.player2.media.duration)) {
		      yt6.ct = yt6.player1.media.currentTime = t1; yt6.player2.media.currentTime = t1
		    }
		  }
		  if (yt6.Seek == 6 && !yt6.player1.media.paused) {
		    yt6.ct = yt6.player1.media.currentTime = yt6.player2.media.currentTime = t2
		    yt6.player2.media.play()
		  } //else { yt6.player1.setCurrentTime(t2) }
		} else if (yt6.p) {
		    //t0 = (yt6.ytp.v && typeof yt6.ytp.v.currentTime == 'number') ? yt6.ytp.v.currentTime : t2
		    //yt6.player2.media.currentTime = t0
		  }
	      } catch(e){}
	    }

	    if (yt6.mobile) {
	      if (yt6.pls) {
		//scrollToCurrentVideo()
		//yt6d.orientation = (yt6d.orientation == 0) ? 90 : 0
	      }
	      if (yt6.mobile) {
		var z = (yt6.pls && screen.height >= screen.width) ? gc('compact-media-item-headline')[yt6.pl_index_m - yt6.pls_top] : document.getElementsByTagName('ytm-app')[0] // focus on the playlist item currently being played or the player itself
		try { z.scrollIntoView(true) } catch(e){}
	      }
	    }

	  }

	  if (pv == 'visible' && yt6.browser_tab == 'hidden') { //ev_log(';v->h;')
	    if (t0) {
	      if ( (!(yt6.player2 && yt6.player2.media && yt6.player2.media.paused) && ( (t2 && yt6.seeked2) || t1 == true )) ){//|| (t1 && !yt6.Seeked2 && yt6.player1.media.paused)) {
		if (yt6.mobile && t1 == true) try { yt6.player1.play() } catch(e){}
	      } else {}
	      yt6.Seeked2 = false //(t1 !== true) ? false : yt6.Seeked2
	    }
	    if (yt6.blocked_m && yt6.blocked === 0) delete yt6.blocked_m
	  }


	  if (yt6.me_flash_) {
	    if (yt6.browser_tab == 'hidden') {
	      removeEL(yt6.player1.media, 'click', yt6.player1.clickToPlayPauseCallback, 'false')
	      removeEL(yt6.player1.media, 'click', yt6.player1.clickToPlayPauseCallback, 'false')
	    }
	    var z = gc('mejs-fullscreen-hover')
	    if ((yt6.browser_tab == 'visible' && !yt6.navigation) && z[0] && z[0].style.display == 'block') for(var i=0;i<z.length;i++) z[i].style.display = 'none'
	  }
    }

  }

  // visibilitychange events won't fire in Brave (?)
  var z = (browserName !== 'Brave') ? true : false
  // Standards:
  if (z && hidden in document) {
    addEL(document, "visibilitychange", window.onchange);
  } else if (z && (hidden = "mozHidden") in document) {
    addEL(document, "mozvisibilitychange", window.onchange);
  } else if (z && (hidden = "webkitHidden") in document) {
    addEL(document, "webkitvisibilitychange", window.onchange);
  } else if (z && (hidden = "msHidden") in document) {
    addEL(document, "msvisibilitychange", window.onchange);
  // IE 9 and lower:
  } else if (z && "onfocusin" in document) {
    document.onfocusin = document.onfocusout = window.onchange;
  // Brave and all others:
  } else {
    window.onpageshow = window.onpagehide
    = window.onfocus = window.onblur = window.onchange;
    }


  // set the initial state (but only if browser supports the Page Visibility API)
  if( document[hidden] !== undefined )
    onchange({type: document[hidden] ? "blur" : "focus"});
})();

}//window.onchange






            function exit( status ) {
              // http://kevin.vanzonneveld.net
              // +   original by: Brett Zamir (http://brettz9.blogspot.com)
              // +      input by: Paul
              // +   bugfixed by: Hyam Singer (http://www.impact-computing.com/)
              // +   improved by: Philip Peterson
              // +   bugfixed by: Brett Zamir (http://brettz9.blogspot.com)
              // %        note 1: Should be considered expirimental. Please comment on this function.
              // *     example 1: exit()
              // *     returns 1: null

              var i

              if (typeof status === 'string') {
                //alert(status)
              }

              addEL(status, 'error', function (e) {e.preventDefault();e.stopPropagation()}, false)//window

              var handlers = [
                'copy', 'cut', 'paste',
                'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
                'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
                'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
              ];

              function stopPropagation (e) {
                try { e.stopPropagation() } catch(e){}
                try { e.preventDefault() } catch(e){}// Stop for the form controls, etc., too?
              }
              for (i=0; i < handlers.length; i++) {
                 addEL(status, handlers[i], function (e) {stopPropagation(e)}, true)
              }

              if (status.stop) {
                status.stop()
              }

              //throw ''
            }


    function no_default(_itag, t){ //console.log(_itag +' '+ t)
      $waitUntil(
	function(){
	  if (t == 'V') if (1 * yt6.userprefV[0] == 1 * _itag || 1 * yt6.userprefV[yt6.userprefV.length-1] == 1 * _itag) return true
	  if (t == 'A') if (1 * yt6.userprefA[0] == 1 * _itag || 1 * yt6.userprefA[yt6.userprefA.length-1] == 1 * _itag) return true
	},
	function(){
	  if (t == 'V') { if (1 * yt6.userprefV[0] == 1 * _itag) yt6.userprefV.splice(0,1); if (1 * yt6.userprefV[yt6.userprefV.length-1] == 1 * _itag) yt6.userprefV.splice(yt6.userprefV[yt6.userprefV.length-1],1) }
	  if (t == 'A') { if (1 * yt6.userprefA[0] == 1 * _itag) yt6.userprefA.splice(0,1); if (1 * yt6.userprefA[yt6.userprefA.length-1] == 1 * _itag) yt6.userprefA.splice(yt6.userprefA[yt6.userprefA.length-1],1) }
	},
	500,5000
      )
	// to store the very first manual choice also, set this to false
      //yt6.no_default = (yt6.userprefV.toString() == '397,244,134,396,243,133,43,18') ? false : true; //console.log(yt6.userprefV +' '+ yt6.no_default)
    }



function FireEvent( ElementId, EventName )
{
    if( gid(ElementId) != null )
    {
	if( gid( ElementId ).fireEvent )
	{
	    gid( ElementId ).fireEvent( 'on' + EventName )
	}
	else
	{
	    var evObj = document.createEvent( 'Events' )
	    evObj.initEvent( EventName, true, false )
	    gid( ElementId ).dispatchEvent( evObj )
	}
    }
}


function FireEvent2( element, event ) {

	if (element) {
	    try {
	      if (window.CustomEvent) {
	        element.dispatchEvent(new CustomEvent( event))
	      } else {
	          if (document.createEvent) {
		    var ev = document.createEvent('HTMLEvents')
		    ev.initEvent( event, true, false)
		    element.dispatchEvent(ev)
	          } else { // Internet Explorer
		      element.fireEvent( event )
		    }
		}
	    } catch(e) { // IE11 error
		if (document.createEvent) {
		  var ev = document.createEvent('HTMLEvents')
		  ev.initEvent( event, true, false)
		  element.dispatchEvent(ev)
		}
	      }
	}

}


if (typeof HTMLElement != 'undefined' && typeof HTMLElement.prototype.click == 'undefined')
  HTMLElement.prototype.click = function(){
    try { window._spf_state['history-callback'](this.href) } catch(e){ FireEvent2(this, 'click') }
  }


try { var mouseEvt, mouseEvt = document.createEvent("MouseEvents") } catch(e) {}


// For IE support
(function () {
  if ( typeof window.CustomEvent === "function" ) return false; //If not IE

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();



//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]

  function shuffle(o){ //v1.0
    var i, j, x
    for(j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
    return o
  };



yt6.cdn_ = function(){
  yt6.cdns = ['//cdn.jsdelivr.net/gh/snarly/yt6@','//cdn.jsdelivr.net/gh/snarly/yt6@','//cdn.jsdelivr.net/gh/snarly/yt6@']//'//cdn.rawgit.com/snarly/yt6/','//rawcdn.githack.com/snarly/yt6/', -- githack.com is unreliable lately
  var cdns = clone(yt6.cdns)
  yt6.cdn2 = shuffle(cdns.slice(0,-1))
  yt6.cdn = shuffle(yt6.cdns); yt6.cdn = yt6.cdn[Math.floor(Math.random() * yt6.cdn.length)]
  if (yt6.cdn) yt6.cdn2 = yt6.cdn2[Math.floor(Math.random() * yt6.cdn2.length)]
}


yt6.wmode = 'transparent'

yt6d.yt6.flash = window.yt6.flash = yt6.flash = {}; yt6.flash.debug = 0


function swfbin4(){


  yt6.cdn_()
  var swf1 = 'https://s.ytimg.com/yts/swfbin/player-vfljf_kbO/watch_as3.swf'
  var swf2 = yt6.cdn + '53bfd5591539b6a72701cb787ae915d15619c886/watch_as3.swf'
  yt6.flash.swfbin4 = document.getElementsByTagName('ytg-app')[0]

  if (!document.getElementsByTagName('ytg-app')[0]) {
    yt6.flash.swfbin4 = gid('player').innerHTML.split('var ytplayer = ytplayer || {};')[1]
  } else {
      yt6.flash.swfbin4 = yt6.body.innerHTML.split('var ytplayer = ytplayer || {};')[1]
    }
  if (yt6.flash.swfbin4) {
    yt6.flash.swfbin4 = yt6.flash.swfbin4.split('"url":"')[1]
    if (yt6.flash.swfbin4) yt6.flash.swfbin4 = yt6.flash.swfbin4.split('"')[0]
    if (yt6.flash.swfbin4) {
	yt6.flash.swfbin4 = yt6.flash.swfbin4.split('player-')[1]
	if (yt6.flash.swfbin4) {
	  yt6.flash.swfbin4 = yt6.flash.swfbin4.split('\\')[0]
	  yt6.flash.swfbin4 = 'https://s.ytimg.com/yts/swfbin/player-' + yt6.flash.swfbin4 + '/watch_as3.swf'
	} else yt6.flash.swfbin4 = swf2;
    } else yt6.flash.swfbin4 = swf2; //'vfljf_kbO'
  } else yt6.flash.swfbin4 = swf2
	//yt6.flash.swfbin4 = swf1
}

if (gid('player') != null) swfbin4()
yt6.flash.swfbin4_backup = (typeof ytplayer != 'undefined' && ytplayer.config && ytplayer.config.url) ? ytplayer.config.url : yt6.flash.swfbin4


var flash_mep = "https://cdn.jsdelivr.net/gh/snarly/yt6@53bfd5591539b6a72701cb787ae915d15619c886/flashmediaelement-cdn.swf"


yt6.flashplugin = function() {
	var hasFlash = false
	try {
	  var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
	  if (fo) {
	    hasFlash = true
	  }
	} catch (e) {
	    if (navigator.mimeTypes
	        && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
	        && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
	      hasFlash = true
	    }
	  }
	return hasFlash
}


	  var action_setconfig = function(){
		yt.setConfig = function (a){
		  var Ne=function(a){try{a.stopPropagation()}catch(e){}}
		  var Ja=function(a,b){return-1!=a.indexOf(b)}
		  var Hb=function(a){return Ja(g.Gb,a)}
		  var g = {}
		  g.Gb=""
		  g.Oe=Hb("Opera")
		  Ne(g.Oe,arguments)
		}
	  }

if (typeof yt != 'undefined' && !yt.setConfig) action_setconfig()


  var proxies = [
	'https://api.codetabs.com/v1/proxy/?quest=https:'
	,'https://api.codetabs.com/v1/proxy/?quest=https:'
	//'https://allow-any-origin.appspot.com/https:'
	//,'https://cors-anywhere.herokuapp.com/https:'
	//,'https://crossorigin.me/https:'
  ]


function onDownload(x) {
  try {
   document.location = 'data:Application/octet-stream,' + encodeURIComponent(x)
  } catch(e) {
	var output = ''
	for (var property in x) {
	  output += property + ': ' + x[property]+'; '
	}
	try { console.log(output) } catch(e) { alert(output) }
    }
}


	try {
	  var xhr
	  xhr = new XMLHttpRequest();
	  xhr.open('GET','https://s.ytimg.com/yts/img/HTML5_1Color_Black-vfl902gVJ.png',false)
	  xhr.send('')
	  yt6.oldbrowser = false
	} catch(e){ if (e.toString().indexOf('Synchronous requests are disabled for this page') == -1) { yt6.oldbrowser = true; yt6.xhr.async = false } else yt6d.srt.async = true }



function findClosingBracketMatchIndex(str, pos) {
  if (str[pos] != '{') {
    return -1;//throw new Error("No '{' at index " + pos);
  } //else console.log(str.substring(0,20) +'\n'+ '{ '+ str.split('{').length +'\n'+'} '+ str.split('}').length )
  var depth = 1;

  for (i = pos + 1; i < str.length; i++) {
    switch (str[i]) {
    case '{':
      depth++;
      break;
    case '}':
      if (--depth == 0) {
        return i;
      }
      break;
    }
  }
  return -1;    // No matching closing parenthesis
}


function find_key(rpt){

  var rpt = rpt.replace(/(\r\n|\n|\r)/gm," ").split('<BR>').join('')
  if (rpt.indexOf("function fcnm(") != -1) {
    rpt = rpt.replace('<html>','').replace('<body>','').replace('<pre>','');
    eval(rpt);
    return fcnm
  }


  //  var fcnm = rpt.match(/signature=([^(]+)/)[1];
  //  var fcnm = rpt.match(/dashmpd.[^]*signature\/"\+(.|[\s\S].\)\)\;)/)[0];//+ 2ik_1ez&

  function fcnm2() {
	fcnm = rpt.split('set("signature",')[1]
	if (fcnm) {
	  fcnm = fcnm.split('(')[0]
	  fcnm = fcnm.split("\n").join("").split("\r").join("");
	}
	return fcnm
  }

  var fcnm = rpt.split('dashmpd,')[1]
  if (!fcnm) fcnm = rpt.split('.dashmpd')[1]
  if (fcnm) {
    fcnm = fcnm.split('));')[0];
    if (document.location.href.indexOf('/base.js') == document.location.href.length-8 && fcnm.indexOf('&amp;') != -1) fcnm = fcnm.split('&amp;').join('&')
    var i = fcnm.split('\"/signature/\"\+')[1]
    if (i) {
      i = i.split(")")[0].split("\n").join("").split("\r").join("").split(" ").join("");
      var j = fcnm.split("&&("+i+"=")[1] || fcnm.split("&amp;&amp;("+i+"=")[1];
      if (j) { fcnm = j.substring(0,2) } else if (i) {
	var j = fcnm.split('\"/signature/\"\+')[0].split('');
	for(k=j.length;k>0;k--){
	  if (j[k] == i && j[k+1] == '=' && (j[k+2]+j[k+3]+j[k+4]+j[k+5]+j[k+6]).indexOf('.') == -1) { fcnm = j[k+2] + j[k+3]; break }//.substring(k+2,k+4); break }
	}

      } else var fcnm = fcnm2()
    } else {//2018 variant
	//var i = fcnm.split('"signature":"sig"')[1]
	//if (i) { fcnm = i.split('=')[1].split('(')[0]
	//} else {//2018/09
	    //(\w+)\s*=\s*function\((\w+)\){\s*\2=\s*\2\.split\(""\)\s*;

	    //var regex = new RegExp('^(?!(?:=function(a){a=a.split("");+\\w+\\s)$)', 'g');
	    fcnm = rpt.split('=function(a){a=a.split("")')[0]; fcnm = (fcnm) ? fcnm.substr(fcnm.length-2, 3) : null


        // Fragile code -- the function definition we are looking for in the response text (rpt) *must* begin exactly with the stuff passed to the following rpt.split function as argument;
        // Once yt-folks change that part in their own code, the stuff here would also need to be rewritten accordingly, otherwise you would get no valid media links for videos
	// which have encrypted video signatures.
	//
	// A random example of how the wanted bit of code looks like, as of 25 Jan 2020.
	// =function(a){a=a.split("");ot.Iq(a,8);ot.bw(a,21);ot.h0(a,2);ot.bw(a,32);ot.h0(a,1);ot.bw(a,34);ot.Iq(a,59);ot.h0(a,2);return a.join("")};
	// The variable name referring to this function will be stored in the "fcnm" variable.


	  function getFunctionName(str){

	    var fcnm, array = rpt.split(str)//'=function(a){a=a.split("")'
	    if (array == rpt) { var alt = 1; array = rpt.split(str) } else var alt = 0 //'(a){a=a.split("")'
	    if (array.length)
	    for (i=0;i<array.length;i++) {
	      var x = array[i], y = array[i+1]
	      if (y && y.indexOf(';var ') == 0) {
		fcnm = null; continue
	      } else if (x && x.indexOf('}') > -1) {
		  y = x.substr(x.lastIndexOf('}'), x.length)
		  if (y) {
		    if (y.split(';')[1]) y = y.substr(y.lastIndexOf(';'), x.length)
		    if (y.split(' ')[1]) y = y.split(' ')[1]
		    x = y
		  }
		  if (x) {
		    if (x.length == 2) {
		      fcnm = x.substr(x.length-2,3) // 2-letters long
		    } else
		      fcnm = x.substr(x.length-3,4) // 3-letters long func name
		    
		  } else { x = null; y = null }
		  break
		}
	    }
	    return fcnm

	  }
	  var fcnm = getFunctionName('=function(a){a=a.split("")')
	  var n = getFunctionName('=function(a){var b=a.split(""),c=')

      }
  } else {
      var fcnm = fcnm2();
    }


  function sprintf(nw) {
    var i = 0;
    while (/%s/.test(nw))
      nw = nw.replace('%s', arguments[++i])
    return nw;
  }

  try {
      //console.log(fcnm)
      var fs = new RegExp(    sprintf('function %s[^}]+}[^}]+}', fcnm.replace('$', '\\$'))  );
      if (rpt.match(fs) == null) {
	var fs = new RegExp(    sprintf('var %s=function[^}]+};', fcnm.replace('$', '\\$'))  );
	if (rpt.match(fs) == null) {
	  var fs = new RegExp(    sprintf('[^\\w.]+%s=function[^}]+}', fcnm.replace('$', '\\$'))  );//\\W does not suffice, have to exclude the possibility of a leading dot as well
	}
      }
    //console.log('fs='+rpt.match(fs))
    //var fs = new RegExp('function ' + fcnm.replace('\$','\\$') + '[^}]+}[^}]+}');

    var fs = (rpt.match(fs)) ? rpt.match(fs)[0] : '' //old

    var nreg, n2
    if (typeof n == 'string')
    try {
      nreg = new RegExp(	sprintf('%s=function[^}]+}[^}].*', n.replace('$', '\\$'))	)
      n2 = rpt.match(nreg); if (n2) { nreg = null; n2 = n2[0]; n2 = n2.split(n2.split('.join("")};')[1])[0]; eval('yt6d.ndec = ' + n2.replace(n +'=','')) }
    } catch(e) { }

  } catch(e) {//alert(e)

      // same as above
      if (!fcnm) {
	    var array = rpt.split('=function(a){a=a.split("")')
	    if (array.length) for (i=0;i<array.length;i++) {
	      var x = array[i], y = array[i+1]
	      if (y && y.indexOf(';var ') == 0) {
		fcnm = null; continue
	      } else {
		  fcnm = (x) ? x.substr(x.length-2,3) : null; x = null; y = null; break
		}
	    }
      }
      var fs = fcnm + '=function(a){a=a.split("")'; fs = fs + rpt.split(fs)[1].split('};')[0];

    }



  function fcobj(){ // find the variable name which refers to the object with the signature-descrambling methods
    var mch = fs; mch = mch.split('');
    for (j=0;j<mch.length;j++) {
      if (mch[j] === "$") {
        mch[j]="\\$"
      }
    };
    var mch = mch.join('');
    var mch = mch.split('\;');
    for (i=0;i<mch.length;i++) {
      var zzx = mch[i].substring(0,3) // the name is either 2 letter, in which case the 3rd character must be a dot
      if ((zzx === zzy) && (zzx.charAt(2)==='.')) { var zzz = zzy.substring(0,2) };
      var zzy = zzx
    }
    if (typeof zzz === 'undefined') {
      for (i=0;i<mch.length;i++) {
        var zzx = mch[i].substring(0,4) // or it is 3 letter, and the 4th char is the dot
        if ((zzx === zzy) && (zzx.charAt(3)==='.')) { var zzz = zzy.substring(0,3) };
        var zzy = zzx
      }
    }
    var mch = new RegExp('var ' + zzz + '[^}]+}[^}]+}[^}]+}};'); if (mch) try { var mch2 = mch.split("return a.join('')}")[0] + "return a.join('')}"; mch = mch2 } catch(e){}
    return [mch,zzz]
  }

  if (fs) {

    var f1 = fcobj()[0]; //console.log('regular expression including the object name: '+ f1)
    var f2 = fcobj()[1]; //console.log('object name: '+ f2)

    var decrypt0 = rpt.match(f1)[0].split(" " + f2 + "=").join(" dekrypt0=")
    if (fs && fs.split(';')[0] && fs.split(';')[0].indexOf('function') == -1 && fs.split(';')[1].indexOf('function') != -1) {
      var fs0 = (fs.match(/;/g) || []).length;
      var fs1 = fs.split(';')
      var fs2 = ''
      for(i=1;i<fs0+1;i++){
        var fs2 = fs2 + fs1[i] + ';'
      }
    } else {
	var index = findClosingBracketMatchIndex(fs,fs.indexOf('{')), fs2 = ''
	if (typeof index == 'number' && index != -1) fs2 = fs.substring(0,(index + 1))
      }

    var fcnm = 'function fcnm(' + fs2.split("(")[1].split(")")[0] + '){ ' + decrypt0 + '; ' + fs2.split(f2+".").join("dekrypt0.").split(f2+"['").join("dekrypt0['").split(f2+"[\"").join("dekrypt0['").split("\"").join("'").split("){")[1]
    var fcnm = "function " + fcnm.split("function ")[1]

  } else var fcnm = "function fcnm(a) { yt6.dummy = true; return a; /* Yeah, sorry, folks. Looks like they have fundamentally changed the signature decryption procedure, thus access to most copyrighted content will be limited for now. It may take some time and effort to figure this one out. One tip: Currently you may only get the formats of such videos which (1) YT allows you to select, (2) you manually selected on the original YT player's current video AND (3) also started playing back those selected formats before you would load the bookmarklet. So always refresh the page and choose your desired resolution(s) beforehand which you wish to download. */\
    };"

  eval(fcnm) // should produce the signature decrypting function for later use

  //gid('ytassetsjs').fcnm = fcnm
  //try { if (gid('ytassetsjs') != null) gid('ytassetsjs').innerHTML = fcnm } catch(e) {}
  return fcnm
}


if (document.location.href.indexOf('/base.js') == document.location.href.length-8) {
  window.fcnm = find_key(yt6.body.firstChild[yt6.txt]);
  if (window.fcnm && window.fcnm.toString().indexOf('function fcnm(') != -1) {
    yt6.body.firstChild[yt6.txt] = window.fcnm.toString()
    throw 'Decryption key manually extracted... Exiting'
  } else {}
  yt6.parentNode.removeChild(yt6)
}


function msg_box0(id, text, color, bgcolor){

	if (!gid('msg-box1')) {
	  var z = document.createElement('div')
	  z.id = 'msg-box1'
	  yt6.appendChild(z)
	  z.setAttribute('style','position: fixed; z-index: 5; border: background-color: transparent; width: 0px; height: 0px;')
	}
	var a = gid('msg-box1'), b
	a.title = id; a.ariaLabel = id
	var mhp = (yt6.mhp) ? ((yt6.layout != 16 || yt6.ytm) ? yt6.mhp.offsetHeight : yt6.mhp.parentNode.parentNode.offsetHeight) : 0
	var ww = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)
	if (yt6.mobile) ww = (window.orientation === 0) ? ww / 2 : ww * 1.5
	var wh = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)	

	var z = document.createElement('div')
	z.id = id
	a.appendChild(z)
	var b = gid(id)
	var x = '50%'//(!yt6.ytm) ? '50%' : '104%'
	b.setAttribute('style','position: fixed; font-size: 16px; text-align: center; padding: 16px; color: '+ color +'; background-color: '+ bgcolor +'; overflow-x: hidden; width: auto; height: auto; max-width: ' + ((!yt6.mobile) ? (screen.width) + 'px' : 'auto') +'; top: ' + ((!yt6.mobile) ? Math.max((wh / 5), mhp) : mhp) +'px; left: '+ x +'; margin-left: ' + -1 * ww / 2 +'px; right: '+ x +'; margin-right: ' + -1 * ww / 2 + 'px')
	if (yt6.mobile) b.style.width = 'auto'
	b.innerHTML = '<h3 class="snarl-button yt-uix-button-text" id="'+ id +'-close" style="'+ ((id.toLowerCase().indexOf('error') == -1) ? 'position: absolute; ' : '') + 'padding: 0 4px 0 4px; background-color: red; color: white; width: auto; height: auto; float: right" onclick="var close = gid(&quot;'+id+'&quot;); if (close) close.parentNode.removeChild(close); return false;">X</h3>'
	  + text

	b.style.marginLeft = -1 * b.offsetWidth / 2 + 'px'

	return b

}



function hand_axe(){

		    if (gid('getjs') != null && gid('setjs') != null) return void 0;
		    var bm1 = gid('bm1')
		    if (bm1) bm1.parentNode.removeChild(bm1)
		    var bm1 = gid('ytassetsjs')
		    if (bm1) bm1.parentNode.removeChild(bm1)
		    var bm1 = document.createElement('span')
		    bm1.id = 'bm1'
		    var sytimg; try { systimg = ytplayer.config.assets.js } catch(e){}
		    if (!sytimg) try { sytimg = yt6d.base_js || '//m.youtube.com' + ytcfg.data_.PLAYER_JS_URL } catch(e){ return void 0 }
		    if (sytimg.indexOf('/yts/') == 0) sytimg = sytimg.replace('/yts/','//s.ytimg.com/yts/')
		    if (sytimg.indexOf('/') == 0) sytimg = protocol() + ((sytimg.indexOf('.youtube.com') == -1 && sytimg.indexOf('//s.ytimg.com/yts/') == -1) ? '//www.youtube.com' : '') + sytimg
		    bm1.innerHTML = '<button id="getjs" onclick="var bm1 = gid(\'bm1\'); bm1.newWindow = window.open( \'' + sytimg + '\', \'_blank\'); if (bm1.newWindow != null) bm1.newWindow.focus();"><span><img src="//yt3.ggpht.com/-afBnHVG_R6E/AAAAAAAAAAI/AAAAAAAAAAA/LtE5kbPkZvE/s192-c-k-no-mo-rj-c0xffffff/photo.jpg" style="height:27px"></img></span></button';
		    var z = gc('yt-masthead-logo-container ')
		    if (z[0]) {
		      var z = z[0]
		    } else {
			var z = gid('logo') || gid('left-content')
			if (z == null) {
			  var z = gid('home-button')
		          if (z) {
			    z = z.parentNode
			  } else z = yt6 //throw 'YouTube layout mismatch'
			}
		      }
		    z.insertBefore(bm1, z.lastChild)
		    if (yt6.tbg && yt6.tbg.parentNode) { yt6.tbg.setAttribute('style','display: none'); yt6.tbg.style.display = 'none' }
		    var z_class; try { z_class = z.getAttribute('class') || z.outerHTML.split('class="')[1].split('"')[0] } catch(e){ z_class = '' }

		    //bm1.newWindow = window.open(protocol() + ytplayer.config.assets.js, "_blank", "width=100,height=100,menubar=yes");
		    var pos = (!yt6.mobile) ? 'relative' : 'fixed'
		    bm1.setAttribute('style','display:inline-block; position: '+pos+'; width: 52px; max-height:30px; width: auto;');
		    var bm1 = bm1.style
		    bm1.display = 'inline-block'; bm1.position = pos; bm1.width = '52px'; bm1.maxHeight = '30px'; bm1.width = 'auto'
		    if ( 1 * getElementsByAttribute(document,'div','class', z_class.indexOf('doodle') > -1 )) {
		      var z = gid('logo-container') || gid('logo') || gid('home-button');
		      z.setAttribute('style','width:88px'); z.style.width = '88px'
		    }


yt6.recharge = function() {

		    var z = gid('Error Warning'); if (z) z.parentNode.removeChild(z)
		    yt6.osw = (!yt6.ytm) ? gid('placeholder-player') || gid('player') : document.getElementsByTagName('ytmusic-player')[0]
		    if (typeof deldiv == 'function') { deldiv() }
		      else {
			if (gid("snarls_player")) gid('snarls_player').parentNode.removeChild(gid("snarls_player"))
		      }
		    var z = (yt6.layout == 16) ? 'inline-block' : 'block'
		    if (gid('movie_player')) gid('movie_player').setAttribute('style','display: ' + z)
		    if (gid('snarls_player') == undefined) {
			  if (yt6.oldbrowser) { ageless_verification(true); alert('Reloading script') }
			  var q=document.createElement('div')
			  q.id='snarls_player'
			  if (window.yt6d && window.yt6d.body) { window.yt6d.body.appendChild(q) }
			  yt6d.source = true
			  var q=document.createElement('script')
			  q.id='snarls_player'
			  q.src=(gid('ytassetsjs')) ? gid('ytassetsjs').srco : (window.yt6d) ? window.yt6d.src : '';//px + '/snarly/yt6/master/yt6.js';
			  gid('snarls_player').appendChild(q)
		    }

}

yt6.source_needed = function() { window.yt6_video_source = false; alert('Your browser is very old, it could not transfer page source for this video. You\'d have to manually extract the html source code of the YT video page (look for a script block containing the word "streamingData"), and paste it into the input field as well.')

}

yt6.feedback = function(fcnm) {

		var z = gid('Error Warning'); if (z) z.parentNode.removeChild(z)
		var feed; try { feed = window.prompt('Looking good! Below is the part that was needed and would\'ve been sufficient to paste. Copy if you plan to re-use it later (it\'s only useful for a period of time.)', fcnm) } catch(e){}
		if (feed || (!feed && fcnm && typeof fcnm.toString == 'function' && fcnm.toString().indexOf('dekrypt0') > -1)) {
		  if (!window.yt6_video_source) { yt6.recharge() } else yt6.source_needed()
		} else {
		    if (typeof deldiv == 'function') { deldiv() }
		      else {
			if (gid("snarls_player")) gid('snarls_player').parentNode.removeChild(gid("snarls_player"))
		      }
		  }

			  //gid(\'bm10\').parentNode.removeChild(gid(\'bm10\'));\
			  //if (gid(\'bm1\') != null) {\
			    //if (gid(\'bm1\').newWindow) gid(\'bm1\').newWindow.close();\
			    //gid(\'bm1\').parentNode.removeChild(gid(\'bm1\'));\
			  //};\

}

		    var bm1 = document.createElement('span')
		    bm1.id = 'bm10'//<textarea> changed to <input>
		    bm1.innerHTML = '<span><textarea id="setjs" autocapitalize="none" autocomplete="off" autocorrect="off" name="code_input" tabindex="0" type="text" spellcheck="false" placeholder="Code input" aria-label="Code input" aria-haspopup="false" role="combobox" aria-autocomplete="list" dir="ltr" value="" maxlength="2097152" rows="1" cols="15" style="height: 20px; border: solid; background-color: white; display: block" onkeyup="var yt6 = gid(\'snarls_player\'); if (event.keyCode == 13) {\
			if (gid(\'setjs\').value.indexOf(\'function()\') != -1 || gid(\'setjs\').value.indexOf(\'function fcnm(\') != -1) {\
			  if (gid(\'controls-sp\') != null) gid(\'controls-sp\').innerHTML = \'OK, Processing...\';\
			  var scpt = document.createElement(\'div\');\
			  scpt.type = \'text/javascript\';\
			  scpt.id = \'ytassetsjs\';\
			  scpt[yt6.txt] = gid(\'setjs\').value;\
			  document.getElementsByTagName(\'body\')[0].appendChild(scpt);\
			  var scpt = gid(\'ytassetsjs\');\
			  var z = gid(\'snarls_player\');\
			  yt6.tmp = yt6.getElementsByTagName(\'script\')[0]; yt6d.src = (yt6.tmp && yt6.tmp.src) ? clone(yt6.tmp.src) : clone(yt6.src);\
			  scpt.srco = (z && typeof z.querySelector == \'function\') ? z.querySelector(\'#snarls_player\').src : window.yt6d.src;\
			  var z = new Date().toLocaleString().toString();\
			  scpt.setAttribute(\'time\',z);\
			  scpt.setAttribute(\'style\',\'display: none\'); scpt.style.display = \'none\';\
			  try { var fcnm = find_key(scpt[yt6.txt]) } catch(e) { console.log(e) };\
			  if (fcnm && scpt[yt6.txt].indexOf(\'function fcnm()\') == -1 && scpt[yt6.txt].indexOf(\'var dekrypt0\') == -1) {\
			    scpt[yt6.txt] = fcnm;\
			    yt6.feedback(fcnm);\
			  } else if (!window.yt6_video_source) {;\
			      yt6.recharge();\
			    } else yt6.source_needed()\
			} else {\
			    \
				if (gid(\'bm1\').newWindow) gid(\'bm1\').newWindow.close();\
				if (gid(\'bm1\') != null) gid(\'bm1\').parentNode.removeChild(gid(\'bm1\')) ;\
				if (typeof deldiv == \'function\') { deldiv() };\
				if (gid(\'snarls_player\') != null) gid(\'snarls_player\').parentNode.removeChild(gid(\'snarls_player\'));\
			  }}"></textarea></span>';
/*if ((gid(\'setjs\') && gid(\'setjs\')[yt6.txt] == \'\') || (gid(\'movie_player\') && typeof gid(\'movie_player\').getPlayerState == \'function\')) { try {\
				buildObject(window.ytplayer);\
				redo_dl_button(  yt6.args,  yt6.html,  yt6.href);\
				yt6d.mep_up();\
			    } catch(e){ yt6.recharge() } } else {*/
		    z.insertBefore(bm1, z.lastChild)
		    bm1.setAttribute('style','z-index: 5'); bm1.style.zIndex = 5
		    var ontouch_set_focus = function() {
		      var bm1 = gid('setjs'); if (bm1) bm1.focus()
		    }
		    var z = bm1; if (z) z.ontouchend = ontouch_set_focus


     var errorText = '<span><b><strong>ERROR:</strong></b> Automatic processing failed for this video, but you can do it by hand.<br><br>A new tab or window should have opened. If not, <br><b><strong>click the Transformer-icon next to the YouTube logo.</strong></b><br><br>The new page\'s content is a wall of text -- part of the YouTube Player\'s own javascript code (base.js) -- starting with something like \"var _yt_player\" or \"function\". The clipboard may be too small for it, so <br><b><strong>try to run the bookmarklet on that page too to get only the few lines needed.</strong></b><br><br><b><strong>SELECT & COPY its content,<br>then PASTE it into the "Code input" field here.<br>If done, press ENTER.</strong></b><br><br>(If your browser can\'t play back any of the formats, you may only be able to download them.)</strong></b><br></span>'// (Certain browsers, such as IE or Edge Legacy cannot display javascript files, instead they would opt to save it to your device (ca. 1MB in size). If so, use a regular text editor to view it.)


     if (!gid('Error Warning')) {

	var b = msg_box0('Error Warning',errorText,'white','red')

     }


      if (!(b && b.parentNode)) {
	control_panel1()
	var b = gid('controls-sp')
	if (b) {
	  b.parentNode.removeChild(gid('remove-sp'))
	  b.setAttribute('id','Error Warning')
	  b.setAttribute('style','position: relative; color: black')
	  b.style.position = 'relative'
	  b.style.color = 'black'
	}
      }

      b.innerHTML = errorText
      if (gid('bm10')) b.firstChild.insertBefore(gid('bm10'), b.firstChild.firstChild)


    var js = document.createElement('style');
    js.type = 'text/css'
    js.media = 'screen'
    var code = 

"#yt-consent-dialog {"+
"display:none;"+
"}"+

".upsell-dialog-lightbox {"+
"display:none;"+
"}"+

".consent-bump-lightbox {"+
"display:none;"+
"}"+

".sitewide-consent-visible .yt-consent-banner {"+
"display:none;"+
"}"+

".yt-dialog-bg, .ytd-consent-bump-lightbox-0, .iron-overlay-backdrop-0 {"+
"display:none;"+
"}"+

".sitewide-consent-visible.appbar-hidden #masthead-positioner-height-offset {"+
"height:50px;"+
"}"

    try {
      js.appendChild(document.createTextNode(code))
      yt6.appendChild(js)
    } catch (e) {
      js.text = code;
      yt6.appendChild(js)
    }
    delete js;


  var getjs = gid('getjs')
  if (typeof getjs.click == 'function') {
    getjs.click()
  } else {
      if (gid("bm1").newWindow != null) gid("bm1").newWindow.focus()
    }
  throw 'XMLHttpRequest failure'

}//hand_axe


var xhr2 = new XMLHttpRequest();


function player_api_div() {
	if (!gid('player-api') && (yt6.layout == 16 || yt6.ytp.embed) && !document.getElementsByTagName('ytg-persistent-player')[0]) {
	  if (gid('player')) {
	    var z = document.createElement("div")
	    z.id = 'player'
	    if (yt6.body.firstElementChild) { 
	      yt6.body.insertBefore(z, yt6.body.firstElementChild.nextSibling.nextSibling.nextSibling)
	    } else if (yt6.ytp.embed) yt6.body.appendChild(z)
	    z.setAttribute('class','skeleton flexy')
	    z.setAttribute('hidden','')
	  }
	  var y = document.createElement("div")
	  y.id = 'player-wrap'
	  z.appendChild(y)
	  var z = gid('player-wrap') || z
	  var y = document.createElement("div")
	  y.id = 'player-api'
	  z.appendChild(y)
	  y.setAttribute('class','player-width player-height off-screen-target player-api')
	}
}



if (!gid('video-hide')) {
   (function(){
	var z = document.createElement('div')
	z.id = 'video-hide'
	yt6.appendChild(z)
	z.setAttribute('style','display: none'); try { z.style = 'display: none' } catch(e) {}
	var y = document.createElement('div')
	y.id = 'movie_player_to_insert'
	z.appendChild(y)
	var x = document.createElement('div')
	x.id = 'movie_player_to_dispose'
	z.appendChild(x)
	var x = document.createElement('div')
	x.id = 'ytp_dump'
	z.appendChild(x)

	player_api_div()

	  var xhr2 = new XMLHttpRequest()
	  try { xhr2.open('get', window.location.href, false) } catch(e) { xhr2.open('get', window.location.href, true) }
	  xhr2.onreadystatechange = function() {
	    if (xhr2.readyState == 4 && xhr2.status == 200 && xhr2.responseText) {
	      var y = xhr2.responseText.toString()
	      y = y.split('var ytplayer = ytplayer || {};')[1] || y.split('window.ytplayer = window.ytplayer || {}; window.')[1]
	      if (y) { y = 'window.ytplayer = window.ytplayer || {}; window.' + y.split(';(function()')[0].split(';(function ')[0]; eval(y) }
	    }
	  }
	  try { xhr2.send('') } catch(e){ }


	var a = gid('page') || gid('mainContainer');
	// !!! New YouTube Layout! !!! (2016-07-10)
	if (!gid('content') && yt6.layout == 12 && !yt6.ytp.embed) {
	  var z = document.createElement("div")
	  z.id = 'content'
	  a.appendChild(z)
	  z.setAttribute('class','  content-alignment')
	  z.setAttribute('role','main')
	  z.setAttribute('style','display: none')
	  z.innerHTML = '<div id="placeholder-player"><div class="player-api player-width player-height"></div></div>'
	}
	var a = gc('alerts-wrapper')[0]
	if (typeof a == 'undefined') {
	  var z = document.createElement('div')
	  yt6.appendChild(z)
	  z.setAttribute('class','alerts-wrapper')
	}
	var a = gc('alerts-wrapper')[0]; if (a && !document.getElementsByTagName('body')[1]) a.setAttribute('hidden','')
	delete z;
    })();
}


function html5_fail() {

  var p = player(), p = yt6.p, v = gclass('html5-video-container','div', p)[0]
  var html5_fail =
   (p && v &&
    ((p.tagName == 'EMBED' && window.yt6_swapped) ||
     (v &&
      (v.innerHTML == '' ||
	!v.firstChild ||
	(v.firstChild && typeof v.firstChild.getAttribute == 'function' && v.firstChild.getAttribute('src') == '') ||
	typeof v.firstChild.play != 'function' ||
	gclass('ytp-error','div',p)[0]
	// || yt6.errcount == undefined
   )))) ? true : false;
  return html5_fail

}


yt6.tmp = gc("html5-video-container")[0]
yt6.html5_fail = ( !yt6.tmp ||
  (player() && yt6.tmp && yt6.tmp.parentNode == player() &&
   ( ( !(yt6.p && typeof yt6.p.getPlayerState == 'function') &&
       (yt6.tmp.innerHTML == '' || !yt6.tmp.firstChild)
     ) ||
    (yt6.tmp.firstChild && typeof yt6.tmp.firstChild.getAttribute == 'function' && yt6.tmp.firstChild.getAttribute('src') == '') ||
    typeof yt6.tmp.firstChild.play != 'function' ||
    ( !(yt6.p && typeof yt6.p.getPlayerState == 'function') && gc('ytp-error')[0])
  ))) ? true : false


//yt6.html5_fail = html5_fail()

if (yt6.p && typeof yt6.p.getPlayerState == 'function' && gc('ytp-error')[0]) { yt6.age.count = 111 }

if (yt6.html5_fail && !yt6.oldbrowser) {
  if (!( yt6.layout == 16 && !gc('ytp-error')[0] )) {
    if (player()) {
      gid('movie_player_to_dispose').appendChild(player())
      yt6.p.setAttribute('name','original')
      yt6.mp_ = true //yt6.p.setAttribute('id','movie_player_')
    }
    yt6.flash.forced = 2; yt6.flash.flag = 1
  } else yt6.html5_fail = false
}

if (!yt6.oldbrowser && typeof Object.entries == 'function' && Object.entries.toString().indexOf('[native code]') != -1) {

// in src.constructor
// skipping those of "function Object()" -> only usable media URLs will get extracted (A and V formats which are either
// currently loaded or were previously selected by the user on the native YT player)

yt6.tmp = ""+
"yt6.flatten = function(src, path, seen) { \
  var path = path || [], seen = seen || new Map(), c = src.constructor, cts = (c) ? c.toString() : '';\
  var key, value, oc, pt;\
  if (c && c.name != 'Symbol' && cts.indexOf('function Window()') != 0 && cts.indexOf('function(){return') != 0 && cts.indexOf('function HTMLIframeElement()') != 0 && (cts.indexOf('function Object()') != 0 || yt6.dummy) ) \
  try {\
  for (let [key,value] of Object.entries(src)) {\
    if (key && value) {\
      if (key == 'videoId') yt6.ytp.video_id = value;\
      if (key == 'videoData' && !yt6.pre_ad) {\
	if (ytplayer.config && ytplayer.config.args) {\
	  if (value.title) ytplayer.config.args.title = value.title;\
	  if (value.lengthSeconds) ytplayer.config.args.length_seconds = value.lengthSeconds;\
	};\
	if (typeof ytInitialPlayerResonse != 'undefined') {/*yt6d.rpt2 && yt6d.rpt2 != ytInitialPlayerResonse) {*/\
	  ytInitialPlayerResponse = value.playerResponse;\
	  if (value.watchNextResponse) ytInitialData = value.watchNextResponse;\
	  var a = document.getElementById('ytInitialData-script'); if (a) a.innerHTML = 'var ytInitialData = '+ JSON.stringify(ytInitialData);\
	   /*console.log([...path, key, value])*/;\
	}\
      };\
      if (key == 'element' && typeof value.hasAttribute == 'function' && value.hasAttribute('tabindex') && (value.hasAttribute('id') || value.hasAttribute('class'))) { /*yt6.ytp.dump = value*/ };\
    };\
    if (typeof value == 'object' && value != null && path.indexOf('yt6') == -1) {\
      if (!seen.has(value)) {\
        seen.set(value, path);\
        yt6.flatten(value, [...path, key], seen);\
      }\
    }\
  };\
  } catch(e) {/*console.log(e)*/};\
  if (!path.length) {\
    var op = {}, eid, nuff = 0, z; if (!yt6.age.sc && !yt6.age.dl) yt6.ttsurl = [];\
    for (let [oc,pt] of seen) {\
      Object.keys(oc).filter(x => typeof oc[x] == 'string')\
      .forEach(function(x){/*console.log(eid)*/;\
		z = unescape(unescape(oc[x]));\
	  	if (z.indexOf('videoplayback?') > -1){\
	  	  eid = z.split('&id=')[1] || z.split('?id=')[1];\
	  	  if (eid) { eid = eid.split('&')[0].split('?')[0];\/\*.substring(0,19);\*\/ \
		    if (!(yt6d.current.eid.includes(eid))) {\
		      yt6d.current.eid.push(eid);\
		    }\
		    if (z.indexOf(eid) > -1) {\
		      if ([...pt, x].toString().indexOf('mediaSource') > -1 && [...pt, x].toString().indexOf('url') > -1) {\
			if (yt6.fmts_fallback.A.all.indexOf(itag(z)) > -1) { yt6.ytp.A = z } else yt6.ytp.V = z;\
		      }\
		    }\
	  	  }\
		}\
		if (!yt6.age.sc && !yt6.age.dl) if (z.indexOf('timedtext?') > -1 && z.indexOf('http') == 0) yt6.ttsurl.push(z);\
		if (nuff < 3){\
		  if (oc[x].length > 1500) { nuff = nuff };\
		  if (eid && !yt6d.previous.eid.includes(eid) && oc[x].includes(eid)) return op[[...pt, x]] = oc[x]\
		}\
      });\
    };/*console.log('previous: '+ yt6d.previous.eid +'\\n\\ncurrent: '+yt6d.current.eid)*/;\
    return op;\
  }"+
"}"; eval(yt6.tmp)

yt6.tmp = "yt6.durl = function(ypsi) {"+
"var durl = Object.values(ypsi).filter(\
  x => ((x.includes('videoplayback?') || x.includes('videoplayback%253F') || x.includes('videoplayback%3F') || (!yt6.manifest.mpd && x.includes('manifest.googlevideo'))) && !x.includes('range=') && !x.includes('{'))\
);\
return durl }"; eval(yt6.tmp)

yt6.tmp = "yt6.dsig = function(ypsi) {"+
"var dsig = new Set(\
  Object.keys(ypsi).filter(x => x.includes(',sig')).map(x => ypsi[x])\
).values();\
return dsig }"; eval(yt6.tmp)

yt6.tmp = "yt6.lsig = function(ypsi) {"+
"var lsig = new Set(\
  Object.keys(ypsi).filter(x => x.includes(',lsig')).map(x => ypsi[x])\
).values();\
return lsig }"; eval(yt6.tmp)

yt6.tmp = "yt6.vqua = function(ypsi) {"+
"var vqua = Object.keys(ypsi).filter(x => x.includes(',qualityLabel'))\
  .map(x => ypsi[x])[Symbol.iterator]();\
return vqua }"; eval(yt6.tmp)

yt6.tmp = null

}





function test_4(peek) {

  yt6d.current.eid = []
  yt6.default_link = def_link()

  if (yt && yt.player) {

    var z = gid('test-4')

    if (!z) {
      var z = document.createElement('div')
      z.id = 'test-4'
      yt6.appendChild(z)
      z.setAttribute('style','display: none'); z.style.display = 'none';
      z.setAttribute('name','test-4')
    } else {
	  try { z.innerHTML = '' } catch(e) {}
	}

    if (yt6.error == '  \n  ') return void 0;


    function uniq(item, pos, self) {
      return self.indexOf(item) == pos;
    }

    //yt6.error = ''

    var ypsi;

    if (typeof Object.entries != 'undefined' && typeof yt6.flatten != 'undefined') try {
      ypsi = ytPubsubPubsubInstance || _yt_player
      ypsi = yt6.flatten(ypsi)
    } catch(e) { ypsi = undefined }


    if ( yt.player.Application && (gid('player-api') || pcont()) && (!yt6.ytg && (yt6.oldbrowser || yt6.html5_fail || typeof Object.entries == 'undefined' || (typeof Object.entries == 'function' && Object.entries.toString().indexOf('[native code]') == -1) || typeof yt6.flatten == 'undefined' || typeof ypsi == 'undefined') ) ) {


      try { var ypa = yt.player.Application.create('test-4', ytplayer.config, ytplayer.web_player_context_config)

	ypa.dispose()

      } catch(e) { yt6.error = '  \n  ' }


    } else if (typeof Object.entries == 'function' && Object.entries.toString().indexOf('[native code]') != -1) {

      //if (yt6.blocked || (player() && yt6.p.firstChild && !yt6.p.firstChild.nextSibling)) {
	//try { yt6.ytp.handle = yt.player.Application.create('ytp_dump', ytplayer.config); yt6.ytp.handle.pauseVideo(); console.log(yt6.ytp.handle) } catch(e){ }
      //} //else console.log(v_(yt6.p))

      try { 

	//g,9,Y,0,target,app,g,C,ea,g,33,ea,g,36,context,videoData,ea,g,3[...]
	// [...] = ,fa = currently played a
	// [...] = ,ga = currently played v

	//,videoData,ea,g,3,B,C,g,[???],A,A
	// [???] = [133, 134, 135, 136, 139, 160, 242, 244, 247, 278]

	//,videoData,ea,g,3,B,C,g,[???],A[...]
	// [...] = ,o
	// [...] = ,o,signature
	// [???] = [243, 140]


	//var ypsi = yt6.flatten(ytPubsubPubsubInstance)
	var durl = yt6.durl(ypsi)
	var lsig = yt6.lsig(ypsi)
	var dsig = yt6.dsig(ypsi)
	var vqua = yt6.vqua(ypsi) //unused

	ypsi = [];

	var a,v
	if ((yt6.layout == 16 && yt6.encrypted) || yt6d.init)
	try { // to filter out unusable links

		FireEvent2(player(), 'contextmenu')

		var k = gc('ytp-menuitem')
		for(i=0;i<k.length;i++){
		  if (k[i] && ( k[i].textContent.indexOf('Stats for nerds') != -1 || i == k.length-1 )) {
		    FireEvent2( k[i], 'click');
		    break
		  }
		}

		var z = gc('ytp-popup ytp-contextmenu')[0]
		if (z) z.style.display = 'none'
		var z = gc('html5-video-info-panel-content')[0]
		if (z) {
		  z.parentNode.style = 'display: none'
		  var y = z.innerHTML.split('Codecs')[1]
		  if (y) {
		    var y = y.split('<span>')[1]
		    if (y) {
		      var y = y.split('</span>')[0]
		      if (y && y.indexOf(')') != -1) {
		        var v = y.split('(')[1]; if (v) v = v.split(')')[0] * 1
		        var a = y.split('(')[2]; if (a) a = a.split(')')[0] * 1
			if (typeof v == 'number' && typeof a == 'number') { var added, otf;
			for (i=0;i<durl.length;i++){
			  var z = durl[i], added = false
			  if (z) {
			    if (z.indexOf('source=yt_otf') > -1 || z.indexOf('source/yt_otf') > -1) continue;
			    if ((z.indexOf('itag='+v) > -1 || z.indexOf('itag/'+v) > -1) && (z.indexOf('mime=video') > -1 || z.indexOf('mime/video') > -1)) {
			      for (j=0;j<yt6.userprefV.length;j++){
				if (yt6.userprefV[j] == v) added = true
			      };
			      if (!added) yt6.userprefV.push(v)
			    } else if ((z.indexOf('itag='+a) > -1 || z.indexOf('itag/'+a) > -1) && (z.indexOf('mime=audio') > -1 || z.indexOf('mime/audio') > -1)) {
				for (j=0;j<yt6.userprefA.length;j++){
				  if (yt6.userprefA[j] == a) added = true
				};
				if (!added) yt6.userprefA.push(a)
			      }
			  }
			}
			}
		      }
		    }
	          }
		}

		var x = gclass('html5-video-info-panel-close')[0]
		if (x) { FireEvent2( x, 'click') }
		  $waitUntil(function(){ if (gc('ytp-popup ytp-contextmenu')[1]) return true },
		    function() { var z = gc('ytp-popup ytp-contextmenu');
			if (z[1]) z[1].style.display = 'none';
			if (z[0]) z[0].parentNode.removeChild(z[0])
		    },250,5000)

	} catch(e) {}



      } catch(e) { yt6.error = '  \n  ' }


    }



    if (yt6.error != '  \n  ') {



      if (typeof ypsi == 'undefined') {


	function prune(key, holder, depthDecr) {
	  if (yt6.error == '  \n  ') return ''
	  var q, z, partial = [], value = holder[key];
	  switch (typeof value) {
	    case 'string':
	      return '"' + value + '"';
	    case 'object':
	      if (0 >= depthDecr || seen.indexOf(value) >= 0)
		return;
	      seen.push(value);
	      for (q in value)
		if (Object.prototype.hasOwnProperty.call(value, q)) {
		  try {
		    z = prune(q, value, depthDecr - 1);
		  } catch(e){ //ur browser's too old for this shit
		      yt6.error = '  \n  ';
		      break
		    }
		  if (z) {
		    partial.push(q + ':' + z);
		  }
		}
	      return '{' + partial.join() + '}';
	  }
	}

	var seen = []
	var gvd = prune('', {'': ypa}, 9);//YT deleted getvideodata: JSON.stringify(ypa.getVideoData());
	//test[yt6.txt] = yt6.gvd;

	if (gvd) var xr = gvd.match(/https:[^"]+videoplayback[^"]+/g);

	if (xr) {

	  //var ya = yt6.xr.filter(z => z.length < 1000);
	  var filtR = function(z) { if (z && z.length < 1000) return z }

	  var ya = xr.filter(filtR);
	  /*for (i = 0; i <= ya.length; i++) {
	    for (j = i+1; j <= ya.length; j++) if (ya[i] && ya[j] && ya[i] == ya[j]) ya.splice(j, 1);
	  }*/

	  if (ya && ya.length) {

	    var signame = (gvd.split('\u0026lsig=')[1]) ? 'sig' : 'signature'
	    var dsig =  gvd.match(/itag+\S+s=+([A-Z]|[a-z]|[0-9]|[_\-=%&":,])+(?!])/g) ||
			//gvd.match(/&s=+([A-Z]|[a-z]|[0-9]|[_\-=%&])+(?!&)/g) ||//itag+\S+
			gvd.match(/[0123456789ABCDEF.]+(?=")/g)

	    var filtR = function(z) { if (z && z.length > 20) return z }
	    if (dsig) dsig = dsig
	      .filter(filtR).filter(uniq);//.filter(z => z.length > 20).filter(uniq);

	    var filtR2 = function(item, pos) {
	      var itag_ = qr(item).itag
	      if (itag_) {
		if (signame == 'signature') { // old
		  if (item.indexOf('ratebypass=yes') == -1) item = item + '&ratebypass=yes'
		  var dsig1 = gvd.split('id:"'+ itag_ + '"')[1]
		  if (dsig1) dsig1 = dsig1.split(',signature:"')[1]
		  if (dsig1) dsig1 = dsig1.split('"')[0];
		  if (typeof dsig1 != 'undefined') {
		    return item + '&signature=' + dsig1
		  } else if (dsig) return item + '&signature=' + dsig[pos]
		} else { // new
		    for(i=0;i<dsig.length;i++) {
		      dsig1 = ''
			if (dsig[i].split('%26sig%3D')[1]) {
			  dsig1 = dsig[i].split('%26sig%3D')[1].split('%26')[0]
			}
			if (dsig[i].split('itag":')[1] && dsig[i].split('itag":')[1].split(',')[0] == itag_ && dsig[i].split('\\u0026sig=')[1]) {
			  dsig1 = dsig[i].split('\\u0026sig=')[1].split('\\u0026')[0].split('"')[0]
			}
			if (dsig[i].split('"')[1] == itag_ && dsig[i].split(',s:"')[1]) {
			  dsig1 = dsig[i].split(',s:"')[1].split('"')[0]
			}
			if (dsig[i].split('%26')[0].split('itag%3D')[1] == itag_ && (dsig[i].split('&s=')[1] || dsig[i].split('\\u0026s=')[1])) {
			  dsig1 = dsig[i].split('&s=')[1] || dsig[i].split('\\u0026s=')[1]
			  if (dsig1) dsig1.split('&')[0].split('\\u0026')[0].split(',')[0].split('"')[0]
		        }

			if (dsig1) {
			  item = item + '&sig=' + dsig1
			  return item
			}
		    }
		  }
	      }

            }

	    var durl = ya.filter(uniq).map(filtR2);//.map((item, pos) => item + '&signature=' + yt6.dsig[pos]);

	  } else {
	      var durl = xr.filter(uniq);
	    }

	  ya = xr = gvd = null;

	}//!xr

      }//!ypsi



      if (typeof durl != 'undefined' && durl.length > 1) {


	var cfmt = [], dsigA, lsigA;
	if (typeof dsig == 'object' && dsig && typeof dsig.next == 'function')
	  dsigA = Array.from(dsig)
	if (typeof lsig == 'object' && dsig && typeof lsig.next == 'function')
	  lsigA = Array.from(lsig)



	var signame, ampersand, fmts, type, itag, lmt, clen, quality, sp, s, length = 0, url;
	//for (var eurl of durl) {
	var test_itags = []
	for (k=0;k < durl.length;k++) {
	  var eurl = durl[k]; 
	  var c = conf('args')
	    if (!c[0]) { ytplayer.config = {}; ytplayer.config.args = {} }
	    if (!c[1]) { ytplayer.config.args = {} }
	    var c = conf('args')
	    if (typeof eurl == 'string') {
	      if (eurl.split('manifest.googlevideo')[1]) {
	        if (!yt6.manifest.mpd && eurl.split('dash/')[1]) yt6.manifest.mpd = eurl
	        if (!yt6.manifest.hls && eurl.split('hls_variant')[1]) yt6.manifest.hls = eurl
	        continue
	      }
	    if (eurl.indexOf('itag') != -1) {
	      itag = eurl.split('itag=')[1] || eurl.split('itag/')[1] || eurl.split('itag%3D')[1]
	      itag = (itag) ? 1 * (itag.split('&')[0].split('&amp;')[0]) : null
	      if (typeof itag == 'number' && !isNaN(itag)) {
		if (yt6d.init && (itag == a || itag == v)) continue; // updating formats which are currently in use by the ytplayer would break it, better skip those
		signame = (signame) ? signame : (eurl.split('lsig=')[1] || eurl.split('lsig%3D')[1]) ? 'sig' : 'signature'
		fmts = (itag < 103) ? 'url_encoded_fmt_stream_map' : 'adaptive_fmts'
		if (yt6.ytp.video_id && window.location.href.indexOf(yt6.ytp.video_id) > -1) {

		  if (eurl.indexOf('http') == 0 && !yt6) {
		    var z = qual[itag]
		    if (fmts == 'url_encoded_fmt_stream_map') { // reconstruct stream_map from plain url
		      if (z) {
		        quality = qual[itag]['q']
		        type = encodeURIComponent(qual[itag]['m']).split(' ').join('%2B')
		      }
		      var x = (eurl.indexOf('https://') == -1) ? protocol() : ''
		      eurl = 'sp=' + signame + '&type=' + type + '&quality=' + quality + '&itag=' + itag + '&url=' + encodeURIComponent(x + eurl.split('&' + signame)[0].split('&title=')[0])
		    }
		    if (fmts == 'adaptive_fmts') { // reconstruct adaptive_fmts list from plain url
		      if (z) {
			quality = qual[itag]['q']
			type = encodeURIComponent(qual[itag]['m'].split(' ').join('+'))
			s = eurl.split('lsig=').join('').split(signame +'=')[1] || eurl.split('&s=')[1]
			if (s) { s = s.split('&')[0] } else s = ''
			lmt = (eurl.split('lmt=')[1]) ? eurl.split('lmt=')[1].split('&')[0] : ''
			clen = (eurl.split('clen=')[1]) ? eurl.split('clen=')[1].split('&')[0] : ''
			var x = (eurl.indexOf('https://') == -1) ? protocol() : ''
		      }
		      eurl = 'itag=' + itag + '\\u0026sp=' + signame +'\\u0026s=' + s + '\\u0026type=' + type + '\\u0026quality=' + quality + '\\u0026url=' + encodeURIComponent(x + eurl.split('&' + signame)[0].split('&title=')[0]) + '\\u0026lmt=' + lmt + '\\u0026clen=' + clen
		    }
		  }

		    if (c[1] && !c[1][fmts]) ytplayer.config.args[fmts] = eurl + ','
		    if (c[1] && !c[1][fmts].includes(eurl)) {
		      ytplayer.config.args[fmts] = eurl + ',' + ytplayer.config.args[fmts] 
		    }

		}
		ampersand = (eurl.split('\\u0026sp=')[1] || eurl.split('\\u0026s=')[1]) ? '\\u0026' : '&'
		if (eurl.length < 1500){
		if (fmts == 'url_encoded_fmt_stream_map') {
		  var obj = {}
		  var ft = eurl.split(ampersand)
		  for(j=0;j<ft.length;j++){
		    var z = ft[j].split('='); if (z && z.length)
		    for(i=0;i<z.length;i++){
		      if (z[i]=='url'||z[i]=='s'||z[i]=='sp') {
		        obj[z[i]] = (z[i] != 'url') ? z[i+1] : unescape(z[i+1])
		      }
		    }
		  }
		  eurl = obj.url
		  if (obj.s && obj.sp) { yt6.encrypted = true; eurl = eurl + '&' + obj.sp + '=' + dc(obj.s).split('D3%').join('') } //else yt6.encrypted = false
		} else {

		  }
		}
	      }
	    }
	    }

	  if ((yt6.mobile || yt6.ytm) && k == durl.length-1) {
	    var fmts = ['url_encoded_fmt_stream_map','adaptive_fmts']
	    for(i=0;i<2;i++) {
	      var x = ytplayer.config.args[fmts[i]]
	      if (x) {
		var x = x.toString();
		if (x.length-1 == x.lastIndexOf(',')) { ytplayer.config.args[fmts[i]] = x.substring(0, x.length-1) }
	      }
	    }
	  }

	  if (eurl) {
	    var lsig0, sig0
	    if (eurl.split('itag=').length > length) {
	      length = eurl.split('itag=').length
	      fmts = eurl.split(',')
	      for(i=0;i<fmts.length;i++) {
		itag = fmts[i].split('itag=')[1]; if (!itag) { continue } else itag = itag.split('&')[0]
		if (fmts[i].indexOf('s=') == 0 || fmts[i].indexOf(ampersand + 's=') > -1 || fmts[i].indexOf('sig=') != -1 || fmts[i].indexOf('signature') != -1) {

		  lsig0 = (fmts[i].split('&lsig=')[1] || fmts[i].split('?lsig=')[1])
		    lsig0 = (lsig0) ? lsig0.split('&')[0] : ''

		  var sig0 = (fmts[i].split('&sig=')[1] || fmts[i].split('?sig=')[1])
		    sig0 = (sig0) ? dc(sig0.split(ampersand)[0]) : ''
		  if (!sig0) sig0 = (fmts[i].indexOf('s=') == 0) ? fmts[i].split('s=')[1] : fmts[i].split(ampersand +'s=')[1]
		  sig0 = (sig0) ? sig0.split(ampersand)[0] : ''

		  var sig1 = dc(unescape(sig0))

		}

		url = (fmts[i].split('url=')[1]) ? unescape(fmts[i].split('url=')[1].split('&')[0]) : fmts[i]
		if (typeof URLSearchParams != 'undefined' && ampersand == '&') {
		  var usp = new URLSearchParams((fmts[i].split('?')[1] || fmts[i].split('%3F')[1]))
		  //usp.set('ratebypass','yes')
		  //if (yt6.encrypted && dsigA) usp.set('sig', dsig1) //dsig.next().value);//'signature' --> 'sig'
		  //var itag_ = usp.get('itag') || fmts[i].split('itag=')[1].split('&')[0]
		  var efmt;
		  efmt = qual[itag];
		  if (efmt) { efmt = efmt['t'] || itag } else efmt = itag
		  cfmt[itag] =
		  //`<a href="${eurl}">${efmt}</a>`;
		  '<a name="' + itag + '" href="' + url + ((yt6.encrypted) ? '&' + signame +'=' + sig1 + '" lsig0="' + lsig0 + '" sig0="'+ sig0 +'" sig1="' + sig1 : '') + '">' + efmt + '</a>';//nurl.href
	        } else {
		    var usp = fmts[i].split('url=')[1]; if (usp) usp = unescape(usp.split(ampersand)[0])
		    if (usp) {
		      var efmt = get_quality(usp)
		      var z = qr(usp); if (z && z.itag) cfmt[z.itag] =
		      '<a name="' + z.itag + '" href="' + usp + ((yt6.encrypted) ? '&' + signame +'=' + sig1 + '" lsig0="' + lsig0 + '" sig0="' + sig0 + '" sig1="' + sig1 : '') + '">' + efmt + '</a>';//.replace('missing_signature', dsig1)
		    }
	          }
	      }
	    }
	  }
	}

	//gid('test-4').innerHTML = Object.keys(cfmt).map(z => cfmt[z]).filter(z => /href/.test(z)).join('<br>');
	gid('test-4').innerHTML = cfmt.join('').split('</a>').join('</a><br>')

	dsig = durl = usp = efmt = cfmt = null;


	if (ytplayer.config.args.url_encoded_fmt_stream_map || ytplayer.config.args.adaptive_fmts) yt6.missing_sources = false

	//durl
      }

    }

  }

  if (!yt6.pre_ad) player_response()

}


function shorts() {
  return (location.href.split('/shorts/')[1]) ? true : false
}



function unhide(elem) { //console.log(yt6.u)

  var bm0 = (elem && elem.parentNode) ? elem : gid('bm0')
  if (bm0 && bm0.id == 'bm0' && !yt6.ytp.embed) {
    if ( (yt6.status == 'error' && !yt6.mobile) || (yt6.layout == 12 && yt6.status == 'unplayable' && bm0.parentNode != gid('movie_player_to_insert')) ) {
      gid('movie_player_to_insert').appendChild(bm0)
      if (yt6.status != 'error' && !(yt6.p && yt6.p.tagName == 'IFRAME')) {
	alert(yt6.status) // this should give yt time to complete its player creating process (sometimes needed by firefox at encrypted signature videos on the old layout forced by add-on)
	if (yt6.flash.forced) {
	  var z = gid('flash_on')
	  if (z) { z.checked = false; z.setAttribute('checked','') }
	  yt6.flash.forced = false
	}
      }
      return void 0
    }
  }
  if (yt6.api && bm0 && bm0.parentNode && bm0.parentNode != yt6.api) {
    var a = yt6.api.firstChild
    if (a && a.nextSibling) {
      yt6.api.insertBefore(bm0, a.nextSibling)
    } else yt6.api.appendChild(bm0)
  }
}


function relocate_mep(hide) { if (shorts()) return void 0

    var p = player(), bc
    //if (p && !p.getAttribute('time') && p.tagName != 'OBJECT') { p.name = 'YouTube_TM'; p.setAttribute('name','YouTube_TM'); p.setAttribute('class','YouTube_TM') }
    if (!yt6.original) yt6.original = original(p) || getElementsByAttribute(document,'div','name','original')[0]
    
    if (p && p.parentNode && !p.getAttribute('time') && p.tagName == 'DIV' && p.className.indexOf('forced') == -1 && p.getAttribute('name') != 'replacement') {
      if (p.className.indexOf('YouTube_TM') == -1) p.setAttribute('class','YouTube_TM ' + p.className)
      if ((!p.getAttribute('name') && !yt6.original) || (p.getAttribute('name') && p.getAttribute('name') != 'YouTube_TM' && p.getAttribute('name') != 'original')) {
	p.setAttribute('name','original')
	p.setAttribute('name','original')
      } else if (p.getAttribute('name') != 'original' ) {
	  p.setAttribute('name','YouTube_TM')
	}
    }

    //yt6.original = getElementsByAttribute(document,'div','name','original')[0]

    var p = getElementsByAttribute(document,'div','name','YouTube_TM')[0]
    if (!p) p = getElementsByAttribute(document,'embed','name','YouTube_TM')[0]
    if (yt6.layout == 16 || yt6.ytg) {
	var fmp = yt6.api.getElementsByTagName('OBJECT')[0]
	if (!fmp) fmp = yt6.api.parentNode.getElementsByTagName('OBJECT')[0]
	if (fmp && fmp.getAttribute('name') == 'me_flash' && fmp.fv_vid != video_id()[0]) { fmp.parentNode.removeChild(fmp) }
    }
    var p3 = gid('movie_player') || gid('movie_player1')
    var bm0 = gid('bm0')
    var z = gid('movie_player_to_insert')
    var y = gid('movie_player_to_dispose')

  if (hide || (typeof p != 'undefined' && (p.parentNode.getAttribute('id') == 'player-api' || p.parentNode.getAttribute('id') == 'ytd-player' || p.parentNode.getAttribute('id') == 'player-container')) ) {

	if (bm0) z.appendChild(bm0)
	if (!hide) {
	  if (p && p.getAttribute('time')) {
	    p.parentNode.removeChild(p)
	  } else if (p && p.nodeName == 'DIV') {
		y.appendChild(p)
		var x = (gid('movie_player0') || yt6.layout != 12) ? '2' : '0'; p.setAttribute('id','movie_player' + x)
	    }
	} else {
		if (yt6.layout != 16 || yt6.ytg) {
		  yt6.api = (!yt6.ytp.embed) ? gid('player-api') : gid('player')
		} else yt6.api = (!yt6.ytm) ? document.getElementsByTagName('ytd-player')[0] || pcont() : gc('player-wrapper style-scope ytmusic-player')[0]

		if (yt6.api && yt6.api.getAttribute('id') == 'ytd-player'){// p && && p.tagName != 'EMBED'
		  var c = yt6.api.children; 
		  for (i=0;i<c.length;i++){
			  if (c[i] && c[i].getAttribute('id') == 'container' && c[i].getAttribute('class') && c[i].getAttribute('class').indexOf('ytd-player') > -1) { yt6.api = c[i]; break }
		  }
		}

		if (p && !yt6.flash.forced) { yt6.api.insertBefore(p, yt6.api.firstChild); p.setAttribute('id','movie_player') }

	  }

  } else {
	if (z) {
	  for(var i in z.childNodes) {
	    var x = z.childNodes[i]
	    if (x && typeof x.getAttribute == 'function' && (x.getAttribute('id') == 'movie_player1' || (!p && x.getAttribute('id') == 'movie_player')) ) {
		if (yt6.layout != 16 || yt6.ytg) {
		  yt6.api = bc = (!yt6.ytp.embed) ? gid('player-api') : gid('player')
		} else { yt6.api = (!yt6.ytm && !yt6.ytp.embed) ? document.getElementsByTagName('ytd-player')[0] || pcont() : gc('player-wrapper style-scope ytmusic-player')[0], bc = (!yt6.ytm) ? pcont() : yt6.api }

		if (yt6.api && yt6.api.getAttribute('id') == 'ytd-player'){// p && && p.tagName != 'EMBED'
		  var c = yt6.api.children
		  for (i=0;i<c.length;i++) {
		    if (c[i] && c[i].getAttribute('id') == 'container' && c[i].getAttribute('class') && c[i].getAttribute('class').indexOf('ytd-player') > -1) { yt6.api = bc = c[i]; break }
		  }
		}
		x.style.display = ''
		if (bm0) bc.appendChild(bm0)
		yt6.api.insertBefore(x, yt6.api.firstChild)
		break
	    } else {
		if (bm0 && (gid('movie_player1' || (p && p.parentNode.getAttribute('id') != 'player-api' && p.parentNode.getAttribute('id') != 'ytd-player' && p.parentNode.getAttribute('id') != 'player-container'))) ) {
		  if (yt6.layout != 16 || yt6.ytg) {
		  gid('player-api').appendChild(bm0)
		  } else {
		      bc = (!yt6.ytp.embed) ? ((!yt6.ytm) ? document.getElementsByTagName('ytd-player')[0] || pcont() : gc('player-wrapper style-scope ytmusic-player')[0]) : yt6.api
		      if (bc && bc.getAttribute('id') == 'ytd-player') {
			var c = bc.children;
			for (i=0;i<c.length;i++) {
			  if (c[i] && c[i].getAttribute('id') == 'container' && c[i].getAttribute('class') && c[i].getAttribute('class').indexOf('ytd-player') > -1) { bc = c[i]; break }
			}
		      }
		      bc.appendChild(bm0)
		    }
		}
	      }

	  }


	}
    }


  if (yt6.api && yt6.api.hasAttribute('hidden')) yt6.api.removeAttribute('hidden')

}



function forceFlashplayerObject(auto){
//https://addons.mozilla.org/en-US/firefox/addon/youtube-flash-player/versions/beta

	//if (yt6.flash.debug) console.log(yt6.flash.call)

	var fmp = gid('movie_player'), iframe
	if (fmp) if (fmp.tagName == 'EMBED' && (fmp.fv_vid == video_id()[0] || video_id()[0] == yt6.vid ) && fmp.fv_done == 1) {
	  //return void 0; // better to do the process multiple times
	} else {
	  if (fmp.tagName == 'IFRAME') iframe = true
	  if (fmp.getAttribute('name') == 'me_flash' && fmp.fv_vid != video_id()[0]) { fmp.parentNode.removeChild(fmp) }
	}


    var c = conf('args')
    var p = player(), p = yt6.p, ffp = gc('forced flashplayer')[0], fv = correct_flashvars(c[1])

    yt6d.x = clone(yt6.x)


yt6.html5_fail = html5_fail()

if (yt6.html5_fail) {
  if (!( yt6.layout == 16 && !gc('ytp-error')[0]) && p && p.tagName == 'DIV' && p.parentNode == yt6.api) {
    yt6.flash.forced = 2; yt6.flash.flag = 1
  } else yt6.html5_fail = false
}



  if (!(yt6.flash.vars == fv && ffp && ffp.tagName == 'EMBED' && ffp.getAttribute('flashvars') == fv)) {

    yt6.flash.vars = fv
	
    var t = (player() || !yt6.api) ? gid('movie_player_to_insert') : yt6.api


    if (yt6.html5_fail) { yt6.flash.flag = 1 }

    yt6.setAttribute('style','display: none;')
    if (yt6.getAttribute('style') == 'display: none;') {//post-IE8

	var z = document.createElement('embed')
									//for old browsers (except MSIE) at the beginning
	var style = (!yt6.oldbrowser) ? 'display: none; position: relative; left: 0px; top: 0px;' : ''; 		// leave 'style' empty
	var flashvars = (c[0] && c[1]) ? fv : '';			// leave 'flashvars' empty
	var id = (!yt6.oldbrowser) ? 'movie_player1' : 'movie_player';	// let them have the true id (they don't like elements getting moved around while flash player is still loading)

	if (p) {
	  if (p.getAttribute('id').indexOf('_uid_') > -1)  t = yt6.api
	  try { gid('movie_player_to_dispose').insertBefore(p, gid('movie_player_to_dispose').firstChild) } catch(e){}
	  try { p.pauseVideo() } catch(e){}
	  if (!p.getAttribute('time') && p.getAttribute('name') != 'replacement') {
	    //if (p.className.indexOf('YouTube_TM') == -1) p.setAttribute('class','YouTube_TM ' + p.className)
	    p.setAttribute('id','movie_player0')
	  }
	}


	    var p3 = document.getElementsByClassName('forced flashplayer')
	    if (p3[0]) {
	      p3 = p3[p3.length-1]
	    } else
	      var p3 = gid('movie_player1'); if (!p3 && gid('movie_player') && gid('movie_player').tagName == 'EMBED') p3 = gid('movie_player')


	if (browserName != 'IE' && p3 && p3.getAttribute('time') && p3.tagName == 'EMBED') {
	  //console.log('flash embed already present, just modify it')
	  if (yt6.html5_fail) t = yt6.api
	  p3.setAttribute('id','movie_player1')
	  var z = p3.getAttribute('flashvars'); if (z && z.indexOf('fmt_list=') == -1) { p3.style.display = 'none' }
	  p3.setAttribute('flashvars', flashvars)
	  p3.src = '' 		    // new way to deactivate flash objects
	  p3.style.display = 'none' // the old way, but depended on browser type also
	  p3.src = yt6.flash.swfbin4;
	  p3.style.display = 'block'
	  //p3.style.visibility = (yt6d.x) ? 'hidden' : 'visible'
	  p3.style.opacity = '1.1'
	  t.insertBefore(p3, t.firstChild)
	  var new_fmp = p3

	} else { //console.log('create embed element')
	    if (browserName == 'IE' && p3) { try { p3.pauseVideo() } catch(e){}; p3.style.display = 'none'; p3.parentNode.removeChild(p3) }
	    t.insertBefore(z, t.firstChild)

	    if (!yt6.flash.swfbin4 && yt6.flash.swfbin4_backup) yt6.flash.swfbin4 = yt6.flash.swfbin4_backup.split('player-')[1].split('/')[0]
	    z.setAttribute('class','forced flashplayer')
	    if (style) z.setAttribute('style', style)
	    z.setAttribute('wmode', yt6.wmode)
	    z.type = 'application/x-shockwave-flash'
	    z.src = yt6.flash.swfbin4
	    z.setAttribute('aria-label','YouTube Video Player')
	    z.setAttribute('name','movie_player')
	    z.id = id
	    z.setAttribute('flashvars', flashvars)
	    z.setAttribute('allowfullscreen','true')
	    z.setAttribute('allowscriptaccess','always')
	    z.setAttribute('bgcolor','#000000')
	    z.setAttribute('height','100%')
	    z.setAttribute('width','100%')
	    z.setAttribute('time', new Date().toLocaleString().toString())
	    z.style.position = 'relative'
	    z.style.opacity = '1.1'
	    var new_fmp = z; if (!player()) z.style.display = 'block'
	  }

    } else {  yt6.ie7 = true;
	//case of MSIE 7/8 on XP
	// from '17 February/March onward (since wannacry spread?)
	// all these data must be present at code injecting time
	gid("player-api").innerHTML = '<span tabindex="0"></span><span tabindex="0"></span><noembed></noembed>'
	gid("player-api").firstChild.innerHTML = '<embed style="left: 0px; top: 0px;" wmode="' + yt6.wmode + '" type="application/x-shockwave-flash" src="' + yt6.flash.swfbin4 + '" aria-label="YouTube Video Player" name="movie_player" id="movie_player" flashvars="'+ fv +'" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000" time="'+new Date().toLocaleString().toString()+'" height="100%" width="100%">';
	var new_fmp = gid('movie_player')	  
      }

    // styles
    if (yt6.getAttribute('style')) { yt6.removeAttribute('style') }
    if (new_fmp) try {
      new_fmp.style.left = (yt6.yt_l) ? yt6.yt_l + 'px' : '0px'
      new_fmp.style.top = (yt6.yt_t) ? yt6.yt_t + 'px' : '0px'
      if (yt6.layout == 16) {
        new_fmp.style.marginLeft = (yt6.yt_l) ? yt6.yt_l + 'px' : '0px'
        new_fmp.style.marginTop = (yt6.yt_t) ? yt6.yt_t + 'px' : '0px'
      }
      new_fmp.style[yt6.propName] = yt6.yt_prop
    } catch(e) {}


    if (!(yt6.embed && yt6.embed.uid))
    if (!ytplayer.config) {

	ageless_verification()
	if (yt6.html5_fail) try { fmp.setAttribute("flashvars", fv); fmp.fv_vid = video_id()[0]; fmp.fv_done = 1 } catch(e) {}

    } else {
	if (ytplayer && ytplayer.config) if (!ytplayer.config.args) {
	  yt6.parentNode.removeChild(yt6)
	} else {
	    if (!ytplayer.config.args.url_encoded_fmt_stream_map) {
	      ageless_verification()
	    } else {

		if (fmp && fmp.tagName == 'EMBED') {
		  try { fmp.setAttribute("flashvars", fv); fmp.fv_vid = video_id()[0]; fmp.fv_done = 1;
		    fmp.setAttribute('src',''); fmp.style.display = 'none';
		    if (yt6.oldbrowser) { fmp.setAttribute('src', yt6.flash.swfbin4) }//fmp.style.display = "block" }
		  } catch(e) { }
	        }

	      }
	  }
      }

  } else { var new_fmp = ffp }


    if (fmp && fmp.getAttribute('src') == 'about:blank') yt6.parentNode.removeChild(yt6)

    if (new_fmp) {
      if (iframe) new_fmp.iframe = true
      if (yt6.flash.call != 'checkbox' && yt6.xhr.async && typeof yt6.fnCheckLocation == 'number') {
	new_fmp.style.display = 'none'
	new_fmp.src = yt6.flash.swfbin4 //(browserName != 'IE') ? '' : yt6.flash.swfbin4
      }
    }

    return new_fmp

};// forceFlashplayerObject();



function open_outside_of_playlist() {
			var index = location.href.split('&index=')[1]
			index = (index) ? index.split('&')[0] : 2
			if (yt6.pls && index - 2 !== yt6d.previous.pl_index) {
				try { yt6.newin = window.open(protocol() + '//www.youtube.com/watch?v=' + video_id()[0]).blur() } catch(e) { }
				window.focus()
			}
			yt6.newin = null
}



function amplifyMedia(mediaElem, multiplier) {
  var result = {}
  try {
    var context = new (window.AudioContext || window.webkitAudioContext),
      result = {
        context: context,
        source: context.createMediaElementSource(mediaElem),
        gain: context.createGain(),
        media: mediaElem,
        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
        getAmpLevel: function() { return result.gain.gain.value; }
      };
    result.source.connect(result.gain);
    result.gain.connect(context.destination);
    result.amplify(multiplier);
  } catch(e){}
  return result;
}



function player_response() {


	var z = ytplayer.config.args.player_response
	if (z) { //console.log(ytplayer.config.loaded_from +'\n'+z)

	  if (z.indexOf('"status":"ERROR"') > -1) ytplayer.config.args.status = 'error'

	  if (z.indexOf('"status":"UNPLAYABLE"') > -1 && ( (!yt6.blocked && yt6.html5_fail) || (!yt6.mobile && !ytplayer.config.args.adaptive_fmts) ) ) {
	    ytplayer.config.args.status = 'unplayable'
	  } else ytplayer.config.args.status = 'ok'


	  if (z.indexOf('"status":"OK"') > -1) {
		ytplayer.config.args.status = 'ok'
		if (yt6.age.count == 1 && yt6.linx && yt6.linx.length < 3) {
		  yt6.blocked = false
		  if (yt6.p.tagName == 'IFRAME') { undo_iframe() }
		}
	  }

	  if (z.indexOf('"videoId":"') > -1) {
	    var y = z.split('"videoId":"')[1].split('"')[0]
	    ytplayer.config.args.video_id = y; yt6.vid = y
	    if (yt6.age.count) yt6.newin = clone(yt6d.current.video_id)
	  }
	  if (z.indexOf('"title":"') > -1) {
	    var y = escape(z.split('"title":"')[1].split('"')[0]); try { var x = decodeURIComponent(y); y = x } catch(e){}
	    y = y.split('\\/').join('/')
	    y = y.split('\+\+\+').join('?@%@?')
	    y = y.split('+').join(' ')
	    y = y.split('?@%@?').join(' + ')
	    if (ytplayer.config.args.title != y) {
	      yt6.title2 = y
	      yt6.age.done = 1
	    }
	  }

	  if (z.split('"loudnessDb":')[1]) {
	    yt6.loudness = parseFloat(z.split('"loudnessDb":')[1].split(',')[0])
	    if (isNaN(yt6.loudness)) { yt6.loudness = 1 }
	  }


	  if (!(yt6.status == 'unplayable' && yt6.reason) && z.indexOf('"formats":[{') > -1) {
	    var formats, uefsm, afmt, comma, size, xtags, sp, s // size, xtags for afmt only
	    var itag, type, bitrate, width, height, init, index, lmt, clen, quality, fps, quality_label, projection_type // init, index, fps for afmt only
	    var averageBitrates, approxDurationMs, audioQuality, audioSampleRate, audioChannels // used only in player_response
	    var url, cipher

	    var y = z.split('"formats":[{')[1].split(']')[0]
	    if (y.indexOf('"itag":') > -1 && y.indexOf('"width":') > -1 && y.indexOf('"height":') > -1) window.ytplayer.config.args.fmt_list = ''

	    formats = (!ytplayer.config.args.url_encoded_fmt_stream_map) ? 1 : ''

	    var x = y.split('"itag":')
	    for (i=0;i<x.length;i++) {
	      itag = x[i].split(',')[0]
	      if (itag) {
		if (formats) {
		  uefsm = 'itag=' + itag
		  type = x[i].split('"mimeType":"')[1]; if (type) { type = '&type=' + encodeURIComponent(unescape(type.split('","')[0]).split('\\').join('')).split('%2B').join('@2B'); uefsm = uefsm + type }
		  quality = x[i].split('"quality":"')[1]; if (quality) { quality = '&quality=' + quality.split('"')[0]; uefsm = uefsm + quality }
		  url = x[i].split('"url":"')[1]
		  if (url) {
		    url = '&url=' + encodeURIComponent(unescape(url.split('","')[0]).split('\\u0026').join('&').split(',').join('%2C').split('\\').join('')); uefsm = uefsm + url
		    if (yt6.age.t) yt6.age.blocked = true
		  }
		  s = x[i].split('ipher":"')[1] || '' //"cipher":" or "signatureCipher":"
		  if (s) { yt6.encrypted = true
		    s = s.split('"')[0]
		    var ampersand = (s.split('\\u0026sp=')[1] || s.split('\\u0026s=')[1]) ? '\\u0026' : '&'
		    url = '&' + s.split(ampersand).join('&').split(',').join('%2C').split('\\').join('')
		    if (s.substring(0,2) == 's=') {
		      s = s.split('s=')[1].split(ampersand)[0]
		    } else {
			s = s.split(ampersand + 's=')[1].split(ampersand)[0]
		      }
		    var url1 = url.split('&url=')[1]; if (url1) url = url1.split('&s=' + s)[0]
		    var url1 = url.split(ampersand + 'url=')[1]; if (url1) url = url1.split(ampersand + 's=')[0]
		    url = (url.split('videoplayback%3F')[1]) ?
			'&url=' + url + '&s=' + s :
			'&url=' + encodeURIComponent(url) + '&s=' + encodeURIComponent(s);
		    uefsm = uefsm + url
		  } else { yt6.encrypted = false
		      //sp = ((x[i].indexOf('0026lsig=') > -1) ? 'sig' : 'signature'); uefsm = uefsm + '&sp=' + sp
		    }
		  if (formats == 1) {
		    formats = uefsm
		  } else {
		      formats = formats + uefsm
		    }
		  if (formats.indexOf(uefsm) > -1 && i < x.length-1) formats = formats + ','
		}
		width = x[i].split('"width":')[1]
		if (width) {
		  width = width.split(',')[0]; if (qual[itag]) qual[itag]['w'] =  1*width
		  height = x[i].split('"height":')[1]
		  if (height) {
		    height = height.split(',')[0]; if (qual[itag]) qual[itag]['h'] = 1*height
		    yt6.aspect_ratio = width +'x'+ height; yt6.ar = width +'x'+ height
		    if (!ytplayer.config.args.fmt_list || comma) { // legacy formats list needed by flash player
		      var comma = (ytplayer.config.args.fmt_list) ? (ytplayer.config.args.fmt_list) + ',' : ''
		      ytplayer.config.args.fmt_list = comma + itag + '/' + width + 'x' + height
		    }
		  }
		}

	      }
	    }
	    if (formats && (formats.indexOf('url=') > -1 || formats.indexOf('url%3D') > -1)) {//.split('%2540%2540').join('%2526')
	      ytplayer.config.args.url_encoded_fmt_stream_map = formats.split('%402B').join('%2B')
	    }
	  } else if (ytplayer.config.args.status == 'unplayable' && !ytplayer.config.args.url_encoded_fmt_stream_map) { return true }



	  var y = z.split('"adaptiveFormats":[{')[1]
	  if (!(yt6.status == 'unplayable' && yt6.reason) && y) {

	    y = y.split(']')[0]

	    formats = (!ytplayer.config.args.adaptive_fmts) ? 2 : ''

	    var x = y.split('"itag":')
	    for (i=0;i<x.length;i++) {
	      itag = x[i].split(',')[0]
	      if (itag) {
		if (formats) {
		  afmt = 'itag=' + itag
		  type = x[i].split('"mimeType":"')[1]; if (type) { type = '&type=' + escape(type.split('","')[0].split('\\').join('')).split('%20').join('%2B').split('/').join('%2F'); afmt = afmt + type }
		  quality = x[i].split('"quality":"')[1]; if (quality) { quality = '&quality=' + quality.split('"')[0]; afmt = afmt + quality }
		  width = x[i].split('"width":')[1]
		  if (width) {
		    width = width.split(',')[0]; if (qual[itag]) qual[itag]['w'] = 1*width
		    height = x[i].split('"height":')[1]
		    if (height) {
		      height = height.split(',')[0]; if (qual[itag]) qual[itag]['h'] = 1*height
		      size = width +'x'+ height; afmt = afmt + '&size=' + size
		      yt6.aspect_ratio = size; yt6.ar = size
		    }
		  }
		  fps = x[i].split('"fps":')[1]; if (fps) { fps = fps.split(',')[0]; afmt = afmt + '&fps=' + fps }
		  bitrate = x[i].split('"bitrate":')[1]; if (bitrate) { bitrate = bitrate.split(',')[0]; afmt = afmt + '&bitrate=' + bitrate }
		  clen = x[i].split('"contentLength":"')[1]; if (clen) { clen = clen.split('"')[0]; afmt = afmt + '&clen=' + clen }
		  lmt = x[i].split('"lastModified":"')[1]; if (lmt) { lmt = lmt.split('"')[0]; afmt = afmt + '&lmt=' + lmt }
		  init = x[i].split('"initRange":{"start":"')[1]; if (init) { var init1 = init.split('"')[0], init2 = init.split('"end":"')[1]; if (init2) { init2 = init2.split('"')[0]; afmt = afmt + '&init=' + init1 + '-' + init2 } }
		  index = x[i].split('"indexRange":{"start":"')[1]; if (index) { var index1 = index.split('"')[0], index2 = index.split('"end":"')[1]; if (index2) { index2 = index2.split('"')[0]; afmt = afmt + '&index=' + index1 + '-' + index2 } }
		  quality_label = x[i].split('"qualityLabel":"')[1]; if (quality_label) { quality_label = quality_label.split('"')[0]; afmt = afmt + '&quality_label=' + quality_label }
		  projection_type = x[i].split('"projectionType":"')[1]; if (projection_type) { projection_type = projection_type.split('"')[0]; afmt = afmt + '&projection_type=' + projection_type }
		  url = x[i].split('"url":"')[1]
		  if (url) {
		    url = '&url=' + encodeURIComponent(url.split('","')[0].split('\\u0026').join('&').split('\\').join('')); afmt = afmt + url //
		    if (yt6.layout == 16 && !yt6.ytm && !yt6.mobile && !yt6.ytg && yt6.pls && yt6.newin && (yt6.age.blocked || yt6.age.count)) yt6.age.blocked = true
		  }
		  s = x[i].split('ipher":"')[1] || ''
		  if (s) { yt6.encrypted = true
		    s = s.split('"')[0]
			var ampersand = (s.split('\\u0026sp=')[1] || s.split('\\u0026s=')[1]) ? '\\u0026' : '&'
			var eq = (s.indexOf('sp=') > -1) ? '=' : '%3D'
		    if (s.substring(0,3) == 'sp=' || s.substring(0,5) == 'sp%3D') {
		      sp = 'sp=' + s.split('sp' + eq)[1].split(ampersand)[0] + ampersand
		    } else {
			sp = ampersand + 'sp' + eq + s.split(ampersand + 'sp' + eq)[1].split(ampersand)[0]
		      }
		    url = s.split(sp).join('')
		    if (sp) { sp = sp.split(ampersand).join('&'); if (sp.split('sp' + eq)[1]) sp = sp.split('sp' + eq)[1].split('&')[0] }

		    if (s.substring(0,2) == 's=' || s.substring(0,4) == 's%3D') {
		      s = 's=' + s.split('s' + eq)[1].split(ampersand)[0].split('&')[0]
		    } else s = ampersand + 's=' + s.split(ampersand + 's' + eq)[1].split(ampersand)[0].split('&')[0]
		    url = url.split(s).join('')
		    if (s) { s = s.split(ampersand).join('&'); if (s.split('s=')[1]) s = s.split('s=')[1].split('&')[0] }

		    url = '&' + url.split(',').join('%2C') //.split('\\u0026').join('')
		    var url1 = url.split('&url' + eq)[1]; if (url1) url = url1.split('\\u0026')[0].split('\\').join('')
		    var url1 = url.split(ampersand + 'url' + eq)[1]; if (url1) url = url1.split(ampersand + 's' + eq)[0].split('\\').join('')
		    url = (url.split('videoplayback%3F')[1]) ?
			'&url=' + url + '&s=' + s + '&sp=' + sp :
			'&url=' + encodeURIComponent(url) + '&s=' + encodeURIComponent(s) + '&sp=' + sp;

		    afmt = afmt + url
		  } else { yt6.encrypted = false
		      //sp = ((x[i].indexOf('0026lsig=') > -1) ? 'sig' : 'signature'); uefsm = uefsm + '&sp=' + sp
		    }
		  if (formats == 2) {
		    formats = afmt
		  } else if (formats) {
		      formats = formats + afmt
		    }
		  if (formats && formats.indexOf(afmt) > -1 && i < x.length-1) formats = formats + ','
		}


	      }
	    }
	    if (formats && (formats.indexOf('url=') > -1 || formats.indexOf('url%3D') > -1)) {//.split('%2540%2540').join('%2526')
	      if (yt6.x && yt6.browser_tab == 'hidden') {
		ytplayer.config.args.adaptive_fmts = formats;
	      }
	      yt6.adaptive_fmts = formats
	    }
	  }
/*
	  var y = z.split('"thumbnail":')[1]
	  if (y && y.indexOf('"thumbnails":[') > -1) {
	    var x = findClosingBracketMatchIndex(y, 0)
	    y = y.substr(0, x); if (y.split('"thumbnails":')[1]) y = y.split('"thumbnails":')[1]
	    eval('yt6.thumbnails = ' + y)
	  }
*/
	}

  if (ytplayer.config.args.adaptive_fmts || ytplayer.config.args.url_encoded_fmt_stream_map) {
    if (yt6.blocked_m && !yt6.blocked_m2) {
      if (yt6.x && yt6.browser_tab == 'hidden') {
	yt6.blocked_m2 = (yt6.pre_ad != true) ? true : false // to ensure this part runs only once
	buildObject(ytplayer)
	redo_dl_button(  yt6.args,  yt6.html,  yt6.href)
	yt6d.mep_up()
	yt6d.mep_renew()
	delete yt6.blocked_m;
      }
      try { document.getElementsByTagName('ytm-player-error-message-renderer')[0].setAttribute('hidden','') } catch(e){}
    }
    return false //yt6.missing_source = false
  } else {
      if (yt6.reason) { ytplayer.config.args.status = 'unplayable'; yt6.status = 'unplayable'; return true }
      if (yt6.mobile) try { document.getElementsByTagName('ytm-player-error-message-renderer')[0].removeAttribute('hidden','') } catch(e){}
    }

}




function load_from_page_source(x, source) {

	if (!yt6.ytp.embed && yt6.status == 'error') { return void 0 }
	if (yt6.layout == 12 && yt6.age.blocked) yt6.status = 'unplayable'

	var status = yt6.status
	if (location.href.indexOf('.com/embed') == -1) {
	  source = window.location.href
	} else {
	    source = protocol() + '//www.youtube.com/watch?v=' + ((!source) ? video_id()[0] : source)
	  }
	if (!(yt6.error && yt6.error.toString().indexOf('Synchronous requests are disabled for this page') > -1)) {
	  x = (typeof x != 'undefined') ? x : ((!yt6.ytm) ? yt6.xhr.async : false)
	} else if (!yt6d.source) {
	    yt6d.source = true
	    x = true
	  }

	yt6.xhr.completed = !x

	function fetch_data(src) {

	    var y = src; //onDownload(y)//xhr2.responseText.toString()
	    if (!yt6.ytm) {
		if (!window.ytplayer) window.ytplayer = {}
		if (!window.ytplayer.config) window.ytplayer.config = {}
		var c = conf('assets')
		if (!c[0].assets) c[0].assets = {}
		if (!c[0].args) c[0].args = {}
		var c = conf('assets')
		  var js = '', css = ''
		  js = y.split('"js":"')[1]; if (js) { js = js.split('"')[0]; css = y.split('"css"."')[1]; if (css) c[0].assets.css = css.split('"')[0] }
		  if (!js) js = y.split('"jsUrl":"')[1]; if (js) { js = js.split('"')[0]; css = y.split('"cssUrl":"')[1]; if (css) c[0].assets.css = css.split('"')[0] }
		  if (!js) { js = y.split('src="/yts/jsbin/player_')[1]; if (js) { js = '/yts/jsbin/player_' + js } }
		  if (!js) js = y.split('"PLAYER_JS_URL":"')[1]
		  if (js && js.indexOf('/base.js') > -1) {
		    js = js.split('/base.js')[0].split('\\').join('') + '/base.js'
		    c[0].assets.js = js; yt6d.base_js = js
		  }

		var y0 = y.split('var ytInitialPlayerResponse = ')[1] || y.split('window["ytInitialPlayerResponse"] = ')[1], z
		if (y0) {
		  y0 = y0.split('</script>')[0]
		  z = findClosingBracketMatchIndex(y0, 0)
		  if (z != -1) { y0 = y0.substr(0, (z + 1)) } else { z = y0.indexOf(';var meta = document.createElement('); if (typeof z == 'number' && z > 0) y0 = y0.substring(0, z) }
		  //window.ytInitialPlayerResponse = y0
		}
		var y1 = y.split('"WEB_PLAYER_CONTEXT_CONFIGS":')[1] || y.split('ytplayer.web_player_context_config = ')[1]
		if (y1) {
		  y1 = y1.split('</script>')[0]
		  z = findClosingBracketMatchIndex(y1, 0)
		  if (z != -1) { y1 = y1.substr(0, (z + 1)).split('\\').join('') } else { }
		}
		var y = y.split('window.ytplayer = window.ytplayer || {}; window.')[1] || y.split('var ytplayer = ytplayer || {}; ')[1] || y.split('var ytplayer = ytplayer || {};')[1]
		if (y) {
		  y = y.split('</script>')[0]
		  y = y.split(';(function()')[0].split(';(function ')[0]; //they named the function playerBootstrap(), but a single space after is enough
		  if (!y0 || (html5_fail() && !yt6.ytp.embed)) {
		    y = 'yt6.ytplayer = {}; yt6.' + y
		  } else {
		      y = 'yt6.ytplayer = {}; yt6.' + ( !(html5_fail()) ? y : 'ytplayer.config = {}' ) +'; if (!yt6.ytplayer.config) yt6.ytplayer.config = {}'+
			  '; yt6.ytplayer.config.args = {}; yt6.ytplayer.config.args.raw_player_response = ' + y0 +
			  '; yt6.ytplayer.config.args.player_response = ' + JSON.stringify(y0)
		    }
		  if (y1) y = y + '; yt6.ytplayer.web_player_context_config = ' + y1
	        } else {
		  if (yt6.status != 'unplayable') {
		    if ( !(yt6.p && yt6.p.tagName == 'IFRAME')) { // maybe can still play in iframe?
		      if (yt6.blocked) {
			if (yt6.html5swap) swap_player()//if (!yt6.html5swap) {
			  ytplayer.config.args.url_encoded_fmt_stream_map = ''
			  ytplayer.config.args.adaptive_fmts = ''
			  //if (yt6.layout == 12 && yt6.age.blocked && yt6.status == 'unplayable') yt6.age.blocked = false
			  yt6.xhr.completed = ''; yt6.age.count = 1
			  alt_yt()
			  if (yt6.layout == 12 && yt6.blocked && !yt6.age.blocked && yt6.original && yt6.original.parentNode) {
			    ytplayer.config.args.status = 'error'; yt6.status = 'error'; if (typeof yt6.original.destroy == 'function') { try { yt6.original.destroy() } catch(e){ yt6.original.parentNode.removeChild(yt6.original) } } else yt6.original.parentNode.removeChild(yt6.original)
			  }
			//}
		      } else { // most likely deleted or private video
			  ytplayer.config.args.status = 'error'; yt6.status = 'error'
			  var z = gid('player-unavailable') || gid('error-screen')
			  if (z) z.style.display = ''; yt6.newvideo = true
			}
		    } else if (yt6.layout == 16 && yt6.pls && yt6.newin) {
			open_outside_of_playlist()
		      }
		  }
		  yt6.xhr.completed = true
		  return true
		}
		if (1 * y.indexOf('url_encoded_fmt_stream_map') > -1 || y.indexOf('"formats\\":[{') > -1 || y.indexOf('"formats":[{') > -1 || y.indexOf('"adaptiveFormats":[{' || y.indexOf('"adaptiveFormats\\":[{')) > -1) { eval(y) }
		  else if ((yt6.pre_ad || yt6.loaded_vid != yt6.vid) && yt6.browser_tab == 'hidden') {
		    // when media is not found / not present on the downloaded source page either, sift through the ytplayer data object
		    test_4(); yt6.ytplayer = {}; yt6.ytplayer.config = window.ytplayer.config
		  }
	    } else { // since Dec 2020, page sources from ytm no longer contain this data, so it's useless to call this function, test_4 is the last remaining option there
		var y = y.split('"PLAYER_CONFIG":')[1]
		if (y) {
		  var z = findClosingBracketMatchIndex(y, 0)
		  if (z != -1) { y = y.substr(0, (z + 1)); } else { return false }//ytplayer.config.args.status = 'error'; yt6.status = 'error'; 
		  //y = y.split('"}},"')[0] + '"}}';
		  yt6.ytplayer = {}; yt6.ytplayer.config = {};
	          if (typeof JSON != 'undefined') { y = JSON.parse(y); yt6.ytplayer.config.args = y.args; if (!yt6.ytm) { yt6.ytplayer.config.assets = y.assets } else yt6.ytplayer.config.assets = window.ytplayer.config.assets = y.assets; yt6.ytplayer.config.attrs = y.attrs } // <-- window.ytplayer.config.assets must be in there when on ytm!
		} else { ytplayer.config.args.status = 'error'; yt6.status = 'error'; return false }
	      }

	    if (yt6.ytplayer && yt6.ytplayer.config && yt6.ytplayer.config.args && (typeof yt6.ytplayer.config.args.url_encoded_fmt_stream_map == 'string' || yt6.ytm
	      || (yt6.ytplayer.config.args.player_response && (yt6.ytplayer.config.args.player_response.indexOf('"formats":[{') > -1 || yt6.ytplayer.config.args.player_response.indexOf('"adaptiveFormats":[{') > -1 )) )) {

		if (!ytplayer.config.args.adaptive_fmts) ytplayer.config.args = clone(yt6.ytplayer.config.args)

		if (yt6d.source) yt6d.source = src

		if (!ytplayer.config.assets && yt6.ytplayer.config.assets) ytplayer.config.assets = clone(yt6.ytplayer.config.assets)
		if (!ytplayer.config.attrs && yt6.ytplayer.config.attrs) ytplayer.config.attrs = clone(yt6.ytplayer.config.attrs)

		ytplayer.config.loaded_from = 'page_source'
		player_response()
		var c = conf('args')
		var p = (!yt6.flash.forced) ? player() : yt6.original || gid('movie_player0')
		if (status != 'ok' && c[1] && c[1].status == 'ok' &&
		  (p && p.tagName == 'DIV' && !(v_(p) && v_(p).parentNode.nextSibling))
		) {
		  yt6.status = 'ok'
		  yt6.reason = null
		  if (p && p != yt6.original) p.parentNode.removeChild(p)
		  alt_yt()
		  var p = yt6.original || gid('movie_player0')
		  if ( p && p != yt6.p) {
		    p.setAttribute('name','movie_player')
		    p.setAttribute('id','movie_player')
		  }
		} else if (!p && yt6.original) {
			yt6.api.insertBefore(yt6.original, yt6.api.firstChild)
			yt6.original.setAttribute('name','movie_player')
			yt6.original.setAttribute('id','movie_player')
		  }
		yt6.ytplayer = {}
		if (yt6.flash.forced) {
		  if (yt6.retry < yt6.limit) {
		    var z = gc('forced flashplayer')[0]
		    if (z && z.tagName == 'EMBED' && (z.parentNode == yt6.api || yt6.api.parentNode == z.parentNode) && z.getAttribute('id').indexOf('movie_player') == 0) {
		      z.setAttribute('id','movie_player')
		    } else {
			relocate_mep(true)
			yt6.flash.call = 'page source'
			var fmp = forceFlashplayerObject()
		      }
		  }
		}

		if (x && yt6.change != 0 && typeof yt6d.mep_up == 'function') {
		  yt6.change = ((!yt6.xhr.async && !yt6.html5_fail) || yt6.xhr.async) ? 0 : clone(ytplayer.config.args.title || document.title)
		  if (yt6.age.blocked) { yt6.age.blocked = false; yt6.age.count = 0 }
		  if (x == true) {
		    if (yt6.flash.forced) { yt6.flash.vars = '' }
		    buildObject(window.ytplayer)
		    redo_dl_button(  yt6.args,  yt6.html,  yt6.href)
		    yt6d.mep_up()
		    yt6d.mep_renew()
		    if (yt6.ytm && yt6.x) { yt6.player1.media.play() }
		  }
		  yt6.xhr.completed = true
		} //else console.log('nope '+yt6.change)
	    } else { yt6.ytplayer = null; yt6.change = 0 }

	}

	if (!(yt6.oldbrowser && typeof console == 'undefined')) {

	  if (!yt6d.source || yt6d.source == true) {
	    try { xhr2.open('get', source, x) } catch(e) { xhr2.open('get', source, true) };
	    xhr2.onreadystatechange = function() {
	      var p = gid('movie_player'); if (p && yt6.x) try { p.pauseVideo() } catch(e){}
	      if (xhr2.readyState == 4 && xhr2.status == 200 && xhr2.responseText) {

	        fetch_data(xhr2.responseText.toString())

	      }
	    }
	  } else fetch_data(yt6d.source)

	} else { //on ancient browsers xhr2 never completes
	  }

	if (!yt6.oldbrowser) {
	  try { xhr2.send('') } catch(e) {
	    if (e.toString().indexOf('ailed to execute \'send\'') > -1)
	      try { xhr2.open('get', proxies[0] + source.replace(protocol(),''), false)
	        xhr2.send('') } catch(e){
		if (e.toString().indexOf('ailed to execute \'send\'') > -1)
		  try { xhr2.open('get', proxies[1] + source.replace(protocol(),''), false)
		    xhr2.send('') } catch(e){
		  }
	      }
	  }
	}


	  if (yt6.loaded_vid != yt6.vid) try { yt6.ct = 0; yt6.player1.media.currentTime = 0 } catch(e){}
	  if (yt6.xhr.completed || yt6d.source) return true
	  if (xhr2.responseText) { xhr2.done = true }

}



function ajax1(update, ytg){


  function yt_assets(xhr, base_js) {

	    var px; try { px = yt6.px.replace('/https:','') } catch(e){ px = '//www.youtube.com' };

	    if (typeof xhr.responseText != 'unknown') {
	      if ((xhr.responseText.indexOf('403 Forbidden') > -1) || (xhr.responseText == '403_Forbidden')) {

	        var scpt = document.createElement("div");
	        scpt.id = px + " error";
	        scpt[yt6.txt] = 'HTTP 403 Forbidden: Access was denied to this resource over internal quota';
	        yt6.body.appendChild(scpt);
	        scpt.setAttribute('class','yt6-proxy-error')
	        scpt.setAttribute('style','display: none')
	        //continue; //403

	      } else {

	
		      var rpt = xhr.responseText, scpt;
		      if (!gc('ytassetsjs')[0] && (rpt.indexOf("function(){") != -1 || rpt.indexOf("function fcnm(") != -1)) {
			scpt = document.createElement("div");
			scpt.type = "text/javascript";
			scpt.id = "ytassetsjs";
			scpt[yt6.txt] = rpt
			yt6.body.appendChild(scpt);
			scpt.setAttribute('class','ytassetsjs');
			scpt.setAttribute('style','display: none');
			if (!base_js) {
			  base_js = (ytplayer.config && ytplayer.config.assets && ytplayer.config.assets.js) ? ytplayer.config.assets.js : yt6d.base_js || 'undefined'
			}
			base_js = (base_js.indexOf('.youtube.com/') == -1) ? px + base_js : base_js
			base_js = (base_js.indexOf('/') == 0) ? protocol() + base_js : base_js
			scpt.setAttribute('name', base_js)

			var z = new Date().toLocaleString().toString()
			scpt.setAttribute("time",z)
			xhr.done = true;
			//break
		      } else {
			 if (px != '//www.youtube.com') {
			  scpt = document.createElement("div");
			  if (yt6.error && yt6.error.toString().split('https://')[1]) var px = yt6.error.toString().split('https://')[1].split('/')[0]
			  scpt = document.createElement("div");
			  scpt.id = px + " error";
			  scpt[yt6.txt] = yt6.error;
			  yt6.body.appendChild(scpt);
			  scpt.setAttribute('class','yt6-proxy-error')
			  scpt.setAttribute('style','display: none')
			 }
			}

	        }
	    }//unknown
  }

  var ytassetsjs = gid('ytassetsjs')

    function setProxy(){

      var xhr = new XMLHttpRequest();
      var proxiez = []; proxiez[0] = proxies[0]; proxiez[1] = proxies[1]; proxiez[2] = proxies[2];
      proxiez = shuffle(proxiez);
      var z = def_link()
      proxiez.splice(0,0,'//www.youtube.com')
      xhr.done = false;
      if (yt6.ytm || yt6.ytg) proxiez = ['//www.youtube.com']

      for (i=0;i<proxiez.length;i++){
	if (ytassetsjs != null && ytassetsjs.name && ytassetsjs.innerHTML.indexOf('var ') != -1) {
	  return [ytassetsjs.name.split('/https')[0], ytassetsjs.innerHTML];
	  break
	};
	if (gc('ytassetsjs-0')[proxies.length-1]) {
	  var z = gc('ytassetsjs-0')
	    for (j=0;j<z.length;j++) {
	      if (z[j].innerHTML.indexOf("function(){") != -1 || z[j].innerHTML.indexOf("function fcnm(") != -1) {
		if (ytassetsjs != null) ytassetsjs.parentNode.removeChild(ytassetsjs)
		z[j].setAttribute('id','ytassetsjs')
		z[j].setAttribute('class','ytassetsjs')
		break
	      }
	    }
          var z = gc('ytassetsjs-0')
          for (k=z.length;k>-1;k--) {
            if (z[k]) z[k].parentNode.removeChild(z[k])
          }
          var ytassetsjs = gid('ytassetsjs')
          if (ytassetsjs != null && ytassetsjs.name && ytassetsjs.innerHTML.indexOf('var ') != -1) {
            return [ytassetsjs.getAttribute('name').split('/https')[0], ytassetsjs.innerHTML]
            break
	  }
	}

	if (xhr.done) break

	var px = yt6.px = proxiez[i]
	var z = document.getElementById(px + ' error' ); if (z != null) continue;

	if (ytplayer.config) {
	  if (!(ytplayer.config.assets && ytplayer.config.assets.js) || (yt6.errcount >= (1 * proxies.length)) ) {
	    if (yt6.age.v !== 0 && !yt6.loophole && !yt6d.source) {
	      if (!ytplayer.config.assets) ytplayer.config.assets = {}
		var z = document.getElementsByTagName('script')
		if (z) {
		  if (z && z.length) for(j=0;j<z.length;j++) {
		    if (typeof z[j].getAttribute == 'function' && typeof z[j].getAttribute('src') == 'string') {
		      if (z[j].getAttribute('src').indexOf('/spf.js') > -1) {
			yt6d.spf = z[j].getAttribute('src')
		      }
		      if (z[j].getAttribute('src').indexOf('/base.js') > -1) {
			yt6d.base_js = z[j].getAttribute('src')
			ytplayer.config.assets.js = clone(yt6d.base_js)
		      }
		    }
		  }
		}
	      if (!yt6.ytm && !yt6.mobile) load_from_page_source((!yt6d.source) ? false : true)
	      yt6.age.v = 0; ageless_verification()
	      if (!yt6.mobile && !yt6.loophole) yt6.loophole = true; //console.log('loophole')
	    } else {
		if (yt6.loophole && (yt6.errcount >= (1 * proxies.length + 1) ) ) {
		  yt6.hand_axe = true 
		}
	      }
	  } else {
	      yt6d.base_js = clone(ytplayer.config.assets.js)
	      if (ytplayer.config.assets.js.indexOf('/') == 0) ytplayer.config.assets.js = protocol() + '//www.youtube.com' + ytplayer.config.assets.js
	    }

	  if (ytplayer.config.assets.js && ytplayer.config.assets.js.indexOf('//s.ytimg.com/') ==  -1) {
	    var px = yt6.px = '//www.youtube.com'
	  }
	}

	try {


	  var base_js = yt6d.base_js || ''
	  if (!base_js && yt6.mobile) ytplayer.config.assets.js = ytcfg.data_.PLAYER_JS_URL

	  var c = conf('assets')

	  if (!base_js && c[1] && c[1].js) {
	    base_js = (px == '//www.youtube.com') ? c[1].js.replace('//s.ytimg.com/','/') : c[1].js
	  }
	  if (!base_js && yt6.mobile) base_js = '//m.youtube.com' + ytcfg.data_.PLAYER_JS_URL
	  if (yt6.ytg && px == 'https://crossorigin.me/https:') px = '//www.youtube.com'
	  if (yt6.ytp.embed && yt6.p && typeof yt6.p.getAttribute == 'function' && typeof yt6.p.getAttribute('data-version') == 'string') base_js = yt6.p.getAttribute('data-version')
	  if (px != '//www.youtube.com' && typeof base_js == 'string' && base_js.indexOf('/') == 0 && base_js.indexOf('/yts/') == -1) px = '//www.youtube.com/'


	  xhr.open('get', ((typeof base_js == 'string' && base_js.indexOf('.youtube.com/') == -1) ? px + base_js : base_js), false);
	  xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && xhr.status == 200 && !xhr.done) {

	      yt_assets(xhr, base_js)

	    }
	  }
	  if (base_js) xhr.send('')

	} catch (e) {
	    yt6.error = e;
	    if (typeof xhr.responseText != 'unknown' && !(yt6.error && yt6.error.toString().indexOf('Synchronous requests are disabled for this page') > -1)) {
	      if (i === proxiez.length-1) {

		if ((e.toString().indexOf('"Access to restricted URI denied"  code: "1012"') > -1) || (e.toString().indexOf('ReferenceError: Security violation') > -1) || (xhr.responseText.indexOf('403 Forbidden') > -1) || (e.toString().indexOf('XMLHttpRequest Exception 101') > -1)) {

		  hand_axe()

		} else {

		    if (!yt6.ytm && !yt6.ytg && !yt6.html5_fail) { hand_axe() } else { relocate_mep(); yt6.flash.call = 'ajax1' ;forceFlashplayerObject() }
		    //throw new Error(e + " " + px + ' error')
		  }
              
	      } else {
		  if (e.toString().indexOf('"Access to restricted URI denied"  code: "1012"') == -1) {

		  }
		  //alert(e + " " + px + ' error')
	        }
	    }//unknown
	  }//catch

	yt_assets(xhr)

      }//for

      if (proxiez[0] == '//www.youtube.com') proxiez.splice(0,0)

      if (typeof xhr.responseText != 'unknown' && xhr.responseText.indexOf("function(){") != -1) { return [px, xhr.responseText] }
    }//setProxy

  if ((ytassetsjs == null) || (ytassetsjs.innerHTML.indexOf("function(){") == -1 && ytassetsjs.innerHTML.indexOf("function fcnm(") == -1) || (update)) {
    if (ytassetsjs != null) {
      ytassetsjs.id = 'ytassetsjs-0'
      ytassetsjs.setAttribute('class', 'ytassetsjs-0')
    }

    var spx = setProxy();


    if (typeof spx == 'undefined') {

      yt6.timer = 0

      $waitUntil(
        function(){
	  var ytassetsjs = gid('ytassetsjs');
	  if (ytassetsjs != null) {
	    if (ytassetsjs.innerHTML.indexOf('var ') != -1) {
	      return true;
	    }
	  } else {
	      yt6.timer++;
	      if (yt6.timer > 10) {
		if (gid('getjs') == null && !(yt6.error && yt6.error.toString().indexOf('Synchronous requests are disabled for this page') > -1)) {
		  hand_axe();
		}
	      }
	    }
	},
        function(){  },
        500,7000
      )



    } else {

        var px = spx[0]
        var rpt = spx[1]

        gid('ytassetsjs').fcnm = gid('ytassetsjs').innerHTML = find_key(rpt)
      }


  } else {
      var rpt = ytassetsjs.innerHTML;
      gid('ytassetsjs').fcnm = gid('ytassetsjs').innerHTML = find_key(rpt)
    }


}//ajax1



function getPoster(){

  var poster;
  if (yt6.thumbnails && Array.isArray(yt6.thumbnails) && yt6.thumbnails[0].url && yt6.thumbnails[0].url.indexOf('http') == 0) {
    for(i=0;i<yt6.thumbnails.length;i++) {
      poster = yt6.poster.src = yt6.thumbnails[i].url.split('&')[0]
    }
  } else {

      if (yt6.layout == 12) {
	poster = getElementsByAttribute(document,"link","itemprop","thumbnailURL")
	poster = poster[poster.length-1]
	if (typeof poster != 'undefined' && !yt6.ytg) {
	  poster = poster.href
	} else {
		poster = getElementsByAttribute(document,"link","itemprop","thumbnailUrl")
		poster = poster[poster.length-1]
		if (typeof poster != 'undefined' && !yt6.ytg) {
		  poster = poster.href
		} else {
		    var c = conf('args')
		    var vid = (c[1] && c[1].video_id) ? c[1].video_id : video_id()[0]
		    poster = protocol() + '//i.ytimg.com/vi/' + vid + '/0.jpg'
		  }
	  }
      } else poster = protocol() + '//i.ytimg.com/vi/' + (yt6.vid || video_id()[0]) + '/maxresdefault.jpg'

    }

  poster = poster.replace('hqdefault','sddefault')


  var img = gid('test_poster')
  if (!img) {
    var img = document.createElement('div')
    img.id = 'test_poster'
    img.style.visibility = "hidden";
    img.style.width = "100px";
    img.style.msOverflowStyle = "scrollbar";
    yt6.appendChild(img)
  }
    yt6.timer = 0
    var img = gid('test_poster2')
    if (img) try { img.parentNode.removeChild(img) } catch(e){}
    var img = document.createElement('img')
    img.id = 'test_poster2'
    img.src = poster
    img.style.display = 'none'
    var z = gc('mejs-poster mejs-layer')[0]
    if (z && z.firstChild){
      z.firstChild.naturalWidth = 0
      z.firstChild.naturalHeight = 0
      z.firstChild.src = ''
    }
    img.onload = function(){
      $waitUntil(function() { var img = gid('test_poster2'), img2 = gc('mejs-poster mejs-layer')[0]; yt6.timer = yt6.timer + 1
	  if (yt6.timer > 50 && img && img.parentNode) img.parentNode.parentNode.removeChild(img.parentNode)
	  if (!(yt6.xhr.async && yt6.mep != 'running') && img && ((img.naturalWidth == 120 && img.naturalHeight == 90) || (img2 && img2.firstChild && img2.firstChild.naturalWidth == 120 && img2.firstChild.naturalHeight == 90)) ) return true
	},
        function() { var img = gid('test_poster2')
	  //img.src = '//yt3.ggpht.com/-afBnHVG_R6E/AAAAAAAAAAI/AAAAAAAAAAA/LtE5kbPkZvE/s27-c-k-no-mo-rj-c0xffffff/photo.jpg'
	  if (img) {
	    img.src = img.src.replace('sddefault','hqdefault').replace('maxresdefault','hqdefault').replace('webp','jpg')
	    var z = gc('mejs-poster mejs-layer')[0]
	    if (z && z.firstChild){
	      z.style.backgroundImage = "url('" + img.src + "')"
	      z.firstChild.naturalWidth = 0
	      z.firstChild.naturalHeight = 0
	      z.firstChild.src = yt6.poster.src = img.src
	    }
	    z = document.getElementById('yt6-poster'); if (z) z.href = clone(img.src)
	    var img = gid('test_poster2')
	    if (img) try { img.parentNode.removeChild(img) } catch(e){}
	  }
        },500,10000
      )
      if (gid('test_poster')) gid('test_poster').appendChild(img)
      delete img
    }


  yt6.poster.src = poster
  if (gid('yt6-poster')) gid('yt6-poster').href = poster

  return poster
}


function poster_resize(w, h, mep) {

 if (typeof mep == 'object' && typeof w == 'number' && typeof h == 'number') {

 var bm0 = gid('bm0')
 var poster = gc('mejs-poster mejs-layer')[0] || getElementsByAttribute(mep,'div','class','mejs-poster mejs-layer')[0]
  if (typeof poster != 'undefined') {
    var poster_img = yt6.poster.img = poster.getElementsByTagName('img')[0]
    if (bm0 && poster_img && typeof poster_img.naturalWidth == 'number')
    if (!yt6.fullscreen && !yt6.ytp.fullscreen) {
      var x = (poster_img.naturalWidth / poster_img.naturalHeight)
      var y = (poster_img.naturalHeight / poster_img.naturalWidth)
      yt6.poster.resize = !(x && y && !isNaN(x) && !isNaN(y)) ? true : false

      if (typeof yt6.aspect_ratio === 'string') {
        yt6.aspect_ratio = yt6.aspect_ratio.split("x")[0] / yt6.aspect_ratio.split('x')[1]
        yt6.ar = clone(yt6.aspect_ratio)
      }

      if (( yt6.aspect_ratio < 16/9 && Math.abs(yt6.aspect_ratio - 16/9) > 0.1

	   && ( !(Math.abs((x - yt6.aspect_ratio).toFixed(2)) < 0.2 && (Math.abs((w / h) - yt6.aspect_ratio).toFixed(2) < 0.3 || Math.abs((16/9 - yt6.aspect_ratio) - (x - w/h)).toFixed(2) > 0.5))
	        || ( ( (yt6.layout == 12 && yt6.size == 'default') || yt6.mobile) && (16/9 - yt6.aspect_ratio) < (0.5))
	      )
	   && !(ytplayer && ytplayer.config && ytplayer.config.args && ytplayer.config.args.embedded_player_response && ytplayer.config.args.embedded_player_response.indexOf('VEVO\"}]}') > -1 && (x - yt6.aspect_ratio).toFixed(2) < 0.5)
	  ) || (yt6.mpb && yt6.mpb.hasAttribute('active'))
	 ) { //console.log('vertical fit')
	poster.style.width = x * h + 'px'
	poster.style.height = (bm0) ? bm0.style.height : p.parentNode.parentNode.offsetHeight + 'px'
	poster.style.marginTop = ''
	poster.style.marginLeft = (w - 1 * poster.style.width.replace('px','')) / 2 + 'px'
      } else { //console.log('horizontal fit')
	  try { var bm0w = (bm0) ? bm0.style.width : p.parentNode.parentNode.offsetWidth + 'px' } catch(e){ var bm0w = '640px'}
	  poster.style.width = Math.abs(Math.abs(x - (w / h)) - parseFloat(24/10 - 4/3).toFixed(2) < parseFloat(0.2) ) ? bm0w : w - (x * h ) / 2 + 'px'; //1 * bm0.style.width.replace('px','') / ((16/9) / x) + 'px'
	  poster.style.height = y * w + 'px'
	  poster.style.marginTop = (h - 1 * poster.style.height.replace('px','')) / 2 + 'px'
	  poster.style.marginLeft = Math.abs(Math.abs(x - (w / h)) - parseFloat(24/10 - 4/3).toFixed(2) < parseFloat(0.2) ) ? '' : (w - 1 * poster.style.width.replace('px','')) / 2 + 'px'; //(w - 1 * poster.style.width.replace('px','')) / 2 + 'px'
	}
    } else { //fullscreen
	poster.style.width = '100%'
	poster.style.height = '100%'
      }
  }
  }

}


function mep_x(a){
  var a1 = a.split('_ _')[0], a2;
  if (a1 != null) {
    try {
      a2 = a.split('_ _')[1];
      if (a2 == undefined) a2 = ''
    } catch(e) {
        a2 = ''
      }
  } else {
      a1 = a
    }
  for(i=0;i<99;i++){
    var z = gid(a1 + i + a2)
    if (z) {
      if (yt6.ytm && z.className && z.className.indexOf(' style-scope ytmusic-player') > -1) {
	z.className = z.className.split(' style-scope ytmusic-player').join('')
      }
      break
    }
  }

  return a1 + i + a2
}


function protocol() { var protocol = 'http:'
  var protocol = (document.location && document.location.protocol=='http:')?'http:':'https:';
  return protocol
};


function v_(a) { return (a && a.tagName == 'DIV' && a.firstChild && a.getElementsByTagName('video')[0]) ? a.getElementsByTagName('video')[0] : null }


function player(debug) {

  var p = (yt6.layout == 16) ? document.querySelector('#movie_player') : document.getElementById('movie_player'), pid = (p && p.parentNode) ? p.parentNode.getAttribute('id') : '' // in the new layout, getElementById() will not necessarily find the first object with the given id, but the one which was first created with the id, therefore it's better to use querySelector() instead to locate the latest movie_player

  if (!p) {
    var z = document.getElementsByClassName('html5-video-player')
    for(i=0;i<z.length;i++) if (typeof z[i].getAttribute == 'function' && z[i].getAttribute('class') && z[i].getAttribute('class').indexOf('ytp-') > -1 && z[i].hasAttribute('data-version')) {
	//z[i].setAttribute('id','movie_player'); z[i].setAttribute('name','movie_player')
	try { p = document.querySelector('#movie_player') } catch(e){ p = document.getElementById('movie_player') }
    }
  }

  if (!yt6.osw && !yt6.skeleton && gid('watch-page-skeleton')) {
    yt6.skeleton = true
    yt6.osw = gid('watch-page-skeleton')
    if (yt6.osw) {
      if (yt6.osw.className.indexOf(' hidden') > -1) yt6.osw.className = yt6.osw.className.split(' hidden').join('')
      yt6.osw.setAttribute('id','player')
	  yt6.api = gid('player')
    }
  }

  if (yt6.layout == 12 && yt6.blocked && !p && yt6.api && yt6.api.firstChild && yt6.api.firstChild.tagName == 'DIV' && typeof yt6.api.firstChild.getPlayerState == 'function' && yt6.api.firstChild.getAttribute('id') == null) {
    if (gid('bm0') && gid('movie_player_to_insert')) gid('movie_player_to_insert').appendChild(gid('bm0'))
    yt6.api.firstChild.setAttribute('id','movie_player')
    yt6.api.firstChild.setAttribute('name','movie_player')
    if (yt6.original && yt6.original.parentNode && yt6.original != yt6.api.firstChild) try { yt6.original.destroy() } catch(e) { yt6.origina.parentNode.removeChild(yt6.original) }
    p = gid('movie_player')
  }

  if (p && !yt6.ytp.embed && (
	(!yt6.ytm && p.parentNode && (pid && pid != 'movie_player_to_insert' && pid != 'movie_player_to_dispose' && pid != 'test-4' && pid != 'ytp_dump')) ||
	(yt6.ytm && (!yt6.api || (p.parentNode.getAttribute('id') != 'movie_player_to_insert' && p.parentNode.getAttribute('id') != 'movie_player_to_dispose')))
     ) ) {
    if (yt6.api != p.parentNode) { //console.log(yt6.api + ' --> ' + gid("movie_player").parentNode.getAttribute('id'))
      if (gid('player-api') || yt6.ytm) {
        yt6.api = (yt6.layout == 16) ? document.querySelector('#movie_player').parentNode : document.getElementById('movie_player').parentNode;
      } else if (yt6.layout == 12 && gid('player-mole-container')) {
          //if (!(yt6.api && yt6.api.id == 'player-api' && yt6.api.parentNode)) try { console.log('player-api gone with the wind ' + debug) } catch(e){}
          var a = document.createElement('div')
	  a.id = 'player-api'
          gid('player-mole-container').insertBefore(a, gid('player-mole-container').firstChild)
	  yt6.api = gid('player-api')
	  if (yt6.api) {
	    yt6.api.setAttribute('class','player-width player-height off-screen-target player-api')
	    yt6.api.setAttribute('tabindex','-1')
	    if (p) yt6.api.insertBefore(p, yt6.api.firstChild)
	  }
        }
    }
  } else if (!yt6.ytm) {
      if (!yt6.mobile) {
	if (location.href.indexOf('.com/embed') == -1) {
	  p = null
	} else if (!(yt6.ytp.embed && gid('watch-header'))) {
	    yt6.ytp.embed = true
	    var z = gclass('ytp-embed','*', gid('player'))[0] || gid('player')
	    if (z) {
	      yt6.api = gid('player'); yt6.inf = yt6.body
	      if (yt6.api.lastChild) {
		z = yt6.api.children
		for(i=0;i<z.length;i++) { if (typeof z[i].getAttribute == 'function' && typeof z[i].getAttribute('id') == 'string' && z[i].getAttribute('id').indexOf('player_uid_') == 0) { z[i].setAttribute('id','movie_player'); p = gid('movie_player'); if (p) p.setAttribute('style','display: inline-block'); break } }
	      }
	    }
	    z = gid('watch-header')
	    if (!z) {
		z = document.createElement('div'); z.id = 'watch-header'; yt6.body.appendChild(z)
		z = gid('watch-header'); if (z) z.setAttribute('style','position: absolute; z-index: 1001; top: 45px')
	    }
	  }
      } else {
	  p = (gid('koya_child_0')) ? gid('koya_child_0').parentNode.parentNode : null
	}
    }
  
  if (!yt6.ytg && !yt6.p) {
    p = p;
  } else {
      if (!yt6.api && p && p.parentNode && p.id && p.id.indexOf('_uid_') == -1) {
	var z = p.children
	if (z)
	for(var i in z) {
	  if (z[i].id) {
	    yt6.api = z[i];
	  }
	}
	//if (gid('bm0')) yt6.api = gid('bm0').parentNode
      }
    }
      if (!p && yt6.api) {
	var z = yt6.api.children
	if (z)
	for(i=0;i<z.length;i++) {
	  if (z[i]) try {
	    if (z[i].id && (z[i].id == 'video-player' || z[i].id.indexOf('player_uid_') == 0)) {
	      p = z[i];
	    }
	  } catch(e){}
	}
      }

  if (p == null) {
    p = document.getElementsByClassName('html5-video-player')[0]
    if (p && p.getAttribute('class') && p.getAttribute('class').indexOf('ytp') > -1 && typeof p.getPlayerState == 'function' && p.getAttribute('data-version') === '' && !p.getAttribute('id')) { p.setAttribute('id','movie_player'); yt6.api = p.parentNode }
  }

  if (p && p.parentNode) yt6.p = p
  return p
}


function original(p) {

    var p0, vid0
    var current_vid = (p && typeof p.getVideoUrl == 'function' && !(yt6.ytm && p.tagName == 'EMBED')) ? vID(p.getVideoUrl()) : vID(window.location.href)
    var y = gid('movie_player_to_dispose'); if (y && y.children && !y.children.length) y = yt6.api
    if (y) {
      z = y.children
      if (z) for(i=0;i<z.length;i++)
	if (z[i] && typeof z[i].getAttribute == 'function') {
	var vid0 = (z[i] && typeof z[i].getVideoUrl == 'function' && !(yt6.ytm && z[i].tagName == 'EMBED')) ? vID(z[i].getVideoUrl()) : null
	if (vid0) {
	  if (current_vid == vid0) {
	    p0 = z[i]; break
	  } else {
	      if (z[i].tagName == 'DIV') p0 = z[i]
	    }
	} else if (z[i].tagName == 'DIV' && !(z[i].firstChild && z[i].firstChild.nextSibling)) z[i].parentNode.removeChild(z[i])
      }
    }
    if (p0) {
	yt6.original = p0
    } else if (!yt6.blocked) { p0 = p || yt6.p }

    return p0
}



function reload_flashplayer(first){

	var p = player()
	var bm0 = gid("bm0")
        var bup = gid('movie_player').cloneNode(true);
	if (first) {
	  return true
	} else {
	    set_controls();
	  }

}



function correct_flashvars(a) { // prepare the flash player object's flashvars variable


		
  var vid = video_id()[0], c = conf('args')
  if (!c[0]) return void 0;
  if (!(c[1] && c[1].video_id)) {					// brand new since 2019-07-30: the video_id object is deleted by yt on each new page
    a.video_id = vid
    window.ytplayer.config.args.video_id = vid
  }

  yt6.args				= clone(window.ytplayer.config.args)	// backup clone

  var args				= a,					// reference to the actual data object -- window.ytplayer.config.args
      adaptive_fmts			= yt6.args.adaptive_fmts,		// clone
      url_encoded_fmt_stream_map	= yt6.args.url_encoded_fmt_stream_map,	// clone

  // backups of 2 objects which need to be modified to be able to use Flash in spite of being no longer supported by YouTube
      player_response			= yt6.args.player_response,		// the JSON.stringified ["captions"] child object needs to be wiped
      ad3_module			= yt6.args.ad3_module			// if not empty, ad3_module will break the flash player as well


  args.embedded_player_response = ''
  delete args.embedded_player_response
  args.embed_config == ''
  delete args.embed_config
  args.el = ''
  delete args.el
  args.use_miniplayer_ui = '0'


  args.remarketing_url = ''
  args.afv_ad_tag = ''
  args.afv_invideo_ad_tag = ''
  args.dynamic_allocation_ad_tag = ''
  args.web_player_disable_flash_playerproxy = ''
  delete args.web_player_disable_flash_playerproxy
  args.lightweight_watch_video_swf = ''
  delete args.lightweight_watch_video_swf
  args.web_player_flash_fallback_killswitch = ''
  delete args.web_player_flash_fallback_killswitch

  args.allow_html5_ads = ''
  args.ppv_remarketing_url = ''
  args.encoded_ad_safety_reason = ''
  args.iv_invideo_url = ''
  args.iv3_module = ''
  args.ad_device = ''
  args.iv_load_policy = ''
  ytplayer.config.args.iv_allow_in_place_switch = (!yt6.oldbrowser) ? '0' : '1'
  args.ad_preroll = ''
  args.midroll_prefetch_size = 0
  args.ad_slots = ''
  args.ad_flags = ''
  args.afv = false
  args.instream = false
  args.invideo = false
  args.instream_long = false
  args.allow_below_the_player_companion = false
  args.ptk = 'youtube_none'
  args.status = 'ok'



  // backup of the legacy media stream urls before modification  
  if (url_encoded_fmt_stream_map) {
    var uefsm_bak = clone(url_encoded_fmt_stream_map)
  } else var uefsm_bak = url_encoded_fmt_stream_map = ''


  // d'scramble

  if (typeof yt6.media_encrypted == 'undefined' || yt6.media_encrypted[0] != args.video_id) { yt6.media_encrypted = [args.video_id, false] }


  var ft = [args.url_encoded_fmt_stream_map, args.adaptive_fmts], used_itags = []
  for (i in ft) {
    if (typeof ft[i] == 'string') {
      if (ft[i] == args.url_encoded_fmt_stream_map) { var c = 1 }
      if (ft[i] == args.adaptive_fmts) { var c = 2 }
      var z = ft ? ft[i].split(',') : ''
      for (j in z) {
	var href = ''
	if (typeof z[j] != 'string') continue
	var qs = qr(z[j]); if (!qs) continue
	if (z[j].indexOf('videoplayback') == -1) continue
	if (qs.itag) {
	  if (used_itags[qs.itag]) { url_encoded_fmt_stream_map = url_encoded_fmt_stream_map.split(z[j]).join(''); z[j] = ''; continue } else used_itags[qs.itag] = true // only one source per format
	  if (Array.isArray(yt6.linx) && yt6.linx[qs.itag]) { z[j] = href = yt6.linx[qs.itag].split('&title=')[0]; qs = qr(z[j]); used_itags[qs.itag] = true }
	}

	if (c == 1 && (z[j].indexOf('//') == 0 || z[j].indexOf('http') == 0)) { // reconstruct stream_map from plain url
	  var itag = ''
	  if (z[j].split('itag=')[1]) {
	    itag = z[j].split('itag=')[1].split('&')[0]
	  } else if (z[j].split('itag%3D')[1]) {
	      itag = z[j].split('itag%3D')[1].split('%26')[0]
	    }
	  var quality = (itag == 22) ? 'hd720' : 'medium'
	  var type = (itag == 43) ? 'video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22' : 'video%2Fmp4%3B+codecs%3D%22avc1.42001E%2C+mp4a.40.2%22'
	  var x = (z[j].indexOf('//') == 0) ? protocol() : ''
	  z[j] = 'sp=sig&type=' + type + '&quality=' + quality + '&itag=' + itag + '&url=' + encodeURIComponent(x + z[j])
	}

	if (qs.s || z[j].indexOf('lsig%3D') != -1){
	  yt6.media_encrypted = [args.video_id, true]

	  var x = (z[j].split('lsig%3D')[1]) ? '%3D' : '='

	  if (z[j].split('lsig' + x)[1]) { // newer signatures stored in the parameters "lsig","sig" and "s" frequently contain equal signs which must be passed to the flash player as twice-encoded URI component characters (%253D --> %2525253D will be accomplished in the final step of flashvars creation)
	    var signame = 'sig', sig = '', sig2 = ''
	    if (href) {
	      if (href.split('lsig=')[1]) {
		  try { sig = href.split('lsig=').join('').split('sig=')[1].split('&')[0].split('%26')[0] } catch(e){}
		  if (sig) sig = sig.split('=').join('%253D').split('%253D').join('%253D')
	      } else {
		  try { sig = href.split('lsig%3D').join('').split('sig%3D')[1].split('%26')[0] } catch(e){}
		}
	    }
	    if (!sig) {
		var lsig = z[j].split('lsig' + x)[1].split('%2526')[0].split('%26')[0].split('&')[0]
		var lsig2 = lsig.split('=').join('%253D').split('%253D').join('%253D') // .join('@@@@3D') was used for testing
		z[j] = z[j].split(lsig).join(lsig2)
		if (!qs.s) {
		  sig = z[j].split('lsig' + x).join('').split('sig' + x)[1] || z[j].split('lsig' + x).join('').split('sig=')[1]
		  if (sig) {
		    sig = sig.split('%2526')[0].split('%26')[0].split('&')[0]
		    sig2 = sig.split('=').join('%253D').split('%3D').join('%253D')
		    sig = sig2
		  } else sig = undefined
		} else {//encrypted
		    sig = dc(qs.s).split('=').join('%253D').split('%3D').join('%253D') // .join('@@@@3D') was used for testing
		  }
	    }
	  } else {
	      if (href) {
	        try { sig = href.split('lsig=').join('').split('sig=')[1].split('&')[0] } catch(e) {}
		if (sig) { sig = sig.split('=').join('%253D').split('%253D').join('%253D') }
	      } else {
		  var signame = 'signature'
		  var sig = dc(qs.s)
		}
	    }

	  var y = x
	  var x = (x == '%3D') ? '%3F' : '?'


	  var regx = new RegExp('s' + y + qs.s, 'gm')


	  if (c == 1) {
	    z[j] = (!href) ? z[j].replace('videoplayback' + x,'videoplayback%3F' + signame + '%3D' + sig +'%26').split('s=' + qs.s).join('s=').split('s=' + encodeURIComponent(qs.s)).join('s=') : z[j].split('s=' + qs.s).join('s=').split('s=' + encodeURIComponent(qs.s)).join('s=') //z[j].split('sig=' + sig).join('s=')
	    url_encoded_fmt_stream_map = z.join(',')
	  }
	  if (c == 2 && z[j].indexOf(sig) == -1) {
	    z[j] = z[j].replace('videoplayback' + x,'videoplayback%3F' + signame + '%3D' + sig +'%26')
	    z[j] = z[j].replace('s=' + qs.s + '&', 's=&')
	    adaptive_fmts = z.join(',')
	  }
	} else {
	    if (z[j] && z[j].indexOf('signature=undefined') > -1) continue // these are trash to be ignored
	    if (!(yt6.media_encrypted[0] == video_id()[0] && yt6.media_encrypted[1] == true)) yt6.media_encrypted = [args.video_id, false]
	  }

      }
    }
  }

  if (url_encoded_fmt_stream_map) {
    //console.log(url_encoded_fmt_stream_map); console.log(url_encoded_fmt_stream_map.substring(url_encoded_fmt_stream_map.length-1,url_encoded_fmt_stream_map.length))
  }

  if (url_encoded_fmt_stream_map && url_encoded_fmt_stream_map.substring(url_encoded_fmt_stream_map.length-1, url_encoded_fmt_stream_map.length) == ',') {
    url_encoded_fmt_stream_map = url_encoded_fmt_stream_map.substring(0, url_encoded_fmt_stream_map.length-1)
  }


  var ar = (args.fmt_list && args.fmt_list.split('/')[1]) ? (args.fmt_list.split('/')[1].split('x')[0] / args.fmt_list.split('x')[1].split(',')[0]) : ''

  // ordering must follow the one in url_encoded_fmt_stream_map (should always be from highest resolution to lowest)
  // or else other choices will be greyed out in flash
  var fmt_list = '', ordered = '', res, itags = [], used_itags = []
  var y = yt6.fmts_fallback.V.all
  var z = url_encoded_fmt_stream_map.split(',')
  for (i=0;i<z.length;i++) {
    for(j=0;j<y.length;j++) {
      if (y[j]) {
	if (!used_itags[y[j]] && (z[i].split('itag%3D' + y[j])[1] || z[i].split('itag=' + y[j])[1])) {
	  itags.push(y[j]); used_itags[y[j]] = true
	}
      }
    }
  }

  var y = yt6.fmts_fallback.V.h264
  used_itags = []
  for(j=0;j<y.length;j++) {
    for(i=0;i<itags.length;i++) {
      if (!used_itags[y[j]] && y[j] && y[j] == itags[i] && itags.indexOf(y[j]) > -1 && z[itags.indexOf(y[j])] ) {
	  ordered = (ordered) ? ordered + ',' : ''
	  ordered = ordered + z[itags.indexOf(y[j])]
	  used_itags[y[j]] = true
	  }
    }
  }

  var z = ordered.split(',')
  for (i=0;i<z.length;i++) {
    for(j=0;j<y.length;j++) {
      if (y[j]) {
	if ((z[i].split('itag%3D' + y[j])[1] || z[i].split('itag=' + y[j])[1])) {
	  if (qual[y[j]]) if (typeof ar == 'number') {
	    if (qual[y[j]]['q'] == 'hd720') res = (ar >= 16/9) ? '1280x' + Math.round(1280 / ar) : (ar < 16/9) ? Math.round(720 * ar) + 'x720' : '1280x720'
	    if (qual[y[j]]['q'] == 'medium') res = (ar >= 16/9) ? '640x' + Math.round(640 / ar) : (ar < 16/9) ? Math.round(360 * ar) + 'x360' : '640x360'
	  } else {
		if (qual[y[j]]['q'] == 'hd720') res = '1280x720'
		if (qual[y[j]]['q'] == 'medium') res = '640x360'
	    }
	  fmt_list = (fmt_list) ? fmt_list + ',' : ''
	  fmt_list = fmt_list + y[j] + '/' + res
	}
      }
    }
  }
  if (ordered) url_encoded_fmt_stream_map = ordered
  if (fmt_list) args.fmt_list = fmt_list




  try { // exclude the WEBM VP8 format because Flash Player can't handle it

    var z = url_encoded_fmt_stream_map.split(',')
    for(i=0;i<z.length;i++){
      if (z[i].indexOf('type=video%2Fwebm%3B') != -1 || z[i].indexOf('videoplayback') == -1 || z[i].indexOf('http') == 0) {
	z[i] = '@@@' 				// VP8 & other erroneous data replaced by symbol
      }
    }
    z = z.join(',').split(',@@@,').join(',').split(',@@@').join('').split('@@@,').join('')	// symbol stripped

    url_encoded_fmt_stream_map = z

  } catch(e) {}


    args.url_encoded_fmt_stream_map = url_encoded_fmt_stream_map				// update real data with the modified clone


    args.t = 1 // by late April 2019, maintainers removed this data -- flash player needs it

    if (!args.loaderUrl) try { args.loaderUrl = 'https://www.youtube.com/watch?v=' + (vid || a.video_id) } catch(e){}

 // put an empty string here because flash player can't handle adaptive formats this way :(
    args.adaptive_fmts = ''



if (typeof player_response == 'string') {

  var streamingData = player_response.split('"streamingData":{')[1]
  streamingData = (streamingData) ? '"streamingData":{' + streamingData.split('"captions":{')[0].split('"videoDetails":{')[0] : '"playbackTracking":{},'

  var captions = player_response.split(',"captions":{')[1]
  captions = (captions) ? '"captions":{' + captions.split('"videoDetails":{')[0] : ''
  captions = '' // no more captions in flash, can't handle them

  var z = ''
  if (args.video_id) z = '"videoId":"'+ args.video_id +'"'
  if (args.title) z = (z) ? z + ',"title":"'+ encodeURIComponent(escape(args.title)) +'"' : '"title":"'+ encodeURIComponent(escape(document.title)) +'"' //.replace(/(\r\n|\n|\r)/gm," ").split(' ').join('+')
  if (args.length_seconds) z = (z) ? z + ',"lengthSeconds":"'+ args.length_seconds +'"' : '"lengthSeconds":"'+ Math.round(yt6.real_media_duration) +'"'

  var videoDetails = player_response.split(',"videoDetails":{')[1]
  videoDetails = (videoDetails) ? '"videoDetails":{' + videoDetails : '"videoDetails":{'+ z +'},"adSafetyReason":{"isEmbed":true}}'


  args.player_response = '{"playabilityStatus":{"status":"OK","playableInEmbed":true},' + streamingData + captions + videoDetails

}

  // emptying
  args.ad3_module = '' 



		// Start producing Flash parameters from the object data

		function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}

		function wa(a){return(0,window.encodeURIComponent)(String(a))}

		function da(a){return"array"==ca(a)}

		function vf(a,b,c){if(da(b))for(var d=0;d<b.length;d++)vf(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+wa(b)))}

		function wf(a){var b=[],c;for(c in a)vf(c,a[c],b);return b.join("&")}

		//xf needs:
		function Ig(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
		function Jg(a,b){return b?a?a+"&"+b:b:a};
		function Kg(a,b){if(!b)return a;var c=Ig(a);c[1]=Jg(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
		//xf needs^
		function xf(a,b){var c=wf(b);return Kg(a,c)};

		// End

		var b = wf(a)



		// write all adaptive and legacy media sources back to their respective object placeholders to use in html5
		if (typeof adaptive_fmts != 'undefined' && args.adaptive_fmts == '') args.adaptive_fmts = clone(adaptive_fmts)
		if (typeof uefsm_bak != 'undefined') args.url_encoded_fmt_stream_map = clone(uefsm_bak);


		// along with captions and ad3_module data
		args.player_response = clone(player_response)
		args.ad3_module = clone(yt6.args.ad3_module)


		return b.split('%25253D').join('%253D')

}


var highlight_text = function(wa) {
	//var wa = gid('walladdr')
	try {//to highlight the address
	  if (browserName == 'IE') {
	    var range = document.body.createTextRange()
	    range.moveToElementText(wa)
	    range.select()
	  } else if (browserName == 'Chrome' || browserName == 'Firefox' || browserName == 'Edge' || browserName == 'Opera' || browserName == 'Brave' || browserName == 'Vivaldi') {
	      var selection = window.getSelection()
	      var range = document.createRange()
	      range.selectNodeContents(wa)
	      selection.removeAllRanges()
	      selection.addRange(range)
	    } else if (browserName == 'Safari') {
		var selection = window.getSelection()
		selection.setBaseAndExtent(wa, 0, wa, 1)
	      } else {
		  if (document.body.createTextRange) {
		    var range = document.body.createTextRange()
		    range.moveToElementText(wa)
		    range.select()
		  } else if (window.getSelection) {
		      var selection = window.getSelection()
		      var range = document.createRange()
		      range.selectNodeContents(wa)
		      selection.removeAllRanges()
		      selection.addRange(range)
		    } else {
			wa.style.backgroundColor = '#fff'
			//console.warn("Could not select text in node: Unsupported browser.")
		      }
		}
	} catch(e){}
}



function tipping() {


      var a = gid('bm3'); if (a) a.style.visibility = 'hidden'
      if (!gid('msg-box1')) {
	var z = document.createElement('div')
	z.id = 'msg-box1'
	yt6.appendChild(z)
	z.setAttribute('style','position: fixed; z-index: 5; background-color: transparent; width: 0px; height: 0px;')
      }
      var a = gid('msg-box1')
      a.title = ''
      var mhp = (yt6.mhp) ? ((yt6.layout != 16 || yt6.ytm) ? yt6.mhp.offsetHeight : yt6.mhp.parentNode.parentNode.offsetHeight) : 0

      if (!gid('tip0')) {
	//var z = '', y = '';for(i=0;i<z.length;i++){y='%'+z[i].charCodeAt(0).toString(16);console.log(y)}//parseInt(hex, 16)
	var cdn = (yt6.cdn.indexOf('rawgit.com') == -1) ? yt6.cdn : '//cdn.jsdelivr.net/gh/snarly/yt6@'; //rawcdn.githack.com/snarly/yt6/' //rawgit won't cache this new stuff
	var c0 = unescape('%39%35%61%64%64%30%61%38%61%33%32%64%36%63%62%32%62%65%36%66%63%33%63%66%37%31%31%30%36%33%39%36%37%64%33%36%36%36%36%31%2f%69%6d%61%67%65%73%2f'), c1 = unescape('%62%74%63%2e%70%6e%67'), c2 = unescape('%65%74%68%2e%70%6e%67'), c3 = unescape('%6c%74%63%2e%6a%70%67'), c4 =  unescape('%62%63%68%2e%70%6e%67')
	var c = {
	'c1' : {'n': unescape('%42%69%74%63%6f%69%6e'),
		'i': cdn + c0 + c1,
		'a': unescape('%33%46%63%32%69%52%66%62%36%35%43%75%55%43%34%78%70%64%72%51%38%62%59%65%73%36%43%4D%52%69%35%47%59%53')},
	'c2' : {'n': unescape('%45%74%68%65%72%65%75%6d'),
		'i': cdn + c0 + c2,
		'a': unescape('%30%78%63%35%61%36%38%32%64%33%38%65%62%62%65%36%31%61%37%66%32%33%37%65%39%36%35%38%36%32%37%39%39%35%63%35%38%65%62%34%30%36')},
	'c3' : {'n': unescape('%4c%69%74%65%63%6f%69%6e'),
		'i': cdn + c0 + c3,
		'a': unescape('%4d%4a%59%51%45%52%64%78%50%7a%50%47%73%74%47%68%53%38%4c%62%62%54%33%6f%4a%6c%4e%44%63%43%6a%56%5a%6d%55')},
	'c4' : {'n': unescape('%42%69%74%63%6f%69%6e%43%61%73%68'),
		'i': cdn + c0 + c4,
		'a': unescape('%71%70%78%70%73%6b%32%37%35%66%35%38%38%76%77%76%67%67%74%6c%75%70%7a%65%73%77%65%6a%6a%6d%6b%36%32%79%67%61%70%36%77%32%75%37')}
	}

	var iconsize = function() { return (Math.ceil(Math.max(Math.min(screen.width, parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight) / 3.5), 120)) )}

	var z = document.createElement('div')
	z.id = 'tip0'
	a.appendChild(z)
	var b = gid('tip0')


	b.setAttribute('style','position: fixed; text-align: center; background-color: transparent; width: auto; height: auto; max-width: ' + (screen.width) + 'px; top: ' + Math.max((parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight) / 2 - iconsize()), mhp) +'px; left: 50%; margin-left: ' + -1*iconsize() +'px; ')

	b.ht = highlight_text

	b.donate = function(cur) {

	var z = gid('tip1'); if (z) z.style.display = 'none'

	b.innerHTML = b.innerHTML +
	  '<div id="tip2" style="color: black; background-color: transparent; height: '+ iconsize() +'px; background-image: url('+ c[cur]['i'] +'); background-size: '+ iconsize() +'px '+ iconsize() +'px"><div style="text-align: center" onclick="var z = gid(\'tip0\'); z.ht(gid(\'walladdr\'))"><div style="padding: 0px 0px 0px 0px"><div style="font-size: '+ Math.ceil(iconsize() / 7) +'px">'+ c[cur]['n'] +'</div><div style="font-size: '+ Math.ceil(iconsize() / 12) +'px">Receiving Address</div><code id="walladdr" style="font-size: '+ Math.max(17, Math.ceil(iconsize() / 12)) +'px; background: #fff: 2px; box-shadow: 0 0 7px rgba(0,0,0,.5)"></code></div><div style="position: relative; width: '+ iconsize() +'px; left: 50%; margin-left: '+ Math.ceil(-1*iconsize() / 2) +'px"><div id="qr-text" style="font-size: ' + Math.ceil(iconsize() / 11) +'px">QR-Code</div><div style="font-size: '+ Math.ceil(iconsize() / 18) +'px">to scan with Mobile Crypto Apps</div></div></div></div><div id="tip3" style="z-index: 5; text-align: center; width: '+ iconsize() +'px; height: '+ iconsize() +'px" onclick="(function(){ var z = document.getElementById(\'tip1\'); if (z) { z.style.display = \'block\'; z.parentNode.style.marginLeft = z.parentNode.marginLeft }; z = gid(\'tip2\'); if (z) z.parentNode.removeChild(z); z = gid(\'tip3\'); if (z) z.parentNode.removeChild(z)})()"><div id="qr-code"></div></div>';

	var qr = gid('qr-code')

	function qrCode(addr) {
	  try {
	    var img = $('#qr-code').qrcode({ size: iconsize(), fill: '#000', radius: 0.3, text: addr, render: 'image'}); var img = qr.getElementsByTagName('img')[0]; img.id = 'qr-img'; if (img.src.indexOf('youtube.com') > -1 || (img.src.indexOf('data:image') == 0 && img.src.length < 2000)) { img.parentNode.removeChild(img); qrcode_failed() }
	  } catch(e){ //console.log(e)
	      var img = document.createElement('img'); img.id = 'qr-img'; img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=' + iconsize() +'x'+ iconsize() + '&data=' + addr;
	      gid('qr-code').appendChild(img)
	      img.setAttribute('style','width: '+ iconsize() + 'px; height: '+iconsize() +'px')
	    }
	  return img
	}

	var wa = gid('walladdr'), left = 0
	if (wa) {
	  wa.innerHTML = c[cur]['a']
	  left = (wa.offsetWidth)
	}
	var q = '', qr = gid('qr-code')
	if (qr) q = qrCode(c[cur]['a'])
	  
	if (!(q && q.id == 'qr-img')) {
	  q = gid('tip3'); if (q) q.innerHTML =
	    '<div style="text-align: center"><button style="position: relative; left: '+ (b.offsetWidth - iconsize()) / 2 +'px; background-color: red; color: white">Failed to generate QR-Code!</button></div>'
	} else {
	    q = qr.querySelector('#qr-img')
	    qr.style.marginLeft = ( ((left / 2 - iconsize() / 2) > 0) ? left / 2 - iconsize() / 2 : 0) + 'px'
	  }


	var z = gid('qr-text'); if (z) { z = z.parentNode; z.style.top = ( ( (iconsize() - (z.offsetHeight + z.previousSibling.offsetHeight)) > 30) ? (iconsize() - z.previousSibling.offsetHeight) / 1.51 : 0) + 'px' }


	if (q) q.setAttribute('onclick','(function(){ var z = document.getElementById("tip1"); if (z) { z.style.display = "block"; z.parentNode.style.marginLeft = z.parentNode.marginLeft }; z = gid("tip2"); if (z) z.parentNode.removeChild(z); z = gid("tip3"); if (z) z.parentNode.removeChild(z)})()');
	q = gid('tip0'); q.style.marginLeft = -1 * (gid('tip2').offsetWidth / 2) + 'px'; q.style.top = Math.max((parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight) / 2 - iconsize()), mhp) + 'px'
	q = gid('tip2'); q.style.backgroundRepeat = 'no-repeat'; q.style.backgroundSize = q.offsetHeight + 'px ' + q.offsetHeight + 'px'; q.style.backgroundPosition = 'center';


	highlight_text(gid('walladdr'))

	$waitUntil(function(){ if (!(yt6 && gid('tip0') && gid('tip2') && document.activeElement == yt6.body)) return true },
	  function(){ var z = document.getElementById("tip1"); if (z) { z.style.display = "block"; z.parentNode.style.marginLeft = z.parentNode.marginLeft }; z = gid("tip2"); if (z) z.parentNode.removeChild(z); z = gid("tip3"); if (z) z.parentNode.removeChild(z) });


	}//b.donate

	var x = ['c1' , 'c2', 'c3', 'c4']
	var s = Math.min(Math.min(Math.floor(parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight) / 3), Math.floor(screen.width / 4)), 160);//99
	b.innerHTML = '<div id="tip1"><div style="background: #fff; overflow: hidden"><div style="display: inline-block; color: black; font-size: '+Math.ceil(s/6)+'px"><div><a style="color: black" '+ ((!yt6.mobile) ? 'href="http://snarly.github.io/yt6"' : '') + ' onclick="window.open(\''+ ('http://snarly.github.io/yt6/' || yt6.poster.src) +'\', \'_blank\').focus(); return false">Link to project site to check for updates</a></div><p style="font-size: '+Math.ceil(s/10)+'px">Donate to the developer anonymously</p></div><h1 class="snarl-button yt-uix-button-text" style="padding: 0 4px 0 4px; background-color: red; color: white; float: right" onclick="(function(){ var close = gid(\'tip0\'); if (close) close.parentNode.removeChild(close); })()">X</h1></div></div>'

	z = gid('tip1')
	for(i in x) {
	  z.innerHTML = z.innerHTML + '<button class="snarl-button yt-uix-button-text" style="width: '+s+'px; height: '+s+'px; background-size: '+s+'px '+s+'px; background-image: url(' + c[x[i]]['i'] + ')" onclick="this.parentNode.parentNode.donate(\''+x[i]+'\');"><div style="font-size: '+Math.ceil(s/6)+'px">' + c[x[i]]['n'] +'</div></button>'
	}
	//z.innerHTML = z.innerHTML + '<div><button><div style="background: #fff; font-size: 20px">Dismiss</div></button></div>'
	b.marginLeft = -1 * ((s) * x.length / 2) + 'px'
	b.style.marginLeft = b.marginLeft 


      }

}



function loadScript(url, callback) {
  var z = document.createElement("script");
  z.type = "text/javascript";
  z.src = url;
  z.id = url.split(/[/]+/)[url.split(/[/]+/).length-1];
  z.onreadystatechange = callback;
  z.onload = callback;
  try { gid('video-hide').appendChild(z) } catch(e){ try { console.log(z.src) } catch(e){} }
}

function loadCSS(url, callback) {
  var z = document.createElement("link");
  z.type = "text/css";
  z.href = url;
  z.rel = "Stylesheet";
  z.onreadystatechange = callback;
  z.onload = callback;
  try { gid('video-hide').appendChild(z) } catch(e){ try { console.log(z.href) } catch(e){} }
}



if (yt6.layout == 12) {


    (function(){

	if (typeof ytspf != 'undefined' && !ytspf.enabled) {

	  ytspf.enabled = true;ytspf.config = {'reload-identifier': 'spfreload'};ytspf.config['request-headers'] = {'X-YouTube-Ad-Signals': {toString: function() {return (window['yt'] && yt['ads_'] && yt.ads_['signals_'] &&yt.ads_.signals_['getAdSignalsString']) ?yt.ads_.signals_.getAdSignalsString() :'';}},'X-YouTube-Identity-Token': null};ytspf.config['experimental-request-headers'] = ytspf.config['request-headers'];ytspf.config['cache-max'] = 50;ytspf.config['navigate-limit'] = 50;ytspf.config['navigate-lifetime'] = 64800000; 

	  if (window['_spf_state'] && window['_spf_state'].config) { window['_spf_state'].config = clone(ytspf.config); }

	}

	var z = document.getElementsByTagName('script')
	if (z) {
	  if (z && z.length) for(i=0;i<z.length;i++) {
	    if (typeof z[i].getAttribute == 'function' && typeof z[i].getAttribute('src') == 'string') {
	      if (z[i].getAttribute('src').indexOf('/spf.js') > -1) {
		yt6d.spf = z[i].getAttribute('src')
	      }
	      if (z[i].getAttribute('src').indexOf('/base.js') > -1) {
		if (yt6.oldbrowser) yt6d.base_js = z[i].getAttribute('src')
	      }
	    }
	  }
	}
    })();


}




function video_title() {

  var watch_page = true
  var title = gid('eow-title') || gc('title style-scope ytd-video-primary-info-renderer')[0]
  var title = (title) ? title[yt6.txt] : document.title.substring(0, document.title.length)
  var z = title.substring(0, title.length - 10); if (z && title.substring(title.length - 10, title.length - 1 ) == ' - YouTube') { title = z; watch_page = false }
  var z = title.substring(0, title.length - 17); if (z && title.substring(title.length - 16, title.length - 1) == ' - YouTube Music') { title = z; watch_page = false }
  if (location.href.indexOf('.com/watch') == -1 && location.href.indexOf('.com/shorts') == -1) watch_page = false

  return [title, watch_page]
}

function vID(str) {
  if (typeof str != 'string') return ''
  return (str.split('v=')[1] || str.split('/shorts/')[1] || str.split('/v/')[1] || '')
}


function video_id(skip_update) {

  var vid

  if (!(yt6.ytp.embed && yt6.vid)) {

  vid = vID(location.href)
  if (vid) vid = vid.split('&')[0].split('#')[0]
  if (!vid) {
    vid = location.href.split('v/')[1]
    if (vid) vid = vid.split('/')[0]
  }

  }

  vid = [ vid || yt6.vid, location.href.split('//')[1].split('.youtube.com')[0] ]

  if (!skip_update) 
  if ( (( !(yt6.vid && typeof yt6.vid == 'string' && yt6.vid.indexOf(vid[0]) != -1) ) || yt6.ytp.embed) && player() && typeof yt6.p.getVideoUrl == 'function') {
    var pobj = [yt6.p, yt6.original, getElementsByAttribute(yt6,'div','name','original')[0]], ytvid
    for(i=0;i<pobj.length;i++) if (pobj[i] && typeof pobj[i].getVideoUrl == 'function') {
      try { ytvid = vID(pobj[i].getVideoUrl()) } catch(e) { continue }
      if (typeof ytvid == 'string') {
	if (yt6.layout == 16 && yt6.browser_tab == 'hidden' && yt6.navigation && yt6.pls) try { var s = pobj[i].getPlayerState(); if (s != 1) pobj[i].playVideo() } catch(e){}
        yt6.vid = ytvid.split('&')[0]
	//vid = [ yt6.vid, location.href.split('//')[1].split('.youtube.com')[0] ]
	break
      }
    }
  }

  if ( ((vid && Array.isArray(vid) && !vid[0]) || !vid) && location.href.indexOf('.com/embed') > -1) {
    if (!vid) vid = [yt6.vid, location.href.split('//')[1].split('.youtube.com')[0] ]
    if (location.href.split('.com/embed/')[1] || location.href.split('.com/embed?')[1]) {
      vid[0] = clone((location.href.split('.com/embed/')[1] || location.href.split('.com/embed?')[1]).split('?')[0].split('&')[0].split('#')[0])
    } else vid[0] = clone(vID(location.href))
    yt6.vid = vid[0]
  }

  return vid
}

yt6d.init = video_id()[0]


function clear_pls(x) {

  if (x && yt6d.playlist.list != x) {
    yt6d.playlist.list = x; yt6d.playlist.items = []; yt6d.playlist.current = 0; yt6d.playlist.next = null
  }

}


function iframe() {

			if (yt6.flash.forced) { var z = gc('forced flashplayer'); if (z[0]) for(i=0;i<z.length;i++) { z[0].iframe = true; z[0].setAttribute('id','movie_player4_flash') } }

			      if (player() && v_(yt6.p)) {
				if (yt6.p.getAttribute('name') == null) { if (yt6.ytp.dump) try { yt6.ytp.dump.pauseVideo() } catch(e){} }
				try { yt6.p.pauseVideo(); v_(yt6.p).pause() } catch(e){}
				//v_(yt6.p).parentNode.setAttribute('class','html5-video-container0')
				//v_(yt6.p).setAttribute('class','video-stream-html5-main-video0')
				gid('movie_player_to_dispose').appendChild(yt6.p)
				//yt6.p.setAttribute('id', 'movie_player0')
			      }

		var p = player(), y = gid('movie_player_to_insert')
		    iframe_ = getElementsByAttribute(document,'iframe','name','re-embed2')[0]

		if (!iframe_) {
		  var z = document.createElement('iframe')
		  z.id = 'movie_player4_iframe'
		  z.name = 're-embed2'
		  y.appendChild(z) //document.getElementsByTagName('head')[0].appendChild(z)//yt6.api.insertBefore(z, yt6.api.firstChild)
		  z.block = yt6.blocked
		  z.setAttribute('class','player-height player-width')
		  z.setAttribute('allowFullScreen', '')
		  z.setAttribute("allowscriptaccess","always")
		  z.setAttribute('wmode','window')
		  z.setAttribute('width', '100%')
		  z.setAttribute('height','100%')
		  if (yt6.osw) {
		    z.style.width = yt6.osw.style.width
		    z.style.height = yt6.osw.style.height
		  }
		}


		if (!gid('iframe_api')) loadScript( '//www.youtube.com/iframe_api', function(){});

		// functions to control iframe embedded players
		if (!(window.yt6.embed && window.yt6.embed.control)) {

		  if (!window.yt6.embed)
		    window.yt6.embed = {}

		  window.yt6.embed.control = function(p3) {

			var z = gid('player-unavailable') || gid('error-screen')
			if (z) z.style.display = 'none'

		      yt6.embed.play = function() {
			yt6.embed.check(yt6.embed.player)
			try { yt6.embed.player.playVideo() } catch(e) {
			  if (e && e.toString().indexOf('DOM') > -1) { alert('Error: The YouTube player is not attached to the DOM.')
			    window.yt6.embed.active()
			  }
			}
		      }

		      yt6.embed.pause = function() {
			yt6.embed.check(yt6.embed.player)
			try { yt6.embed.player.pauseVideo() } catch(e) {
			  if (e && e.toString().indexOf('DOM') > -1) { alert('Error: The YouTube player is not attached to the DOM.')
			    window.yt6.embed.active()
			  }
			}
		      }

		      $waitUntil(function(){ if (typeof CtrlS == 'function') return true },
			function(){ set_controls()
			  if (yt6.age.t == yt6.reason && yt6.x) switch_players()
			  if (!yt6.x && autoplay(false)) try { yt6.embed.play() } catch(e){}
			},300,3000)

		  } //embed control


		  if (!window.yt6.embed.state)

		    window.yt6.embed.state = function (event) {

			var z = gid('movie_player')
			if (z && z.tagName == 'IFRAME') {
			  z.x = (yt6.x) ? true : false
			  yt6d.x = (yt6.x) ? true : false
			  if (event.data == YT.PlayerState.PLAYING) {
			    if (typeof (1*yt6.speed) == 'number') yt6.embed.player.setPlaybackRate(yt6.speed)
			  }
			  z.state = yt6.embed.player.getPlayerState()
			  if ( yt6.pls &&
				(   (z.state == 0 && (z.prev_state == 3 || z.src.indexOf(video_id(true)[0]) == -1))
				    || (z.prev_state == 3 && z.getCurrenttime() && z.state == -1)
				)
			     ) { yt6.age.blocked = false; undo_iframe() }
			  z.prev_state = clone(z.state)
			}
		    }


		  if (!window.yt6.embed.check)

		    window.yt6.embed.check = function(player) {

			if (player) {
			  for (var attr in player) {
			    if (player.hasOwnProperty(attr) && player[attr].tagName == 'IFRAME' && player[attr].id == 'movie_player') { // locate the embedded player's reference to its supposed DOM-object iframe
			      if (player[attr] != yt6.api.querySelector('#movie_player')) window.yt6.embed.active() // if it doesn't point to our current player, reinitialize the embed
			      break
			    }
			  }
			}

		    }


		  if (!window.yt6.embed.active)

		    window.yt6.embed.active = function() {

			try { original(yt6.p).pauseVideo() } catch(e){}

			var c = conf('args')
			if (c[1] && location.href.split('list=PL')[1]) {
			  c[1].list = 'PL' + location.href.split('list=PL')[1].split('&')[0].split('/')[0]; clear_pls(clone(c[1].list))
			}

			// create the global player from the specific iframe (#movie_player)
			window.yt6.embed.player = new YT.Player('movie_player', {

				playerVars: {
				  listType: 'playlist',
				  list: c[1].list
				},
				events: {
				  // call this function when player is ready to use
				  'onReady': yt6.embed.control,
				  'onStateChange': yt6.embed.state
				}
			});

			if (window.yt6.embed.player) {
			  for (var attr in window.yt6.embed.player) {
			    if (window.yt6.embed.player.hasOwnProperty(attr) && attr.indexOf('closure_uid_') > -1) {
			      if (!window.yt6.embed.uid) {
				window.yt6.embed.uid = attr
			      }
			      break
			    }
			  }
			  if (yt6.layout == 16 && yt6.pls && yt6.newin)
			  if (window.yt6.embed.uid != attr) {
				open_outside_of_playlist()
			  } else if (yt6.status != 'ok') yt6.newin = null
			}

		    }


		}// end of iframe functions


		yt6.embed = window.yt6.embed


		if (!iframe_) iframe_ = gid('movie_player4_iframe')
		if (iframe_) {

		  yt6.blocked = false
		  if (p && p.tagName == 'EMBED' && p.getAttribute('src') == '' && p.getAttribute('flashvars') == '' && p.parentNode != y) {
		  // here the initial dummy flashplayer object will be replaced by an iframe
		  // this may put ytplayer in a dysfunctional state on subsequent videos (at least on Firefox's Material Design layout)
		    y.appendChild(yt6.p)
		    var src = yt6.p.getAttribute('src') || yt6.flash.swfbin4 || yt6.flash.swfbin4_backup || ytplayer.config.url
		    yt6.p.setAttribute('src','')
		    yt6.p.setAttribute('src', src)
		    yt6.p.setAttribute('id','movie_player1')
		    if ((ytplayer.config.args.errorcode == 150 || ytplayer.config.args.errorcode == 101 || !ytplayer.config.args.errorcode)) {// remove it if embedding is desabled
		      gid(yt6.p.id).parentNode.removeChild(gid(yt6.p.id))
		      var z = gid('flash_on')
		      if (z) { z.checked = false; z.setAttribute('checked','') }
		      yt6.flash.forced = false
		    }
		  }

		  // set source for the iframe
		  var c = conf('args')
		  var pl_index = (c[1] && c[1].list) ? ((yt6.layout == 12) ? 1 * yt6.pl_index : (1 * yt6.pl_index)) : '' // + 1
		  var vid; try { vid = vID(location.href).split('&')[0].split('/')[0] } catch(e){ vid = video_id(true)[0] }
		  var vid = (yt6.layout == 12 && c[1] && c[1].list) ? vid + '?listType=playlist&list=' + c[1].list + '&index=' + pl_index + '&' : vid + '?'
		  iframe_.setAttribute('src', '//www.youtube.com/embed/' + vid + 'autoplay=0&enablejsapi=1&version=3&origin=https%3A%2F%2Fwww.youtube.com&widgetid=1')

		  yt6.api.insertBefore(iframe_, yt6.api.firstChild)
		  iframe_.setAttribute('id','movie_player')
		  y = gid('movie_player_to_dispose')
		  if (yt6.p && yt6.p.tagName != 'IFRAME' && yt6.p.parentNode != y) y.appendChild(yt6.p)

			  if (player() && yt6.p.tagName == 'IFRAME') {
			    yt6.p.x = (yt6.x) ? true : false
			    yt6.p.style.visibility = 'visible'
			    var bm0 = gid('bm0') //|| gid('bm01')
			    if (bm0) bm0.style.visibility = 'hidden'
			    yt6.x = false
			    set_controls()
			    try { yt6.player1.hideControls() } catch(e){}
			  }

		  if (yt6.api && yt6.api.parentNode) {
		    if (yt6.api.style.height == '100%') yt6.api.style.height = yt6.p.style.height
		    if (yt6.api.style.width == '100%') yt6.api.style.width = yt6.p.style.width
		  }

		} else {

		  }

	var c = conf('args')
	if (c[1]) {
	  ytplayer.config.args.url_encoded_fmt_stream_map = ''
	  ytplayer.config.args.adaptive_fmts = ''
	}

}



function undo_iframe() {
	if (player() && yt6.p.tagName == 'IFRAME') {
		try { yt6.p.pauseVideo(); v_(yt6.p).pause() } catch(e){}
		yt6.p.src = ''
		yt6.p.state = 0
		var x = (yt6.p.x) ? true : false
		gid('movie_player_to_dispose').appendChild(yt6.p)
		//document.getElementsByTagName('head')[0].appendChild(yt6.p)
		yt6.p.id = 'movie_player4_iframe'
		if (window.yt6.embed && window.yt6.embed.control) { window.yt6.embed.control = null; delete window.yt6.embed.control }

		var z = (!yt6.flash.forced) ? yt6.original || gid('movie_player_orig') || gid('movie_player0') || gid('movie_player') : gid('movie_player4_flash') || gc('forced flashplayer')[0]
		if (z) {
		  if (z.firstChild && v_(z)) {
		    v_(z).parentNode.setAttribute('class','html5-video-container')
		    v_(z).setAttribute('class','video-stream html5-main-video')
		  }
		  yt6.api.insertBefore(z, yt6.api.firstChild)
		  z.id = 'movie_player' //movie_player1
		} else { yt6.age.v = 6
		    ageless_verification()
		    var z = gid('movie_player_orig')
		    if (z) { z.setAttribute('id','movie_player1'); switch_players(); buildObject(ytplayer) }
		  }

		player()
		if (x) {
		  if (yt6.p && yt6.p.parentNode) yt6.p.style.visibility = 'hidden'
		  if (gid('bm0')) { gid('bm0').style.visibility = 'visilbe' }
		  yt6.x = true
		}
		try { yt6.p.pauseVideo(); v_(yt6.p).pause() } catch(e){}
		removeEL(window, "message", yt6.ytp.cmd, false); addEL(window, "message", yt6.ytp.cmd, false)
		if (yt6d.x != yt6.x) { yt6.x = clone(yt6d.x); try { switch_players(true) } catch(e){} } //else if (!yt6.x) try { switch_players(true); switch_players(true) } catch(e){}
		if (!yt6.x) try { yt6.p.playVideo() } catch(e){}// && yt6.pls
	}
}



function alt_yt(vid) {


		var p = player(), p = yt6.p, c = conf('args')

		if (yt6.layout == 12) {
		  var a = getElementsByAttribute(document,'script','name','player_ias/base')[0]
		  if (a && a.src && a.src.indexOf('youtube.com') > -1) ytplayer.config.assets.js = '/yts/' + a.src.split('/yts/')[1] //'/yts/jsbin/player_ias-vfl______/en_US/base.js'
		  a = getElementsByAttribute(document,'link','name','player/www-player')[0]
		  if (a && a.href && a.href) ytplayer.config.assets.css = '/yts/' + a.href.split('/yts/')[1] //'/yts/cssbin/player_ias-vfl______/www-player-webp.css'
		}

		yt6.ytp.app = (window.yt && window.yt.player && window.yt.player.Application && (window.yt.player.Application.createAlternate || window.yt.player.Application.create))

		if (!vid || (p && p.tagName == 'IFRAME')) var vid = video_id()[0]


		var y = gid('movie_player_to_insert')
		var dump = gid('ytp_dump')

		var z = document.createElement('video')
		if (z) { z = z.constructor
		  if (z) { z = z.prototype
		    if (z) { z = z.canPlayType
		      if (typeof z == 'function') {
			try { if (z() == '') { z = false } else z = true } catch(e) { z = true }
			//if (z && yt6.html5_fail && c[0] && c[0].html5 == true) yt6.html5_fail = false
		      }
		    }
		  }
		}


		if ((!yt6.html5_fail || yt6.blocked) && !yt6.oldbrowser && yt6.flash.forced == 2) { yt6.flash.forced = false }


		if (!yt6.mobile) {
		  var playlist = (yt6.layout == 16) ? gid('playlist') || gid('queue') : gid('watch-appbar-playlist') || document.getElementsByTagName('ytg-playlist-panel-renderer')[0]
		} else var playlist = gc('playlist-content section')[0] //|| document.getElementsByTagName('ytd-live-chat-frame')[0] || gid('chat')
		if (yt6.layout == 16 && playlist && ((!playlist.lastChild || !playlist.firstElementChild) || playlist.hasAttribute('hidden')) ) playlist = null

		var mp2 = getElementsByAttribute(document, 'embed','id','movie_player')[0]
		if ((!yt6.html5_fail && p && p.tagName == 'EMBED' && p.getAttribute('flashvars') == '')) {//c[1].html5 deprecated 

		  if (mp2) if (c[1] && c[1].url_encoded_fmt_stream_map && p.getAttribute('flashvars') == '' ) {
			if (mp2.previousSibling && mp2.previousSibling.tagName == 'SPAN') mp2.parentNode.removeChild(player().previousSibling)
			if (mp2.nextSibling && mp2.nextSibling.tagName == 'NOEMBED') mp2.parentNode.removeChild(mp2.nextSibling)


			  if (yt6.ytp.app) {
			    yt6.ytp.handle = yt6.ytp.app(dump, c[0], ytplayer.web_player_context_config)
			    yt6.ytp.dump = dump.firstChild
			    if (yt6.ytp.dump) {
			      yt6.ytp.dump.setAttribute('id','movie_player')
			      if (typeof yt6.ytp.dump.getPlayerState == 'function') {
				yt6.api.insertBefore(yt6.ytp.dump, yt6.api.firstChild)
				//mp2.parentNode.removeChild(mp2)
			      }
			    }

			  }


		  }

		}

	      if ( !( (c[1] && !c[1].url_encoded_fmt_stream_map && !c[1].adaptive_fmts) ) && // go to iframe section when there are no sources to play at all
		   ( (yt6.blocked || yt6.status == 'unplayable' || (yt6.p && yt6.p.tagName == 'DIV' && !(yt6.p.firstChild && yt6.p.firstChild.nextSibling))) &&
		     (yt6.ytp.app && c[1] && c[1].errorcode != 150 && !(yt6.layout == 12 && yt6.status == 'unplayable') && (c[1].url_encoded_fmt_stream_map || c[1].adaptive_fmts))  
		 ) ) { // video data present

		  if (!yt6.flash.forced) {// && yt6.layout == 12

			if (yt6.layout == 16 || !yt6d.previous.linx.length) {

			var t = dump || yt6.api
			var a; try { a = yt6.ytp.app(t, c[0], ytplayer.web_player_context_config) } catch(e){ yt6.blocked = false; yt6.age.blocked = false; yt6.age.sc = null; yt6.age.dl = null; yt6.age.audio = null; yt6.age.count = 0; return void 0 }
			var x = t.firstChild
			if (yt6.ytp.dump == yt6.p) {
			  try {
			    yt6.ytp.dump.pauseVideo()
			    yt6.ytp.dump.setAttribute('id','movie_player0')
			    gid('movie_player_to_dispose').appendChild(yt6.ytp.dump)
			  } catch(e){ if (yt6.ytp.dump.parentNode) yt6.ytp.dump.parentNode.removeChild(yt6.ytp.dump) }
			}
			if (x) { var name = 'replacement'
			  x.setAttribute('id','movie_player')
			  x.setAttribute('name',name)
			  x.setAttribute('class','forced html5player html5-video-player ytp-transparent ytp-hide-info-bar ytp-large-width-mode')
			  x.setAttribute('time', Date().toLocaleString().toString())
			  yt6.ytp.handle = a
			  yt6.ytp.dump = x
			  yt6.api.insertBefore(x, yt6.api.firstChild)
			  var seen = []
				function prune(key, holder, depthDecr) {
				  if (yt6.error == '  \n  ') return ''
				  var q, z, partial = [], value = holder[key];
				  switch (typeof value) {
				    case 'string':
				      return;// '"' + value + '"';
				    case 'object':
				      if (0 >= depthDecr || seen.indexOf(value) >= 0){
					  if (holder[key] == yt6.ytp.dump) { yt6.ytp.holder = holder; yt6.ytp.key = key; break }; return;}
				      seen.push(value);
				      for (q in value)
					if (Object.prototype.hasOwnProperty.call(value, q)) {
					  try {
					    z = prune(q, value, depthDecr - 1);
					  } catch(e){ //ur browser's too old for this shit
					      yt6.error = '  \n  ';
					      break
					    }
					  if (z) {
					    //partial.push(q + ':' + z);
					  }
					}
				      return '{' + partial.join() + '}';
				  }
				}
			  prune('', {'': a}, 9); //console.log(yt6.ytp.key); console.log(yt6.ytp.holder[yt6.ytp.key]); console.log(b)
			} else { }

			}

			//yt.player.Application.create(yt6.api, c[0])

		  } else if (!yt6.flash.forced && yt6.status != 'unplayable') { //!playlist &&

			var t = dump || y
			try {
			  yt6.ytp.handle = yt6.ytp.app(t, c[0], ytplayer.web_player_context_config) //y
			  yt6.ytp.dump = x = t.firstChild
			  if (x) y.insertBefore(x, y.firstChild)
			} catch(e){
			    try {
			      yt6.ytp.handle = yt6.ytp.app(t, c[0], ytplayer.web_player_context_config) //y
			      yt6.ytp.dump = x = t.firstChild
			      if (x) y.insertBefore(x, y.firstChild)
			    } catch(e) { if (x) x.parentNode.removeChild(x); yt6.blocked = false; yt6.age.blocked = false; yt6.age.sc = null; yt6.age.dl = null; yt6.age.audio = null; yt6.age.count = 0; return void 0 }
			}

			//yt.player.Application.create(y, c[0]);


		    } else if (yt6.layout == 16 && yt6.blocked) {

		        if (!yt6.newin) { yt6.newin = video_id()[0] } else yt6.newin = ''

		      }


		  var z = gid('watch7-player-age-gate-content') || gid('error-screen')
		  if (yt6.layout == 12) {
		    if (z && z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '') {
		      var z = gid('player-unavailable')
		      if (z) z.style.display = 'none'
		    }
		  } else if (z) z.style.display = 'none'



		  if (yt6.layout == 12 || (yt6.layout == 16)) // && !playlist
		  (function ytp_id(){
		    //yt6.timer = 0
		    yt6.html5swap = true
		    try {

		    var x = (yt6.layout == 12) ? yt6.api : y
		    var z = x.children
		    for (i=0;i<z.length;i++) {
		      //if (z[i].id && (z[i].id == 'bm0' || x == 'player_uid_')) { var x = 'player_uid_' } else var x = 'video-player'
		      if (z[i].id == 'video-player' || z[i].id == 'movie_player') {

			yt6.new_ytplayer = z[i]
			$waitUntil(function(){ if (player() != null || yt6.new_ytplayer.id.indexOf('player_uid_') == 0) {
			    return true
			  } else { }
			},
			function(){
			  var mp = gid('movie_player') || gid('movie_player1'), x = yt6.new_ytplayer.parentNode, fmp
			  if (!yt6d.previous.linx.length) fmp = getElementsByAttribute(yt6.api,'EMBED','id','movie_player')[0]

			  if (mp && (mp != yt6.p && mp.tagName == 'EMBED') || (fmp && fmp.parentNode == yt6.api))
			  if (!mp.getAttribute('flashvars')) {
			    var z = gc('ytp-error-content')[0]
			    if (!(z && z.parentNode.parentNode == yt6.p)) {
			      if (mp != yt6.p || mp != fmp) { //remove the dummy flash stuff
				if (mp.tagName == 'EMBED') mp.parentNode.removeChild(mp)
				if (fmp && fmp.parentNode) fmp.parentNode.removeChild(fmp)
			      }

			      yt6.html5_fail = false
			      yt6.flash.forced = false
			    } else { //html5 player is not working, fall back to flash
				yt6.p.parentNode.removeChild(yt6.p)
				var p = player(), p = yt6.p
				p.setAttribute('flashvars', correct_flashvars(ytplayer.config.args))
				return void 0;
			      }
			  }

			  var name = 'replacement'//(yt6.p.tagName == 'DIV' && yt6.p.getAttribute('name')) ? 'replacement' : 'movie_player'
			  yt6.new_ytplayer.setAttribute('name', name)
			  yt6.new_ytplayer.setAttribute('id','movie_player')
			  yt6.new_ytplayer.setAttribute('class','forced html5player html5-video-player ytp-transparent ytp-hide-info-bar ytp-large-width-mode')
			  yt6.new_ytplayer.setAttribute('time', Date().toLocaleString().toString())
			  if (player()) {
			    if (yt6.layout == 12 && !(yt6.flash.forced && yt6.blocked) && yt6.p.tagName == 'EMBED') { yt6.api.removeChild(yt6.p) }
			    if (yt6.layout == 16) {
			      var x = document.getElementsByTagName('YTD-PLAYER')[0]; if (x) yt6.api = x
			      var c = yt6.api.children; 
			      for (j=0;j<c.length;j++){
				if (c[j] && c[j].getAttribute('id') == 'container' && c[j].getAttribute('class') && c[j].getAttribute('class').indexOf('ytd-player') > -1) { yt6.api = c[j]; break }
			      }
//			      if (!(gid('movie_player_to_dispose').firstChild && gid('movie_player_to_dispose').firstChild.getAttribute('id') && gid('movie_player_to_dispose').getAttribute('id').indexOf('movie_player') == 0)) {
			        gid('movie_player_to_dispose').appendChild(yt6.p)//insertBefore(yt6.p, gid('movie_player_to_dispose').firstChild)
//			      } //else if (yt6.p && yt6.p.parentNode == yt6.api) { yt6.api.removeChild(yt6.p) }
			      if (yt6.layout == 16 && yt6.pls) try { yt6.p.pauseVideo() } catch(e){}
			      yt6.api.insertBefore(yt6.new_ytplayer, yt6.api.firstChild)
			      var p = player(), p = yt6.p
			      yt6.html5swap = true
			    }

			  }
			},200,6000);

			if (yt6.layout == 12 || yt6.ytg)
			if (z[i]) {
			  if (typeof z[i].setAttribute == 'function') { z[i].setAttribute('id','movie_player') } else {}// yt6.new_ytplayer = null; ;break }
			} //else {
			    //if (yt6.new_ytplayer == null) break
			    //if (yt6.api.children[0].id == 'bm0' || (yt6.api.children[1] && yt6.api.children[1].id == 'bm0' && yt6.api.children[0].id != 'movie_player') || (yt6.api.children[2] && yt6.api.children[2].id == 'bm0' && yt6.api.children[1].id != 'movie_player' && yt6.api.children[1].id != 'movie_player')) {
			    if (yt6.layout == 12 && yt6.status == 'ok' && yt6.new_ytplayer) {
			    $waitUntil(function(){
				var z = yt6.api.children
			        for (i=0;i<z.length;i++) {
				  //if (z[i].id && z[i].id.indexOf('player_uid_') == 0) { yt6.new_ytplayer = z[i]; return true; break } //else {  yt6.timer++ }
			          if (z[i].id == 'movie_player' && z[i] != yt6.new_ytplayer && z[i].tagName == 'DIV') { yt6.new_ytplayer = z[i]; return true }
				}
			      },
			      function(){//yt created one too
				yt6.new_ytplayer.setAttribute('name','YouTube_TM')
				yt6.new_ytplayer.setAttribute('id','movie_player0'); try { yt6.new_ytplayer.pauseVideo() } catch(e){}
				gid('movie_player_to_dispose').appendChild(yt6.new_ytplayer)

			      },200,6000); break
			  }
			//}
			  
			break
		      }
		    }//for
		    } catch(e) { if (yt6.p && yt6.p.tagName == 'DIV' && yt6.p.getAttribute('class') && yt6.p.getAttribute('class').indexOf('forced html5player') > -1) { yt6.html5swap = true } else { yt6.html5swap = null; delete yt6.html5swap } }
		  })()

		  $waitUntil(function(){if (!yt6.x && yt6.p && yt6.p != yt6.original && typeof yt6.p.playVideo == 'function') return true},function(){ yt6.p.playVideo() },900,9000) // start the replacement player

	        } else { //no playable sources, maybe embedding on other sites is disabled? try a local embed here

		    var z = gid('movie_player')
		    if (z && z.getAttribute('name') != 're-embed2') {
		      if (yt6.layout == 12 && yt6.html5_fail && !yt6.flash.forced && yt6.p && yt6.mp_) {//yt6.vid != vid
			//gid('movie_player_to_dispose').appendChild(yt6.p); try { yt6.p.pauseVideo() } catch(e){}
			var bm01 = gid('bm01')
			if (yt6.p.tagName == 'DIV' && !yt6.blocked && bm01) {
			  unhide(bm01)
			  yt6.api.insertBefore(yt6.p, yt6.api.firstChild)
			}
			return void 0
		      } else {


			}
		    }

		    iframe()
		    //if (yt6.vid && yt6.vid == video_id(true)[0]) { yt6.age.t = null; yt6.blocked = false }
		 }

	    if (!ytplayer.config.args.adaptive_fmts && yt6.adaptive_fmts) {
		// passing the value, hopefully the yt player is OK by this point
		ytplayer.config.args.adaptive_fmts = clone(yt6.adaptive_fmts)
		yt6.adaptive_fmts = null
	    }

}//alt_yt






function ageless_verification(spfpc) {


    var bm0 = gid('bm0'), vid = video_id()[0], c = conf('args')
	p0 = original(player()) || getElementsByAttribute(yt6, 'div','id','movie_player0')[0]

    try { yt6.ytp.ct = (p0 && p0.parentNode) ? p0.getCurrentTime() : 0 } catch(e){ yt6.ytp.ct = 0 }

    // new way of yt video data storage
    if (!yt6d.previous.linx.length && !(c[1] && c[1].url_encoded_fmt_stream_map && c[1].adaptive_fmts)) {
	yt6.missing_source0 = true
    }
	//console.log(yt6.missing_source0)


  if (vid || yt6.oldbrowser) {

    yt6.age.check()

    if (( yt6.blocked || !c[1] ||
	  (c[1] && (!c[1].url_encoded_fmt_stream_map || !c[1].adaptive_fmts)) ||
	  !(yt6.flash.forced && spfpc == false)
	) && (!yt6.ytp.embed || (yt6.ytp.embed && yt6.oldbrowser && !c[1]))
       ) {
      try {

	if (typeof ytplayer == 'undefined') {
	  window.ytplayer = {}; yt6.oldbrowser = true
	}
	if (!ytplayer.config) window.ytplayer.config = {}
	if (!ytplayer.config.args) window.ytplayer.config.args = {}
	if (!ytplayer.config.assets) window.ytplayer.config.assets = {}
	if (!ytplayer.config.attrs) window.ytplayer.config.attrs = {}


	var xhr1 = new XMLHttpRequest();
	var x = (yt6.x && yt6.browser_tab == 'hidden' && !yt6.blocked) ? true : (((yt6.layout == 12 && !yt6.body2) || yt6.blocked || yt6.flash.forced || yt6.ytm || yt6.ytg) ? false : yt6.xhr.async)
	xhr1.open('get', '//www.youtube.com/embed/' + vid, x);// '//www.youtube.com/get_video_info?video_id=' + vid, false)
	xhr1.onreadystatechange = function() {
	  if (vid && xhr1.readyState == 4 && xhr1.status == 200) {

	    var y = xhr1.responseText
	    if (y.indexOf('yt.setConfig(') != -1) {
		//y = ' window.ytplayer.config = ' + y.split('yt.setConfig({\'PLAYER_CONFIG\': ')[1].split('});writeEmbed()')[0].split(',\'EXPERIMENT_FLAGS\'')[0].split('\n').join('').split('\r').join('')
		//eval(y); return void 0
		yt6.ytplayer = {}; yt6.ytplayer.config = {};
		var y = y.split('\'PLAYER_CONFIG\': ')[1]//yt.setConfig({
		if (y) { var index = findClosingBracketMatchIndex(y, 0)
		  if (typeof index == 'number' && index != -1) {
		    y = y.substring(y, (index + 1)).split('\n').join('').split('\r').join('')//.split('writeEmbed()')[0].split(',\'EXPERIMENT_FLAGS\'')[0]
		  } else { return void 0; }
		} else return void 0
		if (typeof JSON != 'undefined') {
		  y = JSON.parse(y); yt6.ytplayer.config.args = y.args; yt6.ytplayer.config.assets = y.assets; yt6.ytplayer.config.attrs = y.attrs
		} else {
		    y = ' yt6.ytplayer = {}; yt6.ytplayer.config = ' + y; eval(y)
		  }
	      if (yt6.ytplayer.config && yt6.ytplayer.config.args) {
		var z = yt6.ytplayer.config, c = conf('args')
		if (z && c[0]) {
		  if (z.args) {
			c[0].loaded_from = 'embed'
		        if (yt6.vid == z.args.video_id) { xhr1.done = false }
			//if (z.args.embedded_player_response && z.args.embedded_player_response.indexOf('"status":"OK"') > -1) { c[1].status = 'ok'; yt6.status = 'ok' }
			if (c[1] && !c[1].length_seconds) c[1].length_seconds = z.args.length_seconds
			if (c[1] && !c[1].title) c[1].title = z.args.title

		      if (yt6.blocked || spfpc == undefined) {// || !p0
			if (c[1] && !c[1].video_id && !yt6.blocked) c[1].video_id = z.args.video_id
		      //} else {
			  if (!yt6.ytm) window.ytplayer.config.args = z.args
		       }
		  }
		  if (z.assets) { var c = conf('assets')
		    if (!yt6d.base_js || (!(c[1] && c[1].js))) {
		      if (c[1]) c[1].css = z.assets.css;
		      yt6d.base_js = (c[1] && c[1].js) ? c[1].js : z.assets.js
		      if (!yt6.mobile &&c[1] && !c[1].js) c[1].js = z.assets.js; //c[1].js = yt6d.base_js = z.assets.js
		    }
		  }
		  if (z.attrs) { var c = conf('attrs')
		    if (c[1] && !c[1].id) { c[1].id = z.attrs.id; c[1].height = z.attrs.height; c[1].width = z.attrs.width }
		  }
		}
	      }

	      try { yt6.rpt = 1; if (xhr1.done != false) xhr1.done = true } catch(e){}
	    }
	  }
	}

	if ( !yt6.mobile && !yt6.ytm && !yt6.ytg && !(!yt6d.previous.linx.length && c[1] && c[1].url_encoded_fmt_stream_map && c[1].adaptive_fmts)) {

	  if ( !(c[0] && c[0].loaded_from) || spfpc == false || (!(c[1] && c[1].url_encoded_fmt_stream_map && c[1].adaptive_fmts )) || !ytplayer.config.attrs //&& (yt6.layout == 12 
	     ) {
	  // in new layout, this call is only useful when we started off from a bare-bones blocked video page -- it will set up fundamental data environment for the yt player


		var watch = (location.href.indexOf('watch') > -1) ? true : false


	    if (watch) {

	      xhr1.send('')

	      if (spfpc == false) return false
	    // when spfpc == false, the call served only for resetting the original player into usable state after some flash player usage in the old layout, hence the exit

	    } else if (!yt6.ytp.embed) { return false }
	  }

	}



	if ((!ytplayer.config && !yt6.rpt) ) {
	  yt6.rpt = xhr1.responseText.split('\'PLAYER_CONFIG\': ')[1]//yt.setConfig({
	  if (yt6.rpt) {
	    var index = findClosingBracketMatchIndex(y, 0)
	    if (typeof index == 'number' && index != -1) {
	      yt6.rpt = 'window.ytplayer.config = ' + yt6.rpt.substring(y, (index + 1)).split('\n').join('').split('\r').join(''); //.split('writeEmbed()')[0].split(',\'EXPERIMENT_FLAGS\'')[0]
	      if (1 * yt6.rpt.indexOf('url_encoded_fmt_stream_map') > -1) eval(yt6.rpt);
	    }
	  }
	}

	yt6.rpt = null


      } catch(e){
	  if (!ytplayer.config && !gid('player1')) {
		if (gid('player-api')) {
		  yt6.parentNode.removeChild(yt6); var z = 'Failed to fetch config data'; alert(z); throw z
		} else return void 0;
	  }
       }



      try {

	if (yt6.ytp.strState != 4) if (player() && !(yt6.ytm && yt6.p.tagName == 'EMBED')) {
	  if (typeof yt6.p.getPlayerState == 'function') {
	    yt6.ytp.strState = yt6.p.getPlayerState(); yt6.ytp.strCt = yt6.p.getCurrentTime()
	  } else {
	      yt6.ytp.strState = -1; yt6.ytp.strCt = 0
	    }
	}

      function parse_video_info(arguments){


	yt6.args = arguments.split('&')
	for (i=0;i<yt6.args.length;i++) {
	  var z = (yt6.args[i] && yt6.args[i].split('=')[0]) ? yt6.args[i].split('=') : null;
	  if (z && z[1]) if (z[0] != 'title' && (ytplayer.config.args[z[0]] == undefined || z[0] == 'video_id')) {

	    window.ytplayer.config.args[z[0]] = z[1];

	    if ( (z[0] != 'adaptive_fmts') && (z[0] != 'url_encoded_fmt_stream_map') && (z[0] != 'remarketing_url') && (z[0] != 'videostats_playback_base_url') && (z[0] != 'dashmpd') && (z[0] != 'afv_ad_tag') && (z[0] != 'afv_invideo_ad_tag') && (z[0] != 'dynamic_allocation_ad_tag') ){
		window.ytplayer.config.args[z[0]] = window.ytplayer.config.args[z[0]].split('%26').join('&').split('%25').join('%')
		window.ytplayer.config.args[z[0]] = unescape(window.ytplayer.config.args[z[0]]);
		if (window.ytplayer.config.args[z[0]].indexOf('://') > -1) window.ytplayer.config.args[z[0]] = window.ytplayer.config.args[z[0]].split('/').join('\\/')
	    } else {
		window.ytplayer.config.args[z[0]] = window.ytplayer.config.args[z[0]].split('%26').join('&').split('%3D').join('=').split('%2C%2B').join(',+').split('%2C').join(',').split(',+').join('%2C+')
		if (z[0] == 'dashmpd') { window.ytplayer.config.args[z[0]] = window.ytplayer.config.args[z[0]].split('%3A').join(':').split('%2F').join('\\/') }
		window.ytplayer.config.args[z[0]] = window.ytplayer.config.args[z[0]].split('%25').join('%')
	      }
	    //console.log(z[0] + ' = ' + window.ytplayer.config.args[z[0]])
	  } else if (z && z[0] == 'title') {
	      window.ytplayer.config.args.title = z[1] //unescape(decodeURIComponent(z[1].split('+').join(' ')))
	    }
	}

	var z = unescape(arguments)
	if (z.split('"dashManifestUrl":"')[1]) yt6.manifest.mpd = z.split('"dashManifestUrl":"')[1].split('"')[0]
	if (z.split('"hlsManifestUrl":"')[1]) yt6.manifest.hls = z.split('"hlsManifestUrl":"')[1].split('"')[0]

	if (ytplayer.config.loaded_from != 'page_source' && !yt6.ytm) ytplayer.config.loaded_from = 'video_info'

	var mp = yt6.original || yt6.p, c = conf('args'), p_r
	if (typeof JSON != 'undefined' && c[1] && (!c[1].player_response || (typeof c[1].player_response == 'string' && c[1].player_response.split('"status":"')[1] && c[1].player_response.split('"status":"')[1].split('"')[0] == 'UNPLAYABLE')) ) try { var p_r = JSON.stringify(mp.getPlayerResponse()); if (typeof p_r == 'string') c[1].player_response = p_r } catch(e){}


	yt6.missing_source = player_response()


	if (player() && yt6.p.id && yt6.p.id.indexOf('_uid_') > -1) yt6.p.setAttribute('id','movie_player')


	if (yt6.ytg || yt6.layout == 16) {
	  if (yt6.flash.forced && player() && yt6.p.tagName == 'EMBED') {
	    yt6.p.setAttribute('flashvars',correct_flashvars(window.ytplayer.config.args))
	    var src = yt6.p.getAttribute('src') || yt6.flash.swfbin4 || yt6.flash.swfbin4_backup || ytplayer.config.url
	    yt6.p.setAttribute('src','')
	    yt6.p.setAttribute('src', src)
	  }
	}

	if (yt6.ytg) {
	  var z = gid('overlay')
	  if (z) z.style.display = 'none'
	}



	if (location.href.split('list=PL')[1]) {
	  //ytplayer.config.args.list = 'PL' + location.href.split('list=PL')[1].split('&')[0].split('/')[0]
	}

	if (ytplayer.config.args.el) delete ytplayer.config.args.el
	ytplayer.config.args.csi_page_type = 'watch,watch7_html5'
	ytplayer.config.args.iv_allow_in_place_switch = (!yt6.oldbrowser) ? '0' : '1'
	ytplayer.config.args.c = 'WEB'
	ytplayer.config.args.is_embed = ''
	ytplayer.config.args.embedded_player_response = ''
	ytplayer.config.args.embed_config = ''

	yt6.status = ytplayer.config.args.status
	yt6.reason = ytplayer.config.args.reason || yt6.age.t



	yt6.re2 = false
	if (yt6.age.t && yt6.reason == yt6.age.t) {
	  if (typeof yt6.reason == 'string') yt6.reason = yt6.reason.replace(/(\r\n|\n|\r)/gm," ").split(' ').join('')
	  yt6.re2 = true
	}



	var c = conf('args')


	if (spfpc) {
	    if (yt6.status == 'unplayable' && yt6.reason) {
		yt6.age.count = 0//-1
		if (c[1]) {
		  c[1].url_encoded_fmt_stream_map = ''
		  c[1].adaptive_fmts = ''
		}
		return false
	    }
	}



	if ( (yt6.api && yt6.api.parentNode &&
	      ( (yt6.reason && (c[1] && ( (c[1].url_encoded_fmt_stream_map || c[1].adaptive_fmts)) || (!c[1].url_encoded_fmt_stream_map && !c[1].adaptive_fmts))  ) &&
	       (( !yt6.missing_source && (player()) && (yt6.blocked || (yt6.age.count && !gid('bm01'))) ) ||
	        ( yt6.reason && (yt6.status == 'unplayable' || (yt6.layout == 16 && yt6.blocked)) ) ||
		( yt6.p.tagName == 'DIV' && !(yt6.p.firstChild && yt6.p.firstChild.nextSibling))
	       )
	      )
	     ) || yt6.skeleton
	   ) {

	  if (spfpc && yt6.blocked) yt6.spfblock = true


	  if (yt6.x == yt6d.x) yt6d.x = clone(yt6.x)
	  var z = gid('overlay')
	  if (z) { z.setAttribute('hidden','') }
	  
	  if (yt6.layout == 16 && !yt6.ytg && !document.getElementsByTagName('YTD-PLAYER')[0]) {
	    var z = document.createElement('ytd-player')
	    z.id = 'ytd-player'
	    yt6.api.insertBefore(z, yt6.api.firstChild)
	    z.setAttribute('class','style-scope ytd-watch-flexy')
	  }

	  // ytlayer.config.html5 is no longer defined, replace it with yt6.html5_fail on condition checking
	  if ( (player() && yt6.flashplugin() &&
		( (yt6.html5_fail && !(yt6.p.tagName == 'DIV' && (yt6.status == 'unplayable' || yt6.status == 'ok') && yt6.reason)) || (yt6.p.tagName == 'EMBED' && yt6.p.getAttribute('flashvars') == '') ) || 
		  (yt6.p.tagName == 'EMBED' && (yt6.blocked || yt6.ytg) && (yt6.p.getAttribute('flashvars') == '' || typeof yt6.p.getPlayerState == 'function'))
	       ) || yt6.skeleton ) {


	    if (player().getAttribute('name') != 're-embed2') yt6.p.setAttribute('name','movie_player')

	    if (yt6.html5_fail || yt6.p.getAttribute('flashvars') == '' || yt6.flash.forced || yt6.ytg || (yt6.p && yt6.p.tagName == 'DIV' && !(yt6.p.firstChild && yt6.p.firstChild.nextSibling))) {//' '
	      if ((yt6.html5_fail && !yt6.flash.forced) || yt6.skeleton) {

		yt6.p.setAttribute("flashvars", correct_flashvars(window.ytplayer.config.args))
		yt6.flash.flag = 1
		if (!yt6.flash.swfbin4) player().setAttribute("src", ytplayer.config.url)

	      } else {
		  alt_yt()
		}
	    }

	    $waitUntil(function(){
		var z = yt6.api.children
		if (player() == null) {
		  for(i=0;i<z.length;i++) {
		    if (z[i].id) if (z[i].id == 'video-player' || z[i].id.indexOf('player_uid_') == 0) {
		      yt6.new_ytplayer = z[i];
		      return true
		    }
		  }
		} else {
		  for(i=0;i<z.length;i++) {
		    if (z[i].id) if (z[i].id == 'video-player' || z[i].id.indexOf('player_uid_') == 0 || z[i].tagName == 'IFRAME') {
		      if (!yt6.flash.forced) {
			yt6.new_ytplayer = z[i];
			return true
		      } else {
			  yt6.old_ytplayer = null
			  var fmp = gc('forced flashplayer')[0]
			  if (fmp && fmp.tagName == 'EMBED' && fmp.getAttribute('id') == 'movie_player' && fmp.parentNode.getAttribute('id') == 'movie_player_to_insert') {
			    var y = gid('movie_player_to_dispose')
			    y = (y) ? y.children : null
			    for(j=0;j<y.length;j++) {
			      if (y[j] && typeof y[j].getAttribute == 'function' && y[j].className && y[j].className.indexOf('YouTube_TM') > -1 && y[j].getAttribute('name') == 'original') {
				yt6.old_ytplayer = y[j]
				try { z[i].pausaVideo() } catch(e){}
			      }
			    }
			    yt6.new_ytplayer = z[i]
			    return true
			  }
			}
		    }
		  }
		  }
	      },
	      function(){
		if (!yt6.flash.forced) {
		  var z = yt6.new_ytplayer.id
		  var fv = yt6.new_ytplayer.getAttribute('flashvars')
		  if (fv && fv != '' && fv != null) yt6.new_ytplayer.setAttribute('flashvars', fv.split(z).join('movie_player'))
		  yt6.new_ytplayer.setAttribute('id','movie_player')
		  if (yt6.new_ytplayer.tagName != 'IFRAME') {
		    yt6.new_ytplayer.setAttribute('name','movie_player')
		  } else {
		      yt6.new_ytplayer.setAttribute('src','//www.youtube.com/embed/' + ytplayer.config.args.video_id + '?autoplay=0&enablejsapi=1&version=3&list=' + ytplayer.config.args.list)
		    }
		} else {
			var z = yt6.new_ytplayer
			var y = gid('movie_player_to_dispose')
			var bm0 = gid('bm0')
			var fmp = gc('forced flashplayer')[0]
			if (yt6.layout == 16 && !yt6.ytg) {
			  z.parentNode.removeChild(z)
			} else if (y) {
			    if (z && z.tagName == 'DIV') {
			      z.setAttribute('name','original'); z.setAttribute('class','Youtube_TM ' + z.getAttribute('class')); z.setAttribute('id','movie_player0')
			    }
			    y.insertBefore(z, y.firstChild)
			    if (yt6.old_ytplayer) yt6.old_ytplayer.parentNode.removeChild(yt6.old_ytplayer)
			  }
			unhide(bm0)
			if (fmp) { yt6.api.insertBefore(fmp, yt6.api.firstChild); fmp.style.display = 'block' }
			if (yt6d.x && yt6d.x != yt6.x) { switch_players() } else set_controls()
		  }
	      },200,6000);


	      if (yt6.layout == 16) {
		var z = document.getElementsByTagName('ytd-watch')[0]
		if (z && z.hasAttribute('player-unavailable')) {
		  z.removeAttribute('player-unavailable')
		  var z = document.getElementsByTagName('ytd-playability-error-supported-renderers')[0]
		  if (z) z.setAttribute('style','display: none')
		}
	      }

	  } else {

	      if (!yt6.ytg && gid('movie_player') && (yt6.status != 'unplayable' && yt6.reason) &&
		  (yt6.p.tagName == 'EMBED' || !bm0 ||
		   (yt6.layout == 16 &&
		    ( (yt6.status == 'fail' && yt6.reason && yt6.p.getAttribute('class') && yt6.p.getAttribute('class').indexOf('forced html5player') == -1) )//||
		  ))
	         ) {

		alt_yt(vid)

	      } else if (yt6.layout == 12) {

		  if (yt6.age.t && yt6.ytg && !yt6.change) {
		    $waitUntil(function(){if(yt6.change != undefined) return true},
		      function(){
			alt_yt(vid)
		      },100,2000)
		  } else {
		      $waitUntil(
			function(){ if (!(yt6.api && yt6.api.parentNode)) return void 0
			  var p = player()
			  if (p == null) {
			    var z = yt6.api.children
			    for(i=0;i<z.length;i++) {
			      if (z[i] && z[i].id) if (z[i].id == 'video-player' || z[i].id.indexOf('player_uid_') == 0) {
				yt6.new_ytplayer = z[i]
				return true;
				break
			      }
			    }
			  } else {
			      if (yt6.age.done == 2) {
				if (yt6.blocked) {
				  yt6.age.done++; alt_yt(yt6.vid)
				}
				//yt6.change = yt6.blocked
			      } else if (yt6.layout == 12 && (player().getAttribute('id').indexOf('player_uid_') == 0 || yt6.p.id == 'movie_player0')) {
				  player().setAttribute('id','movie_player')
				  var bm0 = gid('bm0'), c = conf('args')
				  if (!bm0 && yt6.status == 'unplayable' && gid('bm01')) { bm0 = gid('bm01') }
				  if ( (c[1] && (c[1].errorcode == 150 || c[1].errorcode == 101)) || (bm0 && bm0.parentNode.getAttribute('id') == 'movie_player_to_insert')) {
				    if (yt6.p.parentNode && yt6.p.tagName == 'DIV' && !(yt6.p.firstChild && yt6.p.firstChild.nextSibling)) {
				      yt6.p.parentNode.removeChild(yt6.p); yt6.p = null
				    } else if (bm0) { unhide(bm0); bm0.setAttribute('id','bm0') }
				    if ((yt6.layout == 12 && yt6.status == 'ok') || yt6.status == 'unplayable' || yt6.p == null) {
				      alt_yt()
				      if (yt6.old_ytplayer && yt6.old_ytplayer.parentNode != yt6.api) try { yt6.old_ytplayer.pauseVideo() } catch(e){}
				      var iframe = gid('movie_player4_iframe')
				      if (iframe) {
					yt6.api.insertBefore(iframe, yt6.api.firstChild)
					yt6.new_ytplayer = iframe
					return true
				      }
				      return true
				    } else if (yt6.old_ytplayer) try { yt6.old_ytplayer.pauseVideo() } catch(e){}

				    if (yt6.x) {
				      if (autoplay(true)) try { yt6.player1.play() } catch(e){}
				    }

				    if (yt6.flash.forced) {
				      var z = gc('forced flashplayer')[0]
				      if (z) {
					if (z.parentNode && z.parentNode != yt6.api) {
					  yt6.api.insertBefore(z, yt6.api.firstChild)
					  return true
					}
				      }
				    } else return true
				  } else if (yt6.old_ytplayer) try { yt6.old_ytplayer.pauseVideo(); yt6.old_ytplayer.destroy() } catch(e){ if (yt6.old_ytplayer.parentNode) { yt6.old_ytplayer.parentNode.removeChild(yt6.old_ytplayer) }; return true }
				} else {
				  }
			    }
			},
			function(){
			  if (yt6.new_ytplayer) {
			    var z = yt6.new_ytplayer.id;
			    yt6.new_ytplayer.setAttribute('id','movie_player')
			    if (yt6.new_ytplayer.tagName != 'IFRAME') {
			      if (v_(yt6.new_ytplayer)) {
			        yt6.new_ytplayer.setAttribute('name','movie_player')
			      } else if (yt6.ytp.handle) {}
			    } else yt6.new_ytplayer.setAttribute('name','re-embed2')
			   } else {
			     }; if (yt6d.x && yt6d.x != yt6.x) { switch_players() } else { set_controls() }
			},200,6000);

		     }

		} else if (yt6.layout == 16 && yt6.blocked && !(yt6.ytp.key && yt6.ytp.holder && yt6.ytp.holder[yt6.ytp.key] == yt6.api.firstChild && typeof yt6.api.firstChild.getVideoUrl == 'function' && yt6.api.firstChild.getVideoUrl().indexOf(yt6.vid) > -1)) {
		    alt_yt(vid)

		  }
	    }

	} else { //console.log('not blocked')
	    if (!ytplayer.config.args.adaptive_fmts && yt6.adaptive_fmts) {
		// passing the value, hopefully the yt player is OK by this point
		ytplayer.config.args.adaptive_fmts = clone(yt6.adaptive_fmts)
		yt6.adaptive_fmts = null
	    }
	  }

	  var c = conf('args')
	    if (c[1]) {
		//console.log(ytplayer.config.args.url_encoded_fmt_stream_map)
		//console.log(ytplayer.config.args.adaptive_fmts)
	    }



	 // updating the formats data object may cause an unexpected stop of the original player, so try to press play again

      }//parse_video_info



	if (yt6.skeleton && player() && yt6.p.tagName == 'EMBED') {
	 //gid('movie_player_to_dispose').appendChild(yt6.p); //yt6.p.setAttribute('id','movie_player1')
	}

	//get_video_info endpoint was shut down, xhr3 call is now useless

	var xhr3 = new XMLHttpRequest()
	var proxy = (!yt6.proxy) ? '' : proxies[0]
	var x = (yt6.x && yt6.browser_tab == 'hidden' && !yt6.blocked) ? true : ((yt6.layout == 12 || yt6.layout == 16 || yt6.blocked || yt6.flash.forced || yt6.ytm || yt6.ytg) ? false : yt6.xhr.async)
	//xhr3.open('get', proxy + '//www.youtube.com/get_video_info?video_id=' + vid +'&html5=1&el=embedded', x)
	//https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false
	//https://www.youtube.com/youtubei/v1/player/ad_break?key=
	//https://www.youtube.com/youtubei/v1/next?key=
	//https://www.youtube.com/youtubei/v1/feedback?key=
	xhr3.open('post', '//' + video_id(false)[1] + '.youtube.com/youtubei/v1/player?key='+ ((yt && yt.config_ && yt.config_.INNERTUBE_API_KEY) ? yt.config_.INNERTUBE_API_KEY : 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8') +'&prettyPrint=false' , x)

	xhr3.onreadystatechange = function() {

	  yt6.proxy = false
	  var c = conf('args')

	  if (xhr3.readyState == 4 && xhr3.status == 200 && xhr3.responseText) {
	    yt6.rpt = xhr3.responseText; var obj = null
	    //if (yt6.blocked || yt6.blocked_m) // doing this on mobile outside of age-blocked videos can have undesirable side effects
	      try {
		yt6d.rpt2 = null
		//ytInitialPlayerResponse
		if (typeof yt6.rpt == 'string') yt6.rpt = yt6.rpt.split('\\n').join('')
		obj = JSON.parse(yt6.rpt); yt6d.rpt2 = obj
		ytplayer.config.args.raw_player_response = obj
		if (yt6.blocked || yt6.blocked_m) ytplayer.config.args.player_response = clone(JSON.stringify(obj))
		if (obj && obj.videoDetails && obj.videoDetails.lengthSeconds) {
		  yt6.real_media_duration_m = 1 * clone(obj.videoDetails.lengthSeconds); yt6.loaded_media_duration = 1 * clone(obj.videoDetails.lengthSeconds)
		}
		player_response(); if (yt6.blocked) { alt_yt() } // patch
	      } catch(e){}
	    if (yt6d.rpt2 != obj && !(obj && typeof obj == 'object'))
	    if (!c[1]) {
	      $waitUntil(function(){ var c = conf('args'); if (c[1]) { return true } },
		function(){ parse_video_info(xhr3.responseText);
		  var z = gid('watch7-player-age-gate-content') || gid('error-screen')
		  if (yt6.layout == 12) {
		    if (z && z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '') {
		      var z = gid('player-unavailable')
		      if (z) z.style.display = 'none'
		    }
		  } else if (z) z.style.display = 'none'
		},200,6000)
	    } else {
		yt6.rpt = xhr3.responseText
		parse_video_info(xhr3.responseText)
		  var z = gid('watch7-player-age-gate-content') || gid('error-screen')
		  if (yt6.layout == 12) {
		    if (z && z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '') {
		      var z = gid('player-unavailable')
		      if (z) z.style.display = 'none'
		    }
		  } else if (z) z.style.display = 'none'
	      }
	  }
	}


	//if (!yt6.mobile && yt6.mobile && yt6.browser_tab == 'hidden')
	if ( !yt6.ytm && !yt6.ytg && (!(c[0] && c[0].loaded_from == 'video_info')) &&
	     (!(c[1] && c[1].adaptive_fmts) || yt6.blocked || (yt6.p && yt6.p.tagName == 'DIV' && !(yt6.p.firstChild && yt6.p.firstChild.nextSibling)) || yt6.ytg)
	   ) {
	  var params = //'{"context": {"client": {"clientName": "WEB", "clientVersion": '+ ((yt && yt.config_ && yt.config_.INNERTUBE_CLIENT_VERSION) ? yt.config_.INNERTUBE_CLIENT_VERSION : "2.20210622.10.00") +', "hl": "en", "clientScreen": "EMBED"}, "thirdParty": {"embedUrl": "https://google.com"}}, "videoId": "' + vid +'", "playbackContext": {"contentPlaybackContext": {"html5Preference": "HTML5_PREF_WANTS", "signatureTimestamp": ' + ((yt && yt.config_ && yt.config_.STS) ? yt.config_.STS : '18894') +'}}, "contentCheckOk": true, "racyCheckOk": true}' || ''; //"signatureTimestamp": 18879
'{'+
/*
	"adBlock": 1,\
	"adSignalsInfoString": "dt=1648328984927&flash=0&frm&u_tz=60&u_his=1&u_h=1080&u_w=1920&u_ah=1018&u_aw=1920&u_cd=24&bc=31&bih=710&biw=1395&brdim=282%2C69%2C282%2C69%2C1920%2C28%2C1395%2C827%2C1395%2C710&vis=1&wgl=true&ca_type=image&bid=ERR_BID",\
	"breakIndex": 0,\
	"breakPositionMs": "10000",\
	"clientPlaybackNonce": "07uP2pvPqTdghrHQ",\
*/
'	"context": {'+
/*		"adSignalsInfo": {\
			"bid": "ERR_BID",\
			"params": [\
				{\
					"key": "ca_type",\
					"value": "image"\
				},\
				{\
					"key": "dt",\
					"value": "1648328984927"\
				},\
				{\
					"key": "flash",\
					"value": "0"\
				},\
				{\
					"key": "u_tz",\
					"value": "60"\
				},\
				{\
					"key": "u_his",\
					"value": "1"\
				},\
				{\
					"key": "u_h",\
					"value": "1080"\
				},\
				{\
					"key": "u_w",\
					"value": "1920"\
				},\
				{\
					"key": "u_ah",\
					"value": "1018"\
				},\
				{\
					"key": "u_aw",\
					"value": "1920"\
				},\
				{\
					"key": "u_cd",\
					"value": "24"\
				},\
				{\
					"key": "bc",\
					"value": "31"\
				},\
				{\
					"key": "bih",\
					"value": "710"\
				},\
				{\
					"key": "biw",\
					"value": "1395"\
				},\
				{\
					"key": "brdim",\
					"value": "282,69,282,69,1920,28,1395,827,1395,710"\
				},\
				{\
					"key": "vis",\
					"value": "1"\
				},\
				{\
					"key": "wgl",\
					"value": "true"\
				}\
			]\
		},\
		"clickTracking": {\
			"clickTrackingParams": "CAAQu2kiEwiAidH81-T2AhWDR-AKHWWVBUU="\
		},\
*/
'		"client": {'+
/*			"browserName": "Firefox",\
			"browserVersion": "98.0",\
			"clientFormFactor": "UNKNOWN_FORM_FACTOR",\
			"clientName": "WEB_EMBEDDED_PLAYER",\
			"clientScreen": "EMBED",\
			"clientScreen": "WATCH_FULL_SCREEN",\
*/
((!yt6.blocked && !yt6.blocked_m)
	?	'	"clientName": "WEB",\
			"clientVersion": '+ ((yt && yt.config_ && yt.config_.INNERTUBE_CLIENT_VERSION) ? ('"'+ yt.config_.INNERTUBE_CLIENT_VERSION +'"') : "2.20210622.10.00") +','
	:	'	"clientName": "TVHTML5_SIMPLY_EMBEDDED_PLAYER",\
			"clientVersion": "2.0",') +
/*			"configInfo": {\
				"appInstallData": "CJiC_pEGEP_3rQUQmOqtBRC3y60FEPCCrgUQ1IOuBRDYvq0FEJH4_BI%3D"\
			},\
			"deviceMake": "",\
			"deviceModel": "",\
			"gl": "HU",\
*/
'			"hl": "en",'+
/*			"mainAppWebInfo": {\
				"graftUrl": "https://www.youtube.com/watch?v=IKJqecxswCA&list=PL02wfScOeN5elXiqO32ldHwxGOilEgrnS",\
				"isWebNativeShareAvailable": false,\
				"webDisplayMode": "WEB_DISPLAY_MODE_BROWSER"\
			},\
			"originalUrl": "https://www.youtube.com/get_midroll_info?ei=GIE_YoCdD4OPgQflqpaoBA&m_pos=10&token=ALWClJLIPlnT2stq1r17ylXaT9AuYFrzOxpHkc-GV5R3x8-570j29vqrtVReWeG0Wtl--zB4upP1iAuOt1b7s9z4JXHlJxX1CqvM5lLfpu5tirq5cJs5VdpFuvovTINjld6DFT39u9uo23p5Fv0hCm0v6LMFJyaRTQZiboSe7uDhzMfqZDNLthlQN0WrrF-jnT9AVVZVYwhU8i05dH8QvZEqNv24pxb1rxZp8I2vrZwn0wAPdtK5rbTUyDmzKsTBIeebs-_CYzEYQEkylm56BsAZYod-4Nq49rAIuepb1vlrrIY_rAnvJyy0Yhwm3P0EJWoAzGU2qNXEwxl_RvJQFsrhzEWraR864H--JWwzn7aeYUEI-j5Vx8G_tAQEfakACBwKMNHRuJExrByymj-WCbRAI3HnN7GPTg&index=0&vis=0&ad_block=1&tsla=%5BTSLA%5D&bid=ERR_BID&dt=1648328984927&flash=0&frm=0&ca_type=image&u_tz=60&u_his=1&u_java=%5BU_JAVA%5D&u_h=1080&u_w=1920&u_ah=1018&u_aw=1920&u_cd=24&u_nplug=%5BU_NPLUG%5D&u_nmime=%5BU_NMIME%5D&lact=1860&p_w=878&p_h=494&c=WEB&cver=2.20220325.00.00&action_proxy=1&video_id=IKJqecxswCA&m_pos_ms=10000&sts=19075",\
			"osName": "X11",\
			"osVersion": "",\
			"platform": "DESKTOP",\
			"playerType": "UNIPLAYER",\
			"remoteHost": "62.165.235.73",\
			"screenDensityFloat": 1,\
			"screenHeightPoints": 710,\
			"screenPixelDensity": 1,\
			"screenWidthPoints": 1395,\
			"timeZone": "Europe/Budapest",\
			"unpluggedAppInfo": {\
				"enableFilterMode": false\
			},\
			"userAgent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:98.0) Gecko/20100101 Firefox/98.0,gzip(gfe)",\
			"userInterfaceTheme": "USER_INTERFACE_THEME_LIGHT",\
			"utcOffsetMinutes": 60,\
			"visitorData": "CgtPY2x5WGdOaXJyUSiYgv6RBg%3D%3D"\
*/
'		},'+
/*
		"request": {\
			"consistencyTokenJars": [],\
			"internalExperimentFlags": [],\
			"useSsl": true\
		},\
		"user": {\
			"lockedSafetyMode": false\
		},\
		"cpn": "Jy77cKakt-JJy6rl",\
*/
'		"thirdParty": {"embedUrl": "https://google.com"}\
	},'+
/*	"currentMediaTimeMs": 0,\
	"isProxyAdTagRequest": true,\
	"overridePlaybackContext": {\
		"contentPlaybackContext": {\
			"autoCaptionsDefaultOn": false,\
			"autonavState": "STATE_ON",\
			"lactMilliseconds": "1860",\
			"playerHeightPixels": 494,\
			"playerWidthPixels": 878,\
			"signatureTimestamp": 19075,\
			"splay": false,\
			"vis": 0\
		}\
	},\
*/
//'	"params": "ALWClJLIPlnT2stq1r17ylXaT9AuYFrzOxpHkc-GV5R3x8-570j29vqrtVReWeG0Wtl--zB4upP1iAuOt1b7s9z4JXHlJxX1CqvM5lLfpu5tirq5cJs5VdpFuvovTINjld6DFT39u9uo23p5Fv0hCm0v6LMFJyaRTQZiboSe7uDhzMfqZDNLthlQN0WrrF-jnT9AVVZVYwhU8i05dH8QvZEqNv24pxb1rxZp8I2vrZwn0wAPdtK5rbTUyDmzKsTBIeebs-_CYzEYQEkylm56BsAZYod-4Nq49rAIuepb1vlrrIY_rAnvJyy0Yhwm3P0EJWoAzGU2qNXEwxl_RvJQFsrhzEWraR864H--JWwzn7aeYUEI-j5Vx8G_tAQEfakACBwKMNHRuJExrByymj-WCbRAI3HnN7GPTg",'+
//	"topLevelDomain": "www.youtube.com",
'	"videoId": "' + vid +'",\
	"playbackContext": {"contentPlaybackContext": {"html5Preference": "HTML5_PREF_WANTS", "signatureTimestamp": ' + ((yt && yt.config_ && yt.config_.STS) ? yt.config_.STS : '18894') +'}},\
	"contentCheckOk": true, "racyCheckOk": true, "startTimeSecs": 0\
}'


	  try { xhr3.send(params) } catch(e){}

	}


	if (yt6.oldbrowser && !yt6.rpt) {
	  parse_video_info(xhr3.responseText)
		  var z = gid('watch7-player-age-gate-content') || gid('error-screen')
		  if (yt6.layout == 12) {
		    if (z && z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '') {
		      var z = gid('player-unavailable')
		      if (z) z.style.display = 'none'
		    }
		  } else if (z) z.style.display = 'none'
	}



	var z = ytplayer.config.args.raw_player_response
	if (!ytplayer.config.args.player_response && z && z.streamingData && z.streamingData.adaptiveFormats) {
	  try {
	    ytplayer.config.args.player_response = JSON.stringify(ytplayer.config.args.raw_player_response);
	    var thumbnails = clone(yt6.thumbnails)
	    //if (!yt6.mobile) 
	    parse_video_info(ytplayer.config.args.player_response)
	    yt6.thumbnails = thumbnails
	  } catch(e){}
	} else if (window.ytplayer.config.args.raw_player_response && window.ytplayer.config.args.raw_player_response.adaptive_fmts) {
		eval('window.ytplayer.config.args.raw_player_response = '+ ytplayer.config.args.player_response)
	  }



	var c = conf('args'), p0, p01

	//if (yt6.rpt && c[0] && c[0].loaded_from == 'video_info') {
	  p0 = original(player())

	if ( (yt6.p && yt6.p.tagName == 'DIV' && (!v_(yt6.p) || (v_(yt6.p) && !v_(yt6.p).parentNode.nextSibling))) ) {
	  yt6.blocked = false; yt6.age.blocked = false; yt6.age.count = 0; yt6.age.sc = null; yt6.age.dl = null; yt6.age.audio = null; swap_player()
	  yt6.api.insertBefore(yt6.original, yt6.api.firstChild); yt6.original.setAttribute('id','movie_player')
	  if (yt6.ytp.handle && yt6.ytp.dump) {
	    try { yt6.ytp.dump.destroy() } catch(e){ try { yt6.ytp.handle.dispose() } catch(e){}; yt6.ytp.dump.parentNode.removeChild(yt6.ytp.dump) }
	  }
	}
	  p01 = getElementsByAttribute(yt6.api,'div','id','movie_player')
	  if (p01[1] && typeof p01[1].getPlayerState == 'function') {
	    if (yt6.layout == 16 && p01[1].getPlayerState() == 1) {
		//try { p0.destroy() } catch(e){ if (p0 && p0.parentNode) p0.parentNode.removeChild(p0) }
		//try { player().destroy() } catch(e){ if (yt6.p && yt6.p.parentNode) yt6.p.parentNode.removeChild(yt6.p) }
	    }
	    yt6.tmp = p0 = p01[1]
	  }
	  if ((!yt6.age.blocked && !yt6.blocked && yt6.vid == video_id(true)[0]) || !yt6.p) {

	    if (p0 && p0 != yt6.p && typeof p0.getPlayerState == 'function' && !(yt6.p && yt6.p.tagName == 'IFRAME')) {
		yt6.api.insertBefore(p0, yt6.api.firstChild)
		p0.setAttribute('name','movie_player')
		p0.setAttribute('id','movie_player')
	    }
	    if (yt6d.x && yt6.x != yt6d.x) { switch_players(); delete yt6d.x }
	  }


	  if (yt6.blocked && !(yt6.layout == 12 && !yt6d.previous.linx.length)) {
	    if (p0) { // && !p0 patch
		gid('movie_player_to_dispose').insertBefore(p0, gid('movie_player_to_dispose').firstchild)
		//v_(p0).setAttribute('class','video-stream html5-main-video')
		p0.setAttribute('name','original')
		try { p0.pauseVideo(); p0.seekTo(0) } catch(e){}
		p0.setAttribute('id','movie_player_orig')
	    }
	    if (yt6.layout == 12) if (yt6.status == 'ok' && fix_old_description() && c[1] && !(c[1].url_encoded_fmt_stream_map || c[1].adaptive_fmts)) {
		yt6.age.blocked = true
		try { p0.destroy(); yt6.original = null } catch(e) { if (z0.parentNode) p0.parentNode.removeChild(p0); yt6.original = null }
	    }
	    var p = (yt6.p.tagName == 'IFRAME' && yt6.embed && yt6.embed.player && typeof yt6.embed.player.getPlayerState == 'function') ? yt6.embed.player : player()
	    if (!yt6.x) try { p.playVideo(); yt6.ytp.speed() } catch(e){}
	  } //else if (yt6.age.blocked) try { p0.stopVideo() } catch(e){}


	  if (!yt6.ytp.embed && c[1] && !c[1].reason && !yt6.flash.forced && ((c[1].status == 'ok' && !c[1].title) || yt6.status == 'unplayable') && !c[1].url_encoded_fmt_stream_map && !c[1].adaptive_fmts) {
	    if (!(yt6.layout == 12 && c[1].status == 'ok')) { // "get the best youtube experience" = all videos are treated as age-restricted ones until you accept or decline their offer
	      c[1].status = 'error'; yt6.status = 'error'
	      if (bm0) gid('movie_player_to_insert').appendChild(bm0)
	      if (yt6.layout == 12) {
		var z = gid('watch7-player-age-gate-content') || gid('error-screen')
		if (z) z.style.display = ''
	      }
	    }
	  }

	  // destroying superfluous player object
	  var z = getElementsByAttribute(yt6.api, 'div','id','movie_player')[1]
	  if (z) {
	    try { z.destroy() } catch(e) { if (z.parentNode) z.parentNode.removeChild(z) }
	  }

	//} //else console.log(c[0].loaded_from)


      } catch(e){}

    } else {

	if ( (yt6.p && yt6.p.tagName == 'DIV' && yt6.p.firstChild && !yt6.p.firstChild.nextSibling) || yt6.ytp.embed) {
	  // update url on address bar
	  if (yt6.ytp.embed) {
	    if (location.href.indexOf(video_id()[0]) == -1) {
	      try { window.history.pushState({}, yt6.title, location.href.split('.com/embed')[0] + '.com/embed/' + video_id()[0] + '?' + (window.location.href.split('?')[1] || window.location.href.split('&')[1]) ) } catch(e){}
	      if (!(window.jscd && window.jscd.mobile)) {
		load_from_page_source()
	      } else alert('Request the Desktop version, otherwise you may only get access to the initial video data (or maybe none at all).')
	    }
	  } else load_from_page_source()
	}
      }

  }//vid?

  yt6.rpt = null
  if (yt6d.init && location.href.indexOf(yt6d.init) == -1) delete yt6d.init


  if (!yt6.missing_source) {
    return true
  }


}





function html5toflash(){
var p = document.createElement('embed')
p.id = 'movie_player4_flash'
yt6.body.appendChild(p)
p.setAttribute('style','display: none')
p.setAttribute('allowfullscreen','true')
p.setAttribute('allowscriptaccess','always')
p.setAttribute('bgcolor','#000000')
p.setAttribute('tabindex', 0)
p.setAttribute('wmode','window')
var z = p.cloneNode(true);
z.setAttribute('id','movie_player')
z.setAttribute('name','movie_player')
z.setAttribute('flashvars',correct_flashvars(window.ytplayer.config.args))
z.setAttribute('src', yt6.swfbin)
$.removeData(p); p.parentNode.removeChild(p); p = null; p = {}; delete p;
gid('player-api').insertBefore(z, gid('player-api').firstChild)

}


function me_flash_up(file, ib){

    var p = player(); p = yt6.p

    var z = yt6.api.children
    for (i=0;i<z.length;i++) {
      if (z[i] && z[i].tagName == 'EMBED') {
	try { z[i].stopVideo() } catch(e) {}
	yt6.api.removeChild(z[i])
      }
      if (z[i] && z[i].tagName == 'OBJECT') {
	try { z[i].pauseMedia() } catch(e) {}
	var p = yt6.p = z[i]
      }
    }
    if (typeof file == 'undefined') var file = def_link()
    if (typeof ib == 'undefined') var ib = yt6.api.firstChild
    if (p && p.tagName != 'OBJECT' && p.getAttribute('src') != file) {

    var js = document.createElement('object')
    js.id = 'movie_player'
    js.title = "Adobe Flash Player"
    yt6.api.insertBefore(js, ib)
    js.setAttribute("name","me_flash")
    js.setAttribute("play","true")
    js.setAttribute("loop","false")
    js.setAttribute("quality","high")
    js.setAttribute("bgcolor","#000000")
    js.setAttribute("allowscriptaccess","always")
    js.setAttribute("allowfullscreen","true")
    js.setAttribute("type","application/x-shockwave-flash")
    js.setAttribute("pluginspage","//www.macromedia.com/go/getflashplayer")
    js.setAttribute("src",decodeURIComponent(file))
    js.setAttribute("width","640")
    js.setAttribute("height","390")
    js.setAttribute("scale","default")
    js.setAttribute("class","video-stream html5-main-video")
    js.setAttribute("data",flash_mep)
    js.innerHTML = '<param name="movie" value="' + encodeURIComponent(flash_mep) + '" />\
		    <param name="flashvars" value="thumb=' + encodeURIComponent(getPoster()) + '&controls=true&file=' + file + '" />'
                    //<!-- Image as a last resort -->
                    //<img src="myvideo.jpg" width="320" height="240" title="No video playback capabilities" />
    js.fv_vid = yt6.vid

    p.style.setProperty('width', '0px', 'important')
    p.style.setProperty('height', '0px', 'important')
    //p.style.display = 'none'


    } else if (decodeURIComponent(file) != p.getAttribute('src')) {
	p.setAttribute("src",decodeURIComponent(file))
	p.removeAttribute("data")
	p.setAttribute("data",flash_mep)
	p.innerHTML = '<param name="movie" value="' + encodeURIComponent(flash_mep) + '" />\
		       <param name="flashvars" value="thumb=' + encodeURIComponent(getPoster()) + '&controls=true&file=' + file + '" />'
      } else return void 0
}



  yt6.retry = 0
  yt6.age.done = 0
  // age-restriction checking by looking at relevant DOM objects
  // due to the nature of the newer layout, this approach causes a false positive detection whenever navigating away from an actual blocked page to an accessible video
  yt6.age.check = function() {
	  yt6.age.count = (!yt6.age.count) ? 0 : yt6.age.count
	  var r, r0; if (yt6.layout == 16) r = gid('error-screen') || document.getElementsByTagName('yt-playability-error-supported-renderers')[0] || document.getElementsByTagName('ytd-playability-error-supported-renderers')[0]; r0 = r
	  yt6.age.t = gid('unavailable-submessage') || r;
	  if (yt6.age.t && yt6.age.t.getAttribute('id') == 'unavailable-submessage') {
	    if (yt6.age.t.firstChild == yt6.age.t.lastChild) yt6.age.count = 0//-1
	    if (yt6.age.t[yt6.txt] && yt6.age.t[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '') yt6.blocked = true
	    yt6.age.t = yt6.age.t.firstElementChild
	  }
	  if (yt6.age.t) yt6.age.t = yt6.age.t[yt6.txt];
	  if (yt6.age.t == '' && player().tagName == 'EMBED') yt6.age.t = "'16 Flashplayer"
	  if (yt6.age.t) if (yt6.age.t.indexOf('"') == 0 || yt6.age.t.replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') == '' ) yt6.age.t = null; // || (yt6.vid && yt6.vid == video_id(true)[0]) <-- this was meant to reduce false positive age block detection on the material design, but maybe it's ok now

	  if (!yt6.age.t && yt6.ytg) {
	    var z = gc('ytp-error-content-wrap')[0]
	    if (z && z.firstChild && z.firstChild[yt6.txt].indexOf('"') != 0) {
	      var z = gclass('fit style-scope ytg-persistent-player')
	        if (z[0]) {
		  for(i=0;i<z.length;i++){
		    if (z[i].getAttribute('id') == 'overlay') {
		      yt6.age.t = z[i]; z[i].setAttribute('hidden','');
		      $waitUntil(function(){if (yt6.age.t && yt6.age.t.getAttribute('hidden') != '') return true},
			function(){if (yt6.age.t) yt6.age.t.setAttribute('hidden','')}, 300,3000);
		      break
		    }
		  }
		}
	    }
	  }
	if (yt6.age.t) {
	  yt6.blocked = yt6.age.t; yt6.age.count = (yt6.age.count) ? yt6.age.count : (yt6.age.count + 1)//(yt6.age.count != 1) ? 1 : 
	} else {
	    if (yt6.layout == 12) {
	      yt6.age.blocked = gid('watch7-player-age-gate-content')
	      yt6.age.blocked = (yt6.age.blocked) ? yt6.age.blocked[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') : false
	    } else {
		yt6.blocked = false
		yt6.age.count = 0
	      }
	  }

	if (yt6.layout == 16 && !(yt6.ytm && yt6.flash.forced)) try { 
		var vid, vid2,
		p0 = original(player()) || getElementsByAttribute(document, 'div','name','original')[0] || gid('movie_player0') || getElementsByAttribute(gid('movie_player_to_dispose'), 'div','id','movie_player')[0]
		try {
		  vid = vID(p0.getVideoUrl())
		} catch(e) {}
		try {
		  vid2 = vID(yt6.p.getVideoUrl())
		} catch(e){}
		if (vid && vid2 != vid && window.location.href.indexOf(vid) > -1) {
		  yt6.blocked = false; yt6.age.count = 0//(yt6.age.count >= 1) ? 0 : (yt6.age.count + 1)
		} else {
			if (!vid || window.location.href.indexOf(vid) == -1) vid = ''
			r = document.getElementsByTagName('yt-player-error-message-renderer')[0]; var s = -1;
			if (yt6.p == p0 && vid == vid2) try { s = p0.getPlayerState() } catch(e){ s = -1 }

			// looking for exceptions
			if ( ( !(yt6.p.tagName == 'DIV' && yt6.p.firstChild && yt6.p.firstChild.nextSibling && (!yt6.p.getElementsByClassName('ytp-error')[0] && (p0 == yt6.p && s > 0)) && !yt6.ytm) || yt6.p.getElementsByClassName('ytp-error')[0] || (!vid && s == -1) ) && // a 'ytp-error' div should indicate if the video is truly unplayable, but may still identify it wrongly as an age-restricted/geo-blocked one in browsers which have limited html5 video / codec support
				r && ((!yt6.ytm && r.firstElementChild && r.firstElementChild.innerHTML != undefined) ||
				      (yt6.ytm && r && (r.querySelector('#info')) ) // || (yt6.osw && !yt6.osw.hasAttribute('playable')
			     	     )
			  ) {
			  if (!yt6.ytm ) {
			    r.setAttribute('hidden','')
			    yt6.age.count = (!yt6.age.count) ? 1 : (yt6.age.count)// + 1
			  } else {
			      r = r.querySelector('#info').getElementsByTagName('yt-formatted-string')[0]
			      if (r) { //r = r.firstElementChild
				if (r && r[yt6.txt] != '') {
				  yt6.age.count = 1//(!yt6.age.count) ? 1 : (yt6.age.count + 1)
				  r[yt6.txt] = ''
				} else { yt6.age.count = 0 }
			      } else { yt6.age.count = 0 }
			    }
			} else { if (yt6.age.count != 111) { yt6.age.count = (yt6.age.count > 1) ? 1 : yt6.age.count } }
		  }

		//if (yt6.p.getElementsByClassName('ytp-error')[0] && yt6.blocked && yt6.age.blocked && yt6.age.count && yt6.p && yt6.p.tagName == 'IFRAME') { yt6.age.count = 0; yt6.age.sc = null; yt6.age.dl = null; yt6.age.audio = null }

	} catch(e) { }

	//if (yt6.age.count == 2) yt6.age.blocked = true

	if ((yt6.layout == 12 && yt6.blocked) || (yt6.layout == 16 && ((yt6.age.count == 1) || yt6.age.count == 111))) { //&& (yt6.age.count < 5
	  if (!yt6.html5swap) {
	    yt6.newin = video_id(true)[0]
	    yt6.blocked = true
	    if (r0) r0.setAttribute('hidden','')
	    if (yt6.layout == 16 && gid('player-container-outer')) gid('player-container-outer').style.visibility = 'visible'
	  } else if (yt6.layout == 16 && !yt6.ytm && !yt6.mobile && !yt6.ytg && yt6.pls) {
	      if (!yt6.age.sc && yt6d.previous.linx.length) { yt6.age.sc = '<ul></ul>'; swap_player(); yt6.blocked = false; yt6.age.count = 0 }
	    }
	} else {
	    yt6.blocked = false
	    if (r0 && r0.hasAttribute('hidden') && gc('playability-status-dismiss-button')[0]) r0.removeAttribute('hidden')
	    yt6.age.blocked = (yt6.html5swap) ? true : false
	    if (!yt6.age.blocked) {
	      if (location.href.indexOf(yt6.vid) == -1 && (yt6.age.sc || yt6.age.dl)) {
	        //swap_player()
	      }
	      if (yt6.layout == 16 && !(yt6.p && yt6.p.tagName == 'IFRAME' && yt6.embed && yt6.embed.player && typeof yt6.embed.player.getPlayerState == 'function' && yt6.embed.player.getPlayerState() > -1)) { yt6.age.blocked = false; undo_iframe() }
	    }
	  }

	if (yt6.p && (yt6.p.tagName == 'IFRAME' || (!yt6.blocked || yt6.age.blocked)) && p0 && yt6.p != p0 && !(yt6.ytm && yt6.flash.forced) && typeof p0.getPlayerState == 'function' && p0.getPlayerState() == 1) try { p0.pauseVideo(); p0.seekTo(0) } catch(e){}

	if (yt6.mobile) {
	  r = gc('playability-status-signin-button')[0]
	  if ((yt6.browser_tab == 'hidden' && !r) || yt6.pre_ad) { yt6.blocked_m = true; yt6.blocked = 0 } // on a backgrounded mobile tab, r will be undefined on first try
	  if (r && r.firstElementChild && r.firstElementChild.innerHTML != undefined && yt6.api) {
	    if (typeof yt6.api.hasAttribute == 'function' && (yt6.api.hasAttribute('playable') || yt6.api.parentNode.getAttribute('playable') == 'false') ) {
	      yt6.blocked_m = true
	      if (!yt6d.init && yt6.loaded == 1) yt6.loaded = 4
		// "hide" the elements which get in the way when the video is age-blocked
		try { yt6.api.removeAttribute('playable') } catch(e){};
		try { gid('player-thumbnail-overlay').setAttribute('width','0%') } catch(e){}
	    }
	  }
	}

    return yt6.blocked
  }



// Music layout
yt6.ytm = document.getElementsByTagName('ytmusic-player-page')[0]



// the Gaming layout was shut down around May 2019
if (document.getElementsByTagName('ytg-persistent-player')[0]) {
  yt6.ytg = gid('player').firstElementChild
  if (yt6.ytg.id == 'player') {
    yt6.ytg.id = 'player-api'
    if (!yt6.ytg.firstElementChild) {
      //yt6.ie7 = true;
      gid("player-api").innerHTML = '<embed wmode="' + yt6.wmode + '" type="application/x-shockwave-flash" src="" aria-label="YouTube Video Player" name="movie_player" id="movie_player" flashvars="" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000" height="100%" width="100%">';
    } else {
	yt6.ytg.firstElementChild.setAttribute('name', yt6.ytg.firstElementChild.id)
	yt6.ytg.firstElementChild.id = 'movie_player'
      }
    //yt6.ytg.setAttribute('style', pcont().getAttribute('style') + ' overflow: hidden;')
  }
    yt6.ytg = document.getElementsByTagName('ytg-persistent-player')[0]
} else {
    yt6.ytg = null
    try { delete yt6.ytg } catch(e) { yt6['ytg'] = undefined }
    if (gid('player-api')) gid('player-api').setAttribute('style','width: ' + gid('player-api').offsetWidth + 'px; height:' + gid('player-api').offsetHeight + 'px; overflow: hidden;')
  }




function blank_fmp() {

  var v = gid('video-hide')
  var div = document.createElement('div')
  var span = document.createElement('span')
  var embed = document.createElement('embed')

  var wrap = function() { return gid('sp-element-wrap') }
  if (wrap() == null) {
    div.id = 'sp-element-wrap'
    v.appendChild(div)
  }

  gid('sp-element-wrap').innerHTML = '<span tabindex="0"></span><embed style="" wmode="' + yt6.wmode + '" type="application/x-shockwave-flash" src="" aria-label="YouTube Video Player" name="movie_player" id="movie_player" flashvars="" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000"><span tabindex="0"></span><noembed></noembed>';

      (function noembed(){
	var z = gid('sp-element-wrap').lastChild
	var y = document.createElement('div')
	z.appendChild(y); y.setAttribute('class', 'yt-alert yt-alert-default yt-alert-error  yt-alert-player')
	var x = document.createElement('div')
	y.appendChild(x); x.setAttribute('class', 'yt-alert-icon')
	var w = document.createElement('span')
	x.appendChild(w); w.setAttribute('class', 'icon master-sprite yt-sprite')
	var x = document.createElement('div')
	y.appendChild(x); x.setAttribute('class', 'yt-alert-content'); x.setAttribute('role', 'alert')
	var w = document.createElement('div')
	w.innerHTML = 'You need Adobe Flash Player to watch this video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>'
	x.appendChild(w); w.setAttribute('class', yt_alert_message)
	var w = document.createElement('div')
	y.appendChild(w); w.setAttribute('class', 'yt-alert-buttons')
    })();

  while(wrap().lastChild != null){
    var element = wrap().lastChild
    gid('player-api').insertBefore(element, gid('player-api').firstChild)
  }

}


//yt6.flash.forced = 2








function back2html5() {

		    var p = player(), p = yt6.p, vid, pstate, maybe
		    var p0 = yt6.original || getElementsByAttribute(yt6,'div','id','movie_player0')[0] || gid('movie_player0')
		    var z = gc('forced flashplayer')
		    var bm0 = gid('bm0') || gid('bm01')


		    if (z[0] || ((yt6.ytg || yt6.html5_fail) && yt6.mp_)) {

			yt6.flash.forced = false
			var v_style = (z[0]) ? z[0].getAttribute('style') : ''
			try {
			  yt6.ytp.ct = z[0].getCurrentTime()
			  vid = vID(z[0].getVideoUrl())
			  pstate = z[0].getPlayerState()
			} catch(e){
			    yt6.ytp.ct = 0
			  }
			if (vid) vid = vid.split('&')[0]
			var y = gid('movie_player_to_dispose')
			if (y) {
			  y = y.children
			  for(i=0;i<y.length;i++) {
			    var x = y[i], xname
			    if (typeof x != 'undefined') { xname = (typeof x.getAttribute == 'function') ? x.getAttribute('name') : '' } else continue
			    if ( !(z[0] && z[0].iframe) ) {
			      if ( xname && x.tagName != 'EMBED' &&
				 ( (!yt6.blocked &&
				      ( xname == 'original' ||
					(x.tagName == 'DIV' && x.firstChild && x.firstChild.nextSibling) ||
					(x.className.indexOf('YouTube_TM') > -1)
				      ) || (i == y.length-1 ) //x == p0
				   ) ||
				   (yt6.blocked &&
				    ( (xname == 'original' && x.className.indexOf('forced') == -1) ||
				     (typeof x.getVideuUrl == 'function' &&
					(window.location.href.indexOf(vID(x.getVideoUrl()) ) > -1)
				     ) ||
				     (i == y.length-1 ) // && (x == p0 || x == p)
				    )
				   )
				 )
			         ) {

			      if (x && typeof x.getPlayerState == 'function') {

				var vid2 = vID(x.getVideoUrl())

				if ((!vid && !vid2 && x.getPlayerState() == 5) && i != y.length-1) { if (!maybe) maybe = x; continue }
				if ( ((vid2 != vid ) || (vid2 && window.location.href.indexOf(vid2) > -1 && x.getPlayerState() == 2)) && i != y.length-1) { maybe = x; continue }
				 x = (maybe) ? maybe : x;

				break
			      } else { continue }
			      }
			    } else if (z[0] && z[0].iframe && yt6.status == 'unplayable') {
				z[0].parentNode.removeChild(z[0])
				break
			      }
			  }

				if (!x && maybe) x = maybe
				if (x && ((p0 && p0.tagName == 'DIV' && typeof p0.getPlayerState != 'function') ||
					  (x.tagName == 'IFRAME' && !(yt6.blocked && yt6.status == 'unplayable')))
				   ) {
				  if (p0 && p0.tagName == 'DIV') if (typeof p0.getPlayerState == 'function') { x = p0 } else {
				    // replace broken player by iframe?
				    try { p0.parentNode.removeChild(p0) } catch(e){}; alt_yt()
				  }
				}


				var bc
				if (yt6.layout == 12 || yt6.ytg) {
				  bc = (!yt6.ytp.embed) ? gid('player-api') : gid('player')
				  if (bm0) bc.insertBefore(bm0, bc.firstChild)
				} else {
				    bc = (!yt6.ytm && !yt6.mobile) ? document.getElementsByTagName('ytd-player')[0] || pcont() : yt6.api
				    if (bc && bc.id == 'ytd-player') {
				      for (j in bc.children) {
					if (bc.children[j].id == 'container') { bc = yt6.api = bc.children[j]; break }
				      }
				    }
				    //pcont().insertBefore(bm0, pcont().firstChild)
				    if (!bc) {
				      if (yt6.ytp.embed) { bc = yt6.api = gid('player') } else if (yt6.skeleton) { bc = yt6.api = gid('player-api') }
				    }
				    if (bm0) bc.insertBefore(bm0, bc.firstChild)

				  }

				if (yt6.tbg && (yt6.ytp.embed || yt6.skeleton)) bc.insertBefore(yt6.tbg, bc.firstChild)

				if (x && x.tagName == 'DIV') {
				  if (yt6.blocked || x.getAttribute('src') == yt6.flash.swfbin4) x.setAttribute('id','movie_player1')// if there also happened a flash swap on a html-swapped age-restricted video

				  //if (!(yt6.blocked)){// && x.className.indexOf('forced') > -1)) {
				  x.setAttribute('id','movie_player')
				  //} else x.setAttribute('id','movie_player1')
				  x.setAttribute('class','html5-video-player ytp-hide-info-bar')
				  x.setAttribute('name','movie_player')
				
				  if (x.hasAttribute('flashvars')) x.removeAttribute('flashvars')
				  if (x.hasAttribute('src')) x.removeAttribute('src')
				}

				if (yt6.mp_)
				  if (yt6.html5_fail) {
				    switch_players(); if (p && p.tagName == 'EMBED') p.parentNode.removeChild(p); set_controls()
				  }

				if (yt6.ytg && yt6.p.tagName == 'EMBED') {
				  yt6.p.setAttribute('id','movie_player-')
				}



				for (j=0;j<z.length;j++) if (z[j]) {
				  z[j].style.display = 'none'
				  if (z[j] == yt6.p) {
				    z[j].setAttribute('id','movie_player-')
				  }
				  z[j].parentNode.insertBefore(p0, z[j])
				}

				// the ordering of the elements is important for the "set controls" function
				var p = player(), p = yt6.p

				if (x) {
				  bc.insertBefore(x, bc.firstChild)
				  //bc.parentNode.insertBefore(bc, bc.parentNode.firstChild)
				  //bc.appendChild(p)
				}
				var z = (bm0 && bc.parentNode == bm0.parentNode) ? bc.parentNode : bc
				if (bm0) z.appendChild(bm0)

				var p = player(), p = yt6.p
				try { p.pauseVideo() } catch(e){}



			}

		      if (yt6.blocked && !vid && !vid2 && typeof x.getPlayerState == 'function' && x.getPlayerState() == 5) {
			//if (p && p.getAttribute('id') == 'movie_player') p.setAttribute('id','movie_player0')
			p = getElementsByAttribute(document,'iframe','name','re-embed2')[0] || getElementsByAttribute(document,'iframe','id','movie_player0')[0]
			if (p) {
			  yt6.api.insertBefore(p, yt6.api.firstChild)
			  p.setAttribute('name','re-embed2')
			  p.setAttribute('id','movie_player')
			}
		      }

		      //switch_players(); //var z = gc('mejs-controls')[0]; if (z) { if (z.style.display == 'none') z.style.display = 'block'; z.style.visibility = 'visible' }
		      var z = gc('forced flashplayer')
		      while(z[0]) z[0].parentNode.removeChild(z[0])
		      var y = gc('ytp-pause-overlay ytp-scroll-min')[0]
		      if (y && y.parentNode == p) { y.parentNode.removeChild(y) }
		      if (!yt6.x) p.style.visibility = 'visible'


		      try {
			var vid2 = vID(p.getVideoUrl())
			if (location.href.indexOf(vid2) == -1 || !vid2) {

			  if (!yt6.blocked) {
			    //p.cueVideoByUrl('https://www.youtube.com/v/' + vid +'?version=3', yt6.ytp.ct, yt6.ytp.cq)
			    //p.loadVideoById(vid, yt6.ytp.ct, yt6.ytp.cq)
			    var c = conf('args')
			    try { if (typeof p.getPlayerState == 'function') try { p.loadVideoById(vid); p.playVideo() } catch(e){}
			      if (location.href.split('list=PL')[1]) {

				var pl_index = (!(yt6.blocked && yt6.layout == 16)) ? yt6.pl_index : (1 * yt6.pl_index) //+ 1
				c[1].list = 'PL' + location.href.split('list=PL')[1].split('&')[0].split('/')[0]; clear_pls(clone(c[1].list))
				p.cuePlaylist({
				  listType: 'playlist',
				  list: c[1].list,
				  index: yt6.pl_index,
				  startSeconds: yt6.ytp.ct,
				  suggestedQuality: yt6.ytp.cq
				});
			      } else {
				var vid = vID(location.href)
				p.cueVideoById({
				  videoId: vid,
				  startSeconds: yt6.ytp.ct,
				  suggestedQuality: yt6.ytp.cq
				})
			        }
			      if (pstate != 2) p.playVideo(); if (yt6.ytp.ct && p.getCurrentTime() != yt6.ytp.ct) p.seekTo(yt6.ytp.ct); 
			    } catch(e){ }
			  }
			}
			$waitUntil(function(){ if (player() && typeof yt6.p.getCurrentTime == 'function' && yt6.p.getCurrentTime() > 0 && !yt6.pre_ad) { return true } },
			  function(){ var p = player(), v = v_(yt6.p)
			    if (p) p.seekTo(yt6.ytp.ct)
			    // styles
			    if (v) {
				var left = (yt6.size != 'default') ? yt6.yt_l : ((yt6.yt_l_0 || 0) + yt6.yt_l)
				var top = (yt6.size != 'default') ? yt6.yt_t : ((yt6.yt_t_0 || 0) + yt6.yt_t)
				v.style.left = (yt6.yt_l) ? left + 'px' : '0px'
				v.style.top = (yt6.yt_t) ? top + 'px' : '0px'
				v.style[yt6.propName] = yt6.yt_prop
				v.style.marginLeft = ''
				v.style.marginTop = ''
				if (yt6.p.className && yt6.p.className.indexOf('ytp-transparent') == -1) yt6.p.className = yt6.p.className + ' ytp-transparent'
			    }
			  },
			  500,5000)
			if (!yt6.x //|| (yt6.layout == 16 && !yt6.mobile && !yt6.ytm && yt6.browser_tab == 'hidden')
			) if (yt6.ad_muted) try { p.unMute(); yt6.ad_muted = false } catch(e){}; p.playVideo()
		      } catch(e){}

		      set_controls()
		    }

}



// Create a dummy flash player object if there is none on the page
(function(){

  var c = conf('args')
  if (!c[0] || !c[1]) {
    var z = (!yt6.body2) ? gid('player') : document.querySelectorAll('#player')[1]
    if (z) {
      z = z[yt6.txt]
      if (z) {
	z = z.split('var ytplayer = ytplayer || {};')[1] || z.split('window.ytplayer = window.ytplayer || {}; window.')[1]
        if (!c[0]) window.ytplayer = {}
        if (z) {alert()
	  if (!c[0]) eval('var ytplayer = ytplayer || {};') // massive changes to the yt code may be imminent
	  z = z.split(';(function()')[0].split(';(function ')[0].split('ytplayer.load = function() {yt.player.App')[0]; console.log(z)//.split('var ytplayer=window.ytplayer||{};')[0];console.log(z);
	  if (z) eval(z)
	}
      }
    }
    var c = conf('args')
    if (c[1] && !c[1].url_encoded_fmt_stream_map) ageless_verification()
  }



yt6.tmp = (yt6.layout == 12 || yt6.ytg) ? gid('player-api') : pcont()


if (yt6.layout == 16 && !yt6.ytp.embed) {
  if (!yt6.tmp) {
    yt6.api = document.getElementsByTagName('ytd-page-manager')[0]
    if (yt6.api && yt6.api.childNodes.length == 1) {
      yt6.skeleton = true
      yt6.flash.forced = true
      yt6.api.innerHTML = '<ytd-watch-flexy class="style-scope ytd-page-manager hide-skeleton" video-id="' + yt6d.init + '" js-panel-height_="" watch-color-update_="" flexy_="" is-four-three-to-sixteen-nine-video_="" is-two-columns_="" flexy-large-window_="" style="--ytd-watch-flexy-scrollbar-width:17px; --ytd-watch-flexy-panel-max-height:502px; --ytd-watch-flexy-chat-max-height:527px;" role="main" playlist=""></ytd-watch-flexy>'
      yt6.api = pcont()
      yt6.tmp = pcont()
    }
  }
  if (yt6.api && yt6.api.firstElementChild && yt6.api.firstElementChild.tagName == 'YTD-PLAYER') {
    yt6.api = yt6.api.firstElementChild
    yt6.tmp = yt6.api.firstElementChild
    if (yt6.api && yt6.api.firstElementChild && yt6.api.firstElementChild.tagName == 'DIV') {
      yt6.api = yt6.api.firstElementChild
      yt6.tmp = yt6.api.firstElementChild
    }
  }
}


if ( yt6.tmp && (!player() || (yt6.p && typeof yt6.p.getPlayerState != 'function' && gc("html5-video-container")[0] && gc("html5-video-container")[0].innerHTML == '') ) ) {


  if (typeof ytplay0 == 'undefined') { //blank_fmp()

    if (yt6.flash.forced) yt6.flash.forced = 2 //don't do element swapping at script loading time

    yt6.tmp.setAttribute('style','overflow: hidden;')
    if (yt6.tmp.getAttribute('style') == 'overflow: hidden;') {//normal
      yt6.tmp.innerHTML = '<embed style="" wmode="' + yt6.wmode + '" type="application/x-shockwave-flash" src="" aria-label="YouTube Video Player" name="movie_player" id="movie_player" flashvars="" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000" height="100%" width="100%" time="' + new Date().toLocaleString().toString() + '">'//<span tabindex="0"><span tabindex="0"></span> ...  </span><noembed></noembed>'
    } else { yt6.ie7 = true;
	//yt6.tmp.innerHTML = '<span tabindex="0"></span><span tabindex="0"></span><noembed></noembed>'
	yt6.tmp.innerHTML = '<embed style="" wmode="' + yt6.wmode + '" type="application/x-shockwave-flash" src="' + yt6.flash.swfbin4 + '" aria-label="YouTube Video Player" name="movie_player" id="movie_player" flashvars="" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000" height="100%" width="100%" time="' + new Date().toLocaleString().toString() + '">'
      }


    if (!c[0]) {

	ageless_verification()

    } else {
	if (!c[1]) {
	  yt6.parentNode.removeChild(yt6)
	} else {
	    if (!c[1].url_encoded_fmt_stream_map) {
	      ageless_verification()
	    } else {
		yt6.error = 'flashvars'
	      }
	  }
      }

    if (gid('player-unavailable')) gid('player-unavailable').style.display = 'none'
    if (gid('movie_player') && gid('movie_player').getAttribute('src') == 'about:blank') yt6.parentNode.removeChild(yt6)

  }//play0

}




var c = conf('args')

// onDownload(gid('player-api').innerHTML)

if ( player() && c[0] && c[0].loaded == true && gid('ytassetsjs') == null ) { // && (1 * def_link().indexOf('%26false') > -1)

  // new standard layout doesn't like this ajax call here (?)
  if ( !(yt6.layout == 16 && !yt6.mobile && !yt6.ytm) && c[1] && location.href.indexOf(c[1].video_id) > -1) { ajax1(true) } else { load_from_page_source((!yt6d.source) ? false : true) }

} else {

    if (!c[0]) {
      window.ytplayer = {}
      var z = (!yt6.body2) ? gid('player') : document.querySelectorAll('#player')[1]
      if (z) {
	z = z[yt6.txt]
	if (z) {
	  z = z.split('var ytplayer = ytplayer || {};')[1] || z.split('window.ytplayer = window.ytplayer || {}; window.')[1]
	  if (z) {
	    z = z.split(';(function()')[0].split(';(function ')[0]
	    if (z) {
	      eval(z)
	    }
	  }
	}
      }
      var c = conf('args')
    }


    yt6.tmp = (yt6.layout == 12 || yt6.ytg) ? gid('player-api') : pcont()


    if (c[0] && yt6.tmp) {

      if (!player()) {

        gid("player-api").innerHTML = ''; me_flash_up()

      } else {
	  if ((gc('html5-video-content')[0]) && (gc('html5-video-content')[0].innerHTML == '')) {
	    gid("player-api").innerHTML = ''; me_flash_up()
	  }
        }

    } else {//possibly mobile device layout
      }

    if (def_link() != '') {

	if (!c[0]) ytplayer.config = {}
	ytplayer.config.loaded = true

	if ( (def_link() == '' || 1 * def_link().indexOf('%26false') > -1) && !(gid('ytassetsjs') && gid('ytassetsjs').fcnm ) ) { ajax1() }

    } else if (yt6.ytp.embed) {
	load_from_page_source(false); ajax1(true)
      }

}

})()




if (typeof yt6.error == 'string' || yt6.ie7 == true) {

    try { gid('movie_player').setAttribute("flashvars", correct_flashvars(window.ytplayer.config.args)) } catch(e) { }//if (player() == null) { forceFlashplayerObject(); return void 0; } }

}



if ( gclass('ytd-playability-error-supported-renderers-0')[0] && (!gclass('ytd-playability-error-supported-renderers-0')[0].style.display != 'none' || pcont().hasAttribute('hidden') ) || yt6.ytg) {
  ageless_verification()
  if (gclass('ytd-playability-error-supported-renderers-0')[0]) gclass('ytd-playability-error-supported-renderers-0')[0].style.display = 'none'
  if (pcont().hasAttribute('hidden')) pcont().removeAttribute('hidden')
}




var parseXml

if (typeof window.DOMParser != "undefined") {
    parseXml = function(xmlStr) {
        return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml")
    };
} else if (typeof window.ActiveXObject != "undefined" &&
       new window.ActiveXObject("Microsoft.XMLDOM")) {
    parseXml = function(xmlStr) {
        var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM")
        xmlDoc.async = "false"
        xmlDoc.loadXML(xmlStr)
        return xmlDoc
    }
} else {
    throw new Error("No XML parser found")
}



  function fix_Width() {

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>'
      var z = z.firstChild
    } else if (yt6.wide) z = yt6.api.parentNode

    if (z) { var o = z.getAttribute('style') } else return '-1px'; if (o && !yt6.ytg) { try { z.style = '' } catch(e){}; z.removeAttribute('style') }
    //if (z.getAttribute('id') != 'player') {
      var y = z.currentStyle || window.getComputedStyle(z, null)
      if (!yt6.mobile && y.width == 'auto' && typeof z.offsetWidth == 'number') {//    } else {
	var y = {}
	y.width = z.offsetWidth + 'px'
	y.height = z.offsetHeight + 'px'
	y.left = z.offsetLeft + 'px'
	y.top = z.offsetTop + 'px'
      }
if (!y.width) { if (o != null && !yt6.ytg) z.setAttribute('style', o); return '-1px' }

    var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)
    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth)
    var w_base

if ( !wide_view() || (yt6.wide && yt6.size == 'default' ) ) {
  w_base = y.width
  } else {
    if (z.getAttribute('id') != 'player') {
      if (z.parentNode.offsetWidth == 0) return '-1px'
      var x = z.parentNode.offsetWidth + yt6.sb
    } else {
	if (z.parentNode.parentNode.offsetWidth == 0) return '-1px'
	var x = z.parentNode.parentNode.offsetWidth + yt6.sb
      }
    if (windowwidth > 1933 && windowheight > 940){
       w_base = '1254px'
    } else {
        if (windowwidth > 1293 && windowheight > 629){
          if (gid('player').getAttribute("class").indexOf("small") > -1)  {
            w_base = '854px'
          } else {
	      if (x > 640){
		w_base = '854px'
	      } else {
		  w_base = '640px'
		}
	    }
        } else {
            if (x > 640){
              w_base = '640px'
            } else {
                w_base = '426px'
              }
          }
      }
}//wide_view
  if (o != null && !yt6.ytg) z.setAttribute('style', o)
    return w_base
  }


  function fix_Height() {

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
      var z = z.firstChild
    } else if (yt6.wide) z = yt6.api.parentNode

    if (z) { var o = z.getAttribute('style') } else return '-1px'; if (o && !yt6.ytg) { try { z.style = '' } catch(e){}; z.removeAttribute('style') }
    //if (z.getAttribute('id') != 'player') {
      var y = z.currentStyle || window.getComputedStyle(z, null)
      if (!yt6.mobile && y.height == 'auto' && typeof z.offsetHeight == 'number') {//    } else {
	var y = {}
	y.width = z.offsetWidth + 'px'
	y.height = z.offsetHeight + 'px'
	y.left = z.offsetLeft + 'px'
	y.top = z.offsetTop + 'px'
      }

    if (!y.width) { if (o != null && !yt6.ytg) z.setAttribute('style', o); return '-1px' }

    if (z.getAttribute('id') != 'player') {
      yt6.hdiff = parseInt( y.height.replace('px','') - ((y.height.replace('px','') / 60 >> 0) * 60) )
      var hdiff = yt6.hdiff
    } else var hdiff = 0

    var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)
    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth)
    var h_base

if ( !wide_view() || (yt6.wide && (yt6.size == 'default') ) ) {
  h_base = parseInt(y.height.replace('px','')) + hdiff + 'px'
  } else {
    if (z.getAttribute('id') != 'player') {
      if (z.parentNode.offsetWidth == 0) return '-1px'
      var x = z.parentNode.offsetWidth + yt6.sb
    } else {
	if (z.parentNode.parentNode.offsetWidth == 0) return '-1px'
	var x = z.parentNode.parentNode.offsetWidth + yt6.sb
      }
    if (windowwidth > 1933 && windowheight > 940){
      h_base = 704 + hdiff + 'px'
    } else {
        if (windowwidth > 1293 && windowheight > 629){
          if (gid('player').getAttribute("class").indexOf("small") > -1) {
	    h_base = 480 + hdiff + 'px'
	  } else {
	      if (x > 640){
		h_base = 480 + hdiff + 'px'
	      } else {
		  h_base = 360 + hdiff + 'px'
		}
	    }
        } else {
            if (x > 640){
              h_base = 360 + hdiff + 'px'
            } else {
                h_base = 240 + hdiff + 'px'
              }
          }
      }
}//wide_view
  if (o != null && !yt6.ytg) z.setAttribute('style', o)

    if (yt6.mobile && h_base == '0px') h_base = (gid('player-container-id').offsetHeight || gid('player-container-id').offsetWidth / (16/9)) + 'px'

    return h_base
  }



function get_webgl(){
  var z = gc('webgl')[0]
  if (z) var webgl = z.getElementsByTagName('canvas')[0]
  return webgl
}


function getFlashVars(){

  var flashvars = null, flashvars = [], p = player(), p = yt6.p

    flashvars[0] = (p) ? [ p, p.getAttribute('flashvars') ] : [ null, null ]


  var me_flash_ = getElementsByAttribute(document,'embed','name',mep_x('me_flash_'))
  flashvars[1] = (me_flash_[0]) ? [ me_flash_[0], me_flash_[0].getAttribute('flashvars') ] : [ null, '' ] //me_flash.push.apply( me_flash, me_flash_ )

  if (yt6.ie7 == true && gid(mep_x('me_flash__ __container'))) {
    var me_flash = getElementsByAttribute(gid("player"),"object","id",mep_x("me_flash_"))
  } else
  var me_flash = getElementsByAttribute(document,'object','name','me_flash')
  if (typeof me_flash[0] != 'undefined') {
    if (me_flash.length != 0) {
      for(i=0;i<me_flash.length;i++){
        var me_flash_param = getElementsByAttribute(me_flash[i],'param','name','flashvars')[0]
	flashvars[2+i] = (me_flash_param) ? [ me_flash[i], me_flash_param.getAttribute('flashvars') ] : [ null, '' ]
      }
    }
  }

  return flashvars

}




function set_controls(){


  var p = player(), p = yt6.p; if (!p) p = gid('movie_player0')
  if (yt6.flash.forced) {
    if (gid('movie_player1')) {
      if (p.parentNode && p.parentNode.id == 'movie_player_to_dispose' && gid('movie_player1').parentNode == yt6.api) gid('movie_player1').setAttribute('id','movie_player')
      p = player(), p = yt6.p;
    }
    if (!yt6.original) {
      var p0 = original(p) || getElementsByAttribute(yt6,'div','id','movie_player0')[0] || getElementsByAttribute(yt6,'div','id','movie_player')[0]
      if (yt6.original) {
	yt6.original.setAttribute('name','original')
	yt6.original.removeAttribute('flashvars')
      }
    }
  }
  var p1 = gid('player1');
  var flashvars = getFlashVars();
  var bm0 = gid('bm0')
  var stage// = p
  var v// = p
    if (mep_obj()) {
      if (p && typeof p.getPlayerState == 'function' && bm0) {//ytplayer
	if (!yt6.x) {
	  if (flashvars[0] && (typeof flashvars[0][1] != 'string')) {
	    v = v_(p) || gc('video-stream html5-main-video')[0]
	    stage = (v) ? v.parentNode || gc('html5-video-content')[0] : gc('html5-video-content')[0]
	  } else {
	      var stage = p; var v = p
	    }
	} else {
	    if (bm0) bm0.style.visibility = 'visible'
	    var stage = gc('html5-video-content')[1]
	    if (stage == undefined || (stage && !stage.id)) {
	      var stage = gc('html5-video-content')[0]
	    }
	    var v = p1

		if (flashvars && flashvars[1] && flashvars[1][0] && typeof p1.pause != 'undefined'){
		    var x = flashvars[1][0]
		    if (yt6.x) {
			var v = x; var stage = x
			if (v.style.width == '') v.style.width = bm0.style.width
			if (v.style.height == '') v.style.height = parseInt(bm0.style.height.replace('px','') - 30) + 'px'
			if (v.style.top == '') v.style.top = '0px'
			if (v.style.left == '') v.style.left = '0px'
		    } else {
			var stage = p; v = p
		      }
			    for (i=1;i<flashvars.length;i++) { var f = flashvars[i]
			      if (f && f[0] && typeof f[0].pauseMedia == 'function') {
				if (!f[0].parentNode.paused) {
				  f[0].parentNode.paused = true; try { f[0].pauseMedia() } catch(e) {}
				}
			      }
			    }

		} else {
		    var z = gc('me-cannotplay')[0]
		    if (z && z.nextSibling.getAttribute('id') == 'player1') {
			if (flashvars[1] && flashvars[1][0] && typeof p1.pause != 'undefined') {
			  var stage = flashvars[1][0]; var v = p1
			} else {
			    if (flashvars) {
			      for (i=1;i<flashvars.length;i++) { var f = flashvars[i]
				if (f && f[0] && typeof f[0].pauseMedia == 'function') { var x = f[0]
				  if (!x.parentNode.paused) try { x.pauseMedia(); x.parentNode.paused = true } catch(e) {}
					var stage = x; var v = x
					if (x.style.width == '') x.style.width = bm0.style.width;
					if (x.style.height == '') x.style.height = parseInt(bm0.style.height.replace('px','') - 30) + 'px'
					if (x.style.top == '') x.style.top = '0px'
					if (x.style.left == '') x.style.left = '0px'
				}
			      }
			    }
			  }
		    }
		  }

	  }

      } else {
	  if (!yt6.x) {
	    var stage = p; v = p
	    if (p && flashvars) {
	      for (i=1;i<flashvars.length;i++) { var f = flashvars[i]
		if (f && f[0] && typeof f[0].pauseMedia == 'function') {
		  if (!f[0].parentNode.paused) {
		    f[0].parentNode.paused = true; try { f[0].pauseMedia() } catch(e) {}
		  }
		}
	      }
	      if (flashvars[1] && flashvars[1][0] == p) {
		  var stage = p; v = p
		  if (p && p.getAttribute('src') == 'about:blank') {
		    var x = gid('player-api').innerHTML;onDownload(x); p.paused = true
		  }
	      }
	    }
	  } else {
		if (bm0) bm0.style.visibility = 'visible'
		var stage = gc('html5-video-content')[1]
		if (stage == undefined || (stage && !stage.id)) {
		  var stage = gc('html5-video-content')[0]
		}
		var v = p1

		if (flashvars && flashvars[1] && flashvars[1][0] && typeof p1.pause != 'undefined') {
		    var x = flashvars[1][0]
		    if (yt6.x) {
			var v = x; var stage = x
			if (v.style.width == '') v.style.width = (bm0) ? bm0.style.width : yt6.w
			if (v.style.height == '') v.style.height = (bm0) ? parseInt(bm0.style.height.replace('px','') - 30) + 'px' : parseInt(yt6.h.replace('px','') - 30) + 'px'
			if (v.style.top == '') v.style.top = '0px'
			if (v.style.left == '') v.style.left = '0px'
		    } else {
			var stage = p; v = p
		      }
			    for (i=1;i<flashvars.length;i++) { var f = flashvars[i]
			      if (f && f[0] && typeof f[0].pauseMedia == 'function') {
				if (!f[0].parentNode.paused) {
				  f[0].parentNode.paused = true; try { f[0].pauseMedia() } catch(e) {}
				}
			      }
			    }

		} else {
		    var z = gc('me-cannotplay')[0]
		    if (z && z.nextSibling.getAttribute('id') == 'player1') {
			if (flashvars[1] && flashvars[1][0] && typeof p1.pause != 'undefined') {
			  var stage = flashvars[1][0]; var v = p1
			} else {
			    if (flashvars) {
			      for (i=1;i<flashvars.length;i++) { var f = flashvars[i]
				if (f && f[0] && typeof f[0].pauseMedia == 'function') { var x = f[0]
				  if (!x.parentNode.paused) try { x.pauseMedia(); x.parentNode.paused = true } catch(e) {}
					var stage = x; var v = x
					if (x.style.width == '') x.style.width = bm0.style.width;
					if (x.style.height == '') x.style.height = parseInt(bm0.style.height.replace('px','') - 30) + 'px'
					if (x.style.top == '') x.style.top = '0px'
					if (x.style.left == '') x.style.left = '0px'
				}
			      }
			    }
			  }
		    }
		  }

	    }
	}

    } else { //no mep

	  if (flashvars) {
	    for (i=1;i<flashvars.length;i++) { var f = flashvars[i]
	      if (f && f[0] && typeof f[0].pauseMedia == 'function') {
		if (!f[0].parentNode.paused) {
		  f[0].parentNode.paused = true; try { f[0].pauseMedia() } catch(e) {}
		}
	      }
	    }
	    if (flashvars[1] && flashvars[1][0]) {
	      if (!yt6.x) {
		var stage = p; v = p
		if (p && p.getAttribute('src') == 'about:blank') {
		  var x = gid('player-api').innerHTML;onDownload(x); p.paused = true
		}
	      } else {
		  var x = flashvars[1][0]//gclass('mejs-shim')[0];//if (movie_player == me_flash) class name was altered from mejs-shim
		  if (x) {
			if (mep_x('me_flash_')[0] == x) {
			  var stage = x; var v = p1
			} else {
				var stage = x; var v = x
				if (x.style.width == '') x.style.width = (bm0) ? bm0.style.width : yt6.w
				if (x.style.height == '') x.style.height = (bm0) ? parseInt(bm0.style.height.replace('px','') - 30) + 'px' : parseInt(yt6.h.replace('px','') - 30) + 'px'
				if (x.style.top == '') x.style.top = '0px'
				if (x.style.left == '') x.style.left = '0px'
			  }
		    v.parentNode.paused = true
		  }
		}
	    } else { //flash object != movie_player
		if (!yt6.x) {
		  var stage = p; v = p
		} else {
		    var stage = p1
		    var v = (flashvars[3]) ? flashvars[3][0] : (flashvars[2]) ? flashvars[2][0] : p
		  }
	      }
	  }
      }


  if (!stage)  var stage = p
  if (!v) v = p
  yt6.stage = stage; yt6.v = v

  if (typeof CtrlS == 'function' && (!(yt6.layout == 12 && !video_title()[1]) || yt6.ytp.embed || location.href.indexOf('.youtube.com/') == -1) ) CtrlS(stage,v)

  return [stage, v]
}



if (player()) {

  if (yt6.p.getAttribute('name') == 'me_flash') yt6.p.style.display = ''
  yt6.p.setAttribute('style','width:'+ yt6.w +'; height: '+ yt6.h +'; left: 0px; top: 0px')

}


   // event listener attached to the window to establish script controls on the flash player
   yt6.ytp.cmd = function(e) {
	var cmd = e.data
	var p = player(), p = yt6.p
	if (p && typeof p[cmd] == 'function') try { p[cmd]() } catch(e) { removeEL(window, "message", yt6.ytp.cmd, false); addEL(window, "message", yt6.ytp.cmd, false) }
	return false
  }
  addEL(window, 'message', yt6.ytp.cmd, false)



  var Sync = function(newState) {

	var bm0 = gid('bm0'), v, stage, x
	var player2 = gid('player2')
	var player1 = gid('player1')
	var x = (player()) ? v_(yt6.p) : null


	if (yt6 && (!yt6.x || yt6.browser_tab == 'hidden' || (yt6.x && yt6.navigation && yt6.browser_tab == 'visible') || (yt6.mobile && yt6.x) )) {
	  yt6.ytp.state = newState
	  if (yt6.p && typeof yt6.p.getPlayerState == 'function') {
	    if (typeof yt6.p.getAttribute('flashvars') != 'string') {
		var stage = gc('html5-video-content')[0]
		var v = x
	    } else {
		var stage = yt6.p
		var v = stage
	      }
	    if (yt6.ytm && yt6.p && yt6.p.parentNode) {
	      if (yt6.p.tagName == 'EMBED') {
	        var p0 = yt6.original || original(yt6.p)
	        if (p0 != yt6.p) try { p0.stopVideo() } catch(e){}
	      }
	    }
	  }


	  function p2(){ return ((!yt6.navigation) && typeof player2 == 'object' && typeof player2.pause == 'function') ? true : false }
	  function p1(){ return ((!yt6.navigation) && typeof player1 == 'object' && typeof player1.pause == 'function') ? true : false }

	  function resync() {
	    if (!yt6.x) {
	      if (p2() && x && typeof x.src == 'string' && x.src.indexOf('http') == 0) try {

		player2.currentTime = yt6.p.getCurrentTime()
		player2.playbackRate = (x && typeof x.playbackRate == "number") ? x.playbackRate : yt6.p.getPlaybackRate()

	      } catch(e) {}
	    } else {
		//try { player2.currentTime = gid('player1').currentTime } catch(e) {}
	      }
	  }

	  switch (newState) {
		case -1: if (yt6.x && yt6.navigation && yt6.browser_tab == 'visible') try { yt6.p.pauseVideo() } catch(e){}; break //unstarted
		case 0: if (p2()) player2.pause(); resync(); break //ended
		case 1: if (yt6.x && yt6.navigation && yt6.browser_tab == 'visible') try { yt6.p.pauseVideo(); } catch(e){}; //playing
			if (yt6.x && yt6.browser_tab == 'hidden' && p1()) {
			  if (yt6.player1 && yt6.player1.media) {
			    var dur, vid, ct
			    if (yt6.p && yt6.p.tagName != 'EMBED') try {
				dur = yt6.p.getDuration()
				vid = vID(yt6.p.getVideoUrl())
				ct = (!(yt6.mute_on && yt6.ad_muted) || (yt6.md && browserName == 'Firefox' && yt6.browser_tab == 'hidden')) ? yt6.p.getCurrentTime() : 0
			    } catch(e){ dur = 0; vid = yt6.vid; dur = yt6.player1.media.duration; ct = yt6.player1.media.currentTime }
			    if (yt6.player1.media.loaded_vid == vid) { 
			      if (yt6.newvideo && typeof yt6.ytp.ct == 'number' && yt6.ytp.ct) { if (!(yt6.mute_on && yt6.ad_muted)) { yt6.player1.setCurrentTime(yt6.ytp.ct); yt6.player2.setCurrentTime(yt6.ytp.ct) }; try { yt6.p.pauseVideo() } catch(e){} }
			      yt6.player1.play(); //console.log('start background play via the lock screen\'s media play button, may require multiple quick taps')
			      break;
			    }
			  }
			}
			if (!yt6d.ended && p2()) {
			  if ( player2.src == yt6.audiox && v && typeof v.src == 'string' && v.src.indexOf('http') == 0) { if (yt6 && yt6.player2 && typeof yt6.player1.play == 'function') { yt6.player2.play() } else { player2.play() }; break }
			  if (v && typeof v.src == 'string') {
			    if (typeof v.src.split('itag=')[1] != 'undefined') {
			      if ( (    (typeof yt6.A_V[v.src.split('itag=')[1].split('&')[0]] !== 'string')
				     && (typeof yt6.A_[v.src.split('itag=')[1].split('&')[0]] !== 'string')
				     && ( (typeof yt6.V_[v.src.split('itag=')[1].split('&')[0]] === 'string')
				           || (v.src.indexOf('itag=278') > -1)
					)
				   )
				 ) if (yt6 && yt6.player2 && typeof yt6.player1.play == 'function') { yt6.player2.play() } else { player2.play() }
			    }
			  }
			}; break;
		case 2: if (!yt6.x ) {
			  $waitUntil(function(){ if (yt6.browser_tab == 'hidden') return true },
			    function(){ var p = player()
			      if (!yt6.x && p && typeof p.getPlayerState == 'function' && browserName != 'Yandex') try { p.playVideo() } catch(e) {}
			    }, 40, 400) // Check for a very short period of time to see whether this call for pause coincides with being on a hidden tab, meaning the call came from YT's own code to prevent background play on mobile. Counteract if so.
			  if (p2() && yt6.player2 && yt6.player2.media && !yt6.player2.media.paused) { player2.pause(); resync() }
			} else {
			if (yt6.browser_tab == 'hidden' && yt6.Seek != 3 && p1()) {
			  if (yt6.player1 && yt6.player1.media) {
			    var dur, vid, ct
			    if (yt6.p && yt6.p.tagName != 'EMBED') try { vid = vID(yt6.p.getVideoUrl()) } catch(e){}
			    if ((vid && (location.href.indexOf(vid) > -1 || yt6.player1.media.loaded_vid == vid)) || (yt6.player1.media.loaded_vid == yt6.vid)) {
			      try {
				dur = yt6.p.getDuration()
				ct = (!(yt6.mute_on && yt6.ad_muted) || (yt6.md && browserName == 'Firefox' && yt6.browser_tab == 'hidden')) ? yt6.p.getCurrentTime() : 0
			      } catch(e){ dur = 0; vid = yt6.vid; dur = yt6.player1.media.duration; ct = yt6.player1.media.currentTime }
			      yt6.player1.play(); //console.log('start background play via the lock screen\'s media play button, may require multiple quick taps')
			      if (yt6.newvideo && typeof yt6.ytp.ct == 'number' && yt6.ytp.ct) { if (!(yt6.mute_on && yt6.ad_muted)) { yt6.player1.setCurrentTime(yt6.ytp.ct); yt6.player2.setCurrentTime(yt6.ytp.ct) }; try { yt6.p.pauseVideo() } catch(e){} }
			      break;
			    }
			  }
			}
			  }
		        break
		case 3: if (!yt6.x && yt6.browser_tab == 'visible' && 2 >= yt6.speed && p2() && yt6.player2 && yt6.player2.media && !yt6.player2.media.paused) { player2.pause(); resync() }; if (yt6.x && yt6.navigation && yt6.browser_tab == 'visible') try { yt6.p.pauseVideo() } catch(e){}; break //buffering
		case 5: if (!yt6.x && yt6.browser_tab == 'visible' && p2() && yt6.player2 && yt6.player2.media && !yt6.player2.media.paused) { player2.pause(); }; if (yt6.x && yt6.navigation && yt6.browser_tab == 'visible') try { yt6.p.pauseVideo() } catch(e){}; break //stopped/cued
	  }

	} else if (yt6 && yt6.x && newState == -1) try { player().pauseVideo() } catch(e) {}

	if (yt6.ytm) {
	  var a = gc('song-media-controls style-scope ytmusic-player')[0]
	  if (a) if (newState == 5) {
	    a.style.position = 'relative'; a.parentNode.insertBefore(a, a.parentNode.firstChild)
	  } else {
	      a.style.position = ''
	    }
	  a.style.height = (!yt6.flash.forced) ? '' : '50px'
	}


	if (newState == 1) {
	  playButton()
	  try {
	    if (yt6.btn.play) yt6.btn.play[yt6.txt] = 'pause'
	    if (yt6.btn.play2) yt6.btn.play2[yt6.txt] = 'pause'
	    var x = gc('play snarl-button yt-uix-button-text')[0]; if (x) x.innerHTML = 'pause'
	    var x = gc('play snarl-button yt-uix-button-text')[1]; if (x) x.innerHTML = 'pause'
	  } catch(e) {}
	} else if (yt6.p && yt6.p.parentNode && yt6.p.parentNode.getAttribute('id') == 'movie_player_to_dispose') {
	    removeEL(yt6.p, "onStateChange", Sync, false)
	  }

  }



  // when youtube player's quality changes while being in the "media" aspect, this function will trigger a resize action
  var Mqch = function() {
     yt6d.timers.media = 0
     if (yt6.size == 'media') {
       if (!yt6.x) {
	if (player() && typeof yt6.p.getPlayerState == 'function') {
	  $waitUntil(
	    function() { var x = player().getPlayerState(); if ( x == 3 || x == -1 || yt6.flash.forced ) { return true } else { yt6d.timers.media++ } },
	    function() {
	      $waitUntil(function(){ if (yt6d.timers.media == 3 && !yt6.fullscreen) { return true } else { yt6d.timers.media++ } }, // wait 3 seconds, hopefully the new media dimensions are available by then
		function() { if (yt6.size == 'media') yt6.aspect('media') }, 500,3000)
	  },300,600)
	}
      } else $waitUntil(function(){ if (yt6d.timers.media == 3 && !yt6.fullscreen) { return true } else { yt6d.timers.media++ } },
		function() { if (yt6.size == 'media') yt6.aspect('media') }, 500,3000)
    }
  }



function mep_obj() { return gid(mep_x('mep_')) }


function chk_src(me) {
  if (yt6) {
	var y = me.src.split('//')[1]
	var z = (me.id == 'player1') ? gid('player1') : gid('player2')
	z = (z) ? z.getAttribute('src') : null
	if (z) z = z.split('//')[1]
	if ((yt6 && yt6.timer == 999999999) || me.src == 'https://www.youtube.com/ptracking' || y != z) {
	  if (y != z && y != 'https://www.youtube.com/ptracking' && yt6 && yt6.timer != 999999999) {
	    yt6.player2.setSrc('https://www.youtube.com/ptracking')
	    yt6.player1.setSrc('https://www.youtube.com/ptracking')
	    yt6.player2.load(); yt6.player1.load()
	  }
	  z = false
	} else z = true
    return z
  }
}



yt6.btn = {}
yt6.autoplay = false



function autoplay(start, ytx) {


var p = player(); if (!p) return void 0
if (yt6.layout == 16) {
  var z = document.getElementsByTagName('YTD-WATCH')[0]
  if (z && z.hasAttribute('hidden')) return false
}
if (yt6.ytg) {
  var z = document.getElementsByTagName('YTG-APP')[0]
  if (z && z.getAttribute('page') != 'watch') return false
}
var d = def_link(); //d = '%26true'
var fv = p.getAttribute('flashvars')
var pn = p.getAttribute('name')
var bm0 = gid('bm0')
var mep = gid(mep_x('mep_'))
var webgl = get_webgl()
var x = (typeof p.click == 'function') ? 'important' : ''
    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      var z = z.firstChild
    }


if (yt6.pls) {
  if (yt6.layout == 12) {
    if (yt6.btn && yt6.btn.autoplay && yt6.btn.autoplay.getAttribute('class').indexOf('yt-uix-button-toggled') == -1 && yt6.autoplay == true) { yt6.btn.autoplay.click() }
    if (yt6.btn && yt6.btn.shuffle && yt6.btn.shuffle.getAttribute('class').indexOf('yt-uix-button-toggled') == -1 && yt6.shuffle == true) { yt6.btn.shuffle.click() }
  } else {
    var pls, shuff, text
    if (yt6.layout == 16 && !yt6.mobile && !yt6.ytm && !yt6.ytg && typeof yt6.pls == 'object' && yt6.pls.parentNode) {
      var pls = yt6.pls.getElementsByTagName('ytd-toggle-button-renderer')[0]
      var shuff = yt6.pls.getElementsByTagName('ytd-toggle-button-renderer')[1]
      if (pls && !shuff) {
	shuff = pls
	pls = yt6.pls.getElementsByTagName('ytd-playlist-loop-button-renderer')[0]
      }
      var text = (pls && pls.tagName == 'YTD-TOGGLE-BUTTON-RENDERER') ? 'autoplay' : 'shuffle'
    }

    if (yt6.btn && yt6.btn.autoplay && yt6.autoplay == true) {
      if (yt6.btn.autoplay.parentNode.getAttribute('aria-pressed') == 'false'
	// || (yt6.btn.autoplay.getElementsByTagName('path')[0] && typeof yt6.btn.autoplay.getElementsByTagName('path')[0].getAttribute('d') == 'string' && yt6.btn.autoplay.getElementsByTagName('path')[0].getAttribute('d').indexOf('M21,') == 0)
	) { yt6.btn.autoplay.click()
      }
    }
    if (yt6.btn && yt6.btn.shuffle && yt6.btn.shuffle.parentNode.getAttribute('aria-pressed') == 'false' && yt6.shuffle == true) { yt6.btn.shuffle.click() }
  }
}



if (!yt6.ytp.embed) {
var autoplay = gid('watch-appbar-playlist')
if (!(yt6.body2 && yt6.layout == 16) && autoplay != null) {
  var autoplay = gclass('yt-uix-button-icon-watch-appbar-autoplay')
  if (autoplay != undefined) {
    var autoplay = gc('playlist-nav-controls')[0] || gc('appbar-playlist-controls clearfix')[0]
    if (autoplay != undefined) {
      if (autoplay.getAttribute('class') == 'playlist-nav-controls') {
	var shuffle = yt6.btn.shuffle = autoplay.getElementsByTagName('button')[1]
	if (shuffle && shuffle.getAttribute('onclick') && shuffle.getAttribute('onclick').indexOf('yt6') == -1) {
	  var b = ';var yt6 = gid("snarls_player"); if (yt6) { if (this.getAttribute("class").indexOf("yt-uix-button-toggled") == -1) { yt6.shuffle = true } else { yt6.shuffle = false }; }; return false;'
	  shuffle.setAttribute('onclick', b)
	}
	if ((shuffle && shuffle.getAttribute('class') && shuffle.getAttribute('class').indexOf('yt-uix-button-toggled') != -1) || yt6.shuffle == true) { yt6.shuffle = true } else yt6.shuffle = false;

	var autoplay = yt6.btn.autoplay = autoplay.getElementsByTagName('button')[0]
	if (autoplay && autoplay.getAttribute('onclick') && autoplay.getAttribute('onclick').indexOf('yt6') == -1) {
	  var b = ';var yt6 = gid("snarls_player"); if (yt6) { if (this.getAttribute("class").indexOf("yt-uix-button-toggled") == -1) { yt6.autoplay = true } else { yt6.autoplay = false }; }; return false;'
	  autoplay.setAttribute('onclick', b)
	}
	if ((autoplay && autoplay.getAttribute('class') && autoplay.getAttribute('class').indexOf('yt-uix-button-toggled') != -1) || yt6.autoplay == true) {
	  yt6.autoplay = true;


	  if (start == false){
	    $waitUntil(function(){
	      var btn = gc('playlist-nav-controls')[0]
		if (btn) {
		  btn = btn.getElementsByTagName('button')[0]
		  if (btn && btn.getAttribute('class') && btn.getAttribute('class').indexOf('yt-uix-button-toggled') == -1) { return true } else {}
		}
	    },function(){
		var btn = gc('playlist-nav-controls')[0]
		if (btn) {
		  btn = btn.getElementsByTagName('button')[0]
		  if (btn && btn.getAttribute('class') && btn.getAttribute('class').indexOf('yt-uix-button-toggled') == -1) { btn.click() }
		}
	      },300,3000)
	  }

	} else {
	    if (start == false) {
	      yt6.autoplay = false
	    }
	  }

	if (autoplay && autoplay.getAttribute('disabled')) { autoplay.removeAttribute('disabled') }
	//if (autoplay.parentNode.innerHTML.indexOf('disabled=""') != -1) {
	  //autoplay.parentNode.innerHTML = autoplay.parentNode.innerHTML.split('disabled=""').join('')
	//}

      }
    }
  }
  var autoplay2 = gclass('playlist-mix-icon yt-sprite')

} else {//2016 layout

    if (yt6d.init && typeof start == 'undefined' && !yt6.pls) {
	  if (!yt6.mobile) {
	    yt6.pls = (yt6.layout == 16) ? gid('playlist') || gid('queue') : gid('watch-appbar-playlist') || document.getElementsByTagName('ytg-playlist-panel-renderer')[0]
	    if (yt6.layout == 16 && yt6.pls && yt6.pls.id == 'playlist' && typeof yt6.pls.className == 'string' && yt6.pls.className.indexOf('ytd-watch') == -1) yt6.pls = document.getElementsByTagName(yt6.pls.tagName)[1]
	  } else yt6.pls = gc('playlist-content section')[0]
    }
    if (yt6.layout == 16 && yt6.pls && ((!yt6.pls.lastChild || !yt6.pls.firstElementChild) || yt6.pls.hasAttribute('hidden')) ) yt6.pls = null

    var autoplay = yt6.pls

    if (yt6.osw.getAttribute('id') == 'player' && autoplay && !autoplay.hasAttribute('hidden')) {

      // scope to get the 2nd 'top-level-buttons' which we need
      var autoplay_ = (autoplay) ? autoplay.getElementsByClassName('top-level-buttons')[0] : null //|| gid('top-level-buttons-computed')
      if (autoplay_) {
	var pls = autoplay_.getElementsByTagName('ytd-toggle-button-renderer')[0]
	var shuff = autoplay_.getElementsByTagName('ytd-toggle-button-renderer')[1]
	if (pls && !shuff) {
	  shuff = pls
	  pls = autoplay_.getElementsByTagName('ytd-playlist-loop-button-renderer')[0]
	}
      }

      if (autoplay_ || yt6.mobile) {

	// since Jun '22 these classNames refer only to the shuffle button
	var autoplay0 = gc('style-scope ytd-toggle-button-renderer style-grey-text'),
	  autoplay1 = gc('style-scope ytd-toggle-button-renderer style-default-active'),
	  n = 0, ie = false;

	if (!autoplay0[0] && !autoplay1[0] && !yt6.mobile) { // classnames are different in IE
	  autoplay0 = gc('style-scope ytd-toggle-button-renderer x-scope yt-icon-button-2 style-grey-text')
	  autoplay1 = gc('style-scope ytd-menu-renderer x-scope ytd-toggle-button-renderer-1 style-default-active size-default')
	  if (autoplay0[0] || autoplay1[0]) ie = true
	}

	function check_(obj1, obj2) {
	  if (obj1 && obj2) {
	    if (
		(obj1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode == obj2 // initially on playlist
		||
		obj1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode == obj2)	// returned to playlist
		&&
		obj1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode !== obj2 // if true, object is miniplayer
	      ) { return obj1 } else { return false }
	  }
	}


	// elements picked up may belong to dismissed miniplayers, skip to the next one if that's the case
	var el = (autoplay0.length) ? autoplay0 : autoplay1
	if (el.length) {
	  for(n=0;n < el.length; n++) {
	    if ( check_(autoplay0[n], yt6.mpb) || check_(autoplay1[n], yt6.mpb) ) { // not good
	    } else if ( check_(autoplay0[n], autoplay) || check_(autoplay1[n], autoplay) ) { break }
	  }
	}


	if (ie) {
	  var a1 = autoplay1[n]
	  if (a1) if (a1 == a1.parentNode.firstElementChild) {
	    a1 = a1.firstElementChild; if (a1) { autoplay1[n] = a1.firstElementChild; } else autoplay1[n] = null
	  } else {
	      autoplay1[n] = null
	      if (a1 == a1.parentNode.firstElementChild.nextSibling) {
	        a1 = a1.firstElementChild; if (a1) { autoplay1[n+1] = a1.firstElementChild; } else autoplay1[n+1] = null
	      }
	    }
	}

	if (//autoplay0[0].parentNode.parentNode.parentNode.id == 'top-level-buttons'
	    (check_(autoplay0[n], autoplay) && !autoplay0[n].parentNode.parentNode.parentNode.parentNode.hasAttribute('hidden')) ||
	    (check_(autoplay1[n], autoplay) && !autoplay1[n].parentNode.parentNode.parentNode.parentNode.hasAttribute('hidden'))
	  ) {

	  var text = (pls && pls.tagName == 'YTD-TOGGLE-BUTTON-RENDERER') ? 'autoplay' : 'shuffle'

	  buttons = []
	  if (autoplay0[n]) buttons[0] = autoplay0[n].getElementsByTagName('BUTTON')[0]
	  if (autoplay1[n]) buttons[1] = autoplay1[n].getElementsByTagName('BUTTON')[0]
	  for(i=0;i<2;i++) {
	    var a = buttons[i]; if (a && (a.parentNode.parentNode.parentNode == pls || a.parentNode.parentNode.parentNode == shuff)) { yt6.btn[text] = a } else a = null
	    if (a && (!a.getAttribute('onclick') || (a.getAttribute('onclick') && a.getAttribute('onclick').indexOf('yt6') == -1)) ) {
	      var b = ';var yt6 = gid("snarls_player"); if (yt6) { if (this.getAttribute("aria-pressed") == "false") { yt6.'+ text +' = true } else { yt6.'+ text +' = false }; }; return false;'
	      buttons[i].setAttribute('onclick', b)
	    }
	  }
	  if (text == 'autoplay') {
	    buttons = []
	    if (autoplay0[n+1]) buttons[0] = autoplay0[n+1].getElementsByTagName('BUTTON')[0]
	    if (autoplay1[n+1]) buttons[1] = autoplay1[n+1].getElementsByTagName('BUTTON')[0]
	    for(i=0;i<2;i++) {
	      var a = buttons[i]; if (a && a.parentNode.parentNode.parentNode == shuff) { yt6.btn.shuffle = a } else a = null
	      if (a && (!a.getAttribute('onclick') || (a.getAttribute('onclick') && a.getAttribute('onclick').indexOf('yt6') == -1)) ) {
		var b = ';var yt6 = gid("snarls_player"); if (yt6) { if (this.getAttribute("aria-pressed") == "false") { yt6.shuffle = true } else { yt6.shuffle = false }; }; return false;'
		buttons[i].setAttribute('onclick', b)
	      }
	    }
	  } else if (pls && pls.tagName == 'YTD-PLAYLIST-LOOP-BUTTON-RENDERER') {
	      var a = pls.getElementsByTagName('BUTTON')[0]; if (a && a.parentNode.parentNode.parentNode.parentNode.parentNode == pls) { yt6.btn.autoplay = a } else a = null
	      if (a) {
		if (!a.getAttribute('onclick') || (a.getAttribute('onclick') && a.getAttribute('onclick').indexOf('yt6') == -1)) {
		  var b = ';var yt6 = gid("snarls_player"); if (yt6) { if (this.getElementsByTagName("path")[0] && typeof this.getElementsByTagName("path")[0].getAttribute("d") == "string") if (this.getElementsByTagName("path")[0].getAttribute("d").indexOf("M13,") == 0) { yt6.autoplay = false } else { yt6.autoplay = true }; }; return false;'
		  a.setAttribute('onclick', b)
		}
		if (a.getElementsByTagName('path')[0] && typeof a.getElementsByTagName('path')[0].getAttribute('d') == 'string') if (a.getElementsByTagName('path')[0].getAttribute('d').indexOf('M21,') == 0) { yt6.autoplay = false } else yt6.autoplay = true
	      }
	    }

	  // check the current state of these buttons
	  if (check_(autoplay1[n], autoplay)) { //console.log('active')
	    if (text == 'shuffle' || (text == 'autoplay' && !autoplay1[n].parentNode.parentNode.previousSibling)) {
	      yt6[text] = true;
	      autoplay2 = {}; delete autoplay2[n]
	      if (autoplay1[n+1] && text == 'autoplay') if (autoplay1[n].parentNode.parentNode.nextSibling.firstChild.firstChild) { yt6.shuffle = true } else yt6.shuffle = false
	    } else { // otherwise only the shuffle button is active
		yt6[text] = false
		if (text != 'shuffle') yt6.shuffle = true
	      }
          } else { //console.log('both inactive')

	      if (yt6.autoplay == true && yt6.btn && yt6.btn.autoplay) {
		if (text == 'autoplay') if (yt6.btn.autoplay.parentNode && typeof yt6.btn.autoplay.parentNode.getAttribute('class') == 'string' && yt6.btn.autoplay.parentNode.getAttribute('class').indexOf('style-grey-text') > -1) { yt6.autoplay = !yt6.autoplay; yt6.btn.autoplay.click() } else { yt6.autoplay = false }
		if (text == 'shuffle') if (yt6.btn.autoplay.getElementsByTagName('path')[0] && typeof yt6.btn.autoplay.getElementsByTagName('path')[0].getAttribute('d') == 'string' && yt6.btn.autoplay.getElementsByTagName('path')[0].getAttribute('d').indexOf('M21,') == 0) { yt6.autoplay = !yt6.autoplay; yt6.btn.autoplay.click() }
	      } else yt6.autoplay = false

	      if (yt6.shuffle == true && yt6.btn && yt6.btn.shuffle && yt6.btn.shuffle.parentNode && typeof yt6.btn.shuffle.parentNode.getAttribute('class') == 'string' && yt6.btn.shuffle.parentNode.getAttribute('class').indexOf('style-grey-text') > -1) { yt6.shuffle = !yt6.shuffle; yt6.btn.shuffle.click() } else yt6.shuffle = false
	      //yt6.autoplay = false
	      //yt6.shuffle = false
	    }

	} else {
	    var autoplay2 = gclass('style-scope ytd-playlist-panel-renderer style-grey-text')//'flex style-scope ytd-playlist-panel-renderer'// x-scope ytd-menu-renderer-0

	    if ((autoplay2 && autoplay2[0]) && !autoplay2[0].hasAttribute('hidden')) {
	      yt6.autoplay = true; //mix
	    } else {
		yt6.autoplay = false; //none
	      }

	  }

      } else { yt6.autoplay = (!(yt6.mobile && yt6.pls)) ? false : true }

    } else if (!yt6.mobile) { yt6.autoplay = false }

  }

} else if (location.href.indexOf('list=PL') > -1) yt6.autoplay = true

    if (yt6.mobile || yt6.ytm || yt6.ytg) {
	var autoplay
	if (yt6.ytg) autoplay2 = document.getElementsByTagName('ytg-playlist-panel-renderer')
	if (yt6.ytm) { autoplay2 = []; autoplay2[0] = gid('queue') }
	if (yt6.mobile) { autoplay2 = []; autoplay2[0] = (!yt6.mobile) ? yt6.pls : (yt6.pls || ((location.href.indexOf('list=PL') > -1)) ? {} : null ) }
	if (!autoplay2[0]) { yt6.autoplay = false } else {
	  yt6.autoplay = true
	  if (yt6.player1.media.firstChild && yt6.player1.media.firstChild.name == '0') {
	    if (yt6.x && yt6.swapped != 1) {
	      try { yt6.player1.hideControls() } catch(e) {}
	      switch_players(); yt6.swapped = 1; if (yt6.ytg) yt6.ytg.swapped = 1
	      if (yt6.autoplay) try {
		p.stopVideo()
		p.setPlaybackRate( yt6.speed )
		yt6.player1.showControls(); yt6.player1.hideControls()
		p.playVideo()
	      } catch(e){}
	    }
	  } else if (!yt6.x && yt6.swapped) {
		switch_players(); delete yt6.swapped
		if (yt6.ytg && yt6.ytg.swapped == 1) delete yt6.ytg.swapped
	    }
	}
    }



if (start != false){

  if ( (browserName == 'Edge' || browserName == 'IE') && yt6.player2 && typeof yt6.player2.load == 'function' && !yt6.player2.media.loaded ) yt6.player2.load()


  if ( !mep || ((typeof fv == 'string' || p.tagName == 'EMBED') && typeof p.getPlayerState == 'function' && !yt6.x) || ( typeof p.getPlayerState == 'function' && (typeof fv != 'string' || p.tagName != 'EMBED') && webgl  ) ){
	yt6.x = false
	if (bm0) bm0.style.visibility = 'hidden'
	if (typeof fv == 'string') {
	  p.style.width = ''; p.style.setProperty('width', z.style.width, '')
	  p.style.height = ''; p.style.setProperty('height', z.style.height, '')
	} else {
	    p.style.visibility = 'visible'
	    if (yt6.layout == 16) p.style.display = 'inline-block'
	    //if (yt6.ytp.controls)  yt6.ytp.controls.style.display = ''
	  }
	if ((yt6.autoplay || (autoplay2 && autoplay2[0])) && typeof p.playMedia == 'function' && start) {
	  p.playMedia(); gid('movie_player').paused = false
	}

  } else if ( !yt6.flash.forced && ((!yt6.x && typeof p.getPlayerState == 'function') || webgl) ) {
	   yt6.x = false
	   if (bm0) bm0.style.visibility = 'hidden'
	   if (typeof fv == 'string' || p.tagName == 'EMBED') {
	     p.style.width = ''; p.style.setProperty('width', z.style.width, '')
	     p.style.height = ''; p.style.setProperty('height', z.style.height, '')
	   } else {
		p.style.visibility = 'visible'
		if (yt6.layout == 16) p.style.display = 'inline-block'
		//if (yt6.ytp.controls)  yt6.ytp.controls.style.display = ''
	     }
	 } else {

		if (yt6.flash.forced) {
		  $waitUntil(function(){ var p = yt6.p; if (p && p.nodeName == 'EMBED') { return true } },
		    function() {

			var bm0 = gid('bm0')
			var p = yt6.p
			var s = (p && typeof p.getPlayerState == 'function') ? p.getPlayerState() : 0
			var z = yt6.osw
				if (z.getAttribute('id') != 'player') {
				  var z = z.firstChild;
				}

			  if (yt6.browser_tab != 'hidden')
			  if (yt6.x) {

				yt6.x = true
				if (bm0) bm0.style.visibility = 'visible'
				p.style.visibility = 'hidden'

				var z = gc('mejs-layer mejs-poster')[0]
				if (yt6.autoplay && z && !yt6.A_[itag(gid('player1').getAttribute('src'))]) z.style.display = 'none'

				if (p.tagName == 'EMBED') {
				  var x = (typeof p.click == 'function') ? 'important' : ''
				  p.style.width = ''; p.style.setProperty('width', '0px', x)
				  p.style.height = ''; p.style.setProperty('height', '0px', x)
				} else {
				    //if (yt6.ytp.controls)  yt6.ytp.controls.style.display = ''
				  }

				window.postMessage("pauseVideo","*")
				try { p.pauseVideo() } catch(e){}
				try { p.postMessage("pauseVideo","*") } catch(e){}
				if (yt6.autoplay) { yt6.player1.play() }

			  } else {

				yt6.x = false

				if (bm0) bm0.style.visibility = 'hidden'
				p.style.visibility = 'visible'

				if (typeof p.getAttribute('flashvars') == 'string' && z) {
				  p.style.width = ''; p.style.setProperty('width', z.style.width, '')
				  p.style.height = ''; p.style.setProperty('height', z.style.height, '')
				} else {
				    if (yt6.layout == 16) p.style.display = 'inline-block'
				    //if (yt6.ytp.controls)  yt6.ytp.controls.style.display = ''
				  }

				window.postMessage("playVideo","*")
				try { p.playVideo() } catch(e){}
				try { p.postMessage("playVideo","*") } catch(e){}
			    }
			set_controls()
		    },500,5000)

		} else if ( !((p.tagName == 'IFRAME' && yt6.blocked) || typeof p.getPlayerState != 'function')) {

			if (typeof fv == 'string' || p.tagName == 'EMBED') {
			  p.style.setProperty('width', '0px', x)
			  p.style.setProperty('height', '0px', x)
			}

			if (yt6.x && (yt6d.x != false || yt6.p.tagName != 'IFRAME') ) {
			  p.style.visibility = 'hidden'
			  if (bm0) bm0.style.visibility = 'visible'
			  yt6.x = true
			} else {
			    p.style.visibility = 'visible'
			    if (bm0) bm0.style.visibility = 'hidden'
			    yt6.x = false
			  }
		  }
	   }
}

if (typeof p.getPlayerState != 'function' && typeof p.tagName == 'EMBED' && yt6.age.check() ) {
	if (typeof fv == 'string') {
	    p.style.setProperty('width', '0px', x)
	    p.style.setProperty('height', '0px', x)
	} else {
	    p.style.visibility = 'hidden'
	    //p.style.display = 'none'
	    //if (yt6.ytp.controls)  yt6.ytp.controls.style.display = 'none'
	  }

	if (yt6.size == 'default') {
	  resize_layers(yt6.w, yt6.h, true)
	}
	$waitUntil(function(){

	  if (player() && typeof yt6.p.getPlayerState == 'function') return true },
	    function(){ var bm0 = gid('bm0'); if (bm0 && bm0.style.visibility == 'visible') {
		yt6.x = true
		if (yt6.osw.getAttribute('id') != 'player') {
		  yt6.p.style.setProperty('width', '0px', x)
		  yt6.p.style.setProperty('height', '0px', x)
		  bm0.style.visibility = 'visible'
		}
	      } else yt6.x = false
	      set_controls()
	    },1000,40000)

}

  if (start != false) set_controls()


  if ( (yt6.autoplay || (autoplay2 && autoplay2[0]) || yt6.decoding_error )
     && ytplayer.config && ytplayer.config.args
     ) {

    var autoplay = true

  } else var autoplay = false

  if (!yt6.pls && !(yt6.ytp.embed && yt6.autoplay) ) autoplay = false

  return autoplay
}



function swap_player() {
		if (yt6.html5swap) {
		  var z = gclass('forced html5player')[0]
		  if (!z && yt6.age.blocked && player() && yt6.p.tagName == 'DIV') z = yt6.p
		  if (z) {
		    z.setAttribute('id','movie_player2')
		    var y = yt6.original || original() || gid('movie_player_orig') || gid('movie_player')
		    if (y && !(y.tagName == 'EMBED' && y.getAttribute('flashvars') == '')) {
			try { z.destroy() } catch(e){ if (z.parentNode) z.parentNode.removeChild(z) }
			  try {
			    yt6.api.insertBefore(y, yt6.api.firstChild)
			    y.setAttribute('name','movie_player'); y.setAttribute('id','movie_player')
			    var p = player(), p = yt6.p;
			    delete yt6.html5swap
			    if (!yt6.x) p.playVideo()
			    p.setAttribute('class', p.getAttribute('class').replace('forced html5player',''))
			  } catch(e){}
		    } else {
			    var p1 = gid('movie_player1') || gid('movie_player')
			    if (p1 && p1.tagName == 'EMBED' && p1.getAttribute('flashvars') == '') p1.parentNode.removeChild(p1)
			    z.setAttribute('id','movie_player'); delete yt6.html5swap;
			    z.setAttribute('class', yt6.p.getAttribute('class').replace('forced html5player',''))

		      }
		  }
		}
		if (yt6.age.dl || yt6.age.sc) { yt6.age.blocked = false; yt6.age.dl = null; yt6.age.sc = null; yt6.age.audio = null
		  var z = gc('mejs-sourcechooser-selector')[0]
		  if (z && z.firstChild && z.firstChild.lastChild && z.firstChild.lastChild != z.firstChild.firstChild) {
		    z.firstChild.removeChild(z.firstChild.firstChild); yt6.ct = 0; yt6d.mep_renew()
		  }
		}
}



String.prototype.toHHMMSS = function () {
    var sec_num = parseFloat(this, 10) // don't forget the second param
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60)
    var seconds = sec_num - (hours * 3600) - (minutes * 60)
    var seconds = seconds.toFixed(3)

    if (hours   < 10) {hours   = "0"+hours}
    if (minutes < 10) {minutes = "0"+minutes}
    if (seconds < 10) {seconds = "0"+seconds}
    var time    = hours+':'+minutes+':'+seconds
    return time
}


function getReferenceObjects() {

	var z = document.getElementsByTagName('YTD-TWO-COLUMN-BROWSE-RESULTS-RENDERER')
	// the initial DOM-constructor elements cause other element indexes to change which is problematic for playlist items
	// So let's move them before that happens
	yt6.pl_fix = 0
	if (z && z.length > 0 && (z[0].parentNode.firstChild.tagName == 'YTD-TWO-COLUMN-BROWSE-RESULTS-RENDERER' || !gid('mep_init') ) ) {
	  yt6.pl_fix = 1
	  for(i=0;i<z.length;i++) if (z[i]) {
	    if (document.getElementsByTagName('ytd-page-manager')[0]) {
	      document.getElementsByTagName('ytd-page-manager')[0].appendChild(z[i].parentNode)
	    } else {
		z[i].setAttribute('style','display: none'); z[i].style.display = 'none'
		z[i].setAttribute('name','sp_junk'); z[i].name = 'sp_junk'
		body.appendChild(z[i])
	      }
	  }
	}

  if (!yt6.ytm) {
    yt6.osw = (!(yt6.body2 && yt6.layout == 16)) ? gid('placeholder-player') || gid('player') : gid('player')
    yt6.mhp = (!(yt6.body2 && yt6.layout == 16)) ? gid('masthead-positioner') || gid('logo') || gid('masthead-logo') : gid('logo') || gid('masthead-logo')
  } else {
      yt6.osw = document.getElementsByTagName('ytmusic-player')[0]
      yt6.mhp = document.getElementsByTagName('ytmusic-nav-bar')[0]
    }

  if (yt6.mobile) yt6.osw = gc('player-api')[0] || gc('player-size')[0] //gc('player-api')[1]

  if (!yt6.osw && !yt6.skeleton && gid('watch-page-skeleton')) {
    yt6.skeleton = true
    yt6.osw = gid('watch-page-skeleton')
    if (yt6.osw && yt6.osw.className.indexOf(' hidden') > -1) yt6.osw.className = yt6.osw.className.split(' hidden').join('')
  }


  if (!yt6.mhp && !yt6.ytm) {
    var z = gid('home-button')
    if (z) {
      yt6.mhp = z.parentNode
    } else {
	yt6.mhp = gc('header-bar cbox')[0] || gc('mobile-topbar-header-endpoint ')[0]
	yt6.style.position = 'absolute'
	yt6.style.top = '2px'
	yt6.style.left = '2px'
	yt6.style.zIndex = '2101'
	yt6.style.width = '0px'
	var y = document.getElementsByTagName('ytm-watch')[0]
	if (y && !gid('alerts')) {
	  var z = document.createElement('div')
	  z.id = (yt6.layout == 16) ? 'alerts' : 'watch-header'
	  y.insertBefore(z, y.firstChild.nextSibling)
	}
      }
  }

  yt6.wsb = gid('watch7-sidebar')
  if (!yt6.wsb || (yt6.body2 && yt6.layout == 16))
    yt6.wsb = gid('related') || gid('sidebar') || gid('secondary') || gc('side-panel style-scope ytmusic-player-page')[0] || document.getElementsByTagName('ytg-watch-sidebar')[0]

  yt6.wsa = gid('watch7-sidebar-ads')
  if (!yt6.wsb || (yt6.body2 && yt6.layout == 16)) gid('player-ads')

  if (yt6.mobile && shorts() && !gid('alerts')) {
    var js = document.createElement('div')
    js.id = 'alerts'
    yt6.appendChild(js)
    if (gid('alerts') && yt6.mhp && yt6.mhp.offsetHeight) gid('alerts').style.top = yt6.mhp.offsetHeight + 'px'
  }

  yt6.wna = (!yt6.ytm && !yt6.mobile && (yt6.layout == 12 || yt6.ytp.embed)) ? gid('watch-header') : gid('alerts')
  var wna = null

  yt6.top = gid('top') || gid('content-layer') || yt6.ytm
  if (yt6.mobile) {
    yt6.top = yt6.inf = document.getElementsByTagName('ytm-single-column-watch-next-results-renderer')[0] || document.getElementsByTagName('ytm-pivot-bar-renderer')[0]
  }
  if (yt6.wna && yt6.wna.getAttribute('id') == 'watch-header') { yt6.wna = gid('watch7-notification-area'); if (!yt6.body2) yt6.wna2 = yt6.wna }


  if (yt6.osw.getAttribute('id') == 'player' && !yt6.ytp.embed) {

      yt6.layout = 16 

      var z = document.getElementsByTagName('ytd-app')[0]
      if (z) {
	//if (z.getAttribute('style') && z.getAttribute('style').indexOf('--ytd-masthead-height:') != -1)
	z.setAttribute('style','')
	//z = gclass('ytd-consent-bump-lightbox')[0]
	//if (z) z.style.display = 'none'
	z = document.getElementsByTagName('iron-overlay-backdrop')[0]
	if (z) z.style.display = 'none'
	z = document.getElementsByTagName('ytd-consent-bump-lightbox')[0]
	if (z) z.style.display = 'none'
	var z = document.getElementsByTagName('ytd-consent-bump-renderer')
	if (typeof z[0] != 'undefined') { z[0].setAttribute('hidden','') }
      }
  
	var l = gc('style-scope ytd-watch')
	for (i=0;i<l.length;i++) {
	  if (l[i].getAttribute('id') == 'player') yt6.osw = l[i]
	  if (l[i].getAttribute('id') == 'container') yt6.con = l[i]
	  if (l[i].getAttribute('id') == 'main') yt6.man = l[i]
	  if (l[i].getAttribute('id') == 'alerts') wna = l[i]
	  if (l[i].getAttribute('id') == 'messages') yt6.wna2 = l[i]
	  if (l[i].getAttribute('id') == 'info' && !yt6.ytg) yt6.inf = l[i]
	  if (l[i].getAttribute('id') == 'miniplayer-bar') { yt6.mpb = l[i].firstChild }
	  if (yt6.con && yt6.man && wna && (!yt6.ytg && yt6.inf)) { yt6.wna = wna; var l = null; break }
	}

	if (!yt6.wna2) yt6.wna2 = yt6.wna //ytm
	var l = document.getElementsByTagName('YTD-MINIPLAYER')[0]
	if (l) yt6.mpb = l

	var z = document.getElementsByTagName('ytd-watch-flexy')[0] || document.getElementsByTagName('ytd-watch')[0]

	if (z && (z.hasAttribute('flexy') || z.hasAttribute('flexy_') || z.hasAttribute('is-currently-flexible_') || z.hasAttribute('flexy-fit-to-video_') || z.hasAttribute('flexy-v2_') || z.hasAttribute('flexy-v2-extended_') || z.hasAttribute('flexy-small-window_') || (typeof z.getAttribute('style') == 'string'  && z.getAttribute('style').indexOf('--ytd-watch-flexy-') > -1) )
	   ) {

	  yt6.flexy = true


	  var l = gc('style-scope ytd-watch-flexy')
	  for (i=0;i<l.length;i++) {
	    if (l[i].getAttribute('id') == 'player') yt6.osw = l[i]
	    if (l[i].getAttribute('id') == 'alerts') wna = l[i]
	    if (l[i].getAttribute('id') == 'messages') yt6.wna2 = l[i]
	    if (l[i].getAttribute('id') == 'info' && !yt6.ytg) yt6.inf = yt6.con = yt6.man = l[i]
	    if (l[i].getAttribute('id') == 'primary') yt6.top = (yt6.wide) ? l[i] : l[i].parentNode
	    if (yt6.con && yt6.man && wna && (!yt6.ytg && yt6.inf)) { yt6.wna = wna; var l = null; break }
	  }
	  if (!yt6.wna2) yt6.wna2 = yt6.wna //ytm
	  if (!yt6.top) yt6.top = gid('primary')

	} else yt6.flexy = false


  } else {

      yt6.layout = 12

    }


  if (!(yt6.wna && yt6.wna.parentNode)) yt6.wna = gid('notification-layer')


  if (yt6.skeleton || (yt6.layout == 16 && !yt6.mobile && !yt6.wna)) {
    yt6.skeleton = true
    yt6.top = gid('player')
    if (!yt6.ytp.embed) {
      yt6.inf = yt6.con = yt6.man = gid('info-container') || document.getElementsByTagName('ytd-app')[0]
      yt6.wna = gid('messages'); if (!yt6.body2) yt6.wna2 = yt6.wna
    }
  }


  yt6.ytp.controls = gc('ytp-chrome-controls')[0]
  yt6.tbg = (yt6.layout !== 12) ? gid('theater-left') : gid('theater-background')

  var x = (yt6.api && !yt6.ytm) ? yt6.api : yt6.top
  if (yt6.mobile) x = gid('player-container-id')

  if (!(yt6.tbg && yt6.tbg.parentNode) || yt6.mobile) { // on mobile, we either create a duplicate of the tbg object on every new video or yt will wipe it(?) -- we'll get rid of the duplicate ourselves below
    var z = document.createElement('div')
    z.id = (yt6.layout !== 12) ? 'theater-left' : 'theater-background'

    if (yt6.ytm) {

	  var a = gc('song-media-controls style-scope ytmusic-player')[0]
	  if (a && player() && yt6.p && typeof yt6.p.getPlayerState == 'function' && (yt6.p.getPlayerState() == -1 || yt6.p.getPlayerState() == 5)) {
	    a.style.position = 'relative'; a.parentNode.insertBefore(a, a.parentNode.firstChild)
	  } else {
	      a.style.position = ''
	    }
	  a.style.height = (!yt6.flash.forced) ? '' : '50px'

     if (x.firstChild != document.querySelector('#'+ x.id + ' > div')) {

     (function(window, document) {
      if ( !window.NodeFilter ) {

	var NodeFilter = function() {};

	NodeFilter.FILTER_ACCEPT = 1;
	NodeFilter.FILTER_REJECT = 2;
	NodeFilter.FILTER_SKIP   = 3;

	NodeFilter.SHOW_ALL                    = 0xFFFFFFFF;
	NodeFilter.SHOW_ELEMENT                = 0x00000001;
	NodeFilter.SHOW_ATTRIBUTE              = 0x00000002;
	NodeFilter.SHOW_TEXT                   = 0x00000004;
	NodeFilter.SHOW_CDATA_SECTION          = 0x00000008;
	NodeFilter.SHOW_ENTITY_REFERENCE       = 0x00000010;
	NodeFilter.SHOW_ENTITY                 = 0x00000020;
	NodeFilter.SHOW_PROCESSING_INSTRUCTION = 0x00000040;
	NodeFilter.SHOW_COMMENT                = 0x00000080;
	NodeFilter.SHOW_DOCUMENT               = 0x00000100;
	NodeFilter.SHOW_DOCUMENT_TYPE          = 0x00000200;
	NodeFilter.SHOW_DOCUMENT_FRAGMENT      = 0x00000400;
	NodeFilter.SHOW_NOTATION               = 0x00000800;

	NodeFilter.prototype.acceptNode = function(n) {
		return NodeFilter.FILTER_ACCEPT;
	};

	window.NodeFilter = NodeFilter;
      }

      if ( !document.createTreeWalker ) {

	/*
	 * http://codesearch.google.com/#OAMlx_jo-ck/src/third_party/WebKit/Source/WebCore/dom/TreeWalker.cpp
	 */

	function TreeWalker(root, whatToShow, filter, entityReferenceExpansion) {
		// RADAR
		// This is imho not necessary 'cause IE<9 doesn't support overwriting
		// property setters on non-DOM objects and other browsers have already
		// TreeWalker support.
		// Maybe TreeWalker can be implemented as DOM object?
		// Note: For IE we use Object.defineProperty!
		var currentNode;
		this.__defineSetter__('currentNode', function(node) {
			if ( node === null ) { throw( DOMException.NOT_SUPPORTED_ERR ); }
			return currentNode = node;
		});
		this.__defineGetter__('currentNode', function() {
			return currentNode;
		});

		this.parentNode = function() {
			var node, filterResult = NodeFilter.FILTER_ACCEPT;

			while ( node !== root ) {
				node = this.currentNode.parentNode;
				if ( !node ) { return null; }

				if ( typeof(filter) == 'function' ) try {
					filterResult = filter.acceptNode( node );
				} catch (e) {
					return null;
				}

				if ( filterResult === NodeFilter.FILTER_ACCEPT ) {
					return currentNode = node;
				}
			}
			return null;
		};
		this.firstChild = function() {
			for (var node = node.firstChild, filterResult = NodeFilter.FILTER_ACCEPT; node;) {

				if ( typeof(filter) == 'function' ) try {
					filterResult = filter.acceptNode( node );
				} catch (e) {
					return null;
				}

				switch ( filterResult ) {
					case NodeFilter.FILTER_ACCEPT: return currentNode = node;
					case NodeFilter.FILTER_SKIP:
						if ( node.firstChild ) {
							node = node.firstChild;
							continue;
						}

						break;
					case NodeFilter.FILTER_REJECT: break;
				}

				do {
					if ( node.nextSibling ) {
						node = node.nextSibling;
						break;
					}

					node = node.parentNode;
					if ( node === root || node === currentNode ) {
						return null;
					}
				} while ( node )
			}

			return null;
		};

		this.lastChild = function() {};
	};

	(function(fn) {
		fn.previousSibling = function() {};
		fn.nextSibling = function() {};
		fn.previousNode = function() {
			var node;

			node = this.previousSibling();
			if ( node ) { return this.lastChild() || node; }
			node = this.parentNode();
			if ( node ) { return this.previousNode(); }

			return node;
		};
		fn.nextNode = function() {
			var node;

			node = this.firstChild() || this.nextSibling();
			if ( node ) { return node; }
			node = this.parentNode();
			if ( node ) { return this.nextNode(); }

			return node;
		};
	})(TreeWalker.prototype)

      document.createTreeWalker = TreeWalker;
      }
     })(window, document);

      var walker = document.createTreeWalker(x, NodeFilter.SHOW_ELEMENT, null, false)
      var x = walker.firstChild().parentNode
      var y = x.firstElementChild

     }

    } else {//!yt6.ytm

	 var y = x.firstChild

      }

    x.insertBefore(z, y)

    if (yt6.mobile) // remove the older one if it exists
      if (yt6.tbg && yt6.tbg.parentNode && yt6.tbg != x.firstChild && yt6.tbg != x.firstElementChild)
	yt6.tbg.parentNode.removeChild(yt6.tbg)


    yt6.tbg = (yt6.layout !== 12) ? gid('theater-left') : gid('theater-background')

    if (yt6.tbg && yt6.tbg.parentNode) {
      //yt6.tbg.parentNode.insertBefore(yt6.tbg, yt6.tbg.parentNode.firstChild)
      yt6.tbg.setAttribute('class','player-height click-through-this')
      if (yt6.oldbrowser) { yt6.tbg.setAttribute('style','display: inline-block') }
      yt6.tbg.style.display = 'inline-block'
      if (yt6.layout !== 12) {
	var z = document.createElement('div')
	z.id = 'theater-right'
	yt6.tbg.appendChild(z)
	z.setAttribute('style','position: ' + ((!yt6.mobile) ? 'absolute' : 'relative') + '; width: ' + parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb +'px; height: 100%; background-color: transparent')
	z.setAttribute('class','click-through-this')
      }
    }

  } else if (yt6.tbg && yt6.api) {
      if (yt6.ytp.embed) yt6.top = yt6.api
      if (!(yt6.body2 && yt6.layout == 12))
      if (yt6.flexy && yt6.wide) {
	yt6.api.insertBefore(yt6.tbg, yt6.api.firstChild)
      } else if (yt6.top) {
	  yt6.top.insertBefore(yt6.tbg, yt6.top.firstChild)
      }
   }

  if (yt6.mobile) yt6.tbg.style.position = 'absolute'

}



function update_TimeStampLinks() {

  if (yt6.ytp.embed) return void 0

  if (yt6.osw.getAttribute('id') != 'player') {
    var z = getElementsByAttribute(document,"a","onclick")
    var y = getElementsByAttribute(document,"div","id","watch-description-text")
    for(i=0;i<y.length;i++) {
      if (y[i]) {
	var x = getElementsByAttribute(y[i],"a","href")
	for (j=0;j<x.length;j++) {
	  if (x[j] && x[j].href.indexOf('&t=') > -1 && x[j][yt6.txt].indexOf(':') > -1) { z.push.apply(z, getElementsByAttribute(y[i],"a","href", x[j].getAttribute('href')) ); }
	}
      }
    }
    y = gc("comment-renderer-text-content")
    for(i=0;i<y.length;i++) {
      if (y[i]) {
	var x = getElementsByAttribute(y[i],"a","class","yt-uix-sessionlink")
	if (x[0] && x[0][yt6.txt].indexOf(':') != -1) z.push.apply(z, x);
      }
    }
  } else {
      var z = (!yt6.ytg) ? getElementsByAttribute(document,"a","class","yt-simple-endpoint style-scope yt-formatted-string") : gc('style-scope ytg-nav-endpoint')
    }

  if (z && z.length && !(yt6.ts && yt6.ts.length && yt6.ts.length == z.length)) {

  yt6.ts = z

  for(i = 0;i<z.length;i++){
    if (z[i] && z[i][yt6.txt] && z[i][yt6.txt].indexOf(':') != -1) {
      var timecode = z[i].getAttribute('onclick') || z[i].getAttribute('href');
      if (timecode) {
	var y = z[i].getAttribute('class') || ''
	if (y.indexOf('yt6') == -1) {
	  z[i].setAttribute('class', y + ' yt6')
	} else continue
	if (timecode.indexOf('yt.www.watch.player.seekTo\(') != -1) {
	  z[i].setAttribute("onclick", "var yt6 = gid(\'snarls_player\'); if ( yt6 && yt6.x && yt6.player1 && yt6.player1.media && yt6.player1.media.currentTime) { yt6.player1.media.currentTime = " + timecode.split('player.seekTo\(')[1].split('\)')[0] + " } else { " + timecode.split('\;')[0] + " };" + timecode.split('\;')[1] + "\;")

	} else {
	    if (timecode.split('&t=')[1] && z[i].getAttribute('href') && location.href.indexOf(timecode.split('&')[0]) != -1) {
	      z[i].setAttribute("onclick", "var yt6 = gid(\'snarls_player\'); if ( yt6 && yt6.x && yt6.player1 && yt6.player1.media && yt6.player1.media.currentTime) { yt6.player1.media.currentTime = " + timecode.split('&t=')[1].split('s')[0] + " }")
	    }
	 }
      }
    }
  }

  }

}



function wide_view() {

  if (yt6.flexy) {
    var z = gid('player-theater-container')
    var y = pcont()
    if (z && y && y.parentNode == z) { yt6.wide = true; return true } else { yt6.wide =false; return false }
  }

  if (yt6.layout == 12) {
    var z = gid('page')
    if (z) {
      z = z.getAttribute('class')
      if (z && (z.indexOf('watch-wide') != -1 || z.indexOf('watch-stage-mode') != -1)) {
	yt6.wide = true; return true
      } else { yt6.wide = false; return false }
    } else { yt6.wide = false; return false }
  }

  if (yt6.layout == 16) {
    var z = (yt6.osw.parentNode) ? yt6.osw.parentNode.parentNode : null //getElementsByAttribute(document,"ytd-app","class","ytd-app-1")[0]
    if (z != null && z.hasAttribute('theater')) { yt6.wide = true; return true } else { yt6.wide = false; return false }
  }
}



yt6d.mep_renew = function() {

    if ( !(yt6.player2 && typeof yt6.player2.load == 'function')) yt6.newvideo = false
    yt6.mep = 'down'


    var bp = function() { return gclass("mejs-overlay-play")[0] }



    var sc = gc('mejs-sourcechooser-selector')[0]
    if (sc) sc.innerHTML = '<ul></ul>'


    var p = gc('mejs-layer mejs-poster')[0]


    var z = gc('mejs-duration')[0]
    if (z) {
      var x = clone(yt6.real_media_duration)
      if (x)
	if (typeof mejs == 'object' && mejs.Utility) {
	  z[yt6.txt] = mejs.Utility.secondsToTimeCode(x)
	} else {
	    if (!isNaN(x)) { var x = x.toString(); x = x.toHHMMSS() }
	    if (x.substr(0,2) == '00') var x = x.substr(3,x.length - 3)
	    z[yt6.txt] =  x.split('.')[0]
	  }
    }

    yt6.loop.start = 0; yt6.loop.end = yt6.loaded_media_duration // could be the duration of an ad!
    var z = gc('loop-start')[0]; if (z) z.value = '00:00'
    var z = gc('loop-end')[0]; if (z) z.value = gc('mejs-duration')[0][yt6.txt]


    var z = gid('displaySpeed')
    if (z) z.style.color = 'white'


    var cc = function() { return document.getElementsByClassName('mejs-button mejs-captions-button')[0] }

    var me_flash_ = getElementsByAttribute(document,"embed","name",mep_x("me_flash_"))[0]


    function preload(){

      try {

	yt6.player1.setPoster(getPoster())

	if (bp()) bp().style.display = 'block'
	if (p) {
	  //p.setAttribute('id','mejs-poster')
	  p.style.display = 'block'
	}


	var media = gid('player1')


	if (typeof media.canPlayType == 'function') {

	  var audio_with_poster = function() {//p = poster
	    if (p && (( 1 * unescape(media.src).indexOf('mime=audio') > -1) || (1*unescape(media.src).indexOf('mime/audio') > -1)) ) {
	      p.style.display = 'block'
	      if (bp()) bp().style.display = 'block'
	    };
	  }


	  removeEL(media, 'play', audio_with_poster, false)
	  addEL(media, 'play', audio_with_poster, false)


	  for (var i in media.children) {
	    var src = media.children[i]
	    if (src.nodeName === 'SOURCE' && (media.canPlayType(src.type) == 'probably' || media.canPlayType(src.type) == 'maybe')) {
		yt6.player1.addSourceButton(src.src, src.title, src.type, media.src == src.src, src.name || src.getAttribute('name'))
	    } else {
		if (src.nodeName === 'SOURCE' && media.children[i].type != 'video/webm' && media.children[i].title && 1 * media.children[i].title.indexOf('+') > -1) {
		  yt6.player1.addSourceButton(src.src, src.title, src.type, media.src == src.src, src.name || src.getAttribute('name'))
		}
	      }
	  }

	  var controls = gc('mejs-controls')[0]

	  var layers = gc('mejs-layers')[0]

	  yt6.player1.cleartracks(yt6.player1, controls, layers, media)
	  yt6.player1.rebuildtracks(yt6.player1, controls, layers, media)

	  if (typeof yt6.player1.captionsButton != 'undefined') yt6.player1.loadNextTrack()

	}//media.canPlayType



	var tc = gc('mejs-time-current')[0]
	if (tc) { tc.setAttribute('width', '0px'); tc.style.width = '0px' }



      function find_the_source() {

	var find = true; var fmt_pool, index, mep = mep_x('mep_')
	var z = gid('bm4'); if (z) z.style.display = 'inline-block'
	var pool0, pool1, pool2

	function sotf(item) {
	  //a.filter(function(item) {
	  try {
	     if (yt6.yt_otf.length && (yt6.yt_otf.indexOf(item) > -1)) { return false } else return true
	  } catch(e) { }
	  //})
	  //return a
	}

	var x = ((yt6.prefer_fmt == 'all') ? 'all' : ((yt6.prefer_fmt == 'webm') ? 'dash' : 'webm'))

	if (yt6.userprefV[0] !== yt6.userprefA[0] || yt6.fmts_fallback.A.all.indexOf(yt6.userprefV[0]) == -1) {
	  pool0 = yt6.userprefV
	  pool1 = clone(yt6.fmts_fallback.V)
	  if (x != 'all') {
	    pool2 = clone(yt6.fmts_fallback.V.uniq[yt6.prefer_fmt])
	    pool2.push.apply(pool2, yt6.fmts_fallback.A.uniq[yt6.prefer_fmt])
	    if (x == 'dash') pool2.push.apply(pool2, yt6.fmts_fallback.V.uniq['av1'])
	    pool2.push.apply(pool2, yt6.fmts_fallback.V.uniq[x])
	    pool2.push.apply(pool2, yt6.fmts_fallback.A.uniq[x])
	  } else {
	    pool2 = clone(yt6.fmts_fallback.V.uniq[yt6.prefer_fmt])
	    pool2.push.apply(pool2, yt6.fmts_fallback.A.uniq[yt6.prefer_fmt])
	  }
	} else {
	    pool0 = yt6.userprefA
	    pool1 = yt6.fmts_fallback.A
	    pool2 = clone(yt6.fmts_fallback.A.uniq[yt6.prefer_fmt])
	    pool2.push.apply(pool2, yt6.fmts_fallback.A.revers[x])
	  }


	var ii
	for(i=0;i<pool0.length;i++){
	  if (yt6.swapped == 1 && p && p.tagName == 'EMBED') break
	  ii = i
	  //Check the sources of available video formats to find the closest one in quality to the desired one

	  if (!yt6.decoding_error)
	//for(i=0;i<pool0.length;i++){
	  for(j=0;j<pool2.length;j++){
	    if (parseInt(pool2[j]) == parseInt(pool0[i]) ){//&& !(yt6.prefer_fmt !== 'all' && (!sotf(pool0[i]) || !gid(mep + '_sourcechooser_' + pool0[i])) ) ) {
		var index = j
		var fmt_pool = pool2; //console.log('A '+ fmt_pool[index] +' i:'+ i +' / '+ pool0.length +', j:'+ j +' / '+pool2.length + ' '+ sotf(pool0[i]))
		break;
	    }
	  }
	//  if (fmt_pool) break;
	//}

	  if (!fmt_pool) {
	    var alt_pool = (yt6.prefer_fmt == 'webm' && !yt6.decoding_error) ? 'dash' : 'webm'
	//for(i=0;i<pool0.length;i++){
	    for(j=pool1[alt_pool].indexOf(yt6.userprefV[0]);j<pool1[alt_pool].length;j++){
	      //console.log(pool1[alt_pool][j] +' '+pool0[i] +' ' +qual[pool0[i]]['a'] )
	      if (parseInt(pool1[alt_pool][j]) == parseInt(pool0[i]) && !(yt6.prefer_fmt !== 'all' && (!sotf(pool0[i]) || !gid(mep + '_sourcechooser_' + pool0[i])) ) ) {
		var index = j
		var fmt_pool = pool1[alt_pool]; //console.log('B '+ fmt_pool[index])
		yt6.no_default = true
		break;
	      }
	    }
	//  if (fmt_pool) break;
	//}
	  }

	  if (!fmt_pool) {
	    var alt_pool = (yt6.prefer_fmt == 'webm' && !yt6.decoding_error) ? 'dash' : 'webm'
	//for(i=0;i<pool0.length;i++){
	    for(j=0;j<pool1['all'].length;j++){
	      if (sotf(pool1['all'][j]) && gid(mep + '_sourcechooser_' + pool1['all'][j].toString().split('160').join('132').split('278').join('241'))
		   && (
			(parseInt(pool1['all'][j]) == parseInt(pool0[i]) && pool1[alt_pool].indexOf(pool0[i]) > -1)
			|| (parseInt(pool1['all'][j]) == parseInt(qual[pool0[i]]['a']) && pool1[yt6.prefer_fmt].indexOf(qual[pool0[i]]['a']) > -1)
		      )
		 ) {// && !(yt6.prefer_fmt !== 'all' && !gid(mep + '_sourcechooser_' + pool1[alt_pool][j]) ) ) {
		var index = j
		var fmt_pool = pool1[alt_pool]; //console.log('C '+ fmt_pool[index])
		yt6.no_default = true
		break;
	      }
	    }
	//  if (fmt_pool) break;
	//}
	  }


	  //Check 3D video formats (no longer used)
	  if (!index) 
	//for(i=0;i<pool0.length;i++){
	  for(j=0;j<yt6.fmts_fallback.V3D[yt6.prefer_fmt].length;j++){
	    if (yt6.fmts_fallback.V3D[yt6.prefer_fmt][j] == parseInt(pool0[i]) && sotf(pool1[yt6.prefer_fmt][j]) && !(yt6.prefer_fmt !== 'all' && !gid(mep + '_sourcechooser_' + pool1[yt6.prefer_fmt][j]) ) ) {
		var index = j
		var fmt_pool = yt6.fmts_fallback.V3D[yt6.prefer_fmt]
		break;
	    }
	  }
	//  if (fmt_pool) break;
	//}
	  if (!fmt_pool) {
	    var alt_pool = yt6.prefer_fmt //== 'webm') ? 'h264' : 'webm'
	//for(i=0;i<pool0.length;i++){
	    for(j=0;j<yt6.fmts_fallback.V3D[alt_pool].length;j++){
	      if (yt6.fmts_fallback.V3D[alt_pool][j] == parseInt(qual[pool0[i]]['a']) && sotf(yt6.fmts_fallback.V3D[alt_pool][j]) && !(yt6.prefer_fmt !== 'all' && !gid(mep + '_sourcechooser_' + yt6.fmts_fallback.V3D[alt_pool][j]) ) ) {
		var index = j//(alt_pool == 'h264') ? j-1 : j-2
		var fmt_pool = yt6.fmts_fallback.V3D[yt6.prefer_fmt]
		break;
	      }
	    }
	//  if (fmt_pool) break;
	//}
	  }
	  if (!fmt_pool) {
	    var alt_pool = 'all' //== 'webm') ? 'h264' : 'webm'
	//for(i=0;i<pool0.length;i++){
	    for(j=0;j<yt6.fmts_fallback.V3D[alt_pool].length;j++){
	      if (yt6.fmts_fallback.V3D[alt_pool][j] == parseInt(qual[pool0[i]]['a']) && sotf(pool1[yt6.prefer_fmt][j]) && !(yt6.prefer_fmt !== 'all' && !gid(mep + '_sourcechooser_' + yt6.fmts_fallback.V3D[alt_pool][j]) ) ) {
		var index = j//(alt_pool == 'h264') ? j-1 : j-2
		var fmt_pool = yt6.fmts_fallback.V3D[yt6.prefer_fmt]
		break;
	      }
	    }
	//  if (fmt_pool) break;
	//}
	  }

	  //Check rarely used or deprecated formats (3GP/FLV)
	  if (!index) 
	//for(i=0;i<pool0.length;i++){
	  for(j=0;j<yt6.fmts_fallback.other.length;j++){
	    if (yt6.fmts_fallback.other[j] == parseInt(yt6.userprefV[i]) && sotf(yt6.fmts_fallback.other[j]) && !(yt6.prefer_fmt !== 'all' && !gid(mep + '_sourcechooser_' + yt6.fmts_fallback.other[j]) ) ) {
		var index = j
		var fmt_pool = yt6.fmts_fallback.other
		break;
	    }
	  }
	//  if (fmt_pool) break;
	//}

	  //Check audio formats

	if (yt6.prefer_fmt == 'all') {
	  var x = 'all'
	} else var x = (yt6.prefer_fmt == 'dash') ? 'aac' : 'webm'


	  if (!index) 
	//for(i=0;i<pool0.length;i++){
	  for(j=0;j<yt6.fmts_fallback.A[x].length;j++){
	    if (yt6.fmts_fallback.A[x][j] == parseInt(yt6.userprefV[i]) && sotf(yt6.fmts_fallback.A[x][j]) && yt6.yt_otf.indexOf(pool1[yt6.prefer_fmt][j]) == -1 && gid(mep + '_sourcechooser_' + yt6.fmts_fallback.A[x][j]) ){// && !(yt6.prefer_fmt !== 'all' && !gid(mep + '_sourcechooser_' + pool1[yt6.prefer_fmt][j]) ) ) {
		var index = j
		var fmt_pool = yt6.fmts_fallback.A[x]
		break;
	    }
	  }
	//  if (fmt_pool) break;
	//}
	  if (!fmt_pool) {
	    var alt_pool = (x == 'webm') ? 'aac' : 'webm'
	//for(i=0;i<pool0.length;i++){
	    for(j=0;j<yt6.fmts_fallback.A[alt_pool].length;j++){
	      if (yt6.fmts_fallback.A[alt_pool][j] == parseInt(yt6.userprefV[i]) && sotf(yt6.fmts_fallback.A[alt_pool][j]) && yt6.yt_otf.indexOf(pool1[yt6.prefer_fmt][j]) == -1 && gid(mep + '_sourcechooser_' + yt6.fmts_fallback.A[alt_pool][j]) ){//&& !(yt6.prefer_fmt !== 'all' && !gid(mep + '_sourcechooser_' + pool1[alt_pool][j]) ) ) {
		var index = (alt_pool == 'aac') ? j-1 : j-2
		var fmt_pool = yt6.fmts_fallback.A[alt_pool]
		break;
	      }
	    }
	//  if (fmt_pool) break;
	//}
	  }

	if (!fmt_pool && pool0.length > i) continue
	  //if (yt6.ytg && yt6.encrypted && gc('mejs-sourcechooser-selector')[0] && gc('mejs-sourcechooser-selector')[0].firstChild.children.length < 3) var index = 0



	  //We really should have found it by now...
	  for(j=index;j<fmt_pool.length;j++){
	    var itagx = fmt_pool[j]; if (itagx == 278) itagx = 241; if (itagx == 160) itagx = 132
	    var z = gid(mep + '_sourcechooser_' + itagx)
	    if (i == yt6.userprefV.length-1 && j == fmt_pool.length-1 && !z && yt6.prefer_fmt != 'all') {
	      find = true; var itagx = (yt6.prefer_fmt == 'webm') ? '18' : '43';
	      var z = gid(mep + '_sourcechooser_' + itagx)
	    }
	    var z = gid(mep + '_sourcechooser_' + itagx)
	    yt6.me_flash_source = null
	    if (find && z) { var zv = z.getAttribute('value')
	    //if (zv && (zv.indexOf('source=yt_otf') > -1 || zv.indexOf('source/yt_otf') > -1)) {
		//z.parentNode.parentNode.removeChild(z.parentNode); find_the_source()
	    //} else {
	      yt6.me_flash_source = z;
	      if ( ((!yt6.ytm && yt6.pls && yt6.autoplay) || autoplay()) && (yt6.x || (!yt6.x && v_(yt6.p) && v_(yt6.p).src && v_(yt6.p).src.indexOf('http') == 0) || yt6.browser_tab == 'hidden' || !yt6d.previous.linx.length) ) {// && !yt6.ytm
		z.setAttribute('checked','checked'); z.checked = 'true'
		yt6.player1.setSrc(yt6.linx[itagx])
		if (1 * itagx != 1 * yt6.userprefV[i] && !yt6d.init) {
		  no_default(itagx, 'V'); if (!gid(mep + '_sourcechooser_' + yt6.userprefV[i])) { yt6.fmt_bak2 = clone(yt6.fmt_bak || 1 * yt6.userprefV[i]) }; //console.log('no_default: ' + itagx +' '+yt6.newvideo +' '+yt6.userprefV[i])
		}
		z.click()
		yt6.current = (1 * itagx); var t = z

		if (yt6.x && typeof yt6.player1.play == 'function') {
		  try {
		    if (yt6.player1 && yt6.player1.media) {

		      yt6.player1.media.timer = 0; yt6.sync_timer = 1; yt6.autoplay_trigger = (typeof yt6.autoplay_trigger == 'number') ? yt6.autoplay_trigger : 0

		      var step = 1500, threshold = 9000



		      function autoplay_trigger(t, itagx) { yt6.autoplay_trigger++

			let timeout001 = false; let timeout002 = false

			$waitUntil(function(){
			  if (yt6.pls && yt6.newvideo && !yt6.autoplay) autoplay()
			  if ( (yt6.player1.media.loaded) || yt6.autoplay_trigger >= 100) { return true }
			    else {
			      if (yt6.browser_tab == 'hidden') {
				//if (!timeout001)
				setTimeout(function(){
				  if ( (yt6.browser_tab == 'hidden' && (!yt6.player1.media.loaded || !yt6.player1.isLoaded)) ) {
				  try {
				    if (yt6.player1.media.paused && !yt6.player1.media.currentTime) { gc("mejs-button mejs-playpause-button")[0].click() }
				    //if (!timeout002)
				    setTimeout(function(){
				      if (!yt6.player1.media.loaded) {

					if (yt6.sync_timer > 1) {
					  if ( yt6.browser_tab == 'hidden' && !yt6.player1.media.currentTime &&
						 ( !yt6.player1.media.loaded && yt6.sync_timer % 4 == 1 && yt6.sync_timer >= 5)
						|| (yt6.player1.media.loaded && !yt6.player1.media.paused && yt6.sync_timer % 4 == 1 && yt6.sync_timer >= 5)
						 //|| (yt6.sync_timer > 2 && yt6.sync_timer % 13 == 2 && !yt6.player1.media.loaded && !yt6.player1.isLoaded)
					      ) { var x = (!yt6.player1.media.loaded && !yt6.player1.media.paused && yt6.sync_timer % 4 == 1) ? 1 : 2
					    yt6.player1.setSrc("https://www.youtube.com/ptracking"); yt6.player1.load(); yt6.player1.isLoaded = false; //ev_log('pt0'+ x +' '+yt6.sync_timer +' '+ yt6.autoplay_trigger )
					    //if (x == 1) yt6.sync_timer = 0
					  }

					  if ((yt6.browser_tab == 'hidden' && yt6.sync_timer % 2 == 1 && yt6.sync_timer > 3) || yt6.player1.media.src == 'https://www.youtube.com/ptracking') {
					    if (!yt6.player1.isLoaded || !yt6.player1.media.loaded || yt6.player1.media.src == 'https://www.youtube.com/ptracking') {
					      try {
						if (gid(mep + '_sourcechooser_' + yt6.current)) {
						  t = gid(mep + '_sourcechooser_' + yt6.current); t.click(); setTimeout(function(){ if (yt6.player1.media.src == 'https://www.youtube.com/ptracking') t.click() },300); //ev_log('ld0')
						}
						if (yt6.player1.media.loaded) { yt6.player1.isLoaded = true; }//yt6.player1.media.timer = 0; } //yt6.player1.media.play() }
					      } catch(e){ z.click(); yt6.player1.isLoaded = true }
					    } else yt6.player1.load()

					  } else if (!yt6.player1.isLoaded && yt6.player1.media.loaded && yt6.player1.media.currentTime) { yt6.player1.isLoaded = true }//; yt6.player1.play() }

					    setTimeout(function(){ 
						if (yt6.sync_timer % 15 == 0) yt6.sync_timer = (!yt6.player1.media.loaded) ? 2 : 0; //if (yt6.browser_tab == 'hidden' && 2 >= yt6.autoplay_trigger) { ev_log('+1'); autoplay_trigger(t, clone(yt6.current)) } //else yt6.autoplay_trigger--
					    }, 700)

					} else { yt6.player1.load() }
				      } //else if (yt6.browser_tab == 'visible' && yt6.player1.media.loaded && yt6.player1.media.paused) { yt6.player1.play() }

				      //ev_log(yt6.autoplay_trigger+'/'+((yt6.player1.isLoaded) ? '1' : '0') + ((yt6.player1.media.loaded) ? '1' : '0') +'/'+yt6.sync_timer)

				      if (!yt6.player1.isLoaded && yt6.player1.media.loaded && yt6.player1.media.currentTime) { yt6.player1.isLoaded = true; }
				      //timeout002 = false
				    },700); timeout002 = true
				  } catch(e){ yt6.player1.play() }
				  } else { //yt6.player1.media.timer = 0; //if (yt6.player1.media.paused) { yt6.player1.play() } else yt6.player1.pause()
				    }
				  if (yt6.autoplay_trigger == 1 || yt6.autoplay_trigger == 2) yt6.player1.play()
				  //timeout001 = false
				},700); timeout001 = true
			      } else {
				  if (yt6.sync_timer > 3 && yt6.sync_timer % 2 == 1) {
				    if ((!yt6.player1.media.loaded || (yt6.player1.media.loaded && !yt6.player1.media.paused)) && !yt6.player1.media.currentTime) { //ev_log('pt1')
				      yt6.player1.setSrc("https://www.youtube.com/ptracking"); yt6.player1.load()
				    }
				    try {
				      if (gid(mep + '_sourcechooser_' + yt6.current)) t = gid(mep + '_sourcechooser_' + yt6.current); t.click(); //ev_log('ld1')
				    } catch(e){ z.click() }
				  }
				}
			    }; //ev_log(yt6.sync_timer)
			    yt6.sync_timer++
			    if (yt6.player1.isLoaded && yt6.player1.media.loaded && yt6.player1.media.paused) yt6.player1.play()
			  },
			function(){ yt6.autoplay_trigger--
			  $waitUntil(function(){ //ev_log('Go');
				if (yt6.player1.media.loaded) { //ev_log('Go'+((yt6.player1.media.loaded) ? '1' : '0'));
				  yt6.player1.isLoaded = true; yt6.player1.media.play(); return true
				} else yt6.player1.isLoaded = false
			    },
			  function(){
				if (!yt6.player1.media.paused && !yt6.player1.media.currentTime) { //ev_log('Go2'+((yt6.player1.media.loaded) ? '1' : '0'));
				  yt6.player1.play() };
				if (!yt6.player1.media.currentTime) { //ev_log('Go? '+yt6.autoplay); 
				  yt6.player1.play() }
			  },250,2500)

			}, step, threshold)

		      }; if (0 >= yt6.autoplay_trigger)
			 autoplay_trigger(z, itagx)


		    } else gid('player1').play()
		  } catch(e){}; //ev_log('autoplay trigger')
		}
		if ((yt6.fmts_fallback.V[yt6.prefer_fmt].indexOf(1*itagx) == -1 || z.parentNode.parentNode.children.length < 3) && yt6.userprefV.length > 2) { no_default(itagx, 'V') }


	      } else if (yt6.linx[itagx]) {
		  z.setAttribute('checked','checked'); z.checked = 'true'
		  yt6.player1.setSrc(yt6.linx[itagx])
		  if (itagx < 103) try {
		    if ((1 * itagx != 1 * yt6.userprefV[i] || yt6.fmts_fallback.V[yt6.prefer_fmt].indexOf(1*itagx) == -1 || z.parentNode.parentNode.children.length < 3) && yt6.userprefV.length > 2) { no_default(itagx, 'V') }
		    z.click()
		  } catch(e){ try { yt6.player1.media.load() } catch(e){} }
		  var z = gc('mejs-time-loaded')[0]
		  if (z) z.style.width = '0px'
		}
	      find = false; break

	    //}
	    }
	  }//for j

	  if (!find) break
	  i = ii
	}//for i

	if (find == true) set_controls()

	var found = !find
	// do not change the default format automatically just because it was not found for the current video
	if (!found) for(i=0;i<yt6.userprefV.length;i++){
	  if (yt6.userprefV[i] == itagx ) { found = true; break } else {
	    for (j=0;j<yt6.fmts_fallback.V.length;j++) { if (yt6.fmts_fallback.V[j] == itagx) { found = true; no_default(itagx, 'V'); break } }
	  }
	}



	if (yt6.prefer_fmt == 'all') {
	  var x = 'all'
	} else var x = (yt6.prefer_fmt == 'dash') ? 'aac' : 'webm'

	  for(i=0;i<yt6.userprefA.length;i++){
	    for(j=0;j<yt6.fmts_fallback.A[x].length;j++){
	      var z = gid(mep + '_sourcechooser_' + yt6.userprefA[i])
	      if ( (yt6.fmts_fallback.A[x][j] == parseInt(yt6.userprefA[i]) && sotf(yt6.fmts_fallback.A[x][j]) && (z)) && !(yt6.prefer_fmt !== 'all' && !gid(mep + '_sourcechooser_' + yt6.fmts_fallback.A[x][j]) ) ) {
		var Aindex = j
		var Afmt_pool = yt6.fmts_fallback.A[x]
		break
	      }
	    }
	    if (Aindex == j && Afmt_pool) break
	  }


	  if (!Afmt_pool) {
	    var alt_pool = (yt6.prefer_fmt == 'webm') ? 'aac' : 'webm'
	    for(i=0;i<yt6.userprefA.length;i++){
	      for(j=0;j<yt6.fmts_fallback.A[alt_pool].length;j++){
		if (yt6.fmts_fallback.A[alt_pool][j] == parseInt(yt6.userprefA[i]) && sotf(yt6.fmts_fallback.A[alt_pool][j]) && gid(mep + '_sourcechooser_' + yt6.fmts_fallback.A[alt_pool][j]) ) {
		  var Aindex = (alt_pool == 'aac') ? j : j
		  var Afmt_pool = yt6.fmts_fallback.A[alt_pool]
		  break
		}
	      }
	      if (Aindex == j && Afmt_pool) break
	    }
	  }

	  if (!Afmt_pool) {
	    var alt_pool = 'all'//(yt6.prefer_fmt == 'webm') ? 'aac' : 'webm'
	    for(i=0;i<yt6.userprefA.length;i++){
	      for(j=0;j<yt6.fmts_fallback.A[alt_pool].length;j++) if (sotf(yt6.fmts_fallback.A[alt_pool][j])) {
		var z = gid(mep + '_sourcechooser_' + yt6.fmts_fallback.A[alt_pool][j])
		if (z) {
		  var Aindex = (alt_pool == 'aac') ? j : j
		  var Afmt_pool = yt6.fmts_fallback.A['all']
		  break
		}
	      }
	      if (Aindex == j && Afmt_pool) break
	    }
	  }

	  //var z = null

	if (!yt6.audiox) {
	if (Aindex == j && Afmt_pool) {

	  find = true
	  for(i=0;i<yt6.userprefA.length;i++){
	    for(j=Aindex;j<Afmt_pool.length;j++){
	      var z = gid(mep + '_sourcechooser_' + Afmt_pool[j])
	      if (z && find == true
		    && ( j == Aindex || i == yt6.userprefA.length-1 || parseInt(yt6.userprefA[i]) == parseInt(Afmt_pool[j]) )
		    && parseInt(yt6.userprefA[i]) == parseInt(Afmt_pool[j])
		 ) {
		  var itagx = Afmt_pool[j]
		var z = getElementsByAttribute(document,'input','name',mep + '_sourcechooser')

		for(k=0;k<z.length;k++){
		  if (z[k] && z[k].nextSibling) {
		    z[k].nextSibling.setAttribute('style','')
		    z[k].nextSibling.removeAttribute('style')
		  }
		}
		var z = gid(mep + '_sourcechooser_' + itagx)
		if (z && z.nextSibling) z.nextSibling.setAttribute('style','text-decoration: underline')

		yt6.audio = (!yt6.age.audio) ? yt6.linx[itagx] : clone(yt6.age.audio)
		if (yt6.audio && yt6.player2 && typeof yt6.player2.load == 'function') {
		  yt6.player2.setSrc(yt6.linx[itagx])
		  yt6.player2.load()
		  if (z && z.parentNode.parentNode.children.length < 3 && yt6.userprefA.length > 2) { no_default(itagx, 'A'); }
		  find = false
		  if (!found) {
		    z.setAttribute('checked','checked'); z.checked = 'true'
		    yt6.player1.setSrc(yt6.linx[itagx])
		    no_default(itagx, 'A')
		    no_default(itagx, 'V')
		  }
		}
		if ((1 * itagx != 1 * yt6.userprefA[0] || (z && z.parentNode.parentNode.children.length < 3)) && yt6.userprefA.length > 2) { no_default(itagx, 'A') }
		break
	      } else {}
	    }
	    if (!find) break
	  }
	  if (gid('no2') && !find && yt6.linx[itagx]) gid('no2').src = yt6.linx[itagx]

	} } else yt6.player2.media.pause()


      }//find_the_source

      yt6.loaded = 5; window['status'] = yt6.loaded
      yt6.mep = 'running'

      yt6.newvideo = true


      if ( (yt6.p && yt6.p.tagName == 'IFRAME' && !yt6.blocked) || yt6.ytp.strState == 4) {
	yt6.age.dl = null; yt6.age.sc = null; yt6.age.audio = null
	if (sc && sc.firstChild && sc.firstChild.lastChild && sc.firstChild.lastChild != sc.firstChild.firstChild) sc.firstChild.removeChild(sc.firstChild.firstChild)
	if (yt6.ytp.strState == 4) yt6.ytp.strState = 2
      }

		if (yt6.age.dl) { //write the previous age-blocked video's links back to the download- & sourcechooser-box
		  var z = gid('alt-links'); if (z) z.appendChild(yt6.age.dl)
		  yt6.newin = null; yt6.age.blocked = true; if (p && p.style.display == 'block') p.style.display = 'none'
		}
		if (yt6.age.sc) {
		  if (sc) sc.insertBefore(yt6.age.sc, sc.firstChild)
		  yt6.newin = null; yt6.age.blocked = true; if (p && p.style.display == 'block') p.style.display = 'none'
		}

      if (!yt6.age.sc && !yt6.age.dl) {

	find_the_source()

      } else { if (!yt6.age.blocked) { yt6.age.sc = null; yt6.age.dl = null; yt6.age.audio = null }
	  if (sc) for(i=0;i<sc.firstChild.children.length;i++){
	    var z = sc.firstChild.children[i]; if (z && z.hasAttribute('checked')) z.click()
	    if ((!yt6.ytm && yt6.pls && yt6.autoplay) || autoplay())
		$waitUntil(function(){ if (yt6.player1 && yt6.player1.media && yt6.player1.media.paused) return true },function(){ setTimeout(function(){ try { if (yt6.player1.media.paused) gc("mejs-button mejs-playpause-button")[0].click() } catch(e){ yt6.player1.play() } },700) },800,5000)
	    try { gid('movie_player_orig').stopVideo() } catch(e){}
	  }
	}

      if (yt6.layout == 16 && !yt6.ytm && !yt6.mobile && !yt6.ytg && yt6.pls && yt6.newin && (yt6.age.blocked || yt6.age.count)) {
		//open_outside_of_playlist()
		//yt6.age.blocked = true//(yt6.p && yt6.p.tagName == 'IFRAME') ? false : true
	var z = gid('yt6-links')
	if (z && z.lastChild && !yt6.age.dl) yt6.age.dl = z.cloneNode(true)
	var z = gc('mejs-sourcechooser-selector')[0]
	if (z && z.firstChild && z.firstChild.lastChild && !yt6.age.sc) yt6.age.sc = z.firstChild.cloneNode(true)
	yt6.age.audio = clone(yt6.audio)
      }

      //if (yt6.p && yt6.p.tagName == 'IFRAME' && !yt6.age.blocked) { yt6.age.blocked = true }

      if ( (typeof yt6.player1 == 'undefined' || (typeof yt6.player1 != 'undefined' && typeof yt6.player1.play != 'function'))
	   || (!yt6.x && yt6.flash.forced && player() && yt6.p.tagName == 'EMBED' && typeof yt6.p.getPlayerState == 'function' )
	 ) { yt6.navigation = false }

      wallpaper()


      if (yt6.layout == 16 && yt6.newin && yt6.pls && !(yt6.p && typeof yt6.p.getPlayerState == 'function' && yt6.p.getPlayerState() > -1) ) {
	if (yt6.p.tagName != 'IFRAME') {
	  //ajax1(true);
	  //try { yt6.newin = window.open(protocol() + '//www.youtube.com/watch?v=' + video_id()[0]).blur() } catch(e) { return void 0 };
	  //onDownload(JSON.stringify(ytplayer.config));
	  //window.focus()
	}
      } //else yt6.newin = null


	var z = gc('me-cannotplay')[0]
	if (z) {
	  z.style.display = 'none'
	  z.nextSibling.style.display = 'inline-block'
	  set_controls(); autoplay(true)
	  if (yt6.x) {
	    $waitUntil(function(){ var z = set_controls()[1]; if (z && typeof z.playMedia == 'function') return true; },
		  function(){ try { var z = set_controls()[1]; if (z && autoplay(false)) { z.playMedia(); z.parentNode.paused = false } } catch(e){} },
		  500,4000)
	  }
	}

      if (yt6.mobile && yt6.layout == 16 && !yt6.api) yt6.api = gid('player-container-id').firstElementChild


      var bm0 = gid('bm0')
      if (bm0) {
	if (!(yt6.layout == 12 && (yt6d.init || yt6.status == 'error' || (yt6.xhr.async && !yt6.xhr.completed && yt6.blocked)) ) ) {
	  unhide(bm0) //unhide-1
	} else {
	    if (yt6.status != 'error' && yt6.x) {
	      $waitUntil(function(){ if (yt6.p && !(yt6.ytm && yt6.p.tagName == 'EMBED') && typeof yt6.p.getVideoUrl == 'function') { if (yt6.p.getVideoUrl().indexOf(yt6.vid) > -1) { return true }} }, function(){ unhide(gid('bm0')); setTimeout(function(){ unhide(gid('bm0')) }, 1000) }, 500, 7000)
	    }
	  }
      }
      if (yt6.flash.forced) {
	if (!gc('forced flashplayer')[0] && yt6.p.parentNode != yt6.api) {
	  var fmp = forceFlashplayerObject(), p0 = getElementsByAttribute(yt6,'div','id','movie_player0')
	  if (fmp) {
	    yt6.api.insertBefore(fmp, yt6.api.firstChild || yt6.api.firstElementChild)
	    fmp.setAttribute('name','movie_player1')
	    fmp.style.display = ''; p = player()
	  }
	  if (p0 && p0[1]) { p0[1].parentNode.removeChild(p0[0]) }
	}
      } else {// remove the unused initial flash object
	var z = gid('movie_player_to_dispose').getElementsByTagName('embed')[0] || gid('movie_player_to_dispose').getElementsByTagName('object')[0]
	if (z && z != yt6.p) z.parentNode.removeChild(z)
	if (yt6.layout == 12 && player() && yt6.p.tagName == 'IFRAME') {
	}
      }

      if (player() && yt6.p != yt6.api.firstChild) { yt6.api.insertBefore(yt6.p, yt6.api.firstChild) }

      if (yt6.ytm && yt6.blocked && yt6.p && yt6.p.tagName == 'IFRAME') {
	var z = gc('play-pause-button style-scope ytmusic-player-bar')[0]
	if (!yt6.x) {
	  var z = gid('song-image'); if (z) z.style.display = 'none'
	  var z = gid('song-video'); if (z) z.style.display = 'block'
	}
      }


      var g = gid('getjs'); if (g) g.parentNode.removeChild(g)


      } catch(e) { yt6.navigation = false }

      if (yt6d.ad) { delete yt6d.ad; }

      aspect(yt6.size)

      yt6d.loaded = Math.max(yt6.loaded, 5)


    }//preload


    //yt6.navigation = false


    if (me_flash_) {
      $waitUntil(
	function(){ if (bp()) return true },
	function(){ preload() },
	500, 60000)
    } else {
	preload()
      }

}//yt6d.mep_renew



// YouTube fires a function called "onYouTubeIframeAPIReady" automatically when embedded players are ready to use.
// Put an activator of our own embedded player inside of this function with that specific name here:
function onYouTubeIframeAPIReady() {
  if (yt6.embed && typeof yt6.embed.active == 'function') 
	yt6.embed.active()
}
// Back in the flash-days, the function name used to be:
// onYouTubePlayerAPIReady() { }



		function scrollToCurrentVideo() {

			if (typeof yt6.pl_index != 'number') return void 0
			if (yt6.mobile && yt6.pls) {
			  var z = gc('playlist-panel-header-icon')[0]
			  if (z) { z = z.getElementsByClassName('c3-material-button-button')[0]
			    if (z && z.getAttribute('aria-expanded') == 'false') return void 0
			  }
			}
			var debug = false;
			//let index = window.ytInitialData.contents.twoColumnWatchNextResults.playlist.playlist.currentIndex;

			var y = document.getElementsByTagName('ytm-playlist-panel-header')[0]
			if (y) { y.style.position = 'fixed'; y.style.width = '100%' }
			var height, height = (yt6.p && yt6.p.offsetHeight) ? yt6.p.offsetHeight : 0
			var z = document.getElementsByTagName('ytm-playlist-controls')[0]
			if (z) { z.style.position = 'fixed'; z.style.right = '0px'; z.style.top = y.getBoundingClientRect().bottom + 'px'; z.style.zIndex = 1 }

			var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)

			var pl_item = document.getElementsByTagName('ytm-playlist-panel-video-renderer')[0]
			yt6.pl_index_m = (pl_item) ? (yt6.pl_index - Math.ceil(windowheight / pl_item.offsetHeight) + 2 + Math.ceil(height / pl_item.offsetHeight)) : 0
			  //window.ytInitialData.currentVideoEndpoint.watchEndpoint.index;

			if (pl_item && typeof yt6.pl_index_m == 'number' && yt6.pl_index_m > 0) {
			  // var top = window.ytInitialData.contents.twoColumnWatchNextResults.playlist.playlist.contents[0].playlistPanelVideoRenderer.navigationEndpoint.watchEndpoint.index;
			  try { yt6.pls_top = 1 * pl_item.firstChild.firstChild.href.split('&index=')[1] } catch(e){}
			  var height = pl_item.offsetHeight //79//document.querySelector('#items.playlist-items [thumbnailwidth]').scrollHeight;
			  var list = gc('playlist-content section')[0]
			  if (list) { 
			    list = list.firstChild //document.querySelector('#items.playlist-items');
			    if (list) $waitUntil(
				function(){ if (gc('compact-media-item-headline')[yt6.pl_index_m - yt6.pls_top]) return true },
				function(){
				  var z = (screen.height >= screen.width) ? gc('compact-media-item-headline')[yt6.pl_index_m - yt6.pls_top] : document.getElementsByTagName('ytm-app')[0], y = gid('player-container-id')
				  if (y) y.className = (z == yt6.p) ? 'player-container' : 'player-container sticky-player'
				  try { z.scrollIntoView(true) } catch(e){}
				},700,4900)
				//list.getElementsByTagName('ytm-playlist-panel-video-renderer')
				if (debug) console.log('Index: ' + index +
				'\nTop: ' + top +
				'\nHeight: ' + height +
				'\nDistance: ' + (yt6.pl_index_m - top) +
				'\nPixels: ' + (height * (index - top)) +
				'\nList: ' + list.tagName) +' '+ CustomEvent;
				if (list) list.scrollTop = height * (yt6.pl_index_m - top)
				//set_controls()
			  }
			} else return void 0

		}




function pl_item() {

  yt6.vid = video_id()[0]
  yt6.pl_next = null; delete yt6.pl_next; yt6.pl_previous = null; delete yt6.pl_previous; yt6.pl_set = null; delete yt6.pl_set
  var offset, index, c = conf('args')

  var z = gid('playlist') || gid('queue') || document.getElementsByTagName('ytg-playlist-panel-renderer')[0]
  if (yt6.layout == 16 && yt6.pls && z && z.id == 'playlist' && typeof z.className == 'string' && z.className.indexOf('ytd-watch') == -1) z = document.getElementsByTagName(yt6.pls.tagName)[1]

    if ((z && z.style.display != 'none' && !z.hasAttribute('hidden')) || (z && yt6.ytg) || yt6.mobile) {
      if (!yt6.ytm) {
	if (!yt6.mobile) {
	  var z = document.getElementsByTagName('YTD-PLAYLIST-PANEL-SUPPORTED-ITEMS')
	  if (!z[0]) z = document.getElementsByTagName('YTD-PLAYLIST-PANEL-VIDEO-RENDERER')
	} else {
	    var z = document.getElementsByTagName('ytm-playlist-panel-video-renderer')
	  }
      } else { var z = z.getElementsByTagName('ytmusic-player-queue-item') }

      if (z && z[0]) {
	var mix = gclass('flex style-scope ytd-playlist-panel-renderer x-scope ytd-menu-renderer-0');
	for(i=0;i<z.length;i++) {
	  if (z[i]) {
	    if (!yt6.ytm) {
	    var zi = z[i].getElementsByTagName('A')[0]
	    if (zi && zi.getAttribute('href') != null) {
	      var x = vID(zi.getAttribute('href')).split('&')[0]
	      if (!yt6.ytm && !yt6.ytg) {
		index = (zi.getAttribute('href').split('&index=')[1]) ? 1 * zi.getAttribute('href').split('&index=')[1].split('&')[0] - 1 : 0
		if (i == 0 && yt6.layout == 16) {
		  yt6.pl_set = index
		}
	      }
	      if (zi.innerHTML.indexOf('/watch?v=' + yt6.vid) != -1 || (mix[0] && mix[0].hasAttribute('hidden') || zi.parentNode.hasAttribute('selected')) && c[1] && c[1].video_id == x || yt6.vid == x ) {
		var y = (!yt6.ytg) ? (index + 1) : zi.innerHTML.split('<span class="style-scope ytg-formatted-string">')[1].split('</span>')[0]

		if (!yt6.ytg) {
		  var offset = z[i].getAttribute('style')
		  if (offset) offset = offset.split(', ')[1]
		  if (offset) {
		    offset = 1 * offset.split('px')[0]
		    if (isNaN(offset)) offset = null
		  } else offset = null
		} else {
		    offset = i
		    var yp = zi.innerHTML.split('<span class="style-scope ytg-formatted-string">')[1].split('</span>')[0]
		    if (typeof yp != 'number') yp = 1 * yp - 0
		  }

		if (typeof y == 'number') { yt6.pl_index = y - 1 } else { if (y == '▶' && typeof yp == 'number') { yt6.pl_index = yp } }
		break

	      } else {
		  if (yt6.ytg) {
		    var yp = zi.innerHTML.split('<span class="style-scope ytg-formatted-string">')[1].split('</span>')[0]
		    if (typeof yp != 'number') yp = 1 * yp - 0
		  }
		  if (typeof y != 'number' && typeof yt6d.playlist.current == 'number') { y = yt6d.playlist.current }
		}
	    }

	    } else if (z[i].hasAttribute('selected')) {
		yt6.pl_index = i
		for(k=i-1;k<i+2;k++){
		var y = (z[k]) ? z[k].getElementsByClassName('left-items style-scope ytmusic-player-queue-item')[0] : null
		if (y) {
		  y = y.getElementsByTagName('ytmusic-item-thumbnail-overlay-renderer')[0]
		  if (y) {
		    y = y.querySelector('#content')
		    if (y) {
		      y = y.querySelector('#play-button')
		      if (k == i-1) yt6.pl_previous = (y && k>0) ? y : null
		      if (k == i) yt6.pl_current = (y) ? y : null
		      if (k == i+1) yt6.pl_next = (y) ? y : null
		    }
		  }
		}
		}
	    }
	  }
	}

        if (!yt6.ytm && typeof y == 'number') {

	  index = y
	  var yr = new RegExp('&index=' + (y + 1));//[^0-9]
	  var yr2 = new RegExp('&index=' + (y + 2))
	  for(i=0;i<z.length;i++) {
	    var zi = z[i].getElementsByTagName('A')[0]
	    if (zi && zi.getAttribute('href') != null && zi.getAttribute('href').match(yr) != null) {
		yt6.pl_next = zi
		var img = zi.getElementsByTagName('img')[0]
		yt6.pl_next_blocked = (img && typeof img.src == 'string' && img.src.indexOf('//s.ytimg.com/yts/img/meh_mini-vfl0Ugnu3.png') > -1) ? true : false
	    }
	    if (zi && zi.getAttribute('href') != null && zi.getAttribute('href').match(yr2) != null) {
		yt6.pl_nnext = zi
		break
	    }
	  };
	  for(i=0;i<z.length;i++) {
	    var zi = z[i].getElementsByTagName('A')[0]
	    if (yt6d.playlist.list && location.href.indexOf(yt6d.playlist.list) > -1) { //console.log(i  +' '+ zi.getAttribute('href').split('&index=')[1].split('&')[0] +' '+ zi.getAttribute('href'))
	      if (!isNaN((1 * zi.getAttribute('href').split('&index=')[1])) ) { 
		yt6d.playlist.current = y
		index = zi.getAttribute('href').split('&index=')[1].split('&')[0]
		if (typeof yt6d.playlist.items[index] !== 'object') yt6d.playlist.items[index] = {}
		if (!yt6d.playlist.items[index].href) yt6d.playlist.items[index].href = zi.getAttribute('href')
		if (!yt6d.playlist.items[index].link) yt6d.playlist.items[index].link = zi
		if (!yt6d.playlist.items[index].blocked) {
		  var img = zi.getElementsByTagName('img')[0]
		  yt6d.playlist.items[index].blocked = (img && typeof img.src == 'string' && img.src.indexOf('//s.ytimg.com/yts/img/meh_mini-vfl0Ugnu3.png') > -1) ? true : false
		}
	      }
	    } else yt6d.playlist.items = []
	  }
	  if (yt6d.playlist.items[(y+1)]) { var l = yt6d.playlist.items
	    for(i=(y+1);i<l.length;i++) {
	      var li = l[i].link
	      if (li && typeof li.getElementsByTagName == 'function') {
		var img = li.getElementsByTagName('img')[0]
		var pl_next_blocked = (yt6d.playlist.items[i].blocked || (img && typeof img.src == 'string' && img.src.indexOf('//s.ytimg.com/yts/img/meh_mini-vfl0Ugnu3.png')) > -1) ? true : false
		if (!pl_next_blocked) { yt6d.playlist.next = i; break } else { yt6d.playlist.next = null; if (i == (y+1)) yt6.pl_next_blocked = true }
	      }
	    }
	  }
	  if (!(yt6.pl_previous && yt6.pl_previous.getAttribute('href').indexOf('&index=' + (y-2)) != -1)) {
	    var yr = new RegExp('&index=' + (y-1));//[^0-9]
	    for(i=0;i<z.length;i++) {
	      var yi = z[i].getElementsByTagName('A')[0]
	      if (yi && yi.getAttribute('href') != null && yi.getAttribute('href').match(yr) != null ) {
		yt6.pl_previous = yi
		var img = yi.getElementsByTagName('img')[0]
		yt6.pl_previous_blocked = (img && typeof img.src == 'string' && img.src.indexOf('//s.ytimg.com/yts/img/meh_mini-vfl0Ugnu3.png') > -1) ? true : false
		break
	      }
	    };
	  }

	} else if (yt6.ytg && z[i+1]) {
	    var yi = z[i+1].getElementsByTagName('A')[0]
	    if (yi && yi.getAttribute('href') != null) {
		var x = vID(yi.getAttribute('href')).split('&')[0];
		var y = yi.innerHTML.split('<span class="style-scope ytg-formatted-string">')[1].split('</span>')[0]
		if (typeof y != 'number') y = 1 * y - 0
		yt6.pl_index = y - 2; yt6.pl_next = yi; if (i != 0) yt6.pl_previous = z[i-1].getElementsByTagName('A')
	    }
	  }
      }
    }

  if (offset) {
    var playlist_scroller = (!yt6.ytg) ? gclass('playlist-items')[0] : document.getElementsByTagName('ytg-scroll-pane')[1]// yt-scrollbar-dark style-scope ytd-playlist-panel-renderer
    if (yt6.layout == 16 && !yt6.ytg && playlist_scroller.nextSibling && playlist_scroller.nextSibling.tagName == 'IRON-LIST' && playlist_scroller.nextSibling.id == 'items') {
      var playlist_scroller = yt6.playlist_scroller = playlist_scroller.nextSibling
    }
    if (playlist_scroller) playlist_scroller.scrollTop = offset
  }

}



function fix_playlist() {


  var p = player(), p = yt6.p

  if (!yt6.ytp.embed) {
     if (!yt6.mobile) {
       var playlist = (yt6.layout == 16) ? gid('playlist') || gid('queue') : gid('watch-appbar-playlist') || document.getElementsByTagName('ytg-playlist-panel-renderer')[0]
     } else var playlist = gc('playlist-content section')[0] //|| document.getElementsByTagName('ytd-live-chat-frame')[0] || gid('chat')
  if (yt6.layout == 16 && playlist && playlist && playlist.id == 'playlist' && typeof playlist.className == 'string' && playlist.className.indexOf('ytd-watch') == -1) playlist = document.getElementsByTagName(playlist.tagName)[1]
  if (yt6.layout == 16 && playlist && ((!playlist.lastChild || !playlist.firstElementChild) || playlist.hasAttribute('hidden')) ) playlist = null


  if (playlist && (typeof playlist.id == 'string')) { // we're on a playlist

  if (playlist.id.indexOf('watch') == -1) { // new layout playlist
  
    var playlist_scroller = yt6.playlist_scroller = (!yt6.mobile) ? gc('playlist-items')[1] || gc('playlist-items')[0] : playlist.parentNode.parentNode.parentNode // yt-scrollbar-dark style-scope ytd-playlist-panel-renderer //(!yt6.ytg) ? : document.getElementsByTagName('ytg-scroll-pane')[1] //has-scroller; // x-scope iron-list-0')[0]

    if (yt6.ytm) playlist_scroller = yt6.playlist_scroller = playlist


    if (typeof playlist_scroller != 'undefined') {


      function playlist_videoitems() {

	if (!yt6.ytm) {
	  var z = (!yt6.ytg) ? gc('style-scope ytd-playlist-panel-renderer') : gc('style-scope ytg-playlist-panel-renderer x-scope ytg-playlist-panel-video-renderer-0')
	} else var z = document.getElementsByTagName('ytmusic-player-queue-item')
	return z
      }


      if (!yt6.ytm) {
	if (!yt6.ytg) {
	  yt6.pl_index = location.href.split('&index=')[1]
	  yt6.pl_index = (yt6.pl_index) ? yt6.pl_index.split('&')[0] - 1 : null
	  var z = gid('publisher-container')
	  if (z) {
	    z = z.lastChild
	    if (z) { z = z.getElementsByClassName('index-message')[0] || z.getElementsByTagName('yt-formatted-string')[0]
	      if (z) {
		if (z.tagName == 'SPAN') {
		  if (!yt6.pl_index) yt6.pl_index = 1 * z[yt6.txt].split(',').join('').split('/')[0] - 1
		  yt6.pl_length = 1 * z[yt6.txt].split(',').join('').split('/')[1] - 1
	        } else {
		    if (!yt6.pl_index) yt6.pl_index = 1 * z.firstChild[yt6.txt] - 1
		    yt6.pl_length = 1 * z.lastChild[yt6.txt].split(',').join('').split('/')[1] - 1
		  }
	      }
	    }
	  }
	} else {
	    var z = gid('count')
	    yt6.pl_index = (z && z[yt6.txt]) ? z[yt6.txt].split('/')[0] - 0 + 1 : null
	    yt6.pl_length = (z && z[yt6.txt]) ? 1 * z[yt6.txt].split('/')[1] - 0 : null
	  }
      }


      if (!yt6.pl_index && p && typeof p.getPlaylistIndex == 'function') {
	yt6.pl_index = p.getPlaylistIndex()
	yt6.pl_i = JSON.parse(JSON.stringify(p.getPlaylistIndex()))
	if (yt6.pl_index == 0) playlist_scroller.scrollTop == (!yt6.ytg) ? 64 : 72.2
      }


      if (typeof yt6.pl_index == 'number') {

	if (yt6.mobile) {
		if (!(!yt6.x && yt6.p && typeof yt6.p.getPlayerState == 'function' && yt6.p.getPlayerState() != 2))
		scrollToCurrentVideo(); set_controls()
		return void 0
	}

	if (yt6.ytg || yt6.ytm) {
	  if (yt6.ytg) {
	    var y = playlist_videoitems()[0].firstElementChild.innerHTML.split('</span></ytg-formatted-string>')[0].split('<span class="style-scope ytg-formatted-string">')[1]
	    playlist_scroller.scrollTop = 72.2 * (yt6.pl_index - y)
	    document.getElementsByTagName('ytg-scroll-pane')[0].scrollTop = 0
	  }
	  if (yt6.ytm) {
	    pl_item()
	    playlist_scroller.scrollTop = 57 * yt6.pl_index
	  }
	} else { //ytd


	    pl_item()

	    var z = (yt6.pl_next) ? yt6.pl_next.getAttribute('href') : null

	    if (!(typeof yt6.pl_index == 'number' && z && z.indexOf('&index=') != -1 && 1 * z.split('&index=')[1].split('&')[0] == yt6.pl_index - 1 + 1)) {
	    //the following waitUntil function are only run if the next video can't be seen in the playlist window
	    $waitUntil(function() {
		if (yt6 && yt6.playlist_scroller) {
		  var x = yt6.playlist_scroller.getElementsByTagName('ytd-playlist-panel-video-renderer')
		  if (x && x[0]) {
		    var start, end
		    start = x[0].querySelector('#index').innerHTML * 1;
		    end = x[ (x.length || 0)-1].querySelector('#index').innerHTML * 1;
		    if (typeof start == 'number' && typeof end == 'number' && (yt6.playlist_scroller.scrollTop != yt6.scrollT || yt6.playlist_scroller.scrollTop == 0)) { return true }
		  }
		}
	    },
	    function() {
	      var x = yt6.playlist_scroller.getElementsByTagName('ytd-playlist-panel-video-renderer')
	      var start, end, elementHeight
	      if (x && x[0]) try {
		elementHeight = clone(x.offsetHeight + 0)// - 1.9
		start = x[0].querySelector('#index').innerHTML * 1; if (isNaN(start)) start = 1
		end = x[ (x.length)-1].querySelector('#index').innerHTML * 1; if (isNaN(end)) end = (start + 221)
	      } catch(e) { start = 1; end = 1 }

		yt6.scrollT = playlist_videoitems()[0]
		var offset = (yt6.pl_index - start)

		elementHeight = yt6.playlist_scroller.scrollHeight / (end - start); offset = offset - 1.5

		yt6.playlist_scroller.scrollTop = elementHeight * offset

	    },200,1600)


	    }//if wait

	  }// ytd

      } else {
	    $waitUntil(function() { if (player() && typeof yt6.p.getPlaylistIndex == 'function') return true },
	      function() {
	        yt6.playlist_scroller.scrollTop = 64 * yt6.p.getPlaylistIndex()
	      },300,3000
	    )

	}

      yt6.scrollT = JSON.parse(JSON.stringify(playlist_scroller.scrollTop))

    }

  } else { // old layout playlist

      var playlist_scroller = gid('playlist-autoscroll-list')
      yt6.scrollT = (playlist_scroller) ? playlist_scroller.getElementsByClassName('yt-uix-scroller-scroll-unit')[0] : null //gclass('yt-uix-scroller-scroll-unit')[0]
      if (yt6.scrollT) {
	yt6.scrollT = yt6.scrollT.getAttribute('data-index');
	var z = gclass('currently-playing')//gc('yt-uix-scroller-scroll-unit  currently-playing')
	if (z && z[0]) {
          yt6.pl_index = z[0].getAttribute('data-index');
	  var y = z[0].parentNode.children || z[0].parentNode.childNodes
	  for(i=0;i<y.length;i++){
	    if (y[i] == z[0]) { yt6.pl_next = y[i+1]; break }
	  }
	  playlist_scroller.scrollTop = (!yt6.shuffle) ? 61 * (yt6.pl_index - yt6.scrollT - 2) : 61 * (i)
	  yt6.pl_next = (!yt6.shuffle) ? getElementsByAttribute(z[0].parentNode,'li','data-index', (1 * yt6.pl_index)+1 )[0] : yt6.pl_next//gid('playlist-autoscroll-list').children[1]
	  if (yt6.pl_next) {
	    var a = yt6.pl_next.firstChild.nextSibling
	    if ( a.tagName == 'A') {
	      yt6.pl_next = a
	    } else {
		a = a.nextSibling
		if (a.tagName == 'A') {
		  yt6.pl_next = a
		} else {
		    a = a.nextSibling
		    if (a.tagName == 'A') {
		      yt6.pl_next = a
		    } else yt6.pl_next = null
		  }
	      }
	  }
	  yt6.pl_previous = getElementsByAttribute(z[0].parentNode,'li','data-index', (1 * yt6.pl_index)-1 )[0]
	  if (yt6.pl_previous) {
	    var a = yt6.pl_previous.firstChild.nextSibling
	    if ( a.tagName == 'A') {
	      yt6.pl_previous = a
	    } else {
		a = a.nextSibling
		if (a.tagName == 'A') {
		  yt6.pl_previous = a
		} else {
		    a = a.nextSibling
		    if (a.tagName == 'A') {
		      yt6.pl_previous = a
		    } else yt6.pl_previous = null
		  }
	      }
	  }
        }
      }
    } // old layout

  }

  } else if (typeof p.getPlaylistIndex == 'function') {
	try { yt6.pl_index = p.getPlaylistIndex() } catch(e){}
    }

}



function getScrollbarWidth() {

  var outer = gid('test_poster')
  if (!outer) {
    var outer = document.createElement("div");
    outer.id = 'test_poster'
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    yt6.appendChild(outer);
  }

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

  var inner = gid('scrollbar_width')
  if (outer && !inner) {
    // add innerdiv
    var inner = document.createElement("div");
    inner.id = 'scrollbar_width'
    inner.style.width = "100%";
    outer.appendChild(inner);
  }

    try { var widthWithScroll = inner.offsetWidth; } catch(e) { var widthWithScroll = (widthNoScroll + 16) }

    // remove divs
    //try { outer.parentNode.removeChild(outer) } catch(e){};
    //console.log( widthNoScroll +' '+ widthWithScroll);
    yt6.sb = widthNoScroll - widthWithScroll;
    return widthNoScroll - widthWithScroll;
}



function wallpaper(){

	
  if (typeof $ == 'function') $(function(){

    var wallp = (yt6.layout == 12) ? gid('theater-background') : gid('theater-right')
    var maxWidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb - 1
    var width
    try { width = Math.min((wallp.style.width.replace('px','') || yt6.tbg.style.width.replace('px','')), maxWidth) + 'px'
      if (yt6.tbg && yt6.tbg.parentNode) yt6.tbg.style.width = width
    } catch(e) { width = '100%' }
    var $wallp = (yt6.layout == 12) ? $('#theater-background') : $("#theater-right")
    var size = 200;
    var time = 0;
    var backImage = $wallp.css("background-image"); if (backImage == 'none') backImage = ''
    var backSize = $wallp.css("background-size");
    var backRepeat = $wallp.css("background-repeat");
    var backPosition = $wallp.css("background-position");
    if (!backPosition) return void 0;
    var mep = gid(mep_x('mep_')), bm0 = gid('bm0'), pc = (yt6.layout == 16) ? pcont() : yt6.api, ptc = gid('player-theater-container')
    if (pc) {
      pc.style.backgroundColor = (yt6.wallpaper) ? 'transparent' : ''
      //pc.style.overflow = (yt6.wallpaper && yt6.ytm) ? 'visible' : 'hidden'
    }
    if (ptc) ptc.style.backgroundColor = (yt6.wallpaper) ? 'transparent' : ''
    if (mep) mep.style.backgroundColor = (yt6.wallpaper) ? 'transparent' : ''
    if (bm0) {
      bm0.style.backgroundColor = (yt6.wallpaper) ? 'transparent' : 'rgb(16, 16, 16)'
      bm0.style.overflow = (yt6.wallpaper && (yt6.ytm || yt6.ytp.embed)) ? 'visible' : 'hidden'
    }
    if (yt6.ytp.embed) {
      yt6.api.style.overflow = (yt6.wallpaper) ? 'visible' : ''
    }
    if (player()) {
      yt6.p.style.backgroundColor = (yt6.wallpaper) ? 'transparent' : ''
      yt6.p.style.overflow = (yt6.wallpaper && (yt6.ytm || yt6.ytp.embed)) ? 'visible' : ''
      if (yt6.p.tagName == 'DIV' && yt6.p.firstChild) yt6.p.firstChild.style.backgroundColor = (yt6.wallpaper) ? 'transparent' : ''
    }
    if (yt6.ytm && gid('error-wrapper')) gid('error-wrapper').style.backgroundColor = (yt6.wallpaper) ? 'transparent' : ''
    if (yt6.mobile && yt6.api) yt6.api.style.backgroundColor = (yt6.wallpaper) ? 'transparent' : ''


    if (backPosition.indexOf(',') == -1) {
	var xpos = 0;
	var ypos = 0;
    } else {
	try {
	  var xpos = (1 * backPosition.split(',')[backPosition.split(',').length-1].split('px')[0] + 1 * backSize.split(',')[backSize.split(',').length-1].split('px')[0])
	} catch(e) {}
	try {
	  var ypos = (1 * backPosition.split(',')[backPosition.split(',').length-1].split('px')[1])
	} catch(e) {}
      }

    if ((!yt6.wallpaper) || (yt6.wallpaper == true && backImage && backImage.indexOf(yt6d.wallpaper.split(',')[0]) > -1) || (ypos > parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)) ) {
	wallp.setAttribute('style','position: ' + wallp.style.position + '; background-color: ' + wallp.style.backgroundColor + '; width: ' + width + '; height: ' + wallp.style.height); 
	backImage = '' //$wallp.css("background-image");
	backSize = '200px' //$wallp.css("background-size");
	backRepeat = 'no-repeat' //$wallp.css("background-repeat");
	backPosition = '0px 0px' //$wallp.css("background-position");
	xpos = 0;
	ypos = 0;
	var z = gid('secondary-inner'); if (z) { z.style.position = ''; z.style.marginTop = '' }
    }

    if (!yt6.wallpaper && !yt6.fullscreen && !yt6.newvideo) {

	resize_layers( yt6.w, yt6.h, false ) //slug2

    } else {


    if (yt6.wallpaper == true) {

      var imgA = [], imgs
      var b = [yt6.wsb, yt6.pls, yt6.ytp.embed]
      for (j=0;j<b.length;j++) if (b[j]) {

        if (yt6.layout == 12) {
	  if (!yt6.ytp.embed) {
	    if (b[j] == yt6.pls) imgs = getElementsByAttribute(yt6.pls,'span','class','yt-thumb-clip')
	    var imgs2 = getElementsByAttribute(yt6.wsb,'span','class','yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related')
	    if (imgs2 && imgs2[0]) if (imgs && imgs[0]) { imgs.push.apply( imgs, imgs2 ) } else imgs = imgs2
	  } else imgs = gc('ytp-video-menu-item-thumbnail')
        } else {
	    imgs = (!yt6.mobile) ? document.getElementsByTagName('yt-img-shadow') : gc('video-thumbnail-container-compact center')
	  }

        if (imgs && imgs[0]) {
	  for(i=0;i<imgs.length;i++) {
	    if (!yt6.ytp.embed) {
	      var a = imgs[i].getElementsByTagName('img')[0]
	      if (a && a.tagName == 'IMG' && a.src != '' && a.parentNode && (!yt6.mobile && (a.parentNode.parentNode && a.parentNode.parentNode.parentNode && a.parentNode.parentNode.parentNode.parentNode && a.parentNode.parentNode.parentNode.parentNode.tagName != 'YTD-GUIDE-ENTRY-RENDERER') || (yt6.mobile))  ) {
	        if (a.src.indexOf('yts/img/pixel') != -1) { a.src = a.getAttribute('data-thumb'); a.setAttribute('src', a.src) }
	        imgA.push(a)
	      }
	    } else {
		var b = $(imgs[i]).css("background-image")
		if (b && b.split('url("')[1]) { a = imgs[i]; a.src = b.split('url("')[1].split('"')[0]; imgA.push(a) }
	      }
          }
        }
      }

      for (i=0; i<295; i++) {

	var n = Math.floor(Math.random() * imgA.length)
	if (imgA[n]) { var img = imgA[n] } else continue
	if (backImage.indexOf(img.src) > -1) continue

	var xpos_ = img.naturalWidth; if (!xpos_) xpos_ = 168; if (xpos_ == 1) continue // == 0
	var ypos_ = img.naturalHeight; if (!ypos_) ypos_ = (!yt6.ytp.embed) ? 94 : 126; if (ypos_ == 1) continue // == 0



	var none = (backImage) ? ', ' : ''
	backImage += none + 'url(' + img.src + ')';


	if (backSize == '200px' || backSize == '200px auto') backSize = '200px ' + ypos_ + 'px';
	backSize += ', ' + String(xpos_) + 'px ' + String(ypos_) + 'px';
	var backPos = ', ' + String(xpos) + 'px ' + String(ypos) +'px';
	xpos = xpos + 1 * xpos_ ;//size;
	if (xpos > maxWidth) {
	  if (time===0){
	    xpos = 0;
	    time = 1;
	  } else {
		xpos = 0;
		time = 0;
	    }
	  ypos = (ypos + ((!yt6.ytp.embed) ? 94 : 126))
	  //if (yt6.layout == 12) backPos = ', ' + String(xpos) + 'px ' + String(ypos) +'px';
	}
	backPosition += backPos;
	backRepeat += ', norepeat';

	if (imgA[n]) imgA.splice(n, 1)

      }

    } // thumbnails wallpaper


    yt6d.wallpaper = yt6d.wallpaper || protocol() + yt6.cdn + '31ec5334c730af96803fb1b3cc677eb0c5e5c0df/extrawide.jpg'


    if (typeof yt6.wallpaper == 'string') {

      if (yt6.wallpaper.indexOf('https://') != 0 && yt6.wallpaper.indexOf('http://') != 0)
        yt6.wallpaper = clone(yt6d.wallpaper)

      var q = yt6.wallpaper.replace(/(\r\n|\n|\r)/gm," ").split(' ').join('').split(','), t = gid('test_poster')
      yt6.wp = {}; yt6.wp.d = []
      q = (q[1]) ? q : [yt6.wallpaper]

      while(t && t.childNodes.length) { t.removeChild(t.childNodes[0]) }

      for(i=0;i<q.length;i++) {

	if (q[i].indexOf('https://') != 0 && q[i].indexOf('http://') != 0) continue;
	backImage = (backImage && backImage.split('url("')[i+1]) ?
	  backImage.replace('url("' + backImage.split('url("')[i+1].split('")')[0] + '")', 'url("' + q[i] + '")') :
	    ((i > 0) ?	backImage + ', ' : '') + 'url(' + q[i] + ')' //: (!q[1]) ? 'url(' + q[i] + ')' : 'url(' + q[i] + '); url(' + q[i+1] + ');'

	if (!t) {
	  var t = document.createElement('div')
	  t.id = 'test_poster'
	  t.style.visibility = "hidden";
	  t.style.width = "100px";
	  t.style.msOverflowStyle = "scrollbar";
	  yt6.appendChild(t)
	}

	t = gid('test_poster')
	if (t) {
	  //t.setAttribute('hidden','')
	  var last_img = getElementsByAttribute(t,'img','id','wp' +i)[0]
	  if (!last_img) {
	    last_img = document.createElement('img')
	    last_img.id = 'wp' + i
	    t.appendChild(last_img)
	  }
	  if (last_img) last_img.src = q[i]
	}

	var b = 0;
	for(j=0;j<i;j++) {
	  a = getElementsByAttribute(t,'img','id','wp' + (j))[0]
	  b = (a && a.naturalWidth) ?
	      b + (a.naturalWidth / (a.naturalHeight / yt6.h.replace('px',''))) : (i * (yt6.h.replace('px','') * yt6.aspect_ratio));
	}



	var backPos = (backPos) ? backPos + ', ' : ''
	backPos = backPos + b + 'px 0px'
	backSize = (backSize) ? backSize : ''
	var backSize1 = ''
	if (!q[1]) { 
	  backSize1 = 'auto 100%'
	} else {
	    for (j=0;j<i+1;j++) {
	      backSize1 = (j<i) ? backSize1 + 'auto 100%, ' : backSize1// + 'auto 100%'
	    }
	  }
	backSize = (backSize.split(',')[i] != ' auto 100%' && (i == q.length-1)) ?
	  backSize1 + backSize.replace(backSize.split(',')[i], '') : backSize.replace(backSize.split(',')[i], ' auto 100%')

	if (yt6.layout == 12 && i == q.length-1 && yt6.tbg) {
	  var b = (last_img && last_img.naturalWidth) ?
	          b + (last_img.naturalWidth / (last_img.naturalHeight / yt6.h.replace('px',''))) : (i * (yt6.h.replace('px','') * yt6.aspect_ratio))
	  if (parseFloat(b) > parseFloat(yt6.tbg.style.width.replace('px','')) ) yt6.tbg.style.width = b + 'px'
	}

      }// for i

      backSize = backSize.split(',,').join(',')
      backPosition = backPos

    } // custom

    $wallp.css("background-image", backImage)
    $wallp.css("background-size", backSize)
    $wallp.css("background-position", backPosition)
    $wallp.css("background-repeat", backRepeat)

    if (yt6.layout == 16 && !yt6.mobile && !yt6.ytm) {
      var ptc = $('#player-theater-container')
      if (ptc) {
	ptc.css("background-image", backImage)
	ptc.css("background-size", backSize)
	ptc.css("background-position", backPosition)
	ptc.css("background-repeat", backRepeat)
      }
    }

    }//yt6.wallpaper


    if (yt6.layout == 16) {
      var z = gid('secondary-inner')
      if (z) {
	z.style.position = (yt6.wallpaper && !yt6.wide) ? 'absolute' : ''
	z.style.marginTop = (yt6.wallpaper && !yt6.wide && (yt6.size != 'default' || !yt6.pls)) ? yt6.h : ''
	z.style.width = (yt6.wallpaper) ? '422px' : ''
	if (!yt6.wide) {
	  if (yt6.pls && yt6.wallpaper && yt6.size != 'default' && typeof yt6.wallpaper != 'string') yt6.pls.style.marginTop = ''
	  if (yt6.wsb && !yt6.pls) {
	    if (!yt6.wallpaper && yt6.size == 'default') { yt6.wsb.style.marginTop = '' } else
	    yt6.wsb.style.marginTop = (yt6.wallpaper) ? '10px' : (1 * yt6.h.replace('px','') + 10) + 'px'
	  }
	  if (yt6.pls) yt6.pls.style.marginTop = (yt6.wallpaper || (!yt6.wallpaper && yt6.size == 'default')) ? '' : yt6.pls.style.marginTop //yt6.h
	}
      }
    }

    // truncate backgorund image to browser window width
    if (wallp && wallp.parentNode && width != '100%') wallp.style.width = maxWidth + 'px'


  });

}



function mute_ad(p) {

	var ads0 = (!yt6.ytm) ? gc('ytp-time-duration')[0] : gc('time-info style-scope ytmusic-player-bar')[0], ads1
	if (ads0) ads0 = ads0[yt6.txt]
	if (ads0 && yt6.ytm) ads0 = ads0.split(' / ')[1]
	if (!ads0) {
	  ads1 = gc('ytp-ad-duration-remaining')[0]
	  ads1 = (ads1) ? ads1.firstChild : null
	  ads1 = (ads1) ? ads1[yt6.txt] : null
	  ads0 = ads1
	}
	if (!ads0 && yt6.loaded_media_duration === 0) ads0 = '0:04'

	var mp = yt6.original || getElementsByAttribute(yt6,'div','name','original')[0]
	if (p && p.tagName != 'DIV') p = mp || p
	//console.log(yt6.ad_ +' '+ yt6.loaded_media_duration +' '+yt6.real_media_duration_ + ' '+p.tagName +' '+ ads0 +' '+ ads1)

	if ((ads0 && ads0 != '0:00' && p && p.tagName != 'EMBED') || ads1) {

	  if (ads0) {
	    ads0 = ads0.split(':')
	    if (ads0[2]){
	      var ads0 = ads0[0] * 3600 + ads0[1] * 60 + ads0[2] * 1
	    } else {
		var ads0 = ads0[0] * 60 + ads0[1] * 1
	      }
	  }

	  if ((ads0 || ads1) && yt6.linx && yt6.linx.length && !yt6.blocked) {//yt6.ad_ == ads0 || ads1)
		//ev_log('pre_ad1: '+ yt6.pre_ad)
	    var dur = yt6.real_media_duration || yt6.loaded_media_duration
	    //console.log(ads0 +' '+yt6.loaded_media_duration +' '+ yt6.pre_ad +' '+ yt6.real_media_duration_m)
	    //if ( ( ( (yt6.pre_ad == '?' && yt6.loaded_media_duration < 91) || yt6.loaded_media_duration != dur ) && Math.abs(dur - ads0) > 1.5 ) ) {
	    if ( (( (yt6.pre_ad == '?' && (yt6.loaded_media_duration && (!isNaN(1 * yt6.real_media_duration_m) && !(yt6.mobile && !yt6.real_media_duration_m) && Math.abs(1 * yt6.real_media_duration_m - yt6.loaded_media_duration) > ads0) )) //yt6.loaded_media_duration < 91 ||
		   || yt6.loaded_media_duration != ads0
		  ) && Math.abs(yt6.real_media_duration - ads0) >= 1.5
		 ) || (yt6.live && Math.abs(yt6.loaded_media_duration - ads0) < 1.5)
	       ) {
		//ev_log('pre_ad2: '+ yt6.pre_ad) Math.abs(yt6.ad_duration - dur) < 1 ||
		if (!yt6.ytp.v && p.tagName == 'DIV') yt6.ytp.v = v_(yt6.p)

		if (ads0 != 0) {
		  yt6.ad_duration = (!shorts() && !isNaN(1 * yt6.real_media_duration_m) && yt6.real_media_duration_m > 0 && Math.abs(yt6.real_media_duration - yt6.real_media_duration_m) > 1.5) ? clone(yt6.real_media_duration) : ads0
		} else {
		    yt6.ad_duration = yt6.loaded_media_duration - 4
		  }

		//console.log('Preemptive video ad? ' + yt6.pre_ad +' '+ yt6.real_media_duration_ +' '+yt6.loaded_media_duration +' '+yt6.ad_duration +' '+ ads0)

		//var mute_button = gclass('ytp-mute-button')[0] || gc('ytp-mute-button ytp-button')[0]

		//if (typeof mute_button != 'undefined') {
		//if ( !yt6.navigation && ((yt6.pre_ad == '?' && !yt6.real_media_duration_) || (yt6.real_media_duration_ && Math.abs(yt6.ad_duration - (yt6.loaded_media_duration || dur)) < 1)  || (ads1 && !yt6.ad_muted) ) ) { //|| yt6.real_media_duration_ == yt6.real_media_duration
		if ( !yt6.navigation &&
		      (
			(yt6.pre_ad == '?' && !yt6.real_media_duration_ && !yt6.mobile) || 
			(yt6.real_media_duration_ === yt6.real_media_duration && 
				(!isNaN(1 * yt6.real_media_duration_m) && yt6.real_media_duration_m > 0 && (yt6.real_media_duration_m != yt6.ad_duration || shorts()) && Math.abs(1 * yt6.real_media_duration_m - yt6.loaded_media_duration) >= 1.5)
			)
			|| (yt6.live && typeof yt6.p.getDuration == 'function' && yt6.p.getDuration() > 0 && yt6.p.getCurrentTime() > 0 && Math.abs(yt6.p.getDuration() - yt6.p.getCurrentTime()) < 1.5)
		      )
		  ) { //|| (ads1 && !yt6.ad_muted) ) { // mute the ad
		  if ( !yt6.live && typeof p.isMuted == 'function') {// && !p.isMuted()
		    if (!(yt6.ytm && yt6.ytp.fullscreen))
		      try {
			if (yt6.mute_on) { p.mute(); yt6.ad_muted = true }// && !yt6d.init
		      } catch(e) { if (!p.isMuted()) yt6.ad_muted = false }
		  } //mute_button.click()
		  yt6.pre_ad = true
		  if (yt6.ads_off) {
		    if (!yt6d.ad && yt6d.init == yt6.vid && gc('ytp-ad-persistent-progress-bar-container')[0] && gc('ytp-ad-persistent-progress-bar-container')[0].style.display != 'none') {
			var ct = 0
			if (!yt6.x) try { ct = yt6.p.getCurrentTime() } catch(e){}
			if (ct < 120) {
			  yt6d.ad = 1
			  load_from_page_source(true); //yt6d.mep_reload()
			}
		    }
		  }
		} else {
		    yt6.pre_ad = '?'
		    //if ( (!yt6.x || (yt6.layout == 16 && !yt6.mobile && !yt6.ytm && yt6.browser_tab == 'hidden')) && !(yt6.mobile && !isNaN(1 * yt6.real_media_duration_m) && Math.abs(1 * yt6.real_media_duration_m - yt6.loaded_media_duration) > 1.5)) if (yt6.ad_muted) try { p.unMute(); yt6.ad_mute = false } catch(e){} // may be a false alarm at page change
		    if (yt6.loaded_vid == yt6.vid) yt6.real_media_duration_ = (yt6.ads_off) ? clone(yt6.real_media_duration) : null // define a 2nd variable merely to delay muting one more cycle
		  }

		//}
		//console.log('Preemptive video ad? ' + yt6.pre_ad +' '+ yt6.real_media_duration_ +' '+yt6.loaded_media_duration +' '+yt6.ad_duration)


	    } else { //console.log( dur +' '+ ads0 +' '+ ( yt6.ad_muted && Math.abs(dur - yt6.loaded_media_duration) < 1.5 ) )
		//if ( ( (typeof yt6.real_media_duration == 'number' && typeof yt6.loaded_media_duration == 'number' && Math.abs(yt6.real_media_duration.toFixed(0) - yt6.loaded_media_duration.toFixed(0)) ) < 1.5 ||
		//	(!yt6.real_media_duration || !yt6.loaded_media_duration)
		//     )
		//     && (( (Math.abs(dur - ads0) < 1.5) ) || ( yt6.ad_muted && Math.abs(dur - yt6.loaded_media_duration) < 1.5 )) ) {
		if ( ( (yt6.real_media_duration && Math.abs(yt6.real_media_duration - ads0) < 1.5) ) || ( yt6.ad_muted && Math.abs(yt6.real_media_duration - yt6.loaded_media_duration) < 1.5 ) ) { // conditions to unmute
		  //yt6.ad_duration = 0
		  if (yt6.pre_ad) if (!yt6.x && vID(yt6.vid) && yt6.p && typeof yt6.p.getPlayerState == 'function' && yt6.p.getPlayerState() != -1) yt6.p.playVideo()
		  yt6.pre_ad = false
		  if (yt6.ad_skipped) { delete yt6.ad_skipped }
		  if (!yt6.x //|| (yt6.layout == 16 && !yt6.mobile && !yt6.ytm && yt6.browser_tab == 'hidden')
		  ) if (typeof p.isMuted == 'function' && yt6.ad_muted && !(yt6.mobile && yt6.x && yt6.browser_tab == 'hidden') ) {//&& p.isMuted()
		    var b = v_(yt6.p); if (b) b.volume = (typeof yt6.ytp.vol == 'number') ? clone(yt6.ytp.vol) : 1
		    try { p.unMute(); yt6.ad_muted = false } catch(e) {}
		    if (yt6.ad_) {
		      yt6.ad_ = null
		      if (bm0) resize_layers(bm0.style.width, bm0.style.height)
		    }
		  }
		} //else console.log( Math.abs(yt6.real_media_duration - ads0) )
	      }

	    if (ads0 != 4) yt6.loaded_media_duration = ads0; //console.log(ads0 + ' '+yt6.real_media_duration +' '+yt6.loaded_media_duration)

	  } else yt6.ad_ = ads0 // delay one cycle


	} else {
	    yt6.pre_ad = false
	    if (!yt6.x //|| (yt6.layout == 16 && !yt6.mobile && !yt6.ytm && yt6.browser_tab == 'hidden')
	    ) if (typeof p.isMuted == 'function' && yt6.ad_muted) {// && p.isMuted() 
		var b = v_(yt6.p); if (b) b.volume = (typeof yt6.ytp.vol == 'number') ? clone(yt6.ytp.vol) : 1
		try { p.unMute(); yt6.ad_muted = false } catch(e) {}
		if (yt6.ad_) {
		  yt6.ad_ = null
		  if (bm0) resize_layers(bm0.style.width, bm0.style.height)
		}
	    }
	  }
	//console.log('Ad muted? ' + yt6.ad_muted)

  return ads0
}





function buildObject(ytplayer){

  getReferenceObjects()
  getScrollbarWidth()


  yt6.cdn_()
  if (!yt6.age.sc && !yt6.age.dl) yt6.ttsurl = null


  var c = conf('args'), missing_source


  if (!window.ytplayer) return void 0

  if ( !c[0] || (!(yt6.status == 'unplayable' && yt6.reason) ) ) {
    if (c[0]) {
      if (c[1] && yt6.change != 0 && (yt6.age.v !== 1 || (yt6.age.v == 1 && yt6.age.blocked)) &&
	( yt6.layout == 16 || yt6.body2 || yt6.ytg ||
	 (yt6.layout == 12 &&
	  ((c[1].video_id && c[1].video_id != video_id()[0]) ||
	   (!c[1].url_encoded_fmt_stream_map && !c[1].adaptive_fmts)
	  )
	 )
	)
       ) {

	//if (window.ytplayer.config.args.video_id != video_id()[0]) {
	  yt6.age.v = 1
	  missing_source = ageless_verification()
	//}
      }
    } else { yt6.age.v = 2; missing_source = ageless_verification(); if (yt6.mobile) ajax1() }

  }


    var z = gc('ytassetsjs-0')[0], c = conf('args')
    if (z) z = gc('ytassetsjs-0')[0].getAttribute('name');


  if ((yt6.layout == 16 || yt6.body2) && video_title()[1] && !yt6.ytm && !yt6.skeleton && !(c[1] && (c[1].errorcode == 150 || c[1].errorcode == 101))) {

    if (yt6.layout == 16 || (yt6.layout == 12 && missing_source)) test_4()

  }


  if (yt6.mobile && yt6d.ad) location.href = window.location.href


  if (yt6.layout == 12 && yt6.browser_tab == 'visible' && (yt6.blocked || yt6.status == 'unplayable' || yt6.status == 'error') && gid('bm0')) { // movie player will be wrecked, move to safe place
    gid('bm0').setAttribute('id','bm01')
    gid('movie_player_to_insert').appendChild(gid('bm01'))
  }

  var c = conf('args'); if (c[1] && !c[1].adaptive_fmts && shorts()) {
    // can't extract media links to certain shorts
  }


  if (!shorts()) // this would just break the mechanism

  if (( ( !(yt6.layout == 12 && typeof yt6.audio == 'string' && yt6.browser_tab == 'hidden' && yt6.player2 && yt6.player2.media && yt6.player2.media.loaded == 1) || yt6.body2) && // do not start another build-up if audio is already set correctly and is playable
	video_title()[1] && !(yt6.mobile && !yt6.blocked) && //!missing_source && 
	(( ( (!yt6.ytm && (!c[1] ||
			   (c[1] && ((!c[1].url_encoded_fmt_stream_map && !c[1].adaptive_fmts) ||
				        ( ((yt6.flash.forced && yt6.status == 'unplayable' && !c[1].url_encoded_fmt_stream_map) || (!yt6.flash.forced && !c[1].adaptive_fmts)) )
				    )
			  ))
	     ) ||// for example, using browser-nav instead of player-nav buttons in the new layout will cause the video data to vanish, leaving no choice but to download the whole page source as a last resort (on top of that if we're on a playlist, after data correction the player's next-video button will jump to a related video instead of the upcoming one on the playlist, on account of a yt bug)
	     (!yt6.ytm && yt6.ytm && (yt6.blocked || !ytplayer.config.assets || c[1].video_id != video_id()[0]))
	   ) //|| yt6.change == video_title()[0]
	 ) || (yt6.blocked && yt6.pls && !yt6.html5swap)
	   || (yt6.layout == 12 && z && z.indexOf('//www.youtube.com/yts/jsbin/') > -1)
	)
      ) //|| (yt6d.init == yt6.vid && (yt6.encrypted || (yt6.ytp.embed && !missing_source && yt6.missing_source )) )//|| yt6.ytp.embed
     ) {


  if (( ( (yt6.layout == 12 && (yt6.blocked || (yt6.flash.forced)) ) //old layout should only ever get a pass here if the video is blocked
	   || yt6.ytm || yt6.body2
	) && c[1] &&
	( (!c[1].url_encoded_fmt_stream_map && !c[1].adaptive_fmts)
	     || c[1].video_id != yt6.vid || yt6.change == video_title()[0] || yt6.mobile
	)
      ) || (yt6d.init == yt6.vid && yt6.encrypted)
     ) { var pass = true } else var pass = false


    if (yt6.osw && yt6.osw.getAttribute('id') == 'player' || pass) {

      var z = document.getElementsByTagName('ytd-playability-error-supported-renderers')[0]
      if ( !(z != null && z[yt6.txt] == yt6.change) || pass) {

	//console.log('pass ' + pass + ' '+yt6.change + ' ' + yt6.xhr.async)

	if (c[1] && !yt6.blocked && !yt6.ytp.embed) {

	  try {
	    if (location.href.split('list=PL')[1]) {
	      c[1].list = 'PL' + location.href.split('list=PL')[1].split('&')[0].split('/')[0]; clear_pls(clone(c[1].list))
	      yt6.p.cuePlaylist({
		listType: 'playlist',
		list: c[1].list,
		index: yt6.pl_index
		})
	    } else {
	      //yt6.p.loadVideoById(yt6.vid, yt6.p.getCurrentTime() )
	      yt6.p.cueVideoById({
		'videoId': yt6.vid
		})
	      }
	  } catch(e){}

	}

	if (yt6.xhr.async && yt6d.previous.linx.length) {


	  if (yt6.change != 0 && !yt6d.source) {

	    var z = load_from_page_source()
	    if (!yt6.ytm && !(yt6.layout == 12 && yt6.browser_tab == 'hidden' )) if (!z) { return false } //else { console.log(' the build-up needs to happen after the response to the asynchronous call arrived, so leave now with a negative response to stop further actions ') }
	  } //else yt6.change = (yt6.xhr.completed) ? video_id()[0] : undefined

	} else { load_from_page_source((!yt6d.source) ? false : true) }// synchronous call



      } else { yt6.age.v = 3
	  ageless_verification();
	  if (!yt6.blocked) buildObject(window.ytplayer)
	}


    } else {

	if (yt6.osw && yt6.osw.getAttribute('id') == 'placeholder-player' && !c[0]) { //console.log('old layout, no data, video blocked, nothing to do here')
	  yt6.osw.setAttribute('style','display: none')
	  return void 0
	}
      }

  }//fmts



function rewrite_ytplayer(node_value, s, sig){
	  if ((typeof node_value == 'string') && (node_value.indexOf('&s=') > -1)) {
	    var s = '&s=' + s
	    var sig = '&signature=' + sig
	    for (y in yt6.ytplayer.config.args){
	      if ((typeof yt6.ytplayer.config.args[y] == 'string') && (yt6.ytplayer.config.args[y].indexOf(node_value) > -1)){
	        //var x = gid('early-body').innerHTML = gid('early-body').innerHTML + yt6.ytplayer.config.args[y] + '______________________'
	        yt6.ytplayer.config.args[y] = yt6.ytplayer.config.args[y].split(s).join(sig)
	        //gid('early-body').innerHTML = gid('early-body').innerHTML + yt6.ytplayer.config.args[y] + '______________________'
	      }
	    }
	  }
}





  var c = conf('args')


  // preparing subtitles

  var lang_def = gid('yt-lang-alert-container')
  if (lang_def != null) lang_def.setAttribute('style','display: none')
  var lang_def = null; var lang_asr = null
  if (gc('clear')[0] == null) {
    var z = document.createElement('div')
    gid('player').appendChild(z)
    z.setAttribute('class','clear')
  }
  if (c[0] && gc('clear')[0]) {
    gc('clear')[0].setAttribute('id','ytp-conf-loading')
  } 



if (c[1]) {

	  if (location.href.split('list=PL')[1]) {
	    ytplayer.config.args.list = 'PL' + location.href.split('list=PL')[1].split('&')[0].split('/')[0]; clear_pls(clone(ytplayer.config.args.list))
	  }

  if (!ytplayer.config) ytplayer.config = c[0]
  var x = ''
  var tts_url = unescape(ytplayer.config.args.caption_tracks).split('u=')
  for(i=0;i<tts_url.length;i++){
    if ((typeof tts_url[i] != 'undefined') && (tts_url[i] != '')) {
        var z = tts_url[i].split('v=')
        if ((typeof z[2] != 'undefined') && (z[2] != null)) {
          tts_url[i] = z[0] + 'v=' + z[1]
        }
        var z = tts_url[i].split('lang=')
        if ((typeof z[1] != 'undefined') && (z[1] != null)) {
          tts_url[i] = z[0] + z[1].split('&')[1]
        }
	if (tts_url[i].indexOf('kind=') > -1) {
          var z = tts_url[i].split('kind=')
          if ((typeof z[1] != 'undefined') && (z[1] != null)) {
            tts_url[i] = z[0] + z[1].split('&')[1]
          };
	}

      var z = tts_url[i].split('https://') || tts_url[i].split('http://')
      if (typeof z[1] != 'undefined') {
	tts_url[i] = 'https://' + z[1].split('?')[0] + '?' + z[0] + z[1].split('?')[1]
	if (tts_url[i].substring(tts_url[i].length-1,tts_url[i].length) == ',') { tts_url[i] = tts_url[i].substring(0,tts_url[i].length-1) };
	if (x) tts_url[i] = tts_url[i] + '&' + x
      } else {
	  var z = tts_url[i].split('v=')
	  if ((typeof z[1] != 'undefined') && (z[1] != null)) {
	    tts_url[i] = z[0]
	  }
	  var x = x.replace(tts_url[i],'') + tts_url[i]; tts_url[i] = ''
	}
      if (tts_url[i].substring(tts_url[i].length-1,tts_url[i].length) == ',') { tts_url[i] = tts_url[i].substring(0,tts_url[i].length-1) }; tts_url[i].split('&&').join('')

    }
  }


} else {

    if (!window.ytplayer) window.ytplayer = {}
    if (!window.ytplayer.config) window.ytplayer.config = {}
    window.ytplayer.config.args = {}
    window.ytplayer.config.args.url_encoded_fmt_stream_map = ''
    window.ytplayer.config.args.adaptive_fmts = ''
  }


  var c = conf('args')


  if (!yt6.skeleton && !yt6.ytp.embed && (!(c[1] && (c[1].errorcode == 150 || c[1].errorcode == 101)) || yt6.ytm) ) {

   if (yt6.ytm || (yt6.layout == 12 && !yt6.blocked)) test_4()

    var t4 = gid('test-4')
    if (((yt6.encrypted && yt6.dummy) || (!c[1].url_encoded_fmt_stream_map && !c[1].adaptive_fmts)) && t4 && t4.lastChild) {
      if (!yt6.dummy) { }
	c[1].adaptive_fmts = ''; c[1].url_encoded_fmt_stream_map = ' '
/*
	var z = gid('watch7-player-age-gate-content') || gid('error-screen')
	if (yt6.layout == 12) {
	  if (z && z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '') {
	    var z = gid('player-unavailable')
	    if (z) z.style.display = 'none'
	  }
	} else if (z) z.style.display = 'none'

      if (!(yt6.status == 'unplayable' && yt6.reason) && z && z.style.display == 'none') {
	var z = t4.getElementsByTagName('A')
	for (i=0;i<z.length;i++) if (z[i]) { console.log('yt6.encrypted = true')
	  c[1].adaptive_fmts = c[1].adaptive_fmts + 'itag=' + z[i].getAttribute('name') + '&url=' + escape(z[i].getAttribute('href'))
	  if (i<z.length-1) c[1].adaptive_fmts = c[1].adaptive_fmts + ','
        }
      }
*/
      if (yt6.xhr.async && !yt6.xhr.completed && yt6.pls) yt6.xhr.completed = true; // to jump to the next vid on playlist
    }

  } else {
      if (yt6.player1) {
	if (typeof yt6.player1.setSrc == 'function') {
	  yt6.player1.setSrc('https://www.youtube.com/ptracking')
	} else try { gid('player1').src = 'https://www.youtube.com/ptracking' } catch(e){}
      }

      yt6.newin = ''; // important on a playlist
    }




  if (yt6.layout == 12 && !yt6.blocked) {

    if (c[1] && !c[1].status) player_response()

    yt6.status = (c[1] && c[1].status) ? c[1].status : 'fail'
  }


  if (typeof tts_url != 'undefined' && tts_url != '') {
    window.ytplayer.config.args.ttsurl = tts_url
  } else delete window.ytplayer.config.args.ttsurl




  var c = conf('args')

  var linx = [], args = ytplayer.config.args

  yt6.aspect_ratio = (typeof yt6.aspect_ratio == 'string' && yt6.aspect_ratio.split('x')[1] && !isNaN((yt6.aspect_ratio.replace('x',''))) ) ? yt6.aspect_ratio : '' // leave it as an empty string for now // 16/9
  yt6.yt_otf = []
  yt6.afmts = []


  if (yt6.ytp.broken && (args.url_encoded_fmt_stream_map || args.adaptive_fmts || yt6.adaptive_fmts)) {
    alt_yt(); delete yt6.ytp.broken
    if (player() && yt6.p.tagName == 'DIV') {
	yt6.p.setAttribute('class', yt6.p.getAttribute('class').replace('forced html5player ',''))
	yt6.p.setAttribute('name', 'movie_player')
	delete yt6.html5swap; delete yt6.swapped; yt6.original.parentNode.removeChild(yt6.original)
	switch_players(); switch_players()
    }
  }

  var html = [new Date().toLocaleString(),
    //'Click to switch streams in both native (HTML5) and alternative player. Right click & "Save as" to download.<br>'
    'Left-click will initiate playback in <i>Progressive Download</i> mode. Use Right-click & "Save as..." to download.<br>'+
	'<div id="encrypted_signatures_warning" style="display: none; color: red">' + ((!yt6.hand_axe) ? 'Video with encrypted signatures! <br>If the links do not work, switch over to the alternative player and try to start the video in various formats & resolutions. Once it becomes playable there, we\'re good.' : 'Could not find any valid media URLs. Left-click on the (defunct) links will start a method to try to fix them manually.') + '</div>'+
	'<button id="hide-links" class="snarl-button yt-uix-button-text" onclick="var a, b, c;'+
	'if (typeof gid == \'function\') { a = gid(\'yt6-links\'), b = gid(\'alt-links\'), c = gid(\'bm3\'), d = gid(\'bm4\') };'+
	'if (a) if (a.hasAttribute(\'hidden\')) { a.removeAttribute(\'hidden\'); this.innerHTML = \'<b><u>Used for playback</u></b> / Alternatives\'; if (b) b.setAttribute(\'hidden\',\'\')'+
	'} else {'+
	'a.setAttribute(\'hidden\',\'\'); this.innerHTML = \'Used for playback / <b><u>Alternatives</u></b>\';'+
	'if (b) { b.removeAttribute(\'hidden\') }};'+
	'if (c && d) { c.style.visibility = \'hidden\'; FireEvent2(d, \'click\') }"><b><u>Used for playback</u></b> / Alternatives</button>'+
    '<div id="yt6-links"></div>'+
    '<div id="alt-links" hidden=""></div>'+
    '<div id="manifests"></div>'
  ];//gid('early-body').innerHTML = ''




  var signame = (c[1] && (
	(c[1].url_encoded_fmt_stream_map && c[1].url_encoded_fmt_stream_map.indexOf('lsig%3D') > -1) ||
	(c[1].adaptive_fmts && (c[1].adaptive_fmts.indexOf('lsig%3D') > -1 || c[1].adaptive_fmts.indexOf('&lsig=') > -1))
      )) ? 'sig' : 'signature'


  var ft = [args.url_encoded_fmt_stream_map, args.adaptive_fmts || yt6.adaptive_fmts ],
      fn, a_r, ad = 0, dur, dur2, durA1 = {}, durA2 = {}, durL1 = [], durL2 = [], ad_links = [], avg1, avg2, avgx, length_seconds = args.length_seconds

  durA1.A = []; durA2.A = []
  var live = (Array.isArray(ft) && ft[1]) ? ft[1].indexOf('yt_live_broadcast') : -1; if (live > -1) { yt6.live = '&sq='; yt6.live_ = 1 } else { yt6.live = false; yt6.live_ = 0 }



	function alt_linx(_index, _href, lsec, dur, eid) {
	  if ((typeof linx[_index] == 'string' && linx[_index].indexOf('googlevideo.com/') > -1 && linx[_index] != _href) ) {// || (Math.abs(lsec - dur) >= 1.5)
	      if (yt6.real_eid && linx[_index] && linx[_index].indexOf(yt6.real_eid) > -1 && linx[(1000 + 1 * _index)] && _href && _href.indexOf(yt6.real_eid) == -1) {
		var _dur = linx[(1000 + 1 * _index)].split('&dur=')[1] || linx[(1000 + 1 * _index)].split('?dur=')[1]; if (_dur) _dur = (1 * _dur.split('&')[0])
		if (typeof _dur == 'number' && Math.abs(dur - _dur) < 1.5) { yt6.real_eid = eid }
	      }; //console.log('alternative ' + _index)
	    return (1000 + 1 * _index)
	  } else { //console.log('new or duplicate '+_index +' ? '+ itag(_href))
	      return _index
	    }
	}


  for (i in ft) {
    if (typeof ft[i] == 'string') {
      var z = ft ? ft[i].split(',') : ''
      for (j=0;j<z.length;j++) {//(j in z)

	qr(z[j]); get_quality(z[j])
	var qs = yt6.qr
	var qq = yt6.qa

      if (qs && qq) {

	if (!qs.itag) continue //|| (yt6d.current.lsig && yt6d.previous.lsig == yt6d.current.lsig))
	if (!qs.url) continue
	if (yt6.blocked && yt6d.previous.linx && typeof yt6d.previous.linx.includes == 'function' && yt6d.previous.linx.includes(qs.url)) { continue }

	var href = unescape(qs.url).replace('http:', '').replace('https:', '')

	// set n-parameter to unthrottle yt a/v data traffic
	if (typeof yt6d.ndec == 'function' && qs.n) href = href.replace(qs.n, yt6d.ndec(qs.n))

	if (yt6.live_ != 0 && (args.livestream || href.indexOf('source=yt_live_broadcast') != -1 || href.indexOf('/source/yt_live_broadcast/') != -1)) { yt6.live = (yt6.live) ? yt6.live : '&sq='; live = true } else if ((live == -1 || !live) && !args.livestream) yt6.live = false
	

	if (qs.signature){
	  href += '&' + signame + '=' + qs[signame]
	}
	if (qs.s){
	  href += '&' + signame + '=' + dc(qs.s)
	}



	var fn = yt6.fn = '';

	  if (qs.dur) { dur = qs.dur } else { dur = qs.dur = z[j].split('dur%3D')[1]; if (qs.dur) qs.dur = qs.dur.split('%26')[0] }
	  if (dur) dur = 1 * dur.split('%')[0] - 0

	  avgx = (dur && Math.abs(dur - yt6.real_media_duration) > 1.5) ? true : false; //yt6.mobile && 


	if (!(yt6.live && dur))
	if (!yt6.age.dl && !yt6.age.sc) {
	  if (typeof yt6.ytp.dur != 'number') {
	    yt6.ytp.dur = (typeof yt6.ytp.V == 'string') ? yt6.ytp.V.split('&dur=')[1] || yt6.ytp.V.split('/dur/')[1] : ''; if (yt6.ytp.dur) { yt6.ytp.dur = (1 * yt6.ytp.dur.split('&')[0].split('/')[0]) }
	  }
	    dur2 = (typeof yt6.ytp.dur == 'number' && 
		    (  ( Math.abs(yt6.real_media_duration - yt6.ad_duration) >= 1.5 &&
			(Math.abs(yt6.ytp.dur - yt6.real_media_duration) < 1.5 && Math.abs(yt6.ytp.dur - yt6.ad_duration >= 1.5)
			// || (Math.abs(yt6.ytp.dur - yt6.real_media_duration) >= 1.5 && Math.abs(yt6.ytp.dur - yt6.ad_duration) < 1.5)
			)
		       ) || Math.abs(yt6.real_media_duration - yt6.ad_duration) < 1.5
		   )
		  ) ? true : false;

	    if ((dur2 || (!dur2 && !avgx)) && yt6.ytp.V && Math.abs(yt6.ytp.dur - dur) < 1.5 && qs.itag == itag(yt6.ytp.V) && yt6.ytp.V.indexOf(href) == -1 && !linx[(2000 + 1 * qs.itag)] && !(typeof linx[qs.itag] == 'string' && linx[qs.itag].indexOf(yt6.ytp.V) > -1 && html.toString().indexOf(yt6.ytp.V) == -1)) {//&& !(yt6.audio == yt6.ytp.A && yt6.userprefV[0] == itag(yt6.ytp.V))
	      if (typeof yt6.ytp.V == 'string') if (!(yt6.ads_eid && yt6.ytp.V.indexOf(yt6.ads_eid) > -1))
		{
		  linx[(2000 + 1 * qs.itag)] = href; linx[qs.itag] = clone(yt6.ytp.V); href = clone(yt6.ytp.V); //console.log('video \n'+ linx[qs.itag])
		}
	    }

	  if (!yt6.ytp.dur) {
	    yt6.ytp.dur = (typeof yt6.ytp.A == 'string') ? yt6.ytp.A.split('&dur=')[1] || yt6.ytp.A.split('/dur/')[1] : ''; if (yt6.ytp.dur) { yt6.ytp.dur = (1 * yt6.ytp.dur.split('&')[0].split('/')[0]) }
	  }

	  if ( !avgx )
	  if (yt6.ytp.A && qs.itag == itag(yt6.ytp.A) && yt6.ytp.A.indexOf(href) == -1) {
	    if ( (dur2 || (!dur2 && !avgx)) && html.toString().indexOf(yt6.ytp.A) == -1 && (Math.abs(yt6.ytp.dur - dur) < 1.5 || yt6.ytp.dur === 0) ) { //console.log('audio \n'+ yt6.ytp.A)
	      linx[(2000 + 1 * qs.itag)] = href; linx[qs.itag] = clone(yt6.ytp.A); href = clone(yt6.ytp.A)
	    }
	    if (yt6.ytp.V && linx[itag(yt6.ytp.V)] && dur2 ) { //linx[(1000 + 1 * itag(yt6.ytp.V))] &&  && (yt6.ad_duration && Math.abs(yt6.ad_duration - yt6.real_media_duration) > 1.5)
	      if ( (yt6.ads_eid && linx[itag(yt6.ytp.V)].indexOf(yt6.ads_eid) > -1) || ( !(linx[(1000 + 1 * itag(yt6.ytp.V))] && linx[(1000 + 1 * itag(yt6.ytp.V))].indexOf(yt6.ytp.V) == -1)) ) {
		//linx[(2000 + 1 * itag(yt6.ytp.V))] = clone(yt6.ytp.V);
		if (!(yt6.ads_eid && yt6.ytp.V.indexOf(yt6.ads_eid) > -1) && Math.abs(yt6.ytp.dur - dur) < 1.5) {
		  if (linx[(1000 + 1 * itag(yt6.ytp.V))]) {
		    linx[(2000 + 1 * itag(yt6.ytp.V))] = clone(linx[(1000 + 1 * itag(yt6.ytp.V))]); linx[itag(yt6.ytp.V)] = clone(yt6.ytp.V);
		  } else { linx[(2000 + 1 * itag(yt6.ytp.V))] = clone(yt6.ytp.V) }
		}
		//yt6.ytp.V = ''; yt6.ytp.A = ''; yt6.ytp.dur = ''
	        //console.log('ytp media, could be ad also -- don\'t use both its video and audio'+'\n'+ yt6.ad_duration +' / '+yt6.real_media_duration +' / '+yt6.real_media_duration_m)
	      }
	    }
	  }
	}

	if (href.indexOf("&ratebypass=yes") == -1) { href += '&ratebypass=yes'}



	if (dur && ((yt6.ads_eid && href.indexOf(yt6.ads_eid) > -1) || yt6.live || (avgx && ((yt6.mobile && yt6.ads_eid1 && yt6.ads_eid2) || yt6d.init) ) )) { //
	  if (avgx && linx.length && yt6.ads_eid1 !== eid && !(yt6.real_eid && eid == yt6.real_eid) ) { //ev_log(yt6.ads_eid1); ev_log(yt6.ads_eid2)
	    //if (yt6.ads_eid1 == eid) ev_log('A-'+ ad +' '+ qs.itag); if (yt6.ads_eid2 == eid) ev_log('B-'+ ad +' '+ qs.itag)
	  } else if (!shorts() && !(yt6.real_eid && eid == yt6.real_eid) && Math.abs(yt6.real_media_duration - dur) > 1.5) { //ev_log('C '+ qs.itag +' '+ eid +' '+ (eid != yt6.real_eid))
	      var fn = 'Advertisement'; yt6.ad_duration = dur; if (eid && yt6.pre_ad) yt6.ads_eid = eid
	      href = href.split('&title=')[0] + '&title=Advertisement'
	    }
	} else var fn = ''


	var linx_bak = href



	  var p = yt6.p


	  var l
	  // look for differing video durations, may be advertisement

	  var eid //"ei" of advert links is now the same as that of the actual video links's -- use the differing "id" instead to distinguish them
	  eid = z[j].split('&id=')[1] || z[j].split('?id=')[1] || z[j].split('%26id%3D')[1] || z[j].split('%3Fid%3D')[1]
	  if (eid) eid = eid.split('&')[0].split('%26')[0]


	  if (dur) {
	    avg1 = 0
	    for(k=0;k<Math.min(durA1.A.length, 100);k++){
	      avg1 = parseFloat(avg1 + durA1.A[k])
	    }
	    avg1 = (avg1) ? (avg1 / durA1.A.length) : ''
	    if ( !avg1 || (typeof avg1 == 'number' && Math.abs(avg1 - dur) < 2 && Math.abs((avg2 || 0) - dur) >= 2 )) {
	      durA1.A.push(dur); durL1[qs.itag] = href
	      durA1.eid = (eid) ? eid : durA1.eid
	    } else {
	        durA2.eid = (eid) ? eid : durA2.eid
	        durA2.A.push(dur); durL2[qs.itag] = href
	        avg2 = 0
	        for(k=0;k<Math.min(durA2.A.length, 100);k++){
	    	  avg2 = parseFloat(avg2 + durA2.A[k])
	        }
	        avg2 = avg2 / durA2.A.length;
	      }
	  } else if (z.length == 1) { href = ''; linx_bak = '' }// delete remnant audio



	  if ((length_seconds || (p && typeof p.getDuration == 'function' && !(yt6.ytm && (yt6.flash.forced || p.tagName == 'EMBED')) ))  ) {
	    //console.log(durA1); console.log(durA2); console.log(eid); if (typeof p.getDuration == 'function') console.log(p.getDuration() +' -- dur-avg1: '+Math.abs((length_seconds || p.getDuration()) - avg1) +' -- dur-avg2: '+ Math.abs((length_seconds || p.getDuration()) - avg2)  )
	    if ( ( yt6.real_media_duration > 0
		   && (Math.abs((length_seconds || p.getDuration()) - avg1) > Math.abs((length_seconds || p.getDuration()) - avg2) )
		 ) || (yt6.live && dur) || !yt6.ads_eid1//|| avgx
		) {
	      var ad_links = durL1, ad = 1
	      if (durA1.eid) { if (!yt6.ads_eid1) yt6.real_eid = clone(durA1.eid); if (avgx || yt6.ads_eid2) if (yt6.ads_eid1) { yt6.ads_eid = clone(yt6.ads_eid1) }; yt6.ads_eid1 = clone(durA1.eid) }
	    } else {
		var ad_links = durL2, ad = 2
		if (durA2.eid && yt6.ads_eid1 != durA2.eid) { yt6.ads_eid2 = clone(durA2.eid); if (yt6.ads_eid1) yt6.ads_eid = (!(yt6.ads_eid2 && yt6.ads_eid2 != durA2.eid)) ? clone(durA2.eid) : clone(yt6.ads_eid2) }
	      }

	    //if (ad == 1) yt6.ads_eid1 = eid; if (ad == 2) yt6.ads_eid2 = eid;
	    //ev_log(ad +' '+yt6.ads_eid +'\n - A1: '+ durA1.eid +'\n - A2: '+ durA2.eid +'\n - Ad: '+ yt6.ads_eid +'\n '+ Math.abs((length_seconds || p.getDuration()) - avg1) +' ? '+Math.abs((length_seconds || p.getDuration()) - avg2))

	    for(k=0;k<Math.min(ad_links.length, 100);k++) {
	      for(l=0;l<linx.length;l++) if (linx[l]) {
		  var   diff1 = Math.abs(dur - durA1.A[k]),
			diff2 = Math.abs(dur - durA2.A[k]),
			diff1_2 = Math.abs(avg1 - durA2.A[k]),
			diff2_1 = Math.abs(avg2 - durA1.A[k])


	          if ( linx[l].indexOf('&title=Advertisement') == -1 || live) {
			//if (ad == 1) console.log('ad:'+ ad +' '+ linx[l].indexOf(durA1.eid) +' '+ avg2 +' '+ diff1 +' '+diff2_1 )
			//if (ad == 2) console.log('ad:'+ ad +' '+ linx[l].indexOf(durA2.eid) +' '+ avg1 +' '+ diff2 +' '+diff1_2 )
		    if ( (ad == 1 && ((durA1.eid && linx[l].indexOf(durA1.eid) > -1)) && (diff2_1 > 36 || (j == (z.length-1) && diff2_1 > 36)) ) || 
			 (ad == 2 && ((durA2.eid && linx[l].indexOf(durA2.eid) > -1)) && (diff1_2 > 36 || (j == (z.length-1) && diff1_2 > 36)) )
		       )
		     {
	            // 36 seconds arbitrarily set as a filtering limit bacause there was one example (krY83viRbaM)
	            // where the video and its audio had a legitimate 35 seconds difference in length.
	            // So if the video's and the video ad's length differs only by 36 seconds or less,
	            // we may get the ad's media links for playback in the formats which the actual video was not provided

		    //if (qs.itag == l) {
	              linx[l] = linx[l].split('&title=')[0] + '&title=Advertisement'; //ev_log(l +' -- '+ ad +' -- '+ eid +'\n')
		    //}
	            //console.log('ad container:'+ ad +' avg1:' + avg1 +' avg2:'+avg2+' dur1:'+durA1.A[k]+' dur2:'+durA2.A[k] +' '+ Math.abs(avg2 - durA1.A[k])+ ' '+ Math.abs(avg1 - durA2.A[k]))
		    //console.log(linx[l])
		    a_r = true; yt6.ad_duration = dur
		    break; break;
		     }
	          }
	      }
	    }
	  }



        if (!a_r && qq.indexOf('DASH') != -1) { // do not set aspect_ratio if it belongs to an advert
	  a_r = ft.toString().split("size=")//[1]
	  if (a_r.length) for(k=1;k<a_r.length;k++){
	    var ar = a_r[k].split("&")[0].split(",")[0]
	    if (typeof yt6.aspect_ratio == 'number') { yt6.aspect_ratio = Math.round(yt6.aspect_ratio * 720) + 'x' + Math.round(1280 / yt6.aspect_ratio) }
	    if ( typeof ar == 'string' && (!yt6.aspect_ratio || (yt6.aspect_ratio && (ar.split('x')[0] * ar.split('x')[1] > yt6.aspect_ratio.split('x')[0] * yt6.aspect_ratio.split('x')[1])))) {
	      yt6.aspect_ratio = ar
	      yt6.ar = ar
	    } else { ar = yt6.aspet_ratio = yt6.ar }
	  }
	}



        var fn = (fn != 'Advertisement') ? yt6.fn = fn || args.title || document.title : fn //+ '-' + qq).toLowerCase()
        //         .replace(/[!"&'().:[\]|]/g,'')
        //         .replace(/ /g,'-')
        //         .replace(/-+/g,'-')




	  if (!linx[qs.itag] || !(linx[qs.itag] && linx[qs.itag].indexOf('&title=Advertisement') > -1)) {

	    linx[alt_linx(qs.itag, href, length_seconds, dur, eid)] = href

	  } else {

	      linx[alt_linx(qs.itag, href, length_seconds, dur, eid)] = linx_bak.split('&title=')[0]

	    }

	  if (qs.itag == '278') {//!==
        //} else {
            if (!linx[241] || !(linx[241] && linx[241].indexOf('&title=Advertisement') > -1)) {

	      linx[alt_linx(241, href, length_seconds, dur, eid)] = href

	    } else {

		linx[alt_linx(241, href, length_seconds, dur, eid)] = linx_bak.split('&title=')[0]

	      }
          }


	if (!yt6.age.dl && !yt6.age.sc) if (linx[(2000 + 1 * qs.itag)]) linx[(1000 + 1 * qs.itag)] = linx[(2000 + 1 * qs.itag)]


	  if (isNaN(dur) && p && typeof p.getDuration == 'function' && !(yt6.ytm && (yt6.flash.forced || p.tagName == 'EMBED')) ) dur = p.getDuration()
	  dur = parseFloat(dur);
	  if ( (!isNaN(dur) && dur != 0 && p && typeof p.getDuration == 'function') || yt6.real_media_duration == null ) {
	    yt6.real_media_duration = (a_r !== true || yt6.real_media_duration == null) ? ((!isNaN(1*yt6.real_media_duration) && yt6.real_media_duration > 0) ? 1*yt6.real_media_duration : dur) : yt6.real_media_duration || 0
	    if (ad && !yt6.x) { yt6.navigation = false; }
	  }

	
	var http = (typeof href == 'string' && href.indexOf('http') == 0) ? '' : protocol()


	if (!yt6.audiox) {
	  if (linx.indexOf(href) < 1000) {// set audio source from first-choice-links only
	    if ((browserName != 'IE' && browserName != 'Edge')) { // || typeof audio != 'undefined'
	      //if (args.url_encoded_fmt_stream_map != ' ') {
		//if (qq.indexOf('WebM Vorbis') != -1) var audio = http + href;
	      //} else 
		if (qs.itag == '139' || qs.itag == '140' || qs.itag == '171' || qs.itag == '251' ) { var audio = http + href; yt6.real_eid = eid } //yt6.userprefA.splice(0,0,1*qs.itag) }
	    } else if ( qq.indexOf('DASH AAC')) { var audio = http + href; yt6.real_eid = eid } // if M$ or not yet defined
	  }
	} else var audio = yt6.audiox

      } else {
	   var qs = {}; var qq = ''; var href = '' + href
	}



   
        function HTMLPush(j){
    
          function setLink(href){

            var http = (typeof href == 'string' && href.indexOf('http') == 0) ? '' : protocol()

            var onclic = 'var yt6 = gid(\'snarls_player\');'+
'		yt6.ct = gid("player1").currentTime;'+
'		var p = player(), p = yt6.p, v, p1load = null;'+
'		var found = false;'+
'		var me_flash = getElementsByAttribute(document,"object","name","me_flash"); '+
'		var me_flash_ = getElementsByAttribute(document,"embed","name",mep_x("me_flash_")) ; '+

'		if (me_flash_[0] != undefined) { '+
'		  me_flash.push.apply( me_flash, me_flash_ ) '+
'		};  '+

'		if ((me_flash[0] != undefined) && (me_flash.length != 0)) {'+
'		  for (i=0;i<me_flash.length;i++) {'+
'		    var me_flash_vars = me_flash[i].getAttribute("flashvars");'+
'		    if (typeof me_flash_vars == "string") {'+
'			me_flash[i].setAttribute("flashvars", me_flash_vars.split("&file=")[0] + "&file=" + encodeURIComponent("'+ http + href + '"));'+
'			if (me_flash[i].tagName == "OBJECT") {'+
'			  var me_flash_src = me_flash[i].getAttribute("src");'+
'			  me_flash[i].setAttribute("src","");'+
'			  me_flash[i].setAttribute("src", me_flash_src);'+
'			  gid("player1").setAttribute("src","' + http + href + '");'+
'			};'+
'		    } else {'+
'			me_flash[i].setAttribute("src","' + http + href + '")'+
'		      };'+

'		    var me_flash_param = getElementsByAttribute(me_flash[i],"param","name","flashvars"); '+
'		    if (me_flash_param[0] != undefined) {'+
'		      me_flash_param[0].style.display = "none";'+
'		      me_flash_param[0].setAttribute("value", me_flash_param[0].getAttribute("value").split("&file=")[0] + "&amp;file=" + encodeURIComponent("' + http + href + '"));'+
'		      me_flash_param[0].style.display = "";'+
'		    };'+
'		  }'+
'		}; '+

'		if (me_flash_[0] != undefined) {'+
'		  if (typeof gclass("mejs-overlay-play")[0] == "object") gclass("mejs-overlay-play")[0].style.display = "none";'+
'		  if (typeof gclass("mejs-poster mejs-layer")[0] == "object") gclass("mejs-poster mejs-layer")[0].style.display = "none";'+
'		  if (1*navigator.userAgent.indexOf("Chrome") > -1) { yt6.player1.setSrc("' + href + '"); yt6.player1.load(); }'+
'		} else {'+
'		    if (me_flash[0] != undefined) {'+
'		      var bup = me_flash[0].cloneNode(true);'+
'		      me_flash[0].parentNode.insertBefore(bup, me_flash[0]);'+
'		      me_flash[0].parentNode.removeChild(me_flash[0]);'+
'		      set_controls();'+
'		    };'+
'		  };'+


'		if (typeof p.getPlayerState == "function" && v_(yt6.p) && typeof v_(yt6.p).play == "function") {'+
'		  v = v_(yt6.p);'+
'		} else {'+
'		    v = gc("video-stream html5-main-video");'+
'		    for(i=0;i<v.length;i++) if (v[i] && v[i].id == "player1") { v = v[i]; break };'+
'		  };'+

'		var sauce = getElementsByAttribute(document,"input","name",mep_x("mep_") + "_sourcechooser");'+

'		if ((sauce != undefined) && (sauce.length != 0)) {'+
'		  for (i=0;i<sauce.length;i++) {'+
'		    if (sauce[i] != undefined) {'+ //check if the chosen format was put in the sourcechooser box list too
'		      if (("'+href+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2)+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2).replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:","")) || itag("'+href+'") == itag(sauce[i].getAttribute("value")) ) {'+ //check if both links point to the same URLs
'			var found = true;'+
'			if (yt6.x) for (j=0;j<sauce.length;j++) {'+
'			  if (sauce[j] != undefined) {'+
'			    sauce[j].checked = ""; sauce[j].removeAttribute("checked")'+
'			  };'+
'			};'+
'			if (yt6.x) sauce[i].checked = "true"; sauce[i].setAttribute("checked","checked");'+

'			if (yt6.x || gid("bm0").style.visibility == "visible") {'+
'			  if (yt6.player2 && (!yt6.player1.media.paused || !yt6.player2.media.paused)) {'+
'			    var p1load = 1;'+
'			     yt6.player2.pause();'+
'			  } else {'+
'			      var p1load = null'+
'			    };'+
'			} else {'+
'			    if ((typeof p.getPlayerState == "function") && (p.getAttribute("flashvars") == null)) {'+
'			      if ( p.getPlayerState() == "1") {'+
'				var p1load = 1;'+
'				v.pause();'+
'			      } else {'+
'				  var p1load = null'+
'				}'+
'			    };'+
'			  };;;;'+

'			if (("'+ http + href +'" == yt6.audio) && (navigator.userAgent.indexOf("Chrome") < -1)) {'+
'			  alert("Warning: Google Chrome will stop buffering if the AUDIO and VIDEO sources share the same location.\\nThis happens when you switch from a DASH/VP9 playback over to the designated audio track to play on its own.\\nIt\'s a bug to be fixed.")'+
'			};'+

'			sauce[i].setAttribute("checked","checked");'+
//'			gid("player1").setAttribute("src","' + http + href + '");'+
'			var yt_ct;'+
'			if (p && typeof p.getCurrentTime == "function") yt_ct = p.getCurrentTime();'+
'			if (!yt6.x) gc("video-stream html5-main-video")[0].setAttribute("src","' + http + href + '"); '+
'			if (!yt6.x) if (yt_ct && yt6.player2) {'+
'			  yt6.player2.media.playbackRate = (v_(p) && typeof v_(p).playbackRate == "number") ? v_(p).playbackRate : p.getPlaybackRate();'+
'			  yt6.ytp.speed();'+//p.setPlaybackRate(1); p.setPlaybackRate(yt6.player2.media.playbackRate);'+
'			  if (yt6.player2.media) yt6.player2.media.currentTime = yt_ct;'+
'			  p.seekTo(yt_ct)'+
'			};'+

'			if (!yt6.x || gid("bm0").style.visibility == "hidden") {'+
'			  if (typeof p.getPlayerState == "function" && p.getAttribute("flashvars") == null) {'+
'			    if (gc("ytp-error")[0]) gc("ytp-error")[0].style.display = "none";'+
'			    v.play();'+
'			    v.pause();'+
'			    if (yt_ct && yt6.player2 && yt6.player2.media && typeof yt6.player2.media.setCurrentTime == "function") yt6.player2.media.setCurrentTime(yt_ct);'+
'			    if (p1load == 1) v.play()'+
'			  }'+
'			} else {'+
'			    if (yt6.player1 && typeof yt6.player1.load == "function") {'+
'			      try { sauce[i].click() }'+
'			      catch(e){'+
'				yt6.player1.media.setSrc("'+ http + href + '");'+
'				yt6.player1.load(); yt6.player1.media.setCurrentTime(yt6.ct)'+
'			      };'+
'			    } else {'+
'				gid("player1").setAttribute("src","' + http + href + '");'+
'			      }'+
'			    if (yt6.player2 && yt6.player2.media && typeof yt6.player2.media.setCurrentTime == "function") yt6.player2.media.setCurrentTime(yt6.ct);'+
'			    if (yt6.x && p1load == 1) { yt6.player1.media.play() } else { yt6.player1.pause() }'+
'			  };   '+
'			if (yt6 && yt6.mobile) { this.href0 = "' + href + '"; this.removeAttribute("href") };'+
'			return false'+
'		      };'+
'		    }'+
'		  }'+//for
'		};'+//empty sourcechooser box?

'		if (yt6 && yt6.mobile) { this.href0 = "' + href + '"; this.removeAttribute("href") };'+
'		if (found == false) {'+
'		  window.open( "' + href + '", "_blank").focus()'+
'		}; '+
'		return false;';


	    var a = (typeof href.split("itag=")[1] != "undefined") ? 1 * href.split("itag=")[1].split("&")[0] : ((typeof href.split("itag/")[1] != 'undefined') ? 1 * href.split("itag/")[1].split("/")[0] : 171);
	    if (typeof a == 'number') onclic = onclic.replace(';;;;',';'+
'			if ((yt6.player2 && typeof yt6.player2.load == "function")'+
'			    && (typeof yt6.A_[' + a + '] == "string")) {'+
'			        yt6.audio = gid("player2").firstChild.setAttribute("src","' + http + href + '");'+
'				yt6.player2.setSrc("'+ http + href + '"); yt6.player2.load(); yt6.audiox = null; delete yt6.audiox;'+
'			};');

	    if (yt6.hand_axe) {
	      var onclic = 'try { yt6.errcount = 0; yt6.failed_itags = []; yt6.failed_itags2 = 1; hand_axe(); delete yt6.hand_axe } catch(e){}; return false;';
	    }
            return onclic
          }//function setLink

          var onclic = setLink(href)
          if (yt6.fn != 'Advertisement' && typeof qq.split(" ")[1] != 'undefined') { var x = " - " + qq.split(" ")[0] + " " + qq.split(" ")[2]; if (typeof qq.split("+")[1] != 'undefined') { var x = x + ' +' + qq.split("+")[1] } else { if (typeof qq.split(" ")[3] != 'undefined') { var x = x + ' ' + qq.split(" ")[3] }} } else var x = '';
            if (navigator.oscpu) {
              if (navigator.oscpu.indexOf("Windows") > -1) {
                var fn = (yt6.fn + x)
                    .replace(/"/g,'\'').replace(/[#"\?:\*]/g,'').replace(/[&\|\\\/]/g,'_').replace(/'/g,'\'').replace(/^\s+|\s+$/g,'').replace(/\.+$/g,'');  
              } else {
                  if (navigator.oscpu.indexOf("Linux") > -1) {
                    var fn = (yt6.fn + x).replace(/\"/g,'_').replace(/&/g,'%26').replace(/\+/g,'%2B').replace(/[\/]/g,'_')
                  } else var fn = (yt6.fn + x).replace(/&/g,'%26').replace(/\+/g,'%2B')
                }
            } else {
                var fn = (yt6.fn + x).replace(/&/g,'%26').replace(/\+/g,'%2B')
              }
	  var fn_ = encodeURIComponent(fn)

          var itag_ = itag(href)
          var size = href.match(/[&\?]clen=([0-9]+)&/i); var sizeq = ''
          if ((typeof size != 'undefined') && (size !== null)) {
            size = parseInt(size[1],10);
              if (size>=1073741824) {
                size=parseFloat((size/1073741824).toFixed(1))+' GB';
              } else {
                  if (size>=1048576) {
                    size=parseFloat((size/1048576).toFixed(1))+' MB';
                  } else {
                      size=parseFloat((size/1024).toFixed(1))+' KB';
                    }
                }
            var y = 25, m;
            if (qq.indexOf("fps") != -1) y = y + 1;
	    var z = 1 * ( y - 1 * qq.length - 0 - 3*Math.floor((1 * qq.length/18) - 0) )
            if (typeof z == 'number' && z > 0 && qq.indexOf('+') == -1) {
              if (x.indexOf('p ') != -1) { var m = 'V' } else if (x.indexOf('k ') != -1) var m = 'A'
              sizeq = ' title="'+ m +' ('+ itag_.toString().split('241').join('278') +')" aria-label="'+ m +' ('+ itag_.toString().split('160').join('132') +')"'
              size = Array(z).join(".") + size; //Bit shift by 0 which is equivalent to division by 1
            } else {
                sizeq = ' title="' + size + ' AV ('+itag_+')" aria-label="' + size +' AV('+itag_+')" '; size = '';
              }

	    if (yt6.yt_otf.length && x.indexOf('p ') > -1 && yt6.yt_otf.indexOf(itag_) == -1) yt6.afmts.push(1*itag_)

          } else { size = '';
              if (x.indexOf('p ') != -1) {
                var m = (itag_ > 102) ? 'V' : 'AV'
              } else if (x.indexOf('k ') != -1) var m = 'A'
              sizeq = ' title="'+ m +' ('+itag_+')" aria-label="'+ m +' ('+itag_+')"'

	      if (href.indexOf('yt_live_broadcast') == -1 && (m == 'V' || m == 'A') && yt6.yt_otf.indexOf(itag_) == -1) { yt6.yt_otf.push(1*itag_) }//m == 'V'

            } 

          var z = (yt6d.current.ei && yt6d.current.ei.length) ? yt6d.current.ei.length-1 : 0
	  var link_class = 'yt6-links'// alternatives'; if (href && z && !(href.includes(yt6d.current.ei[z])) ) link_class = 'yt6-links'

          if (href != '') {
	  var http = (href.indexOf('http') == 0) ? '' : protocol()
	  if (typeof qq.split(" ")[1] != 'undefined') { 
            if (typeof j != 'number') {
              html.push(
                '<a name="' + qs.itag +'" class="'+ link_class +'" href="' + http + href + '&title=' + fn_ +'" onclick="' + rp(onclic) + '"' + sizeq + ' download="' + fn + '.' + qq.split(" ")[1].toLowerCase() + '">' + qq + size + '</a>'
              );
            } else {
                html.splice(
                  j+1, 0, '<a name="' + qs.itag +'" class="'+ link_class +'" href="' + http + href + '&title=' + fn_ +'" onclick="' + rp(onclic) + '"' + sizeq + ' download="' + fn + '.' + qq.split(" ")[1].toLowerCase() + '">' + qq + size + '</a>'
                );
              }
    
            var fn = fn.split(" - " + qq.split(" ")[0] + " " + qq.split(" ")[2])[0]

          } else {
              if (typeof j != 'number'){
                html.push(
                  '<a name="' + qs.itag +'" class="'+ link_class +'" href="' + http + href + '&title=' + fn_ +'" onclick="' + rp(onclic) + '"' + sizeq + ' download="' + fn + '">' + qs.itag + size + '</a>'
                );
              } else {
                  html.splice(
                      j+1, 0, '<a name="' + qs.itag +'" class="'+ link_class +'" href="' + http + href + '&title=' + fn_ +'" onclick="' + rp(onclic) + '"' + sizeq + ' download="' + fn + '">' + qs.itag + size + '</a>'
                  );
                }
            }
	  }//href?
	  return fn
	};//HTMLPush

	HTMLPush()

      }//for

    }//if
  }//for

  if (yt6.ads_eid && ((yt6.ads_eid1 || yt6.ads_eid2) && yt6.ads_eid1 == yt6.ads_eid)) yt6.ads_eid = ''


	if (signame == 'sig'){
	  var lsig = (href) ? href.split('&lsig=')[1] || href.split('?lsig=')[1] || href.split('&lsig/')[1] || href.split('?lsig/')[1] : ''
	  if (lsig) yt6d.current.lsig = lsig.split('&')[0]
	}


  if (yt6.manifest.mpd) args.dashmpd = yt6.manifest.mpd

//var rpt = gid('ytassetsjs') ? gid('ytassetsjs').fcnm : null
//if (rpt != null) {//ajax2
if (args.dashmpd) {

  var xhr = new XMLHttpRequest()
  var aac = unescape(args.dashmpd)
  var z = aac.split('/')
  var sig = null
  var aac2 = null
  for (i in z) {
    if (sig == 1) { var sig = dc(z[i]); var aac2 = aac.replace(z[i],sig).replace('/s/','/signature/')}
    if (sig == 2) { var aac2 = aac.replace('http:', '').replace('https:', ''); sig == null }
    if (aac && aac2 != null) {
      try {
        xhr.open('get', aac2, false)
        xhr.send('')
        if (xhr.responseText.indexOf("Forbidden") != -1) {
          try {
            xhr.open('get', yt6.px + aac2, false)
            xhr.send('')
            if (xhr.responseText.indexOf("Forbidden") != -1) break
          } catch(e) {
              break
            }
        }
      } catch(e) {
	    if (e.toString().indexOf('"Access to restricted URI denied"  code: "1012"') > -1) {

	    } 

           //break
        }
      if ((xhr.responseText.indexOf('Representation id="278"') > -1) && (typeof linx[241] == 'undefined')){
	for (j=0;j<html.length;j++) {
	  if (html[j].indexOf("itag=160") > -1 || html[j].indexOf('href="' + protocol() + 'undefined') != -1) {
	    var a = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id","278")[0]
	    if (a[yt6.txt]) { a = a[yt6.txt] } else if (a.innerHTML) { a = '//' + a.innerHTML.split('//')[1].split('</BaseURL>')[0] } else break
		href = a.replace('http:', '').replace('https:', '')
		if (href.indexOf('/source/yt_live_broadcast/') != -1) { yt6.live = (yt6.live) ? yt6.live : '&sq=' } else yt6.live = false
	    var qq = get_quality(href)
	    var qs = qr(href)
	    HTMLPush(j)
	    linx[241] = href
	    break
	  }
	}
      }
      var x = ['139','172','141']
      for (b=0;b<350;b++){
	if ((qual[b]) && (b != 278)) {
	  if ((xhr.responseText.indexOf('Representation id="'+b+'"') > -1) && (typeof linx[b] == 'undefined')) {
	    var a = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id",b)[0]
	    if (a[yt6.txt]) { a = a[yt6.txt] } else if (a.innerHTML) { a = '//' + a.innerHTML.split('//')[1].split('</BaseURL>')[0] } else break
		href = a.replace('http:', '').replace('https:', '')
		if (href.indexOf('/source/yt_live_broadcast/') != -1) { yt6.live = (yt6.live) ? yt6.live : '&sq=' } else yt6.live = false
	    //if (b == '172') { var audio = http + href }
	    //if (b == '141') { if (typeof audio == 'undefined') { var audio = http + href }}
	    var qq = get_quality(href)
	    var qs = qr(href)
	    //if ((qq.indexOf('DASH AAC') != -1) && (audio == undefined)) { var audio = http + href }
	    HTMLPush()
	    linx[b] = href
	  }
	}
      };break
    }

    if (z[i] == "s") var sig = 1
    if (z[i] == "signature") var sig = 2
  }

}//ajax2




  //remove junk
  for (j=0;j<html.length;j++) {
    if (html[j] && (html[j].indexOf('href="https:undefined"') != -1) || html[j].indexOf('name="undefined"') != -1) html.splice(j,1)
  }

  yt6.qr = {}; try { delete yt6.qr } catch(e) { yt6.qr = undefined }
  yt6.qa = {}; try { delete yt6.qa } catch(e) { yt6.qa = undefined }


  var w_init = gid('player-api').offsetWidth + 'px'
  var h_init = gid('player-api').offsetHeight + 'px'

  if (!yt6.aspect_ratio) {
    var x = null
    var h_orig = document.getElementsByTagName('head')[0].innerHTML.match(/og:video:height([^(]+)/)
    if ((typeof h_orig != 'undefined') && (h_orig != null)) {
      var x = ["property","og:video:"]
    } else {
        var h_orig = yt6.body.innerHTML.match(/meta itemprop="height"([^(]+)/)
        if ((typeof h_orig != 'undefined') && (h_orig != null)) {
          var x = ["itemprop",""]
        }
      }
    if (x != null) {
      var w_orig = getElementsByAttribute(document,"meta",x[0],x[1] + "width")[0].content + "px"
      var h_orig = getElementsByAttribute(document,"meta",x[0],x[1] + "height")[0].content + "px"
      yt6.aspect_ratio = (w_orig.replace('px','')/h_orig.replace('px','')); console.log(yt6.aspect_ratio)
      yt6.ar = (w_orig.replace('px','')/h_orig.replace('px',''))
    } else {

	if (c[1] && c[1].fmt_list) {
	  var fmt_list = c[1].fmt_list.split(',')
	  for(i=0;i<fmt_list.length;i++){
	    if (fmt_list[i] && fmt_list[i].split('/')[1]) {
	      var w = (1 * fmt_list[i].split('/')[1].split('x')[0])
	      var h = (1 * fmt_list[i].split('/')[1].split('x')[1])
	      if (typeof w == 'number' && typeof h == 'number') {
		yt6.aspect_ratio = w / h
		yt6.ar = w / h
		var w_orig = Math.round(360 * yt6.ar) + 'px'
		var h_orig = Math.round(640 / yt6.ar) + 'px'
	      }
	      break
	    }
	  }
	}

	if (!yt6.aspect_ratio) {
          w_orig = '640px'; h_orig = '360px'; yt6.aspect_ratio = 16/9; yt6.ar = 16/9
	}
      }

  } else {
      if (typeof yt6.aspect_ratio === 'string') {
        var w_orig = yt6.aspect_ratio.split("x")[0] + "px"
        var h_orig = yt6.aspect_ratio.split("x")[1] + "px"
        yt6.aspect_ratio = (w_orig.replace('px','') / h_orig.replace('px',''))
        yt6.ar = (w_orig.replace('px','') / h_orig.replace('px',''))
      } else {
          w_orig = '640px'; h_orig = '360px'; yt6.aspect_ratio = 16/9; yt6.ar = 16/9
        }
    }
  if (yt6.aspect_ratio.toFixed(2) == 1.78) { yt6.aspect_ratio = 16/9; yt6.ar = 16/9 }

  if (typeof ytcenter !== 'undefined') { 
    var w = gid('player-api').style.width
    if (w.replace('px','') < 640) {
	gid('player-api').style.width = '640px'
    }

    var h = gid('player-api').style.height
    if (h.replace('px','') < 390) {
	gid('player-api').style.height = '360px'
	//yt6.wsb.style.marginTop = 'height:-370px'
    }

    var h = (w.replace('px','') / yt6.aspect_ratio >>0)
    var h = (parseInt(parseInt(h) + parseInt(30))) + 'px'
	
  } else {

	var w = (!yt6.flexy || yt6.size == 'default') ? fix_Width() : yt6.w
	var h = (!yt6.flexy || yt6.size == 'default') ? fix_Height() : yt6.h

    }

if (yt6.oldbrowser) {
  if (1 * w.replace('px','') < 640) var w = '640px'
  if (1 * h.replace('px','') < 390) var h = '390px'
}

  yt6.w_init = w_init
  yt6.h_init = h_init
  yt6.w_orig = w_orig
  yt6.h_orig = h_orig
  if (yt6.size != 'custom') {
    yt6.w = w
    yt6.h = h
  }

  //yt6.fn = fn
  yt6.linx = []
  for(i=0;i<100;i++){ if (yt6.linx[i]) delete yt6.linx[i] }
  yt6.linx = linx
  yt6.html = html
  yt6.href = href
  yt6.audio = (yt6.audiox) ? yt6.audiox : audio
  yt6.args = args


  if (yt6.linx.length > 1 && yt6.loaded_vid != yt6.vid) { yt6.loaded_vid = clone(yt6.vid) }

  if (yt6.oldbrowser && yt6.p && yt6.p.tagName == 'EMBED' && yt6.p.getAttribute('flashvars') == '') { var z = correct_flashvars(ytplayer.config.args); yt6.p.setAttribute('flashvars', z) }

  // with xhr.async == true, a positive return value must be sent
  // but proceed only if video_title()[1] == true, that is, it's an actual video watch page
  if ( (yt6.xhr.async && (yt6.xhr.completed ||
	( (c[0].loaded_from != 'source' && (c[1] && (c[1].url_encoded_fmt_stream_map || c[1].adaptive_fmts)) ||
	   (yt6.status == 'unplayable' && yt6.reason) ||
	   (yt6.xhr.completed == '' && yt6.status != 'ok' && !yt6.reason)
	  ) && !yt6.ytm && video_title()[1]
	)
      )) ||
      (!yt6.xhr.async) || yt6.ytm ) { return true }
    else if (yt6.mobile && yt6.browser_tab == 'hidden' && yt6.blocked_m) { return true }
	 //else console.log('no video data yet '+ yt6.status + ' '+yt6.reason)


}//buildObject





function redo_dl_button(args,html,href) {


if (gid("bm1")) {
  var y = gid('control_panel2')
  if (y) {
    try { removeEL(y, 'mouseup',function(e){ yt6.controls_pushed = false }, false) } catch(e){}
    try { removeEL(y, 'mousedown', yt6.clicky ,false) } catch(e){}
  }
  if (gid('remove_bak') && gid('controls_bak') && gid('controls_bak').parentNode == gid('remove_bak').parentNode) {
    gid('video-hide').appendChild(gid('controls_bak').parentNode)
  }
  //gid("bm1").parentNode.removeChild(gid("bm1")) }

} else {

    var dw = document.createElement('span')
    dw.id = 'bm1'
    var z = gc('yt-masthead-logo-container ')
    if (z[0]) {
      var z = z[0]
    } else {
	var z = gid('logo') || gid('left-content') || gid('masthead-logo')
	if (z == null) {
	  var z = gid('home-button')
	  if (z) {
	    z = z.parentNode
	  } else z = yt6
        }
      }
    if (!z) throw 'YouTube layout mismatch'
    if (z != yt6) { z.insertBefore(dw, z.lastChild) } else z.insertBefore(dw, gid('video-hide') || z.firstChild)

    if (yt6.layout == 16 && !yt6.mobile) {
      if (z.hasAttribute('hidden')) { z.removeAttribute('hidden'); yt6.skeleton = true }
      if (yt6.osw && yt6.osw.className && yt6.osw.className.indexOf('skeleton') > -1) {
	if (!gid('messages')) {
	  var z = document.createElement('div')
	  z.id = 'messages'
	  var x = gid('info-container') || gid('watch-page-skeleton') || yt6.osw
	  if (x != yt6.osw) { x.insertBefore(z, x.firstChild) } else x.appendChild(z)
	}
        yt6.skeleton = true
      }
    }

    var pos = (!yt6.mobile && !yt6.ytp.embed) ? 'relative' : 'fixed'
    gid('bm1').setAttribute('style','display:inline-block; position:'+pos+'; max-height:30px; z-index: 2101; '+((yt6.mhp && typeof yt6.mhp.offsetHeight == 'number' && yt6.mhp.offsetHeight - 30 > 10) ? 'margin-top: ' + (yt6.mhp.offsetHeight - 30) / 2 +'px' : ''));
    var z = gid('bm1').style
    z.display = 'inline-block'; z.position = pos; z.width = '52px'; z.maxHeight = '30px'
    if (yt6.ytp.embed) { z.position = 'fixed'; z.overflowX = 'hidden'; z.maxHeight = '45px'; z.height = '45px' }
  }

  
  if (!gid("bm2")) {
    dw = document.createElement('span')
    dw.id = 'bm2'
    gid('bm1').appendChild(dw)
    gid('bm2').setAttribute('style','display:block; visibility:hidden; position:fixed; left:0px; top:0px; width:100%; z-index:2000000000;')
    var z = gid('bm2').style
    z.display = 'block'; z.visibility = 'hidden'; z.position = 'fixed'; z.left = '0px'; z.top = '0px'; z.width = '100%'; z.zIndex = '2000000000'
  } else gid("bm2").innerHTML = ''


  function expire_date(){
    var qs = qr(href);if (qs == null) return ['','','91']
    var ip = unescape(qs.ip)
    var expire = (qs.expire) ? new Date(parseInt(qs.expire.toString().substring(0,10) * 1000)).toLocaleString() : ''
    var bh = (expire.length < 33) ? 91 : 104
    return [ip,expire,bh]
  }

  var title = gid('eow-title') || gc('title style-scope ytd-video-primary-info-renderer')[0]
  var title = (title) ? title[yt6.txt] : document.title.substring(0, document.title.length)
  if (title.indexOf(' - YouTube') == title.length - 10) title = title.substring(0, title.length - 10)
  if (title.indexOf(' - YouTube Gaming') == title.length - 17) title = title.substring(0, title.length - 17)
  if (!title && yt6.title2) var title = clone(yt6.title2)
  if (yt6.ytm && title == 'YouTube Music') {
    var z = gc('title style-scope ytmusic-player-bar')[0]
    if (z) { title = z[yt6.txt]; document.title = yt6.title = title + ' - YouTube Music' }
  }

  yt6.select_fmt = function(fmt) {
    if (!fmt) var fmt = (yt6.prefer_fmt) ? yt6.prefer_fmt : 'all'
    var b = gclass('preferred-format')
    for(i=0;i<b.length;i++){b[i].removeAttribute('checked'); b[i].checked = ''}
    var b = gc('preferred-format ' + fmt)[0], a = qual[yt6.userprefV[0]]
    b.setAttribute('checked','checked'); b.checked = 'true'
    yt6.prefer_fmt = fmt
    if (fmt != 'all' && a && !isNaN(a['a']) ) {//console.log(fmt +' '+ yt6.userprefV[0] +' '+ a['a'])
      var x
      if (yt6.fmts_fallback.V[fmt].indexOf(yt6.userprefV[0]) > -1) {
	x = yt6.userprefV[0]
      } else {
	  if (fmt == 'dash' && yt6.fmts_fallback.V.h264.indexOf(yt6.userprefV[0]) == -1 && qual[a['a']] && qual[a['a']]['av1']) {
	    x = qual[a['a']]['av1']
	  } else { x = a['a'] }
	}
      if (!(fmt == 'dash' && yt6.fmts_fallback.V['av1'].indexOf(yt6.userprefV[0]) > -1)) { //console.log('.fmt_bak '+x)

	yt6.no_default = false

        if (yt6.fmts_fallback.A[fmt].indexOf(x) > -1) {
	  for(j=0;j<yt6.userprefA.length;j++) if (yt6.fmts_fallback.A[yt6.prefer_fmt].indexOf(yt6.userprefA[j]) > -1) { x = yt6.userprefA[j]; break }
	}

	if (yt6.userprefV.indexOf(1 * x) > -1) { yt6.userprefV.splice(yt6.userprefV.indexOf(1 * x), 1) } else delete yt6.userprefV[20]
	yt6.userprefV.unshift(1 * x)

	if (yt6.fmts_fallback.A[fmt].indexOf(yt6.userprefV[0]) > -1) {
	  if (yt6.userprefA.indexOf(1 * x) > -1) { yt6.userprefA.splice(yt6.userprefV.indexOf(1 * x), 1) } else delete yt6.userprefA[20]
	  yt6.userprefA.unshift(1 * x)
	}
      }
      //console.log(yt6.userprefV +'\n'+yt6.userprefA )
    }
  }

var html = yt6.html

if (typeof html.splice != 'function') return void 0;

  var b = browserName.toLowerCase()
  if (b == 'brave') browserIcon = '<img style=&quot;width: 96px; height: 112px&quot; src=&quot;https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/brave-browser.png&quot;>'
  if (b == 'vivaldi') browserIcon = '<img style=&quot;width: 120px; height: 120px&quot; src=&quot;https://upload.wikimedia.org/wikipedia/commons/archive/e/e4/20190912144835%21Vivaldi_web_browser_logo.svg&quot;>'//https://vivaldi.com/wp-content/uploads/cropped-viv_icon-500px.png

  if (b == 'yandex') browserIcon = '<img style=&quot;width: 96px; height: 96px&quot; src=&quot;data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iNjBweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPiAgICAgICAgPHRpdGxlPk92YWwgKyBPdmFsICsgU2hhcGUgMjwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz4gICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iNC43MDY2MzY3MmUtMDklIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4gICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQkVCRUJFIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+ICAgICAgICA8Y2lyY2xlIGlkPSJwYXRoLTIiIGN4PSIzMCIgY3k9IjMwIiByPSIzMCI+PC9jaXJjbGU+ICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTMiPiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4gICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRUJFQkVCIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+ICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iNTEuMzQzMjcxNyUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4gICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMDUiIG9mZnNldD0iMCUiPjwvc3RvcD4gICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMTAwJSI+PC9zdG9wPiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4gICAgICAgIDxjaXJjbGUgaWQ9InBhdGgtNSIgY3g9IjMwIiBjeT0iMzAiIHI9IjI4LjUiPjwvY2lyY2xlPiAgICAgICAgPGZpbHRlciB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItNiI+ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMyIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldElubmVyMSI+PC9mZU9mZnNldD4gICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiBpbj0ic2hhZG93T2Zmc2V0SW5uZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJJbm5lcjEiPjwvZmVHYXVzc2lhbkJsdXI+ICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVySW5uZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIgcmVzdWx0PSJzaGFkb3dJbm5lcklubmVyMSI+PC9mZUNvbXBvc2l0ZT4gICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4xMDUgMCIgaW49InNoYWRvd0lubmVySW5uZXIxIiB0eXBlPSJtYXRyaXgiIHJlc3VsdD0ic2hhZG93TWF0cml4SW5uZXIxIj48L2ZlQ29sb3JNYXRyaXg+ICAgICAgICAgICAgPGZlTWVyZ2U+ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyI+PC9mZU1lcmdlTm9kZT4gICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhJbm5lcjEiPjwvZmVNZXJnZU5vZGU+ICAgICAgICAgICAgPC9mZU1lcmdlPiAgICAgICAgPC9maWx0ZXI+ICAgIDwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+ICAgICAgICA8ZyBpZD0iT3ZhbC0rLU92YWwtKy1TaGFwZS0yIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIj4gICAgICAgICAgICA8ZyBpZD0iT3ZhbCI+ICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4gICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJub25lIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4gICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPGcgaWQ9Ik92YWwiPiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIHhsaW5rOmhyZWY9IiNwYXRoLTUiPjwvdXNlPiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNCkiIHhsaW5rOmhyZWY9IiNwYXRoLTUiPjwvdXNlPiAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMzMuMDI0ODU3LDMzLjg2OTU4NzYgTDMzLjAyNDg1Nyw1MC45OTg3Mzk5IEMzMy4wMjQ4NTcsNTEuMzI1MTk1MiAzMS42MTAyMTczLDUxLjU4NjM1OTUgMjkuOTk5NzA0Myw1MS42MDgxMjMyIEMyOS45OTk3MDQzLDUxLjYwODEyMzIgMjYuOTc0NTUxNyw1MS4zMjUxOTUyIDI2Ljk3NDU1MTcsNTAuOTk4NzM5OSBMMjYuOTc0NTUxNywzMy44Njk1ODc2IEwxMi4wNjY0MjUyLDE5LjI4NzkxNjUgQzExLjgyNzAyNDcsMTkuMDQ4NTE1OSAxMi41ODg3NTM4LDE3LjkxNjgwNDEgMTMuNzYzOTkyOSwxNi43NDE1NjUgQzE0LjkzOTIzMjEsMTUuNTY2MzI1OCAxNi4wOTI3MDc2LDE0LjgwNDU5NjcgMTYuMzEwMzQ0NCwxNS4wNDM5OTczIEwyOS45Nzc5NDA2LDI4LjM4NTEzODIgTDQzLjY0NTUzNjgsMTUuMDQzOTk3MyBDNDMuODg0OTM3NCwxNC44MDQ1OTY3IDQ1LjAxNjY0OTIsMTUuNTY2MzI1OCA0Ni4xOTE4ODg0LDE2Ljc0MTU2NSBDNDcuMzY3MTI3NSwxNy45MTY4MDQxIDQ4LjE1MDYyMDMsMTkuMDQ4NTE1OSA0Ny45MzI5ODM0LDE5LjI4NzkxNjUgTDMzLjAyNDg1NywzMy44Njk1ODc2IFoiIGlkPSJTaGFwZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIgZmlsbD0iI0ZGRkZGRiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMy4wMjQ4NTcsMzMuODY5NTg3NiBMMzMuMDI0ODU3LDUwLjk5ODczOTkgQzMzLjAyNDg1Nyw1MS4zMjUxOTUyIDMxLjYxMDIxNzMsNTEuNTg2MzU5NSAyOS45OTk3MDQzLDUxLjYwODEyMzIgQzI5Ljk5OTcwNDMsNTEuNjA4MTIzMiAyNi45NzQ1NTE3LDUxLjMyNTE5NTIgMjYuOTc0NTUxNyw1MC45OTg3Mzk5IEwyNi45NzQ1NTE3LDMzLjg2OTU4NzYgTDEyLjA2NjQyNTIsMTkuMjg3OTE2NSBDMTEuODI3MDI0NywxOS4wNDg1MTU5IDEyLjU4ODc1MzgsMTcuOTE2ODA0MSAxMy43NjM5OTI5LDE2Ljc0MTU2NSBDMTQuOTM5MjMyMSwxNS41NjYzMjU4IDE2LjA5MjcwNzYsMTQuODA0NTk2NyAxNi4zMTAzNDQ0LDE1LjA0Mzk5NzMgTDI5Ljk3Nzk0MDYsMjguMzg1MTM4MiBMNDMuNjQ1NTM2OCwxNS4wNDM5OTczIEM0My44ODQ5Mzc0LDE0LjgwNDU5NjcgNDUuMDE2NjQ5MiwxNS41NjYzMjU4IDQ2LjE5MTg4ODQsMTYuNzQxNTY1IEM0Ny4zNjcxMjc1LDE3LjkxNjgwNDEgNDguMTUwNjIwMywxOS4wNDg1MTU5IDQ3LjkzMjk4MzQsMTkuMjg3OTE2NSBMMzMuMDI0ODU3LDMzLjg2OTU4NzYgWiIgaWQ9IlNoYXBlLTIiIGZpbGw9IiNFQzFDMjQiIGZpbHRlcj0idXJsKCNmaWx0ZXItNikiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==&quot;>'
  if (b == 'edge') b = 'edgium'
  if (b == 'ie') b = 'edge'

  if (b == 'chromium' || b == 'dragon') b = 'chrome'//b == 'brave' || b == 'vivaldi' || b == 'yandex' || 
  if (!browserIcon) {
    var browserIcon = ['firefox','chrome','opera','edgium','edge','safari']
    b = (browserIcon.indexOf(b) > -1) ? '<img src=&quot;https://www.youtube.com/img/desktop/supported_browsers/'+ b +'.png&quot;>' : ''
  } else {
      b = browserIcon
    }
  var output_log = '\\n\'+ yt6d.log +\''
  b = '<div style=&quot;height: 12px&quot;></div>' + b +'<div><div><b style=&quot;font-size: 20px; color: white; background-color: darkslateblue&quot;><strong>'+ browserName +' on '+ (navigator.oscpu || navigator.platform) +'</strong></b></div><br><textarea style=&quot;width: 280px; height: auto; background-color: white; color: black&quot;>' + navigator.userAgent + output_log +'</textarea></div>\''

  html.splice(1,0,'Direct links to YouTube media<br>for IP address: '+ expire_date()[0])

  html.push(
   '<b><div id="sp_title">' + title + '</div></b>' +
   'Links will expire on <br>' + expire_date()[1] + '<br><br>' +

   '<div id="yt6-switches">'+
   '<div style="inline-block">Preferred format in case <a href="#" onclick="(function() { msg_box0(\'User-Agent\',\''+ b +',\'black\',\'transparent\'); var z = gid(\'bm3\'); if (z) { z.style.height = \'0px\'; z.style.visibility = \'hidden\' } })(); return false" style="color: red; text-decoration: none" title="Click to see current User-Agent string" aria-label="Click to see current User-Agent string">' + browserName + '</a> is having trouble playing one back:<br>'+
    '<input type="radio" class="preferred-format all" onclick="var yt6 = gid(\'snarls_player\');  yt6.select_fmt(\'all\')">Any</input>'+
    '<input type="radio" class="preferred-format webm" onclick="var yt6 = gid(\'snarls_player\'); yt6.select_fmt(\'webm\')">WebM</input>'+
    '<input type="radio" class="preferred-format dash" onclick="var yt6 = gid(\'snarls_player\'); yt6.select_fmt(\'dash\')">DASH/MP4</input>'+
   '</div>'+
   '<button id="xhr_type" class="snarl-button yt-uix-button-text" onclick="var yt6 = gid(\'snarls_player\'), a; if (yt6.xhr.async) { yt6.xhr.async = false; a = \'synchronous (old)\' } else { yt6.xhr.async = true; a = \'asynchronous (new)\' }; this[yt6.txt] = \'XHR: \' + a">XHR: ' + ((yt6.xhr.async) ? 'asnchronous (new)' : 'synchronous \(old\)') + '</button><br>'+
'<button id="wp_t" class="snarl-button yt-uix-button-text" onclick="var yt6 = gid(\'snarls_player\'), wp_cb = gid(\'wp_cb\'); if (yt6.tbg && yt6.tbg.style.left) this.wp_left = clone(yt6.tbg.style.left); if (yt6.wallpaper) { if (typeof yt6.wallpaper == \'string\') { yt6d.wallpaper = clone(yt6.wallpaper); yt6.wallpaper = prompt(\'Enter URL(s) of custom wallpaper(s) (separated by comma)\\nType &quot;1&quot; to restore default.\\n\\nImages can be of any type which the browser can display. They will be hotlinked this way, so avoid linking to sites with strict download limits and prefer those served through caching servers.\', yt6d.wallpaper); if (yt6.wallpaper == 1) { yt6.wallpaper = false; yt6d.wallpaper = \'' + protocol() + yt6.cdn + '31ec5334c730af96803fb1b3cc677eb0c5e5c0df/extrawide.jpg\' }; if (yt6.wallpaper == undefined) { yt6.wallpaper = true; this[yt6.txt] = \'Thumbnails wallpaper\'; } else { if (!yt6.wallpaper && wp_cb && wp_cb.hasAttribute(\'checked\')) { wp_cb.removeAttribute(\'checked\'); wp_cb.checked = \'\'; yt6.wallpaper = false; this[yt6.txt] = \'Thumbnails wallpaper\'; } else this[yt6.txt] = \'Custom wallpaper\'; }; if (typeof yt6.wallpaper == \'string\' && (yt6.wallpaper.indexOf(\'https://\') == 0 || yt6.wallpaper.indexOf(\'http://\') == 0)) yt6d.wallpaper = clone(yt6.wallpaper); } else { this[yt6.txt] = \'Custom wallpaper\'; yt6.wallpaper = clone(yt6d.wallpaper) } } else { if (wp_cb) { wp_cb.setAttribute(\'checked\',\'checked\'); wp_cb.checked = \'true\'; yt6.wallpaper = true } }; wallpaper(); if (this.wp_left && yt6.tbg) yt6.tbg.style.left = clone(this.wp_left); ">' + ((typeof yt6.wallpaper == 'string') ? 'Custom wallpaper' : 'Thumbnails wallpaper') + '</button>'+
   '<input id="wp_cb" type="checkbox" onclick="var yt6 = gid(\'snarls_player\'), wp_t = gid(\'wp_t\'); if (this.checked) { yt6.wallpaper = (typeof yt6.wallpaper == \'boolean\') ? true : clone(yt6d.wallpaper); this.setAttribute(\'checked\',\'checked\') } else { if (typeof yt6.wallpaper == \'string\' && (yt6.wallpaper.indexOf(\'https://\') == 0 || yt6.wallpaper.indexOf(\'http://\') == 0)) { yt6d.wallpaper = clone(yt6.wallpaper) }; yt6.wallpaper = false; if (wp_t) wp_t[yt6.txt] = \'Thumbnails wallpaper\'; this.removeAttribute(\'checked\'); this.checked = \'\' }; wallpaper()" '+ ((yt6.wallpaper) ? 'checked="checked"' : '') + '>'+

   '</div><br>' +

   //'Note: Flash player can only be used with legacy AV formats which may not be available. When decryption key update fails, no valid media links occur. To fix it, remove and reload the script manually.<br><br>'+
   'If you like the program, feel free to throw me some coins under the link for whatever you think it\'s worth.<br>'
  )
  gid('bm2').innerHTML = html.join('<br>')


yt6.switches = function() {

  yt6.select_fmt()

  if (!gid('no_cards_btn')) {

  var dw = document.createElement('button')
  dw.id = 'no_cards_btn'
  dw[yt6.txt] = 'Suppress video cards'
  gid('yt6-switches').appendChild(dw)
  var onclic = "var t = gid('no_cards'); if (t) try { t.click() } catch(e) { FireEvent2(t, 'click') }"
  dw.setAttribute('onclick', onclic)
  dw.setAttribute('class','snarl-button yt-uix-button-text')
  //dw.setAttribute('style','display: inline-block; margin-left: 3px')
  var dw = document.createElement('input')
  dw.id = 'no_cards'
  dw.type = 'checkbox'
  gid('yt6-switches').appendChild(dw)
  var onclic = "var yt6 = gid('snarls_player'); if (this.checked) { yt6.no_cards = true } else { yt6.no_cards = false }; no_cards()"
  dw.setAttribute('onclick', onclic)
  dw.setAttribute('style','inline-block')
  if (yt6.no_cards) {
    dw.setAttribute('checked','checked')
  } else {
      dw.removeAttribute('checked')
    }

  var dw = document.createElement('br')
  gid('yt6-switches').appendChild(dw)

  }

  if (!gid('ads_off_btn')) {

  var dw = document.createElement('button')
  dw.id = 'ads_off_btn'
  dw[yt6.txt] = 'Remove ads'
  gid('yt6-switches').appendChild(dw)
  var onclic = "var t = gid('ads_off'); if (t) try { t.click() } catch(e) { FireEvent2(t, 'click') }"
  dw.setAttribute('onclick', onclic)
  dw.setAttribute('class','snarl-button yt-uix-button-text')
  var dw = document.createElement('input')
  dw.id = 'ads_off'
  dw.type = 'checkbox'
  gid('yt6-switches').appendChild(dw)
  var onclic = "var yt6 = gid('snarls_player'); if (this.checked) { yt6.ads_off = true } else { yt6.ads_off = false };"
  dw.setAttribute('onclick', onclic)
  if (yt6.ads_off) {
    dw.setAttribute('checked','checked')
  } else {
      dw.removeAttribute('checked')
    }

  var dw = document.createElement('br')
  gid('yt6-switches').appendChild(dw)

  }

  if (!gid('mute_btn')) {

  var dw = document.createElement('button')
  dw.id = 'mute_btn'
  dw[yt6.txt] = 'Mute video ads'
  gid('yt6-switches').appendChild(dw)
  var onclic = "var t = gid('mute_on'); if (t) try { t.click() } catch(e) { FireEvent2(t, 'click') }"
  dw.setAttribute('onclick', onclic)
  dw.setAttribute('class','snarl-button yt-uix-button-text')
  var dw = document.createElement('input')
  dw.id = 'mute_on'
  dw.type = 'checkbox'
  gid('yt6-switches').appendChild(dw)
  var onclic = "var yt6 = gid('snarls_player'); if (this.checked) { yt6.mute_on = true } else { yt6.mute_on = false }; if (yt6.p && typeof yt6.p.mute == 'function' && !(yt6.ytm && yt6.p.tagName == 'EMBED')) { if (!yt6.mute_on) { try { var b = v_(yt6.p); if (b) { b.volume = 1 }; yt6.pre_ad = '?'; yt6.p.unMute(); yt6.ad_muted = false; yt6.original.unMute() } catch(e){} } };"
  dw.setAttribute('onclick', onclic)
  if (yt6.mute_on) {
    dw.setAttribute('checked','checked')
  } else {
      dw.removeAttribute('checked')
    }

  var dw = document.createElement('br')
  gid('yt6-switches').appendChild(dw)

  }

  if (!gid('flash_on_btn')) {

  var dw = document.createElement('button')
  dw.id = 'flash_on_btn'
  dw[yt6.txt] = 'Force flash player usage'
  gid('yt6-switches').appendChild(dw)
  dw.setAttribute('class','snarl-button yt-uix-button-text')
  var onclic = "var t = gid('flash_on'); if (t) try { t.click() } catch(e) { FireEvent2(t, 'click') }"
  dw.setAttribute('onclick', onclic)
  //dw.setAttribute('style','display: inline-block; margin-left: 3px')
  var dw = document.createElement('input')
  dw.id = 'flash_on'
  dw.type = 'checkbox'
  gid('yt6-switches').appendChild(dw)
  var onclic =
	"var yt6 = gid('snarls_player'), p = player(), t = this; if (p && p.tagName == 'IFRAME') return void 0;"+
	"if (t) if (t.checked) {"+
	"     yt6.flash.forced = true; yt6.flash.flag = 1; yt6.flash.call = 'checkbox';"+
	"     if (p && p.tagName == 'DIV' && typeof p.getCurrentTime == 'function') { yt6.ytp.ct = p.getCurrentTime() || 0; yt6.ytp.cq = p.getPlaybackQuality() };"+
	"     forceFlashplayerObject(); switch_players(); switch_players(); if (yt6.p && yt6.p.tagName == 'EMBED' && browserName == 'Firefox') yt6.p.src == '';"+
	"     $waitUntil(function(){ var mp = yt6.original || original(yt6.p);"+
	"	  if (mp && mp.parentNode && mp.parentNode.getAttribute('id') == 'movie_player_to_dispose') { return true }"+
	"	},"+
	"	function() { var mp = yt6.original || original(yt6.p);"+
	"	  if (mp && mp.tagName != 'IFRAME') { mp.setAttribute('id','movie_player0'); mp.setAttribute('name','original');"+
	"	    if (mp.className.indexOf('YouTube_TM') == -1) mp.setAttribute('class','YouTube_TM ' + mp.className);"+
	"	  }"+
	"	},250,5000);"+
	"     if (!yt6.ytm) $waitUntil(function(){ var p = player();"+
	"	  if (p && p.tagName == 'EMBED' && typeof p.getPlayerState == 'function' && p.getPlayerState() >= 1) { return true } else {}"+
	"	},"+
	"	function() { if (yt6.ytp.ct > 3) { var p = player(); try { p.seekTo(yt6.ytp.ct) } catch(e){} }"+
	"	},600,6000)"+
	"} else { t.setAttribute('checked',''); yt6.flash.forced = false; back2html5() };"
  dw.setAttribute('onclick', onclic)
  dw.setAttribute('style','inline-block')
  if (yt6.flash.forced) {
    dw.setAttribute('checked','checked')
  } else {
      dw.removeAttribute('checked')
    }

  var dw = document.createElement('br')
  gid('yt6-switches').appendChild(dw)

  }

  if (!gid('control_panel2')) {

  var dw = document.createElement('div')
  dw.id = 'control_panel2'
  dw.innerHTML = '<div></div>'
  gid('yt6-switches').appendChild(dw)

  }

}

  yt6.switches()

  var dw = document.createElement('button')
  dw.id = "bm5";
  dw.innerHTML = 'Homepage'
  gid('bm2').appendChild(dw)
  gid('bm5').setAttribute('style','height: 24px; font-size: 15px; float: left; text-align: left; color: #EE0000')
  gid('bm5').setAttribute('class','snarl-button yt-uix-button-text')
  dw.style.height = '24px'
  dw.style.fontSize = '15px'
  dw.style.display = 'inline-block'
  dw.style.float = 'left'
  dw.style.textAlign = 'left'
  dw.style.color = '#EE0000'
  gid('bm5').setAttribute('onclick', 'tipping()')
//window.open( "' + protocol() + '//www.youtube.com/supported_browsers", "_blank").focus() ')

  var dw = document.createElement('div')
  dw.id = 'quit'
  gid('bm2').appendChild(dw)
  gid('quit').setAttribute('style','float: right; display: inline-block; margin-right: 12px')
  dw.style.display = 'inline-block'; dw.style.float = 'right'; dw.style.marginRight = '12px'

  var dw = document.createElement('br')
  gid('bm2').appendChild(dw)

  var dw = document.createElement('div')
  dw.id = 'subtitles_header'
  gid('bm2').appendChild(dw)

  var dw = document.createElement('div')
  dw.id = 'subtitles_list'
  gid('bm2').appendChild(dw)

  if (!gid('bm3')) {
    var dw = document.createElement('span')
    dw.id = 'bm3'
    if (gid('body-container') != null) {
      gid('body-container').appendChild(dw)
    } else {
	var bc = yt6.osw.parentNode; //gid('primary')
	if (!bc || (bc && !yt6.ytm && (bc.tagName != 'DIV' || (bc.getAttribute('id') != 'primary') )) ) bc = gid('primary-inner') || gid('content-layer') || gid('top')

	if (bc) {
	  bc.insertBefore(dw, yt6.osw)
	}

	bc = (!yt6.mobile) ? document.getElementsByTagName('YTD-PAGE-MANAGER')[0] : gid('bm1')
	if (bc) {
	  bc.parentNode.insertBefore(dw, bc);
	} else if (!yt6.mobile) {
	    yt6.appendChild(dw)
	  }
      }
  }

  var bm3 = gid('bm3')

  try {
  bm3.height = parseInt(gid('bm2').offsetHeight) + expire_date()[2]
  bm3.setAttribute('style','cursor: default; font-size: 13px; color:black; display:block; visibility:hidden; position:fixed; left:0%; top:48px; max-width:235px; height:' + bm3.height + 'px; margin-top:0px; margin-right:0px; background:#FFFFFF; opacity:1; padding:2px 2px 2px 2px; border:1px solid #DDD; z-index: 2147483648; overflow-y:hidden')
  var z = bm3.style
  z.cursor = 'default'; z.fontSize = '13px'; z.color = 'black'; z.display = 'block'; z.visibility = 'hidden'; z.position = 'fixed'; z.left = '0%'; z.top = '48px'; z.maxWidth = '235px'; z.height = bm3.height + 'px'; z.marginTop = '0px'; z.marginRight = '0px'; z.background = '#FFFFFF'; z.opacity = '1'; z.padding = '2px 2px 2px 2px'; z.border = '1px solid #DDD'; z.zIndex = '2147483648'; z.overflowY = 'hidden'

  bm3.setAttribute('class','yt-uix-button-menu ')
  try { bm3.innerHTML = gid('bm2').innerHTML } catch(e){}
  try { gid('bm2').innerHTML = '' } catch(e){}
//var csspopupheight = parseInt(bm3.offsetHeight) + 10 ;bm3.setAttribute('style',bm3.getAttribute('style') + ';height:' + csspopupheight + 'px;' + 'overflow-y: scroll')
  } catch(e){}


  //move alt-links
  var a = gid('yt6-links'), b = gid('alt-links'), m = 'used', n;
  if (a && b) {
    var z = gc('yt6-links')
    for (j=0;j<999;j++) {
      if (qual[j]) for (i=0;i<z.length;i++){
        if (z[i] && z[i].getAttribute('name') == j){
		  var y = getElementsByAttribute(bm3,'a','name',j)
		  if (y && y.length) {
		    for (k=0;k<y.length;k++) {
		      y[k].m = 'used'
		      if (y.length >= 2) {
		        if(!(y[k].parentNode != a && k < y.length-1)) { } else { y[k].m = 'alt';
		          //y[k].setAttribute('class','yt6-links-used')
		        }
		      }
		    }
	          }
	}
      }
    }
	var l = gclass('yt6-links','a',gid('bm3'))//-used')
	for(i=0;i<l.length;i++) {
	  if (yt6.mobile)
	    addEL(l[i], 'touchend', function(event) {
		//var touch = event.touches[0];
		this.href = this.href0
	    }, false);
	  n = (l[i].m == 'used') ? a : b; n.appendChild(l[i].previousSibling); n.appendChild(l[i]);
	}
  }



if (!gid('bm4')) {

  var dw = document.createElement('button')
  dw.id = 'bm4'
  dw.innerHTML = '<img src="//yt3.ggpht.com/-afBnHVG_R6E/AAAAAAAAAAI/AAAAAAAAAAA/LtE5kbPkZvE/s192-c-k-no-mo-rj-c0xffffff/photo.jpg" style="height:27px; font"></img><br><div style="margin-left: -2px">Download</div>'
//i1.ytimg.com/i/gsZadWjuuN2dEhI0mZfVfQ/mq1.jpg?v=531525b4

  var onclic = function(){

    var yt6 = gid('snarls_player'), bm0 = gid('bm0')
    if (yt6 && !yt6.mhp) getReferenceObjects()
    if (ytplayer.config && ytplayer.config.args && ytplayer.config.args.status == 'error') { yt6.status = 'unplayable'; ytplayer.config.args.status = 'unplayable' }

    var mhp = (yt6.mhp) ? ((yt6.layout != 16 || yt6.ytm) ? yt6.mhp.offsetHeight : yt6.mhp.parentNode.parentNode.offsetHeight) : 0
    if (mhp < 30 || mhp > 112) mhp = (!yt6.ytp.embed) ? 60 : 90
    var bm3 = gid('bm3')
    if (bm3) {
      bm3.style.top = mhp - 2 + 'px'//(!yt6.ytm) ?  : '0px'
      if (gclass('__ns__pop2top')[0]) {
        var z = gclass('__ns__pop2top')//NoScript-added class
	for(i=0;i<z.length;i++)
	if (z[i] && z[i].className) {
	  z[i].className = z[i].className.replace(' __ns__pop2top','')
	}
      }
    }

    if (yt6.ytm) {
      var ytm = document.getElementsByTagName('ytmusic-player')[0]
	  var yta = gid(yt_alert_message)
      if (ytm && yta && typeof ytm.getAttribute == 'function' && ytm.getAttribute('player-ui-state_') == 'MINIPLAYER') {
        yta.style.position = (yta.style.position == 'absolute') ? 'fixed' : 'absolute'
      }
    }

    if (yt6.mobile && yt6.api && typeof yt6.api.hasAttribute == 'function' && yt6.api.hasAttribute('playable')) yt6.age.check() //yt6.api.removeAttribute('playable')

    if  (video_title()[1] && window.ytplayer &&
	 window.ytplayer.config &&
	 bm0 &&
	 !(yt6.mobile && yt6.pre_ad) &&
	 (!yt6.wna ||
	  !gid('remove-sp') ||
	  !gid('controls-sp'))
	)
      {

	if (bm0 && bm0.parentNode.getAttribute('id') == 'movie_player_to_insert') {
	  unhide(bm0)
	  if (player()) yt6.api.insertBefore(yt6.p, yt6.api.firstChild)
	}

	if (yt6.mobile && yt6.pls) {// && !(!yt6.x && fyt6.p && typeof yt6.p.getPlayerState == 'function' && yt6.p.getPlayerState() != 2)) {
	  scrollToCurrentVideo()
	}
	set_controls()

    } else {

	var ytam = gid(yt_alert_message), wna = (yt6.layout == 12 && yt6.body2) ? gid('watch7-notification-area') || gid('alerts') || yt6.wna : yt6.wna2
        var ww = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb

	if (ytam)
	if (yt6.flexy && yt6.pls && ww < 1000) {
	  yt6.pls.firstElementChild.insertBefore(ytam, yt6.pls.firstElementChild.firstElementChild)
	} else if (wna && wna.parentNode && ytam != wna.firstChild) wna.insertBefore(ytam, wna.firstChild)

    if (!bm3) { var bm1 = gid('bm1'); if (bm1) bm1.parentNode.removeChild(bm1); redo_dl_button(  yt6.args,  yt6.html,  yt6.href); return void 0; }

    if (bm3.style.visibility === "visible") { 
      //gid("bm2").style.visibility = "hidden"
      bm3.style.visibility = "hidden"
      bm3.style.height = '0px'
    } else { 
        //gid("bm2").style.visibility = "visible"
        bm3.style.visibility = "visible"
        if ((typeof player.getPlayerState == 'function') && (flashvars != 'object') && (player.style.opacity == '1')) {
          bm3.style.opacity = '1'
        } else {
            bm3.style.opacity = '0.9'
          }

	
        var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)
        if (yt6.ytm && document.getElementsByTagName('ytmusic-player-bar')[0]) windowheight = (windowheight - document.getElementsByTagName('ytmusic-player-bar')[0].offsetHeight)
        var csspopupheight = bm3.height = Math.min(windowheight, bm3.scrollHeight)

        if (csspopupheight > windowheight - expire_date()[2]) { 
          bm3.style.height = windowheight - expire_date()[2] + 'px'; bm3.style.overflowY = 'scroll'
        } else { 
            bm3.style.height = csspopupheight + 'px'; bm3.style.overflowY = 'hidden'
          }

	bm3.style.height = '0px'
        var csspopupheight = bm3.height = Math.min(windowheight, bm3.scrollHeight)
        if (csspopupheight > windowheight - expire_date()[2]) {
          bm3.style.height = windowheight - expire_date()[2] + 'px'; bm3.style.overflowY = 'scroll'
	  if (yt6.ytg) bm3.style.height = bm3.style.height.replace('px','') - 39 + 'px'
        } else {
            bm3.style.height = csspopupheight + 'px'; bm3.style.overflowY = 'hidden' 
          }
      }

    }

  }//onclic

  gid('bm1').appendChild(dw)
  gid('bm4').setAttribute('style','font-size:10px; padding:0px 3px; width: 52px; max-height:30px; height: 30px; vertical-align: middle; display:inline-block; font-weight:bold;')
  gid('bm4').setAttribute('class','snarl-button yt-uix-button-text')
  gid('bm4').onclick = onclic

}//bm4


  try {

    yt6.ytp.response = ''
    var c = conf('args')


    if (c[1] && c[1].player_response && typeof JSON != 'undefined')
	yt6.ytp.response = JSON.parse(c[1].player_response.split('\\"').join('%22').split('\\u0026').join('//u0026').split('\\').join('').split('//u0026').join('\\u0026'))

	  if (yt6.ytp.response) {
	    if (c[1].player_response.indexOf('dashManifestUrl') != -1 && yt6.ytp.response.streamingData && yt6.ytp.response.streamingData.dashManifestUrl) { yt6.manifest.mpd = yt6.ytp.response.streamingData.dashManifestUrl }
	  }

    if (unescape(c[1].ttsurl) != 'undefined' || (c[1].player_response && c[1].player_response.indexOf('"captions":') != -1)) {//":{')
      if (unescape(c[1].ttsurl) == 'undefined' && !(Array.isArray(yt6.ttsurl) && yt6.ttsurl.length)) {
	c[1].ttsurl = []
	var z = yt6.ytp.response.captions.playerCaptionsTracklistRenderer.captionTracks
	if (z) for(i=0;i<z.length;i++){
	  if (z[i]) c[1].ttsurl[i] = z[i].baseUrl;
	}
	yt6.ttsurl = clone(ytplayer.config.args.ttsurl)
      }
    }
  } catch(e) {}

  var z = gid('bm10'); if (z) z.parentNode.removeChild(z)
  yt6.html = []


  var c = conf('args')
  if (yt6.flash.forced && (yt6.status == 'ok' || yt6.ytm || yt6.ytg)) {
    yt6d.current.video_id = c[1].video_id
    var mp = gc('forced flashplayer')[0]
    if ( !yt6.flash.vars || !mp || yt6.ytm ||
	 (mp && ( mp.getAttribute('flashvars').indexOf('url_encoded_fmt_stream_map=%40%40%40') > -1 ||
		  (yt6.flash.vars && yt6.flash.vars != mp.getAttribute('flashvars') && 
		    (!yt6.ytm && !(typeof mp.getPlayerState == 'function' && mp.getPlayerState() == 1))
		  )
		)
	 )
       ) {
	yt6.flash.call = 'b1'
	var mp = forceFlashplayerObject(); if (mp && yt6.ytm) yt6.api.insertBefore(mp, yt6.api.firstChild)
    }
  }


  if (gid('Error Warning')) gid('Error Warning').parentNode.removeChild(gid('Error Warning'))


}//redo




  buildObject(window.ytplayer)
  redo_dl_button(  yt6.args,  yt6.html,  yt6.href)
  yt6.title = clone(document.title)
  yt6d.previous.title = clone(yt6.title) + 'init'



function ev_log(event) {
  yt6d.log.push(event)
  if (yt6d.log.length > 100) yt6d.log.splice(0,1)
}


var jq0 = function()
 {

    var js = document.createElement('style')
    js.type = 'text/css'
    js.media = 'screen'
    var tbg = (yt6.layout == 12) ? '#theater-background' : '#theater-right'
    var code = 

".mejs-overlay-button {"+
"	position: absolute;"+
"	top: 50%;"+
"	left: 50%;"+
"	width: 100px;"+
"	height: 100px;"+
"	margin: -50px 0 0 -50px;"+
"	background: url('" + yt6.cdn2 + "5b5ffacc074c0332f668db10bd2e3c36aa0be38e/bigplay.png') no-repeat;"+
"}"+
""+
".no-svg .mejs-overlay-button { "+
"	background-image: url('" + yt6.cdn2 + "5b5ffacc074c0332f668db10bd2e3c36aa0be38e/bigplay.png');"+
"}"+
""+
".mejs-overlay-loading {"+
"	position: absolute;"+
"	top: 50%;"+
"	left: 50%;"+
"	width: 80px;"+
"	height: 80px;"+
"	margin: -40px 0 0 -40px;"+
"	background: #333;"+
"	background: url('" + yt6.cdn2 + "5b5ffacc074c0332f668db10bd2e3c36aa0be38e/bigplay.png');"+
"	background: rgba(0, 0, 0, 0.9);"+
"	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(50,50,50,0.9)), to(rgba(0,0,0,0.9)));"+
"	background: -webkit-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9));"+
"	background: -moz-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9));"+
"	background: -o-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9));"+
"	background: -ms-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9));"+
"	background: linear-gradient(rgba(50,50,50,0.9), rgba(0,0,0,0.9));"+
"}"+
""+
".mejs-overlay-loading span {"+
"	display: block;"+
"	width: 80px;"+
"	height: 80px;"+
"	background: transparent url('" + yt6.cdn2 + "2111d0cf292b9e0f9bcb7ab79a8698b5826b5ba5/loading.gif') 50% 50% no-repeat;"+
"}"+
""+
".mejs-container .mejs-controls {"+
"	position: absolute;"+
"	list-style-type: none;"+
"	margin: 0;"+
"	padding: 0;"+
"	bottom: 0;"+
"	left: 0;"+
"	background: url('" + yt6.cdn2 + "a274ddb34b100c5123c043c0c81eda1fd83c74b6/background.png');"+
"	background: rgba(0, 0, 0, 0.7);"+
"	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(50,50,50,0.7)), to(rgba(0,0,0,0.7)));"+
"	background: -webkit-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7)); "+
"	background: -moz-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7));"+
"	background: -o-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7)); "+
"	background: -ms-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7)); 	"+
"	background: linear-gradient(rgba(50,50,50,0.7), rgba(0,0,0,0.7)); 	"+
"	height: 30px;"+
"	width: 100%;"+
"}"+
""+
".mejs-controls .mejs-button button {"+
"	cursor: pointer;"+
"	display: block;"+
"	font-size: 0;"+
"	line-height: 0;"+
"	text-decoration: none;"+
"	margin: 7px 5px;"+
"	padding: 0;"+
"	position: absolute;"+
"	height: 16px;"+
"	width: 16px;"+
"	border: 0;"+
"	background: transparent url('" + yt6.cdn2 + "e7e07cca212378b89ecdc11946d2a3fa97a63f23/controls.png') no-repeat;"+
"}"+
""+
".no-svg .mejs-controls .mejs-button button { "+
"	background-image: url('" + yt6.cdn2 + "e7e07cca212378b89ecdc11946d2a3fa97a63f23/controls.png');"+
"}"+
""+
".mejs-controls .mejs-volume-button .mejs-volume-slider {"+
"	display: none;"+
"	height: 115px;"+
"	width: 25px;"+
"	background: url('" + yt6.cdn2 + "a274ddb34b100c5123c043c0c81eda1fd83c74b6/background.png');"+
"	background: rgba(50, 50, 50, 0.7);"+
"	-webkit-border-radius: 0;"+
"	-moz-border-radius: 0;"+
"	border-radius: 0;"+
"	top: -115px;"+
"	left: 0;"+
"	z-index: 1;"+
"	position: absolute;"+
"	margin: 0;"+
"}"+
""+
".mejs-controls .mejs-captions-button .mejs-captions-selector {"+
"	visibility: hidden;"+
"	position: absolute;"+
"	bottom: 26px;"+
"	right: -10px;"+
"	width: 130px;"+
"	height: 100px;"+
"	background: url('" + yt6.cdn2 + "a274ddb34b100c5123c043c0c81eda1fd83c74b6/background.png');"+
"	background: rgba(50,50,50,0.7);"+
"	border: solid 1px transparent;"+
"	padding: 10px;"+
"	overflow: hidden;"+
"	-webkit-border-radius: 0;"+
"	-moz-border-radius: 0;"+
"	border-radius: 0;"+
"}"+
""+
".mejs-captions-text {"+
"	padding: 3px 5px;"+
"	background: url('" + yt6.cdn2 + "a274ddb34b100c5123c043c0c81eda1fd83c74b6/background.png');"+
"	background: rgba(20, 20, 20, 0.8);"+
""+
"}"+
"/* End: Track (Captions and Chapters) */"+
""+
".mejs-controls .mejs-speed-button .mejs-speed-selector {"+
"	position: absolute;"+
"	visibility: hidden;"+
"	bottom: 26px;"+
"	width: 86px;"+
"	right: -110px;"+
"	background: url('" + yt6.cdn2 + "a274ddb34b100c5123c043c0c81eda1fd83c74b6/background.png');"+
"	background: rgba(50,50,50,0.7);"+
"	border: solid 1px transparent;"+
"	padding: 10px;"+
"	overflow: hidden;"+
"	-webkit-border-radius: 0;"+
"	-moz-border-radius: 0;"+
"	border-radius: 0;"+
"}"+
""+
".mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector {"+
"	visibility: hidden;"+
"	position: absolute;"+
"	bottom: 26px;"+
"	right: -10px; "+
"	width: 130px;"+
"	height: 100px;"+
"	background: url('" + yt6.cdn2 + "a274ddb34b100c5123c043c0c81eda1fd83c74b6/background.png');"+
"	background: rgba(50,50,50,0.7);"+
"	border: solid 1px transparent;"+
"	padding: 10px;"+
"	overflow: hidden;"+
"	-webkit-border-radius: 0;"+
"	-moz-border-radius: 0;"+
"	border-radius: 0;"+
"}"+
""+
".mejs-postroll-layer {"+
"	position: absolute;"+
"	bottom: 0;"+
"	left: 0;"+
"	width: 100%;"+
"	height: 100%;"+
"	background: url('" + yt6.cdn2 + "a274ddb34b100c5123c043c0c81eda1fd83c74b6/background.png');"+
"	background: rgba(50,50,50,0.7);"+
"	z-index: 1000;"+
"	overflow: hidden;"+
"}"+
".mejs-postroll-close {"+
"	position: absolute;"+
"	right: 0;"+
"	top: 0;"+
"	background: url('" + yt6.cdn2 + "a274ddb34b100c5123c043c0c81eda1fd83c74b6/background.png');"+
"	background: rgba(50,50,50,0.7);"+
"	color: #fff;"+
"	padding: 4px;"+
"	z-index: 100;"+
"	cursor: pointer;"+
"}"+
"/* End: Postroll */"+
""+
tbg + " {"+
"  font: bold 180px Impact, Sans-Serif;"+
"  top: 0px;"+
"  position: absolute;"+
//"  -moz-text-fill-color: transparent;"+
//"  -webkit-text-fill-color: transparent;"+
//"  -moz-background-clip: text;"+
//"  -webkit-background-clip: text;"+
"  background-size: 200px;"+
"  background-position: 0 0;"+
"  background-repeat:  no-repeat;"+
"}"
;

    try {
      js.appendChild(document.createTextNode(code))
      gid('video-hide').appendChild(js)
    } catch (e) {
      js.text = code
      try { gid('video-hide').appendChild(js) } catch(e){}
    }
    delete js
loadCSS( yt6.cdn2 + '407f4a4c332ed2f7c7219ddeadf7fa211ea998d9/mediaelementplayer.css',function(){})





function mep_run() {

					function media_error_handler(me) { ev = '1error'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player1 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src))
					    return void 0; var player1 = (typeof player1 != 'undefined') ? player1 : me
					  if (me.networkState == 1 || me.networkState == 3) {

					    var A_V = [], A_ = [], mep = mep_x("mep_")
					    me.loaded = false; if (browserName == 'Safari' || browserName == 'IE') yt6.player1.isLoaded = false
					    var sauce = getElementsByAttribute(document,'input','name', mep + '_sourcechooser')
					    if (sauce != undefined && sauce.length != 0) {
					      for (i=0;i<parseInt(sauce.length);i++) {
						if (sauce[i] != undefined) {
						  var z = 1 * ((sauce[i].id && sauce[i].id.split('sourcechooser_')[1]) || 0)
						  if (yt6.A_V && Array.isArray(yt6.A_V) && yt6.A_V[z]) A_V.push(z)
						  if (yt6.A_ && Array.isArray(yt6.A_) && yt6.A_[z]) A_.push(z)
						  var z = sauce[i].getAttribute('checked')
						  if ((z && sauce[i].checked) || sauce[i].checked === true) {
						    yt6.current = 1 * sauce[i].id.split('_sourcechooser_')[1]
						    sauce[i].removeAttribute('checked')
						    //break;
						  }
						}
					      }
					    }

					    //if (!yt6.current) yt6.failed_itags = yt6.userprefV[0]
					    if (typeof yt6.failed_itags == 'undefined') { yt6.failed_itags = []; yt6.failed_itags2 = 1 }

					    function rewrite_links() {
						if (!yt6.ytg) {
						  if (sauce != undefined && sauce.length != 0) {
						    for (i=0;i<sauce.length;i++) {
						      if (sauce[i].time != '1') {
							//sauce[i].parentNode.parentNode.removeChild(sauce[i].parentNode)
						      }
						    }
						    if (typeof sauce[0].click == 'function') sauce[0].click()
						    if (!sauce.length && yt6.p && yt6.p.tagName == 'EMBED') switch_players()
						  }
						  var z = gc('ytassetsjs-0')
						  for (k=z.length;k>-1;k--) {
						    if (z[k] && z[k].innerHTML.indexOf('var ') != -1 && gid('ytassetsjs') != null && gid('ytassetsjs').innerHTML.indexOf('var ') != -1) z[k].parentNode.removeChild(z[k])
						  }
						} else {
						    me.src = 'https://www.youtube.com/ptracking'
						    if (yt6.x) switch_players();
						  }

						//yt6.errcount = 0

					    }

					    function decryption_failure(){ //console.log('df')

					      if (yt6.status == 'unplayable' && player() && yt6.p.tagName == 'IFRAME') { return void 0; } // take no action in this case
					      if (yt6d.update_in_progress) { return void 0 }
					      yt6d.update_in_progress = true

					      var z = gc('mejs-overlay-error');
					      if (z[0]) {
					        z[0][yt6.txt] = 'Video signature decryption failed!';
					        z[0].parentNode.style.setProperty('display','block','')
					      }
							//console.log('Boo!');

						var z = gc('ytassetsjs-0'); z = (z) ? z.length : 0
						if (typeof yt6.errcount == 'undefined') yt6.errcount = 0;
						yt6.ad_ = 1; //just to avoid an unnecessary jump
						yt6.errcount = (!yt6.errcount && z) ? yt6.errcount + parseInt(z) : (yt6.errcount + 1);
						delete yt6.current

						if ( !gid('ytassetsjs') ||
						      ( gc('yt6-proxy-error') &&
							gc('yt6-proxy-error').length < (1 * proxies.length) &&
							(1 + 1 * proxies.length) >= yt6.errcount
						      )
						   ) {
							ajax1(true, yt6.ytg)
							yt6.error = ''; if (yt6.failed_itags2 < 5) { yt6.failed_itags = []; yt6.retry = 0; } //ev_log('retry') }
							var built = buildObject(window.ytplayer)
							if ((yt6.xhr.async && !!built) || (!yt6.xhr.async && video_title()[1]) || yt6.ytm) {//if ((!!built && !yt6.xhr.async) || yt6.ytm) {
							  redo_dl_button(  yt6.args,  yt6.html,  yt6.href)
							  yt6d.mep_up()
							  yt6d.mep_renew()
							  autoplay()
							  if (yt6d.update_in_progress) { yt6.failed_itags = []; yt6.failed_itags2 = 1; delete yt6d.update_in_progress }
							}

						} else { //console.log('t40')
						    var t4 = gid('test-4')
						    if (t4 != null && t4.innerHTML != ''){ //console.log('t41')
						      var dls = gid('bm3')
						      dls = (dls) ? dls.getElementsByTagName('a') : null
						      var z = t4.getElementsByTagName('a');
						      var lchk = (z[0]) ? getElementsByAttribute(gid('bm3'),'a','name',z[0].getAttribute('name'))[0] : null
						      if (z[0] && lchk && z[0].getAttribute('href') != lchk.getAttribute('href').split('&title')[0]){ //console.log('t42')
							for(k=0;k<z.length;k++){
							  if (z[k] && z[k].name && z[k].href && z[k].href.indexOf('signature=undefined') == -1) { //console.log('t43'+k)
							    var qq = z[k].innerHTML
							    if (typeof qq.split(" ")[1] != 'undefined') { var x = " - " + qq.split(" ")[0] + " " + qq.split(" ")[2]; if (typeof qq.split("+")[1] != 'undefined') { var x = x + ' +' + qq.split("+")[1] } else { if (typeof qq.split(" ")[3] != 'undefined') { var x = x + ' ' + qq.split(" ")[3] }} } else var x = '';
							    yt6.linx[z[k].name] = z[k].href.split('https:').join('').split('http:').join('').split('&amp;').join('&')

							    var y = gid(mep_x('mep_') + '_sourcechooser_' + z[k].name)
							    var http = (typeof yt6.linx[z[k].name] == 'string' && yt6.linx[z[k].name].indexOf('http') == 0) ? '' : protocol()
							    if (y && y.tagName == 'INPUT') y.value = http + yt6.linx[z[k].name]
							    if (dls) {
							      for(l=0;l<dls.length;l++){
								if (dls[l].name && dls[l].name == z[k].name) { dls[l].href = http + yt6.linx[z[k].name] + '&title=' + escape(ytplayer.config.args.title + x);t4.setAttribute('name', z[k].name) }
							      }
							    }
								var dash = gid(mep_x('mep_') + '_sourcechooser_'+z[k].name)
								if (dash) {
								  no_default(z[k].name, 'V')
								  dash.setAttribute('checked','checked'); dash.time = '1'
								  yt6.player1.setSrc(z[k].name);
								}
							  } else { //console.log('t43-')
								  //yt6.player1.setSrc('https://www.youtube.com/ptracking')
								  //if (yt6.x) switch_players(); player().playVideo();
							    }
							};
							if (typeof t4.getAttribute('name') == 'number') {
							  //var z = gc('yt6-proxy-error')
		          				  //for (k=z.length;k>-1;k--) {
							  //  if (z[k]) z[k].parentNode.removeChild(z[k])
							  //}

							};
						      } else { //console.log('t44')
							  rewrite_links()
							}
						    }
						    if (yt6d.update_in_progress) { delete yt6d.update_in_progress }
						  }
					    }

					    if (Array.isArray(yt6.failed_itags)) yt6.failed_itags.push(yt6.current)

					    var sauce = sauce || getElementsByAttribute(document,'input','name', mep + '_sourcechooser'), audiosauce = []
					    for (k = 0; k < sauce.length; k++) {
						if (sauce[k] && typeof sauce[k].value == 'string' && !isNaN(itag(sauce[k].value)) && yt6.fmts_fallback.A[yt6.prefer_fmt].indexOf(itag(sauce[k].value)) > -1) audiosauce.push(sauce[k])
					    }

					    var limit = (yt6.userprefV[0] != yt6.userprefA[0]) ? sauce : audiosauce
					    if (limit && limit.length) { //&& limit.length < 11
					      //if (yt6d.init == yt6.vid) {
					      //  limit = yt6.limit = (Math.round(limit.length / 2) )//- A_V.length - A_.length - 2
					      //} else 
						limit = yt6.limit = (limit.length - 1)// - ((yt6.yt_otf) ? yt6.yt_otf.length : 0))// + proxies.length - 2)
					      if (limit == 1 && typeof yt6.current == 'number' && typeof yt6.A_[yt6.current] == 'string') {
						switch_players()
					      } else if (yt6.ytg) yt6.errcount = 0
					    } else limit = 11
					    //if (yt6.yt_otf && yt6.yt_otf.length) limit = (limit - yt6.yt_otf.length) > 1 ? (limit - yt6.yt_otf.length) : 1
					    if (yt6.live) { limit = 2 * limit } //else limit = Math.floor(limit / 2)

					    //console.log('retry: '+ yt6.retry +' limit:'+ limit +' current:'+ yt6.current)// + ' failed_itags2:'+ yt6.failed_itags2 +' failed_itags:' + yt6.failed_itags);



					    if ( yt6.retry >= limit && yt6.failed_itags2 < 5) { yt6.retry = 0
					      if (yt6.failed_itags2 < 2) {
						yt6.failed_itags = []; yt6.failed_itags2++; decryption_failure(); return void 0
					      } else {
						  yt6.failed_itags2 = 5
						}
					    }//if ( yt6.retry >= limit && yt6.failed_itags2 < 5) { yt6.retry = 0; if (yt6.failed_itags2 < 2) { yt6.failed_itags = [] }; yt6.failed_itags2 = 5 }//++ } else { }//autoplay(false) && // || (yt6.retry >= 0 && yt6.current == 242 && yt6.failed_itags.toString().split('0').length >= 3)
					    if ( yt6.retry < limit && yt6.failed_itags2 < 5 && !(yt6.retry >= Math.round(limit / 4) && yt6.failed_itags2 > 1 && yt6.failed_itags.length >= 4) 
//(gid('ytassetsjs') || yt6.ytg ) &&
					//	 && !((yt6.failed_itags.includes(171) || yt6.failed_itags.includes(140)) )//&& (yt6.failed_itags.includes(278) || yt6.failed_itags.includes(132)) && (yt6.failed_itags.includes(43) || yt6.failed_itags.includes(18)))
					       ) {
					      if (sauce[i]) { sauce[i].removeAttribute('checked'); sauce[i].checked = '' }; 
					      if (!(yt6.md && yt6.browser_tab == 'hidden' && (Array.isArray(yt6.yt_otf) && typeof itag(me.src) == 'number' && typeof yt6.yt_otf[itag(me.src)] != 'undefined'))) me.pause()


						function uniq(a) {
						    var seen = {};
						    return a.filter(function(item) {
						        var z = (( (yt6.failed_itags2 < 3 && yt6.md && yt6.browser_tab == 'hidden' && (item == 18 || item == 22 || item == 43)) //||
								  //seen.hasOwnProperty(item) // each element only once
								  || (!(yt6.userprefV[0] || (item && yt6.userprefV[1] == item))) //do not accept a userspecified match on fallback
								 ) //|| (item != yt6.userprefV[0] && yt6.yt_otf.indexOf(item) > -1) // leave out unplayable links
								) ? false
								 : (seen[item] = true); //console.log('filter ok? '+item + ' '+z)
							return z
						    });
						}
						function failed_itags(a) {
						    return a.filter(function(item) {
						        var z = ( yt6.failed_itags.indexOf(item) > -1 || item == 278 || item == 132
								  || (item != yt6.userprefV[0] && yt6.yt_otf.indexOf(item) > -1)
								) ? false
								 : true
							return z
						    });
						}

						//console.log(Math.round(sauce.length / 1) - A_V.length - A_.length +' - '+ yt6.current)
					      var fmt = 'all', fallback
					      if ( //!( yt6.current == 132 && (Math.round(sauce.length / 1) - A_V.length - A_.length < 5 || yt6d.init == yt6.vid) ) && 
						   //!(yt6.failed_itags.includes(132) && yt6.current == 132) &&
						   !(yt6.failed_itags.includes(600) && yt6.failed_itags.includes(599)) &&
						   (yt6.userprefA[0] !== yt6.userprefV[0] || !yt6.fmts_fallback.A.all.includes(itag(me.src)) )) {

						if (yt6.prefer_fmt == 'webm') fmt = 'dash'
						if (yt6.prefer_fmt == 'dash') fmt = 'webm'
						if (!yt6.errcount && fmt == 'all') {
						  yt6.fmts_fallback_uniq = uniq(yt6.fmts_fallback.V.uniq[yt6.prefer_fmt])
						  fallback = clone(yt6.fmts_fallback.V[fmt])
						} else {
						    //if (yt6.failed_itags2 < 2 && yt6.retry < 2) {
						    //  yt6.fmts_fallback_uniq = uniq(yt6.fmts_fallback.V.revers[yt6.prefer_fmt])
						    //  fallback = clone(yt6.fmts_fallback.V[fmt])
						    //} else {
						        yt6.fmts_fallback_uniq = uniq(yt6.fmts_fallback.V.uniq[yt6.prefer_fmt])
							yt6.fmts_fallback_uniq.push.apply(yt6.fmts_fallback_uniq, uniq(yt6.fmts_fallback.A.uniq[yt6.prefer_fmt]))
							if (fmt == 'dash') {
							  fallback = clone(yt6.fmts_fallback.V.uniq['av1']); fallback.push.apply(fallback, uniq(yt6.fmts_fallback.V.uniq[fmt]))
							} else
						            fallback = uniq(yt6.fmts_fallback.V.uniq[fmt])
							fallback.push.apply(fallback, uniq(yt6.fmts_fallback.A.uniq[fmt]))
						    //  }
						  }
						if (yt6.md && yt6.browser_tab == 'hidden') {
						  yt6.fmts_fallback_uniq = yt6.fmts_fallback_uniq.splice(yt6.fmts_fallback_uniq.indexOf(18), 1).splice(yt6.fmts_fallback_uniq.indexOf(22), 1)
						  fallback = fallback.splice(yt6.fmts_fallback_uniq.indexOf(18), 1).splice(yt6.fmts_fallback_uniq.indexOf(22), 1)
						}
						//yt6.fmts_fallback_uniq = failed_itags(yt6.fmts_fallback_uniq)
						//fallback = failed_itags(fallback)
						//if (fmt) {
						  yt6.fmts_fallback_uniq.push.apply(yt6.fmts_fallback_uniq, fallback); //console.log(yt6.fmts_fallback_uniq.toString())
						//}
						yt6.fmts_fallback_uniq.push.apply(yt6.fmts_fallback_uniq, yt6.fmts_fallback.A.revers[yt6.prefer_fmt])
						yt6.fmts_fallback_uniq.push.apply(yt6.fmts_fallback_uniq, yt6.fmts_fallback.A.revers[fmt])
						var x = yt6.userprefV[0]
					      } else {
						  if (yt6.prefer_fmt == 'webm') fmt = 'dash'
						  if (yt6.prefer_fmt == 'dash') fmt = 'webm'
						  yt6.fmts_fallback_uniq = (!yt6.errcount && fmt == 'all') ? uniq(yt6.fmts_fallback.A.uniq[yt6.prefer_fmt]) : uniq(yt6.fmts_fallback.A.revers['all']) //uniq()
						  //if (fmt) {
						    yt6.fmts_fallback_uniq.push.apply(yt6.fmts_fallback_uniq, yt6.fmts_fallback.A[fmt])
						  //}
						  var x = yt6.userprefA[0]
						  if (yt6d.init && yt6d.init == yt6.vid) delete yt6d.init
						}

						var start, itag_ = (!yt6.failed_itags[yt6.failed_itags.length-1] || limit.length < 2) ? 1*itag(me.src) : yt6.fmts_fallback_uniq[(yt6.fmts_fallback_uniq.indexOf(1 * yt6.failed_itags[yt6.failed_itags.length-1]) + 1)];

						var k = (yt6.fmts_fallback_uniq.indexOf(yt6.userprefV[0]) < uniq(yt6.fmts_fallback.V.uniq[yt6.prefer_fmt]).length) ? yt6.fmts_fallback_uniq.indexOf(yt6.userprefV[0]) : 0
						for(k = k; k<yt6.fmts_fallback_uniq.length; k++) {
						  itag_ = 1*(yt6.fmts_fallback_uniq[k])
						  if (limit.length < 2 || (typeof itag_ == 'number' && !isNaN(itag_) && itag_ != 1 && yt6.failed_itags.indexOf(itag_) == -1)) {
						    var start = k; break
						  } else {
						      if (yt6.prefer_fmt == 'all' || yt6.prefer_fmt == 'dash') {
							if (yt6.fmts_fallback_uniq.lastIndexOf(itag_) > -1 && yt6.fmts_fallback_uniq.lastIndexOf(itag_) < yt6.fmts_fallback_uniq.lastIndexOf(18)) k = 1*(yt6.fmts_fallback_uniq.lastIndexOf(18)-1)
						      } else if (yt6.fmts_fallback_uniq.lastIndexOf(itag_) > -1 && yt6.fmts_fallback_uniq.lastIndexOf(itag_) < yt6.fmts_fallback_uniq.lastIndexOf(43)) k = 1*(yt6.fmts_fallback_uniq.lastIndexOf(43)-1)
						    }
						}
						//console.log('itag1: '+ itag(me.src) +'\n'+ yt6.failed_itags[yt6.failed_itags.length-1] +'\n'+yt6.fmts_fallback_uniq[(yt6.fmts_fallback_uniq.indexOf(1 * yt6.failed_itags[yt6.failed_itags.length-1]) + 1)] +'\n'+ itag_)

						if (typeof itag_ != 'number') itag_ = yt6.userprefV[0]

					      if (!(yt6.live && yt6.retry % 6 < 5)) { // leave some room for decoding errors in higher resolution live streams

					      var start = start || ((yt6.failed_itags.indexOf(itag_) == -1) ? (yt6.fmts_fallback_uniq.indexOf(itag_)) : (yt6.fmts_fallback_uniq.lastIndexOf(itag_) + 1)); //console.log(itag_);//console.log(yt6.fmts_fallback_uniq)
					      for(j = start; j<yt6.fmts_fallback_uniq.length; j++){
						if (j < 0) continue; //console.log(j +' '+itag_)
						if ( (qual[itag_] && qual[itag_]['m'].indexOf('webm') > -1 && yt6.prefer_fmt == 'dash') ||
						     (qual[itag_] && qual[itag_]['m'].indexOf('webm') == -1 && yt6.prefer_fmt == 'webm') ||
						     yt6.fmts_fallback_uniq[j] == itag_
						   ) {
						  //var k = (yt6.ytg) ? 0 : (j+yt6.retry)

						  if (yt6.failed_itags2 == 1 || yt6.failed_itags2 == 2) {

						    for(k=Math.max(j,0);k<yt6.fmts_fallback_uniq.length;k++){ //console.log(yt6.failed_itags2 + ' ' +k +' '+yt6.retry +' / '+ limit+' --  '+yt6.failed_itags)//k=Math.max(j+1,0) //.indexOf(1)
						      var itag_ = yt6.fmts_fallback_uniq[k]; if (itag_ == 160) itag_ = 132; //if (itag_ == 241) itag_ = 278; //console.log(k +' '+ itag_)
						      //if (yt6.md && yt6.browser_tab == 'hidden' && (Array.isArray(yt6.yt_otf) && typeof yt6.yt_otf[itag_] != 'undefined')) { yt6.failed_itags.push(itag_); continue }
						      //if (yt6.failed_itags.indexOf(itag_) > -1 && yt6.failed_itags.indexOf(qual[itag_]['a']) > -1) continue
						      var dash = gid(mep_x('mep_') + '_sourcechooser_' + itag_); //console.log(dash)
						      if (yt6.live && dash && itag_ < 103) continue
						      if (!dash) {
							if (!yt6.fmts_fallback_uniq.includes(itag_)) { yt6.failed_itags.push(itag_); if (itag_ == 132) yt6.failed_itags.push(160); if (itag_ == 278) yt6.failed_itags.push(241); if (itag_ == 241) yt6.failed_itags.push(278) //itag_ = qual[itag_]['a'];
						//	  if (!fmt) dash = gid(mep_x('mep_') + '_sourcechooser_' + qual[itag_]['a'])
							} else {
							    if (yt6.fmts_fallback.A.all.includes(itag_)) yt6.failed_itags.push(itag_)
							  }
						      }
						      if (itag_ && dash)
						      if (!yt6.failed_itags.includes(itag_)) {
							if (!(yt6.failed_itags.length > 1 &&
							  yt6.failed_itags[yt6.failed_itags.length-1] == 0 &&
							  yt6.failed_itags[yt6.failed_itags.length-2] == 0
							)) {
							  yt6.failed_itags.push(0); break
						        } else if (!yt6.failed_itags.includes(itag_)) { yt6.failed_itags.push(itag_); if (itag_ == 132) yt6.failed_itags.push(160); if (itag_ == 278) yt6.failed_itags.push(241); if (itag_ == 241) yt6.failed_itags.push(278) }
						      } //else if (itag_ == yt6.current) yt6.retry++
						    }
						    if (!(yt6.failed_itags2 > 1 && yt6.A_[itag_] )) { yt6.retry++; //console.log('retry '+yt6.retry +' '+itag_);

							break

						    } else { yt6.failed_itags2++ }

						  } else //if (yt6 && !yt6)
							if (yt6.failed_itags2 == 3 || yt6.failed_itags2 == 4) { //yt6.failed_itags = []// continue searching in reverse order (from lowest resolution to highest)

							// move medium quality legacy formats (18, 43) to a lower index, so they would come after all the 360p adaptive formats
							// old formats show problems when playback speed is high and the tab is in the background

							var insert_at_fmt = 332 //332,396,243,134,167,43,18
							if (yt6.fmts_fallback_uniq.indexOf(18) > -1) try {
							  yt6.fmts_fallback_uniq.splice(yt6.fmts_fallback_uniq.indexOf(18), 1)
							  yt6.fmts_fallback_uniq.splice(yt6.fmts_fallback_uniq.indexOf(insert_at_fmt), 0, 18)
							  insert_at_fmt = 18
							} catch(e){}
							if (yt6.fmts_fallback_uniq.indexOf(43) > -1) try {
							  yt6.fmts_fallback_uniq.splice(yt6.fmts_fallback_uniq.indexOf(43), 1)
							  yt6.fmts_fallback_uniq.splice(yt6.fmts_fallback_uniq.indexOf(insert_at_fmt), 0, 43)
							} catch(e){}

							for(k=Math.min(yt6.fmts_fallback_uniq.length-1, yt6.fmts_fallback_uniq.indexOf(yt6.current)); k>0; k--){ //console.log(yt6.failed_itags2 + ' ' +k +' '+limit+' '+yt6.failed_itags) //j-2 .indexOf(1)
							  var itag_ = yt6.fmts_fallback_uniq[k]; if (itag_ == 160) itag_ = 132; //if (itag_ == 241) itag_ = 278; //console.log(k +' '+ itag_)
							  //if (yt6.md && yt6.browser_tab == 'hidden' && (Array.isArray(yt6.yt_otf) && typeof yt6.yt_otf[itag_] != 'undefined')) { yt6.failed_itags.push(itag_); continue }
							  var dash = gid(mep_x('mep_') + '_sourcechooser_' + itag_); //console.log(dash)
							  if (yt6.live && dash && itag_ < 103) continue
							  //if (!dash && !yt6.fmts_fallback.V[yt6.prefer_fmt].includes(itag_)) { yt6.failed_itags.push(itag_); if (itag_ == 132) yt6.failed_itags.push(160); if (itag_ == 278) yt6.failed_itags.push(241); if (itag_ == 241) yt6.failed_itags.push(278)   //itag_ = qual[itag_]['a'];
						          if (!dash) {
							    if (!yt6.fmts_fallback_uniq.includes(itag_)) { yt6.failed_itags.push(itag_); if (itag_ == 132) yt6.failed_itags.push(160); if (itag_ == 278) yt6.failed_itags.push(241); if (itag_ == 241) yt6.failed_itags.push(278) //itag_ = qual[itag_]['a'];
						//	  if (!fmt) dash = gid(mep_x('mep_') + '_sourcechooser_' + qual[itag_]['a'])
							  } else {
							      if (yt6.fmts_fallback.A.all.includes(itag_)) yt6.failed_itags.push(itag_)
							    }

							//    if (!fmt) dash = gid(mep_x('mep_') + '_sourcechooser_' + qual[itag_]['a'])
							  }
							  //if (itag_ && dash && !(yt6.failed_itags2 == 2 && yt6.A_[itag_] ) )
							  //if (!yt6.failed_itags.includes(itag_)) { yt6.retry++
							  //  break
							  //} else { yt6.failed_itags.push(itag_) }
							      if (itag_ && dash)
							      if (!yt6.failed_itags.includes(itag_)) {
								if (!(yt6.failed_itags.length > 1 &&
								  yt6.failed_itags[yt6.failed_itags.length-1] == 0 &&
								  yt6.failed_itags[yt6.failed_itags.length-2] == 0
								)) {
								  yt6.failed_itags.push(0); break
							        } else if (!yt6.failed_itags.includes(itag_)) { yt6.failed_itags.push(itag_); if (itag_ == 132) yt6.failed_itags.push(160); if (itag_ == 278) yt6.failed_itags.push(241); if (itag_ == 241) yt6.failed_itags.push(278) }
							      } else if (itag_ == yt6.current) yt6.retry++
							}
							//if (!(yt6.failed_itags2 == 2 && yt6.A_[itag_] )) { break; } else { if (k == 0) { yt6.failed_itags2++ } }
							if (itag_ && dash && yt6.current != itag_ && !yt6.failed_itags.includes(itag_)) { break } else { if (!yt6.A_[itag_]) yt6.retry++; if (k == 1) { yt6.failed_itags2++ } }

						    }

						  if (3 >= yt6.failed_itags2 && yt6.A_[itag_]) {
						    if (k == 0) j=0; //console.log(j +' '+itag_); console.log(yt6.fmts_fallback_uniq)
						  }
					        }
					      }

					      } else if (yt6.live) { var x = yt6.current, itag_ = x; if (itag_ == 241) itag_ = 278; }//yt6.player2.play(); me.play() }

					      if (!dash) dash = gid(mep_x('mep_') + '_sourcechooser_' +  x); //console.log(itag_+' '+yt6.linx[itag_] +' '+x)

					      if (dash && itag_) {
						if (!(yt6.navigation && !yt6.linx[itag_]) || (yt6.navigation && (!yt6.linx.length || (yt6.linx.length && 3 >= yt6.linx.length))) ) {
						  if (yt6.userprefV[0] == itag_) yt6.userprefV_bak.push(itag_); if (yt6.userprefA[0] == itag_) yt6.userprefA_bak.push(itag_)
						  //yt6.retry++
						  dash.setAttribute('checked','checked'); dash.checked = 'true'
						  if (me.currentTime) { yt6.decoding_error = true; yt6.autoplay = true }// || yt6d.init == yt6.vid


						  if (yt6.linx[itag_]) {
						    var link_to_load = yt6.linx[itag_]
						    if (yt6.live && typeof yt6.live == 'number') link_to_load = dash.value = link_to_load + '&sq=' + yt6.live; //console.log(link_to_load)
						    yt6.player1.setSrc( link_to_load ); yt6.player1.isLoaded = false
						  }
						  if (yt6.current && yt6.current == itag_ && !yt6.failed_itags.includes(yt6.current)) { yt6.failed_itags.push(yt6.current) } //add the current source's itag to srcbak if it has already been tried once and shows up in this error block again

						  //console.log('play ' +itag_ +' '+ yt6.decoding_error)
						  try { dash.click() } catch(e){ yt6.player1.load() }

						  //if (!(yt6.md && yt6.browser_tab == 'hidden' && yt6.failed_itags.includes(itag_) )) {
						    no_default(itag_, 'V'); if (yt6.fmts_fallback.A.all.indexOf(itag_) > -1) no_default(itag_, 'A')
						    setTimeout(function() { if (me.paused && (yt6.live || yt6.autoplay)) { yt6.player1.play() } },250)
						  //} else { yt6.no_default = true
						  //    if (limit == yt6.retry) { decryption_failure() }
						  //  }

						}

					      } else { //console.log(yt6.retry +' '+limit)
					          if (yt6.retry < limit) { //yt6.retry++;
						    yt6.failed_itags.push(itag(me.src))
						  } else if (yt6.failed_itags2 < 5 && !(itag_ == 1) ) {
						      yt6.retry = 0; yt6.failed_itags2++; //yt6.failed_itags = [];
						    }
						  if ( ((yt6.retry >= limit && yt6.failed_itags2 >= 5) || itag_ == 1) && !yt6.ytg) decryption_failure()
					        } //else console.log(dash +' '+itag_)

					    } else { //console.log('no playable sources '+ yt6.x + ' ? ' + yt6.encrypted +' ' + yt6.errcount + ' '+(1 * proxies.length +' '+yt6.flash));
						yt6.current = null; var p = player(), p = yt6.p; 
						//if (!yt6.ytg || (yt6.ytg && yt6.x && (typeof yt6.errcount == 'undefined' || yt6.errcount == 0))) { decryption_failure() }


					  	if (yt6.loaded == 5 || yt6d.init) {//if (!yt6.alt_links_used) {
						  //console.log('Attempting to replace unusable links with the alternative set')
						  var bm3 = gid('bm3'), a, b, l, m, alt_link, new_link = []
						  if (bm3) {
						    a = gid('yt6-links'), b = gid('alt-links')
						  }
						  if (a && b && b.children.length > 0) {
						    for (l=0;l<b.children.length;l++){
						      if (b.children[l] && typeof b.children[l].name == 'string' && b.children[l].href) {//itag_
							for (k=0;k<a.children.length;k++){
							  if (a.children[k] && b.children[l] && a.children[k].name == b.children[l].name) { //console.log(a.children[k].name)//itag_
							    var alt_link = clone(b.children[l].href); if (!alt_link) { break; break }
							    itag_ = itag(alt_link)
							    //console.log('old: '+yt6.linx[yt6.current] +'\nold2:'+ sauce[i].value +'\nnew: '+alt_link )
							    yt6.linx[itag_] = alt_link
							    for(m=0;m<sauce.length;m++) if ( sauce[m] && typeof sauce[m].id == 'string' && 1*(sauce[m].id.split('sourcechooser_')[1]) == 1*itag(alt_link) ) {
							      sauce[m].value = alt_link
							      if (yt6.failed_itags.includes(itag_)) { yt6.current = itag_ } else { new_link[0] = alt_link; new_link[1] = m } //; yt6.failed_itags.splice(yt6.failed_itags.indexOf(itag_),1)
							    }
							    a.children[k].href = alt_link
							    //console.log(b.children[i].nextSibling); 
							    try { b.removeChild(b.children[l].nextSibling) } catch(e){}; b.removeChild(b.children[l])
							    //me.setSrc(alt_link); //me.load()
							    //try { sauce[i].click() } catch(e){}
							    //if (autoplay(true)) me.play()
							    //return void 0;
							    //break; break
							  }
							}
						      }
						    }
						    // after a hand_axe call, yt6.failed_itags will be undefined which will cause an error on the next line -- better that than getting stuck in a loop of decryption_failures
						    if (alt_link) if (yt6.failed_itags) {
						      if (!yt6.failed_itags[0]) { //yt6.alt_links_used = true
							if (new_link[0]) alt_link = new_link[0]
							if (yt6.live && typeof yt6.live == 'number') alt_link = alt_link + '&sq=' + yt6.live
							me.setSrc(alt_link); me.load()
							for (m=0;m<sauce.length;m++) { if (new_link[1]) { if (m == new_link[1] && sauce[m]) break } else m = itag_ }
							try { sauce[m].click(); if (m == new_link[1]) if (yt6.fmts_fallback.V.all.indexOf(itag_) > -1) { no_default(itag_, 'V') } else { no_default(itag_, 'A') }  } catch(e){}
							if (autoplay(true) || yt6.live) me.play()
							//return void 0
						      }
						    } //else { return void 0 }
						  }
						}



						var z = gc('mejs-layer mejs-poster')[0]
						if (z) {
						  removeEL(z, 'click', poster_click, false)
						  addEL(z, 'click', poster_click, false)
						  z.style.display = 'block'
						}

						if (typeof yt6.errcount == 'undefined') yt6.errcount = 0
						if (!yt6.ytg && yt6.errcount >= 0) { //console.log(yt6.errcount +' '+ yt6.retry +' '+ yt6.limit +' '+ yt6.current)
						  no_default(itag_, 'V'); yt6.player1.isLoaded = false; yt6.player1.media.loaded = false
						  decryption_failure(); yt6.retry = 0; if (yt6.player1) if (yt6.x) { yt6.player1.showControls(true) } else { yt6.player1.hideControls(false) }; yt6.failed_itags = []//yt6.failed_itags.push(itag(me.src)); 
						  if (yt6.errcount == 0) {
						    /*var x = itag(me.src);
						    if (x == 160) x = 132;
						    if (x == 278) x = 241;
						    if (yt6.linx[x]) {
						      yt6.player1.setSrc(yt6.linx[x]);
						      if (autoplay(true)) yt6.player1.play()
						    }*/
						  }
						} else { yt6.errcount = yt6.errcount + 1 }; //hand_axe();

						if ( (yt6.ytg && yt6.errcount >= 1) || (!yt6.ytg && yt6.errcount > 1 || (2 * proxies.length)) ) {
/*
						  var p = player(), p = yt6.p, v = gclass('html5-video-container','div', p)[0]
						  var html5_fail = (
						   (!p || (p && !v) ||
						    (p && ((p.tagName == 'EMBED' && window.yt6_swapped) ||
						     (v &&
						      (v.innerHTML == '' ||
						       !v.firstChild ||
						       (v.firstChild && typeof v.firstChild.getAttribute == 'function' && v.firstChild.getAttribute('src') == '') ||
						       typeof v.firstChild.play != 'function' ||
						       gclass('ytp-error','div',p)[0]
						    )))))) ? true : false; //console.log(html5_fail +' '+yt6.html5_fail)
*/
						  if (!yt6.swapped && ((html5_fail() || yt6.html5_fail) && (!yt6.ytg || (yt6.ytg && (!yt6.encrypted || gid('ytassetsjs'))))) ) {
						    // let's try flash playback

						    if ((yt6.ytg && !(p.tagName == 'EMBED' && window.yt6_swapped == 1)) || (!yt6.ytg && yt6.flash.flag != 1)) {
						      if (p && p.tagName != 'EMBED') {
							relocate_mep(); yt6.flash.call = 'p1err'; forceFlashplayerObject()
						      } else {
							  p = gc('forced flashplayer')[0];
							  if (p) p.parentNode.removeChild(p)
							}

						      //if (autoplay(false) && typeof p.pauseVideo == 'function') p.playVideo();
						      var p = player(), p = yt6.p; if (!p) p = gc('forced flashplayer')[0]; try { p.style.display = 'none' } catch(e){}; 
						      p.style.display = 'none'; if (yt6.x) switch_players(); yt6.swapped = 1
						     
						    } else { // flash object already in place
							if (!yt6.swapped && p && p.tagName != 'EMBED') { relocate_mep() }
							var bm0 = gid('bm0'); if (bm0) bm0.style.visibility = 'visible'
							if (p) p.style.visibility = 'hidden'
							if (yt6.x) { switch_players() }
						      }

						    $waitUntil(function(){ if (player() && yt6.p.tagName == 'EMBED' && typeof yt6.p.getPlayerState == 'function') { return true } else {
						        if (yt6.p && typeof yt6.p.getPlayerState == 'function') {
							      var z = gc('forced flashplayer')[0]
							      if (z && z.tagName == 'EMBED') {
								//var bm0 = gid('bm0'); if (bm0) bm0.style.visibility = 'hidden';
								//if (p) p.style.visibility = 'visible';
								if (z.parentNode !== yt6.api) {
								  //relocate_mep(true)
								} //else return true
							      }
							} //else if (yt6.flash.flag == 1 && yt6.p.tagName != 'EMBED') try { switch_players() } catch(e){}
						      }
						    },
						    function() { // prepare change back to html5 on a new, playable video
							yt6.errcount = 0; yt6.retry = 0
							var p = player(), p = yt6.p;

							// turn off force_flash indicators because flash was only fired up automatically for this video as it had no supported formats for html5 playback
							var z = gid('flash_on')
							if (z) { z.checked = false; z.setAttribute('checked','') }
							yt6.flash.forced = false

							if (p && p.style.visibility != 'visible') switch_players()
							if (autoplay(false)) {
							  //var bm0 = gid('bm0'); if (bm0) bm0.style.visibility = 'hidden';
							  //if (p) p.style.visibility = 'visible'; yt6.x = false;
							  p.playVideo()
							}
						    },250,5000);

						  } else { //encrypted
							if (yt6.x && (yt6.loaded == 5 || yt6d.init)) {
							  if (yt6.errcount > 1) switch_players(); window.yt6_swapped = 1; if (yt6.ytg) yt6.ytg.swapped = 1; try { yt6.p.playVideo() } catch(e){}
							} else if (!(yt6.html5_fail || html5_fail) && p.tagName == 'EMBED' && !window.yt6_swapped && !yt6.swapped) { back2html5() }

							if (yt6.encrypted && !gid('ytassetsjs')) { yt6.errcount = 0; hand_axe() } else {}
						    }
						}
					      };
					  }
					}



		yt6.ct = 0
		yt6.speed = (typeof yt6.speed == 'number') ? yt6.speed : 1
		yt6.loop = {}
		var ev, Srcto
		var pause_count = 0
		var href = yt6.href
		var Audio = yt6.audio
		var A = yt6.A_
		var V = yt6.V_
		var AV = yt6.A_V
		yt6.Seek = null
		var Seek = yt6.Seek
		var Delay = [0]
		var player2 = gid('player2')
		var z = [player2.play, player2.pause, player2.currentTime]
		for (i=0;i<z.length-1;i++) { if (z[i]) try { delete z[i] } catch(e) { z[i] = '' } }
		var player1 = yt6.player1 = new MediaElementPlayer('#player1',{
		  enableAutosize: false,
		  poster: getPoster(),
		  videoWidth: yt6.w.replace('px',''),
		  videoHeight: yt6.h.replace('px',''),
		  features: ['playpause','loop','current','progress','duration','tracks','playlist','speed','sourcechooser','volume','fullscreen'],
		  autoRewind: false,
		  pauseOtherPlayers: false,
		  pluginPath: '',
		  flashName: flash_mep,//<-- no http: there!
		  pluginWidth: yt6.w.replace('px',''),
		  pluginHeight: yt6.h.replace('px',''),
		  startLanguage:'',
		  translationSelector: true,
		  translations:['en','de','es'],
		  success: function(me) { $('#audio-type').html( me.pluginType);
					addEL(me, 'loadstart', function() { ev = '1loadstart'; //if (yt6.newvideo) ev_log(ev); //console.log(ev)
					  yt6.navigation = false
					  pause_count = 0
					  if ( yt6 && yt6.player1 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src))
					    return void 0;
					  me.loaded = false; var ct = (yt6.ct) ? clone(yt6.ct) : 0
					  try { yt6.player1.media.currentTime = yt6.player2.media.currentTime = player2.currentTime = yt6.ct = ct } catch(e){}//yt6.ct = 0

					  if (yt6.hand_axe) { var z = gid('encrypted_signatures_warning'); if (z) z.style.display = 'block'; if (yt6.hand_axe) delete yt6.hand_axe }//(yt6.encrypted && !yt6.decoding_error) || 

					  if (typeof yt6.failed_itags == 'undefined') { yt6.failed_itags = []; yt6.failed_itags2 = 1 }
					  try { v_(yt6.p).playbackRate = clone(yt6.speed) } catch(e){ yt6.ytp.speed() }
					  if (yt6.x) {
					    if (yt6.ytm) {
					      var z = gid('song-image'); if (z) z.style.display = 'none'
					      var z = gid('song-video'); if (z) z.style.display = 'block'
					    }
					    if (yt6.mobile) { var x = gid('player-control-container'); if (x) x.setAttribute('hidden','') } else try { yt6.ytp.speed() } catch(e){}
					  } else {
					      if (yt6.ytp.strState != 2 && yt6.p && typeof yt6.p.getPlayerState == 'function' && !(yt6.ytm && yt6.flash.forced) ) {
					      $waitUntil(function(){ if (yt6.p && typeof yt6.p.getPlayerState == 'function') { var s = yt6.p.getPlayerState(); if (s == 2 || (s == 5 && !(yt6.ytp.embed && yt6d.init))) { return true } } },
						function() {
						  if (!yt6.x) try {// fetching the links might pause the yt player -- kick it back on
						    if (shorts()) {
						      yt6.p.pauseVideo(); v_(yt6.p).pause()
						      //if (document.getElementById('shorts-player') && typeof document.getElementById('shorts-player').pauseVideo == 'function') document.getElementById('shorts-player').pauseVideo()
						    } else {
							yt6.p.playVideo(); v_(yt6.p).play()
						      }
					 	  } catch(e){}
						},400,2000);
					      }
					      if (yt6.ytm) {
						var z = gid('song-image'); if (z) { z.style.display = ''; z.removeAttribute('style') }
						var z = gid('song-video'); if (z) { z.style.display = ''; z.removeAttribute('style') }
					      }
					    }
					  if (gc('mejs-clear')[0]) gc('mejs-clear')[0].setAttribute('id','mejs-clear')
					  var sauce, ads, bm3 = gid('bm3'), mep = gid(mep_x('mep_')), a, b
					  if (mep) { sauce = getElementsByAttribute(mep,'input','name',mep.getAttribute('id') + '_sourcechooser'); if (yt6.x) mep.focus() }
					  if (bm3) {
					    a = gid('yt6-links'), b = gid('alt-links'); if (a && a.done) return void 0;
					    ads = getElementsByAttribute(bm3,'a','class','yt6-links'); if (a) a.done = true
					  }
					  if (ads && !(yt6.layout == 16 && yt6.blocked))
					  for (i=0;i<yt6.linx.length;i++){ 
					    if (yt6.linx[i])
					    for (j=0;j<ads.length;j++){
					      if (b && yt6.linx[i].indexOf('&title=Advertisement') > -1 && ads[j] && ads[j].href && (ads[j].href.indexOf(yt6.linx[i].split('&title=Advertisement')[0]) > -1 || ads[j].href.indexOf('&title=Advertisement') > -1 ) ) {//console.log('Dumping ads into the alt-links container: ' + yt6.linx[i])
						ads[j].href = ads[j].href.split('&title=')[0] + '&title=Advertisement'
					        if (ads[j].previousSibling) b.appendChild(ads[j].previousSibling); b.appendChild(ads[j])
					      }
					    }
					  }
					  if (sauce) {
					    if (a && b) {
					      for (i=0;i<sauce.length;i++){
						var z = b.children
						if (z) for (j=0;j<z.length;j++){
						  if (!z[j]) break
						  if (yt6.ads_eid) if (z[j].href && (z[j].href.indexOf(yt6.ads_eid) > -1 || (yt6.ads_eid1 && z[j].href.indexOf(yt6.ads_eid1) == -1) || (yt6.ads_eid2 && z[j].href.indexOf(yt6.ads_eid2) == -1)) ) {
						    var dur = z[j].href.split('&dur=')[1] || z[j].href.split('?dur=')[1]; if (dur) dur = (1 * dur.split('&')[0])
						    if (typeof dur == 'number' && Math.abs(yt6.real_media_duration - dur) > 1.5) z[j].href = z[j].href.split('&title=')[0] + '&title=Advertisement'
						  } else if (!getElementsByAttribute(a,'a','name',z[j].name)[0]){ z[j].junk = true; if (z[j].previousSibling) { z[j].previousSibling.junk = true; a.appendChild(z[j].previousSibling.cloneNode(true)) }; a.appendChild(z[j].cloneNode(true)) }
						}
					      }
					      for (i=0;i<sauce.length;i++){
						var z = b.children
						if (z && z.length) for (j=z.length-1;j>-1;j--) if (z[j] && z[j].junk) b.removeChild(z[j])
					      }
					    }
					  }
					  pl_item()
					  if (yt6.md && browserName == 'Firefox' && yt6.browser_tab == 'hidden') Seek = 0
					  if (yt6.mobile) $waitUntil(function() { if (!(yt6.wna && yt6.wna.firstChild && yt6.wna.firstChild.id == 'yt-alert-message')) return true }, function() { scrollToCurrentVideo(); set_controls() },500,2000)
					});
					addEL(me, 'error', function() { media_error_handler(me) });
					addEL(me, 'loadedmetadata', function() { ev = '1loadedmetadata'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player1 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src))
					    return void 0;
					  if (!yt6.live && (me.duration === Infinity || isNaN(me.duration)) ) { media_error_handler(me) } // unplayable h264 media urls no longer produce a network error event, have to call the error handler manually

					  var prev_itag = (me.loaded_itag && itag(me.src) && me.loaded_itag != itag(me.src)) ? clone(me.loaded_itag) : clone(yt6.userprefV[0])
					  yt6.player1.options.alwaysShowHours = (yt6.loaded_media_duration > 3600) ? true : false

					  for (k=0;k < yt6.userprefV_bak.length; k++) { yt6.userprefV.unshift(yt6.userprefV_bak[k]); if (k == yt6.userprefV_bak.length - 1) yt6.userprefV_bak = [] }
					  for (k=0;k < yt6.userprefA_bak.length; k++) { yt6.userprefA.unshift(yt6.userprefA_bak[k]); if (k == yt6.userprefA_bak.length - 1) yt6.userprefA_bak = [] }
					  var mep = gid(mep_x("mep_")), w = this.videoWidth, h = this.videoHeight
					  me.p = gc('mejs-button mejs-playpause-button')[0]
					  yt6.current = 1 * itag(me.src)
					  yt6.errcount = 0

					  if (yt6.newvideo) { yt6.newvideo = true } //else { yt6.sync_timer = true }
					  if (yt6.live) yt6.ct = 0

					  if (mep) if (yt6.A_[itag(me.src)] || (itag(me.src) >= 103 && yt6.fmts_fallback.A.all[itag(me.src)])) {
					    var z = getElementsByAttribute(document,'input','name',mep.getAttribute('id') + '_sourcechooser')
					    for(k=0;k<z.length;k++){
					      if (z[k] && z[k].nextSibling) {
					        z[k].nextSibling.setAttribute('style','')
					        z[k].nextSibling.removeAttribute('style')
					      }
					    }
					    var z = gid(mep.getAttribute('id') + '_sourcechooser_' + itag(me.src))
					    if (z && z.nextSibling) z.nextSibling.setAttribute('style','text-decoration: underline')
					    if (typeof me.currentTime == 'number' && me.currentTime != 0) {
						var ct = clone(me.currentTime); yt6.ct = ct
						if (yt6.browser_tab == 'visible') try {
						  yt6.player2.setSrc(me.src)
						  yt6.player2.media.load()
						} catch(e){}
						me.setCurrentTime(ct);
					    } else {
						if (yt6.newvideo) {
						  if (!yt6.mobile) {
						    me.setCurrentTime(0)
						  } else me.currentTime = 0
						} else me.currentTime = yt6.player2.media.currentTime
					      }

					    var itag_ = itag(me.src)
					    if (itag_ && (1 * itag_ != yt6.userprefA[0] || 1 * itag_ != yt6.userprefV[0])) {
					      if (!yt6.no_default) {
						if ((!yt6.newvideo || yt6d.init) && !(typeof yt6.fmt_bak2 == 'number' && (gid(mep.getAttribute('id') + '_sourcechooser_' + yt6.fmt_bak2) && yt6.yt_otf.indexOf(yt6.fmt_bak2) > -1)) ) {
						  if (typeof yt6.fmt_bak2 == 'number') { if (!gid(mep.getAttribute('id') + '_sourcechooser_' + yt6.fmt_bak2)) { itag_ = (1* yt6.fmt_bak2); } else yt6.fmt_bak = itag_; yt6.fmt_bak2 = null } //else yt6.fmt_bak = itag_; 

						  if (yt6.fmts_fallback.A[yt6.prefer_fmt].indexOf(itag_) > -1) {
						    if (yt6.userprefA.indexOf(1 * itag_) > -1) { yt6.userprefA.splice(yt6.userprefA.indexOf(1 * itag_), 1) } else delete yt6.userprefA[20]
						    yt6.userprefA.unshift(1 * itag_)
						  }
						  if (yt6.fmts_fallback.V[yt6.prefer_fmt].indexOf(itag_) > -1) {
						    if (yt6.userprefV.indexOf(1 * itag_) > -1) { yt6.userprefV.splice(yt6.userprefV.indexOf(1 * itag_), 1) } else delete yt6.userprefV[20]
						    yt6.userprefV.unshift(1 * itag_)
						  }
						}
					      } else {
						  no_default(itag_, 'V'); no_default(itag_, 'A')
						}
					    }
					    yt6.audiox = null; delete yt6.audiox; yt6.audio = yt6.player2.media.src = me.src;
					    var z = gc('mejs-layer mejs-poster')[0]
					    if (z) z.style.display = 'block'
					  } else {

					      if (!yt6.live && yt6.player2 && yt6.player2.media && !yt6.player2.media.loaded) {
						try {
						  yt6.player2.media.setSrc(player2.getAttribute('src')); yt6.player2.media.load()
						} catch(e){}

						if (Math.abs(1 * yt6.ct) > 0 && me.currentTime == 0) {
						  player2.currentTime = clone(yt6.ct); //yt6.player1.media.currentTime = yt6.ct
						}
					      }

					      var itag_ = itag(me.src)

					      if (itag_ && 1 * itag_ != yt6.userprefV[0]) {
						if (!yt6.no_default && !(yt6d.init && itag_ == 18 && yt6.userprefV.toString() == '397,244,134,396,243,133,43,18')) {
						  if ( yt6.fmts_fallback.V[yt6.prefer_fmt].indexOf(itag_) > -1) {
						    var x = (qual[itag_]['a'] && yt6.fmts_fallback.V[yt6.prefer_fmt].indexOf(qual[itag_]['a']) == -1 && !(yt6.prefer_fmt == 'dash' && yt6.fmts_fallback.V['av1'].indexOf(yt6.userprefV[0]) > -1) ) ? itag_ : ((yt6.prefer_fmt == 'dash' && yt6.fmts_fallback.V.h264.indexOf(yt6.userprefV[0]) == -1 && qual[itag_]['a'] && qual[qual[itag_]['a']] && qual[qual[itag_]['a']]['av1']) ? qual[qual[itag_]['a']]['av1'] : qual[itag_]['a'])
						    if (typeof yt6.fmt_bak2 == 'number') {
						      if (!gid(mep + '_sourcechooser_' + yt6.fmt_bak2)) { x = (1* yt6.fmt_bak2); } else yt6.fmt_bak = itag_; yt6.fmt_bak2 = null
						    } else x = (1 * x)
						    if (!isNaN(x)) { //console.log('x '+itag_ +' '+qual[itag_]['a'] +' '+ qual[qual[itag_]['a']] +' '+ qual[qual[itag_]['a']]['av1'] +' '+ ' = ' + x )
						      if (yt6.userprefV.indexOf(1 * x) > -1) yt6.userprefV.splice(yt6.userprefV.indexOf(1 * x), 1)
						      yt6.userprefV.unshift(1 * x); delete yt6.userprefV[20]
						    }
						  }
						} else { no_default(itag_, 'V') }
					      }


					    }



					  //  the "no_default" stuff above is supposed to ensure that only actual user clicks change the defaults in the preference array, by deleting the last choice made by an automated process

					  yt6.no_default = false//(yt6.newvideo && itag_ < 103 && prev_itag != itag_) ? true : false

					  if (gc('mejs-clear')[0]) gc('mejs-clear')[0].setAttribute('id','mejs-clear')

					  if (mep) {
					    var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)
					    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth)
					  }

					  if (mep && (yt6.fullscreen || (mep.offsetWidth == windowwidth && mep.offsetHeight == windowheight )) ) {
					    yt6.fullscreen = true
					    me.style.width = '100%'
					    me.style.height = '100%'
					    me.style.left = '0px'
					    me.style.top = '0px'
					    mep.style.width = '100%'
					    mep.style.height = '100%'
					  } else { //unsure yet whether being in fullscreen or not
					      if ( (me.offsetWidth == screen.width) || (me.offsetHeight == screen.height) ) {
						//resize_layers( screen.width + 'px', screen.height + 'px' )
					      } else {
						  if (yt6.size == 'media' && w && h) {
						    if (gid('aspect') && gid('a_width') && gid('a_height')) {
						      yt6.w = w + 'px'
						      yt6.h = h + 'px'
						      gid('a_width').value = w
						      gid('a_height').value = h
						    }
						  }
						};
					    }
					  if (typeof w == 'number' && typeof h == 'number' && w && h) {// do this only if the values are not 0
					    if (w && h) yt6.aspect_ratio = w / h
					    if (yt6.size != 'custom') {
					      yt6.w = w + 'px'
					      yt6.h = h + 'px'
					    }
					    if (!(yt6.md && yt6.browser_tab == 'hidden')) //Yandex
					    $waitUntil(function(){if (gid('player1')) return true},
					      function(){
						gid('player1').width = yt6.w.replace('px','')
						gid('player1').height = yt6.h.replace('px','')
					      },500,5000)
					  }
					  if (yt6.size == 'media' && !yt6.ytp.embed) Mqch()
					  if (yt6.encrypted) { var z = gid('encrypted_signatures_warning'); if (z) z.style.display = 'none' }
					});
					addEL(me, 'loadeddata', function() { ev = '1loadeddata'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player1 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src))
					    return void 0;
					  me.loaded_vid = video_id()[0]; me.loaded_itag = itag(me.src)
					  yt6.retry = 0; yt6.failed_itags = []; yt6.failed_itags2 = 1
					  yt6.sync_timer = 0; me.loaded = true
					  if (yt6.newvideo) { yt6.newvideo = true;

					    if ((yt6.mobile || yt6.x_) && yt6.browser_tab == 'hidden' && yt6.p && yt6.p.parentNode && yt6.p.tagName != 'EMBED' && typeof yt6.p.getCurrentTime == 'function') {
					      try { var ct = yt6.ct = yt6.p.getCurrentTime()
						if (typeof ct == 'number') {
						  yt6.ct = (!(yt6.mute_on && yt6.ad_muted)) ? ( (typeof yt6.ytp.strCt == 'number') ? clone(yt6.ytp.strCt) : ct + 0 ) || 0 : 0;
						} else yt6.ct = 0
					      } catch(e) { yt6.ct = 0 }

					      //if (yt6.mobile && yt6.x && yt6.browser_tab == 'hidden' && yt6.navigation && me.currentTime < 1 && (yt6.A_[itag(me.src)] || (itag(me.src) >= 103 && yt6.fmts_fallback.A.all[itag(me.src)] ))) { yt6.ct = (yt6.ct + 0.05) }// && !yt6.pre_ad

					    } else {
						yt6.ct = (!yt6.live && yt6.ct) ? ((player2 && typeof player2.currentTime == 'number') ? yt6.ct = player2.currentTime : yt6.ct) : 0;
						yt6.ct = 0

					      }

					    if (!(!me.currentTime && yt6.ct)) { yt6.player1.setCurrentTime(yt6.ct) } else me.currentTime = clone(yt6.ct)

					  } else {

					      //if (yt6.mobile && yt6.x && yt6.browser_tab == 'hidden' && yt6.navigation && me.currentTime < 1 && (yt6.A_[itag(me.src)] || (itag(me.src) >= 103 && yt6.fmts_fallback.A.all[itag(me.src)] )) && me.paused && !yt6.error) { yt6.ct = (yt6.ct + 0.1) }// && browserName == 'Firefox'

						if (!me.currentTime && yt6.ct) me.currentTime = clone(yt6.ct)
						//if (yt6.ct) me.setCurrentTime(yt6.ct)
					    }


					  if (yt6.live) try { me.currentTime = player2.currentTime = yt6.ct = 0 } catch(e){}

					  try { yt6.player2.setVolume( me.volume ) } catch(e) {}
					  if (yt6.speed) {
					    try { yt6.player2.media.playbackRate = me.playbackRate = yt6.speed } catch(e){}
					    var z = gid('displaySpeed')
					    if (z) try { z.innerHTML = '<span style="font-size: 10px">Speed</span> ' + Math.round(yt6.speed * 100) + '%' } catch(e){}
					  }

					  //if (yt6.player2.media.loaded || Seek == 0) { yt6.newvideo = false }



					  //if (yt6.ads_eid && me.src.indexOf(yt6.ads_eid) > -1) { yt6d.mep_reload(); if (yt6.autoplay) me.play() }

					  if (yt6.x && yt6.V_[itag(me.src)]) {
					    //if (!me.paused && yt6.player2) { Seek = 1 }//to synchronize audio
					    try { yt6.player2.media.currentTime = player2.currentTime = yt6.ct = me.currentTime } catch(e){}
					  }
					  if (yt6.x) {

					    if (!yt6d.init)
					    if (yt6.autoplay && me.currentTime < 0.1) {
					      if (yt6.newvideo && Array.isArray(yt6.A_V) && (yt6.A_V[me.loaded_itag] || me.loaded_itag < 103)) { Seek = 0; yt6.Seek = 4 }
					    }

					    if (!player2.paused) me.play()//to escape stuttering freeze up at the start of playback

					  } else yt6.player1.hideControls(false)
					});
					addEL(me, 'play', function() { ev = '1play'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player1 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src || (yt6.browser_tab == "hidden" && yt6.diff > 0.6 && me.currentTime > 0 && !(yt6.V_[itag(me.src)] && player2.paused)) )) {
					    return void 0 }
					  if (yt6.x) {
					  try { if (yt6.btn.play) yt6.btn.play[yt6.txt] = 'pause'; if (yt6.btn.play2) yt6.btn.play2[yt6.txt] = 'pause'; var x = gc('play snarl-button yt-uix-button-text')[0]; if (x) x.innerHTML = 'pause'; var x = gc('play snarl-button yt-uix-button-text')[1]; if (x) x.innerHTML = 'pause' } catch(e) {}
					  if ( ((!yt6.A_V[itag(me.src)] &&
						 !yt6.A_[itag(me.src)] &&
						 (yt6.V_[itag(me.src)] || (itag(me.src) >= 103 && yt6.fmts_fallback.V.all.indexOf(itag(me.src)) > -1)) 
						)
						 || ((Seek != 4 && player2.src == yt6.audiox) && itag(me.src) >= 103 && yt6.fmts_fallback.A.all.indexOf(itag(me.src)) == -1)
					       ) && (yt6.retry < (yt6.limit || 8) )
					     )  {


						  if (typeof player2.src == 'string' && (yt6.linx.indexOf(player2.src.replace(protocol(),'')) > -1 || yt6.age.blocked)) {

						  } else if (!yt6.live && yt6.retry < (yt6.limit || 8) && player2.src != yt6.audiox && ((yt6.x && yt6.browser_tab == 'hidden') || (yt6.player2 && yt6.player2.media && !yt6.player2.media.loaded) )) { //m2
						      if (me.loaded === true && !(yt6.player2 && yt6.player2.media && yt6.player2.media.loaded)) { yt6.player2.load() }
						      if (player2.currentTime > me.currentTime) { me.setCurrentTime(player2.currentTime) }
						    } // <-- causes a needless reload for most of the time

						  if (player2.paused && (player2.src == yt6.audiox || ( itag(me.src) >= 103 && yt6.fmts_fallback.A.all.indexOf(itag(me.src)) == -1 )) ) { //console.log('1')
						    if (yt6.player2 && yt6.player2.media) { yt6.player2.play() } else player2.play(); // not just player2.play() !
						    if (!yt6.live && me.currentTime && player2.currentTime > me.currentTime) { me.setCurrentTime(player2.currentTime); me.play() }//m2 
						  }


						  if (player2.duration != player2.currentTime && !(me.currentTime > player2.duration)) {

						    yt6.diff = Math.abs(parseFloat(me.currentTime - player2.currentTime))

						  if ( !yt6.live &&
							(yt6.newvideo || (yt6.md && !me.currentTime && !(yt6.player2 && yt6.player2.media.loaded == true && !yt6.Seeked2))) &&
							!(yt6.md && yt6.browser_tab == 'hidden' && browserName == 'Edge' && (Array.isArrax(yt6.yt_otf) && typeof itag(me.src) == 'number' && typeof yt6.yt_otf[itag(me.src)] != 'undefined')) // Edge for Android needs a javascript error here (intentional typo .isArrax) to not enter infinite loop on yt_otf links on background play
						     ) {
						    if (typeof yt6.diff == 'number' && (yt6.diff > 0.3 || me.currentTime == 0 )) {
						    $waitUntil(
						      function() {
							yt6.diff = Math.abs(parseFloat(me.currentTime - player2.currentTime))
						        if ((yt6.diff > 0.3 && yt6.sync_timer < 8) || !yt6.V_[itag(me.src)]) { return true }
							  else {
							    if (yt6.newvideo) {
							      if (yt6.player2 && yt6.player2.media && typeof yt6.player2.setCurrentTime == 'function'){
								me.p = gc('mejs-button mejs-playpause-button')[0]
								if (me.p && yt6.player2.media.paused) {
								  yt6.player2.media.play()
								} else if (me.paused) {
								    me.play()
								  }
							      }
							    } else {
								if (yt6.sync_timer < 8) {
								  yt6.sync_timer++
								} else {
								    yt6.sync_timer = 0
								  }
								//if (yt6.player1.getCurrentTime() < 0.4) { me.play() }
							      }
							  }
						      },
						      function() {
							if (yt6.sync_timer > 4 && me.loaded) {
							  yt6.sync_timer = 0
							} else {
							    //if (yt6.browser_tab != "hidden") {
							      try {
							      //if (yt6.V_[itag(me.src)]) {
								//if (itag(me.src) != 278) {
								  if (yt6.player2) if (me.currentTime > 1) { Seek = 1; me.pause() } //else Seek = 22//Seek = 1 //ff needs this line when window is out of focus
								//} else Seek = null;
								if (Math.abs(yt6.player1.getCurrentTime() - player2.currentTime) > 0.1) {
								  //if (yt6.player2) Seek = 1;
								  try { yt6.player2.media.currentTime = yt6.ct = me.currentTime } catch(e){} //me.pause();
								}
							      //} else {
								    //me.play()
								    $waitUntil(
								      function(){
									if (yt6.player1.media.paused) return true
								      },
								      function() { //console.log('video check: diff = ' + yt6.diff +' ,Seek = '+ Seek +' , p1 loaded: '+ me.loaded)
								        //if (Seek != 1) {
									  //yt6.player2.play() //m2
									//} else
									    yt6.player1.play()
								      },200,200)
								  //}
							      } catch(e) {}
							    //} else { me.currentTime = yt6.player1.media.currentTime = yt6.ct = player2.currentTime = yt6.player2.media.currentTime; }
							  }
						      },250,1250)
						    } else {
							if (yt6.browser_tab == "hidden") {//m2
							  if (!yt6.navigation && me.loaded_vid == yt6.vid && yt6.title == document.title && me.currentTime && Math.abs(me.duration - me.currentTime) > 1 ) {
							//    yt6.Seeked2 = false; Seek = 1;
							    yt6.ct = clone(player2.currentTime)
							    yt6.player1.setCurrentTime( yt6.ct )
							  }
							} else {
							  //  if (Seek == 1) { yt6.player2.pause() }//yt6.Seek = 1; 
					//		    if (Seek == 5) { Seek = 2; }//return void 0 }
							  }
						      }

						    if (me.loaded) {//
						      if (yt6.player2 && yt6.player2.media && yt6.player2.media.loaded) {
							//if (!(yt6.md && yt6.browser_tab == 'hidden')) 
							yt6.player2.media.loaded = true
							yt6.newvideo = false
						      } //else { yt6.newvideo = '?' }
						    }
						  } else {

						      if (yt6.md && yt6.browser_tab == 'hidden' && yt6.player2) { yt6.ct = clone(yt6.player2.media.currentTime) } else// && yt6.ct != player2.currentTime
						      if (Seek === null && yt6.Seek === null &&
							yt6.Seeked2) { yt6.Seeked2 = false; Seek = 0 } else if (player2.paused && yt6.diff > 0.3 && (yt6.V_[itag(me.src)] || (itag(me.src) >= 103 && yt6.fmts_fallback.V.all.indexOf(itag(me.src)) > -1))) me.play()//(player2.paused) ? true :  // <-- to escape infinite loop

						    }
						  }

						    var playPromise2 = me.play(); yt6.pt = yt6.player1.getCurrentTime(); // AV or A

						    if (playPromise2 && typeof playPromise2.then == 'function') {
						      if (typeof me.pp2 != 'function') {
							me.p = gc("mejs-button mejs-playpause-button")[0]
							me.pp2 = 'yt6.player1.media.pp2 = function(){ if (yt6.md && yt6.browser_tab == "hidden") return void 0; var src2 = me.src;\
							playPromise2.then(function () { \/\*console.log("Playing...")\*\/; \
							  if (yt6.x) if (!yt6.navigation && me == yt6.player1.media && me.timer > 2) { me.pp2.ok = (typeof me.pp2.ok == "boolean") ? !me.pp2.ok : true;\
							    if (!me.currentTime && !me.paused) me.timer = (typeof me.timer == "number") ? (me.timer + 1) : 0;\
							    if ( ((!me.currentTime || (!me.paused && yt6.ct == yt6.pt)) && me.timer > 3) || (!me.loaded && me.pp2.ok) ) { if (me.timer > 4) me.timer = 0; if (!me.loaded || !player2.loaded || (me.timer == 4 && !me.paused && yt6.ct == yt6.pt)) { player2.load(); if (me.timer == 4 && !me.paused && yt6.ct == yt6.pt) { \/\*me.aborted = true; yt6.player1.isLoaded = false;\*\/ yt6.player1.setSrc("https://www.youtube.com/ptracking"); me.currentTime = player2.currentTime = yt6.ct = 0; yt6.player1.setSrc(src2) }; if (!me.loaded) me.load() }; player2.load(); me.play() }; if (me.timer > 0) me.timer++;\
							  } else { me.timer = (typeof me.timer == "number") ? (me.timer + 1) : 0 }\
							}).catch(function (error) { \/\*console.log("Failed to play... "+ me.timer +" "+me.currentTime +" "+me.pastTime)\*\/;\
							  if (yt6.x) if (!yt6.navigation && me == yt6.player1.media && me.timer > 2) { me.pp2.ok = (typeof me.pp2.ok == "boolean") ? !me.pp2.ok : true;\
							    if (!me.currentTime && !me.paused) me.timer = (typeof me.timer == "number") ? (me.timer + 1) : 0;\
							    if ( ((!me.currentTime || (!me.paused && yt6.ct == yt6.pt)) && me.timer > 3) || (!me.loaded && me.pp2.ok) ) { if (me.timer > 4) me.timer = 0; if (!me.loaded || !player2.loaded || (me.timer == 4 && !me.paused && yt6.ct == yt6.pt)) { player2.load(); if (me.timer == 4 && !me.paused && yt6.ct == yt6.pt) { \/\*me.aborted = true; yt6.player1.isLoaded = false;\*\/ yt6.player1.setSrc("https://www.youtube.com/ptracking"); me.currentTime = player2.currentTime = yt6.ct = 0; yt6.player1.setSrc(src2) }; if (!me.loaded) me.load() }; player2.load(); me.play() }; if (me.timer > 0) me.timer++;\
							  } else { me.timer = (typeof me.timer == "number") ? (me.timer + 1) : 0 }\
							}) };'; try { eval(me.pp2) } catch(e){ yt6.newvideo = false; }; if (typeof me.pp2 == 'function') me.pp2()
						      } else me.pp2()
						    }

						} else {

						    var playPromise = me.play(); yt6.pt = yt6.player1.getCurrentTime(); // AV or A

						    if (playPromise && typeof playPromise.then == 'function'&& browserName != 'IE') {
						      if (typeof me.pp != 'function') {
							me.p = gc("mejs-button mejs-playpause-button")[0]
							me.pp = 'yt6.player1.media.pp = function(){ \
\
							function very_simple_playback_duh(){\
							  if (yt6.x && me == yt6.player1.media) { me.pp.ok = true; \/\*(typeof me.pp.ok == "boolean") ? !me.pp.ok : true; ev_log("duh "+ me.timer +" "+ me.loaded + " "+ me.paused +" (" + yt6.pt +" "+me.pastTime +" "+ me.currentTime +")")\*\/;\
							    if (yt6.md && yt6.browser_tab == "hidden" && !me.currentTime) me.play();\
							    if (me.loaded && me.timer < 1 && (!(me.currentTime && yt6.ct == me.currentTime && yt6.ct == yt6.pt && yt6.pt == me.pastTime) || Seek == 3) ) { \
							      \/\*if (me.currentTime == yt6.pt)\*\/\
								$waitUntil(function(){ if (me.loaded) { return true } else { if (!yt6.navigation) { me.load(); setTimeout(function(){ me.play() },700) } } }, function(){ \
								  if (me.paused || (!me.paused && ( me.currentTime == me.pastTime || (me.currentTime).toFixed(6) == (me.pastTime + 0.01).toFixed(6) ) )) {\
								    if (!me.paused && yt6.ct == yt6.pt) yt6.player1.media.setCurrentTime((me.currentTime || 0) + 0.01);\/\*if (yt6.x && !yt6.live && me.paused) { try { yt6.player1.media.play() } catch(e){ yt6.player1.media.play() }; }\*\/\
								  } \/\*else console.log("Ok.... "+ Seek +" "+ me.currentTime); console.log(me.currentTime +" "+ me.pastTime +" "+ yt6.ct +" "+ yt6.pt)\*\/\
								  me.pp.ok = false;\
								},40,400)\
							      ;\
							      if (!me.paused) if (Math.abs(me.currentTime - me.pastTime).toFixed(2) == 0.01) {\
								me.timer = (typeof me.timer == "number") ? (me.timer + 1) : 0;\
							      }\
							    } else { if (yt6.x && yt6.live && !me.loaded && me.src != player2.src) { Seek = 0; yt6.player1.pause(); Seek = 0 };\
								if ((!me.loaded || (!me.paused && Math.abs(player2.currentTime - me.currentTime) > 3) || (Seek != 3 && me.currentTime && yt6.ct == me.currentTime && yt6.ct == yt6.pt && yt6.pt == me.pastTime) ) && me.timer < 2) { if (!yt6.navigation) { yt6.no_default = true; if (me.currentTime == 0.01 && !me.paused) { yt6.ct = 0; yt6.player1.isLoaded = false; yt6.player1.play(); me.play() } else me.load() }; me.timer = (typeof me.timer == "number") ? (me.timer + 1) : 0;\
								}; me.timer = (typeof me.timer == "number" && yt6.browser_tab == "visible") ? (me.timer + 1) : 0;\
								if (me.timer > 3) me.timer = 0; if (!yt6.live && me.currentTime == me.pastTime) me.timer = (me.timer + 1);\
								me.pp.ok = false;\
							      };\
							  }\
							};\
\
							playPromise.then(function () { if (me.currentTime > 0) { if (!me.paused) yt6.newvideo = false; } else if (yt6.browser_tab == "hidden") yt6.player1.play();\
							  \/\*console.log("Playing...")\*\/;\
							  yt6.ct = (1 * yt6.ct) || 0;\
							  if (yt6.x || yt6.audiox) {\
							    \/\*if ( (!me.pp.ok || (yt6.browser_tab == "hidden" && !me.currentTime)) && (me.paused || (!me.paused && (me.currentTime == yt6.pt || (me.currentTime).toFixed(6) == (me.pastTime + 0.1).toFixed(6)) )) ) {\*\/\
							      \/\*if ( (yt6.pt === 0 || (yt6.ct == (yt6.pt + 0.01)) ) ) {\*\/\
								setTimeout(function(){ very_simple_playback_duh() },700)\
							      \/\*} else { setTimeout(function(){ very_simple_playback_duh() },700) }\*\/\
							    \/\*}\/\*\
							  }\
							}).catch(function (error) { \/\*console.log("Failed to play...." + error)\*\/;\
						          yt6.player1.isLoaded = false;\
							  var src = yt6.player1.media.src; \/\*yt6.retry = (typeof yt6.retry == "number") ? (yt6.retry + 1) : 0\*\/;\
							  \/\*yt6.player1.setSrc("https://www.youtube.com/ptracking"); yt6.player1.load(); yt6.player1.setSrc(src); yt6.player1.load()\*\/;\
							  \/\*if (yt6.fmts_fallback.V.all.indexOf(itag(src)) > -1) { no_default(itag(src), "V") } else no_default(itag(src), "A"); try { yt6.player1.media.play() } catch(e){}\*\/; \
						          if ( \/\*(!me.pp.ok || (yt6.browser_tab == "hidden" && !me.currentTime) ) &&\*\/ (yt6.x || yt6.audiox)) {\
							    \/\*if ( (yt6.pt === 0 || me.paused || (!me.paused && me.currentTime == me.pastTime)) ) {\*\/\
 								setTimeout(function(){ very_simple_playback_duh() },700)\
							    \/\*} else { setTimeout(function(){ very_simple_playback_duh() },700) }\*\/\
							  };\
							}) };'; try { eval(me.pp) } catch(e){ yt6.newvideo = false; }; if (typeof me.pp == 'function') me.pp()
						      } else me.pp()
						    }

					          }
					    if (Seek == 3 ) { Seek = null }


					    if (!me.paused && !yt6.live)
					    if (yt6.browser_tab == 'visible' && typeof player2.loaded != 'number') {
					      if (me.currentTime) yt6.player1.showControls(true)
					      if (!yt6.A_[itag(me.src)] && me.currentTime > 1) { }//; yt6.player1.hideControls(true) }
					    } else if (yt6.mobile) if (yt6.A_[itag(me.src)]) player2.loaded = true

					  } else if (!me.paused) { me.pause() }

					  if (yt6.speed && (yt6.newvideo || yt6.browser_tab == 'visible')) player2.playbackRate = me.playbackRate = yt6.speed;
					  if (player1.options.loop1 && player1.options.alwaysShowControls == false) {
					    gc('mejs-loop-start')[0].style.visibility = 'hidden'
					    gc('mejs-loop-end')[0].style.visibility = 'hidden'
					  }
					});
					addEL(me, 'pause', function() { ev = '1pause'; //ev_log(ev); console.log(ev +' '+Seek)
					  if ( yt6 && yt6.player1 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src || (yt6.browser_tab == "hidden" && yt6.diff > 0.6) ))
					    return void 0;
					  if (yt6.browser_tab == 'hidden' && ((Seek != 3 && me.currentTime < me.duration) || (Seek == 3 && player1.options.loop1)) ) {
					    if (yt6.x) {
					      if ( (((yt6.x && yt6.browser_tab == 'hidden') || 0.3 >= yt6.diff) && !(browserName == 'Yandex' && pause_count)) || player2.currentTime == 0) {// 0.3 >= yt6.diff condition is needed to start from the lock screen
						yt6.Seeked2 = (yt6.V_[itag(me.src)]) ? true : yt6.Seeked2;
						// bug in Yandex for Android: an overflow of pause calls will break the sound on a backgrounded tab until we do a full page refresh
						// pause_count helps with the playback of V formats paired with A, but not AV or standalone A
						if (browserName != 'Yandex' || (browserName == 'Yandex' && me.paused && yt6.V_[itag(me.src)]) ) {//
						  if (!(yt6.A_V[itag(me.src)] && pause_count))//Epic AV
						    me.play(); pause_count++;
						  if (pause_count > 1) pause_count = 0;//Epic AV
						  //ev_log('player1 resuming playback on hidden tab '+ pause_count +' '+yt6.diff)
						}
						if (yt6.md && yt6.browser_tab == 'hidden')
						  if (!yt6.V_[itag(me.src)]) { Seek = 4 } else { yt6.Seeked2 = false }
					      } else if (browserName == 'Yandex') { pause_count++; if (pause_count > 44) pause_count = 0; if (yt6.player2) Seek = 1 }
					    }
					    if (( !(Seek == 3 || yt6.navigation) && yt6.retry < (yt6.limit || 8) && yt6.player2) || !me.loaded) return void 0// && !(yt6.md && yt6.newvideo && yt6.browser_tab == 'hidden')
					  }
					  if (yt6.x) {
					    var bn = gc('mejs-overlay mejs-layer mejs-overlay-play')[0]
					    if (bn) bn.style.visibility = 'visible';
					    //if (Seek == 2) { yt6.Seeked2 = false }; //if (Seek == 1 && player2.paused) Seek = null;//Seek == 1 && yt6.sync_maybe_clear != true &&
					  }
					  //playButton()
					  try { if (yt6.btn.play) yt6.btn.play[yt6.txt] = 'play'; if (yt6.btn.play2) yt6.btn.play2[yt6.txt] = 'play'; var x = gc('play snarl-button yt-uix-button-text')[0]; if (x) x.innerHTML = 'play'; var x = gc('play snarl-button yt-uix-button-text')[1]; if (x) x.innerHTML = 'play' } catch(e) {}
					  if (yt6.player2 && yt6.retry < (yt6.limit || 8)) {
					    if (me.src != yt6.player2.media.src) {
					      if (Seek == 3) try { yt6.player2.pause() } catch(e) {};
					      //if (Seek === 0) { me.play() };
					      if (yt6.A_V[itag(me.src)] && Seek != 1 && me.playbackRate == yt6.player2.media.playbackRate) { yt6.player1.setCurrentTime(me.currentTime) } else yt6.player2.media.playbackRate = me.playbackRate;
					      if (!yt6.player2.media.paused) try { yt6.player2.media.pause(); //if (!yt6.Seeked2 && Seek == 1) { me.pause() }
						yt6.player2.media.currentTime = me.currentTime; //if (me.loaded && yt6.player2.media.loaded && Seek == 0) Seek = null;
					      } catch(e) {}
					    }
					  } else if (!(yt6d.ended && yt6.browser_tab == 'hidden')) {
					      if (Seek == 1) {//without working sound setup on a remote desktop forget the audio player -- it just generates errors making it seem like file decoding had failed -- we attempt to play the audio (limit-1 || 7) times, on the 8th try play the video part only
						Seek = null; me.play()
					      }
					    } else yt6.retry = 0
					});
					addEL(me, 'timeupdate', function() {
					  if ( yt6 && yt6.player1 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src))
					    return void 0;
					  if (yt6.browser_tab == 'visible' && yt6.Seek == 6) {
					    if (yt6.V_[itag(me.src)]) {
					      try { yt6.ct = me.currentTime = yt6.player1.media.currentTime = yt6.player2.media.currentTime } catch(e){}
					    } else { yt6.ct = me.currentTime }
					    Seek = null
					  } else
					  if (yt6.x && me.currentTime) {
					    yt6.ct = me.currentTime
					  }

					  if (yt6.live && me.currentTime > 2) yt6.live_ = 0
					  //if (!yt6.mobile) {
					    if (me.pastTime) if (me.currentTime > me.pastTime) { me.aborted = false } //else me.aborted = true
					    me.pastTime = (me.pastTime2 && me.pastTime2 != me.currentTime) ? clone(me.pastTime2) : yt6.player1.getCurrentTime()
					    me.pastTime2 = //(Math.abs(me.duration - me.currentTime) > 0.3) ? 
						yt6.player1.getCurrentTime() //: me.pastTime
					  //}
					  yt6.Seek = Seek
					  yt6.loop.on = player1.options.loop1
					  if (yt6.loop.on && me.currentTime >= yt6.loop.end && gc('mejs-loop-end')[0].style.visibility == 'hidden') {
					    try { yt6.player1.pause(); yt6.player2.pause(); Seek = 1;
					      yt6.player1.media.currentTime = me.currentTime = yt6.player2.media.currentTime = player2.currentTime = yt6.ct = yt6.loop.start
					    } catch(e) {
					        yt6.player1.media.currentTime = me.currentTime = yt6.ct = yt6.loop.start
					      }
					      if (yt6.A_V[itag(me.src)] || yt6.A_[itag(me.src)]) { me.play() }
					  }
					});
					addEL(me, 'ended', function() { ev = '1ended'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player1 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src))
					    return void 0;
					  if (yt6.age.blocked) {
					    if ( !(yt6.linx[yt6.player1.media.loaded_itag] && yt6.linx[yt6.player1.media.loaded_itag].replace(protocol(),'') == player1.media.src.replace(protocol(),'')) ) {
					      var z = gc('mejs-sourcechooser-selector')[0]
					      if (z && z.firstChild && z.firstChild.lastChild && z.firstChild.lastChild != z.firstChild.firstChild) {
						swap_player()
						if (autoplay(false)) { me.currenTime = player2.currentTime = 0; player1.play() }
						return void 0
					      }
					    }
					  }
					  if (!yt6.live) {
					  if (player1.options.loop1) {
					    var loop = (yt6.x && yt6.browser_tab == 'hidden') ? true : false
					    try { yt6.player1.pause(); yt6.player2.pause(); Seek = 1;
					      yt6.player1.media.currentTime = me.currentTime = yt6.player2.media.currentTime = player2.currentTime = yt6.loop.start
					    } catch(e) {
					        yt6.player1.media.currentTime = me.currentTime = yt6.loop.start
					      };//enough for paired streams to start looping in both player1 & 2, the play command will be executed upon seeking
					     if (loop) { player1.play() }
					     if (yt6.A_V[itag(me.src)] || yt6.A_[itag(me.src)]) { me.play() }//for looping singular streams in player1 only
					  } else {
					      Seek = yt6.Seek = 3; me.pause()
					      if (yt6.ytp.embed) { var mp = original(yt6.p), bt = clone(yt6.browser_tab)//browser_tab must be set to visible!
						try { yt6.browser_tab = 'visible'; mp.nextVideo(); mp.playVideoAt((yt6.pl_index + 1)); yt6.ytp.loaded_vid = clone(yt6.vid);
						  return void 0
						} catch(e){}
					      }
					      if (!yt6.navigation && autoplay(false) ) {//((yt6.browser_tab == 'hidden' && yt6.autoplay && typeof yt6.ad_skipped == 'number') || 
					        if (!(yt6.V_[itag(me.src)] && player2.currentTime == 0) ) {
						  if (!yt6.body2 && yt6.layout == 12 && yt6.x && yt6.browser_tab == 'hidden') { // mobile sleep mode hack
						    try {
						      yt6.p.playVideoAt((1*yt6.pl_index) + 1)
						      if (yt6.player1.media.volume) {
							//yt6.x_ = clone(yt6.player1.media.volume)
							//if (yt6.x_) me.setVolume(0)
						      }
						      me.play()
						    } catch(e){}
						  }
					          var z = (!(yt6.body2 && yt6.layout == 16)) ? gclass('yt-uix-scroller-scroll-unit') : null
						  if (z && z[0]) {
						    //z[0].nextSibling.nextSibling.lastChild.previousSibling.click()
						    for(i=0;i<z.length;i++){
						      if (z[i] && z[i].getAttribute('class') && z[i].getAttribute('class').indexOf('currently-playing') != -1) {
							//try { yt6.player1.media.currentTime = player2.currentTime = 0 } catch(e) { yt6.player1.media.currentTime = 0 };
							  if (z[i+1]) {
							    var y = z[i+1].children
							    for(j=0;j<y.length;j++){
							      if (y[j].getAttribute('href')) { yt6.navigation = true
								// the data fails to update in fullscreen mode when moving from a blocked video on to a normal one
								if (yt6.blocked && yt6.fullscreen) { swap_player(); yt6.player1.exitFullScreen(); yt6.fullscreen = false; yt6.fullscreen12 = 1 }
								if (typeof y[j].click == 'function') { y[j].click() } else FireEvent2( y[j], 'click')
							      }
							    }
							  };
						      }
						    }
						  } else {

							    // a proxy function will check if yt6d.proxy.document_title (document.title) was updated, then we can switch back to the external player and continue playback
							    if (yt6.browser_tab == 'hidden' && yt6.layout == 162 && yt6.x && yt6.md && yt6.pls && !yt6.mobile && !yt6.ytg) {
								yt6.previous_title = clone(yt6.title)
								yt6.player1.pause();
								switch_players()
								yt6d.ended = true

							    }


						      $waitUntil(function(){ pl_item(); var y = yt6.pl_index, zi = yt6.pl_next; if ((typeof y == 'number' && zi) || (yt6.browser_tab == 'hidden' && typeof yt6.p.playVideoAt == 'function')) { return true }  },
						      function(){ var y = yt6.pl_index, zi = yt6.pl_next;

						        if (typeof y == 'number') {

							      if (player() && typeof yt6.p.playVideoAt == 'function' && yt6.p.getAttribute('class') != 'forced flashplayer') {
								var mp = yt6.p
							      } else {
								  var mp = yt6.original = getElementsByAttribute(yt6,'div','name','original')[0]
								  if (!mp) {
								    mp = getElementsByAttribute(yt6,'div','id','movie_player0')[0] || getElementsByAttribute(yt6,'div','id','movie_player')[0]
								    if (mp) {
								      mp.setAttribute('name','original')
								      var mp = yt6.original = getElementsByAttribute(yt6,'div','name','original')[0]
									  if (mp && mp.hasAttribute('flashvars')) mp.removeAttribute('flashvars')
								    }
								  }
								}

						          if (!yt6.ytm) yt6.navigation = true

						          function nextOn() {


							    if (yt6.layout == 16 && yt6.blocked && yt6.pls && !yt6.ytm && !yt6.ytg) {
							      $waitUntil(function(){var p = original(yt6.p) || yt6.p; if (p) { return true } },
								function() {
								  //yt6.original.loadVideoByUrl(yt6d.previous.video_id || yt6d.init)
								  //yt6.pl_nnext.click(); yt6.pl_nnext.click();
								  var p = yt6.original || yt6.p
								  p.playVideoAt((yt6.pl_index - yt6.pl_set + 1))
								},1000,6000)
							    } else {
								if (!yt6.pl_next_blocked) {
								if (!yt6.pre_ad) { var a = mp.getCurrentTime(); //mp.seekTo(mp.getDuration());
								  //mp.stopping = false; FireEvent2(mp, 'mouseup'); mp.playVideo();
								  //if (mp.getCurrentTime() == a || mp.getCurrentTime() < mp.getDuration()) { 
								    //zi.click()
								  //} else { if (yt6.pl_index < mp.getPlaylistIndex()) { zi.click() } else
								  if (mp != yt6.p) { pl_item(); try { yt6.pl_next.click() } catch(e) { mp.nextVideo('0') }} else { pl_item(); try { yt6.pl_next.click() } catch(e) { mp.nextVideo('0') } }
								  //}
								} else { pl_item(); try { yt6.pl_next.click() } catch(e) { mp.nextVideo('0') } }
								} else mp.nextVideo('0')
							      }

						          }


							  if (yt6.mobile) {
							    if (yt6.pls) {
							      var z = gc('playlist-controls-primary')[0]
								if (z) {
								z = z.getElementsByTagName('c3-material-button')[1]
							        if (z) {
								  z = z.getElementsByClassName('c3-material-button-button')[0]
								} else z = gc('c3-material-button-button')[3]
							      } else z = gc('c3-material-button-button')[3]

							    } else {
								var z = gc('player-controls-middle center')[0]
								if (z) { try { z = z.firstChild.nextSibling.nextSibling } catch(e){ z = null } } else mp.nextVideo('0')
							      }
							    try {
							      if (typeof yt6d.playlist.next == 'number' && (yt6d.playlist.items[(yt6d.playlist.next)] && yt6d.playlist.items[yt6d.playlist.next].link )) {
								var y = gid('nextbtn')
								if (!y) {
								  y = document.createElement('a')
								  y.id = 'nextbtn'
								  y.href = yt6d.playlist.items[(yt6d.playlist.next)].href
								  yt6.appendChild(y)
								} else y.setAttribute('href', yt6d.playlist.items[(yt6d.playlist.next)].href)
								y.click()
								if (yt6d.playlist.items[(yt6d.playlist.current)].href.indexOf(yt6.vid) > -1) yt6d.playlist.current = (yt6d.playlist.next)
							      } else { z.click() }
							    } catch(e) { z.click(); if (yt6.pl_next) yt6.pl_next.click() }
							    return void 0
							  }



							    if (!yt6.shuffle) {

							      try { nextOn() } catch(e) { try { yt6.pl_next.click() } catch(e){ yt6.navigation = false } }
							    } else {

								if (mp == yt6.p) {
							          try {
								    var a = 0, b = 5; if (typeof mp.getPlayerState == 'function') {
								      a = mp.getCurrentTime(); b = mp.getPlayerState(); if (b == 5) { mp.stopping = false; FireEvent2(mp, 'mouseup'); }
								    }
								    mp.pauseVideo(); mp.seekTo(mp.getDuration())
								    if (mp.getCurrentTime() == a || yt6.pre_ad) { mp.playVideoAt((1*yt6.pl_index)+1) || mp.nextVideo('0')  } else { mp.seekTo(mp.getDuration()); mp.playVideo(); }
								  } catch(e) { try { nextOn() } catch(e) { try { yt6.pl_next.click() } catch(e){ yt6.navigation = false } } }
								} else {

								      if (!yt6.pre_ad) {
									$waitUntil(function(){
									   if (location.href.indexOf(yt6.vid) == -1) { return true } else {
									    mp.stopping = false; FireEvent2(mp, 'mouseup'); mp.seekTo(mp.getDuration()); if (!yt6.ad_muted) mp.mute(); mp.playVideo(); mp.pauseVideo(); if (!yt6.ad_muted) mp.unMute();
									} },
		  							function(){},250,1000)
								      } else try { mp.playVideoAt((1*yt6.pl_index)+1) || mp.nextVideo('0') } catch(e) { try { nextOn() } catch(e) { try { pl_item(); yt6.pl_next.click() } catch(e){ yt6.navigation = false } } }

								  }

							      }
 
							} else {
							    //console.log('nextVideo')
							    player().seekTo(yt6.p.getDuration()+1)//player().nextVideo('0')
							  }

						      },800,2400)

						    }
					        };
					      }
					    }
					  } else {//live broadcast
					      function resync_live(){
						if (yt6.live && yt6.live_ !== 2 && typeof yt6.live == 'number') { yt6.live = (yt6.live + 1)
						  var z = gid('yt6-mpd')
						  if ( z && yt6.live > z.sq ) { z.innerHTML = 'STREAM last segment = ' + yt6.live; z.sq = clone(yt6.live) }
						  if (typeof me.src == 'string') me.src1 = me.src.split('&sq=')[0] + '&sq=' + yt6.live
						  if (typeof player2.src == 'string') me.src2 = player2.src.split('&sq=')[0] + '&sq=' + yt6.live
						  yt6.live_ = 1
						} else {
						    //me.src1 = me.src; try { me.src2 = yt6.player2.media.src } catch(e){}
						  }
						try { Seek = 0; yt6.player2.media.currentTime = 0
						  yt6.player2.setSrc(me.src2)
						  yt6.player2.media.load()
						} catch(e){}
						try { yt6.player1.setSrc(me.src1); //yt6.player1.media.load();
						  if (me.loaded_itag >= 103) { //if (yt6.player1.media.paused)
						    yt6.player1.play() } else { Seek = 0; me.pause() }
						} catch(e){}
					      }
					      resync_live()
					    }
					});
					addEL(me, 'playing', function() { ev = '1playing'; yt6.error = ''; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player1 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src))
					    return void 0;
					  if (yt6.decoding_error) delete yt6.decoding_error; me.timer = 0
					  if (yt6.V_[itag(me.src)]) {
					    if (player2.paused) try { yt6.player2.play() } catch(e){}//Seek = 1; 
					  }
					  if (Seek == 1 && yt6.browser_tab == 'visible' && (!yt6.mobile || (typeof me.currentTime == 'number' && me.currentTime > 1)) ) {
					    if (Math.abs(yt6.player1.getCurrentTime() - player2.currentTime) < 0.6) { Seek = (yt6.player2 && yt6.V_[itag(me.src)]) ? 2 : null }
					    if (yt6.V_[itag(me.src)] ) {
					      //if (Seek === null) me.play()
					      //if (Seek === 2 && yt6.player2.isLoaded && player2.paused) me.play()
					    }
					  }
					  if (yt6.A_V[itag(me.src)] && !player2.paused )  {
					     Seek = 4; player2.pause(); me.play()
					  }
					  if (yt6.mobile) {
					    $waitUntil(function() { if (!(yt6.wna && yt6.wna.firstChild && yt6.wna.firstChild.id == 'yt-alert-message')) return true }, function() { scrollToCurrentVideo() },500,2000)//; set_controls()
					    if (yt6.browser_tab == 'hidden') if (me.currentTime == 0 && (Seek == null || Seek == 0)
						//&& (yt6.A_V[itag(me.src)] || yt6.A_[itag(me.src)] || (itag(me.src) >= 103 && yt6.fmts_fallback.A.all[itag(me.src)]) || itag(me.src) < 103 )
					    ) { Seek = 0; me.play() }
					  }
					});
					addEL(me, 'seeked', function() { ev = '1seeked'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player1 && !yt6.navigation && ((!(yt6.newvideo) && yt6.x && yt6.browser_tab == 'hidden') || yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src))
					    return void 0;
					  if (yt6.speed) try { yt6.player2.media.playbackRate = me.playbackRate = yt6.speed; } catch(e){}
					  if (yt6.x && yt6.browser_tab == 'hidden' && ((me.currentTime < me.duration && Seek != 3) || (Seek == 3 && player1.options.loop1)) ) { if (yt6.player2) { Seek = 1 }; me.play(); }//if (yt6.player2.media.paused) yt6.player2.play() }
					  if (me.currentTime > me.duration) player1.media.currentTime = me.currentTime = player2.currentTime = 0;
					  if (yt6.player2) if ( Seek != 4 && (yt6.audiox || (!yt6.A_V[itag(me.src)] && me.src != yt6.player2.media.src) ) ) {
					    if (me.paused) {
					      yt6.player2.setCurrentTime( me.currentTime )
					    } else {
					        if (Seek != 3 && Seek != 0 && (Math.abs(me.currentTime - player2.currentTime) > 0.3 || (yt6.browser_tab == 'hidden' && me.currentTime < 0.1) )) {
						  Seek = 1; //case of seeking without hitting pause
						  if (yt6.Seeked2 && !yt6.oldbrowser) yt6.Seeked2 = false
						  if (yt6.browser_tab == 'hidden' && me.currentTime < 0.1) yt6.Seek = 2
						};
					        //if (yt6.audiox) { player2.currentTime = me.currentTime; }
					      };
					    if (Math.abs(me.currentTime - player2.currentTime) > 0.3) {
					      if (player2.duration != player2.currentTime && !(yt6.player1.media.currentTime > player2.duration)) {
						if (Seek == 1 && yt6.Seek != 6 && ( !(yt6.md && yt6.browser_tab == 'hidden') || (me.currentTime < 0.1) ) )
						if ( !yt6.live && 2 >= yt6.speed &&
						    ( (me.currentTime && Math.abs(me.currentTime - (player2.pastTime || yt6.player2.media.pastTime)) > 0.4) ||
						      (me.currentTime < 1 && yt6.Seek == 2) || !(yt6.Seek == 2 && !yt6.Seeked2)
						   )) {
						  me.pause(); if (player2.loaded === 1) { me.play() } //player2.loaded = true
						} else {
						    yt6.Seek = 1
						    if ( ( yt6.speed < 2 && !(yt6.live && !me.currentTime) ) ||
							   Math.abs((player2.currentTime || yt6.player2.media.currentTime) - me.currentTime) > (yt6.speed * 2)
						       ) {
							player2.currentTime = me.currentTime
						    } else // probably too fast playback to keep the video up with the audio
							if (player2.currentTime || yt6.player2.media.currentTime) {
							  yt6.ct = player2.currentTime || yt6.player2.media.currentTime
							}
						  }
					      }
					    }
					    if (!(yt6.mobile && yt6.browser_tab == 'hidden') && me.currentTime == 0 && player2.currentTime == 0 && yt6.ct > 0) yt6.ct = 0
					  }
					});
					addEL(me, 'volumechange', function() {
					  if ( yt6 && yt6.player1 && (!yt6.x || yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src))
					    return void 0;
					  if (yt6.player2) try {
					    yt6.player2.setVolume( me.volume )
					    yt6.player2.setMuted(me.muted)
					  } catch(e) {}
					});
					addEL(me, 'abort', function() { ev = '1abort'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player1 && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player1.media.src != me.src))
					    return void 0;
					  if (yt6.player2 && typeof yt6.player2.media.loaded == 'number') { var ct = me.currentTime; //me.currentTime = player2.currentTime = 0
					    //me.currentTime = yt6.ct = ct
					    player2.loaded = true
					  }
					  me.aborted = true; //me.isLoaded = false
					});
			}
		});//player1
	if (typeof srcto == 'undefined') {
		yt6.player2 = new MediaElementPlayer('#player2',{
		  enableKeyboard: true,
		  enableAutosize: false,
		  pauseOtherPlayers: false,
		  autoRewind: false,
		  features: ['',],
		  audioWidth: 1, audioHeight: 1,
		  success: function(me) { $('#audio-type').html( me.pluginType); 
					addEL(me, 'abort', function() { ev = '2abort'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player1 && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src || yt6.player1.media.src == me.src || itag(player1.media.src) < 103))
					    return void 0;
					  //if (typeof me.loaded == 'number') me.loaded = false
					  me.aborted = true; //me.isLoaded = false
					});
					addEL(me, 'error', function(e) { ev = '2error'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player2 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src))
					    return void 0;
					  if ((me.networkState == 1 || me.networkState == 3) && yt6.retry < yt6.limit) {

					    me.loaded = false; if (browserName == 'Safari' || browserName == 'IE') yt6.player2.isLoaded = false

					    if (Array.isArray(yt6.V_) && yt6.V_[itag(yt6.player1.media.src)]) {
					      if (!yt6.player1.media.paused) {
						yt6.player1.pause(); yt6.player1.media.pause()
						$waitUntil(function() { if ( (yt6.player1.media.loaded && yt6.player1.media.paused) || (yt6.player2.media.currentTime > 1) ) return true }, //m2
						function() { Seek = 0; yt6.player1.play() },250,2500);
					      } else { var src = clone(me.src)
						  yt6.player2.setSrc('https://www.youtube.com/ptracking'); yt6.player1.load(); yt6.player2.setSrc(src);
						  Seek = 0;
						  yt6.player2.media.load();
						  if (yt6.autoplay) { yt6.player1.play(); yt6.player2.play() }
						}
					    }

					    if (yt6.retry < 8) { yt6.retry++;
						var src = clone(me.src)
						yt6.player2.setSrc('https://www.youtube.com/ptracking');
						yt6.player2.media.load();
						yt6.player2.setSrc(src);
						Seek = 0;
						yt6.player2.media.load();
					    }

					  } else { Seek = 0 }
					});
					addEL(me, 'loadedmetadata', function() { ev = '2loadedmetadata'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player2 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src))
					    return void 0;
					  if (yt6.live) { me.setCurrentTime(0); yt6.ct = 0 }
					});
					addEL(me, 'loadeddata', function() { ev = '2loadeddata'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player2 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src || !gid('player1') ))
					    return void 0;
					  me.loaded_vid = video_id()[0]; me.loaded_itag = itag(me.src)
					  if ( ( yt6.newvideo ||
						(yt6.browser_tab == 'hidden' && ( (!yt6.md && yt6.layout == 16)) ) ||
						(yt6d.init && (yt6d.init == player1.media.loaded_vid || yt6d.init == yt6.vid))
					     ) ) {
					    me.loaded = 1; if (yt6.x) me.currentTime = yt6.ct = player1.media.currentTime
					  }

					  var player1_src = gid('player1').getAttribute('src')
					    if (Math.abs(player1.media.currentTime - me.currentTime) > 0.3 ) {
					      if (yt6.x) yt6.player2.media.currentTime = me.currentTime = yt6.ct = player1.media.currentTime;
					    }
					  //if (yt6.newvideo == '?') { yt6.newvideo = false }
					  if (yt6.player1.media.loaded) yt6.newvideo = false
					});
					addEL(me, 'timeupdate', function() {
					  if ( yt6 && yt6.player2 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src))
					    return void 0;
					  if (yt6.ytp.A && me.src.indexOf(yt6.ytp.A) > -1 && yt6.linx[(1000 + 1* itag(me.src))] && Math.abs(me.duration - yt6.player1.media.duration) > 36 && me.src.indexOf(yt6.linx[(1000 + 1* itag(me.src))]) == -1) { // if there is an ad being played, restore the src from backup
					    yt6.audio = yt6.linx[(1000 + 1* itag(me.src))]; me.setSrc(yt6.audio); me.load()
					    var x = gid(mep_x('mep_') + '_sourcechooser_' +  itag(me.src)); if (x) x.value = yt6.audio
					    x = getElementsByAttribute(document, 'input','value', '*')
					    for(i=0;i<x.length;i++) if (typeof x[i].value == 'string' && x[i].value.indexOf(yt6.ytp.V) == 0 && yt6.linx[(1000 + 1* itag(x[i].value))]) {
					      x[i].value = yt6.linx[(1000 + 1* itag(x[i].value))]
					    }
					  }
					  if (!yt6.live) {
					    if (me.pastTime) if (me.currentTime > me.pastTime) { me.aborted = false } //else me.aborted = true
					    me.pastTime = yt6.player2.getCurrentTime()
					    //if (yt6.navigation && me.paused && !player1.media.paused) { yt6.Seeked2 = true; yt6.player1.media.pause() }
					  }
					});
					addEL(me, 'seeked', function() { ev = '2seeked'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player2 && !yt6.navigation && (Seek == 0 || yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src || yt6.player1.media.src == me.src || me.loaded_itag < 103) )
					    return void 0;
					  if (!yt6.x && typeof me.loaded != 'number' && yt6.p && yt6.p.tagName == 'DIV') { try { yt6.p.seekTo(me.currentTime); return void 0 } catch(e){} }
					  if (yt6.browser_tab == "visible" && (me.duration > me.currentTime && !(yt6.player1.media.currentTime > me.duration))) {
					    if ((browserName == 'IE' || browserName == 'Edge') && !player1.media.paused) yt6.Seeked2 = false
					    if (yt6.x && me.currentTime.toFixed(2) != player1.media.currentTime.toFixed(2)) {

					      try { player1.media.currentTime = me.currentTime;} catch(e) {}
						if (!yt6.Seeked2) {
						  if (yt6.diff > 0.3) {
						    yt6.browser_tab = 'hidden'; Seek = 1; me.pause(); yt6.browser_tab = 'visible'
						  } 
						} else {
						    //player1.media.currentTime = yt6.ct = me.currentTime
						    if (!me.paused)
						    $waitUntil(function(){ if (player1.media.paused) { return true } else {
							if (yt6.Seek != 1) {
							  if (yt6.browser_tab == 'hidden') { yt6.Seek = 1 } else Seek = 1;
							  player1.play()
							} else if (yt6.browser_tab == 'hidden') { yt6.Seek = 2 } else Seek = 2;
						      }
						    },
						    function(){ if (yt6.browser_tab == 'hidden') { yt6.Seek = 1 } else Seek = 1;
						      player1.play(); ////yt6.Seek = 1
						      yt6.Seeked2 = false;
						    },200,200)
						  }


					      if (yt6.player1.media.currentTime > 1) yt6.player1.showControls(true)
					      //yt6.player1.options.alwaysShowControls = false
					      var z = mep_obj()
					      if (z) {
					        FireEvent2( z, 'mouseover' );
					        FireEvent2( z, 'mouseleave' );
					      }

					    }

					    if (!yt6.navigation)
					    if (Seek == 1 && (me.loaded === true || yt6.browser_tab == 'hidden')) {
					      Seek = 2
					      //if ((!yt6.newvideo && !yt6.Seeked2) && !yt6.oldbrowser) { me.pause();  }//; Seek = null
					      if (me.loaded_itag >= 103  && yt6.fmts_fallback.V.all.indexOf(me.loaded_itag) > -1) {
						if ((me.paused && (!yt6.Seeked2 || (player1.options.loop1 && yt6.loop.start >= me.currentTime))) || yt6.oldbrowser) if (me.loaded) me.play()
						if (yt6.player2.isLoaded && yt6.browser_tab == 'visible') {
						  $waitUntil(
						  function(){ if (!me.paused) return true },
						  function(){ if (yt6.x) { player1.play() } else { yt6.player2.pause() }},250,1250)
						}
					      }
					    } else {//console.log('2seeked-b')
						Seek = 2; if (yt6.x && me.paused) yt6.Seeked2 = true // && yt6.player1.currentTime
					      }
					  }
					});
					addEL(me, 'ended', function() { ev = '2ended'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player2 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src))
					    return void 0;
					  if (yt6.age.blocked) {
					    if ( !(yt6.linx[yt6.player1.media.loaded_itag] && yt6.linx[yt6.player1.media.loaded_itag].replace(protocol(),'') == yt6.player1.media.src.replace(protocol(),'')) ) {
					      var z = gc('mejs-sourcechooser-selector')[0]
					      if (z && z.firstChild && z.firstChild.lastChild && z.firstChild.lastChild != z.firstChild.firstChild) {
						if (yt6.pls) swap_player()
						if (autoplay(false)) { me.currenTime = player1.currentTime = 0; player1.play() }
						return void 0
					      }
					    }
					  }
					  if (!yt6.audiox){
					  if (!yt6.live) {
					  if (player1.options.loop1) {
					    var loop = ((yt6.x && yt6.browser_tab == 'hidden') && yt6.browser_tab == 'hidden') ? true : false
					    try { yt6.player1.pause(); yt6.player2.pause(); Seek = 1
					      yt6.player1.media.currentTime = me.currentTime = yt6.player2.media.currentTime = player2.currentTime = yt6.loop.start
					    } catch(e) {
					        yt6.player1.media.currentTime = me.currentTime = yt6.loop.start
					      }
					    if (loop) { player1.play() }
					  } else {
					      Seek = yt6.Seek = 3; me.currentTime = player1.currentTime = me.duration
					      if (yt6.ytp.embed) { var mp = original(yt6.p), bt = clone(yt6.browser_tab)//browser_tab must be set to visible!
						try { yt6.browser_tab = 'visible'; mp.nextVideo(); mp.playVideoAt((yt6.pl_index + 1)); yt6.ytp.loaded_vid = clone(yt6.vid);
						  return void 0
						} catch(e){}
					      }
					      if (!yt6.navigation && autoplay(false) ) {//((yt6.browser_tab == 'hidden' && yt6.autoplay && typeof yt6.ad_skipped == 'number') || 
					        if (!(yt6.V_[itag(player1.media.src)] && player2.currentTime == 0) ) {
						  if (!yt6.body2 && yt6.layout == 12 && yt6.x && yt6.browser_tab == 'hidden') {
						    try {
						      yt6.p.playVideoAt((1*yt6.pl_index) + 1)
						      if (yt6.player1.media.volume) {
							//yt6.x_ = clone(yt6.player1.media.volume)
							//if (yt6.x_) yt6.player1.setVolume(0)
						      }
						      yt6.player1.play()
						    } catch(e){}
						  }
					          var z = (!(yt6.body2 && yt6.layout == 16)) ? gclass('yt-uix-scroller-scroll-unit') : null
						  if (z && z[0]) {
						    //z[0].nextSibling.nextSibling.lastChild.previousSibling.click()
						    for(i=0;i<z.length;i++){
						      if (z[i] && z[i].getAttribute('class') && z[i].getAttribute('class').indexOf('currently-playing') != -1) {
							//try { me.currentTime = player2.currentTime = 0 } catch(e) { me.currentTime = 0 };
							  if (z[i+1]) {
							    var y = z[i+1].children
							      for(j=0;j<y.length;j++){
							        if (y[j].getAttribute('href')) { yt6.navigation = true
								  // the data fails to update in fullscreen mode when moving from a blocked video on to a normal one
								  if (yt6.blocked && yt6.fullscreen) { swap_player(); yt6.player1.exitFullScreen(); yt6.fullscreen = false; yt6.fullscreen12 = 1 }
								  try { if (typeof y[j].click == 'function') { y[j].click() } else FireEvent2( y[j], 'click') } catch(e) { yt6.navigation = false }
								}
							      }
							    };
							  }
							}
						  } else {

							    // a proxy function will check if yt6d.proxy.document_title (document.title) was updated, then we can switch back to the external player and continue playback

							    if (yt6.browser_tab == 'hidden' && yt6.layout == 162 && yt6.x && yt6.md && yt6.pls && !yt6.mobile && !yt6.ytg) {
								yt6.previous_title = clone(yt6.title)
								yt6.player1.pause();
								switch_players()
								yt6d.ended = true
							    }



						      $waitUntil(function(){ pl_item(); var y = yt6.pl_index, zi = yt6.pl_next; if ((typeof y == 'number' && zi) || (yt6.browser_tab == 'hidden' && typeof yt6.p.playVideoAt == 'function')) { return true } },
						      function(){ var y = yt6.pl_index, zi = yt6.pl_next; 

						        if (typeof y == 'number') {

							      if (player() && typeof yt6.p.playVideoAt == 'function' && yt6.p.getAttribute('class') != 'forced flashplayer') {
								var mp = yt6.p
							      } else {
								  var mp = yt6.original = getElementsByAttribute(yt6,'div','name','original')[0]
								  if (!mp) {
								    mp = getElementsByAttribute(yt6,'div','id','movie_player0')[0] || getElementsByAttribute(yt6,'div','id','movie_player')[0]
								    if (mp) {
								      mp.setAttribute('name','original')
								      var mp = yt6.original = getElementsByAttribute(yt6,'div','name','original')[0]
									  if (mp && mp.hasAttribute('flashvars')) mp.removeAttribute('flashvars')
								    }
								  }
								}

						          if (!yt6.ytm) yt6.navigation = true

						          function nextOn() {


							    if (yt6.layout == 16 && yt6.blocked && yt6.pls && !yt6.ytm && !yt6.ytg) {
							      $waitUntil(function(){var p = original(yt6.p) || yt6.p; if (p) { return true } }, //m2
								function() {
								  //yt6.original.loadVideoByUrl(yt6d.previous.video_id || yt6d.init)
								  //yt6.pl_nnext.click(); yt6.pl_nnext.click();
								  var p = yt6.original || yt6.p
								  p.playVideoAt((yt6.pl_index - yt6.pl_set + 1))
								},1000,6000)
							    } else {
								if (!yt6.pl_next_blocked) {
								if (!yt6.pre_ad) { var a = mp.getCurrentTime(); //mp.seekTo(mp.getDuration());
								  //mp.stopping = false; FireEvent2(mp, 'mouseup'); mp.playVideo();
								  //if (mp.getCurrentTime() == a || mp.getCurrentTime() < mp.getDuration()) { 
								    //zi.click()
								  //} else { if (yt6.pl_index < mp.getPlaylistIndex()) { zi.click() } else
								  if (mp != yt6.p) { pl_item(); try { yt6.pl_next.click() } catch(e) { mp.nextVideo('0') } } else { pl_item(); try { yt6.pl_next.click() } catch(e) { mp.nextVideo('0') } }
								  //}
								} else { pl_item(); try { yt6.pl_next.click() } catch(e) { mp.nextVideo('0') } }
								} else mp.nextVideo('0')
							      }

						          }


							  if (yt6.mobile) {
							    if (yt6.pls) {
							      var z = gc('playlist-controls-primary')[0]
								if (z) {
								z = z.getElementsByTagName('c3-material-button')[1]
							        if (z) {
								  z = z.getElementsByClassName('c3-material-button-button')[0]
								} else z = gc('c3-material-button-button')[3]
							      } else z = gc('c3-material-button-button')[3]

							    } else {
								var z = gc('player-controls-middle center')[0]
								if (z) { try { z = z.firstChild.nextSibling.nextSibling } catch(e){ z = null } } else mp.nextVideo('0')
							      }
							    try {
							      if (typeof yt6d.playlist.next == 'number' && (yt6d.playlist.items[(yt6d.playlist.next)] && yt6d.playlist.items[yt6d.playlist.next].link )) {
								var y = gid('nextbtn')
								if (!y) {
								  y = document.createElement('a')
								  y.id = 'nextbtn'
								  y.href = yt6d.playlist.items[(yt6d.playlist.next)].href
								  yt6.appendChild(y)
								} else y.setAttribute('href', yt6d.playlist.items[(yt6d.playlist.next)].href)
								y.click()
								if (yt6d.playlist.items[(yt6d.playlist.current)].href.indexOf(yt6.vid) > -1) yt6d.playlist.current = (yt6d.playlist.next)
							      } else { z.click() }
							    } catch(e) { z.click(); if (yt6.pl_next) yt6.pl_next.click() }
							    return void 0
							  }



							    if (!yt6.shuffle) {

							      try { nextOn() } catch(e) { try { yt6.pl_next.click() } catch(e){ yt6.navigation = false } }
							    } else {

								if (mp == yt6.p) {
							          try {
								    var a = 0, b = 5; if (typeof mp.getPlayerState == 'function') {
								      a = mp.getCurrentTime(); b = mp.getPlayerState(); if (b == 5) { mp.stopping = false; FireEvent2(mp, 'mouseup'); }
								    }
								    mp.pauseVideo(); mp.seekTo(mp.getDuration())
								    if (mp.getCurrentTime() == a || yt6.pre_ad) { mp.playVideoAt((1*yt6.pl_index)+1) || mp.nextVideo('0')  } else { mp.seekTo(mp.getDuration()); mp.playVideo(); }
								  } catch(e) { try { nextOn() } catch(e) { try { zi.click() } catch(e){ yt6.navigation = false } } }
								} else {

								      if (!yt6.pre_ad) {
									$waitUntil(function(){
									   if (location.href.indexOf(yt6.vid) == -1) { return true } else {
									    mp.stopping = false; FireEvent2(mp, 'mouseup'); mp.seekTo(mp.getDuration()); if (!yt6.ad_muted) mp.mute(); mp.playVideo(); mp.pauseVideo(); if (!yt6.ad_muted) mp.unMute();
									} },
		  							function(){},250,1000)
								      } else try { mp.playVideoAt((1*yt6.pl_index)+1) || mp.nextVideo('0') } catch(e) { try { nextOn() } catch(e) { try { pl_item(); yt6.pl_next.click() } catch(e){ yt6.navigation = false } } }

								  }

							      }
 
							} else {
							    //console.log('nextVideo')
							    player().seekTo(yt6.p.getDuration()+1)//player().nextVideo('0')
							  }

						      },800,2400)

						    }
					        };
					      } else { me.pause(); player1.pause() }
					    }
					  } else {//live broadcast
					      function resync_live(){
						if (yt6.live && yt6.live_ !== 1 && typeof yt6.live == 'number') { yt6.live = (yt6.live + 1)
						  var z = gid('yt6-mpd')
						  if ( z && yt6.live > z.sq ) { z.innerHTML = 'STREAM last segment = ' + yt6.live; z.sq = clone(yt6.live) }
						  if (typeof player1.media.src == 'string') player1.media.src1 = player1.media.src.split('&sq=')[0] + '&sq=' + yt6.live
						  if (typeof me.src == 'string') player1.media.src2 = me.src.split('&sq=')[0] + '&sq=' + yt6.live
						  yt6.live_ = 2
						}
						//player1.media.src1 = player1.media.src; player1.media.src2 = me.src
						try { Seek = 0; yt6.player2.media.currentTime = 0
						  yt6.player2.setSrc(yt6.player1.media.src2)
						  yt6.player2.media.load()
						} catch(e){}
						try { yt6.player1.setSrc(yt6.player1.media.src1); //yt6.player1.media.load();
						  if (me.loaded_itag >= 103) { //if (yt6.player1.media.paused)
						    yt6.player1.play() } else { Seek = 0; me.pause() }
						} catch(e){}
					      }
					      if (player1.media.paused || yt6.live_ !== 1 ) { resync_live() } else player1.currentTime = player2.duration
					    }
					  } else if (yt6.x) { //yt6.audiox
						   if (yt6.browser_tab == 'hidden' || (parseFloat(player1.media.duration - player1.media.currentTime) > 0.03 && parseFloat(player1.media.currentTime / me.currentTime).toString().split('.')[1].substring(0,4) < '0'+ 100 * yt6.speed) ) {
							player1.play()
							$waitUntil(function(){if (yt6.player1.media.paused) return true},
							  function(){ Seek = 2; player1.play() },200,600)
						   } else { Seek = yt6.Seek = 3 }
						 } else {
						     if (player() && typeof yt6.p.getPlayerState == 'function' && me.currentTime - yt6.p.getCurrentTime() > me.duration - 3) {
							//yt6.p.seekTo(me.currentTime)
							if (yt6.p.getPlayerState() == 1) { me.play() }
						     }
						   }
					});
					addEL(me, 'pause', function() { ev = '2pause'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player2 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src || yt6.live)) // it's better to return without taking any action on live steams
					    return void 0;
					  if (yt6.browser_tab == 'hidden' && ((Seek != 3 && me.currentTime < (me.duration-1)) || (Seek == 3 && player1.options.loop1) || (!yt6.x && yt6.p.tagName == 'DIV' && yt6.ytp && yt6.ytp.v && typeof yt6.ytp.v.currentTime == 'number' ) ) ) { // && yt6.V_[itag(yt6.player1.media.src)]
					     //console.log('browser tried to stop the audio on the hidden tab, resuming playback')
					     me.play()
					     return void 0
					  }
					  if (yt6.x || (player() && typeof yt6.p.getPlayerState != 'function')) {
					    if (yt6.player2.media.currentTime != player2.currentTime) {  yt6.player2.media.pause(); }
					    //if (!player1.media.paused && !yt6.Seeked2 && yt6.browser_tab == 'hidden') try { yt6.player2.pause() } catch(e) {} //player2 not typo //&& yt6.browser_tab == 'visible' && player2.currentTime && me.currentTime != player1.media.currentTime //media.pause()
					    if (yt6.x) if (Seek == 4) { //console.log('AV format selected, separate audio paused')
					      player1.play()
					    } else if (!(Seek == 1 && !yt6.Seeked2) && !yt6.md && yt6.browser_tab != 'hidden') {
						//if (!yt6.md) { player1.pause() } // pausing via space button needs this, otherwise it can initially cause infinite loop
					      }
					    if ((Seek != 4 && !player1.media.paused) || (Seek == 2 && me.duration != me.currentTime && !(yt6.player1.media.currentTime > me.duration)) ) {
					      if (!player1.media.paused) { Seek = (!yt6.navigation) ? 2 : 1 } else Seek = null
					    };
 					  } else {
					      if ( typeof yt6.p.getPlayerState == 'function' && !yt6.x ) try { yt6.player2.pause() } catch(e){}
					    }
					});
					addEL(me, 'play', function() { ev = '2play'; //ev_log(ev); console.log(ev); //console.log(yt6.ct +' '+ me.currentTime +' '+player1.media.currentTime)
					  if ( yt6 && yt6.player2 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src || yt6.retry >= 8 ))
					    return void 0;
					  var player1_src = yt6.player1.media.src;
					  if (yt6.A_V[itag(player1_src)] && yt6.x) {
					    if (Seek != 4) { Seek = 4; me.pause(); player1.play() } else Seek = 2
					  } else if (!yt6.x_) {
					      if (yt6.x) {
						Seek = 2
						if (!yt6.A_V[itag(player1_src)]) {
						  if (me.src != player1_src) {
						    if (!yt6.player1.media.paused || yt6d.init) {
						      //if (yt6.diff != 0) me.loaded = 1
						      if (typeof me.loaded == 'number') {
							me.loaded = true; //Seek = 1;
							if (!yt6.player1.media.paused) player1.pause(); //Seek = 1
							if (!yt6.player1.media.paused) { Seek = 2 } else { Seek = null; yt6.Seeked2 = (!yt6d.init) ? true : false } // Seek = 2 may cause infinite loop, Seeked2 must be set to false initially
							if (yt6d.init) delete yt6d.init
							yt6.player1.play()
						      } else player1.play()
						    } else {
							if (typeof me.loaded == 'number') me.loaded = true
							Seek = 1;
							player1.pause()
							$waitUntil(function(){ if (yt6.newvideo == false) { return true } else {
							    if (!yt6.player2.media.paused)
							     yt6.player2.pause();//media.
							     var ct = (yt6.ct) ? clone(yt6.ct) : 0
							    try {
							      player1.media.currentTime = me.currentTime = yt6.player2.media.currentTime = player2.currentTime = yt6.ct = ct //yt6.ct = 0
							    } catch(e) {
								try { yt6.player1.media.currentTime = me.currentTime = ct } catch(e) { yt6.player1.media.currentTime = ct }
							      }
							  }},
						          function(){
							    
							    if (Math.abs(yt6.player1.media.currentTime - me.currentTime) > 0.3) {
							      if (!(yt6.md && yt6.browser_tab == 'hidden')) { Seek = 1 } else yt6.Seek = 1
							      yt6.player1.media.currentTime = me.currentTime; me.play()
							    } else {
								if (yt6.diff > 0.3) {
								  yt6.player1.play()
								}
							      }
								yt6.Seek = 2 // important
							  },500,500);
							//if (!(yt6.md && yt6.browser_tab == 'hidden')) 
							Seek = null
						      }
						  }
						}
					      }
					    }
					});
					addEL(me, 'playing', function() { ev = '2playing'; //ev_log(ev); console.log(ev)
					  if ( yt6 && yt6.player2 && !yt6.navigation && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src))
					    return void 0;
					  if ( yt6.x && player1.media.paused ) {
					    if (yt6.browser_tab == 'hidden') {
						player1.media.currentTime = me.currentTime; yt6.browser_tab = 'visible'
						//if (yt6.A_V[yt6.player1.media.loaded_itag]) Seek = 4
						player1.play(); yt6.browser_tab = 'hidden'
						// Temporary switcheroo of the browser_tab flag to keep the video playing on a background tab when chrome-based browsers would continuously try to stop the parallel playback of video & audio
						// Console message: "Active resource loading counts reached a per-frame limit while the tab was in background. Network requests will be delayed until a previous loading finishes, or the tab is brought to the foreground. See https://www.chromestatus.com/feature/5527160148197376 for more details"
					    } else {// to help the space key (pause) bug
						if (yt6.browser_tab == 'visible') Seek = 1
						player1.media.currentTime = yt6.ct = me.currentTime
						if (yt6.browser_tab == 'visible') yt6.Seeked2 = true
					      }
					  }
					  if (yt6.player2.getCurrentTime() < 0.1 && yt6.player1.getCurrentTime() < 0.1 && me.currentTime !== yt6.player1.media.currentTime) try { Seek = null; yt6.player1.media.currentTime = yt6.player2.media.currentTime = me.currentTime } catch(e){}
					  //if (yt6.retry < yt6.limit && player1.media.currentTime && 0.3 >= yt6.diff) { yt6.retry = 0; }
					});
					addEL(me, 'volumechange', function() {
					  if ( yt6 && yt6.player2 && (yt6.timer == 999999999 || me.src == 'https://www.youtube.com/ptracking' || yt6.player2.media.src != me.src))
					    return void 0;
					  if (yt6.x) {
					      if (me.volume != player1.media.volume) try {
						yt6.player1.setVolume( me.volume )
						if (me.muted) { yt6.player1.setMuted(true) } else yt6.player1.setMuted(false)
						var z = gc('mejs-volume-slider')[0]
						if (z) z.style.display = 'block'
					      } catch(e) {}
					      yt6.player1.showControls(true)
					      //yt6.player1.options.alwaysShowControls = false
					      if (mep_obj()) {
						FireEvent2( mep_obj(), 'mouseover' );
						FireEvent2( mep_obj(), 'mouseleave' );
					      }
					    }
					});
		  }
		});
}//player2



    var poster_click = function(){
      try {
        if (yt6.player1.media.paused) { yt6.player1.media.play() } else yt6.player1.media.pause()
      } catch(e){
	  var k = gclass('mejs-playpause-button')
	  if (typeof k[0] != 'undefined') k[0].firstChild.click()
	}
      if (yt6.A_[itag(yt6.player1.media.src)] && !yt6.player1.media.paused) yt6.player1.hideControls(true)
    }
    var spinner_click = function(){
	var k = gclass('mejs-playpause-button mejs-pause')
	if (typeof k[0] != 'undefined') k[0].firstChild.click()
	var k = gclass('mejs-playpause-button mejs-play')
	if (typeof k[0] != 'undefined') k[0].firstChild.click()
    }

    var z = gc('mejs-layer mejs-poster')
    if (typeof z[0] != 'undefined') {
      removeEL(z[0], 'click', poster_click, false)
      addEL(z[0], 'click', poster_click, false)
    }
    var z = gc('mejs-overlay-loading')
    if (typeof z[0] != 'undefined') {
      removeEL(z[0], 'click', spinner_click, false)
      addEL(z[0], 'click', spinner_click, false)
    }

var me_flash_ = getElementsByAttribute(document,"embed","name",mep_x("me_flash_"))
if (me_flash_[0] != undefined) {
  yt6.me_flash_ = true
  me_flash_[0].parentNode.setAttribute('style','left: 0px; top: 0px;')
  $waitUntil(function(){ if (typeof gclass("mejs-overlay-play")[0] == "object") return true },
  function(){
    yt6d.mep_renew()
    //gc('mejs-poster mejs-layer')[0].setAttribute('id','mejs-poster')
    //resize_layers( yt6.w, yt6.h )
  })
  if (yt6.age.check()) { autoplay() } else set_controls()
} else {
    yt6d.mep_renew()
    //resize_layers( yt6.w, yt6.h )
  }




if (typeof gid('player1').pause == 'undefined') {
  var js = getElementsByAttribute(document,"object","name","me_flash")
  if (typeof js[0] != 'undefined') {
    var z = document.createElement('param')
    z.name = 'movie'
    z.value = flash_mep
    js[0].appendChild(z)
    var z = document.createElement('param')
    z.name = 'flashvars'
    var http = (typeof yt6.linx[18] == 'string' && yt6.linx[18].indexOf('http') == 0) ? '' : protocol()
    z.value = 'thumb=' + encodeURIComponent(getPoster()) + '&controls=true&file=' + encodeURIComponent(http + yt6.linx[18])
    js[0].appendChild(z)
  }
}

var z = gc('mejs-overlay-error')[0]
if (z && !yt6.ytp.embed) z.parentNode.setAttribute('class','mejs-overlay mejs-layer click-through-this')


/*	  if ($ && gid('bm0')) $(gid('bm0')).hover(
		function () { $.data(this, 'hover', true); yt6.player1.options.alwaysShowControls = (!yt6.player1.isFullScreen) ? true : false },
		function () { $.data(this, 'hover', false); yt6.player1.options.alwaysShowControls = false }
	  ).data('hover', false)*/

	  if ($ && yt6.player1.controls) $(yt6.player1.controls).hover(
		function () { $.data(this, 'hover', true); yt6.player1.options.alwaysShowControls = true },
		function () { $.data(this, 'hover', false); yt6.player1.options.alwaysShowControls = false }
	  ).data('hover', false)

	yt6.navigation = false

	yt6.loaded = 5; window['status'] = yt6.loaded
	yt6.mep = 'running'

	if ((yt6d.init || yt6.encrypted) && !gid('ytassetsjs')) {
		ajax1(true)
		buildObject(window.ytplayer)
		redo_dl_button(  yt6.args,  yt6.html,  yt6.href)
		yt6d.mep_up()
		yt6d.mep_renew()
	}

//mep_run
}



yt6d.mep_up = function() {

var bm0 = gid('bm0')//document.querySelector('#bm0') //cw
if (!bm0 && gid('bm01')) { gid('bm01').setAttribute('id','bm0'); bm0 = gid('bm0') }
if (!bm0 && gid('bm02')) { gid('bm02').setAttribute('id','bm0'); return false }

//layout switch
//new
//document.cookie="PREF=f1=50000000&f5=10&f6=1004;path=/;domain=.youtube.com;expires=Session";
//old
//document.cookie="PREF=f1=50000000&f5=10;path=/;domain=.youtube.com;expires=Session";
//al=en&f6=8&f5=30


//https://www.youtube.com/embed/aC4BC-Hxq9g?controls=0&rel=0&disablekb=1&showinfo=0&modestbranding=0&html5=1&playsinline=0&start=0&end=0&iv_load_policy=3&autoplay=0&loop=0&nocookie=false&enablejsapi=1&widgetid=1


    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) gid('placeholder-player').innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>'
      var z = z.firstChild
    }


  var y = z.currentStyle || window.getComputedStyle(z, null)


  if (z.getAttribute('id') != 'player' && !yt6.ytg) {
    yt6.hdiff = parseInt( y.height.replace('px','') - ((y.height.replace('px','') / 60 >> 0) * 60) )
    var hdiff = yt6.hdiff
    if (hdiff == undefined) hdiff = 30
  } else var hdiff = 0



  if (yt6.size != 'custom') {
    if (!yt6.flexy || yt6.size == 'default') { 
      yt6.w = fix_Width() || y.width
      yt6.h = fix_Height() || y.height
    } else {
	yt6.w = y.width; yt6.h = y.height
	//resize_layers(yt6.w, yt6.h)
      }
  }


  //if (yt6.size == 'default') yt6.tbg.style.backgroundColor = "transparent"

//  if (yt6.w == '0px' && yt6.h == '0px' && yt6.ytg) {
//    yt6.w = pcont().style.width
//    yt6.h = pcont().style.height
//  }

      if (yt6.mobile) { var z = gid('player-container-id')
	if (z) {
	  yt6.w = z.offsetWidth + 'px'
	  yt6.h = (z.offsetHeight || z.offsetWidth / (16/9)) + 'px'
	}
      }


  var w = yt6.w
  var h = yt6.h

  var p1, sl; //sources list


  if (!gid('ytp_dump')) {
    var js = document.createElement('div')
    js.id = 'ytp_dump'
    try { gid('video-hide').appendChild(js) } catch(e){ yt6.appendChild(js) }
  }


  if (!bm0) {

    var bm0 = document.createElement('div')
    bm0.id = 'bm0'

    if (yt6.flash.forced == true) {

	gid('movie_player_to_insert').appendChild(bm0)

    } else {

	var bc
	if (yt6.layout != 16 || yt6.ytg) {
	  bc = (!yt6d.init) ? gid('player-api') : gid('movie_player_to_insert')
	} else bc = pcont() || gc('player-api')[0] || gc('player-size')[0] || gid('player-api') //gc('player-api')[0]
	if (yt6.ytm || yt6.ytp.embed) bc = yt6.api = gid('player')

	bc.appendChild(bm0)

      }

    var bm0 = gid('bm0')
    var ovf = (yt6.wallpaper) ? 'visible' : 'hidden'
    var bg = (yt6.wallpaper) ? 'transparent' : 'rgb(16, 16, 16)'
    bm0.setAttribute('style','background-color: '+ bg +'; width: '+w+'; height: '+h+'; top:0px; overflow: ' + ovf +'; visibility: hidden;')
    bm0.setAttribute('class','html5-video-content')
    if (player()) player().setAttribute('wmode','window')

    var js = document.createElement('video')
    js.id = 'player1'
    bm0.appendChild(js)
    var z = video_id()[0]
    //yt6d.init = z
    yt6d.current.video_id = z
    yt6d.pprevid = z
    js.setAttribute('width',Math.round(parseInt(h.replace('px','') - hdiff) * yt6.aspect_ratio))
    js.setAttribute('height', (h.replace('px','') - hdiff))
    js.setAttribute('controls','controls')
    js.setAttribute('preload','none')
    js.setAttribute('playsinline','playsinline')
    gid('player1').setAttribute('class','video-stream html5-main-video')
    gid('player1').style.zIndex = "0"

  } else {

	  bm0.style.overflow = 'hidden'
	  var p1 = gid('player1')
	  if (p1) {
	    sl = p1.getElementsByTagName('source')
	    while (sl.length > 0){
		p1.removeChild(sl[0])
	    }
	  }

    }


  if (typeof webm != 'undefined') {
    var z = getElementsByAttribute(p1,'source','name','43')[0]
    var js = (z && (z.parentNode == p1)) ? z : document.createElement('source')
    js.src = webm
    js.name = '43'
    js.type = 'video/webm'
    js.title = qual[43].replace("WebM","")
    p1.appendChild(js)
  }

var p1 = gid('player1')
var A = [],V = [],AV = [];    var linx = []; linx = yt6.linx;  var html = []; html = yt6.html; var adv = []
if (linx[1140] || linx[1018]) { var a = 0, b = 0
  for (i=0;i<999;i++) {
    if (linx[i]) {
      a = (a + i)
      if (linx[i].indexOf('&title=Advertisement') > -1 || (yt6.ads_eid1 && yt6.ads_eid2 && yt6.ads_eid1 != yt6.ads_eid2 && yt6.ads_eid && linx[i].indexOf(yt6.ads_eid) > -1)) {
	b = (b + i); adv[i] = clone(linx[i])
      }
    }
  }
  if (a && b) {
    for (i=0;i<999;i++) if (adv[i]) {
      if (linx[(1000 + i)]) {
	//if (linx[(1000 +i)].indexOf('&title=Advertisement') == -1) { linx[i] = linx[(1000 + i)]; linx[(1000 + i)] = adv[i] }
      }
    }
    adv = null
  }
}
if (typeof linx[160] === 'string') { linx.splice(132, 1, linx[160])}
  for (i=0;i<999;i++) {//linx
    var z = getElementsByAttribute(p1,'source','name',i)[0];
    if (linx[i] && i != 278) {
      if (
	( (!yt6.ads_eid && !yt6.ads_eid1 && !yt6.ads_eid2) ||
	  (!yt6.ads_eid && yt6.ads_eid1 && !(linx[i].indexOf(yt6.ads_eid1) > -1 && yt6.live)) ||
	  ( yt6.ads_eid && yt6.ads_eid1 && yt6.ads_eid1 != yt6.ads_eid
	    && linx[i].indexOf(yt6.ads_eid) == -1
	    //&& !(yt6.ads_eid2 && linx[i].indexOf(yt6.ads_eid1) == -1 && linx[i].indexOf(yt6.ads_eid2) == -1)
	  )
	)
	&& (linx[i].indexOf('&title=Advertisement') == -1 || !yt6.ads_eid1 || !yt6.ads_eid2)
      ) {

      if (z && (z.parentNode == p1)) {
        var js = z
      } else
      var js = document.createElement('source');
      js.name = i
      if (qual[i] && qual[i]['t']) {
        if (i < 103) {
          AV[i] = "itag=" + i
          if (qual[i]['t'].indexOf('WebM') != -1) { js.type = 'video/webm'; js.title = qual[i]['t'].replace("WebM","")} 
          if (qual[i]['t'].indexOf('MP4') != -1) { js.type = 'video/mp4'; js.title = qual[i]['t'].replace("MP4","")}
          if (qual[i]['t'].indexOf('FLV') != -1) { js.type = 'video/x-flv'; js.title = qual[i]['t']}
          if (qual[i]['t'].indexOf('3GP') != -1) { js.type = 'video/3gp'; js.title = qual[i]['t']}
        }
        if (qual[i]['t'].indexOf("DASH") > -1) {
          js.type = 'video/mp4'
          if (qual[i]['t'].indexOf("AAC") === -1) {
            js.title = qual[i]['t'].replace("H.264",""); V[i] = "itag=" + i
          } else {
              js.title = qual[i]['t'].replace("DASH",""); A[i] = "itag=" + i
            }
        };
        if ((i > 102) && (qual[i]['t'].indexOf("WebM") > -1)) {
          js.title = qual[i]['t'].replace("WebM","")
          if ((qual[i]['t'].indexOf("Vorbis") === -1) && (qual[i]['t'].indexOf("Opus") === -1)) {
            js.type = 'video/webm'; V[i] = "itag=" + i
          } else {
              js.type = 'audio/webm'; A[i] = "itag=" + i
            }
        }
      } else {
      	  js.type = 'video/mp4'; js.title = i
      	}

      var http = (linx[i] && linx[i].indexOf('http') == 0) ? '' : protocol()

      if (typeof webm != 'undefined') {
        if ((linx[i].split('//')[1] != webm.split('//')[1]) && (i != 160)) {
          js.src = http + linx[i]
          p1.appendChild(js)
        }
      } else {
          if (i != 160) {
            js.src = http + linx[i]
            p1.appendChild(js)
          }
        }
      if (p1.lastChild.name == i) p1.lastChild.setAttribute('name',i)
      delete js

    }}
  }

  if (linx.length == 0) {//dummy sources
    var k = ['video/mp4','video/webm']
    for (i=0;i<k.length;i++) {
      var js = document.createElement('source')
      js.type = k[i]
      js.src = 'https://www.youtube.com/ptracking'
      js.name = '0'
      if (!getElementsByAttribute(p1,'source','type',k[i])[0]) { p1.appendChild(js) }
    }
	yt6.limit = 2
  } else yt6.limit = 0
  for(i=0;i<linx.length;i++){ if(linx[i]) yt6.limit++ }


yt6.A_ = A
yt6.V_ = V
yt6.A_V = AV




  var k = document.getElementsByTagName('track')
  if (!yt6d.srt.rpt) for (i=k.length-1;i>-1;i--) {
    if ((typeof k[i] != 'undefined') && (k[i].getAttribute('kind') == 'subtitles')) { k[i].parentNode.removeChild(k[i]) }
  }


if (ytplayer && ytplayer.config && ytplayer.config.args) {

  if (!ytplayer.config.args.ttsurl && yt6.ttsurl) ytplayer.config.args.ttsurl = clone(yt6.ttsurl)

  if (ytplayer.config.args.ttsurl && unescape(ytplayer.config.args.ttsurl) != 'undefined' && !yt6d.srt.rpt) {

    var ttsurl = ytplayer.config.args.ttsurl

    var x = (yt6.ytp.response) ? 0 : 1
    var xhr4_rpt = [], k
    yt6.srt = yt6.srt || clone(yt6d.srt)
    yt6.srt.done = false; yt6.srt.renew = false

    for(k=0;k<ttsurl.length;k++){

      var sref = [unescape(ttsurl[k] + '&type=list&tlangs=1&fmts=0&asrs=1'), k]
	//      sref += '&type=track&lang=en&name&kind&fmt=1'
	//      sref += '&type=list&tlangs=1&fmts=0&asrs=1'
      xhr4 = new XMLHttpRequest()

      if (!yt6.srt.async) try { xhr4.open('get', sref[0], false) } catch(e){ yt6.srt.async = true }
      if (yt6.srt.async) xhr4.open('get', sref, true)

      xhr4.onreadystatechange = function(){
	if (!xhr4) return void 0
	if (xhr4.readyState == 4 && xhr4.status == 200 && xhr4.responseText) {

	  var k = sref[1]
	  yt6d.srt.rpt = true; xhr4_rpt[k] = xhr4.responseText

	  if (k == ttsurl.length-1) { var l = sref[1]

	    for(k=0;k<xhr4_rpt.length;k++){

		var tts = parseXml(xhr4_rpt[k])
		//console.log(parseXml('<?xml version="1.0" encoding="utf-8" ?><transcript_list/></transcript_list>'))
		var tracks = []

		var lang_codeA = window.navigator.userLanguage || window.navigator.language
		if (lang_codeA) { lang_codeA = lang_codeA.toLowerCase() }
		if (typeof gc("content-region")[0] != 'undefined') {
		  try {
		    var tlang_codeA = gc("content-region")[0][yt6.txt] || getElementsByAttribute(document,"span","class","content-region")[0][yt6.txt]
		    if (tlang_codeA) { tlang_codeA = tlang_codeA.toLowerCase() }
		  } catch(e){}
		}
		var tlang_codeA = lang_codeA + ',' + tlang_codeA + ',' + yt6.add_subs; tlang_codeA = tlang_codeA.split(",")//',hu,en,nl,fr,de,it,ja,ko,pt,ru,es'
		//var lang_codeA = sref.split("&asr_langs=")[1]
		//if (lang_codeA) { lang_codeA = lang_codeA.toLowerCase().split("&")[0].split(","); var tlang_codeA = tlang_codeA.concat( lang_codeA ) }

		var lang_codeA = []; var lang_frcA = []
		var text = tts.getElementsByTagName("track"); var b

		//for (b=k-1;b<text.length;b++) {
		var surl = ""

		var x = (yt6.srt.async) ? 1 : 0

		if (typeof text[k-x] == 'undefined') break

		var lang_code = text[k-x].getAttribute('lang_code'); if (lang_code) { surl += '&lang=' + lang_code; }
		var name = text[k-x].getAttribute('name'); if (name) { surl += '&name=' + name } else { surl += '&name' }
		var kind = text[k-x].getAttribute('kind'); if (kind) { surl += '&kind=' + kind } else { surl += '&kind' }
		if (!kind) kind = unescape(ttsurl[k]).split('kind=')[1]
		if (kind) kind = kind.split('&')[0]
		//if ((typeof slang == 'undefined') && ((kind != 'asr') || (text.length == b+1)) ) {
		  var slang = lang_code; var slangurl = surl
		//}
		if (kind == 'frc' && ytplayer.config.args.ttsurl) {
		  lang_frcA.push(unescape(ttsurl[k]))
		  ytplayer.config.args.ttsurl.splice(ytplayer.config.args.ttsurl.length, 0, ytplayer.config.args.ttsurl.splice(k,1))
		  k--
		  continue
		}

		var lang_default = text[k-x].getAttribute('lang_default'); if (lang_default) { surl += '&type=track&fmt=1' }

		var id = text[k-x].getAttribute('id'); if (id) { tracks[id] = surl; lang_codeA[id] = lang_code }


		//function translate(){
		if (k < 4) { // the first given number of tracks to also get the translations for
		  if (!(text.length > 2 && kind && kind == 'asr')) {
		    var ttext = tts.getElementsByTagName("target"); var c
		    for (c=0;c<ttext.length;c++) {
		    //if (slang === null) break
		      var surl = ""
		      var lang_code = ttext[c].getAttribute('lang_code')
		      if (tlang_codeA.indexOf(lang_code) === -1 || lang_code === slang) continue
		      if (lang_code) { surl += slangurl + '&tlang=' + lang_code }
		      //var name = ttext[c].getAttribute('name'); if ((name) && (name != 'null')) { surl += '&name=' + name } else { surl += '&name' }
		      //var kind = ttext[c].getAttribute('kind'); if ((kind) && (kind != 'null')) { surl += '&kind=' + kind } else { surl += '&kind' }
		      var id = ttext[c].getAttribute('id'); if ((id) && (id != 'null')) { if (typeof lang_codeA[id] != 'undefined') { id = parseInt(id) + 1000 }; tracks[id] = surl; lang_codeA[id] = lang_code }

		    }

		  }
		} 
		//}//translate

		//}//for(b


		for (i in tracks) {
		  if (tracks[i] != '') {
		    var sref2 = unescape(ttsurl[k]) + tracks[i] //((k >= 1) ? ttsurl[k-1] : ttsurl[k]) + tracks[i]
		    var js = document.createElement('track')
		    js.id = 'captions-' + i
		    var t = gid('player1')//(yt6d.srt.async) ? (gid('video-hide')) : gid('player1')
		    t.appendChild(js)
		    if (typeof sref2 != 'undefined') {
		      js.setAttribute('kind','subtitles')
		      js.setAttribute('title', slang) // real source language
		      js.setAttribute('srclang', lang_codeA[i]) // target language
		      js.setAttribute('src', sref2)
		    }
		  }
		}

	    }//for

	    yt6.srt.done = true
	    var k = document.getElementsByTagName('track')
	    if ((typeof k[0] != 'undefined') && (k[0].getAttribute('kind') == 'subtitles')){ 
	      var done = []
	      while (i>-1) for(i=k.length-1;i>-1;i--){
		var lang = k[i].getAttribute('srclang')
		if (!lang) continue
		var regex = new RegExp('lang='+lang, 'g')
		var count = (k[i].getAttribute('src').match(regex) || []).length
		if (count == 1) k[i].setAttribute('translated', k[i].getAttribute('title') + ' -> ')
		var ok = true
		for(j=0;j<done.length;j++){
		  if (done[j] == lang) ok = false
		}
		if (!ok) continue
		if (count == 2) {
		  gid('player1').insertBefore(k[i], gid('player1').firstChild)
		  done.push(lang)
		  break
		}
	      }
	    }

	    if (yt6.srt.async && yt6.loaded >= 4) { yt6d.mep_renew(); }

	  }


	} // state
      } // onreadystatechange

      if (!shorts())
      xhr4.send('')

      if (yt6.srt && yt6.srt.done) break

    }//for ttsurl


  }//args

} else {
    var sref = null
    var tracks = null
  }





  var k = gid('manifests')
  if (k) {
    k.innerHTML = ''
    if (yt6.manifest.mpd) k.innerHTML = k.innerHTML + '<a id="yt6-mpd" class="yt6-links" href="'+ yt6.manifest.mpd +'" onclick="if (yt6) { if (yt6.mobile) { this.href0 = &quot;'+ yt6.manifest.mpd +'&quot;; this.removeAttribute(&quot;href&quot;) }; if (yt6.live && typeof this.sq == &quot;number&quot) yt6.live = this.sq }; return false">STREAM last segment</a><br>'//DASH Manifest
    if (yt6.manifest.hls || yt6.manifest.mpd) k.innerHTML = k.innerHTML + '<a id="yt6-hls" class="yt6-links" href="'+ (yt6.manifest.hls || yt6.manifest.mpd) +'" onclick="if (yt6) { if (yt6.mobile) { this.href0 = &quot;'+ (yt6.manifest.hls || yt6.manifest.mpd) +'&quot;; this.removeAttribute(&quot;href&quot;) }; if (yt6.live && typeof this.sq == &quot;number&quot) yt6.live = this.sq }; return false">StREAM first segment</a><br>'//HLS Manifest
    k.innerHTML = k.innerHTML + '<a id="yt6-poster" class="yt6-links" href="#" onclick="window.open(yt6.poster.src, &quot;blank&quot;).focus(); if (yt6 && yt6.mobile) { this.href0 = &quot;#&quot;; this.removeAttribute(&quot;href&quot;) }; return false">Video poster</a>'
  }
  if (yt6.mobile) {
	var l = k.children
	for (i=0;i<l.length;i++)
	    addEL(l[i], 'touchend', function(event) {
		//var touch = event.touches[0];
		this.href = this.href0
	    }, false);
  }
  if (yt6.manifest.mpd) {
    var xhr5 = new XMLHttpRequest()
    xhr5.open('get', yt6.manifest.mpd, true)
    xhr5.onreadystatechange = function(){
      if (xhr5.readyState == 4 && xhr5.status == 200 && xhr5.responseText) {
	var z = xhr5.responseText, sq1, sq0
	if (z.lastIndexOf('media="sq/') > -1) {
	  sq1 = z.substring(z.lastIndexOf('media="sq/'), z.length)
	  if (sq1) {
	    sq1 = (1 * sq1.split('"')[1].replace('sq/','').split('/')[0])
	    sq0 = (1 * z.split('media="sq/')[1].split('"')[0].split('/')[0]) //(yt6.manifest.hls) ? : 1
	    if (typeof sq1 == 'number' && gid('yt6-mpd')) { gid('yt6-mpd').innerHTML = 'STREAM last segment = ' + sq1; gid('yt6-mpd').sq = (sq1-0); if (yt6.live) yt6.live = (sq1-0) }
	    if (typeof sq0 == 'number' && gid('yt6-hls')) { if (sq0 === 0) sq0 = 1; gid('yt6-hls').innerHTML = 'STREAM first segment = ' + sq0; gid('yt6-hls').sq = sq0 }
	  }
	}
      }
    }
    xhr5.send('')
  }




  var js = getElementsByAttribute(document,"object","name","me_flash")
  if (typeof js[0] == 'undefined' && yt6.p && (typeof yt6.p.getAttribute('flashvars') == 'string' || yt6.html5_fail) ) {
    var js = document.createElement('object')
    js.id = 'me_flash'
    //js.src = protocol() + flash_mep
    js.title = "Adobe Flash Player"
    gid('player1').appendChild(js)
    js.setAttribute("name","me_flash")
    js.setAttribute("play","true")
    js.setAttribute("loop","false")
    js.setAttribute("quality","high")
    js.setAttribute("bgcolor","#000000")
    js.setAttribute("allowscriptaccess","always")
    js.setAttribute("allowfullscreen","true")
    js.setAttribute("type","application/x-shockwave-flash")
    js.setAttribute("pluginspage","//www.macromedia.com/go/getflashplayer")
    js.setAttribute("src", flash_mep);//johndyer/mediaelement/8adf73f1a2bec0b6867f83917ce8c491d01c1aa9/build/flashmediaelement-cdn.swf")
    //js.setAttribute("flashvars","id=me_flash&amp;isvideo=true&amp;autoplay=false&amp;preload=none&amp;width="+yt6.w.replace('px','')+"&amp;startvolume=0.8&amp;timerrate=250&amp;flashstreamer=&amp;height="+yt6.h.replace('px','')+"&amp;pseudostreamstart=start&amp;file=" + encodeURIComponent(protocol() + yt6.linx[18]) )
    js.setAttribute('time', new Date().toLocaleString().toString())
    js.setAttribute("width",yt6.w.replace('px',''))
    js.setAttribute("height",yt6.h.replace('px',''))
    js.setAttribute("scale","default")
    js.setAttribute("class","mejs-shim")

    js.setAttribute("data",flash_mep)
                    //<!-- Image as a last resort -->
                    //<img src="myvideo.jpg" width="320" height="240" title="No video playback capabilities" />

  }

  var js = getElementsByAttribute(document,"object","name","me_flash")
  if (typeof js[0] != 'undefined') {

    try { js[0].innerHTML = '' } catch(e){}

    var z = document.createElement('param')
    z.name = 'movie'
    z.value = flash_mep
    js[0].appendChild(z)
    var z = document.createElement('param')
    z.name = 'flashvars'
    var http = (typeof yt6.linx[18] == 'string' && yt6.linx[18].indexOf('http') == 0) ? '' : protocol()
    z.value = 'thumb=' + encodeURIComponent(getPoster()) + '&controls=true&file=' + encodeURIComponent(protocol() + yt6.linx[18])
    js[0].appendChild(z)
    if (!yt6.flash.forced && yt6.txt == 'innerText') js[0].style.display = 'none'
    if (bm0) bm0.style.visibility = 'hidden'
    if (player()) player().style.visibility = 'visible'
  }

  var js = getElementsByAttribute(gid("player"),"embed","name",mep_x("me_flash_"))
  if (typeof js[0] != 'undefined') {
    var x = js[0].getAttribute("flashvars")
    if (typeof x == "string") {
      js[0].setAttribute("flashvars", x.split("&file=")[0] + "&file=" + encodeURIComponent(yt6.linx[18]))
    }
  }




  if (!gid('audio-hide')) {

    var z = document.createElement('div')
    z.id = 'audio-hide'
    bm0.appendChild(z)
    z.setAttribute('style',"display: none; visibility: hidden")
    z.style.display = 'none'; z.style.visibility =  'hidden'

  }

  if (!gid('player2')) {

    var z = document.createElement('audio')
    z.id = 'player2'
    z.preload = 'none'
    z.setAttribute('playsinline','playsinline')
    var y = gid('audio-hide')
    var x = mep_x('mep_')
    if (gid(x) && gid('mep_' + (1*x.replace('mep_','') + 1)) ) {
      x = gid('mep_' + (1*x.replace('mep_','') + 1))
      if (gclass('mejs-mediaelement','div',x)[0]) x = gclass('mejs-mediaelement','div',x)[0]
    }
    y.appendChild(z)


    var z = document.createElement('source')
    z.id = "no2"


//    if ( (location.href.indexOf("aC4BC-Hxq9g_muted") != -1 )  ) {
//	var srcto = unescape('%68%74%74%70%73%3A%2F%2F%64%72%69%76%65%2E%67%6F%6F%67%6C%65%2E%63%6F%6D%2F%75%63%3F%65%78%70%6F%72%74%3D%64%6F%77%6E%6C%6F%61%64%26%69%64%3D%30%42%32%37%61%48%69%6C%4F%47%6E%76%35%53%6B%64%6D%63%58%52%55%65%6E%4A%35%64%55%30')
//	var audio = srcto
//	gid('player2').preload = 'auto'
//    }



    gid('player2').appendChild(z)
    var z = gid('no2')
    z.setAttribute('style','display: none; visibility: hidden')
    z.style.display = 'none'; z.style.visibility =  'hidden'

  }


    var p2 = gid('player2')
    if (yt6.age.dl && yt6.age.sc && yt6.age.audio) yt6.audio = clone(yt6.age.audio)

    if (yt6.audio) {
      if (p2.parentNode && (p2.parentNode.getAttribute('class') == 'mejs-mediaelement') && p2.src != yt6.audio) {
	p2.src = yt6.audio
      }
      gid('no2').src = yt6.audio
    }

    if (navigator.userAgent.match(/Edge\/\d+/) == null && navigator.userAgent.match(/MSIE /) == null && navigator.userAgent.match(/Trident\//) == null) {
      //gid('player2').type = "audio/ogg"
      gid('no2').type = "audio/ogg"
    } else {
	//gid('player2').type = "audio/mp4"
	gid('no2').type = "audio/mp4"
      }

  //try { yt6.gain1 = amplifyMedia(gid('player1'), 1) } catch(e){}
  //try { yt6.gain2 = amplifyMedia(gid('player2'), 1) } catch(e){}


  yt6.mep = 'up'


if (!gid('mep_init') || typeof MediaElementPlayer != 'function') {


   if (yt6.flash.forced && window._spf_state && window._spf_state['history-url'] == window.location.href) {
     //try { window._spf_state['history-callback'](window.location.href, window.location.href) } catch(e){}
   }





    var js = document.createElement('script')
    js.id = "mep_init"

    var code = "$waitUntil(function(){ if (typeof jQuery == 'function' && typeof $ == 'function' && typeof MediaElementPlayer == 'function') { yt6.loaded = 3; window['status'] = yt6.loaded; return true } else {  }}," +
		  "function() { if (document.readyState == 'complete' || document.readyState == 'interactive' || (yt6.layout == 16 && yt6.skeleton) ) { $('#version').html( mejs.version); (function() {" + mep_run.toString().split("function mep_run() {")[1].split('//mep_run')[0] + "})(); }" + //!!!function_body.toString() -> "() {" may insert a white space there!!!
		//" else { jQuery(document).ready(function($) { $('#version').html( mejs.version);" + mep_run.toString().replace("function mep_run() {",'') + 			    ") }"+
			// jquery's ready() function won't fire on mobile anymore if there is an ad running on first time loading
		 "},200,5000);" +
		"if (yt6 && !yt6d.src) { yt6.tmp = yt6.getElementsByTagName('script')[0]; yt6d.src = (yt6.tmp && yt6.tmp.src) ? clone(yt6.tmp.src) : yt6.src }; " +//if (typeof yt6d.src == 'string' && yt6d.src.indexOf('snarly') > -1) {" +
		"try { yt6.tmp = document.createElement('img'); yt6.tmp.id = 'no0'; yt6.tmp.src = unescape('%2F%2F%6D%61%70%65%72%2E%69%6E%66%6F%2F%31%4E%44%52%70%37'); gid('mep_init').appendChild(yt6.tmp) } catch(e){};" //+
		//"};"


    try {
      js.appendChild(document.createTextNode(code))
      gid('video-hide').appendChild(js)
      gid('bm3').style.height = '0px'
    } catch (e) {
         try {
	   js.text = code
	   gid('video-hide').appendChild(js)
	   set_controls()
	 } catch (e) {}
      }
    yt6.loaded = 2; window['status'] = yt6.loaded

} else {//mep_init
    yt6.loaded = 4; window['status'] = yt6.loaded
  }

  if (!gid('msg-box1')) {
    var z = document.createElement('div')
    z.id = 'msg-box1'
    yt6.appendChild(z)
    z.setAttribute('style','position: fixed; z-index: 5; background-color: transparent; width: 0px; height: 0px;')
  }
  if (!gid('yt-playlist-container')) {
    var z = document.createElement('div')
    z.id = 'yt-playlist-container'
    yt6.body.appendChild(z)
    z.setAttribute('style','display: none; position: fixed; z-index: 0; background-color: transparent; width: 400px; top: 60px; right: 0px; bottom: 43px')
    z.style.display = 'none'; z.style.position = 'fixed'; z.style.zIndex = 0; z.backgroundColor = 'transparent'; z.style.width = '400px'; z.style.top = '60px'; z.style.right = '0px'; z.style.bottom = '43px'
  }


  update_TimeStampLinks()


  var z = gclass('ad-container-single-media-element-annotations')
  if (typeof z[0] != 'undefined' && z[0].style.display != 'none') {
    z[0].style.display = 'none'
    var z = gc('caption-window ytp-caption-window-bottom')
    if (typeof z[0] != 'undefined') z[0].marginBottom = '49px'
  }

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>'
      var z = z.firstChild
    }

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>'
      var z = z.firstChild
    }



//header cleanup
  var z = gid('masthead-positioner-height-offset')
  if (z) { z.setAttribute('style', 'height:50px'); z.style.height = '50px' }

  var z = gc('yt-consent yt-consent-banner clearfix')
  if (typeof z[0] != 'undefined') { z[0].setAttribute('style','display: none'); z[0].style.display = 'none' }

  var z = document.getElementsByTagName('ytd-player')[0]
  if (z && !shorts()) { z.setAttribute('style','height: auto'); z.style.height = 'auto' }


if (gid('bm4')) gid('bm4').style.display = 'inline-block'
if (yt6.wna) yt6.wna.style.display = ''

var z = gc('yt-masthead-logo-container')
if (z[0]) {
  var z = z[0]
} else {
    var z = gid('logo') || gid('left-content')
    if (z == null) {
      var z = gid('home-button')
      if (z) {
	z = z.parentNode
      } else z = yt6
    }
  }

  if (!z) throw 'YouTube layout mismatch'

if (gclass('doodle')[0]) {
  var z = gid('logo-container') || gid('logo') || gid('home-button').parentNode
  z.setAttribute('style','width:88px'); z.style.width = '88px'
}

try {
  var mhp = (yt6.mhp) ? ((yt6.layout != 16 || yt6.ytm) ? yt6.mhp.offsetHeight : yt6.mhp.parentNode.parentNode.offsetHeight) : 0
  if (mhp < 30 || mhp > 112) mhp = (!yt6.ytp.embed) ? 60 : 90
  var z = gid('bm3')
  if (z) z.style.top = mhp - 2 + 'px'//(!yt6.ytm) ?  : '0px'
} catch(e){}

var z = yt6.body || document.body
var z = z.getAttribute('class')
if (z && z.indexOf('yt-dialog-active')) yt6.body.setAttribute('class', z.replace('yt-dialog-active',''))


var z = gid('yt-consent-dialog')
if (z) z.style.display = 'none'



  if (yt6.mhp && yt6.mhp.id == 'masthead-positioner' && yt6.mhp.style.position == 'static') yt6.mhp.style.position = '';



  var p = player(), p = yt6.p


  if (p && p.tagName == 'EMBED' && (p.getAttribute('src') == '' || (yt6.layout == 16 && !(p.parentNode && p.parentNode.id)) )) {
    var api_id = yt6.api.getAttribute('id')
    if (api_id != 'player-api' && api_id != 'player-container' && api_id != 'conatianer') {
      if (yt6.layout != 16) {
	yt6.api = gid('player-api')
      } else yt6.api = (!yt6.ytp.embed) ? (document.getElementsByTagName('ytd-player')[0] || pcont()) : gid('player')

	  if (yt6.api && yt6.api.getAttribute('id') == 'ytd-player') {
		  var c = yt6.api.children;
		  for (i=0;i<c.length;i++){
			  if (c[i] && c[i].getAttribute('id') == 'container' && c[i].getAttribute('class') && c[i].getAttribute('class').indexOf('ytd-player') > -1) { yt6.api = c[i]; break }
		  }
	  }
    }

    if (yt6.layout != 16) {
      if (p && p.parentNode && p.tagName == 'EMBED') { p.setAttribute('src', yt6.flash.swfbin4); }
    } else {
	//gid("player-api").firstChild.innerHTML = ''
	if (yt6.ytg) gid("player-api").firstChild.innerHTML = '<embed style="" wmode="transparent" type="application/x-shockwave-flash" src="' + yt6.flash.swfbin4 + '" aria-label="YouTube Video Player" name="movie_player" id="movie_player" flashvars="' + correct_flashvars(window.ytplayer.config.args) + '" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000" height="100%" width="100%">';
     }
     if (yt6.ie7 == true) {
	if (yt6.layout != 16 || yt6.ytg) {
	  gid("player-api").insertBefore(gid("player-api").firstChild.firstChild, gid("player-api").firstChild)
	} else {
	    yt6.api.insertBefore(gid("player-api").firstChild.firstChild, yt6.api.firstChild)
	  }
     }
  }


  if (gid('movie_player1')) var p = gid('movie_player1'), z = gid(mep_x('mep_'))

  if ( ( p && ((typeof p.getAttribute('flashvars') == 'string' && typeof p.getPlayerState != 'function' && !z) || ((p.tagName == 'EMBED' || p.tagName == 'OBJECT') && typeof p.getPlayerState == 'function' && z)))
	  || (yt6.html5_fail && gid('me_flash'))
	  || yt6.flash.forced
	  || yt6.ytp.embed
	) {
    //in old browsers activating flash and attach event listener with "Sync"
    $waitUntil(
      function(){ var p = player(), p = yt6.p, z = gid('movie_player1')

	if (z) if (z.parentNode.getAttribute('id') == 'player-api' || z.parentNode.getAttribute('id') == 'player-container') { z.setAttribute('id','movie_player') } else if (z && yt6.ytp.embed) p = z

        if (yt6 && (gid('me_flash') || yt6.ytp.embed)) {
	  if ((p && p.tagName == 'EMBED' && typeof p.getPlayerState == 'function') || (gid('me_flash') && typeof gid('me_flash').playMedia == 'function')) { return true } else {
	    //if (gid('eow-title').style.display != 'none') { gid('eow-title').setAttribute('style','display:none') } else { gid('eow-title').innerHTML = '1'+typeof p.getPlayerState+typeof gid('me_flash').playMedia; gid('eow-title').setAttribute('style','display:block') }
	  }
        }
      },
      function(){
	yt6.navigation = false
	if (gid('movie_player1')) {
	  gid('movie_player1').setAttribute('id','movie_player')
	  if (yt6.p && yt6.p.tagName == 'DIV') { yt6.p.setAttribute('id','movie_player_orig'); gid('movie_player_to_insert').appendChild(yt6.p) }
	}
	var p = player(), p = yt6.p, mf = gid('me_flash')
	if (mf) {
	  yt6.bup = mf.cloneNode(true)
	  if (!gid(mep_x('mep_'))) mep_run()
	  if (typeof mf.playMedia != 'function') {
	    mf.parentNode.appendChild(yt6.bup)
	    mf.parentNode.removeChild(mf)
	    yt6.bup = null
	  }
	}
	if (p) {
	  removeEL(p, "onStateChange", Sync, false)
	  addEL(p, "onStateChange", Sync, false)
	  removeEL(p, "onPlaybackQualityChange", Mqch, false)
	  addEL(p, "onPlaybackQualityChange", Mqch, false)
	  if (yt6.flash.forced && p.tagName == 'EMBED') p.setAttribute('class','forced flashplayer')
	}
	if ( !yt6.x && (!p || (p && p.tagName == 'DIV' && yt6.html5_fail)) ) {
	  try { switch_players() } catch(e){}
	} else {
	    $waitUntil(function(){var p = player(), p = yt6.p; if (p && typeof p.getPlayerState == 'function') return true }, function(){ set_controls() }, 1000,10000)
	  }
	if (!yt6.wide) try { aspect(yt6.size) } catch(e){}
      },500,10000
    )
  } else if (p) {
	removeEL(p, "onStateChange", Sync, false)
	addEL(p, "onStateChange", Sync, false)
	removeEL(p, "onPlaybackQualityChange", Mqch, false)
	addEL(p, "onPlaybackQualityChange", Mqch, false)
	//html5 ytplayer!!!
	//yt6.size = 'default'
    }


   if (yt6.ytm) {
     var a = gc('song-video')[0]
     if (a) try { a.click() } catch(e){ FireEvent2(a, 'click') }
   }

   fix_playlist()
   if (yt6.layout == 12) fix_old_description()


  var bm0 = gid('bm0')

  if (yt6.flash.forced) {

    //if (yt6.p && yt6.p.tagName == 'EMBED' && (yt6.browser_tab == 'hidden' || yt6.p.getAttribute('src') == '') ) yt6.p.setAttribute('src', yt6.flash.swfbin4)

    if (yt6.flash.forced == 2) {
      if (yt6.p) { yt6.p.style.display = 'none'; yt6.p.style.display = 'block' }
      //yt6.flash.forced = true
      if ((yt6.layout == 12 && yt6.html5_fail && yt6.xhr.async == true) || yt6.flash.call == 'b1') { yt6.flash.forced = 1; relocate_mep() } // = 1 after July 2020
    } else {

	if ((!(yt6.layout == 12 && yt6.blocked) && !yt6.html5_fail) || (yt6.layout == 12 && yt6.xhr.async == true)) {
	  var fmp = gid('movie_player1') || gid('movie_player')
	  if ( yt6.api && fmp && fmp.tagName == 'EMBED' && (yt6.flash.call == 'b1' || (yt6.blocked && yt6.new_ytplayer == null)) ) {
	    yt6.api.insertBefore(fmp, yt6.api.firstChild)
	    fmp.setAttribute('id','movie_player')
	    var p2 = gid('movie_player2'), p0 = gid('movie_player0')
	    if (p2) { if (p0) p0.parentNode.removeChild(p0); p2.setAttribute('movie_player0') }
	    player()
	  }
	  if (yt6.p.getAttribute('id') != 'movie_player1') {
	    relocate_mep(true)
	  } else { yt6.p.setAttribute('id','movie_player') }

	} else {
	    relocate_mep(true)
	  }

	yt6.flash.call = 'done'

	$waitUntil(function(){
	  var p = gid('movie_player'); if ((!p && gid('movie_player1')) || (p && p.tagName == 'EMBED')) { if (!yt6.x) { switch_players(); switch_players() } else switch_players() }
	  if (p) {
	    if (p.parentNode.getAttribute('id') != yt6.api.id) {
	      if (p.style.display == 'none') { p.style.display = 'block'; p.style.display = '' }
            }
	    if (yt6.blocked) { if (p.getAttribute('id').indexOf('movie_player_uid_') == 0) return true } else return true
	  }
	}, function(){ var bm0 = gid('bm0'); if (!yt6.blocked && !(yt6.flash.forced && yt6.flash.delay) && bm0) { unhide(bm0) } },700,7000)

      }
  } else {
      if (yt6.mobile && bm0 && bm0.parentNode.getAttribute('id') == 'movie_player_to_insert') { unhide(bm0) }
      if (gc('forced flashplayer')[0]) gc('forced flashplayer')[0].parentNode.removeChild(gc('forced flashplayer')[0])
    }

   yt6d.loaded = Math.max(4, yt6d.loaded)
   yt6.loaded = Math.max(4, yt6d.loaded); window['status'] = yt6.loaded
   fix_playlist()


}//mep_up



    var jq1 = function() {/*
      var jq2 = function() {
        var jq3 = function() {
//          var jq4 = function() {
            var jq5 = function() {

yt6d.mep_up()
            }
            loadScript( "//cdn.rawgit.com/snarly/yt6/90c833e40a485c77fb393aa91c4c9b8817067172/mep-feature-speed.js",jq5)

//          }
//          loadScript( "//cdn.rawgit.com/snarly/yt6/f684d6c92fc170be45129a7f2c12069689fcc0b0/mep-feature-playlist.js",jq4)

        }
        loadScript( "//cdn.rawgit.com/snarly/yt6/49c8440ad31e83bf6d9f0951a83020cc730399d4/mep-feature-loop.js",jq3)

      }
      loadScript( "//cdn.rawgit.com/snarly/yt6/1b69efe5d367952c307eaf7ca70ca1074ddd1c1a/mep-feature-sourcechooser.js",jq2)
*/




// loading Media Element Player Plugins
$waitUntil(function() { if (typeof mejs != 'undefined') return true },

function() {

// Source Chooser Plugin
(function($) {

	$.extend(mejs.MepDefaults, {
		sourcechooserText: 'Source Chooser'
	});

	$.extend(MediaElementPlayer.prototype, {
		buildsourcechooser: function(player, controls, layers, media) {

			var t = this;

			player.sourcechooserButton =
				$('<div class="mejs-button mejs-sourcechooser-button">'+
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.sourcechooserText + '" aria-label="' + t.options.sourcechooserText + '"></button>'+
					'<div class="mejs-sourcechooser-selector">'+
						'<ul>'+
						'</ul>'+
					'</div>'+
				'</div>')
					.appendTo(controls)

					// hover
					.hover(function() {
						$(this).find('.mejs-sourcechooser-selector').css('visibility','visible');
					}, function() {
						$(this).find('.mejs-sourcechooser-selector').css('visibility','hidden');
					})

					// handle clicks to the language radio buttons
					.delegate('input[type=radio]', 'click', function() {
						var src = this.value;

						if (media.currentSrc != src) {
							currentTime = media.currentTime;
							paused = media.paused;
//media.pause();
							media.setSrc(src);
							media.load();
							addEL(media, 'loadedmetadata', function(e){
								this.currentTime = currentTime;
							}, true);
							addEL(media, 'canplay', function(e){
								if (paused) {
									//this.play();
								}
							}, true);
						}
					});

			// add to list
			for (var i in media.children) {
				var src = media.children[i];
				if (src.nodeName === 'SOURCE' && (media.canPlayType(src.type) == 'probably' || media.canPlayType(src.type) == 'maybe')) {
					player.addSourceButton(src.src, src.title, src.type, media.src == src.src, src.name || src.getAttribute('name') );
				}
			}

		},

		addSourceButton: function(src, label, type, isCurrent, itag) {
			var t = this;
			if (label === '' || label == undefined) {
				label = src;
			};
			type = (type.indexOf('/') != -1) ? type.split('/')[1] : 'mp4';
if (!t.sourcechooserButton) {//console.log('error')
  var z = gc('me-cannotplay');
  if (z[0]) {
    z[0].parentNode.removeChild(z[0])
    yt6.age.v = 4
    ageless_verification()
    yt6d.mep_up()
    mep_run()
  }
} else {
			t.sourcechooserButton.find('ul').append(
				$('<li>'+
					'<input type="radio" name="' + t.id + '_sourcechooser" id="' + t.id + '_sourcechooser_' + itag + '" value="' + src + '" ' + (isCurrent ? 'checked="checked"' : '') + ' />'+
					'<label for="' + t.id + '_sourcechooser_' + label + type + '">' + label + ' (' + type + ')</label>'+
				'</li>')
			);

			t.adjustSourcechooserBox();
}
		},

		adjustSourcechooserBox: function() {
			var t = this;
			// adjust the size of the outer box
			t.sourcechooserButton.find('.mejs-sourcechooser-selector').height(
				t.sourcechooserButton.find('.mejs-sourcechooser-selector ul').outerHeight(true)
			);
		}
	});

})(mejs.$);

(function($) {
	// loop toggle
	$.extend(MediaElementPlayer.prototype, {
		buildloop: function(player, controls, layers, media) {
			player.options.loop1 = player.options.loop;
			var 
				t = this,
				// create the loop button
				ls = $(controls).find('.loop-start'),
				loop = 
				$('<div class="mejs-button mejs-loop-button ' + ((player.options.loop) ? 'mejs-loop-on' : 'mejs-loop-off') + '">' +
					'<button type="button" aria-controls="' + t.id + '" title="Toggle Loop" aria-label="Toggle Loop"></button>' +
				'</div>')
				// append it to the toolbar
				.appendTo(controls)
				// add a click toggle event
				.click(function() {
					player.options.loop1 = !player.options.loop1
					if (player.options.loop1) {
						yt6.loop.start = 0; yt6.loop.end = yt6.loaded_media_duration
						loop.removeClass('mejs-loop-off').addClass('mejs-loop-on')
						$(controls).find('.mejs-loop-start').css('visibility','visible')
						$(controls).find('.mejs-loop-end').css('visibility','visible')
					} else {
						loop.removeClass('mejs-loop-on').addClass('mejs-loop-off')
						$(controls).find('.mejs-loop-start').css('visibility','hidden')
						$(controls).find('.mejs-loop-end').css('visibility','hidden')
					}
				})

				// hover
				.hover(function() {
					if (player.options.loop1) {
					  $(controls).find('.mejs-loop-start').css('visibility','visible')
					  $(controls).find('.mejs-loop-end').css('visibility','visible')
					}
				}, function() {
					if (player.options.loop1 && !ls.hasFocus) {
					  $(controls).find('.mejs-loop-start').css('visibility','hidden')
					  $(controls).find('.mejs-loop-end').css('visibility','hidden')
					}
				});

				$waitUntil(function(){if (gc('mejs-time mejs-currenttime-container')[0]) return true},
				  function(){


				     var ls = $(controls).find('.loop-start')
				     var le = $(controls).find('.loop-end')

				     set_loop = function(limit) {

						  var l = $(controls).find('.loop-' + limit),
						  v = l.val()
						  if (v) {
						    if (!isNaN(v)) {
						      if (v >= 0 && ((limit == 'start' && parseFloat(yt6.loop.end) - parseFloat(v) >= 1) || (limit == 'end' && parseFloat(v) - parseFloat(yt6.loop.start) >= 1) )) {
							if (parseFloat(v) > parseFloat(yt6.loaded_media_duration)) v = parseFloat(yt6.loaded_media_duration)
							yt6.loop[limit] = v
						        var x = mejs.Utility.secondsToTimeCode(v)
						      } else var x = l.attr('value')
						      l.attr('value', x)
						      l.val(x)
						    } else if (!isNaN(v.split(':').join('').split('.').join('').split(',').join(''))) {
							if (!v.split(':')[2]) v = '0:' + v
							var u = mejs.Utility.timeCodeToSeconds(v)
							if (u >= 0 && ((limit == 'start' && parseFloat(yt6.loop.end) - parseFloat(u) >= 1) || (limit == 'end' && parseFloat(u) - parseFloat(yt6.loop.start) >= 1 )) ) {
							  if (parseFloat(u) > parseFloat(yt6.loaded_media_duration)) u = parseFloat(yt6.loaded_media_duration)
							  yt6.loop[limit] = u;
							  var x = mejs.Utility.secondsToTimeCode(u)
							} else var x = l.attr('value')
							l.attr('value', x)
							l.val(x)
						      } else {
							  l.val(l.attr('value'))
							}
						  }
				    }



				    var loopStart =
				    $('<div class="mejs-loop-start" style="position: absolute; bottom: 30px; visibility: hidden">\
					<input class="loop-start" value="00:00" style="display: inline-block; height: 44%; padding: 3px 0px 3px 0px; text-align: center; font-size: 11px; width: ' + (gc('mejs-currenttime')[0].offsetWidth || 40) +'px; background-color: white" onkeydown="event.stopPropagation();" onkeyup="if (event.keyCode == 13) set_loop(\'start\');" aria-label="Set Loop-Start" title="Set Loop-Start">\
					</input></div>')
					.appendTo(controls.find('.mejs-currenttime-container')),

				    ls = $(controls).find('.loop-start')
					.focus(function() {
						if (player.options.loop1) loopStart.css('visibility','visible');
						if (!ls.hasFocus) {
						  ls.hasFocus = true
						  var v = Math.round(yt6.player1.media.currentTime)
						  if (yt6.loop.end - v >= 1) {
						    yt6.loop.start = v
						    v = mejs.Utility.secondsToTimeCode(v)
						    ls.val(v); ls.attr('value', v);
						  } //else { ls.val(ls.attr('value')) }
						  set_loop('start')
						}
					})
					.blur(function() {
						if (ls.hasFocus) {
						  ls.hasFocus = false
						  var v = ls.val()
						  set_loop('start')
						}
					})
					.hover(function() {
						if (player.options.loop1) loopStart.css('visibility','visible');
					}, function() {
						if (player.options.loop1 && !ls.hasFocus && !loopStart.ctHover) loopStart.css('visibility','hidden');
					});

					controls.find('.mejs-currenttime-container')
					.hover(function() {
						loopStart.ctHover = true
						if (player.options.loop1) {
						  loopStart.css('visibility','visible')
						  $(controls).find('.mejs-loop-end').css('visibility','visible')
						}
					}, function() {
						loopStart.ctHover = false
						if (player.options.loop1 && !ls.hasFocus) {
						  loopStart.css('visibility','hidden')
						  $(controls).find('.mejs-loop-end').css('visibility','hidden')
						}
					});



				    var loopEnd =
				    $('<div class="mejs-loop-end" style="position: absolute; bottom: 30px; visibility: hidden">\
					<input class="loop-end" value="' + controls.find('.mejs-duration').html() +'"style="display: inline-block; height: 44%; padding: 3px 0px 3px 0px; text-align: center; font-size: 11px; width: ' + (gc('mejs-duration')[0].offsetWidth || 40) +'px; background-color: white" onkeydown="event.stopPropagation();" onkeyup="if (event.keyCode == 13) set_loop(\'end\');" aria-label="Set Loop-End" title="Set Loop-End">\
					</input></div>')
					.appendTo(controls.find('.mejs-duration-container')),

				    le = $(controls).find('.loop-end')
					.focus(function() {
						if (player.options.loop1) loopEnd.css('visibility','visible');
						if (!le.hasFocus) {
						  le.hasFocus = true
						  var v = Math.round(yt6.player1.media.currentTime)
						  if (v - yt6.loop.start >= 1) {
						    yt6.loop.end = v
						    v = mejs.Utility.secondsToTimeCode(v)
						    le.val(v); le.attr('value', v);
						  } //else { le.val(le.attr('value')) }
						  set_loop('end')
						}
					})
					.blur(function() {
						if (le.hasFocus) {
						  le.hasFocus = false
						  var v = le.val()
						  set_loop('end')
						}
					})
					.hover(function() {
						if (player.options.loop1) {
						  loopEnd.css('visibility','visible')
						  loopStart.css('visibility','visible')
						}
					}, function() {
						if (player.options.loop1 && !le.hasFocus && !loopEnd.ctHover) {
						  loopEnd.css('visibility','hidden')
						  loopStart.css('visibility','hidden')
						}
					});

					controls.find('.mejs-duration-container')
					.hover(function() {
						loopEnd.ctHover = true
						if (player.options.loop1) {
						  loopEnd.css('visibility','visible')
						  loopStart.css('visibility','visible')
						}
					}, function() {
						loopEnd.ctHover = false
						if (player.options.loop1 && !le.hasFocus) {
						  loopEnd.css('visibility','hidden')
						  loopStart.css('visibility','hidden')
						}
					});



				  })//,500,15000


		}
	});
	
})(mejs.$);

// Speed Changer Plugin
(function($) {

    $.extend(mejs.MepDefaults, {

	speedText: 'Playback Speed',

        fasterText: 'Speed Up',

        slowerText: 'Slow Down',

	speeds: ['16x', '8x', '4x', '3x', '2x', '1.5x', 'NTSC to PAL', 'Normal', 'PAL to NTSC', '0.5x', '0.25x'],

	defaultSpeed: 'Normal',
		
	speedChar: ''

    });

	MediaElementPlayer.prototype.buildspeed = function(player, controls, layers, media) {

		if (!player.isVideo)
			return;

		// add speed controls
            var t = this;

	  if (t.media.pluginType == 'native') {

	    var
		speedButton = null,
		speedSelector = null,
		playbackSpeed = null,

		html = '<div class="mejs-button mejs-speed-button" style="width: 34px"><div id="displaySpeed" style="width: 41px; padding: 2px 1px 1px 1px; color: white;"><span style="font-size: 10px">Speed</span> 100%</div>' + 
								'<button type="button" aria-label="' + t.options.speedText + '" title="' + t.options.speedText + '">' + t.options.defaultSpeed + t.options.speedChar + '</button>' + 
								'<div class="mejs-speed-selector" style="width: 110px; left: -30px;">' + 
								'<ul style="display: inline-block">';
				
		if ($.inArray(t.options.defaultSpeed, t.options.speeds) === -1) {
			t.options.speeds.push(t.options.defaultSpeed);
		}

		t.options.speeds.sort(function(a, b) {
			return parseFloat(b) - parseFloat(a);
		});

		for (var i = 0, il = t.options.speeds.length; i<il; i++) {
			html += '<li>' + 
						'<input type="radio" name="speed" ' + 
									'value="' + t.options.speeds[i] + '" ' + 
									'id="' + t.options.speeds[i] + '" ' +
									(t.options.speeds[i] == t.options.defaultSpeed ? ' checked' : '') + 
									' />' +
						'<label for="' + t.options.speeds[i] + '" ' + 
									(t.options.speeds[i] == t.options.defaultSpeed ? ' class="mejs-speed-selected"' : '') +
									'>' + t.options.speeds[i] + t.options.speedChar + '</label>' + 
					'</li>';
		}
		html += '</ul>' +
			'<div class="mejs-speed-custom" style="display: inline-block; position: absolute; bottom: 0px; width: 26px; height: 100%;"></div>' +
			'</div></div>';

		speedButton = $(html).appendTo(controls)
					// hover
					.hover(function() {
						$(this).find('.mejs-speed-selector').css('visibility','visible');
					}, function() {
						$(this).find('.mejs-speed-selector').css('visibility','hidden');
					})
		speedSelector = speedButton.find('.mejs-speed-selector');
		speedCustom   = speedButton.find('.mejs-speed-custom');
		playbackspeed = t.options.defaultSpeed;

		speedSelector
			.on('click', 'input[type="radio"]', function(e) {
				var newSpeed = $(this).attr('value');
				if (newSpeed == 'NTSC to PAL') newSpeed = parseFloat(parseFloat(25 - parseFloat(24000/1001)) / parseFloat(24000/1001) + 1).toFixed(11)
				if (newSpeed == 'PAL to NTSC') newSpeed = parseFloat(parseFloat(parseFloat(24000/1001) - 25) / 25 + 1).toFixed(11) 
				if (newSpeed == 'Normal') newSpeed = 1
				playbackspeed = newSpeed;

				media.playbackRate = parseFloat(newSpeed); yt6.speed = media.playbackRate;

				if ((typeof player1 != 'undefined') && (typeof player1.src == 'string') && (player1.src != null) && (parseInt(itag(player1.src)) > 102) && ((player1.src.indexOf('mime=audio') == -1) && (player1.src.indexOf('mime/audio') == -1)) ) { yt6.player1.setCurrentTime( player1.currentTime ) }

				gid('displaySpeed').innerHTML = '<span style="font-size: 10px">Speed</span> ' + Math.round(media.playbackRate * 100) + '%';
				//speedButton.find('button').html('<span style="font-size: 10px">Speed</span> ' + Math.round(media.playbackRate * 100) + '%');//newSpeed + t.options.speedChar);
				speedButton.find('.mejs-speed-selected').removeClass('mejs-speed-selected');
				speedButton.find('input[type="radio"]:checked').next().addClass('mejs-speed-selected');

				yt6.controls_pushed = false
				yt6.ytp.speed()
			});


		
		speedSelector
			.height(
				speedButton.find('.mejs-speed-selector ul').outerHeight(true) + 
				speedButton.find('.mejs-speed-translations').outerHeight(true))


	    var btnheight = Math.floor((speedSelector.height() ) / 2) || 100

            var faster =
                    $('<div class="mejs-button mejs-faster-button hidden" align="center" valign="center" style="color: white; height: ' + btnheight + 'px;">' +//padding:0px 0px 0px 10px; 
			//'<button type="button" style="background-position: -96px -6px; margin: 12px 5px;"</button>' +
                        '<button type="button" style="background: none; border: 1px solid white; height: ' + btnheight + 'px" aria-controls="' + t.id + '" title="' + t.options.fasterText + '" aria-label="' + t.options.fasterText + '"></button>+' +
                    '</div>')
                    .appendTo(speedCustom)

			function Faster(e) {
			  $waitUntil(function() {
	  		   if (yt6.controls_pushed) {

                            try { yt6.player2.media.playbackRate = media.playbackRate = ((media.playbackRate + 0.01) < 16) ? (media.playbackRate + 0.01).toFixed(2) : 16 } catch(f) { yt6.player2.media.playbackRate = media.playbackRate = 0.07 }
			    yt6.speed = media.playbackRate;

			    yt6.ytp.speed(e)

			   } else return true, function(){ return false; }, 500
	  		  })

			}
			addEL(gclass('mejs-button mejs-faster-button')[0], 'mouseup',function(e){ yt6.controls_pushed = false }, false)
			addEL(gclass('mejs-button mejs-faster-button')[0], 'mousedown',function(e){ yt6.controls_pushed = true
			  Faster(e)
                        });


            var slower =
                    $('<div class="mejs-button mejs-slower-button hidden" align="center" valign="center" style="color: white; height: ' + btnheight + 'px;">' +
			//'<button type="button" style="background-position: -96px 6px; margin: 4px 5px"</button>' +
                        '<button type="button" style="background: none; border: 1px solid white; height: ' + btnheight + 'px;" aria-controls="' + t.id + '" title="' + t.options.slowerText + '" aria-label="' + t.options.slowerText + '"></button>-' +
                        '</div>')
                        .appendTo(speedCustom)

			function Slower(e) {
			  $waitUntil(function() {
	  		   if (yt6.controls_pushed) {

                            try { yt6.player2.media.playbackRate = media.playbackRate = (media.playbackRate - 0.01).toFixed(2) } catch(f){ yt6.player2.media.playbackRate = media.playbackRate = 0 }
			    yt6.speed = media.playbackRate

			    yt6.ytp.speed(e)

			   } else return true, function(){ return false; }, 500
	  		  })

			}
			addEL(gclass('mejs-button mejs-slower-button')[0], 'mouseup',function(e){ yt6.controls_pushed = false }, false)
			addEL(gclass('mejs-button mejs-slower-button')[0], 'mousedown',function(e){ yt6.controls_pushed = true
			  Slower(e)
                        });

	    function wheel(event) {
		var delta = 0;
		event.preventDefault();
		if (!event) event = window.event;
		// normalize the delta
		if (event.wheelDelta) { // IE and Opera
		  delta = event.wheelDelta / 60;
		} else if (event.detail) { // W3C
		    delta = -event.detail / 2;
		  }
		yt6.controls_pushed = true
		if (delta < 0) { Slower(event) } else Faster(event);
		yt6.controls_pushed = false
	    }

	    addEL(gclass('mejs-speed-custom')[0], 'DOMMouseScroll', wheel, false);

	    addEL(gclass('mejs-button mejs-slower-button')[0], 'touchstart', function(event) {
		yt6.controls_pushed = true;
		event.preventDefault();
		var touch = event.touches[0];
		element = document.elementFromPoint(touch.pageX,touch.pageY);
		Slower(event);
	    }, false);

	    addEL(gclass('mejs-button mejs-faster-button')[0], 'touchstart', function(event) {
		yt6.controls_pushed = true;
		event.preventDefault();
		var touch = event.touches[0];
		element = document.elementFromPoint(touch.pageX,touch.pageY);
		Faster(event);
	    }, false);

	    addEL(gclass('mejs-speed-custom')[0], 'touchmove', function(event) {
		event.preventDefault();
		event.preventDefault();
		var touch = event.touches[0];
		if (element !== document.elementFromPoint(touch.pageX,touch.pageY)) {
		  yt6.controls_pushed = false;
		}
	    }, false);

	    addEL(gclass('mejs-speed-custom')[0], 'touchend', function(event) {
		var touch = event.touches[0];
		event.preventDefault();
		yt6.controls_pushed = false;
	    }, false);

            addEL(media, 'play',function() {
                if (media.pluginType === "native"){
                    faster.removeClass('hidden');
                    slower.removeClass('hidden');
                    speedButton.removeClass('hidden');
                }
            }, false);

            addEL(media, 'pause',function() {
                if(!faster.hasClass("hidden")){
                    faster.addClass('hidden');
                }
                if(!slower.hasClass("hidden")){
                    slower.addClass('hidden');
                }
                if(!speedButton.hasClass("hidden")){
                    speedButton.addClass('hidden');
                }
            }, false);

	  }//pluginType

	}


})(mejs.$);

(function($) {

	$.extend(MediaElementPlayer.prototype, {
		buildplaylist : function(player, controls, layers, media) {
			if (!player.isVideo)
				return;

			var //t = this

			playlistButton,
			html = '<div class="mejs-button mejs-playlist-button" style="' + ((!yt6.ytp.embed) ? 'display: none' : '') +'"><button type="button" style="background-position: -96px 0px;"></button><div class="mejs-playlist-container"></div></div>';

			playlistButton = player.playlistButton = $(html).appendTo(controls)

				.on('click', function(e) {
					if ((player.isFullScreen && !yt6.ytm) || yt6.ytp.embed) {
						var t =	$(document).find('.ytp-playlist-menu').first()
						if (player.container != t.parent()) {
							t.appendTo(player.container)
							.css('display','block')
							.css('bottom', 43);
						} else t.css('display','none')
						yt6.playlist_box(player.container[0])
					}
				})
			player.setControlsSize()
		}
	});
	
})(mejs.$);


}) // end of list of plugins


	// this will create the player's DOM structure
	if (yt6.mep != 'up') {

	  yt6d.mep_up()

	}

    };


    loadScript( yt6.cdn + "c29ed8317c3abc65318780d6bb9893ab3c81cdcc/mep-ceeb1a7.js", jq1) 




		   

	function playNext(){

		var p = player(), p = yt6.p
		var bm0 = gid('bm0')

		if (yt6.size == undefined) yt6.size = 'default'
		if (!yt6.fullscreen) aspect(yt6.size, false) //slug3

 		if (wide_view() || gid('aspect')) {

		  if (yt6.size && yt6.size != 'default') {
		    yt6.tbg.style.backgroundColor = 'rgb(16, 16, 16)'
		  } else yt6.tbg.style.backgroundColor = 'black'

		} else {
		    yt6.tbg.style.backgroundColor = 'transparent'
		  }


		$waitUntil(
		  function(){ var bm0 = gid('bm0'), z = gid('movie_player_to_insert'), c = conf('args')
		    // yt mechanism destroys the external player's container here when the following conditions are true
		    // unless its DOM node is moved out of the way, so
		    if (yt6.layout == 12 && yt6.flash.forced && bm0 && bm0.parentNode != z) { z.appendChild(bm0) }

			if (yt6.ytp.strState != 4) if (player() && yt6.browser_tab == 'visible' && !(yt6.ytm && yt6.p.tagName == 'EMBED')) {
			  if (typeof yt6.p.getPlayerState == 'function') {
			    yt6.ytp.strState = yt6.p.getPlayerState(); yt6.ytp.strCt = yt6.p.getCurrentTime()
			  } else {
			      yt6.ytp.strState = -1; yt6.ytp.strCt = 0
			    }
			}


		    if (window.ytplayer && yt6.mep == 'running' &&
		       ( (yt6.xhr.async &&
			 (yt6.xhr.completed ||
			  ( c[0] &&
			    (c[0].loaded_from != 'source' && (c[1] && (c[1].url_encoded_fmt_stream_map || c[1].adaptive_fmts)) ||
			     (yt6.status == 'unplayable' && yt6.reason) ||
			     (yt6.xhr.completed == '' && yt6.status != 'ok' && !yt6.reason)
			    ) && !yt6.ytm && video_title()[1]
			  )
			 )
			 ) || !yt6.xhr.async
			   || yt6.pre_ad
		       )
		       ) return autoplay(false) },
		  function(){
		      autoplay(true)
	  	      if (!yt6.x) { var p = player()
			if (p && !(yt6.ytm && p.tagName == 'EMBED')) {
			  if (p.tagName == 'EMBED')
			  $waitUntil(function() {
			      if (yt6.p && typeof yt6.p.getPlayerState == 'function' && yt6.p.getPlayerState() != 1) {
				try { yt6.p.playVideo() } catch(e){}; return true
			      }
			    },
			    function() {
			      if (yt6.p && typeof yt6.p.getPlayerState == 'function' && yt6.p.getPlayerState() != 1) {
				try { yt6.p.playVideo() } catch(e){}
			      }
			    }, 400, 4000)
			}
		      } else if (yt6.player1 && yt6.player1.media && yt6.player1.media.paused) {
			  try { var spacebar = new KeyboardEvent('keydown',{'keyCode':32,'which':32}) } catch(e){}
			  var z = gid(mep_x('mep_'))
			  if (z && spacebar) z.dispatchEvent(spacebar); //if (yt6.browser_tab == 'hidden' && !(yt6.layout == 16 && !yt6.mobile && !yt6.ytm && yt6.speed > 2)) yt6.player1.play()
			}
		  },500,3000)

	}//playNext



	var mep_reload = yt6d.mep_reload = function(){

	    var c = conf('args'), p = player(), p = yt6.p, x = (window.yt6_swapped || yt6.swapped)

	    if (!yt6.age.blocked && !yt6.blocked_m) yt6.loaded = 1
	    yt6.change = true
	    yt6d.source = false
	    //yt6d.log = []
	    //
	    yt6.age.v = null
	    yt6.errcount = 0
	    yt6.manifest = {}
	    yt6.encrypted = false
	    yt6.real_media_duration = null
	    yt6.ads_eid = ''; yt6.ads_eid1 = ''; yt6.ads_eid2 = ''; yt6.real_eid = ''


	    if (yt6.layout == 12 && typeof yt6.x_ == 'number') { try { yt6.player1.setVolume(yt6.x_) } catch(e){}; yt6.x_ = null }

	    if (yt6.layout == 16 && !yt6.ytm && !yt6.ytg) {

	        if (x) try { delete x; if (!yt6.x) switch_players() } catch(e){}

		var z = gid(yt_alert_message)
		if (z && z.parentNode == yt6.wna) { // destroy the control panel before the new yt code does it inside the alerts div at an inconvenient time
		  var controls = gid('controls-sp')
		  try { removeEL(controls, 'mouseup',function(e){ yt6.controls_pushed = false }, false) } catch(e){}
		  try { removeEL(controls, 'mousedown', yt6.clicky ,false) } catch(e){}
		  z.parentNode.removeChild(z)
		}

		try { player().clearVideo() } catch(e){}
		try { yt6.p.updateVideoData() } catch(e){}
		if (yt6.pls && yt6.pl_index) {
		  yt6d.previous.pl_index = clone(yt6.pl_index)
		} else yt6d.previous.pl_index = 0

	    }



		yt6.Seeked2 = false
		yt6.navigation = true
		yt6.ytp.V = ''; yt6.ytp.A = ''; yt6.ytp.dur = ''
		if (typeof yt6.fmt_bak == 'number') {
		  //if (yt6.userprefV.indexOf(yt6.fmt_bak) > -1) { yt6.userprefV.splice(yt6.userprefV.indexOf(yt6.fmt_bak), 1) } else delete yt6.userprefV[20]
		  //yt6.userprefV.unshift(yt6.fmt_bak); yt6.fmt_bak = null
		}
		if (!yt6.age.sc && !yt6.age.dl) yt6.ttsurl = null
		yt6d.srt.rpt = false
		//yt6.alt_links_used = false
		yt6.ads_noskip = 0
		yt6.age.count = (yt6.age.count > 1) ? 0 : yt6.age.count
		yt6.pl_fix = 0
		yt6.aspect_ratio = ''; yt6.ar = ''
		if (yt6.embed) { yt6.embed.uid = null }

		yt6.encrypted = null
		yt6.yt_ct = 0


		if (yt6.yt_l == 0 && yt6.yt_t == 0) {
		  yt6.yt_l_0 = ''
		  yt6.yt_t_0 = ''
		}
		if (yt6.l == 0 && yt6.t == 0) {
		  yt6.l_ = ''
		  yt6.t_ = ''
		}

		yt6.mep = 'reload'
		//yt6.newin = ''
		delete yt6.loaded_media_duration

		yt6d.previous.lsig = clone(yt6d.current.lsig)
		delete yt6d.current.lsig

		if (Array.isArray(yt6d.current.eid)) yt6d.previous.eid.push.apply(yt6d.previous.eid, yt6d.current.eid); //yt6d.current.eid = []
		if (yt6d.previous.eid.length > 20) yt6d.previous.eid.splice(1,15) //the initially extracted media links at index 0 of this array will be remembered by yt (until a full page refresh), so leave that first record untouched to later skip links with that ei value for sure
		if (!yt6.ytp.embed) yt6d.previous.linx = clone(yt6.linx)

		// old data would be included in ytPubsubPubsubInstance which we'll sbe scanning through for newer links soon, so wipe them
		var a = gid('bm3'); if (a && video_title()[1]) a.innerHTML = ''
		for(i=0;i<338;i++) if (qual[i]) { qual[i]['s'] = ''; qual[i]['w'] = ''; qual[i]['h'] = '' }
		yt6.fn = ''
		yt6.linx = ''
		yt6.html = ''
		yt6.href = ''
		yt6.prev_media.push(clone(yt6.audio)); if (yt6.prev_media && yt6.prev_media.length > 5) yt6.prev_media.shift()
		yt6.audio = ''
		yt6.args = ''
		yt6.title2 = ''		



	      var bm0 = gid('bm0'), c = conf('args')

	      if (yt6.layout == 16 || yt6.body2) {
		c[1].url_encoded_fmt_stream_map = ''
		c[1].adaptive_fmts = ''

		try { window.ytplayer.config.args.raw_player_response.streamingData = '' } catch(e){}
		window.ytplayer.config.args.adaptive_fmts = ''
		window.ytplayer.config.args.url_encoded_fmt_stream_map = ''
		window.ytplayer.config.args.videostats_playback_base_url = undefined
		window.ytplayer.config.args.dashmpd = undefined
		//window.ytplayer.config.args.title = undefined
		window.ytplayer.config.args.video_id = undefined
		window.ytplayer.config.args.status = undefined
		window.ytplayer.config.args.reason = null
		window.ytplayer.config.url = undefined
		var tn = ['iurlsd','iurlmq','iurlhq','iurlhq720','iurlmaxres','thumbnail_url','iurl','author','timestamp','root_ve_type','avg_rating','csn','length_seconds','ismb','ldpj','idpj','ucid','fmt_list','root_ve_type','itct','account_playback_token']
		for(i=0;i<tn.length;i++) if (ytplayer.config.args[tn[i]]) ytplayer.config.args[tn[i]] = undefined
		ytplayer.config.args.player_response = undefined
		ytplayer.config.args.ttsurl = ''
		delete ytplayer.config.args.ttsurl
	      }




		if (yt6.layout == 16) if (bm0 && bm0.parentNode.parentNode.tagName.indexOf('MINIPLAYER-BAR') > -1) try {
		  pcont().appendChild(bm0)
		  yt6.man.insertBefore(gid('alerts'), yt6.inf.previousSibling.previousSibling)
		} catch(e){}


		// Without this, ytm would break itself
		if (yt6.ytm && yt6.flash.forced && yt6.p && yt6.p.tagName == 'EMBED') { yt6.change = c[1].video_id; ajax1(true) }//yt6.flash.forced = false;


		if (yt6.flash.flag != 0) {
		if (yt6.flash.forced) {
		//if (!yt6.xhr.async || yt6.xhr.async) {


		  yt6.flash.call = ''
		  yt6.flash.timer = 0

		  if (yt6.flash.flag == 1 && player() && yt6.p.getAttribute('class') == 'forced flashplayer' && (yt6.vid == 'videoId{11}' || yt6.layout == 12)) {
		    /*if (yt6.layout == 16) {
		      ageless_verification() // needed before flash activation to see if video is age-restricted
		      try { window.ytplayer.config.args.url_encoded_fmt_stream_map = ''} catch(e){}
		    }

		    $waitUntil(function(){ var c = conf('args'), p = player()
			//console.log(yt6.flash.timer);console.log(typeof p.getPlayerState)
			if (c[1] && c[1].url_encoded_fmt_stream_map && p && p.tagName == 'EMBED' &&
			    ((typeof p.getPlayerState == 'function' && p.getPlayerState() == -1) || (typeof p.getPlayerState != 'function' && yt6.flash.timer > 1)) //yt6.tmp == true && 
			   ) { return true } else yt6.flash.timer++
		      },
		      function() {//console.log('ok1')
			$waitUntil(function(){ //if (typeof yt6.p.getPlayerState == 'function') console.log(yt6.p.getPlayerState())
			    if (yt6.flash.forced && yt6.flash.call != 'done' && (typeof yt6.p.getPlayerState == 'function' && yt6.p.getPlayerState() == -1) || (typeof yt6.p.getPlayerState != 'function' && yt6.flash.timer > 1)) { yt6.flash.call = 'flash reload A'; yt6.tmp = forceFlashplayerObject(); if (yt6.tmp) return true }
			  },
			  function(){//console.log('ok2')
			    var z = yt6.tmp.getAttribute('id')
			    if (yt6.tmp && z && (z == 'movie_player1' || z == 'movie_player')) {//console.log('ok3')
			      yt6.api.insertBefore(yt6.tmp, yt6.api.firstChild)
			      yt6.tmp.setAttribute('id','movie_player')
			      var p = document.getElementById('movie_player')
			      var p = player(), p = yt6.p; p.style.display = 'none'
			      yt6.vid = video_id()[0]; //console.log(p.getAttribute('flashvars'))
			    }
			  },600,6000)
		      },600,6000)*/
		  }
		  else if (bm0)
		  $waitUntil(function(){if (((player() && yt6.p.tagName != 'EMBED')) || gc('ytp-error')[0] ) {
		        return true
		      } else if (yt6.p.tagName == 'EMBED' && yt6.p.getAttribute('flashvars') == yt6.flash.vars) {
			  if (yt6.p.src != yt6.flash.swfbin4) yt6.p.src = yt6.flash.swfbin4
			  if (yt6.p.style.display != 'block') yt6.p.style.display = 'block'
			}
		    },
		    function(){
		      var bm0 = gid('bm0')
		      if (player() && typeof yt6.p.pauseVideo == 'function') {
			if (yt6.p.className && yt6.p.className.indexOf('YouTube_TM' > -1) || !yt6.p.getAttribute('time')) try { yt6.p.pauseVideo() } catch(e){}
			$waitUntil(function(){

			    var p1 = gid('movie_player1')
			if (yt6.flash.forced && (yt6.flash.call != 'done' || yt6.blocked) && !(p1 && p1.parentNode)) {
			    var p = player(),
				z = gid('movie_player_to_insert'),
				y = gid('movie_player_to_dispose');

			  if (p && p.nodeName == 'DIV') y.appendChild(p)
	  		  for(var i in y.childNodes) { var x = y.childNodes[i]
			    if (x) if (typeof x.getVideoUrl == 'function' && x.nextSibling && typeof x.nextSibling.getVideoUrl == 'function' && x.nextSibling.getVideoUrl().indexOf(video_id()[0]) > -1) {
			      try { yt6.ytp.trash = x; x.pauseVideo(); x.destroy() } catch(e){}
			    } else if (x.tagName == 'DIV' && !(x.firstChild && x.firstChild.nextSibling)) {
				y.removeChild(x)
			      }
			  }

			  if (p && p.tagName == 'DIV' && !(p1) ) { // || (p1 && p1.getAttribute('flashvars') != yt6.flash.vars) // != 'EMBED' && p.tagName != 'OBJECT' && p.tagName != 'IFRAME'

			    if (!p.getAttribute('time') && p.tagName == 'DIV' && typeof p.getVideoUrl == 'function' && p.getVideoUrl().indexOf(yt6.vid) > -1 ) {
			      p.setAttribute('class','YouTube_TM ' + p.className)
			      //p.setAttribute('id','movie_player0')
			      try { p.pauseVideo() } catch(e){}
			      if (!p.hasAttribute('name') || (p.hasAttribute('name') && p.getAttribute('name') != 'YouTube_TM' && p.getAttribute('name') != 'original')) {
				p.setAttribute('name','original')
			      } else if (p.getAttribute('name') != 'original') {
				  p.setAttribute('name','YouTube_TM')
				}
			    }

				yt6.flash.call = 'flash reload B'; var fmp = forceFlashplayerObject();
				if (fmp) fmp.setAttribute('id','movie_player1')

			    if (player() ) yt6.p.setAttribute('id','movie_player0')
			    if (yt6.p) y.appendChild(yt6.p)

			    if (yt6.ytp.trash) try { yt6.ytp.trash.pauseVideo(); yt6.ytp.trash.setAttribute('name','movie_player_trash') } catch(e){}

			  } else {

			      var p0 = gid('movie_player0'),
				  p1 = gid('movie_player1'),
				  p2 = gid('movie_player2');
			      if (!player() && !p0 && (yt6.p.id.indexOf('player_uid_')) > -1) {
				yt6.new_ytplayer = gid(yt6.p.id)
				if (yt6.new_ytplayer) {
				  var x = (p0 || yt6.layout != 12) ? '2' : '0';
				  yt6.new_ytplayer.setAttribute('id','movie_player' + x);
				  yt6.new_ytplayer = gid('movie_player' + x)
				}
			        var p0 = gid('movie_player0'),
				    p1 = gid('movie_player1'),
				    p2 = gid('movie_player2');
			      }
			      if (yt6.layout == 12 && p0 && ((!player() && (yt6.p.id == 'movie_player0' || p2))
				 )) {

				//if (p1 && yt6.blocked) {
				  //p1.setAttribute('flashvars','')
				  //p1.setAttribute('src','')
				//}
				//if (yt6.blocked) p0.setAttribute('id','movie_player')
				if (p2) {
				  p2.setAttribute('id','movie_player')
				} else { // rename it back temporarily
				    //if (p0) p0.setAttribute('id','movie_player')
				  }
				return true
			      } else {
				  if (yt6.layout == 16) try { gid(yt6.p.id).setAttribute('id','movie_player') } catch(e) {}
				  //if (yt6.layout == 12 && !player() && p0) { p0.setAttribute('name','movie_player'); p0.setAttribute('id','movie_player') }
				}

			      if ( yt6.api.firstChild && (p1 || yt6.browser_tab == 'hidden') ) {
				//gid('movie_player_to_dispose').appendChild(gid('movie_player0'));

				return true

			      } else {//for age-restricted videos, the (unusuable) flash embed may be automatically replaced by a html5 player with a 'player_uid_xxx' id
//if (p && p.tagName == 'EMBED') if (typeof p.getPlayerState == 'function') { return true } else { console.log('?::'); p.setAttribute('src',''); p.style.display = 'none'; p.setAttribute('src', yt6.flash.swfbin4); }
				}
			    }
			} else return true //only if the chackbox is still on
			},
			function() {
			  var bm0 = gid('bm0'),	p = player(), p1 = gid('movie_player1') || gc('forced flashplayer')[0], p0 = gid('movie_player0')

			  if (yt6.flash.forced && yt6.flash.call == 'flash reload B' && (p1 || yt6.browser_tab == 'hidden') ) {

			    if ((p && p.tagName == 'EMBED') || (p1 && p1.tagName == 'EMBED')) {
				//gid('movie_player_to_insert').appendChild(player());
				//if (p.getAttribute('src') == '') p.setAttribute('src','https://s.ytimg.com/yts/swfbin/player-' + yt6.flash.swfbin4 + '/watch_as3.swf')
			    } else {
				var p1 = gid('movie_player1')
				if (p1) { yt6.api.insertBefore(p1, yt6.api.firstChild) }
			      }

			    $waitUntil(function(){

				    var p1 = gid('movie_player1') || gc('forced flashplayer')[0],
					p0 = gid('movie_player0')
					p = player() || p1,
					//p = yt6.p || p1,
					bm0 = gid('bm0'),
					y = gid('movie_player_to_dispose')

				    if (yt6.flash.timer == 0 && yt6.browser_tab == 'hidden' && p1 && p1.getAttribute('id') == 'movie_player' && p1 == p) {
				      p1.setAttribute('id','movie_player1'); gid('movie_player_to_insert').appendChild(p1)
				      if (p0) {
					if (p0.nextSibling && p0.nextSibling.getAttribute('id') && p0.nextSibling.getAttribute('id').indexOf('movie_player') == 0) {
					  p0 = p0.nextSibling
					  yt6.api.insertBefore(p0, yt6.api.firstChild)
					  p0.setAttribute('id','movie_player')
					}
				      }
				      p = player(), p1 = gid('movie_player1'), p0 = gid('movie_player0')
				    } 

				    if (p1) {
				      //p1.style.display = (yt6.flash.flag == 1) ? 'none' : ''
				      //if (yt6.browser_tab == 'hidden') gid('movie_player_to_insert').appendChild(p1)
				    }


				    if ((p && p.parentNode) || yt6.flash.timer >= 2) {
				      if (!(p && p.tagName == 'DIV' && !(p.firstChild && p.firstChild.nextSibling))) {

				       if (p && (p.getAttribute('name') == 'YouTube_TM' || !p.getAttribute('time')) && typeof p.pauseVideo == 'function') p.pauseVideo()

					if (p && p.tagName == 'DIV') {
					  p.setAttribute('name','original')
					  p.setAttribute('id','movie_player0')
					  p.setAttribute('id','movie_player0') // yt injects a new html5 player on navigation to replace forced flash, needs to be renamed here
					}
					yt6.original = getElementsByAttribute(yt6,'div','name','original')[0]

					return true

				      } else {
					  if (p && p.firstChild) {
					    if (p1) { p1.setAttribute('id','movie_player') } else if (yt6.flash.forced) forceFlashplayerObject()
					    p.parentNode.removeChild(p)
					  } else if (p0) { p0.setAttribute('id','movie_player') }
					}
				    }

				      if ((!p && p1) || (p1 && p1 == p)) {
					yt6.api.insertBefore(p1, yt6.api.firstChild)
					if (typeof p1.getPlayerState != 'function') {
					  p1.setAttribute('src', yt6.flash.swfbin4)
					}
					p1.setAttribute('id','movie_player')
					var p = player()
				      }

				      yt6.flash.timer++

				    },

				    function(){

				      var p1 = gid('movie_player1') || gc('forced flashplayer')[0],
					  bm0 = gid('bm0'),
					  p = gid('movie_player')//, p = yt6.p,

				      if (p1) yt6.api.insertBefore(p1, yt6.api.firstChild)
				      if (p && p.getAttribute('name') == 'YouTube_TM') {
					if (typeof p.pauseVideo == 'function') p.pauseVideo()
					gid('movie_player_to_dispose').appendChild(p)
				      }

				      if (p1) {
					//if (yt6.browser_tab == 'visible') { p1.setAttribute('id','movie_player') } else { p1.setAttribute('src', yt6.flash.swfbin4); p1.style.display = 'block' }
				      }
				          var dump = gid('ytp_dump'), np = dump.firstChild
					  if (np) { try { np.stopVideo(); np.destroy(); } catch(e) { if (dump.firstChild) dump.removeChild(dump.firstChild) } }



					yt6.x = clone(yt6d.x)
					if (yt6.x) {
					  if (bm0) bm0.style.visibility = 'visible'; if (p) p.style.visibility = 'hidden'; if (p1) p1.style.visibility = 'hidden'
					} else {
					    if (bm0) bm0.style.visibility = 'hidden'; if (p) p.style.visibility = 'visible'; if (p1) p1.style.visibility = 'visible'
					  }

					//if (bm0.parentNode.getAttribute('id') == 'movie_player_to_insert') {
					  $waitUntil(function(){
					    var p = gid('movie_player1') || gc('forced flashplayer')[0]
					    if ((p && p.nodeName == 'EMBED' && p.getAttribute('class') == 'forced flashplayer') || (yt6.browser_tab == 'hidden' && p1 && typeof p1.getPlayerState == 'function' && p1.getPlayerState() == 1)) return true },
					  function(){
					    var p1 = gc('forced flashplayer')[0]
					    if (p1) {
					      //p1.setAttribute('src', yt6.flash.swfbin4)
					      p1.setAttribute('id','movie_player')
					    }
					    var x = (yt6.x) ? gid('bm0') : p1
					    if (x || yt6.browser_tab == 'hidden') { unhide(x) }
					  },300,3000)

					  //if (yt6.x && bm0) { bm0.style.visibility = 'visible' }
					//}


				      if (autoplay(true) && yt6.x && bm0) { unhide(bm0) }


				    },700,7000)


			  }


			},900,9000)
		      }

		    },1000,10000) // wait for a flash obect to survive yt's incoming html5 players


	        } else if (!yt6.ytp.broken && (yt6.layout == 16 || yt6.ytg)) { // turning off flash, back to html5 player again
			back2html5(); if (window.yt6_swapped == 1) delete window.yt6_swapped;
			if (yt6.swapped == 1) {
			  delete yt6.swapped
			}
		  }

		} else if (yt6.flash.forced) yt6.flash.flag = 1



		var z = gc('yt6-proxy-error')
		  if (z && z[proxies.length-1]) {
		    for (i=z.length;i>-1;i--) {
		      if (z[i]) z[i].parentNode.removeChild(z[i])
		    }
		}

	    if (yt6.osw) {
		if (yt6.osw.getAttribute('id') == 'placeholder-player' && window.ytplayer && !window.ytplayer.config) {
		  yt6.osw.setAttribute('style','display: none')
		  return void 0;
		}
		if (yt6.osw.w) delete yt6.osw.w
	    }


	    if (yt6.player2 && yt6.player2.media && typeof yt6.player2.media.src == 'string') {
		yt6.player2.media.loaded = false
	    }
	    try {
		yt6.player1.media.loaded = false
		yt6.player1.media.isLoaded = false
		yt6.player2.media.isLoaded = false
		yt6.player1.media.timer = 0
		//if (yt6.browser_tab == 'hidden') yt6.player1.media.currentTime = yt6.player2.media.currentTime = player2.currentTime = yt6.ct = 0
		yt6.player1.media.pause()
		//if (yt6.browser_tab == 'hidden') 
		yt6.player1.media.currentTime = 0; yt6.ct = 0; player2.currentTime = 0
	    } catch(e) {
	        //yt6.player1.media.currentTime = 0;
	      };

	    if (yt6.blocked_m) delete yt6.blocked_m; if (yt6.blocked_m2) delete yt6.blocked_m2
	    var webgl = get_webgl(), c = conf('args')


	    if (c[1]) {
	      yt6.status = ytplayer.config.args.status
	      yt6.reason = ytplayer.config.args.reason
	    }


	$waitUntil(function(){
	    if ((yt6.layout == 16 && yt6.p) || (yt6.layout == 12 && (player()) ) ) { return true }
	  },

	  function(){


	    if (gid('player-api')) gid('player-api').style.overflow = (yt6.wallpaper) ? 'visible' : 'hidden';


	    if (yt6.flash.flag == 1 && yt6.p && yt6.p.tagName == 'EMBED' && yt6.p.getAttribute('class') == 'forced flashplayer')
		yt6.p.style.display = 'block';

	    var bm0 = gid('bm0')
	    var z = gc('ytp-popup ytp-contextmenu'); while(z[0]) z[0].parentNode.removeChild(z[0])


	    var built = buildObject(window.ytplayer)

	    if ((yt6.xhr.async && !!built) || (!yt6.xhr.async && video_title()[1]) || yt6.ytm) {

	      redo_dl_button(  yt6.args,  yt6.html,  yt6.href)

		  var z = ''
		  if (yt6d.ended && !yt6d.ended) {
		    var c = conf('args')
		    if (c[1] && (!c[1].title || (document.title && document.title.indexOf(c[1].title) == 0) ) ) { //super rare exception: playing on hidden tab in new layout, and two subsequent videos have the exact same title
		      yt6d.ended = false
		      if (yt6.p && typeof yt6.p.getPlayerState == 'function') {
			try { yt6.p.pauseVideo() } catch(e){}
		      } 
		      if (!yt6.x) { switch_players(); yt6.x = z = true }
		    }
		  }

		yt6d.mep_up()


		yt6.player1.media.currentTime = yt6.ct = 0

	      if (yt6.blocked || !(yt6.layout == 16 && yt6.browser_tab == 'hidden' && yt6.player2 && yt6.player2.media && yt6.player2.media.loaded_vid == yt6.vid) || z) {

		if (!gid(mep_x('mep_'))) {
	          mep_run()
		} else {
		    yt6d.mep_renew()
		  }

	      } else if (yt6.x && yt6.p && yt6.p.tagName == 'DIV' && typeof yt6.p.getPlayerState == 'function' && yt6.p.getPlayerState() == 1) yt6.p.pauseVideo()
	    }


	    if (yt6.layout == 12 && bm0 && yt6.age.check()) {


		yt6d.timers.reload = 0
		if (!yt6.mp_)
		$waitUntil(function(){
		  var p = player(), bm0 = gid('bm0'), z = gid('movie_player_to_insert'), s;
		  if (p && typeof p.getPlayerState == 'function') var s = p.getPlayerState()
		    if (p && yt6.p && p.tagName == yt6.p.tagName && ((typeof p.getPlayerState == 'undefined' && bm0 && bm0.parentNode == z && yt6d.timers.reload >= 1 ) || (s && ((s != 3 && s != -1) || ((yt6.status == 'unplayable' || yt6.x) && s == -1)) ) )) {

		      return true

		    } else if (!(yt6.flash.forced && yt6.browser_tab == 'hidden' && !(yt6.layout == 12 && yt6.blocked)) && bm0 && z != bm0.parentNode) {
			if (yt6d.timers.reload) { yt6d.timers.reload = yt6d.timers.reload + 1 } else yt6d.timers.reload = 1;
		        if (bm0.parentNode != z) {
			  z.appendChild(bm0)
			}
		      } else { }
		},
		function(){
		  if (yt6.status != 'error') { var bm0 = gid('bm0')
		    if (yt6.mobile) { unhide(bm0) }
		    yt6.api.insertBefore(player(), yt6.api.firstChild)
		  }
		}
		,400,4000)
	    }
	    if (!yt6.html5_fail) playNext()

	  },250,5000)

	}//mep_reload



if (typeof yt6.fnCheckLocation != 'number') {

  if (!yt6.body) yt6.body = document.getElementsByTagName('body')[0]
//requesting new page
yt6.body.spfrequest = function(e) {

    if (yt6) {//if (!(!video_title()[1] && yt6.vid != video_id()[0])) {

	yt6.spf = (!yt6.body2) ? true : false // false for faux old layout
	var bm0 = gid('bm0')
	//yt6.status = ''; yt6.reason = null

	//try { gid('movie_player_to_insert').appendChild(bm0) } catch(e){}

	if (player()) try { yt6.p.pauseVideo() } catch(e) {}
	if (yt6.p.tagName == 'IFRAME') { undo_iframe() }

	if (yt6.flash.forced) {
	  yt6.flash.delay = false
	  $waitUntil(function(){
	      var p = player() || yt6.api.firstChild
	      if (p && p.parentNode) {
		if (p.tagName == 'DIV' && typeof p.getPlayerState == 'function' && yt6.browser_tab == 'visible') {
		  //if (yt6.layout == 12) {
		    //try { p.dispose() } catch(e){}
		  //} else {
		      var s = yt6.p.getPlayerState()
		      if (s == 3 || s == 1) { try { yt6.p.pauseVideo() } catch(e){} } else return true
		    //}
		} //else return true
	      }
	      //if (!yt6.flash.forced) return true
	    },
	    function(){

		//console.log('paused'); console.log(player())
	    },100,3000)
	}

	if ((yt6.fullscreen || yt6.fullscreen12 === 1) && yt6.player1) return void 0

	if (bm0 && !yt6.body2) {
	  if (bm0.style.visibility == 'visible') { yt6.x = true } else yt6.x = false
	  if (bm0.parentNode.getAttribute('id') != 'movie_player_to_insert') {
	    try { yt6.p.pauseVideo() } catch(e) {}
	    relocate_mep(true)
	  }
	}

	if (yt6.flash.swfbin4) yt6.flash.swfbin4_backup = yt6.flash.swfbin4

    }

  }
addEL(window, 'spfrequest', yt6.body.spfrequest, false);


if (typeof Polymer != 'undefined') {
  if (!yt6.body.snarls_watchdog) try {
    yt6.body.snarls_watchdog = new MutationObserver(function(mutations){
      mutations.forEach(function(mutation) {
	if (yt6 && (yt6.browser_tab == 'visible' || yt6.ytm) && mutation.type == 'attributes' && (yt6.ytm || (!yt6.ytm && mutation['target'].getAttribute('video-id') == yt6.vid))  )
 	$waitUntil(function() {
	    var p = yt6.p, b, bf, c = conf('args');
	    if (p) {
	      try { bf = typeof p.getPlayerState } catch(e) { bf = null }
	      //if (bf) {  
		//if (p.tagName == 'EMBED' || p.tagName == 'OBJECT') {
		  //try { bf = typeof p.getPlayerState } catch(e) { bf = null }
		//} else bf = typeof p.getPlayerState
	      //}
	      if (bf) b = (bf == 'function') ? p.getPlayerState() : null
	      var a = (b) ? gid('bm0') : null
	      if (    ( a && (yt6.x || a.style.visibility == 'visible') && b && (b != 2 && b > -1) && p)
		   || (yt6.ytm && !yt6.navigation && (!c[1] || (c[1] && c[1].video_id != yt6.vid)) )
		 ) {
		//p.pauseVideo()
		return true
	      }
	    }
	},
	  function(){
	    $waitUntil(function() { if ((yt6.p && typeof yt6.p.pauseVideo == 'function') || (yt6.ytm && !yt6.pre_ad)) return true },
              function(){
		var bm0 = gid('bm0')
		if (bm0) if (!yt6.ytm) {
		  if (bm0.style.visibility == 'visible') { //"||" instead of "&&" --> will always pause on new page
		    if (!yt6.mobile && autoplay(false) == false) yt6.p.pauseVideo()
		  } else switch_players()
		} else if (!yt6.navigation) {
		    yt6.navigation = true; //yt6.title = ''
		    if (yt6.ytp.fullscreen || yt6.fullscreen) try {
		      window.history.pushState({}, yt6.title, location.href.split(yt6.vid)[0] + (vID(yt6.p.getVideoUrl()) ) + location.href.split(yt6.vid)[1] )
		    } catch(e){}
		  }
	      },300,3000)
	  },50,1000);
      })
    })
  } catch(e){}

    //(new window.MutationObserver(function(){Polymer.Async._atEndOfMicrotask()})).observe(Polymer.Async._twiddle,{characterData:true});
}

if (yt6.ytg) {
  if (!yt6.body.snarls_persistent) {
    yt6.body.snarls_persistent = new MutationObserver(function(mutation){
      if (mutation && yt6.ytg) {  //ytg-persistent-player repositioning
	//windowwidth range	original player() = api.width	ytg.style.left
		//  755 - 			371 -			  755 -
		//  494 - 754px		  506.667 / 456.883px		  128.667 - 130.167px / 155.85 - 718.55px / 693.667 -
		//  287 - 493px			300 - 			  797 -
	if (!yt6.ww) yt6.ww = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb
	var a = gid('player-api')
	if (a) {
	  a = a.style
	  a.top = -1 * yt6.ytg.style.top.replace('px','') + yt6.mhp.offsetHeight + 20 + 'px'
	  var sb = yt6.wsb = gid('sidebar') || document.getElementsByTagName('ytg-watch-sidebar')[0]
	  if ( ( yt6.size && yt6.size != 'default' ) || ( yt6.wsb && !yt6.wsb.getAttribute('id') && ( yt6.size == 'default' || yt6.ww > 1 * yt6.w.replace('px','') )) ) {
	    if (yt6.ww >= 1 * a.width.replace('px','')) {
	      a.left = (1 * yt6.ww - 1 * a.width.replace('px','')) / 2 - yt6.ytg.style.left.replace('px','') + 'px'
	    } else {
		a.left = -1 * yt6.ytg.style.left.replace('px','') + 'px'
	      }
	  } else {
	      a.left = '0px'
	    }

	  var pa = gid('player-area')
	  if (sb && pa) {
	    if (yt6.size == 'default') {
	      if (sb.getAttribute('id')) {
		pa.style.height = yt6.h.replace('px','') + 'px';
	      } else sb.style.marginTop = -1 * (pa.style.height.replace('px','') - yt6.h.replace('px','')) + 'px'
	    } else sb.style.marginTop = ''
	  }
	}
	var z = gid('player-api'); if (z && document.getElementsByTagName('ytg-scroll-pane')[0]) z.style.top = 1 * z.style.top.replace('px','') - document.getElementsByTagName('ytg-scroll-pane')[0].scrollTop + 'px'
      }
    })
  }

 yt6.body.snarls_persistent.observe( yt6.ytg, { attributes: true, attributeOldValue: true, attributeFilter: ['style'] })
}



//new page is processed
yt6.body.spfprocess = function(e) {
 }
addEL(window, 'spfprocess', yt6.body.spfprocess, false);

//new page is displayed
yt6.body.spfdone = function(e) {


      if (video_title()[1]) {

	var yt6 = gid('snarls_player'), vid = yt6.vid
        if (vid == video_id()[0]) { set_controls(); try { unhide(gid('bm0')) } catch(e){}; return void 0; } // returning to the same video


	// the browser will be thrown out of fullscreen mode if ytplayer.config is undefined at this point (aka the current video is unavailable)
	if (!conf('args')[0]) {
	  ytplayer.config = {}
	  if (yt6.fullscreen && yt6.player1) try { yt6.player1.exitFullScreen() } catch(e){}
	}
	if (!conf('args')[1] || yt6.body2) ytplayer.config.args = {}
	if (!conf('attrs')[1]) ytplayer.config.attrs = {}
	if (!conf('assets')[1]) ytplayer.config.assets = {}
	if (yt6.body2) { ytplayer.config.args.url_encoded_fmt_stream_map = ''; ytplayer.config.adaptive_fmts = ''; ytplayer.config.args.raw_player_response = {}; ytplayer.config.args.raw_player_response.videoDetails = {} }

	ytplayer.config.loaded_from = ''
	yt6.old_ytplayer = null
	yt6.flash.vars = null
	yt6.spfblock = false
	yt6.blocked = false
	if (yt6.embed) yt6.embed.uid = null

	c = conf('args'), c2

	var p = player()
	var bm0 = gid('bm0')

	//if ( c[1] && c[1].csi_page_type && c[1].csi_page_type.indexOf('watch') > -1) {
	  if (!c[1].video_id) c[1].video_id = video_id()[0]
	  c[1].status = ''; yt6.status = ''
	  c[1].adaptive_fmts = ''
	  c[1].url_encoded_fmt_stream_map = ''//undefined
	//}



	var spfpc = (!yt6.mp_) ? true : false
	var c2
	// flash player nav buttons functional only if this age-spfpc won't be executed
	if (!yt6.flash.forced && !yt6.age.blocked) {// && p && (p.getAttribute('name') == 'replacement' || (p.tagName == 'DIV' && (!p.getAttribute('name') || p.getAttribute('name') == 'original') )) )
	  c2 = ageless_verification(spfpc)
		  if (p && p.parentNode && p.getAttribute('class') && p.getAttribute('class').indexOf('forced html5player') > -1) {
		    p.setAttribute('name','movie_player1'); try { p.destroy() } catch(e) { p.parentNode.removeChild(p) }
		    ageless_verification()
		    var z = gid('movie_player_orig')
		    if (z) { z.setAttribute('id','movie_player1'); switch_players(); buildObject(ytplayer) }
		  }
	}


	if (c2) c2 = conf('args')// == 1


      } else { return void 0; }



    if (p && typeof p.pauseVideo == 'function' && yt6.x) try { p.pauseVideo() } catch(e){}


    var bm3 = gid('bm3'), bm2 = gid('bm2')
    if (bm3.hasAttribute('onclick')) bm3.removeAttribute('onclick')



  var z; z = gid('unavailable-submessage') || gclass('ytd-playability-error-supported-renderers')[0]

  if (yt6.blocked || (z && z[yt6.txt] && z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '')) {

    var e = ''
    if (p && typeof p.getVideoEmbedCode == 'function') {
      try { p.loadVideoById(video_id()[0], 0, 'small'); e = p.getPlaybackQuality(); if (e == 'unknown') e = p.getVideoEmbedCode() } catch(e){}
    } else if (!(c2 && c2[0] && c2[1]) && yt6.age.check()) e = video_id()[0]


    if ( (gid('watch7-player-age-gate-content') || e.indexOf(video_id()[0]) > -1)) {

	if (!(c2 && c2[0] && c2[1])) {
	  ageless_verification()
	}

    } else {
	var z = gid('player-unavailable')
	if (z && !(c2 && c2[0] && c2[1])) z.style.display = ''
	if (yt6.flash.forced) yt6.flash.flag = 0
	var z = document.querySelector('[itemprop="regionsAllowed"]')
	if (z) {

	  resize_layers(z.offsetWidth + 'px', z.offsetHeight + 'px', false)
	  var z = z.content

	  if (bm3 && bm2) {
	    bm2.innerHTML = bm3.innerHTML
	    bm2.setAttribute('onerror','geo-blocked')
	    if (z != '') {
	      bm3.innerHTML = 'See all NON geo-blocked countries here:  <br>' + z
	      var z = "Use a HTTPS proxy\\'s IP that is located in one of these countries: " + z
	    } else {
		var z = 'This video seems to be blocked worldwide.'
		bm3.innerHTML = z
	      }
	  }

	  var sorry = gid('player-unavailable') || gid('error-screen')
	  sorry.title = z
	  sorry.setAttribute('aria-label',z)
	  sorry.setAttribute("onclick","javascript:var z = gid('unavailable-submessage') || gclass('ytd-playability-error-supported-renderers')[0];if(z && z.innerHTML != '') { alert('"+z+"') }");

	  if (bm3) {
	    bm3.style.height = '250px'
	    bm3.style.fontSize = '150%'
	    bm3.style.visibility = 'visible'
	    bm3.setAttribute('onclick', sorry.getAttribute("onclick"))
	  }

        } else {
	    if (gc('playlist-nav-controls')[0] && yt6.autoplay == true) {
		$waitUntil(function(){
		  var btn = gc('playlist-nav-controls')[0]
		  if (btn) {
		    btn = btn.getElementsByTagName('button')[0]
		    if (btn && btn.getAttribute('class') && btn.getAttribute('class').indexOf('yt-uix-button-toggled') == -1) { return true } else {}
		  }
		},function(){
		    var btn = gc('playlist-nav-controls')[0]
		    if (btn) {
		      btn = btn.getElementsByTagName('button')[0]
		      if (btn && btn.getAttribute('class') && btn.getAttribute('class').indexOf('yt-uix-button-toggled') == -1) { btn.click() }
		    }
  		},300,3000)
	    }
	  }
      }
  } else {
	if (bm2 && bm2.getAttribute('onerror') == 'geo-blocked') {
	  if (bm3) {
	    bm3.style.visibility = 'hidden'
	    bm3.style.fontSize = ''
	    bm3.innerHTML = gid('bm2').innerHTML
	    bm3.removeAttribute('onclick')
	  }
	  bm2.removeAttribute('onerror')
	  bm2.innerHTML = ''
	}
	var sorry = gid('player-unavailable') || gid('error-screen')
	sorry.removeAttribute('title')
	sorry.removeAttribute('aria-label')
	sorry.removeAttribute('onclick')

    }//unavailable-submessage else


	//var checkLoc = function() { return document.title }
	var strPrevLocation = "";
	var strPrevHash = "";
	var fnCleanHash = function( strHash ){
	  if ((strHash != undefined) && (strHash != null)) {
	    return(
	      strHash.substring( 1, strHash.length )
	    );
	  } else return("")
	}



    if (!yt6.body2 && yt6.osw.getAttribute('id') != 'player' && navigator.userAgent.match(/MSIE /) == null && navigator.userAgent.match(/Trident\//) == null) {
        yt6.pps = yt6.osw.firstChild.style
	var js = gid('placeholder-player')
	if (js) js.parentNode.removeChild(js)
	var js = document.createElement('div')
	js.id = 'placeholder-player'
	gid('content').insertBefore(js, gid('content').firstChild)
	js.innerHTML = '<div class="player-api player-width player-height" style="' + yt6.pps + '"></div>'
	yt6.osw = gid('placeholder-player')
        delete js;
    }

	if (yt6.title != document.title || yt6.strLocation != window.location.href && document.title != 'YouTube') {
	    if ( (window.location.href.indexOf("Ypkv0HeUvTc_MM") > -1 ) || (strPrevLocation.indexOf("aC4BC-Hxq9g_PD") > -1 ) ) {
	      location.href = window.location.href
	    } else {


		yt6.title = document.title

		// Store the new and previous locations.
		strPrevLocation = (yt6.strLocation) ? yt6.strLocation:"";
		strPrevHash = yt6.strHash;
		yt6.strLocation = window.location.href;
		yt6.strHash = window.location.hash;

		// The location has changed. Trigger a
		// change event on the location object,
		// passing in the current and previous
		// location values.
		//yt6.autoplay = false;



	        $( window.location ).trigger( "change",
		  {
		    currentHref: yt6.strLocation,
		    currentHash: fnCleanHash( yt6.strHash ),
		    previousHref: strPrevLocation,
		    previousHash: fnCleanHash( strPrevHash )
		  }
	      );

		//console.log('01 - Regular spf page change 12 '+document.title+ yt6.change);

		try { yt6.player1.pause() } catch(e){};

		mep_reload()

	    }
	}



}
addEL(window, 'spfdone', yt6.body.spfdone, false);


yt6.body.yt_navigate_finish = function() {
			if (yt6 && (yt6.browser_tab != 'hidden') || (!yt6.x && yt6.browser_tab == 'hidden') ) {
			  yt6.navigation = true
			}
			var p = player(), p = original(yt6.p)
			if (p && typeof p.getVideoUrl == 'function' && p.tagName == 'DIV') 
			try {
			  var c = conf('args'),
			      vid = vID(location.href).split('&')[0].split('/')[0]
			  if (p.getVideoUrl().indexOf(vid) == -1) {
			    if (typeof p.getPlayerState == 'function') try { p.loadVideoById(vid); p.playVideo() } catch(e){}
			    if (location.href.split('list=PL')[1]) {

				var pl_index = (!(yt6.blocked && yt6.layout == 16)) ? yt6.pl_index : (1 * yt6.pl_index) //+ 1
				c[1].list = 'PL' + location.href.split('list=PL')[1].split('&')[0].split('/')[0]; clear_pls(clone(c[1].list))
				p.cuePlaylist({
				  listType: 'playlist',
				  list: c[1].list,
				  index: yt6.pl_index
				})
			    } else {
				p.cueVideoById({
				  videoId: vid
				})
			      }
			  }
			  yt6.x_ = (yt6.x && yt6.browser_tab == 'hidden') ? clone(yt6.player1.media.volume) : false
			  //if (!yt6.x || yt6.x_) { if (yt6.pls && yt6.autoplay && p.getPlayerState() != 1) p.playVideo() } else p.pauseVideo()

			  $waitUntil(function(){
			      var mep = gid(mep_x('mep_'))
			      if (mep) {
				var sauce = getElementsByAttribute(mep,'input','name',mep.getAttribute('id') + '_sourcechooser')
				if (!sauce.length) return true
			      }
			    },function() { //ev_log('adbreak')
				yt6d.mep_reload(); 
			    },1500,15000)

			} catch(e){}

			if (location.href.split('v=')[1] || shorts() || location.href.split('/v/')[1])
			try { yt6.player1.pause(); yt6.ct = 0; yt6.player1.media.currentTime = 0; player2.currentTime = 0 } catch(e){}
/*
	if (yt6.size != 'custom' && !(!yt6.x && yt6.wide))
	try {
	  yt6.osw.style = ''; var p = player(), w = yt6.osw.offsetWidth + 'px', h = yt6.osw.offsetHeight + 'px', v = v_(p);
	  if (v) { v.style.width = w; v.style.height = h; v.style.left = ''; v.style.top = '' }; if (p) { p.style.width = w; p.style.height = h }; if (!yt6.wide && !yt6.body2) resize_layers(p.offsetWidth + 'px', p.offsetHeight + 'px')
	} catch(e){}
*/
	$waitUntil(function(){ var c = conf('args'); if (yt6.title != document.title || (c[1] && !(c[1].title && yt6.title == c[1].title))) return true},
	    function() {
		//document.title = 'YouTube'
	      //if (yt6.newin) {//yt6.age.check() && yt6.newin) {
		//ajax1(true)
		//try { yt6.newin = window.open(protocol() + '//www.youtube.com/watch?v=' + yt6.newin); if (yt6.newin) yt6.newin.blur() } catch(e) { return void 0 } // window.open may be null?
		//window.focus()
	      //} //else
		//yt6.newin = null
		if (!yt6.x && vID(yt6.vid) && yt6.p && typeof yt6.p.getPlayerState == 'function' && yt6.p.getPlayerState() != -1) yt6.p.playVideo()
	},500,5000)
}
addEL(window, 'yt-navigate-finish', yt6.body.yt_navigate_finish, false)

yt6.body.yt_navigate_start = function() {
/*	if (yt6.size != 'custom' && !(!yt6.x && yt6.wide))
	try {
	  yt6.osw.style = ''; var p = player(), w = yt6.osw.offsetWidth + 'px', h = yt6.osw.offsetHeight + 'px', v = v_(p);
	  if (v) { v.style.width = w; v.style.height = h; v.style.left = ''; v.style.top = '' }; if (p) { p.style.width = w; p.style.height = h }
	} catch(e){}*/
	if (yt6 && yt6.player1) yt6.player1.isLoaded = false
}
addEL(window, 'yt-navigate-start', yt6.body.yt_navigate_start, false)



    if (typeof jQuery != 'undefined' && (document.readyState == 'complete' || (yt6.layout == 16 && document.readyState == 'interactive')) ) (function( $ ){ //jQuery(document).ready(function( $ ){
      // Default to the current location.
      //yt6.strArgs = window.ytplayer 
      yt6.strLocation = window.location.href;
      yt6.strHash = window.location.hash;
      var change = video_title()[0],
	strPrevLocation = "",
	strPrevHash = "",
	strAds0,
	prev_vid = "", pprev_vid = ""
	ivo = "";

      // This is how often we will be checkint for
      // changes on the location.
      var intIntervalTime = 1000;

      // This method removes the pound from the hash.
      var fnCleanHash = function( strHash ){
        if ((strHash != undefined) && (strHash != null)) {
          return(
            strHash.substring( 1, strHash.length )
          );
        } else return("")
      }

    loadScript( ((yt6.cdn.indexOf('rawcdn.githack') == -1) ? yt6.cdn : '//cdn.jsdelivr.net/gh/snarly/yt6@').replace('snarly/yt6','lrsjng/jquery-qrcode') +'bf58382a988feb7343e40fcd34a3c8af859adc20/dist/jquery-qrcode.min.js', function(){ //githack refuses to serve it 

    })


    var z = yt6.osw
	z.width = z.offsetWidth
	z.height = z.offsetHeight

    var sameTitles = 0
    var debug = false


  if (('ontouchstart' in window) || ('onmsgesturechange' in window) || debug) {
  // Functions to emulate touch events, needed for skipping over video ads on mobile
  // Written by "hammerjs"
  // https://github.com/hammerjs/touchemulator


    var isMultiTouch = false;
    var multiTouchStartPos;
    var eventTarget;
    var touchElements = {};

    // polyfills
    if(!document.createTouch) {
        document.createTouch = function(view, target, identifier, pageX, pageY, screenX, screenY, clientX, clientY) {
            // auto set
            if(clientX == undefined || clientY == undefined) {
                clientX = pageX - window.pageXOffset;
                clientY = pageY - window.pageYOffset;
            }

            return new Touch(target, identifier, {
                pageX: pageX,
                pageY: pageY,
                screenX: screenX,
                screenY: screenY,
                clientX: clientX,
                clientY: clientY
            });
        };
    }

    if(!document.createTouchList) {
        document.createTouchList = function() {
            var touchList = new TouchList();
            for (var i = 0; i < arguments.length; i++) {
                touchList[i] = arguments[i];
            }
            touchList.length = arguments.length;
            return touchList;
        };
    }

    /**
     * create an touch point
     * @constructor
     * @param target
     * @param identifier
     * @param pos
     * @param deltaX
     * @param deltaY
     * @returns {Object} touchPoint
     */
    function Touch(target, identifier, pos, deltaX, deltaY) {
        deltaX = deltaX || 0;
        deltaY = deltaY || 0;

        this.identifier = identifier;
        this.target = target;
        this.clientX = pos.clientX + deltaX;
        this.clientY = pos.clientY + deltaY;
        this.screenX = pos.screenX + deltaX;
        this.screenY = pos.screenY + deltaY;
        this.pageX = pos.pageX + deltaX;
        this.pageY = pos.pageY + deltaY;
    }

    /**
     * create empty touchlist with the methods
     * @constructor
     * @returns touchList
     */
    function TouchList() {
        var touchList = [];

        touchList.item = function(index) {
            return this[index] || null;
        };

        // specified by Mozilla
        touchList.identifiedTouch = function(id) {
            return this[id + 1] || null;
        };

        return touchList;
    }


    /**
     * Simple trick to fake touch event support
     * this is enough for most libraries like Modernizr and Hammer
     */
    function fakeTouchSupport() {
        var objs = [window, document.documentElement];
        var props = ['ontouchstart', 'ontouchmove', 'ontouchcancel', 'ontouchend'];

        for(var o=0; o<objs.length; o++) {
            for(var p=0; p<props.length; p++) {
                if(objs[o] && objs[o][props[p]] == undefined) {
                    objs[o][props[p]] = null;
                }
            }
        }
    }

    /**
     * we don't have to emulate on a touch device
     * @returns {boolean}
     */
    function hasTouchSupport() {
        return ("ontouchstart" in window) || // touch events
               (window.Modernizr && window.Modernizr.touch) || // modernizr
               (navigator.msMaxTouchPoints || navigator.maxTouchPoints) > 2; // pointer events
    }

    /**
     * disable mouseevents on the page
     * @param ev
     */
    function preventMouseEvents(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }

    /**
     * only trigger touches when the left mousebutton has been pressed
     * @param touchType
     * @returns {Function}
     */
    function onMouse(touchType) {
        return function(ev) {
            // prevent mouse events
            preventMouseEvents(ev);

            if (ev.which !== 1) {
                return;
            }

            // The EventTarget on which the touch point started when it was first placed on the surface,
            // even if the touch point has since moved outside the interactive area of that element.
            // also, when the target doesnt exist anymore, we update it
            if (ev.type == 'mousedown' || !eventTarget || (eventTarget && !eventTarget.dispatchEvent)) {
                eventTarget = ev.target;
            }

            // shiftKey has been lost, so trigger a touchend
            if (isMultiTouch && !ev.shiftKey) {
                triggerTouch('touchend', ev);
                isMultiTouch = false;
            }

            triggerTouch(touchType, ev);

            // we're entering the multi-touch mode!
            if (!isMultiTouch && ev.shiftKey) {
                isMultiTouch = true;
                multiTouchStartPos = {
                    pageX: ev.pageX,
                    pageY: ev.pageY,
                    clientX: ev.clientX,
                    clientY: ev.clientY,
                    screenX: ev.screenX,
                    screenY: ev.screenY
                };
                triggerTouch('touchstart', ev);
            }

            // reset
            if (ev.type == 'mouseup') {
                multiTouchStartPos = null;
                isMultiTouch = false;
                eventTarget = null;
            }
        }
    }

    /**
     * trigger a touch event
     * @param eventName
     * @param mouseEv
     */
    function triggerTouch(eventName, mouseEv) {
        var touchEvent = document.createEvent('Event');
        touchEvent.initEvent(eventName, true, true);

        touchEvent.altKey = mouseEv.altKey;
        touchEvent.ctrlKey = mouseEv.ctrlKey;
        touchEvent.metaKey = mouseEv.metaKey;
        touchEvent.shiftKey = mouseEv.shiftKey;

        touchEvent.touches = getActiveTouches(mouseEv, eventName);
        touchEvent.targetTouches = getActiveTouches(mouseEv, eventName);
        touchEvent.changedTouches = getChangedTouches(mouseEv, eventName);

        eventTarget.dispatchEvent(touchEvent);
    }

    /**
     * create a touchList based on the mouse event
     * @param mouseEv
     * @returns {TouchList}
     */
    function createTouchList(mouseEv) {
        var touchList = new TouchList();

        if (isMultiTouch) {
            var f = TouchEmulator.multiTouchOffset;
            var deltaX = multiTouchStartPos.pageX - mouseEv.pageX;
            var deltaY = multiTouchStartPos.pageY - mouseEv.pageY;

            touchList.push(new Touch(eventTarget, 1, multiTouchStartPos, (deltaX*-1) - f, (deltaY*-1) + f));
            touchList.push(new Touch(eventTarget, 2, multiTouchStartPos, deltaX+f, deltaY-f));
        } else {
            touchList.push(new Touch(eventTarget, 1, mouseEv, 0, 0));
        }

        return touchList;
    }

    /**
     * receive all active touches
     * @param mouseEv
     * @returns {TouchList}
     */
    function getActiveTouches(mouseEv, eventName) {
        // empty list
        if (mouseEv.type == 'mouseup') {
            return new TouchList();
        }

        var touchList = createTouchList(mouseEv);
        if(isMultiTouch && mouseEv.type != 'mouseup' && eventName == 'touchend') {
            touchList.splice(1, 1);
        }
        return touchList;
    }

    /**
     * receive a filtered set of touches with only the changed pointers
     * @param mouseEv
     * @param eventName
     * @returns {TouchList}
     */
    function getChangedTouches(mouseEv, eventName) {
        var touchList = createTouchList(mouseEv);

        // we only want to return the added/removed item on multitouch
        // which is the second pointer, so remove the first pointer from the touchList
        //
        // but when the mouseEv.type is mouseup, we want to send all touches because then
        // no new input will be possible
        if(isMultiTouch && mouseEv.type != 'mouseup' &&
            (eventName == 'touchstart' || eventName == 'touchend')) {
            touchList.splice(0, 1);
        }

        return touchList;
    }

    /**
     * show the touchpoints on the screen
     */
    function showTouches(ev) {
        var touch, i, el, styles;

        // first all visible touches
        for(i = 0; i < ev.touches.length; i++) {
            touch = ev.touches[i];
            el = touchElements[touch.identifier];
            if(!el) {
                el = touchElements[touch.identifier] = document.createElement("div");
                document.body.appendChild(el);
            }

            styles = TouchEmulator.template(touch);
            for(var prop in styles) {
                el.style[prop] = styles[prop];
            }
        }

        // remove all ended touches
        if(ev.type == 'touchend' || ev.type == 'touchcancel') {
            for(i = 0; i < ev.changedTouches.length; i++) {
                touch = ev.changedTouches[i];
                el = touchElements[touch.identifier];
                if(el) {
                    el.parentNode.removeChild(el);
                    delete touchElements[touch.identifier];
                }
            }
        }
    }

    /**
     * TouchEmulator initializer
     */
    function TouchEmulator() {
        if (hasTouchSupport()) {
            return;
        }

        fakeTouchSupport();

        window.addEventListener("mousedown", onMouse('touchstart'), true);
        window.addEventListener("mousemove", onMouse('touchmove'), true);
        window.addEventListener("mouseup", onMouse('touchend'), true);

        window.addEventListener("mouseenter", preventMouseEvents, true);
        window.addEventListener("mouseleave", preventMouseEvents, true);
        window.addEventListener("mouseout", preventMouseEvents, true);
        window.addEventListener("mouseover", preventMouseEvents, true);

        // it uses itself!
        window.addEventListener("touchstart", showTouches, false);
        window.addEventListener("touchmove", showTouches, false);
        window.addEventListener("touchend", showTouches, false);
        window.addEventListener("touchcancel", showTouches, false);
    }

    // start distance when entering the multitouch mode
    TouchEmulator.multiTouchOffset = 75;

    /**
     * css template for the touch rendering
     * @param touch
     * @returns object
     */
    TouchEmulator.template = function(touch) {
        var size = 30;
        var transform = 'translate('+ (touch.clientX-(size/2)) +'px, '+ (touch.clientY-(size/2)) +'px)';
        return {
            position: 'fixed',
            left: 0,
            top: 0,
            background: '#fff',
            border: 'solid 1px #999',
            opacity: .6,
            borderRadius: '100%',
            height: size + 'px',
            width: size + 'px',
            padding: 0,
            margin: 0,
            display: 'block',
            overflow: 'hidden',
            pointerEvents: 'none',
            webkitUserSelect: 'none',
            mozUserSelect: 'none',
            userSelect: 'none',
            webkitTransform: transform,
            mozTransform: transform,
            transform: transform
        }
    };
  // end of touchemulator
  }



    if (typeof Proxy == 'function') {
      yt6d.proxy_handler = {
	set: function(target, key, value) {
	    target[key] = value
	    if (yt6 && yt6d) {

		if (key == 'document_title' && value != yt6.previous_title && yt6d.ended && yt6.browser_tab == 'hidden' && yt6.layout == 16 && !yt6.ytg && yt6.player1 && yt6.player1.media) {
		  yt6d.ended = false
		  if (yt6.p && typeof yt6.p.getPlayerState == 'function') {
		    //try { yt6.p.pauseVideo() } catch(e){}
		  }
		  if (!yt6.x) { switch_players(); yt6.x = true }
		  if (yt6.md && yt6.autoplay) try {
		    try { yt6.p.playVideo() } catch(e){}
		    yt6.player1.play()//yt6.player1.load()
		    //yt6.player2.play() // no longer needed for continuous play on a backgrounded tab
		  } catch(e){}
		}

		//mobile orientation
		if (key == 'orientation' && yt6.mobile) {
		  if (value != yt6d.orientation) {
		    var z = (yt6.pls && screen.height >= screen.width) ? gc('compact-media-item-headline')[yt6.pl_index_m - yt6.pls_top] : document.getElementsByTagName('ytm-app')[0] // focus on the playlist item currently being played or the player itself
		    try { z.scrollIntoView(true) } catch(e){}
		  }
		}
	    }
	}
      }
      yt6d.proxy = new Proxy(yt6d, yt6d.proxy_handler)

    }


      if (yt6.tbg) yt6.tbg.width = yt6.tbg.offsetWidth

	    function adbox_begone1(i) {
	      var ads = yt6.p.getElementById('invideo-overlay:'+String.fromCharCode(i)); if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : ''; ivo = yt6.vid + '$done' + yt6.ads_off; return ivo } else return ''
	    }
	    function adbox_begone2(i, j) {
	      var ads = yt6.p.getElementById('invideo-overlay:'+String.fromCharCode(i)+String.fromCharCode(j)); if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : ''; ivo = yt6.vid + '$done' + yt6.ads_off; return ivo } else return ''
	    }

      // This will be the method that we use to check
      // changes in the window location.

      //yt6.fnCheckLocation = setInterval(function(){
      $waitUntil(function(){

	var yt6 = gid('snarls_player');
	if (yt6 == null) { return true } else { yt6.fnCheckLocation = 1 // && !yt6d.source


	var p = player(), p = yt6.p, c = conf('args')

	//var checkLoc = function() { return document.title }

	var bm0 = gid('bm0')


	if (!yt6.observed && yt6.body && yt6.body.snarls_watchdog) {
	  if (!yt6.ytg && !yt6.ytm) {
	    var z = (yt6.flexy) ? 'ytd-watch-flexy' : 'ytd-watch'
	    try { yt6.body.snarls_watchdog.observe( document.getElementsByTagName(z)[0], {attributes: true, attributeFilter: ['video-id'] }); yt6.observed = true } catch(e) { yt6.observed = false }
	  } else if (yt6.ytm) { var z = gc('byline style-scope ytmusic-player-bar complex-string')[0];//if (Polymer.Async._twiddle) {
	      if (z) try { yt6.body.snarls_watchdog.observe( z,//Polymer.Async._twiddle, 
		{ attributes: true, attributeOldValue: true, attributeFilter: ['title'] }); yt6.observed = true//{ characterData: true }); yt6.observed = true
	      } catch(e) { yt6.observed = false }
	    }
	}


	var z = yt6.osw
	if (z && z.getAttribute('id') != 'player') {
	  var z = z.firstChild
	};
	if (z) {
	  if (yt6.layout == 12 && z.style) {
	    if (yt6.navigation && !gc('me-cannotplay')[0]) {
	      if (yt6.blocked || !c[0] ||
		 (c[1] && c[1].video_id == yt6.vid) ) {
		if (!yt6.ytp.embed && !yt6.body2) z.style.display = 'none'
		yt6.navigation = false
		if (location.href.indexOf(yt6.vid) > -1 && !(yt6.flash.forced && yt6.flash.delay) && bm0 && bm0.parentNode == gid('movie_player_to_insert') && yt6.status != 'error' && !yt6.blocked) try { unhide(bm0) } catch(e){}//unhide-7
	      } else {
		  if (!window.ytplayer || c[0]) {
		    yt6.navigation = false; //console.log(ytplayer.config.args.video_id + ' !! ' + yt6.vid)
		  } else if (!yt6.ytp.embed && !yt6.body2) z.style.display = 'none'
		}
	    }
	  }
	  if (typeof z.getAttribute == 'function' && z.getAttribute('style') && z.getAttribute('style').toString() == '[object CSS2Properties]') {
	    var vt = video_title()
	    if (vt && vt[1]) {
	      z.setAttribute('style','display: none')
	      if (bm0) try { gid('movie_player_to_insert').appendChild(bm0) } catch(e){}
	    } else if (location.href.indexOf(yt6.vid) > -1 && !(yt6.flash.forced && yt6.flash.delay) && bm0 && bm0.parentNode == gid('movie_player_to_insert')) try { unhide(bm0) } catch(e){}
	  }
	}


	wide_view()


	if ((!yt6.x || yt6.newvideo) && !yt6.ad_ && yt6.linx && !yt6.linx.length && !(yt6.layout == 16 && c[1] && (c[1].url_encoded_fmt_stream_map || c[1].adaptive_fmts)) && p && yt6.pls && yt6.status && yt6.status != 'unplayable' && !(yt6.ytm) && !(yt6.xhr.async && !yt6.xhr.completed)) {//yt6.status != 'error' && 
	  try { //console.log('jump to next ' + yt6.status + ' '+yt6.linx.length +' '+ yt6.ad_)
	    yt6.ad_ = 1; fix_playlist(); try { yt6.pl_next.click() } catch(e){ FireEvent2(yt6.pl_next, 'click') }
	  } catch(e) { }
	} else if (yt6.mobile && yt6.pls && !yt6.x && !(yt6.wna && yt6.wna.parentNode) && !(p && typeof p.getPlayerState == 'function' && p.getPlayerState() != 2) ) {
		scrollToCurrentVideo()
		set_controls()
	  }


	if (p && p.tagName == 'DIV') {
	  if (!(yt6.ytp.v && yt6.ytp.v.parentNode)) {
	    yt6.ytp.v = v_(yt6.p)
	  } else if ( !yt6.ytm && !yt6.mobile && typeof p.getPlayerState == 'function' && p.getPlayerState() != 0) {
	     try {// a yt mechanism is set to remove html5 transformation upon certain events, have to check periodically to fix it
		if (yt6.ytp.v && yt6.yt_prop && yt6.propName && yt6.ytp.v.style && yt6.ytp.v.style[yt6.propName] != yt6.yt_prop)
		  yt6.ytp.v.style[yt6.propName] = yt6.yt_prop;
	     } catch(e){}
	  }
	}
	if ( (yt6.mobile && yt6.x && yt6.browser_tab == 'hidden' && browserName != 'Firefox' && (yt6.mute_on || yt6.pre_ad)) ) {// ff mobile is too slow on page change in the background, keep the original player unmuted till the alt-player is ready to take over
	  if (typeof p.isMuted == 'function' && !(yt6.ytm && p.tagName == 'EMBED') && !p.isMuted()) { p.mute(); yt6.ad_muted = true }
	}

	if (yt6.mobile) {
	  var z = gid('player-control-container')
	  if (z) if (yt6.x && !z.hasAttribute('hidden')) { z.setAttribute('hidden','') } else if (!yt6.x && z.hasAttribute('hidden')) z.removeAttribute('hidden')
	  z = gid('player-container-id')
	  if (z) z.className = (!yt6d.orientation) ? 'player-container sticky-player' : 'player-container'
	  z = gc('upsell-dialog-lightbox')[0]
	  if (z) z.style.display = 'none'
	  z = gc('consent-bump-lightbox')[0]
	  if (z) z.style.display = 'none'
	  if (yt6.body && yt6.body.hasAttribute('modal-open-body')) yt6.body.removeAttribute('modal-open-body')
	} else if (yt6.layout == 16 && !yt6.ytm && !yt6.ytg) {
	    var z = ['ytd-consent-bump-lightbox','iron-overlay-backdrop','yt-upsell-dialog-renderer']
	    for (i=0;i<z.length;i++) { var y = document.getElementsByTagName(z[i])[0]; if (y) y.style.display = 'none' }
	  }


	var ads, ads0;

	//if (yt6.ads_off || yt6.mute_on)  // yt6.x || !yt6.x || 
	if ( (!yt6.navigation || yt6.browser_tab == 'hidden') && p && !(yt6.mpb && yt6.mpb.hasAttribute('active')) ) { // check for in-video ad

	  ads0 = (!(yt6.ytm && yt6.flash.forced) && !yt6.age.blocked && !(yt6.p && yt6.p.tagName == 'IFRAME')) ? mute_ad(p) : null
	  if (!yt6.ads_off) ads0 = null

	}

        if (yt6 != null && !yt6.navigation && gc('mejs-clear')[0]) {
	  if (yt6.x && bm0 && p && typeof p.getPlayerState == 'function') {
	    var s = p.getPlayerState()
	    if (s == 1 || s == 3)
	    if (yt6.pre_ad && yt6.Seek != 3) {
	      try { p.pauseVideo(); gc('video-stream html5-main-video')[0].pause(); p.seekTo(yt6.yt_ct) } catch(e) {}
	    } else try { p.pauseVideo(); gc('video-stream html5-main-video')[0].pause(); p.seekTo(yt6.yt_ct) } catch(e){}
	  }
	  if (yt6.x && p && p.tagName == 'EMBED') window.postMessage("pauseVideo", "*")
	}

	if (typeof yt6.ads_noskip == 'undefined') yt6.ads_noskip = 0


	if (yt6.ads_off) {

	ads = gc('videoAdUiSkipButton')[0]; if (ads && (!yt6.x || yt6.ytm || (yt6.x && yt6.md && yt6.browser_tab == 'hidden') )) {
	  yt6.ads_noskip = 0
	  ads.click()
	  ads.setAttribute("class", "videoAdUiSkipButton")
	}


	ads = gc('ytp-ad-player-overlay')[0]
	if (!ads) {
	  ads = gc('playability-status-dismiss-button')[0]
	  if (ads) {
	    ads = ads.getElementsByTagName('c3-material-button')[0]
	    if (ads) ads = ads0 = ads.getElementsByClassName('c3-material-button-button')[0]
	  } else
	      ads0 = gc('ytp-ad-preview-container')[0]
	}

	if (ads && Math.abs(yt6.real_media_duration - ads0) > 1) {
	  //console.log('ads: '+ ads)
	  //console.log('ads0: '+ ads0)
	}

	if ((ads && ads.lastChild && ads != ads0 && !(yt6.ads_noskip_m == 1 && yt6.browser_tab == 'visible')) || (yt6.mobile && !yt6d.init && !yt6.navigation && location.href.indexOf('list=PL') > -1 && !yt6.pls && c[1] && typeof (c[1] && c[1].list) == 'string' && !(c[1] && c[1].list).split('"')[1] && yt6.ads_noskip_m == 2) ) { //if (yt6.mobile && !yt6d.init && !yt6.navigation && location.href.indexOf('list=PL') > -1 && !yt6.pls && c[1] && typeof (c[1] && c[1].list) == 'string' && !(c[1] && c[1].list).split('"')[1]) ev_log('? '+ yt6.ads_noskip_m)
	  ads = gc('ytp-ad-skip-ad-slot')[0] // unskippable = gc('ytp-ad-toggle-button ytp-ad-instream-user-sentiment-dislike-button')[0]
	  if (yt6.mobile)
	  if (!ads) { //if (yt6.mobile && !yt6d.init && !yt6.navigation && location.href.indexOf('list=PL') > -1 && !yt6.pls && c[1] && typeof (c[1] && c[1].list) == 'string' && !(c[1] && c[1].list).split('"')[1]) ev_log('!'+ yt6.ads_noskip_m)
		// on m.youtube, we can create our own "skip button" (a link to the current page which will semi-reload it)
		// but try it only once per video because YT may keep throwing unskippable ads with no end in sight
		// save for when YT "forgets" to put the playlist structures back on the page, in which case this is the way to fix it
		var z = gid('prebtn')
		if (!z) z = document.createElement('a')
		z.id = 'prebtn'
		z.href = '#'
		yt6.appendChild(z)
		z.setAttribute('class','ytp-ad-skip-button ytp-button')
		ads = gid('prebtn')
	  } else if (yt6.ads_noskip_m == 2 && yt6.pls) yt6.ads_noskip_m = 0

	}

	if ( (!(yt6.mobile && yt6.ads_noskip_m == 1)) && (ads && (ads != ads0 || (ads == ads0 && yt6.loaded_vid == yt6.vid && Math.abs(yt6.real_media_duration - yt6.loaded_media_duration) > 0.6) )) ) { //&& (yt6.x || yt6.ytm || yt6.mobile || (yt6.x && yt6.md && yt6.browser_tab == 'hidden') )) {

	  if (!yt6.mobile) yt6.ads_noskip = 0
	  if (ads != ads0) ads = gc('ytp-ad-skip-button ytp-button')[0]

	  if (ads) { //console.log('skip pre-emptive or trailing ad '+ yt6.ads_noskip_m)

	    ads.click()

	    if (typeof triggerTouch == 'function') {

	      if (ads != ads0)
	      if (ads.id != 'prebtn') {
		ads = gc('ytp-ad-skip-button-icon')[0]; if (ads) ads = gclass('ytp-ad-text ytp-ad-skip-button-text')[0]
	      } else ads.setAttribute('class','ytp-ad-text ytp-ad-preview-text')

	      if (ads) {

		if (ads != ads0) {
		  var prebtn = (!yt6.ad_unskippable) ? gclass('ytp-ad-text ytp-ad-preview-text')[0] : ads
		} else var prebtn = ads.getElements

		var evtest = function(e) { if (e && typeof e.pageY == 'number') yt6d.mouseEvent = e; } //try { console.log(yt6d.mouseEvent) } catch(err) { console.log(err) }

		if (!yt6.ads_noskip_m) {
		  addEL(prebtn, 'click', evtest, false)
		} else {
		    removeEL(prebtn, 'click', evtest, false)
		  }
		
		prebtn.click()

		ads.parentNode.style.display = 'block'

		try {

		  eventTarget = ads
		  triggerTouch('touchstart', yt6d.mouseEvent); // generating emulated touch here
		  triggerTouch('touchend', yt6d.mouseEvent);

		  if (1 >= yt6.linx.length) {
		    if (yt6.x) { switch_players(); yt6.swapped = 1 }
		    var p = player(), p = yt6.p
		    $waitUntil(function(){ var vid = ''; if (yt6.p && typeof yt6.p.getVideoUrl == 'function') vid = vID(yt6.p.getVideoUrl()); if (vid && location.href.indexOf(vid.split('&')[0]) > -1) return true },
		      function() {
			yt6.p.playVideo()
		      },1000,6000)
		    }
		} catch(e){}

		yt6.ads_noskip_m = ( !(yt6.mobile && location.href.indexOf('list=PL') > -1 && !yt6.pls && c[1] && typeof (c[1] && c[1].list) == 'string' && !(c[1] && c[1].list).split('"')[1]) ) ? 1 : 2

	      }
	    }
		              $waitUntil(function(){var p = player(), s
				if (p && !(yt6.ytm && p.tagName == 'EMBED') && typeof p.getPlayerState == 'function') {
				  var s = p.getPlayerState()
				  if (s == 2 || s == -1) { return true } else try { if (s == 3) { p.playVideo(); return true } else { p.pauseVideo() } } catch(e){}
				}
			      },function() { yt6.p.seekTo(yt6.p.getCurrentTime()); if (!yt6.x) { yt6.p.playVideo(); yt6.p.playVideo(); try { v_(yt6.p).playbackRate = clone(yt6.speed) } catch(e) { yt6.ytp.speed() } } else if (yt6.autoplay && location.href.indexOf(yt6.loaded_vid) > -1) yt6.player1.media.play()
				}, 100,5000)

	    if ((yt6.loaded_media_duration == 4 && Math.abs(yt6.real_media_duration - 4) > 0.6) || !yt6.linx.length) {
		yt6d.mep_reload()
	    } else
		$waitUntil(function() { if (yt6.live && yt6.real_media_duration > 0 && typeof yt6.loaded_media_duration == 'number' && (yt6.loaded_media_duration - yt6.real_media_duration) > 36 ) return true }, function() { yt6d.mep_reload() },500,7000)

	    //if (!yt6.x || (yt6.layout == 16 && !yt6.mobile && !yt6.ytm && yt6.browser_tab == 'hidden')) try { p.unMute(); yt6.ad_muted = false } catch(e) {}
	    if (yt6.x) {
		  if ( !yt6.live && typeof p.isMuted == 'function') {
		    if (!(yt6.ytm && yt6.ytp.fullscreen))
		      try {
			if (yt6.mute_on) { 
			  if (yt6.layout == 16 && !yt6.mobile && !yt6.ytm && yt6.browser_tab == 'hidden') {
			    yt6.pre_ad = true
			  } // else
			  // ytplayer loads much faster than any other element on hidden tabs, so it can play a significant section of the video by the time the alt-player loads up
			  // if we leave it unmuted (by uncommenting the "else" above) at the expense of tolerating a possible ad for a few seconds
			  //if (!(yt6.md && yt6.browser_tab == 'hidden'))
			  p.mute(); yt6.ad_muted = true
			}
		      } catch(e) { if (!p.isMuted()) yt6.ad_muted = false }
		  }
	    } //else if (yt6d.init) switch_players()
	    yt6.ad_skipped = 1
	  }
	} else {
	    //if (yt6.mobile) yt6.ads_noskip_m = 1
	    ads = gc('ytp-ad-preview-container')[0] || yt6.pre_ad === true
	    if (ads && ((strAds0 != ads0) || yt6.ytm || yt6.loaded_media_duration == 4 || (yt6.loaded_vid == yt6.vid && Math.abs(yt6.real_media_duration - yt6.loaded_media_duration) > 0.6)  )){
	      //if (yt6d.init && !yt6.x) switch_players()
	      if ((yt6.ads_noskip < 3 && !yt6.ytm) || (yt6.ytm && yt6.ads_noskip < 2)) { //console.log('skip in-video ad')
		yt6.ads_noskip = (yt6.ads_noskip + 1)
		if (ads && ads.parentNode) ads.parentNode.removeChild(ads)
		try { //console.log('skip')
		              var vid = vID(location.href).split('&')[0].split('/')[0]
		              yt6.ytp.ct = p.getCurrentTime()
			      yt6.ytp.cq = p.getPlaybackQuality()
			      var b = gid('alt-links')
			      if (b && b.lastChild && b.firstChild != b.lastChild) yt6.ads_clone = gid('alt-links').cloneNode(true)

				try { p.loadVideoById(vid || video_id()[0], yt6.ytp.ct) } catch(e){}

			      if (location.href.split('list=PL')[1]) {
				var pl_index = (!(yt6.blocked && yt6.layout == 16)) ? yt6.pl_index : (1 * yt6.pl_index); //+ 1
				c[1].list = 'PL' + location.href.split('list=PL')[1].split('&')[0].split('/')[0]; clear_pls(clone(c[1].list))
				p.cuePlaylist({
				  listType: 'playlist',
				  list: c[1].list,
				  index: yt6.pl_index,
				  startSeconds: yt6.ytp.ct,
				  suggestedQuality: yt6.ytp.cq
				})
			      } else {
				p.cueVideoById({
				  videoId: vid,
				  startSeconds: yt6.ytp.ct,
				  suggestedQuality: yt6.ytp.cq
				})
			        }

		              $waitUntil(function(){var p = player(), s
				if (p && !(yt6.ytm && p.tagName == 'EMBED') && typeof p.getPlayerState == 'function') {
				  var s = p.getPlayerState(), b = v_(yt6.p)
				  if (s == 2 || s == -1 || (b && b.volume == 0)) { return true } else try { p.playVideo(); p.pauseVideo() } catch(e){}
				}
			      },function() { yt6.p.seekTo(yt6.p.getCurrentTime()); if (!yt6.x) { yt6.p.playVideo(); yt6.p.playVideo(); try { v_(yt6.p).playbackRate = clone(yt6.speed) } catch(e) { yt6.ytp.speed() } } //else if (yt6.autoplay && location.href.indexOf(yt6.loaded_vid) > -1) yt6.player1.media.play()
				  if (!yt6.x //|| (yt6.layout == 16 && !yt6.mobile && !yt6.ytm && yt6.browser_tab == 'hidden')
				  ) {
				    var b = v_(yt6.p); if (b) { b.volume = 1; b.playbackRate = clone(yt6.speed) }//(typeof yt6.ytp.vol_b == 'number') ? clone(yt6.ytp.vol_b) : 
				    delete yt6.ytp.vol_b; if (!yt6.x) try { yt6.p.unMute(); yt6.ad_muted = false; yt6.pre_ad = false } catch(e) {}
				  }; if (!yt6.mobile) { setTimeout(function(){ set_controls() },1000) } else { pl_item() }
				  if (yt6.ad_skipped) { delete yt6.ad_skipped }
				}, 200,5000)

			      if (yt6.loaded_media_duration == 4 || !yt6.linx.length) yt6d.mep_reload()
			      yt6.ad_skipped = 2

			      //if (yt6.real_media_duration === 0) yt6.real_media_duration = p.getDuration()
		} catch(e){}
	      } else {
		  if (yt6.p && yt6.p.tagName == 'DIV' && typeof yt6.p.getPlayerState == 'function') {
		    var b = v_(yt6.p); if (b) { yt6.ytp.vol_b = (b.volume > 0.1 && !(p && p.isMuted()) ) ? clone(b.volume) : 1; ; b.playbackRate = 16 }//b.volume = 0
		    if (yt6.p.getPlayerState() != 1) yt6.p.playVideo()
		    var brake = yt6.brake = function() { var brake = yt6.brake
		      if (yt6.pre_ad || typeof yt6.ytp.vol_b == 'number') { var p = player()
			if (p && typeof p.getPlayerState == 'function') {
			  var b = v_(p); if (b) { b.volume = 1 || clone(yt6.ytp.vol_b); b.playbackRate = clone(yt6.speed); delete yt6.ytp.vol_b };//if (typeof yt6.ytp.vol_b == 'number') 
			  yt6.ads_noskip = 0; removeEL(p, "onStateChange", brake, false)
			  if (!yt6.x) try { yt6.p.unMute(); yt6.ad_muted = false } catch(e){}
			  if (p.getPlayerState() > 1) p.playVideo()
			}; yt6.pre_ad = false; if (!yt6.mobile) { setTimeout(function(){ set_controls() },1000) } else { pl_item() }
			if (yt6.ad_skipped) { delete yt6.ad_skipped }
		      } else { removeEL(yt6.p, "onStateChange", brake, false) }
		    }
		    if (b && b.volume !== 0) { removeEL(p, "onStateChange", brake, false) }
		    if (yt6.pre_ad) { yt6.ad_skipped = 3; addEL(p, "onStateChange", brake, false) }
		    yt6.pre_ad = '?'
		  }
		}
	    }
	    if (yt6.real_media_duration === 0) yt6.real_media_duration = p.getDuration()
	  }

	  strAds0 = ads0

	}//ads_off

	//var z = gc('display-status'); if (z && z.length); for(i=0;i<z.length;i++) z[i].innerHTML = yt6.size //yt6.pre_ad +' '+ yt6.ads_noskip +' '+ yt6.ytp.vol +' '+ yt6.ad_duration


	ads = gc('ad-container ad-container-single-media-element-annotations ad-overlay')[0]; if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : '' }
	ads = gc("video-ads html5-stop-propagation")[0]; if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : '' }
	ads = gid("google_companion_ad_div"); if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : '' }
	ads = gid(mep_x("google_ads_frame")); if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : '' }
	ads = gid('player-ads'); if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : '' };
	if (yt6.layout == 16 && !yt6.ytm) { ads = document.getElementsByTagName('ytd-promoted-sparkles-web-renderer')[0]; if (ads) { if (yt6.ads_off) { ads.setAttribute('hidden','') } else if (ads.hasAttribute('hidden')) ads.removeAttribute('hidden') } };
	if (yt6.mobile) {
	  ads = document.getElementsByTagName('ytm-promoted-sparkles-web-renderer')[0]; if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : '' }
	  ads = document.getElementsByTagName('ytm-companion-slot')[0]; if (ads) { ads.style.display = (yt6.ads_off) ? 'none' : '' }
	}

	if (yt6.wsa && yt6.wsa.style.display != 'none') { yt6.wsa.style.display = (yt6.ads_off) ? 'none' : '' };



	//if (typeof ivo == 'undefined') var ivo = ''

	if (!yt6.x && !yt6.ytm && ivo.indexOf(yt6.vid + '$done' + yt6.ads_off) == -1 && p && p.tagName == 'DIV') {
	  var z = [[48,58],[65,91],[97,123]]
	  if (yt6.p && typeof yt6.p.getElementById == 'function')
	  for (k=0;k<3;k++){
	  for (i=z[k][0];i<z[k][1];i++) { //0-9
	    ivo = adbox_begone1(i)
	    if (!ivo) for (j=48;j<58;j++) { //0-9
	      ivo = adbox_begone2(i, j)
	    }
	    if (!ivo) for (j=65;j<91;j++) { //A-Z
	      ivo = adbox_begone2(i, j)
	    }
	    if (!ivo) for (j=97;j<123;j++) { //a-z
	      ivo = adbox_begone2(i, j)
	    }
	  }
	  }
	  /*if (!ivo) for (i=65;i<91;i++) { //A-Z
	    ivo = adbox_begone1(i)
	  }
	  if (!ivo) for (i=97;i<123;i++) { //a-z
	    ivo = adbox_begone1(i)
	  }*/

	  //if (ivo != yt6.vid + '$done' + yt6.ads_off) {
	    var ads = gclass('ytp-ad-overlay-slot','div',yt6.p)[0];
		if (ads) {
		  ads.style.display = (yt6.ads_off) ? 'none' : ''; //ivo = yt6.vid + '$done' + yt6.ads_off
		}
	  //}
	} else {
		    if (yt6.ytm && bm0) {
		      var m_p = gid('main-panel')
		      if (m_p) {
		        m_p = m_p.style
		        if (m_p) {
		          m_p = m_p.padding
		          if (m_p && m_p.split('px')[1]) {
		            var z = parseFloat(1 * (m_p.split('px')[1]))
		            var ww = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb
			    if (!isNaN(z) && (z > ww / 3 || (z + 1 * bm0.style.width.replace('px','')) > ww) ) { gid('main-panel').style.padding = m_p.split('px')[0] + 'px 0px' }
		          }
		        }
		      }
		    }
	  }



if (yt6 != null) if (yt6.loaded >= 4 || (yt6.blocked && yt6.loaded == 1)) {



	if (p) {

	  if (!yt6.x && yt6.player2)
	  try {
	    yt6.ytp.vol = parseFloat(p.getVolume() / 100); yt6.ytp.vol = (!yt6.pre_ad && typeof yt6.ytp.vol == 'number') ? clone(yt6.ytp.vol) : 1
	    if (p.isMuted()) yt6.ytp.vol = 0
	    yt6.player2.media.volume = yt6.ytp.vol
	  } catch(e) { yt6.ytp.vol = null }


	  if (p.tagName == 'EMBED') {
	    try { z = typeof p.getPlayerState } catch(e) { z = null }
	    // A forced flashplayer's getPlayerState call will always throw an invalid exception on YouTube Music, thus it cannot be controlled via javascript functions but by mouse clicks only. On top of that, if the "Force flash player usage" checkbox remains checked upon another page change, the domain's engine will trash the whole script...
	    //if (yt6.ytm && z && z == 'function') try { p.getPlayerState() } catch(e){ console.log(e); z = null }
	    if (yt6.ytm) { z = null }
	  } else z = typeof p.getPlayerState;


	  if (z) z = (z == 'function') ? p.getPlayerState() : null;
	  if (typeof z == 'number') { var z = 'playerState_' + z } else { var z = 'playerState_null' }
	  if (z.indexOf('playerState_') > -1) if (gc('alerts-wrapper')[0] && gc('alerts-wrapper')[0].getAttribute('id') != z) gc('alerts-wrapper')[0].setAttribute('id',z)
	}




  	
	if (!yt6.navigation && yt6.pre_ad === true && yt6.ad_duration != 0 && yt6.ad_muted && !yt6.ad_unmute && gc('ytp-time-duration')[0] && yt6.loaded_media_duration && (1*yt6.loaded_media_duration.toString().toHHMMSS().split('.')[0].split(':').join('') - 1*gc('ytp-time-duration')[0][yt6.txt].split(':').join('') > 3)) {//console.log('Ads running'+1*gc('ytp-time-duration')[0][yt6.txt].split(':').join('')+' '+1*yt6.loaded_media_duration.toString().toHHMMSS().split('.')[0].split(':').join(''))
	  if (yt6.flash.forced) {
	    yt6.ad_muted = false
	    yt6.pre_ad = false
	    yt6.ad_duration = 0
	  } else
	  $waitUntil(
	    function(){
	      yt6.ad_unmute = true;
	      var ads0 = gc('ytp-time-duration')[0]; if (ads0) { ads0 = ads0[yt6.txt].split(':') } else return true
	      if (ads0[2]){
		var ads0 = ads0[0] * 3600 + ads0[1] * 60 + ads0[2] * 1
	      } else var ads0 = ads0[0] * 60 + ads0[1] * 1
	      if (!(Math.abs(yt6.loaded_media_duration - ads0) > 1)) return true
	    },
	    function(){
              if (player() && typeof yt6.p.isMuted == 'function') {
		if (yt6.x) yt6.p.pauseVideo()
		if (!yt6.x //|| (yt6.layout == 16 && !yt6.mobile && !yt6.ytm && yt6.browser_tab == 'hidden')
		) try { yt6.p.unMute(); yt6.ad_muted = false } catch(e){}
	      }
	      yt6.ad_unmute = false
	      yt6.pre_ad = false
	      yt6.ad_duration = 0
	    }
	  )
	} else {}

	no_cards()


	if (yt6.swapped && ((yt6.player1 && yt6.player1.media && !yt6.player1.media.paused) || (yt6.player2 && yt6.player2.media && !yt6.player2.media.paused)) ) try { yt6.Seek = 3; yt6.player1.pause(); yt6.Seek = 3; yt6.player2.pause(); yt6.Seek = 3 } catch(e){}


	var watch
	var mep = gid(mep_x('mep_')), poster

	if (mep) {
	  if (yt6.x && document.activeElement && document.activeElement.parentNode && typeof document.activeElement.parentNode.className == 'string' && document.activeElement.parentNode.className.indexOf('mejs-playpause-button') > -1) mep.focus()
	  poster = gc('mejs-poster mejs-layer')[0] || getElementsByAttribute(mep,'div','class','mejs-poster mejs-layer')[0]
	  if (yt6.player1 && yt6.player1.captionsText) { var z = gc('mejs-captions-layer mejs-layer')[0]; if (z && !z.style.width) z.style.width = clone(yt6.w) }
	}

	if (poster && !yt6.ie7 && poster.getAttribute('style') && 1* poster.getAttribute('style').indexOf('("') > -1) {
	  poster.setAttribute('style', poster.getAttribute('style').split('("').join("('").split('")').join("')"));
	  if (yt6.poster.resize) poster_resize(1 * yt6.w.replace('px',''), 1 * yt6.h.replace('px',''), mep)
	}



	var watch = (vID(location.href)) ? true : false


	if (c[0]) {
	  if (c[0].html5 == false && player()) {
	    var flashvars = player().getAttribute('flashvars')
	  } else var flashvars = null;

	  if (c[1] && location.href.split('list=PL')[1] && !c[1].list) {
	    ytplayer.config.args.list = 'PL' + location.href.split('list=PL')[1].split('&')[0].split('/')[0]; clear_pls(clone(ytplayer.config.args.list))
	  }

	}




	if (!bm0 && !gid('bm01') && p && 
	     (p.getAttribute('class') || p.getAttribute('flashvars') || !c[0])
	   ) {

	  try {

		if (ytplayer.config.args.el) delete ytplayer.config.args.el
		ytplayer.config.args.csi_page_type = 'watch,watch7_html5'
		ytplayer.config.args.iv_allow_in_place_switch = (!yt6.oldbrowser) ? '0' : '1'

		//console.log('02 - Error on spf page change 12 '+document.title + yt6.change);

		try { yt6.player1.pause() } catch(e){}

		yt6.dom_tree_rebuild++; if (yt6.dom_tree_rebuild > 2) { 
		  if (yt6.player1) try { yt6.player1.setSrc('https://www.youtube.com/ptracking'); yt6.player1.load() } catch(e){}
		  if (yt6.player2) try { yt6.player2.setSrc('https://www.youtube.com/ptracking'); yt6.player2.load() } catch(e){}
		  if (mejs.mepIndex >= 95) {
		    mejs.players = null; delete mejs.players
		    mejs.mepIndex = 0; mejs.players = {}
		  }
		  yt6.dom_tree_rebuild = 0
		  mep_reload()
		}

	  } catch(e) { gc('clear')[0].setAttribute('id','ytp-conf-loading') };

	} else yt6.dom_tree_rebuild = 0



	var z = gc('clear')[0]
	  if (c[0]){
	    if (z && z.getAttribute('id') != 'ytp-conf-loaded'){
		if (c[0].loaded == true) {
		  z.setAttribute('id','ytp-conf-loaded')
		}
	     }
	  }


  if (!yt6.api && p && p.id == 'movie_player1') { p.setAttribute('id','movie_player'); p = player() }


  var p1 = gid('player1')


if (p) {

  yt6.ytp.api = (yt6.layout == 16 && yt6.api && yt6.api.id == 'container') ? yt6.api.parentNode.parentNode : yt6.api

  var z = p.getAttribute('class')
  if (typeof z == 'string') {
    var y = (!yt6.ytm) ? z.indexOf('ytp-fullscreen') : yt6.ytm.hasAttribute('player-fullscreened_')
    if (yt6.ytm) y = (y) ? 1 : -1
    if (y > -1) { //console.log('yt fullscreen on')
      yt6.ytp.fullscreen = true
	  if (yt6.api) {

	    try { yt6.ytp.marginTop = (document.getElementsByTagName('YTD-PAGE-MANAGER')[0].currentStyle || window.getComputedStyle(document.getElementsByTagName('YTD-PAGE-MANAGER')[0], null)) } catch(e){ yt6.ytp.marginTop = 0 }
	    if (yt6.ytp.marginTop && yt6.ytp.marginTop.marginTop) {
		yt6.ytp.marginTop = 1 * yt6.ytp.marginTop.marginTop.replace('px','')
	    } else { yt6.ytp.marginTop = 0 }

	  } else {
	      yt6.ytp.api = {}; yt6.ytp.marginTop = 0
	    }

      yt6.pstyle = (!yt6.pstyle) ? p.getAttribute('style') : yt6.pstyle
      var ytms = (yt6.ytm) ? 'width: 100%; height: 100%; ' : 'width: ' + screen.width + 'px; height: ' + screen.height + 'px; ' + ((yt6.wallpaper) ? 'background-color: transparent; ' : '')
      var pstyle = (!yt6.x) ? ytms + 'visibility: visible;' : ytms + 'visibility: hidden;'
      p.setAttribute('style', pstyle)
      if (yt6.ytm) {
	if (yt6.osw) {
	  if (screen.width / screen.height >= yt6.aspect_ratio) {
	    yt6.osw.style.width = (!yt6.ytm) ? '100%' : screen.width + 'px'; yt6.osw.style.height = 'auto'
	  } else {
	      yt6.osw.style.width = 'auto'; yt6.osw.style.height = (!yt6.ytm) ? '100%' : screen.height + 'px'
	    }
	}
	var y = ''
	if (typeof $ == 'function') {
	  var y = $('#song-image')
	  yt6.song_image = y = (y && y.css('display') != 'none') ? y.find('#thumbnail') : ''
	}
	var z = v_(p)
	if (z)
	if (screen.width / screen.height >= yt6.aspect_ratio || Math.abs(screen.width / screen.height - yt6.aspect_ratio) > 1) {
	  z.style.width = yt6.aspect_ratio * screen.height + 'px'; z.style.height = screen.height + 'px'; z.style.left = (screen.width - z.style.width.replace('px','')) / 2 + 'px'
	  if (y) { y.css('width', z.style.width); y.css('height', z.style.height); y.css('left', z.style.left) }
	} else {
	    z.style.width = screen.width + 'px'; z.style.height = screen.width / yt6.aspect_ratio + 'px'; z.style.top = (screen.height - z.style.height.replace('px','')) / 2 + 'px'
	    if (y) { y.css('width', z.style.width); y.css('height', z.style.height); y.css('top', z.style.top) }
	  }
      }

      if (p1 && !yt6.x) {
        p1.style.width = '100%'
        p1.style.height = '100%'
	if (yt6.ytm) { p1.style.left = '0px'; p1.style.top = '0px' }
      }
      //if (yt6.wna.parentNode != yt6.inf.parentNode) yt6.man.insertBefore(yt6.wna, yt6.inf.previousSibling.previousSibling)

      var wna = yt6.wna2 //(!(yt6.blocked && yt6.layout == 16)) ? yt6.wna : yt6.wna2
      if (gid(yt_alert_message) && gid(yt_alert_message).parentNode != wna) wna.insertBefore(gid(yt_alert_message), wna.firstChild)


      if (!yt6.x && yt6.ytp.fullscreen && yt6.ytp.api.parentNode.id == 'player-theater-container')
      try {
      //  pcont().style.setProperty('max-height', '', '') //yt6.ytp.api.parentNode.offsetHeight - yt6.ytp.marginTop + 'px','')
        yt6.tbg.style.display = 'none'
	if (yt6.wna) {
	  yt6.wna.style.marginTop = '0px'// (1 * yt6.wna.style.marginTop.replace('px','') + yt6.ytp.marginTop + 8) + 'px'
	}
	var tc = gid('player-theater-container')
	tc.style.width = screen.width + 'px'
	tc.style.top = ''
	tc.style.maxHeight = ''
	tc.style.minHeight = ''
      } catch(e){}


    } else { //console.log('yt fullscreen off')
	if (yt6.api && yt6.api.id == 'container' && yt6.api.style.width === '') yt6.api.style.width = '0px'
	if (yt6.song_image) try { yt6.ytm.querySelector('#song-image').querySelector('#thumbnail').setAttribute('style','background-color: transparent') } catch(e){}
	if (yt6.ytm) yt6.song_image = null
	if (yt6.ytp.fullscreen) {
	  //resize_layers(yt6.osw.style.width, yt6.osw.style.height)
	  aspect(yt6.size)
	  yt6.ytp.fullscreen = false
	    if (yt6.pstyle) {
		if (p) p.setAttribute('style', yt6.pstyle)
		delete yt6.pstyle
	    }
	  if (yt6.wna) yt6.wna.name = ''
	}
      }
  } else {
      if (!bm0 && yt6.x) var ads = null
    }



  if ((yt6.wide || gid('aspect')) && yt6.tbg) {
    if (yt6.size && yt6.size != 'default') { if (yt6.tbg.style.backgroundColor != 'rgb(16, 16, 16)') yt6.tbg.style.backgroundColor = 'rgb(16, 16, 16)' } else if (yt6.tbg.style.backgroundColor != 'black') yt6.tbg.style.backgroundColor = 'black';
  } else if (yt6.size == 'default') {
		if (yt6.tbg.style.backgroundColor != 'transparent') yt6.tbg.style.backgroundColor = 'transparent'

    }

if (typeof mpb == 'undefined') var mpb;
if (yt6.mpb && yt6.mpb.tagName == 'YTD-MINIPLAYER') {
  if (yt6.mpb.hasAttribute('active')) { // Opera error handling
    if (!mpb) try { mpb = yt6.mpb.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild } catch(e){}
    if (mpb && p.getAttribute('class').indexOf('ytp-player-minimized') > -1 && yt6.p.parentNode == pcont()) {
      mpb.insertBefore(bm0, mpb.firstChild)
      mpb.insertBefore(p, mpb.firstChild)
    }
  }
}
		if (!(yt6.body2 && yt6.layout == 12) && !shorts())
		if (yt6.flexy && watch && !yt6.navigation) if ( (!(yt6.fullscreen && !yt6.x) || (yt6.fullscreen && yt6.ytp.fullscreen && yt6.x)) && mep && (mep.style.width != '100%' || mep.style.height != '100%')) {

		  if (yt6.autoplay && yt6.pls) {
		     var z = gclass('playlist-items')[0]; // yt-scrollbar-dark style-scope ytd-playlist-panel-renderer
		     if (yt6.layout == 16 && !yt6.ytg && z && z.nextSibling && z.nextSibling.tagName == 'IRON-LIST' && z.nextSibling.id == 'items') {
		       z = z.nextSibling
		     }
		     if (z) {
		       if ((yt6.pls.ww && yt6.pls.ww != parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb ) ||
			   (yt6.pls.wh && yt6.pls.wh != parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight) )
			  ) {
			  //if (gc('index-message style-scope ytd-playlist-panel-renderer')[0] && gc('index-message-wrapper style-scope ytd-playlist-panel-renderer')[0] && !gc('index-message-wrapper style-scope ytd-playlist-panel-renderer')[0].hasAttribute('hidden')) fix_playlist();

		       } else if (z.scrollTop == 0)
			   if (z.innerHTML.indexOf('/watch?v=' + yt6.vid) != -1) {// || z.innerHTML.indexOf('>▶</span>') !== -1) {
				if (gc('index-message style-scope ytd-playlist-panel-renderer')[0] && gc('index-message-wrapper style-scope ytd-playlist-panel-renderer')[0] && !gc('index-message-wrapper style-scope ytd-playlist-panel-renderer')[0].hasAttribute('hidden'))
				  try { z.scrollTop = (z.innerHTML.split('/watch?v=' + yt6.vid)[1].split('translate3d')[1].split(' ')[1].split('px,')[0] - 64)
				  } catch(e){}
			   } else {}

		       yt6.pls.ww = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb
		       yt6.pls.wh = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)
		     }
		  }

		  var ww, x, y
		  if (yt6.api && yt6.size == 'default') if (!yt6.ytp.fullscreen) {
		    if (!(yt6.mpb && yt6.mpb.hasAttribute('active'))) {

		      var y = ((yt6.html5_fail && bm0 && Math.abs(bm0.offsetHeight - yt6.api.parentNode.parentNode.offsetHeight) > 1) || (bm0 && Math.abs(bm0.offsetHeight - yt6.api.parentNode.parentNode.offsetHeight) > 1)) ? clone(bm0.offsetHeight) : clone(yt6.api.parentNode.parentNode.offsetHeight)
		      if (!isNaN(1 * yt6.osw.style.height.replace('px','')) && 1 >= Math.abs(y - 1 * yt6.osw.style.height.replace('px',''))) y = 1 * yt6.osw.style.height.replace('px','')
		      var z = (yt6.osw.style.top) ? '; top: ' + yt6.osw.style.top : ''
		      yt6.osw.setAttribute('style', 'height: ' + y + 'px; left: ' + yt6.osw.style.left + z);
		
		    } else yt6.osw.style = ''; //important

		    var mhp = (yt6.layout != 16) ? yt6.mhp.offsetHeight : yt6.mhp.parentNode.parentNode.offsetHeight
		    var ww = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb
		    var wh = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)// - mhp - 8
		    if (yt6.pls && (ww < 1000 || !(document.getElementsByTagName('ytd-watch-flexy')[0] && document.getElementsByTagName('ytd-watch-flexy')[0].hasAttribute('is-two-columns_'))) ) {
		      if (gid(yt_alert_message) && gid(yt_alert_message).parentNode.parentNode != yt6.pls) yt6.pls.firstElementChild.insertBefore(gid(yt_alert_message), yt6.pls.firstElementChild.firstElementChild)
		    }

		    if (yt6.osw.w && (yt6.osw.offsetWidth && ((windowwidth + yt6.sb) < 1000) )) yt6.osw.style.width = (yt6.osw.w || yt6.osw.offsetWidth) + 'px'; //console.log(yt6.osw.style.height +' '+ yt6.api.parentNode.parentNode.id +' '+ yt6.api.parentNode.parentNode.offsetHeight +' '+ bm0.offsetHeight)

		    if (yt6.w && ( !(yt6.wide && yt6.w == ww + 'px') || (yt6.wide && yt6.ytp.fullscreen && yt6.x) ) && !(yt6.mpb && yt6.mpb.hasAttribute('active') && yt6.w == p.parentNode.offsetWidth + 'px') && typeof yt6.w.replace == 'function') {
		      var z = !(yt6.mpb && yt6.mpb.hasAttribute('active')) ? gid('player-container-inner') : yt6.api.parentNode.parentNode

		      if (z) { //console.log(Math.round((z.offsetWidth / z.offsetHeight).toFixed(3) * 100) +' '+ Math.round((yt6.w.replace('px','') / yt6.h.replace('px','')).toFixed(3) * 100) +' '+Math.round(yt6.aspect_ratio.toFixed(3) * 100) +' ' +p.tagName +' '+Math.abs(z.offsetHeight - 1 * yt6.h.replace('px',''))+' '+ Math.abs(yt6.h.replace('px','') - yt6.wh) +' '+ (z.offsetHeight - 1 * yt6.h.replace('px','')) )

//console.log(	z.offsetWidth +' '+ 1 * yt6.w.replace('px','') +' '+ yt6.h.replace('px','') +' '+ (yt6.w.replace('px','') / yt6.aspect_ratio) +' '+ p.style.left +' '+ (Math.abs(z.offsetWidth - 1 * yt6.w.replace('px','')) > 1) +' '+ yt6.wide	)
//console.log(	p.tagName != 'EMBED' && Math.abs( Math.round((z.offsetWidth / z.offsetHeight).toFixed(3) * 100) - Math.round((yt6.w.replace('px','') / yt6.h.replace('px','')).toFixed(3) * 100) ) > 1	)
//console.log( Math.abs( Math.round((z.offsetWidth / z.offsetHeight).toFixed(3) * 100) - Math.round((yt6.w.replace('px','') / yt6.h.replace('px','')).toFixed(3) * 100) ) )
//console.log(	p.tagName == 'EMBED' && (					 Math.round(yt6.aspect_ratio.toFixed(3) * 100) !=  Math.round((yt6.w.replace('px','') / yt6.h.replace('px','')).toFixed(3) * 100)					 || Math.round((z.offsetWidth / z.offsetHeight).toFixed(3) * 100) != Math.round((yt6.w.replace('px','') / yt6.h.replace('px','')).toFixed(3) * 100)) && (yt6.inf.offsetWidth != (2 * yt6.osw.style.left.replace('px','') + 1 * yt6.w.replace('px','')) ) )
//console.log(	Math.abs(z.offsetHeight - 1 * yt6.h.replace('px','')) > 30 && (Math.round((z.offsetWidth / z.offsetHeight).toFixed(3) * 100) == Math.round(yt6.aspect_ratio.toFixed(3) * 100) )		)

//console.log(yt6.inf.offsetWidth +' '+ yt6.w +' '+yt6.h +' '+yt6.w.replace('px','') / yt6.h.replace('px',''))

		      if ( (yt6.navigation && yt6.browser_tab == 'visible') ||
			  ((yt6.wide && 
			    ( (z.offsetWidth != 1 * yt6.w.replace('px','') && p.tagName != 'EMBED' && (p.style.left !== '')) || //p.style.left !== '0px' && 
			      (z.offsetHeight == 0 && 1 * yt6.w.replace('px','') < ww && yt6.h.replace('px','') != yt6.w.replace('px','') / yt6.aspect_ratio)
			    )
			   ) ||
			   (!yt6.wide && typeof yt6.aspect_ratio == 'number' && (Math.abs(z.offsetWidth - 1 * yt6.w.replace('px','')) > 1) &&
			     yt6.inf && //!(yt6.inf.offsetWidth >= 1 * yt6.w.replace('px','') && 425 >= Math.round(yt6.w.replace('px','')) ) && //mw
			    (
			      ( (p.tagName != 'EMBED' &&
					   Math.abs( Math.round((z.offsetWidth / z.offsetHeight).toFixed(3) * 100) - Math.round((yt6.w.replace('px','') / yt6.h.replace('px','')).toFixed(3) * 100) ) > 1
				)
				  || 
			        (p.tagName == 'EMBED' &&
				      (	   Math.abs ( Math.round(yt6.aspect_ratio.toFixed(3) * 100) -  Math.round((yt6.w.replace('px','') / yt6.h.replace('px','')).toFixed(3) * 100) ) > 1
					|| Math.abs ( Math.round((z.offsetWidth / z.offsetHeight).toFixed(3) * 100) - Math.round((yt6.w.replace('px','') / yt6.h.replace('px','')).toFixed(3) * 100) ) > 1
				      ) && (yt6.inf.offsetWidth != (2 * yt6.osw.style.left.replace('px','') + 1 * yt6.w.replace('px','')))
				)
			      ) ||
			      ( ( Math.abs(z.offsetHeight - 1 * yt6.h.replace('px','')) > 10 ||
				  (1 * yt6.w.replace('px','') > yt6.inf.offsetWidth)
				) && 1 >= Math.abs( (Math.round((z.offsetWidth / z.offsetHeight).toFixed(3) * 100) - Math.round(yt6.aspect_ratio.toFixed(3) * 100)) )
			      )

			    )
			   )
			 )) { // player height tends to not be exact in Chrome, need some redundancy with the check here, say 10px

			//console.log((z.offsetWidth / z.offsetHeight).toFixed(9) +' '+ (yt6.w.replace('px','') / yt6.h.replace('px','')).toFixed(9) + ' ? '+z.offsetWidth + ' ' + yt6.w.replace('px','') +' ? ' + z.offsetHeight +' '+ yt6.h.replace('px','') + ' '+ yt6.w.replace('px','') / yt6.aspect_ratio + ' '+yt6.inf.offsetWidth +' '+ (2 * yt6.osw.style.left.replace('px','') + 1 * yt6.w.replace('px','') ) +' '+yt6.api.parentNode.id + yt6.api.id + gid(yt_alert_message).parentNode.id)

			var w = (z.offsetWidth || ww)
			var w = (yt6.size != 'default' || (yt6.size == 'default' && yt6.wide)) ? Math.min( Math.round(((wh / 100 >>0) * 80) * yt6.aspect_ratio), ww) : Math.min( Math.round(wh * yt6.aspect_ratio), w)
			//if (yt6.mpb && yt6.mpb.hasAttribute('active')) yt6.w = p.parentNode.offsetWidth + 'px'
			if (yt6.size == 'default' && yt6.mpb && yt6.mpb.hasAttribute('active')) w = Math.min(yt6.api.parentNode.parentNode.offsetWidth, 1 * yt6.w)
			yt6.w = w + 'px'


			yt6.h = (!(yt6.mpb && yt6.mpb.hasAttribute('active'))) ? Math.floor(yt6.w.replace('px','') / yt6.aspect_ratio) + 'px' : Math.floor(yt6.w.replace('px','') / (16/9)) + 'px'

			if (!yt6.wide) {
			  if (1 * yt6.h.replace('px','') - 0 > Math.round(((wh - yt6.mhp.offsetHeight - 8) / 100 >>0) * 80) ) {
			    var z = z.offsetHeight
			    yt6.h = z + 'px'
			    //if (!(p.tagName == 'EMBED')) yt6.w = z * yt6.aspect_ratio + 'px'
			  }
			} else if (yt6.layout == 16 && !yt6.ytm && !yt6.mobile && yt6.size == 'default') {
			    yt6.w = ww + 'px'
			  }


			resize_layers(yt6.w, yt6.h, true); //console.log('flexible player dynamic rescaling occurs here: '+yt6.w +' '+yt6.h)

		      } else {

			  if (yt6.inf.offsetWidth != (2 * yt6.osw.style.left.replace('px','') + 1 * yt6.w.replace('px','')) )
			  if (yt6.aspect_ratio >= 1) {
			    if (yt6.aspect_ratio > 1 && yt6.osw.style.left != '0px') { yt6.osw.style.left = '0px' }
			  } else if (yt6.osw.style.left != (yt6.inf.offsetWidth - 1 * yt6.w.replace('px','')) / 2 + 'px') {
			      yt6.osw.style.left = (yt6.inf.offsetWidth - 1 * yt6.w.replace('px','')) / 2 + 'px'
			    }

			}

		      }
		      // must be set after dynamic rescaling finished
		      if (yt6.osw.w && yt6.osw.w != yt6.osw.style.width) { yt6.osw.style.width = clone(yt6.osw.w) }
		    }
		  } else 
		      if (yt6.ytp.fullscreen && yt6.x && p1 && !(p1.offsetWidth == screen.width || p1.offsetHeight == screen.height)) {
			resize_layers(screen.width + 'px', screen.height + 'px'); 
			if (bm0) {
			  bm0.style.width = '100%'
			  bm0.style.height = '100%'
			}
			if (mep) {
			  mep.style.width = '100%'
			  mep.style.height = '100%'
			}
		      }

			//if (yt6.mpb.tagName == 'YTD-MINIPLAYER' && gid(yt_alert_message).parentNode.parentNode.parentNode.getAttribute('class').indexOf('miniplayer') > -1) 
			var ytam = gid(yt_alert_message), wna = yt6.wna2, ww = ww || parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb;
			if (yt6.pls && typeof yt6.pls.ww == 'number') ww = yt6.pls.ww
			//if (!yt6.pls && ytam && ytam.parentNode != wna) wna.insertBefore(ytam, wna.firstChild)
			if (ytam)
			if (yt6.flexy && (ww < 1000 || !(document.getElementsByTagName('ytd-watch-flexy')[0] && document.getElementsByTagName('ytd-watch-flexy')[0].hasAttribute('is-two-columns_'))) && yt6.pls && yt6.pls.firstElementChild) {
			  if (ytam != yt6.pls.firstElementChild.firstElementChild) yt6.pls.firstElementChild.insertBefore(ytam, yt6.pls.firstElementChild.firstElementChild)
			} else if (wna && wna.parentNode && ytam != wna.firstChild) { wna.insertBefore(ytam, wna.firstChild) }

		}// flexible player only

}//(p)


//if (p) console.log('poffw: '+ p.offsetWidth + ', scrw: ' + screen.width + ', poffh: ' + p.offsetHeight + ', scrh: ' + screen.height + ', mepoffw: '+ mep.offsetWidth + ', mepoffh: ' +  mep.offsetHeight)


	var autoscale; if (yt6.layout == 12) autoscale = gid('placeholder-player')
	if (!autoscale) autoscale = (gid('player-api')) ? gid('player-api').parentNode : null;
	var windowwidth, windowheight


	if ( autoscale != null && gc('mejs-clear')[0] && !yt6.ytg && //(yt6.layout == 12 || yt6.size == 'default' || (yt6.blocked && yt6.age.count > 0)) &&//
	    (
	      (
		 ( (ads == -1) || (p1 && p1.style.width != '100%' && p1.style.height != '100%') )

	      ) &&
		!(p1 && p1.offsetWidth == windowwidth && p1.offsetHeight == windowheight)
		&&
		p && p.offsetWidth != screen.width && p.offsetHeight != screen.height && mep != null &&
		  ((mep.offsetWidth != screen.width) &&
		   (mep.offsetHeight != screen.height)
		  )
	    )
	   ) {


	    if (!yt6.skeleton && !yt6.ytg) {

	      if ((autoscale.offsetWidth != autoscale.width) && (autoscale.offsetHeight != autoscale.height)) {
		autoscale.width = autoscale.offsetWidth;
		autoscale.height = autoscale.offsetHeight;
		if (bestfit()) {
		  if (bm0 && gid('aspect')) {
		    resize_layers(gid('a_width').value + 'px', gid('a_height').value + 'px', false)
		  }
		}

	      } else {
		  if (autoscale.offsetHeight != autoscale.height) {
		    autoscale.height = autoscale.offsetHeight;
		    if (bestfit()) {
		      if (bm0 && gid('aspect')) {
			resize_layers(gid('a_width').value + 'px', gid('a_height').value + 'px', false)
		      }
		    }
		    if (!gid('aspect')) {
		      if (yt6.wsb && (yt6.wsb.currentStyle || window.getComputedStyle(yt6.wsb)).marginLeft == '0px') {
			if (bestfit()) {
			  if (bm0) {
			    resize_layers(gid('a_width').value + 'px', gid('a_height').value + 'px', false)
			  }
			} 
		      }
		    }
		  } else {
		      if (autoscale.offsetWidth != autoscale.width) {
			autoscale.width = autoscale.offsetWidth;
			if (bestfit()) {
			  if (bm0 && gid('aspect')) {
			    resize_layers(gid('a_width').value + 'px', gid('a_height').value + 'px', false)
			  }
			}
		      }
		    }
		}

	    }


	    if (!yt6.x && !yt6.navigation && !yt6.controls_pushed && p && typeof p.getPlayerState == 'function' && p.getAttribute('flashvars') == null) {
	      var z = gc('video-stream html5-main-video')
	      if (typeof z[0] != 'undefined') {
		if (yt6.yt_prop && yt6.propName) {
		  var x = yt6.propName
		  if (typeof yt6.yt_z == 'number' && typeof yt6.yt_r == 'number' && z[0].style[x] && (Math.abs(yt6.yt_z) > 0 || Math.abs(yt6.yt_r) > 0))
		    if (yt6.yt_prop && yt6.yt_prop != z[0].yt_prop && (!z[0].yt_prop || (z[0].yt_prop && (z[0].yt_prop.indexOf('scale('+ (yt6.yt_z.toFixed(1))) == -1 || z[0].yt_prop.indexOf('rotate('+ yt6.yt_r) == -1))) ) {
		      z[0].yt_prop = clone(yt6.yt_prop)
		    } else if (z[0].yt_prop) {
		        z[0].style[x] = z[0].yt_prop
		      }

		}
	      }
	    }

	} else {
	    //console.log(yt6.fullscreen+' mep: '+mep.offsetWidth + ' '+screen.width +' '+ mep.offsetWidth + ' '+screen.width +' p1: '+p1.style.width +' '+p1.style.height)

	    if (yt6.fullscreen != true && mep != null && mep.offsetWidth != screen.width && mep.offsetHeight != screen.height && yt6.size != 'media'){
	      if (!yt6.ytg) {
		yt6.fullscreen = true
		if (gid('player1') != null) {
		  if (yt6.x) gid('player1').style.left = '0px'
		  var z = gc('mejs-captions-text')[0]
		  if (z) {
		    z.style.fontSize = Math.ceil(screen.height / 23) + 'px'
		    z.parentNode.parentNode.style.height = 'auto'
		  }
		  var z = gc('mejs-overlay mejs-layer mejs-overlay-play')[0]
		  if (z) {
		    var webgl = z.firstChild.currentStyle || window.getComputedStyle(z.firstChild, null)
		    z.style.width = webgl.width.replace('%','px')
		    z.style.height = webgl.height.replace('%','px')
		    var x = (p1) ? p1.offsetWidth : screen.width
		    var y = (p1) ? p1.offsetHeight : screen.height
		    if (x && y) {
		      z.style.left = (x - webgl.width.replace('px','')) / 2 + 'px'
		      z.style.top = (y - webgl.height.replace('px','')) / 2 + 'px'
		      var l = gc('mejs-overlay mejs-layer')[0]
		      if (l) {
		        l.style.width = z.style.width
		        l.style.height = z.style.height
		        l.style.left = ''
		        l.style.top = ''
			  }
		    }
		  }
	        }
	      }
	      if (p) {
		if (p.tagName != 'IFRAME' && p.style.visibility != 'hidden' && p.style.width != '') {
		  p.removeAttribute('style');
		}
		
		var webgl = get_webgl()
		if (webgl) {
		  webgl.removeAttribute('style')
		  webgl.parentNode.style.left = -1 * webgl.parentNode.parentNode.style.left.replace('px','') + 'px'
		  webgl.parentNode.style.top = -1 * webgl.parentNode.parentNode.style.top.replace('px','') + 'px'
		}
	      }
	    } //else if (mep && 1 * mep.getAttribute('class').indexOf('mejs-container-fullscreen') == -1) yt6.fullscreen = false

	  }


      if (yt6.player1) {
	if (yt6.layout == 12) {
	  yt6.fullscreen12 = (yt6.Seek == 3) ? false : !yt6.fullscreen12
	}
      }

      if (yt6.layout == 12 && yt6.fullscreen && yt6.Seek == 3 && autoplay(false)) { //console.log(yt6.player1.isFullScreen +' '+ yt6.Seek +' '+yt6.fullscreen12)

	  if (yt6.layout == 12 && yt6.Seek == 3 && yt6.fullscreen && !yt6.fullscreen12 && autoplay(false)) {
	    try {

		if (bm0.parentNode != yt6.api) { unhide(bm0) }

		// in Firefox, screen size (?) is always equal to the size of the player element viewed in "fullscreen mode" (which is not always actual fullscreen)
		// while in Chrome the screen size and the offset values differ by the attached Developer Console's dimensions
		if (browserName == 'Firefox') {
		  aspect('theater') // needed in Firefox
		}

		yt6.player1.enterFullScreen()

		if (p1) {
		  p1.style.width = '100%'
		  p1.style.height = '100%'
		}
		yt6.fullscreen12 = true

	    } catch(e){}
	  }

      } else

	if ( bm0 && yt6.fullscreen == true && p1 && p1.style.width != '100%' && p1.style.height != '100%' && !yt6.fullscreen12 ) { //console.log('p1 fullscreen off')

	  if (!(yt6.player1 && yt6.player1.isFullScreen)) {

	    yt6.fullscreen = false
	    if (yt6.pstyle) {
		if (p) p.setAttribute('style', yt6.pstyle)
		delete yt6.pstyle
	    }
	    if (!yt6.ytp.fullscreen) {
	      yt6.api.style.width = 'auto'; yt6.api.style.height = 'auto' // so captions would be resized correctly
	      if (gid('aspect')) {
	        resize_layers(gid('a_width').value + 'px', gid('a_height').value + 'px', true)
	      } else {
		  if (yt6.mobile) { aspect(yt6.size) } else
		  resize_layers(bm0.style.width || yt6.w, bm0.style.height || yt6.h)
		}
	    }
	    if (yt6.layout != 12) { yt6.api.style.width = screen.width + 'px'; yt6.api.style.height = screen.height + '' } // yt fullscreen gets blank if these remain 'auto'
	    if (p) {
	      p.style.width = bm0.style.width
	      p.style.height = bm0.style.height
	    }

	  }

	} else {

            if (bm0 && p1 && p1.style.width == '100%' && p1.style.height == '100%' && !yt6.fullscreen12 && !yt6.ytp.fullscreen && !(yt6.mobile && shorts()) ) { //console.log('p1 fullscreen on')

		yt6.fullscreen = true
		if (poster) { poster.style.marginTop = ''; poster.style.marginLeft = '' }
		if ($) { $.data(bm0, 'hover', false); yt6.player1.options.alwaysShowControls = false }
		if (yt6.x) p1.style.left = '0px'
		  var z = gc('mejs-captions-text')[0]
		  if (z) {
		    z.style.fontSize = Math.ceil(screen.height / 23) + 'px'
		    z.parentNode.parentNode.style.height = 'auto'
		  }
		var z = gc('mejs-overlay mejs-layer mejs-overlay-play')[0]
		if (z) {
		  var webgl = z.firstChild.currentStyle || window.getComputedStyle(z.firstChild, null)
		  z.style.width = webgl.width.replace('%','px')
		  z.style.height = webgl.height.replace('%','px')
		  var x = (p1) ? p1.offsetWidth : screen.width
		  var y = (p1) ? p1.offsetHeight : screen.height
		  if (x && y) {
		    z.style.left = (x - webgl.width.replace('px','')) / 2 + 'px'
		    z.style.top = (y - webgl.height.replace('px','')) / 2 + 'px'
		    var l = gc('mejs-overlay mejs-layer')[0]
		    if (l) {
		      l.style.width = z.style.width
		      l.style.height = z.style.height
		      l.style.left = z.style.left
		      l.style.top = z.style.top
			}
		  }
	        }

		z = gc('mejs-sourcechooser-selector')[0]
		if (z && z.firstChild && Math.abs(z.firstChild.offsetHeight - z.offsetHeight > 50)) resize_layers(screen.width +'px', screen.height + 'px');

		if (p) {
		  if (p.tagName != 'IFRAME' && p.style.visibility != 'hidden' && p.style.width != '') {
		    p.removeAttribute('style')
		  }
		
		  var webgl = get_webgl()
		  if (webgl) {
			webgl.removeAttribute('style')
			webgl.parentNode.style.left = -1 * webgl.parentNode.parentNode.style.left.replace('px','') + 'px'
			webgl.parentNode.style.top = -1 * webgl.parentNode.parentNode.style.top.replace('px','') + 'px'
		  }
		}
            } else if (yt6.ytp.fullscreen && yt6.api && yt6.api.style.width == '0px') {
		resize_layers(screen.width + 'px', screen.height + 'px')
		yt6.api.style.width = ''
	      }
	  }


	if (yt6.mobile) {

	  if (typeof screen.orientation.onchange != 'function' && window.matchMedia("(orientation: portrait)")) {

	    yt6d.orientation = clone(window.orientation)
	    yt6d.proxy.orientation = yt6d.orientation

	    screen.orientation.onchange = function() {
		if (yt6d) {
		  if (yt6d.orientation === 0) { // portrait to landscape values can be 90, -90 or 270
		    yt6d.orientation = (screen.orientation.angle) ? clone(screen.orientation.angle) : ((window.orientation) ? clone(window.orientation) : 90) //-90 (w.o) == 270 (s.o.a)
		  } else if (screen.orientation.angle === 0 || window.orientation === 0 || !yt6d.orientation) {
		      yt6d.orientation = 0
		    }
		}
		if (yt6) {
		  if (yt6.fullscreen) {
		    var p1 = gid('player1'); if (p1) { p1.style.width = '100%'; p1.style.height = '100%' }
		  } else {
		      if (document.activeElement.parentNode.parentNode.id != 'aspect') { aspect(yt6.size) }
		      if (yt6.mobile && yt6.pls) { scrollToCurrentVideo(); set_controls() }
		    }
		  var z = (yt6.mobile) ? gid('player-container-id') : null
		  if (z) z.className = (!yt6d.orientation) ? 'player-container sticky-player' : 'player-container'
		}

	    }

	    yt6d.orientation_set = 0
	    window.matchMedia("(orientation: portrait)").addListener(screen.orientation.onchange)

	  }


	  if (yt6d && typeof window.orientation == 'number' &&
	       !( yt6d.orientation == window.orientation
		 || (screen.orientation && yt6d.orientation == screen.orientation.angle)
		)
	     ) {// && !yt6d.proxy.orientation
	    screen.orientation.onchange()
	    //console.log(screen.orientation)
	    //if (yt6d.orientation_set == false) {
		//yt6d.orientation = clone(window.orientation)
	    //}
	  }

	}



	if (yt6.pls) {
	  if (yt6.layout == 12) {
	    if (yt6.btn && yt6.btn.autoplay && yt6.btn.autoplay.getAttribute('class').indexOf('yt-uix-button-toggled') == -1 && yt6.autoplay == true) { yt6.btn.autoplay.click() }
	    if (yt6.btn && yt6.btn.shuffle && yt6.btn.shuffle.getAttribute('class').indexOf('yt-uix-button-toggled') == -1 && yt6.shuffle == true) { yt6.btn.shuffle.click() }
	  } else {
	      if (yt6.autoplay == true && yt6.btn && yt6.btn.autoplay &&
		  ((typeof yt6.btn.autoplay.parentNode.getAttribute == 'function' && yt6.btn.autoplay.parentNode.getAttribute('aria-pressed') == 'false') ||
		   (yt6.btn.autoplay.parentNode.parentNode.parentNode.parentNode.parentNode.tagName == 'YTD-PLAYLIST-LOOP-BUTTON-RENDERER' && yt6.btn.autoplay.getElementsByTagName('path')[0] && typeof yt6.btn.autoplay.getElementsByTagName('path')[0].getAttribute('d') == 'string' && yt6.btn.autoplay.getElementsByTagName('path')[0].getAttribute('d').indexOf('M21,') == 0)
		 )) { yt6.autoplay = !yt6.autoplay; yt6.btn.autoplay.click() }
	      if (yt6.shuffle == true && yt6.btn && yt6.btn.shuffle && yt6.btn.shuffle.parentNode.getAttribute('aria-pressed') == 'false') { yt6.shuffle = !yt6.shuffle; yt6.btn.shuffle.click() }
	    }
	}


	if (yt6.mode != yt6.wide) {
	  if (yt6.flexy) aspect('default') // && !yt6.wide
	  if (bestfit()) {
	    if (bm0 && gid('aspect')) {
	     resize_layers(gid('a_width').value + 'px', gid('a_height').value + 'px', false)
	    }
	  }
	  yt6.mode = clone(yt6.wide)
	}


	if (yt6.tbg && yt6.tbg.offsetWidth != yt6.tbg.width) {
	  yt6.tbg.width = yt6.tbg.offsetWidth
	  if (yt6.wide) yt6.tbg.setAttribute('hidden','')
	}

	if (!yt6.wide && !shorts()) {
	  var z = document.getElementsByTagName('ytd-player')[0]
	  if (z) { z.style.height = !(yt6.fullscreen || yt6.ytp.fullscreen) ? yt6.h : z.parentNode.parentNode.offsetHeight + 'px' }//: 'auto'
	}

	var z = gid('toast')
	if (z && z.tagName == 'PAPER-TOAST' && z.getAttribute('class') && z.getAttribute('class').indexOf('click-through-this') == -1) { z.setAttribute('class', z.getAttribute('class') + ' click-through-this'); }





if (yt6.layout == 12) {

  var z = gid('unavailable-submessage')

  if (z && z[yt6.txt] && z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '') {

  }

}

//3ended
if ((yt6.ytp.embed || yt6.layout == 16) && !yt6.ytm && p &&
     ( (typeof p.getPlayerState == 'function' && (yt6.blocked || yt6.age.blocked || yt6.ytp.embed))
	|| (p.tagName == 'IFRAME' && yt6.embed && yt6.embed.player && typeof yt6.embed.player.getPlayerState == 'function')
   ) ) {

  var z = (p.tagName == 'IFRAME' && yt6.embed && yt6.embed.player && typeof yt6.embed.player.getPlayerState == 'function') ? yt6.embed.player : p

  if (z.getCurrentTime() > 0 && z.getPlayerState() == 0) {

    if (yt6.blocked || yt6.age.blocked || (!yt6.blocked && !yt6.age.blocked && !yt6.age.count)) {
	//undo_iframe()
	var vid2
	try {
	  vid2 = vID(z.getVideoUrl())
	} catch(e){}

     if (!yt6.ytp.embed) {

      if ((vid2 && location.href.indexOf(vid2) == -1) || (yt6.embed && z == yt6.embed.player)) {

	undo_iframe()
	swap_player()

      } else {

	  try { z.pauseVideo() } catch(e){}
	  var p0 = document.getElementById('video-hide')
	  if (p0) p0 = yt6.original || p0.querySelector('#movie_player') || p0.querySelector('#movie_player_orig') || p0.querySelector('#movie_player0')
	  if (p0 && vid2 && location.href.indexOf(vid2) > -1) {
	    undo_iframe()
	    swap_player()
	    p0.setAttribute('name','original')
	    yt6.api.insertBefore(p0, yt6.api.firstChild)
	    p = player(), p = yt6.p
	  }

	if (yt6.pls && !yt6.navigation) {
 	  fix_playlist()
	  $waitUntil(function(){ var y = yt6.pl_index, zi = yt6.pl_next; if ((typeof y == 'number' && zi) || yt6.layout == 12 || !yt6.pls) { return true } else pl_item() },
	  function() { var p = player(), p = yt6.p;
	    if (p && typeof p.playVideoAt == 'function' && p.getAttribute('class') != 'forced flashplayer') { var mp = p }
	    else { var mp = yt6.original || original(p) }
	    try { yt6.navigation = true
	    if ((!yt6.shuffle && !yt6.ytg) || yt6.layout == 12) {
	      if (yt6.pls) {
		try { yt6.pl_next.click() } catch(e) { mp.nextVideo('0') }
	      } else mp.nextVideo('0')
	    } else {
		if (p == mp) {
		  if (!yt6.ytg || yt6.pre_ad) { mp.playVideoAt((1*yt6.pl_index)+1) || mp.nextVideo('0'); } else try { mp.seekTo(mp.getDuration()); mp.playVideo()} catch(e) { mp.nextVideo('0')}
		} else {
		    try {
		      $waitUntil(function(){if (location.href.indexOf(yt6.vid) == -1) { return true } else {
			mp.stopping = false; FireEvent2(mp, 'mouseup'); mp.seekTo(mp.getDuration()); if (!yt6.ad_muted) mp.mute(); mp.playVideo(); mp.pauseVideo(); if (!yt6.ad_muted) mp.unMute();
		      } },
			function(){},250,1000)
		    } catch(e) { yt6.navigation = false }
		  }
	    }
	    } catch(e) { yt6.navigation = false }
	    $waitUntil(function(){ var s = -1; if (!(yt6.ytm && player() && yt6.p.tagName == 'EMBED')) try { s = yt6.p.getPlayerState() } catch(e){ s = -1 }; if (s != -1 && s != 1) return true }, function(){ if (!yt6.x) try { yt6.p.playVideo() } catch(e){} },1000,6000)
	  },250,1500)
	}

      }
	yt6.age.count = 0
	yt6.age.blocked = false

     } else { }

    }
  }
}

// flash autoplay handling -- (the function methods of flash are inaccessible on Music layout, hence no way to detect programmatically when a video ended to initiate a jump to the next one, it has to be done manually)
if ( ( !yt6.ytm && !yt6.flash.delay && (yt6.flash.forced || (p && p.tagName == 'EMBED' && p.getAttribute('class') == 'forced flashplayer')) )
   ) {

  if (!yt6.navigation && ((!yt6.x && p && typeof p.getPlayerState == 'function' &&  ( (p.getPlayerState() == 0 && p.getCurrentTime() >= p.getDuration()))  )) )
    if (autoplay()) {//(yt6.x && yt6.player1.media.paused && yt6.loaded_media_duration && yt6.ct >= yt6.loaded_media_duration - 1) || 
					          yt6.navigation = true
					          var z = gclass('yt-uix-scroller-scroll-unit')
						  if (z && z[0]) {
						    for(i=0;i<z.length;i++) if (z[i] && z[i].getAttribute('class') && z[i].getAttribute('class').indexOf('currently-playing') != -1) if (z[i+1]) {
								var y = z[i+1].children
								for(j=0;j<y.length;j++) if (y[j].getAttribute('href')) {
								  yt6.navigation = true
								  if (typeof y[j].click == 'function') { y[j].click() } else { FireEvent2( y[j], 'click') }
								}
							      }
						  } else {
						    var z = gid('playlist') || gc('style-scope ytg-playlist-panel-renderer')[0]
						    if ((z && z.style.display != 'none') || (z && yt6.ytg)) {
						      if (!yt6.ytg) {
						        var z = document.getElementsByTagName('YTD-PLAYLIST-PANEL-SUPPORTED-ITEMS')
						        if (!z[0]) z = document.getElementsByTagName('YTD-PLAYLIST-PANEL-VIDEO-RENDERER')
						      } else var z = gc('style-scope ytg-playlist-panel-video-renderer x-scope ytg-nav-endpoint-5')
						      if (z && z[0]) {
							var mix = gclass('flex style-scope ytd-playlist-panel-renderer x-scope ytd-menu-renderer-0')
							for(i=0;i<z.length;i++) if (z[i]) {
							  var zi = z[i].getElementsByTagName('A')[0]
							  if (zi && zi.getAttribute('href') != null) {
							    var x = vID(zi.getAttribute('href')).split('&')[0]
							    if (z[i].innerHTML.indexOf('/watch?v=' + yt6.vid) != -1 || (mix[0] && mix[0].hasAttribute('hidden') || z[i].parentNode.hasAttribute('selected')) && c[1] && c[1].video_id == x ) {
								if (gid('bm0') && yt6.x) {
								  yt6.x = true
								} else {
								    yt6.x = false
								  }
								var y = (!yt6.ytg) ? zi.getAttribute('href').split('&index=')[1].split('&')[0] - 0 + 1 : zi.innerHTML.split('<span class="style-scope ytg-formatted-string">')[1].split('</span>')[0]
								if (typeof y == 'number' || y == '▶') break
							    }
							  }
							}
						        if (y) {
						          if (!yt6.ytg) { var next_blocked = null
							    var y = new RegExp('&index=' + y + '')//[^0-9]
							    for(i=0;i<z.length;i++) {
							      var zi = z[i].getElementsByTagName('A')[0]
							      if (zi && zi.getAttribute('href') != null && (zi.getAttribute('href').match(y) != null || next_blocked)) {
								var img = zi.getElementsByTagName('img')[0]
								next_blocked = (img && typeof img.src == 'string' && img.src.indexOf('//s.ytimg.com/yts/img/meh_mini-vfl0Ugnu3.png') > -1) ? true : false
								if (!(zi.getAttribute('href').match(y) != null && next_blocked)) break
							      }
							    };
							    if (!yt6.shuffle) { zi.click() } else {
								if (p && typeof p.playVideoAt == 'function' && p.getAttribute('class') != 'forced flashplayer') { var mp = p } else { var mp = yt6.original = getElementsByAttribute(yt6,'div','name','original')[0] }
								try {
								if (mp && typeof mp.nextVideo == 'function' && mp == p) {
								  try { yt6.navigation = true; mp.playVideoAt((1*yt6.pl_index)+1) || mp.nextVideo('0') } catch(e){ yt6.navigation = false }
								} else if (!yt6.navigation)
									try { yt6.navigation = true;
									  $waitUntil(function(){if (location.href.indexOf(yt6.vid) == -1) { return true } else {
									    mp.stopping = false; FireEvent2(mp, 'mouseup'); mp.seekTo(mp.getDuration()); if (!yt6.ad_muted) mp.mute(); mp.playVideo(); mp.pauseVideo(); if (!yt6.ad_muted) mp.unMute();
									  } },
									  function(){},250,1000)
									} catch(e) { yt6.navibation = false }
								} catch(e) { yt6.navigation = false }
							    }
							  } else z[i+1].firstChild.click()
							} //else player().nextVideo('0')
						      }
						    }
						    }
    }
}



if (yt6.flash.forced && p && p.tagName == 'EMBED') {
  var u = gid('movie_player_to_dispose')
  if (u) for(var i in u.childNodes) {
    var x = u.childNodes[i]
    if (typeof x.getAttribute == 'function' && x.getAttribute('name') != 'replacement' && (x.getAttribute('id') == 'movie_player0' || x.getAttribute('name') == 'movie_player' || x.getAttribute('name') == 'original' || x.className.indexOf('YouTube_TM') > -1) ) {//!x.getAttribute('time') && 
	if (x.className.indexOf('YouTube_TM') == -1 && !x.getAttribute('time')) { yt6.flash.flag = 1 } //else if (x.style.display == 'none' && yt6.flash.timer == 0) x.style.display = 'block'
	if (isNaN(x.stopping)) x.stopping = 0

	var y = x.getAttribute('class')
	if (x.tagName == 'DIV' && y && y.indexOf('forced html5player') == -1) {//y != 'YouTube_TM' && y.indexOf('YouTube_TM') != -1 && 
	  x.setAttribute('name','original')
	  y = x.getElementsByClassName('ytp-miniplayer-ui')
	  while (y && y[1]) { x.removeChild(y[1]) }
	} //else x.parentNode.removeChild(x)

	//if (x.stopping > 0 && typeof x.getPlayerState == 'function' && !(yt6.ytm && x.tagName == 'EMBED') && x.getPlayerState() == 1) try { x.pauseVideo(); v_(x).pause() } catch(e) {}
	if (x.stopping > 0) {
	  if (p)
	  if (p.style.display != 'inline-block' || p.getAttribute('src') != yt6.flash.swfbin4) {// || (typeof p.getPlayerState != 'function')) { // && bm0
	    if (p.getAttribute('src') != yt6.flash.swfbin4) {// && p.style.display != 'none') {
	      p.setAttribute('src', yt6.flash.swfbin4)
	      if (typeof p.nextVideo == 'undefined') { p.style.display = 'none' }
	    } else {
		p.style.display = 'inline-block'//block
	      }
	  }
	  if (typeof x.getPlayerState == 'function' && !(yt6.ytm && x.tagName == 'EMBED') && x.getPlayerState() == 1) try { x.pauseVideo(); v_(x).pause() } catch(e) {
	    if (x.firstChild) {
	      var y = v_(x)
	      if (y && y.getAttribute('src')) { y.setAttribute('src',''); y.removeAttribute('src') }
	    }
          }
        } else { x.stopping++ }
    }
  }
}


if (yt6.layout == 16 && yt6.mpb && !yt6.ytm && !yt6.ytg) {


    var on = false
    if (yt6.mpb.hasAttribute('active')) {
		var z = gid('movie_player_to_dispose')
	        if (z && z.childNodes) {
		  z = z.childNodes
		  for(i=0;i<z.length;i++) {
		    if (z[i] && typeof z[i].getPlayerState == 'function' && z[i].getPlayerState() == 1) {
			try { z[i].pauseVideo() } catch(e){}
		    }
		  }
		}
      if (bm0) {
	bm0.style.overflow = 'visible'
        if (yt6.p && bm0.parentNode != yt6.p.parentNode ) {
	  try {
	    on = (!yt6.player1.media.paused) ? true : false
	    yt6.p.parentNode.appendChild(bm0)
	    yt6.p.parentNode.appendChild(gid(yt_alert_message))
	  } catch(e){}
	}
	if (yt6.x) {
	  if (yt6.wna.style.marginTop != bm0.style.height) yt6.wna.style.marginTop = bm0.style.height
	} else yt6.wna.style.marginTop = ''
      }
      yt6.wna.style.minWidth = '426px'
      if (yt6.size == 'default') {
	var z = yt6.api.parentNode.parentNode
	if ( z && (z.offsetWidth != (1*yt6.w.replace('px','')) || z.offsetHeight != (1*yt6.h.replace('px',''))) ) {
	  yt6.w = z.offsetWidth + 'px'
	  yt6.h = z.offsetHeight + 'px'
	  resize_layers(yt6.w, yt6.h)
	}
      }
    } else {
	if (bm0 && bm0.parentNode.getAttribute('class') && bm0.parentNode.getAttribute('class').indexOf('miniplayer') > -1) //bm0.parentNode.parentNode.tagName.indexOf('MINIPLAYER') > -1 || 
	  try {
	    on = (!yt6.player1.media.paused) ? true : false
	    pcont().appendChild(bm0)
	    //yt6.man.insertBefore(yt6.wna, yt6.inf.previousSibling.previousSibling)
	    var wna = yt6.wna2 //(!(yt6.blocked && yt6.layout == 16)) ? yt6.wna : yt6.wna2
	    wna.insertBefore(gid(yt_alert_message), wna.firstChild)
	    resize_layers(bm0.style.width, bm0.style.height)
          } catch(e){}
      }
   if (on) try { yt6.player1.play() } catch(e){}

}

if (yt6.flexy && yt6.pls) {
  var wna = yt6.wna2 //(!yt6.blocked) ? yt6.wna : yt6.wna2
  if (parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb >= 1000 && !!(document.getElementsByTagName('ytd-watch-flexy')[0] && document.getElementsByTagName('ytd-watch-flexy')[0].hasAttribute('is-two-columns_'))) {
    if (wna && wna.childNodes.length && typeof wna.firstChild.getAttribute == 'function' && wna.firstChild.getAttribute('id').indexOf(yt_alert_message) != 0) {
	resize_layers(yt6.w, yt6.h)
	if (gid(yt_alert_message)) wna.insertBefore(gid(yt_alert_message), wna.firstChild)
    }
  } else if (wna && wna.firstChild == gid(yt_alert_message)) {
	if (gid(yt_alert_message)) wna.insertBefore(gid(yt_alert_message), wna.firstChild)
	//yt6.pls.firstElementChild.insertBefore(gid(yt_alert_message), yt6.pls.firstElementChild.firstElementChild)
    }
}


  update_TimeStampLinks()

  //if (yt6.mobile && yt6.autoplay && yt6.browser_tab == 'hidden' && yt6.pre_ad) yt6.pls = null

  if (yt6.spf == true) { yt6.spf = true } else { yt6.spf = false // if (!(yt6.mobile && yt6.autoplay && yt6.browser_tab == 'hidden' && yt6.pre_ad))

		var c = conf('args')

		pprev_vid = prev_vid
		prev_vid = clone(yt6.vid)


		if (!yt6.ytp.embed)
		if (!watch
		 || (yt6.layout == 16 && !yt6.ytm && !(yt6.blocked && !yt6.mobile) &&
			( (  (
				(yt6d.current.video_id == yt6d.previous.video_id && c[1] && typeof c[1].video_id == 'string' && c[1].video_id.indexOf(yt6d.current.video_id) == -1)
				|| (yt6.mobile && pprev_vid != prev_vid && c[1] && typeof c[1].video_id == 'string' && c[1].video_id.substring(0,11) != yt6d.current.video_id && p && typeof p.getVideoUrl == 'function' && vID(p.getVideoUrl()).indexOf(prev_vid) == 0)
				 || (video_id(true)[0] != pprev_vid)
			  ))
			)
		    )
		 || ( ( yt6.ytm || yt6.layout == 12 ) && location.href.indexOf(prev_vid) == -1 && video_id()[0] != prev_vid) // && yt6d.current.video_id == yt6d.previous.video_id
		   ) {

		    function set_prev_vid(x, xx) {

		      if (typeof x == 'string') { x = x.substring(0,11) } else {
			if (yt6d.previous.video_id) yt6d.pprevid = clone(yt6d.previous.video_id)
			yt6d.previous.video_id = (!yt6.blocked && typeof yt6.vid == 'string') ? yt6.vid.substring(0,11) : yt6d.pprevid;
			return void 0
		      }

		      if (yt6d.current.video_id == yt6d.previous.video_id && c[1] && typeof c[1].video_id == 'string' && c[1].video_id.indexOf(yt6d.current.video_id) == -1) yt6.title = '§@'


		      $waitUntil(function() { if (location.href.indexOf(x) == -1 || (video_id(true)[0] != prev_vid) || (p && typeof p.getVideoUrl == 'function' && vID(p.getVideoUrl()).indexOf(x) == 0)) { return true } }, function() {
			var c = conf('args')

			if (c[1] && typeof c[1].video_id == 'string' && typeof c[1].video_id.substring(0,11) == x && yt6.loaded_vid == x && location.href.indexOf(x) == -1 && typeof document.title == 'string') {
			  document.title = (document.title.length >= 1 && document.title.substring(document.title.length-1,document.title.length) == '`') ? document.title.substring(0,document.title.length-1) : document.title + '`'
			}
			  if (yt6d.previous.video_id && yt6d.pprevid !== xx) yt6d.pprevid = clone(yt6d.previous.video_id)
			  yt6d.previous.video_id = x
			//$waitUntil(function() { var c = conf('args'); if (c[1]) if (typeof c[1].video_id == 'string' && c[1].video_id.substring(0,11) == x) { console.log('OK'); return true } else console.log(c[1].video_id  +' '+x) }, function() {
			  yt6d.current.video_id = video_id()[0]
			//}, 100, 900)
		      }, 250,1000)

		    }; set_prev_vid(prev_vid, pprev_vid)


		} else {
		    //if ( yt6.blocked_m && yt6.blocked === 0 && location.href.indexOf(prev_vid) == -1 && yt6d.previous.video_id == yt6d.current.video_id) { console.log('upd'); document.title = '- YouTube'; yt6d.current.video_id = video_id()[0] }
		  }

		if ( yt6.pre_ad && yt6.title != '§@' && yt6d.previous.video_id == yt6d.current.video_id && prev_vid != yt6d.current.video_id && video_id()[0] == prev_vid) { //yt6d.previous.video_id = clone(yt6d.pprevid); yt6.title = '§@';
 console.log('!_!') }

		if (yt6.ytp.embed)
		if ((video_id()[0] != prev_vid || !watch) && yt6d.current.video_id != prev_vid) {
		  if (yt6d.previous.video_id) yt6d.pprevid = clone(yt6d.previous.video_id)
		  yt6d.previous.video_id = (!yt6.blocked && typeof prev_vid == 'string') ? prev_vid.substring(0,11) : yt6d.pprevid;
		}


		if (yt6.ytm && (document.title == 'YouTube Music' || document.title == location.href) && (c[1] && prev_vid == yt6.vid) ) {
		  var z = gc('content-info-wrapper style-scope ytmusic-player-bar')[0]
		  if (z) z = z.getElementsByTagName('yt-formatted-string')[0]
		  if (z && z.title) document.title = z.title + ' - YouTube Music'
		}

//console.log(yt6d.current.video_id +' '+ yt6d.previous.video_id +' '+ prev_vid +' '+ c[1].video_id)


    // Check to see if the location has changed.
    if ( (yt6.title != document.title && document.title != location.href && yt6.title != '- YouTube') || yt6.strLocation != window.location.href || watch == null) // || yt6.change != yt6.title )
      if (c[0] && !(yt6.mpb && yt6.mpb.hasAttribute('active')) ) {

		if (!c[0]) { gc('clear')[0].setAttribute('id','ytp-conf-null'); };

		if (location.href == protocol() + '//music.youtube.com/') yt6d.previous.video_id = prev_vid // only to avoid unnecessary video reload upon switching back from miniplayer to normal


	//check title of document first
	if ( (yt6.title
		&& (yt6.title.split(' ').join('') != document.title.split(' ').join('') || yt6.strLocation != window.location.href)
		&& document.title != 'YouTube' && location.href != protocol() + '//music.youtube.com/'
		&& !(yt6.ytm && yt6d.previous.video_id == prev_vid)
	     ) || yt6.ytp.embed) {


	  if (yt6.layout == 16 && c[1]) {
	    if (!(yt6.ytm && (c[1].video_id || (p && p.tagName == 'EMBED'))  )) {
	      var z = video_title()[0]
	      if (c[1].title &&
		  (yt6.title != unescape(decodeURIComponent(c[1].title.split('+').join(' ').split('%').join('%25'))).split(' - YouTube')[Math.max(0, unescape(decodeURIComponent(c[1].title.split('+').join(' ').split('%').join('%25'))).split(' - YouTube').length-1)]) || !c[1].title) {
	        change = z
	      }
	    } else if ((yt6.flash.forced || (p && p.tagName == 'EMBED')) && yt6.vid.length == 11) yt6.vid = yt6.vid + 'ytm'
	    
	  }




	  var c = conf('args')

	//if ((watch != null) && (strPrevLocation != yt6.strLocation)) {
	  //if ( ((window.ytplayer != null) && (window.ytplayer.config != null) && 
	  //     (window.ytplayer.config.loaded) && (yt6.args != window.ytplayer.config.args) && 
	  //     (p != null) && (gid('watch-discussion') != null) ) ) {
	  //works only for browser-level navigation, not for flashplayer "previous/next"

	  if (yt6.mobile) {
	    if (!c[1].video_id) c[1].video_id = prev_vid
	    z = prev_vid
	  } else { var z = document.getElementsByTagName('ytd-watch-flexy')[0] || document.getElementsByTagName('ytd-watch')[0]; if (z && z.video_id != yt6.vid) delete c[1].video_id }//= undefined



//console.log(c[1] + c[1].video_id +' '+yt6.vid)
	  if (c[1] && !c[1].video_id && yt6d.current.video_id) { // == undefined
	    ytplayer.config.args.video_id = (!yt6.ytm) ? z + 'ytd' : z + 'ytm'
	  } else {
	      if (yt6.blocked) {
		//yt6.age.count = 1;
		if (yt6.pls) { // attempt to get out of the erroneous automatic yt playlist video-redirection
		  yt6d.previous.video_id = clone(yt6d.pprevid)
		  //ytplayer.config.args.video_id = clone(yt6d.current.video_id)
	        } else {
		  }
		if (!yt6.age.blocked) {
		  undo_iframe()
		  swap_player()
		}

	      }
	    }

	    if (yt6.mobile) {// non-Firefox new layout age-blocked videos or if the tab is hidden, we still need going through this twice...
	      yt6.age.check()
	      if ((yt6.blocked_m && yt6.blocked !== 0) || yt6.x_) { document.title = clone(document.title); }//yt6.title = '' }
	    }

	  c = conf('args')

	  //check args, compare loaded_vid too to avoid reloading multiple times
	  if (c[1] && c[1].video_id && ( (c[1].video_id != yt6.vid && !(yt6.loaded_vid && location.href.indexOf(yt6.loaded_vid) > -1)) || yt6.blocked || yt6.blocked_m ) ) { // && yt6.loaded_vid != c[1].video_id.substring(0,11)
		if (yt6.ytm && document.title == 'YouTube Music') { document.title = yt6.title }

	    var z = clone(yt6.vid)
	    ytplayer.config.args.video_id = (!yt6.ytm) ? z + 'ytd' : z + 'ytm'
	    yt6d.current.video_id = z; c = conf('args')
	    yt6.change = video_title()[0]
	    if (typeof document.title == 'string' && yt6d.previous.title == document.title + 'init' && document.title.substring(document.title.length-10) == ' - YouTube' && document.title.substring(0, document.title.length-10) == c[1].title) { yt6d.previous.title = clone(yt6.title); document.title = document.title + ' ' }

	    //console.log('???'+(typeof yt6d.previous.title == 'string' && yt6d.previous.title.indexOf(yt6d.proxy.document_title) == 0) + document.title.substring(0, document.title.length-10) +'\n' + yt6.strLocation + '\n' + window.location.href + '\n"' + yt6.title +'"  --  yt6.title\n"'+ document.title +'"  --  document.title\n"'+ ytplayer.config.args.title + '"  --  args.title')


	    //if (yt6.layout == 16 && document.title == yt6.title && !yt6.ytm && !yt6.ytg && yt6d.previous.video_id != prev_vid && prev_vid != yt6.vid) {
		//yt6d.previous.video_id = prev_vid
		//yt6.title = yt6.title + 'ytd'; // in case the previous and the current video have identical titles
	    //}

	    if (yt6.ytm && yt6.ytp.fullscreen) {
	      if (typeof yt6.ad_ == 'number' && Math.abs(yt6.ad_ - yt6.real_media_duration) > 1) {// && yt6.loaded_vid == yt6.vid
		  document.title = 'YouTube Music'; yt6.title = '';
		  //console.log('ym '+yt6.ytp.fullscreen +' '+yt6.fullscreen)
		  $waitUntil(function(){if (yt6.loaded_vid !== yt6.vid) return true},function(){ yt6.player1.play() },700,3500)
	      }
	    }



	    if (((yt6.blocked || yt6.blocked_m
		   || yt6.navigation
		   || !(yt6.player1 && yt6.player1.media && yt6.player1.media.loaded_vid && yt6.player1.media.loaded_vid.substring(0,11) == c[1].video_id.substring(0,11))  // condition to avoid a second reload caused occasionally by the slowness of the setTimeout approach
		 ) && watch
		   && document.title != yt6.title //&& document.title != yt6.title +' '
		   && (!(yt6.ytm && (typeof yt6.ad_ == 'number' && Math.abs(yt6.ad_ - yt6.real_media_duration) > 1) && yt6.loaded_vid == yt6.vid) || yt6.blocked) // reloading may be triggered twice if these values are still the same at this point, so wait another turn till yt updates document.title
		) || (yt6.ytp.embed && document.title != yt6.title)
	       ) {

		//ev_log('nav '+ document.title)
		yt6.navigation = true
		yt6.ads_noskip_m = 0
		yt6.autoplay_trigger = 0
		if (c[0]) c[0].loaded_from = ''
		if (yt6.loophole) delete yt6.loophole

		// Store the new and previous locations.
		strPrevLocation = (yt6.strLocation) ? yt6.strLocation:"";
		strPrevHash = yt6.strHash;
		yt6.strLocation = window.location.href;
		yt6.strHash = window.location.hash;

		// The location has changed. Trigger a
		// change event on the location object,
		// passing in the current and previous
		// location values.

		pl_item()


	        $( window.location ).trigger( "change",
		  {
		    currentHref: yt6.strLocation,
		    currentHash: fnCleanHash( yt6.strHash ),
		    previousHref: strPrevLocation,
		    previousHash: fnCleanHash( strPrevHash )
		  });


		if (yt6.age.count > 1) {

		  swap_player()
		}

		if (p.tagName == 'IFRAME') { if (yt6.age.count) yt6.age.count = 0 }


		if (yt6.html5swap && !yt6.blocked) {
		  swap_player()
		} else if (yt6.layout == 16 && yt6.newin && yt6.newin != true && yt6.pls && strPrevLocation.indexOf(yt6.newin) > -1) {
		    open_outside_of_playlist()
		  }

		//video_id : current video page location
		//window.ytplayer.config.args.video_id : last prepared video to load
		//yt6.vid : previously loaded video in original ytplayer



		if (yt6.blocked && video_id(true)[0] != prev_vid){
		  //yt6d.previous.video_id = prev_vid
		  xhr2.done = false;
		  if (!yt6.age.dl && !yt6.age.sc) {
		    if (yt6.player1) { try { if (yt6.V_[itag(yt6.player1.media.src)]) { yt6.player1.setSrc('https://www.youtube.com/ptracking'); yt6.player1.load() } } catch(e) { } }
		    if (yt6.player2) { try { if (yt6.V_[itag(yt6.player1.media.src)]) { yt6.player2.setSrc('https://www.youtube.com/ptracking'); yt6.player2.load() } } catch(e) { } }
		  }
		    yt6.reload = 15
			  yt6.age.func = $waitUntil(function(){
			    var c = conf('args')
			    if (c[1] && c[1].status == 'ok') {
			      return true
			    } else {
				if (c[1] && c[1].status != 'fail' && yt6.age.t == null || (yt6.age.t && yt6.age.t.replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') == '')) {
				  ytplayer.config.args.status = 'ok'
				} else yt6.age.done = 0
				if (c[1].status == undefined && c[1].video_id != video_id()[0]) return true

			      }
			  },
			  function(){
			    yt6.age.done = 4; yt6.reload = 14
			    mep_reload()
			    delete yt6.age.func
			  })
		} else {
		    if (bm0 && ((c[1] && typeof c[1].video_id == 'string') || yt6.ytm || yt6.ytp.embed)) {
		        //console.log('04 - Regular page change 16 '+strPrevLocation)

			// since 2019-07-30 : args.video_id=undefined --> need to get video info via xhr3

			if (c[1] && (c[1].video_id.substring(11) || yt6.ytm && document.title == 'YouTube Music') || yt6.ytp.embed) {
			  if (!yt6.age.dl && !yt6.age.sc) {
			    if (yt6.player1) try { if (yt6.V_[itag(yt6.player1.media.src)]) { yt6.player1.setSrc('https://www.youtube.com/ptracking'); yt6.player1.load() } } catch(e){}
			    if (yt6.player2) try { if (yt6.V_[itag(yt6.player1.media.src)]) { yt6.player2.setSrc('https://www.youtube.com/ptracking'); yt6.player2.load() } } catch(e){}
			  }
			  xhr2.done = false


			  var c = conf('args')
			  if (yt6.ytm && c[1].video_id.substring(11) == 'ytm' ) {//== yt6.vid
			    //if (c[1].title) { yt6.title = unescape(decodeURIComponent(c[1].title.split('+').join(' '))) } else 
			    yt6.title = clone(document.title);

			    if (!yt6.prev_media.includes(yt6.audio)) { document.title = yt6.title }

			  }



			    //Encrypted videos on Music and Gaming subdomain may need a second data refresh, but how to tell for sure when it's actually needed? Check if a previously watched video's media has been auto-picked by the program again. (method not 100% tho)
			    //console.log(yt6.prev_media); console.log(yt6.prev_media.includes(yt6.audio)); console.log(video_title()[1])
			    if (yt6.ytm || yt6.ytg || yt6.ytp.embed) {
			      if ( (video_title()[1] && (strPrevLocation == location.href || c[1].video_id == 'ytm') && (yt6.prev_media.includes(yt6.audio) || yt6.ytm)) || change) {
				  yt6.reload = 13; mep_reload()
			      }
			    } else if (c[1].video_id.substring(11) == 'ytd') {
			        ytplayer.config.args.video_id = c[1].video_id.substring(0,11)
				yt6.reload = 12
			        mep_reload()
			      }



			} else {
			    if (yt6.ytg) {
			      fix_playlist()
			      playNext()
			      if (document.title.indexOf(' - YouTube Gaming') == document.title.length - 17) document.title = document.title.substring(0, document.title.length - 17)
			      gid('bm3').innerHTML = gid('bm3').innerHTML.split('<b>')[0] + '<b>' + document.title + '</b>' + gid('bm3').innerHTML.split('</b>')[1]
			    }
			    //Encrypted videos on Music and Gaming subdomain may need a second data refresh. Check if a previously watched links have been picked up again. (method not 100% tho)
			    if ((yt6.ytm || yt6.ytg) && video_title()[1] && strPrevLocation == location.href && (yt6.prev_media.includes(yt6.audio) || yt6.ytm)) { yt6.reload = 11
			      window.ytplayer.config.args.video_id = video_id()[0]; mep_reload()
			    }
			  }
		    }
		  }

	    } else {
		//a wrecked yt_player may be erased soon, create a dummy copy of it
		if (p && p.tagName == 'EMBED' && yt6.original && yt6.original.parentNode && yt6.original.parentNode.getAttribute('id') == 'movie_player_to_dispose' && typeof yt6.original.getPlayerState != 'function' ) { gid('movie_player_to_dispose').appendChild(yt6.original.cloneNode(false)); gid('movie_player_to_dispose').appendChild(p.cloneNode(false)); yt6.ytp.broken = true }

	      }



	  } else {//args
	      if (yt6.ytg) { //console.log('05 - args')
		mep_reload()
		if (ytplayer.config.args.status == 'ok' && yt6.blocked) { alt_yt() }
	      }
	      if (!bm0 && p && p.getAttribute('class')) {
		if (window.ytplayer.config == null) { gc('clear')[0].setAttribute('id','ytp-conf-null'); };
	      }
	    }



//watch title
	} else {
	    if (!yt6.status != 'error' && yt6.ytp.strState != 4) {
	      if (p.tagName == 'DIV') var z = p.getElementsByClassName('ytp-error')[0]
	      if (z && yt6.ytp.strState != -1) { yt6.status = 'error'; yt6.ytp.strState = 4 }
	    }
	  }



    } else if (!(yt6.layout == 12 && !video_title()[1])) { //console.log('miniplayer mode')// first stage of location change check
	if (!window.ytplayer) window.ytplayer = {}
	if (!window.ytplayer.config) { window.ytplayer.config = {}; window.ytplayer.config.args = {} }
	if (!window.ytplayer.config.args && yt6.args != window.ytplayer.config.args) {//console.log('when does this occur?')
	        $( window.location ).trigger( "change",
		  {
		    currentHref: yt6.strLocation,
		    currentHash: fnCleanHash( yt6.strHash ),
		    previousHref: strPrevLocation,
		    previousHash: fnCleanHash( strPrevHash )
		  }
	      );
		yt6.args = clone(window.ytplayer.config.args)
                autoplay(true); set_controls()

	}
      }

 	if (yt6.mobile) {
	  if (typeof yt6.ad_skipped == 'number') { //ev_log(yt6.ad_skipped)
	    if (yt6.ad_skipped > 1) {
	      yt6.ad_skipped = 1
	    } else if (yt6.ad_skipped == 1) {
		yt6.ad_skipped = 0
	      } else if (yt6.ad_skipped === 0) {
		  if  (!(yt6.wna && yt6.wna.parentNode)) { scrollToCurrentVideo() }
		  if (yt6.x && yt6.browser_tab == 'hidden' && yt6.pls && yt6.autoplay && yt6.player1 && yt6.player1.media && yt6.player1.media.currentTime < 2 && yt6.player1.media.src != 'https://www.youtube.com/ptracking') {
		    //delete yt6.ad_skipped
		  }
		}
	  } else yt6.ad_skipped = 0
	} else if (yt6.ad_skipped) delete yt6.ad_skipped

//console.log(ytplayer.config.args.title +' '+yt6.title +' '+ document.title + '!!'+ yt6.change + '!!');



        if (window.location.href.indexOf('v=' + yt6.change) == -1 && window.location.href.indexOf('v/' + yt6.change) == -1) {
	  var c = conf('args')
	  if (document.title != '- YouTube' && (document.title != 'YouTube' || (c[1] && c[1].title && yt6.title != unescape(decodeURIComponent(c[1].title.split('+').join(' '))))  )) {
	    if (typeof yt6.title == 'undefined' || (yt6.title != document.title && !(yt6.ytm && document.title == 'YouTube Music' && document.title.indexOf('music.youtube.com/') > -1)) || yt6.strLocation != window.location.href) {
	      //console.log('yt6.title: ' + yt6.title + ' --> ' + document.title)
	      yt6d.previous.title = clone(yt6.title)
	      yt6.title = document.title;
              if (yt6.layout == 16 && document.title == 'YouTube' && gc('title style-scope ytd-video-primary-info-renderer')[0]) yt6.title = gc('title style-scope ytd-video-primary-info-renderer')[0][yt6.txt]
	      yt6.strLocation = window.location.href;
	      if (yt6.ytm) {
		if (yt6d.current.video_id != prev_vid) { //console.log('previous: '+yt6d.previous.video_id + ' current: '+yt6.vid)
		    if (yt6d.previous.video_id) yt6d.pprevid = clone(yt6d.previous.video_id)
		    yt6d.previous.video_id = (!yt6.blocked && typeof prev_vid == 'string') ? prev_vid.substring(0,11) : yt6d.pprevid; //if (yt6d.current.lsig) 
		}
	      }
	      if (yt6.layout == 16 && !yt6.ytm && !yt6.ytg && yt6d.previous.video_id != prev_vid && prev_vid != yt6.vid && yt6d.previous.title == document.title) {
		sameTitles = sameTitles + 1
	      }
	      if (yt6.ytm && typeof document.title == 'string' && document.title +'4' == yt6d.previous.title) { mep_reload() }
	    } else {
		if (yt6d.previous.title == document.title && (typeof yt6.ad_skipped !== 'number') ) {// && !(yt6d.current.video_id == yt6d.previous.video_id && prev_vid == yt6d.current.video_id && prev_vid == yt6d.previous.video_id)) { //console.log(sameTitles)
		  sameTitles++
		  if (sameTitles > 3) { //console.log('the previous and the current video have identical titles')
		    yt6d.previous.video_id = prev_vid
		    yt6.title = yt6.title + sameTitles
		    sameTitles = 0
		  }
		} else sameTitles = 0
	      }
	  }
	} else { document.title = yt6.title; //if (location.href.indexOf(yt6d.current.video_id) == -1) 
	  }



  } //spf else



} else { if (gc('alerts-wrapper')[0]) gc('alerts-wrapper')[0].removeAttribute('id') };//player script present

  yt6d.proxy.document_title = (typeof Proxy == 'function') ? window.document.title : clone(window.document.title)

      }//if
      },
      function(){
	if (gc('alerts-wrapper')[0]) gc('alerts-wrapper')[0].removeAttribute('id');//player script present
	try { removeEL(window, 'spfrequest', yt6.body.spfrequest, false) } catch(e) {}
	try { removeEL(window, 'spfprocess', yt6.body.spfprocess, false) } catch(e) {}
	try { removeEL(window, 'spfdone', yt6.body.spfdone, false) } catch(e) {}
	try { removeEL(window, 'yt-navigate-finish', yt6.body.yt_navigate_finish, false) } catch(e) {}
	try { removeEL(window, 'yt-navigate-start', yt6.body.yt_navigate_finish, false) } catch(e) {}
      },
      intIntervalTime
      )//fnCheckLocation

  
      // Set an interval to check the location changes.
      //setInterval( yt6.fnCheckLocation, intIntervalTime );
    })( jQuery )//( jQuery );
}

  }

  if (!gid('jquery.js'))
  loadScript( yt6.cdn + "f4338376cec18426895b374b3d9a80aaae2a630e/jquery.js", jq0);



yt6.timer = 0

yt6.jq0 = jq0

$waitUntil(
  function(){ var p = player(), p = yt6.p
    if (typeof jQuery == 'function' && typeof $ == 'function') { return true } else {
	if (yt6.flash.flag == 1) { if ( p && p.style.display != 'none') p.style.display = 'none'; yt6.flash.flag = 2 }
	  yt6.timer++; //console.log('waiting ' + yt6.timer)
	  if (yt6.timer == 12 || (yt6.ie7 && yt6.timer > 2)){
	    for(i=0;i<yt6.cdns.length;i++){
	      if(yt6.cdns[i] != yt6.cdn) {//alert(yt6.cdn + ' failed!!! Retrying with ' + yt6.cdns[i])
	        yt6.cdn = yt6.cdns[i];
	        break
	      }
	    }
	    if (gid('jquery.js') != null) gid('jquery.js').parentNode.removeChild(gid('jquery.js'));
	    loadScript( yt6.cdn + "747fd7ad7b481ee96ea874a8f0126df995f32006/jquery.js", yt6.jq0); yt6.jq0 = undefined; return true
  	}
    }//else
  },
  function(){ yt6.timer = 0; var p = player(), p = yt6.p
	if (p && (yt6.flash.flag == 2 || p.tagName == 'EMBED')) {
	  p.style.display = 'block'; p.style.display = ''; yt6.flash.flag = 2;
	  $waitUntil(function(){if (yt6.p && typeof yt6.p.pauseVideo == 'function') {
		  return true
		} else if (p.tagName == 'EMBED') {
		    p.style.display = (p.style.display != 'none') ? 'none' : 'block'
		    p.style.position = 'relative'
		    p.style.left = yt6.yt_l = '0px'; p.style.top = yt6.yt_t = '0px'
		  }
	    },
	    function() { var bm0 = gid('bm0');
	      if (bm0 && bm0.style.visibility != 'hidden') { yt6.p.pauseVideo() } //else {}
	    },2000,10000)
	}
  },500,7000)




function getCoords(elem) {
  // (1)
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  // (2)
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  // (3)
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  // (4)
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
  top: top,
  left: left,
  scrollTop: scrollTop,
  scrollLeft: scrollLeft,
  clientTop: clientTop,
  clientLeft: clientLeft
  
  };}





function getElementsByAttribute(oElm, strTagName, strAttributeName, strAttributeValue){
 if (oElm){
  var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
  var arrReturnElements = new Array();
  var oAttributeValue = (typeof strAttributeValue != "undefined")? new RegExp("(^|\\s)" + strAttributeValue + "(\\s|$)", "i") : null;
  var oCurrent;
  var oAttribute; var k = 0;
  for(k=0; k<arrElements.length; k++){
    oCurrent = arrElements[k];
    oAttribute = oCurrent.getAttribute && oCurrent.getAttribute(strAttributeName);
      if(typeof oAttribute == "string" && oAttribute.length > 0){
        if(typeof strAttributeValue == "undefined" || (oAttributeValue && oAttributeValue.test(oAttribute))){
          arrReturnElements.push(oCurrent);
        }
      }
  }
  return arrReturnElements;
 } else return null;
}



function pcont() {
  var z = getElementsByAttribute(document,'div','id','player-container'), y = null
  if (z && z.length) for (i=z.length-1;i>-1;i--) if (z[i] && typeof z[i].className == 'string' && z[i].className.indexOf('ytd-watch') > -1) { y = z[i]; break }
  return y
}


function playButton() {
  var a = getElementsByAttribute(gid('controls-sp'),'button','class','play snarl-button yt-uix-button-text')
  if (a) { yt6.btn.play = a[0] } else yt6.btn.play = null
  var b = getElementsByAttribute(gid('controls_bak'),'button','class','play snarl-button yt-uix-button-text')
  if (b) { yt6.btn.play2 = b[0] } else yt6.btn.play2 = null
}



function ytsubtitle2srt( d, track_srclang, mejs_language_code, translated) {

  var fn = yt6.fn || document.title
  var tts = parseXml(d);
  var text = tts.getElementsByTagName("text");
  var srt = "";
  var nl = String.fromCharCode(13) + String.fromCharCode(10);

  for (i=0;i<text.length;i++) {
    var start = text[i].getAttribute('start');
    if (!start) var start = "99:00:00.000";
    var dur = text[i].getAttribute('dur');
    if (!dur) { var dur = "00:00:00.000" } else { var dur = parseFloat(start) + parseFloat(dur); var dur = dur.toString(); var dur = dur.toHHMMSS() };
    if (start) { var start = start.toHHMMSS() };
    var j = i + 1
    //var txt = text[i][yt6.txt].replace("&#39;", "'");
    var txt = text[i][yt6.txt]
    if (txt) var txt = txt.split("&#39;").join("'").split("& # 39;").join("'").split("& # 39").join("'").split("&quot;").join("\"").split("& quot;").join("\"").split("& Quot;").join("\"").split("& Quot").join("\"").split("& quot").join("\"").split("Quot;").join("\"").split("Quot ;").join("\"").split("Quot.;").join(". \"").split("Quot!;").join("! \"").split("Quot?;").join("? \"").split("# 39;").join("'").split("&QUOT;").join("\"").split("&QUOT").join("\"").split("QUOT& ;").join("\"").split("QUOT&").join("\"").split("&#39;").join("'").split("& amp;").join("&");
    srt += j + nl + start + ' --> ' + dur + nl + txt + nl + nl;
  }
  d = srt;


  var uriContent
  if (typeof Blob == 'function') {//(browserName == 'IE' || browserName == 'Edge') && 
    try { uriContent = window.URL.createObjectURL(new Blob([srt], {type: 'text/plain'})) } catch(e){ uriContent = "data:text/plain;charset=utf-8," + encodeURIComponent(srt); }
  } else
      uriContent = "data:text/plain;charset=utf-8," + encodeURIComponent(srt);

  var onclic = ''

  if (window.navigator.msSaveOrOpenBlob) {
     onclic = 'onclick="window.navigator.msSaveOrOpenBlob(this.href, this.download); return true"'
  } else if ((browserName == 'IE' || browserName == 'Edge') && uriContent.indexOf("data:text/plain") == 0) {
      onclic = 'onclick="'+ rp(
	'if (this.href.indexOf("data:text/plain") == 0) {'+
	'  var ifd = gid("IEsubtitles");'+
	'  if (!ifd) {'+
	'    var ifd = document.createElement("iframe");'+
	'    ifd.id = "IEsubtitles";'+
	'    document.getElementsByTagName("HEAD")[0].appendChild(ifd);'+
	'    ifd.style.display = "none"; ifd.style.visibility = "hidden"; ifd.setAttribute("style","display: none; visibility: hidden");'+
	'  }'+
	'  var ifd = gid("IEsubtitles").contentDocument;'+
	'  ifd.open("text/plain", "replace");'+
	'  ifd.write( decodeURIComponent(this.href).replace("data:text/plain;charset=utf-8,","") );'+
	'  ifd.close();'+
	'  ifd.execCommand("SaveAs", true, "request.bin");'+
	'  return true;'+
	'} else return false;') +'"';
    }



  if (yt6.lastsub != d) {
    var z = gid('subtitles_list')
    if (z) z.innerHTML = gid('subtitles_list').innerHTML +
      '<a class="yt6-links" href="' + uriContent +'" ' + onclic + ' download="' + unescape(fn) + '_' + track_srclang + '.srt">SRT ' + translated + mejs_language_code + '</a><br>';
  } 

  var z = gid('subtitles_header'); if (z) z.innerHTML = '<br>SubRip/WebVTT subtitles:'//<br>(On Bookmarklet-URL line, edit the value to "add_subs")'

  yt6.lastsub = d

  return d

}






function bestfit(){

	if (yt6.size == 'custom') return false
	var aw = gid('a_width')
	var ah = gid('a_height')
	var w = (!(yt6.ytp.fullscreen && !yt6.x)) ? 1 * fix_Width().replace('px','') : screen.width; if (w == -1) return false;
	var h = (!(yt6.ytp.fullscreen && !yt6.x)) ? 1 * fix_Height().replace('px','') : screen.height; if (h == -1) return false;
        if (aw != null) {
	  aw.value = 1 * aw.value - 0; ah.value = 1 * ah.value;
	  if ((typeof aw.value == 'number') && (typeof ah.value == 'number')) {
	    if ((aw.value / yt6.aspect_ratio) < (ah.value * yt6.aspect_ratio)) {
	      if ((aw.value / yt6.aspect_ratio) < w) {
		ah.value = Math.round(ah.value / yt6.aspect_ratio);
		aw.value = aw.value;
	      } else {
		ah.value = Math.round(w / yt6.aspect_ratio);
		aw.value = w;
	      }
	    } else {
	      if ((ah.value * yt6.aspect_ratio) < h) {
		aw.value = Math.round(ah.value * yt6.aspect_ratio);
		ah.value = ah.value;
	      } else {
		  aw.value = Math.round(h * yt6.aspect_ratio);
		  ah.value = h;
		}
	      }
	    yt6.w = aw.value + 'px'
	    yt6.h = ah.value + 'px'
	    resize_layers( yt6.w, yt6.h )
	  }
	} else {
	    yt6.w = w + 'px'
	    yt6.h = h + 'px'
	    resize_layers( yt6.w, yt6.h );
	  }
  return true
}



function resize_layers(w,h,me_aspect){ //console.log('resize '+w+' x '+h)

  if (yt6.layout == 12 && !video_title()[1] && !yt6.ytp.embed) return void 0
  if (yt6 && (!yt6.top || !yt6.osw || !yt6.mhp)) getReferenceObjects()
  if (!yt6.sb) getScrollbarWidth()

  var p = player()//, p = yt6.p
  wide_view()

  // cloneNodes
  if (!gid('player-api')) player_api_div()
  var api_ = gid('player-api'); if (api_) var api = api_.cloneNode(false).style
  var bm0_ = gid('bm0'); if (bm0_) var bm0 = bm0_.cloneNode(false)
  var webgl = get_webgl()
  var mep_ = gid(mep_x("mep_")); if (mep_) var mep = mep_.cloneNode(false)
  var me_flash_ = getElementsByAttribute(document,"embed","name",mep_x("me_flash_"))
  if (typeof me_flash_[0] != 'undefined') me_flash_[1] = gid(mep_x('me_flash__ __container'))

  var strLeft, strTop

  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb;// - 1
  var mhp = (yt6.mhp) ? ((yt6.layout != 16 || yt6.ytm) ? yt6.mhp.offsetHeight : yt6.mhp.parentNode.parentNode.offsetHeight) : 0
  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight) - mhp - 8
  windowheight = yt6.wh = //(yt6.size != 'default') ?
    Math.round((windowheight / 100 >>0) * 80) //: windowheight
  if (yt6.size == 'default' && yt6.mpb && yt6.mpb.hasAttribute('active')) {
    if (bm0 && bm0.offsetHeight) {
      windowheight = Math.min(yt6.api.parentNode.parentNode.offsetHeight, bm0.offsetHeight)
	} else windowheight = yt6.api.parentNode.parentNode.offsetHeight
  }

  if (gid(yt_alert_message) && gid('aspect')) {
	gid(yt_alert_message).style.width = '100%'
	var c = 1 * gid(yt_alert_message).offsetWidth
	var d = 1 * gid('aspect').firstChild.offsetWidth
	try { var e = 1 * gid('remove-sp').parentNode.offsetWidth } catch(e){ var e = 241 }
	var x = (windowwidth < 1000) ? 25 : 0
	//if (windowwidth < 25 + gid(yt_alert_message).firstChild.firstChild.offsetWidth) x = parseFloat(c - d - e - gid(yt_alert_message).firstChild.firstChild.offsetWidth)
	if (!(yt6.flexy && yt6.size != 'default' && windowwidth < 1000)) {
	  x = parseFloat(c - d - e - 1)
	  if (x < 0 || yt6.ytm) x = 0
	  var pos = 'relative; left: ' + x + 'px;'
	} else {
	    if (!(windowwidth < (gid(yt_alert_message).firstChild.firstChild.offsetWidth + e - 25))) {
	      var pos = 'absolute; right: ' + x + 'px'; //parseFloat(25 + gid(yt_alert_message).firstChild.firstChild.offsetWidth) + 'px'
	    } else var pos = 'absolute; left: ' + parseFloat(gid(yt_alert_message).firstChild.firstChild.offsetWidth + 25) + 'px;'
	  }
	var z = gid('aspect')
	z.setAttribute('style','display: inline-block; vertical-align: top; color:#333; background: #FFFFFF; opacity: 0.9; position: ' + pos )
	var z = z.style
	if (z.display != 'inline-block') {
	  z.display = 'inline-block'; z.verticalAlign = 'top'; z.color = '#333'; z.background = '#FFFFFF'; z.opacity = '0.9'; z.position = 'relative';  z.left = parseFloat(c - d - e - 1) + 'px'; //z.maxWidth = '200px'
	}
	if (yt6.ytg) z.float = 'right'
	gid(yt_alert_message).style.width = '0%'
	gid(yt_alert_message).style.width = ''
  }


if (yt6.size != yt6.prev_size) {
  yt6.prev_size = yt6.size
}

  var z = gc('mejs-time-buffering')[0]
  if (z && browserName != 'Edge') z.setAttribute('class','mejs-time-bufferin')//
  var z = gc('mejs-offscreen')[0]
  if (z && z.getAttribute('style') != 'display: none;') z.setAttribute('style','display: none;')

  //var noads = gid('player').innerHTML;onDownload(noads)

    if (yt6.ytg) yt6.wsb = gid('sidebar') || document.getElementsByTagName('ytg-watch-sidebar')[0]
    if (yt6.wsb) { var tiny = yt6.wsb.currentStyle } //else return void 0
    if (yt6.ytg) yt6.inf = gid('bm2')
    if (tiny == undefined && typeof window.getComputedStyle != 'undefined' && yt6.wsb) var tiny = window.getComputedStyle(yt6.wsb, null)
    if (tiny == undefined || tiny == null) { var tiny = {}; tiny.marginLeft = "640px"; }

    //var tiny = yt6.wsb.currentStyle || window.getComputedStyle(yt6.wsb);alert(typeof tiny + tiny);//alert("wsb:" + tiny.marginLeft + " w7sc" + tiny0.marginLeft)

    var sp = (!shorts()) ? null : ((!yt6.mobile) ? document.getElementsByTagName('ytd-reel-video-renderer')[0] : yt6.osw.parentNode.parentNode.parentNode )

    var z = (!sp) ? yt6.osw : sp
    if (z.getAttribute('id') != 'player' && !sp) {
      var z = z.firstChild
    }

    if (yt6.ytg && gid('player-api')) var z = gid('player-api')



    var o = (z && typeof z.getAttribute == 'function') ? z.getAttribute('style') : null; if (o) { try { z.style = '' } catch(e){}; z.removeAttribute('style') } //else return void 0;
    //if (z.getAttribute('id') != 'player') {
      if (z) { try { var y = z.currentStyle || window.getComputedStyle(z, null) } catch(e) { return void 0 } } else return void 0
function nop(){//    } else {
	var y = {}
	y.width = z.offsetWidth + 'px'
	y.height = z.offsetHeight + 'px'
	y.left = z.offsetLeft + 'px'
	y.top = z.offsetTop + 'px'
      }

  if (yt6.mobile && yt6.osw) {
    if (yt6.osw.offsetHeight > 1 * h.replace('px','') || shorts()) { yt6.osw.className = 'player-api' } else yt6.osw.className = 'player-api player-size'
    getReferenceObjects()
  }

  yt6.me_aspect = 1 * y.width.replace('px','') / y.height.replace('px','')
  yt6.w_orig = 1 * y.width.replace('px','')
  yt6.h_orig = 1 * y.height.replace('px','')


    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      var z = z.firstChild
    }


  if (z.getAttribute('id') != 'player' && !yt6.ytg) {
    yt6.hdiff = ( 1 * y.height.replace('px','') - ((y.height.replace('px','') / 60 >> 0) * 60) )
    var hdiff = yt6.hdiff
    if (hdiff == undefined) hdiff = 30
  } else var hdiff = 0



  if (z.parentNode.getAttribute('id') == 'placeholder-player' || yt6.ytp.embed) {
    var b = z.parentNode;//gid('placeholder-player')
    // cloneNodes
    var a_ = z; if (a_) var a = a_.cloneNode(false)//b.firstChild
  } else {
      var a = z; if (a && !yt6.ytm) var a = a.cloneNode(false)
      var b = yt6.top
      if (yt6.mobile && !b) return void 0
      b.style.setProperty('margin-top','',''); b.removeAttribute('style')
      yt6.tbg.style.setProperty('margin-bottom','','')
      if (!(yt6.fullscreen || yt6.ytp.fullscreen) && !yt6.ytp.embed) yt6.tbg.style.setProperty('display','inline-block','')
      if (!yt6.ytg && !yt6.ytm) { yt6.inf.style.setProperty('marginTop','',''); yt6.inf.removeAttribute('style') }
    }
  var c = gid('aspect')
  var d = gid('player').getAttribute("class")
  if (!d) {
    if (typeof gid('player').outerHTML == 'string') {
      var d = gid('player').outerHTML.split('class="')[1]
      if (d) { d = d.split('"')[0] } else d = ''
    } else var d = ''
  }
  var e = yt6.tbg.style
  var f = gid('re-embed22')

if (f != null) {
  api.width = yt6.w_orig + 'px'
  api.height = e.height = yt6.h_orig + 'px'
  if (yt6.wide)  {
    if (windowwidth > 640 ) {
      a.style.left = api.left = -1 * yt6.w_orig / 2 + 'px'
    } else {
       a.style.left = api.left = '-213px'
      } 
    e.backgroundColor = 'rgb(16, 16, 16)'
    e.width = ''
    f.setAttribute('style','margin-left: -3px')
  } else {
      a.style.left = api.left = '0px'
      e.backgroundColor = 'transparent'
      f.setAttribute('style','margin-left: 0px')
    }
  return void 0;
}

/*if ( me_aspect && ( !mep || (p.getAttribute('name') == 'me_flash' && !yt6.x) || (me_flash_[0] && yt6.x)  )  ) {
  var w = Math.round(1 * h.replace('px','') * yt6.me_aspect)
  if (gid('a_width') != null) gid('a_width').value = w
  var w = w + 'px'
}*/

  if (typeof JSON != 'undefined') {
    var yy = {}
    yy.width = JSON.stringify(y.width)
    yy.height = JSON.stringify(y.height)
    yy.left = JSON.stringify(y.left)
    yy.top = JSON.stringify(y.top)
    var ytp_style = yt6.ytp.style = yy
    //var y = JSON.parse(JSON.stringify(y))
  } else {
      var ytp_style = z.currentStyle || window.getComputedStyle(z, null)
    }

  if (o != null) if (o.toString() != '[object CSS2Properties]') { z.setAttribute('style', o) } else {
	if (z) {
	  if (z.getAttribute('style') && z.getAttribute('style').toString() == '[object CSS2Properties]') {
	    var vt = video_title()
	    if (vt && vt[1]) {
	      z.setAttribute('style','display: none')
	      if (bm0) try { gid('movie_player_to_insert').appendChild(bm0) } catch(e){}
	    } else if (!(yt6.flash.forced && yt6.flash.delay) && bm0 && bm0.parentNode == gid('movie_player_to_insert')) try { unhide(bm0) } catch(e){}
	  }
	}
  }


  if (yt6.flexy) {

    if (yt6.wide && (w == 'auto' || yt6.w == 'auto' || yt6.h == 'NaNpx')) {

    var ptc = gid('player-theater-container')
    var css = ptc.currentStyle || window.getComputedStyle(ptc, null)
    var yy = {}
    yy.width = JSON.stringify(css.width)
    yy.height = JSON.stringify(css.height)
    yy.left = JSON.stringify(css.left)
    yy.top = JSON.stringify(css.top)
    var ytp_style = yt6.ytp.style = yy

     w = ytp_style.width.replace('px','').split('"').join('') + 'px'
     h = ytp_style.height.replace('px','').split('"').join('') + 'px'

    a.style.setProperty('max-height', h,'')
    a.style.setProperty('min-height', h,'')

    }

  }


  if (!player()) {
    if (yt6.size != 'custom') {
      yt6.w = w
      yt6.h = h
    }
    yt6.me_apsect = me_aspect
    $waitUntil(function(){ if (player()) return true }, function(){ resize_layers(yt6.w, yt6.h, yt6.me_aspect) },300,3000)
    return void 0
  }



  yt6.w = w
  yt6.h = h
  if (bm0) bm0.style.width = w
  if (bm0) bm0.style.height = h
  if (mep) mep.style.backgroundColor = (yt6.wallpaper) ? 'transparent' : ''
  api.width = w
  api.height = h
  if (!yt6.x) {
    p.style.width = w
    p.style.height = h
  }
  if (typeof me_flash_[0] != 'undefined') {
    me_flash_[0].style.width = w
    me_flash_[0].style.height = h
    me_flash_[1].style.width = w
    me_flash_[1].style.height = h
  }
  if (mep != null) {
    mep.style.width = w
    mep.style.height = h
    mep.style.left = '0px'
    mep.style.top = '0px'
    gc('mejs-clear')[0].style.width = w
    gc('mejs-clear')[0].style.height = h
  }


  var w = 1 * w.replace('px','')
  var h = 1 * h.replace('px','')

  var flashvars = player().getAttribute('flashvars')
  var chat = document.getElementsByTagName('ytd-live-chat-frame')[0] || gid('chat')

  // cloneNodes
  var p1_ = gid('player1'); if (p1_) var p1 = p1_.cloneNode(false)

  var ytp_class = p.getAttribute('class')



if (!yt6.fullscreen || yt6.fullscreen == false || (ytp_class && ytp_class.indexOf('ytp-fullscreen') == -1)) {//scaling

  if (p1 != null) {


  if (yt6.l != yt6.l_ || yt6.t != yt6.t_) var strLeft = p1.style.left, strTop = p1.style.top

    if ( yt6.x && (yt6.size == 'default' && ( !mep || gid(mep_x('me_flash_')) ) ) ) {
	p1.style.width = (me_aspect) ? w + 'px' : h * yt6.me_aspect + 'px';// parseInt(h.replace('px','') - hdiff) * parseFloat(yt6.aspect_ratio) + 'px'
	p1.style.height = h + 'px'
	p1.style.left = '0px'

	  w = w + 'px'
	  h = h + 'px'
	  yt6.w = w
	  yt6.h = h
	  api.width = w
	  api.height = h
	  if (bm0) bm0.style.width = w
	  if (bm0) bm0.style.height = h
	  p.style.width = w
	  p.style.height = h
	  if (typeof me_flash_[0] != 'undefined') {
	    me_flash_[0].style.width = w
	    me_flash_[0].style.height = h
	    me_flash_[1].style.width = w
	    me_flash_[1].style.height = h
	  }
	  if (mep != null) {
	    mep.style.width = w
	    mep.style.height = h
	    mep.style.left = '0px'
	    mep.style.top = '0px'
	    gc('mejs-clear')[0].style.width = w
	    gc('mejs-clear')[0].style.height = h
	  }
	var w = 1 * w.replace('px','')
	var h = 1 * h.replace('px','')
    } else {
	if (  ((gc('html5-video-container')[0]) &&
	       (gc('html5-video-container')[0].innerHTML != '')
	      ) &&
	      ( (mep != null) &&
		((typeof gc('me-cannotplay')[0] == 'undefined') ||
		 ((typeof gc('me-cannotplay')[0] != 'undefined') && 
		  (gc('me-cannotplay')[0].nextSibling.getAttribute('id') != 'player1')
		 )
	        )
	      )
	   ) {
	  p1.style.width = ((h - hdiff) * yt6.aspect_ratio) + 'px'
	  p1.style.height = Math.round(h - hdiff) + 'px'
	  p1.style.left = ( (w - p1.style.width.replace('px','')) / 2) + 'px'
	//normal html5
	} else {
	    p1.style.width = w + 'px'
	    p1.style.height = h + 'px'
	    p1.style.left = '0px'
	//flash / html5 disabled : (p1) this.videoWidth = 0 ; this.videoHeight = 0
	  }
      }
	p1.style.top = '0px'


  if ( (w < (1 * p1.style.width.replace('px',''))) ){//|| ( (windowheight < (1 * p1.style.height.replace('px',''))) && (yt6.size !== 'media') ) ) {// || yt6.flexy

    if ( ( ((1 * p1.style.height.replace('px','')) < windowheight ) || (w < (1 * p1.style.width.replace('px',''))) || yt6.flexy ) && (mep != null) ){//|| (!((1 * p1.style.height.replace('px','')) > windowheight )) ) {
	    p1.style.width = w + 'px'
	    p1.style.height = Math.round( w / yt6.aspect_ratio ) - hdiff + 'px'
	    p1.style.top = (!yt6.mobile) ? ( (h - p1.style.height.replace('px','')) / 2 - (hdiff / 2) ) + 'px' : '0px'
	    p1.style.left = ( (w - (p1.style.height.replace('px','') * yt6.aspect_ratio)) / 2) + 'px'


      } else {

	if (yt6.size == 'theater'){

	  if ( (me_aspect != false) && (gid('aspect')) ) { 
	    //w = windowwidth
	  }
	  if (me_aspect != false) h = windowheight

	  if ( (p.getAttribute('name') == 'me_flash' && !yt6.x) || (me_flash_[0] && yt6.x) ) {
	      if ((me_aspect == true) || (me_aspect == false)){
		p1.style.width = w + 'px'
		p1.style.height = h + 'px'
		p1.style.left = '0px'
		p1.style.top = '0px'
	      }
	  } else {
	      p1.style.width = (h - hdiff) * yt6.aspect_ratio + 'px'
	      p1.style.height = h - hdiff + 'px'
	      p1.style.top = (h - p1.style.height.replace('px','')) / 2 - (hdiff / 2) + 'px'
	      p1.style.left = (w - p1.style.width.replace('px','')) / 2 + 'px'
	    }

	}//theater

        }	

    }

    if( (yt6.size != 'theater') && (mep != null) && (typeof gc('me-cannotplay')[0] == 'undefined') &&
	(
	  (!(Math.abs(gid('player1').width - p1.style.width.replace('px','')) > 2) && !(Math.abs(gid('player1').height - p1.style.height.replace('px','')) > 2))
	)
      )
    {//console.log( 'refine')
	p1.style.width = gid('player1').width + 'px'
	p1.style.height = gid('player1').height + 'px'
	p1.style.top = ( (h - p1.style.height.replace('px','')) / 2 - (hdiff / 2) ) + 'px'
	p1.style.left = ( (w - (p1.style.height.replace('px','') * yt6.aspect_ratio)) / 2) + 'px'

      if (c) try { gid('a_width').value = (bm0) ? bm0.style.width.replace('px','') : p.parentNode.parentNode.offsetWiddth + 'px'; gid('a_height').value = (bm0) ? bm0.style.height.replace('px','') : p.parentNode.parentNode.offsetHeight + 'px' } catch(e){}
    }

    if (yt6.l) p1.style.left = 1 * yt6.l + 1 * p1.style.left.replace('px','') + 'px'
    if (yt6.t) p1.style.top = 1 * yt6.t + 1 * p1.style.top.replace('px','') + 'px'

  }//p1 null


  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)

  //if (z.parentNode.getAttribute('id') == 'placeholder-player') var z = z.parentNode

  if (b.offsetWidth < windowwidth) {
    //e.width = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb + 'px'
    var x = b.offsetWidth
  } else {
      //e.width = z.offsetWidth + 'px'; e.left = '0px'
      var x = windowwidth
    }


  if (a.style != null && !yt6.ytg) {

    e.width = windowwidth + 'px'
    e.height = h + 'px'



  if (!yt6.mobile) {
    yt6.pls = (yt6.layout == 16) ? gid('playlist') || gid('queue') : gid('watch-appbar-playlist') || document.getElementsByTagName('ytg-playlist-panel-renderer')[0]
    if (yt6.layout == 16 && yt6.pls && yt6.pls.id == 'playlist' && typeof yt6.pls.className == 'string' && yt6.pls.className.indexOf('ytd-watch') == -1) yt6.pls = document.getElementsByTagName(yt6.pls.tagName)[1]
  } else yt6.pls = gc('playlist-content section')[0] //|| document.getElementsByTagName('ytd-live-chat-frame')[0] || gid('chat')
    if (yt6.layout == 16 && yt6.pls && ((!yt6.pls.lastChild || !yt6.pls.firstElementChild) || yt6.pls.hasAttribute('hidden')) ) yt6.pls = null
    var playlist = yt6.pls



    a.removeAttribute("style")

    if (c || !yt6.flexy) a.style.width = w + 'px'; // triggers a superfluous repositioning of the flexible player in default view mode
    //if (yt6.osw && yt6.flexy && !c && yt6.osw.offsetWidth >= w) yt6.osw.w = ((windowwidth + yt6.sb) < 1000) ? '' : w + 'px'
    a.style.height = h + 'px'
    a.style.left = api.left
    a.style.backgroundColor = 'transparent'
    a.style.minHeight = '0px'
    a.style.maxHeight = '9999px'
    a.style.display = (!yt6.flexy && !yt6.mobile && !yt6.ytp.embed) ? 'inline-block' : ''

    // cloneNodes
    z.setAttribute('style', a.style.cssText)

    if (a.getAttribute('id') == 'player' && !yt6.ytg) {
	var l = yt6.con
    } else var l = gc('footer relative layout vertical style-scope ytg-watch-page')[0]

    if (yt6.wsb) yt6.wsb.removeAttribute('style')



if (!yt6.skeleton)
if (a.getAttribute('id') != 'player' || yt6.ytp.embed) {//console.log('pre-2016 layout')

    if (yt6.wide) {//YouTube theatre view mode
      if (c) {//aspect changer present
	e.left = '0px'
	e.width = windowwidth + 'px'
	if (b.offsetWidth < 1 * e.width.replace('px','')) {
	  a.style.left = api.left = -1 * w / 2 + 'px'
	  if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) {
	    if (w < windowwidth ) {
        	a.style.left = api.left = -1 * w / 2 + 'px'
	      } else {
		  a.style.left = api.left = -1 * e.width.replace('px','') / 2 + 'px'
		}
	  } else {
	      if (w < windowwidth ) {
		a.style.left = api.left = -1 * w / 2 + 'px'
	      } else {
	          a.style.left = api.left = -1 * (x + 1 * e.width.replace('px','') - b.offsetWidth) / 2 + 'px'
	        }
	    }
	} else {
	    if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) { 
	      if (w < windowwidth) {
		a.style.left = api.left = -1 * (w + b.offsetWidth - 1 * e.width.replace('px','')) / 2 + 'px'
	      } else {
	          a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
	        }
	      if (yt6.wsb) yt6.wsb.style.top = ''
	    } else {
		a.style.left = api.left = -1 * w / 2 + 'px'
		a.style.left = api.left = (1 * e.width.replace('px','') - w - b.offsetWidth) / 2 + 'px'
              }
            if (1 * a.style.left.replace('px','') < -1 * b.offsetWidth / 2) {
              a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
            }
            e.width = b.offsetWidth + 'px'
          }
        if (playlist) { playlist.style.top = h - 360 + 'px' }
	if (yt6.wsb) yt6.wsb.style.top = ''

      } else {
            if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) { 
              if (w < windowwidth) {
                a.style.left = api.left = -1 * w / 2 + 'px'
              } else {
                  a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
                }
	      if (yt6.wsb) yt6.wsb.style.top = ''
	    } else {
		a.style.left = api.left = -1 * w / 2 + 'px'
		//a.style.left = api.left = (1 * e.width.replace('px','') - w - b.offsetWidth) / 2 + 'px'
              }
            if (1 * a.style.left.replace('px','') < -1 * b.offsetWidth / 2) {
              a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
            }

          e.width = windowwidth + 'px'
	  e.left = ''
	  if (playlist) playlist.style.top = ''
	  if (yt6.wsb) yt6.wsb.style.top = ''
        }

	if (p.tagName == 'IFRAME') p.style.marginLeft = '0px'

    } else { //YouTube Default view mode
	if ( (b.offsetWidth > windowwidth ) && ((1 * tiny.marginLeft.replace('px','') >= 108) || (tiny.marginLeft == 'auto')) ) {
	  e.left = '0px'
	  e.width = b.offsetWidth + 'px'
	}
	  if (c) {
	    if ( (( 1 * tiny.marginLeft.replace('px','') >= 108) || (tiny.marginLeft == 'auto')) && (playlist) ) playlist.style.top = h + 10 + 'px'
	    if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) {
	      a.style.left = api.left = (x / 2) - (w / 2) + 'px'
	      e.left = -1 * (1 * e.width.replace('px','') - b.offsetWidth) / 2 + 'px'
	      if (yt6.wsb) yt6.wsb.style.top = '370px'
	    } else {
		e.left = (b.offsetWidth - e.width.replace('px','')) / 2 + 'px'
	    	if (w < windowwidth) {
	    	  a.style.left = api.left = (x / 2) - (w / 2) + 'px'
	    	} else {
		    if (b.offsetWidth < 1 * e.width.replace('px','')) {
          	      a.style.left = api.left = e.left
		    }  else {
          	         a.style.left = api.left = '0px'
          	       }
	    	  }
		if (yt6.wsb) {
		  if (b.getAttribute('id') != 'top') {
		    yt6.wsb.style.top = '370px'
		  } else {
		      yt6.wsb.style.top = h + 'px'
		    }
		}
		if (playlist)
		//if (!yt6.body2) {
		  if (b.getAttribute('id') != 'top') {
		    playlist.style.top = 1 * h + 10 + 'px'
		  } else {
		      playlist.style.top = 1 * h + 10 + 'px'
		    }
	        //} else playlist.style.top = '10px'
	      }
	  } else {
	      if ((d && d.indexOf("medium") > -1) || (d && d.indexOf("large") > -1)) {
		a.style.left = api.left = '0px'
	        if (playlist) playlist.style.top = ''
		if (yt6.wsb) yt6.wsb.style.top = -1 * (h - 360) + 'px'
	      } else {
		  a.style.left = api.left = '0px'
	          if (playlist) playlist.style.top = '0px'
		  if (yt6.wsb) yt6.wsb.style.top = -1 * (h - 360) + 'px'
		}
            }
      }

	  if (b.getAttribute('id') != 'top') {
	    if ((1 * tiny.marginLeft.replace('px','') < 108) || (tiny.marginLeft == 'auto')) {
	      if (windowwidth < yt6.w_orig) {
		a.style.left = api.left = '-319px';//'-213px'
	          if (playlist) {
		    playlist.style.top = h + 57 + 'px'
		    if (yt6.wna) yt6.wna.style.top = -1 * (playlist.offsetHeight / 2 + 15) + 'px'
		  }
	      } else {
		  a.style.left = api.left = -1 * w / 2 + 'px'
	          if (playlist) {
		    playlist.style.top = h + 57 + 'px'
		    if (yt6.wna) yt6.wna.style.top = -1 * (playlist.offsetHeight + 5) + 'px'
		  }
		}

              if (yt6.wsb) yt6.wsb.style.top = ''
              if (1 * a.style.left.replace('px','') < -1 * b.offsetWidth / 2) {
                a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
		if (yt6.wna && playlist) yt6.wna.style.top = -1 * (playlist.offsetHeight + 5) + 'px'
              }
	      e.width = '100%'
	    } else if (yt6.wna) yt6.wna.style.top = ''
          } else a.style.left = api.left = '250px'


} else if (!yt6.ytm && !yt6.mobile) {//console.log('2016 layout')

    //if (!yt6.flexy) {
      var MC = (!(osName == 'Linux' && (browserName == 'Chrome' || browserName == 'Opera')) || osName == 'Windows') ? 3 : 2 //MC = chrome-based: 2px, mozilla-based: 3px
    //} else var MC = 0

    var yh = -1* ytp_style.height.replace('px','').split('"').join('') - MC
    var g = 0; //if (browserName == 'Edge') { var g = 1 } else var g = 0;
    // cloneNodes
    var a_ = pcont(); if (a_) var a = a_.cloneNode(false)
    a.style.marginTop = ''
    e.position = ''
    var ptc = gid('player-theater-container')
    var masthead = document.getElementsByTagName('ytd-app')[0]

    if (yt6.wide) {//YouTube theatre view mode


        if (ptc && yt6.tbg) {
	  //if (!yt6.tbg.hasAttribute('hidden')) yt6.tbg.setAttribute('hidden','')
	  ptc.style.minHeight = ptc.style.maxHeight = h + 'px'
	  ptc.style.top = '16px'
	}


      l.setAttribute('style','margin-top: ' + -1 * (360 + 2) + 'px') //in YT theatre view there's no diff between ff & chrome-based browsers, hence "+2" instead of "MC"
      e.marginLeft = '0px'
      if (c) {
	//if (yt6.x) e.setProperty('margin-bottom','16px','')
	e.display = 'inline-block'
	if (!yt6.flexy) e.marginTop = '16px'
        if (yt6.wsb) yt6.wsb.style.top = (playlist) ? '' : '346px'
        e.left = ''
	z.style.top = ''
        e.width = windowwidth + 'px'
	a.style.backgroundColor = (yt6.wallpaper || (p && p.tagName == 'EMBED')) ? 'transparent' : 'rgb(16, 16, 16)'

        if (l.offsetWidth < (windowwidth + yt6.sb)) {
          a.style.left = api.left = -1 * w / 2 + 'px'
              if (w < windowwidth) {
		e.width = (windowwidth - w) / 2 + 'px'
		if ((windowwidth - w) >= 0) {
		  if (3 >= (windowwidth - w)) { e.width = '0px'; e.height = '0px' }
		  if ((windowwidth - w) == 1) e.marginLeft = '-1px'
		}
                a.style.left = api.left = -1 * w / 2 + 'px'
              } else {
		  e.width = '0px'; e.display = 'none'
		  z.style.marginTop = '16px'
                  a.style.left = api.left = -1 * (l.offsetWidth + 1 * e.width.replace('px','') - l.offsetWidth) / 2 + 'px'
                }
        } else {
            if (w > windowwidth) {
                a.style.left = api.left = -1 * (w + l.offsetWidth - 1 * e.width.replace('px','')) / 2 + 'px'
		e.width = '0px'
		e.display = 'none'
            } else {
                a.style.left = api.left = (1 * l.offsetWidth - 1 * w) / 2 + 'px'
		e.width = (windowwidth - w) / 2 + 'px'
		//a.style.width = windowwidth - 1 * e.width.replace('px','') + 'px' //tr
              }
          }

	  if (windowwidth + yt6.sb < 1000 && yt6.wsb) yt6.wsb.style.top = ''
	      yt6.wsb.style.top = ''; yt6.wsb.removeAttribute('style')

	  if (playlist) {
	    playlist.style.marginTop = '346px'
	    yt6.wna.style.marginTop = '346px'
	  } else {
	      yt6.wna.removeAttribute('style')
	      l.style.marginTop = ''; l.removeAttribute('style')
	    }

	  e.left = ''
	  //a.style.setProperty('width', windowwidth - 1 * e.width.replace('px','') + 'px','') //tr
	  a.style.left = '0px'

      } else {
	  //e.display = 'none'
	  e.width = ((windowwidth - w) / 2) + 'px' || '0px'
	  if (!yt6.flexy) { e.marginTop = ''; e.height = '0px' }
	  e.marginLeft = '-1px'
	  a.style.setProperty('background-color','','')
	  //l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style')

	  yt6.wna.style.marginTop = '346px'
	  a.style.left = '0px'

	  if (playlist) playlist.style.marginTop = '346px'

	  yt6.wsb.style.top = (playlist) ? '' : '346px'

	  e.left = ''
	  //a.style.setProperty('width', windowwidth - 1 * e.width.replace('px','') + 'px','') //tr

        }

      if ((windowwidth + yt6.sb) < 1000) {
	a.style.left = e.width
	yt6.wna.style.marginTop = '-540px'//'-186px'
	if (playlist) playlist.style.marginTop = (yt6.x) ? '338px' : '354px'
	yt6.inf.style.marginTop = (yt6.x) ? '464px' : '468px'
	if (yt6.wsb) yt6.wsb.style.top = ''
	if (windowwidth >= w) {
	  z.style.top = -1 * h + 'px'
	  l.style.setProperty('margin-top', -1 * (h + 322) + 'px','')
	} else {
	    if (yt6.x) z.style.top = -1 * h + 'px'
	    l.style.setProperty('margin-top','-322px','')
	  }

	if (!playlist && (windowwidth + yt6.sb) >= 882) {
	  yt6.inf.style = ''
	  yt6.wna.style = ''
	  if (windowwidth >= w) {
	    l.style.marginTop = -1 * (h + 16) + 'px'
	  } else l.style.marginTop = ''
	}

      } else {
	  if (yt6.flexy) yt6.wna.style.marginTop = '16px'
	}

      if (ptc) p.style.left = clone(e.width)

	if (masthead) {
	    //if (masthead.getAttribute('style') && masthead.getAttribute('style').indexOf('--ytd-masthead-height:') != -1) masthead.setAttribute('style','')

	    masthead.setAttribute('style','--ytd-masthead-height:40px')
	    //e.marginTop = '16px'; 
	    if (yt6.x && c) {
	      var mc = 16 - MC //(c) ? 16 : 0
	      z.style.top = '16px'
	    } else var mc = 0
	    l.style.marginTop = (1 * l.style.marginTop.replace('px','') + mc + MC) + 'px'
	  //}
	}

// flexy: Theater view is changed back to Default when windowwidth < 882 px
if (windowwidth < 1000 || !(document.getElementsByTagName('ytd-watch-flexy')[0] && document.getElementsByTagName('ytd-watch-flexy')[0].hasAttribute('is-two-columns_'))) {


    if (yt6.flexy && gid(yt_alert_message) && playlist) playlist.firstElementChild.insertBefore(gid(yt_alert_message), playlist.firstElementChild.firstElementChild)

    if ((windowwidth + yt6.sb) > 881) {
      if (yt6.flexy) {
	yt6.inf.style.marginTop = '-24px'
	yt6.wna.style.marginTop = '16px'
      } else {
	  yt6.con.style.marginTop = ''
	  yt6.inf.style.marginTop = '464px'
	  yt6.wna.style.marginTop = '-540px'

	  if (yt6.x) {
	    z.style.top = (yt6.size != 'media' && yt6.size != 'theater') ? '16px' : -1 * h + 'px'
	    if (w < windowwidth) {
	      if (playlist) playlist.style.marginTop = -1 * (h - 32) + 'px'
	    } else {
		z.style.top = ''
		if (playlist) playlist.style.marginTop = '32px'
	    }

	  } else {
	      if (yt6.size != 'media' && yt6.size != 'theater') z.style.top = '16px'
	      if (windowwidth >= w) {
	        if (playlist) playlist.style.marginTop = (c) ? -1 * (h - 32) + 'px' : '48px'
	      } else {
		  if (playlist) playlist.style.marginTop = '32px'
		}
	    }

        }
    } else {
	  yt6.inf.style.marginTop = ''
	  yt6.con.style.marginTop = ''
	  yt6.wna.style.marginTop = ''
	  if (playlist) playlist.style = ''
	}


    //yt6.wna.style.marginTop = (c) ? '32px' : '16px'
    if (!playlist) {
	if (windowwidth >= w) {
	  yt6.con.style.marginTop = (c) ? -1 * (h + 16) + 'px' : ((!yt6.x) ? '' : '-16px')
	} else yt6.con.style.marginTop = '-16px'
	yt6.inf.style.marginTop = ''
	yt6.wna.style.marginTop = '16px'
    }

}

	if (chat) { chat.style = ''; chat.removeAttribute('style') }

    } else {//YouTube Default view mode

	if (masthead) {
	  //if (masthead.getAttribute('style') && masthead.getAttribute('style').indexOf('--ytd-masthead-height:') != -1) masthead.setAttribute('style','')
	  e.marginTop = ''
	  masthead.setAttribute('style','')
	}


        if (ptc && yt6.tbg) {
	  if (yt6.tbg.hasAttribute('hidden')) yt6.tbg.removeAttribute('hidden')
	  ptc.removeAttribute('style')
        }


	if ( (l.offsetWidth > windowwidth + yt6.sb ) ) {
	  e.left = '0px'
	  e.width = l.offsetWidth + 'px'
	} else {

	  }

	//e.marginLeft = (b.offsetWidth + 50 > windowwidth) ? '-25px' : (b.offsetWidth - windowwidth) / 2 + 'px'
	e.marginLeft = (l.offsetWidth - windowwidth) / 2 + 'px'
	if (c) {
	    a.style.backgroundColor = (yt6.wallpaper || (p && p.tagName == 'EMBED')) ? 'transparent' : 'rgb(16, 16, 16)'
	    if ( ((1 * tiny.marginLeft.replace('px','') >= 108) || (tiny.marginLeft == 'auto')) && (playlist) ) playlist.style.marginTop = h + 10 + 'px'

	    e.left = (l.offsetWidth - e.width.replace('px','')) / 2 + 'px'
	    e.width = api.left = (b.offsetWidth + 50 > windowwidth) ? (x - w) / 2 + 'px' : (x - w) / 2 - 1 * e.marginLeft.replace('px','') + 'px';//console.log('0 ' + b.offsetWidth +' '+ w)

	   if (l.offsetWidth >= 1066 || windowwidth == l.offsetWidth) {
	     if (playlist) playlist.style.marginTop = -1 * (yh + MC) + 'px'
	   }

	   if (w < windowwidth) { //console.log('not wider than window  s-19')
	     a.style.left = '0px'
	     yt6.wna.style.marginTop = ''

	      if (l.offsetWidth < w) { //console.log('wider than base')
		if ( parseFloat(1 * e.marginLeft.replace('px','')) + l.offsetWidth - w > 0 ) {
		  e.width = api.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) + l.offsetWidth - w + 'px'
		  l.style.marginTop = yh + 'px'
		} else {
		    b.style.setProperty('marginTop','12px','')
		    //a.style.left = api.left = e.marginLeft
		    if (!yt6.flexy) z.style.top = -1 * h + 'px'
		    a.style.left = api.left = (l.offsetWidth - w) / 2 + 'px';

		    if (Math.ceil(l.offsetWidth/854) == 1) { l.style.marginTop = -1 * h + 'px' } else {
			  if (!yt6.flexy) z.style.top = -1 * (h + MC) + 'px'
			  l.style.marginTop = -1 * (h + MC - g) + 'px'
			  if (Math.abs(yh) >= h) { 
			    yt6.wna.style.marginTop = yh + 'px'
			    if (playlist) playlist.style.marginTop = -1 * MC + 'px'
			    yt6.wsb.style.top = -1 * MC + 'px'
			  } else {
			      l.firstElementChild.style.marginTop = yh + 'px'
			      yt6.wsb.style.top = (playlist) ? -1 * MC + 'px' : -1 * (yh + MC) + 'px'
			    }
		    }
		  }
		  if (chat) { chat.style = ''; chat.removeAttribute('style') }

	      } else {//console.log('not wider than base')

		  if (Math.ceil(l.offsetWidth/854) == 1 && !yt6.flexy) { z.style.top = -1 * h + 'px'; } else { z.style.top = (yt6.flexy) ? '0px' : '' }

		  if (l.offsetWidth >= w) {
		    e.width = api.left = (windowwidth - w) / 2 + 'px'
		  } else {//never happens
		      e.width = api.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) - w + l.offsetWidth + 'px'
		    }
		  if ((((windowwidth + yt6.sb) >= 657) && (l.offsetWidth > windowwidth + yt6.sb)) ) {
		    a.style.left = api.left = (b.offsetWidth - w) / 2 + 'px'; //is this ever the case?
		    if (Math.ceil(l.offsetWidth/854) == 1) {
		      l.style.marginTop = -1 * h + 'px'
		    } else {
			l.style.marginTop = -1 * h + 'px'
			//l.firstElementChild.setAttribute('style','margin-top: ' + -1 * e.height.replace('px','') + 'px')
			l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style')
		      }
		  } else {
			l.style.marginTop = -1 * h + 'px'
			//l.firstElementChild.setAttribute('style','margin-top: ' + -1 * e.height.replace('px','') + 'px')
			if (Math.ceil(l.offsetWidth/854) == 1) {
			  a.style.left = api.left = (l.offsetWidth - w) / 2 + 'px'
			} else {
			    //l.style.marginTop = ''; l.removeAttribute('style')
			    l.style.marginTop = yh + 'px'
			    l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style')
			    //a.parentNode.style.top = -1 * e.height.replace('px','') + 'px'
			  }
		    }


			  if (playlist) {
			    playlist.style.marginTop = -1 * (yh + MC) + 'px'
			  } else {
			      if (yt6.wsb) yt6.wsb.style.top = (windowwidth + yt6.sb < 1000) ? '' : -1 * (yh + MC) + 'px'
			      //l.style.marginTop = ''; l.removeAttribute('style')
			    }
		}

if (yt6.flexy) {
  if (windowwidth < 1000 || !(document.getElementsByTagName('ytd-watch-flexy')[0] && document.getElementsByTagName('ytd-watch-flexy')[0].hasAttribute('is-two-columns_'))) {
    if (playlist) {
	playlist.firstElementChild.insertBefore(gid(yt_alert_message), playlist.firstElementChild.firstElementChild)
	playlist.style.marginTop = '0px'
	yt6.inf.style.marginTop = '-24px'
    } else yt6.con.style.marginTop = ''
    if ((windowwidth + yt6.sb) >= 657) {
	//yt6.wna.style.marginTop = '-361px' //'-427px'
	//yt6.inf.style.marginTop = '293px'
      } else yt6.inf.style = ''
  }
}


	     if (chat && Math.ceil(l.offsetWidth/854) > 1) chat.style.marginTop = -1 * yh + MC + 'px'

	   } else { //console.log('wider than or equal to window')
		a.style.left = api.left = (l.offsetWidth + 50 > windowwidth) ? '-25px' : '-50px'

		if (l.offsetWidth < w) { //console.log('wider than base')
		  //if ( parseFloat(e.marginLeft.replace('px','').replace('-','')) + b.offsetWidth - w > 0 ) {
		    e.width = api.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) + l.offsetWidth - w + 'px'
		    l.style.marginTop = yh + 'px'
		  //} else {
			b.style.setProperty('marginTop','12px','')
			a.style.left = api.left = e.marginLeft
			if (Math.ceil(l.offsetWidth/854) == 1) { l.style.marginTop = -1 * h + 'px' } else {
			  l.style.marginTop = ''; l.removeAttribute('style')
			  l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style')
			}
			if (!yt6.flexy) z.style.top = -1 * h + 'px'
			//if (w < l.offsetWidth) {
			  e.width = api.left = (windowwidth - w) / 2 + 'px'
			//} else {
			    e.width = api.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) - w + l.offsetWidth + 'px'
			    //yt6.wsb.style.top = -1 * (h - 360) + 'px'
			    if (l.offsetWidth >= 1066 || windowwidth == l.offsetWidth) {
			      if (windowwidth + yt6.sb >= 1000) { var x = MC } else var x = 0
			      if (!yt6.flexy) z.style.top = -1 * (h + x) + 'px'
			      yt6.wna.style.marginTop = -1 * h + 'px'
			      l.style.marginTop = yh - x + g + 'px';//+g
			      if (playlist) playlist.style.marginTop = -1 * (h + yh + x) + 'px'
			      if (yt6.wsb) yt6.wsb.style.top = ''
			    } else {
				yt6.wna.style.marginTop = ''
			      }
			   //if (playlist) playlist.style.marginTop = '-120px'
		          //}
		    //}
		    yt6.wsb.style.top = (playlist) ? '' : -1 * (h + yh) + 'px'
		} else {//console.log('not wider than base')

		    if (Math.ceil(l.offsetWidth/854) == 1 && !yt6.flexy) { z.style.top = -1 * h + 'px'; } else { z.style.top = (yt6.flexy) ? '0px' : '' }

		    if (w < l.offsetWidth) {
		      e.width = api.left = (windowwidth - w) / 2 + 'px'
		    } else {
			e.width = api.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) - w + l.offsetWidth + 'px'
		      }

		    if ((((windowwidth + yt6.sb) >= 657) && (b.offsetWidth > windowwidth)) ) {
		      a.style.left = api.left = (b.offsetWidth - w) / 2 + 'px'
		      if (Math.ceil(l.offsetWidth/854) == 1) {
			l.style.marginTop = -1 * h + 'px'
		      } else {
			  l.style.marginTop = -1 * h + 'px'
			  //l.firstElementChild.setAttribute('style','margin-top: ' + -1 * e.height.replace('px','') + 'px')
			  l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style')
			}
		    } else {
			l.style.marginTop = -1 * h + 'px'
			//l.firstElementChild.setAttribute('style','margin-top: ' + -1 * e.height.replace('px','') + 'px')
			if (Math.ceil(l.offsetWidth/854) == 1) {
			  a.style.left = api.left = (b.offsetWidth - w) / 2 + 'px'
			} else {
			    //l.style.marginTop = ''; l.removeAttribute('style')
			    l.style.marginTop = yh + 'px'
			    l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style')
			    a.style.left = api.left = '0px'
			    //a.parentNode.style.top = -1 * e.height.replace('px','') + 'px'
				if (windowwidth >= w) {
				  l.style.marginTop = -1 * MC + 'px'
				  yt6.wna.style.marginTop = yh + MC + 'px'
				  yt6.wsb.style.top = ''//-1 * yh + MC + 'px'
				  if (playlist) if (!yt6.flexy) { playlist.style = '' } else playlist.style.marginTop = '0px'
				} else {
				    l.style.marginTop = yh + 'px'
				    yt6.wsb.style.top = -1 * (h + yh) + 'px'
				  }
			  }
		      }

		  }

if (yt6.flexy) {
  if (windowwidth < 1000 || !(document.getElementsByTagName('ytd-watch-flexy')[0] && document.getElementsByTagName('ytd-watch-flexy')[0].hasAttribute('is-two-columns_'))) {
    if (playlist) {
	playlist.firstElementChild.insertBefore(gid(yt_alert_message), playlist.firstElementChild.firstElementChild)
	playlist.style.marginTop = '0px'
	yt6.con.style.marginTop = (w >= 657) ? h + 'px' : ''//'-24px'
	if (w == windowwidth && w < 709) yt6.wna.style.marginTop = ''
    } else {
	yt6.con.style.marginTop = ''
	if (w == windowwidth && w > 743) yt6.wna.style.marginTop = ''
      }

      if ((windowwidth + yt6.sb) >= 657) {
	//yt6.wna.style.marginTop = '-361px' //'-427px'
	//yt6.inf.style.marginTop = '293px'
      } else yt6.inf.style = ''

  }
}

		if (chat) if (yt6.wsb) yt6.wsb.style.top = (windowwidth + yt6.sb < 1000) ? '' : h + yh + MC + 'px'
		if (chat && windowwidth < w && Math.ceil(l.offsetWidth/854) > 1) chat.style.marginTop = yh + MC + 'px'

	     }// 20



			if (!yt6.flexy && Math.ceil(l.offsetWidth/854) == 1 && playlist) {
			  playlist.style.marginTop = '48px'
			  yt6.wna.style.marginTop = '-388px'//'-340px'
			  if (!yt6.ytg) yt6.inf.style.marginTop = '322px'
			}


			if ((windowwidth + yt6.sb) >= 657 && (windowwidth + yt6.sb) < 709) {
			  l.style.marginTop = -1 * h + 'px'
			}

	    if (chat) { chat.style = 'margin-top:' + h +'px' }

	} else {

	    if (yt6.api && yt6.api.id == 'container') yt6.api.style.width = '0px'

	    if ((windowwidth + yt6.sb) < 657) {
	      if (playlist) {
		if (!yt6.ytg) yt6.inf.style.marginTop = (!yt6.flexy) ? h - 53 + 'px' : '48px'
		yt6.wna.style.marginTop = '-356px'//'-308px'
		playlist.style.marginTop = (!yt6.flexy) ? '48px' : '0px'
	      }
	      if (!yt6.wide) {
		l.style.marginTop = ''; l.removeAttribute('style')
	      } else {
		  l.style.marginTop = -360 - 1 * MC + 'px'
		}
	    } else {
		var yh = -1 * y.height.replace('px','').split('"').join('') - MC
		l.setAttribute('style','margin-top: ' + yh + 'px')
		if (l.offsetWidth >= 1066) {
		  l.firstElementChild.setAttribute('style','margin-top: ' + (yh + g) + 'px')
		  if (yt6.wna) yt6.wna.style.marginTop = ''
		  if (!yt6.ytg) yt6.inf.style.marginTop = ''
	          if (playlist) playlist.style.marginTop = (!yt6.flexy) ? '' : '0px'
		  if (yt6.wsb) yt6.wsb.style.top = ''
		} else {
		    l.firstElementChild.setAttribute('style',''); l.firstElementChild.removeAttribute('style')

		    if (MC == 2 || playlist) {
		      if (playlist) {
			yt6.wna.style.marginTop = (!yt6.flexy) ? '-388px' : ''
			if (!yt6.ytg) yt6.inf.style.marginTop = (!yt6.flexy) ? '322px' : ''
		      } else yt6.wna.style.marginTop = yt6.inf.style.marginTop = ''
		    } else {
			if (!yt6.ytg) yt6.wna.style.marginTop = yt6.inf.style.marginTop = ''
		      }

		    if (yt6.wsb) yt6.wsb.style.top = ''

		    if ((windowwidth + yt6.sb) >= 1000) {
		      if (playlist) playlist.style.marginTop = (!c) ? l.style.marginTop : '48px'
		      if (!c) {
		        yt6.wna.style.marginTop = l.style.marginTop
			yt6.wsb.style.top = (playlist) ? '' : l.style.marginTop //!
		        yt6.inf.setAttribute('style',''); yt6.inf.removeAttribute('style')
		      }
		    } else {
			if (playlist) playlist.style.marginTop = (!yt6.flexy) ? '48px' : '0px'
			//yt6.inf.style.marginTop = ''
		      }
		  }
		if (!yt6.flexy) z.style.top = l.style.marginTop
		a.style.left = api.left = '0px' //!(p1 && 1 * p1.style.width.replace('px','') < 425) ? '0px' : -1 * (425 - 1 * p1.style.width.replace('px','')) / 2 + 'px'

	      }

	    if (chat) { chat.style = ''; chat.removeAttribute('style') }
	    //e.width = -1 * e.marginLeft.replace('px','') + 'px'
	    a.style.setProperty('background-color','','')
	  }


	//still default view but tiny in size (theater mode changes back to default when browser window shrinks the player this small)
	if ((windowwidth + yt6.sb) < 657) {
	  if (playlist) {
	    playlist.style.marginTop = (!yt6.flexy) ? '48px' : '0px'
	    yt6.wna.style.marginTop = (!yt6.flexy) ? '-388px' : '-48px'
	    if (!yt6.ytg && !yt6.flexy) yt6.inf.style.marginTop = '322px'
	  }
	  if (yt6.wsb) yt6.wsb.style.top = ''
	  if (!yt6.wide) {
	    l.style.marginTop = (!(yt6.flexy && playlist)) ? '' : '48px'
	  } else {
	      l.style.marginTop = '-362px'
	    }

	  if (l.offsetWidth == 426) {

	    e.width = windowwidth + 'px'; e.position = 'absolute'//e.height = '0px'
	    z.style.top = '0px'
	    if (!c || yt6.wallpaper || (p && p.tagName == 'EMBED')) {
	      z.style.backgroundColor = 'transparent'
	    } else {
	        z.style.backgroundColor = 'rgb(16, 16, 16)'
	      }
	    if (yt6.wna) yt6.wna.style.marginTop = (!playlist) ? '' : (!c) ? '' : '-356px'//'-308px'

	    if (windowwidth > l.offsetWidth) {
	      if ( windowwidth >= w ) {
		if (c) {
		  z.style.marginLeft = (l.offsetWidth - windowwidth) / 2 + 'px'
		}
		a.style.left = api.left = '0px'
	       } else {
		   a.style.left = api.left = e.left = (l.offsetWidth - w) / 2 + parseFloat(z.style.marginLeft.replace('px','').replace('-','')) + 'px'
		 }

	      if (c && playlist) l.style.marginTop = '400px'

	    } else {
		if ( windowwidth >= w || (parseFloat(parseFloat(a.style.left.replace('px','')) + parseFloat(w)) > windowwidth) ) {
		  a.style.left = api.left = '0px'
		} else {
		    a.style.left = api.left = (l.offsetWidth - w ) / 2 + 'px'
		  }		      
	      }
	    if (w < parseFloat(a.style.left.replace('px',''))) { z.style.width = a.style.left }

	  } else {
	      if (c) {
		if (!(w < windowwidth)) a.style.left = '-25px'
	        if (!playlist) {
		  yt6.wna.style.marginTop = ''
		} else {
		    z.style.top = (!yt6.flexy) ? -1 * h + 'px' : '0px'
		    l.style.marginTop = (!yt6.flexy) ? -1 * h + 'px' : '48px'
		  }
	      } else {
		  e.height = '0px'
		  a.style.left = '0px'
		  z.style.top = '0px'
		}
	    }
		    if (MC == 3 && !playlist) { if (!yt6.ytg) yt6.inf.style.marginTop = '' }


	} else { //not-tiny size, late correction

	    //yt6.inf.style.marginTop = ''
	    if (w > windowwidth) {
	      if (Math.ceil(l.offsetWidth/854) != 1) {
		yt6.wsb.style.top = (playlist) ? '' : -1 * (h + yh + MC) + 'px' //!
	      } else yt6.wsb.style.top = ''
	    }

	  }

			if ((windowwidth + yt6.sb) >= 657 && (windowwidth + yt6.sb) < 709) {
			  if (c) {  } else l.style.marginTop = ''
			  if (!yt6.flexy) l.style.marginTop = -1 * h + 'px'
			  if (w > windowwidth) a.style.left = '0px'
			}

	  e.left = ''
	  if ((c) || ((windowwidth + yt6.sb) < 657)) {
	    if (!c) a.style.setProperty('background-color','transparent','')
	    var x = windowwidth - 1 * e.width.replace('px','')
	    if (!isNaN(x) && x != 0) {
	      //a.style.setProperty('width', windowwidth - 1 * e.width.replace('px','') + 'px','') //tr
	    } else a.style.setProperty('width','')
	  } else {
	      a.style.width = ''
	    }

	if (yt6.size == 'theater') {
	  if (w < windowwidth && w >= l.offsetWidth && l.offsetWidth >= 1066) { //if this isn't true, a.style.left = '0px'
	    a.style.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) - parseFloat(a.style.left.replace('px','').replace('-','')) + 'px';
	  } else { //a.style.left = '0px';
	      if (!yt6.flexy) { z.style.left = -1 * yt6.sb / 2 + 'px' }
	    }
	}

      }//default view mode end



    if (yt6.ytg) { yt6.tbg.style.setProperty('display','none','') }

  //e.display = 'inline-block'

   //new layout, new preset
   if (z.id == 'player' && l) { //a.parentNode
     if (parseFloat(l.offsetWidth/854) > 1) {// || yt6.size != 'theater') {
       if (yt6.size != 'theater') {
	 z.style.left = '0px'
       } else {
	   if (!(parseFloat(l.offsetWidth/854) > 1)) z.style.top = -1 * z.style.height.replace('px','') + 'px'
	   if (w < l.offsetWidth) {
	     z.style.left = '0px'
	   } else {
	       if (windowwidth >= w) {
		 z.style.left = e.marginLeft
	       } else {
		   z.style.left = e.marginLeft //parseFloat(1 * e.marginLeft.replace('px','') + 1 * e.width.replace('px','')) + 'px'
		 }
	     }
	 }
     } else {
	 //if (l.offsetWidth == 426) l.style.marginTop = -1 * h + 'px'
	 if (windowwidth >= w && !yt6.flexy) {
	   z.style.left = (l.offsetWidth == 426) ? '0px' : -1 * yt6.sb / 2 + 'px'//e.marginLeft
	 } else {
	     z.style.left = '0px'//(l.offsetWidth == 426) ? (windowwidth - w) / 2 + 'px' : '0px'//(l.offsetWidth - w) / 2 + 'px' // && !(l.offsetWidth > w)
	   }
	 e.height = z.style.height
       }


     if (yt6.x && !yt6.flexy) {
	p.style.position = 'absolute'
	if (p.tagName != 'EMBED') p.style.marginLeft = e.width
     } else {
	p.style.position = ''
	if (p.tagName != 'EMBED') p.style.marginLeft = ''
       }

   }


  if (yt6.flexy) {
    yt6.tbg.style.position = 'absolute'
	yt6.tbg.style.top = (yt6.wide) ? '' : ((!yt6.body2) ? '64px' : '24px')
	if (yt6.flash.forced && p.tagName == 'EMBED') p.style.position = (yt6.wide) ? 'absolute' : ''

      if (windowwidth >= 1000) {
	yt6.inf.removeAttribute('style')
	if (!yt6.wide) yt6.wna.removeAttribute('style')
      }
	if ((windowwidth + yt6.sb) >= 657 && (windowwidth + yt6.sb) < 709) {
	  yt6.inf.removeAttribute('style')
	}


      a.style.setProperty('max-height', h + 'px','')
      //if (a.parentNode != ptc) a.parentNode.removeAttribute('style')



      if (yt6.wsb) {

	if (!yt6.wide && yt6.top.getAttribute('id') == 'columns') {
	  var l = gc('style-scope ytd-watch-flexy')
	  if (l[0]) for (i=0;i<l.length;i++) if (l[i].getAttribute('id') == 'primary') { var base = l[i]; break }
	} else base = yt6.top
	var base = base.offsetWidth + (400) //1 * yt6.wsb.offsetWidth - 0
	var eleft = (windowwidth < (base + 24)) ? 24 : (windowwidth - base) / 2; //console.log(windowwidth +' '+base+' '+eleft)
	e.marginLeft = -1 * eleft + 'px'
	e.width = windowwidth + 'px'//(yt6.top.offsetWidth - w) + 'px'


	if (c) {

	  if (playlist) {
	    if (windowwidth >= 1000) {
	      playlist.style.marginTop = (yt6.wide) ? '8px' : h + 'px'
	    } else {
		if (yt6.wide) {
		  if ((windowwidth + yt6.sb) > 881 && windowwidth < 1000) playlist.style.marginTop = '16px'
		} else playlist.style.marginTop = '0px'
	      }
	  }

	  var x = (windowwidth - 2 * eleft - w) / 2;


	  if (yt6.aspect_ratio > 1 && yt6.api) {
	    //if (yt6.size == 'theater') a.style.left = x + 'px'
	    // cloneNodes
	    //x = (a_ && a_.parentNode.offsetWidth >= w || !a_) ? x : x - ((w - a_.parentNode.offsetWidth) / 2);
	    x = (yt6.api && yt6.api.parentNode && yt6.api.parentNode.offsetWidth >= w || !a_) ? x : x - ((w - yt6.api.parentNode.offsetWidth) / 2)
	    //x = (a.parentNode.offsetWidth >= w) ? x : x - ((w - a.parentNode.offsetWidth) / 2);
	  }


	  if (yt6.wide) {

	    a.style.left = (windowwidth - w) / 2 + 'px'
	    if (yt6.x && w >= windowwidth) a.style.left = '0px'

	  } else {

	      //a.style.left = ''
	      yt6.osw.style.left = x + 'px';

	      if (w >= windowwidth ){//|| ( !(w >= windowwidth) && (w/yt6.aspect_ratio >= windowheight)) ) {

	        //if (windowwidth + yt6.sb < 1000) yt6.osw.style.left = -1 * yt6.osw.style.left.replace('px','') + 'px'

		//if (h > a.parentNode.offsetHeight) {// && h > h * yt6.aspect_ratio && !(w > w / yt6.aspect_ratio)
		//  var y = (h - a.parentNode.offsetHeight) * yt6.aspect_ratio / 2
		//  yt6.osw.style.left = -1 * y - 24 + 'px' //(x + y) + 'px'
		//} else 
			if (w >= windowwidth) {

		    yt6.osw.style.left = x + ((w - windowwidth) / 2) + 'px'

	  //if (Math.round(yt6.aspect_ratio.toFixed(3) * 100) >= parseFloat(235)) {
	    //x = (h*4/3 - (windowheight)); console.log(x)
	    //if ((windowheight) < 749) x = -1 * (x - (749 - (windowheight))); console.log(x)
	  //}

		    //if ((windowwidth + yt6.sb) < 657) yt6.osw.style.left = '-24px'
		
		  }

	      }

	      if (!playlist) yt6.wsb.style.marginTop = (h + 10) + 'px'
	    }


	} else {
	    //e.marginLeft = 2 * flexyleft + w + 'px'
	    if (playlist) {
	      if (windowwidth >= 1000) { playlist.removeAttribute('style') } else playlist.style.marginTop = (yt6.wide) ? '16px' : '0px'
	    } else {
		yt6.wsb.removeAttribute('style')
	      }
	    if (yt6.api) yt6.api.style.top = ''

	    var x = (yt6.api && yt6.api.parentNode && yt6.api.parentNode.offsetWidth) ? yt6.api.parentNode.offsetWidth : yt6.inf.offsetWidth
	    // cloneNodes
	    var y = (c) ? ((a_) ? (yt6.inf.offsetWidth - a_.parentNode.offsetWidth) / 2 : 0) : (x - w) / 2
	    //var y = (yt6.inf.offsetWidth - a.parentNode.offsetWidth) / 2
	//    if (p1 && (h * yt6.aspect_ratio) < 425) y = y - ((425 - (h * yt6.aspect_ratio)) / 2) //mw
	    yt6.osw.style.left = (yt6.aspect_ratio > 1) ? '0px' : y + 'px'
	    //if (w == 425 && h * yt6.aspect_ratio < 425) a.style.left = api.left = -1 * ((425 - (h * yt6.aspect_ratio)) / 2) + 'px' // safari

	  }
      }


	    if (!yt6.wide) {
	      yt6.top.insertBefore(yt6.tbg, yt6.top.firstChild)
	      yt6.osw.removeAttribute('hidden')
	      //yt6.wna.style = ''; yt6.wna.removeAttribute('style')

	      //if (flexyleft) {
		//a.style.left = parseFloat(a.style.left.replace('px','')) - flexyleft + 'px'
		if (playlist && windowwidth >= 1000 && (windowwidth < (base + 24)) ) { e.marginLeft = -24 + 1 * (windowwidth - base) + 'px' } else
		  e.marginLeft = '0px' //-1 * eleft + 'px'
		e.marginTop = '';
	      //}



	      if (!c && !yt6.ytm) { //tbg is turned off on default sized players
	//	e.display = 'none'
	//	e.position = ''
	      } else {
		  e.position = 'absolute'
		  //e.width = '100%'
		}

	    } else {
	        e.marginLeft = '0px'
	        yt6.api.insertBefore(yt6.tbg, yt6.api.firstChild)//ptc.insertBefore(yt6.tbg, ptc.firstChild)
	        yt6.osw.style.height = yt6.osw.offsetHeight + 'px'
	        yt6.osw.style.marginTop = -1 * yt6.osw.offsetHeight + 'px'
	        if (!playlist) yt6.wsb.style.marginTop = '16px'
	        if (!yt6.x && !c && p && p.style.width == 'auto') p.style.width = yt6.osw.style.width = windowwidth + 'px'
	        if ((windowwidth + yt6.sb) >= 657 && (yt6.x || yt6.flash.forced)) yt6.osw.setAttribute('hidden','')

		if (!yt6.x) {
		  if (p.tagName == 'EMBED') {
		    if (!(yt6.layout == 16 && !yt6.mobile && !yt6.ytm)) yt6.tbg.style.width = clone(a.style.left)
		    p.style.position = 'absolute'
		  }
		  a.style.left = ''
		}
		
	      }

	if (ptc && !yt6.x && !c && !yt6.ytp.fullscreen) ptc.style.top = '16px'
	if (!yt6.wide && (windowwidth + yt6.sb) < 1000) ptc.style.top = ''


  }


  //2016-end
 }


  } else {//a.style != null
/*
	  if (yt6.ytg) {
	    //l.style.marginTop = ''
	    if (yt6.size && yt6.size !='default') {
		yt6.wsb.style.top = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight) + 'px'
		api.left = Math.abs(gid('player').style.width.replace('px','') - api.width.replace('px','')) / 2 + 'px'
		var area = gid('player-area').innerHTML
		if (area.split('width: ')[1]) {
		  var x = ( 1 * api.width.replace('px','') - area.split('width: ')[1].split('px;')[0]) / 2
//console.log(x)
		  if (x < gid('player').style.left.replace('px','').replace('-','')) x = -1 * gid('player').style.left.replace('px','') / 2
//console.log(x)
		  api.left = x + 'px'
		}
		gid('player-area').style.height = h + 'px'
		var x = gid('player-area').parentNode.offsetHeight - h
		if (x >= 0) x = 0
		api.top = x + 'px'
	    } else api.left = '0px'
	  }
*/


    if (yt6.ytg) {//ytg-persistent-player

	yt6.tbg.style.setProperty('display','none','')

	var style = yt6.ytg.getAttribute('style')
	if (style) try {
	  yt6.ytg.style.width = style.split('width: ')[1].split(';')[0] + 'px'
	  yt6.ytg.style.height = style.split('height: ')[1].split(';')[0] + 'px'
	  yt6.ytg.style.left = style.split('left: ')[1].split(';')[0] + 'px'
	  yt6.ytg.style.top = style.split('top: ')[1].split(';')[0] + 'px'
	} catch(e) {}

	if (bm0 && bm0.parentNode.getAttribute('id') != 'player-api') { 
	  var z = gid('player-api')
	  z.appendChild(p)
	  z.appendChild(bm0)
	  var of = (yt6.wallpaper) ? 'visible' : 'hidden'
	  z.setAttribute('style','overflow: ' + of)
	  z = z.style
	  z.width = yt6.ytg.style.width
	  z.height = yt6.ytg.style.height
	  z.left = yt6.ytg.style.left
	  z.top = yt6.ytg.style.top
	} else {
	    //if (api.display != 'none') api.display = 'none'
	    //if (yt6.ytg.style.display != 'none') yt6.ytg.style.display = 'none'
	  }

	var pa = gid('player-area'); if (pa) pa = pa.firstElementChild
	if (!pa && document.getElementsByTagName('ytg-watch-footer')[0]) {
	  var div = document.createElement('div')
	  div.id = 'player-container'
	  gid('player-area').appendChild(div)
	}

    } else api.display = 'none'


    }


    if (yt6.mobile) {

	if (!h) { h = gid('player-container-id').offsetHeight; yt6.h = h + 'px' }

	var top = (yt6.mhp) ? (h + yt6.mhp.offsetHeight) : 0
	var mob = gid('player-container-id')//yt6.api.parentNode
	if (yt6.api && mob) {
	  var height = (h - mob.offsetHeight)
	  if (height >= 0) {
	    if (bm0) bm0.style.top = '0px'
	    if (height) yt6.api.style.height = height + 'px'
	    //mob.style = ''
	  } else {
		yt6.api.style.height = ''
		//mob.style.top = -1 * (mob.offsetHeight - top) + 'px'
		height = (h - mob.offsetHeight)
		//if (yt6.tbg) yt6.tbg.style.top = ''//-1 * height + 'px'
		//if (bm0) bm0.style.top = -1 * height + 'px'
		yt6.api.style.height = height + 'px'
		//mob.style = ''
		if (bm0) bm0.style.top = '0px'
	    }
	  if (yt6.tbg) yt6.tbg.style.top = ''
	}

	if (p1)
	if (yt6.aspect_ratio >= w/h) {
	  p1.style.top = (h - p1.style.height.replace('px','') + 1*yt6.t) / 2 + 'px'
	  p1.style.left = (yt6.l || 0) + 'px'
	} else {
	    p1.style.top = (yt6.t || 0) + 'px'
	    p1.style.left = (w - p1.style.width.replace('px','') + 1*yt6.l) / 2 + 'px'
	  }

	var y = document.getElementsByTagName('ytm-playlist-panel-header')[0]
	if (y) { y.style.position = 'fixed'; y.style.width = '100%'; y.style.top = (top) ? top + 'px' : '' }

	if (yt6.wna) {
	  if (yt6.mobile) {
	    var z = gc('player-controls-pb')[0]
	    if (z) { z = z.currentStyle || window.getComputedStyle(z, null)
	      if (z && z.bottom && 1 * z.bottom.replace('px','') < -20)
		yt6.wna.style.padding = (yt6.x) ? '' : '14px 0 0 0' // Chromium's mobile ytplayer may overlap our control panel, need some distance
	    }
	  }
	  if (top) { yt6.wna.style.top = top + 'px'; top = (top + yt6.wna.offsetHeight) } else { yt6.wna.style.top = ''; top = (h + 44) }
	}
	var height, height = (yt6.p && yt6.p.offsetHeight) ? yt6.p.offsetHeight : 0
	var z = document.getElementsByTagName('ytm-playlist-controls')[0]
	if (z) { z.style.position = 'fixed'; z.style.right = '0px'; z.style.top = (top || y.getBoundingClientRect().bottom) + 'px'; z.style.zIndex = 1 }
    }


  if (yt6.ytp.embed) {
    e.width = (windowwidth - w > 0 && !yt6.oldbrowser) ? (windowwidth - w) / 2 + 'px' : '0px'
    if (bm0) {
	bm0.style.left = (c) ? e.width : '0px'
	if (yt6.x) bm0.style.top = (windowheight >= 1 * bm0.style.height.replace('px','')) ? (windowheight - 1 * bm0.style.height.replace('px','')) / 2 + 'px' : '0px'; 
    }
  }

  e.width = e.width.replace('px','') - 1 + 'px'


  // cloneNodes modifications applied to original
  if (p1_) p1_.setAttribute('style', p1.style.cssText)
  if (api_) api_.setAttribute('style', api.cssText)
  if (bm0_) bm0_.setAttribute('style', bm0.style.cssText)
  if (mep_) mep_.setAttribute('style', mep.style.cssText)
  if (a)
    if (yt6.layout == 16) {
	if (!yt6.wide) a.style.left = ''
	if (a_) a_.setAttribute('style', a.style.cssText)
    } else z.setAttribute('style', a.style.cssText)
  // eon of cloneNodes


}//scaling



if (yt6.tbg) {
  if (yt6.ytm) {
    yt6.tbg.style.position = 'absolute'
    yt6.tbg.style.height = '100%'
    var z = gid('theater-right')
    if (z) z.style.height = '100%'
  } else { // tbg is turned off on default sized players
  //    yt6.tbg.style.display = (!yt6.mobile && !(yt6.layout == 12 && yt6.wide) && (!yt6.size || yt6.size == 'default')) ? 'none' : '' // || yt6.ytm
    }
}

var a = pcont()
if (yt6.layout == 16 && a) {
 a.style.width = (!yt6.ytp.fullscreen && !yt6.wide) ? '' : '100%'
 a.style.height = (!yt6.ytp.fullscreen) ? '' : '100%'
}


if ((p1 != null) && (yt6.x)){
  if (mep && mep.getAttribute('class') && (1 * mep.getAttribute('class').indexOf('mejs-container-fullscreen') == -1)) {
    yt6.fullscreen = false;
  }
  if (yt6.fullscreen == true) {
    if (p1.style != '') {
      yt6.p1style = p1.getAttribute('style')
      p1.style.width = '100%'
      p1.style.height = '100%'
      p1.style.left = '0px'
      p1.style.top = '0px'
      mep.style.width = '100%'
      mep.style.height = '100%'
    }
  } else {
      if (yt6.p1style) { p1.setAttribute('style', yt6.p1style); delete yt6.p1style }
    }
}


  var z = gclass("html5-progress-bar")
  if ((z != null) && (z[0] != null)) z[0].style.maxWidth = w + 'px'
  if (!yt6.ytp.fullscreen) {
    var z = gc('ytp-chrome-bottom')
    if ((z != null) && (z[0] != null)) { z[0].style.width = w - 24 + 'px'; z[0].style.left = '12px' }
  }
  
  var z = gclass("mejs-layer")
  var x = gc('mejs-overlay mejs-layer mejs-overlay-play')[0]
  if (x != undefined) z.push(x)
  if ((z != null) && (z[0] != null)) {
    for(i=0;i<z.length-1;i++){
      if ( z[i] ) {
        z[i].style.width = w + 'px'
        z[i].style.height = (z[i].className != 'mejs-captions-layer mejs-layer') ? h + 'px' : 'auto';
        if (z[i].getAttribute('class') == 'mejs-overlay mejs-layer mejs-overlay-play') {
          var x = z[i].firstChild.currentStyle
          if ((x == undefined) && (typeof window.getComputedStyle != 'undefined')) var x = window.getComputedStyle(z[i].firstChild, null)
	  var y = z[i].style.display
	  z[i].style.width = x.width.replace('%','px')
	  z[i].style.height = x.height.replace('%','px')
	  var dx = (p1) ? p1.offsetWidth : screen.width
	  var dy = (p1) ? p1.offsetHeight : screen.height
	  if (!(yt6.fullscreen && !dx && !dy)) try {
	    z[i].style.left = ((p1.style.width != '100%') && (p1.style.height != '100%')) ? (w - x.width.replace('px','')) / 2 + 'px' :  (dx - x.width.replace('px','')) / 2 + 'px'
	    z[i].style.top = ((p1.style.width != '100%') && (p1.style.height != '100%')) ? (h - hdiff -x.height.replace('px','')) / 2 + 'px' : (dy - x.height.replace('px','')) / 2 + 'px'
	  } catch(e) {}
	  z[i].style.display = y
        }
      }
    }
  }
  var l = gc('mejs-overlay mejs-layer')[0]
  if (l) {
    if (x && x.style && x.style.width && x.style.height) {
      l.style.width = x.style.width
      l.style.height = x.style.height
    }
    l.style.left = (yt6.fullscreen && x && x.style && x.style.left) ? x.style.left : ''
    l.style.top = (yt6.fullscreen && x && x.style && x.style.top) ? x.tyle.top : ''
  }
  var z = gc('mejs-captions-text')[0]
  if (z) {
    if ( typeof z === 'object') { 
	try { z.style.width = (bm0) ? bm0.style.width : p.parentNode.parentNode.offsetWidth + 'px' } catch(e){}
	var y = gclass('captions-text'); //yt's own captions
	for(i=0;i<y.length;y++) if (y[i] && y[i].parentNode.getAttribute('id') && y[i].parentNode.getAttribute('id').indexOf('caption-window') == 0) {
	  y = y[i].firstChild.offsetHeight; break
	}
	y = (typeof y == 'number' && y) ? y : Math.ceil(yt6.api.offsetHeight / 23); //0.9 + (h / 32.5) + (407 / h)

	if (1 * y < 9.5) y = '9.5px'
	//if (1 * z.style.fontSize.replace('px','') > 23.5) z.style.fontSize = '23.5px'
	z.style.fontSize = y + 'px'
	
    }
    z.parentNode.parentNode.style.zIndex = (Array.isArray(yt6.A_) && yt6.player1 && yt6.player1.media && yt6.A_[itag(yt6.player1.media.src)]) ? 1 : 0
  }

  var x = [gc('mejs-sourcechooser-selector'), gc('mejs-captions-selector'), gc('mejs-speed-selector')]
  for(i=0;i<x.length;i++){
    if ((x[i] != null) && (x[i][0] != null)) {
      var z = x[i][0];
      if ((gc('mejs-clear')[0]) && (typeof z != 'undefined')){
        //z.style.maxWidth = "147px"; z.style.minWidth = "130px"
        function src_chooser(xz, h){
	  if (xz.firstChild != null) {
	    var xh = xz.firstChild.offsetHeight, xw = xz.firstChild.offsetWidth
	    if (xz.getAttribute('class') == 'mejs-sourcechooser-selector' && xz.firstChild.nextSibling) { xh = xh + xz.firstChild.nextSibling.offsetHeight }
	    return [xh, xw]
	  } else return [h-45,0]
	}
        var src_chooser_height = src_chooser(z, h)[0]
        var src_chooser_width = src_chooser(z, h)[1]
        if (src_chooser_height)
	if (Math.abs(h - 40) < src_chooser_height) {
          z.style.height = (h) ? h - 51 + 'px' : '120px'
          z.style.width = '145px';//((src_chooser_width) + 15) + 'px'
          z.style.overflowY = 'scroll'
        } else {
            z.style.height = src_chooser_height + 1 + 'px'
            z.style.width = '130px';//(src_chooser_width + 0) + 'px'
            z.style.overflowY = 'hidden'
          }
        z.style.zIndex = 2
      }
    }
  }

  if (yt6.w7a != null) yt6.w7a.style.display = 'none'

  var mhp = (yt6.mhp) ? ((yt6.layout != 16 || yt6.ytm) ? yt6.mhp.offsetHeight : yt6.mhp.parentNode.parentNode.offsetHeight) : 0
  if (mhp < 30 || mhp > 112) mhp = (!yt6.ytp.embed) ? 60 : 90
  var z = gid('bm3')
  if (z) z.style.top = mhp - 2 + 'px'


  if (!yt6.x)
  //var flexyleft = yt6.flexyleft = 
  ythtml5_size()


  if (typeof yt6.wallpaper == 'string') wallpaper()

  if (yt6.ytp.embed && yt6.oldbrowser && yt6.p && yt6.p.tagName == 'EMBED') { yt6.osw.style.height = '0px' }

    if (yt6.layout == 16) {
      var z = gid('secondary-inner')
      if (z) {
	z.style.position = (yt6.wallpaper && !yt6.wide) ? 'absolute' : ''
	z.style.marginTop = (yt6.wallpaper && !yt6.wide && (yt6.size != 'default' || !yt6.pls)) ? yt6.h : ''
	if (!yt6.wide) {
	  if (yt6.pls && yt6.wallpaper && yt6.size != 'default' && typeof yt6.wallpaper != 'string') yt6.pls.style.marginTop = ''
	  if (yt6.wsb && !yt6.pls) {
	    if (!yt6.wallpaper && yt6.size == 'default') { yt6.wsb.style.marginTop = '' } else
	    yt6.wsb.style.marginTop = (yt6.wallpaper) ? '10px' : (1 * yt6.h.replace('px','') + 10) + 'px'
	  }
	  if (yt6.pls) yt6.pls.style.marginTop = (yt6.wallpaper || (!yt6.wallpaper && yt6.size == 'default')) ? '' : yt6.pls.style.marginTop //yt6.h
	}
      }
    }

  if (yt6.ytp.embed && yt6.loaded >= 4 && yt6.tbg && yt6.tbg.parentNode) {
    //if (yt6.size != 'default' && !(yt6.p && yt6.p.style && yt6.yt_l && yt6.p.style.left == yt6.yt_l + 'px') && !(bm0 && bm0.style && yt6.l && bm0.style.left == yt6.l + 'px')) {
      yt6.tbg.style.width = '100%'; yt6.tbg.style.height = '100%'
    //}
    if (bm0) try { if (yt6.size != 'default' && bm0.style.left == '0px' && Math.abs(windowwidth - w) > 4) { bm0.style.left = (windowwidth - w) / 2 + 'px' } } catch(e){}
  }

  //if (!flexyleft && p1) flexyleft = 1 * p1.style.left.replace('px','')

  if (mep) poster_resize(w, h, mep)


if (p1 && p1.parentNode) if (strLeft || strTop) {//propUpdate
    if (yt6.l && strLeft) p1.style.left = (!me_flash_[0]) ? (1 * p1.style.left.replace('px','') + 1 * yt6.l) + 'px' : yt6.l + 'px'
    if (yt6.t && strTop) p1.style.top = (!me_flash_[0]) ? (1 * p1.style.top.replace('px','') + 1 * yt6.t) + 'px' : yt6.t + 'px'
    if (yt6.wallpaper && poster) {
      if (yt6.l && strLeft) poster.style.left = yt6.l + 'px'; poster.style.marginLeft = ''
      if (yt6.t && strTop) poster.style.top = yt6.t + 'px'; poster.style.marginTop = ''
      poster.style.width = w + 'px'
    }
}

  if (yt6.player1 && typeof yt6.player1.setControlsSize == 'function') yt6.player1.setControlsSize()

  if (yt6.ytg) {  //ytg-persistent-player repositioning
	delete yt6.ww //= windowwidth
	yt6.ytp.style = ytp_style

	try {
	  mouseEvt.initMouseEvent('DOMMouseScroll',true,true,window,2,0,0,0,0,0,0,0,0,0,null)
	  yt6.ytg.dispatchEvent(mouseEvt)
	  mouseEvt.initMouseEvent('DOMMouseScroll',true,true,window,-2,0,0,0,0,0,0,0,0,0,null)
	  yt6.ytg.dispatchEvent(mouseEvt)//eventType,canBubble,cancelable,AbstractView,detail/count, screenX,screenY,clientX,clientY,ctrlKey,altKey,shiftKey,metaKey,leftButton,relatedTarget
	} catch(e) {}
 
	var z = document.getElementsByTagName('ytg-scroll-pane')[0]
	if (z) z.scrollTop = 0

	  var sb = gid('sidebar') || document.getElementsByTagName('ytg-watch-sidebar')[0]
	  var pa = gid('player-area')
	  if (sb && pa) {
	      if (sb.getAttribute('id')) {
		pa.style.height = h + 'px'; if (yt6.size && yt6.size != 'default') sb.style.top = h + 'px'
	      } else { sb.style.marginTop = -1 * (pa.style.height.replace('px','') - h) + 'px' }
	  }
     var z = gid('player-api'); if (z && document.getElementsByTagName('ytg-scroll-pane')[0]) z.style.top = 1 * z.style.top.replace('px','') - document.getElementsByTagName('ytg-scroll-pane')[0].scrollTop + 'px'
  }

  if (yt6.player1 && typeof yt6.player1.showControls == 'function') try {
    if (yt6.x) {
      if (!yt6.player1.media.paused) {
	var bp = gclass("mejs-overlay-play")[0]
	//if (bp) bp.style.visibility = 'hidden'
      } else yt6.player1.showControls(true)
    } else yt6.player1.hideControls(false)
  } catch(e){}

  if (yt6.mobile && yt6.osw) if (yt6.osw.className == 'player-api' || yt6.osw.offsetHeight > h) { yt6.osw.className = 'player-api'; yt6.osw.style.height = '0px' }


  if (chat) if (yt6.layout == 12 || yt6.ytg) {
    if (chat && playlist) chat.style.top = playlist.style.marginTop
  } else {
      //chat.style.marginTop = yt6.wsb.style.top
      yt6.wsb.removeAttribute('style')
    }

}



function switch_players(iframe) {


  var p = player(), bm0 = gid('bm0'), p1
  //if (p && p.getAttribute('id').indexOf('player_uid_') == 0) p.setAttribute('id','movie_player')
  if (!p || (p && !p.parentNode)) {
    var z = gid('movie_player_to_dispose'), p1 = gid('movie_player1') || gid('movie_player')
    if (p1 && p1.getAttribute('id') == 'movie_player' && p1.parentNode == 'movie_player_to_insert') p = p1 
    if (z && z.childNodes.length) {
      var z = z.childNodes
      try {
	for(i=0;i<z.length;i++)
	if ((!p || p.parentNode == null) && z[i] && typeof z[i].getAttribute == 'function' && z[i].getAttribute('id') && z[i].getAttribute('id').indexOf('player_uid_') == 0) {
	  var x = (p1) ? '' : '1'; z[i].setAttribute('id','movie_player' + x)
	  yt6.api.insertBefore(z[i], yt6.api.firstChild)
	  p = player(), p = yt6.p
	}
      } catch(e) {}
    }
  }

    if (!yt6.skeleton || (yt6.ytp.embed && yt6.flash.forced)) {
	var p1 = gid('movie_player1')
	if (p1) {
	  if (yt6.layout == 12 || yt6.ytg) {
	    yt6.api = (!yt6.ytp.embed) ? gid('player-api') : gid('player')
	  } else {
	      if (!yt6.mobile) {
		yt6.api = (!yt6.ytp.embed) ? ((!yt6.ytm) ? document.getElementsByTagName('ytd-player')[0] || pcont() : gc('player-wrapper style-scope ytmusic-player')[0]) : gid('player')
	      }
	    }
	  if (yt6.api && yt6.api.getAttribute('id') == 'ytd-player') {
		var c = yt6.api.children;
		for (i=0;i<c.length;i++){
		  if (c[i] && c[i].getAttribute('id') == 'container' && c[i].getAttribute('class') && c[i].getAttribute('class').indexOf('ytd-player') > -1) { yt6.api = c[i]; break }
		}
	  }

	  if (p1.getAttribute('flashvars') != '') {
	    if (!(p && p.tagName == 'IFRAME' && p.state == 1)) {
	      if (p) if (p.tagName == 'IFRAME' && !iframe) { // iframe may have already been moved, don't get into infinite loop
		undo_iframe()
	      } else {
		  gid('movie_player_to_dispose').appendChild(p)
		}
	      yt6.api.insertBefore(p1, yt6.api.firstChild)
	      p1.setAttribute('id','movie_player')
	      var p = player(), p = yt6.p
	    } else {
		//try { p1.pauseVideo(); v_(p1).pause() } catch(e){}
	      }
	  } else if (p && p.tagName != 'IFRAME') p1.parentNode.removeChild(p1)
	}

	if (p && p.tagName == 'IFRAME')
	$waitUntil(function() {
	    var p0 = gid('movie_player0');
	    if (p0 && typeof p0.getPlayerState == 'function' && p0.getPlayerState() == 1) return true
	  },
	  function(){
	    var p0 = gid('movie_player0');
	    if (p0) { p0.pauseVideo(); p0.setAttribute('id','movie_player1') }
	  },400,4000)

    }

    if (!(p && p.parentNode)) { var p = gid('movie_player'), p0 = gid('movie_player0')
      if (p && p.parentNode == gid('movie_player_to_insert')) p0 = p
      if (p0 && !(yt6.ytp.embed && p0 != p)) {
	yt6.api.insertBefore(p0, yt6.api.firstChild)
	var p = player()
      }
    }

  if (p && bm0 && p.parentNode && bm0.parentNode != p.parentNode && p.parentNode == yt6.api) {//!= gid('movie_player_to_dispose') ) {
    if (p.nextSibling) {
      p.parentNode.insertBefore(bm0, p.nextSibling)
    } else p.parentNode.appendChild(bm0)
    //p.parentNode.insertBefore(p, p.parentNode.firstChild) //moving argound the yt player object -- especially the flash variant on IE -- at this time can cause the removal of its javascript methods which would provide us control
  }
  var p1 = gid('player1')
  var p2 = gid('player2')
  var flashvars = getFlashVars();//player().getAttribute('flashvars')
  var me_flash = getElementsByAttribute(yt6.api,"object","name","me_flash")[0]

      var z = yt6.osw
      if (z == gid('placeholder-player')) {
        if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) gid('placeholder-player').innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>'
        var z = z.firstChild
      }


  if (p1 != null) {
    try { p1.pause() } catch(e) {}
    try { p2.pause() } catch(e) {}
  }
  var x = gclass('mejs-shim')[0]
  if (x && typeof x.pauseMedia == 'function') try { x.pauseMedia() } catch(e) {}



  if ( !!bm0 && bm0.style.visibility === 'hidden') { // && !!p && p.style.visibility != 'hidden'
    yt6.x = true
    if (yt6.ytm) {
      var x = gc('song-media-controls style-scope ytmusic-player')[0]; if (x) x.setAttribute('hidden','')
      var x = gid('song-image'); if (x) x.style.display = 'none'
      var x = gid('song-video'); if (x) x.style.display = 'block'
    }
    if (yt6.mobile) {
      var x = gid('player-control-container'); if (x) x.setAttribute('hidden','')
      bm0.style.zIndex = (shorts()) ? '1' : ''
    }
    var x = gc('mejs-controls')[0]
    if (x) x.style.display = ''
    //yt6.wmode = p.getAttribute('wmode')
    if (gid('iaextractor-menu')) { gid('iaextractor-menu').parentNode.removeChild(gid('iaextractor-menu')) }
    if (p && p.id == 'movie_player') {
      if (p.tagName == 'EMBED') {
	  p.style.width = '0px'
	  p.style.height = '0px'
	  if (p.name != 're-embed2') { try { p.pauseVideo(); p.postMessage("pauseVideo", "*") } catch(e){ } } else { try { yt6.embed.pause() } catch(e){} }
	  if (typeof p.style.setProperty == 'function') {
	    var x = (typeof p.click == 'function') ? 'important' : ''
	    p.style.setProperty('width', '0px', x)
	    p.style.setProperty('height', '0px', x)
	    if (p.getPlayerState != 'function') p.style.visibility = 'hidden'
	    if (p.style.display == 'none') p.style.display = 'block'
	  } else {
	      p.style.display = 'none'
	      if (me_flash) me_flash.style.display = ''
	    }
	  //resize_layers( bm0.style.width, bm0.style.height, false )
      } else {
	  try { gc('video-stream html5-main-video')[0].pause() } catch(e) {}
	  if (p.name == 're-embed2') try { yt6.embed.pause() } catch(e){}
	  p.style.visibility = 'hidden'
	  //p.style.display = 'none'
	  //if (yt6.ytp.controls) yt6.ytp.controls.style.display = 'none'
	  if (p.tagName == 'DIV' && p.getAttribute('flashvars')) p.removeAttribute('flashvars')
	  //p.setAttribute('class','forced flashplayer')//html5-video-player ytp-hide-info-bar
	}
    }
    if (p && p.getAttribute('name') == 'me_flash') {
      if (typeof p.pauseMedia == 'function') {
	try { p.pauseMedia(); p.parentNode.paused = true } catch(e) {}
      }
      if (me_flash) me_flash.style.display = ''
    }
    if (yt6.flash.forced && me_flash) me_flash.style.display = ''

      if (yt6.player1 && yt6.player1.media && yt6.player2 && yt6.player2.media) try {
	 yt6.player2.media.currentTime = yt6.ct = yt6.player1.media.currentTime
         yt6.player2.media.playbackRate = yt6.player1.media.playbackRate
      } catch(e) {}

    bm0.style.display = 'block'
    bm0.style.visibility = 'visible'

    if (yt6.player2) yt6.player2.media.volume = yt6.player1.media.volume
    try { yt6.yt_ct = yt6.p.getCurrentTime(); } catch(e) { yt6.yt_ct = 0 }

  } else {

      yt6.x = false
      if (yt6.ytm) {
	var x = gc('song-media-controls style-scope ytmusic-player')[0]; if (x) x.removeAttribute('hidden')
	var x = gid('song-image'); if (x && p) if (p.tagName != 'EMBED') { x.style.display = ''; x.removeAttribute('style') } else x.style.display = 'none'
	var x = gid('song-video'); if (x && p) if (p.tagName != 'EMBED') { x.style.display = ''; x.removeAttribute('style') } else x.style.display = 'block'
      }
      if (yt6.mobile) {
	var x = gid('player-control-container'); if (x) x.removeAttribute('hidden')
      }
      var x = gclass("mejs-overlay-play")[0]
      if (x) x.style.display = 'none'
      var x = gc('mejs-controls')[0]
      if (x) x.style.display = 'none'
      if (yt6.player1) try { yt6.player1.hideControls(false); gclass("mejs-overlay-play")[0].style.visibility = 'hidden' } catch(e){}
      if (bm0) bm0.style.visibility = 'hidden'
      //p.style.display = ''
      var p = gid('movie_player'); if (!p && bm0 && bm0.parentNode == gid('movie_player_to_dispose') && yt && yt.player){}
      if (p && p.id == 'movie_player') {
	if (p.tagName == 'EMBED') {
	  p.style.width = ''
	  p.style.height = ''
	  if (typeof p.style.setProperty == 'function') {
	    p.style.setProperty('width', z.style.width, '')
	    p.style.setProperty('height', z.style.height, '')
	    p.style.visibility = 'visible'
	  } else {
	      p.style.display = ''
	      if (me_flash) me_flash.style.display = 'none'
	    }
	  p.style.opacity = '1.1'
	  var p = gid('movie_player')
	} else {
	    p.style.visibility = 'visible';
	    if (yt6.layout == 16) p.style.display = 'inline-block'
	    //if (yt6.ytp.controls) yt6.ytp.controls.style.display = ''
	    if (p.tagName == 'DIV' && p.getAttribute('flashvars')) p.removeAttribute('flashvars')
	    //p.setAttribute('class','forced flashplayer')//html5-video-player ytp-hide-info-bar
	  }
	removeEL(p, "onStateChange", Sync, false)
	addEL(p, "onStateChange", Sync, false)
	removeEL(p, "onPlaybackQualityChange", Mqch, false)
	addEL(p, "onPlaybackQualityChange", Mqch, false)
      }

      if (p && p.getAttribute('name') == 'me_flash') {
	  //if (p.getAttribute('wmode') != yt6.wmode) { 
	    var param = getElementsByAttribute(p,"param","name","flashvars")
	    if ((param != null) && (param[0] != null)) {
	      var file = param[0].getAttribute("value").split("&file=")[1]
	      param[0].setAttribute("value", param[0].getAttribute("value").split("&file=")[0])
	      param[0].setAttribute("value", param[0].getAttribute("value").split("&file=")[0] + "&file=" + file)
	    }
	  //}

	  //yt6.wmode = p.getAttribute('wmode')
	  p.style.opacity = '1.1'
        if (typeof p.pauseMedia == 'function') {
	  try { p.pauseMedia(); p.parentNode.paused = true } catch(e) {}
        }
      }

      if ( p && typeof p.getPlayerState == 'function' && yt6.player2 && yt6.player2.media )
      try {
        if (v_(p))
	//if (v_(p).getAttribute('src')) {
	  //if (v_(p).getAttribute('src').indexOf('googlevideo') == -1) p.setPlaybackRate( yt6.player2.media.playbackRate )
	//} else {
	    p.setPlaybackRate(yt6.speed); if (v_(p)) v_(p).playbackRate = yt6.speed//p.getPlaybackRate())
	  //}
        yt6.player2.media.playbackRate = p.getPlaybackRate()
	yt6.player2.media.currentTime = p.getCurrentTime(); p.playVideo(); p.pauseVideo(); yt6.player2.media.pause()
	yt6.ytp.speed()
	

      } catch(e) {}

      try {
	if (p.isMuted()) { yt6.ytp.vol = 0 } else {
	  var z = v_(p); if (z && z.src && z.src.indexOf('http') == 0) yt6.player2.media.volume = parseFloat(p.getVolume() / 100)
	}
	if (yt6.pre_ad !== true && yt6.ad_muted) {
	  var b = v_(yt6.p); if (b) b.volume = (typeof yt6.ytp.vol_b == 'number') ? clone(yt6.ytp.vol_b) : 1
	  try { p.unMute(); yt6.ad_muted = false } catch(e) {}
	}
      } catch(e){}

    }

  no_cards()

  //if (yt6.size == 'media') aspect('media')
  if (yt6.btn.play) { yt6.btn.play[yt6.txt] = 'play'; try { gc('play snarl-button yt-uix-button-text')[1].innerHTML = 'play' } catch(e) {} }
  set_controls()

}





function ythtml5_size() {

  var p = player(), p = yt6.p, strLeft, strTop//, bm0 = gid('bm0')

  if (!p) {
    var a = {}; a.style = {}
    a.style.width = clone(yt6.w) //(bm0) ? clone(bm0.style.width) : clone(yt6.w)
    a.style.height = clone(yt6.h) //(bm0) ? clone(bm0.style.height) : clone(yt6.h)
    var b = a.style
  } else var b = p.style

  if ( typeof p.getPlayerState == 'function' && !p.getAttribute('flashvars') && mep_obj() ) {

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      var z = z.firstChild
    }
    var o = z.getAttribute('style'); if (o) { try { z.style = '' } catch(e){}; z.removeAttribute('style') }
    //if (z.getAttribute('id') != 'player') {
      var y = z.currentStyle || window.getComputedStyle(z, null)
function nop(){//    } else {
	var y = {}
	y.width = z.offsetWidth + 'px'
	y.height = z.offsetHeight + 'px'
	y.left = z.offsetLeft + 'px'
	y.top = z.offsetTop + 'px'
      }

    if (z.getAttribute('id') != 'player') {
      yt6.hdiff = parseInt( y.height.replace('px','') - ((y.height.replace('px','') / 60 >>0) * 60) )
      var hdiff = yt6.hdiff
      if (hdiff == undefined) hdiff = 30
    } else var hdiff = 0

    if (o != null) z.setAttribute('style', o)

    //if (yt6.mobile) return void 0

    //if (yt6.navigation && !yt6.x) yt6.aspect_ratio = (yt6.w.replace('px','') / yt6.h.replace('px',''))

    if (p) var webgl = get_webgl()
    //var bm0_; if (bm0) bm0_ = bm0.getAttribute('style')
    //var bm0 = (bm0) ? bm0.style : p.style
    //var yt = gc('html5-video-content')[0].style


    var v = gc('video-stream html5-main-video')[0]


    if (v && yt6.loaded >= 4) {//== true) {
      if (yt6.yt_l != yt6.yt_l_) strLeft = v.style.left
      if (yt6.yt_t != yt6.yt_t_) strTop = v.style.top
    } else {
	//yt6.yt_l = clone(v.style.left); yt6.yt_l_ = clone(v.style.left)
	//yt6.yt_t = clone(v.style.top); yt6.yt_t_ = clone(v.style.top)
      }


    var yt = v.style

    var x = Math.abs(1 * b.height.replace('px','') - hdiff - v.style.height.replace('px','') - 0)
    if (!yt6.navigation && (!yt6.x || yt6.player1.isLoaded !== false))
    //if ( (1 * b.width.replace('px','')) < ((b.height.replace('px','') - hdiff) * yt6.aspect_ratio )) {
    if ( (1 * b.width.replace('px','') - ((b.height.replace('px','') - hdiff) * yt6.aspect_ratio )) < 2) {
	v.style.width = (!yt6.ytp.fullscreen) ? b.width : ((yt6.size == 'default') ? screen.width + 'px' : clone(yt6.w))
	if (x > 0 && x < 1) {
	  //yt.height = v.style.height
	} else v.style.height = (!yt6.ytp.fullscreen) ? b.width.replace('px','') / yt6.aspect_ratio - 0 + 'px' : ((yt6.size == 'default') ? screen.height + 'px' : clone(yt6.h))
	v.style.left = (!yt6.ytp.fullscreen || (yt6.mpb && yt6.mpb.hasAttribute('active'))) ? '0px' : (screen.width - v.style.width.replace('px','')) / 2 + 'px'
	v.style.top = (!yt6.ytp.fullscreen || (yt6.mpb && yt6.mpb.hasAttribute('active'))) ? ((( 1 * b.height.replace('px','') - v.style.height.replace('px','') ) / 2) - (hdiff / 2)) + 'px' : (screen.height - v.style.height.replace('px','')) / 2 + 'px'
	if (webgl) {
	  if (!( (1 * b.height.replace('px','')) < (b.width.replace('px','') / (webgl.width / webgl.height)) )) {
 	    webgl.style.width = (!yt6.ytp.fullscreen) ? b.width : ((yt6.size == 'default') ? screen.width + 'px' : clone(yt6.w))
	    webgl.style.height = Math.round(webgl.style.width.replace('px','') / (webgl.width / webgl.height)) + 'px'
	    webgl.parentNode.style.left = '0px'
	    webgl.parentNode.style.top = Math.round(v.style.top.replace('px','') - ((1 * webgl.style.height.replace('px','') - 1 * v.style.height.replace('px','')) / 2)) + 'px'
	  } else {
		webgl.style.height = (!yt6.ytp.fullscreen) ? 1 * b.height.replace('px','') - hdiff + 'px' : ((yt6.size == 'default') ? screen.height + 'px' : clone(yt6.h))
		webgl.style.width = ((webgl.style.height.replace('px','') - hdiff) * (webgl.width / webgl.height)) + 'px'
		webgl.parentNode.style.left = Math.round((b.width.replace('px','') - webgl.style.width.replace('px','') ) / 2) + 'px';
		webgl.parentNode.style.top = Math.round(v.style.top.replace('px','') - ((1 * webgl.style.height.replace('px','') - 1 * v.style.height.replace('px','')) / 2)) + 'px'
	    }
	}
    } else {
	v.style.width = (!yt6.ytp.fullscreen) ? ((b.height.replace('px','') - hdiff) * yt6.aspect_ratio ) + 'px' : ((yt6.size == 'default') ? screen.width + 'px' : clone(yt6.w))
	if (x > 0 && x < 1) {
	  //yt.height = v.style.height
	} else v.style.height = (!yt6.ytp.fullscreen) ? (1 * b.height.replace('px','') - hdiff) + 'px' : ((yt6.size == 'default') ? screen.height + 'px' : clone(yt6.h))
	v.style.left = (!yt6.ytp.fullscreen || (yt6.mpb && yt6.mpb.hasAttribute('active'))) ? ((b.width.replace('px','') - v.style.width.replace('px','') ) / 2) + 'px' : ((screen.width - v.style.width.replace('px','') ) / 2) + 'px'
	v.style.top = (!yt6.ytp.fullscreen || (yt6.mpb && yt6.mpb.hasAttribute('active'))) ? '0px' : ((screen.height - v.style.height.replace('px','') ) / 2) + 'px'
	if (webgl) {
	  webgl.style.height = (!yt6.ytp.fullscreen) ? 1 * b.height.replace('px','') - hdiff + 'px' : ((yt6.size == 'default') ? screen.height + 'px' : clone(yt6.h))
	  webgl.style.width = ((webgl.style.height.replace('px','') - hdiff) * (webgl.width / webgl.height)) + 'px'
	  webgl.parentNode.style.left = ((webgl.style.height.replace('px','') - webgl.style.width.replace('px','') ) / 2) + 'px'
	  webgl.parentNode.style.top = (v.style.top.replace('px','') - ((1 * webgl.style.height.replace('px','') - 1 * v.style.height.replace('px','')) / 2)) + 'px'
	}
      }

    var properties = ['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform']
    var z = gc('ytp-iv-video-content')[0]
    for(i=0;i<properties.length;i++){
      if ((z) && (typeof z.style[properties[i]] !== 'undefined')) { z.style[properties[i]] = 'none'; break }
    }
    if (v && yt6.yt_prop && yt6.propName) try { v.style[yt6.propName] = yt6.yt_prop } catch(e){}
  
  }

//var x = v || p; if (x) console.log(x.style.top); if (b) { console.log(b.height) } else console.log('no b')
if (p && v_(p)) {
  var v = v_(p)
} else var v = p


if (v) { var init = 0
  if (yt6.yt_l_0 == '') { init = 1
    yt6.yt_l = 0
    yt6.yt_l_ = 0
    if (!yt6.html5_fail && !(yt6.layout == 16 && p && p.tagName == 'EMBED' && p.style.marginLeft)) {
      yt6.yt_l_0 = 1 * clone(v.style.left.replace('px','')) || 0
    } else yt6.yt_l_0 = (!yt6.html5_fail) ? 1 * clone(v.style.marginLeft.replace('px','')) || 0 : 0
  }
  if (yt6.yt_t_0 == '') { init = 1
    yt6.yt_t = 0
    yt6.yt_t_ = 0
    if (!yt6.html5_fail && !(yt6.layout == 16 && p && p.tagName == 'EMBED' && p.style.marginTop)) {
      yt6.yt_t_0 = 1 * clone(v.style.top.replace('px','')) || 0
    } else yt6.yt_t_0 = (!yt6.html5_fail) ? 1 * clone(v.style.marginTop.replace('px','')) || 0 : 0
  }
}

if (p) {
  if ( (!yt6.wide && p != v) || (yt6.mpb && yt6.mpb.hasAttribute('active')) ) p.style.left = '' 
  var l = (yt6.yt_l && yt6.yt_l != yt6.yt_l_ && strLeft && !init)
  var t = (yt6.yt_t && yt6.yt_t != yt6.yt_t_ && strTop && !init)
  //if (l || t) {var left = (yt6.size != 'default') ? yt6.yt_l : ((yt6.yt_l_0 || 0) + yt6.yt_l)
    if (l) v.style.left = (yt6.size != yt6.prev_size && !yt6.flash.forced) ? (1 * v.style.left.replace('px','') + 1 * yt6.yt_l) + 'px' : yt6.yt_l + 'px'
    if (t) v.style.top = (yt6.size != yt6.prev_size && !yt6.flash.forced) ? (1 * v.style.top.replace('px','') + 1 * yt6.yt_t) + 'px' : yt6.yt_t + 'px'
  //}

  if (p && p.tagName == 'EMBED') {
    if (yt6.layout == 16 && p.style.marginLeft) { p.style.marginLeft = clone(v.style.left) } //; v.style.left = '0px'
  }

  if (yt6.ytp.embed) {
    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth)
    var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)
    if (yt6.tbg && yt6.size != 'default') {
      if (typeof yt6.wallpaper != 'string') p.style.left = (1 * yt6.tbg.style.width.replace('px','') + yt6.yt_l) + 'px'
    } else p.style.left = ( (!isNaN(windowwidth - p.offsetWidth)) ? (windowwidth - p.offsetWidth) / 2 : 0 ) + 'px'
    if (!yt6.x) p.style.top = (windowheight >= 1 * p.style.height.replace('px','')) ? (windowheight - 1 * p.style.height.replace('px','')) / 2 + 'px' : '0px'
  }

}
  //if (gid('bm0') && bm0_) gid('bm0').setAttribute('style', bm0_)

  return (v && v.style.left) ? parseFloat(v.style.left.replace('px','')) : ''
}


function aspect(a) {

  //if (yt6.mobile) a = 'default'
  yt6.prevSize = clone(yt6.size)
  var p1 = gid('player1')
  if (player()) var webgl = get_webgl(); //getElementsByAttribute(player(),'canvas','draggable','true')[0]
  yt6.strAspect = clone(yt6.size)
  if (yt6.mobile && yt6.api && yt6.api.parentNode) { yt6.api.style = ''; yt6.api.removeAttribute('style') }

  var class_0 = gid('player').getAttribute('class')
  if (!class_0 && typeof gid('player').outerHTML == 'string') var class_0 = gid('player').outerHTML.split('class="')[1].split('"')[0]
  if (class_0) {
    var class_1 = class_0.replace('small','small_a')
    if (!class_1 || (class_1 && class_1.indexOf('small_a') == -1)) class_1 = class_0.replace('medium','medium_a')
    if (!class_1 || (class_1 && class_1.indexOf('medium_a') == -1)) class_1 = class_0.replace('large','large_a')
  }


  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb;// - 1
  var mhp = (yt6.mhp) ? ((yt6.layout != 16 || yt6.ytm) ? yt6.mhp.offsetHeight : yt6.mhp.parentNode.parentNode.offsetHeight) : 0
  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight) //- mhp - 8;
  var hdiff = yt6.hdiff
  if (hdiff == undefined) hdiff = 30
  var dw = gid('aspect')
  var bm0 = gid('bm0')

  if (yt6.flash.forced) { //&& player() && player().parentNode.getAttribute('id') == 'movie_player_to_dispose') {
    //forceFlashplayerObject()
    var bc
    if (!yt6.ytp.embed && bm0 && bm0.parentNode.getAttribute('id') == 'movie_player_to_insert') {
      if (yt6.layout != 16 || yt6.ytg) {
        bc = gid('player-api')
      } else bc = (!yt6.ytm) ? document.getElementsByTagName('ytd-player')[0] || pcont() : gc('player-wrapper style-scope ytmusic-player')[0]
      if (!(yt6.layout == 12 && yt6.blocked && !yt6.html5_fail)) bc.appendChild(bm0) //S4w requires this line
    }
  }

  if (yt6.osw.getAttribute('id') != 'player') {
    var z = yt6.osw
  } else var z = yt6.osw.parentNode



    if (yt6.ytg) {
	var pp = gid('player')
        var ar = pp.style.width.replace('px','') / pp.style.height.replace('px','')
	var pa = gid('player-area'); if (bm0 && !bm0.ytg_oh && pa) bm0.ytg_oh = pa.style.height
	var sb = gid('sidebar') || document.getElementsByTagName('ytg-watch-sidebar')[0]
    }
    var playerwidth = (yt6.size != 'default' || (yt6.size == 'default' && wide_view())) ? Math.min( Math.round(((windowheight / 100 >>0) * 80) * yt6.aspect_ratio), windowwidth) : Math.min( Math.round(windowheight * yt6.aspect_ratio), windowwidth)
	if (yt6.size == 'default' && yt6.mpb && yt6.mpb.hasAttribute('active')) playerwidth = Math.min(yt6.api.parentNode.parentNode.offsetWidth, 1 * yt6.w.replace('px',''))



  if ( yt6.size == 'custom' || a == 'media' || a == 'theater' ||
       (
	a != 'default' && !(yt6.ytp.embed && yt6.size != 'default') && !(yt6.mobile && shorts() && yt6.size == 'media') &&//!(yt6.size == 'theater' && yt6.flexy) &&
	 ( (!((1 * yt6.h.replace('px','') == Math.round((windowheight / 100 >>0) * 80)) && (1 * yt6.w.replace('px','') == Math.round(2+((windowheight / 100 >>0) * 80) * yt6.me_aspect)) && (yt6.size == 'theater') )) //|| yt6.size != 'theater'
	 ) &&
	 ( ((webgl) && (  (yt6.h != Math.round(playerwidth / parseFloat(webgl.width / webgl.height)) + 'px') || (!dw)  )) ||
	   ((!webgl) && (  (yt6.h != Math.round(playerwidth / yt6.aspect_ratio) + 'px') || (!dw)  )) ||
	   ((!webgl) && (  (yt6.h != Math.round(playerwidth / yt6.aspect_ratio) + 'px') && (dw)  ))
	   //((!webgl) && (  (parseInt(p1.style.width.replace('px','')) != gid('player1').width) || (!dw)  ))
	 )
       )
     ) {
//console.log('t '+a)

    if (!(yt6.size == 'custom' && yt6.w && yt6.h)) {


      if ( (dw && a != 'media') || (a == 'theater') ) {

	yt6.size = 'theater'
	var w = playerwidth
	var h = (webgl) ?
	  w / parseFloat(webgl.width / webgl.height) :
	    w / yt6.aspect_ratio;

      } else if (yt6.x || (yt6.p && yt6.p.tagName != 'EMBED')) {
//console.log('m '+a)


	  if (p1 && p1.getAttribute('src') && p1.getAttribute('src').split('itag=')[1] && (typeof yt6.A_[p1.getAttribute('src').split('itag=')[1].split('&')[0]] == 'string' || (p1.width == 0 && p1.height == 0)) ) {

	    function fallback(wh) {
		p1.height = (wh / 100 >>0) * 80;
		p1.width = p1.height * (yt6.aspect_ratio || yt6.ar)
		if (p1.width > windowwidth) {
		  p1.width = windowwidth
		  p1.height = windowwidth / (yt6.aspect_ratio || yt6.ar)
		}
	    }

	    if (typeof yt6.A_[p1.getAttribute('src').split('itag=')[1].split('&')[0]] == 'string') { fallback(windowheight) } else {

	      if (ytplayer && ytplayer.config && ytplayer.config.args && ytplayer.config.args.fmt_list) {
		var fmt_list = ytplayer.config.args.fmt_list.split(',')
		var z = itag(p1.getAttribute('src')), z = (typeof (1 * z) == 'number') ? 1*z : null
		if (z) { var fmt = false
		  for(i=0;i<fmt_list.length;i++){
		    if (fmt_list[i] && 1 * fmt_list[i].split('/')[0] == z && fmt_list[i].split('/')[1]) {
		      p1.width = fmt_list[i].split('/')[1].split('x')[0]
		      p1.height = fmt_list[i].split('/')[1].split('x')[1]
		      fmt = true;
		      break
		    }
		  }
		  //if (!fmt) try {
		  //  p1.width = 16/9 * qual[z]['t'].split('p')[0].split('k')[0]
		  //  p1.height = 1 * qual[z]['t'].split('p')[0].split('k')[0]
		  //} catch(e) { fallback(windowheight) }
	        } else fallback(windowheight)
	      } else {
		  fallback(windowheight)
		}
	    }
	  }

	  if ( (yt6.x && p1 && (p1.width || (p1.height && yt6.size == 'media'))) || (!yt6.x && p1 && (!dw || (dw && a == 'media'))) ){

	    yt6.size = 'media'

	    var w = p1.width
	    var h = p1.height

	    if (!yt6.x) {


		FireEvent2(player(), 'contextmenu')

		var k = gc('ytp-menuitem')
		for(i=0;i<k.length;i++){
		  if (k[i] && ( k[i].textContent.indexOf('Stats for nerds') != -1 || i == k.length-1 )) {
		    FireEvent2( k[i], 'click');
		    break
		  }
		}

		var z = gc('ytp-popup ytp-contextmenu')[0]
		if (z) z.style.display = 'none'
		var z = gc('html5-video-info-panel-content')[0]
		if (z) {
		  z.parentNode.style = 'display: none'
		  var y = z.innerHTML.split('Resolution')[1] || z.innerHTML.split('Current / Optimal Res')[1]
		  if (y) {
		    var y = y.split('<span>')[1]
		    if (y) {
		      var y = y.split(' ').join('').split('</span>')[0].split('@')[0]
		      if (y && y.indexOf('x') != -1) {
		        var w = 1 * y.split('x')[0]
		        var h = y.split('x')[1]
		        if (h && h.indexOf('/') != -1) { h = 1 * h.split('/')[0] } else h = 1 * h

			if (w == 0 && h == 0) {//old
			  var y = z.innerHTML.split('Dimensions')[1]
			  if (y) {
			    var y = y.split('<span>')[1]
			    if (y) {
			      var y = y.split(' ').join('').split('</span>')[0].split('@')[0]
			      if (y && y.indexOf('x') != -1) {
			        var w = 1 * y.split('x')[0]
			        var h = 1 * y.split('x')[1]
			      }
			    }
			  }
			}

		  if (w == 0 && h == 0) {
		    var w = p1.width
		    var h = p1.height
		  }

		  if (w == 0 && h == 0) {
		    var w = 320
		    var h = 240
		  }

		        if ( !isNaN(parseFloat(w / h)) //&&
			     //parseFloat(w / h).toFixed(4) !== yt6.aspect_ratio.toFixed(4)
			   ) {
		          yt6.aspect_ratio = parseFloat(w / h)
		        } else { yt6.aspect_ratio = clone(yt6.ar) }

		      }
		    }
	          }
		} else {
		    if (!w || !h) {
		      var w = w || 1 * yt6.w.replace('px','') - 0 || 640
		      var h = h || 1 * yt6.h.replace('px','') - 0 || 360
		    }
		  }

		var x = gclass('html5-video-info-panel-close')[0]
		if (x && !yt6.html5swap) { FireEvent2( x, 'click') } else {
		  $waitUntil(function(){ if (gc('ytp-popup ytp-contextmenu')[1]) return true },
		    function() { var z = gc('ytp-popup ytp-contextmenu')
			if (z[1]) z[1].style.display = 'none';
			if (z[0]) z[0].parentNode.removeChild(z[0])
		    },250,5000)
		}


	    }

	  } else {
//console.log('t2 '+a)
	      yt6.size = 'theater'
	      var w = playerwidth;
	      var h = (webgl) ?
	        w / parseFloat(webgl.width / webgl.height) :
	          w / yt6.aspect_ratio;
            }

        } else { // flash media size set
	    yt6.size = 'media'
	    var c = conf('args'), qualityString, q, w = 0, h = 0
	    qualityString = ['highres', 'hd1080', 'hd720', 'large', 'medium', 'small']
	    q = (!yt6.ytm && yt6.p && typeof yt6.p.getPlaybackQuality == 'function') ? yt6.p.getPlaybackQuality() : 'unknown'; //console.log(q)
	    if (x == 'medium') { x = '18/' } else if (x == 'hd720') { x = '22/' } else x = ''
	    if (c[1] && c[1].fmt_list && c[1].fmt_list.split(',')[1]) {
	      var fmt_list = c[1].fmt_list.split(',')
	      for (i=0;i<fmt_list.length;i++) {
		var itag_ = fmt_list[i].split('/')[0]
		w = Math.round(fmt_list[i].split('/')[1].split('x')[0])
		h = Math.round(fmt_list[i].split('/')[1].split('x')[1])
		if (	(q == 'highres' && ((2560 >= w && 1920 >= h) || (w >= 1920 && 720 >= h))) ||
			(q == 'hd1080' && ((1920 >= w && 1080 >= h) || (w >= 1280 && 480 >= h))) ||
			(q == 'hd720' && ((1280 >= w && 720 >= h) || (w >= 854 && 360 >= h))) ||
			(q == 'large' && ((854 >= w && 480 >= h) || (w >= 640 && 240 >= h))) ||
			(q == 'medium' && ((640 >= w && 360 >= h) || (w >= 427 && 144 >= h))) ||
			(q == 'small' && 240 >= h)
		   ) { break }
		  else {
		    if (itag_ == '18') { w = 640; h = 360 }
		    if (itag_ == '22') { w = 1280; h = 720 }
		  }
	      }
	    } else {
		var h = 360 //1 * fix_Height().replace('px','')
		//var w = 1 * fix_Width().replace('px','')
		var ar = yt6.aspect_ratio || yt6.ar
		if (typeof ar == 'string' && ar.split('x')[1]) { ar = ar.split('x')[0] / ar.split('x')[1] } else if (typeof ar != 'number') ar = 16/9
		w = h * ar
	      }
	  }

    } else {
	var w = yt6.w.replace('px','')
	var h = yt6.h.replace('px','')
	if (gid('a_width') && gid('a_width').value) {
	  gid('a_width').value = w
	  gid('a_width').setAttribute('value', w)
	}
	if (gid('a_height') && gid('a_height').value) {
	  gid('a_height').value = h
	  gid('a_height').setAttribute('value', h)
	}
      }

   if (h > 9999) h = 9999

   var w = Math.round(w) + 'px'
   var h = Math.round(h) + 'px'

     if (pa) {
       pa.style.height = h; if (bm0) bm0.style.height = h; if (sb) sb.style.top = h
       pa.style.width = h; if (bm0) bm0.style.height * ar + 'px';
       //bm0.style.top = pp.style.top;
       var full = screen.width - 2*yt6.sb
       pa.parentNode.setAttribute('style','width: ' + full + 'px');
     }

    if (yt6.wna) {
      if (dw != null) { dw.parentNode.removeChild(dw)}
      yt6.tbg.style.backgroundColor = "rgb(16, 16, 16)"
      dw = document.createElement('span');
      dw.id = 'aspect';
      dw.setAttribute('style','display:inline-block');
      if (dw.style.display == 'inline-block') { var style = 'display:inline-block' } else var style = 'display:float; float:left';//ie7

      yt6.update_aspect = function() {
	var w = gid('a_width')
	var h = gid('a_height')
	w.value = w.value; w.setAttribute('value', w.value)
	h.value = h.value; h.setAttribute('value', h.value)

	var x = window.pageXOffset || (document.documentElement || document.body.parentNode || document.body).scrollLeft
	var y = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
	yt6.scrollTo = [(x - (x.clientLeft || 0)), 1 * w.value, (y - (y.clientTop || 0)), 1 * h.value ];

	var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)
        windowheight = yt6.wh = (yt6.size != 'default') ? Math.round((windowheight / 100 >>0) * 80) : Math.round(windowheight)
        if (yt6.size == 'default' && yt6.mpb && yt6.mpb.hasAttribute('active'))  {
          if (bm0 && bm0.offsetHeight) {
            windowheight = Math.min(yt6.api.parentNode.parentNode.offsetHeight, 1 * yt6.h.replace('px',''))
          } else windowheight = yt6.api.parentNode.parentNode.offsetHeight
        }
        var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth)

	var w_pos = w.getBoundingClientRect()
	var h_pos = h.getBoundingClientRect()
	//w_pos.left > (windowwidth - x - w.offsetWidth) || w_pos.left < (x + w.offsetWidth) || 
	if (!yt6.live && (h_pos.top > (windowheight - y - h.offsetHeight) || h_pos.top < (y + h.offsetHeight)) ) { return true } else return false
      }

      dw.innerHTML = '<span><div id="fix_frame4" style="' + style + '">Fix<input onclick="if (yt6) if (yt6.size == \'custom\') { yt6.size = yt6.size_bak; this.checked = false; this.setAttribute(\'checked\',\'\') } else { yt6.size_bak = yt6.size; yt6.size = \'custom\'; this.checked = true; this.setAttribute(\'checked\',\'checked\') };" id="fixed-frame" type="checkbox"></input></div><input id="a_width" value="' + w.replace("px","") + '" style="display:inline-block; width:38px; height:13px; text-align:right" onkeyup="if (event.keyCode == 13) { yt6.w = gid(\'a_width\').value; yt6.h = gid(\'a_height\').value; if (1 * yt6.h > 9999) { yt6.h = gid(\'a_height\').value = 9999; gid(\'a_height\').setAttribute(\'value\', 9999) }; resize_layers(gid(\'a_width\').value + \'px\', gid(\'a_height\').value + \'px\', false); var st = clone(yt6.scrollTo); if (yt6.update_aspect()) window.scrollBy(yt6.scrollTo[1] - st[1], yt6.scrollTo[3] - st[3]) }" onfocus="yt6.update_aspect();"></input>x<input id="a_height" value="' + h.replace("px","") + '" style="display:inline-block;width:35px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) { yt6.w = gid(\'a_width\').value; yt6.h  = gid(\'a_height\').value; if (1 * yt6.h > 9999) { yt6.h = gid(\'a_height\').value = 9999; gid(\'a_height\').setAttribute(\'value\', 9999) }; resize_layers(gid(\'a_width\').value + \'px\',gid(\'a_height\').value + \'px\', false); var st = clone(yt6.scrollTo); if (yt6.update_aspect()) window.scrollBy(yt6.scrollTo[1] - st[1], yt6.scrollTo[3] - st[3]) }" onfocus="yt6.update_aspect()"></input>px</span>';
      try { gid(yt_alert_message).appendChild(dw); } catch(e){}

      if (yt6.size == 'custom') { gid('fixed-frame').checked = true; gid('fixed-frame').setAttribute('checked', 'checked') }
      if (gid('a_width')) gid('a_width').value = w.replace('px','')
      if (gid('a_height')) gid('a_height').value = h.replace('px','')
    }


    if (yt6.x && yt6.player1) yt6.player1.hideControls(true)

    resize_layers(w,h, true)

    //if (yt6.x && yt6.player1) yt6.player1.showControls(true)

    if (!yt6.ytp.embed) {
      if (class_1) gid('player').setAttribute('class',class_1)
      if (class_0) {
	if (class_0.indexOf('small_a') != -1) gid('player').setAttribute('class',class_0.replace('small_a','small'))
	if (class_0.indexOf('medium_a') != -1) gid('player').setAttribute('class',class_0.replace('medium_a','medium'))
	if (class_0.indexOf('large_a') != -1) gid('player').setAttribute('class',class_0.replace('large_a','large'))
      }
    }


  } else {
//console.log('d')

	if (pa) {
	  //bm0.style.width = Math.round(pa.oh.replace('px','') * yt6.aspect_ratio) + 'px'
	  //bm0.style.height = pa.style.height = bm0.ytg_oh;
	  pa.parentNode.removeAttribute('style');
	  if (sb) sb.removeAttribute('style');
	}

	yt6.size = 'default'
	var w, h


	if (!(yt6.body2 && yt6.layout == 12)) {
	  w = (yt6.flexy && !yt6.wide && yt6.api) ? yt6.api.parentNode.parentNode.offsetWidth + 'px' : fix_Width()
	  if (yt6.flexy && !yt6.wide && 1 * w.replace('px','') > yt6.inf.offsetWidth) w = yt6.inf.offsetWidth + 'px'
	} else w = (!(yt6.ytp.fullscreen && !yt6.x)) ? fix_Width() : yt6.w.replace('px','')

        if ( !(webgl || yt6.wide) || yt6.layout == 12 || yt6.ytp.fullscreen) h = (!(yt6.ytp.fullscreen && !yt6.x)) ? fix_Height() : yt6.h.replace('px','')

	if (yt6.layout == 12 && !yt6.ytp.embed) h = Math.min(1 * h.replace('px',''), Math.round(((windowheight / 100 >>0) * 80)) ) + 'px'
	if (webgl) h = w.replace('px','') / parseFloat(webgl.width / webgl.height) + 'px'
	if (yt6.flexy && yt6.wide && !yt6.ytp.fullscreen) {
	  h = Math.round(((windowheight / 100 >>0) * 80)) + 'px' //w.replace('px','') / yt6.aspect_ratio + 'px'
	  w = windowwidth + 'px'
	}

	if (yt6.ytp.embed && yt6.oldbrowser && yt6.p && yt6.p.tagName == 'EMBED') {
	  //w = '640px'; h = '360px'
	}
	if (yt6.mobile) { var z = gid('player-container-id')
	  if (z) {
	    w = z.offsetWidth + 'px'
	    h = (z.offsetHeight || z.offsetWidth / (16/9)) + 'px'
	  }
	}

	if (!yt6.mobile && shorts()) {
	  var sp = document.getElementsByTagName('ytd-reel-video-renderer')[0]
	  if (sp) {
	    w = sp.offsetWidth + 'px'
	    h = sp.offsetHeight + 'px'
	  }
	}

	if (gid('aspect')) { gid('aspect').parentNode.removeChild(gid('aspect'))}
	resize_layers(w,h)

	//if ((windowwidth + yt6.sb) < 1000 && (windowwidth + yt6.sb) > 657 && 1 * yt6.h.replace('px','') < yt6.inf.offsetWidth) {
	  //resize_layers(yt6.inf.offsetWidth + 'px', yt6.h)
	//}
	if (!wide_view()) { yt6.tbg.style.backgroundColor = 'transparent' } else yt6.tbg.style.backgroundColor = 'black'
	//gid('player-api').style.overflow = 'hidden';
    }

}

yt6.aspect = function(a) { aspect(a) }


function deldiv(){

  getReferenceObjects()
  if (!player()) {
	var z = document.createElement('div')
	z.id = 'movie_player'
	z.setAttribute('class','dummy')
	var x = gid('player-api')
	if (x) x.appendChild(z)
  }

  var bm0 = gid('bm0')
  var z = yt6.p
  if (z && z.tagName == 'IFRAME') {
    undo_iframe()
    if (gid('player-unavailable')) {
	gid('player-unavailable').style.setProperty('display','','')
	gid('player-unavailable').removeAttribute('style')
    }
    player().style.visibility = '';
    player().style.display = '';
    if (bm0 && bm0.style.display == 'none') {
      if (typeof player().getAttribute('flashvars') == 'string') {
        //if (typeof player().getPlayerState === 'function') {
	  window.postMessage("pauseVideo", "*")
	  player().style.setProperty('width', '0px', 'important')
	  player().style.setProperty('height', '0px', 'important')
	//}
      } else {
	  try { gc('video-stream html5-main-video')[0].pause() } catch(e) {}
	  //player().style.visibility = 'hidden';
	  player().style.display = 'none';
	}
      bm0.style.display = 'block'
    }
  }

  if (yt6.layout == 16 && yt6.api && yt6.api.getAttribute('id') == 'ytd-player' && !yt6.api.hasAttribute('hidden')) {
    if (yt6.api.firstElementChild != yt6.p && yt6.api.firstElementChild.id == 'container') {
      try { yt6.api.firstElementChild.appendChild(yt6.p) } catch(e) { yt6.api.parentNode.appendChild(yt6.p) }
    } else yt6.api.parentNode.appendChild(yt6.p)
  }

  var z = gc('forced flashplayer')[0]
  if (z && (!yt6.oldbrowser && !yt6.html5_fail) && yt6.original) {
    back2html5()
  }


  var z = gc('yt6-proxy-error')
  if (z && z[proxies.length-1]) {
    for (i=0;i<z.length;i++) {
      if (z[i]) z[i].parentNode.removeChild(z[i])
    }
  }

  if (typeof ($) !== 'undefined') {
    if (yt6.player1) try { yt6.timer = 999999999; yt6.player1.setSrc('https://www.youtube.com/ptracking'); yt6.player1.load(); exit(yt6.player1.media) } catch(e){}
    if (yt6.player2) try { yt6.timer = 999999999; yt6.player2.setSrc('https://www.youtube.com/ptracking'); yt6.player2.load(); exit(yt6.player2.media) } catch(e){}
    $.removeData(mejs.players); mejs.players = null; delete mejs.players;
    mejs.mepIndex = 0; mejs.players = {}
  }


  var z = yt6.osw
  if (!z) {
    var z = gid('placeholder-player').firstChild.style;
    if (typeof z !== 'object') {
      gid('placeholder-player').innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
      var z = gid('placeholder-player').firstChild;
    }
  } else {
      if (z.getAttribute('id') == 'placeholder-player') {
        if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
        var z = z.firstChild;
      }
    }


  if (z && typeof z.style == 'object') {
    var o = z.getAttribute('style'); if (o && !yt6.ytg) { try { z.style = '' } catch(e){}; z.removeAttribute('style') }
    var o = z.currentStyle || window.getComputedStyle(z, null)
    //z.setAttribute('style', o); if (o) z.removeAttribute('style');
  
    if (bm0) resize_layers(o.width, o.height, false)
  }

  if (yt6.api && yt6.api.id == 'container') { yt6.api.style.width = ''; yt6.api.style.height = ''; yt6.api.removeAttribute('style') }

  if (player() && yt6.p.lastChild) {
    var z = v_(yt6.p)
    if (z && z.getAttribute('class') == 'video-stream html5-main-video') {
      if (yt6.flexyleft) z.style.left = yt6.flexyleft + 'px'
      if (yt6.osw.hasAttribute('hidden')) yt6.osw.removeAttribute('hidden')
      //z.style.top = ''
      //z.style[yt6.prop] = ''
    }
    if (yt6.wsb) yt6.wsb.removeAttribute('style')
  }


  var y = gc('ytp-chrome-bottom')[0]
  var properties = ['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform']
  var v = gc('video-stream html5-main-video')[0]
  var x = gc('ytp-iv-video-content')[0]
  for(i=0;i<properties.length;i++){
    if (v && typeof v.style[properties[i]] !== 'undefined') {
      v.style[properties[i]] = 'scale(1) rotate(0deg)';
      if (x && typeof x.style[properties[i]] !== 'undefined') z.style[properties[i]] = 'none';
      break;
    }
  }
  if (y) {
    y.style.width = o.width - 24 + 'px'
    y.style.left = '12px'
    v.style.width = o.width +'px'
    v.style.height = o.height +'px'
  }


  yt6.x = false;
  yt6.no_cards = false;
  no_cards()


  var z = gid('yt-consent-dialog')
  if (z) { z.style.display = ''; z.removeAttribute('style') }

  if (yt6.mobile) {
    z = gc('upsell-dialog-lightbox')[0]
    if (z) { z.style.display = ''; z.removeAttribute('style') }
    z = gc('consent-bump-lightbox')[0]
    if (z) { z.style.display = ''; z.removeAttribute('style') }
  } else if (yt6.layout == 16) {
      var z = ['ytd-consent-bump-lightbox','iron-overlay-backdrop','yt-upsell-dialog-renderer']
      for (i=0;i<z.length;i++) { var y = document.getElementsByTagName(z[i])[0]; if (y) y.style.display = '' }
    }

  var z = document.getElementsByTagName('ytd-live-chat-frame')[0] || gid('chat')
  if (z) z.removeAttribute('style')


  var z = gclass("html5-progress-bar")[0]; if (z) { z.setAttribute('style',''); z.removeAttribute("style") }


  var z = gclass('ad-container-single-media-element-annotations')[0]
  if (z && z.style.display == 'none') {
    z.style.display = ''
    var z = gc('caption-window ytp-caption-window-bottom')[0]
    if (z) z.marginBottom = ''
  }


  removeEL(window, 'message', yt6.ytp.cmd, false)
  removeEL(gid('movie_player'), "onStateChange", Sync, false);
  removeEL(gid('movie_player'), "onPlaybackQualityChange", Mqch, false);

  var z = [ 'controls-sp','aspect','bm10','bm3','bm1','bm0','theater-left',yt_alert_message ]
  for(i=0;i<z.length;i++){
    var y = gid(z[i])
    if (y) y.parentNode.removeChild(y)
  }

  if (gid('remove-sp')) gid(yt_alert_message).removeChild(gid('remove-sp').parentNode.parentNode)

  var z = ['movie_player','player','player-api']
  for(i=0;i<z.length;i++){
    var y = gid(z[i])
    if (y) { y.wmode = ''; y.removeAttribute('wmode') }
  }


  var z = ['theater-background','masthead-positioner-height-offset','movie_player','watch7-sidebar','watch-appbar-playlist','playlist','related','secondary','player-api','player','player-container','placeholder-player','ytd-player','top','main','player-theater-container','secondary-inner']
  for(i=0;i < z.length;i++){
    if (yt6.ytg && z[i] == 'player-container') continue;
    var x = gid(z[i])
    if (x) {
      if (yt6.layout == 16) {
	if (z[i] == 'playlist' && typeof x.className == 'string' && x.className.indexOf('ytd-watch') == -1) x = document.getElementsByTagName(x.tagName)[1]
	if (z[i] == 'player-container') {
	  var y = getElementsByAttribute(document,'div','id','player-container')[1]; if (y) {
	    y.style.overflow = ''; y.style.maxHeight = ''; y.style.backgroundColor = ''
	  }
	}
      }
      var y = x.style
      if (z[i] == 'theater-background') y.backgroundColor = 'black';
      if (z[i] == 'movie_player') try { delete x.width; delete x.height; } catch(e) { x.width = ''; x.height = '' }
      if (z[i] != 'player-api') {
        for (var j in y) { if (typeof y.hasOwnProperty == 'function' && y.hasOwnProperty(y[j]) && typeof y.setProperty == 'function') { y.setProperty(y[j],'','') } };
        x.removeAttribute('style')
      } else if (!yt6.ytg) { y.width = ''; y.height = ''; y.left = ''; y.display = ''; };

      if (((z[i] == 'placeholder-player' && !yt6.ie7) || z[i] == 'player' || z[i] == 'main') && typeof x.firstChild.style == 'object') {
      	y = x.firstChild.style
        for (var j in y) { if (typeof y.hasOwnProperty == 'function' && y.hasOwnProperty(y[j]) && typeof y.setProperty == 'function') { y.setProperty(y[j],'','') } };
        x.firstChild.removeAttribute('style')
      }
    }
  }

  //if (yt6.ytp.controls) yt6.ytp.controls.style.display = '';

  if (yt6.ytg) {
    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb
    var z = gid('player-area'); if (z) { z.style = ''; z.parentNode.removeAttribute('style') }
    var z = gid('player-api'); if (z) { z.style = ''; z.removeAttribute('style') }
    if (yt6.wsb) yt6.wsb.removeAttribute('style')
    yt6.ytg.style['width'] = yt6.ytp.style.width.split('"').join('')
    yt6.ytg.style['height'] = yt6.ytp.style.height.split('"').join('')
    yt6.ytg.style['top'] = yt6.ytp.style.top.split('"').join(''); yt6.ytg.style['top'] = '64px'
    yt6.ytg.style['left'] = yt6.ytp.style.left.split('"').join(''); if (!gid('sidebar')) yt6.ytg.style['left'] = (windowwidth - yt6.ytg.style.width.replace('px','')) / 2 + 'px'
    try {
	mouseEvt.initMouseEvent(
	  'DOMMouseScroll', // in DOMString typeArg,
	   true,  // in boolean canBubbleArg,
	   true,  // in boolean cancelableArg,
	   window,// in views::AbstractView viewArg,
	   2,   // in long detailArg,
	   0,     // in long screenXArg,
	   0,     // in long screenYArg,
	   0,     // in long clientXArg,
	   0,     // in long clientYArg,
	   0,     // in boolean ctrlKeyArg,
	   0,     // in boolean altKeyArg,
	   0,     // in boolean shiftKeyArg,
	   0,     // in boolean metaKeyArg,
	   0,     // in unsigned short buttonArg,
	   null   // in EventTarget relatedTargetArg
	);
	yt6.ytg.dispatchEvent(mouseEvt)
	mouseEvt.initMouseEvent('DOMMouseScroll',true,true,window,-2,0,0,0,0,0,0,0,0,0,null);
	yt6.ytg.dispatchEvent(mouseEvt)
    } catch(e) {}
  }

  if (yt6.layout == 16 && !yt6.ytg && yt6.osw && yt6.osw.getAttribute('id') == 'player') {
    var x = yt6.osw, y = x.style
    for (var j in y) { if (typeof y.hasOwnProperty == 'function' && y.hasOwnProperty(y[j]) && typeof y.setProperty == 'function') { y.setProperty(y[j],'','') } };
    x.removeAttribute('style')
  }

  var z = [yt6.con, yt6.wna, yt6.inf]
  for (i=0;i<z.length;i++) {
    if (z[i]) { z[i].setAttribute('style',''); z[i].removeAttribute('style') }
  }

  if (yt6.flexy) {
    var z = gid('player-theater-container')
    if (z) { z.style = ''; z.removeAttribute('style') }
  }

  if (gid('watch7-notification-area')) gid('watch7-notification-area').style.display = 'none'

  var webgl = get_webgl();
  if (webgl) {
    webgl.removeAttribute('style')
    webgl.parentNode.style.left = -1 * webgl.parentNode.parentNode.style.left.replace('px','') + 'px'
    webgl.parentNode.style.top = -1 * webgl.parentNode.parentNode.style.top.replace('px','') + 'px'
  }

  if (gc('clear')[0]) gc('clear')[0].removeAttribute('id')
  if (gc('alerts-wrapper')[0]) gc('alerts-wrapper')[0].removeAttribute('id')

  if (yt6.ytm) ytplayer.config.loaded = false

  yt6.loaded = 0

  removeEL(window, 'spfrequest', yt6.body.spfrequest, false)
  removeEL(window, 'spfrequest', yt6.body.spfrequest, false)
  removeEL(window, 'spfprocess', yt6.body.spfprocess, false)
  removeEL(window, 'spfdone', yt6.body.spfdone, false)

  if (yt6.body.snarls_watchdog) yt6.body.snarls_watchdog.disconnect()
  if (yt6.body.snarls_persistent) yt6.body.snarls_persistent.disconnect()

  try { yt6d.body = document.getElementsByTagName('body')[0] } catch(e){}
  yt6.body = null

  while (gid('snarls_player') || yt6.retry > 50) try { gid('snarls_player').parentNode.removeChild(gid('snarls_player')); yt6.retry++ } catch(e) {}

  var z = gid('player-unavailable') || gid('error-screen')
  if (z) { z.style.display = ''; z.removeAttribute('style'); if (!yt6.blocked) z.setAttribute('hidden','') }

  try { if (gid('movie_player').getAttribute('class') == 'dummy') gid('movie_player').parentNode.removeChild(gid('movie_player')) } catch(e){}

}


/*
  Zooming and rotating HTML5 video player
  Homepage: http://github.com/codepo8/rotatezoomHTML5video
  Copyright (c) 2011 Christian Heilmann
  Code licensed under the BSD License:
  http://wait-till-i.com/license.txt
*/



function control_panel1() {

  if (!yt6.osw || !(yt6.wna && yt6.wna.parentNode && yt6.wna.parentNode.parentNode)) getReferenceObjects()

  try { yt6.switches() } catch(e){}

  var z = gid('watch-header')
  if (z && gid('watch7-notification-area') == null) {
     var js = document.createElement('div')
     js.id = 'watch7-notification-area'
     if (!yt6.ytp.embed) {
       z.parentNode.insertBefore(js, z)
     } else z.insertBefore(js, z.firstChild)
     yt6.wna = gid('watch7-notification-area'); if (!yt6.body2) yt6.wna2 = yt6.wna
     delete js;
  }

  var z = gid('watch7-notification-area')
  if (z != null) {
     z.setAttribute('class','yt-card')
     z.setAttribute('style','display: block; padding: 0px 0px 1px 0px; z-index: 5')
     var z = z.style
     z.display = 'block'; z.padding = '0px 0px 1px 0px'; z.zIndex = '5'
     if (yt6.ytp.embed) { z.position = 'fixed'; z.overflowY = 'hidden' }
  }

	var y = document.getElementsByTagName('ytm-watch')[0]
	if (y && !gid('alerts')) {
	  var z = document.createElement('div')
	  z.id = (yt6.layout == 16) ? 'alerts' : 'watch-header'
	  y.insertBefore(z, y.firstChild.nextSibling)
	  yt6.wna = gid(z.id)
	}

  if (yt6.mobile && gid('alerts')) { gid('alerts').style.position = 'fixed'; gid('alerts').style.zIndex = '1' }

  if (yt6.mobile) {
    yt6.wna2 = yt6.wna
  } else 
      yt6.wna2 = (yt6.layout == 12 && yt6.body2) ? gid('watch7-notification-area') || gid('alerts') || yt6.wna : yt6.wna


  var wna = yt6.wna2 //(!(yt6.blocked && yt6.layout == 16)) ? yt6.wna : yt6.wna2 //gc('alerts-wrapper')[0]

  if (!wna) return void 0;

  if (!yt6.mobile) {
    yt6.pls = (yt6.layout == 16) ? gid('playlist') || gid('queue') : gid('watch-appbar-playlist') || document.getElementsByTagName('ytg-playlist-panel-renderer')[0]
    if (yt6.layout == 16 && yt6.pls && yt6.pls.id == 'playlist' && typeof yt6.pls.className == 'string' && yt6.pls.className.indexOf('ytd-watch') == -1) yt6.pls = document.getElementsByTagName(yt6.pls.tagName)[1]
  } else yt6.pls = gc('playlist-content section')[0] //|| document.getElementsByTagName('ytd-live-chat-frame')[0] || gid('chat')
    if (yt6.layout == 16 && yt6.pls && ((!yt6.pls.lastChild || !yt6.pls.firstElementChild) || yt6.pls.hasAttribute('hidden')) ) yt6.pls = null


  var controls = gid('controls-sp')//getElementsByAttribute(z,'div','id','controls-sp');
  if (controls != null) {
    try { removeEL(controls, 'mouseup',function(e){ yt6.controls_pushed = false }, false) } catch(e){}
    try { removeEL(controls, 'mousedown', yt6.clicky ,false) } catch(e){}
    controls.parentNode.removeChild(controls) //for(i=0;i<controls.length;i++) { if (controls[i]) controls[i].parentNode.removeChild(controls[i]) }
  }


  if (!gid(yt_alert_message)) {
    var js = document.createElement('div')
    js.id = yt_alert_message
    wna.insertBefore(js, wna.firstChild)
    js.setAttribute('class','yt-alert-message')
    var opacity = (yt6.layout == 16 && !yt6.ytm && !yt6.mobile && !yt6.ytg) ? '1' : '0.8'
    js.setAttribute('style','background:#FFFFFF; opacity:'+ opacity +'; display: table; height: 44px'); js.style.display = 'table'; js.style.height = '44px' //opacity: 0.8; width: 100% js.style.width = '100%'
  }


  if (gid('remove-sp') == null) {

    var js = document.createElement('div')
    js.id = 'control_panel'
    gid(yt_alert_message).appendChild(js)
    js.setAttribute('style','display: table-cell; vertical-align: middle; line-height: 17px'); js.style.display = 'table-cell'; js.style.verticalAlign = 'middle'; js.style.lineHeight = '17px'
    if (yt6.ytm) {
      var js = gid(yt_alert_message)
      js.style.position = 'absolute'
      js.style.marginTop = yt6.mhp.offsetHeight + 'px'
      js.style.zIndex = '5'
    }
    var js = document.createElement('span')
    gid(yt_alert_message).firstChild.appendChild(js)
    var span = gid(yt_alert_message).getElementsByTagName('span')[0]

    var remove = document.createElement('div')
    remove.id = 'remove-sp'
    var remove_sp_innerhtml = '<button onclick="if (!gid(\'bm0\') && gid(\'bm01\')) gid(\'bm01\').setAttribute(\'id\',\'bm0\'); switch_players()" class="snarl-button yt-uix-button-text" aria-label="Switch" title="Switch" style="width: 22px; height: 22px; padding: 0 1px 0 0"><img src="//s.ytimg.com/yts/img/HTML5_1Color_Black-vfl902gVJ.png" style="vertical-align:middle; height:12px; padding:0px""></img></button><button onclick="aspect()" class="snarl-button yt-uix-button-text" style="width: 30px" aria-label="Resize" title="Resize">«↔»</button><br><button style="width: 22px" onclick="var yt6 = gid(\'snarls_player\'); var z = prompt(\'Wanna quit? \(Exit options: 0-3\)\\n Cancel = Not now;\\n 0 = Remove script without page refresh;\\n 1 = Normal YouTube;\\n 2 = Legacy compliant;\\n 3 = YT Music;\', \'0\'); \/\*if (!z) { var z = window.confirm(\'OK will attempt to switch between YouTube layouts and refresh the page. \\nCancel will abort.\'); if (typeof z == \'boolean\' && z == true) { deldiv(); return void 0; } }\*\/; if ((typeof z == \'boolean\' && z == false) || !z ) return void 0; if (z && !(typeof z == \'boolean\' && z == true)) { if (z != 0 && (z == 1 || z == 2 || z == 3)) { if (z == 1) document.cookie=&quot;PREF=f1=50000000&f5=10&f6=1004;path=/;domain=.youtube.com;expires=Session&quot;; if (z == 2) { document.cookie=&quot;PREF=f1=50000000&f5=10&f6=8;path=/;domain=.youtube.com;expires=Session&quot;;  ; }; if (z == 3) { var domain = \'music\', loc = clone(window.location.href); var vid = (loc.indexOf(\'/embed/\') > -1 && loc.indexOf(video_id()[0]) == -1) ? loc.split(\'/embed/\')[1].split(\'?\')[0].split(\'#\')[0] : video_id()[0]; location.href = loc.replace(\'www.youtube.com\', domain + \'.youtube.com\').replace(\'music.youtube.com\', domain + \'.youtube.com\').replace(\'gaming.youtube.com\', domain + \'.youtube.com\').replace(\'m.youtube.com\', domain + \'.youtube.com\').replace(\'/embed/\' + vid + \'?\',\'/watch?v=\' + vid + \'&\').replace(\'/embed/\' + vid,\'/watch?v=\' + vid) } else { if (z == 1) { location.href = window.location.href.replace(\'gaming.youtube.com\',\'www.youtube.com\').replace(\'music.youtube.com\',\'www.youtube.com\').replace(\'m.youtube.com\',\'www.youtube.com\') }; \/\*if (!yt6.ytm) {\*\/ if (z == 2) { location.href = \'https://www.youtube.com/embed/\' + video_id()[0] + \'?\' + (location.href.split(\'v=\' + yt6.vid).join(\'\').split(\'?\')[1] || location.href.split(\'v=\' + yt6.vid).join(\'\').split(\'&\')[1] || \'\') } else { if (yt6.ytp.embed) { location.href = window.location.href.replace(\'?\',\'&\').replace(\'/embed/\', \'/watch?v=\') }; }; \/\*location.reload()\*\/ \/\*}\*\/ } } else if (z == 0) deldiv() } else { if (!yt6.ytg) if (yt6.layout == 16) { { document.cookie=&quot;PREF=f1=50000000&f5=10&f6=8;path=/;domain=.youtube.com;expires=Session&quot;; } } else document.cookie=&quot;PREF=f1=50000000&f5=10&f6=1004;path=/;domain=.youtube.com;expires=Session&quot;; location.href = window.location.href.replace(\'gaming.youtube.com\',\'www.youtube.com\').replace(\'music.youtube.com\',\'www.youtube.com\').replace(\'/embed/\' + video_id()[0] + \'?\',\'/watch?v=\' + yt6.vid + \'&\' + window.location.href.split(\'/embed/\' + yt6.vid + \'?\')[1]); };" class="snarl-button yt-uix-button-text" aria-label="Remove script / Change YouTube layout" title="Remove script / Change YouTube layout">X</button><button id="audio_x" class="audio_x snarl-button yt-uix-button-text" aria-label="Use mousewheel to set speed" title="Use mousewheel to set speed" style="padding: 0px 1px 0px 1px; right: 0px" onclick="var yt6 = gid(\'snarls_player\'); if (yt6.player1 && yt6.player2 && typeof yt6.player2.load == \'function\') { var src = \'\'; if (gid(\'no2\')) src = gid(\'no2\').src; var audio_x = window.prompt(\'Enter URL of any audio (or video) file across the net to use as background sound. Will only play alongside video-only sources in progressive download mode.\', src); yt6.audiox = src = yt6.player2.media.src = audio_x || yt6.linx[yt6.userprefA[0]]; if (!audio_x) { yt6.audiox = null; delete yt6.audiox }; yt6.player1.pause(); yt6.player2.load() }; yt6.speed = 1; yt6.ytp.speed();">audio</button></div>'

    span.appendChild(remove)
    remove.setAttribute('style','display: inline-block; position: relative')
    if (remove.style.display !== 'inline-block') {// IE8 needs different approach
	var divpos = 'absolute'
        span.removeChild(span.firstChild)
	span.innerHTML = '<div id="remove-sp" style="display: inline-block; float: left">'+ remove_sp_innerhtml + '</div>'
	//'<div id="controls-sp" style="display: inline-block; position: ' + divpos + '; padding-left: 1px; float: right;">'+
	//'</div>'
    } else {
	var divpos = 'relative'
	remove.innerHTML = remove_sp_innerhtml
      }
    //&#9724;
    //&#8633;
    //&#8703;//

  } else var span = gid(yt_alert_message).getElementsByTagName('span')[0]


if (gid('controls-sp') == null) {
  var js = document.createElement('div')
  js.id = 'controls-sp'
  gid('remove-sp').parentNode.insertBefore(js, gid('remove-sp').nextSibling)
  gid('controls-sp').setAttribute('style','display: inline-block; padding-left: 1px; position: relative')
  var z = gid('controls-sp').style
  if (z.display != 'inline-block') {
    var divpos = 'absolute'
    z.display = 'inline-block'; z.position = divpos; z.paddingLeft = '1px'; z.float = 'right'
  } else var divpos = 'relative'
}

var controls = gid('controls-sp')

/* If there is a controls element, add the player buttons */
/* TODO: why does Opera not display the rotation buttons? */
  if (controls) {
    controls.innerHTML =  '<button class="play snarl-button yt-uix-button-text" style="display: inline-block; width: 52px; text-align:center; padding: 0 3px 0 3px;">play</button>'+
  			    '<div style="display: inline-block; position: ' + divpos + '">'+
			    '<button class="previous snarl-button yt-uix-button-text" style="padding: 0 4px 0 4px; right: 0px">prev</button>'+
			    '<button class="next snarl-button yt-uix-button-text" style="padding: 0 4px 0 4px; right: 0px">next</button>'+
			    //'<button id="display-status" class="display-status snarl-button yt-uix-button-text" style="padding: 0 4px 0 4px; right: 0px">' + yt6.size + '</button>'+
			    '</div>'+
			    ((yt6.ytp.embed) ? '<button class="playlist snarl-button yt-uix-button-text" style="padding: 0 4px 0 4px; right: 0px">list</button></div>' : '') +
                          '<div id="change" style="display: block">' +
                            '<button class="reset snarl-button yt-uix-button-text" style="width:40px; text-align:left">reset</button>' +
                            '<button class="zoomin snarl-button yt-uix-button-text" aria-label="Zoom in" title="Zoom in">+</button>' +
                            '<button class="zoomout snarl-button yt-uix-button-text" aria-label="Zoom out" title="Zoom out">-</button>' +
                            '<button class="left snarl-button yt-uix-button-text" aria-label="Move left" title="Move left">⇠</button>' +
                            '<button class="right snarl-button yt-uix-button-text" aria-label="Move right" title="Move right">⇢</button>' +
                            '<button class="up snarl-button yt-uix-button-text" aria-label="Move up" title="Move up">⇡</button>' +
                            '<button class="down snarl-button yt-uix-button-text" aria-label="Move down" title="Move down">⇣</button>' +
                            '<button class="rotateright snarl-button yt-uix-button-text" aria-label="Rotate right" title="Rotate right">&#x21bb;</button>' +
                            '<button class="rotateleft snarl-button yt-uix-button-text" aria-label="Rotate left" title="Rotate left">&#x21ba;</button>' +
                          '</div>'
  }



    var y = gid('control_panel2')
    if (y && y.firstChild)
    if (!(gid('remove_bak') && gid('controls_bak')) ) {
      var z = span.cloneNode(true)
      removeEL(y, 'mousedown', yt6.clicky ,false)
      y.innerHTML = ''
      y.appendChild(z)
      z = y.firstChild
      if (z.firstChild) {
	z = z.firstChild
	z.setAttribute('id','remove_bak')
	if (z.nextSibling) z.nextSibling.setAttribute('id','controls_bak')
	var x = z.getElementsByTagName('button')
	var c = gid('controls_bak')
	if (c && c.firstChild) {
	  if (x[1]) c.insertBefore(x[1], c.firstChild)
	  if (x[0]) c.insertBefore(x[0], c.firstChild)
	  if (x[1]) { z.insertBefore(x[1], z.firstChild); x[0].innerHTML = '<div style="float: left">Change audio</div><br><div class="displaySpeed" style="float: left">Speed: ' + yt6.speed +'x</div>' }
	  z.lastChild.setAttribute('class','remove snarl-button yt-uix-button-text')
	  z.lastChild.setAttribute('style','margin-left: 3px')
	  if (z.lastChild.style.marginLeft !== '3px') z.lastChild.style.marginLeft = '3px'
	  var x = gid('quit')
	  if (x && (!gid('subtitles_list') || (gid('subtitles_list') && gid('subtitles_list').innerHTML == '')) ) {
	    x.appendChild(z.lastChild)
	  } else {
	      z.lastChild.setAttribute('style','margin-left: 3px; display: inline-block; position: absolute; right: 0px; margin-bottom: 0px')
	    }
	}
      }
      var z = gc('displaySpeed')[0]; if (z) z.parentNode.style.padding = '0 1px ' + (z.offsetHeight + 18) + 'px 1px'
    } else {
	removeEL(y, 'mousedown', yt6.clicky ,false)
	y.appendChild(gid('controls_bak').parentNode)
      }


  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb // - 1
  if (yt6.layout == 16 && yt6.flexy && yt6.pls && (windowwidth < 1000 || !(document.getElementsByTagName('ytd-watch-flexy')[0] && document.getElementsByTagName('ytd-watch-flexy')[0].hasAttribute('is-two-columns_'))) ) yt6.pls.firstElementChild.insertBefore(gid(yt_alert_message), yt6.pls.firstElementChild.firstElementChild)

  return gid('controls-sp')

}//control_panel1



yt6.playlist_box = function(mep_) {
	var p = original(yt6.p), z = gid('yt-playlist-container');
	var pls = gclass('ytp-playlist-menu','div', p)[0] || gclass('ytp-playlist-menu','div', mep_)[0] //playlist box element
	if (pls && pls.parentNode) {
	  if (yt6.ytp.embed && yt6.x && pls.parentNode != mep_) mep_.appendChild(pls)
	  if (pls.parentNode == mep_) z = mep_
	  pls.style.display = ''
	  if (!yt6.x && yt6.p.tagName == 'DIV') {
	    try { p.insertBefore(pls, gclass('ytp-share-panel','div', p)[0]) } catch(e){ p.appendChild(pls) }
	    if (z && !yt6.ytp.embed) z.style.display = 'none'
	  } else {
	      if (z && z != mep_) try { z.appendChild(pls); z.style.display = (z.style.display == 'none') ? '' : 'none' } catch(e){}
	    }
	  var k = gclass('ytp-playlist-menu-items','div', pls)[0]
	  if ((k && !k.lastChild) || !yt6.x || z == mep_) {
	    try { gclass('ytp-playlist-menu-button ytp-button','button', p)[0].click() } catch(e){}
	  }
	}
}



var CtrlS = function (stage,v){

  var controls = control_panel1();

  if (!controls) return void 0;
  //if (yt6.blocked && yt6.layout == 16) yt6.wna2.insertBefore(gid(yt_alert_message), yt6.wna2.firstChild)
  playButton()

/* predefine zoom and rotate */
  var zoom = (yt6.x) ? yt6.z || 1 : yt6.yt_z,
      rotate = (yt6.x) ? yt6.r || 0 : yt6.yt_r;

/* Grab the necessary DOM elements */

  var stage = stage;
  var v = v; if (v == undefined) { var v = gc('video-stream html5-main-video')[0] }
  var p = player()
  var mep = gid(mep_x('mep_'))
  var bm0 = gid('bm0')
  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - yt6.sb;// - 1
  var hdiff = parseInt(yt6.hdiff)
  if (hdiff == undefined) hdiff = 30
  var me_flash_ = getElementsByAttribute(document,"embed","name",mep_x("me_flash_"))
  yt6.me_flash_ = me_flash_ = (me_flash_) ? me_flash_[0] : null
  if (yt6.ie7 == true && gid(mep_x('me_flash__ __container'))) {
    var me_flash = getElementsByAttribute(gid("player"),"object","id",mep_x("me_flash_"))
  } else
    var me_flash = getElementsByAttribute(gid("player"),"object","name","me_flash")
  yt6.me_flash = me_flash = (me_flash) ? me_flash[0] : null
  if (me_flash_) {
    var vp = me_flash_.parentNode
  } else {
      if (me_flash && me_flash.style.left == '') {
	me_flash.style.left = (yt6.l) ? yt6.l + 'px' : '0px'
	me_flash.style.top = (yt6.t) ? yt6.t + 'px' : '0px'
      }
    }
  var flashvars = getFlashVars()
  if (mep) var poster = gc('mejs-poster mejs-layer')[0] || getElementsByAttribute(mep,'div','class','mejs-poster mejs-layer')[0]
  if (poster) {
    var poster_img = poster.getElementsByTagName('img')[0]
    if (!poster.style.left) poster.style.left = '0px'
    if (!poster.style.top) poster.style.top = '0px'
  }
  if (p) var webgl = get_webgl()
  
/* Array of possible browser specific settings for transformation */
  var properties = ['transform', 'WebkitTransform', 'MozTransform',
                    'msTransform', 'OTransform'],
      prop = (yt6.x) ? clone(yt6.prop) : clone(yt6.yt_prop)
      propN = yt6.propName = properties[0];
      if (v) {
	if (!v.style[propN]) v.style[propN] = (prop) ? prop : 'scale(1) rotate(0deg'; if (yt6.x) { yt6.prop = clone(v.style[propN]) } else yt6.yt_prop = clone(v.style[propN])
	v.style.left = (yt6.x) ? yt6.l + 'px' : yt6.yt_l + 'px'
	v.style.top = (yt6.x) ? yt6.t + 'px' : yt6.yt_t + 'px'
      }

/* Iterators and stuff */    
  var i,j,t;

  var rz = function() {
      var z = yt6.osw
      if (z.getAttribute('id') == 'placeholder-player') {
        if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>'
        var z = z.firstChild
      }
     return z
  }

  var z = rz()

  
/* Find out which CSS transform the browser supports */
  if (stage) {
    if (!stage.style) stage.style = stage.getAttribute('style')
    if (stage.style) {
	for(i=0,j=properties.length;i<j;i++){
	    if(typeof stage.style[properties[i]] !== 'undefined'){
	      var propN = yt6.propName = properties[i]
	      break
	    }
	}
    }
  }

/* Position video */
  //var playlist = gid('watch-appbar-playlist') || gid('playlist')
  if (yt6.layout == 16) {
    //if (playlist && (!playlist.lastChild || playlist.hasAttribute('hidden'))) playlist = null
    var vp2 = null //(p && (p.tagName == 'EMBED' || p.tagName == 'OBJECT')) ? yt6.osw : null, vp3
    if (vp2) {
	if (!vp2.style.top) vp2.style.top = yt6.t || '0px'
	var vp3 = pcont()
    }
  }
  if (bm0 && !bm0.style.width && !bm0.style.height && yt6.size != 'custom') {
    bm0.style.width = fix_Width()
    bm0.style.height = fix_Height()
    //if (yt6.l) v.style.left = yt6.l + 'px'
    //if (yt6.t) v.style.top = yt6.t + 'px'
  }

  if (yt6.flexy) var left = yt6.osw.style.left

  if (!yt6.fullscreen) if (bm0) { resize_layers( bm0.style.width, bm0.style.height, false ) } else resize_layers( yt6.w, yt6.h, false ) //slug1


  if (yt6.flexy) yt6.osw.style.left = left

  if (yt6.p && (yt6.p.tagName == 'IFRAME' || yt6.p.tagName == 'EMBED')) {
    if (yt6.p.tagName == 'IFRAME') yt6.p.style.position = 'absolute'
    yt6.p.style.opacity = (yt6.p.tagName == 'EMBED') ? '1.1' : '1'
    var left = (yt6.p.tagName == 'IFRAME' || yt6.layout == 12) ? 'left' : 'marginLeft'
    var top = (yt6.p.tagName == 'IFRAME' || yt6.layout == 12) ? 'top' : 'marginTop'
    yt6.p.style[left] = (yt6.yt_l || 0) + 'px'
    yt6.p.style[top] = (yt6.yt_t || 0) + 'px'
    yt6.p.style[propN] = yt6.yt_prop
  }

  //if (yt6.layout == 16 && !yt6.ytm && !yt6.ytg) aspect(yt6.size)


/* If a button was clicked (uses event delegation)...*/
  yt6.controls_pushed = false
  addEL(controls, 'mouseup',function(e){ yt6.controls_pushed = false }, false)
  yt6.clicky = function(e){ yt6.controls_pushed = true

    var t = e.target || getTarget(e)
    var className = t.className
    if (className) className = className.replace(' style-scope','').replace(' ytmusic-player-page','').replace(' ytmusic-browse-response','')

    var z = rz()

    var p = player(), p = yt6.p

    if (vp2 && !vp2.style.top) vp2.style.top = yt6.t || '0px'

    if(t.nodeName.toLowerCase()==='button'){

/* Check the class name of the button and act accordingly */    
      switch(className){

	case 'next snarl-button yt-uix-button-text':
	try { yt6.player1.pause() } catch(e){}
 	  fix_playlist()
	  $waitUntil(function(){ var y = yt6.pl_index, zi = yt6.pl_next; if ((typeof y == 'number' && zi) || yt6.layout == 12 || yt6.mobile || !yt6.pls) { return true } else pl_item() },
	  function() { var p = player(), p = yt6.p;
	    if ( !(yt6.layout == 16 && yt6.blocked && !yt6.ytm && !yt6.ytg) && p && typeof p.playVideoAt == 'function' && p.getAttribute('class') != 'forced flashplayer') { var mp = p }
	    else { var mp = yt6.original || original(yt6.p) }
	    try { yt6.navigation = true
	      if ((!yt6.shuffle && !yt6.ytg) || (yt6.shuffle && yt6.layout == 16 && typeof mp.getPlaylist == 'function' && !(mp.getPlaylist() && mp.getPlaylist()[0])) || yt6.layout == 12 || yt6.mobile) {
		if (!yt6.mobile) {
		  if (yt6.pls && p.tagName != 'IFRAME') {
		    if (yt6.layout == 16 && yt6.blocked && !yt6.ytm && !yt6.ytg) {
							      $waitUntil(function(){var p = original(yt6.p); if (p) { return true } },
								function() {
								  //yt6.original.loadVideoByUrl(yt6d.previous.video_id || yt6d.init)
								  $waitUntil(function(){if (yt6.original && typeof yt6.original.nextVideo == 'function') { return true } },
								    function(){
								      var next_index = (yt6.pl_index - yt6.pl_set + 1)
								      yt6.original.playVideoAt(yt6.original.playVideoAt(next_index))
								    },500,9000)
								},1000,6000)
		    } else if (yt6.layout == 16 && !yt6.ytm && !yt6.ytg) {
			if (yt6.age.blocked) {
			  swap_player()
			} else {
			    if (typeof mp.getPlaylist == 'function' && (mp.getPlaylist() && mp.getPlaylist()[0])) {
			      if (!yt6.pl_next_blocked) {
				try { mp.playVideoAt((yt6.pl_index - yt6.pl_set) + 1) } catch(e) { try { yt6.pl_next.click() } catch(e){} }
			      } else mp.nextVideo('0')
			    } else {
				if (!yt6.pl_next_blocked) {
				  try { yt6.pl_next.click() } catch(e){ mp.nextVideo('0') }
				} else try { yt6.pl_nnext.click() } catch(e){}	
			      }
			  }
		      } else try {
			  if ('onclick' in yt6.pl_next) {
			    if ((browserName == 'Firefox' && yt6.body2) || yt6.ytm) {
			      try { mp.nextVideo('0') } catch(e){ if (yt6.pl_next) { yt6.pl_next.click() } }
			    } else if (yt6.pl_next) { yt6.pl_next.click() } else mp.nextVideo('0')
			  } else if (yt6.oldbrowser && yt6.pl_next && yt6.pl_next.toString() && yt6.pl_next.toString().indexOf('http') == 0) location.href = yt6.pl_next.toString()
			  //if (yt6.ytm) { mp.nextVideo('0') } // not needed anymore
			} catch(e) { try { mp.nextVideo('0') } catch(e){} }
		  } else {
			try {
			  if (yt6.layout == 16) {
			    if (yt6.p.src.indexOf(video_id(true)[0]) == -1) {
			      if (yt6.embed && yt6.embed.player && typeof yt6.embed.player.seekTo == 'function') {
				yt6.embed.player.seekTo(yt6.embed.player.getDuration())
			      } else yt6.pl_nnext.click()
			    } else {
				undo_iframe(); swap_player(); yt6.pl_next.click()
			      }
			  } else yt6.pl_next.click()
			} catch(e){ mp.nextVideo('0') }
		    }
		} else {

		    if (yt6.pls) {
		      var z = gc('playlist-controls-primary')[0]
		      if (z) {
			z = z.getElementsByTagName('c3-material-button')[1]
		        if (z) {
			  z = z.getElementsByClassName('c3-material-button-button')[0]
			} else z = gc('c3-material-button-button')[3]
		      } else z = gc('c3-material-button-button')[3]

		    } else {
			var z = gc('player-controls-middle center')[0]
			if (z) { try { z = z.firstChild.nextSibling.nextSibling } catch(e){ z = null } } else mp.nextVideo('0')
		      }
		    try { z.click() } catch(e) { yt6.pl_next.click() }
		  }
	      } else {
		if (p == mp) {
		  if (!yt6.ytg || yt6.pre_ad) { mp.playVideoAt((1*yt6.pl_index)+1) || mp.nextVideo('0'); } else try { mp.seekTo(mp.getDuration()); mp.playVideo()} catch(e) { mp.nextVideo('0')}
		} else {
		    try {
		      $waitUntil(function(){if (location.href.indexOf(yt6.vid) == -1) { return true } else {
			mp.stopping = false; FireEvent2(mp, 'mouseup'); mp.seekTo(mp.getDuration()); if (!yt6.ad_muted) mp.mute(); mp.playVideo(); mp.pauseVideo(); if (!yt6.ad_muted) mp.unMute();
		      } },
			function(){},250,1000)
		    } catch(e) { yt6.navigation = false }
		  }
	        }
	    } catch(e) { yt6.navigation = false }
	  },250,1500)
	break;

	case 'previous snarl-button yt-uix-button-text':
	try { yt6.player1.pause() } catch(e){}
 	  fix_playlist()
	  $waitUntil(function(){ var y = yt6.pl_index, zi = yt6.pl_next; if ((typeof y == 'number' && zi) || yt6.layout == 12 || yt6.mobile || !yt6.pls) { return true } else pl_item() },
	  function() { var p = player(), p = yt6.p;
	    if (p) //if ( !(yt6.layout == 16 && yt6.blocked && !yt6.ytm && !yt6.ytg) && p && typeof p.playVideoAt == 'function' && p.getAttribute('class') != 'forced flashplayer') { var mp = p } else
	    { var mp = yt6.original || original(yt6.p) }
	    try { yt6.navigation = true
	    if (yt6.layout == 12 || yt6.ytg || yt6.mobile || yt6.ytp.embed) {
		if (!yt6.mobile) {
		  if (yt6.pls) {
		    try {
		      if ('onclick' in yt6.pl_previous) {
			if (!yt6.pl_previous_blocked) { yt6.pl_previous.click() } else mp.playVideoAt(yt6.pl_index-1) || mp.previousVideo('0')
		      } else if (yt6.oldbrowser && yt6.pl_previous && yt6.pl_previous.toString() && yt6.pl_previous.toString().indexOf('http') == 0) location.href = yt6.pl_previous.toString()
		    } catch(e){ mp.playVideoAt(yt6.pl_index-1) || mp.previousVideo('0') }
		  } else if (!yt6.ytp.embed) {
		      mp.playVideoAt(yt6.pl_index-1) || mp.previousVideo('0')
		    } else mp.previousVideo('0')
		} else {

		    if (yt6.pls) {
		      var z = gc('playlist-controls-primary')[0]
		      if (z) {
			z = z.getElementsByTagName('c3-material-button')[0]
		        if (z) {
			  z = z.getElementsByClassName('c3-material-button-button')[0]
			} else z = gc('c3-material-button-button')[2]
		      } else z = gc('c3-material-button-button')[2]

		    } else {
			var z = gc('player-controls-middle center')[0]
			if (z) { z = (z) ? z.firstChild : null } else mp.previousVideo('0')
		      }
		    try { z.click() } catch(e) { yt6.pl_previous.click() }
		  }
	    } else {
	      var a = 5; if (typeof mp.getPlayerState == 'function') a = mp.getPlayerState(); if (a == -1) mp.pauseVideo()
	      if (p == mp && !yt6.pre_ad && !yt6.mobile && !(yt6.layout == 16 && yt6.pls && typeof mp.getPlaylist == 'function' && !(mp.getPlaylist() && mp.getPlaylist()[0])) ) { mp.playVideoAt(yt6.pl_index-1) || mp.previousVideo('0') } else { //console.log('? '+yt6.pl_previous)
		if (yt6.layout == 16 && yt6.blocked && !yt6.ytm && !yt6.ytg && p.tagName != 'IFRAME') {
							      $waitUntil(function(){var p = original(yt6.p); if (p) { return true } },
								function() {
								  //yt6.original.loadVideoByUrl(yt6d.previous.video_id || yt6d.init)
								  $waitUntil(function(){if (yt6.original && typeof yt6.original.nextVideo == 'function') { return true } },
								    function(){
								      var prev_index = (yt6.pl_index - yt6.pl_set - 1 > 0) ? (yt6.pl_index - yt6.pl_set - 1) : 0; // the yt bug causing jumps to the same blocked video over and over again was fixed, 1 step back on the playlist is enough now
								      yt6.original.playVideoAt(yt6.original.playVideoAt(prev_index))
								    },500,9000)
								},1000,6000)
		}
		if (!yt6.shuffle || (yt6.shuffle && yt6.layout == 16 && yt6.pls && typeof mp.getPlaylist == 'function' && !(mp.getPlaylist() && mp.getPlaylist()[0])) ) {
		  if (yt6.pls && typeof mp.getPlaylist == 'function' && mp.getPlaylist() && mp.getPlaylist()[0]) {
		    try { mp.playVideoAt(yt6.pl_index-1) || mp.previousVideo('0') } catch(e) { yt6.pl_previous.click() }
		  } else {
		      try { if (!yt6.pl_previous_blocked) { yt6.pl_previous.click() } else hullajovagy() } catch(e){ try { if (!yt6.pl_next_blocked) { yt6.pl_next.click() } else yt6.pl_nnext.click() } catch(e){} }
		    }
		} else try {
		  $waitUntil(function(){ if (location.href.indexOf(yt6.vid) == -1) { return true } else {
		    mp.stopping = false; FireEvent2(mp, 'mouseup'); mp.seekTo(mp.getDuration()); if (!yt6.ad_muted) mp.mute(); mp.playVideo(); mp.pauseVideo(); if (!yt6.ad_muted) mp.unMute();
		  } },
		  function(){},250,1000)
		} catch(e) { yt6.navibation = false }
	    } };
	    } catch(e) { yt6.navigation = false }
	  },250,1500)
	break;

	case 'playlist snarl-button yt-uix-button-text':
	var mep_ = (!yt6.ytp.embed) ? mep : mep_obj(); yt6.playlist_box(mep_)
	break;

/* Toggle play functionality and button label */    
	case 'play snarl-button yt-uix-button-text':
	playButton()
	var sp = null, ncmd; if (shorts()) {
	  if (document.getElementById('shorts-player') && typeof document.getElementById('shorts-player').pauseVideo == 'function') {
	    sp = document.getElementById('shorts-player')
	  }
	}

	if (( v && (v != stage || (v.getAttribute('name') != null && v.getAttribute('name').indexOf('me_flash') > -1))) ) {
	  if (!sp && ((v.parentNode && v.parentNode.paused == true) || (v.paused == true)) ){
	    ncmd = 'pause'
	    if (!sp) {
	      if (typeof v.play == 'function') try { if (!(yt6.player1 && yt6.player1.media == v)) { v.play() } else yt6.player1.media.play() } catch(e) {}
	      if (typeof v.playMedia == 'function') try { v.playMedia(); v.parentNode.paused = false } catch(e) {}
	    }
          } else {
	    ncmd = 'play'
	    if (!sp) {
              if (typeof v.pause == 'function') try { if (!(yt6.player1 && yt6.player1.media == v)) { v.pause() } else yt6.player1.media.pause() } catch(e) {}
              if (typeof v.pauseMedia == 'function') try { v.pauseMedia(); v.parentNode.paused = true } catch(e) {}
	    }
          }

	  if (!sp) {
	    if (!yt6.x && p && p.tagName != 'OBJECT' && typeof p.getPlayerState == 'function' && p.getPlayerState() > 2) try { p.playVideo(); p.playVideo(); ncmd = 'pause' } catch(e) {}
	  } else {
	      if (sp.getPlayerState() !== 1) { try { sp.playVideo(); ncmd = 'pause' } catch(e){} } else try { sp.pauseVideo(); ncmd = 'play' } catch(e){}
	    }

	  try { if (yt6.btn.play) yt6.btn.play[yt6.txt] = ncmd; if (yt6.btn.play2) yt6.btn.play2[yt6.txt] = ncmd; var x = gc('play snarl-button yt-uix-button-text')[0]; if (x) x.innerHTML = ncmd; var x = gc('play snarl-button yt-uix-button-text')[1]; if (x) x.innerHTML = ncmd } catch(e) {}

	} else {
	    if (p.getAttribute('name') != 're-embed2' && p.tagName != 'OBJECT') {
		var m = window

			if ((typeof p.getPlayerState == 'function' && p.getPlayerState() != 1) || (typeof p.getPlayerState != 'function' && yt6.btn.play[yt6.txt] == 'play')) {
			  try { m.postMessage("playVideo", "*") } catch(e){ console.log('play '+e) }
			  try { if (yt6.btn.play) yt6.btn.play[yt6.txt] = 'pause'; if (yt6.btn.play2) yt6.btn.play2[yt6.txt] = 'pause'; var x = gc('play snarl-button yt-uix-button-text')[0]; if (x) x.innerHTML = 'pause'; var x = gc('play snarl-button yt-uix-button-text')[1]; if (x) x.innerHTML = 'pause' } catch(e) {}
			} else {
			    try { m.postMessage("pauseVideo", "*") } catch(e){ console.log('pause '+e) }
			    try { if (yt6.btn.play) yt6.btn.play[yt6.txt] = 'play'; if (yt6.btn.play2) yt6.btn.play2[yt6.txt] = 'play'; var x = gc('play snarl-button yt-uix-button-text')[0]; if (x) x.innerHTML = 'play'; var x = gc('play snarl-button yt-uix-button-text')[1]; if (x) x.innerHTML = 'play' } catch(e) {}
			  }

	    } else if (yt6.embed) {
		if (!yt6.embed.player) yt6.embed.active()
		var p = yt6.embed.player
		    if (p) {
		        if ((typeof p.getPlayerState == 'function' && p.getPlayerState() != 1) || (typeof p.getPlayerState != 'function' && yt6.btn.play[yt6.txt].innerHTML == 'play')) {//alert(player().getPlayerState())
			  try { yt6.embed.play() } catch(e) { yt6.embed.active() }
			  try { if (yt6.btn.play) yt6.btn.play[yt6.txt] = 'pause'; if (yt6.btn.play2) yt6.btn.play2[yt6.txt] = 'pause'; var x = gc('play snarl-button yt-uix-button-text')[0]; if (x) x.innerHTML = 'pause'; var x = gc('play snarl-button yt-uix-button-text')[1]; if (x) x.innerHTML = 'pause' } catch(e) {}
			} else {
			    try { yt6.embed.pause() } catch(e) { yt6.embed.active() }
			    try { if (yt6.btn.play) yt6.btn.play[yt6.txt] = 'play'; if (yt6.btn.play2) yt6.btn.play2[yt6.txt] = 'play'; var x = gc('play snarl-button yt-uix-button-text')[0]; if (x) x.innerHTML = 'play'; var x = gc('play snarl-button yt-uix-button-text')[1]; if (x) x.innerHTML = 'play' } catch(e) {}
			  }
		    } else onYouTubeIframeAPIReady()
	      }
	  }
	break

/* Increase zoom and set the transformation */
	case 'zoomin snarl-button yt-uix-button-text':
	  if (p.getAttribute('wmode') != 'transparent') {
	    yt6.wmode = 'transparent'
	  }
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    zoom = zoom + 0.1
	    v.style[propN] = 'scale('+zoom+') rotate('+rotate+'deg)'
	    if (yt6.x) { var z = yt6.z; yt6.z_ = z; yt6.z = (yt6.z + 0.1); yt6.prop = v.style[propN] } else { var yz = yt6.yt_z; yt6.yt_z_ = yz; yt6.yt_z = (yt6.yt_z + 0.1); yt6.yt_prop = v.style[propN] }
	    if (yt6.x && poster) poster.style[propN] = v.style[propN]
	    if (!yt6.x && webgl) {
	      webgl.style[propN] = v.style[propN]
	    }
	  } else return true, function(){}, 200
	  })
	break

/* Decrease zoom and set the transformation */
	case 'zoomout snarl-button yt-uix-button-text':
	  if (p.getAttribute('wmode') != 'transparent') {
	    yt6.wmode = 'transparent'
	  }
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    zoom = zoom - 0.1
	    v.style[propN] = 'scale('+zoom+') rotate('+rotate+'deg)'
	    if (yt6.x) { var z = yt6.z; yt6.z_ = z; yt6.z = (yt6.z - 0.1); yt6.prop = v.style[propN] } else { var yz = yt6.yt_z; yt6.yt_z_ = yz; yt6.yt_z = (yt6.yt_z - 0.1); yt6.yt_prop = v.style[propN] }
	    if (yt6.x && poster) poster.style[propN] = v.style[propN]
	    if (!yt6.x && webgl) {
	      webgl.style[propN] = v.style[propN]
	    }
	  } else return true, function(){}, 200
	  })
	break

/* Increase rotation and set the transformation */
	case 'rotateright snarl-button yt-uix-button-text':
	  if (p.getAttribute('wmode') != 'transparent') {
	    yt6.wmode = 'transparent'
	  }
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    rotate = rotate + 5; if (rotate >= 360) rotate = rotate % 360
	    v.style[propN] = 'scale('+zoom+') rotate('+rotate+'deg)';
	    if (yt6.x) { var r = yt6.r; yt6.r_ = r; yt6.r = (yt6.r + 5); if (yt6.r >= 360) yt6.r = yt6.r % 360; yt6.prop = v.style[propN] } else { var yr = yt6.yt_r; yt6.yt_r_ = yr; yt6.yt_r = (yt6.yt_r + 5); if (yt6.yt_r >= 360) yt6.yt_r = yt6.yt_r % 360; yt6.yt_prop = v.style[propN] }
	    if (me_flash && !me_flash_) me_flash.style[propN] = yt6.propN;
	    if (yt6.x && poster) poster.style[propN] = v.style[propN]
	    if (!yt6.x && webgl) {
	      webgl.style[propN] = v.style[propN]
	    }
	  } else return true, function(){}, 200
	  })
	  break

/* Decrease rotation and set the transformation */
	case 'rotateleft snarl-button yt-uix-button-text':
	  if (p.getAttribute('wmode') != 'transparent') {

	    yt6.wmode = 'transparent'
	  }
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    rotate = rotate - 5; if (-360 >= rotate) rotate = rotate % 360
	    v.style[propN] = 'scale('+zoom+') rotate('+rotate+'deg)';
	    if (yt6.x) { var r = yt6.r; yt6.r_ = r; yt6.r = (yt6.r - 5); if (-360 >= yt6.r) yt6.r = yt6.r % 360; yt6.prop = v.style[propN] } else { var yr = yt6.yt_r; yt6.yt_r_ = yr; yt6.yt_r = (yt6.yt_r - 5); if (360 >= yt6.yt_r) yt6.yt_r = yt6.yt_r % 360; yt6.yt_prop = v.style[propN] }
	    if (me_flash && !me_flash_) me_flash.style[propN] = yt6.propN;
	    if (yt6.x && poster) poster.style[propN] = v.style[propN]
	    if (!yt6.x && webgl) {
	      webgl.style[propN] = v.style[propN]
	    }
	  } else return true, function(){}, 200
	  })
	break

/* Move video around by reading its left/top and altering it */
	case 'left snarl-button yt-uix-button-text':
	  yt6.wmode = 'window'; if (yt6.ytg && v.style.left == '') v.style.left = '0px'
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    if (yt6.x) { var left = yt6.l; yt6.l_ = left; yt6.l = (yt6.l - 5) } else { var yleft = yt6.yt_l; yt6.yt_l_ = yleft; yt6.yt_l = (yt6.yt_l - 5); yt6.yt_l_0 = yt6.yt_l }
	    if (!yt6.x || !vp) {
	      v.style.left = (parseInt(v.style.left.replace('px','')) - 5) + 'px'
	      if (yt6.layout == 16 && v.tagName == 'EMBED') { var yleft = v.style.left; v.style.marginLeft = yleft }
	      if (vp2) if (!yt6.x) { var y = (!vp3) ? vp2 : vp3; y.style.left = (parseInt(y.style.left.replace('px','')) - 5) + 'px' }
	    } else {
		vp.style.left = (parseInt(vp.style.left.replace('px','')) - 5) + 'px'
	      }
	    if (yt6.x && poster) poster.style.left = (parseInt(poster.style.left.replace('px','')) - 5) + 'px'
	    if (!yt6.x && webgl) {
	      webgl.parentNode.style.left = yt6.l = (parseInt(webgl.parentNode.style.left.replace('px','')) - 5) + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

	case 'right snarl-button yt-uix-button-text':
	  yt6.wmode = 'window'; if (yt6.ytg && v.style.left == '') v.style.left = '0px'
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    if (yt6.x) { var left = yt6.l; yt6.l_ = left; yt6.l = (yt6.l + 5) } else { var yleft = yt6.yt_l; yt6.yt_l_ = left; yt6.yt_l = (yt6.yt_l + 5); yt6.yt_l_0 = yt6.yt_l }
	    if (!yt6.x || !vp) {
	      v.style.left = (parseInt(v.style.left.replace('px','')) + 5) + 'px'
	      if (yt6.layout == 16 && v.tagName == 'EMBED') { var yleft = v.style.left; v.style.marginLeft = yleft }
	      if (vp2) if (!yt6.x) { var y = (!vp3) ? vp2 : vp3; y.style.left = (parseInt(y.style.left.replace('px','')) + 5) + 'px' }
	    } else {
		vp.style.left = (parseInt(vp.style.left.replace('px','')) + 5) + 'px'
	      }
	    if (yt6.x && poster) poster.style.left = (parseInt(poster.style.left.replace('px','')) + 5) + 'px'
	    if (!yt6.x && webgl) {
	      webgl.parentNode.style.left = parseInt(webgl.parentNode.style.left.replace('px','')) + 5 + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

	case 'up snarl-button yt-uix-button-text':
	  yt6.wmode = 'window'; if (yt6.ytg && v.style.top == '') v.style.top = '0px'
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    if (yt6.x) { var top = yt6.t; yt6.t_ = top; yt6.t = (yt6.t - 5) } else { var ytop = yt6.yt_t; yt6.yt_t_ = ytop; yt6.yt_t = (yt6.yt_t - 5); yt6.yt_t_0 = yt6.yt_t }
	    if (!yt6.x || !vp) {
	      v.style.top = (parseInt(v.style.top.replace('px','')) - 5) + 'px'
	      if (yt6.layout == 16 && v.tagName == 'EMBED') { var ytop = v.style.top; v.style.marginTop = ytop }
	      if (vp2) if (!yt6.x) { vp2.style.top = (parseInt(vp2.style.top.replace('px','')) - 5) + 'px' }
	    } else {
		vp.style.top = (parseInt(vp.style.top.replace('px','')) - 5) + 'px'
	      }
	    if (yt6.x && poster) poster.style.top = (parseInt(poster.style.top.replace('px','')) - 5) + 'px'
	    if (!yt6.x && webgl) {
	      webgl.parentNode.style.top = (parseInt(webgl.parentNode.style.top.replace('px','')) - 5) + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

	case 'down snarl-button yt-uix-button-text':
	  yt6.wmode = 'window'; if (yt6.ytg && v.style.top == '') v.style.top = '0px'
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    if (yt6.x) { var top = yt6.t; yt6.t_ = top; yt6.t = (yt6.t + 5) } else { var ytop = yt6.yt_t; yt6.yt_t_ = ytop; yt6.yt_t = (yt6.yt_t + 5); yt6.yt_t_0 = yt6.yt_t }
	    if (!yt6.x || !vp) { 
	      v.style.top = (parseInt(v.style.top.replace('px','')) + 5) + 'px'
	      if (yt6.layout == 16 && v.tagName == 'EMBED') { var ytop = v.style.top; v.style.marginTop = ytop }
	      if (vp2) if (!yt6.x) { vp2.style.top = (parseInt(vp2.style.top.replace('px','')) + 5) + 'px' }
	    } else {
		vp.style.top = (parseInt(vp.style.top.replace('px','')) + 5) + 'px'
	      }
	    if (yt6.x && poster) poster.style.top = (parseInt(poster.style.top.replace('px','')) + 5) + 'px'
	    if (!yt6.x && webgl) {
	      webgl.parentNode.style.top = (parseInt(webgl.parentNode.style.top.replace('px','')) + 5) + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

/* Reset all to default */
	case 'reset snarl-button yt-uix-button-text':

	  var bw = (bm0) ? bm0.style.width : yt6.w
	  var bh = (bm0) ? bm0.style.height : yt6.h
	  var bv = (bm0) ? bm0.style.visibility : 'hidden'

	  rz()
	  if (yt6.ytg && v) { v.style.left = '0px'; v.style.top = '0px' }

	  zoom = 1; rotate = 0;
	  if (!(yt6.layout == 16 && !yt6.ytm && !yt6.ytg && yt6.blocked && p && p.tagName == 'EMBED')) {}// aspect(yt6.size)
	  if (yt6.x) {
	    yt6.z = 1; yt6.r = 0; yt6.l = 0; yt6.t = 0; yt6.l_ = 0; yt6.t_ = 0
	    resize_layers( bw, bh, false )
	  } else {
	      yt6.yt_z = 1; yt6.yt_r = 0; yt6.yt_l = 0; yt6.yt_t = 0; yt6.yt_l_ = 0; yt6.yt_t_ = 0
	      resize_layers( bw, bh, false )
	  }



	  if (yt6.x) {
	    if (yt6.player1) yt6.player1.showControls(false);
	    var controls = gc('mejs-controls')[0];
	    if (controls) if (controls.style.display == 'none') controls.style.display = 'block';
	    controls = gclass("mejs-overlay-play")[0]; if (controls) controls.style.display = 'none'
	  }

	  if (v != p) {

	    if ( p && typeof p.getPlayerState == 'function' && p.tagName == 'DIV' && !yt6.x ) {

	      ythtml5_size()

	    } else {

	        var mep = gid(mep_x('mep_'))
		if (mep) {
		  mep.style.width = mep.style.width
		  mep.style.height = mep.style.height
		  mep.style.left = ''
		  mep.style.top = ''
		  mep.style.transform = ''
		}

		if (p && p.getAttribute('flashvars') == null) {

		  if (v && (mep || me_flash)) {
		    v.style.top = (Math.round( parseInt(
			 parseInt(bh.replace('px','')) -
			 parseInt(v.style.height.replace('px','')) - hdiff
			) / 2)	 ) + 'px'
	            v.style.left = (Math.round( parseInt(
			 parseInt(bw.replace('px','')) -
			 Math.round(parseInt(v.style.height.replace('px','') - hdiff) * parseFloat(yt6.aspect_ratio))
			) / 2)	 ) + 'px'
		  }

		} else {

		    if (!mep && me_flash) {
		      me_flash.style.left = '0px'
		      me_flash.style.top = '0px'
		    }
		    var opacity = (!(yt6.wallpaper && (yt6.flash.forced || yt6.p.tagName == 'EMBED'))) ? clone(yt6.p.style.opacity) || '1' : '1' //player().style.opacity; //var display = player().style.display;
		    //player().setAttribute("style","top: 0px; left: 0px; width: 0px !important; height: " + bm0.style.height + " !important; opacity:" + opacity + ";");
		    if (opacity && opacity != '' && p && typeof p.style.setProperty == 'function') p.style.setProperty('opacity', opacity, '')

		  }


		if (yt6.x && flashvars) {
		  for (i=0;i<flashvars.length;i++) { var f = flashvars[i]
			if (f && f[0] && typeof f[0].pauseMedia == 'function') {
			  f[0].style.top = '0px'
			  f[0].style.left = '0px'
			}
			if (f && f[0] && f[0] == gid(mep_x('me_flash_'))) {
			  if (f[0].style.width == '') f[0].style.width = bw
			  if (f[0].style.height == '') f[0].style.height = parseInt(bh.replace('px','') - hdiff) + 'px'
			  f[0].style.top = '0px'
			  f[0].style.left = '0px'
			}
		  }
		}

	      }

	    v.style[propN] = 'scale('+zoom+') rotate('+rotate+'deg)'
	    yt6.prop = 'scale('+zoom+') rotate('+rotate+'deg)'
	    yt6.yt_prop = 'scale('+zoom+') rotate('+rotate+'deg)'

	    if (webgl && !yt6.x) {
	      webgl.parentNode.style.left = Math.round((1 * bw.replace('px','') - webgl.style.width.replace('px','')) / 2) + 'px'
	      webgl.parentNode.style.top = Math.round((1 * bh.replace('px','') - hdiff - webgl.style.height.replace('px','')) / 2) + 'px'
	      webgl.style[propN] = v.style[propN]
	    }

	  } else {

	      var opacity = (!(yt6.wallpaper && (yt6.flash.forced || yt6.p.tagName == 'EMBED'))) ? yt6.p.style.opacity || '1' : '1'
	      var display = (yt6.p) ? yt6.p.style.display : 'inline-block'
	      var position = (yt6.flexy && yt6.wide) ? 'absolute' : 'relative'
	      if (yt6.layout == 16) {
	        var left = (yt6.flexy && yt6.wide) ? p.style.left : '0px'			
	      } else var left = (yt6.ytp.embed) ? p.style.left : '0px'
	      p.style.left = left
	      p.style.top = '0px'
	      p.style.width = z.style.width || bw
	      p.style.height = (z.style.height != '0px') ? z.style.height : bh
	      p.style.visibility = (bv == 'hidden') ? 'visible' : 'hidden'
	      p.style.opacity = opacity
	      zoom = 1; rotate = 0
	      p.style[propN] = yt6.yt_prop = 'scale('+zoom+') rotate('+rotate+'deg)';

	      if (browserName != 'Safari') {
	        p.style.position = ''
		display = 'display: ' + display
		position = '; position: ' + position
		opacity = (opacity) ? '; opacity: ' + opacity : ''
	        p.setAttribute('style', display + position + opacity + '; top: 0px; left: ' + left + '; width: ' + p.style.width + '; height: ' + ((p.style.height != '0px') ? p.style.height : yt6.h) + '; visibility: visible')
	      } else {
	          v.style[propN] = 'scale('+zoom+') rotate('+rotate+'deg)';
		  if (me_flash && !me_flash_) me_flash.style[propN] = 'scale('+zoom+' rotate('+rotate+'deg))';
		  if (yt6.x && poster) poster.style[propN] = v.style[propN]
	          if (!yt6.x && webgl) {
	            webgl.style[propN] = v.style[propN]
	          }
	        }
	    }
	  if (yt6.x && poster) { poster.style[propN] = 'none'; poster.style.top = '0px'; poster.style.left = '0px' }
	  if (yt6.x && vp) { vp.style.left = '0px'; vp.style.top = '0px' }
	  //if (yt6.p.tagName == 'DIV')
	  try { yt6.p.style[propN] = '' } catch(e){}

	break

      }//switch

      if (p && p.tagName == 'EMBED') p.setAttribute('wmode', yt6.wmode)

      if (z.getAttribute('id') != 'player' && v && v.style) z.style[propN] = v.style[propN]
      e.preventDefault ? e.preventDefault() : (e.returnValue = false)

    }//t.nodeName

  }//clicky
  addEL(controls, 'mousedown', yt6.clicky ,false);//click eventlistener

  var x = gid('control_panel'), y = gid('control_panel2')

  var yt_speed = yt6.ytp.speed = function(a) {

      var p = (shorts() && gid('shorts-player') && typeof gid('shorts-player').playVideo == 'function') ? gid('shorts-player') : yt6.p

      if (a && typeof a.preventDefault == 'function') a.preventDefault()
      try {
	var yts
	if (p && !(yt6.ytm && p.tagName == 'EMBED')) {
	  if (typeof p.getPlaybackRate == 'function') {
	    yts = p.getPlaybackRate()
	    if (v_(p)) yts = v_(p).playbackRate
	  } else if (p.tagName == 'IFRAME' && yt6.embed && yt6.embed.player && typeof yt6.embed.player.getPlaybackRate == 'function') yts = yt6.embed.player.getPlaybackRate()
	}

        var s = (typeof yt6.speed == 'number') ? yt6.speed : 1;
	if (a && a.deltaY)
        if (0 < a.deltaY) {
	  s = parseFloat((s - 0.1).toFixed(2)); if (parseFloat(s) < 0) s = 0
	} else {
	    if (0 > a.deltaY) s = parseFloat((s + 0.1).toFixed(2))
	    if (parseFloat(s) > 16) s = 16
	  }

	yt6.speed = s;
	var percent = (s == parseFloat(parseFloat(25 - parseFloat(24000/1001)) / parseFloat(24000/1001) + 1).toFixed(11) ||
			s == parseFloat(parseFloat(parseFloat(24000/1001) - 25) / 25 + 1).toFixed(11))
			? (s * 100).toFixed(2) : Math.round(s * 100)
	var ds = gid('displaySpeed'); if (ds) ds.innerHTML = '<span style="font-size: 10px">Speed</span> ' + percent + '%'

	if (p && !(yt6.ytm && p.tagName == 'EMBED') && yts != s) try {

	  if (typeof p.setPlaybackRate == 'function' && 2 >= p.getPlaybackRate() ) {
	    p.setPlaybackRate(s)
	  } else if (p.tagName == 'IFRAME' && yt6.embed && yt6.embed.player && typeof yt6.embed.player.setPlaybackRate == 'function') yt6.embed.player.setPlaybackRate(s)
	  if (v_(p) && !isNaN(v_(p).playbackRate) && browserName != 'IE') v_(p).playbackRate = s;

	  var m = gc('ytp-popup ytp-settings-menu')[0]
	  if (m) {
	    if (m.style.display != '') {
	      m.style.display = ''; try { m.show = true; gc('ytp-button ytp-settings-button')[0].click(); setTimeout(function(){ var m = gc('ytp-popup ytp-settings-menu')[0]; if (m && m.show) try { delete m.show; gc('ytp-button ytp-settings-button')[0].click() } catch(e) {} },2000) } catch(e){}
	      m.focus()
	    }
	    var n = gclass('ytp-menuitem','div',m)
	    for (i=0;i<n.length;i++){
	      if (n[i] && n[i].getAttribute('role') == 'menuitem') {//the first non-menuitemCheckbox should be the Playback speed option
		var o = gclass('ytp-menuitem-content','div', n[i])[0]
		if (o) o.innerHTML = s; break
	      }
	    }
	  }
	} catch(e){}

	yt6.player1.media.playbackRate = yt6.player2.media.playbackRate = s
	var z = gclass('audio_x','button')
	for(i=0;i<z.length;i++) { z[i].title = 'Use mousewheel to set speed'; z[i].setAttribute('aria-label', z[i].title); var y = gclass('displaySpeed','div',z[i])[0]; if (y) y.innerHTML = 'Speed: '+ s +'x' }// (' + percent + '%)
	if (yt6.x) yt6.player1.showControls(true)
	//console.log(yt6.speed); console.log(v_(p).playbackRate +' '+p.getPlaybackRate())
      } catch (e) {}

  }

  if (x && !x.added) {
    if (gclass('audio_x','button',x)[0]) {
      addEL(gclass('audio_x','button',x)[0], 'wheel', yt_speed, false)
      x.added = true
    }
  }
  if (y) {// && !y.added
    addEL(y, 'mouseup',function(e){ yt6.controls_pushed = false }, false)
    addEL(y, 'mousedown', yt6.clicky ,false)
    if (gclass('audio_x','button',y)[0] && !gclass('audio_x','button',y)[0].added) {
      addEL(gclass('audio_x','button',y)[0], 'wheel', yt_speed, false)
      gclass('audio_x','button',y)[0].added = true
    }
  }


  if (yt6.p) {
    if (yt6.p.tagName == 'EMBED0') {
      if (yt6.p.getAttribute('flashvars') && yt6.p.getAttribute('flashvars').indexOf('fmt_list=') == -1) {//yt6.p.tagName == 'OBJECT' || 
	var z = def_link()
	if ( (yt6.flash.forced && yt6.layout == 16) && ((z && z.indexOf('%26false') > -1) || (yt6.p.getAttribute('flashvars') && yt6.p.getAttribute('flashvars').indexOf('fmt_list=') == -1)) ) {
	  me_flash_up()
	  var z = document.getElementsByClassName('forced flashplayer')
	  for (i=0;i<z.length-1;i++) {
	    if (z[i] && z[i].tagName == 'EMBED') z[i].parentNode.removeChild(z[i])
	  }
	  //if (yt6.p.tagName == 'OBJECT') yt6.p.setAttribute('class','forced flashplayer')
        }
      } else {
	  var z = pcont()
	  if (z) {
	    z = z.getElementsByTagName('OBJECT')[0]
	    if (z && z.getAttribute('name') == 'me_flash') { z.parentNode.removeChild(z); set_controls() }
	  }
	}
    } else if (yt6.p.tagName == 'DIV') yt6.p.style[yt6.propName] = ''
  } else if (!player()) {
	me_flash_up(); set_controls()
    }

  if (yt6.p && yt6.p.tagName == 'OBJECT' && yt6.flash.forced == 2) yt6.flash.forced = true

  if (yt6.me_flash_ && yt6.me_flash_source && !yt6.player1.media.loaded) try {
    yt6.me_flash_source.click();
    if (yt6.autoplay) {
      yt6.player1.play()
      if (yt6.player1.media.paused) {
	yt6.player1.load();
	if (yt6.autoplay) yt6.player1.play()
      }
    }
  } catch(e) {}


}//CtrlS
