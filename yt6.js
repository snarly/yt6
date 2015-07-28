

if (document.getElementById(mep_x("google_ads_frame")) != null) {
var noads = setInterval(function(){
  var ads = document.getElementsByClassName('videoAdUiSkipButton')[0]; if (ads != null) { ads.click();ads.setAttribute("class","videoAdUiSkipButton") }
  var ads = document.getElementsByClassName("video-ads html5-stop-propagation")[0]; if (ads != null) { ads.parentNode.removeChild(ads) };
  var ads = document.getElementById("google_companion_ad_div"); if (ads != null) { ads.parentNode.removeChild(ads) };
  var ads = document.getElementById(mep_x("google_ads_frame")); if (ads != null) { ads.parentNode.removeChild(ads) };
  if ((document.getElementById('snarls_player') == undefined) || (typeof fnCheckLocation == 'number')) { clearInterval(noads) }

            },2000)
}



function qr(sr) {
  var qa = [];
  var prs = sr.split('&');
  for (i in prs) {
    var pra = prs[i].split('=');
    qa[pra[0]] = pra[1];
  };
  return qa;
}


  var qual = {
    5: '240p FLV H.263 + 64k MP3',
    6: '270p FLV H.263 + 64k MP3',
    13: '???p 3GP MPEG-4 + ??k AAC',
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
    171: '128k WebM Vorbis',
    172: '192k WebM Vorbis',
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
    272: '2160p WebM VP9',
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
  var fcnm = document.getElementById('ytassetsjs').fcnm
  return fcnm(sg);
}


function def_link(){
  document.getElementById('snarls_player').sig = '&'
  var ft = [ytplayer.config.args.url_encoded_fmt_stream_map, ytplayer.config.args.adaptive_fmts]
  for (i in ft) {
    if (typeof ft[i] !== 'undefined') {
      var z = ft ? ft[i].split(',') : '';
      for (j in z) {
	var qq = get_quality(z[j]);
	var qs = qr(z[j]);
	var href = unescape(qs.url).replace(protocol(), '');
	var sig = href
	if (qs.signature){
	  href += '&signature=' + qs.signature;
	  sig += '&signature=' + qs.signature;
	}
	if (qs.s) {//alert('Encrypted content! '+ qs.s + dc(qs.s) + document.getElementById('ytassetsjs').fcnm )
	  if ( (document.getElementById('ytassetsjs') == null) ||
		((document.getElementById('ytassetsjs') != null) && (document.getElementById('ytassetsjs').fcnm == undefined)) ) { 
		    return ''
	  } else {
		href += '&signature=' + dc(qs.s);
	    }
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
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, (document.getElementById('ytassetsjs') == null)OR TORT (INCLUDING
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


  var a,b,i,j,k,x,y,z;


  var xhr = new XMLHttpRequest(), px
  var proxies = ['https://allow-any-origin.appspot.com/https:','https://cors-anywhere.herokuapp.com/https:']

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]

  function shuffle(o){ //v1.0
    for(j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };




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

            if (i === proxiez.length-1) {

	      if (e.toString().indexOf('"Access to restricted URI denied"  code: "1012"') > -1) {


		//if ( document.getElementById("snarls_player").newWindow != null) {
		  //window.open( protocol() + ytplayer.config.assets.js, "_blank", "width=100,height=100").focus()
		//} else {///alert(typeof newWindow)
		    var bm1 = document.createElement('button')
		    bm1.id = 'getjs'
		    bm1.type = 'button'
		    bm1.innerHTML = '<img src="//i1.ytimg.com/i/gsZadWjuuN2dEhI0mZfVfQ/mq1.jpg?v=531525b4" style="height:27px"></img><br>';
		    document.getElementsByClassName('yt-masthead-logo-container ')[0].insertBefore(bm1,document.getElementsByClassName('yt-masthead-logo-container ')[0].lastChild);
			bm1.newWindow = window.open(protocol() + ytplayer.config.assets.js, "w_blank", "width=100,height=100");//alert(document.getElementById("getjs").newWindow)
			if (document.getElementById("getjs").newWindow != null) document.getElementById("getjs").newWindow.focus()

		    bm1.setAttribute('style','display:inline-block;font-size:10px; padding:0px 3px; width: 52px; max-height:30px; vertical-align: middle;');
		    bm1.setAttribute('onclick', 'this.newWindow = window.open( "' + protocol() + ytplayer.config.assets.js + '", "w2_blank", "width=100,height=100"); if (this.newWindow != null) this.newWindow.focus(); ')
		    if ( getElementsByAttribute(document,'div','class','yt-masthead-logo-container')[0].getAttribute('class').indexOf('doodle') ) {
		      document.getElementById('logo-container').style.width = '88px'
		    }
		//  }
		    var bm1 = document.createElement('div')
		    bm1.id = 'bm6'
		    document.getElementsByClassName('yt-masthead-logo-container ')[0].insertBefore(bm1,document.getElementsByClassName('yt-masthead-logo-container ')[0].lastChild);
//		    document.getElementById('page').insertBefore(bm1,document.getElementById('page').firstChild);
		    var bm1 = document.createElement('input')
		    bm1.id = 'setjs'
		    bm1.value = '';//(function(){})()
		    document.getElementById('bm6').appendChild(bm1)
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

alert("THIS VIDEO IS ENCRYPTED BUT YOUR BROWSER SEEMS TOO OLD TO PROCEED WITHOUT USER INTERACTION. You need the »WHOLE« content found inside the new pop-up window's frame. (NOT this message. If pop-ups are blocked, click the Transformer-icon.) The content is a text starting with something like \"(function()...\". Please select and copy it all (Ctrl+A, Ctrl+C), then paste it into the input field just below the YouTube logo (Ctrl+V). If done, press ENTER.")

		  waitUntilExists( "ytassetsjs", function() {
		    document.getElementById("snarls_player").parentNode.removeChild(document.getElementById("snarls_player"))
		    player().style.display = ''
		    if (document.getElementById('snarls_player')==undefined) {
			var proxiez = shuffle(['https://raw.githack.com','https://rawgit.com'])
			for (i=0;i<proxiez.length;i++){
			  var px = proxiez[i]
			  var q=document.createElement('script');
			  q.id='snarls_player';
			  q.src=px + '/snarly/yt6/master/yt6.js';
			  document.body.appendChild(q);
			  if (document.getElementById('snarls_player')!=undefined) break;
			  void 0;
			}
		     }
		  })

	      } else {
		  throw new Error(e + " " + px + ' error')
		}
              
              //exit(e + " " + px + ' error') 
            } else {
		if (e.toString().indexOf('"Access to restricted URI denied"  code: "1012"') == -1) {

		}
		  alert(e + " " + px + ' error')
              }
          }//catch

        var rpt = xhr.responseText,scpt;
        if (rpt.indexOf("function(){") != -1) {
          scpt = document.createElement("script");
          scpt.type = "text/javascript";
          scpt.id = "ytassetsjs";;
          scpt.textContent = rpt;
          document.body.appendChild(scpt);
          var z = new Date().toLocaleString().toString()
          scpt.setAttribute("time",z)
          break
        } else {
            scpt = document.createElement("div");
            scpt.id = px + " error";
            scpt.textContent = rpt;
            document.body.appendChild(scpt);
            scpt.setAttribute("style","display:none")
          }
      }//for

      if (rpt.indexOf("function(){") != -1) { return [px, rpt] }
    }//setProxy

    var spx = setProxy()
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
  var fs = new RegExp(    sprintf('var %s=function[^}]+};', fcnm.replace('$', '\\$'))  );
  }
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
  var me_flash_param = getElementsByAttribute(player(),"param","name","flashvars");
  if (me_flash_param[0] != undefined) {
    me_flash_param[0].setAttribute("value", me_flash_param[0].getAttribute("value").split("&file=")[0] + "&file=" + file)
  }
  player().setAttribute('src', file)
  //reload_flashplayer()
}

}//ajax1




function getPoster(){
  var poster = getElementsByAttribute(document,"link","itemprop","thumbnailURL")[0]
  if (typeof poster != 'undefined') {
    var poster = poster.href
  } else {
      var poster = getElementsByAttribute(document,"link","itemprop","thumbnailUrl")[0]
      if (typeof poster != 'undefined') {
        var poster = poster.href
      } else {
          var poster = protocol() + '//i1.ytimg.com/vi/' + window.ytplayer.config.args.video_id + '/0.jpg'
        }
    }
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

function protocol() { var protocol = (document.location.protocol=='http:')?'http:':'https:'; return protocol }

function player() { return document.getElementById("movie_player") };

function reload_flashplayer(){

        var bup = document.getElementById('movie_player').cloneNode(true);
        player().parentNode.removeChild(player())
        document.getElementById("player-api").insertBefore(bup, document.getElementById("bm0"));
	set_controls();

}

function correct_flashvars(a) {

		//

                function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}

                function da(a){return"array"==ca(a)}
                function vf(a,b,c){if(da(b))for(var d=0;d<b.length;d++)vf(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
                function wf(a,b){for(var c in b)vf(c,b[c],a);return a}
                function xf(a){a=wf([],a);a[0]="";return a.join("")}

                // End

                return xf(a)
}


  function me_flash_2load(){
    if (player() != null) {
	if (document.getElementById('movie_player_bup') == undefined){
	  var bup = document.createElement('div')
	  bup.id = 'movie_player_bup'
	  document.getElementById('video-hide').appendChild(bup)
	}
	waitUntilExists('movie_player_bup', function(){
	  if (document.getElementById('movie_player_')) document.getElementById('movie_player_').parentNode.removeChild(document.getElementById('movie_player_'))
	  player().setAttribute('id','movie_player_')
	  document.getElementById('movie_player_').style.display = 'none';
	  var bup = document.getElementById('movie_player_').cloneNode(true);
	  document.getElementById('movie_player_').setAttribute('id','movie_player')
	  player().parentNode.removeChild(player())
	  document.getElementById("movie_player_bup").appendChild(bup);
	  me_flash_up()
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
//"//cdn.rawgit.com/snarly/yt6/8adc04ba0f5099fdc6f0de0e2a5c966611b389fb/flashmediaelement-cdn.swf");
    //js.setAttribute("flashvars","id=me_flash&amp;isvideo=true&amp;autoplay=false&amp;preload=none&amp;width="+document.getElementById('snarls_player').w.replace('px','')+"&amp;startvolume=0.8&amp;timerrate=250&amp;flashstreamer=&amp;height="+document.getElementById('snarls_player').h.replace('px','')+"&amp;pseudostreamstart=start&amp;file=" + encodeURIComponent(protocol() + document.getElementById('snarls_player').linx[18]) );
    js.setAttribute("width","640");
    js.setAttribute("height","390");
    js.setAttribute("scale","default");
    js.setAttribute("class","video-stream html5-main-video");

    js.setAttribute("data","//cdn.rawgit.com/snarly/yt6/8adc04ba0f5099fdc6f0de0e2a5c966611b389fb/flashmediaelement-cdn.swf")
    js.innerHTML = '<param name="movie" value="' + encodeURIComponent('//cdn.rawgit.com/snarly/yt6/8adc04ba0f5099fdc6f0de0e2a5c966611b389fb/flashmediaelement-cdn.swf') + '" />\
                    <param name="flashvars" value="thumb=' + encodeURIComponent(getPoster()) + '&controls=true&file=' + file + '" />';
                    //<!-- Image as a last resort -->
                    //<img src="myvideo.jpg" width="320" height="240" title="No video playback capabilities" />
//    var me_flash_param = getElementsByAttribute(js,"param","name","flashvars");
//    me_flash_param[0].setAttribute("value", me_flash_param[0].getAttribute("value").split("&file=")[0] + "&amp;file=" + def_link())
//    document.getElementsByClassName("video-stream html5-main-video")[0].setAttribute("src", def_link()); reload_flashplayer(); set_controls(

player().style.display = 'none'

   }



if (document.getElementById("movie_player") == null) {

if (typeof ytplayer != 'object') {
  window.ytplayer = {}
  eval(document.getElementById('player').textContent.split('var ytplayer = ytplayer || {};')[1].split(';(function()')[0]);//.split('"args":{')[1].split('",')[0]
}

  if (typeof ytplay0 !== 'undefined') {
    document.getElementById("player-api").innerHTML = '\
      <span tabindex="0"></span><embed style="" wmode="transparent" type="application/x-shockwave-flash" src="https://s.ytimg.com/yts/swfbin/player-vfl6ioL_0/watch_as3.swf" name="movie_player" id="movie_player" flashvars="" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000"><span tabindex="0"></span>\
  <noembed><div class="yt-alert yt-alert-default yt-alert-error  yt-alert-player">  <div class="yt-alert-icon">\
    <span class="icon master-sprite yt-sprite"></span>\
  </div>\
<div class="yt-alert-content" role="alert">    <div class="yt-alert-message">\
            You need Adobe Flash Player to watch this video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>\
    </div>\
</div><div class="yt-alert-buttons"></div></div></noembed>\
\
'

    document.getElementById('movie_player').setAttribute("flashvars",correct_flashvars(window.ytplayer.config.args))
    if (document.getElementById('movie_player').getAttribute('src') == 'about:blank') document.getElementById('snarls_player').parentNode.removeChild(document.getElementById('snarls_player'))
  }
}


if ((player() != null) && (window.ytplayer) && (ytplayer.config) && (ytplayer.config.loaded == true)) {

  ajax1()

} else {

    if (typeof ytplayer != 'object') {
      window.ytplayer = {};
      eval(document.getElementById('player').textContent.split('var ytplayer = ytplayer || {};')[1].split(';(function()')[0]);
    }
    if (player() == null) me_flash_up();
    if (def_link() == '') ajax1();

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

    var z = document.getElementById('placeholder-player').firstChild.style;
    if (typeof z !== 'object') {
      document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height"></div>';
    } else {
        var o = document.getElementById('placeholder-player').firstChild.getAttribute('style'); if (o != null) document.getElementById('placeholder-player').firstChild.removeAttribute('style')
      }

    var z = document.getElementById('placeholder-player').firstChild.currentStyle || window.getComputedStyle(document.getElementById('placeholder-player').firstChild, null)

    var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
 
if (wide_view() == false) {
  var w_base = z.width;     if (o != null) document.getElementById('placeholder-player').firstChild.setAttribute('style', o)
  } else {
    if (o != null) document.getElementById('placeholder-player').firstChild.setAttribute('style', o)
    var x = document.getElementById('placeholder-player').offsetWidth + getScrollbarWidth()
    //window.screen.availWidth
    if ((windowwidth > 1933) && (windowheight > 940)){
       var w_base = '1254px';
    } else {
        if ((windowwidth > 1293) && (windowheight > 629)){
          if (document.getElementById('player').getAttribute("class").indexOf("small") > -1) {
            var w_base = '854px';
          } else { var w_base = '640px' }
        } else {
            if (x > 640){
              var w_base = '640px';
            } else {
                var w_base = '426px';
              }
          }
      }
}//wide_view
    return w_base
  }

  function fix_Height() {

    var z = document.getElementById('placeholder-player').firstChild.style;
    if (typeof z !== 'object') {
      document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height"></div>';
    } else {
        var o = document.getElementById('placeholder-player').firstChild.getAttribute('style'); if (o != null) document.getElementById('placeholder-player').firstChild.removeAttribute('style')
      }

    var z = document.getElementById('placeholder-player').firstChild.currentStyle || window.getComputedStyle(document.getElementById('placeholder-player').firstChild, null)

    var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
    var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);

if (wide_view() == false) {
  var h_base = z.height;     if (o != null) document.getElementById('placeholder-player').firstChild.setAttribute('style', o)
  } else {
    if (o != null) document.getElementById('placeholder-player').firstChild.setAttribute('style', o)
    var x = document.getElementById('placeholder-player').offsetWidth + getScrollbarWidth()
    if ((windowwidth > 1933) && (windowheight > 940)){
      var h_base = '734px';
    } else {
        if ((windowwidth > 1293) && (windowheight > 629)){
          if (document.getElementById('player').getAttribute("class").indexOf("small") > -1) { var h_base = '510px'; } else { var h_base = '390px' }
        } else {
            if (x > 640){
              var h_base = '390px';
            } else {
                var h_base = '240px';
              }
          }
      }
}//wide_view
    return h_base
  }



function getFlashVars(){
  if (player() != null) {
    if ((typeof player().getPlayerState == 'function') && (document.getElementById('bm0') != null) && (document.getElementById('bm0').style.visibility == 'hidden')) return player().getAttribute('flashvars')
  }

  var me_flash = getElementsByAttribute(document.getElementById("player-api"),"object","name","me_flash");
  if (me_flash[0] != undefined) {
    if (me_flash.length != 0) {
      for(i=0;i<me_flash.length;i++){
        var me_flash_param = getElementsByAttribute(me_flash[i],"param","name","flashvars");
      }
    }
    var me_flash_ = getElementsByAttribute(document.getElementById("player-api"),"embed","name",mep_x("me_flash_"));
    if (me_flash_[0] != undefined) { me_flash.push.apply( me_flash, me_flash_ ) }; 
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
	    }
	  }
      }
      //alert(stage.id + v.id)
      CtrlS(stage,v);
}


if (player() != null) {

	if (player().getAttribute('name') == 'me_flash') player().style.display = ''

      var ytplayercmd = function(e) {
        var cmd = e.data;
        //var player = document.getElementById("movie_player");
        if (typeof player()[cmd] == 'function') { player()[cmd]() }
        return false;
      }
      window.addEventListener("message", ytplayercmd, true);

          var Sync = function(newState) {
            if (typeof player().getPlayerState == 'function') {
              if (typeof player().getAttribute('flashvars') != 'string') {
                var stage = document.getElementsByClassName('html5-video-content')[0];
                var v = document.getElementsByClassName('video-stream html5-main-video')[0];
              } else {
                  var stage = player();
                  var v = player();  
                }
            }
            var AV = document.getElementById("snarls_player").AV
            var A = document.getElementById("snarls_player").A
            var V = document.getElementById("snarls_player").V
            switch (newState) {
              case 0: player2.pause(); break;
              case 1: if ((typeof srcto != 'undefined') && (srcto == document.getElementById("snarls_player").audio)) { player2.play();break }; if (typeof v.src.split('itag=')[1] != 'undefined') { if ( (typeof AV[v.src.split('itag=')[1].split('&')[0]] !== 'string')  && (typeof A[v.src.split('itag=')[1].split('&')[0]] !== 'string') && ((typeof V[v.src.split('itag=')[1].split('&')[0]] === 'string') || (v.src.indexOf('itag=278') > -1)) || ((typeof srcto != 'undefined') && (srcto == document.getElementById("snarls_player").audio)) ) { player2.play() }};break;
              case 2: player2.pause(); break;
              case 3: player2.pause();break;
              case 5: player2.pause(); break;
            }
            try { document.getElementById('player2').currentTime = player().getCurrentTime() ; } catch(e) {}
          }


//      if (typeof player() !== 'undefined') {
          //    window.postMessage("pauseVideo", "*");

          //if (typeof player().getPlayerState == 'function') { window.postMessage("unMute", "*")
            //if (player().style.opacity != '1.1') { player().style.opacity = '1' }
            player().addEventListener("onStateChange", Sync, true);
          //}
//      }
}

function autoplay(start) {

var p = player()
var d = def_link()
var fv = p.getAttribute('flashvars')
var pn = p.getAttribute('name')
var bm0 = document.getElementById('bm0')
var mep = document.getElementById(mep_x('mep_'))

var autoplay = document.getElementById('watch-appbar-playlist');
if (typeof autoplay != 'undefined') {
  var autoplay = gclass('yt-uix-button-icon-watch-appbar-autoplay')
  if (typeof autoplay[0] != 'undefined') {
    var autoplay = document.getElementsByClassName('playlist-nav-controls')[0].innerHTML.split('\>')[0].split('yt-uix-button-toggled')[1];
  }
}
var autoplay2 = gclass('playlist-mix-icon yt-sprite');

  if ( (pn == 'me_flash') || (d.indexOf('%26false') > -1) ){
    if ((!mep) || (typeof fv == 'string')){
	bm0.style.visibility = 'hidden'
	p.style.display = '';
	if (((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) && (typeof p.playMedia == 'function') && (start)) p.playMedia(); p.paused = false;
    } else {
	p.style.display = 'none';
	bm0.style.visibility = 'visible';
	if (((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) && (start)) player1.play()
      }
  } else {
	if ((d == undefined) || (d.indexOf('%26true') > -1)) {
	  if ((typeof p.getPlayerState == 'function') && (typeof p.getAttribute('flashvars') == 'string')) {
	    bm0.style.visibility = 'hidden'
	    p.style.display = '';
	  } else {
		p.style.display = 'none';
		bm0.style.visibility = 'visible';
		try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {};
		if (((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) && (start)) player1.play()
	    }
	} else {
		p.style.display = 'none';
		try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {};
		bm0.style.visibility = 'visible'
		if (((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) && (start)) player1.play()
	  }
      }

if ((typeof p.getPlayerState != 'function') && (typeof p.getAttribute('flashvars') == 'string') && (!start)) {
	p.style.display = 'none';
	bm0.style.visibility = 'visible'
}

set_controls()

if ((typeof autoplay == 'string') || (typeof autoplay2[0] != 'undefined')) { return true } else { return false }
}


function crossXmlHttpReq(ytplayer){

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
	    for (y in document.getElementById('snarls_player').ytplayer.config.args){
	      if ((typeof document.getElementById('snarls_player').ytplayer.config.args[y] == 'string') && (document.getElementById('snarls_player').ytplayer.config.args[y].indexOf(node_value) > -1)){
	        //var x = document.getElementById('early-body').innerHTML = document.getElementById('early-body').innerHTML + document.getElementById('snarls_player').ytplayer.config.args[y] + '______________________'
	        document.getElementById('snarls_player').ytplayer.config.args[y] = document.getElementById('snarls_player').ytplayer.config.args[y].split(s).join(sig)
	        //document.getElementById('early-body').innerHTML = document.getElementById('early-body').innerHTML + document.getElementById('snarls_player').ytplayer.config.args[y] + '______________________'
	      }
	    }
	  }
}
  //document.getElementById('snarls_player').ytplayer = clone(ytplayer)
  var linx = [];
  var lang_def = null; var lang_asr = null;
  var args = ytplayer.config.args;
  var html = [new Date().toLocaleString(),
    'Click to switch streams in HTML5 player. Right click & "Save as" to download.<br>'
  ];document.getElementById('early-body').innerHTML = ''
  var ft = [args.url_encoded_fmt_stream_map, args.adaptive_fmts]
  for (i in ft) {
    if (typeof ft[i] !== 'undefined') {
      var z = ft ? ft[i].split(',') : '';
      for (j in z) {
        var qq = get_quality(z[j]);
        var qs = qr(z[j]);
        var href = unescape(qs.url).replace(protocol(), '');
        if (qs.signature){	  //document.getElementById('snarls_player').flash = true;
          href += '&signature=' + qs.signature;
	}
        if (qs.s){	  //document.getElementById('snarls_player').flash = false;
          href += '&signature=' + dc(qs.s);     //rewrite_ytplayer(z[j], qs.s, dc(qs.s))
	}
        if (href.indexOf("&ratebypass=yes") == -1) { href += '&ratebypass=yes'}
        if (qq.indexOf("+") != -1) { href += '&2' }
        if (qq.indexOf('DASH') != -1) { if ((document.getElementById('snarls_player') != undefined) && (document.getElementById('snarls_player') != null) && (typeof document.getElementById('snarls_player').aspect_ratio != 'string')) { document.getElementById('snarls_player').aspect_ratio = ft.toString().split("size=")[1].split("&")[0].split(",")[0] } }
        if (qs.itag !== '278') { linx[qs.itag] = href } else { linx[241] = href }
        if (qq.indexOf('360p WebM VP8') != -1) { var webm = 'https:' + href };
        //if (qq.indexOf('WebM Vorbis') != -1) { var audio = 'https:' + href };//.replace('&ratebypass=yes','') };
	if (qq.indexOf('DASH AAC') != -1) { var audio = 'https:' + href };
        //var fn = (args.title + '-' + qq).toLowerCase()
        //         .replace(/[!"&'().:[\]|]/g,'')
        //         .replace(/ /g,'-')
        //         .replace(/-+/g,'-');
    
        var p1load = null;
   
        function HTMLPush(j){
    
          function setLink(href){
            var onclic = 'var me_flash = getElementsByAttribute(document.getElementById("player-api"),"object","name","me_flash"); var me_flash_ = getElementsByAttribute(document.getElementById("player-api"),"embed","name",mep_x("me_flash_")) ; if (me_flash_[0] != undefined) { me_flash.push.apply( me_flash, me_flash_ ) };  if ((me_flash[0] != undefined) && (me_flash.length != 0)) { for (i=0;i<me_flash.length;i++) { var me_flash_vars = me_flash[i].getAttribute("flashvars"); if (typeof me_flash_vars == "string") { me_flash[i].setAttribute("flashvars", me_flash_vars.split("&file=")[0] + "&file=" + encodeURIComponent("https:' + href + '")); var me_flash_src = me_flash[i].getAttribute("src"); me_flash[i].setAttribute("src",""); me_flash[i].setAttribute("src", me_flash_src); document.getElementById("player1").setAttribute("src","https:' + href + '"); } else { me_flash[i].setAttribute("src","https:' + href + '") }; var me_flash_param = getElementsByAttribute(me_flash[i],"param","name","flashvars"); if (me_flash_param[0] != undefined) { me_flash_param[0].setAttribute("value", me_flash_param[0].getAttribute("value").split("&file=")[0] + "&amp;file=" + encodeURIComponent("https:' + href + '")) };  } }; if (me_flash_[0] != undefined) { me_flash_[0].parentNode.style.display = "none"; me_flash_[0].parentNode.style.display = "";  }; if (player().getAttribute("name") == "me_flash") { reload_flashplayer() };                   if ((typeof player().getPlayerState == "function") && (player().getAttribute("flashvars") == null)) { var v = document.getElementsByClassName("video-stream html5-main-video")[0] }; var sauce = getElementsByAttribute(document,"input","name",mep_x("mep_") + "_sourcechooser");       if ((sauce != undefined) && (sauce.length != 0)) { for (i=0;j=(sauce.length-1);i++) { if (sauce[i] != undefined) { sauce[i].removeAttribute("checked");if (("'+href+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2)+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2).replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:",""))) { if (document.getElementById("bm0").style.visibility == "visible") { if ((!player1.paused) || (!player2.paused)) { var p1load = 1; player2.pause();  } else { var p1load = null }; } else { if ((typeof player().getPlayerState == "function") && (player().getAttribute("flashvars") == null)) { if ( player().getPlayerState() == "1") { var p1load = 1; v.pause() } else { var p1load = null }}; }; if (("https:'+href+'" == document.getElementById("snarls_player").audio) && (navigator.userAgent.indexOf("Chrome") < -1)) { alert("Warning: Google Chrome will stop buffering if the AUDIO and VIDEO sources share the same location.\\nThis happens when you switch from a DASH/VP9 playback over to the designated audio track to play on its own.\\nIt\'s a bug to be fixed.") }; sauce[i].setAttribute("checked","checked");document.getElementById("player1").setAttribute("src","https:' + href + '");   document.getElementsByClassName("video-stream html5-main-video")[0].setAttribute("src","https:' + href + '"); document.getElementById("player1").setAttribute("src","https:' + href + '");     if (p1load == 1) { if ((typeof player().getPlayerState == "function") && (player().getAttribute("flashvars") == null)) { v.play();v.pause();v.play() } else { if (document.getElementById("bm0").style.visibility == "visible") { player1.load(); player2.load(); }} }     ;return false }; if (i === j){ if (me_flash[0] != undefined) { return false }; return true } } else {  }       }};    if (me_flash[0] != undefined)  { return false } else { return true }';
            return onclic
          }
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

          var size = href.match(/[&\?]clen=([0-9]+)&/i)
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
            size = Array(y - qq.length - 3*((qq.length/18)>>0)).join(".") + size
          } else { size = '' }


          if (typeof qq.split(" ")[1] != 'undefined') { 
            if (typeof j != 'number') {
              html.push(
                '<a href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '.' + qq.split(" ")[1].toLowerCase() + '">' + qq + size + '</a>'
              );
            } else {
                html.splice(
                  j+1, 0, '<a href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '.' + qq.split(" ")[1].toLowerCase() + '">' + qq + size + '</a>'
                );
              }
    
            var fn = fn.split(" - " + qq.split(" ")[0] + " " + qq.split(" ")[2])[0]

          } else {
              if (typeof j != 'number'){
                html.push(
                  '<a href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '">' + qs.itag + size + '</a>'
                );
              } else {
                  html.splice(
                      j+1, 0, '<a href="' + protocol() + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '">' + qs.itag + size + '</a>'
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
    if (sig == 2) { var aac2 = aac.replace(protocol(), ''); sig == null; }
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
            href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id","278")[0].textContent.replace(protocol(),'');
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
            href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id",b)[0].textContent.replace(protocol(),'');
            if (b == '172') { var audio = 'https:' + href }
            if (b == '141') { if (typeof audio == 'undefined') { var audio = 'https:' + href }}
            var qq = get_quality(href)
            HTMLPush()
            linx[b] = href
          }
        }
      };break
    }

    if (z[i] == "s") var sig = 1;
    if (z[i] == "signature") var sig = 2;
  }
}//ajax2


if (document.getElementById('bm0'))  {
/*	window.ytplayer.config.args = document.getElementById('snarls_player').ytplayer.config.args
        var bup = document.getElementById('bm0').cloneNode(true);
        document.getElementById("watch7-hidden-extras").appendChild(bup)

var z = document.getElementById('movie_player').getAttribute("src")
document.getElementById('movie_player').style.display = 'none'
document.getElementById('movie_player').setAttribute("src","")
document.getElementById('movie_player').setAttribute("src",z)
document.getElementById('movie_player').setAttribute("flashvars",correct_flashvars(window.ytplayer.config.args))
document.getElementById('movie_player').style.display = ''
*/
}

  var w_init = document.getElementById('player-api').offsetWidth + 'px'
  var h_init = document.getElementById('player-api').offsetHeight + 'px'

  if ((typeof document.getElementById('snarls_player').aspect_ratio == 'undefined') || (document.getElementById('snarls_player').aspect_ratio == null)) {
    var x = null;
    var h_orig = document.head.innerHTML.match(/og:video:height([^(]+)/);
    if ((typeof h_orig != 'undefined') && (h_orig != null)) {
      var x = ["property","og:video:"]
    } else {
        var h_orig = document.body.innerHTML.match(/meta itemprop="height"([^(]+)/);
        if ((typeof h_orig != 'undefined') && (h_orig != null)) {
          var x = ["itemprop",""]
        }
      }
    if (x != null) {
      var w_orig = getElementsByAttribute(document,"meta",x[0],x[1] + "width")[0].content + "px";
      var h_orig = getElementsByAttribute(document,"meta",x[0],x[1] + "height")[0].content + "px";
      document.getElementById('snarls_player').aspect_ratio = (w_orig.replace('px','')/h_orig.replace('px',''))
    } else { 
        w_orig = '640px'; h_orig = '360px'; document.getElementById('snarls_player').aspect_ratio = 16/9
      }

  } else {
      if (typeof document.getElementById('snarls_player').aspect_ratio === 'string') {
        var w_orig = document.getElementById('snarls_player').aspect_ratio.split("x")[0] + "px"
        var h_orig = document.getElementById('snarls_player').aspect_ratio.split("x")[1] + "px"
        document.getElementById('snarls_player').aspect_ratio = (w_orig.replace('px','') / h_orig.replace('px',''))
      } else {
          w_orig = '640px'; h_orig = '360px'; document.getElementById('snarls_player').aspect_ratio = 16/9
        }
    }

  if (typeof ytcenter !== 'undefined') { 
    var w = document.getElementById('player-api').style.width; if (w.replace('px','') < 640) {document.getElementById('player-api').style.width = '640px'}
    var h = document.getElementById('player-api').style.height; if (h.replace('px','') < 390) {document.getElementById('player-api').style.height = '390px';document.getElementById('watch7-sidebar').style.marginTop = 'height:-400px'}
    var h = (w.replace('px','') / document.getElementById('snarls_player').aspect_ratio >>0)
    var h = (parseInt(parseInt(h) + parseInt(30))) + 'px'
  } else {
      var w = fix_Width(); var h = fix_Height();
    }
  if (w.replace('px','') < 640) {var w = '640px'}
  if (h.replace('px','') < 390) {var h = '390px'}

  document.getElementById("snarls_player").w_init = w_init
  document.getElementById("snarls_player").h_init = h_init
  document.getElementById("snarls_player").w_orig = w_orig
  document.getElementById("snarls_player").h_orig = h_orig
  document.getElementById("snarls_player").w = w
  document.getElementById("snarls_player").h = h

  document.getElementById("snarls_player").fn = fn;//alert(fn)
  document.getElementById("snarls_player").linx = linx
  document.getElementById("snarls_player").html = html
  document.getElementById("snarls_player").href = href
  document.getElementById("snarls_player").audio = audio
  document.getElementById("snarls_player").args = args

}//crossXmlHttpReq
crossXmlHttpReq(window.ytplayer)


function redo_dl_button(args,html,href) {
//var dw = document.querySelector('#bm1');


if (document.getElementById("bm1") != null) document.getElementById("bm1").parentNode.removeChild(document.getElementById("bm1"))

  var dw = document.createElement('div');
  dw.id = 'bm1';
  document.getElementsByClassName('yt-masthead-logo-container ')[0].insertBefore(dw,document.getElementsByClassName('yt-masthead-logo-container ')[0].lastChild);
  document.getElementById('bm1').setAttribute('style','display:inline-block;position:float;');

  dw = document.createElement('div');
  dw.id = 'bm2';
  document.getElementById('bm1').appendChild(dw);
  document.getElementById('bm2').setAttribute('style','display:block;visibility:hidden; position:fixed;left:0px;top:0px;width:100%;z-index:2000000000;')

  function expire_date(){
    var ip = (href.indexOf("?ip=") == -1) ? "&ip=":"?ip="
    var ip = href.split(ip)[1].split("&")[0]
    var expire = (href.indexOf("?expire=") == -1) ? "&expire=":"?expire="
    var expire = new Date(parseInt(href.split(expire)[1].toString().substring(0,10) * 1000)).toLocaleString()
    var bh = (expire.length < 33) ? 91 : 104
    return [ip,expire,bh]
  }
  html.splice(1,0,'Direct links to YouTube media<br>for IP address: '+ expire_date()[0])
  html.push(
   '<br>Links will expire on <br>' + expire_date()[1] + 
   '<br><br>V+A sources may refuse to stream while separate video- and audio-only ones synced may still do for playback. If those fail as well, refresh page and reload the script.'
  )
  document.getElementById('bm2').innerHTML = html.join('<br>')

  var dw = document.createElement('button');
  dw.id = "bm5";
  dw.innerHTML = protocol() + '//www.youtube.com/html5';
  document.getElementById('bm2').appendChild(dw);
  document.getElementById('bm5').style.color = "#EE0000";
  document.getElementById('bm5').setAttribute('onclick', 'window.open( "' + protocol() + '//www.youtube.com/html5", "_blank").focus() ')

  if (!document.getElementById('bm3')) {
    var dw = document.createElement('div');
    dw.id = 'bm3';
    document.getElementById('body-container').appendChild(dw);
  }

  document.getElementById('bm3').height = parseInt(document.getElementById('bm2').offsetHeight) + expire_date()[2];  
  document.getElementById('bm3').setAttribute('style','color:black;display:block; visibility:hidden; position:fixed; left:0%; top:48px; width:224px; height:' + document.getElementById('bm3').height + 'px; margin-top:0px; margin-right:0px; background:#FFFFFF; opacity:1; padding:2px 2px 2px 2px; border:1px solid #DDD; z-index:2147483648; overlay-y:hidden');
  document.getElementById('bm3').setAttribute('class','yt-uix-button-menu ')
  document.getElementById('bm3').innerHTML = document.getElementById('bm2').innerHTML;
  document.getElementById('bm2').innerHTML = '';
//var csspopupheight = parseInt(document.getElementById('bm3').offsetHeight) + 10 ;document.getElementById('bm3').setAttribute('style',document.getElementById('bm3').getAttribute('style') + ';height:' + csspopupheight + 'px;' + 'overflow-y: scroll')
  
  var dw = document.createElement('button');
  dw.id = 'bm4';
  dw.innerHTML = '<img src="//i1.ytimg.com/i/gsZadWjuuN2dEhI0mZfVfQ/mq1.jpg?v=531525b4" style="height:27px"></img><br>Download';

  var onclic = function(){

    if  ((window.ytplayer != null) &&
	 (window.ytplayer.config != null) &&
	 ((document.getElementById("watch7-notification-area") == null) ||
	  (document.getElementById("remove") == null) ||
	  (document.getElementById("controls") == null) ||
	  (document.getElementById("bm0") == null))
	)
      { //}

    set_controls();

    } else {

    if (document.getElementById("bm3").style.visibility === "visible") { 
      //document.getElementById("bm2").style.visibility = "hidden";
      document.getElementById("bm3").style.visibility = "hidden";
      document.getElementById('bm3').style.height = '0px'
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
    document.getElementById("bm3").innerHTML = document.getElementById("bm3").innerHTML + '<br><br>SubRip/WebVTT subtitles:<br>'
  }

document.getElementById("bm3").style.top = document.getElementById("masthead-positioner").offsetHeight - 2 + "px"
document.getElementById("bm3").style.height = "0px"
}//redo

  redo_dl_button(  document.getElementById("snarls_player").args,  document.getElementById("snarls_player").html,  document.getElementById("snarls_player").href)


//oldbrowser error hunt
//document.getElementById('bm4').style.display = 'block';document.getElementById('bm3').style.visibility = 'visible';

function loadScript(url, callback)
 {
var js = document.createElement("script");
js.type = "text/javascript";
js.src = url;
js.id = url.split(/[/]+/)[url.split(/[/]+/).length-1];
js.onreadystatechange = callback;
js.onload = callback;
document.getElementById('video-hide').appendChild(js);
 }
function loadCSS(url, callback)
 {
var js = document.createElement("link");
js.type = "text/css";
js.href = url;
js.rel = "Stylesheet";
js.onreadystatechange = callback;
js.onload = callback;
document.getElementById('video-hide').appendChild(js);
 }
var jq = jq0 = jq1 = jq2 = jq3 = jq4 = jq5 = null

if (!document.getElementById('video-hide')) {
  var js = document.createElement("div")
  js.id = "video-hide"
  document.getElementById('snarls_player').appendChild(js)
  delete js
}


loadCSS( protocol() + "//cdn.rawgit.com/snarly/yt6/ee5b34c3dd41fcea3f8e961389d1a715d93a9d2c/mediaelementplayer.css", function(){
});

var jq0 = function()
 {
    var js = document.createElement('style');
    js.type = 'text/css';
    js.media = 'screen';
    //xhr.open('get', "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/snarly/yt6/master/mediaelementplayer.css", false);
    //xhr.send();
    var code = ".html5-video-container{background:#000 no-repeat scroll center center;z-index:10}.html5-main-video,.html5-video-content{position:absolute;width:100%;height:360px;outline:0}.ytp-keyboard-focus,.annotation.annotation-type-custom {display: none;}\
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


function mep_run(){

		var Srcto;
		var href = document.getElementById('snarls_player').href;
		var Audio = document.getElementById("snarls_player").audio;
		var A = document.getElementById('snarls_player').A;
		var V = document.getElementById('snarls_player').V;
		var AV = document.getElementById('snarls_player').AV;
		var Seek = document.getElementById('snarls_player').Seek = null;
		var player1 = new MediaElementPlayer('#player1',{
		  enableAutosize: false,
		  poster: getPoster(),
		  videoWidth: document.getElementById('snarls_player').w.replace('px',''),
		  videoHeight: document.getElementById('snarls_player').h.replace('px',''),
		  features: ['playpause','loop','current','progress','duration','tracks','playlist','speed','sourcechooser','volume','fullscreen'],
		  autoRewind: false,
		  pauseOtherPlayers: false,
		  pluginPath: '',
		  flashName: '//cdn.rawgit.com/snarly/yt6/8adc04ba0f5099fdc6f0de0e2a5c966611b389fb/flashmediaelement-cdn.swf',
		  pluginWidth: document.getElementById('snarls_player').w.replace('px',''),
		  pluginHeight: document.getElementById('snarls_player').h.replace('px',''),
		  startLanguage:'',
		  translationSelector: true,
		  translations:['en','de','es'],
		  success: function(me) {  $('#audio-type').html( me.pluginType);
					me.addEventListener('loadstart', function() { });
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
					    document.getElementById('ytassetsjs').error = true;
					    if (typeof V[me.src.split('itag=')[1].split('&')[0]] !== 'string') {
					      var dash = document.getElementById(mep_x('mep_') + '_sourcechooser_240p  VP9webm');
					      if ((dash != null)) {
						dash.setAttribute('checked','checked'); player1.setSrc(document.getElementById('snarls_player').linx[242]);player1.load();
						player1.play();
					      } else {
						  var dash = document.getElementById(mep_x('mep_') + '_sourcechooser_240p DASH mp4');
						  if ((dash != null)) {
						    dash.setAttribute('checked','checked'); player1.setSrc(document.getElementById('snarls_player').linx[133]);player1.load();
						    player1.play();
						  } else { alert('Decryption failure!'); }
						}
					    } else { alert('Decryption failure!'); };
					  }
					});
					me.addEventListener('loadedmetadata', function() {
					  var dw = document.getElementById('aspect');
					  if ( (me.offsetWidth == screen.width) || (me.offsetHeight == screen.height) ) {
					    resize_layers( screen.width + 'px', screen.height + 'px' ) 
					  } else {
					      if (dw) {
					        aspect2(document.getElementById('a_width').valuse,document.getElementById('a_height').value);
					      } else {
					          resize_layers( document.getElementById('snarls_player').w, document.getElementById('snarls_player').h );
					          //me.style.height = (document.getElementById('snarls_player').h.replace('px','') - 30) + 'px';
					          //me.style.width = document.getElementById('snarls_player').w
					        }
					    };
					  if ((typeof this.videoWidth == 'number') || (typeof this.videoHeight == 'number')) {
					    document.getElementById('player1').width = this.videoWidth;  document.getElementById('player1').height = this.videoHeight;
					  }
					});
					me.addEventListener('loadeddata', function() {
					  document.getElementsByClassName('mejs-clear')[0].setAttribute('id','mejs-clear')
					});
					me.addEventListener('play', function() {
					  var bn = document.getElementsByClassName('play yt-uix-button-text');
					  if ((bn != null) && (bn[0] != null)) {
					    bn[0].innerHTML = 'pause'
					  };
					  var A = [], V = [], AV = [];
					  A = document.getElementById('snarls_player').A;
					  V = document.getElementById('snarls_player').V;
					  AV = document.getElementById('snarls_player').AV;
					  player2.playbackRate = me.playbackRate;
					  if ((Math.abs(parseFloat(parseFloat(player2.currentTime) - parseFloat(me.currentTime))) > parseFloat(0.3)) && (me.currentTime > 3)) {
					    player2.currentTime = me.currentTime
					  };
					  if (  ((typeof AV[me.src.split('itag=')[1].split('&')[0]] !== 'string') && 
						 (typeof A[me.src.split('itag=')[1].split('&')[0]] !== 'string') && 
						 ((typeof V[me.src.split('itag=')[1].split('&')[0]] === 'string') || (me.src.indexOf('itag=278') > -1)) 
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
					  if (me.src.replace('&ratebypass=yes','') != player2.src.replace('&ratebypass=yes','')) {
					    if (Seek == 3) { player2.pause() };
					    if (Seek === 0) { Seek = 1 };
					    try { player2.pause(); player2.currentTime = me.currentTime } catch(e) {}
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
					    Seek = 1; me.currentTime = player2.currentTime = 0; me.play();
					    if (!isNaN(player2.duration)) {
					      player2.currentTime = player2.duration
					    }
					  } else {
					      Seek = 3;
					      if ((player2.currentTime > 0) && (!isNaN(player2.duration))) {
					        player2.currentTime = player2.duration
					      };
					      if (autoplay()) { ;;
					        if (!((typeof V[me.src.split('itag=')[1].split('&')[0]] == 'string') && (player2.currentTime == 0)) ) {
					          document.getElementsByClassName('yt-uix-scroller-scroll-unit  currently-playing')[0].nextSibling.nextSibling.lastChild.previousSibling.click()
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
					  if (Seek == 1) {
					    Seek = null ;  player1.play()
					  } else {
					      if ( (!me.paused) && (document.getElementById('bm0').style.visibility != 'hidden') ) {
						player1.setCurrentTime( me.currentTime )
					      }
					    }
					});
					me.addEventListener('ended', function() {
					  if (player1.options.loop1) {
					    Seek = 1; me.currentTime = player2.currentTime = 0;
					  } else {
					      Seek = 3; me.currentTime = player2.currentTime = 0;
					      if ((typeof autoplay == 'string') && (document.getElementById('player1').currentTime < document.getElementById('player1').duration)) {;;
						document.getElementsByClassName('yt-uix-scroller-scroll-unit  currently-playing')[0].nextSibling.nextSibling.lastChild.previousSibling.click();
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
					  if (Seek == 1) {
					    Seek = null ;  player1.play()
					  } else {
					      if (!me.paused) {
						player1.setCurrentTime( me.currentTime )
					      }
					    }
					});
					me.addEventListener('ended', function() {
					  if (player1.options.loop1) {
					    Seek = 1; me.currentTime = player2.currentTime = 0;
					  } else {
					      Seek = 3; me.currentTime = player2.currentTime = 0;
                                              if (autoplay()) { 
						me.setSrc( '' );;
						document.getElementsByClassName('yt-uix-scroller-scroll-unit  currently-playing')[0].nextSibling.nextSibling.lastChild.previousSibling.click();
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

var z = document.getElementsByClassName('mejs-duration'); if ((z != null) && (z[0] != null)) {
  var x = href.split('dur=')[1].split('&')[0].toHHMMSS();
  if (x.substring(0,2) == '00') { var x = x.substring(3,x.length - 4) };
  z[0].innerHTML = x.split('.')[0];
}

player1.setPoster(getPoster())

resize_layers( document.getElementById('snarls_player').w, document.getElementById('snarls_player').h );

function zip(){
if ((typeof player().getPlayerState == 'function') && (player().getPlayerState != -1) ){ 
  if ((autoplay() == false) || ((autoplay() == true) && (typeof player().getAttribute('flashvars') == 'string')) ) { 
    document.getElementById('bm0').style.visibility = 'hidden';
    player().style.display = '';
    if (typeof srcto != 'undefined') { player().pauseVideo() }
  } else {//alert(autoplay() + typeof player().getAttribute('flashvars') + def_link())
      if (typeof player().getAttribute('flashvars') == 'string') {
	  window.postMessage("pauseVideo", "*")
      } else {
	  try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {}
	  try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {}
	}
      document.getElementById('bm0').style.visibility = 'visible';
      player().style.display = 'none';
    }
} else {//alert('11' + typeof player().getPlayerState + player().getPlayerState )
/*	if (def_link().indexOf('%26true') == -1){
	document.getElementById('bm0').style.visibility = 'visible';
	player().style.display = 'none';
	} else { }
*/
  }

//set_controls();

}//zip


var z = document.getElementById(mep_x('mep_') + '_sourcechooser_360p  VP8 + 128k Vorbiswebm');
if ((z != null)) {
  z.setAttribute('checked','checked'); player1.setSrc(document.getElementById('snarls_player').linx[43]);player1.load()
}

if (typeof fnCheckLocation != 'number') autoplay()

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


//if (!cw) {
  var z = document.getElementById('placeholder-player').firstChild.style;
  if (typeof z !== 'object') { document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height"></div>'; }

  var z = document.getElementById('placeholder-player').firstChild.currentStyle || window.getComputedStyle(document.getElementById('placeholder-player').firstChild, null);
  document.getElementById("snarls_player").w = z.width
  document.getElementById("snarls_player").h = z.height

  var w = document.getElementById("snarls_player").w
  var h = document.getElementById("snarls_player").h

    
  if (document.getElementById('bm0') != null) { document.getElementById('bm0').parentNode.removeChild(document.getElementById('bm0')) }
  var cw = document.createElement('div');
  cw.id = 'bm0';
  player().parentNode.insertBefore(cw, player().nextSibling);
  document.getElementById('bm0').setAttribute('style','background:#111;width: '+w+'; height: '+h+';overflow: hidden;visibility:hidden;');
  document.getElementById('bm0').setAttribute('class','html5-video-content');
  document.getElementById('player-api').style.overflow = 'hidden';
//  var js = document.createElement('param');
//  document.getElementById('bm0').appendChild(js);
  document.getElementById('movie_player').setAttribute('wmode','window');
  document.getElementById('player').setAttribute('wmode','transparent');
  document.getElementById('player-api').setAttribute('wmode','transparent');
  document.getElementById('bm0').setAttribute('wmode','transparent');

    var js = document.createElement('video');
    js.id = 'player1';
    document.getElementById('bm0').appendChild(js);
    js.setAttribute('width',Math.round(parseInt(h.replace('px','') - 30) * document.getElementById('snarls_player').aspect_ratio));
    js.setAttribute('height', (h.replace('px','') - 30));
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

var A = [],V = [],AV = [];    var linx = []; linx = document.getElementById("snarls_player").linx;  var html = []; html = document.getElementById("snarls_player").html; 
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
document.getElementById("snarls_player").A = A
document.getElementById("snarls_player").V = V
document.getElementById("snarls_player").AV = AV

if ((unescape(ytplayer.config.args.ttsurl) != 'undefined')) {
var sref = unescape(ytplayer.config.args.ttsurl) + '&type=list&tlangs=1&fmts=0&asrs=1';
  //      sref += '&type=track&lang=en&name&kind&fmt=1';
  //      sref += '&type=list&tlangs=1&fmts=0&asrs=1';
  xhr.open('get', sref, false);
  xhr.send('');
  var tts = parseXml(xhr.responseText);
  //var array = [lang_code, name, kind, lang_default];
  var tracks = [];
  
  var lang_codeA = window.navigator.userLanguage || window.navigator.language
  if (lang_codeA) { lang_codeA = lang_codeA.toLowerCase() }
    if (typeof document.getElementsByClassName("content-region")[0] != 'undefined') {
      var tlang_codeA = document.getElementsByClassName("content-region")[0].textContent || getElementsByAttribute(document,"span","class","content-region")[0].textContent
      if (tlang_codeA) { tlang_codeA = tlang_codeA.toLowerCase() }
    }
    var tlang_codeA = lang_codeA + ',' + tlang_codeA + ',hu,en,nl,fr,de,it,ja,ko,pt,ru,es'; tlang_codeA = tlang_codeA.split(",")
    //var lang_codeA = sref.split("&asr_langs=")[1];
    //if (lang_codeA) { lang_codeA = lang_codeA.toLowerCase().split("&")[0].split(","); var tlang_codeA = tlang_codeA.concat( lang_codeA ) };//alert(tlang_codeA)

  var lang_codeA = [];
  var text = tts.getElementsByTagName("track");
  for (b=0;b<text.length;b++)
    {
    var surl = "";
    var lang_code = text[b].getAttribute('lang_code'); if ((lang_code) && (lang_code != 'null')) { surl += '&lang=' + lang_code; };
    var name = text[b].getAttribute('name'); if ((name) && (name != 'null')) { surl += '&name=' + name } else { surl += '&name' };
    var kind = text[b].getAttribute('kind'); if ((kind) && (kind != 'null')) { surl += '&kind=' + kind } else { surl += '&kind' };
if ((!slang) && ((kind != 'asr') || (text.length == b+1)) ) { var slang = lang_code; var slangurl = surl }
    var id = text[b].getAttribute('id'); if ((id) && (id != 'null')) { tracks[id] = surl; lang_codeA[id] = lang_code };
    var lang_default = text[b].getAttribute('lang_default'); if ((lang_default) && (lang_default != 'null')) { surl += '&type=track&fmt=1'; var track = surl ;var lang_def = lang_code; if (kind != 'asr') { var slang = lang_code; var slangurl = surl } };
    }
  if (!lang_def) { var a=0; do { if ((!track) && (typeof tracks[a] != "undefined")) { var track = tracks[a]}; a++; } while (a<100)};

//function translate(){
  var text = tts.getElementsByTagName("target");
  for (b=0;b<text.length;b++)
    {
    //if (slang === null) break
    var surl = "";
    var lang_code = text[b].getAttribute('lang_code'); if ((tlang_codeA.indexOf(lang_code) === -1) || (lang_code === slang)) continue; if ((lang_code) && (lang_code != 'null')) { surl += slangurl + '&tlang=' + lang_code };
    //var name = text[b].getAttribute('name'); if ((name) && (name != 'null')) { surl += '&name=' + name } else { surl += '&name' };
    //var kind = text[b].getAttribute('kind'); if ((kind) && (kind != 'null')) { surl += '&kind=' + kind } else { surl += '&kind' };
    var id = text[b].getAttribute('id'); if ((id) && (id != 'null')) { if (typeof lang_codeA[id] != 'undefined') { id = parseInt(id) + 1000 }; tracks[id] = surl; lang_codeA[id] = lang_code };
    var lang_default = text[b].getAttribute('lang_default'); if ((lang_default) && (lang_default != 'null')) { surl += '&type=track&fmt=1'; var track = surl ;var lang_def = lang_code };
    }
  if (!lang_def) { var a=0; do { if ((!track) && (typeof tracks[a] != "undefined")) { var track = tracks[a]}; a++; } while (a<100)};
//}//translate

//    html.push(
//      '<a href="' + sref +'">CC</a>'
//    );


  for (i in tracks) {
    if (tracks[i] != "") {
      sref = unescape(ytplayer.config.args.ttsurl) + tracks[i];
      var js = document.createElement('track');
      js.id = 'captions-' + i;
      document.getElementById('player1').appendChild(js);
      delete js;
      if (sref != undefined) {
        js.setAttribute("kind","subtitles");
        js.setAttribute("srclang",lang_codeA[i])
        js.setAttribute("src",sref)
      }
    }
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
    //js.setAttribute("wmode","transparent");
    js.setAttribute("allowscriptaccess","always");
    js.setAttribute("allowfullscreen","true");
    js.setAttribute("type","application/x-shockwave-flash");
    js.setAttribute("pluginspage","//www.macromedia.com/go/getflashplayer");
    js.setAttribute("src",protocol() + "//cdn.rawgit.com/snarly/yt6/8adc04ba0f5099fdc6f0de0e2a5c966611b389fb/flashmediaelement-cdn.swf");
    //js.setAttribute("flashvars","id=me_flash&amp;isvideo=true&amp;autoplay=false&amp;preload=none&amp;width="+document.getElementById('snarls_player').w.replace('px','')+"&amp;startvolume=0.8&amp;timerrate=250&amp;flashstreamer=&amp;height="+document.getElementById('snarls_player').h.replace('px','')+"&amp;pseudostreamstart=start&amp;file=" + encodeURIComponent(protocol() + document.getElementById('snarls_player').linx[18]) );
    js.setAttribute("width",document.getElementById('snarls_player').w.replace('px',''));
    js.setAttribute("height",document.getElementById('snarls_player').h.replace('px',''));
    js.setAttribute("scale","default");
    js.setAttribute("class","mejs-shim");

    js.setAttribute("data","//cdn.rawgit.com/snarly/yt6/8adc04ba0f5099fdc6f0de0e2a5c966611b389fb/flashmediaelement-cdn.swf")
    js.innerHTML = '<param name="movie" value="//cdn.rawgit.com/snarly/yt6/8adc04ba0f5099fdc6f0de0e2a5c966611b389fb/flashmediaelement-cdn.swf" />\
                    <param name="flashvars" value="controls=true&file=' + encodeURIComponent(protocol() + document.getElementById('snarls_player').linx[18]) +'" />';
                    //<!-- Image as a last resort -->
                    //<img src="myvideo.jpg" width="320" height="240" title="No video playback capabilities" />
//js.width = document.getElementById('snarls_player').w.replace('px','')
//js.height = document.getElementById('snarls_player').h.replace('px','')


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
    //var audio = 'https:' + srcto.replace(protocol(), '')
    var srcto = unescape('%68%74%74%70%73%3A%2F%2F%64%72%69%76%65%2E%67%6F%6F%67%6C%65%2E%63%6F%6D%2F%75%63%3F%65%78%70%6F%72%74%3D%64%6F%77%6E%6C%6F%61%64%26%69%64%3D%30%42%32%37%61%48%69%6C%4F%47%6E%76%35%53%6B%64%6D%63%58%52%55%65%6E%4A%35%64%55%30');var audio = srcto
    document.getElementById('player2').preload = "auto";
  }
}






    js.src = document.getElementById("snarls_player").audio;
    js.type = "audio/ogg";
    document.getElementById('player2').appendChild(js);
    js.setAttribute('style',"display: none; visibility: hidden");
    delete js;


if (document.getElementById('mep_init') == undefined) {


    var js = document.createElement('script');
    js.id = "mep_init";
    document.getElementById('snarls_player').appendChild(js)
    var code = "jQuery(document).ready(function($) {\
		$('#version').html( mejs.version);" + mep_run.toString().replace("function mep_run(){",'') + ")"

    try {
      js.appendChild(document.createTextNode(code));
      document.getElementById('video-hide').appendChild(js);
    } catch (e) {
         try {
	   js.text = code;
	   document.getElementById('video-hide').appendChild(js);
	 } catch (e) {}
    }
    //document.getElementById('snarls_player').code = code;
    //code = null; delete js;

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
  var z = document.getElementById('placeholder-player').firstChild.style;
  if (typeof z !== 'object') { document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height"></div>'; }

var z = document.getElementById('placeholder-player').firstChild.style;
  if (typeof z !== 'object') { document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height"></div>'; }
  z.backgroundColor = 'transparent'

//aspect();aspect(); 
document.getElementById('bm4').style.display = 'inline-block';
if ( getElementsByAttribute(document,'div','class','yt-masthead-logo-container')[0].getAttribute('class').indexOf('doodle') ) { document.getElementById('logo-container').style.width = '88px'; document.getElementById('bm3').style.top = document.getElementById('masthead-positioner').offsetHeight - 2 + 'px' };

//autoplay()


//}//cw

}//mep_up

    var jq1 = function() {
      var jq2 = function() {
        var jq3 = function() {
//          var jq4 = function() {
            var jq5 = function() {

mep_up()
            };
            loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/feeba89eb6793a26476cab7c985365592c80dfd9/mep-feature-speed.js",jq5)
            //loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-speed.js",jq5);
//          };
//          loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/f684d6c92fc170be45129a7f2c12069689fcc0b0/mep-feature-playlist.js",jq4)
          //loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-playlist.js",jq4);
        };
        loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/49c8440ad31e83bf6d9f0951a83020cc730399d4/mep-feature-loop.js",jq3)
//      loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-loop.js",jq3);
      };
      loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/1b69efe5d367952c307eaf7ca70ca1074ddd1c1a/mep-feature-sourcechooser.js",jq2)
      //loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-sourcechooser.js", jq2)
    };
    //loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mediaelement-and-player.js", jq1)
    //
    //loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/1a2653c6f02a907c52e6a9a9d6f071e05926d95b/mediaelement-and-player.js",jq1)
    //
    loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/ff8b6944d0578bda4b1000cbd644cfe47e1eb60c/mep-ceeb1a7.js", jq1)

if (typeof fnCheckLocation != 'number') {
    jQuery(document).ready(function( $ ){
      // Default to the current location.
      document.getElementById('snarls_player').strArgs = window.ytplayer 
      document.getElementById('snarls_player').strLocation = window.location.href;
      document.getElementById('snarls_player').strHash = window.location.hash;
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

      document.getElementById("placeholder-player").width = document.getElementById("placeholder-player").offsetWidth
      document.getElementById("placeholder-player").height = document.getElementById("placeholder-player").offsetHeight
      document.getElementById("theater-background").width = document.getElementById("theater-background").offsetWidth

      // This will be the method that we use to check
      // changes in the window location.
      var fnCheckLocation = function(){

	var ads = document.getElementsByClassName('videoAdUiSkipButton')[0]; if (ads != null) { ads.click();ads.setAttribute("class","videoAdUiSkipButton") }
	var ads = document.getElementsByClassName("video-ads html5-stop-propagation")[0]; if (ads != null) { ads.parentNode.removeChild(ads) };
	var ads = document.getElementById("google_companion_ad_div"); if (ads != null) { ads.parentNode.removeChild(ads) };
	var ads = document.getElementById(mep_x("google_ads_frame")); if (ads != null) { ads.parentNode.removeChild(ads) };

        var flashvars = player().getAttribute('flashvars')
	var p = player();
	var bm0 = document.getElementById('bm0')
        var watch = document.getElementById("page");if (watch) var watch = watch.getAttribute("class"); if ((typeof watch == 'string') && (watch.indexOf('watch') == -1)) var watch = null
        var autoscale = document.getElementById("placeholder-player")
        var reset = document.getElementsByClassName('reset yt-uix-button-text')[0];//  

  if (typeof p.getPlayerState == 'function') {
  document.getElementsByClassName('alerts-wrapper')[0].setAttribute('id','playerState_' + p.getPlayerState())
  } else { document.getElementsByClassName('alerts-wrapper')[0].setAttribute('id','playerState_null') }


        if ((autoscale != null) && (typeof reset != 'undefined') && (bm0) && 
            ( ((p.offsetWidth != screen.width) && (p.offsetHeight != screen.height)) && (document.getElementById(mep_x('mep_')) != null) &&
              ((document.getElementById(mep_x('mep_')).offsetWidth != screen.width) &&
               (document.getElementById(mep_x('mep_')).offsetHeight != screen.height))
            )
          ) { //alert("sw: "+ screen.width +", sh: "+screen.height+", pw: "+ p.offsetWidth +                    ", ph: "+ p.offsetHeight +", bw: "+ bm0.offsetWidth +                    ", bh: "+ bm0.offsetHeight);
          if ((autoscale.offsetWidth != autoscale.width) && (autoscale.offsetHeight != autoscale.height)) { //alert('0 ' + autoscale.height +" "+ autoscale.offsetHeight); 
            autoscale.width = autoscale.offsetWidth;
            autoscale.height = autoscale.offsetHeight;
            //aspect();aspect()
            if (bm0) ythtml5_size()
            //document.getElementsByClassName('reset yt-uix-button-text')[0].click()
            bestfit()
          } else {
              if (autoscale.offsetHeight != autoscale.height) { //alert('2 ' + autoscale.height +" "+ autoscale.offsetHeight); 
                autoscale.height = autoscale.offsetHeight;
                //aspect();aspect()
                if (bm0) ythtml5_size()
                if ( (!document.getElementById("aspect")) && (document.getElementById('watch7-sidebar').currentStyle || window.getComputedStyle(document.getElementById('watch7-sidebar'))).marginLeft == '0px' ) {
                  //document.getElementsByClassName('reset yt-uix-button-text')[0].click();
                  bestfit()
                  ythtml5_size()
                }
              } else {
                  if (autoscale.offsetWidth != autoscale.width) { //alert('1 width:' + autoscale.width +" offsetWidth:"+ autoscale.offsetWidth +" thb:"+ document.getElementById("theater-background").offsetWidth ); 
                    autoscale.width = autoscale.offsetWidth;
                    //aspect();aspect()
                    bestfit()
                    if (bm0) ythtml5_size()
                    //document.getElementsByClassName('reset yt-uix-button-text')[0].click()
                  }
                }
            }
            if ((typeof p.getPlayerState == 'function') && (p.getAttribute('flashvars') == null)) {
              var z = document.getElementsByClassName('video-stream html5-main-video');
              if (typeof z[0] != 'undefined') {
                var x = document.getElementById('controls'); 
                if (x != null) {
                  x = x.prop;
                  if (z[0].style[x].indexOf('rotate') > -1) {
                    z[0].prop = z[0].style[x]; 
                  } else {
                      if (typeof z[0].prop != 'undefined') { 
                        z[0].style[x] = z[0].prop;
                      }
                    }
                }
              }
            }
        }


        if (document.getElementById("theater-background").offsetWidth != document.getElementById("theater-background").width) {
          document.getElementById("theater-background").width = document.getElementById("theater-background").offsetWidth
        }

        // Check to see if the location has changed.
        if ( (document.getElementById('snarls_player') && (document.getElementById('snarls_player').strLocation != window.location.href) ) || (!watch) || (watch == null) ) {

         if ((typeof p.getPlayerState != 'function') && (flashvars != null) && (p.outerHTML != null)) { 

          //var z = document.getElementById('movie_player1')
          if ((document.getElementById('video-hide')) && (p != null) && (p == null)) {
            var z = document.createElement("div")
            z.id = "movie_player1"
            document.getElementById('video-hide').appendChild(z)
            if (flashvars != null) { try { p.setAttribute('id','movie_player0'); var bup = document.getElementById('movie_player0').cloneNode(true) } catch(e) {alert(e)}; document.getElementById('movie_player0').parentNode.removeChild(document.getElementById('movie_player0'));z.appendChild(bup) }
//          } else {
//              if (flashvars != null) {
//                if ( (z.fistChild != null) && (p != null) && (z.firstChild.getAttribute('flashvars') != flashvars) && (reset != null) ) {
//                  //try { var bup = p.cloneNode(true) } catch(e) {alert(e)}; p.parentNode.removeChild(p);z.appendChild(bup)
//                } //else { if (z.fistChild != null) z.innerHTML = '' }
//              } //else { if (z.fistChild != null) z.innerHTML = '' }
            }
          }

         if ((document.getElementById('placeholder-player') != null) && (bm0 != null) && (bm0.style.width != fix_Width()) ) aspect(true)


        if (watch != null) {
          if ( ((window.ytplayer != null) && (window.ytplayer.config != null) && 
               (window.ytplayer.config.loaded) && (document.getElementById('snarls_player').args != window.ytplayer.config.args) && 
               (p != null) && (document.getElementById('watch-discussion') != null) ) ) {
 
          // Store the new and previous locations.
          strPrevLocation = (document.getElementById('snarls_player').strLocation)?document.getElementById('snarls_player').strLocation:"";
          strPrevHash = document.getElementById('snarls_player').strHash;
          document.getElementById('snarls_player').strLocation = window.location.href;
          document.getElementById('snarls_player').strHash = window.location.hash;

          // The location has changed. Trigger a
          // change event on the location object,
          // passing in the current and previous
          // location values.
          if ( (window.location.href.indexOf("Ypkv0HeUvTc_MM") > -1 ) || (strPrevLocation.indexOf("aC4BC-Hxq9g_PD") > -1 ) ) {
            location.href = window.location.href
          } else {
              $( window.location ).trigger( "change",
                {
                  currentHref: document.getElementById('snarls_player').strLocation,
                  currentHash: fnCleanHash( document.getElementById('snarls_player').strHash ),
                  previousHref: strPrevLocation,
                  previousHash: fnCleanHash( strPrevHash )
                }
              );

		try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {};

              $.removeData([mejs.players['mep_1'], mejs.players['mep_0']])
              mejs.players['mep_1'] = null; delete mejs.players['mep_1'];
              mejs.players['mep_0'] = null; delete mejs.players['mep_0'];
              $.removeData(mejs.players)
              mejs.players = null; delete mejs.players;
              mejs.mepIndex = 0; mejs.players = {}

              crossXmlHttpReq(window.ytplayer);
              redo_dl_button(  document.getElementById("snarls_player").args,  document.getElementById("snarls_player").html,  document.getElementById("snarls_player").href);

              document.getElementById('player-api').style.overflow = 'hidden';
              mep_up();mep_run();

              //if ((document.getElementById('movie_player1')) && (document.getElementById('movie_player1').firstChild.getAttribute('id') == 'movie_player0')) { document.getElementById('movie_player1').parentNode.removeChild(document.getElementById('movie_player1')) }
              if (wide_view() == false) document.getElementById('theater-background').style.backgroundColor = "transparent"
              document.getElementById('bm4').style.display = 'inline-block';

	      if (flashvars == null) var flashvars = getFlashVars();
              if ( (p != null) && (bm0 != null) && ((p.getAttribute('name') == 'movie_player') || (p.getAttribute('name') == 'me_flash')) ){
                if ((p.getAttribute("name") != "me_flash") && (typeof p.getAttribute('flashvars') == 'string')) {
		  var z = def_link();
		    if ((z.indexOf('%26false') > -1)) {
		      p.style.display = 'none';
		      me_flash_2load();
		      if (!document.getElementById(mep_x("mep_"))) set_controls()
		      if (bm0.style.visibility == 'hidden'){
			waitUntilExists('playerState_null',function(){
			  waitUntilExists('movie_player',function(){
			    bm0.style.visibility = 'visible';
			    autoplay(true);
			  })
		        })
		      } else {
			  waitUntilExists('movie_player',function(){
			    bm0.style.visibility = 'visible';
			    autoplay(true);
			  })
			}
		    } else { 
			  //var z = p.getAttribute('src');
		        p.style.display = 'none';
			p.setAttribute("flashvars",correct_flashvars(window.ytplayer.config.args));
		        //p.setAttribute('src',z);
		        p.style.display = ''
			autoplay(true)
		      }
		  
                } else {//me_flash
		    if ( ((z == undefined) || (z.indexOf('%26true') > -1)) && (typeof p.getAttribute('flashvars') == 'object') && (p.getAttribute('name') == 'me_flash') && (document.getElementById('movie_player_bup')) && (document.getElementById('movie_player_'))){
			document.getElementById('movie_player_').style.display = 'none';
			document.getElementById('movie_player_').setAttribute('id','movie_player1')
		        var bup = document.getElementById('movie_player1').cloneNode(true);
			document.getElementById('movie_player1').setAttribute('id','movie_player_')
		        player().parentNode.removeChild(player())
        		document.getElementById("player-api").insertBefore(bup, document.getElementById("bm0"));
			waitUntilExists('movie_player1',function(){
			  document.getElementById('movie_player1').setAttribute("flashvars",correct_flashvars(window.ytplayer.config.args));
	  		  document.getElementById('movie_player1').style.display = '';
			  document.getElementById('movie_player1').setAttribute('id','movie_player')
			  waitUntilExists('playerState_-1',function(){
			    bm0.style.visibility = 'hidden';
			    document.getElementById('movie_player').style.display = '';
			    reload_flashplayer();
			    autoplay(true);
			 })
			})
		    } else {
			if ((typeof p.getAttribute('flashvars') == 'object') && (p.getAttribute('name') == 'me_flash')) {

			  var z = def_link()
			  var me_flash = getElementsByAttribute(document.getElementById("player-api"),"object","name","me_flash");
			  if ((me_flash != undefined) && (me_flash.length != 0)) {
			    var me_flash_param = getElementsByAttribute(me_flash[0],"param","name","flashvars");
			    me_flash_param[0].setAttribute("value", me_flash_param[0].getAttribute("value").split("&file=")[0] + "&file=" + z);// + me_flash_param[0].getAttribute("value").split("&amp;file=")[1].split("&amp;")[1])
			    p.setAttribute("src", z); 
			    document.getElementsByClassName("video-stream html5-main-video")[0].setAttribute("src", z);
			    reload_flashplayer();
			    waitUntilExists('movie_player',function(){
			      document.getElementById('movie_player').style.display = 'none'
			      if (bm0.style.visibility == 'hidden'){
			        bm0.style.visibility = 'visible'
			      }
			      autoplay(true)
			    })
			  }
			} else { autoplay(true) }
		      }

                  }
              };// else { autoplay(true) }

            }
         }//args

        }//watch
        }//location change
      }//fnCheckLocation

 
      // Set an interval to check the location changes.
      setInterval( fnCheckLocation, intIntervalTime );
    })//( jQuery );
}

  }
  //loadScript("https://raw.githubusercontent.com/snarly/yt6/master/jquery.js", jq0);
  loadScript( protocol() + "//cdn.rawgit.com/snarly/yt6/747fd7ad7b481ee96ea874a8f0126df995f32006/jquery.js", jq0);







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
    var txt = txt.split("&#39;").join("'").split("& # 39;").join("'").split("& # 39").join("'").split("&quot;").join("\"").split("& quot;").join("\"").split("& Quot;").join("\"").split("& Quot").join("\"").split("& quot").join("\"").split("Quot;").join("\"").split("Quot ;").join("\"").split("Quot.;").join(". \"").split("Quot!;").join("! \"").split("Quot?;").join("? \"").split("# 39;").join("'").split("＆QUOT;").join("\"").split("＆QUOT").join("\"").split("QUOT＆ ;").join("\"").split("QUOT＆").join("\"").split("＆＃39;").join("'").split("& amp;").join("&");
    srt += j + nl + start + ' --> ' + dur + nl + txt + nl + nl;
  }
  d = srt;
  var uriContent = "data:text/plain;charset=utf-8," + encodeURIComponent(srt);

  document.getElementById("bm3").innerHTML = document.getElementById("bm3").innerHTML +
      '<a href="' + uriContent +'" download="' + unescape(document.getElementById("snarls_player").fn) + '_' + track_srclang + '.srt">SRT '+mejs_language_code+'</a><br>'
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


function wide_view() {
  var z = getElementsByAttribute(document,"div","class","watch-wide")[0]
  var z = getElementsByAttribute(document,"div","class","watch-stage-mode")[0];//alert(typeof z + z.outerHTML)
  if ( typeof z != "undefined" ) { 
    return true
  } else {
      return false
    }
}

function bestfit(){
        if (document.getElementById('a_width')) {
          if ((document.getElementById('a_width').value / document.getElementById('snarls_player').aspect_ratio) < (document.getElementById('a_height').value * document.getElementById('snarls_player').aspect_ratio)) {
            if ((document.getElementById('a_width').value / document.getElementById('snarls_player').aspect_ratio) < fix_Width().replace('px','')) {
              aspect2(document.getElementById('a_width').value,Math.round(document.getElementById('a_width').value / document.getElementById('snarls_player').aspect_ratio));
              document.getElementById('a_height').value = Math.round(document.getElementById('a_width').value / document.getElementById('snarls_player').aspect_ratio)
              document.getElementById('a_width').value = document.getElementById('a_width').value
            } else {
                aspect2(fix_Width().replace('px',''),Math.round(fix_Width().replace('px','') / document.getElementById('snarls_player').aspect_ratio));
                document.getElementById('a_height').value = Math.round(fix_Width().replace('px','') / document.getElementById('snarls_player').aspect_ratio)
                document.getElementById('a_width').value = fix_Width().replace('px','')
              }
          } else {
              if ((document.getElementById('a_height').value * document.getElementById('snarls_player').aspect_ratio) < fix_Height().replace('px','')) {
                aspect2(Math.round(document.getElementById('a_height').value * document.getElementById('snarls_player').aspect_ratio), document.getElementById('a_height').value);
                document.getElementById('a_width').value = Math.round(document.getElementById('a_height').value * document.getElementById('snarls_player').aspect_ratio)
                document.getElementById('a_height').value = document.getElementById('a_height').value
              } else {
                  aspect2(Math.round(fix_Height().replace('px','') * document.getElementById('snarls_player').aspect_ratio), fix_Height().replace('px',''));
                  document.getElementById('a_width').value = Math.round(fix_Height().replace('px','') * document.getElementById('snarls_player').aspect_ratio)
                  document.getElementById('a_height').value = fix_Height().replace('px','')
                }
            }
        } else {
              aspect2(fix_Width().replace('px',''),fix_Height().replace('px',''));
          }
}

function resize_layers(w,h){

  var z = document.getElementsByClassName('mejs-offscreen'); if ((z != null) && (z[0] != null)) z[0].style.display = 'none';
  var z = document.getElementsByClassName('mejs-time-buffering'); if ((z != null) && (z[0] != null)) z[0].setAttribute('class','mejs-time-bufferin');
  var bm0 = document.getElementById('bm0')
  var me_flash = document.getElementById(mep_x('me_flash__ __container'))

  //var noads = document.getElementById('player').innerHTML;onDownload(noads)
  var tiny = document.getElementById('watch7-sidebar').currentStyle;
  if ((tiny == undefined) && (typeof window.getComputedStyle != 'undefined')) var tiny = window.getComputedStyle(document.getElementById('watch7-sidebar'), null);
  if ((tiny == undefined) || (tiny == null)) { var tiny = {}; tiny.marginLeft = "640px"; }
  //var tiny = document.getElementById('watch7-sidebar').currentStyle || window.getComputedStyle(document.getElementById('watch7-sidebar'));alert(typeof tiny + tiny);//alert("w7s:" + tiny.marginLeft + " w7sc" + tiny0.marginLeft)

  document.getElementById('bm0').style.width = w;
  document.getElementById('bm0').style.height = h;
  //document.getElementById('bm0').style.left = "auto"
  if (document.getElementById(mep_x('mep_')) != null) {
    document.getElementById(mep_x('mep_')).style.width = w;
    document.getElementById(mep_x('mep_')).style.height = h;
    document.getElementsByClassName('mejs-clear')[0].style.width = w
    document.getElementsByClassName('mejs-clear')[0].style.height = h
  }
  if (me_flash != null) {
    me_flash.style.width = w;
    me_flash.style.height = h;
  }

  var z = document.getElementById('placeholder-player').firstChild.style;
  if (typeof z !== 'object') {
    document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height"></div>';
  } else {
      var o = document.getElementById('placeholder-player').firstChild.getAttribute('style'); if (o != null) document.getElementById('placeholder-player').firstChild.removeAttribute('style')
    }
  var z = document.getElementById('placeholder-player').firstChild.currentStyle || window.getComputedStyle(document.getElementById('placeholder-player').firstChild, null)
  document.getElementById('snarls_player').hdiff = parseInt( z.height.replace('px','') - ((z.height.replace('px','') / 60 >> 0) * 60) ); 
  var x = document.getElementById('snarls_player').hdiff
  var y = Math.round(x / 2)
  if (o != null) document.getElementById('placeholder-player').firstChild.setAttribute('style', o)

  var p1 = document.getElementById('player1')

  if (p1 != null) {

    if (((player().getAttribute('name') == 'me_flash') && (bm0.style.visibility == 'hidden')) || ((document.getElementById(mep_x('me_flash_')) != null) && (bm0.style.visibility == 'visible'))) {
	p1.style.width = parseInt(w.replace('px','') - (x || 30)) + 'px'
	p1.style.height = h
	p1.style.left = '0px'
    } else {
	p1.style.width = Math.round(parseInt(h.replace('px','') - x) * parseFloat(document.getElementById('snarls_player').aspect_ratio)) + 'px';
	p1.style.height = (h.replace('px','') - x) + 'px';
	p1.style.left = Math.round( parseInt( parseInt(w.replace('px','')) - parseInt(p1.style.width.replace('px','')) ) / 2) + 'px';
      }
	p1.style.top = '0px';
    if (parseInt(document.getElementById('bm0').style.width.replace('px','')) < parseInt(p1.style.width.replace('px',''))){
      if (((player().getAttribute('name') == 'me_flash') && (bm0.style.visibility == 'hidden')) || ((document.getElementById(mep_x('me_flash_')) != null) && (bm0.style.visibility == 'visible'))) {
	  p1.style.width = w;
	  p1.style.height = parseInt(h.replace('px','') - (y || 15)) + 'px'
	  p1.style.top = '0px'
      } else {
	  p1.style.width = w
	  p1.style.height = ((Math.round(parseInt(w.replace('px','')) / parseFloat(document.getElementById('snarls_player').aspect_ratio)))) + 'px';
	  p1.style.top = (Math.round( parseInt( parseInt(h.replace('px','')) - parseInt(p1.style.height.replace('px','')) ) / 2) - y) + 'px';
	}
      p1.style.left = '0px'
    }
  }



  var flashvars = player().getAttribute('flashvars')
  var c = document.getElementById("aspect")
  var d = document.getElementById('player').getAttribute("class")
  var e = document.getElementById('theater-background').style
  e.width = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() + 'px';
  e.height = h
  if (document.getElementById("placeholder-player").offsetWidth < e.width.replace('px','')) { //alert(a0.width + " " + a0.height);
    //e.width = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() + 'px';
    var x = document.getElementById("placeholder-player").offsetWidth
  } else {
      //e.width = document.getElementById("placeholder-player").offsetWidth + 'px'; e.left = '0px';  
      var x = e.width.replace('px','')
    }
  var playlist = document.getElementById('watch-appbar-playlist')
  if (playlist) playlist.removeAttribute('style')

  var a = document.getElementById('placeholder-player').firstChild; var b = a.style
  if (b != null) {
    a.removeAttribute("style")
    var a0 = {}
    a0.width = a.offsetWidth
    a0.height = a.offsetHeight
    a.style.width = w;
    a.style.height = h;
    a.style.left = document.getElementById("player-api").style.left
    a.style.backgroundColor = 'transparent'

document.getElementById('watch7-sidebar').removeAttribute('style')
    if (wide_view()) { 
      if (c) {
        e.left = '0px'
        e.width = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() + 'px'
        if (document.getElementById("placeholder-player").offsetWidth < e.width.replace('px','')) {
          a.style.left = document.getElementById('player-api').style.left = '-' + w.replace('px','') / 2 + 'px'
          if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) { 
            if (w.replace('px','') < parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() ) { 
                a.style.left = document.getElementById('player-api').style.left = '-' + w.replace('px','') / 2 + 'px'
              } else {
                  a.style.left = document.getElementById('player-api').style.left = '-' + e.width.replace('px','') / 2 + 'px'
                }
          } else {
              if (w.replace('px','') < parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() ) { 
                a.style.left = document.getElementById('player-api').style.left = '-' + w.replace('px','') / 2 + 'px'
              } else {
                  a.style.left = document.getElementById('player-api').style.left = '-' + (parseInt(x) + parseInt(e.width.replace('px','')) - parseInt(document.getElementById("placeholder-player").offsetWidth)) / 2 + 'px'
                }
            }
        } else {
            if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) { 
              if (w.replace('px','') < parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() ) { 
                a.style.left = document.getElementById('player-api').style.left = '-' + (parseInt(w.replace('px','')) + document.getElementById("placeholder-player").offsetWidth - e.width.replace('px','')) / 2 + 'px'
              } else {
                  a.style.left = document.getElementById('player-api').style.left = '-' + document.getElementById("placeholder-player").offsetWidth / 2 + 'px'
                }
            } else {
                a.style.left = document.getElementById('player-api').style.left = '-' + w.replace('px','') / 2 + 'px'
            a.style.left = document.getElementById('player-api').style.left = (e.width.replace('px','') - w.replace('px','') - document.getElementById("placeholder-player").offsetWidth) / 2 + 'px'

              }
            if (parseInt(a.style.left.replace('px','')) < parseInt('-' + (document.getElementById('placeholder-player').offsetWidth / 2))) {
              a.style.left = document.getElementById('player-api').style.left = '-' + (document.getElementById('placeholder-player').offsetWidth / 2) + 'px'
            }
            e.width = document.getElementById("placeholder-player").offsetWidth + 'px'
          }
        if (playlist) { playlist.style.top = parseInt(h.replace('px','')) - 390 + 'px' }
      } else {
      	  a.style.left = document.getElementById('player-api').style.left = '-' + (document.getElementById('placeholder-player').offsetWidth / 2) + 'px'
          if (parseInt(tiny.marginLeft.replace('px','')) > 100) {
            document.getElementById('watch7-sidebar').style.top = '-400px';
            if (playlist) { playlist.style.top = '-400px' }
          }
        }
    } else {
        if ( (document.getElementById('placeholder-player').offsetWidth > parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() ) && (parseInt(tiny.marginLeft.replace('px','')) > 100) ) { 
          e.left = '0px'
          e.width = document.getElementById('placeholder-player').offsetWidth + 'px'
        }
          if (c) {
            if (parseInt(tiny.marginLeft.replace('px','')) > 100) { if (playlist) { playlist.style.top = parseInt(h.replace('px','')) + 10 + 'px' }}
            if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) { 
              a.style.left = document.getElementById('player-api').style.left = ((x / 2) - (w.replace('px','')) / 2) + 'px'
              e.left = '-' + (e.width.replace('px','') - document.getElementById("placeholder-player").offsetWidth) / 2 + 'px'
              document.getElementById('watch7-sidebar').style.top = '400px';
            } else {
                e.left = (document.getElementById('placeholder-player').offsetWidth - e.width.replace('px','')) / 2 + 'px';
                a.style.left = document.getElementById('player-api').style.left = ((x / 2) - (w.replace('px','')) / 2) + 'px';
                document.getElementById('watch7-sidebar').style.top = '400px';
                if (playlist) { 
                  //playlist.style.marginLeft = '0px' 
                }
              }
            if ( parseInt(w.replace('px','')) > parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() ) {//alert(a.style.left +" "+ e.left)
                  a.style.left = document.getElementById('player-api').style.left = e.left; //'-' + (e.width.replace('px','') - document.getElementById("placeholder-player").offsetWidth) / 2 + 'px'
              } else {
                    a.style.left = document.getElementById('player-api').style.left = '-' + (w.replace('px','') - document.getElementById("placeholder-player").offsetWidth) / 2  + 'px'
                }
          } else {
              if ((d.indexOf("medium") > -1) || (d.indexOf("large") > -1)) {
                a.style.left = document.getElementById('player-api').style.left = '0px';//'-' + w.replace('px','') / 2 + 'px';
              } else {
                  a.style.left = document.getElementById('player-api').style.left = '0px'
                }
            }
      }//wide else

            if ((parseInt(tiny.marginLeft.replace('px','')) < 100) || (tiny.marginLeft == 'auto')) {
              a.style.left = document.getElementById('player-api').style.left = '-' + (w.replace('px','') / 2) + 'px'
              if (playlist) {
              	playlist.style.top = parseInt(h.replace('px','')) + 50 + 'px'
                var y = parseInt(playlist.offsetHeight) + 5
                if (document.getElementById('watch7-notification-area') != null) document.getElementById('watch7-notification-area').style.top = '-' + y + 'px'
              }
              if (parseInt(a.style.left.replace('px','')) < parseInt('-' + (document.getElementById('placeholder-player').offsetWidth / 2))) {
                a.style.left = document.getElementById('player-api').style.left = '-' + (document.getElementById('placeholder-player').offsetWidth / 2) + 'px'
              }
            }
  }

if (parseInt(tiny.marginLeft.replace('px','')) > 100) {
  if (document.getElementById('watch7-notification-area') != null) document.getElementById('watch7-notification-area').style.top = "0px"
} else {
    document.getElementById('watch7-sidebar').removeAttribute('style')
//style.top = parseInt(h.replace('px','')) + '60' + 'px'

  }



  var z = gclass("html5-progress-bar")
  if ((z != null) && (z[0] != null)) z[0].style.maxWidth = w
  var z = document.getElementsByClassName('ytp-chrome-bottom')
  if ((z != null) && (z[0] != null)) { z[0].style.width = w; z[0].style.left = '0px' }
  var z = gclass("mejs-layer");
  if ((z != null) && (z[0] != null)) {
    for(i=0;i<z.length-1;i++){
      if ( z[i] ) {
        z[i].style.width = document.getElementById('bm0').style.width;
        if (z[i].className !== 'mejs-overlay mejs-layer mejs-overlay-play') {
          z[i].style.height = document.getElementById('bm0').style.height
        } else {
            z[i].style.height = parseInt(document.getElementById('bm0').style.height.replace('px','') - parseInt(document.getElementById('snarls_player').hdiff || 30)) + 'px'
          }
      }
    }
  }
  var z = document.getElementsByClassName("mejs-captions-text")
  if ((z != null) && (z[0] != null)) {
    if ( typeof z === 'object') { 
      z[0].setAttribute("style",document.getElementById('bm0').style.width);
      z[0].style.fontSize = parseFloat(parseFloat(0.9 + parseFloat(document.getElementById('bm0').style.height.replace("px","")) / parseFloat(32.5)) + parseFloat(parseFloat(407 / parseInt(document.getElementById('bm0').style.height.replace("px",""))))) + "px";
      if (z[0].style.fontSize.replace("px","") < parseFloat(9.5)) z[0].style.fontSize = "9.5px"
      if (z[0].style.fontSize.replace("px","") > parseFloat(23.5)) z[0].style.fontSize = "23.5px"
    }
  }

  var x = [document.getElementsByClassName('mejs-sourcechooser-selector'),document.getElementsByClassName('mejs-captions-selector')]
  for(i=0;i<x.length;i++){
    if ((x[i] != null) && (x[i][0] != null)) {
      var z = x[i][0];
      if ((document.getElementsByClassName('mejs-clear')[0]) && (typeof z != 'undefined')){
        //z.style.maxWidth = "147px"; z.style.minWidth = "130px"
        function src_chooser(){ return [z.firstChild.offsetHeight, z.firstChild.offsetWidth] }
        var src_chooser_size = src_chooser(z);
        if (((document.getElementById('bm0').style.height.replace('px','')) - 30) < src_chooser_size[0]) {
          z.style.height = ((document.getElementById('bm0').style.height.replace('px','')) - 51) + 'px';
          z.style.width = "145px";//((src_chooser_size[1]) + 15) + 'px'
          z.style.overflowY = "scroll"
        } else {
            z.style.height = (src_chooser_size[0] + 1) + 'px'
            z.style.width = "130px";//(src_chooser_size[1] + 0) + 'px'
            z.style.overflowY = "hidden"
          }
      }
    }
  }

  var z = document.getElementById("bm3")
  if (z) z.style.top = document.getElementById("masthead-positioner").offsetHeight - 2 + "px" 

  ythtml5_size()

}



function switchflashhtml5() {
  var p = player()
  var p1 = document.getElementById('player1')
  var p2 = document.getElementById('player2')
  var bm0 = document.getElementById('bm0')
  var flashvars = getFlashVars();//player().getAttribute('flashvars');
  if (p1 != null) {
    try { p1.pause() } catch(e) {}
    try { p2.pause() } catch(e) {}
  }
  var x = gclass('mejs-shim');
  if ((x != undefined) && (x != null) && (x[0] != undefined) && (x[0] != null) && (mep_x('me_flash_')[0] != null)) {
    if (typeof x[0].pauseMedia == 'function') { x[0].pauseMedia() }
  }
  if ( bm0.style.visibility === 'hidden') {
    document.getElementById('snarls_player').wmode = p.getAttribute('wmode')
    if (document.getElementById('iaextractor-menu')) { document.getElementById('iaextractor-menu').parentNode.removeChild(document.getElementById('iaextractor-menu')) }
    if (p.id == 'movie_player') {
      if (typeof p.getAttribute('flashvars') == 'string') {
        if (typeof p.getPlayerState === 'function') {
	  window.postMessage("pauseVideo", "*")
	}
      } else {
	  try { document.getElementsByClassName('video-stream html5-main-video')[0].pause() } catch(e) {}
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
    p.style.display = 'none';
    bm0.style.display = 'block';
    bm0.style.visibility = 'visible';
  } else {
      bm0.style.visibility = 'hidden';
      p.style.display = '';
      var p = document.getElementById('movie_player')
      if (p.id == 'movie_player') {
	if (typeof p.getAttribute('flashvars') == 'string') {
	  p.style.opacity = '1.1'
	  reload_flashplayer()
	  var p = document.getElementById('movie_player')
	  try { window.addEventListener("message", window.ytplayercmd, true) } catch(e) {};
	  try { document.getElementById('movie_player').addEventListener("onStateChange", Sync, true) } catch(e) {};
	}
      }
      if (p.getAttribute('name') == 'me_flash') {
	  if (p.getAttribute('wmode') != document.getElementById('snarls_player').wmode) { 
	    var param = getElementsByAttribute(p,"param","name","flashvars");//alert(typeof param + param + typeof param[0] + param[0])
	    if ((param != null) && (param[0] != null)) { //alert(p.getAttribute('wmode'))
	      var file = param[0].getAttribute("value").split("&file=")[1]
	      param[0].setAttribute("value", param[0].getAttribute("value").split("&file=")[0]);
	      param[0].setAttribute("value", param[0].getAttribute("value").split("&file=")[0] + "&file=" + file);
	      reload_flashplayer()
	    }
	  }

	  document.getElementById('snarls_player').wmode = p.getAttribute('wmode')
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

//CtrlS(stage,v);//var noads = document.getElementById('player-api').innerHTML;onDownload(noads)
//  if ((p.getAttribute("name") == "me_flash") && (bm0.style.visibility == 'hidden')) {
//    //player().removeAttribute('wmode')
//  }
}

function ythtml5_size() {
  if ( (typeof player().getPlayerState == 'function') && (player().getAttribute('flashvars') == null) ) {
    var z = document.getElementById('placeholder-player').firstChild.style;
    if (typeof z !== 'object') {
      document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height"></div>';
    } else {
        var o = document.getElementById('placeholder-player').firstChild.getAttribute('style'); if (o != null) document.getElementById('placeholder-player').firstChild.removeAttribute('style')
      }
    var z = document.getElementById('placeholder-player').firstChild.currentStyle || window.getComputedStyle(document.getElementById('placeholder-player').firstChild, null)
    document.getElementById('snarls_player').hdiff = parseInt( z.height.replace('px','') - ((z.height.replace('px','') / 60 >>0) * 60) ); 
    var x = document.getElementById('snarls_player').hdiff
    var y = Math.round(x / 2)
    if (o != null) document.getElementById('placeholder-player').firstChild.setAttribute('style', o)

    var bm0 = document.getElementById('bm0').style
    var yt = document.getElementsByClassName('html5-video-content')[0].style
    var v = document.getElementsByClassName('video-stream html5-main-video')[0]
//    if (document.getElementById('aspect')){
//      v.style.width = yt.width = Math.round((bm0.height.replace('px','') - x) * parseFloat(document.getElementById("snarls_player").aspect_ratio)) + 'px'
//      v.style.left = yt.left = (Math.round((bm0.width.replace('px','') - (bm0.height.replace('px','') - x) * parseFloat(document.getElementById("snarls_player").aspect_ratio)) / 2) ) + 'px';
//    v.style.left = yt.left = (Math.round((bm0.width.replace('px','') - (bm0.height.replace('px','') - x) * parseFloat(document.getElementById("snarls_player").aspect_ratio)) / 2) >>0) + 'px';
    v.style.width = yt.width = Math.round(parseInt(bm0.height.replace('px','') - x) * parseFloat(document.getElementById('snarls_player').aspect_ratio)) + 'px';
    v.style.height = yt.height = (bm0.height.replace('px','') - x) + 'px';
    v.style.left = yt.left = Math.round( parseInt( parseInt(bm0.width.replace('px','')) - parseInt(yt.width.replace('px','')) ) / 2) + 'px';
    v.style.top = yt.top = '0px';
    if (parseInt(bm0.width.replace('px','')) < parseInt(yt.width.replace('px',''))){
      v.style.width = yt.width = bm0.width
      v.style.height = yt.height = ((Math.round(parseInt(bm0.width.replace('px','')) / parseFloat(document.getElementById('snarls_player').aspect_ratio)))) + 'px';
      v.style.left = yt.left = '0px'
      v.style.top = yt.top = (Math.round( parseInt( parseInt(bm0.height.replace('px','')) - parseInt(yt.height.replace('px','')) ) / 2) - y) + 'px';
    }
//    } else {
//    	v.style.width = yt.width = bm.width
//    	v.style.left = yt.left = '0px'
//      }
//    v.style.height = yt.height = (bm0.height.replace('px','') - x) + 'px'
//    v.style.top = yt.top = (((bm0.height.replace('px','') - (bm0.height.replace('px','') - x)) / 2 >>0) - y) + 'px';
  }
}


function aspect2(w,h) {
//alert(document.getElementById('player-api').offsetLeft - document.getElementById('player-api').scrollLeft + document.getElementById('player-api').clientLeft + "  " + document.getElementById('player-api').style.left)
  var w = w + 'px'
  var h = h + 'px'
  document.getElementById('player-api').style.height = h;
  document.getElementById('player-api').style.width = w;
  if (document.getElementById('aspect')) {
    document.getElementById('watch7-sidebar').style.top = '10px'
//marginTop = fix_Height().replace('px','') - 390 + 'px';
    var playlist = document.getElementById('watch-appbar-playlist')
    if (playlist != null) {
      playlist.style.top = parseInt(h.replace('px','')) + 'px'
      document.getElementById('watch7-sidebar').style.top = fix_Height().replace('px','') - 390 + 'px';
//    document.getElementById('watch-appbar-playlist').style.top = h.replace('px','') + 'px'
//    document.getElementById('watch-appbar-playlist').style.marginTop = '10px'
//    document.getElementById('watch-appbar-playlist').style.marginLeft = '5px'

    }
  }
  
  resize_layers(w,h)

//  var p1 = document.getElementById('player1')
//  if (p1 != null) {
//    p1.style.width = Math.round(parseInt(h.replace('px','')) * parseFloat(document.getElementById('snarls_player').aspect_ratio)) + 'px';
//    p1.style.height = (h.replace('px','') - 30) + 'px';
//    p1.style.left = Math.round( parseInt( parseInt(w.replace('px','')) - parseInt(p1.style.width.replace('px','')) ) / 2) + 'px';
//    p1.style.top = '0px';
//    if (parseInt(document.getElementById('bm0').style.width.replace('px','')) < parseInt(p1.style.width.replace('px',''))){
//      p1.style.width = w
//      p1.style.height = (Math.round(parseInt(w.replace('px','')) / parseFloat(document.getElementById('snarls_player').aspect_ratio))) + 'px';
//      p1.style.left = '0px'
//      p1.style.top = Math.round( parseInt( parseInt(h.replace('px','')) - parseInt(p1.style.height.replace('px','')) ) / 2) + 'px';
//    }
//  }
}

function aspect(a) { 
  var class_0 = document.getElementById('player').getAttribute('class')
  var class_1 = class_0.replace('small','small_a').replace('medium','medium_a').replace('large','large_a')

  if ( document.getElementById('placeholder-player').offsetWidth > parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() ) {
    var playerwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() + 'px'
  } else {
      var playerwidth = document.getElementById('placeholder-player').offsetWidth + 'px'
    }
      
  if ((document.getElementById('bm0').style.width != playerwidth ) && (!a)) {
    var w = playerwidth
    var h = Math.round((w.replace('px','') / document.getElementById("snarls_player").aspect_ratio)) + (parseInt(document.getElementById("snarls_player").hdiff || 30)) + 'px';
    document.getElementById('player-api').style.width = w;
    document.getElementById('player-api').style.height = h;

    if (document.getElementById('watch7-notification-area') != null) {
      var dw = document.getElementById('aspect')
      if (dw != null) { dw.parentNode.removeChild(dw)}
      document.getElementById('theater-background').style.backgroundColor = "#1B1B1B"
      dw = document.createElement('div');
      dw.id = 'aspect';
      dw.innerHTML = '<input id="a_width" value="' + w.replace("px","") + '" style="display:inline-block;width:30px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) aspect2(document.getElementById(\'a_width\').value,document.getElementById(\'a_height\').value)" onfocus="document.getElementById(\'a_width\').value=document.getElementById(\'a_width\').value;document.getElementById(\'a_height\').value=document.getElementById(\'a_height\').value"></input>x<input id="a_height" value="' + h.replace("px","") + '" style="display:inline-block;width:30px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) aspect2(document.getElementById(\'a_width\').value,document.getElementById(\'a_height\').value)" onfocus="document.getElementById(\'a_height\').value=document.getElementById(\'a_height\').value;document.getElementById(\'a_width\').value=document.getElementById(\'a_width\').value"></input>px';
      document.getElementById('watch7-notification-area').insertBefore(dw,document.getElementById('yt-alert-message'))
      document.getElementById('aspect').setAttribute('style','display:inline-block;right:0%;position:absolute;color:#333');
    }
    //player class="watch-playlist watch-playlist-collapsed watch-medium" "watch-playlist watch-small"
    //class="player-width player-height off-screen-target player-api"
    document.getElementById('watch7-sidebar-ads').style.display = 'none';
    document.getElementById('watch7-sidebar').style.marginTop = parseInt(parseInt(fix_Height().replace('px','')) - 390) + 'px';
    var playlist = document.getElementById('watch-appbar-playlist')
    if (playlist) {
      playlist.style.top = parseInt(h.replace('px','')) + 'px'
//    document.getElementById('watch-appbar-playlist').style.top = h.replace('px','') + 'px'
//    document.getElementById('watch-appbar-playlist').style.marginTop = '10px'
//    document.getElementById('watch-appbar-playlist').style.marginLeft = '5px'

    }
   // document.getElementById('watch-appbar-playlist').style.top = Math.round((w.replace('px','') / aspect_ratio)) + 'px';
   // document.getElementById('watch-appbar-playlist').style.marginTop = '10px'
   // document.getElementById('watch-appbar-playlist').style.marginLeft = '5px'

    resize_layers(w,h)
    
//    document.getElementById('player1').style.height = (h.replace('px','') - 30) + 'px';
//    document.getElementById('player1').style.width = w
    document.getElementById('player').setAttribute('class',class_1)
    document.getElementById('player').setAttribute('class',class_0.replace('small_a','small').replace('medium_a','medium').replace('large_A','large'))
  } else {
      var w = fix_Width();
      var h = fix_Height();
      document.getElementById('player-api').style.width = w;
      document.getElementById('player-api').style.height = h
      
      var dw = document.getElementById('aspect')
      if (dw != null) { dw.parentNode.removeChild(dw)}
      document.getElementById('theater-background').style.backgroundColor = "transparent"
      document.getElementById('watch7-sidebar').style.marginTop = '-400px';
      var playlist = document.getElementById('watch-appbar-playlist')
      if (playlist) playlist.removeAttribute('style')

      resize_layers(w,h)
      
//      document.getElementById('player1').style.height = (h.replace('px','') - 30) + 'px';
//      document.getElementById('player1').style.width = w
      document.getElementById('player').setAttribute('class',class_0.replace('small_a','small').replace('medium_a','medium').replace('large_A','large'))
    }
    document.getElementById('player-api').style.overflow = 'hidden';
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

  var p = document.getElementById('placeholder-player'); if (p) { var p1 = p.firstChild; if (typeof p1 == 'object') { var x = p1.style; if (typeof x == 'object') p1.removeAttribute("style") } }

  var z = gclass("html5-progress-bar"); if (z[0]) { var x = z[0].style; if (x) z[0].removeAttribute("style") }

  var z = document.getElementById('watch7-sidebar'); if (z) z.style.marginTop = '-400px';

  var playlist = document.getElementById('watch-appbar-playlist')
  if (playlist) playlist.removeAttribute('style')

  var z = [ document.getElementById('bm0'),document.getElementById('player-api'),player() ]
  for(i=0;i<z.length;i++){
   if ((z[i]) && (p) && (typeof p1 == 'object')) { z[i].style.width = p1.offsetWidth; z[i].style.height = p1.offsetHeight; }
  }

  var z = document.getElementById('player-api'); if (z) z.style.display = 'block';

  player().style.display = '';

  var z = [ 'remove','controls','aspect','bm1','bm3','bm0',"snarls_player" ]
  for(i=0;i<z.length;i++){
    if (document.getElementById(z[i])) document.getElementById(z[i]).parentNode.removeChild(document.getElementById(z[i]))
  }

  var z = ['movie_player','player','player-api']
  for(i=0;i<z.length;i++){
    if (document.getElementById(z[i])) document.getElementById(z[i]).removeAttribute('wmode')
  }

  var z = [document.getElementById('masthead-positioner-height-offset'),document.getElementById('player-api'),document.getElementById('watch7-sidebar'),document.getElementById('theater-background') ]
  for(i=0;i<z.length;i++){
    if (z[i]) z[i].removeAttribute('style')
  }
  var z = document.getElementsByClassName('ytp-chrome-bottom')[0];
  if ((!z) && (typeof document.getElementsByClassName('video-stream html5-main-video')[0] != 'undefined')) {
    document.getElementsByClassName('video-stream html5-main-video')[0].removeAttribute('style')
  }
}

/*
  Zooming and rotating HTML5 video player
  Homepage: http://github.com/codepo8/rotatezoomHTML5video
  Copyright (c) 2011 Christian Heilmann
  Code licensed under the BSD License:
  http://wait-till-i.com/license.txt
*/



function control_panel1() {
  if (document.getElementById("watch7-notification-area") === null) {
    var js = document.createElement('div');
    js.id = 'watch7-notification-area';
    document.getElementById('watch-header').parentNode.insertBefore(js,document.getElementById('watch-header'))
    delete js;
  }
  document.getElementById("watch7-notification-area").setAttribute('style','display:block; padding: 0px 0px 0px; z-index: 5')
  document.getElementById("watch7-notification-area").setAttribute('class','yt-card')
  
  if (document.getElementById("yt-alert-message") === null) {
    var js = document.createElement('div');
    js.id = 'yt-alert-message';
    document.getElementById('watch7-notification-area').insertBefore(js,document.getElementById('watch7-notification-area').firstChild);
    document.getElementById('yt-alert-message').setAttribute('class','yt-alert-message');
    delete js;
  }

  var controls = document.getElementById('controls');
  if ( controls != null ) { controls.parentNode.removeChild(controls) }

  var remove = document.getElementById("remove")
  if ( remove != null ) { remove.parentNode.removeChild(remove) }
  //if (remove == null) {
    var js = document.createElement('div');
    js.id = 'remove';
    document.getElementById('yt-alert-message').appendChild(js);
    document.getElementById("remove").setAttribute('style','display:inline-block');
    document.getElementById("remove").innerHTML =  '<button onclick="switchflashhtml5()" class="yt-uix-button-text"><img src="//s.ytimg.com/yts/img/HTML5_1Color_Black-vfl902gVJ.png" style="vertical-align:middle;height:12px;padding:0px""></img></button><button onclick="aspect()" class="yt-uix-button-text">«\<\>»</button><br><button onclick="deldiv()" class="yt-uix-button-text">remove</button>'
    //&#9724;
    //&#8633;
    //&#8703;//
  //}; //else {    document.getElementById('remove').style.display = "inline-block"  }

}//control_panel1


var CtrlS = function (stage,v){

control_panel1()

  var js = document.createElement('div');
  js.id = 'controls';
  //    document.getElementById('masthead-search').setAttribute('style','display:inline-block;width:650px;max-width:650px;overflow:hidden;margin-top:3px;padding:0px;position:relative;')
  //    document.getElementById('masthead-search').parentNode.insertBefore(js, document.getElementById('masthead-search').nextSibling);
  document.getElementById('remove').parentNode.insertBefore(js, document.getElementById('remove').nextSibling);
  document.getElementById('controls').setAttribute('style','display:inline-block;padding-left: 1px');


/* predefine zoom and rotate */
  var zoom = 1,
      rotate = 0;

/* Grab the necessary DOM elements */

var stage = stage;
var v = v; if (v == undefined) { var v = document.getElementsByClassName('video-stream html5-main-video')[0] }


  //alert(v.getAttribute('id') + " " + stage.getAttribute('id'))

var controls = document.getElementById('controls');
var postr = getElementsByAttribute(document,'div','class','mejs-poster mejs-layer')[0]
var bm0 = document.getElementById('bm0');
var me_flash = document.getElementById(mep_x('me_flash__ __container'))
var flashvars = getFlashVars();
  
/* Array of possible browser specific settings for transformation */
  var properties = ['transform', 'WebkitTransform', 'MozTransform',
                    'msTransform', 'OTransform'],
      prop = properties[0];
      //document.getElementById("snarls_player").prop = prop

/* Iterators and stuff */    
  var i,j,t;
  
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
		 parseInt(v.style.height.replace('px','')) - parseInt(document.getElementById("snarls_player").hdiff || 30)
		) / 2)	 ) + 'px';
    v.style.left = (Math.round( parseInt(
		 parseInt(bm0.style.width.replace('px','')) -
		 ( (parseInt(v.style.height.replace('px','')) ) * parseFloat(document.getElementById("snarls_player").aspect_ratio) )
		) / 2)	 ) + 'px';
    //v.style.left = '0px';
    //v.style.top = '0px';
	}//else
  }

var tiny = document.getElementById('watch7-sidebar').currentStyle || window.getComputedStyle(document.getElementById('watch7-sidebar'), null)
var playlist = document.getElementById('watch-appbar-playlist')
            if ((parseInt(tiny.marginLeft.replace('px','')) < 100) || (tiny.marginLeft == 'auto')) {
              if (playlist) {
              	playlist.style.top = parseInt(bm0.style.height.replace('px','')) + 50 + 'px'
                var y = parseInt(playlist.offsetHeight) + 5
                if (document.getElementById('watch7-notification-area') != null) document.getElementById('watch7-notification-area').style.top = '-' + y + 'px'
              }
            }

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


/* If a button was clicked (uses event delegation)...*/
  controls.addEventListener('click',function(e){
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
          zoom = zoom + 0.1;
          v.style[prop] ='scale('+zoom+') rotate('+rotate+'deg)'; if (postr != null) postr.style[prop] = v.style[prop]
          if ((me_flash != null) && (bm0.style.visibility == 'visible')) {
            //me_flash.style[prop] = v.style[prop]
          }
          break;

/* Decrease zoom and set the transformation */
        case 'zoomout yt-uix-button-text':
          if (player().getAttribute('wmode') != 'transparent') {
  player().setAttribute('wmode','transparent');
}
          zoom = zoom - 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)'; if (postr != null) postr.style[prop] = v.style[prop]
          if ((me_flash != null) && (bm0.style.visibility == 'visible')) {
            //me_flash.style[prop] = v.style[prop]
          }
        break;

/* Increase rotation and set the transformation */
        case 'rotateleft yt-uix-button-text':
          if (player().getAttribute('wmode') != 'transparent') {
  player().setAttribute('wmode','transparent');
}
          rotate = rotate + 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')'; if (postr != null) postr.style[prop] = v.style[prop]
          if ((me_flash != null) && (bm0.style.visibility == 'visible')) {
            //me_flash.style[prop] = v.style[prop]
          }
        break;
/* Decrease rotation and set the transformation */
        case 'rotateright yt-uix-button-text':
          if (player().getAttribute('wmode') != 'transparent') {
  player().setAttribute('wmode','transparent');
}
          rotate = rotate - 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')'; if (postr != null) postr.style[prop] = v.style[prop]
          if ((me_flash != null) && (bm0.style.visibility === 'visible')) {
            //me_flash.style[prop] = v.style[prop]
          }
//          var width = document.getElementById('player1').getAttribute('width') - 5;
//          document.getElementById('player1').setAttribute('width', width);

        break;

/* Move video around by reading its left/top and altering it */
        case 'left yt-uix-button-text':
          v.style.left = (parseInt(v.style.left,10) - 5) + 'px'; if (postr != null) postr.style.left = v.style.left
          if ((me_flash != null) && (bm0.style.visibility === 'visible')) {
            //me_flash.style.left = v.style.left
          }
  player().removeAttribute('wmode');

        break;
        case 'right yt-uix-button-text':
          v.style.left = (parseInt(v.style.left,10) + 5) + 'px'; if (postr != null) postr.style.left = v.style.left
          if ((me_flash != null) && (bm0.style.visibility === 'visible')) {
            //me_flash.style.left = v.style.left
          }
  player().removeAttribute('wmode');

        break;
        case 'up yt-uix-button-text':
          v.style.top = (parseInt(v.style.top,10) - 5) + 'px'; if (postr != null) postr.style.top = v.style.top
          if ((me_flash != null) && (bm0.style.visibility === 'visible')) {
            //me_flash.style.top = v.style.top
          }
  player().removeAttribute('wmode');

        break;
        case 'down yt-uix-button-text':
          v.style.top = (parseInt(v.style.top,10) + 5) + 'px'; if (postr != null) postr.style.top = v.style.top
          if ((me_flash != null) && (bm0.style.visibility === 'visible')) {
            //me_flash.style.top = v.style.top
          }
  player().removeAttribute('wmode');

        break;

/* Reset all to default */
        case 'reset yt-uix-button-text':
        if (v != player()) {
          zoom = 1;
          rotate = 0;
          //if ((v == undefined)) alert(typeof player().getPlayerState + typeof player().getAttribute('flashvars'));// { var v = document.getElementsByClassName('video-stream html5-main-video')[0] }
          if ( (typeof player().getPlayerState == 'function') && (player().getAttribute('flashvars') == null) && (bm0.style.visibility == 'hidden') ) {

            ythtml5_size()

          } else {//alert(v + 'width:' + v.style.width + ' left:' + v.style.left + ' height:' + v.style.height + ' top:' + v.style.top)
	      if (bm0 != null) {
                v.style.top = (Math.round( parseInt(
				 parseInt(bm0.style.height.replace('px','')) -
				 parseInt(v.style.height.replace('px','')) - parseInt(document.getElementById("snarls_player").hdiff || 30)
				) / 2)	 ) + 'px';
	        v.style.left = (Math.round( parseInt(
				 parseInt(bm0.style.width.replace('px','')) -
				 ( (parseInt(v.style.height.replace('px','')) ) * parseFloat(document.getElementById("snarls_player").aspect_ratio) )
				) / 2)	 ) + 'px';
	      }
		  if ((bm0 != null) && (typeof flashvars == 'object')) {
		    for (i=0;i<flashvars.length;i++) {
			if (typeof flashvars[i].pauseMedia == 'function') {
			  flashvars[i].style.top = '0px'
			  flashvars[i].style.left = '0px'
			}
			if (flashvars[i] == document.getElementById(mep_x('me_flash_'))) {
			  if (flashvars[i].style.width == '') flashvars[i].style.width = bm0.style.width;
			  if (flashvars[i].style.height == '') flashvars[i].style.height = parseInt(bm0.style.height.replace('px','') - 30) + 'px';
			  flashvars[i].style.top = '0px'
			  flashvars[i].style.left = '0px'
			}
		    }
		  }

            }
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
          if (me_flash != null) {//alert()
            //me_flash.style.top = '0px';//v.style.top
            //me_flash.style.top = '0px';//v.style.left
            //me_flash.style[prop] = v.style[prop]
          }
        } else {
            var opacity = player().style.opacity;
            player().setAttribute("style","top:0px; left:0px; opacity:"+opacity); zoom = 1; rotate = 0;//width:" + document.getElementById('placeholder-player').firstChild.style.width + "; height:" + document.getElementById('placeholder-player').firstChild.style.height + "; 
          }
        if (postr != null) { postr.style[prop] = 'none'; postr.style.top = '0px'; postr.style.left = '0px' }
        //bestfit(); //document.getElementById('player1').style.height = (document.getElementById('player1').style.height.replace('px','') - 30) + 'px';
        break;
      }        
      document.getElementById('placeholder-player').firstChild.style[prop] = v.style[prop]
      //alert(document.getElementById('controls').prop )
      e.preventDefault();
    }
  },false);
}
