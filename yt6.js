
function qr(sr) {
  var qa = [];
  for (var prs of sr.split('&')) {
    var pra = prs.split('=');
    qa[pra[0]] = pra[1];
  };
  return qa;
}

function get_quality(url) {
  var qual = {
    5: '240p FLV H.263',
    17: '144p 3GP MPEG-4',
    18: '360p MP4 H.264',
    22: '720p MP4 H.264',
    34: '360p FLV H.264',
    35: '480p FLV H.264',
    36: '240p 3GP MPEG-4',
    37: '1080p MP4 H.264',
    43: '360p WebM VP8',
    44: '480p WebM VP8',
    45: '720p WebM VP8',
    46: '1080p WebM VP8',
    82: '360p MP4 3D',
    84: '720p MP4 3D',
    100: '360p WebM 3D',
    102: '720p WebM 3D',
    133: '240p DASH H.264',
    134: '360p DASH H.264',
    135: '480p DASH H.264',
    136: '720p DASH H.264',
    137: '1080p DASH H.264',
    139: '48k DASH AAC',
    140: '128k DASH AAC',
    141: '256k DASH AAC',
    160: '192p DASH H.264',
    171: '128k DASH Vorbis',
    172: '192k DASH Vorbis'
  };
  var qs = qr(url);
  return qual[qs.itag] || itag
}

function rp(tx) {
  return tx.replace('"', '&quot;', 'g');
}

function dc(sg) {
  return eval(fcnm + '("' + sg + '")');
}

var args = ytplayer.config.args;
var html = ['<br>' + '<br>' + '<br>' + '<br>' +
  new Date().toLocaleString(),
  'Click to copy the filename, then right click to download'
];

var xhr = new XMLHttpRequest();
/* YouTube Video and Audio Downloader Firefox Add-on uses this US-based IP address => 199.116.175.50 to download when connecting through (US) proxy 24.38.63.26:80 */
/* cors-anywhere.herokuapp.com */
/* In----- about:config */
/* To---- noscript.inclusionTypeChecking.exceptions */
/* Add-- https://raw.github.com/svnpenn/bm/gh-pages/yt.js */
px = 'allow-any-origin.appspot.com/https:';
xhr.open('get', 'https://' + px + ytplayer.config.assets.js, false);
xhr.send();
var rpt = xhr.responseText;
var fcnm = rpt.match(/signature=([^(]+)/)[1];
var fs = new RegExp('function ' + fcnm + '[^}]+}[^}]+}');
eval(rpt.match(fs)[0]);

for (var ft of [args.url_encoded_fmt_stream_map, args.adaptive_fmts]) {
  for (var z of ft ? ft.split(',') : '') {
    var qq = get_quality(z);
    var qs = qr(z);
    var href = unescape(qs.url)
//.replace("https://","http://");
    if (qs.sig)
      href += '&signature=' + qs.sig;
    if (qs.s)
      href += '&signature=' + dc(qs.s);
if (qq.indexOf("360p WebM VP8") != -1) { var webm = href };
    if ((qq.indexOf("MP4") == -1) && (qq.indexOf("WebM") == -1)) {
      href += '&ratebypass=yes';}
    var fn = (args.title + '-' + qq).toLowerCase()
             .replace(/["&().|]/g,'')
             .replace(/ /g,'-')
             .replace(/-+/g,'-');
    var onclick = 'prompt("","' + fn + '.avi");return false';
    html.push(
      '<a href="' + href + '" onclick="' + rp(onclick) + '">' + qq + '</a>'
    );
  }
}
;
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


for (var ft of [args.ttsurl]) {
  for (var z of ft ? ft.split(',') : '') {
    var sref = unescape(z) + '&type=list&asrs=1';
//      sref += '&type=track&lang=en&name&kind&fmt=1';
//      sref += '&type=list&tlangs=1&fmts=0&asrs=1';
xhr.open('get', sref, false);
xhr.send();
var tts = parseXml(xhr.responseText);
var array = [lang_code, name, kind, lang_default];
var text = tts.getElementsByTagName("track");
var tracks = [];
for (b=0;b<text.length;b++)
 {
 var surl = "";
  var lang_code = text[b].getAttribute('lang_code'); if (lang_code) { surl += '&lang=' + lang_code };
  var name = text[b].getAttribute('name'); if (name) { surl += '&name=' + name } else { surl += '&name' };
  var kind = text[b].getAttribute('kind'); if (kind) { surl += '&kind=' + kind } else { surl += '&kind' };
  var lang_default = text[b].getAttribute('lang_default'); if (lang_default) { surl += '&type=track&fmt=1'; var track = surl };
  var id = text[b].getAttribute('id'); if (id) { tracks[id] = surl };
 }
if (!lang_default) { var a=0; do { if ((!track) && (tracks[a] != "undefined")) { var track = tracks[a]}; a++; } while (a<100)};
}

  for (var z of ft ? ft.split(',') : '') {
    var sref = unescape(z) + track;

xhr.open('get', sref, false);
xhr.send();
var tts = parseXml(xhr.responseText);
var text = tts.getElementsByTagName("text");
var srt = "";
var nl = String.fromCharCode(13) + String.fromCharCode(10);

for (i=0;i<text.length;i++)
{
var start = text[i].getAttribute('start');
if (!start) var start = "99:00:00.000";
var dur = text[i].getAttribute('dur');
if (!dur) { var dur = "00:00:00.000" } else { var dur = parseFloat(start) + parseFloat(dur); var dur = dur.toString(); var dur = dur.toHHMMSS() };
if (start) { var start = start.toHHMMSS() };
var j = i + 1
var txt = text[i].textContent.replace("&#39;", "'");
srt += j + nl + start + ' --> ' + dur + nl + txt + nl + nl;
}
uriContent = "data:application/octet-stream," + encodeURIComponent(srt);
// newWindow=window.open(uriContent, 'neuesDokument');
// location.sref = uriContent;
//'<a sref="data:application/octet-stream;charset=utf-8;base64,uriContent==">text file</a>'
    html.push(
      '<a href="' + sref +'">CC</a><br>' + 
      '<a href="' + uriContent +'">SRT</a><br>'
    );

  }
}

var dw = document.querySelector('#bm');

if (!dw) {
  dw = document.createElement('div');
  dw.id = 'bm';
  document.body.insertBefore(dw, document.body.firstChild);
}

dw.innerHTML = html.join('<br>');



function loadScript(url, callback)
 {
var js = document.createElement("script");
js.type = "text/javascript";
//js.src = "https://raw.github.com/johndyer/mediaelement/master/build/jquery.js";
js.src = url;
js.onreadystatechange = callback;
js.onload = callback;
document.body.appendChild(js);
 }

function loadCSS(url, callback)
 {
var js = document.createElement("link");
js.type = "text/css";
//"https://raw.github.com/johndyer/mediaelement/master/build/mediaelementplayer.css"
js.href = url;
js.rel = "Stylesheet";
js.onreadystatechange = callback;
js.onload = callback;
document.body.appendChild(js);
 }

var jqs = function()
 {
$.getScript("https://localhost/svn/mediaelement-and-player1.js", function(){


var jqs1 = function()
 {

    var js = document.createElement('style');
    js.type = 'text/css';
    js.media = 'screen';

    var code = "#stage{background:#eee;width:84%;height:360px;\
         position:relative;margin:2em 0;\
         margin-left:auto;\
         margin-right:auto;}\
  video{width:640px;height:360px;position:absolute;top:0;left:0;}\
  #controls{position:relative;width:-100px;}\
  #change{position:absolute;right:-100px;top:-300px;width:100px;}\
  button{font-size:150%;text-align:center;display:block;}\
  #change button{width:60px;border:none;background:#fff;}";
    try {
      js.appendChild(document.createTextNode(code));
      document.body.appendChild(js);
    } catch (e) {
      js.text = code;
      document.body.appendChild(js);
    }

    delete js;
}
//js.href = "https://raw.github.com/johndyer/mediaelement/master/build/mediaelementplayer.css";
loadCSS("https://localhost/svn/mediaelementplayer.css",jqs1);
});
var dw = document.querySelector('#stage');
if (!dw) {
    var js = document.createElement('div');
    js.id = 'stage';
    document.body.insertBefore(js, document.body.firstChild);
    var js = document.createElement('video');
    js.id = 'player1';
    js.width = '640';
    js.height = '360';
//    js.style = 'width: 100%; height: 100%;';
    js.controls = 'controls';
    js.preload = "none";
    document.getElementById('stage').appendChild(js);
    delete js;
    var js = document.createElement('source');
    js.id = 'no.1';
    js.src = webm;
    js.type = 'video/ogg';
    js.title = 'ogg';
    document.getElementById('player1').appendChild(js);
    delete js;
    var js = document.createElement('track');
    js.srclang = lang_code;
    js.src = 'https://localhost/svn/0.srt';
    js.kind = 'subtitles';
    document.getElementById('player1').appendChild(js);
    delete js;

    var js = document.createElement('script');
    var code = "jQuery(document).ready(function($) {\
                $('#version').html( mejs.version);\
                $('audio').mediaelementplayer({audioWidth: 380, success: function(me) {  $('#audio-type').html( me.pluginType); }});\
                var player = new MediaElementPlayer('#player1', {\
                poster: 'https://i1.ytimg.com/vi/' + args.video_id + '/0.jpg',\
                startLanguage:'en',\
                translationSelector: true,\
                translations:['en','de','es'],\
                });\
                });";
    try {
      js.appendChild(document.createTextNode(code));
      document.body.appendChild(js);
    } catch (e) {
      js.text = code;
      document.body.appendChild(js);
    }
    delete js;
    var js = document.createElement('div');
    js.id = 'controls';
    document.getElementById('stage').appendChild(js);
}

//var js = document.createElement("script");
//js.type = "text/javascript";
//js.src = "http://isithackday.com/hacks/videozoomandrotate/transformvideo.js";
//js.src = "https://raw.github.com/codepo8/rotatezoomHTML5video/master/transformvideo.js";
//document.body.appendChild(js);
//$.getScript("https://gist.github.com/codepo8/784635.js", function(){});

$.getScript("https://localhost/svn/transformvideo.js", function(){});


 };
loadScript("https://localhost/svn/jquery.js", jqs);



  window.onload = function() {

    var js = document.createElement('script');
    js.type = 'text/javascript';
    var code = '';
    try {
      js.appendChild(document.createTextNode(code));
      document.body.appendChild(js);
    } catch (e) {
      js.text = code;
      document.body.appendChild(js);
    }
  }
eval(window.onload());
alert(args.title);
//var el = document.getElementById( 'stage' );
//el.parentNode.removeChild( el );
//$('#stage').remove();
//document.getElementById("image").src="landscape.jpg";

//remove1:
//var myNode = document.getElementById("foo");
//while (myNode.firstChild) {
//    myNode.removeChild(myNode.firstChild);
//}

//remove2:
//$('#foo').empty();

