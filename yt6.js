//(function(){

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
    82: '360p MP4 3D + 96k AAC',
    83: '240p MP4 3D + 96k AAC',
    84: '720p MP4 3D + 192k AAC',
    85: '1080p MP4 3D + 192k AAC',
    100: '360p WebM 3D + 128k Vorbis',
    101: '360p WebM 3D + 192k Vorbis',
    102: '720p WebM 3D + 192k Vorbis',
    133: '240p DASH H.264',
    134: '360p DASH H.264',
    135: '480p DASH H.264',
    136: '720p DASH H.264',
    137: '1080p DASH H.264',
    138: '2160p DASH H.264',
    139: '48k DASH AAC',
    140: '128k DASH AAC',
    141: '256k DASH AAC',
    160: '144p DASH H.264',
    171: '128k WebM Vorbis',
    172: '192k WebM Vorbis',
    242: '240p WebM VP9',
    243: '360p WebM VP9',
    244: '480p WebM 500k VP9',
    245: '480p WebM 900k VP9',
    246: '480p WebM 1400k VP9',
    247: '720p WebM VP9',
    248: '1080p WebM VP9',
    249: '48k WebM Opus',
    250: '64k WebM Opus',
    251: '160k WebM Opus',
    264: '1440p DASH H.264',
    271: '1440p WebM VP9',
    272: '2160p WebM VP9',
    278: '144p WebM VP9'
  };
function get_quality(url) {

  var qs = qr(url);
  return qual[qs.itag] || qs.itag
}

function rp(tx) {
  return tx.replace('"', '&quot;', 'g');
}

  var xhr = new XMLHttpRequest(),px;

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var proxies = ['https://cors-anywhere.herokuapp.com/https:','https://allow-any-origin.appspot.com/https:']

//  px = 'https://allow-any-origin.appspot.com/https:';
//  px = 'https://cors-anywhere.herokuapp.com/https:'
//  var px = 'http://www.corsproxy.com'
  var ytassetsjs = document.getElementById('ytassetsjs')
  if ((ytassetsjs == null) || ytassetsjs.innerHTML.indexOf("function(){") == -1) {
    if (ytassetsjs != null) ytassetsjs.parentNode.removeChild(ytassetsjs)
    function setProxy(){
      var proxiez = shuffle(proxies)
      for (i in proxiez){
        var px = proxiez[i]
        try {
          xhr.open('get', px + ytplayer.config.assets.js, false);
          xhr.send();
        } catch (e) {
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

            if (proxiez[i] === proxiez[proxiez.length-1]) { 
              document.getElementById("snarls_player").parentNode.removeChild(document.getElementById("snarls_player"))
              exit(px + ' error') 
            } else {
                alert(px + ' error')
              }
          }//catch

        var rpt = xhr.responseText,scpt;
        scpt = document.createElement("script");
        scpt.type = "text/javascript";
        scpt.id = "ytassetsjs";
        scpt.textContent = rpt;
        document.body.appendChild(scpt);
        if (rpt.indexOf("function(){") != -1) { break }
      }//for

      if (rpt.indexOf("function(){") != -1) { return [px, rpt] }
    }//setProxy

    var spx = setProxy()
    var px = spx[0]
    var rpt = spx[1]

  } else {
    var rpt = ytassetsjs.innerHTML
    }

  var fcnm = rpt.match(/signature=([^(]+)/)[1];
  
  function sprintf(nw) {
    var i = 0;
    while (/%s/.test(nw))
      nw = nw.replace('%s', arguments[++i])
    return nw;
  }
  var fs = new RegExp(    sprintf('function %s[^}]+}[^}]+}', fcnm.replace('$', '\\$'))  );
  //var fs = new RegExp('function ' + fcnm.replace('\$','\\$') + '[^}]+}[^}]+}');

  function fcobj(){
    var mch = rpt.match(fs)[0].split('\;');
    for (i in mch) {
      var zzx = mch[i].substring(0,3)
      if ((zzx === zzy) && (zzx.charAt(2)==='.')) { var zzz = zzy.substring(0,2) };
      var zzy = zzx;
    }
    var mch = new RegExp('var ' + zzz + '[^}]+}[^}]+}[^}]+}};');
    return mch
  }

  eval(rpt.match(fcobj())[0] + rpt.match(fs)[0]);
  //eval(rpt.match(fs)[0]);

function dc(sg) {
  return eval(fcnm + '("' + sg + '")');
}

var linx = [];
var lang_def = lang_asr = null;

var args = ytplayer.config.args;
var html = [new Date().toLocaleString(),
  'Click to switch streams in HTML5 player. Right click & "Save as" to download.<br>'
];

var ft = [args.url_encoded_fmt_stream_map, args.adaptive_fmts]
for (i in ft) {
 if (ft[i] !== undefined){
  var z = ft ? ft[i].split(',') : '';
  for (j in z) {
    var qq = get_quality(z[j]);
    var qs = qr(z[j]);
    var href = unescape(qs.url)
    if (qs.sig)
      href += '&signature=' + qs.sig;
    if (qs.s)
      href += '&signature=' + dc(qs.s);
    if (href.indexOf("&ratebypass=yes") == -1) { href += '&ratebypass=yes'}
    if (qq.indexOf("+") != -1) { href += '&2' }
    if ((qq.indexOf("MP4") != -1) || (qq.indexOf("WebM") != -1) || (qq.indexOf("DASH") != -1)) { linx[qs.itag] = href };
    if (qq.indexOf('360p WebM VP8') != -1) { var webm = href };
    if (qq.indexOf('WebM Vorbis') != -1) { var audio = href.replace('&ratebypass=yes','') };

    var fn = (args.title + '-' + qq).toLowerCase()
             .replace(/[!"&'().:[\]|]/g,'')
             .replace(/ /g,'-')
             .replace(/-+/g,'-');
    var p1load = null;
    var onclic = 'document.getElementsByClassName("video-stream html5-main-video")[0].setAttribute("src","' + href + '");document.getElementById("player1").setAttribute("src","' + href + '");sauce = getElementsByAttribute(document,"input","name","mep_0_sourcechooser"); if ((sauce != undefined) && (sauce.length != 0)) { for (i=0;j=(sauce.length-1);i++) { sauce[i].removeAttribute("checked");if (("'+href+'" == sauce[i].getAttribute("value")) || ("'+href.replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value")) || ("'+href.substring(0, href.length-2)+'" == sauce[i].getAttribute("value")) || ("'+href.substring(0, href.length-2).replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value"))) {sauce[i].setAttribute("checked","checked");document.getElementById("player1").setAttribute("src","' + href + '");var p1load = 1;return false};if (i === j){return false;} }};return false';
    html.push(
      '<a href="' + href + '" onclick="' + rp(onclic) + '">' + qq + '</a>'
    );
  }
 }
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

function getElementsByAttribute(oElm, strTagName, strAttributeName, strAttributeValue){
  var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
  var arrReturnElements = new Array();
  var oAttributeValue = (typeof strAttributeValue != "undefined")? new RegExp("(^|\\s)" + strAttributeValue + "(\\s|$)", "i") : null;
  var oCurrent;
  var oAttribute;
  for(var i=0; i<arrElements.length; i++){
    oCurrent = arrElements[i];
    oAttribute = oCurrent.getAttribute && oCurrent.getAttribute(strAttributeName);
      if(typeof oAttribute == "string" && oAttribute.length > 0){
        if(typeof strAttributeValue == "undefined" || (oAttributeValue && oAttributeValue.test(oAttribute))){
          arrReturnElements.push(oCurrent);
        }
      }
  }
  return arrReturnElements;
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

var aac = unescape(args.dashmpd)
var z = aac.split('/'),sig = aac2 = null;
for (i in z) {
  if (sig == 1) { var sig = dc(z[i]); var aac2 = aac.replace(z[i],sig).replace('/s/','/signature/');}
  if (sig == 2) { var aac2 = aac.replace('http://','//').replace('https://','//'); sig == null;}
   if (aac2 != null) {
     try {
       xhr.open('get', aac2, false);
       xhr.send();
       if (xhr.responseText.indexOf("Forbidden") != -1) {
         try {
           xhr.open('get', px + aac2, false);
           xhr.send();
           if (xhr.responseText.indexOf("Forbidden") != -1) break
         } catch(e) {
             break
           }
       }
     } catch(e) {
         break
       }
    var aac2 = parseXml(xhr.responseText);
    //var regexp = new RegExp('<BaseURL.+>(http[^<]+itag=141[^<]+)<\\/BaseURL>','i');
    if (xhr.responseText.indexOf('Representation id="278"') > -1) {
      for (j=0;html.length-1;j++) {
        if (html[j].indexOf("itag=160") > -1) {
          href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id","278")[0].innerHTML.split("\>")[1].split("\<")[0]
          html.splice(
            j+1, 0, '<a href="' + href + '" onclick="' + rp(onclic) + '">144p WebM VP9</a>'
          )
          linx[278] = href
          break
        }
      }
    }
    if (xhr.responseText.indexOf('Representation id="141"') > -1) {
      href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id","141")[0].innerHTML.split("\>")[2].split("\<")[0];
      html.push(
        '<a href="' + href + '" onclick="' + rp(onclic) + '">256k DASH AAC</a>'
      )
      linx[141] = href
    };break
   }

  if (z[i] == "s") var sig = 1;
  if (z[i] == "signature") var sig = 2;
}


    function onDownload(x) {
      document.location = 'data:Application/octet-stream,' + encodeURIComponent(x);
    }


var sref = unescape(args.ttsurl) + '&type=list&asrs=1';
if (sref.replace('&type=list&asrs=1','') != 'undefined') {
  //      sref += '&type=track&lang=en&name&kind&fmt=1';
  //      sref += '&type=list&tlangs=1&fmts=0&asrs=1';
  xhr.open('get', sref, false);
  xhr.send();
  var tts = parseXml(xhr.responseText);
  //var array = [lang_code, name, kind, lang_default];
  var text = tts.getElementsByTagName("track");
  var tracks = [];
  var lang_codeA = [];
  for (b=0;b<text.length;b++)
    {
    var surl = "";
    var lang_code = text[b].getAttribute('lang_code'); if (lang_code) { surl += '&lang=' + lang_code };
    var name = text[b].getAttribute('name'); if (name) { surl += '&name=' + name } else { surl += '&name' };
    var kind = text[b].getAttribute('kind'); if (kind) { surl += '&kind=' + kind ;;var lang_asr = lang_code } else { surl += '&kind' };
    var id = text[b].getAttribute('id'); if (id) { tracks[id] = surl; lang_codeA[id] = lang_code };
    var lang_default = text[b].getAttribute('lang_default'); if (lang_default) { surl += '&type=track&fmt=1'; var track = surl ;var lang_def = lang_code };

    }
  if (!lang_default) { var a=0; do { if ((!track) && (tracks[a] != "undefined")) { var track = tracks[a]}; a++; } while (a<100)};
//    html.push(
//      '<a href="' + sref +'">CC</a>'
//    );
}

var cw = document.querySelector('#bm');

if (!cw) {

function fix_Width() {
  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
  //window.screen.availWidth
  if ((windowwidth > 1934) && (windowheight > 941)){
    var w_base = '1254px';
  } else {
      if ((windowwidth > 1294) && (windowheight > 630)){
        var w_base = '854px';
      } else {
          var w_base = '640px';
        }
    }
  return w_base
}

function fix_Height() {
  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
  var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
  if ((windowwidth > 1934) && (windowheight > 941)){
    var h_base = '734px';
  } else {
      if ((windowwidth > 1294) && (windowheight > 630)){
        var h_base = '510px';
      } else {
          var h_base = '390px';
        }
    }
  return h_base
}

var w_init = document.getElementById('player-api').offsetWidth + 'px'
var h_init = document.getElementById('player-api').offsetHeight + 'px'

var h_orig = document.head.innerHTML.match(/og:video:height([^(]+)/);
if ((h_orig != undefined) || (h_orig != null)) {
  var w_orig = getElementsByAttribute(document,"meta","property","og:video:width")[0].content + "px";
  var h_orig = getElementsByAttribute(document,"meta","property","og:video:height")[0].content + "px";
  var aspect_ratio = (w_orig.replace('px','')/h_orig.replace('px',''))
} else { 
  w_orig = '640px'; h_orig = '360px'; aspect_ratio = 16/9
  }

if (typeof ytcenter !== 'undefined') { 
  var w = document.getElementById('player-api').style.width; if (w.replace('px','') < 640) {document.getElementById('player-api').style.width = '640px'}
  var h = document.getElementById('player-api').style.height; if (h.replace('px','') < 390) {document.getElementById('player-api').style.height = '390px';document.getElementById('watch7-sidebar').style.marginTop = 'heigh:-390px'}
  var h = (w.replace('px','') / aspect_ratio >>0)
  var h = (parseInt(parseInt(h) + parseInt(30))) + 'px'
} else {
    var w = fix_Width(); var h = fix_Height();
    //var w = (360 * aspect_ratio) + 'px'; var h = '390px'
  }
if (w.replace('px','') < 640) {var w = '640px'}
if (h.replace('px','') < 390) {var h = '390px'}

var poster = getElementsByAttribute(document,"link","itemprop","thumbnailURL")[0].href
if (poster != undefined) { var poster = "poster: '" + poster + "'" }
  else { var poster = "poster: 'https://i1.ytimg.com/vi/' + args.video_id + '/0.jpg'" }


  cw = document.createElement('div');
  cw.id = 'bm';
  cw.style = 'background:#111;width: '+w+'; height: '+h+';overflow: hidden;visibility:hidden;';
  document.getElementById('movie_player').parentNode.insertBefore(cw, document.getElementById('movie_player').nextSibling);
  document.getElementById('bm').setAttribute('class','html5-video-content');
  var player = document.getElementById("movie_player");
  var js = document.createElement('param');
  js.name = "wmode";
  js.value = "transparent";
  document.getElementById('bm').appendChild(js);
  document.getElementById('movie_player').setAttribute('wmode','transparent');


  if (document.getElementById("watch7-notification-area") === null) {
    var js = document.createElement('div');
    js.id = 'watch7-notification-area';
    document.getElementById('watch-header').parentNode.insertBefore(js,document.getElementById('watch-header'))
    delete js;
  }
  document.getElementById("watch7-notification-area").setAttribute('style','display = "block"; padding = "15px 20px 0px"')

  if (document.getElementById("yt-alert-message") === null) {
    var js = document.createElement('div');
    js.id = 'yt-alert-message';
    document.getElementById('watch7-notification-area').insertBefore(js,document.getElementById('watch7-notification-area').firstChild);
    document.getElementById('yt-alert-message').setAttribute('class','yt-alert-message');
    delete js;
  }

    var js = document.createElement('video');
    js.id = 'player1';
    js.width = w;
    js.height = h;
    js.controls = 'controls';
    js.preload = "none";
    document.getElementById('bm').appendChild(js);
    delete js;
  if (document.getElementsByClassName('video-stream html5-main-video')[1] === undefined) {
    document.getElementById('player1').setAttribute('class','video-stream html5-main-video')
  }

  var js = document.createElement('source');
  js.id = '43';
  js.src = webm;
  js.type = 'video/webm';
  js.title = qual[43].replace("WebM","");;
  document.getElementById('player1').appendChild(js);

  for (i in linx) {
    if ((linx[i]) && (linx[i] != webm)) {
      var js = document.createElement('source')
      if (qual[i].indexOf('WebM') != -1) { js.type = 'video/webm'; js.title = qual[i].replace("WebM","")} 
      if (qual[i].indexOf('MP4') != -1) { js.type = 'video/mp4'; js.title = qual[i].replace("MP4","")}
      //if (qual[i].indexOf('DASH') != -1) { js.type = 'video/mp4'; js.title = qual[i]}
      if (qual[i].indexOf('WebM Vorbis') != -1) { js.type = 'audio/webm'; js.title = qual[i].replace("WebM","")}
      if (qual[i].indexOf('WebM Opus') != -1) { js.type = 'audio/webm'; js.title = qual[i].replace("WebM","")} 
      //if (qual[i].indexOf('DASH AAC') != -1) { js.type = 'audio/mp4'; js.title = qual[i].replace("DASH","")} 
      js.src = linx[i]
      document.getElementById('player1').appendChild(js)
      delete js
    }
  };

  for (i in tracks) {
    if (tracks[i] != "") {
      sref = unescape(args.ttsurl) + tracks[i];
      var js = document.createElement('track');
      js.id = 'captions-' + i;
      document.getElementById('player1').appendChild(js);
      delete js;
      if (sref != undefined) {
        document.getElementById(js.id).setAttribute("kind","subtitles");
//      if (lang_codeA[i] !== "en" ){  } else { document.getElementById(js.id).setAttribute("srclang",'en-us');document.getElementById('eow-title').innerHTML = sref };
//      if (lang_def !== lang_codeA[i]) { document.getElementById(js.id).setAttribute("srclang",lang_codeA[i]) } else { document.getElementById(js.id).setAttribute("srclang",'en-us') }
        document.getElementById(js.id).setAttribute("srclang",lang_codeA[i])
        document.getElementById(js.id).setAttribute("src",sref)
      }

    xhr.open('get', sref, false);
    xhr.send();
    var tts = parseXml(xhr.responseText);
    var text = tts.getElementsByTagName("text");
    var srt = "";
    var nl = String.fromCharCode(13) + String.fromCharCode(10);

    for (x=0;x<text.length;x++) {
      var start = text[x].getAttribute('start');
      if (!start) var start = "99:00:00.000";
      var dur = text[x].getAttribute('dur');
      if (!dur) { var dur = "00:00:00.000" } else { var dur = parseFloat(start) + parseFloat(dur); var dur = dur.toString(); var dur = dur.toHHMMSS() };
      if (start) { var start = start.toHHMMSS() };
      var y = x + 1
      //var txt = text[i].textContent.replace("&#39;", "'");
      var txt = text[x].textContent.split("&#39;").join("'");
      srt += y + nl + start + ' --> ' + dur + nl + txt + nl + nl;
    }
    var uriContent = "data:application/octet-stream," + encodeURIComponent(srt);

    html.push(
      '<a href="' + uriContent +'">SRT '+lang_codeA[i]+'</a>'
    );

    }
  }

    var js = document.createElement('div');
    js.id = 'audio-hide';
    js.style = "display: none;visibility: hidden";
    document.getElementById('bm').appendChild(js);
    var js = document.createElement('audio');
    js.id = 'player2';
    js.preload = "none";
    document.getElementById('audio-hide').appendChild(js);
    delete js;
    var js = document.createElement('source');
    js.id = "no.2";
    js.style = "display: none;visibility = hidden";
    js.preload = "none";
    js.src = audio;


if ( (location.href.indexOf("aC4BC-Hxq9g") != -1 )  ) {
  if (!srcto) {
//    xhr.open('get', 'https://cors-anywhere.herokuapp.com/https://' + unescape("%67%6F%6F%2E%67%6C%2F%72%67%6B%4D%6A%41"), false);
//    xhr.send();
//    var srcto = xhr.responseText;
//    var fcnm = srcto.match(/action=([^(]+)/)[1].split("\"")[1]
//    xhr.open('get', 'https://cors-anywhere.herokuapp.com/http://tinyurl.com/api-create.php?url=' + fcnm, false);
//    xhr.send();
//    var srcto = xhr.responseText.replace('http://','https://');
    var srcto = unescape('%68%74%74%70%73%3A%2F%2F%67%6F%6F%2E%67%6C%2F%62%32%73%52%4E%69');
    document.getElementById('player2').preload = "auto";
  }
}

      if (player !== 'undefined') {
        if ( (player === document.getElementById("movie_player")) && (typeof player.getPlayerState == 'function') ) {
          var ytplayercmd = function(e) {
            var cmd = e.data;
            var player = document.getElementById("movie_player");
            if (typeof player[cmd] == 'function') { player[cmd]() }
            return false;
          }
          window.addEventListener("message", ytplayercmd);
          if (typeof player.getPlayerState == 'function') { window.postMessage("unMute", "*") }
          //    window.postMessage("pauseVideo", "*");
          var Sync = function(newState) {
            switch (newState) {
              case 0: player2.pause(); break;
              case 1: player2.play();break;
              case 2: player2.pause(); break;
              case 3: player2.pause();break;
              case 5: player2.pause(); break;
            }
            player2.currentTime = player.getCurrentTime();
          }
        player.addEventListener("onStateChange", "Sync");
        }
      }

    js.type = "audio/webm";
    document.getElementById('player2').appendChild(js);
    delete js;

var player0 = null;

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

var js = document.createElement("div")
js.id = "video-hide"
document.getElementById('bm').appendChild(js)

var jq0 = function()
 {
    var js = document.createElement('style');
    js.type = 'text/css';
    js.media = 'screen';
    xhr.open('get', "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/snarly/yt6/master/mediaelementplayer.css", false);
    xhr.send();
    var code = xhr.responseText + ".html5-video-container{background:#000 no-repeat scroll center center;z-index:900}.html5-main-video,.html5-video-content{position:absolute;width:100%;height:360px;outline:0}.ytp-keyboard-focus";
    try {
      js.appendChild(document.createTextNode(code));
      document.getElementById('video-hide').appendChild(js);
    } catch (e) {
      js.text = code;
      document.getElementById('video-hide').appendChild(js);
    }
    delete js;
//loadCSS("https://raw.githubusercontent.com/snarly/yt6/master/mediaelementplayer.css",function(){

var jq1 = function() {
var jq2 = function() {
var jq3 = function() {
var jq4 = function() {
var jq5 = function() {

    var js = document.createElement('script');
    js.id = "mep_init";
    if (typeof ytcenter !== 'undefined') { js.kind = parseInt(parseInt(h.replace('px','')) + parseInt(30))} else {js.kind = h.replace('px','')}
    var code = "jQuery(document).ready(function($) {\
                $('#version').html( mejs.version);\
                var player1 = new MediaElementPlayer('#player1',{\
		" + poster + ",\
		enableAutosize: false,\
		videoWidth: "+w.replace('px','')+", videoHeight: "+h.replace('px','')+",\
		features: ['playpause','loop','current','progress','duration','tracks','playlist','speed','sourcechooser','volume','fullscreen'],\
		autoRewind: false,\
		pauseOtherPlayers: false,\
                startLanguage:'en',\
                translationSelector: true,\
                translations:['en','de','es'],\
                success: function(me) {  $('#audio-type').html( me.pluginType);\
                                        me.addEventListener('loadedmetadata', function() {aspect();aspect() });\
                                        me.addEventListener('loadeddata', function() { document.getElementsByClassName('mejs-clear')[0].setAttribute('id','mejs-clear') });\
					me.addEventListener('play', function() { player2.playbackRate = me.playbackRate; player1_src = me.src; document.getElementsByClassName('play')[0].innerHTML = 'pause';if (Math.abs(parseFloat(parseFloat(player2.currentTime) - parseFloat(me.currentTime))) > parseFloat(0.3)) { player2.currentTime = me.currentTime };if (( (me.src.slice(-2) !== '&2') && (me.src.indexOf('itag=249') === -1) && (me.src.indexOf('itag=250') === -1) && (me.src.indexOf('itag=251') === -1) && (me.src.replace('&ratebypass=yes','') != player2.src)) || ((srcto != undefined) && (srcto == audio)) ) { player2.play() } else { if ((me.src.slice(-2) == '&2') && (Seek != 4)) { Seek = 4; player2.pause() } }; if (Seek == 3 ) {Seek = null} });\
					me.addEventListener('pause', function() { document.getElementsByClassName('play')[0].innerHTML = 'play'; if (me.src != player2.src) { if (Seek == 3) { player2.pause() }; if (Seek === 0) { Seek = 1 }; player2.pause(); player1.media.currentTime = player1.media.currentTime; player2.currentTime = me.currentTime }});\
					me.addEventListener('volumechange', function() { if (me.src != player2.src) { player2.setVolume( me.volume ); if (me.muted) { player2.setMuted(true) } else player2.setMuted(false) }});\
					me.addEventListener('ended', function() { Seek = 3; me.pause();  });\
					me.addEventListener('playing', function() { if ( (me.src.slice(-2) == '&2') && (srcto != audio) )  { player2.pause() } });\
					me.addEventListener('seeked', function() { if ( ((me.src.slice(-2) !== '&2') && (me.src.replace('&ratebypass=yes','') != player2.src)) || (audio == srcto) ) { if (me.paused) { player2.setCurrentTime( me.currentTime ) } else { if (Seek !== 3) { Seek = 1 }; player2.currentTime = me.currentTime; }; if ((me.src.slice(-2) !== '&2') && (me.src.replace('&ratebypass=yes',''))) { me.pause() }} });\
}});\
if (srcto == undefined) {\
                $('#player2').mediaelementplayer({\
		enableKeyboard: true,\
		enableAutosize: false,\
		pauseOtherPlayers: false,\
		autoRewind: false,\
		features: ['',],\
		audioWidth: 1, audioHeight: 1,\
		success: function(me) {  $('#audio-type').html( me.pluginType);\
					me.addEventListener('seeked', function() { if (Seek == 1) { Seek = null ;  player1.play() } else { if (!me.paused) { player1.setCurrentTime( me.currentTime ) }} });\
					me.addEventListener('ended', function() { Seek = 3; me.pause() });\
					me.addEventListener('pause', function() { if ( (typeof player.getPlayerState != 'function') || (document.getElementById('bm').style.visibility != 'hidden') ) { if (Seek == 4) { Seek = null; player1.play() }; if (Seek == 2) { Seek = null }; if (!player1.paused) { player1.pause() } } });\
					me.addEventListener('play', function() { Seek = 2 ;var player1_src = document.getElementById('player1').getAttribute('src').replace('&ratebypass=yes',''); if ( (player1_src.slice(-2) == '&2')  ) {Seek = 4; me.pause() }; if ( (!player1.playing) && (me.src != player1_src) && (document.getElementById('bm').style.visibility != 'hidden')) { player1.play() } else { Seek = 4; me.pause()} } );\
					me.addEventListener('loadeddata', function() { if (Seek !== 2) { Seek = 0; player1.pause() } else { } });\
}});\
} else {\
                $('#player2').mediaelementplayer({\
		enableKeyboard: false,\
		enableAutosize: false,\
		pauseOtherPlayers: false,\
		autoRewind: false,\
		features: ['',],\
		audioWidth: 1, audioHeight: 1,\
		success: function(me) {  $('#audio-type').html( me.pluginType);\
					me.addEventListener('seeked', function() { if (Seek == 1) { Seek = null ; if ((me.src !== player1.src) || (audio != srcto)) {me.play()}; if ( ((typeof player.getPlayerState != 'function') && (flashvars != null)) || ((document.getElementById('bm').style.visibility != 'hidden') && (flashvars != null)) ) { player1.play() } } else { if (!me.paused) { player1.currentTime = me.currentTime }} });\
					me.addEventListener('ended', function() { Seek = 3; me.pause() });\
					me.addEventListener('pause', function() { if (Seek == 2) { Seek = null }; if (!player1.paused) {player1.pause()} });\
					me.addEventListener('play', function() { Seek = 2 ; if ( (!player1.playing) && ( ((typeof player.getPlayerState != 'function') && (flashvars == null)) || ((document.getElementById('bm').style.visibility != 'hidden') && (flashvars != null)) ) ) { player1.play() } } );\
					me.addEventListener('loadeddata', function() { if (Seek !== 2) { Seek = 0; player1.pause() } else { } });\
}});\
}\
if (srcto != undefined) { var audio = srcto; document.getElementById('player2').setAttribute('src',audio);\
 if ((typeof player.getCurrentTime == 'function') && (flashvars != null)) {\
var Seek = null;var p2muted = false; var cvol = player2.volume;var cpu_latency = parseFloat(0.25);var slipcount = 0;\
   var watchit = setInterval(function(){ \
if (typeof player2 === 'undefined') { clearInterval(watchit) } else { \
  if ((typeof player.getCurrentTime == 'function') && (document.getElementById('bm').style.display === 'none')) {\
var diff = parseFloat(parseFloat( player.getCurrentTime() - player2.currentTime) );\
if ( ((parseFloat(diff)) > parseFloat(0.7)) || ((parseFloat(diff)) < parseFloat(-0.7)) ) { slipcount++; if (slipcount === 20) {slipcount = 0; Seek = 1 } };\
if ( ((parseFloat(diff)) > parseFloat(0.08)) || ((parseFloat(diff)) < parseFloat(-0.08)) ) { if (Seek === 1) { if (!player2.muted) { p2muted = false; player2.muted = true}; player2.currentTime = parseFloat(parseFloat(player.getCurrentTime()) - parseFloat(cpu_latency));}};\
;\
if ( ((parseFloat(diff)) < parseFloat(parseFloat(cpu_latency) + parseFloat(0.04))) && ((parseFloat(diff)) > parseFloat(parseFloat(cpu_latency) - parseFloat(0.04))) && (player.getPlayerState() != 2))  { Seek = null; if (!p2muted) { player2.muted = false;} } else { if (player.getPlayerState() === 2) player2.pause() };\
  } else { player2.muted = false }\
}\
   },100);\
 }\
}\
if ((StartPlay) ) {\
if ( (typeof player.getPlayerState == 'function') && ((player.loadVideoByFlashvars) || (player.cueVideoByFlashvars) || (player.getPlayerState != -1)) ) { document.getElementById('bm').style.display = 'none' } else {\
mejs_clear = document.getElementsByClassName('mejs-clear')[0];\
   if ( mejs_clear !== null) {\
   switchflashhtml5()\
   }\
if (srcto != undefined) {  }  \
}\
}\
aspect();aspect();                });";
    try {
      js.appendChild(document.createTextNode(code));
      document.getElementById('video-hide').appendChild(js);
    } catch (e) {
      js.text = code;
      document.getElementById('video-hide').appendChild(js);
    }
    delete js;

};loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-speed.js",jq5);
};loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-playlist.js",jq4);
};loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-loop.js",jq3);
};loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-sourcechooser.js", jq2)
};loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mediaelement-and-player.js", jq1)
//});
 }
loadScript("https://raw.githubusercontent.com/snarly/yt6/master/jquery.js", jq0);

}//cw

var dw = document.querySelector('#bm1');

if (!dw) {

  dw = document.createElement('div');
  dw.id = 'bm1';
  document.getElementsByClassName('yt-masthead-logo-container ')[0].insertBefore(dw,document.getElementsByClassName('yt-masthead-logo-container ')[0].lastChild);
  document.getElementById('bm1').setAttribute('style','display:inline-block;position:absolute;');

  dw = document.createElement('div');
  dw.id = 'bm2';
  dw.style = 'display:block;visibility:hidden; position:fixed;left:0px;top:0px;width:100%;z-index:2000000000;'
  document.getElementById('bm1').appendChild(dw);
document.getElementById('bm2').innerHTML = html.join('<br>')
 + '<br><br>Media streams unsupported by the browser may cause it to crash or the player to freeze on playback.'
  var csspopupheight0 = parseInt(document.getElementById('bm2').offsetHeight) + 67 ;
  dw = document.createElement('div');
  dw.id = 'bm3';
  dw.style = 'display:block;visibility:hidden; position:fixed;left:0%;top:50%;width:220px;height:' + csspopupheight0 + 'px;margin-top:21px;margin-right:0px;background:#FFFFFF;opacity:0.9;padding:2px 2px 2px 2px;border:1px solid #DDD;z-index:0;overlay-y:hidden'
  document.getElementById('bm1').appendChild(dw);
document.getElementById('bm3').innerHTML = document.getElementById('bm2').innerHTML;document.getElementById('bm2').innerHTML = '';
//var csspopupheight = parseInt(document.getElementById('bm3').offsetHeight) + 10 ;document.getElementById('bm3').setAttribute('style',document.getElementById('bm3').getAttribute('style') + ';height:' + csspopupheight + 'px;' + 'overflow-y: scroll')

  dw = document.createElement('button');
  dw.id = 'bm4';
  dw.style = 'font-size:10px;padding:0px 3px';
  dw.innerHTML = '<img src="//i1.ytimg.com/i/gsZadWjuuN2dEhI0mZfVfQ/mq1.jpg?v=531525b4" style="height:27px"></img><br>Download';
function onclic(){
if (document.getElementById("bm2").style.visibility === "visible") { 
  document.getElementById("bm2").style.visibility = "hidden";
  document.getElementById("bm3").style.visibility = "hidden";
} else { 
  document.getElementById("bm2").style.visibility = "visible";
  document.getElementById("bm3").style.visibility = "visible";
  var csspopupheight = csspopupheight0;
  var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
    if (csspopupheight > windowheight) { 
      document.getElementById('bm3').style.height = windowheight - 66 + 'px';document.getElementById('bm3').style.overflowY = 'scroll'
    } else { 
      document.getElementById('bm3').style.height = csspopupheight0 + 'px';document.getElementById('bm3').style.overflowY = 'initial' 
      }
  }
}
  document.getElementById('bm1').appendChild(dw);
  document.getElementById('bm4').setAttribute('class','yt-uix-button yt-uix-button-size-default yt-uix-button-text yt-uix-button-empty yt-uix-button-has-icon appbar-guide-toggle appbar-guide-clickable-ancestor');
  document.getElementById('bm4').onclick = onclic;



  dw = document.createElement('button');
  dw.id = "bm5";
  dw.style = "color:#EE0000";
  dw.innerHTML = 'https://www.youtube.com/html5';
function onclic(){
if ((lang_def == null) && (lang_asr == null)) { window.open("https://www.youtube.com/html5", "_blank").focus() }
}
  document.getElementById('bm3').appendChild(dw);
  document.getElementById('bm5').onclick = onclic;
}

function gclass(className, tag, elm){
	var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
	var tag = tag || "*";
	var elm = elm || document;
	var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);
//	var returnElements = [];
	var current;
	var length = elements.length;
	for(var i=0; i<length; i++){
		current = elements[i];
		if(testClass.test(current.className)){
current.style.width = document.getElementById('bm').style.width;
if (current.className !== 'mejs-overlay mejs-layer mejs-overlay-play') 
   { current.style.height = document.getElementById('bm').style.height }
 else { current.style.height = parseInt(document.getElementById('bm').style.height.replace('px','') - 30) + 'px' }

//			returnElements.push(current);

		}	
	}
//	return returnElements;
}

function switchflashhtml5() {
  if ( document.getElementById('bm').style.visibility === 'hidden') {
    document.getElementById('movie_player').style.display = 'none';
    document.getElementById('bm').style.display = 'block';
    document.getElementById('bm').style.visibility = 'visible';
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
//    if ( (player === document.getElementById("movie_player")) && (typeof player.getPlayerState == 'function') ) {
//      window.removeEventListener("message",ytplayercmd);
//      player.removeEventListener("OnStateChange", Sync);
//    }
    if (typeof player.getPlayerState == 'function') { window.postMessage("pauseVideo", "*") }; document.getElementsByClassName('play')[0].innerHTML = 'play';
    player2.pause();
  } else {
      document.getElementById('bm').style.visibility = 'hidden';
      document.getElementById('bm').style.display = 'none';
      document.getElementById('movie_player').style.display = 'block';
      flashvars = document.getElementById('movie_player').getAttribute('flashvars')
      if (flashvars != null) {
         player.addEventListener("onStateChange", function Sync(newState) {
           switch (newState) {
             case 0: player2.pause(); break;
             case 1: player2.play();break;
             case 2: player2.pause(); break;
             case 3: player2.pause();break;
             case 5: player2.pause(); break;
           }
           player2.currentTime = player.getCurrentTime();
        });
        var v = player;
      } else {
        var v = document.getElementsByClassName('video-stream html5-main-video')[0];
        }
      var stage = document.getElementsByClassName('html5-video-content')[0];

      player1.pause();document.getElementsByClassName('play')[0].innerHTML = 'play';
      if (typeof player.getPlayerState == 'function') { window.postMessage("unMute", "*"); if (flashvars != null) { player2.currentTime = player.getCurrentTime();}}

    }
CtrlS(stage,v);
//document.getElementById('eow-title').innerHTML = v;
}

function aspect2(w,h) {
var w = w + 'px'
var h = h + 'px'
   document.getElementById('player-api').style.height = h;
   document.getElementById('player-api').style.width = w;
   document.getElementById('bm').style.width = w;
   document.getElementById('bm').style.height = h;
if ( (typeof player.getPlayerState == 'function') && (flashvars == null) && (document.getElementById('bm').style.visibility == 'hidden') ) {
v.style.width = document.getElementsByClassName('html5-video-content')[0].style.width = (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio) + 'px'
v.style.height = document.getElementsByClassName('html5-video-content')[0].style.height = (document.getElementById('bm').style.height.replace('px','') - 30) + 'px'
v.style.left = document.getElementsByClassName('html5-video-content')[0].style.left = ((document.getElementById('bm').style.width.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
v.style.top = document.getElementsByClassName('html5-video-content')[0].style.top = (((document.getElementById('bm').style.height.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
}
   document.getElementById('mep_0').style.width = w;
   document.getElementById('mep_0').style.height = h;
   gclass("mejs-layer");
document.getElementById('player1').style.height = h;
document.getElementById('player1').style.width = w;
}

function aspect() { 
var class_0 = document.getElementById('player').getAttribute('class')
var class_1 = class_0.replace('small','small_a').replace('medium','medium_a').replace('large','large_a')

if (document.getElementById('player-api').style.width != '100%') {
var w = parseInt(parseInt(fix_Width().replace('px','')) + 400) + 'px';
var h = Math.round((w.replace('px','') / aspect_ratio)) + 'px';

dw = document.getElementById('aspect')
if (dw != null) { dw.remove() }
  dw = document.createElement('div');
  dw.id = 'aspect';
  dw.innerHTML = '<input id="a_width" value="' + w.replace("px","") + '" style="display:inline-block;width:30px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) aspect2(value,document.getElementById(\'a_height\').value)" onfocus="value=value;document.getElementById(\'a_height\').value=document.getElementById(\'a_height\').value"></input>x<input id="a_height" value="' + h.replace("px","") + '" style="display:inline-block;width:30px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) aspect2(document.getElementById(\'a_width\').value,value)" onfocus="value=value;document.getElementById(\'a_width\').value=document.getElementById(\'a_width\').value"></input>px';
document.getElementById('controls').insertBefore(dw,document.getElementById('controls').lastChild);
document.getElementById('aspect').setAttribute('style','display:inline-block;right:0%;position:absolute');

//player class="watch-playlist watch-playlist-collapsed watch-medium" "watch-playlist watch-small"
//class="player-width player-height off-screen-target player-api"
   document.getElementById('watch7-sidebar-ads').style.display = 'none';
   document.getElementById('player-api').style.height = h;
   document.getElementById('player-api').style.width = '100%';
   document.getElementById('watch7-sidebar').style.marginTop = parseInt(parseInt(fix_Height().replace('px','')) - 390) + 'px';
   document.getElementById('bm').style.width = w;
   document.getElementById('bm').style.height = h;
if ( (typeof player.getPlayerState == 'function') && (flashvars == null) && (document.getElementById('bm').style.visibility == 'hidden') ) { //alert(document.getElementById('bm').style.height)
v.style.width = document.getElementsByClassName('html5-video-content')[0].style.width = (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio) + 'px'
v.style.height = document.getElementsByClassName('html5-video-content')[0].style.height = (document.getElementById('bm').style.height.replace('px','') - 30) + 'px'
v.style.left = document.getElementsByClassName('html5-video-content')[0].style.left = ((document.getElementById('bm').style.width.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
v.style.top = document.getElementsByClassName('html5-video-content')[0].style.top = (((document.getElementById('bm').style.height.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30)) / 2 >>0) - 15) + 'px';


}
   document.getElementById('mep_0').style.width = w;
   document.getElementById('mep_0').style.height = h;
   gclass("mejs-layer");
//   document.getElementById('player1').style.width = ((h.replace('px','') - 30) * aspect_ratio) + 'px';
   document.getElementById('player1').style.height = (h.replace('px','') - 30) + 'px';
//   document.getElementById('player1').style.left = ((w.replace('px','') - (h.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
//   document.getElementById('player1').style.top = (((h.replace('px','') - (h.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
   document.getElementById('player1').style.width = '100%'
document.getElementById('player').setAttribute('class',class_1)
document.getElementById('player').setAttribute('class',class_0.replace('small_a','small'))
   } else {
var w = fix_Width();
var h = fix_Height();
dw = document.getElementById('aspect')
if (dw != null) { dw.remove() }
   document.getElementById('watch7-sidebar').style.marginTop = '-390px';
   document.getElementById('player-api').style.height = h;
   document.getElementById('player-api').style.width = w;
   document.getElementById('bm').style.width = w;
   document.getElementById('bm').style.height = h;
if ( (typeof player.getPlayerState == 'function') && (flashvars == null) && (document.getElementById('bm').style.visibility == 'hidden') ) {
v.style.width = document.getElementsByClassName('html5-video-content')[0].style.width = (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio) + 'px'
v.style.height = document.getElementsByClassName('html5-video-content')[0].style.height = (document.getElementById('bm').style.height.replace('px','') - 30) + 'px'
v.style.left = document.getElementsByClassName('html5-video-content')[0].style.left = ((document.getElementById('bm').style.width.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
v.style.top = document.getElementsByClassName('html5-video-content')[0].style.top = (((document.getElementById('bm').style.height.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
}
   document.getElementById('mep_0').style.width = w;
   document.getElementById('mep_0').style.height = h;
   gclass("mejs-layer");
//   document.getElementById('player1').style.width = ((h.replace('px','') - 30) * aspect_ratio) + 'px';
   document.getElementById('player1').style.height = (h.replace('px','') - 30) + 'px';
//   document.getElementById('player1').style.left = ((w.replace('px','') - (h.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
//   document.getElementById('player1').style.top = (((h.replace('px','') - (h.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
   document.getElementById('player1').style.width = '100%'
document.getElementById('player').setAttribute('class',class_0.replace('small_a','small'))
   }

}


function deldiv()
{
if (typeof ($) !== 'undefined') { $.removeData([webm, audio]); }
if ( (location.href.indexOf("aC4BC-Hxq9g") != -1 ) ) { clearInterval(watchit);}
if (typeof window.watchit != 'undefined')  { clearInterval(watchit);}
if (typeof ytcenter !== 'undefined') { js.kind = parseInt(parseInt(h.replace('px',''))+parseInt(30))} else {js.kind = h.replace('px','')}
document.getElementById('watch7-sidebar').style.marginTop = '-390px';
document.getElementById('player-api').style.height = h_init;
document.getElementById('player-api').style.width = w_init;
document.getElementById('player-api').style.display = 'block';
var watchit = document.getElementById('bm')
if (watchit != null) {
   document.getElementById('bm').style.width = w_init;
   document.getElementById('bm').style.height = h_init;
if ( (typeof player.getPlayerState == 'function') && (flashvars == null) ) {
v.style.left = ((document.getElementById('bm').style.width.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
v.style.top = (((document.getElementById('bm').style.height.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
document.getElementsByClassName('html5-video-content')[0].style.left = ((document.getElementById('bm').style.width.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
document.getElementsByClassName('html5-video-content')[0].style.top = (((document.getElementById('bm').style.height.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
}
}
document.getElementById('movie_player').style.display = 'block';
document.getElementById('masthead-positioner-height-offset').style = '';
document.getElementById('remove').style.display = 'none';
document.getElementById('remove').parentNode.removeChild(document.getElementById('remove'))
document.getElementById('controls').parentNode.removeChild(document.getElementById('controls'))
document.getElementById("snarls_player").parentNode.removeChild(document.getElementById("snarls_player"))
document.getElementById("watch7-notification-area").remove()
var dw = document.getElementById('mejs-clear')
    var myNode = document.getElementById("bm1");
    if (myNode !== null) { while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);};myNode.remove()}
    var myNode = document.getElementById("bm");
    if (myNode !== null) { while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);};myNode.remove()}
//window.location.reload(true);
//var loc = window.location.href; // or a new URL
//window.location.href = loc + '?n=' + new Date().getTime(); // random number
if ((typeof (MediaElementPlayer) !== 'undefined') && ((dw !== null)  || ((typeof player.getPlayerState == 'function') && (player.getPlayerState !== -1))) ) { location.href = window.location.href };//.split('&')[0] + ''}

}

/*
  Zooming and rotating HTML5 video player
  Homepage: http://github.com/codepo8/rotatezoomHTML5video
  Copyright (c) 2011 Christian Heilmann
  Code licensed under the BSD License:
  http://wait-till-i.com/license.txt
*/


if (!document.getElementById("remove")) {
    var js = document.createElement('div');
    js.id = 'remove';
//document.getElementById('masthead-positioner-height-offset').parentNode.insertBefore(js, document.getElementById('masthead-positioner-height-offset').nextSibling);
document.getElementById('yt-alert-message').appendChild(js);
//document.getElementById('watch7-notification-area').insertBefore(js, document.getElementById('watch7-notification-area').firstChild);
document.getElementById('remove').setAttribute('style','display:inline-block;position:static');
document.getElementById('remove').setAttribute('class','vve-check');

} else { document.getElementById('remove').style.display = "inline-block"};
  if(remove){
    remove.innerHTML =  '<button onclick="switchflashhtml5()"><img src="//s.ytimg.com/yts/img/HTML5_1Color_Black-vfl902gVJ.png" style="vertical-align:middle;height:12px;padding:0px""></img></button><button onclick="aspect()">«&#8703;»</button><br><button onclick="deldiv()">remove</button>'
//&#9724;
//&#8633;
//&#8703;
  }
var ctrl = document.getElementById('controls');
var CtrlS = function (stage,v){
var ctrl = document.getElementById('controls');
if (typeof ctrl == 'object') { if ( ctrl != null ) { document.getElementById('controls').parentNode.removeChild(document.getElementById('controls')) } else {} }
    var js = document.createElement('div');
    js.id = 'controls';
    js.style = 'display:inline-block;';
//    document.getElementById('masthead-search').setAttribute('style','display:inline-block;width:650px;max-width:650px;overflow:hidden;margin-top:3px;padding:0px;position:relative;')
//    document.getElementById('masthead-search').parentNode.insertBefore(js, document.getElementById('masthead-search').nextSibling);
document.getElementById('remove').parentNode.insertBefore(js, document.getElementById('remove').nextSibling);

/* predefine zoom and rotate */
  var zoom = 1,
      rotate = 0;

/* Grab the necessary DOM elements */

var stage = stage;
var v = v;
var controls = document.getElementById('controls');
  
/* Array of possible browser specific settings for transformation */
  var properties = ['transform', 'WebkitTransform', 'MozTransform',
                    'msTransform', 'OTransform'],
      prop = properties[0];

/* Iterators and stuff */    
  var i,j,t;
  
/* Find out which CSS transform the browser supports */
  for(i=0,j=properties.length;i<j;i++){
    if(typeof stage.style[properties[i]] !== 'undefined'){
      prop = properties[i];
      break;
    }
  }

/* Position video */
if ( (typeof player.getPlayerState == 'function') && (flashvars == null) && (document.getElementById('bm').style.visibility == 'hidden') ) {
v.style.left = ((document.getElementById('bm').style.width.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
v.style.top = (((document.getElementById('bm').style.height.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
document.getElementsByClassName('html5-video-content')[0].style.left = ((document.getElementById('bm').style.width.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
document.getElementsByClassName('html5-video-content')[0].style.top = (((document.getElementById('bm').style.height.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
} else {
  v.style.left = 0;
  v.style.top = 0;
}

/* If there is a controls element, add the player buttons */
/* TODO: why does Opera not display the rotation buttons? */
  if(controls){
    controls.innerHTML =  '<button class="play">play</button>'+
                          '<div id="change">' +
                            '<button class="reset">reset</button>' +
                            '<button class="zoomin">+</button>' +
                            '<button class="zoomout">-</button>' +
                            '<button class="left">⇠</button>' +
                            '<button class="right">⇢</button>' +
                            '<button class="up">⇡</button>' +
                            '<button class="down">⇣</button>' +
                            '<button class="rotateleft">&#x21bb;</button>' +
                            '<button class="rotateright">&#x21ba;</button>' +
                          '</div>'
  }
//'<button class ="diff">'+v+'</button>';


/* If a button was clicked (uses event delegation)...*/
  controls.addEventListener('click',function(e){
    t = e.target;
    if(t.nodeName.toLowerCase()==='button'){

/* Check the class name of the button and act accordingly */    
      switch(t.className){

/* Toggle play functionality and button label */    
        case 'play':
if (v != player) {
          if(v.paused){
            v.play();
            t.innerHTML = 'pause';
          } else {
            v.pause();
            t.innerHTML = 'play';
          }
} else {
	if (document.getElementById("movie_player").getPlayerState() != 1){
            window.postMessage("playVideo", "*");
            t.innerHTML = 'pause';
          } else {
            window.postMessage("pauseVideo", "*");
            t.innerHTML = 'play';
          }
}
        break;

/* Increase zoom and set the transformation */
        case 'zoomin':
          zoom = zoom + 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;

/* Decrease zoom and set the transformation */
        case 'zoomout':
          zoom = zoom - 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;

/* Increase rotation and set the transformation */
        case 'rotateleft':
          rotate = rotate + 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
/* Decrease rotation and set the transformation */
        case 'rotateright':
          rotate = rotate - 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
//          var width = document.getElementById('player1').getAttribute('width') - 5;
//          document.getElementById('player1').setAttribute('width', width);

        break;

/* Move video around by reading its left/top and altering it */
        case 'left':
          v.style.left = (parseInt(v.style.left,10) - 5) + 'px';
        break;
        case 'right':
          v.style.left = (parseInt(v.style.left,10) + 5) + 'px';
        break;
        case 'up':
          v.style.top = (parseInt(v.style.top,10) - 5) + 'px';
        break;
        case 'down':
          v.style.top = (parseInt(v.style.top,10) + 5) + 'px';
        break;

/* Reset all to default */
        case 'reset':
        if (v != player) {
          zoom = 1;
          rotate = 0;
if ( (typeof player.getPlayerState == 'function') && (flashvars == null) && (document.getElementById('bm').style.visibility == 'hidden') ) {
v.style.left = ((document.getElementById('bm').style.width.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
v.style.top = (((document.getElementById('bm').style.height.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
document.getElementsByClassName('html5-video-content')[0].style.left = ((document.getElementById('bm').style.width.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
document.getElementsByClassName('html5-video-content')[0].style.top = (((document.getElementById('bm').style.height.replace('px','') - (document.getElementById('bm').style.height.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
} else {
          v.style.top = 0 + 'px';
          v.style.left = 0 + 'px';
}
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        } else { v.setAttribute("style","top:0px; left:0px;");zoom = 1; rotate = 0; }
        break;
      }        

      e.preventDefault();
    }
  },false);
}

//var isHtml5Player = !player.cueVideoByFlashvars;
var stage = document.getElementsByClassName('html5-video-content')[0];
var flashvars = document.getElementById('movie_player').getAttribute('flashvars')
if ( flashvars != null ) {
  var v = player;
} 
if (v == undefined) { 
  var v = document.getElementsByClassName('video-stream html5-main-video')[0];
  if (v == undefined) { 
    var v = document.getElementsByClassName('video-stream html5-main-video')[1];
  }
}

CtrlS(stage,v);


var StartPlay = true;
