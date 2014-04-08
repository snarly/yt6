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
    5: '240p FLV H.263 + 64k MP3',
    17: '144p 3GP MPEG-4 + 24k AAC',
    18: '360p MP4 H.264 + 96k AAC',
    22: '720p MP4 H.264 + 192k AAC',
    34: '360p FLV H.264',
    35: '480p FLV H.264',
    36: '240p 3GP MPEG-4 + 36k AAC',
    37: '1080p MP4 H.264',
    43: '360p WebM VP8 + 128k Vorbis',
    44: '480p WebM VP8',
    45: '720p WebM VP8',
    46: '1080p WebM VP8',
    82: '360p MP4 3D + 96k AAC',
    84: '720p MP4 3D + 192k AAC',
    100: '360p WebM 3D + 128k Vorbis',
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
    172: '192k DASH Vorbis',
    242: '240p WebM VP9',
    243: '360p WebM VP9',
    244: '480p WebM VP9',
    245: '480p WebM VP9',
    246: '480p WebM VP9',
    247: '720p WebM VP9',
    248: '1080p WebM VP9'
  };
  var qs = qr(url);
  return qual[qs.itag] || qs.itag
}

function rp(tx) {
  return tx.replace('"', '&quot;', 'g');
}

function dc(sg) {
  var xhr = new XMLHttpRequest();
  /* cors-anywhere.herokuapp.com */
  px = 'allow-any-origin.appspot.com/https:';
  xhr.open('get', 'https://' + px + ytplayer.config.assets.js, false);
  xhr.send();
  var rpt = xhr.responseText;
  var fcnm = rpt.match(/signature=([^(]+)/)[1];
  var fs = new RegExp('function ' + fcnm + '[^}]+}[^}]+}');
  eval(rpt.match(fs)[0]);
  return eval(fcnm + '("' + sg + '")');
}

var args = ytplayer.config.args;
var html = ['<br>' + '<br>' + '<br>' + '<br>' +
  new Date().toLocaleString(),
  'Click to copy the filename, then right click to download'
];


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
    if ((qq.indexOf("MP4") == -1) && (qq.indexOf("VP8") == -1)) {
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
var txt = text[i].textContent.split("&#39;").join("'");
srt += j + nl + start + ' --> ' + dur + nl + txt + nl + nl;
}
uriContent = "data:application/octet-stream," + encodeURIComponent(srt);
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


function deldiv()
{
    var myNode = document.getElementById("bm");
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
}

function loadScript(url, callback)
 {
var js = document.createElement("script");
js.type = "text/javascript";
js.src = url;
js.onreadystatechange = callback;
js.onload = callback;
document.body.appendChild(js);
 }

function loadCSS(url, callback)
 {
var js = document.createElement("link");
js.type = "text/css";
js.href = url;
js.rel = "Stylesheet";
js.onreadystatechange = callback;
js.onload = callback;
document.body.appendChild(js);
 }

var jqs = function()
 {
$.getScript("https://raw.github.com/johndyer/mediaelement/master/build/mediaelement-and-player.js", function(){


var jqs1 = function()
 {

    var js = document.createElement('style');
    js.type = 'text/css';
    js.media = "screen";

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
loadCSS("https://raw.github.com/johndyer/mediaelement/master/build/mediaelementplayer.css",jqs1);
});

var dw = document.querySelector('#stage');
if (!dw) {
    var js = document.createElement('div');
    js.id = 'band';
    js.style = 'background:#111;width:100% !important;height:100% !important;\
         position:relative;\
         margin-left:auto;\
         margin-right:auto;'
    document.getElementById('bm').insertBefore(js, document.getElementById('bm').firstChild);
    var js = document.createElement('div');
    js.id = 'stage';
    js.style = 'background:#111;width:84%;height:360px;\
         position:relative;margin:2em 0;\
         margin-left:auto;\
         margin-right:auto;'
    document.getElementById('band').insertBefore(js, document.getElementById('band').firstChild);
    var js = document.createElement('br');
    document.getElementById('bm').insertBefore(js, document.getElementById('bm').firstChild);
    var js = document.createElement('br');
    document.getElementById('bm').insertBefore(js, document.getElementById('bm').firstChild);
    var js = document.createElement('video');
    js.id = 'player1';
    js.width = '640';
    js.height = '360';
    js.style = 'width:640px;height:360px;position:absolute;top:0;left:0;';
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
    js.src = '0.srt';
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
    js.style = 'position:relative;width:-100px;'
    document.getElementById('stage').appendChild(js);
    delete js;
    var js = document.createElement('div');
    js.id = 'remove';
    js.style = 'position:absolute'
    document.getElementById('stage').appendChild(js);
    delete js;
}

$.getScript("https://raw.github.com/codepo8/rotatezoomHTML5video/master/transformvideo.js", function(){});

  if(remove){
    remove.innerHTML =  '<button onclick="deldiv()">' + args.title + '</button>'
  }
  
 };
loadScript("https://raw.github.com/johndyer/mediaelement/master/build/jquery.js", jqs);



  window.onload = function() {

    var js = document.createElement('style');
    js.type = 'text/css';
    var code = '  .mejs-container\
{	position: relative;\
	background: #000;\
	font-family: Helvetica, Arial;\
	text-align: left;\
	vertical-align: top;\
	text-indent: 0;\
}\
\
.me-plugin {\
	position: absolute;\
}\
\
.mejs-embed, .mejs-embed body {\
	width: 100%;\
	height: 100%;\
	margin: 0;\
	padding: 0;\
	background: #000;\
	overflow: hidden;\
}\
\
.mejs-fullscreen {\
	/* set it to not show scroll bars so 100% will work */\
	overflow: hidden !important;\
}\
\
.mejs-container-fullscreen {\
	position: fixed;\
	left: 0;\
	top: 0;\
	right: 0;\
	bottom: 0;\
	overflow: hidden;\
	z-index: 1000;\
}\
.mejs-container-fullscreen .mejs-mediaelement,\
.mejs-container-fullscreen video {\
	width: 100%;\
	height: 100%;\
}\
\
.mejs-clear {\
	clear: both;\
}\
\
/* Start: LAYERS */\
.mejs-background {\
	position: absolute;\
	top: 0;\
	left: 0;\
}\
\
.mejs-mediaelement {\
	position: absolute;\
	top: 0;\
	left: 0;\
	width: 100%;\
	height: 100%;\
}\
\
.mejs-poster {\
	position: absolute;\
	top: 0;\
	left: 0;\
	background-size: contain ;\
	background-position: 50% 50% ;\
	background-repeat: no-repeat ;\
}\
:root .mejs-poster img {\
	display: none ;\
}\
\
.mejs-poster img {\
	border: 0;\
	padding: 0;\
	border: 0;\
}\
\
.mejs-overlay {\
	position: absolute;\
	top: 0;\
	left: 0;\
}\
\
.mejs-overlay-play {\
	cursor: pointer;\
}\
\
.mejs-overlay-button {\
	position: absolute;\
	top: 50%;\
	left: 50%;\
	width: 100px;\
	height: 100px;\
	margin: -50px 0 0 -50px;\
	background: url(bigplay.svg) no-repeat;\
}\
\
.no-svg .mejs-overlay-button { \
	background-image: url(bigplay.png);\
}\
\
.mejs-overlay:hover .mejs-overlay-button {\
	background-position: 0 -100px ;\
}\
\
.mejs-overlay-loading {\
	position: absolute;\
	top: 50%;\
	left: 50%;\
	width: 80px;\
	height: 80px;\
	margin: -40px 0 0 -40px;\
	background: #333;\
	background: url(background.png);\
	background: rgba(0, 0, 0, 0.9);\
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(50,50,50,0.9)), to(rgba(0,0,0,0.9)));\
	background: -webkit-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9));\
	background: -moz-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9));\
	background: -o-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9));\
	background: -ms-linear-gradient(top, rgba(50,50,50,0.9), rgba(0,0,0,0.9));\
	background: linear-gradient(rgba(50,50,50,0.9), rgba(0,0,0,0.9));\
}\
\
.mejs-overlay-loading span {\
	display: block;\
	width: 80px;\
	height: 80px;\
	background: transparent url(loading.gif) 50% 50% no-repeat;\
}\
\
/* End: LAYERS */\
\
/* Start: CONTROL BAR */\
.mejs-container .mejs-controls {\
	position: absolute;\
	list-style-type: none;\
	margin: 0;\
	padding: 0;\
	bottom: 0;\
	left: 0;\
	background: url(background.png);\
	background: rgba(0, 0, 0, 0.7);\
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(50,50,50,0.7)), to(rgba(0,0,0,0.7)));\
	background: -webkit-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7)); \
	background: -moz-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7));\
	background: -o-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7)); \
	background: -ms-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7)); 	\
	background: linear-gradient(rgba(50,50,50,0.7), rgba(0,0,0,0.7)); 	\
	height: 30px;\
	width: 100%;\
}\
.mejs-container .mejs-controls  div {\
	list-style-type: none;\
	background-image: none;\
	display: block;\
	float: left;\
	margin: 0;\
	padding: 0;\
	width: 26px;\
	height: 26px;\
	font-size: 11px;\
	line-height: 11px;\
	font-family: Helvetica, Arial;\
	border: 0;\
}\
\
.mejs-controls .mejs-button button {\
	cursor: pointer;\
	display: block;\
	font-size: 0;\
	line-height: 0;\
	text-decoration: none;\
	margin: 7px 5px;\
	padding: 0;\
	position: absolute;\
	height: 16px;\
	width: 16px;\
	border: 0;\
	background: transparent url(controls.svg) no-repeat;\
}\
\
.no-svg .mejs-controls .mejs-button button { \
	background-image: url(controls.png);\
}\
\
/* :focus for accessibility */\
.mejs-controls .mejs-button button:focus {\
	outline: solid 1px yellow;\
}\
\
/* End: CONTROL BAR */\
\
/* Start: Time (Current / Duration) */\
.mejs-container .mejs-controls .mejs-time {\
	color: #fff;\
	display: block;\
	height: 17px;\
	width: auto;\
	padding: 8px 3px 0 3px ;\
	overflow: hidden;\
	text-align: center;\
	-moz-box-sizing: content-box;\
	-webkit-box-sizing: content-box;\
	box-sizing: content-box;\
}\
\
.mejs-container .mejs-controls .mejs-time span {\
	color: #fff;\
	font-size: 11px;\
	line-height: 12px;\
	display: block;\
	float: left;\
	margin: 1px 2px 0 0;\
	width: auto;\
}\
/* End: Time (Current / Duration) */\
\
/* Start: Play/Pause/Stop */\
.mejs-controls .mejs-play button {\
	background-position: 0 0;\
}\
\
.mejs-controls .mejs-pause button {\
	background-position: 0 -16px;\
}\
\
.mejs-controls .mejs-stop button {\
	background-position: -112px 0;\
}\
/* Start: Play/Pause/Stop */\
\
/* Start: Progress Bar */\
.mejs-controls div.mejs-time-rail {\
	direction: ltr;\
	width: 200px;\
	padding-top: 5px;\
}\
\
.mejs-controls .mejs-time-rail span {\
	display: block;\
	position: absolute;\
	width: 180px;\
	height: 10px;\
	-webkit-border-radius: 2px;\
	-moz-border-radius: 2px;\
	border-radius: 2px;\
	cursor: pointer;\
}\
\
.mejs-controls .mejs-time-rail .mejs-time-total {\
	margin: 5px;\
	background: #333;\
	background: rgba(50,50,50,0.8);\
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(30,30,30,0.8)), to(rgba(60,60,60,0.8)));\
	background: -webkit-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8)); \
	background: -moz-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));\
	background: -o-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));\
	background: -ms-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));\
	background: linear-gradient(rgba(30,30,30,0.8), rgba(60,60,60,0.8));\
}\
\
.mejs-controls .mejs-time-rail .mejs-time-buffering {\
	width: 100%;\
	background-image: -o-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\
	background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));\
	background-image: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\
	background-image: -moz-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\
	background-image: -ms-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\
	background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\
	-webkit-background-size: 15px 15px;\
	-moz-background-size: 15px 15px;\
	-o-background-size: 15px 15px;\
	background-size: 15px 15px;\
	-webkit-animation: buffering-stripes 2s linear infinite;\
	-moz-animation: buffering-stripes 2s linear infinite;\
	-ms-animation: buffering-stripes 2s linear infinite;\
	-o-animation: buffering-stripes 2s linear infinite;\
	animation: buffering-stripes 2s linear infinite;\
}\
\
@-webkit-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }\
@-moz-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }\
@-ms-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }\
@-o-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }\
@keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }\
\
.mejs-controls .mejs-time-rail .mejs-time-loaded {\
	background: #3caac8;\
	background: rgba(60,170,200,0.8);\
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(44,124,145,0.8)), to(rgba(78,183,212,0.8))); \
	background: -webkit-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8));\
	background: -moz-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8));\
	background: -o-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8));\
	background: -ms-linear-gradient(top, rgba(44,124,145,0.8), rgba(78,183,212,0.8));\
	background: linear-gradient(rgba(44,124,145,0.8), rgba(78,183,212,0.8));\
	width: 0;\
}\
\
.mejs-controls .mejs-time-rail .mejs-time-current {\
	background: #fff;\
	background: rgba(255,255,255,0.8);\
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(255,255,255,0.9)), to(rgba(200,200,200,0.8)));\
	background: -webkit-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));\
	background: -moz-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8)); \
	background: -o-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));\
	background: -ms-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));\
	background: linear-gradient(rgba(255,255,255,0.9), rgba(200,200,200,0.8));\
	width: 0;\
}\
\
.mejs-controls .mejs-time-rail .mejs-time-handle {\
	display: none;\
	position: absolute;\
	margin: 0;\
	width: 10px;\
	background: #fff;\
	-webkit-border-radius: 5px;\
	-moz-border-radius: 5px;\
	border-radius: 5px;\
	cursor: pointer;\
	border: solid 2px #333;\
	top: -2px;\
	text-align: center;\
}\
\
.mejs-controls .mejs-time-rail .mejs-time-float {\
	position: absolute;\
	display: none;\
	background: #eee;\
	width: 36px;\
	height: 17px;\
	border: solid 1px #333;\
	top: -26px;\
	margin-left: -18px;\
	text-align: center;\
	color: #111;\
}\
\
.mejs-controls .mejs-time-rail .mejs-time-float-current {\
	margin: 2px;\
	width: 30px;\
	display: block;\
	text-align: center;\
	left: 0;\
}\
\
.mejs-controls .mejs-time-rail .mejs-time-float-corner {\
	position: absolute;\
	display: block;\
	width: 0;\
	height: 0;\
	line-height: 0;\
	border: solid 5px #eee;\
	border-color: #eee transparent transparent transparent;\
	-webkit-border-radius: 0;\
	-moz-border-radius: 0;\
	border-radius: 0;\
	top: 15px;\
	left: 13px;\
}\
\
.mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float {\
	width: 48px;\
}\
\
.mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float-current {\
	width: 44px;\
}\
\
.mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float-corner {\
	left: 18px;\
}\
\
/*\
.mejs-controls .mejs-time-rail:hover .mejs-time-handle {\
	visibility:visible;\
}\
*/\
/* End: Progress Bar */\
\
/* Start: Fullscreen */\
.mejs-controls .mejs-fullscreen-button button {\
	background-position: -32px 0;\
}\
\
.mejs-controls .mejs-unfullscreen button {\
	background-position: -32px -16px;\
}\
/* End: Fullscreen */\
\
\
/* Start: Mute/Volume */\
.mejs-controls .mejs-volume-button {\
}\
\
.mejs-controls .mejs-mute button {\
	background-position: -16px -16px;\
}\
\
.mejs-controls .mejs-unmute button {\
	background-position: -16px 0;\
}\
\
.mejs-controls .mejs-volume-button {\
	position: relative;\
}\
\
.mejs-controls .mejs-volume-button .mejs-volume-slider {\
	display: none;\
	height: 115px;\
	width: 25px;\
	background: url(background.png);\
	background: rgba(50, 50, 50, 0.7);\
	-webkit-border-radius: 0;\
	-moz-border-radius: 0;\
	border-radius: 0;\
	top: -115px;\
	left: 0;\
	z-index: 1;\
	position: absolute;\
	margin: 0;\
}\
\
.mejs-controls .mejs-volume-button:hover {\
	-webkit-border-radius: 0 0 4px 4px;\
	-moz-border-radius: 0 0 4px 4px;\
	border-radius: 0 0 4px 4px;\
}\
\
/*\
.mejs-controls .mejs-volume-button:hover .mejs-volume-slider {\
	display: block;\
}\
*/\
\
.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-total {\
	position: absolute;\
	left: 11px;\
	top: 8px;\
	width: 2px;\
	height: 100px;\
	background: #ddd;\
	background: rgba(255, 255, 255, 0.5);\
	margin: 0;\
}\
\
.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current {\
	position: absolute;\
	left: 11px;\
	top: 8px;\
	width: 2px;\
	height: 100px;\
	background: #ddd;\
	background: rgba(255, 255, 255, 0.9);\
	margin: 0;\
}\
\
.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-handle {\
	position: absolute;\
	left: 4px;\
	top: -3px;\
	width: 16px;\
	height: 6px;\
	background: #ddd;\
	background: rgba(255, 255, 255, 0.9);\
	cursor: N-resize;\
	-webkit-border-radius: 1px;\
	-moz-border-radius: 1px;\
	border-radius: 1px;\
	margin: 0;\
}\
\
/* horizontal version */\
.mejs-controls div.mejs-horizontal-volume-slider {\
	height: 26px;\
	width: 60px;\
	position: relative;\
}\
\
.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total {\
	position: absolute;\
	left: 0;\
	top: 11px;\
	width: 50px;\
	height: 8px;\
	margin: 0;\
	padding: 0;\
	font-size: 1px;\
	-webkit-border-radius: 2px;\
	-moz-border-radius: 2px;\
	border-radius: 2px;	\
	background: #333;\
	background: rgba(50,50,50,0.8);\
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(30,30,30,0.8)), to(rgba(60,60,60,0.8)));\
	background: -webkit-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8)); \
	background: -moz-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));\
	background: -o-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));\
	background: -ms-linear-gradient(top, rgba(30,30,30,0.8), rgba(60,60,60,0.8));\
	background: linear-gradient(rgba(30,30,30,0.8), rgba(60,60,60,0.8));\
}\
\
.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current {\
	position: absolute;\
	left: 0;\
	top: 11px;\
	width: 50px;\
	height: 8px;\
	margin: 0;\
	padding: 0;\
	font-size: 1px;\
	-webkit-border-radius: 2px;\
	-moz-border-radius: 2px;\
	border-radius: 2px;\
	background: #fff;\
	background: rgba(255,255,255,0.8);\
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(255,255,255,0.9)), to(rgba(200,200,200,0.8)));\
	background: -webkit-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));\
	background: -moz-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8)); \
	background: -o-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));\
	background: -ms-linear-gradient(top, rgba(255,255,255,0.9), rgba(200,200,200,0.8));\
	background: linear-gradient(rgba(255,255,255,0.9), rgba(200,200,200,0.8));\
}\
\
.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-handle {\
	display: none;\
}\
\
/* End: Mute/Volume */\
\
/* Start: Track (Captions and Chapters) */\
.mejs-controls .mejs-captions-button {\
	position: relative;\
}\
\
.mejs-controls .mejs-captions-button button {\
	background-position: -48px 0;\
}\
.mejs-controls .mejs-captions-button .mejs-captions-selector {\
	visibility: hidden;\
	position: absolute;\
	bottom: 26px;\
	right: -10px;\
	width: 130px;\
	height: 100px;\
	background: url(background.png);\
	background: rgba(50,50,50,0.7);\
	border: solid 1px transparent;\
	padding: 10px;\
	overflow: hidden;\
	-webkit-border-radius: 0;\
	-moz-border-radius: 0;\
	border-radius: 0;\
}\
\
/*\
.mejs-controls .mejs-captions-button:hover  .mejs-captions-selector {\
	visibility: visible;\
}\
*/\
\
.mejs-controls .mejs-captions-button .mejs-captions-selector ul {\
	margin: 0;\
	padding: 0;\
	display: block;\
	list-style-type: none !important;\
	overflow: hidden;\
}\
\
.mejs-controls .mejs-captions-button .mejs-captions-selector ul li {\
	margin: 0 0 6px 0;\
	padding: 0;\
	list-style-type: none !important;\
	display: block;\
	color: #fff;\
	overflow: hidden;\
}\
\
.mejs-controls .mejs-captions-button .mejs-captions-selector ul li input {\
	clear: both;\
	float: left;\
	margin: 3px 3px 0 5px;\
}\
\
.mejs-controls .mejs-captions-button .mejs-captions-selector ul li label {\
	width: 100px;\
	float: left;\
	padding: 4px 0 0 0;\
	line-height: 15px;\
	font-family: helvetica, arial;\
	font-size: 10px;\
}\
\
.mejs-controls .mejs-captions-button .mejs-captions-translations {\
	font-size: 10px;\
	margin: 0 0 5px 0;\
}\
\
.mejs-chapters {\
	position: absolute;\
	top: 0;\
	left: 0;\
	-xborder-right: solid 1px #fff;\
	width: 10000px;\
	z-index: 1;\
}\
\
.mejs-chapters .mejs-chapter {\
	position: absolute;\
	float: left;\
	background: #222;\
	background: rgba(0, 0, 0, 0.7);\
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(50,50,50,0.7)), to(rgba(0,0,0,0.7)));\
	background: -webkit-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7));\
	background: -moz-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7));\
	background: -o-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7));\
	background: -ms-linear-gradient(top, rgba(50,50,50,0.7), rgba(0,0,0,0.7));\
	background: linear-gradient(rgba(50,50,50,0.7), rgba(0,0,0,0.7)); \
	filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#323232,endColorstr=#000000);		\
	overflow: hidden;\
	border: 0;\
}\
\
.mejs-chapters .mejs-chapter .mejs-chapter-block {\
	font-size: 11px;\
	color: #fff;\
	padding: 5px;\
	display: block;\
	border-right: solid 1px #333;\
	border-bottom: solid 1px #333;\
	cursor: pointer;\
}\
\
.mejs-chapters .mejs-chapter .mejs-chapter-block-last {\
	border-right: none;\
}\
\
.mejs-chapters .mejs-chapter .mejs-chapter-block:hover {\
	background: #666;\
	background: rgba(102,102,102, 0.7);\
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(102,102,102,0.7)), to(rgba(50,50,50,0.6)));\
	background: -webkit-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));\
	background: -moz-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));\
	background: -o-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));\
	background: -ms-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));\
	background: linear-gradient(rgba(102,102,102,0.7), rgba(50,50,50,0.6));\
	filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, startColorstr=#666666,endColorstr=#323232);		\
}\
\
.mejs-chapters .mejs-chapter .mejs-chapter-block .ch-title {\
	font-size: 12px;\
	font-weight: bold;\
	display: block;\
	white-space: nowrap;\
	text-overflow: ellipsis;\
	margin: 0 0 3px 0;\
	line-height: 12px;\
}\
\
.mejs-chapters .mejs-chapter .mejs-chapter-block .ch-timespan {\
	font-size: 12px;\
	line-height: 12px;\
	margin: 3px 0 4px 0;\
	display: block;\
	white-space: nowrap;\
	text-overflow: ellipsis;\
}\
\
.mejs-captions-layer {\
	position: absolute;\
	bottom: 0;\
	left: 0;\
	text-align:center;\
	line-height: 22px;\
	font-size: 12px;\
	color: #fff;\
}\
\
.mejs-captions-layer  a {\
	color: #fff;\
	text-decoration: underline;\
}\
\
.mejs-captions-layer[lang=ar] {\
	font-size: 20px;\
	font-weight: normal;\
}\
\
.mejs-captions-position {\
	position: absolute;\
	width: 100%;\
	bottom: 15px;\
	left: 0;\
}\
\
.mejs-captions-position-hover {\
	bottom: 45px;\
}\
\
.mejs-captions-text {\
	padding: 3px 5px;\
	background: url(background.png);\
	background: rgba(20, 20, 20, 0.8);\
\
}\
/* End: Track (Captions and Chapters) */\
\
/* Start: Error */\
.me-cannotplay {\
}\
\
.me-cannotplay a {\
	color: #fff;\
	font-weight: bold;\
}\
\
.me-cannotplay span {\
	padding: 15px;\
	display: block;\
}\
/* End: Error */\
\
\
/* Start: Loop */\
.mejs-controls .mejs-loop-off button {\
	background-position: -64px -16px;\
}\
\
.mejs-controls .mejs-loop-on button {\
	background-position: -64px 0;\
}\
\
/* End: Loop */\
\
/* Start: backlight */\
.mejs-controls .mejs-backlight-off button {\
	background-position: -80px -16px;\
}\
\
.mejs-controls .mejs-backlight-on button {\
	background-position: -80px 0;\
}\
/* End: backlight */\
\
/* Start: Picture Controls */\
.mejs-controls .mejs-picturecontrols-button {\
	background-position: -96px 0;\
}\
/* End: Picture Controls */\
\
\
/* context menu */\
.mejs-contextmenu {\
	position: absolute;\
	width: 150px;\
	padding: 10px;\
	border-radius: 4px;\
	top: 0;\
	left: 0;\
	background: #fff;\
	border: solid 1px #999;\
	z-index: 1001; /* make sure it shows on fullscreen */\
}\
.mejs-contextmenu .mejs-contextmenu-separator {\
	height: 1px;\
	font-size: 0;\
	margin: 5px 6px;\
	background: #333;	\
}\
\
.mejs-contextmenu .mejs-contextmenu-item {\
	font-family: Helvetica, Arial;\
	font-size: 12px;\
	padding: 4px 6px;\
	cursor: pointer;\
	color: #333;	\
}\
.mejs-contextmenu .mejs-contextmenu-item:hover {\
	background: #2C7C91;\
	color: #fff;\
}\
\
/* Start: Source Chooser */\
.mejs-controls .mejs-sourcechooser-button {\
	position: relative;\
}\
\
.mejs-controls .mejs-sourcechooser-button button {\
	background-position: -128px 0;\
}\
\
.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector {\
	visibility: hidden;\
	position: absolute;\
	bottom: 26px;\
	right: -10px;\
	width: 130px;\
	height: 100px;\
	background: url(background.png);\
	background: rgba(50,50,50,0.7);\
	border: solid 1px transparent;\
	padding: 10px;\
	overflow: hidden;\
	-webkit-border-radius: 0;\
	-moz-border-radius: 0;\
	border-radius: 0;\
}\
\
.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul {\
	margin: 0;\
	padding: 0;\
	display: block;\
	list-style-type: none !important;\
	overflow: hidden;\
}\
\
.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li {\
	margin: 0 0 6px 0;\
	padding: 0;\
	list-style-type: none !important;\
	display: block;\
	color: #fff;\
	overflow: hidden;\
}\
\
.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li input {\
	clear: both;\
	float: left;\
	margin: 3px 3px 0 5px;\
}\
\
.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li label {\
	width: 100px;\
	float: left;\
	padding: 4px 0 0 0;\
	line-height: 15px;\
	font-family: helvetica, arial;\
	font-size: 10px;\
}\
/* End: Source Chooser */\
\
/* Start: Postroll */\
.mejs-postroll-layer {\
	position: absolute;\
	bottom: 0;\
	left: 0;\
	width: 100%;\
	height: 100%;\
	background: url(background.png);\
	background: rgba(50,50,50,0.7);\
	z-index: 1000;\
	overflow: hidden;\
}\
.mejs-postroll-layer-content {\
	width: 100%;\
	height: 100%;\
}\
.mejs-postroll-close {\
	position: absolute;\
	right: 0;\
	top: 0;\
	background: url(background.png);\
	background: rgba(50,50,50,0.7);\
	color: #fff;\
	padding: 4px;\
	z-index: 100;\
	cursor: pointer;\
}\
/* End: Postroll */\
#stage{background:#eee;width:84%;height:360px;\
         position:relative;margin:2em 0;\
         margin-left:auto;\
         margin-right:auto;}\
  video{width:640px;height:360px;position:absolute;top:0;left:0;}\
  #controls{position:relative;width:-100px;}\
  #change{position:absolute;right:-100px;top:-300px;width:100px;}\
  button{font-size:150%;text-align:center;display:block;}\
  #change button{width:60px;border:none;background:#fff;}"\
';
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

