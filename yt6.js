var yt6 = document.getElementById('snarls_player')

  yt6.body = document.getElementsByTagName('body')[0]
  if (yt6.body) {
    if (yt6.body.textContent) {
      yt6.txt = 'textContent'
    } else yt6.txt = 'innerText'
    if (yt6.body.getAttribute('id') == 'body') { yt6.layout = 12 } else yt6.layout = 16
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

if (!window.onchange) {

(function() {
  var hidden = "hidden";


  window.onchange = function (evt) {
    var v = "visible", h = "hidden",
        evtMap = {
          focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
        };

    evt = evt || window.event;
    if (evt.type in evtMap)
      yt6.browser_tab = evtMap[evt.type];
    else
      yt6.browser_tab = this[hidden] ? "hidden" : "visible";
  }


  // Standards:
  if (hidden in document)
    addEL(document, "visibilitychange", window.onchange);
  else if ((hidden = "mozHidden") in document)
    addEL(document, "mozvisibilitychange", window.onchange);
  else if ((hidden = "webkitHidden") in document)
    addEL(document, "webkitvisibilitychange", window.onchange);
  else if ((hidden = "msHidden") in document)
    addEL(document, "msvisibilitychange", window.onchange);
  // IE 9 and lower:
  else if ("onfocusin" in document)
    document.onfocusin = document.onfocusout = window.onchange;
  // All others:
  else
    window.onpageshow = window.onpagehide
    = window.onfocus = window.onblur = window.onchange;


  // set the initial state (but only if browser supports the Page Visibility API)
  if( document[hidden] !== undefined )
    onchange({type: document[hidden] ? "blur" : "focus"});
})();

}


if ((document.getElementById(mep_x("google_ads_frame")) != null) && (typeof fnCheckLocation != 'number')) {
var noads = setInterval(function(){
  var ads = gc('videoAdUiSkipButton')[0]; if (ads) { ads.click();ads.setAttribute("class","videoAdUiSkipButton") }
  var ads = gc("video-ads html5-stop-propagation")[0]; if (ads) { ads.parentNode.removeChild(ads) };
  var ads = document.getElementById("google_companion_ad_div"); if (ads) { ads.parentNode.removeChild(ads) };
  var ads = document.getElementById(mep_x("google_ads_frame")); if (ads) { ads.parentNode.removeChild(ads) };
  var ads = document.getElementById('content'); if (ads) { ads.setAttribute('id','content') };
  if ((yt6 == undefined) || (typeof yt6.fnCheckLocation == 'number')) { clearInterval(noads) }

            },2000)
}

yt6.no_cards = true

function no_cards() {

	var x = gc('ytp-button ytp-cards-button')[0]
	if (x) var y = gc('ytp-cards-teaser')[0]
	var z = gc('ytp-ce-covering-overlay')[0]
	if (x || y || z) {
	  if (!yt6.no_cards && bm0.style.visibility == 'hidden') {
	    if (x) x.style.display = ''
	    if (y) y.style.display = ''
	    if (z) z.parentNode.style.display = ''
	  } else {
	      if (x) x.style.display = 'none'
	      if (y) y.style.display = 'none'
	      if (z) z.parentNode.style.display = 'none'
	    }
	}

}

function qr(sr) {

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
	var pra = prs[i].split('=');
	qa[pra[0]] = pra[1];
      }
    };
    
      var pra = prs[0].split('=');
      var prs = pra[0].split('?');
      if ((typeof pra[1] != 'undefined') && (typeof prs[1] != 'undefined')) {
	qa[pra[0].split('?')[1]] = pra[1];
      }

  } else {
      var prs = sr.split('/')
      for (i=4;i<prs.length;i=i+2) {
        qa[prs[i]] = prs[i+1];
      };
    }
  return qa;
}


yt6.userpref = [43,18]

  var qual = {
    5: '240p FLV H.263 + 64k MP3',
    6: '270p FLV H.263 + 64k MP3',
    13: '144p 3GP H.263 + 12k AMR',
    17: '144p 3GP MPEG-4 + 24k AAC',
    18: '360p MP4 H.264 + 96k AAC',
    22: '720p MP4 H.264 + 192k AAC',
    34: '360p FLV H.264 + 128k AAC',
    35: '480p FLV H.264 + 128k AAC',
    36: '240p 3GP MPEG-4 + 36k AAC',
    37: '1080p MP4 H.264 + 192k AAC',
    38: '3072p MP4 H.264 + 192k AAC',
    43: '360p WebM VP8 + 128k Vorbis',
    44: '480p WebM VP8 + 128k Vorbis',
    45: '720p WebM VP8 + 192k Vorbis',
    46: '1080p WebM VP8 + 192k Vorbis',
    59: '480p MP4 H.264 /59/ + 128k AAC',
    78: '480p MP4 H.264 /78/ + 128k AAC',
    82: '360p MP4 3D + 96k AAC',
    83: '240p MP4 3D + 96k AAC',
    84: '720p MP4 3D + 192k AAC',
    85: '1080p MP4 3D + 192k AAC',
    100: '360p WebM 3D + 128k Vorbis',
    101: '360p WebM 3D + 192k Vorbis',
    102: '720p WebM 3D + 192k Vorbis',
    132: '144p DASH H.264',
    133: '240p DASH H.264',
    134: '360p DASH H.264',
    135: '480p DASH H.264',
    136: '720p DASH H.264',
    137: '1080p DASH H.264',
    138: '4k/8k DASH H.264 vfps',
    139: '48k DASH AAC',
    140: '128k DASH AAC',
    141: '256k DASH AAC',
    160: '144p DASH H.264',
    167: '360p WebM VP8',
    168: '480p WebM VP8 670k',
    169: '720p WebM VP8',
    170: '1080p WebM VP8',
    171: '128k WebM Vorbis',
    172: '192k WebM Vorbis',
    218: '480p WebM VP8 720k',
    219: '480p WebM VP8 820k',
    242: '240p WebM VP9',
    243: '360p WebM VP9',
    244: '480p WebM VP9',
    245: '480p WebM 900k VP9',
    246: '480p WebM 1400k VP9',
    247: '720p WebM VP9',
    248: '1080p WebM VP9',
    249: '48k WebM Opus',
    250: '64k WebM Opus',
    251: '160k WebM Opus',
    256: '192k DASH AAC 6ch',
    258: '384k DASH AAC 6ch',
    264: '1440p DASH H.264',
    266: '2160p DASH H.264',
    271: '1440p WebM VP9',
    272: '4320p WebM VP9',
    241: '144p WebM VP9',
    278: '144p WebM VP9',
    298: '720p DASH H.264 ^fps',
    299: '1080p DASH H.264 ^fps',
    302: '720p WebM VP9 ^fps',
    303: '1080p WebM VP9 ^fps',
    308: '1440p WebM VP9 ^fps',
    313: '2160p WebM VP9',
    315: '2160p WebM VP9 ^fps'
  };


  var a,b,i,j,k,x,y,z;


  yt6.fmts_fallback = {};
  yt6.fmts_fallback.V = {};
  yt6.fmts_fallback.A = {};
  yt6.fmts_fallback.V3D = {};
  yt6.fmts_fallback.V.webm = [,,272,315,,313,308,,271,303,,46,,170,248,,302,,45,,247,,44,,,219,218,168,246,245,244,,43,,243,,242,,278]
  yt6.fmts_fallback.V.h264 = [138,38,,,266,,,264,,,299,,37,,,137,,298,,22,,136,,78,59,,,,,,,135,,18,,134,,133,,132]
  yt6.fmts_fallback.A.webm = [,,,251,172,171,,250,249]
  yt6.fmts_fallback.A.aac = [258,256,141,,,,140,,,139]
  yt6.fmts_fallback.V3D.h264 = [85,,84,,,82,83]
  yt6.fmts_fallback.V3D.webm = [,102,,101,100]
  yt6.fmts_fallback.other = [35,34,6,5,36,17,13]

  yt6.fmts_fallback.V.all = []
  yt6.fmts_fallback.A.all = []
  yt6.fmts_fallback.V3D.all = []

  for(i=0; i<yt6.fmts_fallback.V.h264.length;i++){
    if (yt6.fmts_fallback.V.h264[i] || yt6.fmts_fallback.V.webm[i]) yt6.fmts_fallback.V.all[i] = yt6.fmts_fallback.V.h264[i] || yt6.fmts_fallback.V.webm[i]
    if (yt6.fmts_fallback.A.aac[i] || yt6.fmts_fallback.A.webm[i]) yt6.fmts_fallback.A.all[i] = yt6.fmts_fallback.A.aac[i] || yt6.fmts_fallback.A.webm[i]
    if (yt6.fmts_fallback.V3D.h264[i] || yt6.fmts_fallback.V3D.webm[i]) yt6.fmts_fallback.V3D.all[i] = yt6.fmts_fallback.V3D.h264[i] || yt6.fmts_fallback.V3D.webm[i]
  }



function get_quality(url) {

  var qs = qr(url);
  if (qs == null) return null
  return qual[qs.itag] || qs.itag
}


function rp(tx) {
  return tx.split('"').join('&quot;');
}


function dc(sg) {
  //return eval(fcnm + '("' + sg + '")');
  if ((document.getElementById('ytassetsjs') != null) && (typeof document.getElementById('ytassetsjs').fcnm != 'undefined')) {
    var fcnm = document.getElementById('ytassetsjs').fcnm
    return fcnm(sg);
  } else return sg
}


if (!Array.prototype.indexOf) {
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


function def_link(){
  if (!ytplayer.config) return ''
  if (!ytplayer.config.args) return ''
  yt6.sig = '&'
  var ft = [ytplayer.config.args.url_encoded_fmt_stream_map, ytplayer.config.args.adaptive_fmts]
  for (i in ft) {
    if (typeof ft[i] == 'string') {
      var z = ft ? ft[i].split(',') : '';
      for (j in z) {
	var qq = get_quality(z[j]);if (qq == null) continue;//alert('0qq')
	var qs = qr(z[j]);if (qs == null) continue;//alert('0qs')
	var href = unescape(qs.url).replace('http:', '').replace('https:', '');
	var sig = href
	if (qs.signature){
	  href += '&signature=' + qs.signature;
	  sig += '&signature=' + qs.signature;
	}
	if (qs.s) {//alert('Encrypted content! '+ qs.s + dc(qs.s) + document.getElementById('ytassetsjs').fcnm )
	  href += '&signature=' + dc(qs.s);
	}
	if (href.indexOf("&ratebypass=yes") == -1) { href += '&ratebypass=yes'}
	if (qq.indexOf("360p MP4 H.264") != -1) var def = href

      }
    }
  }
if ((sig) && (sig != null)) {
  if (sig.indexOf("&signature=") > -1) { sig = '&true' } else { sig = '&false' }
}
return encodeURIComponent('https:' + def + sig)
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
      onComplete();
      return;
  }

  if (!delay) delay=100;

  var timeoutPointer;
  var intervalPointer=setInterval(function () {
      if (!check()) return; // if check didn't return true, means we need another check in the next interval

      // if the check returned true, means we're done here. clear the interval and the timeout and execute onComplete
      clearInterval(intervalPointer);
      if (timeoutPointer) clearTimeout(timeoutPointer);
      if (typeof onComplete == 'function') onComplete();
  },delay);
  // if after timeout milliseconds function doesn't return true, abort
  if (timeout) timeoutPointer=setTimeout(function () {
      clearInterval(intervalPointer);
  },timeout);
}



            function exit( status ) {
              // http://kevin.vanzonneveld.net
              // +   original by: Brett Zamir (http://brettz9.blogspot.com)
              // +      input by: Paul
              // +   bugfixed by: Hyam Singer (http://www.impact-computing.com/)
              // +   improved by: Philip Peterson
              // +   bugfixed by: Brett Zamir (http://brettz9.blogspot.com)
              // %        note 1: Should be considered expirimental. Please comment on this function.
              // *     example 1: exit();
              // *     returns 1: null

              var i;

              if (typeof status === 'string') {
                alert(status);
              }

              addEL(window, 'error', function (e) {e.preventDefault();e.stopPropagation();}, false);

              var handlers = [
                'copy', 'cut', 'paste',
                'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
                'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
                'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
              ];

              function stopPropagation (e) {
                e.stopPropagation();
                // e.preventDefault(); // Stop for the form controls, etc., too?
              }
              for (i=0; i < handlers.length; i++) {
                // window.addEL(handlers[i], function (e) {stopPropagation(e);}, true);
              }

              if (window.stop) {
                window.stop();
              }

              throw '';
            }


    function no_default(_itag){ 
      $waitUntil(
	function(){ if (1 * yt6.userpref[0] == 1 * _itag) { return true } else {} },
	function(){ yt6.userpref.splice(0,1); },
	500,5000
      )
    }



function FireEvent( ElementId, EventName )
{
    if( document.getElementById(ElementId) != null )    
    {   
        if( document.getElementById( ElementId ).fireEvent ) 
        {
            document.getElementById( ElementId ).fireEvent( 'on' + EventName );     
        }
        else 
        {   
            var evObj = document.createEvent( 'Events' );
            evObj.initEvent( EventName, true, false );
            document.getElementById( ElementId ).dispatchEvent( evObj );
        }
    }
}


function FireEvent2( element, event ) {

	if (element) {
	    try {
	      if (window.CustomEvent) {
	        element.dispatchEvent(new CustomEvent( event));
	      } else {
	          if (document.createEvent) {
		    var ev = document.createEvent('HTMLEvents');
		    ev.initEvent( event, true, false);
		    element.dispatchEvent(ev);
	          } else { // Internet Explorer
		      element.fireEvent( event );
		    }
		}
	    } catch(e) {//console.log(element.getAttribute('class'));console.log(e) // IE11 error
		if (document.createEvent) {
		  var ev = document.createEvent('HTMLEvents');
		  ev.initEvent( event, true, false);
		  element.dispatchEvent(ev);
		}
	      }
	}

}



function swfbin4(){
  yt6.swfbin4 = document.getElementById('player').innerHTML.split('var ytplayer = ytplayer || {};')[1]
  if (yt6.swfbin4 != null) {
    yt6.swfbin4 = yt6.swfbin4.split('"url":"')[1].split('"')[0];
    yt6.swfbin4 = yt6.swfbin4.split('player-')[1].split('\\')[0];
  } else yt6.swfbin4 = null
}

if (document.getElementById('player') != null) swfbin4()

  var proxies = [
	'https://cors-anywhere.herokuapp.com/https:',
	'https://allow-any-origin.appspot.com/https:',
	'https://crossorigin.me/https:'
  ]

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]

  function shuffle(o){ //v1.0
    for(j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

function onDownload(x) {
  document.location = 'data:Application/octet-stream,' + encodeURIComponent(x);
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
  var fcnm = rpt.split('dashmpd,')[1]
  if (fcnm) {
    fcnm = fcnm.split('));')[0];
    if (document.location.href.indexOf('//s.ytimg.com/') != -1 && fcnm.indexOf('&amp;') != -1) fcnm = fcnm.split('&amp;').join('&')
    var i = fcnm.split('\"/signature/\"\+')[1].split(")")[0].split("\n").join("").split("\r").join("");
    fcnm = fcnm.split("&&("+i+"=")[1] || fcnm.split("&amp;&amp;("+i+"=")[1]
    if (fcnm) fcnm = fcnm.substring(0,2)
  } else {
      fcnm = rpt.split('set("signature",')[1]
      if (fcnm) {
        fcnm = fcnm.split('(')[0]
        fcnm = fcnm.split("\n").join("").split("\r").join("");
      }
    }

  
  function sprintf(nw) {
    var i = 0;
    while (/%s/.test(nw))
      nw = nw.replace('%s', arguments[++i])
    return nw;
  }
  var fs = new RegExp(    sprintf('function %s[^}]+}[^}]+}', fcnm.replace('$', '\\$'))  ); if (rpt.match(fs) == null) {
  var fs = new RegExp(    sprintf('var %s=function[^}]+};', fcnm.replace('$', '\\$'))  ); if (rpt.match(fs) == null) {
  var fs = new RegExp(    sprintf('\\W+%s=function[^}]+}', fcnm.replace('$', '\\$'))  );//console.log('fs='+rpt.match(fs))
  }
  };//console.log(fs)
  //var fs = new RegExp('function ' + fcnm.replace('\$','\\$') + '[^}]+}[^}]+}');

  function fcobj(){
    var mch = rpt.match(fs)[0];  mch = mch.split('');
    for (j=0;j<mch.length;j++) {
      if (mch[j] === "$") {
        mch[j]="\\$"
      }
    };
    var mch = mch.join('');
    var mch = mch.split('\;');
    for (i=0;i<mch.length;i++) {
      var zzx = mch[i].substring(0,3);
      if ((zzx === zzy) && (zzx.charAt(2)==='.')) { var zzz = zzy.substring(0,2) };
      var zzy = zzx
    }
    if (typeof zzz === 'undefined') {
      for (i=0;i<mch.length;i++) {
        var zzx = mch[i].substring(0,4);
        if ((zzx === zzy) && (zzx.charAt(3)==='.')) { var zzz = zzy.substring(0,3) };
        var zzy = zzx
      }
    }
    var mch = new RegExp('var ' + zzz + '[^}]+}[^}]+}[^}]+}};');
    return [mch,zzz]
  }//fcobj

  var decrypt0 = rpt.match(fcobj()[0])[0].split(" " + fcobj()[1] + "=").join(" dekrypt0=")
  if (rpt.match(fs)[0] && rpt.match(fs)[0].split(';')[0] && rpt.match(fs)[0].split(';')[0].indexOf('function') == -1 && rpt.match(fs)[0].split(';')[1].indexOf('function') != -1) {
    var fs0 = (rpt.match(fs)[0].match(/;/g) || []).length;
    var fs1 = rpt.match(fs)[0].split(';')
    var fs2 = ''
    for(i=1;i<fs0+1;i++){
      var fs2 = fs2 + fs1[i] + ';'
    }
  } else fs2 = rpt.match(fs)[0]

  var fcnm = 'function fcnm(' + fs2.split("(")[1].split(")")[0] + '){ ' + decrypt0 + '; ' + fs2.split(fcobj()[1]+".").join("dekrypt0.").split("\"").join("'").split("){")[1]
  var fcnm = "function " + fcnm.split("function ")[1]

  eval(fcnm)

  //document.getElementById('ytassetsjs').fcnm = fcnm
  //try { if (document.getElementById('ytassetsjs') != null) document.getElementById('ytassetsjs').innerHTML = fcnm } catch(e) {}
  return fcnm
}


if (document.location.href.indexOf('//s.ytimg.com/') > -1) {
  window.fcnm = find_key(yt6.body.firstChild[yt6.txt]);
  if (window.fcnm && window.fcnm.toString().indexOf('function fcnm(') != -1) {
    yt6.body.firstChild[yt6.txt] = window.fcnm.toString()
    throw 'Decryption key manually extracted... Exiting'
  } else {}
  yt6.parentNode.removeChild(yt6)
}

function hand_axe(){

		    if (document.getElementById('getjs') != null && document.getElementById('setjs') != null) return void 0;
		    var bm1 = document.getElementById('bm1')
		    if (bm1) bm1.parentNode.removeChild(bm1)
		    var bm1 = document.getElementById('ytassetsjs')
		    if (bm1) bm1.parentNode.removeChild(bm1)
		    var bm1 = document.createElement('span')
		    bm1.id = 'bm1'
		    bm1.innerHTML = '<button id="getjs" onclick="var bm1 = document.getElementById(\'bm1\'); bm1.newWindow = window.open( \'' + protocol() + ytplayer.config.assets.js + '\', \'_blank\'); if (bm1.newWindow != null) bm1.newWindow.focus(); "><span><img src="//i1.ytimg.com/i/gsZadWjuuN2dEhI0mZfVfQ/mq1.jpg?v=531525b4" style="height:27px"></img></span></button';
		    var z = gc('yt-masthead-logo-container ')
		    if (z[0]) {
		      var z = z[0]
		    } else {
			var z = document.getElementById('logo');
			if (z == null) {
			  var z = document.getElementById('home-button');
		          if (z) {
			    z = z.parentNode
			  } else throw 'YouTube layout mismatch';
			}
		      }
		    z.insertBefore(bm1, z.lastChild);
		    var z_class = z.getAttribute('class') || z.outerHTML.split('class="')[1].split('"')[0]

		    //bm1.newWindow = window.open(protocol() + ytplayer.config.assets.js, "_blank", "width=100,height=100,menubar=yes");
		    bm1.setAttribute('style','display:inline-block; position: relative; width: 52px; max-height:30px;');
		    var bm1 = bm1.style
		    bm1.display = 'inline-block'; bm1.position = 'relative'; bm1.width = '52px'; bm1.maxHeight = '30px';
		    if ( 1 * getElementsByAttribute(document,'div','class', z_class.indexOf('doodle') > -1 )) {
		      var z = document.getElementById('logo-container') || document.getElementById('logo') || document.getElementById('home-button');
		      z.setAttribute('style','width:88px'); z.style.width = '88px'
		    }


yt6.recharge = function() {
		    yt6.osw = document.getElementById('placeholder-player') || document.getElementById('player')
		    if (typeof deldiv == 'function') { deldiv() }
		      else {
			if (document.getElementById("snarls_player")) document.getElementById('snarls_player').parentNode.removeChild(document.getElementById("snarls_player"))
		      }
		    document.getElementById('movie_player').setAttribute('style','display: inline-block');
		    if (document.getElementById('snarls_player') == undefined) {
			  var q=document.createElement('div');
			  q.id='snarls_player';
			  yt6.body.appendChild(q);
			  var q=document.createElement('script');
			  q.id='snarls_player';
			  q.src=document.getElementById("ytassetsjs").srco;//px + '/snarly/yt6/master/yt6.js';
			  document.getElementById('snarls_player').appendChild(q);
		    }
}

yt6.feedback = function(fcnm) {

		document.getElementById('controls-sp').parentNode.removeChild(document.getElementById('controls-sp'))
		var feed = window.prompt('Looking good! Below is the part that was needed and would\'ve been sufficient to paste. Copy if you plan to re-use it later (it\'s only useful for a period of time.)', fcnm)
		if (feed) {
		  yt6.recharge()
		} else {
		    if (typeof deldiv == 'function') { deldiv() }
		      else {
			if (document.getElementById("snarls_player")) document.getElementById('snarls_player').parentNode.removeChild(document.getElementById("snarls_player"))
		      }
		  }

			  //document.getElementById(\'bm6\').parentNode.removeChild(document.getElementById(\'bm6\'));\
			  //if (document.getElementById(\'bm1\') != null) {\
			    //if (document.getElementById(\'bm1\').newWindow) document.getElementById(\'bm1\').newWindow.close();\
			    //document.getElementById(\'bm1\').parentNode.removeChild(document.getElementById(\'bm1\'));\
			  //};\

}

		    var bm1 = document.createElement('span')
		    bm1.id = 'bm6'
		    bm1.innerHTML = '<span><textarea id="setjs" value="" maxlength="2097152" rows="1" cols="15" style="height: 20px; border: solid;" onkeyup="if (event.keyCode == 13) {\
			if (document.getElementById(\'setjs\').value.indexOf(\'function()\') != -1 || document.getElementById(\'setjs\').value.indexOf(\'function fcnm(\') != -1) {\
			  if (document.getElementById(\'controls-sp\') != null) document.getElementById(\'controls-sp\').innerHTML = \'OK, Processing...\';\
			  var scpt = document.createElement(\'div\');\
			  scpt.type = \'text/javascript\';\
			  scpt.id = \'ytassetsjs\';\
			  scpt[yt6.txt] = document.getElementById(\'setjs\').value;\
			  yt6.body.appendChild(scpt);\
			  var scpt = document.getElementById(\'ytassetsjs\');\
			  scpt.srco = document.getElementById(\'snarls_player\').firstChild.src || document.getElementById(\'snarls_player\').src;\
			  var z = new Date().toLocaleString().toString();\
			  scpt.setAttribute(\'time\',z);\
			  scpt.setAttribute(\'style\',\'display: none\'); scpt.style.display = \'none\';\
			  var fcnm = find_key(scpt[yt6.txt]);\
			  if (fcnm && scpt[yt6.txt].indexOf(\'function fcnm()\') == -1 && scpt[yt6.txt].indexOf(\'var dekrypt0\') == -1) {\
			    scpt[yt6.txt] = fcnm;\
			    yt6.feedback(fcnm);\
			  } else yt6.recharge();\
			} else {\
			    if (document.getElementById(\'bm1\').newWindow) document.getElementById(\'bm1\').newWindow.close();\
			    if (document.getElementById(\'bm1\') != null) document.getElementById(\'bm1\').parentNode.removeChild(document.getElementById(\'bm1\')) ;\
			    if (typeof deldiv == \'function\') { deldiv() };\
			    if (document.getElementById(\'snarls_player\') != null) document.getElementById(\'snarls_player\').parentNode.removeChild(document.getElementById(\'snarls_player\'));\
			  }}"></textarea></span>';
		    z.insertBefore(bm1, z.lastChild);

control_panel1()
var panel = document.getElementById('controls-sp')
if (panel) {
  panel.parentNode.removeChild(document.getElementById('remove-sp'))
  panel.style.position = 'relative';
  panel.innerHTML = '<span>ERROR: Data could not be retrieved via proxy, but you can do it by hand. A new tab or window should have opened. If pop-ups are blocked, click the Transformer-icon. The content is a wall of text starting with something like \"var _yt_player\" or \"function\". If your browser can\'t display it, opt for the download and use a text editor such as Notepad to view it. Otherwise -- if possible -- run the bookmarklet on that page too to get only the few lines needed. SELECT & COPY (Ctrl+A, Ctrl+C) then PASTE the content into the input field just below the YouTube logo on this page (Ctrl+V). If done, press ENTER.</span>'
}


    var js = document.createElement('style');
    js.type = 'text/css';
    js.media = 'screen';
    var code = 

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
      js.appendChild(document.createTextNode(code));
      document.getElementById('video-hide').appendChild(js);
    } catch (e) {
      js.text = code;
      document.getElementById('video-hide').appendChild(js);
    }
    delete js;



/*
		  $waitUntil(function(){if(document.getElementById('ytassetsjs') != null) return true}, function() {
yt6.recharge()
		   }

		  )
*/

  var getjs = document.getElementById('getjs')
  if (typeof getjs.click == 'function') {
    getjs.click()
  } else {
      if (document.getElementById("bm1").newWindow != null) document.getElementById("bm1").newWindow.focus()
    }
  throw 'XMLHttpRequest failure'
}//hand_axe


var xhr2 = new XMLHttpRequest();


function ajax1(update){


  if (yt && yt.player && yt.player.Application) { //console.log('Get links without xhr call...')

  //$waitUntil(function() { if (document.getElementById('displaySpeed') != null) return true },
  //function(){

    if (document.getElementById('test-4') == null) {
      var z = document.createElement('div')
      z.id = 'test-4'
      yt6.appendChild(z)
      z.setAttribute('style','display: none'); z.style.display = 'none';
    } else document.getElementById('test-4').removeAttribute('name')
/*
	  var test = document.createElement("script");
	  test.type = "text/javascript";
	  test.id = "test";
	  yt6.body.appendChild(test);
*/

    function uniq(item, pos, self) {
      return self.indexOf(item) == pos;
    }

    //yt6.error = ''

    try { var ypa = yt.player.Application.create('test-4', ytplayer.config);
      ypa.dispose();
    } catch(e) { yt6.error = '  \n  ' }

    if (yt6.error != '  \n  ') {

    var gvd = JSON.stringify(ypa.getVideoData());
    //test[yt6.txt] = yt6.gvd;
    var xr = gvd.match(/https:[^"]+videoplayback[^"]+/g);

    if (xr) {//xr defined?

    //yt6.ya = yt6.xr.filter(z => z.length < 1000);
    var filtR = function(z) { if (z && z.length < 1000) return z }

    var ya = xr.filter(filtR);

    if (ya && ya.length) {
      var filtR = function(z) { if (z && z.length > 20) return z }
      var dsig = gvd.match(/[0123456789ABCDEF.]+(?=")/g)
        .filter(filtR).filter(uniq);//.filter(z => z.length > 20).filter(uniq);

      var filtR = function(item, pos) { if (dsig) return item + '&signature=' + dsig[pos] }
      var durl = ya.filter(uniq).map(filtR);//.map((item, pos) => item + '&signature=' + yt6.dsig[pos]);

    } else {
	var durl = xr.filter(uniq);
      }

    ya = xr = gvd = ypa = null;


    var cfmt = [];

    //for (eurl of yt6.durl) {
    for (k=0;k < durl.length;k++) {
      var eurl = durl[k];
      if (eurl.indexOf('itag') != -1) {
	if (typeof URLSearchParams != 'undefined') {
	  var usp = new URLSearchParams(eurl.split('?')[1]);
	  var efmt = qual[usp.get('itag')] || usp.get('itag');
	  cfmt[usp.get('itag')] =
	  //`<a href="${eurl}">${efmt}</a>`;
	    '<a name="' + usp.get('itag') + '" href="' + eurl + '">' + efmt + '</a>';
        } else {
	    var usp = eurl.split('?')[1];
	    var efmt = get_quality(usp);
	    cfmt[qr(usp).itag] =
	    '<a name="' + qr(usp).itag + '" href="' + eurl + '">' + efmt + '</a>';
	  }
      }
    }

      //document.getElementById('test-4').innerHTML = Object.keys(cfmt).map(z => cfmt[z]).filter(z => /href/.test(z)).join('<br>');
	document.getElementById('test-4').innerHTML = cfmt.join('').split('</a>').join('</a><br>')

    dsig = durl = usp = efmt = cfmt = null;

    }//xr undefined
  //},200,4000)


    } else {

      };//yt6.error

  } else {
      //console.log(' ytp: ' + typeof yt.player.Application + '\n usp: ' + typeof URLSearchParams)
    }


  function yt_assets(xhr) {

	    var px = yt6.px.replace('/https:','');

	    if (typeof xhr.responseText != 'unknown') {
	      if ((xhr.responseText.indexOf('403 Forbidden') > -1) || (xhr.responseText == '403_Forbidden')) {
	        //alert(px + ' proxy denied to serve data: 403 Forbidden')
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
			if (px != '//www.youtube.com') {
			  scpt.setAttribute('name', px + '/https:' + ytplayer.config.assets.js);
			} else scpt.setAttribute('name', 'https:' + px + ytplayer.config.assets.js.replace('//s.ytimg.com/','/'));
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

  var ytassetsjs = document.getElementById('ytassetsjs')

    function setProxy(){

      var xhr = new XMLHttpRequest();
      var proxiez = []; proxiez[0] = proxies[0]; proxiez[1] = proxies[1]; proxiez[2] = proxies[2];
      shuffle(proxiez);
      proxiez.splice(0,0,'//www.youtube.com')
      xhr.done = false;

      for (i=0;i<proxiez.length;i++){
	if (ytassetsjs != null && ytassetsjs.name && ytassetsjs.innerHTML.indexOf('var ') != -1) { //console.log('0');
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
          var ytassetsjs = document.getElementById('ytassetsjs')
          if (ytassetsjs != null && ytassetsjs.name && ytassetsjs.innerHTML.indexOf('var ') != -1) {
            return [ytassetsjs.getAttribute('name').split('/https')[0], ytassetsjs.innerHTML]
            break
	  }
	}

	if (xhr.done) break

	var px = yt6.px = proxiez[i]
	var z = document.getElementById(px + ' error' ); if (z != null) continue;
        if (ytplayer.config.assets.js && ytplayer.config.assets.js.indexOf('//s.ytimg.com/') ==  -1) {
          var px = yt6.px = '//www.youtube.com'
        }

	try {
	  var base_js = (px == '//www.youtube.com') ?
	    ytplayer.config.assets.js.replace('//s.ytimg.com/','/') :
	    ytplayer.config.assets.js
	  xhr.open('get', px + base_js, false);
	  xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && xhr.status == 200 && !xhr.done) {

	      yt_assets(xhr)

	    }
	  }//onreadystatechange
	  xhr.send('');
	} catch (e) {
	    yt6.error = e;
	    if (typeof xhr.responseText != 'unknown') {
	      if (i === proxiez.length-1) {

		if ((e.toString().indexOf('"Access to restricted URI denied"  code: "1012"') > -1) || (e.toString().indexOf('ReferenceError: Security violation') > -1) || (xhr.responseText.indexOf('403 Forbidden') > -1) || (e.toString().indexOf('XMLHttpRequest Exception 101') > -1)) {

		  hand_axe()

		} else {
		    hand_axe()
//		    throw new Error(e + " " + px + ' error')
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
    if (ytassetsjs != null) {//ytassetsjs.parentNode.removeChild(ytassetsjs)
      ytassetsjs.id = 'ytassetsjs-0'
      ytassetsjs.setAttribute('class', 'ytassetsjs-0')
    }

    var spx = setProxy();
//hand_axe()

    if (typeof spx == 'undefined') {

      yt6.timer = 0

      $waitUntil(
        function(){//console.log(yt6.timer)
	  var ytassetsjs = document.getElementById('ytassetsjs');
	  if (ytassetsjs != null) {
	    if (ytassetsjs.innerHTML.indexOf('var ') != -1) {
	      return true;
	    }
	  } else {
	      yt6.timer++;
	      if (yt6.timer > 10) {
		if (document.getElementById('getjs') == null) {
		  hand_axe();
		} //else console.log('One too many')
	      }
	    }
	},
        function(){  },
        500,7000
      )//document.getElementById('ytassetsjs').fcnm = find_key(document.getElementById('ytassetsjs').innerHTML)



    } else {

        var px = spx[0]
        var rpt = spx[1]

        document.getElementById('ytassetsjs').fcnm = document.getElementById('ytassetsjs').innerHTML = find_key(rpt)
      }


  } else {
      var rpt = ytassetsjs.innerHTML;
      document.getElementById('ytassetsjs').fcnm = document.getElementById('ytassetsjs').innerHTML = find_key(rpt)
    }


/*if (player().getAttribute('name') == 'me_flash') {
  var file = def_link()
  if ((player()) && (player() != null)) var me_flash_param = getElementsByAttribute(player(),"param","name","flashvars");
  if (me_flash_param[0] != undefined) {
    me_flash_param[0].setAttribute("value", me_flash_param[0].getAttribute("value").split("&file=")[0] + "&file=" + file)
  }
  player().setAttribute('src', file)
  //reload_flashplayer()
}*/

}//ajax1


function itag(me_src){
  if (me_src.indexOf('itag=') > -1) var itagx = me_src.split('itag=')[1].split('&')[0]
  if (me_src.indexOf('itag/') > -1) var itagx = me_src.split('itag/')[1].split('/')[0]
  if (itagx) { return itagx } else { return 999 }
}


function getPoster(){
  var poster;
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
          poster = protocol() + '//i1.ytimg.com/vi/' + window.ytplayer.config.args.video_id + '/0.jpg'
        }
    }

  //if (window.ytplayer.config.args.video_id) {

  var img = document.createElement('div')
  img.id = 'test_poster'
  yt6.appendChild(img)
  var img = document.createElement('img')
  img.id = 'test_poster2'
  img.src = poster
  img.style.display = 'none'
  img.onload = function(){
    $waitUntil(function() {if (document.getElementById('test_poster2') != null) return true; },
      function() {
	if ((this.naturalWidth == 120) && (this.naturalHeight == 90)) {
	  this.src = '//i1.ytimg.com/i/gsZadWjuuN2dEhI0mZfVfQ/mq1.jpg?v=531525b4'
	  var z = document.getElementById('mejs-poster');
	  if (z.firstChild != null){
	    z.style.backgroundImage = "url('" + document.getElementById('test_poster').src + "')";
	    z.firstChild.src = document.getElementById('test_poster').src;
	  }
        }
        //document.getElementById('test_poster2').parentNode.innerHTML = ''
	var img = yt6.lastChild;
        //while (img.getAttribute('id') == 'test_poster')
	yt6.removeChild(img)
      }
    )
  }
  if (document.getElementById('test_poster')) document.getElementById('test_poster').appendChild(img)
  delete img

  //} else return ''

  return poster
}




function mep_x(a){
  var a1 = a.split('_ _')[0];
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
    if (document.getElementById(a1 + i + a2) != null) break
  }
//if (a.indexOf('me_flash') > -1) alert(a1 + i + a2)
  return a1 + i + a2
}


function protocol() { var protocol = 'http:'; //return protocol
  var protocol = (document.location.protocol=='http:')?'http:':'https:';
  return protocol
};

function player() {
  if (document.getElementById('movie_player') && !yt6.api) yt6.api = document.getElementById("movie_player").parentNode;
    yt6.movie_player = document.getElementById('movie_player')
  if (!yt6.ytg) {
    return document.getElementById('movie_player')
  } else {
      if (!yt6.api && document.getElementById('player')) {
	var z = document.getElementById('player').children
	for(var i in z) {
	  if (z[i].id) {
	    yt6.api = z[i];
	  }
	}
      }
      if (yt6.api) {
	var z = yt6.api.children
	for(var i in z) {
	  if (z[i].id && (z[i].id == 'video-player' || z[i].id.indexOf('player_uid_') == 0)) {
	    yt6.movie_player = z[i];
	  }
	}
      }
    }
  return yt6.movie_player
};


function reload_flashplayer(first){

	var p = player()
	var bm0 = document.getElementById("bm0")
        var bup = document.getElementById('movie_player').cloneNode(true);
	if (first) {
/*	  if (document.getElementById('movie_player0') == null) {
	    p.setAttribute('id','movie_player0');
	    p.style.setProperty('width', '0', 'important')
	    p.style.setProperty('height', '0', 'important')
	    //p.style.display = 'none';
	    document.getElementById("player-api").insertBefore(bup, document.getElementById('movie_player0'));
	  };*/
	  return true
	} else {
/*	    $.removeData(p); p.parentNode.removeChild(p); p = null; p = {}; delete p;
	    if (bm0) {
	      document.getElementById("player-api").insertBefore(bup, bm0)
	    } else {
		document.getElementById("player-api").appendChild(bup)
	      }*/
	    set_controls();
	  }

}



function correct_flashvars(a) {

  window.ytplayer.config.args.remarketing_url = '';
  window.ytplayer.config.args.afv_ad_tag = '';
  window.ytplayer.config.args.afv_invideo_ad_tag = '';
  window.ytplayer.config.args.dynamic_allocation_ad_tag = '';

		//

                function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}

		function wa(a){return(0,window.encodeURIComponent)(String(a))};

                function da(a){return"array"==ca(a)}
                function vf(a,b,c){if(da(b))for(var d=0;d<b.length;d++)vf(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",wa(b))};//encodeURIComponent(String(b)))}
                function wf(a,b){for(var c in b)vf(c,b[c],a);return a}
                function xf(a){a=wf([],a);a[0]="";return a.join("")}

                // End

                return xf(a)

}

if (!document.getElementById('video-hide')) {
   (function(){
	var z = document.createElement('div')
	z.id = 'video-hide'
	yt6.appendChild(z)
	z.setAttribute('style','display: none'); try { z.style = 'display: none' } catch(e) {}
	var a = document.getElementById('page') || document.getElementById('mainContainer');
	// !!! New YouTube Layout! !!! (2016-07-10)
	if (document.getElementById('content') == null && yt6.layout == 12) {
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
	delete z;
    })();
}


function loadScript(url, callback) {
  var z = document.createElement("script");
  z.type = "text/javascript";
  z.src = url;
  z.id = url.split(/[/]+/)[url.split(/[/]+/).length-1];
  z.onreadystatechange = callback;
  z.onload = callback;
  document.getElementById('video-hide').appendChild(z);
}

function loadCSS(url, callback) {
  var z = document.createElement("link");
  z.type = "text/css";
  z.href = url;
  z.rel = "Stylesheet";
  z.onreadystatechange = callback;
  z.onload = callback;
  document.getElementById('video-hide').appendChild(z);
}


function video_title() {

  var title = document.getElementById('eow-title') || gc('title style-scope ytd-video-primary-info-renderer')[0]
  var title = (title) ? title[yt6.txt] : document.title.substring(0, document.title.length)
  if (title.indexOf(' - YouTube') == title.length - 10) title = title.substring(0, title.length - 10)
  if (title.indexOf(' - YouTube Gaming') == title.length - 17) title = title.substring(0, title.length - 17)

  return title
}

function video_id() {

  var vid = location.href.split('v=')[1]
  if (vid) vid = vid.split('&')[0]
  if (!vid) {
    vid = location.href.split('v/')[1]
    if (vid) vid = vid.split('/')[0]
  }
  vid = [ vid, location.href.split('//')[1].split('.youtube.com')[0] ]
  return vid
}

//iurlmaxres iurlhq720 iurlsd iurlhq iurl thumbnail_url iurlmq
function alt_yt(vid) {


		if (!vid) var vid = video_id()[0]

	        if (yt6.age.t && yt6.age.t.id.indexOf('watch') != -1) {

		  if (window.ytplayer.config.html5 == false || (player().tagName == 'EMBED' && player().getAttribute('flashvars') != '' )) {
		  } else {

			yt.player.Application.create(player().parentNode, ytplayer.config);
		    }


		} else {
		    var z = document.getElementById('movie_player')
		    if (z.name != 're-embed2' || (z.name == 're-embed2' && z.src.indexOf('embed/' + vid) == -1 && document.getElementById('video-hide').firstChild && document.getElementById('video-hide').firstChild.id.indexOf('movie_player') == 0)) {
		      if (!z.block) {
			if (!(document.getElementById('video-hide').firstChild && document.getElementById('video-hide').firstChild.id.indexOf('movie_player') == 0)) {
			  if (player().firstChild.getAttribute('class')) {
			    player().firstChild.setAttribute('class','html5-video-container0')
			    player().firstChild.firstChild.setAttribute('class','video-stream-html5-main-video0')
			  }
			  document.getElementById('video-hide').insertBefore(player(), document.getElementById('video-hide').firstChild)
			} else if (z.name == 're-embed2') z.parentNode.removeChild(z)
		      } else {
			  z.id = 'iframe_p3';
			  z.src = '';
			  document.getElementsByTagName('head')[0].appendChild(document.getElementById('iframe_p3'))
			};//z.parentNode.removeChild(z)
//console.log('" '+z.block+' "')
//yt.player.Application.create(document.getElementById('player-container'), ytplayer.config);


		      if (!window.embed) {

			window.embed = {}
			window.embed.control = function(p3) {
			  yt6.embed.play = function() { yt6.embed.player.playVideo() }
			  yt6.embed.pause = function() { yt6.embed.player.pauseVideo() }
			}

			window.embed.active = function() {

//			  $waitUntil(function(){

//			    if (yt6.embed.play && yt6.embed.pause) return true},
//			      function(){

			        // create the global player from the specific iframe (#movie_player)
				window.embed.player = new YT.Player('movie_player', {
				  events: {
				    // call this function when player is ready to use
				    'onReady': yt6.embed.control
				  }
				});
//			    }
//			  })
		        }

			var z = document.createElement('iframe');
			z.id = 'iframe_p3'
			z.name = 're-embed2';
			yt6.api.insertBefore(z, yt6.api.firstChild)
			z.block = yt6.block;
			z.setAttribute('class','player-height player-width');
			z.setAttribute('allowFullScreen', '');
			z.setAttribute("allowscriptaccess","always");
			z.setAttribute('wmode','window');
			z.setAttribute('width', '100%');
			z.setAttribute('height','100%');
			if (yt6.osw) {
			  z.style.width = yt6.osw.style.width
			  z.style.height = yt6.osw.style.height
			}
			//if (yt6.ytg) document.getElementById('continuations').previousSibling.id = 'movie_player0'
			loadScript( protocol() + '//www.youtube.com/iframe_api', function(){});

		      }

			yt6.embed = window.embed
			var z = document.getElementById('iframe_p3')
			yt6.api.insertBefore(z, yt6.api.firstChild)
			z.src = 'embed/' + vid + '?autoplay=0&enablejsapi=1&version=3'
			z.id = 'movie_player'

		    }


		  }

		  (function ytp_id(){
		    //yt6.timer = 0
		    var z = yt6.api.children
		    for (i=0;i<z.length;i++) { //if (z[i].id) console.log(z[i].id);
		      //if (z[i].id && (z[i].id == 'bm0' || x == 'player_uid_')) { var x = 'player_uid_' } else var x = 'video-player'
	              if (z[i].id == 'video-player') {
			//console.log('ok '+ z[i].id.indexOf('player_uid_'))
			yt6.new_ytplayer = z[i]
			$waitUntil(function(){if (player() != null || yt6.new_ytplayer.id.indexOf('player_uid_') == 0) { return true } else { } },
			function(){
			  yt6.new_ytplayer.setAttribute('name','movie_player');
			  yt6.new_ytplayer.setAttribute('id','movie_player')
			  if (player()) {
			    if (player().tagName == 'EMBED') yt6.api.removeChild(player())
			    //if (yt6.age == document.getElementById('player')) {
			      /*yt6.insertBefore(player(), yt6.lastChild)
			      yt6.api.insertBefore(yt6.new_ytplayer, yt6.api.firstChild)*/
			      //yt6.age = document.getElementById('player-container');//new_ytplayer
			    //}
			  }
			},200,6000);
			if (z[i]) { z[i].setAttribute('id','movie_player') } else {
			  if (yt6.api.children[0].id == 'bm0' || (yt6.api.children[1].id == 'bm0' && yt6.api.children[0].id != 'movie_player') || (yt6.api.children[2].id == 'bm0' && yt6.api.children[1].id != 'movie_player' && yt6.api.children[1].id != 'movie_player')) {
			    $waitUntil(function(){
				var z = yt6.api.children
			        for (i=0;i<z.length;i++) { //if (z[i].id) console.log('2 '+z[i].id);
				  if (z[i].id && z[i].id.indexOf('player_uid_') == 0) { yt6.new_ytplayer = z[i]; return true; break } //else {  yt6.timer++ };// console.log('3 '+yt6.timer) }
				}
			      },
			      function(){
				yt6.new_ytplayer.setAttribute('name','movie_player');
				yt6.new_ytplayer.setAttribute('id','movie_player');
				player().parentNode.insertBefore(player(), player().parentNode.firstChild)
				/*$waitUntil(function(){ if (document.getElementById('bm0') != null) return true },
				  function(){ set_controls() },
				  200,4000);*/
			      },200,6000);
			  }
			}
			  
			break
		      }
		    };
		  })()

}//alt_yt


function alt_yt_cleanup() {//console.log(player().getAttribute('name') + typeof yt6.block + '"'+yt6.block+'"'+yt6.age.done)

  //var age = document.getElementById('continuations');
  //if (age || yt6.layout == 16) {
    var age = document.getElementById('video-hide').firstChild;//age.previousSibling
    //yt6.age.check();
    //console.log('blocked:'+yt6.block)
  //}
  if (age && age.getAttribute('id') == 'movie_player0' && (ytplayer.config.args && ytplayer.config.args.status == 'ok' || !yt6.age.check() || yt6.age.done == 2)) {//console.log('2! '+player().getAttribute('name'));
    //age.id = 'movie_player'
    if (age.firstChild != null) {
      age.firstChild.setAttribute('class','html5-video-container')
      age.firstChild.firstChild.setAttribute('class','video-stream html5-main-video')
    }
    age.style = ''
    if (age.hasAttribute('hidden')) age.removeAttribute('hidden')
    player().parentNode.insertBefore(age, player().parentNode.firstChild);
    player().src = '';
    player().id = 'iframe_p3';
    document.getElementsByTagName('head')[0].appendChild(document.getElementById('iframe_p3'))
    document.getElementById('movie_player0').setAttribute('id','movie_player')

    var z = gclass('html5-video-player remote-created')[0]
    if (z) z.parentNode.removeChild(z)
    //console.log('2 ' + player().name + yt6.block + age.id + yt6.age.done)
//player().parentNode.insertBefore(player(), player().parentNode.firstChild)
  } else {
      if (age && age.getAttribute('id') == 'movie_player') {//console.log('1! '+player().getAttribute('name'))
	age.style.visibility = "hidden"
	age.setAttribute('hidden','')
	age.setAttribute('id','movie_player0')
	//player().parentNode.insertBefore(player(), player().parentNode.firstChild);
	//console.log('1 ' + player().name + yt6.block + age.id + yt6.age.done)
      }
    }
  
}


  function ageless_verification() {

    var vid = video_id()[0]

    if (vid) {

      try {

	if (typeof ytplayer == 'undefined') {
	  window.ytplayer = {};
	  window.open(protocol() + '//www.youtube.com/embed/' + vid, "w_blank", "width=640,height=360,menubar=yes");
	}
	var xhr1 = new XMLHttpRequest();
	xhr1.open('get', '//' + video_id()[1] + '.youtube.com/embed/' + vid, false);// '//www.youtube.com/get_video_info?video_id=' + vid, false)
	xhr1.onreadystatechange = function() {
	  if (vid && xhr1.readyState == 4 && xhr1.status == 200) {
	    //console.log(xhr1.readyState +' '+ xhr1.status + '\n' + xhr1.responseText);
	    if (xhr1.responseText.indexOf('yt.setConfig(') != -1) {
	      eval('window.ytplayer.config = ' + xhr1.responseText.split('yt.setConfig({\'PLAYER_CONFIG\': ')[1].split('});writeEmbed()')[0].split(',\'EXPERIMENT_FLAGS\'')[0].split('\n').join('').split('\r').join('') );
	      //console.log(ytplayer.config); console.log('args:'+typeof window.ytplayer.config.args)
	      xhr1.status = 201
	    }
	  }
	}
	xhr1.send('')


      } catch(e){
	  if (ytplayer.config == null && document.getElementById('player1') == null) { yt6.parentNode.removeChild(yt6); var z = 'Failed to fetch config data'; alert(z); throw z }
	}


      try {

	function parse_video_info(arguments){

	  yt6.args = arguments.split('&');
	  for (i=0;i<yt6.args.length;i++) {
	    var z = (typeof yt6.args[i] !== 'undefined' && yt6.args[i].split('=')[0]) ? yt6.args[i].split('=') : null;
	    if (z && z[0] != 'title' && (ytplayer.config.args[z[0]] == undefined || z[0] == 'video_id')) {
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
	    }
	  }

//if (ytplayer.config.args.adaptive_fmts || ytplayer.config.args.url_encoded_fmt_stream_map)
//console.log('C')

	  if (location.href.split('list=PL')[1]) {
	    ytplayer.config.args.list = 'PL' + location.href.split('list=PL')[1].split('&')[0].split('/')[0]
	  }

	  if (ytplayer.config.args.el) delete ytplayer.config.args.el
	  ytplayer.config.args.csi_page_type = 'watch,watch7_html5'
	  ytplayer.config.args.iv_allow_in_place_switch = '0'

	  yt6.status = ytplayer.config.args.status
	  yt6.reason = ytplayer.config.args.reason
	  //console.log(yt6.status)

	  if (yt6.age.t) {

//console.log('D')
	  var z = document.getElementById('overlay')
	  if (z) { z.setAttribute('hidden','') }

	  if (window.ytplayer.config.html5 == false || (player().tagName == 'EMBED' && player().getAttribute('flashvars') != '')) {

	    player().name = 'movie_player';
	    if (player().getAttribute('flashvars') == '' || yt6.ytg) {//' '
	      player().setAttribute("flashvars", correct_flashvars(window.ytplayer.config.args))
	      if (!yt6.swfbin4) player().setAttribute("src", ytplayer.config.url)
	    }
	    $waitUntil(function(){if (player() == null) {
		var z = yt6.api.children
		for(var i in z) {
		  if (z[i].id == 'video-player' || z[i].id.indexOf('player_uid_') == 0) {
		    yt6.new_ytplayer = z[i];
		    //console.log('child');
		    return true
		  }
		}
	      } else {} },
	      function(){
		var z = yt6.new_ytplayer.id;
		var fv = yt6.new_ytplayer.getAttribute('flashvars')
		if (fv && fv != '' && fv != null) yt6.new_ytplayer.setAttribute('flashvars', fv.split(z).join('movie_player'));
		yt6.new_ytplayer.setAttribute('name','movie_player');
		yt6.new_ytplayer.setAttribute('id','movie_player');
	      },200,6000);


	  } else {//console.log('E '+yt6.age.t[yt6.txt]+' ? '+yt6.change+' ? '+document.getElementById('reason'))

	      //console.log('status: ' + yt6.status + '\nreason: ' + yt6.reason + '\n '+ yt6.change)
	      //yt6.age = document.getElementById('placeholder-player') || document.getElementById('reason')
	      if (document.getElementById('movie_player') && ( player().tagName == 'EMBED' || document.getElementById('bm0') == null || (yt6.layout == 16 && yt6.status == 'fail' && yt6.reason ) ) ) { //(yt6.age.t == document.getElementById('reason') && yt6.age.t[yt6.txt] == yt6.change) ) ) {
	        //console.log('F1')
		alt_yt(vid)

	      } else if (yt6.layout == 12) {//console.log('F2')

		  if (yt6.age.t && yt6.age.t.id.indexOf('watch') == -1 && !yt6.change) {
		    //console.log('F3');
		    $waitUntil(function(){if(yt6.change != undefined) return true},
		      function(){alt_yt(vid);
		      },100,2000)
		  } else {//console.log('F4');

		      $waitUntil(
			function(){
			  if (player() == null) {
			    var z = yt6.api.children
			    for(var i in z) {
			      if (z[i].id == 'video-player' || z[i].id.indexOf('player_uid_') == 0) {
				yt6.new_ytplayer = z[i];
				//console.log('child');
				return true;
				break
			      }
		            }
	                  } else {
			      if (yt6.age.done == 2) {
				if (yt6.block) { //console.log('yt6.age.done');
				  yt6.age.done++; alt_yt(vid); //alt_yt_cleanup()
				}
				yt6.change = yt6.block
			      }
		            }
			},
			function(){
			  var z = yt6.new_ytplayer.id;
			  yt6.new_ytplayer.setAttribute('name','movie_player');
			  yt6.new_ytplayer.setAttribute('id','movie_player');
			  set_controls()
			},200,6000);

		     }

		}
	    }

	  }

	}

yt6.age.check()
//console.log('A')
	//var vid = location.href.split('v=')[1].split('&')[0]
	//if (!vid) vid = location.href.split('v/')[1].split('/')[0]
	var xhr3 = new XMLHttpRequest()
	var proxy = '';//(yt6.ytg) ? shuffle(proxies)[0] : '';
	xhr3.open('get', proxy + '//www.youtube.com/get_video_info?video_id=' + vid, false);// 
	xhr3.onreadystatechange = function() { 

	  if ((yt6.age.t || yt6.ytg || yt6.layout == 16) && xhr3.readyState == 4 && xhr3.status == 200 && xhr3.responseText) {// && xhr3.responseText.indexOf('status=fail') == -1) {
	    if (!ytplayer.config.args) {
	      $waitUntil(function(){if (ytplayer.config.args) { return true } },
		function(){ parse_video_info(xhr3.responseText);
		  var z = document.getElementById('unavailable-message');// || document.getElementById('reason')
		  if ( z != null && z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '') {
		    var z = document.getElementById('player-unavailable');// || gclass('ytd-playability-error-supported-renderers-0')[0]
		    if (z) z.style.display = 'none'
		  }
		},200,6000)
	    } else {//console.log('B')
		parse_video_info(xhr3.responseText);//console.log('X'); //if(document.getElementById('movie_player0')) console.log(document.getElementById('movie_player0').nextSibling)
		var z = document.getElementById('unavailable-message');// || document.getElementById('reason')
		if ( z != null && z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '') {
		  var z = document.getElementById('player-unavailable');// || gclass('ytd-playability-error-supported-renderers-0')[0]
		  if (z) z.style.display = 'none'
		}
	      }
	  }
	}
	xhr3.send('')

      } catch(e){}

    }//vid?

  }




function html5toflash(){
var p = document.createElement('embed')
p.id = 'movie_player_flash'
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
z.setAttribute('src','https://s.ytimg.com/yts/swfbin/player-' + yt6.swfbin4 + '/watch_as3.swf')
$.removeData(p); p.parentNode.removeChild(p); p = null; p = {}; delete p;
document.getElementById('player-api').insertBefore(z, document.getElementById('player-api').firstChild)

}


function me_flash_up(file, ib){

    if (typeof file == 'undefined') var file = def_link()
    if (typeof ib == 'undefined') var ib = document.getElementById("player-api").firstChild
    //var js = document.createElement('div');
    //js.id = 'poster_wall';
    //document.getElementById('player-api').appendChild(js);
    //js.setAttribute('wmode','transparent');
    //js.setAttribute('onclick',"javascript: document.getElementById('poster_wall').style.display = 'none'");
    //js.innerHTML = '<img src="' + getPoster() + '" width="640" height="390" />'
    var js = document.createElement('object');
    js.id = 'movie_player';
    //js.src = protocol() + "//cdn.rawgit.com/snarly/yt6/8adc04ba0f5099fdc6f0de0e2a5c966611b389fb/flashmediaelement.swf";
    js.title = "Adobe Flash Player";
    //document.getElementById('player-api').appendChild(js);
    document.getElementById("player-api").insertBefore(js, ib)
    js.setAttribute("name","me_flash");
    js.setAttribute("play","true");
    js.setAttribute("loop","false");
    js.setAttribute("quality","high");
    js.setAttribute("bgcolor","#000000");
    //js.setAttribute("wmode","transparent");
    js.setAttribute("allowscriptaccess","always");
    js.setAttribute("allowfullscreen","true");
    js.setAttribute("type","application/x-shockwave-flash");
    js.setAttribute("pluginspage","//www.macromedia.com/go/getflashplayer");
    js.setAttribute("src",decodeURIComponent(file));
    js.setAttribute("width","640");
    js.setAttribute("height","390");
    js.setAttribute("scale","default");
    js.setAttribute("class","video-stream html5-main-video");

    js.setAttribute("data","//cdn.rawgit.com/johndyer/mediaelement/8adf73f1a2bec0b6867f83917ce8c491d01c1aa9/build/flashmediaelement-cdn.swf")
    js.innerHTML = '<param name="movie" value="' + encodeURIComponent('//cdn.rawgit.com/johndyer/mediaelement/8adf73f1a2bec0b6867f83917ce8c491d01c1aa9/build/flashmediaelement-cdn.swf') + '" />\
                    <param name="flashvars" value="thumb=' + encodeURIComponent(getPoster()) + '&controls=true&file=' + file + '" />';
                    //<!-- Image as a last resort -->
                    //<img src="myvideo.jpg" width="320" height="240" title="No video playback capabilities" />
    player().style.setProperty('width', '0', 'important')
    player().style.setProperty('height', '0', 'important')
//player().style.display = 'none'

   }
//overwrite p
//document.getElementById("player-api").innerHTML = ''; me_flash_up()
//  document.getElementById('player-api').style.overflow = 'hidden';


  yt6.retry = 0
  yt6.age = {}
  yt6.age.done = 0
  yt6.age.check = function() {
	  yt6.age.t = document.getElementById('watch7-player-age-gate-content') || document.getElementById('reason')
	  if (yt6.age.t) if (yt6.age.t[yt6.txt].indexOf('"') == 0 || yt6.age.t[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') == '') yt6.age.t = null;
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
	if (yt6.age.t != null) {
	  yt6.block = yt6.age.t[yt6.txt]
	} else {
	    yt6.block = document.getElementById('unavailable-message');
	    if (yt6.block) yt6.block = yt6.block[yt6.txt]
	  }
//console.log('check: ' + yt6.block)
	if (yt6.age.t) { return true } else return false
  }




if (document.getElementsByTagName('ytg-persistent-player')[0]) {
  yt6.ytg = document.getElementById('player').firstElementChild
  if (yt6.ytg.id == 'player') {
    yt6.ytg.id = 'player-api'
    yt6.ytg.firstElementChild.setAttribute('name', yt6.ytg.firstElementChild.id)
    yt6.ytg.firstElementChild.id = 'movie_player'
    yt6.ytg.setAttribute('style', document.getElementById('player-container').getAttribute('style') + ' overflow: hidden;')
  }
} else {
    yt6.ytg = null
    try { delete yt6.ytg } catch(e) { yt6['ytg'] = undefined }
    document.getElementById('player-api').setAttribute('style','width: ' + document.getElementById('player-api').offsetWidth + 'px; height:' + document.getElementById('player-api').offsetHeight + 'px; overflow: hidden;')
  }

function blank_fmp() {

  var v = document.getElementById('video-hide')
  var div = document.createElement('div')
  var span = document.createElement('span')
  var embed = document.createElement('embed')

  var wrap = function() { return document.getElementById('sp-element-wrap') }
  if (wrap() == null) {
    div.id = 'sp-element-wrap'
    v.appendChild(div)
  }

  document.getElementById('sp-element-wrap').innerHTML = '<span tabindex="0"></span><embed style="" wmode="transparent" type="application/x-shockwave-flash" src="" aria-label="YouTube Video Player" name="movie_player" id="movie_player" flashvars="" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000"><span tabindex="0"></span><noembed></noembed>';

      (function noembed(){
	var z = document.getElementById('sp-element-wrap').lastChild
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
	x.appendChild(w); w.setAttribute('class', 'yt-alert-message')
	var w = document.createElement('div')
	y.appendChild(w); w.setAttribute('class', 'yt-alert-buttons')
    })();

  while(wrap().lastChild != null){
    var element = wrap().lastChild
    document.getElementById('player-api').insertBefore(element, document.getElementById('player-api').firstChild)
  }

}




  if (typeof ytplayer != 'object' || (ytplayer && ytplayer.config == null)) {
    if (document.getElementById('player')[yt6.txt].split('var ytplayer = ytplayer || {};')[1]) {
      //window.ytplayer = {}
      eval(document.getElementById('player')[yt6.txt].split('var ytplayer = ytplayer || {};')[1].split(';(function()')[0].split('ytplayer.load = function() {yt.player.App')[0]);
      if (ytplayer.config.args.url_encoded_fmt_stream_map == null) ageless_verification()
    } else {
	if (typeof ytplayer == 'undefined') ageless_verification()
      }
  }



if ( (player() == null) || ((player() != null) && (typeof document.getElementById('movie_player').getPlayerState != 'function') && (gc("html5-video-container")[0]) && (gc("html5-video-container")[0].innerHTML == '')) ) {


  if (typeof ytplay0 == 'undefined') { //blank_fmp()

    document.getElementById("player-api").innerHTML = '<span tabindex="0"></span><embed style="" wmode="transparent" type="application/x-shockwave-flash" src="" aria-label="YouTube Video Player" name="movie_player" id="movie_player" flashvars="" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000"><span tabindex="0"></span><noembed></noembed>';

    (function noembed(){
	var z = document.getElementById('player-api').lastChild
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
	x.appendChild(w); w.setAttribute('class', 'yt-alert-message')
	var w = document.createElement('div')
	y.appendChild(w); w.setAttribute('class', 'yt-alert-buttons')
    })();

    if (ytplayer.config == null) {

	ageless_verification()

    } else {
	if (ytplayer.config.args == null) {
	  yt6.parentNode.removeChild(yt6)
	} else {
	    if (ytplayer.config.args.url_encoded_fmt_stream_map == null) {
	      ageless_verification()
	    } else {
		//if (ytplayer.config.hml5 == false) {
		  document.getElementById('movie_player').setAttribute("flashvars", correct_flashvars(window.ytplayer.config.args))
		//} else yt.player.Application.create("player-api", ytplayer.config)
	      }
	  }
      }


    if (document.getElementById('movie_player').getAttribute('src') == 'about:blank') yt6.parentNode.removeChild(yt6)

  }//play0
}



 //alert('player ' + player() + 'window.ytplayer ' + window.ytplayer + 'ytplayer.config ' + ytplayer.config + 'ytplayer.config.loaded ' + ytplayer.config.loaded + document.getElementById('ytassetsjs') + 'fcnm' + typeof document.getElementById('ytassetsjs') + 1 * def_link().indexOf('%26false'))
// onDownload(document.getElementById('player-api').innerHTML);
if ((player() != null) && (window.ytplayer) && (ytplayer.config) && (ytplayer.config.loaded == true)  && (document.getElementById('ytassetsjs') == null) && (1 * def_link().indexOf('%26false') > -1)) {

  ajax1()

} else {

    if (typeof ytplayer != 'object') {
      window.ytplayer = {};
      eval(document.getElementById('player')[yt6.txt].split('var ytplayer = ytplayer || {};')[1].split(';(function()')[0]);
    }
    if (player() == null) {
      document.getElementById("player-api").innerHTML = ''; me_flash_up()
    } else {

	if ((gc('html5-video-content')[0]) && (gc('html5-video-content')[0].innerHTML == '')) {
	  document.getElementById("player-api").innerHTML = ''; me_flash_up()
	}
      }

    if (def_link() != '') {

      if (!ytplayer.config) ytplayer.config = {}
      ytplayer.config.loaded = true

      if ( ((def_link() == '') || (1 * def_link().indexOf('%26false') > -1)) && ((document.getElementById('ytassetsjs') == null) || ((document.getElementById('ytassetsjs') != null) && (typeof document.getElementById('ytassetsjs').fcnm == 'undefined'))) ) { ajax1() }

    } else {

      }

}

if ( gclass('ytd-playability-error-supported-renderers-0')[0] && (!gclass('ytd-playability-error-supported-renderers-0')[0].style.display != 'none' || document.getElementById('player-container').hasAttribute('hidden') ) || yt6.ytg) {
  ageless_verification()
  if (gclass('ytd-playability-error-supported-renderers-0')[0]) gclass('ytd-playability-error-supported-renderers-0')[0].style.display = 'none'
  if (document.getElementById('player-container').hasAttribute('hidden')) document.getElementById('player-container').removeAttribute('hidden')
}

var parseXml;

if (typeof window.DOMParser != "undefined") {
    parseXml = function(xmlStr) {
        return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
    };
} else if (typeof window.ActiveXObject != "undefined" &&
       new window.ActiveXObject("Microsoft.XMLDOM")) {
    parseXml = function(xmlStr) {
        var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlStr);
        return xmlDoc;
    };
} else {
    throw new Error("No XML parser found");
}



  function fix_Width() {

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
      var z = z.firstChild;
    }
    if (z) { var o = z.getAttribute('style') } else return '-1px'; if (o && !yt6.ytg) z.removeAttribute('style')
    //if (z.getAttribute('id') != 'player') {
      var y = z.currentStyle || window.getComputedStyle(z, null)
function nop(){//    } else {
	var y = {};
	y.width = z.offsetWidth + 'px';
	y.height = z.offsetHeight + 'px';
	y.left = z.offsetLeft + 'px';
	y.top = z.offsetTop + 'px';
      }
if (!y.width) { if (o != null && !yt6.ytg) z.setAttribute('style', o); return '-1px' }

    var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight);
    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth);
    var w_base

if ( (wide_view() == false) || ((wide_view() == true) && ((yt6.size == 'default') || (!yt6.size)) ) ) {
  w_base = y.width;
  } else {
    if (z.getAttribute('id') != 'player') {
      if (z.parentNode.offsetWidth == 0) return '-1px'
      var x = z.parentNode.offsetWidth + getScrollbarWidth()
    } else {
	if (z.parentNode.parentNode.offsetWidth == 0) return '-1px'
	var x = z.parentNode.parentNode.offsetWidth + getScrollbarWidth()
      }
    if ((windowwidth > 1933) && (windowheight > 940)){
       w_base = '1254px';
    } else {
        if ((windowwidth > 1293) && (windowheight > 629)){
          if (document.getElementById('player').getAttribute("class").indexOf("small") > -1)  {
            w_base = '854px';
          } else {
	      if (x > 640){
		w_base = '854px'
	      } else {
		  w_base = '640px'
		}
	    }
        } else {
            if (x > 640){
              w_base = '640px';
            } else {
                w_base = '426px';
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
      var z = z.firstChild;
    }
    if (z) { var o = z.getAttribute('style') } else return '-1px'; if (o && !yt6.ytg) z.removeAttribute('style')
    //if (z.getAttribute('id') != 'player') {
      var y = z.currentStyle || window.getComputedStyle(z, null)
function nop(){//    } else {
	var y = {};
	y.width = z.offsetWidth + 'px';
	y.height = z.offsetHeight + 'px';
	y.left = z.offsetLeft + 'px';
	y.top = z.offsetTop + 'px';
      }

    if (!y.width) { if (o != null && !yt6.ytg) z.setAttribute('style', o); return '-1px' }

    if (z.getAttribute('id') != 'player') {
      yt6.hdiff = parseInt( y.height.replace('px','') - ((y.height.replace('px','') / 60 >> 0) * 60) );  
      var hdiff = yt6.hdiff
    } else var hdiff = 0

    var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight);
    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth);
    var h_base

if ( (wide_view() == false) || ((wide_view() == true) && ((yt6.size == 'default') || (!yt6.size)) ) ) {
  h_base = parseInt(y.height.replace('px','')) + hdiff + 'px';
  } else {
    if (z.getAttribute('id') != 'player') {
      if (z.parentNode.offsetWidth == 0) return '-1px'
      var x = z.parentNode.offsetWidth + getScrollbarWidth()
    } else {
	if (z.parentNode.parentNode.offsetWidth == 0) return '-1px'
	var x = z.parentNode.parentNode.offsetWidth + getScrollbarWidth()
      }
    if ((windowwidth > 1933) && (windowheight > 940)){
      h_base = 704 + hdiff + 'px';
    } else {
        if ((windowwidth > 1293) && (windowheight > 629)){
          if (document.getElementById('player').getAttribute("class").indexOf("small") > -1) {
	    h_base = 480 + hdiff + 'px';
	  } else {
	      if (x > 640){
		h_base = 480 + hdiff + 'px'
	      } else {
		  h_base = 360 + hdiff + 'px'
		}
	    }
        } else {
            if (x > 640){
              h_base = 360 + hdiff + 'px';
            } else {
                h_base = 240 + hdiff + 'px';
              }
          }
      }
}//wide_view
  if (o != null && !yt6.ytg) z.setAttribute('style', o)
    return h_base
  }

function get_webgl(){
  var z = gc('webgl')[0];
  if (z) var webgl = z.getElementsByTagName('canvas')[0]; //getElementsByAttribute(player(),'canvas','draggable','true')[0];
  return webgl
}

function getFlashVars(){
  if (player() != null) {
    if ((typeof player().getPlayerState == 'function') && (document.getElementById('bm0') != null) && (document.getElementById('bm0').style.visibility == 'hidden')) return player().getAttribute('flashvars')
  }

  var me_flash = getElementsByAttribute(document,'object','name','me_flash');
  if (typeof me_flash[0] != 'undefined') {
    if (me_flash.length != 0) {
      for(i=0;i<me_flash.length;i++){
        var me_flash_param = getElementsByAttribute(me_flash[i],'param','name','flashvars');
      }
    }
    var me_flash_ = getElementsByAttribute(document,'embed','name',mep_x('me_flash_'));
    if (typeof me_flash_[0] != 'undefined') { me_flash.push.apply( me_flash, me_flash_ ) }; 
    return me_flash
  }
  return null
}




function set_controls(){


  var p = player()
  var flashvars = getFlashVars();
  var bm0 = document.getElementById('bm0')
  var mep = document.getElementById(mep_x("mep_"))
  var me_flash_ = getElementsByAttribute(document,"embed","name",mep_x("me_flash_"))[0]
  var stage = p
  var v = p
    if (mep) {
      if (typeof p.getPlayerState == 'function' && bm0) {//ytplayer
	if (bm0.style.visibility == 'hidden') {
          if (typeof flashvars != 'string') {
            var stage = gc('html5-video-content')[0];
	    var v = gc('video-stream html5-main-video')[0];
	  } else {
	      var stage = p; var v = p
	    }
	} else {
	    var stage = gc('html5-video-content')[1];
	    if (stage == undefined) {
	      var stage = gc('html5-video-content')[0];
	    }
	    var v = gc('video-stream html5-main-video')[2];
	    if (v == undefined) {
	      var v = gc('video-stream html5-main-video')[1];
	      if (v == undefined) {
	        var v = gc('video-stream html5-main-video')[0];
	      }
            }
		if (me_flash_ != undefined){
		    var x = gclass('mejs-shim')[0];
		    if (x) {
			  if ((document.getElementById(mep_x('me_flash_')) != null) && (bm0.style.visibility == 'visible')) {
				  var v = document.getElementById(mep_x('me_flash_')); var stage = v;
				  if (v.style.width == '') v.style.width = bm0.style.width;
				  if (v.style.height == '') v.style.height = parseInt(bm0.style.height.replace('px','') - 30) + 'px';
				  if (v.style.top == '') v.style.top = '0px';
				  if (v.style.left == '') v.style.left = '0px';
			  } else {
				var stage = p; v = p
			    }
			    for (i=0;i<flashvars.length;i++) {
			      if (typeof flashvars[i].pauseMedia == 'function') {
				if (!flashvars[i].paused) {
				  flashvars[i].paused = true; try { flashvars[i].pauseMedia() } catch(e) {}
				}
			      }
			    }
		    }
		} else {
		    var z = gc('me-cannotplay')[0]
		    if (z && z.nextSibling.getAttribute('id') == 'player1' && bm0 && bm0.style.visibility == 'visible') {
		      var x = gclass('mejs-shim')[0];
		      if (x) {
		    //if (typeof x.pauseMedia == 'function') {
			if (mep_x('me_flash_')[0] == x) {
			  var stage = x; var v = document.getElementById('player1'); //try { v.pauseMedia() && v.paused = true } catch(e) {}
			} else {
				var stage = x; var v = x;//x.style.top = '0px';x.style.left = '0px';x.style.width = bm0.style.width;x.style.height = x.height + 'px' ;
				if (x.style.width == '') x.style.width = bm0.style.width;
				if (x.style.height == '') x.style.height = parseInt(bm0.style.height.replace('px','') - 30) + 'px';
				if (x.style.top == '') x.style.top = '0px';
				if (x.style.left == '') x.style.left = '0px';
			  }
		    //}
		        v.paused = true
		      }
		    }
		  }

	  }
      } else {
	  if (bm0 && bm0.style.visibility == 'hidden') {
	    var stage = p; v = p
	    if (p && typeof flashvars == 'object') {
	      for (i=0;i<flashvars.length;i++) {
	        if (typeof flashvars[i].pauseMedia == 'function') {
		  if (!flashvars[i].paused) {
		    flashvars[i].paused = true; try { flashvars[i].pauseMedia() } catch(e) {}
		  }
	        }
	      }
	      if (p == flashvars[0]) {
		  var stage = p; v = p; 
		  if (p && p.getAttribute('src') == 'about:blank') {
		    var x = document.getElementById('player-api').innerHTML;onDownload(x); p.paused = true;
		  }
	      }
	    }
	  } else {
		var stage = gc('html5-video-content')[1];
		if (stage == undefined) {
		  var stage = gc('html5-video-content')[0];
		}
		var v = gc('video-stream html5-main-video')[2];
		if (v == undefined) {
		  var v = gc('video-stream html5-main-video')[1];
		  if (v == undefined) {
		    var v = gc('video-stream html5-main-video')[0];
		  }
		};
		if (me_flash_ != undefined) {
		    var x = gclass('mejs-shim')[0];
		    if (x) {
			  if (document.getElementById(mep_x('me_flash_')) && bm0 && bm0.style.visibility == 'visible') {
				  var v = document.getElementById(mep_x('me_flash_')); var stage = v;
				  if (v.style.width == '') v.style.width = bm0.style.width;
				  if (v.style.height == '') v.style.height = parseInt(bm0.style.height.replace('px','') - 30) + 'px';
				  if (v.style.top == '') v.style.top = '0px';
				  if (v.style.left == '') v.style.left = '0px';
			  } else {
				var stage = p; v = p
			    }
			    for (i=0;i<flashvars.length;i++) {
			      if (typeof flashvars[i].pauseMedia == 'function') {
				if (!flashvars[i].paused) {
				  flashvars[i].paused = true; try { flashvars[i].pauseMedia() } catch(e) {}
				}
			      }
			    }
		    }
		}
	    }
	}

    } else { //no mep

	  if (flashvars != null && typeof flashvars == 'object') {
	    for (i=0;i<flashvars.length;i++) {
	      if (typeof flashvars[i].pauseMedia == 'function') {
		if (!flashvars[i].paused) {
		  flashvars[i].paused = true; try { flashvars[i].pauseMedia() } catch(e) {}
		}
	      }
	    }
	    if (p == flashvars[0]) {
	      if (bm0.style.visibility == 'hidden') {//alert('')
		var stage = p; v = p; 
		if (p && p.getAttribute('src') == 'about:blank') {
		  var x = document.getElementById('player-api').innerHTML;onDownload(x); p.paused = true;
		}
	      } else {
		  var x = gclass('mejs-shim')[0];
		  if (x) {
		    //if (typeof x.pauseMedia == 'function') {
			if (mep_x('me_flash_')[0] == x) {
			  var stage = x; var v = document.getElementById('player1'); //try { v.pauseMedia() && v.paused = true } catch(e) {}
			} else {
				var stage = x; var v = x;//x.style.top = '0px';x.style.left = '0px';x.style.width = bm0.style.width;x.style.height = x.height + 'px' ;
				if (x.style.width == '') x.style.width = bm0.style.width;
				if (x.style.height == '') x.style.height = parseInt(bm0.style.height.replace('px','') - 30) + 'px';
				if (x.style.top == '') x.style.top = '0px';
				if (x.style.left == '') x.style.left = '0px';
			  }
		    //}
		    v.paused = true
		  }
		}
	    } else { //flash object != movie_player
		if (bm0 && bm0.style.visibility == 'hidden') {
		  var stage = p; v = p; 
		} else {
		    var stage = document.getElementById('player1')
		    var v = flashvars[0];
		  }
	      }
	  }
      }
      //alert(stage.id + v.id)
      CtrlS(stage,v);
}


if (player() != null) {

  if (player().getAttribute('name') == 'me_flash') player().style.display = ''
  player().setAttribute('style','left: 0px; top: 0px')


      yt6.ytplayercmd = function(e) {
        var cmd = e.data;
        //var player = document.getElementById("movie_player");
        if (player() && typeof player()[cmd] == 'function') { player()[cmd]() }
        return false;
      }

  addEL(window, 'message', yt6.ytplayercmd, false);


var Sync = function(newState) {

	var bm0 = document.getElementById('bm0')
	var player2 = document.getElementById('player2')

	if (yt6 && bm0 && bm0.style.visibility == 'hidden') {
          if (typeof player().getPlayerState == 'function') {
	    if (typeof player().getAttribute('flashvars') != 'string') {
		var stage = gc('html5-video-content')[0];
		var v = gc('video-stream html5-main-video')[0];
	    } else {
		var stage = player();
		var v = player();  
	      }
	  }

	  function resync() {
	    if (bm0.style.visibility == 'hidden') {
	      try {
 		player2.currentTime = player().getCurrentTime();
		player2.playbackRate = player().getPlaybackRate();
		player().setPlaybackRate( player2.playbackRate );
	      } catch(e) {}
	    } else {
		try { player2.currentTime = document.getElementById('player1').currentTime } catch(e) {}
	      }
	  }

	  var AV = yt6.A_V
	  var A = yt6.A_
	  var V = yt6.V_

	  switch (newState) {
	      case 0: player2.pause(); resync(); break;
	      case 1: if ((typeof srcto != 'undefined') && (srcto == yt6.audio)) { player2.play(); break }; 
			if (v && v.src) {
			  if (typeof v.src.split('itag=')[1] != 'undefined') {
			    if  ( (typeof AV[v.src.split('itag=')[1].split('&')[0]] !== 'string')
				   && (typeof A[v.src.split('itag=')[1].split('&')[0]] !== 'string')
				   && ((typeof V[v.src.split('itag=')[1].split('&')[0]] === 'string')
				       || (v.src.indexOf('itag=278') > -1))
				  || ((typeof srcto != 'undefined') && (srcto == yt6.audio)) 
				) { player2.play(); }
			  }
			}; break;
              case 2: player2.pause(); resync(); break;
              case 3: player2.pause(); resync(); break;
              case 5: player2.pause(); resync(); break;
	  }

	}
      }

//      if (typeof player() !== 'undefined') {
          //    window.postMessage("pauseVideo", "*");

          //if (typeof player().getPlayerState == 'function') { window.postMessage("unMute", "*")
            //if (player().style.opacity != '1.1') { player().style.opacity = '1' }

          //}
//      }
}



function autoplay(start, ytx) {


var p = player()
var d = def_link();d = '%26true'
var fv = p.getAttribute('flashvars')
var pn = p.getAttribute('name')
var bm0 = document.getElementById('bm0')
var mep = document.getElementById(mep_x('mep_'))
var webgl = get_webgl()
    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      var z = z.firstChild;
    }

var autoplay = document.getElementById('watch-appbar-playlist')
if (autoplay != null) {
  var autoplay = gclass('yt-uix-button-icon-watch-appbar-autoplay')
  if (autoplay != undefined) {
    var autoplay = gc('playlist-nav-controls')[0] || gc('appbar-playlist-controls clearfix')[0]
    if (autoplay != undefined) {
      if (autoplay.getAttribute('class') == 'playlist-nav-controls') {
	//if (autoplay.parentNode.innerHTML.split('</button>')[0].indexOf('yt-uix-button-toggled') != -1) {
	var autoplay = autoplay.getElementsByTagName('button')[0];
	if (autoplay && autoplay.getAttribute('onclick') && autoplay.getAttribute('onclick').indexOf('yt6') == -1) {
	  var b = ';var yt6 = document.getElementById("snarls_player"); if (yt6) { if (this.getAttribute("class").indexOf("yt-uix-button-toggled") == -1) { yt6.autoplay = true } else { yt6.autoplay = false }; }; return false;'
	  autoplay.setAttribute('onclick', b);
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

	if (autoplay.getAttribute('disabled')) { autoplay.removeAttribute('disabled'); }
	//if (autoplay.parentNode.innerHTML.indexOf('disabled=""') != -1) {
	  //autoplay.parentNode.innerHTML = autoplay.parentNode.innerHTML.split('disabled=""').join('')
	//}

      }
    }
  }
  var autoplay2 = gclass('playlist-mix-icon yt-sprite');

} else {//2016 layout
    if (yt6.osw.getAttribute('id') != 'player') { yt6.autoplay = false };
    var autoplay = gclass('style-scope ytd-toggle-button-renderer x-scope paper-icon-button-0 style-grey-text')
    if (autoplay[0] && autoplay[0].parentNode.parentNode.parentNode.id == 'top-level-buttons') {//console.log('grey1')
      if (yt6.autoplay != false) {
	yt6.tmp = document.getElementById('top-level-buttons');
	if (yt6.tmp == autoplay[0].parentNode.parentNode.parentNode) {
	  yt6.tmp = yt6.tmp.getElementsByTagName('PAPER-ICON-BUTTON')
	  if (yt6.tmp[0] == autoplay[0]) {
	    if (yt6.tmp[0].getAttribute('aria-pressed') == 'false') yt6.autoplay = false

	    //$waitUntil(function(){if(yt6.tmp[0].getAttribute('class').indexOf(' style-default-active') != 0) return true},
	      //function(){
//$waitUntil(function(){if(yt6.tmp[0].getAttribute('class').indexOf(' style-grey-text') != 0) return true},
  //function(){
	FireEvent(yt6.tmp[0], 'click'); if (yt6.autoplay == false) FireEvent2(yt6.tmp[0], 'click');

  //},100,10000)
	      //},
	      //100,10000)


//yt6.tmp[0].setAttribute('class', yt6.tmp[0].getAttribute("class").split(" style-grey-text").join("") + " style-default-active")

	  }

        //console.log('grey0')
	}
      }									    
    }
    var autoplay = gclass('style-scope ytd-toggle-button-renderer x-scope paper-icon-button-0 style-default-active')
    if (autoplay[0] && autoplay[0].parentNode.parentNode.parentNode.id == 'top-level-buttons') {//autoplay[0].innerHTML.indexOf('alt="Loop playlist"') != -1) {
      yt6.autoplay = true; autoplay2 = {}; delete autoplay2[0]; //console.log('active')
    } else {//console.log('none')
	var autoplay2 = gclass('flex style-scope ytd-playlist-panel-renderer x-scope ytd-menu-renderer-0');
	if (!(autoplay2[0] && autoplay2[0].hasAttribute('hidden'))) { delete autoplay2[0]; if (!autoplay[0]) yt6.autoplay = false }
    }

  }

    if (yt6.ytg) {
      var autoplay2 = gc('style-scope ytg-playlist-panel-renderer')
      if (autoplay2[0]) yt6.autoplay = true
    }

//console.log(yt6.autoplay + ' '+start+ autoplay2[0])

function select_player(){
  if ((typeof p.getPlayerState == 'function') && (!yt6.x)) {
	bm0.style.visibility = 'hidden'
	if (typeof fv == 'string') {
	  p.style.width = ''; p.style.setProperty('width', document.getElementById('placeholder-player').firstChild.style.width, '')
	  p.style.height = ''; p.style.setProperty('height', document.getElementById('placeholder-player').firstChild.style.height, '')
	} else {
	    p.style.visibility = 'visible'
	    p.style.display = 'inline-block';
	    if (yt6.ytp)  yt6.ytp.style.display = '';
	  }
    } else {
	if (typeof fv == 'string') {
	  p.style.setProperty('width', '0', 'important')
	  p.style.setProperty('height', '0', 'important')
	} else {
	    p.style.visibility = 'hidden'
	    //p.style.display = 'none';
	    if (yt6.ytp)  yt6.ytp.style.display = 'none';
	  }
	bm0.style.visibility = 'visible';
  }
}

if ( ((typeof player().getAttribute('flashvars') == 'string') && (typeof player().getPlayerState != 'function')) || ((player().getAttribute('name') == 'me_flash') && (typeof player().playMedia != 'function')) ) { yt6.flash = false }
if ( ((typeof player().getAttribute('flashvars') == 'string') && (typeof player().getPlayerState == 'function')) || ((player().getAttribute('name') == 'me_flash') && (typeof player().playMedia == 'function')) ) { yt6.flash = true }


if (start != false){

  if (start) if ((yt6.autoplay || autoplay2[0]) && yt6.player1 && typeof yt6.player2.load == 'function') yt6.player1.load()
  if ( (navigator.userAgent.match(/Edge\/\d+/) != null || navigator.userAgent.match(/MSIE /) != null || navigator.userAgent.match(/Trident\//) != null) && yt6.player2 && typeof yt6.player2.load == 'function' ) yt6.player2.load()

  if ( (pn == 'me_flash') || (d.indexOf('%26false') > -1) && (!yt6.x) ){
    if ( ( ((!mep) || (typeof fv == 'string')) && (yt6.flash == true) ) || ( (typeof p.getPlayerState == 'function') && (typeof fv != 'string') && (webgl)  ) ){ //console.log('autoplay1');

	bm0.style.visibility = 'hidden'
	if (typeof fv == 'string') {
	  p.style.width = ''; p.style.setProperty('width', z.style.width, '')
	  p.style.height = ''; p.style.setProperty('height', z.style.height, '')
	} else {
	    p.style.visibility = 'visible'
	    p.style.display = 'inline-block';
	    if (yt6.ytp)  yt6.ytp.style.display = '';
	  }
	if ((yt6.autoplay || autoplay2[0]) && typeof p.playMedia == 'function' && start) { //console.log('autoplay2')
	  p.playMedia(); document.getElementById('movie_player').paused = false;
	}
    } else { //console.log('autoplay3' + typeof autoplay + typeof autoplay2[0] + start)
	if (typeof fv == 'string') {
	  p.style.setProperty('width', '0', 'important')
	  p.style.setProperty('height', '0', 'important')
	} else {
	    p.style.visibility = 'hidden'
	    //p.style.display = 'none';
	    if (yt6.ytp)  yt6.ytp.style.display = 'none';
	  }
	bm0.style.visibility = 'visible';
	if (yt6.autoplay || autoplay2[0] && start) player1.play()
      }
  } else {
	if ((d == undefined) || (d.indexOf('%26true') > -1) && (!yt6.x)) { //console.log('autoplay4')
	  if ( (typeof p.getPlayerState == 'function') && ((typeof fv == 'string') || (webgl) || (!yt6.x)) ) { //console.log('autoplay5' + typeof d + d + yt6.x)
	    bm0.style.visibility = 'hidden'
	    if (typeof fv == 'string') {
	      p.style.width = ''; p.style.setProperty('width', z.style.width, '')
	      p.style.height = ''; p.style.setProperty('height', z.style.height, '')
	    } else {
		p.style.visibility = 'visible'
		p.style.display = 'inline-block';
		if (yt6.ytp)  yt6.ytp.style.display = '';
	      }
	  } else { //console.log('autoplay6')
	      if (typeof fv == 'string') {
		p.style.setProperty('width', '0', 'important')
		p.style.setProperty('height', '0', 'important')
	      } else {
		  p.style.visibility = 'hidden'
		  //p.style.display = 'none';
		  if (yt6.ytp)  yt6.ytp.style.display = 'none';
		}
		bm0.style.visibility = 'visible';
		try { gc('video-stream html5-main-video')[0].pause() } catch(e) {};
		if ((yt6.autoplay || autoplay2[0]) && start) $waitUntil(function(){
		  if (yt6.sync_timer == true && yt6.player1 && typeof yt6.player1.play == 'function') return true },
		    function() { yt6.player1.play() },
		    100,1000)
	    }
	} else { //console.log('autoplay7')
	      if (typeof fv == 'string') {
	        if (yt6.osw.getAttribute('id') != 'player') {
		  p.style.setProperty('width', '0', 'important')
		  p.style.setProperty('height', '0', 'important')
	        }
	      } else {
		  p.style.visibility = 'hidden'
		  //p.style.display = 'none';
		  if (yt6.ytp) yt6.ytp.style.display = 'none';
		}

		  bm0.style.visibility = 'visible';
		  try { gc('video-stream html5-main-video')[0].pause() } catch(e) {};
		  if ((yt6.autoplay || autoplay2[0]) && start) {
		    $waitUntil(function(){ if (yt6.sync_timer == true || yt6.sync_timer == 0 && yt6.player1 && typeof yt6.player1.play == 'function') { return true } else {  }},
		      function() {
			if (typeof player().getPlayerState == 'function' && yt6.layout == 16 || (navigator.userAgent.match(/Edge\/\d+/) != null || navigator.userAgent.match(/MSIE /) != null || navigator.userAgent.match(/Trident\//) != null)) {
			$waitUntil(function(){ if (player().getPlayerState() == -1) return true },
			  function(){//console.log('1 ' + player().getPlayerState())
			    $waitUntil(function(){ if (player().getPlayerState() == 3 || player().getPlayerState() == 2 || ytplayer.config.args.video_id == video_id()[0]) return true },
			      function(){//console.log('2 ' + player().getPlayerState())
				$waitUntil(function(){ if (player().getPlayerState() == -1 || player().getPlayerState() == 2 || player().getPlayerState() == 3) return true },
				  function(){//console.log('3 ' + player().getPlayerState())
				    $waitUntil(function(){ if (yt6.player1.media.paused == true && document.getElementById('bm0') && document.getElementById('bm0').style.visibility == 'visible') return true },
				      function(){//console.log('4 ' + player().getPlayerState())
					yt6.player1.play()
					$waitUntil(function(){ if (yt6.player1.media.paused == true && document.getElementById('bm0') && document.getElementById('bm0').style.visibility == 'visible') return true },
					  function(){//console.log('5 ' + player().getPlayerState())
					    yt6.player1.play()
					  },50,2000)
				      },50,2000)
			          },50,2000)
			      },50,2000)
			  },50,2000)
			} else  if (document.getElementById('bm0') && document.getElementById('bm0').style.visibility == 'visible') {
				  yt6.player1.play();
				  //console.log('0 ' + player().getPlayerState())
				}
		      },100,6000)
		  }

	  }
      }

}

if ((typeof p.getPlayerState != 'function') && (typeof p.getAttribute('flashvars') == 'string') && (!start)) { //console.log('autoplay8')
	if (typeof fv == 'string') {
	  if (yt6.osw.getAttribute('id') != 'player') {
	    p.style.setProperty('width', '0', 'important')
	    p.style.setProperty('height', '0', 'important')
	  }
	} else {
	    p.style.visibility = 'hidden'
	    //p.style.display = 'none';
	    if (yt6.ytp)  yt6.ytp.style.display = 'none';
	  }
	bm0.style.visibility = 'visible';
	if (yt6.size == undefined || yt6.size == 'default') {
	  yt6.size = 'default'
	  resize_layers(yt6.w, yt6.h, true)
	}
	if (yt6.autoplay || autoplay2[0]) {/*$waitUntil(function(){
	  if (yt6.sync_timer == true && yt6.player1 && typeof yt6.player1.play == 'function') return true },
	    function(){ yt6.player1.play() },
	    100,1000)*/
	}
}

set_controls()


  if ((yt6.autoplay || autoplay2[0])
     && ytplayer.config && ytplayer.config.args
     && ytplayer.config.args.status != 'fail') {
    var autoplay = true
  } else var autoplay = false

  //console.log(autoplay)
  return autoplay
}


String.prototype.toHHMMSS = function () {
    var sec_num = parseFloat(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var seconds = seconds.toFixed(3);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}


function getReferenceObjects() {

  yt6.osw = document.getElementById('placeholder-player') || document.getElementById('player')
  yt6.mhp = document.getElementById('masthead-positioner') || document.getElementById('logo') || document.getElementById('home-button').parentNode;//gc('x-scope ytd-masthead-1')[0]
  yt6.wsb = document.getElementById('watch7-sidebar') || document.getElementById('related') || document.getElementById('sidebar')
  yt6.wsa = document.getElementById('watch7-sidebar-ads') || document.getElementById('player-ads')
  yt6.wna = document.getElementById('watch-header') //|| document.getElementById('alerts')
  if (yt6.wna && yt6.wna.getAttribute('id') == 'watch-header') yt6.wna = document.getElementById('watch7-notification-area')


  if (yt6.osw.getAttribute('id') == 'player') {

  yt6.layout = 16

    yt6.tmp = document.getElementById('top-level-buttons');
    if (yt6.tmp) {
      yt6.tmp = yt6.tmp.getElementsByTagName('PAPER-ICON-BUTTON')
      if (yt6.tmp[0]){
        var a = yt6.tmp[0].parentNode;// yt-endpoint-0
        var b = ';var yt6 = document.getElementById("snarls_player"); var a = this.firstElementChild; if (yt6) {; if (a.getAttribute("class").indexOf("style-default-active") != -1) { if (yt6.autoplay == false) { yt6.autoplay = true } } else { yt6.autoplay = false } };'
        if (a.tagName == 'A') a.setAttribute('onclick', b);
      }
    }

	var l = gc('style-scope ytd-watch')
	for (i=0;i<l.length;i++) {
	  if (l[i].getAttribute('id') == 'player') yt6.osw = l[i]
	  if (l[i].getAttribute('id') == 'container') yt6.con = l[i]
	  if (l[i].getAttribute('id') == 'main') yt6.man = l[i]
	  if (l[i].getAttribute('id') == 'alerts') yt6.wna = l[i]
	  if (l[i].getAttribute('id') == 'info' && !yt6.ytg) yt6.inf = l[i]
	  if (yt6.con && yt6.man && yt6.wna && (!yt6.ytg && yt6.inf)) { var l = null; break }
	}

  } else yt6.layout = 12

  //yt6.api = yt6.osw.parentNode

  if (yt6.wna == null) yt6.wna = document.getElementById('notification-layer')


  yt6.ytp = gc('ytp-chrome-controls')[0]
  yt6.tbg = document.getElementById('theater-background') || document.getElementById('theater-left')
  if (yt6.tbg == null) {
    var z = document.createElement('div')
    z.id = 'theater-left'
    yt6.osw.parentNode.insertBefore(z, yt6.osw)
    delete z
    yt6.tbg = document.getElementById('theater-left')
    yt6.tbg.setAttribute('class','player-height')
    yt6.tbg.style = 'display: inline-block'
  }

  yt6.age.check()

}



function wide_view() {
  var z = getElementsByAttribute(document,"div","class","watch-wide")[0]
  if ( typeof z != "undefined" ) return true;
  var z = getElementsByAttribute(document,"div","class","watch-stage-mode")[0];
  if ( typeof z != "undefined" ) return true;
  if (yt6.osw.getAttribute('id') == 'player') {
    var z = yt6.osw.parentNode.parentNode;//getElementsByAttribute(document,"ytd-app","class","ytd-app-1")[0];
    //if ( typeof z != "undefined" ) { return true } else return false;
    if (z != null && z.hasAttribute('theater')) { return true } else return false;
  }
}



yt6.mep_renew = function() {

    yt6.newvideo = false;

    var bp = function() { return gclass("mejs-overlay-play")[0] }



    var z = gc('mejs-sourcechooser-selector')[0]
    if (z) z.innerHTML = '<ul></ul>';


    var p = gc('mejs-layer mejs-poster')[0]


    var z = gc('mejs-duration')[0];
    if (z) {
      var x = yt6.media_duration
      if (x) {
	if (1 * x.indexOf(':') == -1) var x = x.toHHMMSS();
	if (x.substr(0,2) == '00') var x = x.substr(3,x.length - 3);
	z.innerHTML = x.split('.')[0];
      }
    }

    var z = document.getElementById('displaySpeed');
    if (z) z.style.color = 'white'


    var cc = function() { return document.getElementsByClassName('mejs-button mejs-captions-button')[0] }

    var me_flash_ = getElementsByAttribute(document,"embed","name",mep_x("me_flash_"))[0];


    function preload(){


	yt6.player1.setPoster(getPoster());

	if (bp()) bp().style.display = 'block'
	if (p) {
	  //p.setAttribute('id','mejs-poster')
	  p.style.display = 'block'
	}


	var media = document.getElementById('player1')


	if (typeof media.canPlayType == 'function') {

	  var audio_with_poster = function() {
	    if (p && (( 1 * unescape(media.src).indexOf('mime=audio') > -1) || (1*unescape(media.src).indexOf('mime/audio') > -1)) ) {
	      p.style.display = 'block'
	      if (bp()) bp().style.display = 'block';
	    };
	  }

	  removeEL(media, 'play', audio_with_poster, false);
	  addEL(media, 'play', audio_with_poster, false);


	  for (var i in media.children) {
	    var src = media.children[i]
	    if (src.nodeName === 'SOURCE' && (media.canPlayType(src.type) == 'probably' || media.canPlayType(src.type) == 'maybe')) {
		yt6.player1.addSourceButton(src.src, src.title, src.type, media.src == src.src, src.name);
	    } else {
		if (me_flash_ && src.nodeName === 'SOURCE' && media.children[i].type != 'video/webm' && media.children[i].title && 1 * media.children[i].title.indexOf('+') > -1) {
		  yt6.player1.addSourceButton(src.src, src.title, src.type, media.src == src.src, src.name);
	        }
	      }
	  }

	  /*if ((document.getElementById("player2")) && (typeof document.getElementById("player2").play == 'function')) {
	    var z = document.getElementById("player1").getElementsByTagName('source');
	    while (z.length > 0){
		document.getElementById("player1").removeChild(z[0]);
	    }
	  }*/

	  var controls = gc('mejs-controls')[0]

	  var layers = gc('mejs-layers')[0]

	  yt6.player1.cleartracks(yt6.player1, controls, layers, media);
	  yt6.player1.rebuildtracks(yt6.player1, controls, layers, media);

	  if (typeof yt6.player1.captionsButton != 'undefined') yt6.player1.loadNextTrack();

	}//media.canPlayType

/*
	var z = document.getElementsByClassName('mejs-time mejs-duration-container')[0]
	if (z && cc() && cc().parentNode.getAttribute('id') == 'video-hide') {
	  z.parentNode.insertBefore(cc(), z.nextSibling);
	}
*/

	var z = gc('me-cannotplay')[0];
	if (z) {
	  z.style.display = 'none';
	  z.nextSibling.style.display = 'inline-block';
	}



	var tc = gc('mejs-time-current')[0]
	if (tc) { tc.setAttribute('width', '0px'); tc.style.width = '0px' }

	if (!yt6.fullscreen) resize_layers( yt6.w, yt6.h );


	//var z = document.getElementById(mep_x('mep_') + '_sourcechooser_360p  VP8 + 128k Vorbiswebm') ||    document.getElementById(mep_x('mep_') + '_sourcechooser_360p  H.264 + 96k AACmp4');

	var find = true

	for(i=0;i<yt6.userpref.length;i++){

	  //Check the sources of available video formats to find the closest one in quality to the desired one
	  for(j=0;j<yt6.fmts_fallback.V[yt6.prefer_fmt].length;j++){
	    if (yt6.fmts_fallback.V[yt6.prefer_fmt][j] == parseInt(yt6.userpref[i]) || (yt6.fmts_fallback.V[yt6.prefer_fmt][j] == 278 && yt6.userpref[i] == 160)) {
		var index = j
		var fmt_pool = yt6.fmts_fallback.V[yt6.prefer_fmt]
		break;
	    }
	  }

	  if (!fmt_pool) {
	    var alt_pool = (yt6.prefer_fmt == 'webm') ? 'h264' : 'webm'
	    for(j=0;j<yt6.fmts_fallback.V[alt_pool].length;j++){
	      if (yt6.fmts_fallback.V[alt_pool][j] == parseInt(yt6.userpref[i]) || (yt6.fmts_fallback.V[yt6.prefer_fmt][j] == 278 && yt6.userpref[i] == 160)) {
		var index = (alt_pool == 'h264') ? j-1 : j-2
		var fmt_pool = yt6.fmts_fallback.V[yt6.prefer_fmt]
		break;
	      }
	    }
	  }

	  //Check 3D video formats (were these taken out of commission for good, too?)
	  if (!index) for(j=0;j<yt6.fmts_fallback.V3D[yt6.prefer_fmt].length;j++){
	    if (yt6.fmts_fallback.V3D[yt6.prefer_fmt][j] == parseInt(yt6.userpref[i])) {
		var index = j
		var fmt_pool = yt6.fmts_fallback.V3D[yt6.prefer_fmt]
		break;
	    }
	  }

	  if (!fmt_pool) {
	    var alt_pool = (yt6.prefer_fmt == 'webm') ? 'h264' : 'webm'
	    for(j=0;j<yt6.fmts_fallback.V3D[alt_pool].length;j++){
	      if (yt6.fmts_fallback.V3D[alt_pool][j] == parseInt(yt6.userpref[i])) {
		var index = (alt_pool == 'h264') ? j-1 : j-2
		var fmt_pool = yt6.fmts_fallback.V3D[yt6.prefer_fmt]
		break;
	      }
	    }
	  }

	  //Check audio formats
	  if (!index) for(j=0;j<yt6.fmts_fallback.A[yt6.prefer_fmt].length;j++){
	    if (yt6.fmts_fallback.A[yt6.prefer_fmt][j] == parseInt(yt6.userpref[i]) || (yt6.fmts_fallback.A[yt6.prefer_fmt][j] == 278 && yt6.userpref[i] == 160)) {
		var index = j
		var fmt_pool = yt6.fmts_fallback.A[yt6.prefer_fmt]
		break;
	    }
	  }

	  if (!fmt_pool) {
	    var alt_pool = (yt6.prefer_fmt == 'webm') ? 'h264' : 'webm'
	    for(j=0;j<yt6.fmts_fallback.A[alt_pool].length;j++){
	      if (yt6.fmts_fallback.A[alt_pool][j] == parseInt(yt6.userpref[i]) || (yt6.fmts_fallback.A[yt6.prefer_fmt][j] == 278 && yt6.userpref[i] == 160)) {
		var index = (alt_pool == 'h264') ? j-1 : j-2
		var fmt_pool = yt6.fmts_fallback.A[yt6.prefer_fmt]
		break;
	      }
	    }
	  }

	  //Check rarely used or deprecated formats (3GP/FLV)
	  if (!index) for(j=0;j<yt6.fmts_fallback.other.length;j++){
	    if (yt6.fmts_fallback.other[j] == parseInt(yt6.userpref[i])) {
		var index = j
		var fmt_pool = yt6.fmts_fallback.other
		break;
	    }
	  }

	  //We really should have found it by now...
	  for(j=index;j<fmt_pool.length;j++){
	    var itag = fmt_pool[j];
	    var z = document.getElementById(mep_x('mep_') + '_sourcechooser_' + itag)
	    if (find && z) {
	      if (autoplay()) {
		z.click();
		if (1 * itag != 1 * yt6.userpref[i]) no_default(itag);
		if (typeof yt6.player1.play == 'function' && document.getElementById('bm0').style.visibility == 'visible') yt6.player1.play();
	      } else {
		  z.setAttribute('checked','checked'); z.checked = 'true'
		  yt6.player1.setSrc(yt6.linx[itag]);
		  if (1 * itag != 1 * yt6.userpref[i]) no_default(itag);
		  var z = gc('mejs-time-loaded')[0]
		  if (z) z.style.width = '0px';
		}
	      var find = false
	      //console.log(yt6.userpref)
	    }
	  }//for j
	}//for i

	if (find == true) set_controls()

	yt6.newvideo = true

    }//preload


    if (me_flash_) {
      $waitUntil(
	function(){ if (bp()) return true },
	function(){ preload() },
	500, 60000)
    } else {
	preload()
      }

}//yt6.mep_renew


function onYouTubeIframeAPIReady() {
  if (yt6.embed && typeof yt6.embed.active == 'function') yt6.embed.active()
}



function fix_playlist() {

var playlist = document.getElementById('watch-appbar-playlist') || document.getElementById('playlist') || document.getElementsByTagName('ytg-playlist-panel-renderer')[0]
if (playlist && typeof playlist.id == 'string') {
if (playlist.id.indexOf('watch') == -1) {
  var playlist_scroller = (!yt6.ytg) ? gclass('playlist-items yt-scrollbar-dark style-scope ytd-playlist-panel-renderer x-scope iron-list-0')[0] : document.getElementsByTagName('ytg-scroll-pane')[1] ;//has-scroller
  if (typeof playlist_scroller != 'undefined') {
    var z = (!yt6.ytg) ? gc('style-scope ytd-playlist-panel-renderer x-scope ytd-playlist-panel-video-renderer-0') : gc('style-scope ytg-playlist-panel-renderer x-scope ytg-playlist-panel-video-renderer-0')
    if (!yt6.ytg) {
      yt6.pl_index = location.href.split('&index=')[1]
      yt6.pl_index = (yt6.pl_index) ? yt6.pl_index.split('&')[0] - 1 : null; //console.log(yt6.pl_index); console.log(yt6.scrollT); console.log(playlist_scroller[0].scrollTop)
    } else {
	yt6.pl_index = document.getElementById('count')
	yt6.pl_index = (yt6.pl_index && yt6.pl_index[yt6.txt]) ? yt6.pl_index[yt6.txt].split('/')[0] - 0 + 1 : null
      }
    if (yt6.pl_index == null && player() && typeof player().getPlaylistIndex == 'function') {
      yt6.pl_index = player().getPlaylistIndex();
      yt6.pl_i = JSON.parse(JSON.stringify(player().getPlaylistIndex())); //console.log(yt6.pl_i + ' '+player().getPlaylistIndex())
      if (yt6.pl_index == 0) playlist_scroller.scrollTop == (!yt6.ytg) ? 64 : 72.2;
      //console.log('noindex'+ yt6.pl_index + typeof yt6.pl_index)
    }
	if (typeof yt6.pl_index == 'number') {

	if (yt6.ytg) {
          var y = gc('style-scope ytg-playlist-panel-video-renderer')[0].firstElementChild.innerHTML.split('</span></ytg-formatted-string>')[0].split('<span class="style-scope ytg-formatted-string">')[1];
	  playlist_scroller.scrollTop = 72.2 * (yt6.pl_index - y);
	} else {

	  //playlist_scroller[0].scrollTop = 64 * yt6.pl_index;
	  $waitUntil(function() { if ((playlist_scroller.scrollTop != yt6.scrollT) || (playlist_scroller.scrollTop == 0)) { return true } },
	    function() {
	      yt6.scrollT = (!yt6.ytg) ? gc('style-scope ytd-playlist-panel-renderer x-scope ytd-playlist-panel-video-renderer-0') : gc('style-scope ytg-playlist-panel-renderer x-scope ytg-playlist-panel-video-renderer-0')
	      if (yt6.pl_index - 0 > 100) { //console.log('!!'+yt6.pl_index);
		if (playlist_scroller.scrollTop == 0) {
		  yt6.pl_index = 100
		  playlist_scroller.scrollTop = 64 * yt6.pl_index
		} else {
		    yt6.pl_index = 100
		    playlist_scroller.scrollTop = 64 * yt6.pl_index
		  }
	      }



 //console.log('Yay! ' + yt6.pl_index + ' ' + yt6.pl_index.toString().slice(-2) + ' ' + (yt6.pl_index - 0) % (yt6.pl_index.toString().replace(yt6.pl_index.toString().slice(-2), '00') - 0) + ' ' + playlist_scroller[0].scrollTop)

	      $waitUntil(function() {
		    var z = (!yt6.ytg) ? gc('style-scope ytd-playlist-panel-renderer x-scope ytd-playlist-panel-video-renderer-0') : gc('style-scope ytg-playlist-panel-renderer x-scope ytg-playlist-panel-video-renderer-0')
//for(k=0;k<z.length;k++){
		    var z = (!yt6.ytg) ? gc('style-scope ytd-playlist-panel-renderer x-scope ytd-playlist-panel-video-renderer-0') : gc('style-scope ytg-playlist-panel-renderer x-scope ytg-playlist-panel-video-renderer-0')
		    //console.log('begin ' + z.length + ' ' + playlist_scroller[0].scrollTop)
		    for(i=0;i<z.length;i++) {
		      if (z && z[i] && typeof z[i].getAttribute('style') == 'string' && z[i].getAttribute('style').indexOf('0px, 0px, 0px') != -1 && playlist_scroller.scrollTop == 0) {
			return true; break
		      } //else console.log(k + ' ' + z.length)
		    } //;playlist_scroller[0].scrollTop = playlist_scroller[0].scrollTop * k * z.length * 64
//}

		  },
		function() {
		    var z = (!yt6.ytg) ? gc('style-scope ytd-playlist-panel-renderer x-scope ytd-playlist-panel-video-renderer-0') : gc('style-scope ytg-playlist-panel-renderer x-scope ytg-playlist-panel-video-renderer-0')
		    //console.log('done ' + z.length + ' ' + playlist_scroller[0].scrollTop)
		    for(i=0;i<z.length;i++) {
		      if (z && z[i] && typeof z[i].getAttribute('style') == 'string' && z[i].getAttribute('style').indexOf('0px, 0px, 0px') != -1)  {
			if (z[i].getElementsByTagName('a')[0] && typeof z[i].getElementsByTagName('a')[0].href == 'string') {
			  var refIndex = 1 * z[i].getElementsByTagName('a')[0].href.split('&index=')[1].split('&')[0] - 1
			  var curIndex = location.href.split('&index=')[1]
			  if (curIndex) { curIndex = curIndex.split('&')[0] - 1 } else curIndex = player().getPlaylistIndex()
			  playlist_scroller.scrollTop = (curIndex - refIndex) * 64
			  //console.log(curIndex + ' ' + player().getPlaylistIndex() + ' '+ yt6.pl_i + typeof yt6.pl_i)
			  //console.log(playlist_scroller[0].scrollTop);
			  break
			}
		      }
		    }



		  //if (yt6.pl_index - 0 > 100) yt6.pl_index = 100
		  //playlist_scroller[0].scrollTop = 64 * yt6.pl_index
		},300,3000
	      )

	    },300,3000
	  )

	}//ytd

	} else {//console.log('?')
	    $waitUntil(function() { if ((typeof player().getPlaylistIndex == 'function')) return true },
	      function() {//console.log('pl2')
	        playlist_scroller.scrollTop = 64 * player().getPlaylistIndex(); //console.log('Nay!' + playlist_scroller[0].scrollTop)
	      },300,3000
	    )

	    //console.log('Nay!'); console.log(location.href); console.log(window.location.href)
	  }

    yt6.scrollT = JSON.parse(JSON.stringify(playlist_scroller.scrollTop));
  }
} else {
    var playlist_scroller = document.getElementById('playlist-autoscroll-list')
    yt6.scrollT = gclass('yt-uix-scroller-scroll-unit')[0]
    if (yt6.scrollT) {
      yt6.scrollT = yt6.scrollT.getAttribute('data-index')
      var z = gclass('currently-playing');//gc('yt-uix-scroller-scroll-unit  currently-playing')
      if (z && z[0]) {
        yt6.pl_index = z[0].getAttribute('data-index');
        playlist_scroller.scrollTop = 61 * (yt6.pl_index - yt6.scrollT);
      }
    }
  }
}

}//fix_playlist



function buildObject(ytplayer){


getReferenceObjects()

alt_yt_cleanup()

fix_playlist()

  yt6.cdns = ['//cdn.rawgit.com/','//rawcdn.githack.com/']
  yt6.cdn = shuffle(yt6.cdns)[0]




  //console.log('I '+typeof ytplayer.config.args.url_encoded_fmt_stream_map + typeof ytplayer.config.args.adaptive_fmts)

/*if (ytplayer.config && ytplayer.config.args && (typeof ytplayer.config.args.url_encoded_fmt_stream_map == 'undefined' || typeof ytplayer.config.args.adaptive_fmts == 'undefined')) {

  console.log('II '+ ytplayer.config.args.url_encoded_fmt_stream_map + ytplayer.config.args.adaptive_fmts)




;(function tck() {

    var z = gc('hidden')
    for(i=0;i<z.length;i++){
      if (z[i].getAttribute('id') == 'player') { var z = z[i]; break }
    }

    yt6.ytplayer = null; try { delete yt6.ytplayer } catch(e) { yt6['ytplayer'] = undefined }
    if (yt6.player1) { try { yt6.player1.setSrc(''); yt6.player1.load() } catch(e) { } }
    if (yt6.player2) { try { yt6.player2.setSrc(''); yt6.player2.load() } catch(e) { } }

    var z = yt6.body.innerHTML.split('var ytplayer = ytplayer || {};')[1]
    if (z) z = z.split(';(function()')[0]
    if (z) z = z.split('</script')[0]
    if (z) {
      var y = 'yt6.ytplayer = {}; yt6.' + z; //[yt6.txt].split('var ytplayer = ytplayer || {};')[1].split('</script>')[0];//console.log(y);
      if (y.indexOf('url_encoded_fmt_stream_map') != -1 || y.indexOf('adaptive_fmts') != -1) {
        //console.log('111'+ y);
	eval(y)
      } else {
	  if (window.location.href.indexOf('//www.youtube.com') != -1) {
	    var url = window.location.href
            xhr2.open('get', url , false);
            xhr2.send('');
	  } else {
	      //var proxiez = []; proxiez[0] = proxies[0]; proxiez[1] = proxies[1]; proxiez = shuffle(proxiez)
	      //for(i=0;i<proxiez.length-1;i++) {
		var url = 'https://cors-anywhere.herokuapp.com/https:' + '//www.youtube.com/watch?v=' + video_id()[0];//proxiez[i]
		xhr2.open('get', url , false);
		xhr2.send('');
		//if (xhr2.responseText) break;
	      //}
	    }
	  if (xhr2.responseText) {
	    xhr2.done = true;
            yt6.ytplayer = xhr2.responseText.toString(); console.log( url )//+ yt6.ytplayer.split('id="player"')[1]);
	    $waitUntil(function() { if (typeof yt6.ytplayer == 'string' && yt6.ytplayer.split('var ytplayer = ytplayer || {};')[1]) { return true } else { 		 }},
	    function() {
	      var y = 'yt6.ytplayer = {}; yt6.' + yt6.ytplayer.split('var ytplayer = ytplayer || {};')[1]
	      if (y) y = y.split('</script>')[0]
	      if (y) y = y.split(';(function()')[0]
	      if (y.indexOf('url_encoded_fmt_stream_map') != -1 || y.indexOf('adaptive_fmts') != -1) {
		//console.log('222'+ y);
		eval(y)
	      } else {
		  if (!yt6.ytg) {
		    yt6.ytplayer = {}; yt6.ytplayer.config = {}; yt6.ytplayer.config.args = {};
		  } else {
		      eval(y); ageless_verification();
		    }
	        }
	    },100,4000)
	  } else {}//ageless_verification()

        } //else
      //console.log(typeof yt6.ytplayer.config.args + typeof yt6.ytplayer.config.args.url_encoded_fmt_stream_map + typeof yt6.ytplayer.config.args.adaptive_fmts)

//-->
      if (yt6.ytplayer && yt6.ytplayer.config && (typeof yt6.ytplayer.config.args.url_encoded_fmt_stream_map == 'string') || typeof yt6.ytplayer.config.args.url_encoded_fmt_stream_map == 'string') ytplayer.config.args = yt6.ytplayer.config.args
//
    }

})()//tck


//} else {//if (!(yt6.ytg && window.ytplayer.config.args && ytplayer.config.args.video_id == video_id()[0]) && !xhr2.done) { console.log('2 '+ytplayer.config.args.video_id + video_id()[0])*/




if (window.ytplayer.config.args && yt6.layout == 16 || yt6.ytg) {// && ytplayer.config.args.video_id != video_id()[0]) {

  window.ytplayer.config.args.adaptive_fmts = undefined;
  window.ytplayer.config.args.url_encoded_fmt_stream_map = undefined;
  window.ytplayer.config.args.videostats_playback_base_url = undefined;
  window.ytplayer.config.args.dashmpd = undefined;
  window.ytplayer.config.args.title = undefined;
  window.ytplayer.config.args.video_id = undefined;
  ytplayer.config.args.ttsurl = ''; delete ytplayer.config.args.ttsurl

  ageless_verification()
}


    var z = gc('ytassetsjs-0')[0]
    if (z) z = gc('ytassetsjs-0')[0].getAttribute('name');

  if ( ytplayer.config && ytplayer.config.args && (typeof ytplayer.config.args.url_encoded_fmt_stream_map == 'undefined' || typeof ytplayer.config.args.adaptive_fmts == 'undefined') || (z && z.indexOf('//www.youtube.com/yts/jsbin/') != -1) ) {

    //var z = gc('ytassetsjs-0'); while (z && z[0]) z[0].parentNode.removeChild(z[0]);


    if (yt6.osw && yt6.osw.getAttribute('id') == 'player') {
	var z = document.getElementById('reason')
	if (!(z != null && z[yt6.txt] == yt6.change)) {
          xhr2.open('get', window.location, false);
	  xhr2.onreadystatechange = function() {
	    if (xhr2.readyState == 4 && xhr2.status == 200 && xhr2.responseText) {
	      yt6.ytplayer = xhr2.responseText.toString();
	      var y = 'yt6.ytplayer = {}; yt6.' + yt6.ytplayer.split('var ytplayer = ytplayer || {};')[1].split(';(function()')[0];
	      if (1 * y.indexOf('url_encoded_fmt_stream_map') > -1) eval(y)

	      if (yt6.ytplayer && yt6.ytplayer.config && yt6.ytplayer.config.args && typeof yt6.ytplayer.config.args.url_encoded_fmt_stream_map == 'string') {
		//console.log(typeof yt6.ytplayer.config.args + typeof yt6.ytplayer.config.args.url_encoded_fmt_stream_map + typeof yt6.ytplayer.config.args.adaptive_fmts)
		ytplayer.config.args = yt6.ytplayer.config.args
	      }
	    }
	  }
          xhr2.send('');
	  if (xhr2.responseText) xhr2.done = true
	} else { //console.log('g77');
	    ageless_verification();
	    if (!yt6.age.t) buildObject(window.ytplayer)
	  }



    } else {
	if (yt6.osw && yt6.osw.getAttribute('id') == 'placeholder-player' && window.ytplayer && window.ytplayer.config == null) {
	  yt6.osw.setAttribute('style','display: none')
	  return void 0;
	}
      }
  }//fmts

  //} //else



function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    alert("Unable to copy obj! Its type isn't supported.");
}
function rewrite_ytplayer(node_value, s, sig){
	  if ((typeof node_value == 'string') && (node_value.indexOf('&s=') > -1)) {
	    var s = '&s=' + s
	    var sig = '&signature=' + sig
	    for (y in yt6.ytplayer.config.args){
	      if ((typeof yt6.ytplayer.config.args[y] == 'string') && (yt6.ytplayer.config.args[y].indexOf(node_value) > -1)){
	        //var x = document.getElementById('early-body').innerHTML = document.getElementById('early-body').innerHTML + yt6.ytplayer.config.args[y] + '______________________'
	        yt6.ytplayer.config.args[y] = yt6.ytplayer.config.args[y].split(s).join(sig)
	        //document.getElementById('early-body').innerHTML = document.getElementById('early-body').innerHTML + yt6.ytplayer.config.args[y] + '______________________'
	      }
	    }
	  }
}
  //yt6.ytplayer = clone(ytplayer)




  var linx = [];
  var z = document.getElementById('masthead-positioner-height-offset')
  if (z != null) z.setAttribute('style', 'height:50px')
  var lang_def = document.getElementById('yt-lang-alert-container')
  if (lang_def != null) lang_def.setAttribute('style','display: none')
  var lang_def = null; var lang_asr = null;
  if (gc('clear')[0] == null) {
    var z = document.createElement('div')
    document.getElementById('player').appendChild(z)
    z.setAttribute('class','clear')
  }
  if (ytplayer.config != null) {
    gc('clear')[0].setAttribute('id','ytp-conf-loading')
  } 
/*
  xhr.open('get', window.location, false);
  xhr.send('');
  var source = xhr.responseText.toString();
  if (source.match(/TTS_URL.*\",/) != null) { var tts_url = source.match(/TTS_URL.*\",/)[0] } else var tts_url = ''
*/

//  if ((tts_url) && (tts_url.split('"')[2] == ',')) tts_url = tts_url.split('"')[1].split('\\/').join('/').split('\\u0026').join('&')

if (ytplayer.config.args) {

  var x = '';
  var tts_url = unescape(ytplayer.config.args.caption_tracks).split('u=');
  for(i=0;i<tts_url.length;i++){
    if ((typeof tts_url[i] != 'undefined') && (tts_url[i] != '')) {
        var z = tts_url[i].split('v=');
        if ((typeof z[2] != 'undefined') && (z[2] != null)) {
          tts_url[i] = z[0] + 'v=' + z[1]
        }
        var z = tts_url[i].split('lang=');
        if ((typeof z[1] != 'undefined') && (z[1] != null)) {
          tts_url[i] = z[0] + z[1].split('&')[1]
        }
	if (tts_url[i].indexOf('kind=') > -1) {
          var z = tts_url[i].split('kind=');
          if ((typeof z[1] != 'undefined') && (z[1] != null)) {
            tts_url[i] = z[0] + z[1].split('&')[1]
          };
	}

      var z = tts_url[i].split('https://') || tts_url[i].split('http://');
      if (typeof z[1] != 'undefined') {
	tts_url[i] = 'https://' + z[1].split('?')[0] + '?' + z[0] + z[1].split('?')[1]
	if (tts_url[i].substring(tts_url[i].length-1,tts_url[i].length) == ',') { tts_url[i] = tts_url[i].substring(0,tts_url[i].length-1) };
	if (x) tts_url[i] = tts_url[i] + '&' + x;
      } else {
	  var z = tts_url[i].split('v=');
	  if ((typeof z[1] != 'undefined') && (z[1] != null)) {
	    tts_url[i] = z[0]
	  }
	  var x = x.replace(tts_url[i],'') + tts_url[i]; tts_url[i] = ''
	}
      if (tts_url[i].substring(tts_url[i].length-1,tts_url[i].length) == ',') { tts_url[i] = tts_url[i].substring(0,tts_url[i].length-1) }; tts_url[i].split('&&').join(''); //console.log(tts_url[i]);

    }
  }

  if (tts_url != '') {
    ytplayer.config.args.ttsurl = tts_url
  } else delete ytplayer.config.args.ttsurl

} else {
    ytplayer.config.args = {};
    ytplayer.config.args.url_encoded_fmt_stream_map = '';
    ytplayer.config.args.adaptive_fmts = ''
  }


  var args = ytplayer.config.args;

  yt6.aspect_ratio = {}
  try { delete yt6.aspect_ratio } catch(e) { yt6['aspect_ratio'] = undefined }

  var html = [new Date().toLocaleString(),
    'Click to switch streams in both native and alternative (HTML5) player. Right click & "Save as" to download.<br>'
  ];//document.getElementById('early-body').innerHTML = ''
  var ft = [args.url_encoded_fmt_stream_map, args.adaptive_fmts]
  for (i in ft) {
    if (typeof ft[i] == 'string') {
      var z = ft ? ft[i].split(',') : '';
      for (j in z) {
	var qq = get_quality(z[j]); if (qq == null) continue;//alert('qq')
	var qs = qr(z[j]); if (qs == null) continue;//alert('qs')
	var href = unescape(qs.url).replace('http:', '').replace('https:', '');
	if (qs.signature){	  //yt6.flash = true;
	  href += '&signature=' + qs.signature;
	}
	if (qs.s){	  //yt6.flash = false;
	  href += '&signature=' + dc(qs.s);     //rewrite_ytplayer(z[j], qs.s, dc(qs.s))
	}
	if (href.indexOf("&ratebypass=yes") == -1) { href += '&ratebypass=yes'}
	if (qq.indexOf("+") != -1) {
	  href += '&2'; if (qs.dur) { var ads = qs.dur } else { var ads = qs.dur = z[j].split('dur%3D')[1]; if (ads) var ads = ads.split('%')[0] }
	  var ads = Math.round(ads)
	  if (!isNaN(ads) && (ads != 0) && typeof player().getDuration == 'function') {
	    yt6.media_duration = ads.toString().toHHMMSS().split('.')[0]
	    if (gc('ytp-time-duration')[0]){
	      var ads0 = gc('ytp-time-duration')[0][yt6.txt].split(':')
	      if (ads0[2]){
	      	var ads0 = ads0[0] * 3600 + ads0[1] * 60 + ads0[2] * 1
	      } else var ads0 = ads0[0] * 60 + ads0[1] * 1;
	      if (ads0 != player().getDuration()) var ads0 = player().getDuration()
	        //console.log(ads +' '+ typeof ads +' '+ ads0 +' '+ typeof ads0 + yt6.ad_duration)
	      if (Math.abs(ads - ads0) > 1) {
		//console.log('Preemptive video ad?');
		yt6.ad_duration = ads0
		try { gc('video-stream html5-main-video')[0].mute() } catch(e) {};
		var mute_button = gclass('ytp-mute-button')
		if (typeof mute_button[0] != 'undefined' && yt6.ad_duration != 0 && !(player().isMuted())) {
		    player().mute(); yt6.ad_muted = true; //mute_button[0].click();
		}
	      } else {
		  yt6.ad_duration = 0;
		  if (typeof player().isMuted == 'function' && player().isMuted() && yt6.ad_muted) {
		    try { gc('video-stream html5-main-video')[0].unMute() } catch(e) {};
		    player().unMute(); yt6.ad_muted = false
		  }
		}
	    }
	  }
	}
        if (qq.indexOf('DASH') != -1) {
	  var ar = ft.toString().split("size=")[1];
	  if (ar) var ar = ar.split("&")[0].split(",")[0];
	  if ( (!yt6.aspect_ratio && typeof ar == 'string') || (yt6.aspect_ratio && 1 * ar.replace('x','*') > 1 * yt6.aspect_ratio.replace('x','*')) ) {
	    yt6.aspect_ratio = ar
	    yt6.ar = ar
	  }
	}
        if (qs.itag !== '278') { linx[qs.itag] = href } else { linx[241] = href }
        if (qq.indexOf('360p WebM VP8') != -1) { var webm = 'https:' + href };
        if ( (qq.indexOf('WebM Vorbis') != -1) && (navigator.userAgent.match(/Edge\/\d+/) == null && navigator.userAgent.match(/MSIE /) == null && navigator.userAgent.match(/Trident\//) == null) ) { var audio = 'https:' + href };//.replace('&ratebypass=yes','') };
        //if (qq.indexOf('160k WebM Opus') != -1) { var audio = 'https:' + href };
	if ( (qq.indexOf('DASH AAC') != -1) && (audio == undefined || navigator.userAgent.match(/Edge\/\d+/) != null || navigator.userAgent.match(/MSIE /) != null || navigator.userAgent.match(/Trident\//) != null) ) { var audio = 'https:' + href };
        //var fn = (args.title + '-' + qq).toLowerCase()
        //         .replace(/[!"&'().:[\]|]/g,'')
        //         .replace(/ /g,'-')
        //         .replace(/-+/g,'-');
    
        var p1load = null;
   
        function HTMLPush(j){
    
          function setLink(href){

            var onclic = 'yt6.ct = document.getElementById("player1").currentTime;'+
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
'			me_flash[i].setAttribute("flashvars", me_flash_vars.split("&file=")[0] + "&file=" + encodeURIComponent("https:' + href + '"));'+
'			if (me_flash[i].tagName == "OBJECT") {'+
'			  var me_flash_src = me_flash[i].getAttribute("src");'+
'			  me_flash[i].setAttribute("src","");'+
'			  me_flash[i].setAttribute("src", me_flash_src);'+
'			  document.getElementById("player1").setAttribute("src","https:' + href + '");'+
'			};'+
'		    } else {'+
'			me_flash[i].setAttribute("src","https:' + href + '")'+
'		      };'+

'		    var me_flash_param = getElementsByAttribute(me_flash[i],"param","name","flashvars"); '+
'		    if (me_flash_param[0] != undefined) {'+
'		      me_flash_param[0].style.display = "none";'+
'		      me_flash_param[0].setAttribute("value", me_flash_param[0].getAttribute("value").split("&file=")[0] + "&amp;file=" + encodeURIComponent("https:' + href + '"));'+
'		      me_flash_param[0].style.display = "";'+
'		    };'+
'		  }'+
'		}; '+

'		if (me_flash_[0] != undefined) {'+
'		  if (typeof gclass("mejs-overlay-play")[0] == "object") gclass("mejs-overlay-play")[0].style.display = "none";'+
'		  if (typeof gclass("mejs-poster mejs-layer")[0] == "object") gclass("mejs-poster mejs-layer")[0].style.display = "none";'+
/*'			$waitUntil(function(){ if (me_flash_[0].parentNode.style.display == "none") return true }, function(){'+
'			  document.getElementById("bm0").style.display = "none";'+
'			  me_flash_[0].parentNode.style.display = "";'+
'			  document.getElementById("bm0").style.display = "";'+
'			  $waitUntil(function(){ if (typeof me_flash_[0].playMedia == "function") return true }, function(){'+
'			    if (typeof gclass("mejs-overlay-play")[0] == "object") gclass("mejs-overlay-play")[0].style.display = "block";'+
'			    if (typeof gclass("mejs-poster mejs-layer")[0] == "object") gclass("mejs-poster mejs-layer")[0].style.display = "block";'+
'			  });  '+
'			});  '+
'			me_flash_[0].parentNode.style.display = "none";'+*/

'		  if (1*navigator.userAgent.indexOf("Chrome") > -1) { yt6.player1.setSrc("' + href + '"); yt6.player1.load(); }'+
'		} else {'+
'		    if (me_flash[0] != undefined) {'+
'		      var bup = me_flash[0].cloneNode(true);'+
'		      me_flash[0].parentNode.insertBefore(bup, me_flash[0]);'+
'		      me_flash[0].parentNode.removeChild(me_flash[0]);'+
'		      set_controls();'+
'		    };'+
'		  };'+


'		if ((typeof player().getPlayerState == "function") && (player().getAttribute("flashvars") == null)) {'+
'		  var v = gc("video-stream html5-main-video")[0]'+
'		}; '+

'		var sauce = getElementsByAttribute(document,"input","name",mep_x("mep_") + "_sourcechooser");'+

'		if ((sauce != undefined) && (sauce.length != 0)) {'+
'		  for (i=0;i<sauce.length;i++) {'+
'		    if (sauce[i] != undefined) {'+ //check if the chosen format was put in the sourcechooser box list too
'		      if (("'+href+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2)+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2).replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:",""))) {'+ //check if both links point to the same URLs
'			var found = true;'+
'			sauce[i].removeAttribute("checked");'+
'			if (document.getElementById("bm0").style.visibility == "visible") {'+
'			  if (yt6.player2 && (!yt6.player1.media.paused || !yt6.player2.media.paused)) {'+
'			    var p1load = 1;'+
'			     yt6.player2.pause();'+
'			  } else {'+
'			      var p1load = null'+
'			    };'+
'			} else {'+
'			    if ((typeof player().getPlayerState == "function") && (player().getAttribute("flashvars") == null)) {'+
'			      if ( player().getPlayerState() == "1") {'+
'				var p1load = 1;'+
'				v.pause();'+
'			      } else {'+
'				  var p1load = null'+
'				}'+
'			    };'+
'			  };;;;'+

'			if (("https:'+href+'" == yt6.audio) && (navigator.userAgent.indexOf("Chrome") < -1)) {'+
'			  alert("Warning: Google Chrome will stop buffering if the AUDIO and VIDEO sources share the same location.\\nThis happens when you switch from a DASH/VP9 playback over to the designated audio track to play on its own.\\nIt\'s a bug to be fixed.")'+
'			};'+

'			sauce[i].setAttribute("checked","checked");'+
//'			document.getElementById("player1").setAttribute("src","https:' + href + '");'+
'			gc("video-stream html5-main-video")[0].setAttribute("src","https:' + href + '");'+
'			if (player() && typeof player().getPlaybackRate == "function" && yt6.player2) yt6.player2.playbackRate = player().getPlaybackRate();'+ 
'			if (yt6.player1 && typeof yt6.player1.load == "function") {'+
'			  yt6.player1.setSrc("https:'+ href + '"); yt6.player1.load()'+
'			} else {'+
'			    document.getElementById("player1").setAttribute("src","https:' + href + '");'+
'			  }'+
'			if (p1load == 1) {'+
'			  if ((typeof player().getPlayerState == "function") && (player().getAttribute("flashvars") == null)) {'+
'			    v.play();'+
'			    v.pause();'+
'			    v.play()'+
'			  } else {'+
'			      if (document.getElementById("bm0").style.visibility == "visible") {'+
'				yt6.player1.load();'+
'				yt6.player2.load();'+
'			      }'+
'			    }'+
'			}   '+
'			;return false'+
'		      };'+
'		    }'+
'		  }'+//for
'		};'+//empty sourcechooser box?

'		if (found == false) {'+
'		  window.open( "' + href + '", "_blank").focus()'+
'		}; '+
'		return false;';


	    var a = (typeof href.split("itag=")[1] != "undefined") ? 1 * href.split("itag=")[1].split("&")[0] : 1 * href.split("itag/")[1].split("/")[0]
	    if (typeof a == 'number') onclic = onclic.replace(';;;;',';'+
'			if ((yt6.player2 && typeof yt6.player2.load == "function")'+
'			    && (typeof yt6.A_[' + a + '] == "string")) {'+
'			        document.getElementById("player2").firstChild.setAttribute("src","https:' + href + '");'+
'				yt6.player2.setSrc("https:'+ href + '"); yt6.player2.load()'+
'			};');

            return onclic
          }//function setLink

          var onclic = setLink(href)
          if (typeof qq.split(" ")[1] != 'undefined') { var x = " - " + qq.split(" ")[0] + " " + qq.split(" ")[2]; if (typeof qq.split("+")[1] != 'undefined') { var x = x + ' +' + qq.split("+")[1] } else { if (typeof qq.split(" ")[3] != 'undefined') { var x = x + ' ' + qq.split(" ")[3] }} } else var x = '';
            if (navigator.oscpu) {
              if (navigator.oscpu.indexOf("Windows") > -1) {
                var fn = (args.title + x)
                    .replace(/"/g,'\'').replace(/[#"\?:\*]/g,'').replace(/[&\|\\\/]/g,'_').replace(/'/g,'\'').replace(/^\s+|\s+$/g,'').replace(/\.+$/g,'');  
              } else {
                  if (navigator.oscpu.indexOf("Linux") > -1) {
                    var fn = (args.title + x).replace(/\"/g,'_').replace(/&/g,'%26').replace(/\+/g,'%2B').replace(/[\/]/g,'_')
                  } else var fn = (args.title + x).replace(/&/g,'%26').replace(/\+/g,'%2B')
                }
            } else {
                var fn = (args.title + x).replace(/&/g,'%26').replace(/\+/g,'%2B')
              }

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
            var y = 25;
            if (qq.indexOf("fps") != -1) y = y + 1;
	    var z = 1 * ( y - 1 * qq.length - 0 - 3*Math.floor((1 * qq.length/18) - 0) ); //console.log('Array '+ z + typeof z)
            if (typeof z == 'number' && z > 0 && qq.indexOf('+') == -1) {
              size = Array(z).join(".") + size; //Bit shift by 0 which is equivalent to division by 1
            } else {
                var sizeq = ' title="' + size + '" aria-label="' + size +'" '; size = '';
              }
          } else { size = ''; }


          if (typeof qq.split(" ")[1] != 'undefined') { 
            if (typeof j != 'number') {
              html.push(
                '<a name="' + qs.itag +'" href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '"' + sizeq + ' download="' + fn + '.' + qq.split(" ")[1].toLowerCase() + '">' + qq + size + '</a>'
              );
            } else {
                html.splice(
                  j+1, 0, '<a name="' + qs.itag +'" href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '"' + sizeq + ' download="' + fn + '.' + qq.split(" ")[1].toLowerCase() + '">' + qq + size + '</a>'
                );
              }
    
            var fn = fn.split(" - " + qq.split(" ")[0] + " " + qq.split(" ")[2])[0]

          } else {
              if (typeof j != 'number'){
                html.push(
                  '<a name="' + qs.itag +'" href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '"' + sizeq + ' download="' + fn + '">' + qs.itag + size + '</a>'
                );
              } else {
                  html.splice(
                      j+1, 0, '<a name="' + qs.itag +'" href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '"' + sizeq + ' download="' + fn + '">' + qs.itag + size + '</a>'
                  );
                }
            }
	  return fn
        };//HTMLPush
        var fn = HTMLPush()
      }//for
      if (yt6.ad_duration != 0) {
	$waitUntil( function() { if (typeof player().isMuted == 'function' && player().isMuted() && yt6.ad_muted && !(Math.abs(qs.dur - player().getDuration()) > 1)) return true },
		    function() { try { gc('video-stream html5-main-video')[0].unMute() } catch(e) {};
		      player().unMute(); yt6.ad_duration = 0; yt6.ad_muted = false
		    },100,5000
        )
      }
    }//if
  }//for

var rpt = document.getElementById('ytassetsjs') ? document.getElementById('ytassetsjs').fcnm : null
if (rpt != null) {//ajax2

  var xhr = new XMLHttpRequest();
  var aac = unescape(args.dashmpd)
  var z = aac.split('/')
  var sig = null;
  var aac2 = null;
  for (i in z) {
    if (sig == 1) { var sig = dc(z[i]); var aac2 = aac.replace(z[i],sig).replace('/s/','/signature/');}
    if (sig == 2) { var aac2 = aac.replace('http:', '').replace('https:', ''); sig == null; }
    if (aac && aac2 != null) {
      try {
        xhr.open('get', aac2, false);
        xhr.send('')
        if (xhr.responseText.indexOf("Forbidden") != -1) {
          try {
            xhr.open('get', yt6.px + aac2, false);
            xhr.send('')
            if (xhr.responseText.indexOf("Forbidden") != -1) break
          } catch(e) {
              break
            }
        }
      } catch(e) {
	    if (e.toString().indexOf('"Access to restricted URI denied"  code: "1012"') > -1) {

	    } 

//alert(e + " 0")
           //break
        }
      if ((xhr.responseText.indexOf('Representation id="278"') > -1) && (typeof linx[241] == 'undefined')){
	for (j=0;html.length-1;j++) {
	  if (html[j].indexOf("itag=160") > -1) {
	    href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id","278")[0][yt6.txt].replace('http:', '').replace('https:', '');
	    var qq = get_quality(href)
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
	    href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id",b)[0][yt6.txt].replace('http:', '').replace('https:', '');
	    if (b == '172') { var audio = 'https:' + href }
	    //if (b == '141') { if (typeof audio == 'undefined') { var audio = 'https:' + href }}
	    var qq = get_quality(href)
	    if ((qq.indexOf('DASH AAC') != -1) && (audio == undefined)) { var audio = 'https:' + href };
	    HTMLPush()
	    linx[b] = href
	  }
	}
      };break
    }

    if (z[i] == "s") var sig = 1;
    if (z[i] == "signature") var sig = 2;
  }

//  if ((player()) && (typeof player().getPlayerState == 'function') && (typeof player().getAttribute('flashvars') != 'string')){
//    yt6.mediasource = gc('video-stream html5-main-video')[0].getAttribute('src')
//    html.push(
//     '<a href="#" onclick="javascript:gc(&quot;video-stream html5-main-video&quot;)[0].setAttribute(&quot;src&quot;, document.getElementById(&quot;snarls_player&quot;).mediasource ); return false">Original YouTube mediasource \(or preemptive video ad\)</a>'
//    )
//  }
	
}//ajax2



  var w_init = document.getElementById('player-api').offsetWidth + 'px'
  var h_init = document.getElementById('player-api').offsetHeight + 'px'

  if ((!yt6.aspect_ratio) || (yt6.aspect_ratio == null)) {
    var x = null;
    var h_orig = document.getElementsByTagName('head')[0].innerHTML.match(/og:video:height([^(]+)/);
    if ((typeof h_orig != 'undefined') && (h_orig != null)) {
      var x = ["property","og:video:"]
    } else {
        var h_orig = yt6.body.innerHTML.match(/meta itemprop="height"([^(]+)/);
        if ((typeof h_orig != 'undefined') && (h_orig != null)) {
          var x = ["itemprop",""]
        }
      }
    if (x != null) {
      var w_orig = getElementsByAttribute(document,"meta",x[0],x[1] + "width")[0].content + "px";
      var h_orig = getElementsByAttribute(document,"meta",x[0],x[1] + "height")[0].content + "px";
      yt6.aspect_ratio = (w_orig.replace('px','')/h_orig.replace('px',''))
      yt6.ar = (w_orig.replace('px','')/h_orig.replace('px',''))
    } else { 
        w_orig = '640px'; h_orig = '360px'; yt6.aspect_ratio = 16/9; yt6.ar = 16/9
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
    var w = document.getElementById('player-api').style.width;
    if (w.replace('px','') < 640) {
	document.getElementById('player-api').style.width = '640px'
    }

    var h = document.getElementById('player-api').style.height; 
    if (h.replace('px','') < 390) {
	document.getElementById('player-api').style.height = '360px';
	//yt6.wsb.style.marginTop = 'height:-370px'
    }

    var h = (w.replace('px','') / yt6.aspect_ratio >>0)
    var h = (parseInt(parseInt(h) + parseInt(30))) + 'px'
  } else {
      var w = fix_Width(); var h = fix_Height();
    }

  if (w.replace('px','') < 640) {var w = '640px'}
  if (h.replace('px','') < 390) {var h = '390px'}


  yt6.w_init = w_init
  yt6.h_init = h_init
  yt6.w_orig = w_orig
  yt6.h_orig = h_orig
  yt6.w = w
  yt6.h = h

  yt6.fn = fn;
  yt6.linx = []
  for(i=0;i<100;i++){ if (yt6.linx[i]) delete yt6.linx[i] }
  yt6.linx = linx
  yt6.html = html
  yt6.href = href
  yt6.audio = audio
  yt6.args = args


}//buildObject



function redo_dl_button(args,html,href) {


if (document.getElementById("bm1") != null) document.getElementById("bm1").parentNode.removeChild(document.getElementById("bm1"))

  var dw = document.createElement('span');
  dw.id = 'bm1';
  var z = gc('yt-masthead-logo-container ')
  if (z[0]) {
    var z = z[0]
  } else {
      var z = document.getElementById('logo');
      if (z == null) {
	var z = document.getElementById('home-button');
	if (z) {
	  z = z.parentNode
	} else throw 'YouTube layout mismatch';
      }
    }
  z.insertBefore(dw,z.lastChild);
  document.getElementById('bm1').setAttribute('style','display:inline-block; position:relative; max-height:30px; z-index: 2101;');
  var z = document.getElementById('bm1').style
  z.display = 'inline-block'; z.position = 'relative'; z.width = '52px'; z.maxHeight = '30px';

  dw = document.createElement('span');
  dw.id = 'bm2';
  document.getElementById('bm1').appendChild(dw);
  document.getElementById('bm2').setAttribute('style','display:block; visibility:hidden; position:fixed; left:0px; top:0px; width:100%; z-index:2000000000;')
  var z = document.getElementById('bm2').style
  z.display = 'block'; z.visibility = 'hidden'; z.position = 'fixed'; z.left = '0px'; z.top = '0px'; z.width = '100%'; z.zIndex = '2000000000';


  function expire_date(){
    var qs = qr(href);if (qs == null) return ['','','91']
    var ip = qs.ip
    var expire = (qs.expire) ? new Date(parseInt(qs.expire.toString().substring(0,10) * 1000)).toLocaleString() : ''
    var bh = (expire.length < 33) ? 91 : 104
    return [ip,expire,bh]
  }

  var title = document.getElementById('eow-title') || gc('title style-scope ytd-video-primary-info-renderer')[0]
  var title = (title) ? title[yt6.txt] : document.title.substring(0, document.title.length)
  if (title.indexOf(' - YouTube') == title.length - 10) title = title.substring(0, title.length - 10)
  if (title.indexOf(' - YouTube Gaming') == title.length - 17) title = title.substring(0, title.length - 17)
  if (ytplayer.config.args && ytplayer.config.args.title) var title = ytplayer.config.args.title

  yt6.select_fmt = function(fmt) {
    if (!fmt) var fmt = (yt6.prefer_fmt) ? yt6.prefer_fmt : 'all'
    var b = gclass('preferred-format')
    for(i=0;i<b.length;i++){b[i].removeAttribute('checked'); b[i].checked = ''}
    var b = gc('preferred-format ' + fmt)[0];
    b.setAttribute('checked','checked'); b.checked = 'true'
    yt6.prefer_fmt = fmt
  }


  html.splice(1,0,'Direct links to YouTube media<br>for IP address: '+ expire_date()[0])
  html.push(
   '<br><b>' + title + '</b>' +
   '<br>Links will expire on <br>' + expire_date()[1] +
   '<br><br><div id="bm7" style="inline-block">Preferred format:<br>'+
   '<input type="radio" class="preferred-format all" onclick="yt6.select_fmt(\'all\')">Any</input>'+
   '<input type="radio" class="preferred-format webm" onclick="yt6.select_fmt(\'webm\')">WebM</input>'+
   '<input type="radio" class="preferred-format h264" onclick="yt6.select_fmt(\'h264\')">DASH/MP4</input>'+
   '</div>'+
   '<br>Sometimes YouTube has certain, typically V+A formats disabled, while the rest may work. When decryption key update fails, no valid media video links occur. To fix it, remove and reload the script manually.'
  )
  document.getElementById('bm2').innerHTML = html.join('<br>')

  yt6.select_fmt()

  var dw = document.createElement('div')
  dw.id = 'bm6'
  dw[yt6.txt] = 'Suppress cards over videos'
  document.getElementById('bm2').appendChild(dw);
  dw.setAttribute('style','inline-block')

  var dw = document.createElement('input')
  dw.id = 'no_cards'
  dw.type = 'checkbox'
  document.getElementById('bm6').appendChild(dw);

  var onclic = "if (this.checked) { yt6.no_cards = true } else { yt6.no_cards = false }; no_cards()"
  dw.setAttribute('onclick', onclic)
  dw.setAttribute('style','inline-block')

  if (yt6.no_cards) {
    dw.setAttribute('checked','checked');
  } else {
      dw.removeAttribute('checked');
    }


  var dw = document.createElement('button');
  dw.id = "bm5";
  dw.innerHTML = protocol() + '//www.youtube.com/html5';
  document.getElementById('bm2').appendChild(dw);
  document.getElementById('bm5').setAttribute('style','text-align: left'); document.getElementById('bm5').style.textAlign = 'left'


  document.getElementById('bm5').style.color = "#EE0000";
  document.getElementById('bm5').setAttribute('onclick', 'window.open( "' + protocol() + '//www.youtube.com/html5", "_blank").focus() ')


  if (!document.getElementById('bm3')) {
    var dw = document.createElement('span');
    dw.id = 'bm3';
    if (document.getElementById('body-container') != null) {
      document.getElementById('body-container').appendChild(dw)
    } else {
	if (document.getElementById('top') != null) {
	  document.getElementById('top').insertBefore(dw, yt6.osw)
	} else {
	    document.getElementById('content-layer').insertBefore(dw, yt6.osw)
	  }
      }
  }

  var bm3 = document.getElementById('bm3')

  bm3.height = parseInt(document.getElementById('bm2').offsetHeight) + expire_date()[2];  
  bm3.setAttribute('style','cursor: default; font-size: 13px; color:black; display:block; visibility:hidden; position:fixed; left:0%; top:48px; max-width:224px; height:' + bm3.height + 'px; margin-top:0px; margin-right:0px; background:#FFFFFF; opacity:1; padding:2px 2px 2px 2px; border:1px solid #DDD; z-index: 2147483648; overflow-y:hidden');
  var z = bm3.style
  z.cursor = 'default'; z.fontSize = '13px'; z.color = 'black'; z.display = 'block'; z.visibility = 'hidden'; z.position = 'fixed'; z.left = '0%'; z.top = '48px'; z.maxWidth = '224px'; z.height = bm3.height + 'px'; z.marginTop = '0px'; z.marginRight = '0px'; z.background = '#FFFFFF'; z.opacity = '1'; z.padding = '2px 2px 2px 2px'; z.border = '1px solid #DDD'; z.zIndex = '2147483648'; z.overflowY = 'hidden';

  bm3.setAttribute('class','yt-uix-button-menu ')
  bm3.innerHTML = document.getElementById('bm2').innerHTML;
  document.getElementById('bm2').innerHTML = '';
//var csspopupheight = parseInt(bm3.offsetHeight) + 10 ;bm3.setAttribute('style',bm3.getAttribute('style') + ';height:' + csspopupheight + 'px;' + 'overflow-y: scroll')

  var dw = document.createElement('button');
  dw.id = 'bm4';
  dw.innerHTML = '<img src="//i1.ytimg.com/i/gsZadWjuuN2dEhI0mZfVfQ/mq1.jpg?v=531525b4" style="height:27px; font"></img><br><div style="margin-left: -2px">Download</div>';

  var onclic = function(){

    var bm3 = document.getElementById('bm3')
    if (bm3) bm3.style.top = yt6.mhp.offsetHeight - 2 + "px" 

    if  ((window.ytplayer != null) &&
	 (window.ytplayer.config != null) &&
	 (document.getElementById("bm0") != null) &&
	 ((yt6.wna == null) ||
	  (document.getElementById('remove-sp') == null) ||
	  (document.getElementById('controls-sp') == null))
	)
      { //}

    set_controls();

    } else {

    if (bm3.style.visibility === "visible") { 
      //document.getElementById("bm2").style.visibility = "hidden";
      bm3.style.visibility = "hidden";
      bm3.style.height = '0px';
    } else { 
        //document.getElementById("bm2").style.visibility = "visible";
        bm3.style.visibility = "visible";
        if ((typeof player.getPlayerState == 'function') && (flashvars != 'object') && (player.style.opacity == '1')) {
          bm3.style.opacity = '1'
        } else {
            bm3.style.opacity = '0.9'
          }

	
        var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight);
        var csspopupheight = bm3.height = Math.min(windowheight, bm3.scrollHeight);
        if (csspopupheight > windowheight - expire_date()[2]) { 
          bm3.style.height = windowheight - expire_date()[2] + 'px';bm3.style.overflowY = 'scroll'
        } else { 
            bm3.style.height = csspopupheight + 'px';bm3.style.overflowY = 'hidden'
          }

	bm3.style.height = '0px'
        var csspopupheight = bm3.height = Math.min(windowheight, bm3.scrollHeight);
        if (csspopupheight > windowheight - expire_date()[2]) { 
          bm3.style.height = windowheight - expire_date()[2] + 'px';bm3.style.overflowY = 'scroll'
        } else { 
            bm3.style.height = csspopupheight + 'px';bm3.style.overflowY = 'hidden' 
          }
      }

    }//else

  }//onclic

  document.getElementById('bm1').appendChild(dw);
  document.getElementById('bm4').setAttribute('style','font-size:10px; padding:0px 3px; width: 52px; max-height:30px; vertical-align: middle; display:none;');
  document.getElementById('bm4').setAttribute('class','snarl-button yt-uix-button-text');
  document.getElementById('bm4').onclick = onclic;


  if (unescape(args.ttsurl) != 'undefined') {
    bm3.innerHTML = bm3.innerHTML + '<br><br>SubRip/WebVTT subtitles:<br>(On Bookmarklet-URL line, edit the value to "add_subs")<br>'
  }

bm3.style.top = yt6.mhp.offsetHeight - 2 + "px"
bm3.style.height = "0px"
}//redo



//oldbrowser error hunt
//document.getElementById('bm4').style.display = 'block';document.getElementById('bm3').style.visibility = 'visible';




//loadCSS( protocol() + "//cdn.rawgit.com/snarly/yt6/250f5383074bc9af3ecd2006ee457b35cc8665ea/mediaelementplayer.css", function(){});




    


/*
if (!document.getElementById('placeholder-player')){
  var js = document.createElement('dev')
  js.id = 'placeholder-player'
  document.getElementById('content').insertBefore(js, document.getElementById('content').firstChild)
  js.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
}
*/

  buildObject(window.ytplayer)
  redo_dl_button(  yt6.args,  yt6.html,  yt6.href)

var jq0 = function()
 {
    var js = document.createElement('style');
    js.type = 'text/css';
    js.media = 'screen';
    var code = 

".sitewide-consent-visible .yt-consent-banner {"+
"display:none;"+
"}"+

".yt-dialog-bg, .ytd-consent-bump-lightbox-0, .iron-overlay-backdrop-0 {"+
"display:none;"+
"}"+

".sitewide-consent-visible.appbar-hidden #masthead-positioner-height-offset {"+
"height:50px;"+
"}"+

".html5-video-container {"+
"background:#000 no-repeat scroll center center;"+
"z-index:10"+
"}"+

".html5-main-video, .html5-video-content {"+
"position:absolute;"+
"width:100%;"+
"height:360px;"+
"outline:0"+
"}"+

".ytp-keyboard-focus, .annotation.annotation-type-custom {"+
"display:none;"+
"}"+

".caption-window.ytp-caption-window-bottom {"+
"margin-bottom:49px;"+
"}"+

".ytp-ad-overlay-open .caption-window.ytp-caption-window-bottom {"+
"margin-bottom:49px;"+
"}"+

".ytg-notification-footer-0 .content.ytg-notification-footer {"+
"display:none;"+
"}"+

".ytd-app-1 #page-manager.ytd-app {"+
"margin-top:56px;"+
"}"+

".ytd-app-2 #page-manager.ytd-app {"+
"margin-top:56px;"+
"}"+

".snarl-button {"+
"	display:inline-block;"+
"	max-height:30px;"+
"	border:solid 1px transparent;"+
"	padding:0 10px;"+
"	outline:0;"+
"	font-weight:bold;"+
"	font-size:11px;"+
"	text-decoration:none;"+
"	white-space:nowrap;"+
"	word-wrap:normal;"+
"	line-height:normal;"+
"	vertical-align:middle;"+
"	cursor:pointer;"+
"	*overflow:visible;"+
"	border-radius:2px;"+
"	box-shadow:0 1px 0 rgba(0,0,0,0.05)"+
"}"+

".snarl-button:hover {"+
"	text-decoration:none"+
"}"+

".snarl-button:focus, .snarl-button:focus:hover, .snarl-button-focused, .snarl-button-focused:hover {"+
"	box-shadow:0 0 0 2px rgba(27,127,204,0.4)"+
"}"+
".snarl-button::-moz-focus-inner {"+
"	border:0;"+
"	padding:0"+
"}"+

".snarl-button[disabled], .snarl-button[disabled]:hover, .snarl-button[disabled]:active, .snarl-button[disabled]:focus {"+
"	opacity:.5;"+
"	filter:alpha(opacity=50);"+
"	cursor:auto;"+
"	box-shadow:none"+
"}"+

".snarl-button img, .snarl-button-icon-wrapper+.snarl-button-content {"+
"	vertical-align:middle"+
"}"+

".snarl-button .snarl-button-icon, .snarl-button .snarl-button-arrow {"+
"	display:inline-block;"+
"	vertical-align:middle"+
"}"+

"#change button {"+
"width:18px;"+
"text-align:center"+
"}"+

"a,abbr,acronym,address,applet,b,big,blockquote {"+
"	margin:0;"+
"	padding:0;"+
"	border:0;"+
"	font-size:100%;"+
"	background:transparent"+
"}"+
"button {"+
"	margin:0;"+
"	padding:0;"+
"	border:0;"+
"	background:transparent"+
"}"+
"a:focus {"+
"	outline:1px dotted #666;"+
"	border:0"+
"}"+
"button:focus {"+
"	outline:1px solid #767676"+
"}"+
".no-focus-outline :focus {"+
"    outline: 0;"+
"}"+
"a:hover, a:focus {"+
"    text-decoration: underline;"+
"}"+
"a {"+
"    color: #167ac6;"+
"    cursor: pointer;"+
"    text-decoration: none;"+
"}"+
".yt-uix-button::-moz-focus-inner {"+
"	border:0;"+
"	padding:0"+
"}"+
".yt-uix-button[disabled],.yt-uix-button[disabled]:hover,.yt-uix-button[disabled]:active,.yt-uix-button[disabled]:focus {"+
"	opacity:.5;"+
"	filter:alpha(opacity=50);"+
"	cursor:auto;"+
"	box-shadow:none"+
"}"+
".yt-uix-button img,.yt-uix-button-has-icon.no-icon-markup .yt-uix-button-content,.yt-uix-button-icon-wrapper+.yt-uix-button-content {"+
"	vertical-align:middle"+
"}"+
".yt-uix-button .yt-uix-button-icon,.yt-uix-button .yt-uix-button-arrow {"+
"	display:inline-block;"+
"	vertical-align:middle"+
"}"+
".yt-uix-button-icon-wrapper {"+
"	display:inline-block;"+
"	font-size:0;"+
"	vertical-align:middle"+
"}"+
".yt-uix-button-has-icon:before {"+
"	content:'';"+
"	display:inline-block;"+
"	vertical-align:middle"+
"}"+
"a.yt-uix-button:after {"+
"	content:'';"+
"	display:inline-block;"+
"	vertical-align:middle;"+
"	height:100%"+
"}"+
".yt-uix-button-icon-wrapper,.yt-uix-button-has-icon.no-icon-markup:before {"+
"	margin-right:6px"+
"}"+
".yt-uix-button-empty .yt-uix-button-icon-wrapper,.yt-uix-button-empty.yt-uix-button-has-icon.no-icon-markup:before {"+
"	margin-right:0"+
"}"+
".yt-uix-button-empty .yt-uix-button-icon-wrapper {"+
"	max-height:none;"+
"	max-width:none"+
"}"+
".yt-uix-button.hid {"+
"	display:none"+
"}"+
".yt-uix-button-short,.yt-uix-button-size-small {"+
"	height:20px;"+
"	color:#666"+
"}"+
".yt-uix-button-size-large {"+
"	height:32px;"+
"	padding:0 15px;"+
"	font-size:13px"+
"}"+
".yt-uix-button-size-xlarge {"+
"	height:36px;"+
"	padding:0 20px;"+
"	font-size:15px"+
"}"+
".yt-uix-button-default:hover,.yt-uix-button-text:hover {"+
"	border-color:#c6c6c6;"+
"	background:#f0f0f0;"+
"	box-shadow:0 1px 0 rgba(0,0,0,0.10)"+
"}"+
".yt-uix-button-default:active,.yt-uix-button-default.yt-uix-button-toggled,.yt-uix-button-default.yt-uix-button-active,.yt-uix-button-default.yt-uix-button-active:focus,.yt-uix-button-text:active {"+
"	border-color:#c6c6c6;"+
"	background:#e9e9e9;"+
"	box-shadow:inset 0 1px 0 #ddd"+
"}"+
".yt-uix-button-default.yt-uix-button-toggled:hover {"+
"	border-color:#b9b9b9;"+
"	background:#e5e5e5;"+
"	box-shadow:inset 0 1px 0 #ddd"+
"}"+
".yt-uix-button-default,.yt-uix-button-default[disabled],.yt-uix-button-default[disabled]:hover,.yt-uix-button-default[disabled]:active,.yt-uix-button-default[disabled]:focus {"+
"	border-color:#d3d3d3;"+
"	background:#f8f8f8;"+
"	color:#333"+
"}"+
".yt-uix-button-default:before,.yt-uix-button-default .yt-uix-button-icon {"+
"	opacity:.5;"+
"	filter:alpha(opacity=50)"+
"}"+
".yt-uix-button-default:hover .yt-uix-button-icon,.yt-uix-button-default:hover:before {"+
"	opacity:.6;"+
"	filter:alpha(opacity=60)"+
"}"+
".yt-uix-button-default:active .yt-uix-button-icon,.yt-uix-button-default:active:before,.yt-uix-button-default.yt-uix-button-active .yt-uix-button-icon,.yt-uix-button-default.yt-uix-button-active:before,.yt-uix-button-default.yt-uix-button-toggled .yt-uix-button-icon,.yt-uix-button-default.yt-uix-button-toggled:before {"+
"	opacity:.8;"+
"	filter:alpha(opacity=80)"+
"}"+
".yt-uix-button-default:active:hover .yt-uix-button-icon,.yt-uix-button-default:active:hover:before,.yt-uix-button-default.yt-uix-button-active:hover .yt-uix-button-icon,.yt-uix-button-default.yt-uix-button-active:hover:before,.yt-uix-button-default.yt-uix-button-toggled:hover .yt-uix-button-icon,.yt-uix-button-default.yt-uix-button-toggled:hover:before {"+
"	opacity:1;"+
"	filter:alpha(opacity=100)"+
"}"+
".yt-uix-button-dark .yt-uix-button-icon,.yt-uix-button-dark:before {"+
"	opacity:.4;"+
"	filter:alpha(opacity=40)"+
"}"+
".yt-uix-button-dark:hover .yt-uix-button-icon,.yt-uix-button-dark:hover:before {"+
"	opacity:.55;"+
"	filter:alpha(opacity=55)"+
"}"+
".yt-uix-button-dark:active .yt-uix-button-icon,.yt-uix-button-dark:active:before,.yt-uix-button-dark.yt-uix-button-active .yt-uix-button-icon,.yt-uix-button-dark.yt-uix-button-active:before,.yt-uix-button-dark.yt-uix-button-toggled .yt-uix-button-icon,.yt-uix-button-dark.yt-uix-button-toggled:before {"+
"	opacity:.85;"+
"	filter:alpha(opacity=85)"+
"}"+
".yt-uix-button-dark:active:hover .yt-uix-button-icon,.yt-uix-button-dark:active:hover:before,.yt-uix-button-dark.yt-uix-button-active:hover .yt-uix-button-icon,.yt-uix-button-dark.yt-uix-button-active:hover:before,.yt-uix-button-dark.yt-uix-button-toggled:hover .yt-uix-button-icon .yt-uix-button-dark.yt-uix-button-toggled:hover:before {"+
"	opacity:1;"+
"	filter:alpha(opacity=100)"+
"}"+
".yt-uix-button-opacity,.yt-uix-button-opacity:hover,.yt-uix-button-dark-opacity,.yt-uix-button-dark-opacity:hover {"+
"	box-shadow:none"+
"}"+
".yt-uix-button-opacity {"+
"	opacity:.5;"+
"	filter:alpha(opacity=50)"+
"}"+
".yt-uix-menu-top-level-flow-button .yt-uix-button-opacity {"+
"	opacity:.4;"+
"	filter:alpha(opacity=40)"+
"}"+
".yt-uix-button-opacity:hover {"+
"	opacity:.6;"+
"	filter:alpha(opacity=60)"+
"}"+
".yt-uix-menu-top-level-flow-button .yt-uix-button-opacity:hover {"+
"	opacity:.5;"+
"	filter:alpha(opacity=50)"+
"}"+
".yt-uix-button-opacity:active,.yt-uix-button-opacity.yt-uix-button-active,.yt-uix-button-opacity.yt-uix-button-toggled,.yt-uix-menu-top-level-flow-button .yt-uix-button-opacity[disabled] {"+
"	opacity:.8;"+
"	filter:alpha(opacity=80)"+
"}"+
".yt-uix-button-opacity:active:hover,.yt-uix-button-opacity.yt-uix-button-active:hover,.yt-uix-button-opacity.yt-uix-button-toggled:hover,.yt-uix-menu-top-level-flow-button .yt-uix-button-opacity[disabled]:hover {"+
"	opacity:1;"+
"	filter:alpha(opacity=100)"+
"}"+
".yt-uix-button-opacity-dark {"+
"	opacity:.4;"+
"	filter:alpha(opacity=40)"+
"}"+
".yt-uix-button-opacity-dark:hover {"+
"	opacity:.55;"+
"	filter:alpha(opacity=55)"+
"}"+
".yt-uix-button-opacity-dark:active,.yt-uix-button-opacity-dark.yt-uix-button-active,.yt-uix-button-opacity-dark.yt-uix-button-toggled {"+
"	opacity:.85;"+
"	filter:alpha(opacity=85)"+
"}"+
".yt-uix-button-opacity-dark:active:hover,.yt-uix-button-opacity-dark.yt-uix-button-active:hover,.yt-uix-button-opacity-dark.yt-uix-button-toggled:hover {"+
"	opacity:1;"+
"	filter:alpha(opacity=100)"+
"}"+
".yt-uix-button-primary,.yt-uix-button-primary[disabled],.yt-uix-button-primary[disabled]:hover,.yt-uix-button-primary[disabled]:active,.yt-uix-button-primary[disabled]:focus {"+
"	border-color:#167ac6;"+
"	background:#167ac6;"+
"	color:#fff"+
"}"+
".yt-uix-button-primary:hover {"+
"	background:#126db3"+
"}"+
".yt-uix-button-primary:active,.yt-uix-button-primary.yt-uix-button-toggled,.yt-uix-button-primary.yt-uix-button-active,.yt-uix-button-primary.yt-uix-button-active:focus {"+
"	background:#095b99;"+
"	box-shadow:inset 0 1px 0 rgba(0,0,0,0.5)"+
"}"+
".yt-uix-button-primary[disabled]:active,.yt-uix-button-primary[disabled].yt-uix-button-toggled {"+
"	box-shadow:none"+
"}"+
".yt-uix-button-destructive,.yt-uix-button-destructive[disabled],.yt-uix-button-destructive[disabled]:hover,.yt-uix-button-destructive[disabled]:active,.yt-uix-button-destructive[disabled]:focus {"+
"	border-color:#cc181e;"+
"	background:#cc181e;"+
"	color:#fff"+
"}"+
".yt-uix-button-destructive:hover {"+
"	background:#b31217"+
"}"+
".yt-uix-button-destructive:active,.yt-uix-button-destructive.yt-uix-button-toggled,.yt-uix-button-destructive.yt-uix-button-active,.yt-uix-button-destructive.yt-uix-button-active:focus {"+
"	background:#990c11;"+
"	box-shadow:inset 0 1px 0 rgba(0,0,0,0.5)"+
"}"+
".yt-uix-button-destructive[disabled]:active,.yt-uix-button-destructive[disabled].yt-uix-button-toggled {"+
"	box-shadow:none"+
"}"+
".yt-uix-button-dark,.yt-uix-button-dark[disabled],.yt-uix-button-dark[disabled]:hover,.yt-uix-button-dark[disabled]:active,.yt-uix-button-dark[disabled]:focus {"+
"	border-color:#333;"+
"	background:#333;"+
"	color:#fff"+
"}"+
".yt-uix-button-dark:hover {"+
"	background:#3c3c3c"+
"}"+
".yt-uix-button-dark:active,.yt-uix-button-dark.yt-uix-button-toggled,.yt-uix-button-dark.yt-uix-button-active,.yt-uix-button-dark.yt-uix-button-active:focus {"+
"	background:#1a1a1a;"+
"	box-shadow:inset 0 1px 0 rgba(0,0,0,0.5)"+
"}"+
".yt-uix-button-dark[disabled]:active,.yt-uix-button-dark[disabled].yt-uix-button-toggled {"+
"	box-shadow:none"+
"}"+
".yt-uix-button-light,.yt-uix-button-light[disabled],.yt-uix-button-light[disabled]:hover,.yt-uix-button-light[disabled]:active,.yt-uix-button-light[disabled]:focus {"+
"	border-color:#666;"+
"	background:#666;"+
"	color:#fff"+
"}"+
".yt-uix-button-light:hover {"+
"	background:#6f6f6f"+
"}"+
".yt-uix-button-light:active,.yt-uix-button-light.yt-uix-button-toggled,.yt-uix-button-light.yt-uix-button-active,.yt-uix-button-light.yt-uix-button-active:focus {"+
"	background:#4d4d3d;"+
"	box-shadow:inset 0 1px 0 rgba(0,0,0,0.5)"+
"}"+
".yt-uix-button-light[disabled]:active,.yt-uix-button-light[disabled].yt-uix-button-toggled {"+
"	box-shadow:none"+
"}"+
".yt-uix-button-payment,.yt-uix-button-payment[disabled],.yt-uix-button-payment[disabled]:hover,.yt-uix-button-payment[disabled]:active,.yt-uix-button-payment[disabled]:focus {"+
"	border-color:#61ad15;"+
"	background:#61ad15;"+
"	color:#fff"+
"}"+
".yt-uix-button-payment:hover {"+
"	background:#54900f"+
"}"+
".yt-uix-button-payment:active,.yt-uix-button-payment.yt-uix-button-toggled,.yt-uix-button-payment.yt-uix-button-active,.yt-uix-button-payment.yt-uix-button-active:focus {"+
"	background:#478509;"+
"	box-shadow:inset 0 1px 0 rgba(0,0,0,0.5)"+
"}"+
".yt-uix-button-payment[disabled]:active,.yt-uix-button-payment[disabled].yt-uix-button-toggled {"+
"	box-shadow:none"+
"}"+
".yt-uix-button-text,.yt-uix-button-text[disabled] {"+
"	border:solid 1px transparent;"+
"	outline:0;"+
"	background:none;"+
"	color:#333;"+
"	box-shadow:none"+
"}"+
".yt-uix-button-blue-text {"+
"	border:solid 1px transparent;"+
"	outline:0;"+
"	background:none;"+
"	box-shadow:none"+
"}"+
".yt-uix-button-blue-text[disabled] {"+
"	border:solid 1px transparent;"+
"	outline:0;"+
"	background:none;"+
"	color:#333;"+
"	box-shadow:none"+
"}"+
".yt-uix-button-blue-text {"+
"	color:#167ac6"+
"}"+
".yt-uix-button-link {"+
"	padding:0;"+
"	border:none;"+
"	height:auto;"+
"	background:transparent;"+
"	color:#167ac6;"+
"	font-weight:normal;"+
"	font-size:inherit;"+
"	text-decoration:none;"+
"	box-shadow:none"+
"}"+
".yt-uix-button-link:active,.yt-uix-button-link:hover {"+
"	background:transparent;"+
"	text-decoration:underline;"+
"	box-shadow:none"+
"}"+
"a.yt-uix-button {"+
"	text-decoration:none;"+
"	-moz-box-sizing:border-box;"+
"	box-sizing:border-box"+
"}"+
".yt-uix-button-group {"+
"	display:inline-block;"+
"	white-space:nowrap;"+
"	vertical-align:middle"+
"}"+
".yt-uix-button-group .yt-uix-button {"+
"	margin-right:-1px;"+
"	border-radius:0"+
"}"+
".yt-uix-button-group .yt-uix-button:hover {"+
"	position:relative;"+
"	z-index:2147483645"+
"}"+
".yt-uix-button-group .start {"+
"	-moz-border-radius-topleft:2px;"+
"	border-top-left-radius:2px;"+
"	-moz-border-radius-bottomleft:2px;"+
"	border-bottom-left-radius:2px"+
"}"+
".yt-uix-button-group .end {"+
"	margin-right:0;"+
"	-moz-border-radius-topright:2px;"+
"	border-top-right-radius:2px;"+
"	-moz-border-radius-bottomright:2px;"+
"	border-bottom-right-radius:2px"+
"}"+
".yt-uix-button-arrow {"+
"	margin-top:-3px;"+
"	margin-left:5px;"+
"	border:1px solid transparent;"+
"	border-top-color:#333;"+
"	border-width:4px 4px 0;"+
"	width:0;"+
"	height:0"+
"}"+
".yt-uix-button-reverse .yt-uix-button-arrow {"+
"	border-width:0 4px 4px;"+
"	border-top-color:transparent;"+
"	border-bottom-color:#333"+
"}"+
".yt-uix-button-empty .yt-uix-button-arrow {"+
"	margin-left:0"+
"}"+
".yt-uix-button-primary .yt-uix-button-arrow,.yt-uix-button-destructive .yt-uix-button-arrow,.yt-uix-button-dark .yt-uix-button-arrow,.yt-uix-button-light .yt-uix-button-arrow,.yt-uix-button-payment .yt-uix-button-arrow {"+
"	border-top-color:#fff"+
"}"+
".yt-uix-button-primary.yt-uix-button-reverse .yt-uix-button-arrow,.yt-uix-button-destructive.yt-uix-button-reverse .yt-uix-button-arrow,.yt-uix-button-dark.yt-uix-button-reverse .yt-uix-button-arrow,.yt-uix-button-light.yt-uix-button-reverse .yt-uix-button-arrow,.yt-uix-button-payment.yt-uix-button-reverse .yt-uix-button-arrow {"+
"	border-bottom-color:#fff"+
"}"+
".yt-uix-button .yt-uix-button-menu {"+
"	display:none"+
"}"+
".yt-uix-button .yt-uix-button-menu:focus {"+
"	outline:none"+
"}"+
".yt-uix-button-menu {"+
"	outline:none;"+
"	padding:8px 0;"+
"	position:absolute;"+
"	border:1px solid #ccc;"+
"	z-index:2147483647;"+
"	overflow:auto;"+
"	background:#fff;"+
"	border-radius:2px"+
"}"+
".yt-uix-button-menu-external {"+
"	overflow:visible"+
"}"+
".yt-uix-button-menu li {"+
"	margin:0;"+
"	padding:0"+
"}"+
".yt-uix-button-menu li.yt-uix-button-menu-new-section-separator {"+
"	padding-top:8px;"+
"	margin-top:8px;"+
"	border-top:1px solid #b8b8b8"+
"}"+
".yt-uix-button-menu .yt-uix-button-menu-item {"+
"	display:block;"+
"	margin:0;"+
"	padding:0 25px;"+
"	color:#333;"+
"	font-size:13px;"+
"	text-decoration:none;"+
"	white-space:nowrap;"+
"	word-wrap:normal;"+
"	line-height:25px;"+
"	cursor:pointer;"+
"	cursor:hand"+
"}"+
".yt-uix-button-menu-item-selected .yt-uix-button-menu-item {"+
"	font-weight:500"+
"}"+
".yt-uix-button-menu .yt-uix-button-menu-item.selected,.yt-uix-button-menu .yt-uix-button-menu-item-highlight .yt-uix-button-menu-item,.yt-uix-button-menu .yt-uix-button-menu-item:hover {"+
"	background-color:#333;"+
"	color:#fff"+
"}"+
".yt-uix-button-menu-mask {"+
"	position:absolute;"+
"	z-index:2147483646;"+
"	opacity:0;"+
"	filter:alpha(opacity=0);"+
"	border:0;"+
"	padding:0;"+
"	margin:0"+
"}"+
"div.yt-uix-button-menu>table {"+
"	background:#ebebeb;"+
"	border-collapse:separate;"+
"	border-spacing:1px"+
"}"+
".yt-uix-button-menu .yt-uix-button-icon-checkbox {"+
"	float:left;"+
"	padding:5px 0 5px 4px"+
"}"+
".yt-uix-button-menu .yt-uix-button-icon-dropdown-checked {"+
"	background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflykgb8o.png) -460px -120px;"+
"	background-size:auto;"+
"	width:15px;"+
"	height:14px"+
"}"+
".yt-uix-button-menu li:hover .yt-uix-button-icon-dropdown-checked {"+
"	background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflykgb8o.png) -507px -257px;"+
"	background-size:auto;"+
"	width:15px;"+
"	height:14px"+
"}"+
".yt-uix-button-icon-trash {"+
"	background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflykgb8o.png) -270px -168px;"+
"	background-size:auto;"+
"	width:12px;"+
"	height:16px"+
"}"+
".yt-uix-button-icon-channel-back {"+
"	background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflykgb8o.png) -478px -183px;"+
"	background-size:auto;"+
"	width:15px;"+
"	height:10px"+
"}"+
".rtl .yt-uix-button-icon-channel-back {"+
"	background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflykgb8o.png) -698px -199px;"+
"	background-size:auto;"+
"	width:15px;"+
"	height:10px"+
"}"+
".yt-uix-button-icon-dismissal {"+
"	background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflykgb8o.png) -24px -79px;"+
"	background-size:auto;"+
"	width:20px;"+
"	height:20px"+
"}"+
".yt-uix-button-icon-settings {"+
"	background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflykgb8o.png) -626px -55px;"+
"	background-size:auto;"+
"	width:16px;"+
"	height:16px"+
"}"+
".yt-uix-button-icon-settings-material {"+
"	background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflykgb8o.png) -419px -251px;"+
"	background-size:auto;"+
"	width:24px;"+
"	height:24px"+
"}"+
".yt-uix-button-icon-view-list {"+
"	background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflykgb8o.png) -395px -209px;"+
"	background-size:auto;"+
"	width:24px;"+
"	height:24px"+
"}"+
".yt-uix-button-icon-view-module {"+
"	background:no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflykgb8o.png) -359px -269px;"+
"	background-size:auto;"+
"	width:24px;"+
"	height:24px"+
"}"+
".yt-uix-button-disabled-aria-label {"+
"	display:none;"+
"	opacity:0"+
"}"+
".yt-uix-button[disabled]+.yt-uix-button-disabled-aria-label {"+
"	display:block;"+
"	position:absolute"+
"}"+
".yt-uix-button.yt-uix-button-nakedicon {"+
"	padding:0"+
"}";//yt_uix




code = code +
".mejs-container {"+
"	position: relative;"+
"	background: #000;"+
"	font-family: Helvetica, Arial;"+
"	text-align: left;"+
"	vertical-align: top;"+
"	text-indent: 0;"+
"}"+
""+
".me-plugin {"+
"	position: absolute;"+
"}"+
""+
".mejs-embed, .mejs-embed body {"+
"	width: 100%;"+
"	height: 100%;"+
"	margin: 0;"+
"	padding: 0;"+
"	background: #000;"+
"	overflow: hidden;"+
"}"+
""+
".mejs-fullscreen {"+
"	/* set it to not show scroll bars so 100% will work */"+
"	overflow: hidden !important;"+
"}"+
""+
".mejs-container-fullscreen {"+
"	position: fixed;"+
"	left: 0;"+
"	top: 0;"+
"	right: 0;"+
"	bottom: 0;"+
"	overflow: hidden;"+
"	z-index: 1000;"+
"}"+
".mejs-container-fullscreen .mejs-mediaelement,"+
".mejs-container-fullscreen video {"+
"	width: 100%;"+
"	height: 100%;"+
"}"+
""+
".mejs-clear {"+
"	clear: both;"+
"}"+
""+
"/* Start: LAYERS */"+
".mejs-background {"+
"	position: absolute;"+
"	top: 0;"+
"	left: 0;"+
"}"+
""+
".mejs-mediaelement {"+
"	position: absolute;"+
"	top: 0;"+
"	left: 0;"+
"	width: 100%;"+
"	height: 100%;"+
"}"+
""+
".mejs-poster {"+
"	position: absolute;"+
"	top: 0;"+
"	left: 0;"+
"	background-size: contain ;"+
"	background-position: 50% 50% ;"+
"	background-repeat: no-repeat ;"+
"}"+
":root .mejs-poster img {"+
"	display: none ;"+
"}"+
""+
".mejs-poster img {"+
"	border: 0;"+
"	padding: 0;"+
"	border: 0;"+
"}"+
""+
".mejs-overlay {"+
"	position: absolute;"+
"	top: 0;"+
"	left: 0;"+
"}"+
""+
".mejs-overlay-play {"+
"	cursor: pointer;"+
"}"+
""+
".mejs-overlay-button {"+
"	position: absolute;"+
"	top: 50%;"+
"	left: 50%;"+
"	width: 100px;"+
"	height: 100px;"+
"	margin: -50px 0 0 -50px;"+
"	background: url('" + yt6.cdn + "snarly/yt6/5b5ffacc074c0332f668db10bd2e3c36aa0be38e/bigplay.png') no-repeat;"+
"}"+
""+
".no-svg .mejs-overlay-button { "+
"	background-image: url('" + yt6.cdn + "snarly/yt6/5b5ffacc074c0332f668db10bd2e3c36aa0be38e/bigplay.png');"+
"}"+
""+
".mejs-overlay:hover .mejs-overlay-button {"+
"	background-position: 0 -100px ;"+
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
"	background: url('" + yt6.cdn + "snarly/yt6/5b5ffacc074c0332f668db10bd2e3c36aa0be38e/bigplay.png');"+
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
"	background: transparent url('" + yt6.cdn + "snarly/yt6/2111d0cf292b9e0f9bcb7ab79a8698b5826b5ba5/loading.gif') 50% 50% no-repeat;"+
"}"+
""+
"/* End: LAYERS */"+
""+
"/* Start: CONTROL BAR */"+
".mejs-container .mejs-controls {"+
"	position: absolute;"+
"	list-style-type: none;"+
"	margin: 0;"+
"	padding: 0;"+
"	bottom: 0;"+
"	left: 0;"+
"	background: url('" + yt6.cdn + "johndyer/mediaelement/tree/990edbe90b89ca3f40cde0d03fad805a4d6650a5/build/background.png');"+
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
".mejs-container .mejs-controls  div {"+
"	list-style-type: none;"+
"	background-image: none;"+
"	display: block;"+
"	float: left;"+
"	margin: 0;"+
"	padding: 0;"+
"	width: 26px;"+
"	height: 26px;"+
"	font-size: 11px;"+
"	line-height: 11px;"+
"	font-family: Helvetica, Arial;"+
"	border: 0;"+
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
"	background: transparent url('" + yt6.cdn + "snarly/yt6/e7e07cca212378b89ecdc11946d2a3fa97a63f23/controls.png') no-repeat;"+
"}"+
""+
".no-svg .mejs-controls .mejs-button button { "+
"	background-image: url('" + yt6.cdn + "snarly/yt6/e7e07cca212378b89ecdc11946d2a3fa97a63f23/controls.png');"+
"}"+
""+
"/* :focus for accessibility */"+
".mejs-controls .mejs-button button:focus {"+
"	outline: dotted 1px #999;"+
"}"+
""+
"/* End: CONTROL BAR */"+
""+
"/* Start: Time (Current / Duration) */"+
".mejs-container .mejs-controls .mejs-time {"+
"	color: #fff;"+
"	display: block;"+
"	height: 17px;"+
"	width: auto;"+
"	padding: 8px 3px 0 3px ;"+
"	overflow: hidden;"+
"	text-align: center;"+
"	-moz-box-sizing: content-box;"+
"	-webkit-box-sizing: content-box;"+
"	box-sizing: content-box;"+
"}"+
""+
".mejs-container .mejs-controls .mejs-time span {"+
"	color: #fff;"+
"	font-size: 11px;"+
"	line-height: 12px;"+
"	display: block;"+
"	float: left;"+
"	margin: 1px 2px 0 0;"+
"	width: auto;"+
"}"+
"/* End: Time (Current / Duration) */"+
""+
"/* Start: Play/Pause/Stop */"+
".mejs-controls .mejs-play button {"+
"	background-position: 0 0;"+
"}"+
""+
".mejs-controls .mejs-pause button {"+
"	background-position: 0 -16px;"+
"}"+
""+
".mejs-controls .mejs-stop button {"+
"	background-position: -112px 0;"+
"}"+
"/* Start: Play/Pause/Stop */"+
""+
"/* Start: Progress Bar */"+
".mejs-controls div.mejs-time-rail {"+
"	direction: ltr;"+
"	width: 200px;"+
"	padding-top: 5px;"+
"}"+
""+
".mejs-controls .mejs-time-rail span {"+
"	display: block;"+
"	position: absolute;"+
"	width: 180px;"+
"	height: 10px;"+
"	-webkit-border-radius: 2px;"+
"	-moz-border-radius: 2px;"+
"	border-radius: 2px;"+
"	cursor: pointer;"+
"}"+
""+
".mejs-controls .mejs-time-rail .mejs-time-total {"+
"	margin: 5px;"+
"	background: #333;"+
"	background: rgba(50,50,50,0.8);"+
"	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(30,30,30,0.8)), to(rgba(60,60,60,0.8)));"+
"	background: -webkit-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8)); "+
"	background: -moz-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));"+
"	background: -o-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));"+
"	background: -ms-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));"+
"	background: linear-gradient(rgba(30,30,30,0.8), rgba(60,60,60,0.8));"+
"}"+
""+
".mejs-controls .mejs-time-rail .mejs-time-buffering {"+
"	width: 100%;"+
"	background-image: -o-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);"+
"	background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));"+
"	background-image: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);"+
"	background-image: -moz-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);"+
"	background-image: -ms-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);"+
"	background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);"+
"	-webkit-background-size: 15px 15px;"+
"	-moz-background-size: 15px 15px;"+
"	-o-background-size: 15px 15px;"+
"	background-size: 15px 15px;"+
"	-webkit-animation: buffering-stripes 2s linear infinite;"+
"	-moz-animation: buffering-stripes 2s linear infinite;"+
"	-ms-animation: buffering-stripes 2s linear infinite;"+
"	-o-animation: buffering-stripes 2s linear infinite;"+
"	animation: buffering-stripes 2s linear infinite;"+
"}"+
""+
"@-webkit-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }"+
"@-moz-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }"+
"@-ms-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }"+
"@-o-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }"+
"@keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }"+
""+
".mejs-controls .mejs-time-rail .mejs-time-loaded {"+
"	background: #3caac8;"+
"	background: rgba(60,170,200,0.8);"+
"	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(44,124,145,0.8)), to(rgba(78,183,212,0.8))); "+
"	background: -webkit-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8));"+
"	background: -moz-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8));"+
"	background: -o-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8));"+
"	background: -ms-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8));"+
"	background: linear-gradient(rgba(44,124,145,0.8), rgba(78,183,212,0.8));"+
"	width: 0;"+
"}"+
""+
".mejs-controls .mejs-time-rail .mejs-time-current {"+
"	background: #fff;"+
"	background: rgba(255,255,255,0.8);"+
"	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(255,255,255,0.9)), to(rgba(200,200,200,0.8)));"+
"	background: -webkit-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));"+
"	background: -moz-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8)); "+
"	background: -o-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));"+
"	background: -ms-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));"+
"	background: linear-gradient(rgba(255,255,255,0.9), rgba(200,200,200,0.8));"+
"	width: 0;"+
"}"+
""+
".mejs-controls .mejs-time-rail .mejs-time-handle {"+
"	display: none;"+
"	position: absolute;"+
"	margin: 0;"+
"	width: 10px;"+
"	background: #fff;"+
"	-webkit-border-radius: 5px;"+
"	-moz-border-radius: 5px;"+
"	border-radius: 5px;"+
"	cursor: pointer;"+
"	border: solid 2px #333;"+
"	top: -2px;"+
"	text-align: center;"+
"}"+
""+
".mejs-controls .mejs-time-rail .mejs-time-float {"+
"	position: absolute;"+
"	display: none;"+
"	background: #eee;"+
"	width: 36px;"+
"	height: 17px;"+
"	border: solid 1px #333;"+
"	top: -26px;"+
"	margin-left: -18px;"+
"	text-align: center;"+
"	color: #111;"+
"}"+
""+
".mejs-controls .mejs-time-rail .mejs-time-float-current {"+
"	margin: 2px;"+
"	width: 30px;"+
"	display: block;"+
"	text-align: center;"+
"	left: 0;"+
"}"+
""+
".mejs-controls .mejs-time-rail .mejs-time-float-corner {"+
"	position: absolute;"+
"	display: block;"+
"	width: 0;"+
"	height: 0;"+
"	line-height: 0;"+
"	border: solid 5px #eee;"+
"	border-color: #eee transparent transparent transparent;"+
"	-webkit-border-radius: 0;"+
"	-moz-border-radius: 0;"+
"	border-radius: 0;"+
"	top: 15px;"+
"	left: 13px;"+
"}"+
""+
".mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float {"+
"	width: 48px;"+
"}"+
""+
".mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float-current {"+
"	width: 44px;"+
"}"+
""+
".mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float-corner {"+
"	left: 18px;"+
"}"+
""+
"/*"+
".mejs-controls .mejs-time-rail:hover .mejs-time-handle {"+
"	visibility:visible;"+
"}"+
"*/"+
"/* End: Progress Bar */"+
""+
"/* Start: Fullscreen */"+
".mejs-controls .mejs-fullscreen-button button {"+
"	background-position: -32px 0;"+
"}"+
""+
".mejs-controls .mejs-unfullscreen button {"+
"	background-position: -32px -16px;"+
"}"+
"/* End: Fullscreen */"+
""+
""+
"/* Start: Mute/Volume */"+
".mejs-controls .mejs-volume-button {"+
"}"+
""+
".mejs-controls .mejs-mute button {"+
"	background-position: -16px -16px;"+
"}"+
""+
".mejs-controls .mejs-unmute button {"+
"	background-position: -16px 0;"+
"}"+
""+
".mejs-controls .mejs-volume-button {"+
"	position: relative;"+
"}"+
""+
".mejs-controls .mejs-volume-button .mejs-volume-slider {"+
"	display: none;"+
"	height: 115px;"+
"	width: 25px;"+
"	background: url('" + yt6.cdn + "johndyer/mediaelement/tree/990edbe90b89ca3f40cde0d03fad805a4d6650a5/build/background.png');"+
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
".mejs-controls .mejs-volume-button:hover {"+
"	-webkit-border-radius: 0 0 4px 4px;"+
"	-moz-border-radius: 0 0 4px 4px;"+
"	border-radius: 0 0 4px 4px;"+
"}"+
""+
"/*"+
".mejs-controls .mejs-volume-button:hover .mejs-volume-slider {"+
"	display: block;"+
"}"+
"*/"+
""+
".mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-total {"+
"	position: absolute;"+
"	left: 11px;"+
"	top: 8px;"+
"	width: 2px;"+
"	height: 100px;"+
"	background: #ddd;"+
"	background: rgba(255, 255, 255, 0.5);"+
"	margin: 0;"+
"}"+
""+
".mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current {"+
"	position: absolute;"+
"	left: 11px;"+
"	top: 8px;"+
"	width: 2px;"+
"	height: 100px;"+
"	background: #ddd;"+
"	background: rgba(255, 255, 255, 0.9);"+
"	margin: 0;"+
"}"+
""+
".mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-handle {"+
"	position: absolute;"+
"	left: 4px;"+
"	top: -3px;"+
"	width: 16px;"+
"	height: 6px;"+
"	background: #ddd;"+
"	background: rgba(255, 255, 255, 0.9);"+
"	cursor: N-resize;"+
"	-webkit-border-radius: 1px;"+
"	-moz-border-radius: 1px;"+
"	border-radius: 1px;"+
"	margin: 0;"+
"}"+
""+
"/* horizontal version */"+
".mejs-controls div.mejs-horizontal-volume-slider {"+
"	height: 26px;"+
"	width: 60px;"+
"	position: relative;"+
"}"+
""+
".mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total {"+
"	position: absolute;"+
"	left: 0;"+
"	top: 11px;"+
"	width: 50px;"+
"	height: 8px;"+
"	margin: 0;"+
"	padding: 0;"+
"	font-size: 1px;"+
"	-webkit-border-radius: 2px;"+
"	-moz-border-radius: 2px;"+
"	border-radius: 2px;	"+
"	background: #333;"+
"	background: rgba(50,50,50,0.8);"+
"	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(30,30,30,0.8)), to(rgba(60,60,60,0.8)));"+
"	background: -webkit-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8)); "+
"	background: -moz-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));"+
"	background: -o-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));"+
"	background: -ms-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));"+
"	background: linear-gradient(rgba(30,30,30,0.8), rgba(60,60,60,0.8));"+
"}"+
""+
".mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current {"+
"	position: absolute;"+
"	left: 0;"+
"	top: 11px;"+
"	width: 50px;"+
"	height: 8px;"+
"	margin: 0;"+
"	padding: 0;"+
"	font-size: 1px;"+
"	-webkit-border-radius: 2px;"+
"	-moz-border-radius: 2px;"+
"	border-radius: 2px;"+
"	background: #fff;"+
"	background: rgba(255,255,255,0.8);"+
"	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(255,255,255,0.9)), to(rgba(200,200,200,0.8)));"+
"	background: -webkit-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));"+
"	background: -moz-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8)); "+
"	background: -o-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));"+
"	background: -ms-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));"+
"	background: linear-gradient(rgba(255,255,255,0.9), rgba(200,200,200,0.8));"+
"}"+
""+
".mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-handle {"+
"	display: none;"+
"}"+
""+
"/* End: Mute/Volume */"+
""+
"/* Start: Track (Captions and Chapters) */"+
".mejs-controls .mejs-captions-button {"+
"	position: relative;"+
"}"+
""+
".mejs-controls .mejs-captions-button button {"+
"	background-position: -48px 0;"+
"}"+
".mejs-controls .mejs-captions-button .mejs-captions-selector {"+
"	visibility: hidden;"+
"	position: absolute;"+
"	bottom: 26px;"+
"	right: -10px;"+
"	width: 130px;"+
"	height: 100px;"+
"	background: url('" + yt6.cdn + "johndyer/mediaelement/tree/990edbe90b89ca3f40cde0d03fad805a4d6650a5/build/background.png');"+
"	background: rgba(50,50,50,0.7);"+
"	border: solid 1px transparent;"+
"	padding: 10px;"+
"	overflow: hidden;"+
"	-webkit-border-radius: 0;"+
"	-moz-border-radius: 0;"+
"	border-radius: 0;"+
"}"+
""+
"/*"+
".mejs-controls .mejs-captions-button:hover  .mejs-captions-selector {"+
"	visibility: visible;"+
"}"+
"*/"+
""+
".mejs-controls .mejs-captions-button .mejs-captions-selector ul {"+
"	margin: 0;"+
"	padding: 0;"+
"	display: block;"+
"	list-style-type: none !important;"+
"	overflow: hidden;"+
"}"+
""+
".mejs-controls .mejs-captions-button .mejs-captions-selector ul li {"+
"	margin: 0 0 6px 0;"+
"	padding: 0;"+
"	list-style-type: none !important;"+
"	display: block;"+
"	color: #fff;"+
"	overflow: hidden;"+
"}"+
""+
".mejs-controls .mejs-captions-button .mejs-captions-selector ul li input {"+
"	clear: both;"+
"	float: left;"+
"	margin: 3px 3px 0 5px;"+
"}"+
""+
".mejs-controls .mejs-captions-button .mejs-captions-selector ul li label {"+
"	width: 100px;"+
"	float: left;"+
"	padding: 4px 0 0 0;"+
"	line-height: 15px;"+
"	font-family: helvetica, arial;"+
"	font-size: 10px;"+
"}"+
""+
".mejs-controls .mejs-captions-button .mejs-captions-translations {"+
"	font-size: 10px;"+
"	margin: 0 0 5px 0;"+
"}"+
""+
".mejs-chapters {"+
"	position: absolute;"+
"	top: 0;"+
"	left: 0;"+
"	-xborder-right: solid 1px #fff;"+
"	width: 10000px;"+
"	z-index: 1;"+
"}"+
""+
".mejs-chapters .mejs-chapter {"+
"	position: absolute;"+
"	float: left;"+
"	background: #222;"+
"	background: rgba(0, 0, 0, 0.7);"+
"	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(50,50,50,0.7)), to(rgba(0,0,0,0.7)));"+
"	background: -webkit-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7));"+
"	background: -moz-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7));"+
"	background: -o-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7));"+
"	background: -ms-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7));"+
"	background: linear-gradient(rgba(50,50,50,0.7), rgba(0,0,0,0.7)); "+
"	filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#323232,endColorstr=#000000);		"+
"	overflow: hidden;"+
"	border: 0;"+
"}"+
""+
".mejs-chapters .mejs-chapter .mejs-chapter-block {"+
"	font-size: 11px;"+
"	color: #fff;"+
"	padding: 5px;"+
"	display: block;"+
"	border-right: solid 1px #333;"+
"	border-bottom: solid 1px #333;"+
"	cursor: pointer;"+
"}"+
""+
".mejs-chapters .mejs-chapter .mejs-chapter-block-last {"+
"	border-right: none;"+
"}"+
""+
".mejs-chapters .mejs-chapter .mejs-chapter-block:hover {"+
"	background: #666;"+
"	background: rgba(102,102,102, 0.7);"+
"	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(102,102,102,0.7)), to(rgba(50,50,50,0.6)));"+
"	background: -webkit-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));"+
"	background: -moz-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));"+
"	background: -o-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));"+
"	background: -ms-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));"+
"	background: linear-gradient(rgba(102,102,102,0.7), rgba(50,50,50,0.6));"+
"	filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#666666,endColorstr=#323232);		"+
"}"+
""+
".mejs-chapters .mejs-chapter .mejs-chapter-block .ch-title {"+
"	font-size: 12px;"+
"	font-weight: bold;"+
"	display: block;"+
"	white-space: nowrap;"+
"	text-overflow: ellipsis;"+
"	margin: 0 0 3px 0;"+
"	line-height: 12px;"+
"}"+
""+
".mejs-chapters .mejs-chapter .mejs-chapter-block .ch-timespan {"+
"	font-size: 12px;"+
"	line-height: 12px;"+
"	margin: 3px 0 4px 0;"+
"	display: block;"+
"	white-space: nowrap;"+
"	text-overflow: ellipsis;"+
"}"+
""+
".mejs-captions-layer {"+
"	position: absolute;"+
"	bottom: 0;"+
"	left: 0;"+
"	text-align:center;"+
"	line-height: 22px;"+
"	font-size: 12px;"+
"	color: #fff;"+
"}"+
""+
".mejs-captions-layer  a {"+
"	color: #fff;"+
"	text-decoration: underline;"+
"}"+
""+
".mejs-captions-layer[lang=ar] {"+
"	font-size: 20px;"+
"	font-weight: normal;"+
"}"+
""+
".mejs-captions-position {"+
"	position: absolute;"+
"	width: 100%;"+
"	bottom: 15px;"+
"	left: 0;"+
"}"+
""+
".mejs-captions-position-hover {"+
"	bottom: 45px;"+
"}"+
""+
".mejs-captions-text {"+
"	padding: 3px 5px;"+
"	background: url('" + yt6.cdn + "johndyer/mediaelement/tree/990edbe90b89ca3f40cde0d03fad805a4d6650a5/build/background.png');"+
"	background: rgba(20, 20, 20, 0.8);"+
""+
"}"+
"/* End: Track (Captions and Chapters) */"+
""+
"/* Start: Error */"+
".me-cannotplay {"+
"}"+
""+
".me-cannotplay a {"+
"	color: #fff;"+
"	font-weight: bold;"+
"}"+
""+
".me-cannotplay span {"+
"	padding: 15px;"+
"	display: block;"+
"}"+
"/* End: Error */"+
""+
""+
"/* Start: Loop */"+
".mejs-controls .mejs-loop-off button {"+
"	background-position: -64px -16px;"+
"}"+
""+
".mejs-controls .mejs-loop-on button {"+
"	background-position: -64px 0;"+
"}"+
""+
"/* End: Loop */"+
""+
"/* Start: backlight */"+
".mejs-controls .mejs-backlight-off button {"+
"	background-position: -80px -16px;"+
"}"+
""+
".mejs-controls .mejs-backlight-on button {"+
"	background-position: -80px 0;"+
"}"+
"/* End: backlight */"+
""+
"/* Start: Picture Controls */"+
".mejs-controls .mejs-picturecontrols-button {"+
"	background-position: -96px 0;"+
"}"+
"/* End: Picture Controls */"+
""+
""+
"/* context menu */"+
".mejs-contextmenu {"+
"	position: absolute;"+
"	width: 150px;"+
"	padding: 10px;"+
"	border-radius: 4px;"+
"	top: 0;"+
"	left: 0;"+
"	background: #fff;"+
"	border: solid 1px #999;"+
"	z-index: 1001; /* make sure it shows on fullscreen */"+
"}"+
".mejs-contextmenu .mejs-contextmenu-separator {"+
"	height: 1px;"+
"	font-size: 0;"+
"	margin: 5px 6px;"+
"	background: #333;	"+
"}"+
""+
".mejs-contextmenu .mejs-contextmenu-item {"+
"	font-family: Helvetica, Arial;"+
"	font-size: 12px;"+
"	padding: 4px 6px;"+
"	cursor: pointer;"+
"	color: #333;	"+
"}"+
".mejs-contextmenu .mejs-contextmenu-item:hover {"+
"	background: #2C7C91;"+
"	color: #fff;"+
"}"+
""+
".mejs-controls .mejs-speed-button {"+
"	position: relative;"+
"}"+
""+
".mejs-controls .mejs-speed-button button {"+
"	background: none;"+
"}"+
""+
".mejs-controls .mejs-speed-button .mejs-speed-selector {"+
"	position: absolute;"+
"	visibility: hidden;"+
"	bottom: 26px;"+
"	width: 86px;"+
"	right: -110px;"+
"	background: url('" + yt6.cdn + "johndyer/mediaelement/tree/990edbe90b89ca3f40cde0d03fad805a4d6650a5/build/background.png');"+
"	background: rgba(50,50,50,0.7);"+
"	border: solid 1px transparent;"+
"	padding: 10px;"+
"	overflow: hidden;"+
"	-webkit-border-radius: 0;"+
"	-moz-border-radius: 0;"+
"	border-radius: 0;"+
"}"+
""+
".mejs-controls .mejs-speed-button .mejs-speed-selector ul {"+
"	margin: 0;"+
"	padding: 0;"+
"	display: block;"+
"	list-style-type: none !important;"+
"	overflow: hidden;"+
"}"+
""+
".mejs-controls .mejs-speed-button .mejs-speed-selector ul li {"+
"	margin: 0 0 0 0;"+
"	padding: 0;"+
"	list-style-type: none !important;"+
"	display: block;"+
"	color: #fff;"+
"	overflow: hidden;"+
"}"+
""+
"/* Start: Source Chooser */"+
".mejs-controls .mejs-sourcechooser-button {"+
"	position: relative;"+
"}"+
""+
".mejs-controls .mejs-sourcechooser-button button {"+
"	background-position: -128px 0;"+
"}"+
""+
".mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector {"+
"	visibility: hidden;"+
"	position: absolute;"+
"	bottom: 26px;"+
"	right: -10px;"+
"	width: 130px;"+
"	height: 100px;"+
"	background: url('" + yt6.cdn + "johndyer/mediaelement/tree/990edbe90b89ca3f40cde0d03fad805a4d6650a5/build/background.png');"+
"	background: rgba(50,50,50,0.7);"+
"	border: solid 1px transparent;"+
"	padding: 10px;"+
"	overflow: hidden;"+
"	-webkit-border-radius: 0;"+
"	-moz-border-radius: 0;"+
"	border-radius: 0;"+
"}"+
""+
".mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul {"+
"	margin: 0;"+
"	padding: 0;"+
"	display: block;"+
"	list-style-type: none !important;"+
"	overflow: hidden;"+
"}"+
""+
".mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li {"+
"	margin: 0 0 6px 0;"+
"	padding: 0;"+
"	list-style-type: none !important;"+
"	display: block;"+
"	color: #fff;"+
"	overflow: hidden;"+
"}"+
""+
".mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li input {"+
"	clear: both;"+
"	float: left;"+
"	margin: 3px 3px 0 5px;"+
"}"+
""+
".mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li label {"+
"	width: 100px;"+
"	float: left;"+
"	padding: 4px 0 0 0;"+
"	line-height: 15px;"+
"	font-family: helvetica, arial;"+
"	font-size: 10px;"+
"}"+
"/* End: Source Chooser */"+
""+
"/* Start: Postroll */"+
".mejs-postroll-layer {"+
"	position: absolute;"+
"	bottom: 0;"+
"	left: 0;"+
"	width: 100%;"+
"	height: 100%;"+
"	background: url('" + yt6.cdn + "johndyer/mediaelement/tree/990edbe90b89ca3f40cde0d03fad805a4d6650a5/build/background.png');"+
"	background: rgba(50,50,50,0.7);"+
"	z-index: 1000;"+
"	overflow: hidden;"+
"}"+
".mejs-postroll-layer-content {"+
"	width: 100%;"+
"	height: 100%;"+
"}"+
".mejs-postroll-close {"+
"	position: absolute;"+
"	right: 0;"+
"	top: 0;"+
"	background: url('" + yt6.cdn + "johndyer/mediaelement/tree/990edbe90b89ca3f40cde0d03fad805a4d6650a5/build/background.png');"+
"	background: rgba(50,50,50,0.7);"+
"	color: #fff;"+
"	padding: 4px;"+
"	z-index: 100;"+
"	cursor: pointer;"+
"}"+
"/* End: Postroll */";

    try {
      js.appendChild(document.createTextNode(code));
      document.getElementById('video-hide').appendChild(js);
    } catch (e) {
      js.text = code;
      document.getElementById('video-hide').appendChild(js);
    }
    delete js;
//loadCSS("https://raw.githubusercontent.com/snarly/yt6/master/mediaelementplayer.css",function(){
//loadCSS("https://goo.gl/ivCwqv",function(){



function mep_run() {

		var Srcto;
		var href = yt6.href;
		var Audio = yt6.audio;
		var A = yt6.A_;
		var V = yt6.V_;
		var AV = yt6.A_V;
		var Seek = yt6.Seek = null;
		var player2 = document.getElementById('player2')
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
		  flashName: '//cdn.rawgit.com/johndyer/mediaelement/8adf73f1a2bec0b6867f83917ce8c491d01c1aa9/build/flashmediaelement-cdn.swf',
		  pluginWidth: yt6.w.replace('px',''),
		  pluginHeight: yt6.h.replace('px',''),
		  startLanguage:'',
		  translationSelector: true,
		  translations:['en','de','es'],
		  success: function(me) {  $('#audio-type').html( me.pluginType);
					addEL(me, 'loadstart', function() {
					  //gc('mejs-controls')[0].style = 'display: block; visibility: hidden;'
					  FireEvent( mep_x('mep_'), 'mouseover' );
					  if (gc('mejs-clear')[0]) gc('mejs-clear')[0].setAttribute('id','mejs-clear')
					});
					addEL(me, 'error', function() {
					  if (me.networkState == 3) {
					    if (yt6.timer == 999999999 || me.src == window.location.href) { return void 0 };

					    var sauce = getElementsByAttribute(document,"input","name",mep_x("mep_") + "_sourcechooser");
					    if ((sauce != undefined) && (sauce.length != 0)) {
					      for (i=0;i<parseInt(sauce.length - 1);i++) {
						if (sauce[i] != undefined) {
						  var z = sauce[i].getAttribute('checked')
						  if (z) {
						    yt6.current = 1 * sauce[i].id.split('_sourcechooser_')[1];
						    sauce[i].removeAttribute('checked');
						    break;
						  }
						}
					      }
					    }



					    function rewrite_links() {
						if (!yt6.ytg) {
						  if ((sauce != undefined) && (sauce.length != 0)) {
						    for (i=0;i<sauce.length;i++) {
						      if (sauce[i].time != '1') { sauce[i].parentNode.parentNode.removeChild(sauce[i].parentNode) }
						    }
						    if (typeof sauce[0].click == 'function') sauce[0].click() 
						  }
						  var z = gc('ytassetsjs-0')
						  for (k=z.length;k>-1;k--) {
						    if (z[k] && z[k].innerHTML.indexOf('var ') != -1 && document.getElementById('ytassetsjs') != null && document.getElementById('ytassetsjs').innerHTML.indexOf('var ') != -1) z[k].parentNode.removeChild(z[k])
						  }
						} else {
						    me.src = ''
						    if (document.getElementById('bm0').style.visibility == 'visible') switch_players();
						  }

						yt6.errcount = 0
						if (autoplay(false)) autoplay(true)
					    }

					    function decryption_failure(){
					      var z = gc('mejs-overlay-error');
					      if (z[0]) {
					        z[0][yt6.txt] = 'Video signature decryption failed!';
					        z[0].parentNode.style.setProperty('display','block','')
					      }
							//console.log('Boo!');

						var z = gc('ytassetsjs-0'); z = (z) ? z.length : 0
						if (typeof yt6.errcount == 'undefined') yt6.errcount = 0;
						yt6.errcount = yt6.errcount + parseInt(z);

						if (gc('yt6-proxy-error') && gc('yt6-proxy-error').length < proxies.length && yt6.errcount < proxies.length + 1) {// && !yt6.ytg
							ajax1(true);
							buildObject(window.ytplayer);
							redo_dl_button(  yt6.args,  yt6.html,  yt6.href);
							yt6.mep_up();
							yt6.mep_renew();
							/*if (autoplay(false) && yt6.player1 && typeof yt6.player1.play == 'function') {
							  yt6.player1.play()
							  var z = gclass('mejs-overlay-play')//mejs-playpause-button
							  if (typeof z[0] != 'undefined') z[0].style.display = 'none';//{ z[0].firstChild.click();z[0].firstChild.click(); }
							};*/
						} else {
						    var t4 = document.getElementById('test-4')
						    if (t4 != null && t4.innerHTML != ''){
						      var dls = document.getElementById('bm3')
						      if (dls) dls = dls.getElementsByTagName('a')
						      var z = t4.getElementsByTagName('a');
						      if (z) var lchk = getElementsByAttribute(document.getElementById('bm3'),'a','name',z[0].getAttribute('name'))[0]
						      if (z && lchk && z[0].getAttribute('href') != lchk.getAttribute('href').split('&title')[0]){
							for(k=0;k<z.length;k++){
							  if (z[k] && z[k].name && z[k].href && z[k].href.indexOf('signature=undefined') == -1) {
							    var qq = z[k].innerHTML
							    if (typeof qq.split(" ")[1] != 'undefined') { var x = " - " + qq.split(" ")[0] + " " + qq.split(" ")[2]; if (typeof qq.split("+")[1] != 'undefined') { var x = x + ' +' + qq.split("+")[1] } else { if (typeof qq.split(" ")[3] != 'undefined') { var x = x + ' ' + qq.split(" ")[3] }} } else var x = '';
							    yt6.linx[z[k].name] = z[k].href.split('https:').join('').split('http:').join('').split('&amp;').join('&')
							    var y = document.getElementById(mep_x('mep_') + '_sourcechooser_' + z[k].name)
							    if (y && y.tagName == 'INPUT') y.value = protocol() + yt6.linx[z[k].name]
							    if (dls) {
							      for(l=0;l<dls.length;l++){
								if (dls[l].name && dls[l].name == z[k].name) { dls[l].href = protocol() + yt6.linx[z[k].name] + '&title=' + escape(ytplayer.config.args.title + x);t4.setAttribute('name', z[k].name) }
							      }
							    }
								var dash = document.getElementById(mep_x('mep_') + '_sourcechooser_'+z[k].name)
								no_default(z[k].name);
								dash.setAttribute('checked','checked'); dash.time = '1'
								player1.setSrc(z[k].name);
							  } else {
								  me.src = ''
								  if (document.getElementById('bm0').style.visibility == 'visible') switch_players(); player().playVideo();
							    }
							};
							if (typeof t4.getAttribute('name') == 'number') {
							  //var z = gc('yt6-proxy-error')
		          				  //for (k=z.length;k>-1;k--) {
							  //  if (z[k]) z[k].parentNode.removeChild(z[k])
							  //}

							};
						      } else {
							  rewrite_links()
							}
						    }

						  }
					    }

					    if (yt6.retry < 5) { //typeof V[itag(me.src)] !== 'string'&& 
					      sauce[i].removeAttribute('checked'); sauce[i].checked = ''
					      var dash = document.getElementById(mep_x('mep_') + '_sourcechooser_242')//240p  VP9webm');
					      if (dash != null && yt6.current != 242) {
						no_default(242); yt6.retry++
						dash.setAttribute('checked','checked'); dash.checked = 'true'
						player1.setSrc(yt6.linx[242]);
						player1.load();
						if (autoplay(true)) player1.play();
					      } else {
						  var dash = document.getElementById(mep_x('mep_') + '_sourcechooser_133')//240p DASH mp4');
						  if (dash != null && yt6.current != 133) {
						    if (yt6.linx[133] && yt6.linx[133].indexOf('/yt_otf/') == -1) {//normal case
						      no_default(133); yt6.retry++
						      dash.setAttribute('checked','checked'); dash.checked = 'true'
						      player1.setSrc(yt6.linx[133]);
						      player1.load();
						      if (autoplay(true)) player1.play();
						    } else {//"otf" links
							var dash = document.getElementById(mep_x('mep_') + '_sourcechooser_134')//360p DASH mp4');
							if (dash != null && yt6.current != 134) {
							  no_default(134); yt6.retry++
							  dash.setAttribute('checked','checked'); dash.checked = 'true'
							  player1.setSrc(yt6.linx[134]);
							  player1.load();
							  if (autoplay(true)) player1.play();
							} else {
							    decryption_failure();
							  }
						      }
						  } else { decryption_failure(); }

						}
					    } else {
						decryption_failure();
						if (yt6.ytg && autoplay(false)) { me.src = ''; if (document.getElementById('bm0').style.visibility == 'visible') switch_players(); player().playVideo() }
					      };
					  }
					});
					addEL(me, 'loadedmetadata', function() {
					  yt6.retry = 0;
					  //gc('mejs-controls')[0].style = 'display: block; visibility: hidden;'
					  //console.log(yt6.userpref[0]+','+yt6.userpref[1]+','+yt6.userpref[2])
					  if (itag(me.src) && 1 * itag(me.src) != yt6.userpref[0]) { yt6.userpref.unshift(1 * itag(me.src)); delete yt6.userpref[20]; }
					  //console.log(yt6.userpref[0]+','+yt6.userpref[1]+','+yt6.userpref[2])
					  if (yt6.newvideo) { yt6.newvideo = true; } else { yt6.sync_timer = true }
					  var A = []; A = yt6.A_;
					  if (typeof A[itag(me.src)] == 'string') { yt6.player2.setSrc(me.src); yt6.player2.load() }
					  FireEvent( mep_x('mep_'), 'mouseover' );
					  if (gc('mejs-clear')[0]) gc('mejs-clear')[0].setAttribute('id','mejs-clear')
					  if (yt6.fullscreen) { me.style.width = '100%'; me.style.height = '100%'; me.style.left = '0px'; me.style.top = '0px'; } else {
					  var dw = document.getElementById('aspect');
					  if ((typeof this.videoWidth == 'number') && (typeof this.videoHeight == 'number')) {
					    document.getElementById('player1').width = this.videoWidth;  document.getElementById('player1').height = this.videoHeight;
					  }
					  if ( (me.offsetWidth == screen.width) || (me.offsetHeight == screen.height) ) {
					    //resize_layers( screen.width + 'px', screen.height + 'px' )
					  } else {
					      if (dw) {
						if (yt6.size == 'media') {
						  yt6.w = this.videoWidth + 'px'; document.getElementById('a_width').value = this.videoWidth
						  yt6.h = this.videoHeight + 'px'; document.getElementById('a_height').value = this.videoHeight
						  aspect('media'); resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false);
						} else resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px');
					      } else {
						  yt6.w = fix_Width()
						  yt6.h = fix_Height()
						  //yt6.tbg.style.backgroundColor = "transparent"
					          resize_layers( yt6.w, yt6.h );
					          //me.style.height = (yt6.h.replace('px','') - 30) + 'px';
					          //me.style.width = yt6.w
					        }
					    };
					  }//else fullscreen
					});
					addEL(me, 'loadeddata', function() {
					  me.loaded = true; yt6.sync_timer = 0;
					  if (yt6.newvideo) { yt6.newvideo = true; me.setCurrentTime(0) } else { if (yt6.ct) me.setCurrentTime(yt6.ct) };
					  //gc('mejs-controls')[0].style = 'display: block; visibility: hidden;'
					  if (yt6.speed) { player2.playbackRate = me.playbackRate = yt6.speed; document.getElementById('displaySpeed').innerHTML = "Speed " + Math.round(yt6.speed * 100) + "%" };
					  FireEvent( mep_x('mep_'), 'mouseover' );
					  if (gc('mejs-clear')[0]) gc('mejs-clear')[0].setAttribute('id','mejs-clear')
					  //yt6.newvideo = false;
					});
					addEL(me, 'play', function() {//console.log('1play')
					  var bn = gc('play yt-uix-button-text')[0];
					  if (bn) bn.innerHTML = 'pause'
					  var A = [], V = [], AV = [];
					  A = yt6.A_;
					  V = yt6.V_;
					  AV = yt6.A_V;
					  player2.playbackRate = me.playbackRate;
					  /*if (diff > parseFloat(0.3) && me.currentTime > 3) {
					    try { player2.currentTime = me.currentTime } catch(e) {}
					  };*/
					  if (  ((typeof AV[itag(me.src)] !== 'string') && 
						 (typeof A[itag(me.src)] !== 'string') && 
						 ((typeof V[itag(me.src)] === 'string') || (me.src.indexOf('itag=278') > -1)) 
						) || ((typeof srcto != 'undefined') && (Srcto == Audio)) 
					     )  {
						  player2.play(); 
						  if (typeof AV[itag(me.src)] !== 'string' && yt6.browser_tab == 'visible') {
						    $waitUntil(
						      function() { 
							yt6.diff = Math.abs(parseFloat(parseFloat(me.currentTime) - parseFloat(player2.currentTime)));//console.log(yt6.diff);console.log(yt6.sync_timer);
						        if (yt6.diff > parseFloat(0.3) && yt6.sync_timer < 8) { return true } else { if (yt6.newvideo) { me.play(); yt6.newvideo = false; me.play(); yt6.player2.media.currentTime = me.currentTime = 0; } else { yt6.sync_timer++ } }
						      },
						      function() { if (yt6.sync_timer > 5) yt6.sync_timer = 0; try { me.pause() ; Seek = 1; player2.currentTime = me.currentTime } catch(e) {} },50,1200)

						  }
						} else {
						    if ((me.src.slice(-2) == '&2') && (Seek != 4)) {
						      Seek = 4; player2.pause()
						    };
						    if ((me.src.replace('&ratebypass=yes','') === player2.src.replace('&ratebypass=yes',''))) {
						      Seek = 0; player2.pause()
						    }
					          };
					  if (Seek == 3 ) {Seek = null}
					});
					addEL(me, 'pause', function() {//console.log('1pause ' + Seek)
					  var bn = gc('play yt-uix-button-text')[0];
					  if (bn) bn.innerHTML = 'play'
					  if (typeof player2 != 'undefined') {
					    if (me.src.replace('&ratebypass=yes','') != player2.src.replace('&ratebypass=yes','')) {
					      if (Seek == 3) try { player2.pause() } catch(e) {};
					      //if (Seek === 0) { me.play() };
					      if (typeof AV[itag(me.src)] !== 'string' && Seek != 1 && me.playbackRate == player2.playbackRate) { yt6.player1.setCurrentTime(me.currentTime) } else player2.playbackRate = me.playbackRate;
					      try { player2.pause(); player2.currentTime = me.currentTime; if (me.loaded && player2.loaded && Seek == 0) Seek = null; } catch(e) {}
					    }
					  }
					});
					addEL(me, 'volumechange', function() {
					  if (me.src.replace('&ratebypass=yes','') != player2.src.replace('&ratebypass=yes','')) {
					    try { yt6.player2.setVolume( me.volume ) } catch(e) {};
					    if (me.muted) {
					      try { yt6.player2.setMuted(true) } catch(e) {}
					    } else try { yt6.player2.setMuted(false) } catch(e) {}
					  }
					});
					addEL(me, 'ended', function() {//console.log('video ends')
					  if (me.src.indexOf('source=yt_live_broadcast') == -1) {
					  if (player1.options.loop1) { 
					    try { yt6.player1.pause(); yt6.player2.pause(); Seek = 1;
					      yt6.player1.media.currentTime = me.currentTime = yt6.player2.media.currentTime = player2.currentTime = 0
					    } catch(e) {
					        yt6.player1.media.currentTime = me.currentTime = 0;
					      };
					    if (typeof AV[itag(me.src)] == 'string') me.play();
					    /*if (!isNaN(player2.duration)) {
					      player2.currentTime = player2.duration
					    }*/
					  } else {
					      Seek = 3; me.pause();
					      /*if ((player2.currentTime > 0) && (!isNaN(player2.duration))) {
					        player2.currentTime = player2.duration
					      };*/
					      if (autoplay(false)) {
					        if (!((typeof V[itag(me.src)] == 'string') && (player2.currentTime == 0)) ) {
					          var z = gclass('yt-uix-scroller-scroll-unit')
						  if (z && z[0]) {
						    //z[0].nextSibling.nextSibling.lastChild.previousSibling.click()
						    for(i=0;i<z.length;i++){
						      if (z[i] && z[i].getAttribute('class') && z[i].getAttribute('class').indexOf('currently-playing') != -1) {
							try { me.currentTime = player2.currentTime = 0 } catch(e) { me.currentTime = 0 };
							  if (z[i+1]) {
							    var y = z[i+1].children
							      for(j=0;j<y.length;j++){
							        if (y[j].getAttribute('href')) y[j].click()
							      }
							    };
							  }
							}
						  } else {
						      var z = document.getElementById('playlist') || gc('style-scope ytg-playlist-panel-renderer')[0]
						      if ((z && z.style.display != 'none') || (z && yt6.ytg)) {
						      var z = (!yt6.ytg) ? document.getElementsByTagName('YTD-PLAYLIST-PANEL-VIDEO-RENDERER') : gc('style-scope ytg-playlist-panel-video-renderer x-scope ytg-nav-endpoint-5');
						      if (z && z[0]) {
							var mix = gclass('flex style-scope ytd-playlist-panel-renderer x-scope ytd-menu-renderer-0');
							for(i=0;i<z.length;i++) {
							  if (z[i]) {
							    var zi = z[i].getElementsByTagName('A')[0]
							    if (zi && zi.getAttribute('href') != null) {
							      var x = zi.getAttribute('href').split('v=')[1].split('&')[0];
							      if (z[i].innerHTML.indexOf('>▶</span>') != -1 || (mix[0] && mix[0].hasAttribute('hidden') || z[i].parentNode.hasAttribute('selected')) && ytplayer.config.args.video_id == x ) {
								if (document.getElementById('bm0') && document.getElementById('bm0').style.visibility == 'visible') {
								  yt6.x = true
								} else {
								    yt6.x = false
								  }
								var y = (!yt6.ytg) ? zi.getAttribute('href').split('&index=')[1].split('&')[0] - 0 + 1 : zi.innerHTML.split('<span class="style-scope ytg-formatted-string">')[1].split('</span>')[0]; //console.log(typeof y + y);
								if (typeof y == 'number' || y == '▶') break;
							      }
							    }
							  }
							}
						        if (y) {
						          if (!yt6.ytg) {
							    var y = new RegExp('&index=' + y + '');//[^0-9]
							    for(i=0;i<z.length;i++) {
							       var zi = z[i].getElementsByTagName('A')[0]
							      //console.log('! '+zi.getAttribute('href') + y)
							      if (zi && zi.getAttribute('href') != null && zi.getAttribute('href').match(y) != null) {
							        //console.log(zi.getAttribute('href').match(y) + y + yt6.x);
							        try { me.currentTime = player2.currentTime = 0 } catch(e) { me.currentTime = 0 };
							        break
							      }
							    }; zi.click()
							  } else z[i+1].firstChild.click()
							} else {
							    //console.log('nextVideo')
							    player().nextVideo()
							  }
						      }
						    }
						    }//display: none
					        };
					      }
					    }
					  } else {//live broadcast
					      function resync_live(){
						me.src1 = me.src; me.src2 = player2.src;
						yt6.player2.setSrc(''); yt6.player1.setSrc('');
						yt6.player2.load(); yt6.player1.load();
						yt6.player2.setSrc(me.src2); yt6.player1.setSrc(yt6.player1.media.src1);
						yt6.player2.load(); yt6.player1.load();
						yt6.player1.play();
					      }
					      resync_live();
					    }
					});
					addEL(me, 'playing', function() {
					  if ( (me.src.slice(-2) == '&2') && (Srcto != Audio) )  {
					    player2.pause()
					  }
					});
					addEL(me, 'seeked', function() {//console.log('1seeked')
					  if ( ((me.src.slice(-2) !== '&2') && (me.src.replace('&ratebypass=yes','') != player2.src.replace('&ratebypass=yes',''))) || (Audio == Srcto) ) {
					    if (me.paused) {
					      yt6.player2.setCurrentTime( me.currentTime )
					    } else {
					        if (Seek != 3 && Seek != 0) {
						  Seek = 1; //case of seeking without hitting pause
						};
					        if (Audio == Srcto) { player2.currentTime = me.currentTime; }
					      };
					    if ((me.src.slice(-2) !== '&2') && (Math.abs(parseFloat(parseFloat(player2.currentTime) - parseFloat(me.currentTime))) > parseFloat(0.3))) {
					      me.pause();
					    }
					  }
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
		  success: function(me) {  $('#audio-type').html( me.pluginType);
					addEL(me, 'error', function() {//console.log('player2 error: ' + me.networkState + ', media type: "'+ me.canPlayType(me.type) + '"')
					  if (me.networkState == 1 || me.networkState == 3 && yt6.retry < 25) {
					    if (yt6.timer == 999999999 || me.src == window.location.href) { return void 0 };
					    yt6.retry++
					    yt6.player2.setSrc(me.src);
					    Seek = 1;
					    yt6.player2.load();
					    if (!yt6.player1.media.paused) {
						yt6.player1.pause()
						$waitUntil(function() { if (yt6.player1.media.paused) return true },
						function() { yt6.player1.play(); yt6.player1.play() },250,2500);
					    } else {
						Seek = 0;
						if (autoplay(false)) yt6.player1.play()
					      }
					  } else Seek = 0
/*					  if (me.networkState == 1) {
					    if (!yt6.player1.media.paused) Seek = 1
					    me.srco = me.src;
					    yt6.player2.media.removeAttribute('src');
					    yt6.player2.load();
					    yt6.player2.setSrc(me.srco);
					    yt6.player2.load();
					    delete me.srco;
					    //if (Seek == 1) {

					    //}
					  }*/
					});
					addEL(me, 'loadeddata', function() {//console.log('2loaded')
					  yt6.retry = 0;
					  if (Seek !== 2) { Seek = 1;
					   if (!player1.media.paused) yt6.player1.pause(); yt6.player2.media.currentTime = me.currentTime; //if (Seek == 0) yt6.player1.play()
					  } else { }
					  //Seek = 0;
					});
					addEL(me, 'seeked', function() {//console.log('2seeked')
					  if (yt6.player2.media.currentTime.toFixed(2) != player2.currentTime.toFixed(2)) {
					    player2.currentTime = yt6.player1.media.currentTime;
					  }
					  if (Seek == 1) {
					    Seek = null ;
					    if (typeof AV[itag(yt6.player1.media.src)] !== 'string' && yt6.browser_tab == 'visible') {
					      me.play(); $waitUntil(
						function(){ if (!yt6.player2.media.paused) return true },
						function(){ if (document.getElementById('bm0').style.visibility != 'hidden') { player1.play() } else { me.pause() }},5,1000)
					    }
					  } else {
					      if ( (!me.paused) && (player1.media.paused) && (document.getElementById('bm0').style.visibility != 'hidden') ) {
						player1.setCurrentTime( me.currentTime )
					      }
					    }
					});
					addEL(me, 'ended', function() {//console.log('audio ends')
					  if (player1.media.src.indexOf('source=yt_live_broadcast') == -1) {
					  if (player1.options.loop1) { 
					    try { yt6.player1.pause(); yt6.player2.pause(); Seek = 1;
					      yt6.player1.media.currentTime = me.currentTime = yt6.player2.media.currentTime = player2.currentTime = 0
					    } catch(e) {
					        yt6.player1.media.currentTime = me.currentTime = 0;
					      };
					  } else {
					      Seek = 3; me.pause(); player1.pause()
					      if (autoplay(false)) {
					        if (!((typeof V[itag(player1.media.src)] == 'string') && (player2.currentTime == 0)) ) {
					          var z = gclass('yt-uix-scroller-scroll-unit')
						  if (z && z[0]) {
						    //z[0].nextSibling.nextSibling.lastChild.previousSibling.click()
						    for(i=0;i<z.length;i++){
						      if (z[i] && z[i].getAttribute('class') && z[i].getAttribute('class').indexOf('currently-playing') != -1) {
							try { me.currentTime = player2.currentTime = 0 } catch(e) { me.currentTime = 0 };
							  if (z[i+1]) {
							    var y = z[i+1].children
							      for(j=0;j<y.length;j++){
							        if (y[j].getAttribute('href')) y[j].click()
							      }
							    };
							  }
							}
						  } else {
						      var z = document.getElementById('playlist') || gclass('style-scope ytg-playlist-panel-renderer')[0]
						      if ((z && z.style.display != 'none') || (z && yt6.ytg)) {
						      var z = (!yt6.ytg) ? document.getElementsByTagName('YTD-PLAYLIST-PANEL-VIDEO-RENDERER') : gclass('style-scope ytg-playlist-panel-video-renderer x-scope ytg-nav-endpoint-5');
						      if (z && z[0]) {
							var mix = gclass('flex style-scope ytd-playlist-panel-renderer x-scope ytd-menu-renderer-0');
							for(i=0;i<z.length;i++) {
							  if (z[i]) {
							    var zi = z[i].getElementsByTagName('A')[0]
							    if (zi && zi.getAttribute('href') != null) {
							      var x = zi.getAttribute('href').split('v=')[1].split('&')[0];
							      if (z[i].innerHTML.indexOf('>▶</span>') != -1 || (mix[0] && mix[0].hasAttribute('hidden') || z[i].parentNode.hasAttribute('selected')) && ytplayer.config.args.video_id == x ) {
								if (document.getElementById('bm0') && document.getElementById('bm0').style.visibility == 'visible') {
								  yt6.x = true
								} else {
								    yt6.x = false
								  }
								var y = (!yt6.ytg) ? zi.getAttribute('href').split('&index=')[1].split('&')[0] - 0 + 1 : zi.innerHTML.split('<span class="style-scope ytg-formatted-string">')[1].split('</span>')[0]; //console.log(typeof y + y);
								if (typeof y == 'number' || y == '▶') break;
							      }
							    }
							  }
							}
						        if (y) {
						          if (!yt6.ytg) {
							    var y = new RegExp('&index=' + y + '');//[^0-9]
							    for(i=0;i<z.length;i++) {
							       var zi = z[i].getElementsByTagName('A')[0]
							      //console.log('! '+zi.getAttribute('href') + y)
							      if (zi && zi.getAttribute('href') != null && zi.getAttribute('href').match(y) != null) {
							        //console.log(zi.getAttribute('href').match(y) + y + yt6.x);
							        try { me.currentTime = player2.currentTime = 0 } catch(e) { me.currentTime = 0 };
							        break
							      }
							    }; zi.click()
							  } else z[i+1].firstChild.click()
							} else {
							    //console.log('nextVideo')
							    player().nextVideo()
							  }
						      }
						    }
						    }//display: none
					        };
					      }
					    }
					  } else {//live broadcast
					      function resync_live(){
						player1.media.src1 = player1.media.src; me.src2 = me.src;
						yt6.player2.setSrc(''); yt6.player1.setSrc('');
						yt6.player2.load(); yt6.player1.load();
						yt6.player2.setSrc(me.src2); yt6.player1.setSrc(yt6.player1.media.src1);
						yt6.player2.load(); yt6.player1.load();
						yt6.player1.play();
					      }
					      resync_live();
					    }
					});
					addEL(me, 'pause', function() {//console.log('2pause')
					  if ( (typeof player().getPlayerState != 'function') || (document.getElementById('bm0').style.visibility != 'hidden') ) {
					  //console.log(Seek+ ' '+yt6.player1.media.currentTime + ' '+ player1.currentTime + ' '+yt6.player2.media.currentTime+' '+player2.currentTime)
					    if (yt6.player2.media.currentTime != player2.currentTime) { player2.pause(); }
					    if (!player1.media.paused) { me.pause() }
					    if (Seek == 4) { Seek = null; player1.play() } else player1.pause(); 
					    if (Seek == 2) { Seek = null };
 					  } else {
					      if ( (typeof player().getPlayerState == 'function') && (document.getElementById('bm0').style.visibility == 'hidden') ) me.pause();
					    }
					});
					addEL(me, 'play', function() {//console.log('2play')
					  /*if (yt6.player2.media.currentTime.toFixed(2) != player2.currentTime.toFixed(2)) {
					    me.pause(); player2.currentTime = yt6.player1.media.currentTime;
					    Seek = 1; if (document.getElementById('bm0').style.visibility != 'hidden') yt6.player1.play()
					  }*/
					  Seek = 2 ;var player1_src = document.getElementById('player1').getAttribute('src').replace('&ratebypass=yes','');
					  if ( (player1_src.slice(-2) == '&2') && (document.getElementById('bm0').style.visibility != 'hidden') ) {
					    Seek = 4; me.pause(); player1.play()
					  };
					  if (document.getElementById('bm0').style.visibility != 'hidden') {
					    if (me.src.replace('&ratebypass=yes','') != player1_src) {
					      //console.log(Seek+ ' '+yt6.player1.media.currentTime + ' '+ player1.currentTime + ' '+yt6.player2.media.currentTime+' '+player2.currentTime + yt6.player1.media.paused + yt6.player2.media.paused + player2.paused)
					      if (!(yt6.player1.media.paused)) {
					        player1.play()
					      } else {
					          //if (document.getElementById('bm0').style.visibility != 'hidden') {
					            Seek = 1; yt6.player1.pause();// yt6.player1.media.currentTime = me.currentTime
					          //}
					        }
					    } else me.pause()
					  }
					});
		}});
} else {
		$('#player2').mediaelementplayer({
		  enableKeyboard: false,
		  enableAutosize: false,
		  pauseOtherPlayers: false,
		  autoRewind: false,
		  features: ['',],
		  audioWidth: 1, audioHeight: 1,
		  success: function(me) {  $('#audio-type').html( me.pluginType);
					addEL(me, 'seeked', function() {
					  if (Seek == 1) {
					    Seek = null ;  player1.play()
					  } else {
					      if (!me.paused) {
						player1.setCurrentTime( me.currentTime )
					      }
					    }
					});
					addEL(me, 'ended', function() {
					  if (player1.options.loop1) {
					    Seek = 1; me.currentTime = 0;
					  } else {
					      Seek = 3; me.currentTime = 0;
					      if ((autoplay(false)) && (document.getElementById('player1').currentTime < document.getElementById('player1').duration)) {

					      }
					    }
					});
					addEL(me, 'pause', function() {
					  if (Seek == 2) { Seek = null };
					  if (!player1.paused) { player1.pause() }
					});
					addEL(me, 'play', function() {
					  Seek = 2;
					  if ( (!player1.playing) && ( ((typeof player().getPlayerState != 'function') && (flashvars == null)) || ((document.getElementById('bm0').style.visibility != 'hidden') && (flashvars != null)) ) )    {
					  	  player1.play()
						}
					});
					addEL(me, 'loadeddata', function() {
					  if (Seek !== 2) {
					    Seek = 0; player1.pause()
					  } else { }
					});
		}});
}//player2


    var poster_click = function(){
      var k = gclass('mejs-playpause-button')
      if (typeof k[0] != 'undefined') { k[0].firstChild.click() }
    }

    var z = gc('mejs-layer mejs-poster')
    if (typeof z[0] != 'undefined') {
      removeEL(z[0], 'click', poster_click, false)
      addEL(z[0], 'click', poster_click, false)
    }

var me_flash_ = getElementsByAttribute(document,"embed","name",mep_x("me_flash_")) ; 
if (me_flash_[0] != undefined) {
  me_flash_[0].parentNode.setAttribute('style','left: 0px; top: 0px;')
  $waitUntil(function(){ if (typeof gclass("mejs-overlay-play")[0] == "object") return true },
  function(){
    yt6.mep_renew()
    //gc('mejs-poster mejs-layer')[0].setAttribute('id','mejs-poster')
    //resize_layers( yt6.w, yt6.h );
  })
  set_controls()
} else {
    yt6.mep_renew()
    //resize_layers( yt6.w, yt6.h );
  }

//if (typeof yt6.fnCheckLocation != 'number') {}; autoplay() 

}//mep_run



yt6.mep_up = function() {

var cw = document.getElementById("bm0");//document.querySelector('#bm0');
/*
if (cw != null) {
  if (typeof player1 == 'object') { if (typeof player1.remove == 'function') { try { player1.remove(); //player1 = null
 } catch (e){} }}
  if (typeof player2 == 'object') { if (typeof player2.remove == 'function') { try { player2.remove(); //player2 = null
 } catch (e){} }}
  cw.parentNode.removeChild(cw)
}
*/

//document.cookie="VISITOR_INFO1_LIVE=Qa1hUZu3gtk;path=/;domain=.youtube.com";
//JeHnI4pp768
//if (!cw) {
    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
      var z = z.firstChild;
    }

    //if (z.getAttribute('id') != 'player') {
      var y = z.currentStyle || window.getComputedStyle(z, null)
function nop(){//    } else {
	var y = {};
	y.width = z.offsetWidth + 'px';
	y.height = z.offsetHeight + 'px';
	y.left = z.offsetLeft + 'px';
	y.top = z.offsetTop + 'px';
      }

  if (z.getAttribute('id') != 'player') {
    yt6.hdiff = parseInt( y.height.replace('px','') - ((y.height.replace('px','') / 60 >> 0) * 60) ); 
    var hdiff = yt6.hdiff
    if (hdiff == undefined) hdiff = 30
  } else var hdiff = 0

  yt6.w = fix_Width() || y.width
  yt6.h = fix_Height() || y.height
  //if (!yt6.size || yt6.size == 'default') yt6.tbg.style.backgroundColor = "transparent"
/*
  if (yt6.w == '0px' && yt6.h == '0px' && yt6.ytg) {
    yt6.w = document.getElementById('player-container').style.width
    yt6.h = document.getElementById('player-container').style.height
  }
*/
  var w = yt6.w
  var h = yt6.h

  if (document.getElementById('bm0') == null) {  
  //if (document.getElementById('bm0') != null) { document.getElementById('bm0').parentNode.removeChild(document.getElementById('bm0')) }
  var cw = document.createElement('div');
  cw.id = 'bm0';
  player().parentNode.insertBefore(cw, player().nextSibling);
  document.getElementById('bm0').setAttribute('style','background-color: rgb(16, 16, 16); width: '+w+'; height: '+h+'; top:0px; overflow: hidden;visibility:hidden;');
  document.getElementById('bm0').setAttribute('class','html5-video-content');
  document.getElementById('movie_player').setAttribute('wmode','window');

    var js = document.createElement('video');
    js.id = 'player1';
    document.getElementById('bm0').appendChild(js);
    js.init = video_id()[0]
    js.setAttribute('width',Math.round(parseInt(h.replace('px','') - hdiff) * yt6.aspect_ratio));
    js.setAttribute('height', (h.replace('px','') - hdiff));
    js.setAttribute('controls','controls');
    js.setAttribute('preload',"none");    
  if (typeof gc('video-stream html5-main-video')[1] === 'undefined') {
    document.getElementById('player1').setAttribute('class','video-stream html5-main-video')
    document.getElementById('player1').style.zIndex = "0";
  }

  } else {//bm0 == null
	  var z = document.getElementById("player1").getElementsByTagName('source');
	  while (z.length > 0){
		document.getElementById("player1").removeChild(z[0]);
	  }
    }

//if (player() != null){
  if (typeof webm != 'undefined') {
  var js = document.createElement('source');
  js.id = '43';
  js.src = webm;
  js.type = 'video/webm';
  js.title = qual[43].replace("WebM","");;
  document.getElementById('player1').appendChild(js);
}

var A = [],V = [],AV = [];    var linx = []; linx = yt6.linx;  var html = []; html = yt6.html; 
if (typeof linx[160] === 'string') { linx.splice(132, 1, linx[160])}
  for (i=0;i<linx.length;i++) {
    if (linx[i]) {
      var js = document.createElement('source')
      js.name = i
      if (typeof qual[i] != 'undefined') {
        if (i < 103) {
          AV[i] = "itag=" + i
          if (qual[i].indexOf('WebM') != -1) { js.type = 'video/webm'; js.title = qual[i].replace("WebM","")} 
          if (qual[i].indexOf('MP4') != -1) { js.type = 'video/mp4'; js.title = qual[i].replace("MP4","")}
          if (qual[i].indexOf('FLV') != -1) { js.type = 'video/x-flv'; js.title = qual[i]}
          if (qual[i].indexOf('3GP') != -1) { js.type = 'video/3gp'; js.title = qual[i]}
        }
        if (qual[i].indexOf("DASH") > -1) {
          js.type = 'video/mp4'
          if (qual[i].indexOf("AAC") === -1) {
            js.title = qual[i].replace("H.264",""); V[i] = "itag=" + i
          } else {
              js.title = qual[i].replace("DASH",""); A[i] = "itag=" + i
            }
        };
        if ((i > 102) && (qual[i].indexOf("WebM") > -1)) {
          js.title = qual[i].replace("WebM","")
          if ((qual[i].indexOf("Vorbis") === -1) && (qual[i].indexOf("Opus") === -1)) {
            js.type = 'video/webm'; V[i] = "itag=" + i
          } else {
              js.type = 'audio/webm'; A[i] = "itag=" + i
            }
        }
      } else {
      	  js.type = 'video/mp4'; js.title = i
      	}

      if (typeof webm != 'undefined') {
        if ((linx[i].split('//')[1] != webm.split('//')[1]) && (i != 160)) {
          js.src = 'https:' + linx[i]
          document.getElementById('player1').appendChild(js)
        }
      } else {
          if (i != 160) {
            js.src = 'https:' + linx[i]
            document.getElementById('player1').appendChild(js)
          }
        }
      delete js
    }
  }

  if (linx.length == 0) {//set up dummy sources on pages where no sources could be acquired
    var k = ['video/mp4','video/webm']
    for (i=0;i<k.length;i++) {
      var js = document.createElement('source')
      js.type = k[i]
      js.src = ''
      js.name = '0'
      document.getElementById('player1').appendChild(js)
    }
  }

yt6.A_ = A
yt6.V_ = V
yt6.A_V = AV

var k = document.getElementsByTagName('track')
for (i=k.length-1;i>-1;i--) {
  if ((typeof k[i] != 'undefined') && (k[i].getAttribute('kind') == 'subtitles')) k[i].parentNode.removeChild(k[i])
}


if ((unescape(ytplayer.config.args.ttsurl) != 'undefined')) {
for(k=1;k<ytplayer.config.args.ttsurl.length;k++){
var sref = unescape(ytplayer.config.args.ttsurl[k]) + '&type=list&tlangs=1&fmts=0&asrs=1';
  //      sref += '&type=track&lang=en&name&kind&fmt=1';
  //      sref += '&type=list&tlangs=1&fmts=0&asrs=1';
  var xhr1 = new XMLHttpRequest();
  xhr1.open('get', sref, false);
  xhr1.send('');
  var tts = parseXml(xhr1.responseText);
  var tracks = [];
  
  var lang_codeA = window.navigator.userLanguage || window.navigator.language
  if (lang_codeA) { lang_codeA = lang_codeA.toLowerCase() }
    if (typeof gc("content-region")[0] != 'undefined') {
      try {
        var tlang_codeA = gc("content-region")[0][yt6.txt] || getElementsByAttribute(document,"span","class","content-region")[0][yt6.txt]
        if (tlang_codeA) { tlang_codeA = tlang_codeA.toLowerCase() }
      } catch(e){}
    }
    var tlang_codeA = lang_codeA + ',' + tlang_codeA + ',' + yt6.add_subs; tlang_codeA = tlang_codeA.split(",")//',hu,en,nl,fr,de,it,ja,ko,pt,ru,es';
    //var lang_codeA = sref.split("&asr_langs=")[1];
    //if (lang_codeA) { lang_codeA = lang_codeA.toLowerCase().split("&")[0].split(","); var tlang_codeA = tlang_codeA.concat( lang_codeA ) };//alert(tlang_codeA)

  var lang_codeA = [];
  var text = tts.getElementsByTagName("track");var b
//  for (b=k-1;b<text.length;b++)
//    {
    var surl = "";
    if (typeof text[k-1] == 'undefined') break
    var lang_code = text[k-1].getAttribute('lang_code'); if ((lang_code) && (lang_code != 'null')) { surl += '&lang=' + lang_code; };
    var name = text[k-1].getAttribute('name'); if ((name) && (name != 'null')) { surl += '&name=' + name } else { surl += '&name' };
    var kind = text[k-1].getAttribute('kind'); if ((kind) && (kind != 'null')) { surl += '&kind=' + kind } else { surl += '&kind' };
//if ((typeof slang == 'undefined') && ((kind != 'asr') || (text.length == b+1)) ) {
    var slang = lang_code; var slangurl = surl;
// }
    var lang_default = text[k-1].getAttribute('lang_default'); if ((lang_default) && (lang_default != 'null')) { surl += '&type=track&fmt=1' };// var track = surl ;var lang_def = lang_code; if (kind != 'asr') { var slang = lang_code; var slangurl = surl } };
    var id = text[k-1].getAttribute('id'); if ((id) && (id != 'null')) { tracks[id] = surl; lang_codeA[id] = lang_code };

  //if (!lang_def) { var a=0; do { if ((!track) && (typeof tracks[a] != "undefined")) { var track = tracks[a]}; a++; } while (a<160)};

//function translate(){
if (k < 4) {
 if (!((text.length > 2) && (kind) && (kind == 'asr'))){
  var ttext = tts.getElementsByTagName("target");var c
  for (c=0;c<ttext.length;c++)
    {
    //if (slang === null) break
    var surl = "";
    var lang_code = ttext[c].getAttribute('lang_code'); if ((tlang_codeA.indexOf(lang_code) === -1) || (lang_code === slang)) continue; if ((lang_code) && (lang_code != 'null')) { surl += slangurl + '&tlang=' + lang_code };
    //var name = ttext[c].getAttribute('name'); if ((name) && (name != 'null')) { surl += '&name=' + name } else { surl += '&name' };
    //var kind = ttext[c].getAttribute('kind'); if ((kind) && (kind != 'null')) { surl += '&kind=' + kind } else { surl += '&kind' };
    var id = ttext[c].getAttribute('id'); if ((id) && (id != 'null')) { if (typeof lang_codeA[id] != 'undefined') { id = parseInt(id) + 1000 }; tracks[id] = surl; lang_codeA[id] = lang_code };
    //var lang_default = ttext[c].getAttribute('lang_default'); if ((lang_default) && (lang_default != 'null')) { surl += '&type=track&fmt=1'; var track = surl ;var lang_def = lang_code };
    }
  //if (!lang_def) { var a=0; do { if ((!track) && (typeof tracks[a] != "undefined")) { var track = tracks[a]}; a++; } while (a<160)};
 }
} 
//}//translate

//    }//for(b

//    html.push(
//      '<a href="' + sref +'">CC</a>'
//    );


  for (i in tracks) {
    if (tracks[i] != '') {
      sref = unescape(ytplayer.config.args.ttsurl[k]) + tracks[i];
      var js = document.createElement('track');
      js.id = 'captions-' + i;
      document.getElementById('player1').appendChild(js);
      if (typeof sref != 'undefined') {
	js.setAttribute('kind','subtitles');
	js.setAttribute('title',slang)
	js.setAttribute('srclang',lang_codeA[i])
	js.setAttribute('src',sref)
      }
    }
  }
}//for
  var k = document.getElementsByTagName('track')
  if ((typeof k[0] != 'undefined') && (k[0].getAttribute('kind') == 'subtitles')){
    var x = 0
    for(i=k.length-1;i>-1;i--){
      if (k[i+x].getAttribute('title') == k[i+x].getAttribute('srclang')){
	var js = document.createElement('track');
	js.id = k[i+x].getAttribute('id');
        document.getElementById('player1').insertBefore(js,document.getElementById('player1').firstChild);
	js.setAttribute('kind','subtitles')
	js.setAttribute('title',k[i+x+1].getAttribute('title'))
	js.setAttribute('aria-label',k[i+x+1].getAttribute('srclang'))
	js.setAttribute('srclang',k[i+x+1].getAttribute('srclang'))
	js.setAttribute('src',k[i+x+1].getAttribute('src'))
	k[i+x+1].setAttribute('class','remove-tracks')
	var x = 1
      } else var x = 0
    }
    var k = gc('remove-tracks');
    while (k[0]) { k[0].parentNode.removeChild(k[0]);  }

    var k = document.getElementsByTagName('track')
    var x = 0
    for(i=k.length-1;i>-1;--i){
      if (k[i+x].getAttribute('src').indexOf('&type=track&fmt=1') > -1){
	var js = document.createElement('track');
	js.id = k[i+x].getAttribute('id');
        document.getElementById('player1').insertBefore(js,document.getElementById('player1').firstChild);
	js.setAttribute('kind','subtitles')
	js.setAttribute('title',k[i+x+1].getAttribute('title'))
	js.setAttribute('aria-label',k[i+x+1].getAttribute('srclang'))
	js.setAttribute('srclang',k[i+x+1].getAttribute('srclang'))
	js.setAttribute('src',k[i+x+1].getAttribute('src'))
	k[i+x+1].setAttribute('class','remove-tracks')
	var x = 1
      } else var x = 0
    }
    var k = gc('remove-tracks');
    while (k[0]) { k[0].parentNode.removeChild(k[0]);  }

  }
} else { var sref = null; var tracks = null }
//}//player_null

  var js = getElementsByAttribute(document.getElementById("player-api"),"object","name","me_flash");
  if (typeof js[0] == 'undefined') {
    var js = document.createElement('object');
    js.id = 'me_flash';
    //js.src = protocol() + "//cdn.rawgit.com/snarly/yt6/8adc04ba0f5099fdc6f0de0e2a5c966611b389fb/flashmediaelement-cdn.swf";
    js.title = "Adobe Flash Player";
    document.getElementById('player1').appendChild(js);
    js.setAttribute("name","me_flash");
    js.setAttribute("play","true");
    js.setAttribute("loop","false");
    js.setAttribute("quality","high");
    js.setAttribute("bgcolor","#000000");
    js.setAttribute("allowscriptaccess","always");
    js.setAttribute("allowfullscreen","true");
    js.setAttribute("type","application/x-shockwave-flash");
    js.setAttribute("pluginspage","//www.macromedia.com/go/getflashplayer");
    js.setAttribute("src", protocol() + "//cdn.rawgit.com/johndyer/mediaelement/8adf73f1a2bec0b6867f83917ce8c491d01c1aa9/build/flashmediaelement-cdn.swf");
    //js.setAttribute("flashvars","id=me_flash&amp;isvideo=true&amp;autoplay=false&amp;preload=none&amp;width="+yt6.w.replace('px','')+"&amp;startvolume=0.8&amp;timerrate=250&amp;flashstreamer=&amp;height="+yt6.h.replace('px','')+"&amp;pseudostreamstart=start&amp;file=" + encodeURIComponent(protocol() + yt6.linx[18]) );
    js.setAttribute("width",yt6.w.replace('px',''));
    js.setAttribute("height",yt6.h.replace('px',''));
    js.setAttribute("scale","default");
    js.setAttribute("class","mejs-shim");

    js.setAttribute("data","//cdn.rawgit.com/johndyer/mediaelement/8adf73f1a2bec0b6867f83917ce8c491d01c1aa9/build/flashmediaelement-cdn.swf")
                    //<!-- Image as a last resort -->
                    //<img src="myvideo.jpg" width="320" height="240" title="No video playback capabilities" />

  }//js[0]

  var js = getElementsByAttribute(document.getElementById("player-api"),"object","name","me_flash");
  if (typeof js[0] != 'undefined') {
    var z = document.createElement('param')
    z.name = 'movie'
    z.value = '//cdn.rawgit.com/johndyer/mediaelement/8adf73f1a2bec0b6867f83917ce8c491d01c1aa9/build/flashmediaelement-cdn.swf'
    js[0].appendChild(z)
    z.name = 'flashvars'
    z.value = 'thumb=' + encodeURIComponent(getPoster()) + '&controls=true&file=' + encodeURIComponent(protocol() + yt6.linx[18]) ;
    js[0].appendChild(z)
    if (yt6.txt == 'innerText') js[0].style.display = 'none'
    document.getElementById('bm0').style.visibility = 'hidden'
    player().style.visibility = 'visible'
  }

  var js = getElementsByAttribute(document.getElementById("player"),"embed","name",mep_x("me_flash_"));
  if (typeof js[0] != 'undefined') {
    var x = js[0].getAttribute("flashvars");
    if (typeof x == "string") {
      js[0].setAttribute("flashvars", x.split("&file=")[0] + "&file=" + encodeURIComponent(yt6.linx[18]));
    }
  }

if (!document.getElementById('audio-hide')) {
    var js = document.createElement('div');
    js.id = 'audio-hide';
    //js.style = "display: none;visibility: hidden";
    document.getElementById('bm0').appendChild(js);
    js.setAttribute('style',"display: none; visibility: hidden");

   
    delete js;
    var js = document.createElement('audio');
    js.id = 'player2';
    js.preload = "none";
    document.getElementById('audio-hide').appendChild(js);
    //js.setAttribute('preload',"none");

    delete js;
    var js = document.createElement('source');
    js.id = "no.2";
    //js.preload = "none";


if ( (location.href.indexOf("aC4BC-Hxq9g_muted") != -1 )  ) {
  if (!srcto) {
//    xhr.open('get', 'https://cors-anywhere.herokuapp.com/https://' + unescape("%67%6F%6F%2E%67%6C%2F%72%67%6B%4D%6A%41"), false);
//    xhr.send();
//    var srcto = xhr.responseText;
//    var fcnm = srcto.match(/action=([^(]+)/)[1].split("\"")[1]
//    xhr.open('get', 'https://cors-anywhere.herokuapp.com/http://tinyurl.com/api-create.php?url=' + fcnm, false);
//    xhr.send();
//    var srcto = xhr.responseText.replace('http://','https://');
    //var srcto = protocol() + unescape('%2F%2F%67%6F%6F%2E%67%6C%2F%62%32%73%52%4E%69');//%68%74%74%70%73%3A
    //var audio = 'https:' + srcto.replace('http:', '').replace('https:', '')
    var srcto = unescape('%68%74%74%70%73%3A%2F%2F%64%72%69%76%65%2E%67%6F%6F%67%6C%65%2E%63%6F%6D%2F%75%63%3F%65%78%70%6F%72%74%3D%64%6F%77%6E%6C%6F%61%64%26%69%64%3D%30%42%32%37%61%48%69%6C%4F%47%6E%76%35%53%6B%64%6D%63%58%52%55%65%6E%4A%35%64%55%30');var audio = srcto
    document.getElementById('player2').preload = "auto";
  }
}





    document.getElementById('player2').appendChild(js);
    delete js;
    document.getElementById('no.2').setAttribute('style',"display: none; visibility: hidden");
}//audio-hide


    if ((document.getElementById('player2').parentNode) && (document.getElementById('player2').parentNode.getAttribute('class') == 'mejs-mediaelement')) document.getElementById('player2').src = yt6.audio;
    document.getElementById('no.2').src = yt6.audio;
    if (navigator.userAgent.match(/Edge\/\d+/) == null && navigator.userAgent.match(/MSIE /) == null && navigator.userAgent.match(/Trident\//) == null) {
      //document.getElementById('player2').type = "audio/ogg";
      document.getElementById('no.2').type = "audio/ogg";
    } else {
	//document.getElementById('player2').type = "audio/mp4";
	document.getElementById('no.2').type = "audio/mp4";
      }


if (document.getElementById('mep_init') == null) {


    var js = document.createElement('script');
    js.id = "mep_init";
    //document.getElementById('video-hide').appendChild(js)

    var code = "$waitUntil(function(){ if (typeof jQuery == 'function') { return true } else {  }},\
		  function() { jQuery(document).ready(function($) {\
		    $('#version').html( mejs.version);" + mep_run.toString().replace("function mep_run() {",'') + 			    ") },200,5000)";//!!!function_body.toString() -> "() {" may insert a white space there!!!

    try {
      js.appendChild(document.createTextNode(code));
      document.getElementById('video-hide').appendChild(js);
    } catch (e) {
         try {
	   js.text = code;
	   document.getElementById('video-hide').appendChild(js);
	   set_controls()
	 } catch (e) {}
    }


} else {//mep_init

  }

if (yt6.osw.getAttribute('id') != 'player') {
  var z = getElementsByAttribute(document,"a","onclick")
} else var z = getElementsByAttribute(document,"a","class","style-scope yt-formatted-string x-scope yt-endpoint-2")
for(i = 0;i<z.length-1;i++){ 
 if (z[i] != undefined) {
  var timecode = z[i].getAttribute('onclick') || z[i].getAttribute('href')
  if (timecode != null && timecode.indexOf('yt.www.watch.player.seekTo\(') != -1) {
    z[i].setAttribute("onclick", "if ( (player1) && (player1.currentTime) && (document.getElementById('bm0').style.visibility === 'visible')) { player1.currentTime = " + timecode.split('player.seekTo\(')[1].split('\)')[0] + " } else { " + timecode.split('\;')[0] + " };" + timecode.split('\;')[1] + "\;")
  }
  if (timecode.split('&t=')[1] && z[i].getAttribute('href') && z[i].getAttribute('href').indexOf("/watch?v=" + window.ytplayer.config.args.video_id + "&t=") != -1) {
    z[i].setAttribute("onclick", "if ( (player1) && (player1.currentTime) && (document.getElementById('bm0').style.visibility === 'visible')) { player1.currentTime = " + timecode.split('&t=')[1].split('s')[0] + " }")
  }
 }
}

  var z = gclass('ad-container-single-media-element-annotations')
  if ((typeof z[0] != 'undefined') && (z[0].style.display != 'none')) {
    z[0].style.display = 'none';
    var z = gc('caption-window ytp-caption-window-bottom')
    if (typeof z[0] != 'undefined') z[0].marginBottom = '49px'
  }

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
      var z = z.firstChild;
    }

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
      var z = z.firstChild;
    }

//aspect();aspect(); 

//header clean up
var z = gc('yt-consent yt-consent-banner clearfix')
if (typeof z[0] != 'undefined') { z[0].setAttribute('style','display: none') }
var z = gc('style-scope ytd-masthead x-scope ytd-consent-bump-renderer-0')
if (typeof z[0] != 'undefined') { z[0].setAttribute('hidden','') };//style = 'display: none'

//var z = document.getElementById('masthead-positioner-height-offset')
//if (z != null) z.style = 'height:50px'

if (document.getElementById('bm4')) document.getElementById('bm4').style.display = 'inline-block';
if (yt6.wna) yt6.wna.style.display = ''

var z = gc('yt-masthead-logo-container')
if (z[0]) {
  var z = z[0]
} else {
    var z = document.getElementById('logo');
    if (z == null) {
      var z = document.getElementById('home-button');
      if (z) {
	z = z.parentNode
      } else throw 'YouTube layout mismatch';
    }
  }

if (gclass('doodle')[0]) {
  var z = document.getElementById('logo-container') || document.getElementById('logo') || document.getElementById('home-button').parentNode;
  z.setAttribute('style','width:88px');
}

var z = document.getElementById('bm3')
if (z) z.style.top = yt6.mhp.offsetHeight + 2 + 'px'

var z = yt6.body.getAttribute('class')
if (z && z.indexOf('yt-dialog-active')) yt6.body.setAttribute('class', z.replace('yt-dialog-active',''))


var z = document.getElementById('yt-consent-dialog')
if (z) z.style.display = 'none'

//autoplay()

//alert(typeof player().getAttribute('flashvars') + typeof player().getPlayerState + document.getElementById(mep_x("mep_")) )
//}//cw

  if (yt6.mhp && yt6.mhp.id == 'masthead-positioner' && yt6.mhp.style.position == 'static') yt6.mhp.style.position = '';
  if (player() && player().tagName == 'EMBED' && player().getAttribute('src') == '') { player().setAttribute('src','https://s.ytimg.com/yts/swfbin/player-' + yt6.swfbin4 + '/watch_as3.swf') }

  if ( player() && (typeof player().getAttribute('flashvars') == 'string') && (typeof player().getPlayerState != 'function') && (document.getElementById(mep_x("mep_")) == null)) {

    $waitUntil(
      function(){
        if (yt6 != null && player() != null && document.getElementById('me_flash') != null) { if ((typeof document.getElementById('movie_player').getPlayerState == 'function') && (typeof document.getElementById('me_flash').playMedia == 'function')) { return true } //else { if (document.getElementById('eow-title').style.display != 'none') { document.getElementById('eow-title').setAttribute('style','display:none') } else { document.getElementById('eow-title').innerHTML = '1'+typeof document.getElementById('movie_player').getPlayerState+typeof document.getElementById('me_flash').playMedia; document.getElementById('eow-title').setAttribute('style','display:block') } }
      }// else { return true }
      },
      function(){
	yt6.bup = document.getElementById('me_flash').cloneNode(true);
	mep_run();
	if (typeof document.getElementById('me_flash').playMedia != 'function') {
	  document.getElementById('me_flash').parentNode.appendChild(yt6.bup)
	  document.getElementById('me_flash').parentNode.removeChild(document.getElementById('me_flash'))
	  yt6.bup = null;
	}
	removeEL(player(), "onStateChange", Sync, false);
	addEL(player(), "onStateChange", Sync, false);
      },500,10000
    )
  } else {
	removeEL(player(), "onStateChange", Sync, false);
	addEL(player(), "onStateChange", Sync, false);//html5 ytplayer!!!
	//yt6.size = 'default'
    }

fix_playlist()

}//mep_up

    var jq1 = function() {/*
      var jq2 = function() {
        var jq3 = function() {
//          var jq4 = function() {
            var jq5 = function() {

yt6.mep_up();
            };
            loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/90c833e40a485c77fb393aa91c4c9b8817067172/mep-feature-speed.js",jq5)

//          };
//          loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/f684d6c92fc170be45129a7f2c12069689fcc0b0/mep-feature-playlist.js",jq4)

        };
        loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/49c8440ad31e83bf6d9f0951a83020cc730399d4/mep-feature-loop.js",jq3)

      };
      loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/1b69efe5d367952c307eaf7ca70ca1074ddd1c1a/mep-feature-sourcechooser.js",jq2)
*/



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
					player.addSourceButton(src.src, src.title, src.type, media.src == src.src,  src.name);
				}
			}

		},

		addSourceButton: function(src, label, type, isCurrent, itag) {
			var t = this;
			if (label === '' || label == undefined) {
				label = src;
			}
			type = type.split('/')[1];
if (!t.sourcechooserButton) {//console.log('error')
  var z = gc('me-cannotplay');
  if (z[0]) {
    z[0].parentNode.removeChild(z[0])
    ageless_verification();
    yt6.mep_up();
    mep_run();
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
				loop = 
				$('<div class="mejs-button mejs-loop-button ' + ((player.options.loop) ? 'mejs-loop-on' : 'mejs-loop-off') + '">' +
					'<button type="button" aria-controls="' + t.id + '" title="Toggle Loop" aria-label="Toggle Loop"></button>' +
				'</div>')
				// append it to the toolbar
				.appendTo(controls)
				// add a click toggle event
				.click(function() {
					player.options.loop1 = !player.options.loop1;
					if (player.options.loop1) {
						loop.removeClass('mejs-loop-off').addClass('mejs-loop-on');
					} else {
						loop.removeClass('mejs-loop-on').addClass('mejs-loop-off');
					}
				});
		}
	});
	
})(mejs.$);

(function($) {

    $.extend(mejs.MepDefaults, {

	speedText: 'Playback Speed',

        fasterText: 'Speed Up',

        slowerText: 'Slow Down',

	speeds: ['8x', '4x', '3x', '2x', '1.5x', 'NTSC to PAL', 'Normal', 'PAL to NTSC', '0.5x'],

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
//display-playback-speed
		html = '<div class="mejs-button mejs-speed-button"><div id="displaySpeed" style="width: 34px; padding: 2px 2px 2px 2px; color: white;">Speed 100%</div>' + 
								'<button type="button" aria-label="' + t.options.speedText + '" title="' + t.options.speedText + '">' + t.options.defaultSpeed + t.options.speedChar + '</button>' + 
								'<div class="mejs-speed-selector">' + 
								'<ul>';
				
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
		html += '</ul></div></div>';

		speedButton = $(html).appendTo(controls)
					// hover
					.hover(function() {
						$(this).find('.mejs-speed-selector').css('visibility','visible');
					}, function() {
						$(this).find('.mejs-speed-selector').css('visibility','hidden');
					})
		speedSelector = speedButton.find('.mejs-speed-selector');
		playbackspeed = t.options.defaultSpeed;

		speedSelector
			.on('click', 'input[type="radio"]', function() {
				var newSpeed = $(this).attr('value');
				if (newSpeed == 'NTSC to PAL') newSpeed = parseFloat(parseFloat(25 - parseFloat(24000/1001)) / parseFloat(24000/1001) + 1).toFixed(11)
				if (newSpeed == 'PAL to NTSC') newSpeed = parseFloat(parseFloat(parseFloat(24000/1001) - 25) / 25 + 1).toFixed(11) 
				if (newSpeed == 'Normal') newSpeed = 1
				playbackspeed = newSpeed;

				media.playbackRate = parseFloat(newSpeed); yt6.speed = media.playbackRate;

				if ((typeof player1 != 'undefined') && (typeof player1.src == 'string') && (player1.src != null) && (parseInt(itag(player1.src)) > 102) && ((player1.src.indexOf('mime=audio') == -1) && (player1.src.indexOf('mime/audio') == -1)) ) { player1.currentTime = player1.currentTime }

				document.getElementById('displaySpeed').innerHTML = "Speed " + Math.round(media.playbackRate * 100) + "%";
				//speedButton.find('button').html("Speed " + Math.round(media.playbackRate * 100) + "%");//newSpeed + t.options.speedChar);
				speedButton.find('.mejs-speed-selected').removeClass('mejs-speed-selected');
				speedButton.find('input[type="radio"]:checked').next().addClass('mejs-speed-selected');

				yt6.controls_pushed = false
			});


		
		speedSelector
			.height(
				speedButton.find('.mejs-speed-selector ul').outerHeight(true) + 
				speedButton.find('.mejs-speed-translations').outerHeight(true))

	//		.css('top', ( -1 * ( speedSelector.height() + 81 ) ) + 'px');

	//	gc('mejs-speed-selector')[0]
	//		.csstop = ( -1 * ( speedSelector.height() + 81 ) ) + 'px';


//            var displaySpeed =
//                $('<div class="display-playback-speed hidden">Speed 100%</div> ')
//                    .appendTo(controls);


            var faster =
                    $('<div class="mejs-button mejs-faster-button hidden" align="center" valign="center" style="padding:0px 0px 0px 10px; color: white;">' +
			'<button type="button" style="background-position: -96px -6px;margin:12px 5px;"</button>' +
                        '<button type="button" style="background: none" aria-controls="' + t.id + '" title="' + t.options.fasterText + '" aria-label="' + t.options.fasterText + '"></button>+' +
                    '</div>')
                    .appendTo(controls)
			.hover(function() {
				speedButton.find('.mejs-speed-selector').css('visibility','visible');
			}, function() {
				speedButton.find('.mejs-speed-selector').css('visibility','hidden');
			})
//                    .click(function(e) {
//                        e.preventDefault();
			addEL(gclass('mejs-button mejs-faster-button')[0], 'mouseup',function(e){ yt6.controls_pushed = false }, false)
			addEL(gclass('mejs-button mejs-faster-button')[0], 'mousedown',function(e){ yt6.controls_pushed = true
			  $waitUntil(function() {
	  		   if (yt6.controls_pushed) {

                            if(media.playbackRate < 8.0) media.playbackRate = (media.playbackRate + 0.01).toFixed(2); yt6.speed = media.playbackRate;

                            if ((typeof player1 != 'undefined') && (typeof player1.src == 'string') && (player1.src != null) && (parseInt(itag(player1.src)) > 102) && ((player1.src.indexOf('mime=audio') == -1) && (player1.src.indexOf('mime/audio') == -1)) ) { player1.currentTime = player1.currentTime }

                            //media.play();
			    document.getElementById('displaySpeed').innerHTML = "Speed " + Math.round(media.playbackRate * 100) + "%";
			    //speedButton.find('button').html("Speed " + Math.round(media.playbackRate * 100) + "%");
			   } else return true, function(){ return false; }, 500
	  		  })
                            //return false;
                        });


            var slower =
                    $('<div class="mejs-button mejs-slower-button hidden" align="center" valign="center" style="color: white;">' +
			'<button type="button" style="background-position: -96px 6px;margin:4px 5px"</button>' +
                        '<button type="button" style="background: none" aria-controls="' + t.id + '" title="' + t.options.slowerText + '" aria-label="' + t.options.slowerText + '"></button>-' +
                        '</div>')
                        .appendTo(controls)
			.hover(function() {
				speedButton.find('.mejs-speed-selector').css('visibility','visible');
			}, function() {
				speedButton.find('.mejs-speed-selector').css('visibility','hidden');
			})
//                        .click(function(e) {
//                            e.preventDefault();
			addEL(gclass('mejs-button mejs-slower-button')[0], 'mouseup',function(e){ yt6.controls_pushed = false }, false)
			addEL(gclass('mejs-button mejs-slower-button')[0], 'mousedown',function(e){ yt6.controls_pushed = true
			  $waitUntil(function() {
	  		   if (yt6.controls_pushed) {

                            if(media.playbackRate > 0.0) media.playbackRate = (media.playbackRate - 0.01).toFixed(2); yt6.speed = media.playbackRate;

                            if ((typeof player1 != 'undefined') && (typeof player1.src == 'string') && (player1.src != null) && (parseInt(itag(player1.src)) > 102) && ((player1.src.indexOf('mime=audio') == -1) && (player1.src.indexOf('mime/audio') == -1)) ) { player1.currentTime = player1.currentTime }

                            //media.play();
			    document.getElementById('displaySpeed').innerHTML = "Speed " + Math.round(media.playbackRate * 100) + "%";
			    //speedButton.find('button').html("Speed " + Math.round(media.playbackRate * 100) + "%");
			   } else return true, function(){ return false; }, 500
	  		  })
                            //return false;
                        });

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


}
)

yt6.mep_up();

    };

    //loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/83f842c26b87c7aca0e7745213cfe21ae04fe36a/mep-ceeb1a7.js",jq1)

    loadScript( protocol() + yt6.cdn + "snarly/yt6/c9e591e17403d1892ad728eb1c16872a0fdaffe0/mep-ceeb1a7.js", jq1)
						   

	function playNext(){

		var p = player();
		var bm0 = document.getElementById('bm0')

		if (yt6.size == undefined) yt6.size = 'default'
		aspect(yt6.size, false)

 		if (wide_view() || document.getElementById('aspect')) {

		  if (yt6.size && yt6.size != 'default') {
		    yt6.tbg.style.backgroundColor = 'rgb(16, 16, 16)'
		  } else yt6.tbg.style.backgroundColor = 'black';

		} else {
		    yt6.tbg.style.backgroundColor = 'transparent'
		  }

		//if (document.getElementById('bm4')) document.getElementById('bm4').style.display = 'inline-block';

		$waitUntil(
		  function(){ return autoplay(false) },
		  function(){
		      autoplay(true);
		  },500,2000);

	}//playNext



	function mep_reload(){

	/*$waitUntil(function() { var vid = (ytplayer.config.args) ? ytplayer.config.args.video_id : null;
	  if (yt6.layout == 12 || (vid && vid != video_id()[0])) { return true } },
	  function() {*/
		var z = gc('yt6-proxy-error')
		  if (z && z[proxies.length-1]) {
		    for (i=z.length;i>-1;i--) {
		      if (z[i]) z[i].parentNode.removeChild(z[i])
		    }
		}

	    if (yt6.osw && yt6.osw.getAttribute('id') == 'placeholder-player' && window.ytplayer && window.ytplayer.config == null) {
	      yt6.osw.setAttribute('style','display: none')
	      return void 0;
	    }

	    try {
		yt6.player1.media.loaded = false; yt6.player2.media.loaded = false;
		yt6.player1.media.currentTime = yt6.player2.media.currentTime = player2.currentTime = 0
	    } catch(e) {
	        //yt6.player1.media.currentTime = 0;
	      };

	    var webgl = get_webgl()
	    ///if (!webgl) try { gc('video-stream html5-main-video')[0].pause() } catch(e) {};


/*	    $.removeData([mejs.players['mep_1'], mejs.players['mep_0']])
	    mejs.players['mep_1'] = null; delete mejs.players['mep_1'];
	    mejs.players['mep_0'] = null; delete mejs.players['mep_0'];
	    $.removeData(mejs.players)
	    mejs.players = null; delete mejs.players;
	    mejs.mepIndex = 0; mejs.players = {}
	    yt6.media_duration = 0; yt6.player1 = null; delete yt6.player1
*/

	    if (ytplayer.config.args) {
	      yt6.status = ytplayer.config.args.status
	      yt6.reason = ytplayer.config.args.reason
	    }
//console.log('status: ' + yt6.status + 'reason: ' + yt6.reason)

	    buildObject(window.ytplayer);

//console.log('2 '+window.ytplayer.config.args.video_id)

	    redo_dl_button(  yt6.args,  yt6.html,  yt6.href);

	    document.getElementById('player-api').style.overflow = 'hidden';
	    yt6.mep_up();
	    if (!document.getElementById(mep_x('mep_'))) {
	      mep_run();
	    } else yt6.mep_renew()

	    playNext()

	//},1000,4000)
	}//mep_reload



if (typeof yt6.fnCheckLocation != 'number') {

//requesting new page
yt6.body.spfrequest = function(e) {

    yt6.spf = true
    var bm0 = document.getElementById('bm0')
    if (bm0 && bm0.style.visibility == 'visible') { yt6.x = true } else yt6.x = false;
    if (yt6.x && player()) try { player().pauseVideo() } catch(e) {}

  }
addEL(window, 'spfrequest', yt6.body.spfrequest, false);


if (typeof Polymer != 'undefined') {
  if (!yt6.body.snarls_watchdog) {
    yt6.body.snarls_watchdog = new MutationObserver(function(){
 	$waitUntil(function() {
	  var a = document.getElementById('bm0');
	  var b = gc('mejs-controls')[0];
	  var c = (typeof player().playerState == 'function') ? player().playerState() : null;
	  if (a && a.style.visibility == 'visible' && c != null && c > 2) player().pauseVideo();
	  //if (a && a.style.visibility == 'hidden' && b) b.style.visibility = 'hidden';
	  if (yt6.sync_timer == true) return true },
	  function(){
	    $waitUntil(function() { if (player() && typeof player().pauseVideo == 'function') return true },
              function(){
		var z = document.getElementById('bm0')
		if (z && z.style.visibility == 'visible' && autoplay(false) == false) player().pauseVideo();//"||" instead of "&&" --> will always pause on new page
	      },100,3000)
	  },50,1000);
        })
  }
  yt6.body.snarls_watchdog.observe(Polymer.Async._twiddle,{characterData:true})
  //(new window.MutationObserver(function(){Polymer.Async._atEndOfMicrotask()})).observe(Polymer.Async._twiddle,{characterData:true});

}

//new page is processed
yt6.body.spfprocess = function(e) {
/*	var yt6 = document.getElementById('snarls_player')
	yt6.spf = true
  var webgl = get_webgl()
  if ((yt6 != null) && (!webgl)) {
    if (player().getAttribute('flashvars') == null) {
	try { gc('video-stream html5-main-video')[0].pause() } catch(e) {}
    } else	window.postMessage("pauseVideo", "*")
  }*/

 }
addEL(window, 'spfprocess', yt6.body.spfprocess, false);

//new page is displayed
yt6.body.spfdone = function(e) {
	var p = player();
	var bm0 = document.getElementById('bm0')
	var yt6 = document.getElementById('snarls_player')
	yt6.spf = true

    if (p && typeof p.pauseVideo == 'function' && bm0 && bm0.style.visibility != 'hidden') p.pauseVideo()

    //var z = document.getElementById('re-embed2')
    //if (z != null) { z.parentNode.removeChild(z); document.getElementById('player-unavailable').style.display = ''}

    var z = document.getElementById('unavailable-submessage') || document.getElementById('reason')

  if ((z != null) && (z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '')) {

    if (document.getElementById('watch7-player-age-gate-content') != null) {

	ageless_verification()

/*      var z = document.createElement('iframe');
      z.id = 're-embed2';
      z.src = 'embed/' + document.querySelector('[itemprop="videoId"]').content + '?autoplay=0'
      //document.getElementById('player-api').insertBefore(z, document.getElementById('player-api').firstChild);
      document.getElementById('player-api').appendChild(z)
      z.setAttribute('class','player-height player-width');
      z.setAttribute('allowFullScreen', '');
      z.setAttribute('wmode','window');
      if (typeof player().getAttribute('flashvars') != 'string') {
        //player().parentNode.removeChild(player()); z.setAttribute('id','movie_player')
        //if (window.ytplayer.config == null) { window.ytplayer.config = {}; window.ytplayer.config.args = {} }
      }
      document.getElementById('player-unavailable').style.display = 'none';
      //player().style.display = 'none';
      player().style.setProperty('width', '0', 'important')
      player().style.setProperty('height', '0', 'important')
      if (document.getElementById('bm0') != null) document.getElementById('bm0').style.display = 'none'
*/
    } else {
	var z = document.getElementById('player-unavailable');// || gclass('ytd-playability-error-supported-renderers-0')[0]
	if (z) z.style.display = ''
	var z = document.querySelector('[itemprop="regionsAllowed"]')
	if (z != null) {
	  resize_layers(z.offsetWidth + 'px', z.offsetHeight + 'px', false)
	  var z = z.content
	  if ((document.getElementById('bm3') != null) && (document.getElementById('bm2') != null)) {
	    document.getElementById('bm2').innerHTML = document.getElementById('bm3').innerHTML
	    document.getElementById('bm2').setAttribute('onerror','geo-blocked')
	    if (z != '') {
	      document.getElementById('bm3').innerHTML = 'See all NON geo-blocked countries here:  <br>' + z
	      var z = "Use a HTTPS proxy\\'s IP that is located in one of these countries: " + z
	    } else {
		var z = 'This video seems to be blocked worldwide.'
		document.getElementById('bm3').innerHTML = z
	      }
	    var sorry = document.getElementById('player-unavailable') || document.getElementById('error-screen')
	    sorry.title = z
	    sorry.setAttribute('aria-label',z)
	    sorry.setAttribute("onclick","javascript:var z = document.getElementById('unavailable-submessage') || document.getElementById('reason');if(z && z.innerHTML != '') { alert('"+z+"') }");

	    document.getElementById('bm3').style.height = '250px'
	    document.getElementById('bm3').style.fontSize = '150%'
	    document.getElementById('bm3').style.visibility = 'visible'
	    document.getElementById('bm3').setAttribute('onclick', sorry.getAttribute("onclick"))
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
	if (document.getElementById('bm2').getAttribute('onerror') == 'geo-blocked') {
	  document.getElementById('bm3').style.visibility = 'hidden'
	  document.getElementById('bm3').style.fontSize = ''
	  document.getElementById('bm3').innerHTML = document.getElementById('bm2').innerHTML
	  document.getElementById('bm3').removeAttribute('onclick')
	  document.getElementById('bm2').removeAttribute('onerror')
	  document.getElementById('bm2').innerHTML = ''
	}
	var sorry = document.getElementById('player-unavailable') || document.getElementById('error-screen')
	sorry.removeAttribute('title')
	sorry.removeAttribute('aria-label')
	sorry.removeAttribute('onclick')

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

//console.log(yt6.title + document.title + yt6.spf);

    if (yt6.osw.getAttribute('id') != 'player' && navigator.userAgent.match(/MSIE /) == null && navigator.userAgent.match(/Trident\//) == null) {
        yt6.pps = yt6.osw.firstChild.style
	var js = document.getElementById('placeholder-player')
	if (js) js.parentNode.removeChild(js)
	var js = document.createElement('div')
	js.id = 'placeholder-player'
	document.getElementById('content').insertBefore(js, document.getElementById('content').firstChild)
	js.innerHTML = '<div class="player-api player-width player-height" style="' + yt6.pps + '"></div>'
	yt6.osw = document.getElementById('placeholder-player')
        delete js;
    }

	if (yt6.title != document.title || yt6.strLocation != window.location.href && document.title != 'YouTube') {
	    if ( (window.location.href.indexOf("Ypkv0HeUvTc_MM") > -1 ) || (strPrevLocation.indexOf("aC4BC-Hxq9g_PD") > -1 ) ) {
	      location.href = window.location.href
	    } else {

//console.log(yt6.title + document.title + yt6.spf);

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
		mep_reload()

	    }//else
	}

    }//unavailable-submessage else

}
addEL(window, 'spfdone', yt6.body.spfdone, false);

    if (typeof jQuery != 'undefined') jQuery(document).ready(function( $ ){
      // Default to the current location.
      yt6.strArgs = window.ytplayer 
      yt6.strLocation = window.location.href;
      yt6.strHash = window.location.hash;
      var strPrevLocation = "";
      var strPrevHash = "";

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

    var z = yt6.osw
	z.width = z.offsetWidth
	z.height = z.offsetHeight      


      if (yt6.tbg != null) yt6.tbg.width = yt6.tbg.offsetWidth

      // This will be the method that we use to check
      // changes in the window location.

      //yt6.fnCheckLocation = setInterval(function(){
      $waitUntil(function(){

	var yt6 = document.getElementById('snarls_player');
	if (yt6 == null) { return true } else { yt6.fnCheckLocation = 1

	var p = player();

	//var checkLoc = function() { return document.title }

	var bm0 = document.getElementById('bm0')
        if ((yt6 != null) && (gc('mejs-clear')[0])) {
	  yt6.loaded = true;
	  if ((bm0 != null) && (bm0.style.visibility == 'visible') && p &&(typeof p.getPlayerState == 'function') && (p.getPlayerState != 2)) {
	    if (player().getAttribute('flashvars') == null) {
		try { gc('video-stream html5-main-video')[0].pause() } catch(e) {}
	    } else window.postMessage("pauseVideo", "*")
	  }
	}

	var ads = gc('videoAdUiSkipButton')[0]; if (ads && bm0 && bm0.style.visibility == 'hidden') { ads.click(); ads.setAttribute("class","videoAdUiSkipButton") }
	var ads = gc("video-ads html5-stop-propagation")[0]; if (ads) { ads.parentNode.removeChild(ads) };
	var ads = document.getElementById("google_companion_ad_div"); if (ads) { ads.parentNode.removeChild(ads) };
	var ads = document.getElementById(mep_x("google_ads_frame")); if (ads) { ads.parentNode.removeChild(ads) };


if (yt6 != null) if (yt6.loaded) {
/*
	var ads = document.getElementsByTagName('iframe')
	for(i=0;i<ads.length;i++){
	  if (ads[i].getAttribute('id') == ads[i].getAttribute('name')) { ads[i].parentNode.removeChild(ads[i]) }
	}
*/

	//var z = getElementsByAttribute(document.getElementById('page'),'div','id','content'); if ((z[1]) && (z[0].style.display == 'none')) { z[0].parentNode.removeChild(z[0]) };

	if ((p) && (typeof p.getPlayerState == 'function')) { var z = 'playerState_' + p.getPlayerState() } else { var z = 'playerState_null' }
	if ((z.indexOf('playerState_') > -1) && (typeof gc('alerts-wrapper')[0] != 'undefined') && (gc('alerts-wrapper')[0].getAttribute('id') != z)) gc('alerts-wrapper')[0].setAttribute('id',z)

/*
	var z = getElementsByAttribute(document.getElementById('player-api'),'*','id','movie_player')
	for (i=0;i<z.length;i++){
	  if ((z[i]) && (p != z[i])){
	      $.removeData(z[i]); z[i].parentNode.removeChild(z[i]); z[i] = null; z[i] = {}; delete z[i]; set_controls()
	  }
	}
*/
  	

	if ((gc('ytp-time-duration')[0]) && (yt6.media_duration) && (Math.abs(1*gc('ytp-time-duration')[0][yt6.txt].split(':').join('') - 1*yt6.media_duration.split(':').join('')) > 1) && (yt6.ad_duration != 0) && (yt6.ad_muted == true)) {
	  $waitUntil(
	    function(){
	      yt6.ad_duration = 0;
	      if (typeof player().isMuted == 'function' && !(player().isMuted())) { player().mute(); yt6.ad_muted = true };
	      var ads = yt6.media_duration;
	      if (1 * ads.indexOf(':') > -1) {
		var ads = ads.split(':')
		if (ads[2]){
		  var ads = ads[0] * 3600 + ads[1] * 60 + ads[2] * 1
		} else var ads = ads[0] * 60 + ads[1] * 1;
	      }
	      var ads0 = gc('ytp-time-duration')[0][yt6.txt].split(':')
	      if (ads0[2]){
		var ads0 = ads0[0] * 3600 + ads0[1] * 60 + ads0[2] * 1
	      } else var ads0 = ads0[0] * 60 + ads0[1] * 1;
	      //console.log(ads + typeof ads); console.log(ads0);console.log(Math.abs(ads - ads0))
	      if (!(Math.abs(ads - ads0) > 1)) return true;
	    },
	    function(){
              if (typeof player().isMuted == 'function' && player().isMuted()) player().unMute();
	      yt6.ad_muted = false;
	      delete yt6.ad_muted;
	    }
	  )
	}

	no_cards()

	var watch = gc('mejs-poster mejs-layer')
	if ((typeof watch[0] != 'undefined') && (1*watch[0].getAttribute('style').indexOf('("') > -1)) {
	  watch[0].setAttribute('style', watch[0].getAttribute('style').split('("').join("('").split('")').join("')"));
	}

	var autoscale = document.getElementById('placeholder-player') || document.getElementById('player-api').parentNode;
	var watch = document.getElementById('page') || document.getElementById('mainContainer');
	if (watch) watch = watch.getAttribute('class');
	if (typeof watch == 'string' && watch.indexOf('watch') == -1) watch = null

	if (window.ytplayer.config && ytplayer.config.html5 == false && player()) {
	  var flashvars = player().getAttribute('flashvars')
	} else var flashvars = null;

	var mep = document.getElementById(mep_x('mep_'))


function recreate_ytp_conf_flash(){

		yt6.args = null
function nop(){		var z = gc('video-stream html5-main-video')[0]
		if ((z) && (z.parentNode) && (z.parentNode.parentNode) && (z.parentNode.parentNode.getAttribute('id') == 'movie_player')) {
		  z.setAttribute('src','');
		  window.ytplayer = {};
		  /*
		  var z = document.getElementById('player-mole-container').innerHTML.toString();
		  if (z.split('var ytplayer = ytplayer || {};')[1]) {
		    var z = z.split('var ytplayer = ytplayer || {};')[1];
		    if (z.split(';(function()')[0]) { eval(z.split(';(function()')[0]); }
		  }
		  */
		}
}//nop
		if (p.getAttribute('flashvars')) {
			//yt6.flashvars = p.getAttribute('flashvars');

			window.ytplayer.config = {
			"sts":16657,
			"url":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-" + yt6.swfbin4 + "\/watch_as3.swf",
			"html5":true,
			"url_v8":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-" + yt6.swfbin4 + "\/cps.swf",

			"params":{
			"allowscriptaccess":"always",
			"bgcolor":"#000000",
			"allowfullscreen":"true"},

			"url_v9as2":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-" + yt6.swfbin4 + "\/cps.swf",

			"assets":{
			"css":"\/\/s.ytimg.com\/yts\/cssbin\/www-player-new-webp-vflqG83wK.css",
			"js":"\/\/s.ytimg.com\/yts\/jsbin\/html5player-new-hu_HU-vflE7ZQJ9\/html5player-new.js"},

			"min_version":"8.0.0",

			"attrs":{
			"id":"movie_player"},

			"messages":{
			"player_fallback":[
			"A videó lejátszásához Adobe Flash Player vagy a HTML5 által támogatott böngésző szükséges. \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003eA legújabb Flash Player letöltése \u003c\/a\u003e \u003ca href=\"\/html5\"\u003eTovábbi tudnivalók a HTML5 böngészőre való frissítésről\u003c\/a\u003e"]}
			};
			window.ytplayer.config.args = {}
			//document.getElementById('footer-links').innerHTML = ''
			yt6.args = yt6.flashvars.split('&');//alert('length:' + yt6.args.length)
			for (i=0;i<yt6.args.length;i++) {
			  if (typeof yt6.args[i] !== 'undefined') {
			    var z = yt6.args[i].split('=');//console.log(z[1])
			    //alert(i + z[0] + " = " + yt6.args[i].replace(z[0]+'=','') )
			    window.ytplayer.config.args[z[0]] = yt6.args[i].replace(z[0]+'=','');//.split('%25').join('%').split('%26').join('\\u0026')
			    if ( (z[0] != 'adaptive_fmts') && (z[0] != 'url_encoded_fmt_stream_map') && (z[0] != 'remarketing_url') && (z[0] != 'videostats_playback_base_url') && (z[0] != 'dashmpd') && (z[0] != 'afv_ad_tag') && (z[0] != 'afv_invideo_ad_tag') && (z[0] != 'dynamic_allocation_ad_tag') ){
				window.ytplayer.config.args[z[0]] = window.ytplayer.config.args[z[0]].split('%26').join('&').split('%25').join('%')
			        window.ytplayer.config.args[z[0]] = unescape(window.ytplayer.config.args[z[0]]);
				if (window.ytplayer.config.args[z[0]].indexOf('://') > -1) window.ytplayer.config.args[z[0]] = window.ytplayer.config.args[z[0]].split('/').join('\\/')
			    } else {
				window.ytplayer.config.args[z[0]] = window.ytplayer.config.args[z[0]].split('%26').join('&').split('%3D').join('=').split('%2C%2B').join(',+').split('%2C').join(',').split(',+').join('%2C+')
				if (z[0] == 'dashmpd') { window.ytplayer.config.args[z[0]] = window.ytplayer.config.args[z[0]].split('%3A').join(':').split('%2F').join('\\/') }
				window.ytplayer.config.args[z[0]] = window.ytplayer.config.args[z[0]].split('%25').join('%')
			      }
			    //document.getElementById('footer-links').innerHTML = document.getElementById('footer-links').innerHTML + '"' + z[0] + '" : "'+ window.ytplayer.config.args[z[0]]+'",<br><br>     '
			  }
			}
			yt6.args = null; yt6.flashvars = null
			window.ytplayer.config.autoplay = 1;
			window.ytplayer.config.loaded = true;

		}
}


	if (bm0 == null && p &&
	     (p.getAttribute('class') || p.getAttribute('flashvars') || window.ytplayer.config == undefined)
	   ) {

	  try {
		
		if (location.href.split('list=PL')[1]) {
		  ytplayer.config.args.list = 'PL' + location.href.split('list=PL')[1].split('&')[0].split('/')[0]
		}
		if (ytplayer.config.args.el) delete ytplayer.config.args.el
		ytplayer.config.args.csi_page_type = 'watch,watch7_html5'
		ytplayer.config.args.iv_allow_in_place_switch = '0'

		//console.log('02 - Error on spf page change 12 '+document.title + yt6.change);
		mep_reload()

	  } catch(e) { gc('clear')[0].setAttribute('id','ytp-conf-loading') };

	}



	var z = gc('clear')[0]
	if (window.ytplayer != null){
	  if (window.ytplayer.config != null){
	    if (z.getAttribute('id') != 'ytp-conf-loaded'){
		if (window.ytplayer.config.loaded == true) {
		  z.setAttribute('id','ytp-conf-loaded')
		}
	     }
	  } //else gc('clear')[0].removeAttribute('id');//
	}

if (p != null) {

  var z = p.getAttribute('class');
  if (typeof z == 'string') {
    var ads = z.indexOf('ytp-fullscreen')
    if (ads != -1) {
      if (!yt6.ytpstyle) yt6.ytpstyle = 1
      if (document.getElementById('player1')) {
        document.getElementById('player1').style.width = '100%'
        document.getElementById('player1').style.height = '100%'
      }
    } else {
	if (yt6.ytpstyle) {
	  resize_layers(yt6.osw.style.width, yt6.osw.style.height)
	  delete yt6.ytpstyle
	}
      }
  } else {
      if ((bm0 != null) && (bm0.style.visibility == 'visible')) var ads = null
    }


  //var ads = getElementsByAttribute(document.getElementById('watch7-content'),'div','id','controls-sp');
  //if (ads) for(i=ads.length-1;i>1;i--) { if (ads[i]) ads[i].parentNode.removeChild(ads[i]) }

  if ((wide_view() || document.getElementById('aspect') != null) && yt6.tbg) {
    if (yt6.size && yt6.size != 'default') { if (yt6.tbg.style.backgroundColor != 'rgb(16, 16, 16)') yt6.tbg.style.backgroundColor = 'rgb(16, 16, 16)' } else if (yt6.tbg.style.backgroundColor != 'black') yt6.tbg.style.backgroundColor = 'black';
  } else {
      if (!yt6.size || yt6.size == 'default') if (yt6.tbg.style.backgroundColor != 'transparent') yt6.tbg.style.backgroundColor = 'transparent'
    }


if (p.getAttribute('class') && p.getAttribute('class').indexOf('ytp-fullscreen') != -1) {
  yt6.pstyle = p.getAttribute('style')
  p.setAttribute('style','')
}

//console.log('poffw: '+ p.offsetWidth + ', scrw: ' + screen.width + ', poffh: ' + p.offsetHeight + ', scrh: ' + screen.height + ', mepoffw: '+ mep.offsetWidth + ', mepoffh: ' +  mep.offsetHeight)

	if ( (autoscale != null) && (gc('mejs-clear')[0]) && !yt6.ytg &&
	    (
	      ( (
		 ( (ads == -1) || ((document.getElementById('player1').style.width != '100%') && (document.getElementById('player1').style.height != '100%')) )
		//&& !( (ads == -1) && ((document.getElementById('player1').style.width != '100%') && (document.getElementById('player1').style.height != '100%')) )
		) ) &&
	       (p.offsetWidth != screen.width) && (p.offsetHeight != screen.height) && (mep != null) &&
	       ((mep.offsetWidth != screen.width) &&
	        (mep.offsetHeight != screen.height))
	    )
	  ) { //alert("sw: "+ screen.width +", sh: "+screen.height+", pw: "+ p.offsetWidth +                    ", ph: "+ p.offsetHeight +", bw: "+ bm0.offsetWidth +                    ", bh: "+ bm0.offsetHeight);
	  //yt6.fullscreen = false

	if (!yt6.ytg) {
	  if ((autoscale.offsetWidth != autoscale.width) && (autoscale.offsetHeight != autoscale.height)) { 
 //console.log(yt6.size + ' autoscale 0 ' + autoscale.height +' '+ autoscale.offsetHeight +' '+ yt6.w +' '+ yt6.h);
	    autoscale.width = autoscale.offsetWidth;
	    autoscale.height = autoscale.offsetHeight;
	    if (bestfit()) {
	      if (bm0 && document.getElementById('aspect')) {
		resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false)
	      } //else resize_layers(yt6.w, yt6.h)
 //console.log(yt6.size + ' autoscale 0 ' + autoscale.height +' '+ autoscale.offsetHeight +' '+ yt6.w +' '+ yt6.h);
	    }

	  } else {
	      if (autoscale.offsetHeight != autoscale.height) {// && yt6.size != 'theater'
 //console.log(yt6.size + ' autoscale 2 ' + autoscale.height +' '+ autoscale.offsetHeight +' '+ yt6.w +' '+ yt6.h); 
		autoscale.height = autoscale.offsetHeight;
		if (bestfit()) {
		  if (bm0 && document.getElementById('aspect')) {
		    resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false)
		  } //else resize_layers(yt6.w, yt6.h)
		}
		if (!document.getElementById("aspect")) {
		if (yt6.wsb && (yt6.wsb.currentStyle || window.getComputedStyle(yt6.wsb)).marginLeft == '0px') {
 //console.log(yt6.size + ' autoscale 2 ' + autoscale.height +' '+ autoscale.offsetHeight +' '+ yt6.w +' '+ yt6.h);
		  if (bestfit()) {
		    if (bm0 && document.getElementById('aspect')) {
		      resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false)
		    } //else resize_layers(yt6.w, yt6.h)
 //console.log(yt6.size + ' autoscale 2 ' + autoscale.height +' '+ autoscale.offsetHeight +' '+ yt6.w +' '+ yt6.h);
		  } 
		}
		}
	      } else {
		  if (autoscale.offsetWidth != autoscale.width) {
 //console.log(yt6.size + ' autoscale 1 width:' + autoscale.width +' offsetWidth:'+ autoscale.offsetWidth +' thb:'+ yt6.tbg.offsetWidth +' '+ yt6.w +' '+ yt6.h ); 
		    autoscale.width = autoscale.offsetWidth;
		    if (bestfit()) {
		      if (bm0 && document.getElementById('aspect')) { //console.log(document.getElementById('a_width').value + document.getElementById('a_height').value);
		        resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false)
		      } //else resize_layers(yt6.w, yt6.h)
		    }
 //console.log(yt6.size + ' autoscale 1 width:' + autoscale.width +' offsetWidth:'+ autoscale.offsetWidth +' thb:'+ yt6.tbg.offsetWidth +' '+ yt6.w +' '+ yt6.h ); 
		  }
		}
	    }
	}//yt6.ytg

	    if ((typeof p.getPlayerState == 'function') && (p.getAttribute('flashvars') == null)) {
	      var z = gc('video-stream html5-main-video');
	      if (typeof z[0] != 'undefined') {
		var x = document.getElementById('controls-sp'); 
		if (x != null) {
		  x = x.prop;
		  if ((z[0].style[x]) && z[0].style[x].indexOf('rotate') > -1) {
		    z[0].prop = z[0].style[x]; 
		  } else {
		      if (typeof z[0].prop != 'undefined') { 
		        z[0].style[x] = z[0].prop;
		      }
		    }
		}
	      }
	    }
	} else {
          if (yt6.fullscreen != true && mep != null && mep.offsetWidth != screen.width && mep.offsetHeight != screen.height && yt6.size != 'media'){
	    if (!yt6.ytg) { yt6.fullscreen = true
	    if (document.getElementById('player1') != null) {
	      if (bm0 && bm0.style.visibility == 'visible') document.getElementById('player1').style.left = '0px'
	      var z = gc('mejs-overlay mejs-layer mejs-overlay-play')[0]
	      if (z) {
		var webgl = z.firstChild.currentStyle || window.getComputedStyle(z.firstChild, null)
		z.style.width = webgl.width.replace('%','px')
		z.style.height = webgl.height.replace('%','px')
		z.style.left = (screen.width - webgl.width.replace('px','')) / 2 + 'px'
		z.style.top = (screen.height - webgl.height.replace('px','')) / 2 + 'px'
	      }
	    }
	    }
	    if (p != null) {
		  if ((p.style.visibility != 'hidden') && (p.style.width != '')) { //(p.style.display != 'none')
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

	if ( (bm0 != null) && (yt6.fullscreen == true ) && (document.getElementById('player1').style.width != '100%') && (document.getElementById('player1').style.height != '100%') ) {
	  yt6.fullscreen = false
	  if (yt6.pstyle) { p.setAttribute('style', yt6.pstyle); delete yt6.pstyle; }
	  if (document.getElementById('aspect')) {
	    resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', true)
	  } else resize_layers(yt6.w, yt6.h)
	  p.style.width = bm0.style.width;
	  p.style.height = bm0.style.height
	} else {
	    //fullscreen
          if (bm0 != null && document.getElementById('player1') != null && document.getElementById('player1').style.width == '100%' && document.getElementById('player1').style.height == '100%' && yt6.fullscreen != true){
	    yt6.fullscreen = true
	      if (bm0.style.visibility == 'visible') document.getElementById('player1').style.left = '0px'; //console.log('full')
	      var z = gc('mejs-overlay mejs-layer mejs-overlay-play')[0]
	      if (z) {
		var webgl = z.firstChild.currentStyle || window.getComputedStyle(z.firstChild, null)
		z.style.width = webgl.width.replace('%','px')
		z.style.height = webgl.height.replace('%','px')
		z.style.left = (screen.width - webgl.width.replace('px','')) / 2 + 'px'
		z.style.top = (screen.height - webgl.height.replace('px','')) / 2 + 'px'
	      }
	    if (p != null) {
		  if ((p.style.visibility != 'hidden') && (p.style.width != '')) { //(p.style.display != 'none')
		    p.removeAttribute('style');
		  }
		
		  var webgl = get_webgl()
		  if (webgl) {
			webgl.removeAttribute('style')
			webgl.parentNode.style.left = -1 * webgl.parentNode.parentNode.style.left.replace('px','') + 'px'
			webgl.parentNode.style.top = -1 * webgl.parentNode.parentNode.style.top.replace('px','') + 'px'
		  }
	    }
          }
	  }



	if (yt6.mode != wide_view()) {
 //console.log(yt6.size + ' autoscale mode ' + wide_view() + ' '+ yt6.w +' '+ yt6.h ); 
	  if (bestfit()) {
	    if (bm0 && document.getElementById('aspect')) {
	     resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false)
	    } else resize_layers(yt6.w, yt6.h);
	  }
	  yt6.mode = wide_view()
 //console.log(yt6.size + ' autoscale mode ' + wide_view() + ' '+ yt6.w +' '+ yt6.h ); 
	}


	if ((yt6.tbg != null) && (yt6.tbg.offsetWidth != yt6.tbg.width)) {
	  yt6.tbg.width = yt6.tbg.offsetWidth
	}

}//(p)

if (document.getElementById('unavailable-message') != null && document.getElementById('unavailable-message')[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '') {

  //if (document.getElementById('player-unavailable').style.display != 'none') document.getElementById('player-unavailable').style.display = 'none';
  /*var idoc = document.getElementById('re-embed2')
  if (idoc != null) {
    idoc = idoc.contentDocument || idoc.contentWindow.document;
    idoc = idoc.getElementById('player')
    if ((idoc != null) && (idoc.firstChild != null)) var idocz = idoc.firstChild.getAttribute('flashvars')


    if ((p.getAttribute("name") != "me_flash") && (typeof p.getAttribute('flashvars') == 'string') && (typeof idocz == 'string')) {
      var idoc = p.getAttribute('flashvars').split('?url_encoded_fmt_stream_map=') || p.getAttribute('flashvars').split('&url_encoded_fmt_stream_map=')
      if (idoc[1]){
	var idoc = idoc[1].split('&')[0]
	var z = idocz.split('?url_encoded_fmt_stream_map=') || idocz.split('&url_encoded_fmt_stream_map=')
	if (z[1]) {
	  var z = z[1].split('&')[0]
	  p.setAttribute('flashvars', p.getAttribute('flashvars').replace(idoc, z))
	}
      }
      yt6.flashvars = idocz;

//recreate_ytp_conf_flash()

    //var idocz = null;
    //p.setAttribute('flashvars', idocz);
    //document.getElementById('re-embed2').parentNode.removeChild(document.getElementById('re-embed2'))*/
    if ( (document.getElementById('re-embed2') != null) && ((player().style.width != '0px') || (player().style.display != 'none')) && (document.getElementById('remove-sp') == null) ) {
      if (typeof player().getAttribute('flashvars') == 'string') {
        if (typeof player().getPlayerState === 'function') {
	  window.postMessage("pauseVideo", "*")
	  player().style.setProperty('width', '0px', 'important')
	  player().style.setProperty('height', '0px', 'important')
	}
      } else {
	  try { gc('video-stream html5-main-video')[0].pause() } catch(e) {}
	  //player().style.visibility = 'hidden';
	  player().style.display = 'none';
	}
    }
  //}//idoc
}//content warning

	if (yt6.spf == true) { yt6.spf = true } else { yt6.spf = false

	// Check to see if the location has changed.
	if ( yt6.title != document.title || yt6.strLocation != window.location.href || watch == null ) {
	  if (window.ytplayer.config == null) { gc('clear')[0].setAttribute('id','ytp-conf-null'); };
//	if ((document.getElementById('placeholder-player') != null) && (bm0 != null) && (bm0.style.width != fix_Width()) ) aspect(yt6.size)


	if (yt6.title && (yt6.title.split(' ').join('') != document.title.split(' ').join('') || yt6.strLocation != window.location.href) && document.title != 'YouTube') {//.split(' ').join('')
	//console.log('3    doc:'+ document.title +' yt6t:'+ yt6.title + window.ytplayer.config.args + window.ytplayer.config.args.video_id)

	if (window.ytplayer.config.args && !window.ytplayer.config.args.video_id && document.getElementById('video-hide').firstChild && document.getElementById('video-hide').firstChild.id.indexOf('movie_player') == 0) {
	  window.ytplayer.config.args.video_id = video_id(); alt_yt_cleanup()
	}

	//if ((watch != null) && (strPrevLocation != yt6.strLocation)) {
	  //if ( ((window.ytplayer != null) && (window.ytplayer.config != null) && 
	  //     (window.ytplayer.config.loaded) && (yt6.args != window.ytplayer.config.args) && 
	  //     (p != null) && (document.getElementById('watch-discussion') != null) ) ) {
	  //works only for browser-level navigation, not for flashplayer "previous/next"
	  if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.video_id) {

	    //console.log('!!!'+strPrevHash + yt6.strHash + window.location.hash + yt6.strLocation + window.location.href)

	    // Store the new and previous locations.
	    strPrevLocation = (yt6.strLocation) ? yt6.strLocation:"";
	    strPrevHash = yt6.strHash;
	    yt6.strLocation = window.location.href;
	    yt6.strHash = window.location.hash;

	    // The location has changed. Trigger a
	    // change event on the location object,
	    // passing in the current and previous
	    // location values.

	    fix_playlist()

	    if ( (window.location.href.indexOf("Ypkv0HeUvTc_MM") > -1 ) || (strPrevLocation.indexOf("aC4BC-Hxq9g_PD") > -1 ) ) {
	      location.href = window.location.href
	    } else {
	        $( window.location ).trigger( "change",
		  {
		    currentHref: yt6.strLocation,
		    currentHash: fnCleanHash( yt6.strHash ),
		    previousHref: strPrevLocation,
		    previousHash: fnCleanHash( strPrevHash )
		  }
	      );
		if (yt6.age.check()) {
		  xhr2.done = false;
		  if (yt6.player1) { try { yt6.player1.setSrc(''); yt6.player1.load() } catch(e) { } }
		  if (yt6.player2) { try { yt6.player2.setSrc(''); yt6.player2.load() } catch(e) { } }
		  if (yt6.age.done < 2) { //console.log('03 - Blocked vid '+ yt6.block + yt6.age.done);
		    ytplayer.config = {}
		    //ageless_verification();
		    mep_reload(); yt6.age.done++;
		  } else { //console.log('03b - Blocked vid '+ yt6.block + yt6.age.done);
		      if (yt6.age.done == 2) {
			yt6.age.done = 3;
			if (!yt6.age.func) {
			  yt6.age.func = $waitUntil(function(){
			    if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.args.status == 'ok') {
			      return true
			    } else {
				if (ytplayer.config.args.status != 'fail' && yt6.age.t == null || yt6.age.t && yt6.age.t[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') == '') ytplayer.config.args.status = 'ok';
				//console.log(yt6.age.t +'"'+ window.ytplayer.config.args.status +'"'+ window.ytplayer.config.args.video_id + video_id()[0])
			      }
			  },
			  function(){
			    //console.log('07');
			    mep_reload();
			    delete yt6.age.func;
			  })
			}
		      }
		    }
		} else {
		    if (window.ytplayer.config.args.video_id) {
		      if (!(yt6.ytg && watch != null)) {
		        //console.log('04 - Regular page change 16 ' + document.title + yt6.change);
			if (yt6.player1) { try { yt6.player1.setSrc(''); yt6.player1.load() } catch(e) { } }
			if (yt6.player2) { try { yt6.player2.setSrc(''); yt6.player2.load() } catch(e) { } }
		        if (window.ytplayer.config.args.video_id != video_id()[0] || video_id()[0] != yt6.player1.media.init) {
			  xhr2.done = false
		  	  delete yt6.change
			  yt6.age.done = 0;
			  mep_reload();
			} else {
			    if (yt6.ytg) {
			      fix_playlist();
			      playNext()
			      if (document.title.indexOf(' - YouTube Gaming') == document.title.length - 17) document.title = document.title.substring(0, document.title.length - 17)
			      document.getElementById('bm3').innerHTML = document.getElementById('bm3').innerHTML.split('<b>')[0] + '<b>' + document.title + '</b>' + document.getElementById('bm3').innerHTML.split('</b>')[1]
			    }
			  }
		      }
		    }
		  }

	    }//else

	  } else {//args
	      if (yt6.ytg) { //console.log('05 - args')
		//ageless_verification();
		yt6.timer = 0; mep_reload(); yt6.age.check(); if (ytplayer.config.args.status == 'ok' && yt6.block && yt6.block.replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') == '') { alt_yt() }
	      }
	      if ((bm0 == null) && (p != null) && (p.getAttribute('class') != null)) {
		if (window.ytplayer.config == null) { gc('clear')[0].setAttribute('id','ytp-conf-null'); };
	      }
	    }
//watch title
	} else {
	    var z = document.getElementById('reason')
            if (yt6.layout == 16 && z) {
	      if ((z != null) && (z[yt6.txt].replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '')) {
		if (yt6.change && (yt6.change != z[yt6.txt])) {
		  yt6.change = z[yt6.txt]
		    strPrevLocation = (yt6.strLocation) ? yt6.strLocation:"";
		    strPrevHash = yt6.strHash;
		    yt6.strLocation = window.location.href;
		    yt6.strHash = window.location.hash;
		  $( window.location ).trigger( "change",
		    {
		    currentHref: yt6.strLocation,
		    currentHash: fnCleanHash( yt6.strHash ),
		    previousHref: strPrevLocation,
		    previousHash: fnCleanHash( strPrevHash )
		    }
		  );
		  //console.log('06 - ' + document.title + yt6.title + yt6.change);
		  if (yt6.player1) { try { yt6.player1.setSrc(''); yt6.player1.load() } catch(e) { } }
		  if (yt6.player2) { try { yt6.player2.setSrc(''); yt6.player2.load() } catch(e) { } }
		  xhr2.done = false
		  //ageless_verification(); 
		  mep_reload();
		  if (ytplayer.config.args.status == 'ok') { alt_yt(); alt_yt_cleanup(); set_controls() }
		}
		if ( z.parentNode.style.display != 'none' || document.getElementById('player-container').hasAttribute('hidden') ) {
		  if (z[yt6.txt].indexOf('"') != 0) {
		    z.parentNode.style.display = 'none'

		    if (document.getElementById('player-container').hasAttribute('hidden')) document.getElementById('player-container').removeAttribute('hidden')

		    if (yt6.age.done != undefined) { yt6.age.done = 0}
		    ageless_verification();
		    yt6.title = window.ytplayer.config.args.title
		    yt6.change = window.ytplayer.config.args.video_id

		  } else {//other error message
		      z.parentNode.style = 'display: inline-block; height: ' + yt6.osw.offsetHeight + 'px'
		      yt6.tbg.style.setProperty('display','none','important')

		      yt6.man.style = ''
		      yt6.change = z[yt6.txt]
		      if (!yt6.player1.media.paused) yt6.player1.pause()
		      if (p && typeof p.getPlayerState == 'function' && p.getPlayerState() != 2) p.pauseVideo()
		    }

		} else {  }//gc('ytd-playability-error-supported-renderers-0')[0]

	      } else z.parentNode.style.display = 'none'
	    }

	  }



	} else {//location change
	    if (window.ytplayer.config == null) { window.ytplayer.config = {}; window.ytplayer.config.args = {} }
	    if (yt6.args != window.ytplayer.config.args) {
	        $( window.location ).trigger( "change",
		  {
		    currentHref: yt6.strLocation,
		    currentHash: fnCleanHash( yt6.strHash ),
		    previousHref: strPrevLocation,
		    previousHash: fnCleanHash( strPrevHash )
		  }
	      );
		yt6.args = window.ytplayer.config.args;
                autoplay(true); set_controls();

	    }
	  }
//console.log(yt6.title + document.title + '!!'+ yt6.change + '!!');

        if (window.location.href.indexOf('v=' + yt6.change) == -1 && window.location.href.indexOf('v/' + yt6.change) == -1) {
	  if (document.title != 'YouTube' || yt6.title != window.ytplayer.config.args.title) {
	    if (typeof yt6.title == 'undefined' || yt6.title != document.title || yt6.strLocation != window.location.href) {
	      yt6.title = document.title
              if (yt6.layout == 16 && document.title == 'YouTube' && gc('title style-scope ytd-video-primary-info-renderer')[0]) yt6.title = gc('title style-scope ytd-video-primary-info-renderer')[0][yt6.txt]
	      yt6.strLocation = window.location.href;
	    }
	  }
	} else { document.title = yt6.title; }


	}//spf else

} else { if (typeof gc('alerts-wrapper')[0] != 'undefined') gc('alerts-wrapper')[0].removeAttribute('id') };//player script present

//console.log(yt6.title + document.title + yt6.spf);

      }//if
      },
      function(){
	if (typeof gc('alerts-wrapper')[0] != 'undefined') gc('alerts-wrapper')[0].removeAttribute('id');//player script present
	try { removeEL(window, 'spfrequest', yt6.body.spfrequest, false) } catch(e) {}
	try { removeEL(window, 'spfprocess', yt6.body.spfprocess, false) } catch(e) {}
	try { removeEL(window, 'spfdone', yt6.body.spfdone, false) } catch(e) {}
      },
      intIntervalTime
      )//fnCheckLocation

  
      // Set an interval to check the location changes.
      //setInterval( yt6.fnCheckLocation, intIntervalTime );
    })//( jQuery );
}

  }
  //raw.githubusercontent.com/
  loadScript( protocol() + yt6.cdn + "snarly/yt6/747fd7ad7b481ee96ea874a8f0126df995f32006/jquery.js", jq0);



yt6.timer = 0

$waitUntil(function(){ if (typeof jQuery == 'function' && typeof $ == 'function') { return true } else {
  yt6.timer++; //console.log('waiting ' + yt6.timer)
  if (yt6.timer == 12){
    for(i=0;i<yt6.cdns.length;i++){
      if(yt6.cdns[i] != yt6.cdn) {//alert(yt6.cdn + ' failed!!! Retrying with ' + yt6.cdns[i])
        yt6.cdn = yt6.cdns[i];
        break
      }
    }
    if (document.getElementById('jquery.js') != null) document.getElementById('jquery.js').parentNode.removeChild(document.getElementById('jquery.js'));
    loadScript( protocol() + yt6.cdn + "snarly/yt6/747fd7ad7b481ee96ea874a8f0126df995f32006/jquery.js", jq0);
  }
}//else
}, function(){ yt6.timer = 0 },500,7000
)







function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    yt6.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

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


function ytsubtitle2srt(d,track_srclang,mejs_language_code){
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
    var txt = txt.split("&#39;").join("'").split("& # 39;").join("'").split("& # 39").join("'").split("&quot;").join("\"").split("& quot;").join("\"").split("& Quot;").join("\"").split("& Quot").join("\"").split("& quot").join("\"").split("Quot;").join("\"").split("Quot ;").join("\"").split("Quot.;").join(". \"").split("Quot!;").join("! \"").split("Quot?;").join("? \"").split("# 39;").join("'").split("&QUOT;").join("\"").split("&QUOT").join("\"").split("QUOT& ;").join("\"").split("QUOT&").join("\"").split("&#39;").join("'").split("& amp;").join("&");
    srt += j + nl + start + ' --> ' + dur + nl + txt + nl + nl;
  }
  d = srt;
  var uriContent = "data:text/plain;charset=utf-8," + encodeURIComponent(srt);

  document.getElementById("bm3").innerHTML = document.getElementById("bm3").innerHTML +
      '<a class="" href="' + uriContent +'" download="' + unescape(yt6.fn) + '_' + track_srclang + '.srt">SRT '+mejs_language_code+'</a><br>'
  ;
return d
}






function bestfit(){

	var aw = document.getElementById('a_width')
	var ah = document.getElementById('a_height')
	var w = 1 * fix_Width().replace('px',''); if (w == -1) return false;
	var h = 1 * fix_Height().replace('px',''); if (h == -1) return false;
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
	  yt6.w = aw.value + 'px';
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

function resize_layers(w,h,me_aspect){

  var yt6 = document.getElementById('snarls_player')
  /*if (yt6.tbg.getAttribute('id') == 'theater-left') {
    yt6.tbg.style.setProperty('display','none','')
    yt6.tbg.style.setProperty('height','0px','')
  }*/
  var api = document.getElementById('player-api').style
  var bm0 = document.getElementById('bm0')
  var webgl = get_webgl()
  var mep = document.getElementById(mep_x("mep_"))
  var me_flash_ = getElementsByAttribute(document,"embed","name",mep_x("me_flash_")) ;
  if (typeof me_flash_[0] != 'undefvined') me_flash_[1] = document.getElementById(mep_x('me_flash__ __container'))

  if (document.getElementById('aspect')) {
	var c = 1 * document.getElementById('yt-alert-message').offsetWidth
	var d = 1 * document.getElementById('aspect').firstChild.offsetWidth
	var e = 1 * document.getElementById('remove-sp').parentNode.offsetWidth
	var z = document.getElementById('aspect')
	z.setAttribute('style','display: inline-block; vertical-align: top; color:#333; background: #FFFFFF; opacity: 0.9; position: relative; left:' + parseFloat(c - d - e) + 'px;');
	var z = z.style
	if (z.display != 'inline-block') {
	  z.display = 'inline-block'; z.verticalAlign = 'top'; z.color = '#333'; z.background = '#FFFFFF'; z.opacity = '0.9'; z.position = 'relative';  z.left = parseFloat(c - d - e) + 'px'; //z.maxWidth = '200px'
	}
  }

//console.log(w +' '+h+' '+yt6.size)
if (yt6.size != yt6.prev_size) {
  //console.log(yt6.prev_size +'->'+ yt6.size)
  yt6.prev_size = yt6.size
}
  var z = gc('mejs-offscreen'); if ((z != null) && (z[0] != null)) z[0].style.display = 'none';
  var z = gc('mejs-time-buffering'); if ((z != null) && (z[0] != null)) z[0].setAttribute('class','mejs-time-bufferin');


  //var noads = document.getElementById('player').innerHTML;onDownload(noads)
    if (yt6.wsb != null) { var tiny = yt6.wsb.currentStyle } else return void 0;
    if (yt6.ytg) yt6.inf = document.getElementById('bm2')
    if ((tiny == undefined) && (typeof window.getComputedStyle != 'undefined')) var tiny = window.getComputedStyle(yt6.wsb, null);
    if ((tiny == undefined) || (tiny == null)) { var tiny = {}; tiny.marginLeft = "640px"; }
    //var tiny = yt6.wsb.currentStyle || window.getComputedStyle(yt6.wsb);alert(typeof tiny + tiny);//alert("wsb:" + tiny.marginLeft + " w7sc" + tiny0.marginLeft)


    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      var z = z.firstChild;
    }
    var o = z.getAttribute('style'); if (o) z.removeAttribute('style')
    //if (z.getAttribute('id') != 'player') {
      var y = z.currentStyle || window.getComputedStyle(z, null)
function nop(){//    } else {
	var y = {};
	y.width = z.offsetWidth + 'px';
	y.height = z.offsetHeight + 'px';
	y.left = z.offsetLeft + 'px';
	y.top = z.offsetTop + 'px';
      }

  yt6.me_aspect = 1 * y.width.replace('px','') / y.height.replace('px','')
  yt6.w_orig = 1 * y.width.replace('px','')
  yt6.h_orig = 1 * y.height.replace('px','')

  if (z.getAttribute('id') != 'player') {
    yt6.hdiff = ( 1 * y.height.replace('px','') - ((y.height.replace('px','') / 60 >> 0) * 60) ); 
    var hdiff = yt6.hdiff
    if (hdiff == undefined) hdiff = 30
  } else var hdiff = 0

  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - getScrollbarWidth();// - 1
  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)
  var windowheight = Math.round((windowheight / 100 >>0) * 80)


  if (z.parentNode.getAttribute('id') == 'placeholder-player') {
    var b = z.parentNode;//document.getElementById('placeholder-player');
    var a = z;//b.firstChild
  } else {
      var a = z;
      var b = document.getElementById('top') || document.getElementById('content-layer')
      b.style.setProperty('margin-top','',''); b.removeAttribute('style');// = '0px'
      yt6.tbg.style.setProperty('margin-bottom','','')
      yt6.tbg.style.setProperty('display','inline-block','')
      if (!yt6.ytg) { yt6.inf.style.setProperty('marginTop','',''); yt6.inf.removeAttribute('style') }
    }
  var c = document.getElementById('aspect')
  var d = document.getElementById('player').getAttribute("class")
  if (!d) {
    if (typeof document.getElementById('player').outerHTML == 'string') {
      var d = document.getElementById('player').outerHTML.split('class="')[1]
      if (d) { d = d.split('"')[0] } else d = ''
    } else var d = ''
  }
  var e = yt6.tbg.style
  var f = document.getElementById('re-embed22')

if (f != null) {
  api.width = yt6.w_orig + 'px';
  api.height = e.height = yt6.h_orig + 'px';
  if (wide_view())  {
    if (windowwidth > 640 ) {
      a.style.left = api.left = -1 * yt6.w_orig / 2 + 'px'
    } else {
       a.style.left = api.left = '-213px'
      } 
    e.backgroundColor = 'rgb(16, 16, 16)';
    e.width = '';
    f.setAttribute('style','margin-left: -3px');// + (yt6.w_orig - z.width.replace('px','')) / 2 + 'px');
  } else {
      a.style.left = api.left = '0px'
      e.backgroundColor = 'transparent';
      f.setAttribute('style','margin-left: 0px');
    }
  return void 0;
}

if ( (me_aspect) && (  (document.getElementById(mep_x('mep_')) == null) || ((player().getAttribute('name') == 'me_flash') && (bm0.style.visibility == 'hidden')) || ((document.getElementById(mep_x('me_flash_')) != null) && (bm0.style.visibility == 'visible'))  )  ) {
/*  var w = Math.round(1 * h.replace('px','') * yt6.me_aspect)
  if (document.getElementById('a_width') != null) document.getElementById('a_width').value = w
  var w = w + 'px'*/
}
  if (typeof JSON != 'undefined') {
    yy = {}
    yy.width = JSON.stringify(y.width)
    yy.height = JSON.stringify(y.height)
    yy.left = JSON.stringify(y.left)
    var y = yy;
    //var y = JSON.parse(JSON.stringify(y));
  } else {
      var y = z.currentStyle || window.getComputedStyle(z, null);
    }

  if (o != null) z.setAttribute('style', o)

  yt6.w = w;
  yt6.h = h;
  bm0.style.width = w;
  bm0.style.height = h;
  api.width = w
  api.height = h
  player().style.width = w
  player().style.height = h
  if (typeof me_flash_[0] != 'undefined') {
    me_flash_[0].style.width = w;
    me_flash_[0].style.height = h;
    me_flash_[1].style.width = w;
    me_flash_[1].style.height = h;
  }
  if (mep != null) {
    mep.style.width = w;
    mep.style.height = h;
    gc('mejs-clear')[0].style.width = w
    gc('mejs-clear')[0].style.height = h
  }


  var w = 1 * w.replace('px','')
  var h = 1 * h.replace('px','')

  var flashvars = player().getAttribute('flashvars')

  var p1 = document.getElementById('player1')

  var ytp_class = player().getAttribute('class')

if (!yt6.fullscreen || yt6.fullscreen == false || (ytp_class && ytp_class.indexOf('ytp-fullscreen') == -1)) {//scaling

  if (p1 != null) {
//console.log(w+' '+h+' '+p1.style.width+' '+p1.style.height)
    if (  (bm0.style.visibility == 'visible') && (yt6.size == 'default') && ( (mep == null) || ((document.getElementById(mep_x('me_flash_')) != null)) )  ) {
	p1.style.width = (me_aspect) ? w + 'px' : h * yt6.me_aspect + 'px';// parseInt(h.replace('px','') - hdiff) * parseFloat(yt6.aspect_ratio) + 'px'
	p1.style.height = h + 'px'
	p1.style.left = '0px'

	  w = w + 'px'
	  h = h + 'px'
	  yt6.w = w;
	  yt6.h = h;
	  api.width = w
	  api.height = h
	  bm0.style.width = w;
	  bm0.style.height = h;
	  player().style.width = w
	  player().style.height = h
	  if (typeof me_flash_[0] != 'undefined') {
	    me_flash_[0].style.width = w;
	    me_flash_[0].style.height = h;
	    me_flash_[1].style.width = w;
	    me_flash_[1].style.height = h;
	  }
	  if (mep != null) {
	    mep.style.width = w;
	    mep.style.height = h;
	    gc('mejs-clear')[0].style.width = w
	    gc('mejs-clear')[0].style.height = h
	  }
	var w = 1 * w.replace('px','')
	var h = 1 * h.replace('px','')
//console.log( '1: ' + p1.style.top + p1.style.left + p1.style.width + p1.style.height);
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
	  p1.style.width = Math.round((h - hdiff) * yt6.aspect_ratio) + 'px';
	  p1.style.height = Math.round(h - hdiff) + 'px';
	  p1.style.left = Math.round( (w - p1.style.width.replace('px','')) / 2) + 'px';
//console.log( '2: ' + p1.style.top + p1.style.left + p1.style.width + p1.style.height + typeof yt6.player1.play);
	} else {
	    p1.style.width = w + 'px'
	    p1.style.height = h + 'px'
	    p1.style.left = '0px';
//console.log( '3: ' + p1.style.top + p1.style.left + p1.style.width + p1.style.height);
	  }
      }
	p1.style.top = '0px';


  if ( (w < (1 * p1.style.width.replace('px',''))) || ( (windowheight < (1 * p1.style.height.replace('px',''))) && (yt6.size == 'theater') ) ) {

    if ( ( ((1 * p1.style.height.replace('px','')) < windowheight ) || (w < (1 * p1.style.width.replace('px',''))) ) && (mep != null) ){//|| (!((1 * p1.style.height.replace('px','')) > windowheight )) ) {
	    p1.style.width = w + 'px'
	    p1.style.height = Math.round( w / yt6.aspect_ratio ) - hdiff + 'px';
	    p1.style.top = Math.round( (h - p1.style.height.replace('px','')) / 2 - (hdiff / 2) ) + 'px';
	    p1.style.left = Math.round( (w - (p1.style.height.replace('px','') * yt6.aspect_ratio)) / 2) + 'px';
//console.log( '4: ' + p1.style.top + p1.style.left + p1.style.width + p1.style.height);


      } else {

	if (yt6.size == 'theater'){

	  if ( (me_aspect != false) && (document.getElementById('aspect')) ) { 
	    //w = windowwidth
	  }
	  if (me_aspect != false) h = windowheight

	  if ( ((player().getAttribute('name') == 'me_flash') && (bm0.style.visibility == 'hidden')) || ((document.getElementById(mep_x('me_flash_')) != null) && (bm0.style.visibility == 'visible')) ) {
	      if ((me_aspect == true) || (me_aspect == false)){
		p1.style.width = w + 'px'
		p1.style.height = h + 'px'
		p1.style.left = '0px';
		p1.style.top = '0px'
//console.log( '5: ' + p1.style.top + p1.style.left + p1.style.width + p1.style.height);
	      }
	  } else {
	      p1.style.width = (h - hdiff) * yt6.aspect_ratio + 'px';
	      p1.style.height = h - hdiff + 'px';
	      p1.style.top = (h - p1.style.height.replace('px','')) / 2 - (hdiff / 2) + 'px';
	      p1.style.left = (w - p1.style.width.replace('px','')) / 2 + 'px';
//console.log( '6: ' + p1.style.top + p1.style.left + p1.style.width + p1.style.height);
	    }
function zip(){
		w = w + 'px'
		h = h + 'px'
		yt6.w = w;
		yt6.h = h;
		api.width = w
		api.height = h
		bm0.style.width = w;
		bm0.style.height = h;
		player().style.width = w
		player().style.height = h
		if (typeof me_flash_[0] != 'undefined') {
		  me_flash_[0].style.width = w;
		  me_flash_[0].style.height = h;
		  me_flash_[1].style.width = w;
		  me_flash_[1].style.height = h;
		}
		if (document.getElementById(mep_x('mep_')) != null) {
		  document.getElementById(mep_x('mep_')).style.width = w;
		  document.getElementById(mep_x('mep_')).style.height = h;
		  gc('mejs-clear')[0].style.width = w
		  gc('mejs-clear')[0].style.height = h
		}

		var w = 1 * w.replace('px','')
		var h = 1 * h.replace('px','');
		if (document.getElementById('a_width')) {
		  document.getElementById('a_width').value = w
		  document.getElementById('a_height').value = h
		}
}//zip
//console.log( '7: ' + p1.style.top + p1.style.left + p1.style.width + p1.style.height);

	}//theater

        }	

    }

    if( (yt6.size != 'theater') && (mep != null) && (typeof gc('me-cannotplay')[0] == 'undefined') &&
//	((Math.abs(document.getElementById('player1').width - p1.style.width.replace('px','')) < 2) &&
//	  (Math.abs(document.getElementById('player1').height - p1.style.height.replace('px','')) < 2))	  
	(
	  (!(Math.abs(document.getElementById('player1').width - p1.style.width.replace('px','')) > 2) && !(Math.abs(document.getElementById('player1').height - p1.style.height.replace('px','')) > 2))
	)
      )
    {//console.log( 'refine')
	p1.style.width = document.getElementById('player1').width + 'px'
	p1.style.height = document.getElementById('player1').height + 'px'
	p1.style.top = Math.round( (h - p1.style.height.replace('px','')) / 2 - (hdiff / 2) ) + 'px';
	p1.style.left = Math.round( (w - (p1.style.height.replace('px','') * yt6.aspect_ratio)) / 2) + 'px';
//      if (Math.abs(p1.style.width.replace('px','') - Math.floor(p1.style.width.replace('px','') / 2) * 2) < Math.abs(p1.style.width.replace('px','') - Math.ceil(p1.style.width.replace('px','') / 2) * 2)) { p1.style.width = Math.floor(p1.style.width.replace('px','') / 2) * 2 + 2 + 'px' } else { p1.style.width = Math.ceil(p1.style.width.replace('px','') / 2) * 2 + 'px' }
//      if (Math.abs(p1.style.height.replace('px','') - Math.floor(p1.style.height.replace('px','') / 2) * 2) < Math.abs(p1.style.height.replace('px','') - Math.ceil(p1.style.height.replace('px','') / 2) * 2)) { p1.style.height = Math.floor(p1.style.height.replace('px','') / 2) * 2 + 2 + 'px' } else { p1.style.height = Math.ceil(p1.style.height.replace('px','') / 2) * 2 + 'px' }
      if (c) { document.getElementById('a_width').value = bm0.style.width.replace('px',''); document.getElementById('a_height').value = bm0.style.height.replace('px','') }
    }
  }

  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight)

  //if (z.parentNode.getAttribute('id') == 'placeholder-player') var z = z.parentNode

  if (b.offsetWidth < windowwidth) { //alert(a0.width + " " + a0.height);
    //e.width = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - getScrollbarWidth() + 'px';
    var x = b.offsetWidth
  } else {
      //e.width = z.offsetWidth + 'px'; e.left = '0px';  
      var x = windowwidth
    }

  //if (playlist) playlist.removeAttribute('style')

  //var b = document.getElementById('placeholder-player')
  //var a = b.firstChild;

  if (a.style != null && !yt6.ytg) {

    e.width = windowwidth + 'px';
    e.height = h + 'px'

    var playlist = document.getElementById('watch-appbar-playlist') || document.getElementById('playlist') || document.getElementById('chat')

    a.removeAttribute("style")

    a.style.width = w + 'px';
    a.style.height = h + 'px';
    a.style.left = api.left
    a.style.backgroundColor = 'transparent'
    a.style.minHeight = '0px'
    a.style.maxHeight = '9999px'
    a.style.display = 'inline-block'

    if (a.getAttribute('id') == 'player' && !yt6.ytg) {
	var l = gc('style-scope ytd-watch')
	for (i=0;i<l.length;i++) {
	  if (l[i].getAttribute('id') == 'container') {
	    var l = l[i];
	    if (yt6.wsb != null) { yt6.wsb.style.top = ''; yt6.wsb.removeAttribute('style') }
	    break
	  }
	}
      if (typeof gc('x-scope ytd-app-1')[0] != 'undefined') {
        if ((yt6.size == 'media') || (yt6.size == 'theater')) {
	document.getElementById('player-container').setAttribute('style','left: ' + (windowwidth - w) / 2 + 'px;')
        } else {
	    document.getElementById('player-container').setAttribute('style','left: ' + l.offsetLeft + 'px;');
	  }
      } else {
	  document.getElementById('player-container').removeAttribute('style')
        if ((yt6.size == 'media') || (yt6.size == 'theater')) {
	document.getElementById('player-container').setAttribute('style','left: ' + (windowwidth - w) / 2 + 'px;') }
	  //document.getElementById('player-container').setAttribute('style','left: ' + l.offsetLeft + 'px;');
	}
      //if ((l) && (!c)) var w = 1 * l.offsetWidth - 426 + 'px'
    } else var l = gc('footer relative layout vertical style-scope ytg-watch-page')[0]

    yt6.wsb.removeAttribute('style'); //yt6.wsb.setAttribute('style','top:0px')

if (a.getAttribute('id') != 'player') { //pre-2016 layout start
//console.log('pre-2016 layout')

    if (wide_view()) {//YouTube theatre view mode
      if (c) {//console.log('s-0');//aspect changer present
	e.left = '0px'
	e.width = windowwidth + 'px'
	if (b.offsetWidth < 1 * e.width.replace('px','')) {//console.log('s-1');
	  a.style.left = api.left = -1 * w / 2 + 'px'
	  if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) {//console.log('s-2'); 
	    if (w < windowwidth ) { //console.log('s-3');
        	a.style.left = api.left = -1 * w / 2 + 'px'
	      } else {//console.log('s-4');
		  a.style.left = api.left = -1 * e.width.replace('px','') / 2 + 'px'
		}
	  } else {//console.log('s-5');
	      if (w < windowwidth ) { //console.log('s-6');
		a.style.left = api.left = -1 * w / 2 + 'px'
	      } else {//console.log('s-7');
	          a.style.left = api.left = -1 * (x + 1 * e.width.replace('px','') - b.offsetWidth) / 2 + 'px'
	        }
	    }
	} else { //console.log('s-8');
	    if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) { 
	      if (w < windowwidth) { //console.log('s-9');
		a.style.left = api.left = -1 * (w + b.offsetWidth - 1 * e.width.replace('px','')) / 2 + 'px'
	      } else {//console.log('s-10');
	          a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
	        }
	      if (yt6.wsb != null) yt6.wsb.style.top = '';
	    } else { //console.log('s-11');
		a.style.left = api.left = -1 * w / 2 + 'px'
		a.style.left = api.left = (1 * e.width.replace('px','') - w - b.offsetWidth) / 2 + 'px'
              }
            if (1 * a.style.left.replace('px','') < -1 * b.offsetWidth / 2) {//console.log('s-12');
              a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
            }
            e.width = b.offsetWidth + 'px'
          }
        if (playlist) { playlist.style.top = h - 360 + 'px' };
	if (yt6.wsb != null) yt6.wsb.style.top = '';

      } else {//console.log('s-13');
	  /*a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
	  $waitUntil(//in theatre view mode, pull up the sidebar for 'default' layout
	    function(){
	      if (yt6.wsb != null) return true
	    },
	    function(){
	      if ((1 * tiny.marginLeft.replace('px','') >= 108) || (tiny.marginLeft == 'auto') || (yt6.wsb.getAttribute('id') == 'related')) {
		if (yt6.wsb != null) { yt6.wsb.style.top = -1 * h - 10 + 'px'; }
		if (playlist) { playlist.style.top = '-370px' }
	      }
            }
          )*/
	  // ^old

            if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) { 
              if (w < windowwidth) { //console.log('s-9');
                a.style.left = api.left = -1 * w / 2 + 'px'
              } else {//console.log('s-10');
                  a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
                }
	      if (yt6.wsb != null) yt6.wsb.style.top = '';
	    } else {//console.log('s-11');
		a.style.left = api.left = -1 * w / 2 + 'px'
		//a.style.left = api.left = (1 * e.width.replace('px','') - w - b.offsetWidth) / 2 + 'px'
              }
            if (1 * a.style.left.replace('px','') < -1 * b.offsetWidth / 2) {//console.log('s-12');
              a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
            }

          e.width = windowwidth + 'px'
	  e.left = ''
	  if (playlist) playlist.style.top = ''
	  if (yt6.wsb != null) yt6.wsb.style.top = ''
        }

    } else {//console.log('s-14');//YouTube Default view mode
	if ( (b.offsetWidth > windowwidth ) && ((1 * tiny.marginLeft.replace('px','') >= 108) || (tiny.marginLeft == 'auto')) ) { //console.log('s-15');
	  e.left = '0px'
	  e.width = b.offsetWidth + 'px'
	}
	  if (c) {//console.log('s-16');//aspect changer present
	    if ( (( 1 * tiny.marginLeft.replace('px','') >= 108) || (tiny.marginLeft == 'auto')) && (playlist) ) playlist.style.top = h + 10 + 'px'
	    if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) {//console.log('s-17');//?
	      a.style.left = api.left = (x / 2) - (w / 2) + 'px'
	      e.left = -1 * (1 * e.width.replace('px','') - b.offsetWidth) / 2 + 'px'
	      if (yt6.wsb != null) yt6.wsb.style.top = '370px';
	    } else {//console.log('s-18');
		e.left = (b.offsetWidth - e.width.replace('px','')) / 2 + 'px';
	    	if (w < windowwidth) {//console.log('s-19');
	    	  a.style.left = api.left = (x / 2) - (w / 2) + 'px';
	    	} else {//console.log('s-20');
		    if (b.offsetWidth < 1 * e.width.replace('px','')) {//console.log('s-21');
          	      a.style.left = api.left = e.left
		    }  else { //console.log('s-21');
          	         a.style.left = api.left = '0px';
          	       }//
	    	  }
		if (yt6.wsb != null) {
		  if (b.getAttribute('id') != 'top') {//console.log('s-22');
		    yt6.wsb.style.top = '370px'
		  } else { //console.log('s-23');
		      yt6.wsb.style.top = h + 'px'
		    }
		}
		if (playlist) {
		  if (b.getAttribute('id') != 'top') {//console.log('s-22');
		    playlist.style.top = 1 * h + 10 + 'px'
		  } else { //console.log('s-23');
		      playlist.style.top = 1 * h + 10 + 'px'
		    }
	        }
	      }
/*	    if ( w > windowwidth ) {
		a.style.left = api.left = e.left;alert('3 ' + a.style.left)
	      } else {
		  a.style.left = api.left = -1 * (w - b.offsetWidth) / 2  + 'px';alert('4 ' + a.style.left)
		}
*/	  } else {//console.log('s-24');
	      if ((d && d.indexOf("medium") > -1) || (d && d.indexOf("large") > -1)) {//console.log('s-25');
		a.style.left = api.left = '0px';
	        if (playlist) playlist.style.top = ''
		if (yt6.wsb != null) yt6.wsb.style.top = -1 * (h - 360) + 'px'
	      } else {//console.log('s-26');
		  a.style.left = api.left = '0px';
	          if (playlist) playlist.style.top = '0px'
		  if (yt6.wsb != null) yt6.wsb.style.top = -1 * (h - 360) + 'px'
		}
            }
      }//wide else

	  if (b.getAttribute('id') != 'top') {
	    if ((1 * tiny.marginLeft.replace('px','') < 108) || (tiny.marginLeft == 'auto')) {//console.log('s-27');
	      if (windowwidth < yt6.w_orig) { //console.log('s-28');
		a.style.left = api.left = '-319px';//'-213px'
	          if (playlist) {
		    playlist.style.top = h + 57 + 'px';//alert(yt6.wna.style.top)
		    if (yt6.wna != null) yt6.wna.style.top = -1 * (playlist.offsetHeight / 2 + 15) + 'px';
		  }
	      } else {//console.log('s-29');
		  a.style.left = api.left = -1 * w / 2 + 'px'
	          if (playlist) {
		    playlist.style.top = h + 57 + 'px';//alert(yt6.wna.style.top)
		    if (yt6.wna != null) yt6.wna.style.top = -1 * (playlist.offsetHeight + 5) + 'px';
		  }
		}

              if (yt6.wsb) yt6.wsb.style.top = ''
              if (1 * a.style.left.replace('px','') < -1 * b.offsetWidth / 2) {//console.log('s-30');
                a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
		if (playlist) yt6.wna.style.top = -1 * (playlist.offsetHeight + 5) + 'px';
              }
	      e.width = '100%'
	    } else if (yt6.wna != null) yt6.wna.style.top = ''
          } else a.style.left = api.left = '250px'

//pre-2016 layout end
} else { //2016 layout start
//console.log('2016 layout')
    var yh = -1 * y.height.replace('px','').split('"').join('') - 2
    var a = document.getElementById('player-container')

    if (wide_view()) {//YouTube theatre view mode
      l.setAttribute('style','margin-top: -362px');
      e.marginLeft = '0px';//(b.offsetWidth - e.width.replace('px','')) / 2 + 'px';
      if (c) {//console.log('s-0');//aspect changer present
        if (yt6.wsb != null) yt6.wsb.style.top = '346px'
	//if (bm0.style.visibility == 'visible') e.setProperty('margin-bottom','16px','')
        e.left = '0px'
        e.width = windowwidth + 'px'
	a.style.setProperty('background-color','rgb(16, 16, 16)','')

        if (b.offsetWidth < windowwidth) { //console.log('s-1');
          a.style.left = api.left = -1 * w / 2 + 'px'
/*          if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) { console.log('s-2'); 
            if (w < windowwidth ) { console.log('s-3');
                a.style.left = api.left = -1 * w / 2 + 'px'
              } else { console.log('s-4');
                  a.style.left = api.left = -1 * e.width.replace('px','') / 2 + 'px'
                }
          } else {console.log('s-5');*/
              if (w < windowwidth ) { //console.log('s-6');
		e.width = (windowwidth - w) / 2 + 'px';
                a.style.left = api.left = -1 * w / 2 + 'px'
              } else { //console.log('s-7');
		  e.width = '0px'; e.display = 'none'
                  a.style.left = api.left = -1 * (x + 1 * e.width.replace('px','') - b.offsetWidth) / 2 + 'px'
                }
            //}
        } else { //console.log('s-8');
            if (w > windowwidth) { //console.log('s-9');
                a.style.left = api.left = -1 * (w + b.offsetWidth - 1 * e.width.replace('px','')) / 2 + 'px'
		e.width = '0px'
		e.display = 'none'
            } else { //console.log('s-11');
                a.style.left = api.left = (1 * b.offsetWidth - 1 * w) / 2 + 'px'
		e.width = (windowwidth - w) / 2 + 'px';
		a.style.width = windowwidth - 1 * e.width.replace('px','') + 'px';
              }
          }

	yt6.wna.style.marginTop = '346px'
	if (playlist) playlist.style.top = '346px'
	  e.left = ''
	  a.style.setProperty('width', windowwidth - 1 * e.width.replace('px','') + 'px','')
	  a.style.left = '0px'

      } else { //console.log('s-13');

	  e.width = '0px';
	  a.style.setProperty('background-color','','')
	  l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style');

	  yt6.wna.style.marginTop = '346px'
	  if (playlist) {
	    playlist.style.top = '-156px';
	    yt6.wsb.style.top = '-156px';
	  } else {
	      if (navigator.userAgent.indexOf('Chrome') != -1) { yt6.wsb.style.top = -1 * (yh + 2) + 'px'; } else { yt6.wsb.style.top = '346px' }
	    }

	  e.left = ''
	  a.style.setProperty('width', windowwidth - 1 * a.style.left.replace('px','') + 'px','')
	  a.style.left = '0px'

	  // ^old 
	  if (playlist) {
	    playlist.style.top = '347px';
	    yt6.wsb.style.top = '347px';
	  }
	  e.left = ''
	  a.style.setProperty('width', windowwidth - 1 * e.width.replace('px','') + 'px','')

        }

    } else {//console.log('s-14');//YouTube Default view mode
	if ( (b.offsetWidth > windowwidth ) ) { //console.log('s-15');
	  e.left = '0px'
	  e.width = b.offsetWidth + 'px'
	} else {

	  }

	//e.marginLeft = (b.offsetWidth + 50 > windowwidth) ? '-25px' : (b.offsetWidth - windowwidth) / 2 + 'px';
	e.marginLeft = (b.offsetWidth - windowwidth) / 2 + 'px';
	if (c) {//console.log('s-16');//aspect changer present
	  a.style.setProperty('background-color','rgb(16, 16, 16)','')
	  if ( ((1 * tiny.marginLeft.replace('px','') >= 108) || (tiny.marginLeft == 'auto')) && (playlist) ) playlist.style.top = h + 10 + 'px'
	    //console.log('s-18');
	    e.left = (b.offsetWidth - e.width.replace('px','')) / 2 + 'px';
	    e.width = api.left = (b.offsetWidth + 50 > windowwidth) ? (x - w) / 2 + 'px' : (x - w) / 2 - 1 * e.marginLeft.replace('px','') + 'px';//console.log('0 ' + b.offsetWidth +' '+ w)


/*	    if (playlist) { console.log('s-22');
	      //alert(a.offsetHeight +' '+a.parentNode.offsetHeight+ ' '+ a.parentNode.parentNode.offsetHeight)
	      var u = z.parentNode.parentNode.offsetWidth + getScrollbarWidth()
	      if ((windowwidth > 1933) && (windowheight > 940)) {
		playlist.style.top = yt6.wsb.style.top = 704 + 'px';
	      } else {
		  if ((windowwidth > 1293) && (windowheight > 629)) {
		    if (document.getElementById('player').getAttribute("class").indexOf("small") > -1) {
		      playlist.style.top = yt6.wsb.style.top = 480 + 'px';
		    } else {
			if (u > 640){
			  playlist.style.top = yt6.wsb.style.top = 480  + 'px'
			} else {
			    playlist.style.top = yt6.wsb.style.top = 360 + 'px'
			  }
		      }
		  } else {
		      if (u > 640) {
			playlist.style.top = yt6.wsb.style.top = 360 + 'px';
		      } else {
			  playlist.style.top = yt6.wsb.style.top = 240 + 'px';
			}
		    }
	       }

	       if (windowheight > 630) {
		 playlist.style.top = yt6.wsb.style.top = 480 + 'px';
	       } else {
		   playlist.style.top = yt6.wsb.style.top = 360 + 'px';
		 }
	       //playlist.style.top = yt6.wsb.style.top = a.offsetHeight + 'px';

	   } else { console.log('s-23');
		    //if (windowheight < 630) {
		      //if (yt6.wsb != null) yt6.wsb.style.top = '360px'
		    //} else if (yt6.wsb != null) yt6.wsb.style.top = '480px'

	     }

*/
	   if (l.offsetWidth >= 1066) {
	     yt6.wsb.style.top = -1 * (yh + 2) + 'px';
	     if (playlist) playlist.style.top = yt6.wsb.style.top
	   }

	   if (w < windowwidth) {//console.log('s-19');
	     a.style.left = '0px'
	     yt6.wna.style.marginTop = ''; yt6.wna.removeAttribute('style')

	     if (b.offsetWidth < w) {
		if ( parseFloat(e.marginLeft.replace('px','').replace('-','')) + b.offsetWidth - w > 0 ) {//console.log('s-191 ' + b.offsetWidth + '  '+ w + ' ' + windowwidth +' '+ l.offsetWidth)
		  e.width = api.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) + l.offsetWidth - w + 'px';
		  l.style.marginTop = yh + 'px';
		} else {//console.log('s-192')
		    if (!wide_view()) b.style.setProperty('marginTop','12px','')
		    a.style.left = api.left = e.marginLeft
		    a.style.top = -1 * h + 'px';
		    a.style.left = api.left = (l.offsetWidth - w) / 2 + 'px'
		    if (Math.ceil(l.offsetWidth/854) == 1) { l.style.marginTop = -1 * h + 'px' } else {
		      if (w < l.offsetWidth) {
		        l.style.marginTop = ''; l.removeAttribute('style');
		        l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style');
		      } else {
			  a.style.top = -1 * (h + 2) + 'px';
			  //l.style.marginTop = yt6.wna.style.marginTop = -1 * (h + 2) + 'px';
			  l.style.marginTop = -1 * (h + 3) + 'px';
			  yt6.wna.style.marginTop = yh + 'px';
			  yt6.wsb.style.top = '';
			  if (playlist) playlist.style.top = '';
			}
		    }
		  }
	     } else {//console.log('s-193 ' + b.offsetWidth + '  '+ w + ' ' + windowwidth +' '+ l.offsetWidth)
		   if (Math.ceil(l.offsetWidth/854) == 1) { a.style.top = -1 * h + 'px'; } else a.style.top = '';
		 if (w < l.offsetWidth) {
		   e.width = api.left = (windowwidth - w) / 2 + 'px';
		 } else {
		     e.width = api.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) - w + l.offsetWidth + 'px'
		   }
		 if (((windowwidth > 657) && (b.offsetWidth > windowwidth)) ) {//console.log('s-193a');console.log(Math.ceil(l.offsetWidth/854))
		   a.style.left = api.left = (b.offsetWidth - w) / 2 + 'px'
		   if (Math.ceil(l.offsetWidth/854) == 1) {
		     l.style.marginTop = -1 * h + 'px'
		   } else {
			l.style.marginTop = -1 * h + 'px';
			//l.firstElementChild.setAttribute('style','margin-top: ' + -1 * e.height.replace('px','') + 'px');
			l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style');
		     }
		 } else {//console.log('s-193b')
		     l.style.marginTop = -1 * h + 'px';
		     //l.firstElementChild.setAttribute('style','margin-top: ' + -1 * e.height.replace('px','') + 'px');
		     if (Math.ceil(l.offsetWidth/854) == 1) {
			a.style.left = api.left = (b.offsetWidth - w) / 2 + 'px'
		     } else {//console.log(Math.ceil(l.offsetWidth/854))
			//l.style.marginTop = ''; l.removeAttribute('style');
			l.style.marginTop = yh + 'px';
			l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style');
		       //a.style.top = -1 * e.height.replace('px','') + 'px';
		     }
		   }
		  /*if ( Math.abs(e.marginLeft.replace('px','')) + b.offsetWidth - w > 0 ) {console.log('spec1')
		    e.width = api.left = Math.abs(e.marginLeft.replace('px','')) + b.offsetWidth - w + 'px';
		  } else {console.log('spec2')
		      e.height = '0px'
		      a.style.left = api.left = e.marginLeft
		    }*/
	       }


	   } else {//console.log('s-20');
	       a.style.left = api.left = (b.offsetWidth + 50 > windowwidth) ? '-25px' : '-50px'

	     if (b.offsetWidth < w) {
		if ( parseFloat(e.marginLeft.replace('px','').replace('-','')) + b.offsetWidth - w > 0 ) {//console.log('s-191 ' + b.offsetWidth + '  '+ w + ' ' + windowwidth +' '+ l.offsetWidth)
		  e.width = api.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) + l.offsetWidth - w + 'px';
		  l.style.marginTop = yh + 'px';
		} else {
		    if (!wide_view()) b.style.setProperty('marginTop','12px','')
		      a.style.left = api.left = e.marginLeft
		     if (Math.ceil(l.offsetWidth/854) == 1) { l.style.marginTop = -1 * h + 'px' } else {
		       l.style.marginTop = ''; l.removeAttribute('style');
		       l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style');
		     }
		     a.style.top = -1 * h + 'px';
		 if (w < l.offsetWidth) {//console.log('201')
		   e.width = api.left = (windowwidth - w) / 2 + 'px';
		 } else {//console.log('202')
		     e.width = api.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) - w + l.offsetWidth + 'px'
		     yt6.wsb.style.top = -1 * (h - 360) + 'px'
		     if (l.offsetWidth >= 1066) {
			l.style.marginTop = yh + 'px';
			yt6.wna.style.marginTop = -1 * h + 'px';
			if (playlist) playlist.style.top = -1 * (h + yh + 2) + 'px';
		     } else {
			 yt6.wna.style.marginTop = '';
		       }
		     //if (playlist) playlist.style.top = '-120px';
		   }
		  }
	     } else {//console.log('s-193 ' + b.offsetWidth + '  '+ w + ' ' + windowwidth +' '+ l.offsetWidth)
		   if (Math.ceil(l.offsetWidth/854) == 1) { a.style.top = -1 * h + 'px'; } else a.style.top = '';
		 if (w < l.offsetWidth) {
		   e.width = api.left = (windowwidth - w) / 2 + 'px';
		 } else {
		     e.width = api.left = parseFloat(e.marginLeft.replace('px','').replace('-','')) - w + l.offsetWidth + 'px'
		   }
		 if (((windowwidth > 657) && (b.offsetWidth > windowwidth)) ) {//console.log('s-193a');console.log(Math.ceil(l.offsetWidth/854))
		   a.style.left = api.left = (b.offsetWidth - w) / 2 + 'px'
		   if (Math.ceil(l.offsetWidth/854) == 1) {
		     l.style.marginTop = -1 * h + 'px'
		   } else {
			l.style.marginTop = -1 * h + 'px';
			//l.firstElementChild.setAttribute('style','margin-top: ' + -1 * e.height.replace('px','') + 'px');
			l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style');
		     }
		 } else {//console.log('s-193b')
		     l.style.marginTop = -1 * h + 'px';
		     //l.firstElementChild.setAttribute('style','margin-top: ' + -1 * e.height.replace('px','') + 'px');
		     if (Math.ceil(l.offsetWidth/854) == 1) {
			a.style.left = api.left = (b.offsetWidth - w) / 2 + 'px'
		     } else {//console.log(Math.ceil(l.offsetWidth/854))
			//l.style.marginTop = ''; l.removeAttribute('style');
			l.style.marginTop = yh + 'px';
			l.firstElementChild.style.marginTop = ''; l.firstElementChild.removeAttribute('style');
		       //a.style.top = -1 * e.height.replace('px','') + 'px';
		     }
		   }
		  /*if ( Math.abs(e.marginLeft.replace('px','')) + b.offsetWidth - w > 0 ) {console.log('spec1')
		    e.width = api.left = Math.abs(e.marginLeft.replace('px','')) + b.offsetWidth - w + 'px';
		  } else {console.log('spec2')
		      e.height = '0px'
		      a.style.left = api.left = e.marginLeft
		    }*/
	       }

	     }// 20
			if (Math.ceil(l.offsetWidth/854) == 1 && playlist) {
			  playlist.style.top = '48px'
			  yt6.wna.style.marginTop = '-340px'
			  if (!yt6.ytg) yt6.inf.style.marginTop = '310px'
			}


	//(-c)
	} else {//console.log('s-24');
	    if (windowwidth < 657) {//console.log('s-25');
	      if (playlist) {
		if (!yt6.ytg) yt6.inf.style.marginTop = h - 53 + 'px'
		yt6.wna.style.marginTop = '-308px'
		playlist.style.top = '48px'
	      }
	      if (!wide_view()) {
		l.style.marginTop = ''; l.removeAttribute('style')
	      } else {
		  l.style.marginTop = '-362px';
		}
	    } else {//console.log('s-26');
		var yh = -1 * y.height.replace('px','').split('"').join('') - 2
		l.setAttribute('style','margin-top: ' + yh + 'px');
		if (l.offsetWidth >= 1066) {
		  l.firstElementChild.setAttribute('style','margin-top: ' + yh + 'px')
		  if (yt6.wna != null) yt6.wna.style.marginTop = ''
		  if (!yt6.ytg) yt6.inf.style.marginTop = ''
	          if (playlist) playlist.style.top = ''
		  if (yt6.wsb != null) yt6.wsb.style.top = ''
		} else {
		    l.firstElementChild.setAttribute('style',''); l.firstElementChild.removeAttribute('style')
		    if (navigator.userAgent.indexOf('Chrome') != -1 || playlist) {
		      if (playlist) {
			yt6.wna.style.marginTop = '-340px'
			if (!yt6.ytg) yt6.inf.style.marginTop = '310px'
		      }
		    } else {
			if (!yt6.ytg) yt6.wna.style.marginTop = yt6.inf.style.marginTop = ''
		      }
		    if (yt6.wsb != null) yt6.wsb.style.top = ''
	            if (playlist) playlist.style.top = '48px'
		  }
		a.style.top = l.style.marginTop;
		a.style.left = api.left = '0px';

	      }

	    //e.width = -1 * e.marginLeft.replace('px','') + 'px'
	    a.style.setProperty('background-color','','')
	  }

	//default view
	if (windowwidth < 657) {//console.log('tiny')
	  if (playlist) {
	    playlist.style.top = '48px';
	    yt6.wna.style.marginTop = '-340px'
	    if (!yt6.ytg) yt6.inf.style.marginTop = '310px'
	  }
	  if (yt6.wsb) yt6.wsb.style.top = ''
	  if (!wide_view()) {
	    l.style.marginTop = ''; l.removeAttribute('style')
	  } else {
	      l.style.marginTop = '-362px';
	    }

	  if (l.offsetWidth == 426) {
	    e.height = '0px';
	    a.style.top = '';
	    if (c) {
	      a.parentNode.style.backgroundColor = 'rgb(16, 16, 16)'
	    } else {
	        a.parentNode.style.backgroundColor = 'transparent'
	      }
	    if (yt6.wna != null) yt6.wna.style.marginTop = (!playlist) ? '' : '-308px';

	    if (windowwidth > b.offsetWidth) { //console.log('tiny-1')
	      a.parentNode.style.marginLeft = (b.offsetWidth - windowwidth) / 2 + 'px'
	      if ( w > windowwidth ) {
		a.style.left = api.left = '0px';
	       } else {
		   a.style.left = api.left = e.left = (b.offsetWidth - w) / 2 + parseFloat(a.parentNode.style.marginLeft.replace('px','').replace('-','')) + 'px';
		 }
	    } else { //console.log('tiny-2 ')
		if ( w > windowwidth || (w + 1 * a.style.left.replace('px','') > windowwidth) ) {
		  a.style.left = api.left = '0px'
		} else {
		    a.style.left = api.left = (b.offsetWidth - w ) / 2 + 'px';
		  }		      
	      }
	    if (w < 1 * a.style.left.replace('px','')) { a.parentNode.style.width = a.style.left }

	  } else {
	      if (c) {
		if (w > windowwidth) a.style.left = '-25px';
	        if (!playlist) {
		  yt6.wna.style.marginTop = '';
		} else {
		    a.style.top = -1 * h + 'px';
		    l.style.marginTop = -1 * h + 'px';
		  }
	      } else {
		  e.height = '0px';
		  a.style.left = '0px';
		  a.style.top = '';
		}
	    }
		    if (navigator.userAgent.indexOf('Chrome') == -1 && !playlist) { if (!yt6.ytg) yt6.inf.style.marginTop = '' }
	} else {
	    //yt6.inf.style.marginTop = ''
	    if (w > windowwidth) {
	      if (Math.ceil(l.offsetWidth/854) != 1) {
		yt6.wsb.style.top = -1 * (h + yh + 2) + 'px'
	      } else yt6.wsb.style.top = ''
	    }
	  }

	  e.left = '';
	  if ((c) || (windowwidth < 657)) {
	    if (!c) a.style.setProperty('background-color','transparent','');
	    a.style.setProperty('width', windowwidth - 1 * e.width.replace('px','') + 'px','')
	  } else {
	      a.style.width = '0px'
	    }
      }//wide else

    if (yt6.ytg) { yt6.tbg.style.setProperty('display','none','') } else api.display = 'none'

  //e.display = 'inline-block'
 }


  } else {//a.style != null

	  if (yt6.ytg) {
	    //l.style.marginTop = '';
	    if (yt6.size && yt6.size !='default') {
		yt6.wsb.style.top = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight) + 'px';
		api.left = Math.abs(document.getElementById('player').style.width.replace('px','') - api.width.replace('px','')) / 2 + 'px';
		var area = document.getElementById('player-area').innerHTML
		if (area.split('width: ')[1]) {
		  var x = ( 1 * api.width.replace('px','') - area.split('width: ')[1].split('px;')[0]) / 2
//console.log(x)
		  if (x < document.getElementById('player').style.left.replace('px','').replace('-','')) x = -1 * document.getElementById('player').style.left.replace('px','') / 2
//console.log(x)
		  api.left = x + 'px'
		}
		document.getElementById('player-area').style.height = h + 'px';
		var x = document.getElementById('player-area').parentNode.offsetHeight - h
		if (x >= 0) x = 0
		api.top = x + 'px';
	    } else api.left = '0px'
	  }
    }
}//scaling


/*
if (yt6.wsb.getAttribute('id') != 'related') {
  if (1 * tiny.marginLeft.replace('px','') > 100) {
    if (yt6.wna != null) yt6.wna.style.top = "0px"
  } else {
      if (yt6.wsb != null) yt6.wsb.style.top = ''
    }
}
*/

if ((p1 != null) && (bm0.style.visibility == 'visible')){
  if ((mep) && (1 * mep.getAttribute('class').indexOf('mejs-container-fullscreen') == -1)) {
    yt6.fullscreen = false;
  }
  if (yt6.fullscreen == true) {
    if (p1.style != '') {
      yt6.p1style = p1.getAttribute('style')
      p1.style.width = '100%';
      p1.style.height = '100%';
      p1.style.left = '0px';
    }
  } else {
      if (yt6.p1style) { p1.setAttribute('style', yt6.p1style); delete yt6.p1style }
    }
}


  var z = gclass("html5-progress-bar")
  if ((z != null) && (z[0] != null)) z[0].style.maxWidth = w + 'px'
  var z = gc('ytp-chrome-bottom')
  if ((z != null) && (z[0] != null)) { z[0].style.width = w - 24 + 'px'; z[0].style.left = '12px' }
  
  var z = gclass("mejs-layer");
  var x = gc('mejs-overlay mejs-layer mejs-overlay-play')[0]
  if (x != undefined) z.push(x)
  if ((z != null) && (z[0] != null)) {
    for(i=0;i<z.length-1;i++){
      if ( z[i] ) {
        z[i].style.width = w + 'px'
        z[i].style.height = h + 'px'
        if (z[i].getAttribute('class') == 'mejs-overlay mejs-layer mejs-overlay-play') {
          var x = z[i].firstChild.currentStyle;
          if ((x == undefined) && (typeof window.getComputedStyle != 'undefined')) var x = window.getComputedStyle(z[i].firstChild, null);
	  var y = z[i].style.display
	  z[i].style.width = x.width.replace('%','px')
	  z[i].style.height = x.height.replace('%','px')
	  z[i].style.left = ((p1.style.width != '100%') && (p1.style.height != '100%')) ? (w - x.width.replace('px','')) / 2 + 'px' : (screen.width - x.width.replace('px','')) / 2 + 'px'
	  z[i].style.top = ((p1.style.width != '100%') && (p1.style.height != '100%')) ? (h - hdiff -x.height.replace('px','')) / 2 + 'px' : (screen.height - x.height.replace('px','')) / 2 + 'px'
	  z[i].style.display = y
        }
      }
    }
  }
  var z = gc("mejs-captions-text")
  if ((z != null) && (z[0] != null)) {
    if ( typeof z === 'object') { 
      z[0].setAttribute("style",bm0.style.width);
      z[0].style.fontSize = 0.9 + (h / 32.5) + (407 / h) + "px";
      if (1 * z[0].style.fontSize.replace("px","") < 9.5) z[0].style.fontSize = "9.5px"
      if (1 * z[0].style.fontSize.replace("px","") > 23.5) z[0].style.fontSize = "23.5px"
    }
    z[0].parentNode.parentNode.style.zIndex = 1;//mejs-captions-layer
  }

  var x = [gc('mejs-sourcechooser-selector'), gc('mejs-captions-selector'), gc('mejs-speed-selector')]
  for(i=0;i<x.length;i++){
    if ((x[i] != null) && (x[i][0] != null)) {
      var z = x[i][0];
      if ((gc('mejs-clear')[0]) && (typeof z != 'undefined')){
        //z.style.maxWidth = "147px"; z.style.minWidth = "130px"
        function src_chooser(){
	  if (z.firstChild != null) {
	    return [z.firstChild.offsetHeight, z.firstChild.offsetWidth]
	  } else return [0,0]
	}
        var src_chooser_size = src_chooser(z);
        if (h - 30 < src_chooser_size[0]) {
          z.style.height = h - 51 + 'px';
          z.style.width = "145px";//((src_chooser_size[1]) + 15) + 'px'
          z.style.overflowY = "scroll"
        } else {
            z.style.height = src_chooser_size[0] + 1 + 'px'
            z.style.width = "130px";//(src_chooser_size[1] + 0) + 'px'
            z.style.overflowY = "hidden"
          }
        z.style.zIndex = 2
      }
    }
  }

  if (yt6.w7a != null) yt6.w7a.style.display = 'none';

  var z = document.getElementById("bm3")
  if (z) z.style.top = yt6.mhp.offsetHeight - 2 + "px" 

  ythtml5_size()

  var chat = document.getElementById('chat')
  if (chat && playlist) chat.style.top = playlist.style.top

}



function switch_players() {

  var p = player()
  var p1 = document.getElementById('player1')
  var p2 = document.getElementById('player2')
  var bm0 = document.getElementById('bm0')
  var flashvars = getFlashVars();//player().getAttribute('flashvars');
  var me_flash = getElementsByAttribute(document.getElementById("player-api"),"object","name","me_flash");

      var z = yt6.osw
      if (z == document.getElementById('placeholder-player')) {
        if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
        var z = z.firstChild;
      }


  if (p1 != null) {
    try { p1.pause() } catch(e) {}
    try { p2.pause() } catch(e) {}
  }
  var x = gclass('mejs-shim');
  if ((x != undefined) && (x != null) && (x[0] != undefined) && (x[0] != null) && (mep_x('me_flash_')[0] != null)) {
    if (typeof x[0].pauseMedia == 'function') { x[0].pauseMedia() }
  }
  if ( bm0.style.visibility === 'hidden') {
    yt6.x = true
    yt6.wmode = p.getAttribute('wmode')
    if (document.getElementById('iaextractor-menu')) { document.getElementById('iaextractor-menu').parentNode.removeChild(document.getElementById('iaextractor-menu')) }
    if (p.id == 'movie_player') {
      if (typeof p.getAttribute('flashvars') == 'string') {
        //if (typeof p.getPlayerState === 'function') {
	  if (p.name != 're-embed2') { try { p.pauseVideo(); p.postMessage("pauseVideo", "*") } catch(e){ } } else { try { yt6.embed.pause() } catch(e){} }
	  if (typeof p.style.setProperty == 'function') {
	    p.style.setProperty('width', '0px', 'important')
	    p.style.setProperty('height', '0px', 'important')
	  } else {
	      p.style.display = 'none'
	      if (me_flash[0]) me_flash[0].style.display = ''
	    }
	  resize_layers( bm0.style.width, bm0.style.height, false );
	//}
      } else {
	  try { gc('video-stream html5-main-video')[0].pause() } catch(e) {}
	  if (p.name == 're-embed2') try { yt6.embed.pause() } catch(e){}
	  p.style.visibility = 'hidden';
	  //p.style.display = 'none';
	  if (yt6.ytp) yt6.ytp.style.display = 'none';
	}
    }
    if (p.getAttribute('name') == 'me_flash') {
      if (typeof p.pauseMedia == 'function') {
	p.pauseMedia(); p.paused = true
      }
    }
    if ((p1 != null) && (p1.currentTime != null)) {
      try { p2.currentTime = p1.currentTime } catch(e) {}
      p2.playbackRate = p1.playbackRate
    }

    bm0.style.display = 'block';
    bm0.style.visibility = 'visible';

  } else {
      yt6.x = false
      bm0.style.visibility = 'hidden';
      //p.style.display = '';
      var p = document.getElementById('movie_player')
      if (p.id == 'movie_player') {
	if (typeof p.getAttribute('flashvars') == 'string') {
	  p.style.width = '';
	  p.style.height = '';
	  if (typeof p.style.setProperty == 'function') {
	    p.style.setProperty('width', z.style.width, '')
	    p.style.setProperty('height', z.style.height, '')
	  } else {
	      p.style.display = ''
	      if (me_flash[0]) me_flash[0].style.display = 'none'
	    }
	  p.style.opacity = '1.1'
	  //reload_flashplayer()
	  var p = document.getElementById('movie_player');//alert('abc '+ typeof yt6.ytplayercmd + typeof Sync)
	} else {
	    p.style.visibility = 'visible';
	    p.style.display = 'inline-block';
	    if (yt6.ytp) yt6.ytp.style.display = '';
	  }
	removeEL(p, "onStateChange", Sync, false);
	addEL(p, "onStateChange", Sync, false);
      }

      if (p.getAttribute('name') == 'me_flash') {
	  if (p.getAttribute('wmode') != yt6.wmode) { 
	    var param = getElementsByAttribute(p,"param","name","flashvars");//alert(typeof param + param + typeof param[0] + param[0])
	    if ((param != null) && (param[0] != null)) { //alert(p.getAttribute('wmode'))
	      var file = param[0].getAttribute("value").split("&file=")[1]
	      param[0].setAttribute("value", param[0].getAttribute("value").split("&file=")[0]);
	      param[0].setAttribute("value", param[0].getAttribute("value").split("&file=")[0] + "&file=" + file);
	      //reload_flashplayer()
	    }
	  }

	  yt6.wmode = p.getAttribute('wmode')
	  p.style.opacity = '1.1'
        if (typeof p.pauseMedia == 'function') {
	  p.pauseMedia(); p.paused = true
        }
      }
      if ((p1 != null) && (p1.currentTime != null)) {
        try { p2.currentTime = p1.currentTime } catch(e) {}
        p2.playbackRate = p1.playbackRate
      }
      if ( (typeof p.getPlayerState === 'function') && (p2 != null) ) {
        try { p2.currentTime = p.getCurrentTime() } catch(e) {}
        p.setPlaybackRate( p2.playbackRate )
        p2.playbackRate = p.getPlaybackRate()
      }
      //window.postMessage("unMute", "*"); 
    }

  no_cards()

  if (yt6.size == 'media') aspect('media')
  gc('play yt-uix-button-text')[0].innerHTML = 'play'
  set_controls()

}

function ythtml5_size() {

  if ( (typeof player().getPlayerState == 'function') && (player().getAttribute('flashvars') == null) && (document.getElementById(mep_x("mep_")) != null) ) {

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      var z = z.firstChild;
    }
    var o = z.getAttribute('style'); if (o) z.removeAttribute('style')
    //if (z.getAttribute('id') != 'player') {
      var y = z.currentStyle || window.getComputedStyle(z, null)
function nop(){//    } else {
	var y = {};
	y.width = z.offsetWidth + 'px';
	y.height = z.offsetHeight + 'px';
	y.left = z.offsetLeft + 'px';
	y.top = z.offsetTop + 'px';
      }

    if (z.getAttribute('id') != 'player') {
      yt6.hdiff = parseInt( y.height.replace('px','') - ((y.height.replace('px','') / 60 >>0) * 60) ); 
      var hdiff = yt6.hdiff
      if (hdiff == undefined) hdiff = 30
    } else var hdiff = 0

    if (o != null) z.setAttribute('style', o)

    if ((player()) && (player() != null)) var webgl = get_webgl(); //getElementsByAttribute(player(),'canvas','draggable','true')[0];
    var bm0 = document.getElementById('bm0').style
    var yt = gc('html5-video-content')[0].style
    var v = gc('video-stream html5-main-video')[0]
    if (document.getElementById('bm0').getAttribute('id') == gc('html5-video-content')[0].getAttribute('id')) var yt = v.style

    if ( (1 * bm0.width.replace('px','')) < Math.round((bm0.height.replace('px','') - hdiff) * yt6.aspect_ratio )) {
	v.style.width = yt.width = bm0.width;
	v.style.height = yt.height = Math.round(bm0.width.replace('px','') / yt6.aspect_ratio ) + 'px';
	v.style.left = yt.left = '0px';
	v.style.top = yt.top = Math.round((( 1 * bm0.height.replace('px','') - yt.height.replace('px','') ) / 2) - (hdiff / 2)) + 'px';
	if (webgl) {
	  if (!( (1 * bm0.height.replace('px','')) < Math.round(bm0.width.replace('px','') / (webgl.width / webgl.height)) )) {
 	    webgl.style.width = bm0.width;
	    webgl.style.height = Math.round(bm0.width.replace('px','') / (webgl.width / webgl.height)) + 'px'
	    webgl.parentNode.style.left = '0px'
	    webgl.parentNode.style.top = Math.round(yt.top.replace('px','') - ((1 * webgl.style.height.replace('px','') - 1 * yt.height.replace('px','')) / 2)) + 'px'
	  } else {
		webgl.style.height = 1 * bm0.height.replace('px','') - hdiff + 'px'
		webgl.style.width = Math.round((bm0.height.replace('px','') - hdiff) * (webgl.width / webgl.height)) + 'px'
		webgl.parentNode.style.left = Math.round((bm0.width.replace('px','') - webgl.style.width.replace('px','') ) / 2) + 'px';
		webgl.parentNode.style.top = Math.round(yt.top.replace('px','') - ((1 * webgl.style.height.replace('px','') - 1 * yt.height.replace('px','')) / 2)) + 'px'
	    }
	}
    } else {
	v.style.width = yt.width = Math.round((bm0.height.replace('px','') - hdiff) * yt6.aspect_ratio ) + 'px';
	v.style.height = yt.height = (1 * bm0.height.replace('px','') - hdiff) + 'px';
	v.style.left = yt.left = Math.round((bm0.width.replace('px','') - yt.width.replace('px','') ) / 2) + 'px';
	v.style.top = yt.top = '0px';
	if (webgl) {
	  webgl.style.height = 1 * bm0.height.replace('px','') - hdiff + 'px'
	  webgl.style.width = Math.round((bm0.height.replace('px','') - hdiff) * (webgl.width / webgl.height)) + 'px'
	  webgl.parentNode.style.left = Math.round((bm0.width.replace('px','') - webgl.style.width.replace('px','') ) / 2) + 'px';
	  webgl.parentNode.style.top = Math.round(yt.top.replace('px','') - ((1 * webgl.style.height.replace('px','') - 1 * yt.height.replace('px','')) / 2)) + 'px'
	}
      }
  var properties = ['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform']
  var z = gc('ytp-iv-video-content')[0]
  for(i=0;i<properties.length;i++){
    if ((z) && (typeof z.style[properties[i]] !== 'undefined')) { z.style[properties[i]] = 'none'; break; }
  }
  
  }
}


function aspect(a) { 
  if ((player()) && (player() != null)) var webgl = get_webgl(); //getElementsByAttribute(player(),'canvas','draggable','true')[0]

  var class_0 = document.getElementById('player').getAttribute('class')
  if (!class_0 && typeof document.getElementById('player').outerHTML == 'string') var class_0 = document.getElementById('player').outerHTML.split('class="')[1].split('"')[0]
  if (class_0) {
    var class_1 = class_0.replace('small','small_a')
    if (!class_1 || (class_1 && class_1.indexOf('small_a') == -1)) class_1 = class_0.replace('medium','medium_a')
    if (!class_1 || (class_1 && class_1.indexOf('medium_a') == -1)) class_1 = class_0.replace('large','large_a')
  }

  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - getScrollbarWidth();// - 1
  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || yt6.body.clientHeight);
  var hdiff = yt6.hdiff
  if (hdiff == undefined) hdiff = 30
  var dw = document.getElementById('aspect')
  var bm0 = document.getElementById('bm0')

  if (yt6.osw.getAttribute('id') != 'player') {
    var z = yt6.osw
  } else var z = yt6.osw.parentNode

  //if ( z.offsetWidth > windowwidth ) {console.log('t1'+windowwidth + ' '+ Math.round(((windowheight / 100 >>0) * 80) * yt6.aspect_ratio))
    if (yt6.ytg) {
	var pp = document.getElementById('player')
        var ar = pp.style.width.replace('px','') / pp.style.height.replace('px','')
	var pa = document.getElementById('player-area'); if (!bm0.ytg_oh) bm0.ytg_oh = pa.style.height
	var sb = document.getElementById('sidebar');
    }
    var playerwidth = Math.min( Math.round(((windowheight / 100 >>0) * 80) * yt6.aspect_ratio), windowwidth)
  //} else {console.log('t2 '+windowwidth + ' '+ Math.round(((windowheight / 100 >>0) * 80) * yt6.aspect_ratio))
      //var playerwidth = Math.min( Math.round(((windowheight / 100 >>0) * 80) * yt6.aspect_ratio), windowwidth)
    //}

//(!a) &&
//  if ((bm0.style.width != playerwidth ) && (  ( (webgl) && (bm0.style.height != Math.round(playerwidth / parseFloat(webgl.width / webgl.height)) + 'px') ) || ( (!webgl) && ( (parseInt(bm0.style.height.replace('px','')) != Math.round((playerwidth / yt6.aspect_ratio))) && (parseInt(bm0.style.height.replace('px','')) != Math.round(((windowheight / 100 >>0) * 80) * yt6.aspect_ratio)) ))  ))  {

//alert(a + ' ' + windowwidth + ' ' + playerwidth + bm0.style.width + bm0.style.height + Math.round(1*((windowheight / 100 >>0) * 80) * yt6.me_aspect) +  'px '+ bm0.style.height + ' ' + Math.round((windowheight / 100 >>0) * 80) + 'px' + Math.round(playerwidth / yt6.aspect_ratio) + 'px')

  if ((a != 'default' ) && (!((1*bm0.style.height.replace('px','') == Math.round((windowheight / 100 >>0) * 80)) && (1*bm0.style.width.replace('px','') == Math.round(2+((windowheight / 100 >>0) * 80) * yt6.me_aspect)) && (yt6.size == 'theater') )) &&
	(  ((webgl) && (  (bm0.style.height != Math.round(playerwidth / parseFloat(webgl.width / webgl.height)) + 'px') || (!dw)  )) ||
	   ((!webgl) && (  (bm0.style.height != Math.round(playerwidth / yt6.aspect_ratio) + 'px') || (!dw)  )) ||
	   ((!webgl) && (  (bm0.style.height != Math.round(playerwidth / yt6.aspect_ratio) + 'px') && (dw)  ))
	   //((!webgl) && (  (parseInt(document.getElementById('player1').style.width.replace('px','')) != document.getElementById('player1').width) || (!dw)  ))
	)
     ) {
//console.log('t')
    if ( ((dw) && (a != 'media')) || (a == 'theater') ) {

	yt6.size = 'theater'
	var w = playerwidth
	var h = (webgl) ?
	  w / parseFloat(webgl.width / webgl.height) :
	    w / yt6.aspect_ratio;

    } else {
//console.log('m')
	if ((document.getElementById('player1').width) || (document.getElementById('player1').height && yt6.size == 'media')) {

	  yt6.size = 'media'

	  var w = document.getElementById('player1').width
	  var h = document.getElementById('player1').height

	  if (bm0.style.visibility == 'hidden') {


		FireEvent2(player(), 'contextmenu')

		var k = gc('ytp-menuitem')
		for(i=0;i<k.length-1;i++){
		  if (k[i] && k[i].innerHTML.indexOf('Stats for nerds') != -1 || i==6) { FireEvent2( k[i], 'click'); break }
		}

		var z = gc('ytp-popup ytp-contextmenu')[0]
		if (z) z.style.display = 'none'
		var z = gc('html5-video-info-panel-content')[0]
		if (z) {
		  z.parentNode.style = 'display: none'
		  var y = z.innerHTML.split('Resolution')[1]
		  if (y) {
		    var y = y.split('<span>')[1]
		    if (y) {
		      var y = y.split(' ').join('').split('</span>')[0].split('@')[0]
		      if (y && y.indexOf('x') != -1) {
		        var w = 1 * y.split('x')[0]
		        var h = 1 * y.split('x')[1]
			if (w == 0 && h == 0) {
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
		        if (!isNaN(parseFloat(w / h)) && parseFloat(w / h).toFixed(4) !== yt6.aspect_ratio.toFixed(4)) {
		          yt6.aspect_ratio = parseFloat(w / h)
		        } else { yt6.aspect_ratio = yt6.ar }
		      }
		    }
	          }
		}

		FireEvent2( gclass('html5-video-info-panel-close')[0], 'click')

	  }

	} else {
//console.log('t2')
	      yt6.size = 'theater'
	      var w = playerwidth;
	      var h = (webgl) ?
	        w / parseFloat(webgl.width / webgl.height) :
	          w / yt6.aspect_ratio;
          }

      }

   var w = Math.round(w) + 'px'
   var h = Math.round(h) + 'px'

     if (pa) {
       pa.style.height = bm0.style.height = h; if (sb) sb.style.top = h
       pa.style.width = bm0.style.height * ar + 'px';
       //bm0.style.top = pp.style.top;
       var full = screen.width - 2*getScrollbarWidth()
       pa.parentNode.setAttribute('style','width: ' + full + 'px');
     }

    if (yt6.wna != null) {
      if (dw != null) { dw.parentNode.removeChild(dw)}
      yt6.tbg.style.backgroundColor = "rgb(16, 16, 16)"
      dw = document.createElement('span');
      dw.id = 'aspect';
      dw.innerHTML = '<span><input id="a_width" value="' + w.replace("px","") + '" style="display:inline-block;width:35px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) { document.getElementById(\'snarls_player\').w = document.getElementById(\'a_width\').value;  document.getElementById(\'snarls_player\').h  = document.getElementById(\'a_height\').value; resize_layers(document.getElementById(\'a_width\').value + \'px\', document.getElementById(\'a_height\').value + \'px\', false) }" onfocus="document.getElementById(\'a_width\').value=document.getElementById(\'a_width\').value;document.getElementById(\'a_height\').value=document.getElementById(\'a_height\').value"></input>x<input id="a_height" value="' + h.replace("px","") + '" style="display:inline-block;width:35px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) resize_layers(document.getElementById(\'a_width\').value + \'px\',document.getElementById(\'a_height\').value + \'px\', false)" onfocus="document.getElementById(\'a_height\').value=document.getElementById(\'a_height\').value;document.getElementById(\'a_width\').value=document.getElementById(\'a_width\').value"></input>px</span>';
      document.getElementById('yt-alert-message').appendChild(dw);
	/*var c = 1 * document.getElementById('yt-alert-message').offsetWidth
	var d = 1 * document.getElementById('aspect').firstChild.offsetWidth
	var e = 1 * document.getElementById('remove-sp').parentNode.offsetWidth
      var z = document.getElementById('aspect')
      z.setAttribute('style','display: inline-block; vertical-align: top; color:#333; background:#FFFFFF; opacity:0.9; position: relative; left:' + parseFloat(c - d - e) + 'px;');
      var z = z.style
      z.display = 'inline-block'; z.verticalAlign = 'top'; z.color = '#333'; z.background = '#FFFFFF'; z.opacity = '0.9'; z.position = 'relative'; z.left = parseFloat(c - d - e) + 'px'; //z.maxWidth = '200px'*/
      document.getElementById('a_width').value = w.replace('px','')
      document.getElementById('a_height').value = h.replace('px','')
    }

    resize_layers(w,h, true)

    if (class_1) document.getElementById('player').setAttribute('class',class_1)
    if (class_0) {
      if (class_0.indexOf('small_a') != -1) document.getElementById('player').setAttribute('class',class_0.replace('small_a','small'))
      if (class_0.indexOf('medium_a') != -1) document.getElementById('player').setAttribute('class',class_0.replace('medium_a','medium'))
      if (class_0.indexOf('large_a') != -1) document.getElementById('player').setAttribute('class',class_0.replace('large_a','large'))
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
      var w = fix_Width();
      var h = (webgl) ? w.replace('px','') / parseFloat(webgl.width / webgl.height) + 'px' : fix_Height()

      var dw = document.getElementById('aspect')
      if (dw != null) { dw.parentNode.removeChild(dw)}
      resize_layers(w,h)
      if (!wide_view()) { yt6.tbg.style.backgroundColor = 'transparent' } else yt6.tbg.style.backgroundColor = 'black'
      document.getElementById('player-api').style.overflow = 'hidden';
    }

}


function deldiv(){

  if (document.getElementById('movie_player0')) alt_yt_cleanup()

  var z = gc('yt6-proxy-error')
  if (z && z[proxies.length-1]) {
    for (i=0;i<z.length;i++) {
      if (z[i]) z[i].parentNode.removeChild(z[i])
    }
  }

  if (typeof ($) !== 'undefined') {
    if (yt6.player1) { try { yt6.timer = 999999999; yt6.player1.setSrc(''); yt6.player1.load() } catch(e) { } }
    if (yt6.player2) { try { yt6.timer = 999999999; yt6.player2.setSrc(''); yt6.player2.load() } catch(e) { } }
    $.removeData([mejs.players['mep_1'], mejs.players['mep_0']])
    mejs.players['mep_1'] = null; delete mejs.players['mep_1'];
    mejs.players['mep_0'] = null; delete mejs.players['mep_0'];
    $.removeData(mejs.players)
    mejs.players = null; delete mejs.players;
    mejs.mepIndex = 0; mejs.players = {}
  }

  var z = document.getElementById('re-embed2')
  if (z != null) {
    z.parentNode.removeChild(z);
    if (document.getElementById('player-unavailable') != null) document.getElementById('player-unavailable').style.setProperty('display','',''); document.getElementById('player-unavailable').removeAttribute('style')
    player().style.visibility = '';
    player().style.display = '';
    if ((document.getElementById('bm0') != null) && (document.getElementById('bm0').style.display == 'none')) {
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
      document.getElementById('bm0').style.display = 'block'
    }
  }

  var z = yt6.osw
  if (!z) {
    var z = document.getElementById('placeholder-player').firstChild.style;
    if (typeof z !== 'object') {
      document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
      var z = document.getElementById('placeholder-player').firstChild;
    }
  } else {
      if (z.getAttribute('id') == 'placeholder-player') {
        if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
        var z = z.firstChild;
      }
    }

  if (z && typeof z.style == 'object') {
    var o = z.getAttribute('style'); if (o && !yt6.ytg) z.removeAttribute('style');
    var o = z.currentStyle || window.getComputedStyle(z, null)
    //z.setAttribute('style', o); if (o) z.removeAttribute('style');
  
    if (document.getElementById('bm0') != null) resize_layers(o.width, o.height, false)
  }

  if (yt6.ytg) {
    document.getElementById('player-area').parentNode.removeAttribute('style')
    document.getElementById('player-api').removeAttribute('style')
    yt6.wsb.removeAttribute('style')
  }
  if (yt6.ytp) yt6.ytp.style.display = '';

  var y = gc('ytp-chrome-bottom')
  var properties = ['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform']
  var v = gc('video-stream html5-main-video')[0]
  var x = gc('ytp-iv-video-content')[0]
  for(i=0;i<properties.length;i++){
    if ((v) && (typeof v.style[properties[i]] !== 'undefined')) {
      v.style[properties[i]] = 'rotate(0deg) scale(1)';
      if ((x) && (typeof x.style[properties[i]] !== 'undefined')) z.style[properties[i]] = 'none';
      break;
    }
  }
  if (typeof y[0] != 'undefined') {
    y[0].style.width = o.width - 24 + 'px'; y[0].style.left = '12px'
    v.style.width = o.width +'px'
    v.style.height = o.height +'px'
  }

  var z = document.getElementById('yt-consent-dialog')
  if (z) { z.style.display = ''; z.removeAttribute('style') }

  var z = gclass("html5-progress-bar"); if (typeof z[0] != 'undefined') { z[0].setAttribute('style',''); z[0].removeAttribute("style") }

  var z = gclass('ad-container-single-media-element-annotations')
  if ((typeof z[0] != 'undefined') && (z[0].style.display == 'none')) {
    z[0].style.display = '';
    var z = gc('caption-window ytp-caption-window-bottom')
    if (typeof z[0] != 'undefined') z[0].marginBottom = ''
  }

  var z = gc('ytp-ce-covering-overlay')[0]
  if (z) z.parentNode.style.display = ''

  removeEL(window, 'message', yt6.ytplayercmd, false)
  removeEL(document.getElementById('movie_player'), "onStateChange", Sync, false);

  var z = [ 'controls-sp','aspect','bm6','bm3','bm1','bm0','theater-left' ]
  for(i=0;i<z.length;i++){
    var y = document.getElementById(z[i])
    if (y != null) y.parentNode.removeChild(y)
  }

  if (document.getElementById('remove-sp') != null) document.getElementById('yt-alert-message').removeChild(document.getElementById('remove-sp').parentNode)

  var z = ['movie_player','player','player-api']
  for(i=0;i<z.length;i++){
    var y = document.getElementById(z[i])
    if (y != null) { y.wmode = ''; y.removeAttribute('wmode') }
  }

  var z = document.getElementById('movie_player0')
if (z != null) {
  z.setAttribute('src','')
  z.setAttribute('flashvars',document.getElementById('movie_player').getAttribute('flashvars'));
  document.getElementById('movie_player').parentNode.removeChild(document.getElementById('movie_player'));
  z.setAttribute('id','movie_player');
  z.style.display = '';
  z.setAttribute('src','https://s.ytimg.com/yts/swfbin/player-' + yt6.swfbin4 + '/watch_as3.swf')
}

    var webgl = get_webgl();

  var z = ['theater-background','masthead-positioner-height-offset','movie_player','watch7-sidebar','watch-appbar-playlist','playlist','related','player-api','player','player-container','placeholder-player','top','main']
  for(i=0;i < z.length;i++){
    var x = document.getElementById(z[i])
    if (x != null) {
      var y = x.style
      if (z[i] == 'theater-background') y.backgroundColor = 'black';
      if (z[i] == 'movie_player') { try { delete x.width; delete x.height; } catch(e) { x.width = ''; x.height = '' } }
      if (z[i] != 'player-api') {
        for (var j in y) { if (typeof y.hasOwnProperty == 'function' && y.hasOwnProperty(y[j]) && typeof y.setProperty == 'function') { y.setProperty(y[j],'','') } };
        x.removeAttribute('style')
      } else { if (!yt6.ytg) { y.width = ''; y.height = ''; y.left = ''; y.display = ''; } };
      if ((z[i] == 'placeholder-player' || z[i] == 'player' || z[i] == 'main') && typeof x.firstChild.style == 'object') {
      	y = x.firstChild.style
        for (var j in y) { if (typeof y.hasOwnProperty == 'function' && y.hasOwnProperty(y[j]) && typeof y.setProperty == 'function') { y.setProperty(y[j],'','') } };
        x.firstChild.removeAttribute('style')
      }
    }
  }

  var z = [yt6.con, yt6.wna, yt6.inf]
  for (i=0;i<z.length;i++) {
    if (z[i]) { z[i].setAttribute('style',''); z[i].removeAttribute('style') }
  }


  if (document.getElementById('watch7-notification-area')) document.getElementById('watch7-notification-area').style.display = 'none'

  if (webgl) {
    webgl.removeAttribute('style')
    webgl.parentNode.style.left = -1 * webgl.parentNode.parentNode.style.left.replace('px','') + 'px'
    webgl.parentNode.style.top = -1 * webgl.parentNode.parentNode.style.top.replace('px','') + 'px'
  }

  if (gc('clear')[0]) gc('clear')[0].removeAttribute('id')
  if (typeof gc('alerts-wrapper')[0] != 'undefined') gc('alerts-wrapper')[0].removeAttribute('id')

  removeEL(window, 'spfrequest', yt6.body.spfrequest, false)
  removeEL(window, 'spfprocess', yt6.body.spfprocess, false)
  removeEL(window, 'spfdone', yt6.body.spfdone, false)

  if (yt6.body.snarls_watchdog) yt6.body.snarls_watchdog.disconnect()

  if (document.getElementById('snarls_player')) document.getElementById('snarls_player').parentNode.removeChild(document.getElementById('snarls_player'))

}


/*
  Zooming and rotating HTML5 video player
  Homepage: http://github.com/codepo8/rotatezoomHTML5video
  Copyright (c) 2011 Christian Heilmann
  Code licensed under the BSD License:
  http://wait-till-i.com/license.txt
*/



function control_panel1() {

  if (!yt6.osw) getReferenceObjects()

  if ((document.getElementById('watch-header') != null) && (document.getElementById('watch7-notification-area') == null)) {
     var js = document.createElement('div');
     js.id = 'watch7-notification-area';
     document.getElementById('watch-header').parentNode.insertBefore(js, document.getElementById('watch-header'))
     yt6.wna = document.getElementById('watch7-notification-area')
     delete js;
  }

  var z = document.getElementById('watch7-notification-area')
  if (z != null) {
     z.setAttribute('class','yt-card')
     z.setAttribute('style','display: block; padding: 0px 0px 1px 0px; z-index: 5')
     var z = z.style
     z.display = 'block'; z.padding = '0px 0px 1px 0px'; z.zIndex = '5'
  }

  var z = yt6.wna

  if (!z) return void 0;
  
  if (document.getElementById("yt-alert-message") === null) {
    var js = document.createElement('div');
    js.id = 'yt-alert-message';
    z.insertBefore(js, z.firstChild);
    js.setAttribute('class','yt-alert-message');
    js.setAttribute('style','background:#FFFFFF; opacity:0.8')
    delete js;
  }

  var controls = getElementsByAttribute(z,'div','id','controls-sp');
  if (controls != null) for(i=0;i<controls.length;i++) { if (controls[i]) controls[i].parentNode.removeChild(controls[i]) }

  if (document.getElementById('remove-sp') == null) {

    var js = document.createElement('span')
    document.getElementById('yt-alert-message').appendChild(js);
    var span = document.getElementById('yt-alert-message').getElementsByTagName('span')[0]

    var remove = document.createElement('div');
    remove.id = 'remove-sp';
    var remove_sp_innerhtml = '<button onclick="switch_players()" class="yt-uix-button-text" aria-label="Switch" title="Switch" style="padding: 0 1px 0 0"><img src="//s.ytimg.com/yts/img/HTML5_1Color_Black-vfl902gVJ.png" style="vertical-align:middle; height:12px; padding:0px""></img></button><button onclick="aspect()" class="yt-uix-button-text" aria-label="Resize" title="Resize">«↔»</button><br><button onclick="deldiv()" class="yt-uix-button-text">remove</button>'

    span.appendChild(remove);
    remove.setAttribute('style','display:inline-block');
    if (remove.style.display !== 'inline-block') {// IE8 needs different approach
	var divpos = 'absolute'
        span.removeChild(span.firstChild)
	span.innerHTML = '<div id="remove-sp" style="display: inline-block; float: left">'+ remove_sp_innerhtml + '</div>'
	//'<div id="controls-sp" style="display: inline-block; position: ' + divpos + '; padding-left: 1px; float: right;">'+
	//'</div>';
    } else {
	var divpos = 'relative'
	remove.innerHTML = remove_sp_innerhtml
      }
    //&#9724;
    //&#8633;
    //&#8703;//
  }


if (document.getElementById('controls-sp') == null) {
  var js = document.createElement('div');
  js.id = 'controls-sp';
  document.getElementById('remove-sp').parentNode.insertBefore(js, document.getElementById('remove-sp').nextSibling);
  document.getElementById('controls-sp').setAttribute('style','display: inline-block; padding-left: 1px;');
  var z = document.getElementById('controls-sp').style
  if (z.display != 'inline-block') {
    var divpos = 'absolute'
    z.display = 'inline-block'; z.position = divpos; z.paddingLeft = '1px'; z.float = 'right';
  } else var divpos = 'relative'
}

var controls = document.getElementById('controls-sp')

/* If there is a controls element, add the player buttons */
/* TODO: why does Opera not display the rotation buttons? */
  if (controls) {
    controls.innerHTML =  '<button class="play yt-uix-button-text" style="display: inline-block; width: 46px; text-align:left">play</button>'+
  			    '<div style="display: inline-block; position: ' + divpos + '">'+
			    '<button class="previous yt-uix-button-text" style="padding: 0 4px 0 4px; right: 0px">prev</button>'+
			    '<button class="next yt-uix-button-text" style="padding: 0 4px 0 4px; right: 0px">next</button></div>'+
                          '<div id="change">' +
                            '<button class="reset yt-uix-button-text" style="width:40px; text-align:left">reset</button>' +
                            '<button class="zoomin yt-uix-button-text" aria-label="Zoom in" title="Zoom in">+</button>' +
                            '<button class="zoomout yt-uix-button-text" aria-label="Zoom out" title="Zoom out">-</button>' +
                            '<button class="left yt-uix-button-text" aria-label="Move left" title="Move left">⇠</button>' +
                            '<button class="right yt-uix-button-text" aria-label="Move right" title="Move right">⇢</button>' +
                            '<button class="up yt-uix-button-text" aria-label="Move up" title="Move up">⇡</button>' +
                            '<button class="down yt-uix-button-text" aria-label="Move down" title="Move down">⇣</button>' +
                            '<button class="rotateright yt-uix-button-text" aria-label="Rotate right" title="Rotate right">&#x21bb;</button>' +
                            '<button class="rotateleft yt-uix-button-text" aria-label="Rotate left" title="Rotate left">&#x21ba;</button>' +
                          '</div>'
  }

  //document.getElementById('remove-sp').parentNode.setAttribute('style','display:inline-block');

  return document.getElementById('controls-sp');
}//control_panel1


var CtrlS = function (stage,v){

  var controls = control_panel1();

  if (!controls) return void 0;


/* predefine zoom and rotate */
  var zoom = 1,
      rotate = 0;

/* Grab the necessary DOM elements */

  var stage = stage;
  var v = v; if (v == undefined) { var v = gc('video-stream html5-main-video')[0] }


  //alert(v.getAttribute('id') + " " + stage.getAttribute('id'))


  var bm0 = document.getElementById('bm0');
  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || yt6.body.clientWidth) - getScrollbarWidth();// - 1
  var hdiff = parseInt(yt6.hdiff)
  if (hdiff == undefined) hdiff = 30
  var me_flash_ = getElementsByAttribute(document,"embed","name",mep_x("me_flash_")) ;
  if (me_flash_[0] != undefined) {
    var vp = me_flash_[0].parentNode
  } else {
      var me_flash = getElementsByAttribute(document.getElementById("player"),"object","name","me_flash");
      if (me_flash[0] && me_flash[0].style.left == '') {
	me_flash[0].style.left = '0px'
	me_flash[0].style.top = '0px'
      }
    }
  var flashvars = getFlashVars();
  if (document.getElementById(mep_x('mep_')) != null) var poster = getElementsByAttribute(document.getElementById(mep_x('mep_')),'div','class','mejs-poster mejs-layer')[0]
  if ((player()) && (player() != null)) var webgl = get_webgl(); //getElementsByAttribute(player(),'canvas','draggable','true')[0];
  
/* Array of possible browser specific settings for transformation */
  var properties = ['transform', 'WebkitTransform', 'MozTransform',
                    'msTransform', 'OTransform'],
      prop = properties[0];
      //yt6.prop = prop

/* Iterators and stuff */    
  var i,j,t;

      var z = yt6.osw
      if (z.getAttribute('id') == 'placeholder-player') {
        if ( (z.firstChild && !z.firstChild.style) || (z.firstChild && z.firstChild.style && typeof z.firstChild.style != 'object') ) z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
        var z = z.firstChild;
      }

  
/* Find out which CSS transform the browser supports */
  for(i=0,j=properties.length;i<j;i++){
    if(typeof stage.style[properties[i]] !== 'undefined'){
      prop = properties[i];
      document.getElementById('controls-sp').prop = prop;
      break;
    }
  }

/* Position video */
  var playlist = document.getElementById('watch-appbar-playlist') || document.getElementById('playlist')
  if (bm0 && !bm0.style.width && !bm0.style.height) {
    bm0.style.width = fix_Width()
    bm0.style.height = fix_Height()
    v.style.left = '0px'
    v.style.top = '0px'
  }
  if (bm0) resize_layers( bm0.style.width, bm0.style.height, false )


/* If a button was clicked (uses event delegation)...*/
  yt6.controls_pushed = false
  addEL(controls, 'mouseup',function(e){ yt6.controls_pushed = false }, false)
  addEL(controls, 'mousedown',function(e){ yt6.controls_pushed = true
    t = e.target || getTarget(e);

    if(t.nodeName.toLowerCase()==='button'){

/* Check the class name of the button and act accordingly */    
      switch(t.className){

	case 'next yt-uix-button-text':
	if (player() && typeof player().nextVideo == 'function') { player().nextVideo(); try { yt6.player1.pause(); yt6.player1.media.currentTime = yt6.player2.media.currentTime = 0 } catch(e) {} }
	break;

	case 'previous yt-uix-button-text':
	if (player() && typeof player().previousVideo == 'function') { player().nextVideo(); try { yt6.player1.pause(); yt6.player1.media.currentTime = yt6.player2.media.currentTime = 0 } catch(e) {} }
	break;

/* Toggle play functionality and button label */    
	case 'play yt-uix-button-text':
	//console.log('v:'+v.id +' s:'+ stage.id + ' n:'+v.getAttribute('name'))
	if ((v != stage) || ((v.getAttribute('name') != null) && (v.getAttribute('name').indexOf('me_flash') > -1))) {
	  if ((v.paused == undefined) || (v.paused == true)){
	    if (typeof v.play == 'function') v.play()
	    if (typeof v.playMedia == 'function') { v.playMedia(); v.paused = false };
            //if ((document.getElementById(mep_x('me_flash_')) != null) && (typeof document.getElementById(mep_x('me_flash_')).pauseMedia == 'function')) { document.getElementById(mep_x('me_flash_')).playMedia(); v.paused = false };
            t.innerHTML = 'pause';
          } else {
            if (typeof v.pause == 'function') v.pause()
            if (typeof v.pauseMedia == 'function') { v.pauseMedia(); v.paused = true };
            //if ((document.getElementById(mep_x('me_flash_')) != null) && (typeof document.getElementById(mep_x('me_flash_')).pauseMedia == 'function')) { document.getElementById(mep_x('me_flash_')).pauseMedia(); v.paused = true };
            t.innerHTML = 'play';
          }
	  if (player() && typeof player().getPlayerState == 'function' && player().getPlayerState() > 2 && bm0.style.visibility == 'hidden') { player().playVideo(); player().playVideo() }
	} else {
	    if (player().name != 're-embed2') {
		var p = player(); var m = window
		    if (typeof p.getPlayerState == 'function') {//alert(player().getPlayerState())
			if (p.getPlayerState() != 1 ) {
			  m.postMessage("playVideo", "*");
			  t.innerHTML = 'pause';
			} else {
			    m.postMessage("pauseVideo", "*");
			    t.innerHTML = 'play';
			  }
		    }
	    } else {
		var p = yt6.embed.player;
		    if (p && typeof p.getPlayerState == 'function') {//alert(player().getPlayerState())
			if (p.getPlayerState() != 1 ) {
			  yt6.embed.play()
			  t.innerHTML = 'pause';
			} else {
			    yt6.embed.pause()
			    t.innerHTML = 'play';
			  }
		    } else onYouTubeIframeAPIReady()
	      }
	  }
	break;

/* Increase zoom and set the transformation */
	case 'zoomin yt-uix-button-text':
	  if (player().getAttribute('wmode') != 'transparent') {
	    player().setAttribute('wmode','transparent');
	  }
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    zoom = zoom + 0.1;
	    v.style[prop] ='scale('+zoom+') rotate('+rotate+'deg)'; if (poster) poster.style[prop] = v.style[prop]
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.style[prop] = v.style[prop]
	    }
	  } else return true, function(){}, 200
	  })
	break;

/* Decrease zoom and set the transformation */
	case 'zoomout yt-uix-button-text':
	  if (player().getAttribute('wmode') != 'transparent') {
	    player().setAttribute('wmode','transparent');
	  }
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    zoom = zoom - 0.1;
	    v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)'; if (poster) poster.style[prop] = v.style[prop]
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.style[prop] = v.style[prop]
	    }
	  } else return true, function(){}, 200
	  })
	break;

/* Increase rotation and set the transformation */
	case 'rotateright yt-uix-button-text':
	  if (player().getAttribute('wmode') != 'transparent') {
	    player().setAttribute('wmode','transparent');
	  }
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    rotate = rotate + 5;
	    v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')'; if (poster) poster.style[prop] = v.style[prop]
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.style[prop] = v.style[prop]
	    }
	  } else return true, function(){}, 200
	  })
	  break;
/* Decrease rotation and set the transformation */
	case 'rotateleft yt-uix-button-text':
	  if (player().getAttribute('wmode') != 'transparent') {
	    player().setAttribute('wmode','transparent');
	  }
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    rotate = rotate - 5;
	    v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')'; if (poster) poster.style[prop] = v.style[prop]
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.style[prop] = v.style[prop]
	    }
	  } else return true, function(){}, 200
	  })
	break;

/* Move video around by reading its left/top and altering it */
	case 'left yt-uix-button-text':
	  player().removeAttribute('wmode'); if (yt6.ytg && v.style.left == '') v.style.left = '0px'
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    if ((!vp) || (bm0.style.visibility == 'hidden')) {
	      v.style.left = (parseInt(v.style.left.replace('px','')) - 5) + 'px';
	      if (poster) poster.style.left = v.style.left
	    } else {
		vp.style.left = (parseInt(vp.style.left.replace('px','')) - 5) + 'px';
		if (poster) poster.style.left = vp.style.left
	      }	
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.parentNode.style.left = parseInt(webgl.parentNode.style.left.replace('px','')) - 5 + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

	case 'right yt-uix-button-text':
	  player().removeAttribute('wmode'); if (yt6.ytg && v.style.left == '') v.style.left = '0px'
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    if ((!vp) || (bm0.style.visibility == 'hidden')) {
	      v.style.left = (parseInt(v.style.left.replace('px','')) + 5) + 'px';
	      if (poster) poster.style.left = v.style.left
	    } else {
		vp.style.left = (parseInt(vp.style.left.replace('px','')) + 5) + 'px';
		if (poster) poster.style.left = vp.style.left
	      }	
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.parentNode.style.left = parseInt(webgl.parentNode.style.left.replace('px','')) + 5 + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

	case 'up yt-uix-button-text':
	  player().removeAttribute('wmode'); if (yt6.ytg && v.style.top == '') v.style.top = '0px'
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    if ((!vp) || (bm0.style.visibility == 'hidden')) {
	      v.style.top = (parseInt(v.style.top.replace('px','')) - 5) + 'px';
	      if (poster) poster.style.top = v.style.top
	    } else {
		vp.style.top = (parseInt(vp.style.top.replace('px','')) - 5) + 'px';
		if (poster) poster.style.top = vp.style.top
	      }		    
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.parentNode.style.top = parseInt(webgl.parentNode.style.top.replace('px','')) - 5 + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

	case 'down yt-uix-button-text':
	  player().removeAttribute('wmode'); if (yt6.ytg && v.style.top == '') v.style.top = '0px'
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    if ((!vp) || (bm0.style.visibility == 'hidden')) {
	      v.style.top = (parseInt(v.style.top.replace('px','')) + 5) + 'px';
	      if (poster) poster.style.top = v.style.top
	    } else {
		vp.style.top = (parseInt(vp.style.top.replace('px','')) + 5) + 'px';
		if (poster) poster.style.top = vp.style.top
	      }	
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.parentNode.style.top = parseInt(webgl.parentNode.style.top.replace('px','')) + 5 + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

/* Reset all to default */
	case 'reset yt-uix-button-text':
	  resize_layers( bm0.style.width, bm0.style.height, false );
	  if (v != player()) {
	    zoom = 1;
	    rotate = 0;
	    //if ((v == undefined)) alert(typeof player().getPlayerState + typeof player().getAttribute('flashvars'));// { var v = gc('video-stream html5-main-video')[0] }
	    if ( (typeof player().getPlayerState == 'function') && (player().getAttribute('flashvars') == null) && (bm0.style.visibility == 'hidden') ) {

	      ythtml5_size()

	    } else {//alert(v + 'width:' + v.style.width + ' left:' + v.style.left + ' height:' + v.style.height + ' top:' + v.style.top)

		if (player().getAttribute('flashvars') == null){

		  if (bm0 != null && v && (document.getElementById(mep_x("mep_")) != null || me_flash[0])) {
		    v.style.top = (Math.round( parseInt(
			 parseInt(bm0.style.height.replace('px','')) -
			 parseInt(v.style.height.replace('px','')) - hdiff
			) / 2)	 ) + 'px';
	            v.style.left = (Math.round( parseInt(
			 parseInt(bm0.style.width.replace('px','')) -
			 Math.round(parseInt(v.style.height.replace('px','') - hdiff) * parseFloat(yt6.aspect_ratio))
			) / 2)	 ) + 'px';
		  }
		} else {
		    if (document.getElementById(mep_x("mep_")) == null && me_flash[0]) {
		      me_flash[0].style.left = '0px'
		      me_flash[0].style.top = '0px'
		    }
		    var opacity = player().style.opacity; //var display = player().style.display;
		    player().setAttribute("style","top: 0px; left: 0px; width: 0px !important; height: " + bm0.style.height + " !important; opacity:" + opacity + ";");
		    if (opacity && opacity != '' && typeof player().style.setProperty == 'function') player().style.setProperty('opacity', opacity, '');
		    zoom = 1; rotate = 0;
		  }


		if ((bm0 != null) && (typeof flashvars == 'object')) {
		  for (i=0;i<flashvars.length;i++) {
			if (typeof flashvars[i].pauseMedia == 'function') {
			  flashvars[i].style.top = '0px'
			  flashvars[i].style.left = '0px'
			}
			if (flashvars[i] == document.getElementById(mep_x('me_flash_'))) {
			  if (flashvars[i].style.width == '') flashvars[i].style.width = bm0.style.width;
			  if (flashvars[i].style.height == '') flashvars[i].style.height = parseInt(bm0.style.height.replace('px','') - hdiff) + 'px';
			  flashvars[i].style.top = '0px'
			  flashvars[i].style.left = '0px'
			}
		  }
		}

	      }

	    v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
	    if (yt6.ytg) { v.style.left = '0px'; v.style.top = '0px'; }

	    if (webgl) {
	      webgl.parentNode.style.left = Math.round((1 * bm0.style.width.replace('px','') - webgl.style.width.replace('px','')) / 2) + 'px'
	      webgl.parentNode.style.top = Math.round((1 * bm0.style.height.replace('px','') - hdiff - webgl.style.height.replace('px','')) / 2) + 'px'
	      webgl.style[prop] = v.style[prop]
	    }

	  } else {

	      var opacity = player().style.opacity; //var display = player().style.display;
	      player().style.left = '0px'
	      player().style.top = '0px'
	      player().setAttribute("style","top:0px; left:0px; width:" + z.style.width + "; height:" + z.style.height + "; opacity:"+opacity); zoom = 1; rotate = 0;// display:"+display+";
	    }
	  if (poster) { poster.style[prop] = 'none'; poster.style.top = '0px'; poster.style.left = '0px' }
	  if (vp) { vp.style.left = '0px'; vp.style.top = '0px' }
	  //bestfit(); //document.getElementById('player1').style.height = (document.getElementById('player1').style.height.replace('px','') - 30) + 'px';
	break;

      }//switch


      if (z.getAttribute('id') != 'player') z.style[prop] = v.style[prop]
      //alert(document.getElementById('controls-sp').prop )
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);

    }//t.nodeName

  },false);//click eventlistener

}//CtrlS
