var yt6 = document.getElementById('snarls_player')

if ((document.getElementById(mep_x("google_ads_frame")) != null) && (typeof fnCheckLocation != 'number')) {
var noads = setInterval(function(){
  var ads = document.getElementsByClassName('videoAdUiSkipButton')[0]; if (ads) { ads.click();ads.setAttribute("class","videoAdUiSkipButton") }
  var ads = document.getElementsByClassName("video-ads html5-stop-propagation")[0]; if (ads) { ads.parentNode.removeChild(ads) };
  var ads = document.getElementById("google_companion_ad_div"); if (ads) { ads.parentNode.removeChild(ads) };
  var ads = document.getElementById(mep_x("google_ads_frame")); if (ads) { ads.parentNode.removeChild(ads) };
  var ads = document.getElementById('content'); if (ads) { ads.setAttribute('id','content') };
  if ((yt6 == undefined) || (typeof yt6.fnCheckLocation == 'number')) { clearInterval(noads) }

            },2000)
}



function qr(sr) {if (!sr) return null
  var qa = [];
  var prs = sr.split('&');
  if (typeof prs[1] != 'undefined') {
    for (i in prs) {
      var pra = prs[i].split('=');
      qa[pra[0]] = pra[1];
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


function get_quality(url) {

  var qs = qr(url);
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


function def_link(){

  yt6.sig = '&'
  var ft = [ytplayer.config.args.url_encoded_fmt_stream_map, ytplayer.config.args.adaptive_fmts]
  for (i in ft) {
    if (typeof ft[i] !== 'undefined') {
      var z = ft ? ft[i].split(',') : '';
      for (j in z) {
	var qq = get_quality(z[j]);if (qq == null) alert('0qq')
	var qs = qr(z[j]);if (qs == null) alert('0qs')
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


/*
 * Wait Until Exists Version v0.2 - http://javascriptisawesome.blogspot.com/
 *
 *
 * TERMS OF USE - Wait Until Exists
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2011 Ivan Castellanos
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/


(function(){
	var _waitUntilExists = {
		pending_functions : [],
		loop_and_call : function()
		{
			if(!_waitUntilExists.pending_functions.length){return}
			for(var i=0;i<_waitUntilExists.pending_functions.length;i++)
			{	
				var obj = _waitUntilExists.pending_functions[i];
				var resolution = document.getElementById(obj.id);
				if(obj.id == document){
					resolution = document.body;
				}
				if(resolution){
					var _f = obj.f;
					_waitUntilExists.pending_functions.splice(i, 1)
					if(obj.c == "itself"){obj.c = resolution}
					_f.call(obj.c)				
					i--					
				}
			}
		},
		global_interval : setInterval(function(){_waitUntilExists.loop_and_call()},5)
	}
	if(document.addEventListener){
		document.addEventListener("DOMNodeInserted", _waitUntilExists.loop_and_call, false);
		clearInterval(_waitUntilExists.global_interval);
	}
	window.waitUntilExists = function(id,the_function,context){
		context = context || window
		if(typeof id == "function"){context = the_function;the_function = id;id=document}
		_waitUntilExists.pending_functions.push({f:the_function,id:id,c:context})
	}
	waitUntilExists.stop = function(id,f){
		for(var i=0;i<_waitUntilExists.pending_functions.length;i++){
			if(_waitUntilExists.pending_functions[i].id==id && (typeof f == "undefined" || _waitUntilExists.pending_functions[i].f == f))
			{
				_waitUntilExists.pending_functions.splice(i, 1)
			}
		}
	}
	waitUntilExists.stopAll = function(){
		_waitUntilExists.pending_functions = []
	}
})()


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

              window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

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
                // window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
              }

              if (window.stop) {
                window.stop();
              }

              throw '';
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


  var a,b,i,j,k,x,y,z;

  var swfbin4 = document.getElementById('player').textContent.split('var ytplayer = ytplayer || {};')[1]
  if (swfbin4 != null) {
    swfbin4 = swfbin4.split('"url":"')[1].split('"')[0];
    swfbin4 = swfbin4.split('player-')[1].split('\\')[0];
  } else swfbin4 = null


// var%20xhr=new%20XMLHttpRequest();xhr.open('get','https://raw.githack.com',false);xhr.onreadystatechange=function(e){if(xhr.readyState===4){if(xhr.status===200){var%20p='https:'}else{var%20p='http:'}};
// };xhr.send(''); ...}else{void

  var xhr = new XMLHttpRequest(), px;

  var proxies = ['https://cors-anywhere.herokuapp.com/https:','https://allow-any-origin.appspot.com/https:','https://crossorigin.me/https:']

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]

  function shuffle(o){ //v1.0
    for(j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

function hand_axe(){
		    var bm1 = document.createElement('button')
		    bm1.id = 'getjs'
		    bm1.type = 'button'
		    bm1.innerHTML = '<img src="//i1.ytimg.com/i/gsZadWjuuN2dEhI0mZfVfQ/mq1.jpg?v=531525b4" style="height:27px"></img><br>';
		    var z = document.getElementsByClassName('yt-masthead-logo-container ')
		    if (z[0]) {
		      var z = z[0]
		    } else {
			var z = document.getElementById('start');
			if (z == null) throw 'YouTube layout mismatch';
		      }
		    z.insertBefore(bm1, z.lastChild);
			bm1.newWindow = window.open(protocol() + ytplayer.config.assets.js, "w_blank", "width=100,height=100");//alert(document.getElementById("getjs").newWindow)
			if (document.getElementById("getjs").newWindow != null) document.getElementById("getjs").newWindow.focus()

		    bm1.setAttribute('style','display:inline-block;font-size:10px; padding:0px 3px; width: 52px; max-height:30px; vertical-align: middle;');
		    bm1.setAttribute('onclick', 'this.newWindow = window.open( "' + protocol() + ytplayer.config.assets.js + '", "w2_blank", "width=100,height=100"); if (this.newWindow != null) this.newWindow.focus(); ')
		    if ( 1 * getElementsByAttribute(document,'div','class', z.getAttribute('class').indexOf('doodle') > -1 )) {
		      var z = document.getElementById('logo-container') || document.getElementById('logo'); z.setAttribute('style','width:88px')
		    }
		//  }
		    var bm1 = document.createElement('div')
		    bm1.id = 'bm6'
		    z.insertBefore(bm1, z.lastChild);
//		    document.getElementById('page').insertBefore(bm1,document.getElementById('page').firstChild);
		    var bm1 = document.createElement('textarea');//input
		    bm1.id = 'setjs'
		    bm1.value = '';//(function(){})()
		    document.getElementById('bm6').appendChild(bm1)
		    bm1.setAttribute("maxlength", 2097152);
		    bm1.setAttribute('rows','1'); bm1.setAttribute('cols','15')
		    bm1.setAttribute("onkeyup","if ((event.keyCode == 13) && (document.getElementById(\"getjs\").newWindow != null)) {\
			if (document.getElementById(\"setjs\").value.indexOf(\"function()\") > -1) {\
			var scpt = document.createElement(\"script\");\
			scpt.type = \"text/javascript\";\
			scpt.id = \"ytassetsjs\";\
			scpt.textContent = document.getElementById(\"setjs\").value;\
			document.body.appendChild(scpt);\
			var z = new Date().toLocaleString().toString();\
			scpt.setAttribute(\"time\",z);\
			document.getElementById(\"bm6\").parentNode.removeChild(document.getElementById(\"bm6\"));\
			document.getElementById(\"getjs\").newWindow.close();\
			if (document.getElementById(\"getjs\") != null) document.getElementById(\"getjs\").parentNode.removeChild(document.getElementById(\"getjs\")) ;\
			} else {\
			  document.getElementById(\"bm6\").parentNode.removeChild(document.getElementById(\"bm6\"));\
			  document.getElementById(\"getjs\").newWindow.close();\
			  if (document.getElementById(\"getjs\") != null) document.getElementById(\"getjs\").parentNode.removeChild(document.getElementById(\"getjs\")) ;\
			  document.getElementById(\"snarls_player\").parentNode.removeChild(document.getElementById(\"snarls_player\"));\
			}}")

alert("ERROR: PROXY REQUEST DENIED! A small pop-up window has opened / should open after you OK this message. If pop-ups are blocked, you must click the Transformer-icon in order to proceed. Inside the pop-up window's frame there is a text of native code and site data starting with something like \"var _yt_player\" or \"(function\"... Please SELECT & COPY it ALL (Ctrl+A, Ctrl+C) then PASTE it into the input field just below the YouTube logo (Ctrl+V). If done, press ENTER.")

		  waitUntilExists( "ytassetsjs", function() {
		    if (typeof deldiv == 'function') { deldiv() }
		      else {
			if (document.getElementById("snarls_player")) document.getElementById("snarls_player").parentNode.removeChild(document.getElementById("snarls_player"))
		      }
		    player().style.display = ''
		    if (document.getElementById('snarls_player') == undefined) {
			var proxiez = shuffle(['https://raw.githack.com','https://rawgit.com'])
			for (i=0;i<proxiez.length;i++){
			  var px = proxiez[i]
			  var q=document.createElement('script');
			  q.id='snarls_player';
			  q.src=px + '/snarly/yt6/master/yt6.js';
			  document.body.appendChild(q);
			  if (document.getElementById('snarls_player') != undefined) break;
			  void 0;
			}
		     }
		  })

throw 'XMLHttpRequest failure'
}//hand_axe




function ajax1(){

//  px = 'https://allow-any-origin.appspot.com/https:';
//  px = 'https://cors-anywhere.herokuapp.com/https:'
//  var px = 'http://www.corsproxy.com'
  var ytassetsjs = document.getElementById('ytassetsjs')
  if ((ytassetsjs == null) || ytassetsjs.innerHTML.indexOf("function(){") == -1) {
    if (ytassetsjs != null) ytassetsjs.parentNode.removeChild(ytassetsjs)
    function setProxy(){
      var proxiez = shuffle(proxies)
      for (i=0;i<proxiez.length;i++){
        var px = proxiez[i]
        try {
          xhr.open('get', px + ytplayer.config.assets.js, false);
          xhr.send('');
        } catch (e) {
	    yt6.error = e;
            if (i === proxiez.length-1) {

	      if ((e.toString().indexOf('"Access to restricted URI denied"  code: "1012"') > -1) || (e.toString().indexOf('ReferenceError: Security violation') > -1) || (xhr.responseText.indexOf('403 Forbidden') > -1) || (e.toString().indexOf('XMLHttpRequest Exception 101') > -1)) {

		hand_axe()

	      } else {
		  hand_axe()
//		  throw new Error(e + " " + px + ' error')
		}
              
              //exit(e + " " + px + ' error') 
            } else {
		if (e.toString().indexOf('"Access to restricted URI denied"  code: "1012"') == -1) {

		}
		  //alert(e + " " + px + ' error')
              }
          }//catch


	  if ((xhr.responseText.indexOf('403 Forbidden') > -1) || (xhr.responseText == '403_Forbidden')) {
	      //alert(px + ' proxy denied to serve data: 403 Forbidden')
	      var scpt = document.createElement("div");
	      scpt.id = px + " error";
	      scpt.textContent = 'HTTP 403 Forbidden: Access was denied to this resource over internal quota';
	      document.body.appendChild(scpt);
	      scpt.setAttribute("style","display:none")
	      continue;

	  }//403

	
	var rpt = xhr.responseText,scpt;
	var px = px.replace('/https:','');
	if (rpt.indexOf("function(){") != -1) {
	  scpt = document.createElement("script");
	  scpt.type = "text/javascript";
	  scpt.id = "ytassetsjs";
	  scpt.textContent = rpt;
	  document.body.appendChild(scpt);
	  scpt.setAttribute('name',px);
	  var z = new Date().toLocaleString().toString()
	  scpt.setAttribute("time",z)
	  break
	} else {
	    scpt = document.createElement("div");
	    scpt.id = px + " error";
	    scpt.textContent = yt6.error;
	    document.body.appendChild(scpt);
	    scpt.setAttribute("style","display:none")
	  }
      }//for

      if (rpt.indexOf("function(){") != -1) { return [px, rpt] }
    }//setProxy

    var spx = setProxy();
    if (typeof spx == 'undefined') hand_axe()
    var px = spx[0]
    var rpt = spx[1]

  } else {
    var rpt = ytassetsjs.innerHTML
    }


  //  var fcnm = rpt.match(/signature=([^(]+)/)[1];
  var fcnm = rpt.match(/dashmpd.[^]*signature\/".*\;/)[0]
  var i = fcnm.split('\"/signature/\"+')[1].split(")")[0]
  var fcnm = fcnm.split("&&("+i+"=")[1].substring(0,2)
  
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

  eval(rpt.match(fcobj()[0])[0].split(" " + fcobj()[1] + "=").join(" dekrypt0="));// + rpt.match(fs)[0].split(fcobj()[1]).join("dekrypt0");
//eval(rpt.match(fcobj()[0])[0].replace(fcobj()[1],"dekrypt0") + rpt.match(fs)[0].split(fcobj()[1]).join("dekrypt0"));
  var fcnm = 'function fcnm(' + rpt.match(fs)[0].split("(")[1].split(")")[0] + '){' + rpt.match(fs)[0].split(fcobj()[1]+".").join("dekrypt0.").split("\"").join("'").split("){")[1]
  var fcnm = "function " + fcnm.split("function ")[1]
//  var z = rpt.match(fs)[0].split(fcobj()[1]+".").join("dekrypt0.").split("\"").join("'").split("){")[2]
//  if (typeof z != 'undefined') { var fcnm = fcnm + "){" + z }
  eval(fcnm)

document.getElementById('ytassetsjs').fcnm = fcnm

if (player().getAttribute('name') == 'me_flash') {
  var file = def_link()
  if ((player()) && (player() != null)) var me_flash_param = getElementsByAttribute(player(),"param","name","flashvars");
  if (me_flash_param[0] != undefined) {
    me_flash_param[0].setAttribute("value", me_flash_param[0].getAttribute("value").split("&file=")[0] + "&file=" + file)
  }
  player().setAttribute('src', file)
  //reload_flashplayer()
}

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
  if (typeof poster != 'undefined') {
    poster = poster.href
  } else {
      poster = getElementsByAttribute(document,"link","itemprop","thumbnailUrl")
      poster = poster[poster.length-1]
      if (typeof poster != 'undefined') {
        poster = poster.href
      } else {
          poster = protocol() + '//i1.ytimg.com/vi/' + window.ytplayer.config.args.video_id + '/0.jpg'
        }
    }
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
        document.getElementById('test_poster2').parentNode.innerHTML = ''
        yt6.removeChild(document.getElementById('test_poster'))
      }
    )
  }
  document.getElementById('test_poster').appendChild(img)
  delete img

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


function onDownload(x) {
  document.location = 'data:Application/octet-stream,' + encodeURIComponent(x);
}

function protocol() { var protocol = 'http:'; //return protocol
  var protocol = (document.location.protocol=='http:')?'http:':'https:';
  return protocol
};

function player() { return document.getElementById("movie_player") };


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

function html5toflash(){
var p = document.createElement('embed')
p.id = 'movie_player_flash'
document.getElementsByTagName('body')[0].appendChild(p)
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
z.setAttribute('src','https://s.ytimg.com/yts/swfbin/player-' + swfbin4 + '/watch_as3.swf')
$.removeData(p); p.parentNode.removeChild(p); p = null; p = {}; delete p;
document.getElementById('player-api').insertBefore(z, document.getElementById('player-api').firstChild)

}


  function me_flash_2load(){
    var p = player();me_flash_up()
    if ((p) && (!p)) {
	if (document.getElementById('movie_player_bup') == undefined){
	  var bup = document.createElement('div')
	  bup.id = 'movie_player_bup'
	  document.getElementById('video-hide').appendChild(bup)
	}
	waitUntilExists('movie_player_bup', function(){
	  ////waitUntilExists('movie_player', function(){
	  ////var p = player()
	  if (document.getElementById('movie_player_')) document.getElementById('movie_player_').parentNode.removeChild(document.getElementById('movie_player_'))
	  p.setAttribute('id','movie_player_')
	  document.getElementById('movie_player_').style.display = 'none';
	  var bup = document.getElementById('movie_player_').cloneNode(true);
	  document.getElementById('movie_player_').setAttribute('id','movie_player')
	  ////var p = player()
	  $.removeData(p); p.parentNode.removeChild(p); p = null; p = {}; delete p;//player().parentNode.removeChild(player())
	  document.getElementById("movie_player_bup").appendChild(bup);
	  //me_flash_up()
	  ////})
	})
    }
  }

function me_flash_up(){

    var file = def_link()
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
    document.getElementById("player-api").insertBefore(js, document.getElementById("player-api").firstChild)
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

document.getElementById('player-api').setAttribute('style','width: ' + document.getElementById('player-api').offsetWidth + 'px; height:' + document.getElementById('player-api').offsetHeight + 'px; overflow: hidden;')



if ( (player() == null) || ((player() != null) && (typeof document.getElementById('movie_player').getPlayerState != 'function') && (document.getElementsByClassName("html5-video-container")[0]) && (document.getElementsByClassName("html5-video-container")[0].innerHTML == '')) ) {

if (typeof ytplayer != 'object') {
  window.ytplayer = {}
  eval(document.getElementById('player').textContent.split('var ytplayer = ytplayer || {};')[1].split(';(function()')[0]);//.split('"args":{')[1].split('",')[0]
}

  if (typeof ytplay0 == 'undefined') {
    
    document.getElementById("player-api").innerHTML = '\
      <span tabindex="0"></span><embed style="" wmode="transparent" type="application/x-shockwave-flash" src="" name="movie_player" id="movie_player" flashvars="" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000"><span tabindex="0"></span>\
  <noembed></noembed>\
\
';

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
  yt6.parentNode.removeChild(yt6)
} else {
    if (ytplayer.config.args == null) yt6.parentNode.removeChild(yt6)
  }

    document.getElementById('movie_player').setAttribute("flashvars",correct_flashvars(window.ytplayer.config.args))

    if (document.getElementById('movie_player').getAttribute('src') == 'about:blank') yt6.parentNode.removeChild(yt6)
  }
}

 //alert('player ' + player() + 'window.ytplayer ' + window.ytplayer + 'ytplayer.config ' + ytplayer.config + 'ytplayer.config.loaded ' + ytplayer.config.loaded + document.getElementById('ytassetsjs') + 'fcnm' + typeof document.getElementById('ytassetsjs') + 1 * def_link().indexOf('%26false'))
// onDownload(document.getElementById('player-api').innerHTML);
if ((player() != null) && (window.ytplayer) && (ytplayer.config) && (ytplayer.config.loaded == true)  && (document.getElementById('ytassetsjs') == null) && (1 * def_link().indexOf('%26true') > -1)) {

  ajax1()

} else {

    if (typeof ytplayer != 'object') {
      window.ytplayer = {};
      eval(document.getElementById('player').textContent.split('var ytplayer = ytplayer || {};')[1].split(';(function()')[0]);
    }
    if (player() == null) {
      document.getElementById("player-api").innerHTML = ''; me_flash_up()
    } else {

	if ((document.getElementsByClassName('html5-video-content')[0]) && (document.getElementsByClassName('html5-video-content')[0].innerHTML == '')) {
	  document.getElementById("player-api").innerHTML = ''; me_flash_up()
	}
      }

    ytplayer.config.loaded = true

    if ( ((def_link() == '') || (1 * def_link().indexOf('%26false') > -1)) && ((document.getElementById('ytassetsjs') == null) || ((document.getElementById('ytassetsjs') != null) && (typeof document.getElementById('ytassetsjs').fcnm == 'undefined'))) ) { ajax1() }

}


yt6.osw = document.getElementById('placeholder-player') || document.getElementById('player')
yt6.tbg = document.getElementById('theater-background') || document.getElementById('dropShadow')
yt6.mhp = document.getElementById('masthead-positioner') || document.getElementById('start');//document.getElementsByClassName('x-scope ytd-masthead-1')[0]
yt6.wsb = document.getElementById('watch7-sidebar') || document.getElementById('related')
yt6.w7a = document.getElementById('watch7-sidebar-ads') || document.getElementById('player-ads')

yt6.wna = document.getElementById('watch-header') || document.getElementById('alerts')
if (yt6.wna.getAttribute('id') == 'watch-header') yt6.wna = document.getElementById('watch7-notification-area')




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
      if (typeof z.firstChild.style != 'object') z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
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

    var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
    var w_base

if (wide_view() == false) {
  w_base = y.width;
  if (o != null) z.setAttribute('style', o)
  } else {
    if (o != null) z.setAttribute('style', o)
    if (z.getAttribute('id') != 'player') {
      var x = z.parentNode.offsetWidth + getScrollbarWidth()
    } else var x = z.parentNode.parentNode.offsetWidth + getScrollbarWidth()
    //window.screen.availWidth
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
    return w_base
  }

  function fix_Height() {

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if (typeof z.firstChild.style != 'object') z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
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

    yt6.hdiff = parseInt( y.height.replace('px','') - ((y.height.replace('px','') / 60 >> 0) * 60) );  
    var hdiff = yt6.hdiff

    var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
    var h_base

if (wide_view() == false) {
  h_base = parseInt(y.height.replace('px','')) + hdiff + 'px';
  if (o != null) z.setAttribute('style', o)
  } else {
    if (o != null) z.setAttribute('style', o)
    if (z.getAttribute('id') != 'player') {
      var x = z.parentNode.offsetWidth + getScrollbarWidth()
    } else var x = z.parentNode.parentNode.offsetWidth + getScrollbarWidth()
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
    return h_base
  }

function get_webgl(){
  var z = document.getElementsByClassName('webgl')[0];
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
  var stage = p
  var v = p
    if (mep) {
      if ((typeof p.getPlayerState == 'function') && (bm0 != null)) {//ytplayer
	if (bm0.style.visibility == 'hidden') {
          if (typeof flashvars != 'string') {
            var stage = document.getElementsByClassName('html5-video-content')[0];
	    var v = document.getElementsByClassName('video-stream html5-main-video')[0];
	  } else {
	      var stage = p; var v = p
	    }
	} else {
	    var stage = document.getElementsByClassName('html5-video-content')[1];
	    if (stage == undefined) {
	      var stage = document.getElementsByClassName('html5-video-content')[0];
	    }
	    var v = document.getElementsByClassName('video-stream html5-main-video')[2];
	    if (v == undefined) {
	      var v = document.getElementsByClassName('video-stream html5-main-video')[1];
	      if (v == undefined) {
	        var v = document.getElementsByClassName('video-stream html5-main-video')[0];
	      }
            }
		var me_flash_ = getElementsByAttribute(document.getElementById("player-api"),"embed","name",mep_x("me_flash_"))
		if (me_flash_[0] != undefined){
		    var x = gclass('mejs-shim');
		    if ((x != undefined) && (x != null) && (x[0] != undefined) && (x[0] != null)) {
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
		    var z = document.getElementsByClassName('me-cannotplay')
		    if ((z[0]) && (bm0.style.visibility == 'visible')) {
		      var x = gclass('mejs-shim');
		      if ((x != undefined) && (x != null) && (x[0] != undefined) && (x[0] != null)) {
		    //if (typeof x[0].pauseMedia == 'function') {
			if (mep_x('me_flash_')[0] == x[0]) {
			  var stage = x[0]; var v = document.getElementById('player1'); //try { v.pauseMedia() && v.paused = true } catch(e) {}
			} else {
				var stage = x[0]; var v = x[0];//x[0].style.top = '0px';x[0].style.left = '0px';x[0].style.width = bm0.style.width;x[0].style.height = x[0].height + 'px' ;
				if (x[0].style.width == '') x[0].style.width = bm0.style.width;
				if (x[0].style.height == '') x[0].style.height = parseInt(bm0.style.height.replace('px','') - 30) + 'px';
				if (x[0].style.top == '') x[0].style.top = '0px';
				if (x[0].style.left == '') x[0].style.left = '0px';
			  }
		    //}
		        v.paused = true
		      }
		    }
		  }

	  }
      } else {
	  if ((bm0 != null) && (bm0.style.visibility == 'hidden')) {
	    var stage = p; v = p
	    if ((p != null) && (typeof flashvars == 'object')) {
	      for (i=0;i<flashvars.length;i++) {
	        if (typeof flashvars[i].pauseMedia == 'function') {
		  if (!flashvars[i].paused) {
		    flashvars[i].paused = true; try { flashvars[i].pauseMedia() } catch(e) {}
		  }
	        }
	      }
	      if (p == flashvars[0]) {
		  var stage = p; v = p; 
		  if ((p != null) && (p.getAttribute('src') == 'about:blank')) {
		    var x = document.getElementById('player-api').innerHTML;onDownload(x); p.paused = true;
		  }
	      }
	    }
	  } else {
		var stage = document.getElementsByClassName('html5-video-content')[1];
		if (stage == undefined) {
		  var stage = document.getElementsByClassName('html5-video-content')[0];
		}
		var v = document.getElementsByClassName('video-stream html5-main-video')[2];
		if (v == undefined) {
		  var v = document.getElementsByClassName('video-stream html5-main-video')[1];
		  if (v == undefined) {
		    var v = document.getElementsByClassName('video-stream html5-main-video')[0];
		  }
		};
		var me_flash_ = getElementsByAttribute(document.getElementById("player-api"),"embed","name",mep_x("me_flash_"))
		if (me_flash_[0] != undefined){
		    var x = gclass('mejs-shim');
		    if ((x != undefined) && (x != null) && (x[0] != undefined) && (x[0] != null)) {
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
		}
	    }
	}

    } else { //no mep

	  if ((flashvars != null) && (typeof flashvars == 'object')) {
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
		if ((p != null) && (p.getAttribute('src') == 'about:blank')) {
		  var x = document.getElementById('player-api').innerHTML;onDownload(x); p.paused = true;
		}
	      } else {
		  var x = gclass('mejs-shim');
		  if ((x != undefined) && (x != null) && (x[0] != undefined) && (x[0] != null)) {
		    //if (typeof x[0].pauseMedia == 'function') {
			if (mep_x('me_flash_')[0] == x[0]) {
			  var stage = x[0]; var v = document.getElementById('player1'); //try { v.pauseMedia() && v.paused = true } catch(e) {}
			} else {
				var stage = x[0]; var v = x[0];//x[0].style.top = '0px';x[0].style.left = '0px';x[0].style.width = bm0.style.width;x[0].style.height = x[0].height + 'px' ;
				if (x[0].style.width == '') x[0].style.width = bm0.style.width;
				if (x[0].style.height == '') x[0].style.height = parseInt(bm0.style.height.replace('px','') - 30) + 'px';
				if (x[0].style.top == '') x[0].style.top = '0px';
				if (x[0].style.left == '') x[0].style.left = '0px';
			  }
		    //}
		    v.paused = true
		  }
		}
	    } else { //flash object != movie_player
		if (bm0.style.visibility == 'hidden') {
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
        if (typeof player()[cmd] == 'function') { player()[cmd]() }
        return false;
      }

window.addEventListener("message", yt6.ytplayercmd, true);


        var Sync = function(newState) {
	  if (yt6 != null) {
            if (typeof player().getPlayerState == 'function') {
              if (typeof player().getAttribute('flashvars') != 'string') {
                var stage = document.getElementsByClassName('html5-video-content')[0];
                var v = document.getElementsByClassName('video-stream html5-main-video')[0];
              } else {
                  var stage = player();
                  var v = player();  
                }
            }
            var AV = yt6.AV
            var A = yt6.A
            var V = yt6.V
            switch (newState) {
              case 0: player2.pause(); break;
              case 1: if ((typeof srcto != 'undefined') && (srcto == yt6.audio)) { player2.play();break }; if (v.src) { if (typeof v.src.split('itag=')[1] != 'undefined') { if ( (typeof AV[v.src.split('itag=')[1].split('&')[0]] !== 'string')  && (typeof A[v.src.split('itag=')[1].split('&')[0]] !== 'string') && ((typeof V[v.src.split('itag=')[1].split('&')[0]] === 'string') || (v.src.indexOf('itag=278') > -1)) || ((typeof srcto != 'undefined') && (srcto == yt6.audio)) ) { player2.play() }} };break;
              case 2: player2.pause(); break;
              case 3: player2.pause();break;
              case 5: player2.pause(); break;
            }
            try { document.getElementById('player2').currentTime = player().getCurrentTime() ; } catch(e) {}
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
    var autoplay = document.getElementsByClassName('playlist-nav-controls')[0] || document.getElementsByClassName('appbar-playlist-controls clearfix')[0]
    if (autoplay != undefined) {
      if (autoplay.getAttribute('disabled')) autoplay.removeAttribute('disabled');
      var autoplay = autoplay.innerHTML.split('\>')[0].split('yt-uix-button-toggled')[1];
    }
  }
} else {//2016 layout
var autoplay = gclass('paper-icon-button-0 style-default-active')
}//2016 layout


var autoplay2 = gclass('playlist-mix-icon yt-sprite');

function select_player(){
  if ((typeof p.getPlayerState == 'function') && (!yt6.x)) {
	bm0.style.visibility = 'hidden'
	if (typeof fv == 'string') {
	  p.style.width = ''; p.style.setProperty('width', document.getElementById('placeholder-player').firstChild.style.width, '')
	  p.style.height = ''; p.style.setProperty('height', document.getElementById('placeholder-player').firstChild.style.height, '')
	} else {
	    //p.style.visibility = 'visible'
	    p.style.display = ''; 
	  }
    } else {
	if (typeof fv == 'string') {
	  p.style.setProperty('width', '0', 'important')
	  p.style.setProperty('height', '0', 'important')
	} else {
	    //p.style.visibility = 'hidden'
	    p.style.display = 'none';
	  }
	bm0.style.visibility = 'visible';
  }
}

if ( ((typeof player().getAttribute('flashvars') == 'string') && (typeof player().getPlayerState != 'function')) || ((player().getAttribute('name') == 'me_flash') && (typeof player().playMedia != 'function')) ) { yt6.flash = false }
if ( ((typeof player().getAttribute('flashvars') == 'string') && (typeof player().getPlayerState == 'function')) || ((player().getAttribute('name') == 'me_flash') && (typeof player().playMedia == 'function')) ) { yt6.flash = true }


if (start != false){

  if ( (pn == 'me_flash') || (d.indexOf('%26false') > -1) && (!yt6.x) ){
    if ( ( ((!mep) || (typeof fv == 'string')) && (yt6.flash == true) ) || ( (typeof p.getPlayerState == 'function') && (typeof fv != 'string') && (webgl)  ) ){ //console.log('autoplay1');
//alert('01' + start + webgl + typeof fv + mep + yt6.flash);
	bm0.style.visibility = 'hidden'
	if (typeof fv == 'string') {
	  p.style.width = ''; p.style.setProperty('width', z.style.width, '')
	  p.style.height = ''; p.style.setProperty('height', z.style.height, '')
	} else {
	    //p.style.visibility = 'visible'
	    p.style.display = ''; 
	  }
	if (((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) && (typeof p.playMedia == 'function') && (start)) { //console.log('autoplay2')
	  p.playMedia(); document.getElementById('movie_player').paused = false;
	}
    } else { //console.log('autoplay3' + typeof autoplay + typeof autoplay2[0] + start)
	if (typeof fv == 'string') {
	  p.style.setProperty('width', '0', 'important')
	  p.style.setProperty('height', '0', 'important')
	} else {
	    //p.style.visibility = 'hidden'
	    p.style.display = 'none';
	  }
	bm0.style.visibility = 'visible';
	if (((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) && (start)) player1.play()
      }
  } else {
	if ((d == undefined) || (d.indexOf('%26true') > -1) && (!yt6.x)) {; //console.log('autoplay4')
	  if ( (typeof p.getPlayerState == 'function') && ((typeof fv == 'string') || (webgl) || (!yt6.x)) ) { //console.log('autoplay5')
	    bm0.style.visibility = 'hidden'
	    if (typeof fv == 'string') {
	      p.style.width = ''; p.style.setProperty('width', z.style.width, '')
	      p.style.height = ''; p.style.setProperty('height', z.style.height, '')
	    } else {
		//p.style.visibility = 'visible'
		p.style.display = ''; 
	      }
	  } else { //console.log('autoplay6')
	      if (typeof fv == 'string') {
		p.style.setProperty('width', '0', 'important')
		p.style.setProperty('height', '0', 'important')
	      } else {
		  //p.style.visibility = 'hidden'
		  p.style.display = 'none';
		}
		bm0.style.visibility = 'visible';
		try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {};
		if (((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) && (start)) player1.play()
	    }
	} else { //console.log('autoplay7')
	      if (typeof fv == 'string') {
		p.style.setProperty('width', '0', 'important')
		p.style.setProperty('height', '0', 'important')
	      } else {
		  //p.style.visibility = 'hidden'
		  p.style.display = 'none';
		}
		bm0.style.visibility = 'visible';
		try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {};
		if (((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) && (start)) player1.play()
	  }
      }

}

if ((typeof p.getPlayerState != 'function') && (typeof p.getAttribute('flashvars') == 'string') && (!start)) { //console.log('autoplay8')
	if (typeof fv == 'string') {
	  p.style.setProperty('width', '0', 'important')
	  p.style.setProperty('height', '0', 'important')
	} else {
	    //p.style.visibility = 'hidden'
	    p.style.display = 'none';
	  }
	bm0.style.visibility = 'visible';
	if ((yt6.size == undefined) || (yt6.size == 'default')) {
	  yt6.size = 'default'
	  resize_layers(yt6.w, yt6.h, true)
	}
	if (((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) && (start)) player1.play()
}

set_controls()


if ((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) { return true } else { return false }

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


function wide_view() {
  var z = getElementsByAttribute(document,"div","class","watch-wide")[0]
  if ( typeof z != "undefined" ) return true;
  var z = getElementsByAttribute(document,"div","class","watch-stage-mode")[0];
  if ( typeof z != "undefined" ) return true;
  var z = getElementsByAttribute(document,"ytd-app","class","ytd-app-1")[0];
  if ( typeof z != "undefined" ) { return true } else return false;
}


function crossXmlHttpReq(ytplayer){

yt6.osw = document.getElementById('placeholder-player') || document.getElementById('player')
yt6.tbg = document.getElementById('theater-background') || document.getElementById('dropShadow')
yt6.mhp = document.getElementById('masthead-positioner') || document.getElementById('start')
yt6.wsb = document.getElementById('watch7-sidebar') || document.getElementById('related')
yt6.wsa = document.getElementById('watch7-sidebar-ads') || document.getElementById('player-ads')
yt6.wna = document.getElementById('watch-header') || document.getElementById('alerts')
if (yt6.wna.getAttribute('id') == 'watch-header') yt6.wna = document.getElementById('watch7-notification-area')


if ((typeof ytplayer.config == 'object') && (ytplayer.config.args) && (typeof ytplayer.config.args.url_encoded_fmt_stream_map == 'undefined')) {

alert('This seems to be your first time loading a video watch page in YouTube\'s 2016 layout since you last visited the youtube.com domain. We\'ll have to do a page refresh here and reload the bookmarklet once again in order to make the script (somewhat) operational. (Still a long way to fully adapt to the new layout\'s routines though :(...) So, let\'s do it!')
location.href = window.location.href

  //(
function tick() {
    var z = document.getElementsByClassName('hidden')
    for(i=0;i<z.length;i++){
      if (z[i].getAttribute('id') == 'player') { var z = z[i]; break }
    }
    if (typeof z == 'object') {
      //console.log( "1" + z.innerHTML.substring(0,100) + z.textContent.substring(0,100) )
      //window.ytplayer = {}
      var y = 'yt6.ytplayer = {}; yt6.' + z.textContent.split('var ytplayer = ytplayer || {};')[1].split('</script>')[0];//console.log(y);
      if (1 * y.indexOf('url_encoded_fmt_stream_map') > -1) {
        eval(y)
      } else {

          xhr.open('get', window.location, false);
          xhr.send('');
          var source = xhr.responseText.toString();
          //if (source.match(/TTS_URL.*\",/) != null) {
            var y = 'yt6.ytplayer = {}; yt6.' + source.split('var ytplayer = ytplayer || {};')[1].split(';(function()')[0];
            //console.log(y)
            if (1 * y.indexOf('url_encoded_fmt_stream_map') > -1) eval(y)
          //}

        } //else
      //console.log(typeof yt6.ytplayer.config.args + typeof yt6.ytplayer.config.args.url_encoded_fmt_stream_map + typeof yt6.ytplayer.config.args.adaptive_fmts)
      if (typeof yt6.ytplayer.config.args.url_encoded_fmt_stream_map == 'string') ytplayer.config.args = yt6.ytplayer.config.args

    }

}//)()//tick
} else {
    if ((typeof yt6.osw != 'undefined') && (yt6.osw.getAttribute('id') == 'player')) {
          xhr.open('get', window.location, false);
          xhr.send('');
          var source = xhr.responseText.toString();
          var y = 'yt6.ytplayer = {}; yt6.' + source.split('var ytplayer = ytplayer || {};')[1].split(';(function()')[0];
          if (1 * y.indexOf('url_encoded_fmt_stream_map') > -1) eval(y)

      //console.log(typeof yt6.ytplayer.config.args + typeof yt6.ytplayer.config.args.url_encoded_fmt_stream_map + typeof yt6.ytplayer.config.args.adaptive_fmts)
      if (typeof yt6.ytplayer.config.args.url_encoded_fmt_stream_map == 'string') ytplayer.config.args = yt6.ytplayer.config.args


//__yt_experimental_now = __spf_experimental_now = true;
yt6.ytcsi = {
  gt: function(n) {
        n = (n || '') + 'data_';
        return yt6.ytcsi[n] || ( yt6.ytcsi[n] = { tick: {}, info: {} } );
      },
  now: window.performance && window.performance.timing &&window.performance.now ?
    function() {
      return window.performance.timing.navigationStart + window.performance.now();
    } :
    function() {
      return (new Date()).getTime();
    },
  tick: function(l, t, n) {
    ticks = yt6.ytcsi.gt(n).tick;
    var v = t || yt6.ytcsi.now();
    if (ticks[l]) {
      ticks['_' + l] = ( ticks['_' + l] || [ticks[l]] );
      ticks['_' + l].push(v);
    }
    ticks[l] = v;
  },
  info: function(k, v, n) {
    yt6.ytcsi.gt(n).info[k] = v;
  },
  setStart: function(s, t, n) {
    yt6.ytcsi.info('yt_sts', s, n);
    yt6.ytcsi.tick('_start', t, n);
  }
};
/*
(function(w, d) {
  ytcsi.setStart('dhs', w.performance ? w.performance.timing.responseStart : null);
  var isPrerender = (d.visibilityState || d.webkitVisibilityState) == 'prerender';
  var vName = d.webkitVisibilityState ? 'webkitvisibilitychange' : 'visibilitychange';
  if (isPrerender) {
    yt6.ytcsi.info('prerender', 1);
    var startTick = function() {
      yt6.ytcsi.setStart('dhs');
      d.removeEventListener(vName, startTick);
    };
    d.addEventListener(vName, startTick, false);
  }
  if (d.addEventListener) {
    d.addEventListener(vName, function() { yt6.ytcsi.tick('vc');}, false);
  }
})(window, document);
*/
//spf experimental


      if (yt6.ytcsi) {yt6.ytcsi.tick("pdr", null, '');} //else alert(typeof yt6.ytcsi);
      yt6.getPageData = function() {
        if (yt6.ytcsi) {yt6.ytcsi.tick("pr", null, '');};
        var endpoint = null;
        var data = {
            page: "watch",
            player: ytplayer.config,
            playerResponse: window.ytInitialPlayerResponse,
              url: window.location.href.split('youtube.com')[1].split('/').join('\/').split('&').join('\u0026'),
            response: window.ytInitialData
        };
        return {
          data: data,
          endpoint: endpoint
        };
      };;//"\/watch?v=JU5LMG3WFBw\u0026list=PL02wfScOeN5elXiqO32ldHwxGOilEgrnS",
//var x = yt6.getPageData();alert(x.data.player.args.title)

/*
    (function() {
      if (window.ytcsi) {window.ytcsi.tick("pdr", null, '');};
      window.getPageData = function() {
        if (window.ytcsi) {window.ytcsi.tick("pr", null, '');};
        var endpoint = null;
        var data = {
            page: "watch",
            player: ytplayer.config,
            playerResponse: window.ytInitialPlayerResponse,
              url: "\/watch?v=JU5LMG3WFBw\u0026list=PL02wfScOeN5elXiqO32ldHwxGOilEgrnS",
            response: window.ytInitialData
        };
        return {
          data: data,
          endpoint: endpoint
        };
      };

      if (window.loadDataHook) {
        var pageData = window.getPageData();
        window.loadDataHook(pageData.endpoint, pageData.data);
        window.loadDataHook = null;
      }

      var blankSwfConfig = {};

      var fillerData= {
        browse: {
          filler: true,
          page: 'browse'
        },
        search: {
          filler: true,
          page: 'search'
        },
        watch: {
          filler: true,
          page: 'watch',
          playerResponse: {
            playabilityStatus: {
              status: 'OK'
            }
          }
        },
        player: blankSwfConfig
      };
      window.ytcfg.set('FILLER_DATA', fillerData);
    })();
*/  

    }
  } //else



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
  if (document.getElementsByClassName('clear')[0] == null) {
    var z = document.createElement('div')
    document.getElementById('player').appendChild(z)
    z.setAttribute('class','clear')
  }
  if (ytplayer.config != null) {
    document.getElementsByClassName('clear')[0].setAttribute('id','ytp-conf-loading')
  } 
/*
  xhr.open('get', window.location, false);
  xhr.send('');
  var source = xhr.responseText.toString();
  if (source.match(/TTS_URL.*\",/) != null) { var tts_url = source.match(/TTS_URL.*\",/)[0] } else var tts_url = ''
*/

  var x = '';
  var tts_url = unescape(ytplayer.config.args.caption_tracks).split('u=');
  for(i=0;i<tts_url.length;i++){ if ((typeof tts_url[i] != 'undefined') && (tts_url[i] != '')) {
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
  }}

//  if ((tts_url) && (tts_url.split('"')[2] == ',')) tts_url = tts_url.split('"')[1].split('\\/').join('/').split('\\u0026').join('&')
  if (ytplayer.config.args) {
    if (tts_url != '') {
      ytplayer.config.args.ttsurl = tts_url
    } else delete ytplayer.config.args.ttsurl
  }


  var args = ytplayer.config.args;


  var html = [new Date().toLocaleString(),
    'Click to switch streams in both native and alternative HTML5 player. Right click & "Save as" to download.<br>'
  ];//document.getElementById('early-body').innerHTML = ''
  var ft = [args.url_encoded_fmt_stream_map, args.adaptive_fmts]
  for (i in ft) {
    if (typeof ft[i] !== 'undefined') {
      var z = ft ? ft[i].split(',') : '';
      for (j in z) {
        var qq = get_quality(z[j]);if (qq == null) alert('qq')
        var qs = qr(z[j]);if (qs == null) alert('qs')
        var href = unescape(qs.url).replace('http:', '').replace('https:', '');
        if (qs.signature){	  //yt6.flash = true;
          href += '&signature=' + qs.signature;
	}
        if (qs.s){	  //yt6.flash = false;
          href += '&signature=' + dc(qs.s);     //rewrite_ytplayer(z[j], qs.s, dc(qs.s))
	}
        if (href.indexOf("&ratebypass=yes") == -1) { href += '&ratebypass=yes'}
        if (qq.indexOf("+") != -1) {
	  href += '&2'; if (qs.dur) { var ads = qs.dur } else { var ads = z[j].split('dur%3D')[1]; if (ads) var ads = ads.split('%')[0] }
	  var ads = Math.round(ads)
	  if (!isNaN(ads) && (ads != 0)) {
	    yt6.duration = ads.toString().toHHMMSS().split('.')[0]
	    if (document.getElementsByClassName('ytp-time-duration')[0]){
	      var ads0 = document.getElementsByClassName('ytp-time-duration')[0].textContent.split(':')
	      if (ads0[2]){
	      	var ads0 = ads0[0] * 3600 + ads0[1] * 60 + ads0[2] * 1
	      } else var ads0 = ads0[0] * 60 + ads0[1] * 1
	        //console.log(ads +' '+ typeof ads +' '+ ads0 +' '+ typeof ads0)
	      if (Math.abs(ads - ads0) > 1) {//console.log('Preemptive video ad?');
	        try { document.getElementsByClassName('video-stream html5-main-video')[0].mute() } catch(e) {};
	      }
	    }
	  }
	}
        if (qq.indexOf('DASH') != -1) { if ((yt6 != undefined) && (yt6 != null) && (typeof yt6.aspect_ratio != 'string')) { yt6.aspect_ratio = ft.toString().split("size=")[1].split("&")[0].split(",")[0] } }
        if (qs.itag !== '278') { linx[qs.itag] = href } else { linx[241] = href }
        if (qq.indexOf('360p WebM VP8') != -1) { var webm = 'https:' + href };
        if (qq.indexOf('WebM Vorbis') != -1) { var audio = 'https:' + href };//.replace('&ratebypass=yes','') };
        //if (qq.indexOf('160k WebM Opus') != -1) { var audio = 'https:' + href };
	if ((qq.indexOf('DASH AAC') != -1) && (audio == undefined)) { var audio = 'https:' + href };
        //var fn = (args.title + '-' + qq).toLowerCase()
        //         .replace(/[!"&'().:[\]|]/g,'')
        //         .replace(/ /g,'-')
        //         .replace(/-+/g,'-');
    
        var p1load = null;
   
        function HTMLPush(j){
    
          function setLink(href){
            var onclic = ''+
'              var me_flash = getElementsByAttribute(document.getElementById("player-api"),"object","name","me_flash"); '+
'              var me_flash_ = getElementsByAttribute(document.getElementById("player-api"),"embed","name",mep_x("me_flash_")) ; '+

'              if (me_flash_[0] != undefined) { '+
'                me_flash.push.apply( me_flash, me_flash_ ) '+
'              };  '+

'              if ((me_flash[0] != undefined) && (me_flash.length != 0)) {'+
'                for (i=0;i<me_flash.length;i++) {'+
'                  var me_flash_vars = me_flash[i].getAttribute("flashvars");'+
'                  if (typeof me_flash_vars == "string") {'+
'                    me_flash[i].setAttribute("flashvars", me_flash_vars.split("&file=")[0] + "&file=" + encodeURIComponent("https:' + href + '"));'+
'                    var me_flash_src = me_flash[i].getAttribute("src");'+
'                    me_flash[i].setAttribute("src","");'+
'                    me_flash[i].setAttribute("src", me_flash_src);'+
'                    document.getElementById("player1").setAttribute("src","https:' + href + '");'+
'                  } else {'+
'                      me_flash[i].setAttribute("src","https:' + href + '")'+
'                    };'+

'                  var me_flash_param = getElementsByAttribute(me_flash[i],"param","name","flashvars"); '+
'                  if (me_flash_param[0] != undefined) {'+
'                    me_flash_param[0].setAttribute("value", me_flash_param[0].getAttribute("value").split("&file=")[0] + "&amp;file=" + encodeURIComponent("https:' + href + '"))'+
'                  };'+
'                } '+
'              }; '+

'              if (me_flash_[0] != undefined) {'+
'                me_flash_[0].parentNode.style.display = "none";'+
'                var me_id = me_flash_[0].parentNode.getAttribute("id");'+
'                me_flash_[0].parentNode.setAttribute("id","me_flash_a_container");'+
'                if (document.getElementsByClassName("mejs-overlay mejs-layer mejs-overlay-play")[0]) document.getElementsByClassName("mejs-overlay mejs-layer mejs-overlay-play")[0].style.display = "none";'+
'                if (document.getElementsByClassName("mejs-poster mejs-layer")[0]) document.getElementsByClassName("mejs-poster mejs-layer")[0].style.display = "none";'+
'                waitUntilExists("me_flash_a_container", function(){'+
'                  me_flash_[0].parentNode.style.display = "";'+
'                  resize_layers( yt6.w, yt6.h );'+
'                  me_flash_[0].parentNode.setAttribute("id", me_id)'+
'                })  '+
'              }; '+

'              if (player().getAttribute("name") == "me_flash") {'+
'                reload_flashplayer() '+
'              };'+

'              if ((typeof player().getPlayerState == "function") && (player().getAttribute("flashvars") == null)) {'+
'                var v = document.getElementsByClassName("video-stream html5-main-video")[0]'+
'              }; '+

'              var sauce = getElementsByAttribute(document,"input","name",mep_x("mep_") + "_sourcechooser");'+

'              if ((sauce != undefined) && (sauce.length != 0)) {'+
'                for (i=0;j=(sauce.length-1);i++) {'+
'                  if (sauce[i] != undefined) {'+
'                    sauce[i].removeAttribute("checked");'+
'                    if (("'+href+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2)+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2).replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:",""))) {'+
'                      if (document.getElementById("bm0").style.visibility == "visible") {'+
'                        if ((!player1.paused) || (!player2.paused)) {'+
'                          var p1load = 1;'+
'                          player2.pause();'+
'                        } else {'+

'                            var p1load = null'+
'                          };'+
'                      } else {'+
'                          if ((typeof player().getPlayerState == "function") && (player().getAttribute("flashvars") == null)) {'+
'                            if ( player().getPlayerState() == "1") {'+
'                              var p1load = 1;'+
'                              v.pause()'+
'                            } else {'+
'                                var p1load = null'+
'                              }'+
'                          };'+
'                        };'+

'                      if (("https:'+href+'" == yt6.audio) && (navigator.userAgent.indexOf("Chrome") < -1)) {'+
'                        alert("Warning: Google Chrome will stop buffering if the AUDIO and VIDEO sources share the same location.\\nThis happens when you switch from a DASH/VP9 playback over to the designated audio track to play on its own.\\nIt\'s a bug to be fixed.")'+
'                      };'+

'                      sauce[i].setAttribute("checked","checked");'+
'                      document.getElementById("player1").setAttribute("src","https:' + href + '");'+
'                      document.getElementsByClassName("video-stream html5-main-video")[0].setAttribute("src","https:' + href + '");'+
'                      document.getElementById("player1").setAttribute("src","https:' + href + '");'+
'                      if (p1load == 1) {'+
'                        if ((typeof player().getPlayerState == "function") && (player().getAttribute("flashvars") == null)) {'+
'                          v.play();'+
'                          v.pause();'+
'                          v.play()'+
'                        } else {'+
'                            if (document.getElementById("bm0").style.visibility == "visible") {'+
'                              player1.load();'+
'                              player2.load();'+
'                            }'+
'                          }'+
'                      }   '+
'                      ;return false'+
'                    };'+

'                    if (i === j){'+
'                      if (me_flash[0] != undefined) {'+
'                        return false'+
'                      }; '+
'                      return true'+
'                    } '+
'                  } else {  }       '+

'                }'+
'              };'+
'              if (me_flash[0] != undefined)  {'+
'                return false '+
'              } else {'+
'                  return true'+
'                }';

            return onclic
          }//function setLink

          var onclic = setLink(href)
          if (typeof qq.split(" ")[1] != 'undefined') { var x = " - " + qq.split(" ")[0] + " " + qq.split(" ")[2]; if (typeof qq.split("+")[1] != 'undefined') { var x = x + ' +' + qq.split("+")[1] } else { if (typeof qq.split(" ")[3] != 'undefined') { var x = x + ' ' + qq.split(" ")[3] }} } else var x = '';
            if (navigator.oscpu) {
              if (navigator.oscpu.indexOf("Windows") > -1) {
                var fn = (args.title + x)
                    .replace(/[#"\?:\*]/g,'').replace(/[&\|\\\/]/g,'_').replace(/'/g,'\'').replace(/^\s+|\s+$/g,'').replace(/\.+$/g,'');  
              } else {
                  if (navigator.oscpu.indexOf("Linux") > -1) {
                    var fn = (args.title + x).replace(/\"/g,'_').replace(/&/g,'%26').replace(/\+/g,'%2B').replace(/[\/]/g,'_')
                  } else var fn = (args.title + x).replace(/&/g,'%26').replace(/\+/g,'%2B')
                }
            } else {
                var fn = (args.title + x).replace(/&/g,'%26').replace(/\+/g,'%2B')
              }

          var size = href.match(/[&\?]clen=([0-9]+)&/i);
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
            if (qq.indexOf("fps") > -1) y = y + 1;
            size = Array(y - qq.length - 3*Math.ceil(((qq.length/18)>>0)) ).join(".") + size
	    //Bit shift by 0 which is equivalent to division by 1
          } else { size = '' }


          if (typeof qq.split(" ")[1] != 'undefined') { 
            if (typeof j != 'number') {
              html.push(
                '<a class="style-scope yt-formatted-string x-scope yt-endpoint-2" href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '.' + qq.split(" ")[1].toLowerCase() + '">' + qq + size + '</a>'
              );
            } else {
                html.splice(
                  j+1, 0, '<a class="style-scope yt-formatted-string x-scope yt-endpoint-2" href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '.' + qq.split(" ")[1].toLowerCase() + '">' + qq + size + '</a>'
                );
              }
    
            var fn = fn.split(" - " + qq.split(" ")[0] + " " + qq.split(" ")[2])[0]

          } else {
              if (typeof j != 'number'){
                html.push(
                  '<a class="style-scope yt-formatted-string x-scope yt-endpoint-2" href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '">' + qs.itag + size + '</a>'
                );
              } else {
                  html.splice(
                      j+1, 0, '<a class="style-scope yt-formatted-string x-scope yt-endpoint-2" href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '">' + qs.itag + size + '</a>'
                  );
                }
            }
          return fn
        };//HTMLPush
        var fn = HTMLPush()
      }//for
    }//if
  }//for

var rpt = document.getElementById('ytassetsjs') ? document.getElementById('ytassetsjs').fcnm : null
if (rpt != null) {//ajax2

  var aac = unescape(args.dashmpd)
  var z = aac.split('/')
  var sig = null;
  var aac2 = null;
  for (i in z) {
    if (sig == 1) { var sig = dc(z[i]); var aac2 = aac.replace(z[i],sig).replace('/s/','/signature/');}
    if (sig == 2) { var aac2 = aac.replace('http:', '').replace('https:', ''); sig == null; }
    if (aac2 != null) {
      try {
        xhr.open('get', aac2, false);
        xhr.send('')
        if (xhr.responseText.indexOf("Forbidden") != -1) {
          try {
            xhr.open('get', px + aac2, false);
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
	    href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id","278")[0].textContent.replace('http:', '').replace('https:', '');
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
	    href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id",b)[0].textContent.replace('http:', '').replace('https:', '');
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
//    yt6.mediasource = document.getElementsByClassName('video-stream html5-main-video')[0].getAttribute('src')
//    html.push(
//     '<a href="#" onclick="javascript:document.getElementsByClassName(&quot;video-stream html5-main-video&quot;)[0].setAttribute(&quot;src&quot;, document.getElementById(&quot;snarls_player&quot;).mediasource ); return false">Original YouTube mediasource \(or preemptive video ad\)</a>'
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
        var h_orig = document.getElementsByTagName('body')[0].innerHTML.match(/meta itemprop="height"([^(]+)/);
        if ((typeof h_orig != 'undefined') && (h_orig != null)) {
          var x = ["itemprop",""]
        }
      }
    if (x != null) {
      var w_orig = getElementsByAttribute(document,"meta",x[0],x[1] + "width")[0].content + "px";
      var h_orig = getElementsByAttribute(document,"meta",x[0],x[1] + "height")[0].content + "px";
      yt6.aspect_ratio = (w_orig.replace('px','')/h_orig.replace('px',''))
    } else { 
        w_orig = '640px'; h_orig = '360px'; yt6.aspect_ratio = 16/9
      }

  } else {
      if (typeof yt6.aspect_ratio === 'string') {
        var w_orig = yt6.aspect_ratio.split("x")[0] + "px"
        var h_orig = yt6.aspect_ratio.split("x")[1] + "px"
        yt6.aspect_ratio = (w_orig.replace('px','') / h_orig.replace('px',''))
      } else {
          w_orig = '640px'; h_orig = '360px'; yt6.aspect_ratio = 16/9
        }
    }
  if (yt6.aspect_ratio.toFixed(2) == 1.78) { yt6.aspect_ratio = 16/9 }

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

  yt6.fn = fn;//alert(fn)
  yt6.linx = linx
  yt6.html = html
  yt6.href = href
  yt6.audio = audio
  yt6.args = args

}//crossXmlHttpReq



function redo_dl_button(args,html,href) {
//var dw = document.querySelector('#bm1');


if (document.getElementById("bm1") != null) document.getElementById("bm1").parentNode.removeChild(document.getElementById("bm1"))

  var dw = document.createElement('div');
  dw.id = 'bm1';
  var z = document.getElementsByClassName('yt-masthead-logo-container ')
  if (z[0]) {
    var z = z[0]
  } else {
      var z = document.getElementById('start');
      if (z == null) throw 'YouTube layout mismatch';
    }
  z.insertBefore(dw,z.lastChild);
  document.getElementById('bm1').setAttribute('style','display:inline-block; position:float;');

  dw = document.createElement('div');
  dw.id = 'bm2';
  document.getElementById('bm1').appendChild(dw);
  document.getElementById('bm2').setAttribute('style','display:block; visibility:hidden; position:fixed; left:0px; top:0px; width:100%; z-index:2000000000;')

  function expire_date(){
    var qs = qr(href);if (qs == null) return ['','','91']
    var ip = qs.ip
    var expire = (qs.expire) ? new Date(parseInt(qs.expire.toString().substring(0,10) * 1000)).toLocaleString() : ''
    var bh = (expire.length < 33) ? 91 : 104
    return [ip,expire,bh]
  }

var title = (document.getElementById('eow-title') != null) ? document.getElementById("eow-title").textContent : document.title.substring(0, document.title.length-10)

  html.splice(1,0,'Direct links to YouTube media<br>for IP address: '+ expire_date()[0])
  html.push(
   '<br><b>' + title + '</b>' +
   '<br>Links will expire on <br>' + expire_date()[1] + 
   '<br><br>V+A sources may refuse to load, while separate video- and audio-only ones synced may still do for playback. If those fail as well, clear YT-cookies, refresh page and reload the script.'
  )
  document.getElementById('bm2').innerHTML = html.join('<br>')

function nop(){
  var dw = document.createElement('div')
  dw.id = 'bm6'
  dw.textContent = 'Force Flashplayer'
  document.getElementById('bm2').appendChild(dw);
  dw.setAttribute('style','inline-block')

  var dw = document.createElement('input')
  dw.id = 'html5toflash'
  dw.type = 'checkbox'
  document.getElementById('bm6').appendChild(dw);

  var onclic = "if (this.checked) { yt6.forceflash = true } else { yt6.forceflash = false };"
  dw.setAttribute('onclick', onclic)
  dw.setAttribute('style','inline-block')
  if (yt6.forceflash) { dw.setAttribute('checked','checked') } else { dw.removeAttribute('checked') }
}//nop

  var dw = document.createElement('button');
  dw.id = "bm5";
  dw.innerHTML = protocol() + '//www.youtube.com/html5';
  document.getElementById('bm2').appendChild(dw);


  document.getElementById('bm5').style.color = "#EE0000";
  document.getElementById('bm5').setAttribute('onclick', 'window.open( "' + protocol() + '//www.youtube.com/html5", "_blank").focus() ')

  if (!document.getElementById('bm3')) {
    var dw = document.createElement('div');
    dw.id = 'bm3';
    if (document.getElementById('body-container') != null) {
      document.getElementById('body-container').appendChild(dw)
    } else {
	document.getElementById('top').insertBefore(dw,document.getElementById('player'))
      }
  }

  document.getElementById('bm3').height = parseInt(document.getElementById('bm2').offsetHeight) + expire_date()[2];  
  document.getElementById('bm3').setAttribute('style','font-size: 13px; color:black;display:block; visibility:hidden; position:fixed; left:0%; top:48px; width:224px; height:' + document.getElementById('bm3').height + 'px; margin-top:0px; margin-right:0px; background:#FFFFFF; opacity:1; padding:2px 2px 2px 2px; border:1px solid #DDD; z-index:2147483648; overlay-y:hidden');
  document.getElementById('bm3').setAttribute('class','yt-uix-button-menu ')
  document.getElementById('bm3').innerHTML = document.getElementById('bm2').innerHTML;
  document.getElementById('bm2').innerHTML = '';
//var csspopupheight = parseInt(document.getElementById('bm3').offsetHeight) + 10 ;document.getElementById('bm3').setAttribute('style',document.getElementById('bm3').getAttribute('style') + ';height:' + csspopupheight + 'px;' + 'overflow-y: scroll')

  var dw = document.createElement('button');
  dw.id = 'bm4';
  dw.innerHTML = '<img src="//i1.ytimg.com/i/gsZadWjuuN2dEhI0mZfVfQ/mq1.jpg?v=531525b4" style="height:27px; font"></img><br><div style="margin-left: -2px">Download</div>';

  var onclic = function(){

    var z = document.getElementById("bm3")
    if (z) z.style.top = yt6.mhp.offsetHeight - 2 + "px" 

    if  ((window.ytplayer != null) &&
	 (window.ytplayer.config != null) &&
	 (document.getElementById("bm0") != null) &&
	 ((yt6.wna == null) ||
	  (document.getElementById("remove") == null) ||
	  (document.getElementById("controls") == null))
	)
      { //}

    set_controls();

    } else {

    if (document.getElementById("bm3").style.visibility === "visible") { 
      //document.getElementById("bm2").style.visibility = "hidden";
      document.getElementById("bm3").style.visibility = "hidden";
      document.getElementById('bm3').style.height = '0px';
    } else { 
        //document.getElementById("bm2").style.visibility = "visible";
        document.getElementById("bm3").style.visibility = "visible";
        if ((typeof player.getPlayerState == 'function') && (flashvars != 'object') && (player.style.opacity == '1')) {
          document.getElementById("bm3").style.opacity = '1'
        } else {
            document.getElementById("bm3").style.opacity = '0.9'
          }
 ;
        var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
        var csspopupheight = document.getElementById('bm3').height = Math.min(windowheight, document.getElementById('bm3').scrollHeight);
        if (csspopupheight > windowheight - expire_date()[2]) { 
          document.getElementById('bm3').style.height = windowheight - expire_date()[2] + 'px';document.getElementById('bm3').style.overflowY = 'scroll'
        } else { 
            document.getElementById('bm3').style.height = csspopupheight + 'px';document.getElementById('bm3').style.overflowY = 'hidden' 
          }
      }

    }//else

  }//onclic

  document.getElementById('bm1').appendChild(dw);
  document.getElementById('bm4').setAttribute('style','font-size:10px; padding:0px 3px; width: 52px; max-height:30px; vertical-align: middle; display:none;');
  document.getElementById('bm4').setAttribute('class','snarl-button yt-uix-button-text');
  document.getElementById('bm4').onclick = onclic;


  if (unescape(args.ttsurl) != 'undefined') {
    document.getElementById("bm3").innerHTML = document.getElementById("bm3").innerHTML + '<br><br>SubRip/WebVTT subtitles:<br>(On Bookmarklet-URL line, edit the value to "add_subs")<br>'
  }

document.getElementById("bm3").style.top = yt6.mhp.offsetHeight - 2 + "px"
document.getElementById("bm3").style.height = "0px"
}//redo



//oldbrowser error hunt
//document.getElementById('bm4').style.display = 'block';document.getElementById('bm3').style.visibility = 'visible';

if (!document.getElementById('video-hide')) {
   (function loadScript(){
	var z = document.createElement("div")
	z.id = "video-hide"
	yt6.appendChild(z)
	var a = document.getElementById('page') || document.getElementById('mainContainer');
	// !!! New YouTube Layout! !!! (2016-07-10)
	if ((document.getElementById('content') == null) && (document.getElementById('dropShadow') == null)) {
	  var z = document.createElement("div")
	  z.id = 'content'
	  a.appendChild(z)
	  z.setAttribute('class','  content-alignment')
	  z.setAttribute('role','main')
	  z.setAttribute('style','display: none')
	  z.innerHTML = '<div id="placeholder-player"><div class="player-api player-width player-height"></div></div>'
	}
	delete z;
    })();
}

function loadScript(url, callback)
 {
var z = document.createElement("script");
z.type = "text/javascript";
z.src = url;
z.id = url.split(/[/]+/)[url.split(/[/]+/).length-1];
z.onreadystatechange = callback;
z.onload = callback;
document.getElementById('video-hide').appendChild(z);
 }
function loadCSS(url, callback)
 {
var z = document.createElement("link");
z.type = "text/css";
z.href = url;
z.rel = "Stylesheet";
z.onreadystatechange = callback;
z.onload = callback;
document.getElementById('video-hide').appendChild(z);
 }




loadCSS( protocol() + "//cdn.rawgit.com/snarly/yt6/250f5383074bc9af3ecd2006ee457b35cc8665ea/mediaelementplayer.css", function(){
});



//waitUntilExists('content', function(){
    


/*
if (!document.getElementById('placeholder-player')){
  var js = document.createElement('dev')
  js.id = 'placeholder-player'
  document.getElementById('content').insertBefore(js, document.getElementById('content').firstChild)
  js.innerHTML = '<div class="player-api player-width player-height"></div>';
}
*/

  crossXmlHttpReq(window.ytplayer)
  redo_dl_button(  yt6.args,  yt6.html,  yt6.href)

var jq0 = function()
 {
    var js = document.createElement('style');
    js.type = 'text/css';
    js.media = 'screen';
    //xhr.open('get', "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/snarly/yt6/master/mediaelementplayer.css", false);
    //xhr.send();
    var code = ".html5-video-container{background:#000 no-repeat scroll center center;z-index:10}.html5-main-video,.html5-video-content{position:absolute;width:100%;height:360px;outline:0}.ytp-keyboard-focus,.annotation.annotation-type-custom {display: none;}\
.sitewide-consent-visible .yt-consent-banner {display:none;}\
.sitewide-consent-visible.appbar-hidden #masthead-positioner-height-offset {height:50px;}\
.snarl-button{\
	display:inline-block;\
	max-height:30px;\
	border:solid 1px transparent;\
	padding:0 10px;\
	outline:0;\
	font-weight:bold;\
	font-size:11px;\
	text-decoration:none;\
	white-space:nowrap;\
	word-wrap:normal;\
	line-height:normal;\
	vertical-align:middle;\
	cursor:pointer;\
	*overflow:visible;\
	border-radius:2px;\
	box-shadow:0 1px 0 rgba(0,0,0,0.05)\
}\
.snarl-button:hover{\
	text-decoration:none\
}\
.snarl-button:focus,.snarl-button:focus:hover,.snarl-button-focused,.snarl-button-focused:hover{\
	box-shadow:0 0 0 2px rgba(27,127,204,0.4)\
}\
.snarl-button::-moz-focus-inner{\
	border:0;\
	padding:0\
}\
.snarl-button[disabled],.snarl-button[disabled]:hover,.snarl-button[disabled]:active,.snarl-button[disabled]:focus{\
	opacity:.5;\
	filter:alpha(opacity=50);\
	cursor:auto;\
	box-shadow:none\
}\
.snarl-button img,.snarl-button-icon-wrapper+.snarl-button-content{\
	vertical-align:middle\
}\
.snarl-button .snarl-button-icon,.snarl-button .snarl-button-arrow{\
	display:inline-block;\
	vertical-align:middle\
}\
    #change button{width:18px;text-align:center}";
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
		var A = yt6.A;
		var V = yt6.V;
		var AV = yt6.AV;
		var Seek = yt6.Seek = null;
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
					me.addEventListener('loadstart', function() {
					  //document.getElementsByClassName('mejs-controls')[0].style = 'display: block; visibility: hidden;'
					  FireEvent( mep_x('mep_'), 'mouseover' );
					  if (document.getElementsByClassName('mejs-clear')[0]) document.getElementsByClassName('mejs-clear')[0].setAttribute('id','mejs-clear')
					});
					me.addEventListener('error', function() {
					  if (me.networkState == 3) {
					    var sauce = getElementsByAttribute(document,"input","name",mep_x("mep_") + "_sourcechooser");
					    if ((sauce != undefined) && (sauce.length != 0)) {
					      for (i=0;i<parseInt(sauce.length - 1);i++) {//alert(i)
						if (sauce[i] != undefined) {
						  sauce[i].removeAttribute("checked");
						}
					      }
					    }
					    function decryption_failure(){
					      var z = document.getElementsByClassName('mejs-overlay-error');
					      if (z[0]) {
					        z[0].textContent = 'Video signature decryption failed!';
					        z[0].parentNode.style.setProperty('display','block','')
					      }
					    }
					    if (typeof V[itag(me.src)] !== 'string') {
					      var dash = document.getElementById(mep_x('mep_') + '_sourcechooser_240p  VP9webm');
					      if ((dash != null)) {
						dash.setAttribute('checked','checked'); player1.setSrc(yt6.linx[242]);player1.load();
						if (autoplay(false)) player1.play();
					      } else {
						  var dash = document.getElementById(mep_x('mep_') + '_sourcechooser_240p DASH mp4');
						  if ((dash != null)) {
						    if ((yt6.linx[133]) && (yt6.linx[133].indexOf('/yt_otf/') > -1)) {//not yet available links
						      var dash = document.getElementById(mep_x('mep_') + '_sourcechooser_360p DASH mp4');
						      if ((dash != null)) {
							dash.setAttribute('checked','checked'); player1.setSrc(yt6.linx[134]);player1.load();
							if (autoplay(false)) player1.play();
						      } else { decryption_failure(); }

						    } else {//normal case

							dash.setAttribute('checked','checked'); player1.setSrc(yt6.linx[133]);player1.load();
							if (autoplay(false)) player1.play();
						      }
						  } else { decryption_failure(); }

						}
					    } else { decryption_failure(); };
					  }
					});
					me.addEventListener('loadedmetadata', function() {
					  //document.getElementsByClassName('mejs-controls')[0].style = 'display: block; visibility: hidden;'
					  var A = []; A = yt6.A;
					  if (typeof A[itag(me.src)] == 'string') { player2.setSrc(me.src); player2.load() }
					  FireEvent( mep_x('mep_'), 'mouseover' );
					  if (document.getElementsByClassName('mejs-clear')[0]) document.getElementsByClassName('mejs-clear')[0].setAttribute('id','mejs-clear')
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
						  aspect('media'); //resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false);
						} else resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px');
					      } else {
						  yt6.w = fix_Width()
						  yt6.h = fix_Height()
						  yt6.tbg.style.backgroundColor = "transparent"
					          resize_layers( yt6.w, yt6.h );
					          //me.style.height = (yt6.h.replace('px','') - 30) + 'px';
					          //me.style.width = yt6.w
					        }
					    };
					});
					me.addEventListener('loadeddata', function() {
					  //document.getElementsByClassName('mejs-controls')[0].style = 'display: block; visibility: hidden;'
					  FireEvent( mep_x('mep_'), 'mouseover' );
					  if (document.getElementsByClassName('mejs-clear')[0]) document.getElementsByClassName('mejs-clear')[0].setAttribute('id','mejs-clear')
					});
					me.addEventListener('play', function() {
					  var bn = document.getElementsByClassName('play yt-uix-button-text');
					  if ((bn != null) && (bn[0] != null)) {
					    bn[0].innerHTML = 'pause'
					  };
					  var A = [], V = [], AV = [];
					  A = yt6.A;
					  V = yt6.V;
					  AV = yt6.AV;
					  player2.playbackRate = me.playbackRate;
					  if ((Math.abs(parseFloat(parseFloat(player2.currentTime) - parseFloat(me.currentTime))) > parseFloat(0.3)) && (me.currentTime > 3)) {
					    try { player2.currentTime = me.currentTime } catch(e) {}
					  };
					  if (  ((typeof AV[itag(me.src)] !== 'string') && 
						 (typeof A[itag(me.src)] !== 'string') && 
						 ((typeof V[itag(me.src)] === 'string') || (me.src.indexOf('itag=278') > -1)) 
						) || ((typeof srcto != 'undefined') && (Srcto == Audio)) 
					     )  {
						  player2.play()
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
					me.addEventListener('pause', function() {
					  var bn = document.getElementsByClassName('play yt-uix-button-text');
					  if ((bn != null) && (bn[0] != null)) {
					    bn[0].innerHTML = 'play'
					  };
					  if (typeof player2 != 'undefined') {
					    if (me.src.replace('&ratebypass=yes','') != player2.src.replace('&ratebypass=yes','')) {
					      if (Seek == 3) { player2.pause() };
					      if (Seek === 0) { Seek = 1 };
					      try { player2.pause(); player2.currentTime = me.currentTime } catch(e) {}
					    }
					  }
					});
					me.addEventListener('volumechange', function() {
					  if (me.src.replace('&ratebypass=yes','') != player2.src.replace('&ratebypass=yes','')) {
					    try { player2.setVolume( me.volume ) } catch(e) {};
					    if (me.muted) {
					      try { player2.setMuted(true) } catch(e) {}
					    } else try { player2.setMuted(false) } catch(e) {}
					  }
					});
					me.addEventListener('ended', function() {
					  if (player1.options.loop1) { 
					    Seek = 5; try { me.currentTime = player2.currentTime = 0 } catch(e) { me.currentTime = 0 }; if (typeof AV[itag(me.src)] == 'string') me.play();
					    if (!isNaN(player2.duration)) {
					      player2.currentTime = player2.duration
					    }
					  } else {
					      Seek = 3;
					      if ((player2.currentTime > 0) && (!isNaN(player2.duration))) {
					        player2.currentTime = player2.duration
					      };
					      if (autoplay(false)) { ;;
					        if (!((typeof V[itag(me.src)] == 'string') && (player2.currentTime == 0)) ) {
					          document.getElementsByClassName('yt-uix-scroller-scroll-unit  currently-playing')[0].nextSibling.nextSibling.lastChild.previousSibling.click()
var z = document.getElementsByClassName('style-scope ytd-playlist-panel-video-renderer x-scope yt-formatted-string-0');for(i=0;i<z.length;i++) { if ((z[i]) && (z[i].textContent == '▶')){z[i].parentNode.parentNode.click()} }
					        };
					      }
					    }
					});
					me.addEventListener('playing', function() {
					  if ( (me.src.slice(-2) == '&2') && (Srcto != Audio) )  {
					    player2.pause()
					  }
					});
					me.addEventListener('seeked', function() {
					  if ( ((me.src.slice(-2) !== '&2') && (me.src.replace('&ratebypass=yes','') != player2.src.replace('&ratebypass=yes',''))) || (Audio == Srcto) ) {
					    if (me.paused) {
					      player2.setCurrentTime( me.currentTime )
					    } else {
					        if (Seek !== 3) { Seek = 1 };
					        if (Audio == Srcto) { player2.currentTime = me.currentTime; }
					      };
					    if ((me.src.slice(-2) !== '&2') && (Math.abs(parseFloat(parseFloat(player2.currentTime) - parseFloat(me.currentTime))) > parseFloat(0.3))) {
					      me.pause()
					    }
					  }
					});
			}
		});//player1
	if (typeof srcto == 'undefined') {
		$('#player2').mediaelementplayer({
		  enableKeyboard: true,
		  enableAutosize: false,
		  pauseOtherPlayers: false,
		  autoRewind: false,
		  features: ['',],
		  audioWidth: 1, audioHeight: 1,
		  success: function(me) {  $('#audio-type').html( me.pluginType);
					me.addEventListener('seeked', function() {
					  if ((Seek == 1) || (Seek == 5)) {
					    Seek = null ;  player1.play()
					  } else {
					      if ( (!me.paused) && (document.getElementById('bm0').style.visibility != 'hidden') ) {
						player1.setCurrentTime( me.currentTime )
					      }
					    }
					});
					me.addEventListener('ended', function() {
					  if (player1.options.loop1) {
					    Seek = 1; me.currentTime = 0;
					  } else {
					      Seek = 3; me.currentTime = 0;
					      if ((autoplay(false)) && (document.getElementById('player1').currentTime < document.getElementById('player1').duration)) {;;
						document.getElementsByClassName('yt-uix-scroller-scroll-unit  currently-playing')[0].nextSibling.nextSibling.lastChild.previousSibling.click();
var z = document.getElementsByClassName('style-scope ytd-playlist-panel-video-renderer x-scope yt-formatted-string-0');for(i=0;i<z.length;i++) { if ((z[i]) && (z[i].textContent == '▶')){z[i].parentNode.parentNode.click()} }
					      }
					    }
					});
					me.addEventListener('pause', function() {
					  if ( (typeof player().getPlayerState != 'function') || (document.getElementById('bm0').style.visibility != 'hidden') ) {
					    if (Seek == 4) { Seek = null; player1.play() };
					    if (Seek == 2) { Seek = null };
					    if (!player1.paused) { player1.pause() }
 					  }
					});
					me.addEventListener('play', function() {
					  Seek = 2 ;var player1_src = document.getElementById('player1').getAttribute('src').replace('&ratebypass=yes','');
					  if ( (player1_src.slice(-2) == '&2') && (document.getElementById('bm0').style.visibility != 'hidden') ) {
					    Seek = 4; me.pause()
					  };
					  if ( (!player1.playing) && (me.src.replace('&ratebypass=yes','') != player1_src) && (document.getElementById('bm0').style.visibility != 'hidden')) {
					    player1.play()
					  } else {
					      if (me.src.replace('&ratebypass=yes','') == player1_src) me.pause()
					    }
					});
					me.addEventListener('loadeddata', function() {
					  if (Seek !== 2) { Seek = 0; player1.pause() } else { }
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
					me.addEventListener('seeked', function() {
					  if ((Seek == 1) || (Seek == 5)) {
					    Seek = null ;  player1.play()
					  } else {
					      if (!me.paused) {
						player1.setCurrentTime( me.currentTime )
					      }
					    }
					});
					me.addEventListener('ended', function() {
					  if (player1.options.loop1) {
					    Seek = 1; me.currentTime = 0;
					  } else {
					      Seek = 3; me.currentTime = 0;
					      if ((autoplay(false)) && (document.getElementById('player1').currentTime < document.getElementById('player1').duration)) {;;
						document.getElementsByClassName('yt-uix-scroller-scroll-unit  currently-playing')[0].nextSibling.nextSibling.lastChild.previousSibling.click();
var z = document.getElementsByClassName('style-scope ytd-playlist-panel-video-renderer x-scope yt-formatted-string-0');for(i=0;i<z.length;i++) { if ((z[i]) && (z[i].textContent == '▶')){z[i].parentNode.parentNode.click()} }
					      }
					    }
					});
					me.addEventListener('pause', function() {
					  if (Seek == 2) { Seek = null };
					  if (!player1.paused) { player1.pause() }
					});
					me.addEventListener('play', function() {
					  Seek = 2;
					  if ( (!player1.playing) && ( ((typeof player().getPlayerState != 'function') && (flashvars == null)) || ((document.getElementById('bm0').style.visibility != 'hidden') && (flashvars != null)) ) )    {
					  	  player1.play()
						}
					});
					me.addEventListener('loadeddata', function() {
					  if (Seek !== 2) {
					    Seek = 0; player1.pause()
					  } else { }
					});
		}});
}//player2

var z = document.getElementsByClassName('mejs-duration'); if (typeof z[0] != 'undefined') {
  var x = yt6.duration
  if (x) {
  var x = x.toHHMMSS();
  if (x.substring(0,2) == '00') { var x = x.substring(3,x.length - 4) };
  z[0].innerHTML = x.split('.')[0];
  }
}

var z = document.getElementById('displaySpeed'); if (z != null) {
  z.style.color = 'white'
}

player1.setPoster(getPoster()); if (typeof document.getElementsByClassName('mejs-poster mejs-layer')[0] != 'undefined') document.getElementsByClassName('mejs-poster mejs-layer')[0].setAttribute('id','mejs-poster')

resize_layers( yt6.w, yt6.h );

var z = document.getElementById(mep_x('mep_') + '_sourcechooser_360p  VP8 + 128k Vorbiswebm');
if ((z != null)) {
  z.setAttribute('checked','checked'); player1.setSrc(yt6.linx[43]);player1.load()
}

	var z = document.getElementsByClassName('me-cannotplay');
	if (z[0]) {
	  z[0].style.display = 'none';
	  z[0].nextSibling.style.display = '';
	}

if (typeof yt6.fnCheckLocation != 'number') {}; autoplay() 

}//mep_run



function mep_up() {

var cw = document.getElementById("bm0");//document.querySelector('#bm0');
if (cw != null) {
  if (typeof player1 == 'object') { if (typeof player1.remove == 'function') { try { player1.remove(); //player1 = null
 } catch (e){} }}
  if (typeof player2 == 'object') { if (typeof player2.remove == 'function') { try { player2.remove(); //player2 = null
 } catch (e){} }}
  cw.parentNode.removeChild(cw)
}

//document.cookie="VISITOR_INFO1_LIVE=Qa1hUZu3gtk;path=/;domain=.youtube.com";
//if (!cw) {
    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if (typeof z.firstChild.style != 'object') document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
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

  yt6.hdiff = parseInt( y.height.replace('px','') - ((y.height.replace('px','') / 60 >> 0) * 60) ); 
  var hdiff = yt6.hdiff
  if (hdiff == undefined) hdiff = 30

  yt6.w = fix_Width() || y.width
  yt6.h = fix_Height() || y.height
  yt6.tbg.style.backgroundColor = "transparent"

  var w = yt6.w
  var h = yt6.h

    
  if (document.getElementById('bm0') != null) { document.getElementById('bm0').parentNode.removeChild(document.getElementById('bm0')) }
  var cw = document.createElement('div');
  cw.id = 'bm0';
  player().parentNode.insertBefore(cw, player().nextSibling);
  document.getElementById('bm0').setAttribute('style','background:#111;width: '+w+'; height: '+h+'; top:0px; overflow: hidden;visibility:hidden;');
  document.getElementById('bm0').setAttribute('class','html5-video-content');
  document.getElementById('movie_player').setAttribute('wmode','window');
  //document.getElementById('player').setAttribute('wmode','transparent');
  //document.getElementById('player-api').setAttribute('wmode','transparent');
  //document.getElementById('bm0').setAttribute('wmode','transparent');

    var js = document.createElement('video');
    js.id = 'player1';
    document.getElementById('bm0').appendChild(js);
    js.setAttribute('width',Math.round(parseInt(h.replace('px','') - hdiff) * yt6.aspect_ratio));
    js.setAttribute('height', (h.replace('px','') - hdiff));
    js.setAttribute('controls','controls');
    js.setAttribute('preload',"none");    
  if (typeof document.getElementsByClassName('video-stream html5-main-video')[1] === 'undefined') {
    document.getElementById('player1').setAttribute('class','video-stream html5-main-video')
    document.getElementById('player1').style.zIndex = "0";
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
yt6.A = A
yt6.V = V
yt6.AV = AV

if ((unescape(ytplayer.config.args.ttsurl) != 'undefined')) {
for(k=1;k<ytplayer.config.args.ttsurl.length;k++){
var sref = unescape(ytplayer.config.args.ttsurl[k]) + '&type=list&tlangs=1&fmts=0&asrs=1';
  //      sref += '&type=track&lang=en&name&kind&fmt=1';
  //      sref += '&type=list&tlangs=1&fmts=0&asrs=1';
  xhr.open('get', sref, false);
  xhr.send('');
  var tts = parseXml(xhr.responseText);
  var tracks = [];
  
  var lang_codeA = window.navigator.userLanguage || window.navigator.language
  if (lang_codeA) { lang_codeA = lang_codeA.toLowerCase() }
    if (typeof document.getElementsByClassName("content-region")[0] != 'undefined') {
      var tlang_codeA = document.getElementsByClassName("content-region")[0].textContent || getElementsByAttribute(document,"span","class","content-region")[0].textContent
      if (tlang_codeA) { tlang_codeA = tlang_codeA.toLowerCase() }
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
    for(i=k.length-1;i>0;i--){
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
    var k = document.getElementsByClassName('remove-tracks');
    while (k[0]) { k[0].parentNode.removeChild(k[0]);  }

    var k = document.getElementsByTagName('track')
    var x = 0
    for(i=k.length-1;i>0;--i){
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
    var k = document.getElementsByClassName('remove-tracks');
    while (k[0]) { k[0].parentNode.removeChild(k[0]);  }

  }
} else { var sref = null; var tracks = null }
//}//player_null


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
    js.innerHTML = '<param name="movie" value="//cdn.rawgit.com/johndyer/mediaelement/8adf73f1a2bec0b6867f83917ce8c491d01c1aa9/build/flashmediaelement-cdn.swf" />\
                    <param name="flashvars" value="controls=true&file=' + encodeURIComponent(protocol() + yt6.linx[18]) +'" />';
                    //<!-- Image as a last resort -->
                    //<img src="myvideo.jpg" width="320" height="240" title="No video playback capabilities" />
//js.width = yt6.w.replace('px','')
//js.height = yt6.h.replace('px','')


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






    js.src = yt6.audio;
    js.type = "audio/ogg";
    document.getElementById('player2').appendChild(js);
    js.setAttribute('style',"display: none; visibility: hidden");
    delete js;


if (document.getElementById('mep_init') == null) {


    var js = document.createElement('script');
    js.id = "mep_init";
    //document.getElementById('video-hide').appendChild(js)

    var code = "jQuery(document).ready(function($) {\
		$('#version').html( mejs.version);" + mep_run.toString().replace("function mep_run() {",'') + ")";//!!!function_body.toString() -> "() {" may insert a white space there!!!

    try {
      js.appendChild(document.createTextNode(code));
      document.getElementById('video-hide').appendChild(js);
    } catch (e) {
         try {
	   js.text = code;
	   document.getElementById('video-hide').appendChild(js);
	 } catch (e) {}
    }


} else {//mep_init

  }

var z = getElementsByAttribute(document,"a","onclick")
for(i = 0;i<z.length-1;i++){
 if (z[i] != undefined) {
  var timecode = z[i].getAttribute('onclick')
  if ( (timecode != null) && (timecode.indexOf('yt.www.watch.player.seekTo\(') > -1) ) {
    z[i].setAttribute("onclick", "if ( (player1) && (player1.currentTime) && (document.getElementById('bm0').style.visibility === 'visible')) { player1.currentTime = " + timecode.split('player.seekTo\(')[1].split('\)')[0] + " } else { " + timecode.split('\;')[0] + " };" + timecode.split('\;')[1] + "\;")
  }
 }
}

var z = gclass("ad-container-single-media-element-annotations")
if (typeof z[0] != 'undefined') z[0].style.display = "none"

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if (typeof z.firstChild.style != 'object') z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
      var z = z.firstChild;
    }

    var z = yt6.osw
    if (z.getAttribute('id') != 'player') {
      if (typeof z.firstChild.style != 'object') z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
      var z = z.firstChild;
    }

//aspect();aspect(); 

//header clean up
var z = document.getElementsByClassName('yt-consent yt-consent-banner clearfix')
if (typeof z[0] != 'undefined') { z[0].setAttribute('style','display: none') }
var z = document.getElementsByClassName('style-scope ytd-masthead x-scope ytd-consent-bump-renderer-0')
if (typeof z[0] != 'undefined') { z[0].setAttribute('hidden','') };//style = 'display: none'

//var z = document.getElementById('masthead-positioner-height-offset')
//if (z != null) z.style = 'height:50px'

document.getElementById('bm4').style.display = 'inline-block';

var z = document.getElementsByClassName('yt-masthead-logo-container')
if (z[0]) {
  var z = z[0]
} else {
    var z = document.getElementById('start');
    if (z == null) throw 'YouTube layout mismatch';
  }
if ( 1 * getElementsByAttribute(document,'div','class', z.getAttribute('class').indexOf('doodle') > -1 )) {alert(z.getAttribute('class').indexOf('doodle') )
  var z = document.getElementById('logo-container') || document.getElementById('logo');
  z.setAttribute('style','width:88px');
}

document.getElementById('bm3').style.top = yt6.mhp.offsetHeight + z + 'px'



//autoplay()


//}//cw


  if ((typeof player().getAttribute('flashvars') == 'string') && (typeof player().getPlayerState != 'function') && (document.getElementById(mep_x("mep_")) == null)) {

    if (player().getAttribute('src') == '') { player().setAttribute('src','https://s.ytimg.com/yts/swfbin/player-' + swfbin4 + '/watch_as3.swf') }
    $waitUntil(
      function(){
        if (yt6 != null) { if ((typeof document.getElementById('movie_player').getPlayerState == 'function') && (typeof document.getElementById('me_flash').playMedia == 'function')) { return true } //else { if (document.getElementById('eow-title').style.display != 'none') { document.getElementById('eow-title').setAttribute('style','display:none') } else { document.getElementById('eow-title').innerHTML = '1'+typeof document.getElementById('movie_player').getPlayerState+typeof document.getElementById('me_flash').playMedia; document.getElementById('eow-title').setAttribute('style','display:block') } }
      } else { return true }
      },
      function(){
	yt6.bup = document.getElementById('me_flash').cloneNode(true);
	mep_run();
	if (typeof document.getElementById('me_flash').playMedia != 'function') {
	  document.getElementById('me_flash').parentNode.appendChild(yt6.bup)
	  document.getElementById('me_flash').parentNode.removeChild(document.getElementById('me_flash'))
	  yt6.bup = null;
	}
	//player().addEventListener("onStateChange", Sync, true);
      }
    )
  } else {
	//player().addEventListener("onStateChange", Sync, true)
	//yt6.size = 'default'
    }



}//mep_up

    var jq1 = function() {
      var jq2 = function() {
        var jq3 = function() {
//          var jq4 = function() {
            var jq5 = function() {

mep_up();
            };
            loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/90c833e40a485c77fb393aa91c4c9b8817067172/mep-feature-speed.js",jq5)

//          };
//          loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/f684d6c92fc170be45129a7f2c12069689fcc0b0/mep-feature-playlist.js",jq4)

        };
        loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/49c8440ad31e83bf6d9f0951a83020cc730399d4/mep-feature-loop.js",jq3)

      };
      loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/1b69efe5d367952c307eaf7ca70ca1074ddd1c1a/mep-feature-sourcechooser.js",jq2)

    };

    //loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/1a2653c6f02a907c52e6a9a9d6f071e05926d95b/mediaelement-and-player.js",jq1)

    loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/83f842c26b87c7aca0e7745213cfe21ae04fe36a/mep-ceeb1a7.js", jq1)


	function playNext(){

		var p = player();
		var bm0 = document.getElementById('bm0')

		if (yt6.size == undefined) yt6.size = 'default'
		aspect(yt6.size)

		if (yt6.size == 'default') yt6.tbg.style.backgroundColor = "transparent"
		document.getElementById('bm4').style.display = 'inline-block';

		if (flashvars == null) var flashvars = getFlashVars();
		if (me_flash != document.getElementById(mep_x('me_flash_'))) var me_flash = null

	    if ( (p != null) && (bm0 != null) && (yt6.args != null) &&
		   ( (p.getAttribute('name') == 'movie_player') || (p.getAttribute('name') == 'me_flash') )
//		&& ( (typeof p.getPlayerState == 'function') || (typeof p.playMedia == 'function') || (( me_flash != null) && (typeof me_flash.playMedia == 'function')) )
		) {

		    var z = def_link(); //console.log(p.getAttribute('name') + z)
		    var me_flash = getElementsByAttribute(document.getElementById("player-api"),"embed","name",mep_x("me_flash_"))
		    if (me_flash[0] != undefined){
		      var x = gclass('mejs-shim');
		      if ((x != undefined) && (x != null) && (x[0] != undefined) && (x[0] != null)) {
			if ((document.getElementById(mep_x('me_flash_')) != null) && (bm0.style.visibility == 'visible')) {
			  var me_flash = document.getElementById(mep_x('me_flash_'))
			}
		      }
		    }
		function flashplugin(){
		    var p = player()
		    if ( (bm0.style.visibility == 'hidden') && ( ((typeof p.getAttribute('flashvars') == 'string') && (typeof p.getPlayerState != 'function')) || ((p.getAttribute('name') == 'me_flash') && (typeof p.playMedia != 'function')) ) ) { yt6.flash = false }
		    if ( (bm0.style.visibility == 'hidden') && ( ((typeof p.getAttribute('flashvars') == 'string') && (typeof p.getPlayerState == 'function')) || ((p.getAttribute('name') == 'me_flash') && (typeof p.playMedia == 'function')) ) ) { yt6.flash = true }
		}

                if ((p.getAttribute("name") != "me_flash") && (typeof p.getAttribute('flashvars') == 'string')) {
		    if ((z.indexOf('%26false') == -2)) {//console.log('a-1');
		      p.style.display = 'none';
		      me_flash_2load();
		      if (!document.getElementById(mep_x("mep_"))) set_controls()
		      if (bm0.style.visibility == 'hidden'){//console.log('a-2');
			yt6.autoplay = true;
			waitUntilExists('playerState_null',function(){//console.log('a-3');
			  //
waitUntilExists('movie_player',function(){
			    bm0.style.visibility = 'visible';//console.log('a-4');
			    flashplugin(); autoplay(true);
			  //
})
		        })
		      } else {//console.log('a-5');
			  yt6.autoplay = true;
			  waitUntilExists('movie_player',function(){
			    bm0.style.visibility = 'hidden';//console.log('a-6');
			    flashplugin(); autoplay(true);
			  })
			}
		    } else {//console.log('a-7');
			yt6.autoplay = true;
			  //var z = p.getAttribute('src');p.setAttribute('src',''); 
		        //p.style.display = 'none';
			window.ytplayer.config.args.html5_unavailable = 1; window.ytplayer.config.args.autoplay = 1;
			p.setAttribute("flashvars",correct_flashvars(window.ytplayer.config.args));
			//reload_flashplayer()
			try { document.getElementById('movie_player').addEventListener("onStateChange", Sync, true) } catch(e) {};
			flashplugin(); autoplay(true)
		        //document.getElementById('movie_player').style.display = ''
		        //p.setAttribute('src',z); 

			/*$waitUntil(
			  function(){
			    if ((typeof document.getElementById('movie_player').getPlayerState == 'function') && (document.getElementById('playerState_null') != null)) { return true } else if (document.getElementById('playerState_null') != null) { flashplugin(); autoplay(true) } else return true
			  },
			  function(){
			    if (bm0.style.visibility == 'visible') {
			      document.getElementById('movie_player').style.display = 'none';
//flashplugin();alert(yt6.flash + document.getElementById('movie_player').style.display);
			      flashplugin(); autoplay(true)
			    } else {  }
			  },100,2000
			)*/
		      }
		  
                } else {//me_flash
		    if ( ((z == undefined) || (z.indexOf('%26true') > -1)) && (typeof p.getAttribute('flashvars') == 'object') && (p.getAttribute('name') == 'me_flash') && (document.getElementById('movie_player_bup')) && (document.getElementById('movie_player_'))){
			yt6.autoplay = true;//console.log('a-8');
			waitUntilExists('movie_player',function(){//console.log('a-9');
			  window.ytplayer.config.args.html5_unavailable = 1; window.ytplayer.config.args.autoplay = 1;
			  document.getElementById('movie_player').setAttribute("flashvars",correct_flashvars(window.ytplayer.config.args));
	  		  document.getElementById('movie_player').style.display = '';
			  //document.getElementById('movie_player').setAttribute('id','movie_player')
			  //waitUntilExists('playerState_-1',function(){
			  //console.log('10');
			  //  bm0.style.visibility = 'hidden';
			  //  document.getElementById('movie_player').style.display = '';
			    flashplugin(); reload_flashplayer();
			    autoplay(true);
			 //})
			})
			document.getElementById('movie_player_').style.display = 'none';
			//document.getElementById('movie_player_').setAttribute('id','movie_player1')
		        var bup = document.getElementById('movie_player_').cloneNode(true);
		        $.removeData(p); p.parentNode.removeChild(p); p = null; p = {}; delete p;//player().parentNode.removeChild(player());
			bup.setAttribute('id','movie_player')
        		document.getElementById("player-api").insertBefore(bup, document.getElementById("bm0"));

		    } else {//console.log('a-11');
			if ((typeof p.getAttribute('flashvars') == 'object') && (p.getAttribute('name') == 'me_flash')) {

			  var z = def_link()
			  var me_flash = getElementsByAttribute(document.getElementById("player-api"),"object","name","me_flash");
			  if ((me_flash != undefined) && (me_flash.length != 0)) {//console.log('a-12');
			    yt6.autoplay = true
			    waitUntilExists('movie_player',function(){//console.log('a-13');
			      document.getElementById('movie_player').style.display = 'none'
			      if (bm0.style.visibility == 'hidden'){
			        bm0.style.visibility = 'visible'
			      }
			      flashplugin(); autoplay(true)
			    })
			    var me_flash_param = getElementsByAttribute(me_flash[0],"param","name","flashvars");
			    me_flash_param[0].setAttribute("value", me_flash_param[0].getAttribute("value").split("&file=")[0] + "&file=" + z);// + me_flash_param[0].getAttribute("value").split("&amp;file=")[1].split("&amp;")[1])
			    p.setAttribute("src", z); 
			    document.getElementsByClassName("video-stream html5-main-video")[0].setAttribute("src", z);
			    reload_flashplayer();
			  }
			} else {//console.log('a-14');
			    yt6.autoplay = true; flashplugin(); autoplay(true)
			  }
		      }

                  }
            } else {
		//if (bm0 == null) yt6.args = null
		var z = document.getElementsByClassName('video-stream html5-main-video')[0]
		if ((z) && (z.parentNode) && (z.parentNode.parentNode) && (z.parentNode.parentNode.getAttribute('id') == 'movie_player')) {// && (document.getElementById('html5toflash').checked == true)) {
		  //console.log(p + bm0 + p.getAttribute('name') + '1 playNext')
		  //z.setAttribute('src','');
		  //recreate_ytp_conf_flash()
		  waitUntilExists("displaySpeed", function(){
		    if (typeof document.getElementById('player1').play == 'function') { yt6.autoplay = true; autoplay(true) } 
		  })
		} else {
		  //console.log(p + bm0 + p.getAttribute('name') + '2 playNext')
		    waitUntilExists("displaySpeed", function(){
		      if (typeof document.getElementById('player1').play == 'function') { yt6.autoplay = true; autoplay(true) } 
		    })
		  }
		
	      }
/*	    if ((yt6.autoplay == false) || (yt6.args == null)) {console.log('a-15');
		waitUntilExists("displaySpeed", function(){console.log('a-16');
		  if (typeof document.getElementById('player1').play == 'function') { yt6.autoplay = true; autoplay(true) } 
		})
	    }
*/	}//playNext

	function mep_reload(){

	    var webgl = get_webgl()
	    ///if (!webgl) try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {};


	    $.removeData([mejs.players['mep_1'], mejs.players['mep_0']])
	    mejs.players['mep_1'] = null; delete mejs.players['mep_1'];
	    mejs.players['mep_0'] = null; delete mejs.players['mep_0'];
	    $.removeData(mejs.players)
	    mejs.players = null; delete mejs.players;
	    mejs.mepIndex = 0; mejs.players = {}
	    yt6.duration = 0; yt6.player1 = null; delete yt6.player1

	    crossXmlHttpReq(window.ytplayer);

	    redo_dl_button(  yt6.args,  yt6.html,  yt6.href);

	    document.getElementById('player-api').style.overflow = 'hidden';
	    mep_up();mep_run();

/*	    if ((document.getElementById('html5toflash').checked == true) && (p != null) && (p.getAttribute('name') != 'me_flash') && (p.getAttribute('class') != null)) {
	      $.removeData(p); p = null; // 	      p.parentNode.removeChild(p);p = {}; delete p;
	      var z = def_link(); ((z == undefined) || (z.indexOf('%26true') > -1)) ? html5toflash() : me_flash_up()
	      waitUntilExists('displaySpeed', function(){
		if ((p!= null) && (p.getAttribute('name') != 'me_flash')) {
		  p.setAttribute('name','movie_player')
		};
		//console.log('check' + p.getAttribute('name'));
		playNext()
	      })
	    } else { */
playNext() //}

	}//mep_reload



if (typeof yt6.fnCheckLocation != 'number') {
//requesting new page
document.getElementsByTagName('body')[0].spfrequest = function(e) {
    yt6.spf = true
    if ((bm0) && (bm0.style.visibility == 'visible')) { yt6.x = true } else { yt6.x = false };

/*    var webgl = get_webgl()
    if ((yt6 != null) && (!webgl)) {
    //waitUntilExists('player-api', function(){
      //window.addEventListener("playVideo", function(){
	if (player().getAttribute('flashvars') == null) {
	  try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {}
	} else         window.postMessage("pauseVideo", "*")
      //})
    //})
    }*/
  }
window.addEventListener('spfrequest', document.getElementsByTagName('body')[0].spfrequest, false);

//new page is processed
document.getElementsByTagName('body')[0].spfprocess = function(e) {
    yt6.spf = true
  var webgl = get_webgl()
  if ((yt6 != null) && (!webgl)) {
    if (player().getAttribute('flashvars') == null) {
	try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {}
    } else	window.postMessage("pauseVideo", "*")
  }

 }
window.addEventListener('spfprocess', document.getElementsByTagName('body')[0].spfprocess, false);

//new page is displayed
document.getElementsByTagName('body')[0].spfdone = function(e) {
	var p = player();
	var bm0 = document.getElementById('bm0')
	var yt6 = document.getElementById('snarls_player')

    yt6.spf = true
    var z = document.getElementById('re-embed2')
    if (z != null) { z.parentNode.removeChild(z); document.querySelector('#player-unavailable').style.display = ''}
    var z = document.getElementById('unavailable-submessage')

  if ((z != null) && (z.textContent.replace(/(\r\n|\n|\r)/gm," ").split(' ').join('') != '')) {

    if (document.querySelector('#watch7-player-age-gate-content') != null) {
      var z = document.createElement('iframe');
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
      document.querySelector('#player-unavailable').style.display = 'none';
      //player().style.display = 'none';
      player().style.setProperty('width', '0', 'important')
      player().style.setProperty('height', '0', 'important')
      if (document.getElementById('bm0') != null) document.getElementById('bm0').style.display = 'none'
    } else {
	var z = document.querySelector('[itemprop="regionsAllowed"]')
	if (z != null) {
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
	    document.getElementById('player-unavailable').title = z
	    document.getElementById('player-unavailable').setAttribute('aria-label',z)
	    document.getElementById('player-unavailable').setAttribute("onclick","javascript:if(document.getElementById('unavailable-submessage').innerHTML != '') { alert('"+z+"') }");

	    document.getElementById('bm3').style.height = '250px'
	    document.getElementById('bm3').style.fontSize = '150%'
	    document.getElementById('bm3').style.visibility = 'visible'
	    document.getElementById('bm3').setAttribute('onclick', document.getElementById('player-unavailable').getAttribute("onclick"))
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
	document.getElementById('player-unavailable').removeAttribute('title')
	document.getElementById('player-unavailable').removeAttribute('aria-label')
	document.getElementById('player-unavailable').removeAttribute('onclick')

	var checkLoc = function() { return document.title }
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

	if ((yt6.title != document.title) && (checkLoc() != 'YouTube'))  {
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
		yt6.autoplay = false;



	        $( window.location ).trigger( "change",
		  {
		    currentHref: yt6.strLocation,
		    currentHash: fnCleanHash( yt6.strHash ),
		    previousHref: strPrevLocation,
		    previousHash: fnCleanHash( strPrevHash )
		  }
	      );
		//document.getElementsByClassName('clear')[0].removeAttribute('id');
		//waitUntilExists('ytplayer-config', function() { 
		mep_reload()
		//})

	    }//else
	}

    }//unavailable-submessage else

}
window.addEventListener('spfdone', document.getElementsByTagName('body')[0].spfdone, false);

    jQuery(document).ready(function( $ ){
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
	var yt6 = document.getElementById('snarls_player')
	var checkLoc = function() { return document.title }

	var bm0 = document.getElementById('bm0')
        if ((yt6 != null) && (document.getElementsByClassName('mejs-clear')[0])) {
	  yt6.loaded = true;
	  if ((bm0 != null) && (bm0.style.visibility == 'visible') && (typeof p.getPlayerState == 'function') && (p.getPlayerState != 2)) {
	    if (player().getAttribute('flashvars') == null) {
		try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {}
	    } else window.postMessage("pauseVideo", "*")
	  }
	}

	var ads = document.getElementsByClassName('videoAdUiSkipButton')[0]; if (ads) { ads.click();ads.setAttribute("class","videoAdUiSkipButton") }
	var ads = document.getElementsByClassName("video-ads html5-stop-propagation")[0]; if (ads) { ads.parentNode.removeChild(ads) };
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
	if ((z.indexOf('playerState_') > -1) && (typeof document.getElementsByClassName('alerts-wrapper')[0] != 'undefined') && (document.getElementsByClassName('alerts-wrapper')[0].getAttribute('id') != z)) document.getElementsByClassName('alerts-wrapper')[0].setAttribute('id',z)

	var z = getElementsByAttribute(document.getElementById('player-api'),'*','id','movie_player')
	for (i=0;i<z.length;i++){
	  if ((z[i]) && (p != z[i])){
	    //var watch = getElementsByAttribute(z[i],'video','class','video-stream html5-main-video');
	    //if (watch[0].getAttribute('src')) { 
	      $.removeData(z[i]); z[i].parentNode.removeChild(z[i]); z[i] = null; z[i] = {}; delete z[i]; set_controls()
	    //}
	  }
	}
  	
	//var reset = document.getElementsByClassName('reset yt-uix-button-text')[0];//  


	var autoscale = document.getElementById("placeholder-player") || document.getElementById('player')
	var watch = document.getElementById('page') || document.getElementById('mainContainer'); if (watch != null) var watch = watch.getAttribute("class"); if ((typeof watch == 'string') && (watch.indexOf('watch') == -1)) var watch = null
	var flashvars = player().getAttribute('flashvars')

	if ((document.getElementById("player2")) && (typeof document.getElementById("player2").play == 'function')) {
	  var z = document.getElementById("player1").getElementsByTagName('source');
	  while (z.length > 0){
		document.getElementById("player1").removeChild(z[0]);
	  }
	}

function recreate_ytp_conf_flash(){

		yt6.args = null
function nop(){		var z = document.getElementsByClassName('video-stream html5-main-video')[0]
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
			"url":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-" + swfbin4 + "\/watch_as3.swf",
			"html5":true,
			"url_v8":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-" + swfbin4 + "\/cps.swf",

			"params":{
			"allowscriptaccess":"always",
			"bgcolor":"#000000",
			"allowfullscreen":"true"},

			"url_v9as2":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-" + swfbin4 + "\/cps.swf",

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


	if ( (bm0 == null) && ( ((p != null) && ( (p.getAttribute('class') != null) || (window.ytplayer.config == undefined) )) ) ) {/* || (yt6.strLocation == window.location.href) || (document.getElementsByClassName('clear')[0].getAttribute('id') == 'ytp-conf-loading')
//alert(typeof window.ytplayer.config + p.getAttribute('class') + document.getElementById('progress'))
	  if ((window.ytplayer != null) && ((window.ytplayer.config == null) || (window.ytplayer.config == undefined)) && (document.getElementById('html5toflash').checked == true)){
	    //console.log('check4')
	      //waitUntilExists('ytp-conf-null', function(){
		//if (document.getElementById('progress') == null) {
		  yt6.args = null
		  if (document.getElementsByClassName('video-stream html5-main-video')[0]) document.getElementsByClassName('video-stream html5-main-video')[0].setAttribute('src','');
		  if ( (typeof window.ytplayer != 'object') || ((typeof window.ytplayer == 'object') && (window.ytplayer.config == null)) ) {
		    window.ytplayer = {}; /* alert(window.ytplayer.config);
		    var z = document.getElementById('player-mole-container').innerHTML.toString();
		    if (z.split('var ytplayer = ytplayer || {};')[1]) {
		      var z = z.split('var ytplayer = ytplayer || {};')[1];
		      if (z.split(';(function()')[0]) { eval(z.split(';(function()')[0]); }
		    }
		  }
		  if ( (window.ytplayer.config == undefined) && (p.getAttribute('flashvars')) ) {
		    yt6.flashvars = p.getAttribute('flashvars');//document.getElementById('early-body').innerHTML = yt6.args + '________________' + p.getAttribute('flashvars')
		    if (yt6.flashvars){
window.ytplayer.config = {
"sts":16657,
"url":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-" + swfbin4 + "\/watch_as3.swf",
"html5":true,
"url_v8":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-" + swfbin4 + "\/cps.swf",

"params":{
"allowscriptaccess":"always",
"bgcolor":"#000000",
"allowfullscreen":"true"},

"url_v9as2":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-" + swfbin4 + "\/cps.swf",

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
document.getElementById('footer-links').innerHTML = ''
yt6.args = yt6.flashvars.split('&');//alert('length:' + yt6.args.length)
  for (i=0;i<yt6.args.length;i++) {
    if (typeof yt6.args[i] !== 'undefined') {
      var z = yt6.args[i].split('=');
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
yt6.args = null
window.ytplayer.config.autoplay = 1;
window.ytplayer.config.loaded = true;
		    }
		  }
		//}
	      //})
	  }//html5toflash*/
	  //if (document.getElementById('html5toflash').checked == true) recreate_ytp_conf_flash()
	  try { mep_reload()  } catch(e){ document.getElementsByClassName('clear')[0].setAttribute('id','ytp-conf-loading'); }
	}



	var z = document.getElementsByClassName('clear')[0]
	if (window.ytplayer != null){
	  if (window.ytplayer.config != null){
	    if (z.getAttribute('id') != 'ytp-conf-loaded'){
		if (window.ytplayer.config.loaded == true) {
		  z.setAttribute('id','ytp-conf-loaded')
		}
	     }
	  } //else document.getElementsByClassName('clear')[0].removeAttribute('id');//
	}


  var z = p.getAttribute('class');
  if (typeof z == 'string') {
    var ads = z.indexOf('ytp-fullscreen')
    if ((ads > -1) && document.getElementById('player1')) {
      document.getElementById('player1').style.width = '100%'
      document.getElementById('player1').style.height = '100%'
    }
  } else {
      if ((bm0 != null) && (bm0.style.visibility == 'visible')) var ads = null
    }


  //var ads = getElementsByAttribute(document.getElementById('watch7-content'),'div','id','controls');
  //if (ads) for(i=ads.length-1;i>1;i--) { if (ads[i]) ads[i].parentNode.removeChild(ads[i]) }



	if ( (autoscale != null) && (document.getElementsByClassName('mejs-clear')[0]) &&
	    (
	      ( (
		 ( (ads == -1) || ((document.getElementById('player1').style.width != '100%') && (document.getElementById('player1').style.height != '100%')) )
		//&& !( (ads == -1) && ((document.getElementById('player1').style.width != '100%') && (document.getElementById('player1').style.height != '100%')) )
		) ) &&
	       (p.offsetWidth != screen.width) && (p.offsetHeight != screen.height) && (document.getElementById(mep_x('mep_')) != null) &&
	       ((document.getElementById(mep_x('mep_')).offsetWidth != screen.width) &&
	        (document.getElementById(mep_x('mep_')).offsetHeight != screen.height))
	    )
	  ) { //alert("sw: "+ screen.width +", sh: "+screen.height+", pw: "+ p.offsetWidth +                    ", ph: "+ p.offsetHeight +", bw: "+ bm0.offsetWidth +                    ", bh: "+ bm0.offsetHeight);
	  //yt6.fullscreen = false
	  if ((autoscale.offsetWidth != autoscale.width) && (autoscale.offsetHeight != autoscale.height)) { 
 //console.log(yt6.size + ' autoscale 0 ' + autoscale.height +' '+ autoscale.offsetHeight +' '+ yt6.w +' '+ yt6.h);
	    autoscale.width = autoscale.offsetWidth;
	    autoscale.height = autoscale.offsetHeight;
	    bestfit()
 //console.log(yt6.size + ' autoscale 0 ' + autoscale.height +' '+ autoscale.offsetHeight +' '+ yt6.w +' '+ yt6.h);
	    //alert('01')
	    if (bm0) if (document.getElementById('aspect')) { resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false) } else resize_layers(yt6.w, yt6.h)

	  } else {
	      if (autoscale.offsetHeight != autoscale.height) {
 //console.log(yt6.size + ' autoscale 2 ' + autoscale.height +' '+ autoscale.offsetHeight +' '+ yt6.w +' '+ yt6.h); 
		autoscale.height = autoscale.offsetHeight;
		//alert('02')
		if (bm0) if (document.getElementById('aspect')) { resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false) } else resize_layers(yt6.w, yt6.h)
		if ( (!document.getElementById("aspect")) && (yt6.wsb.currentStyle || window.getComputedStyle(yt6.wsb)).marginLeft == '0px' ) {
 //console.log(yt6.size + ' autoscale 2 ' + autoscale.height +' '+ autoscale.offsetHeight +' '+ yt6.w +' '+ yt6.h);
		  bestfit()
 //console.log(yt6.size + ' autoscale 2 ' + autoscale.height +' '+ autoscale.offsetHeight +' '+ yt6.w +' '+ yt6.h);
		  //alert('03')
		  if (bm0) if (document.getElementById('aspect')) { resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false) } else resize_layers(yt6.w, yt6.h)
		}
	      } else {
		  if (autoscale.offsetWidth != autoscale.width) {
 //console.log(yt6.size + ' autoscale 1 width:' + autoscale.width +' offsetWidth:'+ autoscale.offsetWidth +' thb:'+ yt6.tbg.offsetWidth +' '+ yt6.w +' '+ yt6.h ); 
		    autoscale.width = autoscale.offsetWidth;
		    bestfit()
 //console.log(yt6.size + ' autoscale 1 width:' + autoscale.width +' offsetWidth:'+ autoscale.offsetWidth +' thb:'+ yt6.tbg.offsetWidth +' '+ yt6.w +' '+ yt6.h ); 
		    //alert('04')
		    if (bm0) if (document.getElementById('aspect')) { //console.log(document.getElementById('a_width').value + document.getElementById('a_height').value);
		      resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false) } else resize_layers(yt6.w, yt6.h)
		  }
		}
	    }
	    if ((typeof p.getPlayerState == 'function') && (p.getAttribute('flashvars') == null)) {
	      var z = document.getElementsByClassName('video-stream html5-main-video');
	      if (typeof z[0] != 'undefined') {
		var x = document.getElementById('controls'); 
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
          if (yt6.fullscreen != true){
	    yt6.fullscreen = true
	    if (document.getElementById('player1') != null) {
	      if (bm0.style.visibility == 'visible') document.getElementById('player1').style.left = '0px'
	      var z = document.getElementsByClassName('mejs-overlay mejs-layer mejs-overlay-play')[0]
	      if (z) {
		var webgl = z.firstChild.currentStyle || window.getComputedStyle(z.firstChild, null)
		z.style.width = webgl.width.replace('%','px')
		z.style.height = webgl.height.replace('%','px')
		z.style.left = (screen.width - webgl.width.replace('px','')) / 2 + 'px'
		z.style.top = (screen.height - webgl.height.replace('px','')) / 2 + 'px'
	      }
	    }
	    if (p != null) {
		  if ((p.style.display != 'none') && (p.style.width != '')) {
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

	if ( (bm0 != null) && (yt6.fullscreen == true ) && (document.getElementById('player1').style.width != '100%') && (document.getElementById('player1').style.height != '100%') ) {
	  yt6.fullscreen = false
	  if (document.getElementById('aspect')) { resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false) } else resize_layers(yt6.w, yt6.h)
	  p.style.width = bm0.style.width; p.style.height = bm0.style.height
	}
	
	if (yt6.mode != wide_view()) {
 //console.log(yt6.size + ' autoscale mode ' + wide_view() + ' '+ yt6.w +' '+ yt6.h ); 
	  bestfit()
 //console.log(yt6.size + ' autoscale mode ' + wide_view() + ' '+ yt6.w +' '+ yt6.h ); 
	  if (bm0) if (document.getElementById('aspect')) { resize_layers(document.getElementById('a_width').value + 'px', document.getElementById('a_height').value + 'px', false) } else resize_layers(yt6.w, yt6.h)
	  yt6.mode = wide_view()
	}


	if ((yt6.tbg != null) && (yt6.tbg.offsetWidth != yt6.tbg.width)) {
	  yt6.tbg.width = yt6.tbg.offsetWidth
	}

if ((document.querySelector('#unavailable-message') != null) && (document.querySelector('#unavailable-message').innerHTML.indexOf('Content Warning') > -1)) { 

  if (document.querySelector('#player-unavailable').style.display != 'none') document.querySelector('#player-unavailable').style.display = 'none';
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
    if ( (document.getElementById('re-embed2') != null) && ((player().style.width != '0px') || (player().style.display != 'none')) && (document.getElementById('remove') == null) ) {
      if (typeof player().getAttribute('flashvars') == 'string') {
        if (typeof player().getPlayerState === 'function') {
	  window.postMessage("pauseVideo", "*")
	  player().style.setProperty('width', '0px', 'important')
	  player().style.setProperty('height', '0px', 'important')
	}
      } else {
	  try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {}
	  //player().style.visibility = 'hidden';
	  player().style.display = 'none';
	}
    }
  //}//idoc
}//content warning

	if (yt6.spf == true) { yt6.spf = true } else { yt6.spf = false

	// Check to see if the location has changed.
	if ( (yt6.strLocation != window.location.href) || (watch == null) ) {
	  if (window.ytplayer.config == null) { document.getElementsByClassName('clear')[0].setAttribute('id','ytp-conf-null'); };
//	if ((document.getElementById('placeholder-player') != null) && (bm0 != null) && (bm0.style.width != fix_Width()) ) aspect(yt6.size)


	if ((yt6.title) && (yt6.title != checkLoc()) && (checkLoc() != 'YouTube')) {
        //if ((watch != null) && (strPrevLocation != yt6.strLocation)) {
	  //if ( ((window.ytplayer != null) && (window.ytplayer.config != null) && 
	  //     (window.ytplayer.config.loaded) && (yt6.args != window.ytplayer.config.args) && 
	  //     (p != null) && (document.getElementById('watch-discussion') != null) ) ) {
          //works only for browser-level navigation, not for flashplayer "previous/next"
	  if ((window.ytplayer) && (window.ytplayer.config)) {

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
	    yt6.autoplay = false;

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
		//document.getElementsByClassName('clear')[0].removeAttribute('id');
		//waitUntilExists('ytplayer-config', function() { 
		mep_reload()
		//})

	    }//else

	  } else {//args
	      if ((bm0 == null) && (p != null) && (p.getAttribute('class') != null)) {
		if (window.ytplayer.config == null) { document.getElementsByClassName('clear')[0].setAttribute('id','ytp-conf-null'); };
		/*var z = document.getElementById('player-api').textContent.split(',"title":"')[1]
		console.log('bm0' + z);
		if (z == undefined) {
		  var z = yt6.strLocation.split('&')[0];console.log(z)
		  xhr.open('get', z, false);
  		  xhr.send('');
  		  var z = parseXml(xhr.responseText);
  		  var ads = z.getElementById('player-api').textContent.split(',"title":"')[1]
		  console.log('bm0' + ads);
		}
		if ( (typeof window.ytplayer != 'object') || ((typeof window.ytplayer == 'object') && (window.ytplayer.config == null)) ) {
		  window.ytplayer = {};
		  eval(z.getElementById('player-api').textContent.split('var ytplayer = ytplayer || {};')[1].split(';(function()')[0]);
		}*/
		//mep_reload()
	      }
	    }

	}//watch

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
		yt6.autoplay = true; autoplay(true); set_controls();
	    }
/*
	      if (yt6.strLocation.split('&')[0] == window.location.href.split('&')[0]) {
		var z = yt6.strLocation.split('&')
		for(i=1;i<z.length;i++){
		  if (!window.location.href.indexOf(z[i])) { yt6.args = null}
		}
		if ((i==z.length) && (yt6.args != null)) {} else console.log('1')
	      }
*/
	  }


        if (checkLoc() != 'YouTube') {
	  if (typeof yt6.title == 'undefined') yt6.title = document.title;
	  if (yt6.title != checkLoc()) yt6.title = document.title;
	}


	}//spf else

} else { if (typeof document.getElementsByClassName('alerts-wrapper')[0] != 'undefined') document.getElementsByClassName('alerts-wrapper')[0].removeAttribute('id') };//player script present

//console.log(yt6.title + document.title + yt6.spf);

      }//if
      },
      function(){
	if (typeof document.getElementsByClassName('alerts-wrapper')[0] != 'undefined') document.getElementsByClassName('alerts-wrapper')[0].removeAttribute('id');//player script present
	try { window.removeEventListener('spfrequest', document.getElementsByTagName('body')[0].spfrequest, false) } catch(e) {}
	try { window.removeEventListener('spfprocess', document.getElementsByTagName('body')[0].spfdone, false) } catch(e) {}
	try { window.removeEventListener('spfdone', document.getElementsByTagName('body')[0].spfdone, false) } catch(e) {}
      },
      intIntervalTime
      )//fnCheckLocation

 
      // Set an interval to check the location changes.
      //setInterval( yt6.fnCheckLocation, intIntervalTime );
    })//( jQuery );
}

  }
  //raw.githubusercontent.com/
  loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/747fd7ad7b481ee96ea874a8f0126df995f32006/jquery.js", jq0);

//})//waitUntilExists 'content'






function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

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
    //var txt = text[i].textContent.replace("&#39;", "'");
    var txt = text[i].textContent
    var txt = txt.split("&#39;").join("'").split("& # 39;").join("'").split("& # 39").join("'").split("&quot;").join("\"").split("& quot;").join("\"").split("& Quot;").join("\"").split("& Quot").join("\"").split("& quot").join("\"").split("Quot;").join("\"").split("Quot ;").join("\"").split("Quot.;").join(". \"").split("Quot!;").join("! \"").split("Quot?;").join("? \"").split("# 39;").join("'").split("&QUOT;").join("\"").split("&QUOT").join("\"").split("QUOT& ;").join("\"").split("QUOT&").join("\"").split("&#39;").join("'").split("& amp;").join("&");
    srt += j + nl + start + ' --> ' + dur + nl + txt + nl + nl;
  }
  d = srt;
  var uriContent = "data:text/plain;charset=utf-8," + encodeURIComponent(srt);

  document.getElementById("bm3").innerHTML = document.getElementById("bm3").innerHTML +
      '<a class="style-scope yt-formatted-string x-scope yt-endpoint-2" href="' + uriContent +'" download="' + unescape(yt6.fn) + '_' + track_srclang + '.srt">SRT '+mejs_language_code+'</a><br>'
  ;
return d
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




function bestfit(){
	var yt6 = document.getElementById('snarls_player')
	var aw = document.getElementById('a_width')
	var ah = document.getElementById('a_height')
	var w = 1 * fix_Width().replace('px','')
	var h = 1 * fix_Height().replace('px','')
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
}

function resize_layers(w,h,me_aspect){

  var yt6 = document.getElementById('snarls_player')
  var api = document.getElementById('player-api').style
  var bm0 = document.getElementById('bm0')
  var webgl = get_webgl()

//console.log(w +' '+h+' '+yt6.size)
if (yt6.size != yt6.prev_size) {
  //console.log(yt6.prev_size +'->'+ yt6.size)
  yt6.prev_size = yt6.size
}
  var z = document.getElementsByClassName('mejs-offscreen'); if ((z != null) && (z[0] != null)) z[0].style.display = 'none';
  var z = document.getElementsByClassName('mejs-time-buffering'); if ((z != null) && (z[0] != null)) z[0].setAttribute('class','mejs-time-bufferin');


  //var noads = document.getElementById('player').innerHTML;onDownload(noads)
    if (yt6.wsb != null) { var tiny = yt6.wsb.currentStyle } else return void 0;
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
  yt6.hdiff = ( 1 * y.height.replace('px','') - ((y.height.replace('px','') / 60 >> 0) * 60) ); 

  var hdiff = yt6.hdiff
  if (hdiff == undefined) hdiff = 30


  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() - 1
  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight)
  var windowheight = Math.round((windowheight / 100 >>0) * 80)


  if (z.parentNode.getAttribute('id') == 'placeholder-player') {
    var b = z.parentNode;//document.getElementById('placeholder-player');
    var a = z;//b.firstChild
  } else {
      var a = z;
      var b = document.getElementById('top')
    }
  var c = document.getElementById('aspect')
  var d = document.getElementById('player').getAttribute("class")
  var e = yt6.tbg.style
  var f = document.getElementById('re-embed2')

if (f != null) {
  api.width = yt6.w_orig + 'px';
  api.height = e.height = yt6.h_orig + 'px';
  if (wide_view())  {
    if (windowwidth > 640 ) {
      a.style.left = api.left = -1 * yt6.w_orig / 2 + 'px'
    } else {
       a.style.left = api.left = '-213px'
      } 
    e.backgroundColor = '#1A1A1A';
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

  if (o != null) z.setAttribute('style', o)

  yt6.w = w;
  yt6.h = h;
  bm0.style.width = w;
  bm0.style.height = h;
  api.width = w
  api.height = h
  player().style.width = w
  player().style.height = h
  var me_flash = document.getElementById(mep_x('me_flash__ __container'))
  if (me_flash != null) {
    me_flash.style.width = w;
    me_flash.style.height = h;
  }
  if (document.getElementById(mep_x('mep_')) != null) {
    document.getElementById(mep_x('mep_')).style.width = w;
    document.getElementById(mep_x('mep_')).style.height = h;
    document.getElementsByClassName('mejs-clear')[0].style.width = w
    document.getElementsByClassName('mejs-clear')[0].style.height = h
  }


  var w = 1 * w.replace('px','')
  var h = 1 * h.replace('px','')

  var flashvars = player().getAttribute('flashvars')

  var p1 = document.getElementById('player1')

  if (p1 != null) {

    if (  (bm0.style.visibility == 'visible') && (yt6.size == 'default') && ( (document.getElementById(mep_x('mep_')) == null) || (typeof document.getElementsByClassName('me-cannotplay')[0] == 'undefined') || ((document.getElementById(mep_x('me_flash_')) != null)) )  ) {
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
	  var me_flash = document.getElementById(mep_x('me_flash__ __container'))
	  if (me_flash != null) {
	    me_flash.style.width = w;
	    me_flash.style.height = h;
	  }
	  if (document.getElementById(mep_x('mep_')) != null) {
	    document.getElementById(mep_x('mep_')).style.width = w;
	    document.getElementById(mep_x('mep_')).style.height = h;
	    document.getElementsByClassName('mejs-clear')[0].style.width = w
	    document.getElementsByClassName('mejs-clear')[0].style.height = h
	  }
	var w = 1 * w.replace('px','')
	var h = 1 * h.replace('px','')
//console.log( '1: ' + p1.style.top + p1.style.left + p1.style.width + p1.style.height);
    } else {
	if (  ((document.getElementsByClassName('html5-video-container')[0]) &&
	       (document.getElementsByClassName('html5-video-container')[0].innerHTML != '')) &&
	      ((document.getElementById(mep_x('mep_')) != null) && (yt6.size != 'default'))
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

    if ( ( ((1 * p1.style.height.replace('px','')) < windowheight ) || (w < (1 * p1.style.width.replace('px',''))) ) && (document.getElementById(mep_x('mep_')) != null) ){//|| (!((1 * p1.style.height.replace('px','')) > windowheight )) ) {
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
		var me_flash = document.getElementById(mep_x('me_flash__ __container'))
		if (me_flash != null) {
		  me_flash.style.width = w;
		  me_flash.style.height = h;
		}
		if (document.getElementById(mep_x('mep_')) != null) {
		  document.getElementById(mep_x('mep_')).style.width = w;
		  document.getElementById(mep_x('mep_')).style.height = h;
		  document.getElementsByClassName('mejs-clear')[0].style.width = w
		  document.getElementsByClassName('mejs-clear')[0].style.height = h
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

    if( (yt6.size != 'theater') && (document.getElementById(mep_x("mep_")) != null) && (typeof document.getElementsByClassName('me-cannotplay')[0] == 'undefined') &&
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

  //if (z.parentNode.getAttribute('id') == 'placeholder-player') var z = z.parentNode

  if (b.offsetWidth < windowwidth) { //alert(a0.width + " " + a0.height);
    //e.width = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() + 'px';
    var x = b.offsetWidth
  } else {
      //e.width = z.offsetWidth + 'px'; e.left = '0px';  
      var x = windowwidth
    }
  e.width = windowwidth + 'px';
  e.height = h + 'px'

  var playlist = document.getElementById('watch-appbar-playlist') || document.getElementById('playlist')
  //if (playlist) playlist.removeAttribute('style')

  //var b = document.getElementById('placeholder-player')
  //var a = b.firstChild;
  if (a.style != null) {
    a.removeAttribute("style")

    a.style.width = w + 'px';
    a.style.height = h + 'px';
    a.style.left = document.getElementById("player-api").style.left
    a.style.backgroundColor = 'transparent'
    a.style.minHeight = '0px'
    a.style.maxHeight = '9999px'

    if (a.getAttribute('id') == 'player') {
	var l = document.getElementsByClassName('style-scope ytd-watch')
	for (i=0;i<l.length;i++) {
	  if (l[i].getAttribute('id') == 'main') {
	    var l = l[i]
	    break
	  }
	}
      if (typeof document.getElementsByClassName('x-scope ytd-app-1')[0] != 'undefined') {
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
    }

    yt6.wsb.removeAttribute('style'); //yt6.wsb.setAttribute('style','top:0px')

if (b.getAttribute('id') != 'top') { //pre-2016 layout start
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
        } else {//console.log('s-8');
            if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) { 
              if (w < windowwidth) { //console.log('s-9');
                a.style.left = api.left = -1 * (w + b.offsetWidth - 1 * e.width.replace('px','')) / 2 + 'px'
              } else {//console.log('s-10');
                  a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
                }
	      if (yt6.wsb != null) yt6.wsb.style.top = '0px';
            } else {//console.log('s-11');
                a.style.left = api.left = -1 * w / 2 + 'px'
            a.style.left = api.left = (1 * e.width.replace('px','') - w - b.offsetWidth) / 2 + 'px'
		if (yt6.wsb != null) yt6.wsb.style.top = '370px'
              }
            if (1 * a.style.left.replace('px','') < -1 * b.offsetWidth / 2) {//console.log('s-12');
              a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
            }
            e.width = b.offsetWidth + 'px'
          }
        if (playlist) { playlist.style.top = h - 360 + 'px' };
	if (yt6.wsb != null) yt6.wsb.style.top = '';

      } else {//console.log('s-13');
	  a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
	  $waitUntil(//in theatre view mode, pull up the sidebar for 'default' layout
	    function(){
	      if (yt6.wsb != null) return true
	    },
	    function(){
	      if ((1 * tiny.marginLeft.replace('px','') > 100) || (yt6.wsb.getAttribute('id') == 'related')) {
		if (yt6.wsb != null) { yt6.wsb.style.top = -1 * h - 10 + 'px'; }
		if (playlist) { playlist.style.top = '-370px' }
	      }
            }
          )
        }
    } else {//console.log('s-14');//YouTube Default view mode
	if ( (b.offsetWidth > windowwidth ) && (1 * tiny.marginLeft.replace('px','') > 100) ) { //console.log('s-15');
	  e.left = '0px'
	  e.width = b.offsetWidth + 'px'
	}
	  if (c) {//console.log('s-16');//aspect changer present
	    if (( 1 * tiny.marginLeft.replace('px','') > 100) && (playlist)) playlist.style.top = h + 10 + 'px'
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
          	         a.style.left = api.left = '0px'; }//
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
	      if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) {//console.log('s-25');
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
	    if ((1 * tiny.marginLeft.replace('px','') < 100) || (tiny.marginLeft == 'auto')) {//console.log('s-27');
	      if (windowwidth < yt6.w_orig) {//console.log('s-28');
		a.style.left = api.left = '-213px'
	      } else {//console.log('s-29');
	          a.style.left = api.left = -1 * w / 2 + 'px' }
              if (playlist) {
              	playlist.style.top = h + 50 + 'px'
                var y = playlist.offsetHeight + 5
                if (yt6.wna != null) yt6.wna.style.top = -1 * y + 'px'
              }
              if (1 * a.style.left.replace('px','') < -1 * b.offsetWidth / 2) {//console.log('s-30');
                a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
              }
	      e.width = '100%'
	    }
          } else a.style.left = api.left = '250px'

//pre-2016 layout end
} else { //2016 layout start
//console.log('2016 layout')
    var a = document.getElementById('player-container')

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
        } else {//console.log('s-8');
            if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) { 
              if (w < windowwidth) { //console.log('s-9');
                a.style.left = api.left = -1 * (w + b.offsetWidth - 1 * e.width.replace('px','')) / 2 + 'px'
              } else {//console.log('s-10');
                  a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
                }
	      if (yt6.wsb != null) yt6.wsb.style.top = '0px';
            } else {//console.log('s-11');
                a.style.left = api.left = (1 * b.offsetWidth - 1 * w) / 2 + 'px'
		//c.style.left = parseFloat((b.offsetWidth - document.getElementById('info').offsetWidth) / 2 -  document.getElementById('aspect').firstChild.offsetWidth - 426) + 'px';
            //a.style.left = api.left = (1 * e.width.replace('px','') - w - b.offsetWidth) / 2 + 'px'
              }
            //if (1 * a.style.left.replace('px','') < -1 * b.offsetWidth / 2) {console.log('s-12');
            //  a.style.left = api.left = -1 * b.offsetWidth / 2 + 'px'
            //}
            e.width = b.offsetWidth + 'px'
          }
        if (playlist) playlist.style.top = ''; //playlist.removeAttribute('style')
	if (yt6.wsb != null) yt6.wsb.style.top = ''; //yt6.wsb.removeAttribute('style')

      } else {//console.log('s-13');
	  //a.style.left = api.left = (b.offsetWidth - document.getElementById('info').offsetWidth) / 2 + 'px'; console.log(b.offsetWidth + ' ' + document.getElementById('info').offsetWidth + ' ' + a.parentNode.offsetWidth) 
	  $waitUntil(//in theatre view mode, pull up the sidebar for 'default' layout
	    function(){
	      if (yt6.wsb != null) return true
	    },
	    function(){
	      if ((1 * tiny.marginLeft.replace('px','') > 100) || (yt6.wsb.getAttribute('id') == 'related')) {//console.log('tiny')
		yt6.wsb.style.top = '-376px';
		if (playlist) playlist.style.top = '-376px'
	      }
            }
          )
        }
    } else {//console.log('s-14');//YouTube Default view mode
	if ( (b.offsetWidth > windowwidth ) && (1 * tiny.marginLeft.replace('px','') > 100) ) { //console.log('s-15');
	  e.left = '0px'
	  e.width = b.offsetWidth + 'px'
	}
	  if (c) {//console.log('s-16');//aspect changer present
	    if (( 1 * tiny.marginLeft.replace('px','') > 100) && (playlist)) playlist.style.top = h + 10 + 'px'
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
          	         a.style.left = api.left = '0px'; }//
	    	  }


//		      yt6.wsb.style.top = h + 'px'

		if (playlist) { //console.log('s-22');
//alert(a.offsetHeight +' '+a.parentNode.offsetHeight+ ' '+ a.parentNode.parentNode.offsetHeight)
    var u = z.parentNode.parentNode.offsetWidth + getScrollbarWidth()
    if ((windowwidth > 1933) && (windowheight > 940)){
      playlist.style.top = yt6.wsb.style.top = 704 + 'px';
    } else {
        if ((windowwidth > 1293) && (windowheight > 629)){
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
            if (u > 640){
              playlist.style.top = yt6.wsb.style.top = 360 + 'px';
            } else {
                playlist.style.top = yt6.wsb.style.top = 240 + 'px';
              }
          }
      }

		    //playlist.style.top = yt6.wsb.style.top = a.offsetHeight + 'px';
		} else { //console.log('s-23');
		    yt6.wsb.style.top = '480px'
		    }
	      }
/*	    if ( w > windowwidth ) {
		a.style.left = api.left = e.left;alert('3 ' + a.style.left)
	      } else {
		  a.style.left = api.left = -1 * (w - b.offsetWidth) / 2  + 'px';alert('4 ' + a.style.left)
		}
*/	  } else {//console.log('s-24');
	      if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) {//console.log('s-25');
		a.style.left = api.left = '0px';
	        if (playlist) playlist.style.top = ''
		if (yt6.wsb != null) yt6.wsb.style.top = -1 * (h - 360) + 'px'
	      } else {//console.log('s-26');
		  a.style.left = api.left = '0px';
	          if (playlist) playlist.style.top = ''
		  if (yt6.wsb != null) yt6.wsb.style.top = ''
		}
            }
      }//wide else

 }

  }//a.style != null

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
  if ((p1.style.width == '100%') && (p1.style.height == '100%')) {
    yt6.p1style = p1.style
    p1.style.left = '0px';
  } else {
      if (yt6.p1style) p1.style = yt6.p1style
    }
}


  var z = gclass("html5-progress-bar")
  if ((z != null) && (z[0] != null)) z[0].style.maxWidth = w + 'px'
  var z = document.getElementsByClassName('ytp-chrome-bottom')
  if ((z != null) && (z[0] != null)) { z[0].style.width = w - 24 + 'px'; z[0].style.left = '12px' }
  
  var z = gclass("mejs-layer");
  var x = document.getElementsByClassName('mejs-overlay mejs-layer mejs-overlay-play')[0]
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
  var z = document.getElementsByClassName("mejs-captions-text")
  if ((z != null) && (z[0] != null)) {
    if ( typeof z === 'object') { 
      z[0].setAttribute("style",bm0.style.width);
      z[0].style.fontSize = 0.9 + (h / 32.5) + (407 / h) + "px";
      if (1 * z[0].style.fontSize.replace("px","") < 9.5) z[0].style.fontSize = "9.5px"
      if (1 * z[0].style.fontSize.replace("px","") > 23.5) z[0].style.fontSize = "23.5px"
    }
  }

  var x = [document.getElementsByClassName('mejs-sourcechooser-selector'), document.getElementsByClassName('mejs-captions-selector'), document.getElementsByClassName('mejs-speed-selector')]
  for(i=0;i<x.length;i++){
    if ((x[i] != null) && (x[i][0] != null)) {
      var z = x[i][0];
      if ((document.getElementsByClassName('mejs-clear')[0]) && (typeof z != 'undefined')){
        //z.style.maxWidth = "147px"; z.style.minWidth = "130px"
        function src_chooser(){ return [z.firstChild.offsetHeight, z.firstChild.offsetWidth] }
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
      }
    }
  }

  if (yt6.w7a != null) yt6.w7a.style.display = 'none';

  var z = document.getElementById("bm3")
  if (z) z.style.top = yt6.mhp.offsetHeight - 2 + "px" 

  ythtml5_size()

}



function switchflashhtml5() {
  var p = player()
  var p1 = document.getElementById('player1')
  var p2 = document.getElementById('player2')
  var bm0 = document.getElementById('bm0')
  var flashvars = getFlashVars();//player().getAttribute('flashvars');

      var z = yt6.osw
      if (z == document.getElementById('placeholder-player')) {
        if (typeof z.firstChild.style != 'object') document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
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
    yt6.wmode = p.getAttribute('wmode')
    if (document.getElementById('iaextractor-menu')) { document.getElementById('iaextractor-menu').parentNode.removeChild(document.getElementById('iaextractor-menu')) }
    if (p.id == 'movie_player') {
      if (typeof p.getAttribute('flashvars') == 'string') {
        if (typeof p.getPlayerState === 'function') {
	  window.postMessage("pauseVideo", "*")
	  p.style.setProperty('width', '0px', 'important')
	  p.style.setProperty('height', '0px', 'important')
	}
      } else {
	  try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {}
	  //p.style.visibility = 'hidden';
	  p.style.display = 'none';
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
      bm0.style.visibility = 'hidden';
      //p.style.display = '';
      var p = document.getElementById('movie_player')
      if (p.id == 'movie_player') {
	if (typeof p.getAttribute('flashvars') == 'string') {
	  p.style.width = ''; p.style.setProperty('width', z.style.width, '')
	  p.style.height = ''; p.style.setProperty('height', z.style.height, '')
	  p.style.opacity = '1.1'
	  reload_flashplayer()
	  var p = document.getElementById('movie_player');//alert('abc '+ typeof yt6.ytplayercmd + typeof Sync)
	  try { window.addEventListener("message", yt6.ytplayercmd, true) } catch(e) {};
	  try { document.getElementById('movie_player').addEventListener("onStateChange", Sync, true) } catch(e) {};
	} else {
	    p.style.visibility = 'visible';
	    p.style.display = '';
	  }
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
      }
      //window.postMessage("unMute", "*"); 
    }
document.getElementsByClassName('play yt-uix-button-text')[0].innerHTML = 'play'
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

    yt6.hdiff = parseInt( y.height.replace('px','') - ((y.height.replace('px','') / 60 >>0) * 60) ); 
    var hdiff = yt6.hdiff
    if (hdiff == undefined) hdiff = 30

    if (o != null) z.setAttribute('style', o)

    if ((player()) && (player() != null)) var webgl = get_webgl(); //getElementsByAttribute(player(),'canvas','draggable','true')[0];
    var bm0 = document.getElementById('bm0').style
    var yt = document.getElementsByClassName('html5-video-content')[0].style
    var v = document.getElementsByClassName('video-stream html5-main-video')[0]
    if (document.getElementById('bm0').getAttribute('id') == document.getElementsByClassName('html5-video-content')[0].getAttribute('id')) var yt = v.style

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
  var z = document.getElementsByClassName('ytp-iv-video-content')[0]
  for(i=0;i<properties.length;i++){
    if ((z) && (typeof z.style[properties[i]] !== 'undefined')) { z.style[properties[i]] = 'none'; break; }
  }
  
  }
}


function aspect(a) { 
  if ((player()) && (player() != null)) var webgl = get_webgl(); //getElementsByAttribute(player(),'canvas','draggable','true')[0]
  var class_0 = document.getElementById('player').getAttribute('class')
  var class_1 = class_0.replace('small','small_a').replace('medium','medium_a').replace('large','large_a')
  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() - 1
  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
  var hdiff = yt6.hdiff
  if (hdiff == undefined) hdiff = 30
  var dw = document.getElementById('aspect')

  if (yt6.osw.getAttribute('id') != 'player') {
    var z = yt6.osw
  } else var z = yt6.osw.parentNode

  if ( z.offsetWidth > windowwidth ) {
    var playerwidth = windowwidth;
  } else {}
      var playerwidth = Math.min( Math.round(((windowheight / 100 >>0) * 80) * yt6.aspect_ratio), z.offsetWidth)
    //}

//(!a) &&
//  if ((document.getElementById('bm0').style.width != playerwidth ) && (  ( (webgl) && (document.getElementById('bm0').style.height != Math.round(playerwidth / parseFloat(webgl.width / webgl.height)) + 'px') ) || ( (!webgl) && ( (parseInt(document.getElementById('bm0').style.height.replace('px','')) != Math.round((playerwidth / yt6.aspect_ratio))) && (parseInt(document.getElementById('bm0').style.height.replace('px','')) != Math.round(((windowheight / 100 >>0) * 80) * yt6.aspect_ratio)) ))  ))  {

//alert(a + ' ' + windowwidth + ' ' + playerwidth + document.getElementById('bm0').style.width + document.getElementById('bm0').style.height + Math.round(1*((windowheight / 100 >>0) * 80) * yt6.me_aspect) +  'px '+ document.getElementById('bm0').style.height + ' ' + Math.round((windowheight / 100 >>0) * 80) + 'px' + Math.round(playerwidth / yt6.aspect_ratio) + 'px')

  if ((a != 'default' ) && (!((1*document.getElementById('bm0').style.height.replace('px','') == Math.round((windowheight / 100 >>0) * 80)) && (1*document.getElementById('bm0').style.width.replace('px','') == Math.round(2+((windowheight / 100 >>0) * 80) * yt6.me_aspect)) && (yt6.size == 'theater') )) &&
	(  ((webgl) && (  (document.getElementById('bm0').style.height != Math.round(playerwidth / parseFloat(webgl.width / webgl.height)) + 'px') || (!dw)  )) ||
	   ((!webgl) && (  (document.getElementById('bm0').style.height != Math.round(playerwidth / yt6.aspect_ratio) + 'px') || (!dw)  )) ||
	   ((!webgl) && (  (document.getElementById('bm0').style.height != Math.round(playerwidth / yt6.aspect_ratio) + 'px') && (dw)  ))
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

    if (yt6.wna != null) {
      if (dw != null) { dw.parentNode.removeChild(dw)}
      yt6.tbg.style.backgroundColor = "#1A1A1A"
      dw = document.createElement('div');
      dw.id = 'aspect';
      dw.innerHTML = '<span><input id="a_width" value="' + w.replace("px","") + '" style="display:inline-block;width:30px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) { document.getElementById(\'snarls_player\').w = document.getElementById(\'a_width\').value;  document.getElementById(\'snarls_player\').h  = document.getElementById(\'a_height\').value; resize_layers(document.getElementById(\'a_width\').value + \'px\', document.getElementById(\'a_height\').value + \'px\', false) }" onfocus="document.getElementById(\'a_width\').value=document.getElementById(\'a_width\').value;document.getElementById(\'a_height\').value=document.getElementById(\'a_height\').value"></input>x<input id="a_height" value="' + h.replace("px","") + '" style="display:inline-block;width:30px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) resize_layers(document.getElementById(\'a_width\').value + \'px\',document.getElementById(\'a_height\').value + \'px\', false)" onfocus="document.getElementById(\'a_height\').value=document.getElementById(\'a_height\').value;document.getElementById(\'a_width\').value=document.getElementById(\'a_width\').value"></input>px</span>';
      document.getElementById('yt-alert-message').appendChild(dw);
	var c = 1 * document.getElementById('yt-alert-message').offsetWidth
	var d = 1 * document.getElementById('aspect').firstChild.offsetWidth
	var e = 1 * document.getElementById('remove').parentNode.offsetWidth
      document.getElementById('aspect').setAttribute('style','display: inline-block; vertical-align: top; color:#333; position: relative; left:' + parseFloat(c - d - e) + 'px;');
    }
    document.getElementById('a_width').value = w.replace('px','')
    document.getElementById('a_height').value = h.replace('px','')

    resize_layers(w,h, true)

    document.getElementById('player').setAttribute('class',class_1)
    document.getElementById('player').setAttribute('class',class_0.replace('small_a','small').replace('medium_a','medium').replace('large_A','large'))

  } else {
//console.log('d')
      yt6.size = 'default'
      var w = fix_Width();
      var h = (webgl) ? w.replace('px','') / parseFloat(webgl.width / webgl.height) + 'px' : fix_Height()

      var dw = document.getElementById('aspect')
      if (dw != null) { dw.parentNode.removeChild(dw)}
      resize_layers(w,h)
      yt6.tbg.style.backgroundColor = "transparent"
      document.getElementById('player-api').style.overflow = 'hidden';
    }

}


function deldiv(){

  if (typeof ($) !== 'undefined') {
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
    document.querySelector('#player-unavailable').style.display = 'none';
    player().style.visibility = '';
    player().style.display = '';
    if ((document.getElementById('bm0') != null) && (document.getElementById('bm0').style.display == 'none')) {
      if (typeof player().getAttribute('flashvars') == 'string') {
        if (typeof player().getPlayerState === 'function') {
	  window.postMessage("pauseVideo", "*")
	  player().style.setProperty('width', '0px', 'important')
	  player().style.setProperty('height', '0px', 'important')
	}
      } else {
	  try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {}
	  //player().style.visibility = 'hidden';
	  player().style.display = 'none';
	}
      document.getElementById('bm0').style.display = 'block'
    }
  }

  var z = yt6.osw;

  if (!z) {
    var z = document.getElementById('placeholder-player').firstChild.style;
    if (typeof z !== 'object') {
      document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
      var z = document.getElementById('placeholder-player').firstChild;
    }
  } else {
      if (z.getAttribute('id') == 'placeholder-player') {
        if (typeof z.firstChild.style != 'object') z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
        var z = z.firstChild;
      }
    }

  var o = z.getAttribute('style'); if (o) z.removeAttribute('style');
  var o = z.currentStyle || window.getComputedStyle(z, null)
  z.setAttribute('style', o); if (o) z.removeAttribute('style');
  
  if (document.getElementById('bm0') != null) resize_layers(o.width, o.height, false)

  var y = document.getElementsByClassName('ytp-chrome-bottom')
  var properties = ['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform']
  var v = document.getElementsByClassName('video-stream html5-main-video')[0]
  var x = document.getElementsByClassName('ytp-iv-video-content')[0]
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


  var z = gclass("html5-progress-bar"); if (z[0] != null) { var x = z[0].style; if (x) { z[0].style = ''; z[0].removeAttribute("style") } }



  window.removeEventListener('message', yt6.ytplayercmd, true)
  player().removeEventListener('onStateChange', Sync, true)

  var z = [ 'controls','aspect','bm1','bm3','bm0',"snarls_player" ]
  for(i=0;i<z.length;i++){
    var y = document.getElementById(z[i])
    if (y != null) y.parentNode.removeChild(y)
  }

  if (document.getElementById('remove') != null) document.getElementById('yt-alert-message').removeChild(document.getElementById('remove').parentNode)

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
  z.setAttribute('src','https://s.ytimg.com/yts/swfbin/player-' + swfbin4 + '/watch_as3.swf')
}

    var webgl = get_webgl();

  var z = ['theater-background','masthead-positioner-height-offset','movie_player','watch7-sidebar','watch-appbar-playlist','playlist','related','player-api','player','player-container','dropShadow']
  for(i=0;i < z.length;i++){
    var x = document.getElementById(z[i])
    if (x != null) {
      var y = x.style
      if (z[i] == 'theater-background') y.backgroundColor = 'black';
      if (z[i] == 'movie_player') { delete x.width; delete x.height; }
      if (z[i] != 'player-api') {
        for (var j in y) { if (y.hasOwnProperty(j)) { y.setProperty(y[j],'','') } };
        x.removeAttribute('style')
      } else { y.width = ''; y.height = ''; y.left = ''; };
    }
  }


  if (webgl) {
    webgl.removeAttribute('style')
    webgl.parentNode.style.left = -1 * webgl.parentNode.parentNode.style.left.replace('px','') + 'px'
    webgl.parentNode.style.top = -1 * webgl.parentNode.parentNode.style.top.replace('px','') + 'px'
  }

  document.getElementsByClassName('clear')[0].removeAttribute('id')
  if (typeof document.getElementsByClassName('alerts-wrapper')[0] != 'undefined') document.getElementsByClassName('alerts-wrapper')[0].removeAttribute('id')

try { window.removeEventListener('spfrequest', document.getElementsByTagName('body')[0].spfrequest, false) } catch(e) {}
try { window.removeEventListener('spfprocess', document.getElementsByTagName('body')[0].spfdone, false) } catch(e) {}
try { window.removeEventListener('spfdone', document.getElementsByTagName('body')[0].spfdone, false) } catch(e) {}
}

/*
  Zooming and rotating HTML5 video player
  Homepage: http://github.com/codepo8/rotatezoomHTML5video
  Copyright (c) 2011 Christian Heilmann
  Code licensed under the BSD License:
  http://wait-till-i.com/license.txt
*/



function control_panel1() {

   if ((document.getElementById('watch-header') != null) && (document.getElementById('watch7-notification-area') == null)) {
      var js = document.createElement('div');
      js.id = 'watch7-notification-area';
      document.getElementById('watch-header').parentNode.insertBefore(js, document.getElementById('watch-header'))
      js.setAttribute('class','yt-card')
      js.setAttribute('style','display: block; padding: 0px 0px 0px; z-index: 5')
      yt6.wna = document.getElementById('watch7-notification-area')
      delete js;
   }

  var z = yt6.wna
  
  if (document.getElementById("yt-alert-message") === null) {
    var js = document.createElement('div');
    js.id = 'yt-alert-message';
    z.insertBefore(js, z.firstChild);
    document.getElementById('yt-alert-message').setAttribute('class','yt-alert-message');
    delete js;
  }

  var controls = getElementsByAttribute(z,'div','id','controls');
  for(i=0;i<controls.length;i++) { if (controls[i]) controls[i].parentNode.removeChild(controls[i]) }

  if (document.getElementById('remove') == null) {

    var js = document.createElement('span')
    document.getElementById('yt-alert-message').appendChild(js);
    var js = document.createElement('div');
    js.id = 'remove';
    document.getElementById('yt-alert-message').firstChild.appendChild(js);
    document.getElementById("remove").setAttribute('style','display:inline-block');
    document.getElementById("remove").innerHTML =  '<button onclick="switchflashhtml5()" class="yt-uix-button-text"><img src="//s.ytimg.com/yts/img/HTML5_1Color_Black-vfl902gVJ.png" style="vertical-align:middle;height:12px;padding:0px""></img></button><button onclick="aspect()" class="yt-uix-button-text">«↔»</button><br><button onclick="deldiv()" class="yt-uix-button-text">remove</button>'
    //&#9724;
    //&#8633;
    //&#8703;//
}

if (document.getElementById('controls') == null) {
  var js = document.createElement('div');
  js.id = 'controls';
  //    document.getElementById('masthead-search').setAttribute('style','display:inline-block;width:650px;max-width:650px;overflow:hidden;margin-top:3px;padding:0px;position:relative;')
  //    document.getElementById('masthead-search').parentNode.insertBefore(js, document.getElementById('masthead-search').nextSibling);
  document.getElementById('remove').parentNode.insertBefore(js, document.getElementById('remove').nextSibling);
  document.getElementById('controls').setAttribute('style','display: inline-block; padding-left: 1px');
}

var controls = document.getElementById('controls')

/* If there is a controls element, add the player buttons */
/* TODO: why does Opera not display the rotation buttons? */
  if(controls){
    controls.innerHTML =  '<button class="play yt-uix-button-text">play</button>'+
                          '<div id="change">' +
                            '<button class="reset yt-uix-button-text" style="width:37px;text-align:left">reset</button>' +
                            '<button class="zoomin yt-uix-button-text">+</button>' +
                            '<button class="zoomout yt-uix-button-text">-</button>' +
                            '<button class="left yt-uix-button-text">⇠</button>' +
                            '<button class="right yt-uix-button-text">⇢</button>' +
                            '<button class="up yt-uix-button-text">⇡</button>' +
                            '<button class="down yt-uix-button-text">⇣</button>' +
                            '<button class="rotateleft yt-uix-button-text">&#x21bb;</button>' +
                            '<button class="rotateright yt-uix-button-text">&#x21ba;</button>' +
                          '</div>'
  }


}//control_panel1


var CtrlS = function (stage,v){

control_panel1()

  var controls = document.getElementById('controls');


/* predefine zoom and rotate */
  var zoom = 1,
      rotate = 0;

/* Grab the necessary DOM elements */

  var stage = stage;
  var v = v; if (v == undefined) { var v = document.getElementsByClassName('video-stream html5-main-video')[0] }


  //alert(v.getAttribute('id') + " " + stage.getAttribute('id'))


  var bm0 = document.getElementById('bm0');
  var hdiff = parseInt(yt6.hdiff)
  if (hdiff == undefined) hdiff = 30
  var me_flash = document.getElementById(mep_x('me_flash__ __container'))
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
        if (typeof z.firstChild.style != 'object') z.innerHTML = '<div class="player-api player-width player-height" style="background-color: transparent"></div>';
        var z = z.firstChild;
      }

  
/* Find out which CSS transform the browser supports */
  for(i=0,j=properties.length;i<j;i++){
    if(typeof stage.style[properties[i]] !== 'undefined'){
      prop = properties[i];
      document.getElementById('controls').prop = prop;
      break;
    }
  }

/* Position video */
//if ((v == undefined)) alert(typeof player().getPlayerState + typeof player().getAttribute('flashvars'));// { var v = document.getElementsByClassName('video-stream html5-main-video')[0] }
  if ( (typeof player().getPlayerState == 'function') && (player().getAttribute('flashvars') == null) && (bm0.style.visibility == 'hidden') ) {

    ythtml5_size()

  } else {
      var x = gclass('mejs-shim');
      if ((x != undefined) && (x != null) && (x[0] != undefined) && (x[0] != null)) {
	if (typeof x[0].pauseMedia == 'function') {
	  if (v.style.top == '') v.style.top = '0px'
	  if (v.style.left == '') v.style.left = '0px'
        }
      } else {

	  v.style.top = (Math.round( parseInt(
		 parseInt(bm0.style.height.replace('px','')) -
		 parseInt(v.style.height.replace('px','')) - hdiff
		) / 2)	 ) + 'px';
	  v.style.left = (Math.round( parseInt(
		 parseInt(bm0.style.width.replace('px','')) -
		 Math.round(parseInt(v.style.height.replace('px','') - hdiff) * parseFloat(yt6.aspect_ratio))
		) / 2)	 ) + 'px';
	}

	if (webgl) {
	  webgl.parentNode.style.left = (webgl.width - parseInt(webgl.parentNode.parentNode.style.width.replace('px',''))) / 2 + 'px'
	  webgl.parentNode.style.top = (webgl.height - parseInt(webgl.parentNode.parentNode.style.height.replace('px',''))) / 2 + 'px'
	}
    }

  var tiny = yt6.wsb.currentStyle || window.getComputedStyle(yt6.wsb, null)
  var playlist = document.getElementById('watch-appbar-playlist') || document.getElementById('playlist')
            if ((parseInt(tiny.marginLeft.replace('px','')) < 100) || (tiny.marginLeft == 'auto')) {
              if (playlist) {
              	playlist.style.top = parseInt(bm0.style.height.replace('px','')) + 50 + 'px'
                var y = parseInt(playlist.offsetHeight) + 5
                if (yt6.wna != null) yt6.wna.style.top = '-' + y + 'px'
              }
            }


/* If a button was clicked (uses event delegation)...*/
  yt6.controls_pushed = false
  controls.addEventListener('mouseup',function(e){ yt6.controls_pushed = false }, false)
  controls.addEventListener('mousedown',function(e){ yt6.controls_pushed = true
    t = e.target;

    if(t.nodeName.toLowerCase()==='button'){

/* Check the class name of the button and act accordingly */    
      switch(t.className){

/* Toggle play functionality and button label */    
        case 'play yt-uix-button-text':
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
	} else {
	    if (typeof player().getPlayerState == 'function') {//alert(player().getPlayerState())
		if (player().getPlayerState() != 1 ) {
		  window.postMessage("playVideo", "*");
		  t.innerHTML = 'pause';
		} else {
		    window.postMessage("pauseVideo", "*");
		    t.innerHTML = 'play';
		  }
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
	    v.style[prop] ='scale('+zoom+') rotate('+rotate+'deg)'; if (poster != null) poster.style[prop] = v.style[prop]
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
	    v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)'; if (poster != null) poster.style[prop] = v.style[prop]
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.style[prop] = v.style[prop]
	    }
	  } else return true, function(){}, 200
	  })
	break;

/* Increase rotation and set the transformation */
	case 'rotateleft yt-uix-button-text':
	  if (player().getAttribute('wmode') != 'transparent') {
	    player().setAttribute('wmode','transparent');
	  }
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    rotate = rotate + 5;
	    v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')'; if (poster != null) poster.style[prop] = v.style[prop]
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.style[prop] = v.style[prop]
	    }
	  } else return true, function(){}, 200
	  })
	  break;
/* Decrease rotation and set the transformation */
	case 'rotateright yt-uix-button-text':
	  if (player().getAttribute('wmode') != 'transparent') {
	    player().setAttribute('wmode','transparent');
	  }
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    rotate = rotate - 5;
	    v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')'; if (poster != null) poster.style[prop] = v.style[prop]
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.style[prop] = v.style[prop]
	    }
	  } else return true, function(){}, 200
	  })
	break;

/* Move video around by reading its left/top and altering it */
	case 'left yt-uix-button-text':
	  player().removeAttribute('wmode');
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    v.style.left = (parseInt(v.style.left.replace('px','')) - 5) + 'px'; if (poster != null) poster.style.left = v.style.left
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.parentNode.style.left = parseInt(webgl.parentNode.style.left.replace('px','')) - 5 + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

	case 'right yt-uix-button-text':
	  player().removeAttribute('wmode');
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    v.style.left = (parseInt(v.style.left.replace('px','')) + 5) + 'px'; if (poster != null) poster.style.left = v.style.left
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.parentNode.style.left = parseInt(webgl.parentNode.style.left.replace('px','')) + 5 + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

	case 'up yt-uix-button-text':
	  player().removeAttribute('wmode');
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    v.style.top = (parseInt(v.style.top.replace('px','')) - 5) + 'px'; if (poster != null) poster.style.top = v.style.top
	    if ((webgl) && (bm0.style.visibility == 'hidden')) {
	      webgl.parentNode.style.top = parseInt(webgl.parentNode.style.top.replace('px','')) - 5 + 'px'
	    }
	  } else return true, function(){}, 200
	  })
	break;

	case 'down yt-uix-button-text':
	  player().removeAttribute('wmode');
	  $waitUntil(function() {
	  if (yt6.controls_pushed) {
	    v.style.top = (parseInt(v.style.top.replace('px','')) + 5) + 'px'; if (poster != null) poster.style.top = v.style.top
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
	    //if ((v == undefined)) alert(typeof player().getPlayerState + typeof player().getAttribute('flashvars'));// { var v = document.getElementsByClassName('video-stream html5-main-video')[0] }
	    if ( (typeof player().getPlayerState == 'function') && (player().getAttribute('flashvars') == null) && (bm0.style.visibility == 'hidden') ) {

	      ythtml5_size()

	    } else {//alert(v + 'width:' + v.style.width + ' left:' + v.style.left + ' height:' + v.style.height + ' top:' + v.style.top)

		if (player().getAttribute('flashvars') == null){

		  if ((bm0 != null) && (v) && (document.getElementById(mep_x("mep_")) != null)) {
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
		    var opacity = player().style.opacity; //var display = player().style.display;
		    player().setAttribute("style","top:0px; left:0px; width:0px !important; height:0px !important; opacity:"+opacity); zoom = 1; rotate = 0;
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

	    if (webgl) {
	      webgl.parentNode.style.left = Math.round((1 * bm0.style.width.replace('px','') - webgl.style.width.replace('px','')) / 2) + 'px'
	      webgl.parentNode.style.top = Math.round((1 * bm0.style.height.replace('px','') - hdiff - webgl.style.height.replace('px','')) / 2) + 'px'
	      webgl.style[prop] = v.style[prop]
	    }

	  } else {

	      var opacity = player().style.opacity; //var display = player().style.display;
	      player().setAttribute("style","top:0px; left:0px; width:" + z.width + "; height:" + z.style.height + "; opacity:"+opacity); zoom = 1; rotate = 0;// display:"+display+";
	    }
	  if (poster != null) { poster.style[prop] = 'none'; poster.style.top = '0px'; poster.style.left = '0px' }
	  //bestfit(); //document.getElementById('player1').style.height = (document.getElementById('player1').style.height.replace('px','') - 30) + 'px';
	break;

      }//switch


      if (z.getAttribute('id') != 'player') z.style[prop] = v.style[prop]
      //alert(document.getElementById('controls').prop )
      e.preventDefault();

    }//t.nodeName

  },false);//click eventlistener

}//CtrlS
