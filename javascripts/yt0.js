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
    241: '144p WebM VP9',
    278: '144p WebM VP9'
  };

function get_quality(url) {

  var qs = qr(url);
  return qual[qs.itag] || qs.itag
}

function rp(tx) {
  return tx.split('"').join('&quot;');
}

  var xhr = new XMLHttpRequest(),px,i,j,k,x,y,z;

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var protocol = (document.location.protocol=='http:')?'http:':'https:';
var proxies = ['https://allow-any-origin.appspot.com/https:','https://cors-anywhere.herokuapp.com/https:']

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

//  var fcnm = rpt.match(/signature=([^(]+)/)[1]
  var fcnm = rpt.match(/&&\(.+signature\/".*\;/)[0]
  var i = fcnm.split('\"/signature/\"+')[1].split(")")[0]
  var fcnm = fcnm.split("&&("+i+"=")[1].substring(0,2);alert('fcnm=' + fcnm)
  
  function sprintf(nw) {
    var i = 0;
    while (/%s/.test(nw))
      nw = nw.replace('%s', arguments[++i])
    return nw;
  }
  var fs = new RegExp(    sprintf('function %s[^}]+}[^}]+}', fcnm.replace('$', '\\$'))  );
  //var fs = new RegExp('function ' + fcnm.replace('\$','\\$') + '[^}]+}[^}]+}');

  function fcobj(){
    var mch = rpt.match(fs)[0];  mch = mch.split('');for (j=0;j<mch.length;j++){if (mch[j] === "$") {mch[j]="\\$"}};  var mch = mch.join(''); var mch = mch.split('\,'); alert(mch[4])
    for (i=0;i<mch.length;i++) {
      var zzx = mch[i].substring(0,4)
      if ((zzx === zzy) && (zzx.charAt(2)==='.')) { var zzz = zzy.substring(0,2); alert(zzz) };
      if ((zzx === zzy) && (zzx.charAt(3)==='.')) { var zzz = zzy.substring(0,3); alert(zzz) };
      var zzy = zzx;
    }
    var mch = new RegExp('var ' + zzz + '[^}]+}[^}]+}[^}]+}};');
    return [mch,zzz]
  }
  alert(fcobj()[0])
      eval(rpt.match(fcobj()[0])[0].split(" " + fcobj()[1] + "=").join(" dekrypt0=") + rpt.match(fs)[0].split(fcobj()[1]).join("dekrypt0"));
  //eval(rpt.match(fcobj()[0])[0].replace(fcobj()[1],"dekrypt0") + rpt.match(fs)[0].split(fcobj()[1]).join("dekrypt0"));

function dc(sg) {
  return eval(fcnm + '("' + sg + '")');
}

var linx = [];
var lang_def = null; var lang_asr = null;

var args = ytplayer.config.args;
var html = [new Date().toLocaleString(),
  'Click to switch streams in HTML5 player. Right click & "Save as" to download.<br>'
];

var ft = [args.url_encoded_fmt_stream_map, args.adaptive_fmts]
for (i in ft) {
 if (typeof ft[i] !== 'undefined') {
  var z = ft ? ft[i].split(',') : '';
  for (j in z) {
    var qq = get_quality(z[j]);
    var qs = qr(z[j]);
    var href = unescape(qs.url).replace(protocol, '');
    if (qs.sig)
      href += '&signature=' + qs.sig;
    if (qs.s)
      href += '&signature=' + dc(qs.s);
    if (href.indexOf("&ratebypass=yes") == -1) { href += '&ratebypass=yes'}
    if (qq.indexOf("+") != -1) { href += '&2' }
    if (qq.indexOf('DASH') != -1) { var aspect_ratio = ft.toString().split("size=")[1].split("&")[0] }
    if (qs.itag !== '278') { linx[qs.itag] = href } else { linx[241] = href }
    if (qq.indexOf('360p WebM VP8') != -1) { var webm = 'https:' + href };
    if (qq.indexOf('WebM Vorbis') != -1) { var audio = 'https:' + href };//.replace('&ratebypass=yes','') };

    //var fn = (args.title + '-' + qq).toLowerCase()
    //         .replace(/[!"&'().:[\]|]/g,'')
    //         .replace(/ /g,'-')
    //         .replace(/-+/g,'-');
    
    var p1load = null;
   

    function HTMLPush(j){
    
      function setLink(href){
        var onclic = 'sauce = getElementsByAttribute(document,"input","name","mep_0_sourcechooser"); if ((sauce != undefined) && (sauce.length != 0)) { for (i=0;j=(sauce.length-1);i++) { sauce[i].removeAttribute("checked");if (("'+href+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2)+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2).replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:",""))) { if (document.getElementById("bm").style.visibility == "visible") { if ((!player1.paused) || (!player2.paused)) { var p1load = 1; player2.pause();  } else { var p1load = null }; } else { if ((typeof player.getPlayerState == "function") && (flashvars == null)) { if (player.getPlayerState() == "1") { var p1load = 1; v.pause() } else { var p1load = null }}; }; if (("https:'+href+'" == audio) && (navigator.userAgent.indexOf("Chrome") < -1)) { alert("Warning: Google Chrome will stop buffering if the AUDIO and VIDEO sources share the same location.\\nThis happens when you switch from a DASH/VP9 playback over to the designated audio track to play on its own.\\nIt\'s a bug to be fixed.") };  document.getElementsByClassName("video-stream html5-main-video")[0].setAttribute("src","https:' + href + '");document.getElementById("player1").setAttribute("src","https:' + href + '"); sauce[i].setAttribute("checked","checked");document.getElementById("player1").setAttribute("src","https:' + href + '"); if (p1load == 1) { if ((typeof player.getPlayerState == "function") && (flashvars == null)) { v.play();v.pause();v.play() } else { if (document.getElementById("bm").style.visibility == "visible") { player1.load(); player2.load(); }} } ;return false};if (i === j){return true;} }};return false';
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
                var fn = (args.title + x).replace(/&/g,'%26').replace(/\+/g,'%2B').replace(/[\/]/g,'_')
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
        if (qq.indexOf(" ") > 4) y = y - 1;
        size = Array(y - qq.length - 3*((qq.length/18)>>0)).join(".") + size
      } else { size = '' }


    if (typeof qq.split(" ")[1] != 'undefined') { 
      if (typeof j != 'number') {
        html.push(
          '<a href="' + protocol + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '.' + qq.split(" ")[1].toLowerCase() + '">' + qq + size + '</a>'
        );
      } else {
          html.splice(
            j+1, 0, '<a href="' + protocol + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '.' + qq.split(" ")[1].toLowerCase() + '">' + qq + size + '</a>'
          );
        }
    
      var fn = fn.split(" - " + qq.split(" ")[0] + " " + qq.split(" ")[2])[0]

    } else {
        if (typeof j != 'number'){
          html.push(
            '<a href="' + protocol + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '">' + qs.itag + size + '</a>'
          );
        } else {
            html.splice(
                j+1, 0, '<a href="' + protocol + href + '&title=' + fn +'" onclick="' + rp(onclic) + '" download="' + fn + '">' + qs.itag + size + '</a>'
            );
          }
      }
    return fn
    };//HTMLPush
    var fn = HTMLPush()
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
var z = aac.split('/')
var sig = null;
var aac2 = null;
for (i in z) {
  if (sig == 1) { var sig = dc(z[i]); var aac2 = aac.replace(z[i],sig).replace('/s/','/signature/');}
  if (sig == 2) { var aac2 = aac.replace(protocol, ''); sig == null; }
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
    if ((xhr.responseText.indexOf('Representation id="278"') > -1) && (typeof linx[241] == 'undefined')){
      for (j=0;html.length-1;j++) {
        if (html[j].indexOf("itag=160") > -1) {
          href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id","278")[0].textContent.replace(protocol,'');
          //var onclic = 'document.getElementsByClassName("video-stream html5-main-video")[0].setAttribute("src","https:' + href + '");document.getElementById("player1").setAttribute("src","https:' + href + '");sauce = getElementsByAttribute(document,"input","name","mep_0_sourcechooser"); if ((sauce != undefined) && (sauce.length != 0)) { for (i=0;j=(sauce.length-1);i++) { sauce[i].removeAttribute("checked");if (("'+href+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2)+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2).replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:",""))) {if (typeof A['+href.split("itag=")[1].split("&")[0]+'] === "string") { }; sauce[i].setAttribute("checked","checked");document.getElementById("player1").setAttribute("src","https:' + href + '");var p1load = 1;return false};if (i === j){return true;} }};return false';
          var qq = get_quality(href)
          HTMLPush(j)
          linx[241] = href
          break
        }
      }
    }
    var x = ['139','172','141']
    for (b in x){
      if ((xhr.responseText.indexOf('Representation id="'+x[b]+'"') > -1) && (typeof linx[x[b]] == 'undefined')) {
        href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id",x[b])[0].textContent.replace(protocol,'');
        if (x[b] == '172') { var audio = 'https:' + href }
        if (x[b] == '141') { if (typeof audio == 'undefined') { var audio = 'https:' + href }}
        var qq = get_quality(href)
        HTMLPush()
        linx[x[b]] = href

      }
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

if ((typeof aspect_ratio == 'undefined') || (aspect_ratio == null)) {
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
    var aspect_ratio = (w_orig.replace('px','')/h_orig.replace('px',''))
  } else { 
      w_orig = '640px'; h_orig = '360px'; aspect_ratio = 16/9
    }

} else {
    if (typeof aspect_ratio === 'string') {
      var w_orig = aspect_ratio.split("x")[0] + "px"
      var h_orig = aspect_ratio.split("x")[1] + "px"
      var aspect_ratio = (w_orig.replace('px','') / h_orig.replace('px',''))
    } else {
        w_orig = '640px'; h_orig = '360px'; aspect_ratio = 16/9
      }
  }

if (typeof ytcenter !== 'undefined') { 
  var w = document.getElementById('player-api').style.width; if (w.replace('px','') < 640) {document.getElementById('player-api').style.width = '640px'}
  var h = document.getElementById('player-api').style.height; if (h.replace('px','') < 390) {document.getElementById('player-api').style.height = '390px';document.getElementById('watch7-sidebar').style.marginTop = 'height:-390px'}
  var h = (w.replace('px','') / aspect_ratio >>0)
  var h = (parseInt(parseInt(h) + parseInt(30))) + 'px'
} else {
    var w = fix_Width(); var h = fix_Height();
  }
if (w.replace('px','') < 640) {var w = '640px'}
if (h.replace('px','') < 390) {var h = '390px'}

var poster = getElementsByAttribute(document,"link","itemprop","thumbnailURL")[0].href
if (typeof poster != 'undefined') { var poster = "poster: '" + poster + "'" }
  else { var poster = "poster: " + protocol + "'//i1.ytimg.com/vi/' + args.video_id + '/0.jpg'" }


  cw = document.createElement('div');
  cw.id = 'bm';
  document.getElementById('movie_player').parentNode.insertBefore(cw, document.getElementById('movie_player').nextSibling);
  document.getElementById('bm').setAttribute('style','background:#111;width: '+w+'; height: '+h+';overflow: hidden;visibility:hidden;');
  document.getElementById('bm').setAttribute('class','html5-video-content');
  var player = document.getElementById("movie_player");
  var js = document.createElement('param');
//  js.name = "wmode";
//  js.value = "transparent";
  document.getElementById('bm').appendChild(js);
  document.getElementById('movie_player').setAttribute('wmode','transparent');


  if (document.getElementById("watch7-notification-area") === null) {
    var js = document.createElement('div');
    js.id = 'watch7-notification-area';
    document.getElementById('watch-header').parentNode.insertBefore(js,document.getElementById('watch-header'))
    delete js;
  }
  document.getElementById("watch7-notification-area").setAttribute('style','display:block; padding: 0px 0px 0px')

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
  if (typeof document.getElementsByClassName('video-stream html5-main-video')[1] === 'undefined') {
    document.getElementById('player1').setAttribute('class','video-stream html5-main-video')
  }

if (typeof webm != 'undefined') {
  var js = document.createElement('source');
  js.id = '43';
  js.src = webm;
  js.type = 'video/webm';
  js.title = qual[43].replace("WebM","");;
  document.getElementById('player1').appendChild(js);
}

var A = [],V = [],AV = [];
if (typeof linx[160] === 'string') { linx.splice(132, 1, linx[160])}
  for (i=0;i<linx.length;i++) {
    if (linx[i]) {
      var js = document.createElement('source')
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
    var uriContent = "data:text/plain;charset=utf-8," + encodeURIComponent(srt);

    html.push(
      '<a href="' + uriContent +'" download="' + unescape(fn) + '_' + lang_codeA[i] + '.srt">SRT '+lang_codeA[i]+'</a>'
    );

    }
  }

    var js = document.createElement('div');
    js.id = 'audio-hide';
    js.style = "display: none;visibility: hidden";
    document.getElementById('bm').appendChild(js);
    delete js;
    js.setAttribute('style',"display: none; visibility: hidden");
    var js = document.createElement('audio');
    js.id = 'player2';
    js.preload = "none";
    document.getElementById('audio-hide').appendChild(js);
    delete js;
    var js = document.createElement('source');
    js.id = "no.2";
    js.preload = "none";


if ( (location.href.indexOf("aC4BC-Hxq9g") != -1 )  ) {
  if (!srcto) {
//    xhr.open('get', 'https://cors-anywhere.herokuapp.com/https://' + unescape("%67%6F%6F%2E%67%6C%2F%72%67%6B%4D%6A%41"), false);
//    xhr.send();
//    var srcto = xhr.responseText;
//    var fcnm = srcto.match(/action=([^(]+)/)[1].split("\"")[1]
//    xhr.open('get', 'https://cors-anywhere.herokuapp.com/http://tinyurl.com/api-create.php?url=' + fcnm, false);
//    xhr.send();
//    var srcto = xhr.responseText.replace('http://','https://');
    //var srcto = protocol + unescape('%2F%2F%67%6F%6F%2E%67%6C%2F%62%32%73%52%4E%69');//%68%74%74%70%73%3A
    //var audio = 'https:' + srcto.replace(protocol, '')
    var srcto = unescape('%68%74%74%70%73%3A%2F%2F%64%72%69%76%65%2E%67%6F%6F%67%6C%65%2E%63%6F%6D%2F%75%63%3F%65%78%70%6F%72%74%3D%64%6F%77%6E%6C%6F%61%64%26%69%64%3D%30%42%32%37%61%48%69%6C%4F%47%6E%76%35%53%6B%64%6D%63%58%52%55%65%6E%4A%35%64%55%30');var audio = srcto
    document.getElementById('player2').preload = "auto";
  }
}


      var ytplayercmd = function(e) {
        var cmd = e.data;
        var player = document.getElementById("movie_player");
        if (typeof player[cmd] == 'function') { player[cmd]() }
        return false;
      }
      window.addEventListener("message", ytplayercmd);

      if (typeof player !== 'undefined') {
        if ( (player === document.getElementById("movie_player")) && (typeof player.getPlayerState == 'function') ) {
          if (typeof player.getPlayerState == 'function') { window.postMessage("unMute", "*") }
          if (player.style.opacity != '1.1') { player.style.opacity = '1' }
          //    window.postMessage("pauseVideo", "*");
          var Sync = function(newState) {
            switch (newState) {
              case 0: player2.pause(); break;
              case 1: if ((typeof srcto != 'undefined') && (srcto == audio)) { player2.play();break }; if (typeof v.src.split('itag=')[1] != 'undefined') { if ( (typeof AV[v.src.split('itag=')[1].split('&')[0]] !== 'string')  && (typeof A[v.src.split('itag=')[1].split('&')[0]] !== 'string') && ((typeof V[v.src.split('itag=')[1].split('&')[0]] === 'string') || (v.src.indexOf('itag=278') > -1)) || ((typeof srcto != 'undefined') && (srcto == audio)) ) { player2.play() }};break;
              case 2: player2.pause(); break;
              case 3: player2.pause();break;
              case 5: player2.pause(); break;
            }
            document.getElementById('player2').currentTime = player.getCurrentTime() ;
          }
          player.addEventListener("onStateChange", "Sync");
        }
      }


    js.src = audio;
    js.type = "audio/ogg";
    document.getElementById('player2').appendChild(js);
    js.setAttribute('style',"display: none; visibility: hidden");
    delete js;


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

loadCSS( protocol + "//cdn.rawgit.com/snarly/yt6/ee5b34c3dd41fcea3f8e961389d1a715d93a9d2c/mediaelementplayer.css", function(){
});

var jq0 = function()
 {
    var js = document.createElement('style');
    js.type = 'text/css';
    js.media = 'screen';
    //xhr.open('get', "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/snarly/yt6/master/mediaelementplayer.css", false);
    //xhr.send();
    var code = ".html5-video-container{background:#000 no-repeat scroll center center;z-index:900}.html5-main-video,.html5-video-content{position:absolute;width:100%;height:360px;outline:0}.ytp-keyboard-focus,.annotation.annotation-type-custom {display: none;}\
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


var jq1 = function() {
var jq2 = function() {
var jq3 = function() {
var jq4 = function() {
var jq5 = function() {

    var js = document.createElement('script');
    js.id = "mep_init";
    var code = "jQuery(document).ready(function($) {\
                $('#version').html( mejs.version);\
                var Audio = '" + audio + "'; var Srcto = '" + srcto + "';\
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
                                        me.addEventListener('loadedmetadata', function() { var dw = document.getElementById('aspect'); if ( (dw) && (Math.round((w.replace('px','') / aspect_ratio)) != Math.round(aspect_ratio)) ) { aspect2(document.getElementById('bm').style.width.replace('px',''),document.getElementById('bm').style.height.replace('px',''));document.getElementById('player-api').style.width = '100%' } else { aspect();aspect() } });\
                                        me.addEventListener('loadeddata', function() { document.getElementsByClassName('mejs-clear')[0].setAttribute('id','mejs-clear') });\
					me.addEventListener('play', function() { player2.playbackRate = me.playbackRate; document.getElementsByClassName('play')[0].innerHTML = 'pause';\
					  if ((Math.abs(parseFloat(parseFloat(player2.currentTime) - parseFloat(me.currentTime))) > parseFloat(0.3)) && (me.currentTime > 3)) { player2.currentTime = me.currentTime };\
                                          if ( ( (typeof AV[me.src.split('itag=')[1].split('&')[0]] !== 'string') && \
                                                 (typeof A[me.src.split('itag=')[1].split('&')[0]] !== 'string') && \
                                                 ((typeof V[me.src.split('itag=')[1].split('&')[0]] === 'string') || (me.src.indexOf('itag=278') > -1)) \
                                               ) || ((typeof srcto != 'undefined') && (Srcto == Audio)) \
                                             ) { player2.play() } else { if ((me.src.slice(-2) == '&2') && (Seek != 4)) { Seek = 4; player2.pause() }; if ((me.src.replace('&ratebypass=yes','') === player2.src.replace('&ratebypass=yes',''))) { Seek = 0; player2.pause() } }; if (Seek == 3 ) {Seek = null} });\
					me.addEventListener('pause', function() { document.getElementsByClassName('play')[0].innerHTML = 'play'; if (me.src.replace('&ratebypass=yes','') != player2.src.replace('&ratebypass=yes','')) { if (Seek == 3) { player2.pause() }; if (Seek === 0) { Seek = 1 }; player2.pause(); player2.currentTime = me.currentTime }});\
					me.addEventListener('volumechange', function() { if (me.src.replace('&ratebypass=yes','') != player2.src.replace('&ratebypass=yes','')) { player2.setVolume( me.volume ); if (me.muted) { player2.setMuted(true) } else player2.setMuted(false) }});\
					me.addEventListener('ended', function() { if (player1.options.loop1) { Seek = 1; if (player2.currentTime == 0) { me.play() }; player2.currentTime = player2.duration } else { Seek = 3; if (player2.currentTime > 0) { player2.currentTime = player2.duration };\
                                          var autoplay = document.getElementsByClassName('yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon toggle-autoplay yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip yt-uix-button-toggled')[0];\
                                          if (autoplay) { var autoplay = document.getElementsByClassName('yt-uix-button  next-playlist-list-item yt-uix-button-opacity yt-uix-tooltip spf-link  yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-empty')[0]; if (autoplay) autoplay.click()\
                                          } } });\
					me.addEventListener('playing', function() { if ( (me.src.slice(-2) == '&2') && (Srcto != Audio) )  { player2.pause() } });\
					me.addEventListener('seeked', function() { if ( ((me.src.slice(-2) !== '&2') && (me.src.replace('&ratebypass=yes','') != player2.src.replace('&ratebypass=yes',''))) || (Audio == Srcto) ) { if (me.paused) { player2.setCurrentTime( me.currentTime ) } else { if (Seek !== 3) { Seek = 1 }; if (Audio == Srcto) { player2.currentTime = me.currentTime; } }; if ((me.src.slice(-2) !== '&2') && (Math.abs(parseFloat(parseFloat(player2.currentTime) - parseFloat(me.currentTime))) > parseFloat(0.3))) { me.pause() }} });\
}});\
if (typeof srcto == 'undefined') {\
                $('#player2').mediaelementplayer({\
		enableKeyboard: true,\
		enableAutosize: false,\
		pauseOtherPlayers: false,\
		autoRewind: false,\
		features: ['',],\
		audioWidth: 1, audioHeight: 1,\
		success: function(me) {  $('#audio-type').html( me.pluginType);\
					me.addEventListener('seeked', function() { if (Seek == 1) { Seek = null ;  player1.play() } else { if ( (!me.paused) && (document.getElementById('bm').style.visibility != 'hidden') ) { player1.setCurrentTime( me.currentTime ) }} });\
					me.addEventListener('ended', function() { if (player1.options.loop1) { Seek = 1; me.currentTime = player2.currentTime = 0; } else { Seek = 3; me.currentTime = player2.currentTime = 0;\
                                          var autoplay = document.getElementsByClassName('yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon toggle-autoplay yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip yt-uix-button-toggled')[0];\
                                          if (autoplay) { var autoplay = document.getElementsByClassName('yt-uix-button  next-playlist-list-item yt-uix-button-opacity yt-uix-tooltip spf-link  yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-empty')[0]; if (autoplay) autoplay.click()\
                                          } } });\
					me.addEventListener('pause', function() { if ( (typeof player.getPlayerState != 'function') || (document.getElementById('bm').style.visibility != 'hidden') ) { if (Seek == 4) { Seek = null; player1.play() }; if (Seek == 2) { Seek = null }; if (!player1.paused) { player1.pause() } } });\
					me.addEventListener('play', function() { Seek = 2 ;var player1_src = document.getElementById('player1').getAttribute('src').replace('&ratebypass=yes',''); if ( (player1_src.slice(-2) == '&2') && (document.getElementById('bm').style.visibility != 'hidden') ) {Seek = 4; me.pause() }; if ( (!player1.playing) && (me.src.replace('&ratebypass=yes','') != player1_src) && (document.getElementById('bm').style.visibility != 'hidden')) { player1.play() } else { if (me.src.replace('&ratebypass=yes','') == player1_src) me.pause()} } );\
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
					me.addEventListener('seeked', function() { if (Seek == 1) { Seek = null ;  player1.play() } else { if (!me.paused) { player1.setCurrentTime( me.currentTime ) }} });\
					me.addEventListener('ended', function() { if (player1.options.loop1) { Seek = 1; me.currentTime = player2.currentTime = 0; } else { Seek = 3; me.currentTime = player2.currentTime = 0;\
                                          var autoplay = document.getElementsByClassName('yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon toggle-autoplay yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip yt-uix-button-toggled')[0];\
                                          if (autoplay) { var autoplay = document.getElementsByClassName('yt-uix-button  next-playlist-list-item yt-uix-button-opacity yt-uix-tooltip spf-link  yt-uix-button-player-controls yt-uix-button-size-default yt-uix-button-empty')[0]; if (autoplay) autoplay.click()\
                                          } } });\
					me.addEventListener('pause', function() { if (Seek == 2) { Seek = null }; if (!player1.paused) {player1.pause()} });\
					me.addEventListener('play', function() { Seek = 2 ; if ( (!player1.playing) && ( ((typeof player.getPlayerState != 'function') && (flashvars == null)) || ((document.getElementById('bm').style.visibility != 'hidden') && (flashvars != null)) ) ) { player1.play() } } );\
					me.addEventListener('loadeddata', function() { if (Seek !== 2) { Seek = 0; player1.pause() } else { } });\
}});\
}\
var Seek = null;\
if (typeof srcto != 'undefined') { var audio = srcto; document.getElementById('player2').setAttribute('src',audio);\
 if ((typeof player.getCurrentTime == 'function') && (flashvars != null)) {\
\
   var watchit = setInterval(function(){ \
if (typeof player2 === 'undefined') { clearInterval(watchit) } \
   },1000);\
 }\
}\
if ((StartPlay) ) {\
if (document.getElementsByClassName('mejs-duration')[0]) { var x = href.split('dur=')[1].split('&')[0].toHHMMSS();\
if (x.substring(0,2) == '00') { var x = x.substring(3,x.length - 4) }; document.getElementsByClassName('mejs-duration')[0].innerHTML = x.split('.')[0]  }\
if ( (typeof player.getPlayerState == 'function') && ((player.loadVideoByFlashvars) || (player.cueVideoByFlashvars) || (player.getPlayerState != -1)) ) { document.getElementById('bm').style.visibility === 'hidden'; if (typeof srcto != 'undefined') { player.pauseVideo() } } else {\
var z = document.getElementsByClassName('mejs-clear')[0];\
   if ( z !== null) {\
   switchflashhtml5()\
   }\
if (typeof srcto != 'undefined') {  }  \
}\
}\
aspect();aspect(); document.getElementById('bm4').style.display = 'inline-block'                });";
    try {
      js.appendChild(document.createTextNode(code));
      document.getElementById('video-hide').appendChild(js);
    } catch (e) {
      js.text = code;
      document.getElementById('video-hide').appendChild(js);
    }
    delete js;

};
//loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-speed.js",jq5);
loadScript( protocol + "//cdn.rawgit.com/snarly/yt6/feeba89eb6793a26476cab7c985365592c80dfd9/mep-feature-speed.js",jq5)
};
//loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-playlist.js",jq4);
loadScript( protocol + "//cdn.rawgit.com/snarly/yt6/f684d6c92fc170be45129a7f2c12069689fcc0b0/mep-feature-playlist.js",jq4)
};
//loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-loop.js",jq3);
loadScript( protocol + "//cdn.rawgit.com/snarly/yt6/49c8440ad31e83bf6d9f0951a83020cc730399d4/mep-feature-loop.js",jq3)
};
//loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mep-feature-sourcechooser.js", jq2)
loadScript( protocol + "//cdn.rawgit.com/snarly/yt6/1b69efe5d367952c307eaf7ca70ca1074ddd1c1a/mep-feature-sourcechooser.js",jq2)
};
//loadScript("https://raw.githubusercontent.com/snarly/yt6/master/mediaelement-and-player.js", jq1)
loadScript( protocol + "//cdn.rawgit.com/snarly/yt6/420ce361110fac238345befe87510645e475c8df/mediaelement-and-player.js",jq1)

jQuery(document).ready(function( $ ){
  // Default to the current location.
  var strLocation = window.location.href;
  var strHash = window.location.hash;
  var strPrevLocation = "";
  var strPrevHash = "";
 
  // This is how often we will be checkint for
  // changes on the location.
  var intIntervalTime = 1000;
 
  // This method removes the pound from the hash.
  var fnCleanHash = function( strHash ){
    return(
    strHash.substring( 1, strHash.length )
    );
  }
 
  // This will be the method that we use to check
  // changes in the window location.
  var fnCheckLocation = function(){
    // Check to see if the location has changed.
    if (strLocation != window.location.href){
 
      // Store the new and previous locations.
      strPrevLocation = strLocation;
      strPrevHash = strHash;
      strLocation = window.location.href;
      strHash = window.location.hash;
 
      // The location has changed. Trigger a
      // change event on the location object,
      // passing in the current and previous
      // location values.
      $( window.location ).trigger( "change",
        {
          currentHref: strLocation,
          currentHash: fnCleanHash( strHash ),
          previousHref: strPrevLocation,
          previousHash: fnCleanHash( strPrevHash )
        }
        ,location.href = window.location.href
      );
 
    }
  }//fnCheckLocation
 
  // Set an interval to check the location changes.
  setInterval( fnCheckLocation, intIntervalTime );
})//( jQuery );

 }
//loadScript("https://raw.githubusercontent.com/snarly/yt6/master/jquery.js", jq0);
loadScript( protocol + "//cdn.rawgit.com/snarly/yt6/747fd7ad7b481ee96ea874a8f0126df995f32006/jquery.js", jq0);

}//cw

var dw = document.querySelector('#bm1');

if (!dw) {

  dw = document.createElement('div');
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
  var bh = (expire.length < 33) ? 78 : 91
  return [ip,expire,bh]
}
//'<br>IP-address ' + expire_date()[0] +
  html.push(
   '<br>Links expire on <br>' + expire_date()[1] + 
   '<br><br>Media streams unsupported by the browser may cause it to crash or the player to freeze on playback.'
  )
  document.getElementById('bm2').innerHTML = html.join('<br>')
  var csspopupheight0 = parseInt(document.getElementById('bm2').offsetHeight) + expire_date()[2];
  dw = document.createElement('div');
  dw.id = 'bm3';
  document.getElementById('bm').appendChild(dw);
  document.getElementById('bm3').setAttribute('style','color:black;display:block; visibility:hidden; position:fixed; left:0%; top:48px; width:224px; height:' + csspopupheight0 + 'px; margin-top:0px; margin-right:0px; background:#FFFFFF; opacity:1; padding:2px 2px 2px 2px; border:1px solid #DDD; z-index:2147483648; overlay-y:hidden');
  document.getElementById('bm3').setAttribute('class','yt-uix-button-menu')
  document.getElementById('bm3').innerHTML = document.getElementById('bm2').innerHTML;
  document.getElementById('bm2').innerHTML = '';
//var csspopupheight = parseInt(document.getElementById('bm3').offsetHeight) + 10 ;document.getElementById('bm3').setAttribute('style',document.getElementById('bm3').getAttribute('style') + ';height:' + csspopupheight + 'px;' + 'overflow-y: scroll')

  dw = document.createElement('button');
  dw.id = 'bm4';
  dw.innerHTML = '<img src="//i1.ytimg.com/i/gsZadWjuuN2dEhI0mZfVfQ/mq1.jpg?v=531525b4" style="height:27px"></img><br>Download';
  var onclic = function(){
    if (document.getElementById("bm3").style.visibility === "visible") { 
      //document.getElementById("bm2").style.visibility = "hidden";
      document.getElementById("bm3").style.visibility = "hidden";
    } else { 
        //document.getElementById("bm2").style.visibility = "visible";
        document.getElementById("bm3").style.visibility = "visible";
        if ((typeof player.getPlayerState == 'function') && (flashvars != null) && (player.style.opacity == '1')) {
          document.getElementById("bm3").style.opacity = '1'
        } else {
            document.getElementById("bm3").style.opacity = '0.9'
          }
        var csspopupheight = csspopupheight0;
        var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
        if (csspopupheight > windowheight - expire_date()[2]) { 
          document.getElementById('bm3').style.height = windowheight - expire_date()[2] + 'px';document.getElementById('bm3').style.overflowY = 'scroll'
        } else { 
            document.getElementById('bm3').style.height = csspopupheight0 + 'px';document.getElementById('bm3').style.overflowY = 'hidden' 
          }
      }
  }//onclic

  document.getElementById('bm1').appendChild(dw);
  document.getElementById('bm4').setAttribute('style','font-size:10px; padding:0px 3px;max-height:30px;display:none;');
  document.getElementById('bm4').setAttribute('class','snarl-button yt-uix-button-text');
  document.getElementById('bm4').onclick = onclic;



  dw = document.createElement('button');
  dw.id = "bm5";
  dw.innerHTML = protocol + '//www.youtube.com/html5';
  document.getElementById('bm3').appendChild(dw);
  document.getElementById('bm5').style.color = "#EE0000";
  document.getElementById('bm5').onclick = function onclic(){
    //if ((lang_def == null) && (lang_asr == null)) { }
    window.open( protocol + "//www.youtube.com/html5", "_blank").focus()
  };
}



var z = getElementsByAttribute(document,"a","onclick")
for(i = 0;i<z.length-1;i++){
  var timecode = z[i].outerHTML
  if (timecode.indexOf('\<a href\=\"\#\" onclick\=\"yt.www.watch.player.seekTo\(') === 0) { 
    var timecode = z[i].outerHTML.split('\<a href\=\"\#\" onclick="')[1].split('\"')[0]
    z[i].outerHTML = z[i].outerHTML.replace(timecode,"if ((player1.currentTime) \&\& (document.getElementById('bm').style.visibility === 'visible')) { player1.currentTime = " + timecode.split('player.seekTo\(')[1].split('\)')[0] + " } else { " + timecode.split('\;')[0] + " };" + timecode.split('\;')[1] + "\;")
  }
}
var z = null

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



function resize_layers(w,h){

  if (w.replace('px','') > document.getElementById('watch7-container').offsetWidth) {
    document.getElementById('bm').style.left = v.style.left = document.getElementById('player-api').style.marginLeft = '-' + ((w.replace('px','') - document.getElementById('watch7-container').offsetWidth) / 2) + 'px';
  } else { document.getElementById('bm').style.left = v.style.left = document.getElementById('player-api').style.marginLeft = '0px' }

  document.getElementById('bm').style.width = w;
  document.getElementById('bm').style.height = h;
  document.getElementById('mep_0').style.width = w;
  document.getElementById('mep_0').style.height = h;

  var z = gclass("mejs-layer");
  var i = 0;
  for(i=0;i<z.length-1;i++){
    if ( z[i] ) {
      z[i].style.width = document.getElementById('bm').style.width;
      if (z[i].className !== 'mejs-overlay mejs-layer mejs-overlay-play') {
        z[i].style.height = document.getElementById('bm').style.height
      } else {
          z[i].style.height = parseInt(document.getElementById('bm').style.height.replace('px','') - 30) + 'px'
        }
    }
  }
  var z = document.getElementsByClassName("mejs-captions-text")[0]
  if ( typeof z === 'object') { 
    z.setAttribute("style","100%");
    z.style.fontSize = parseFloat(parseFloat(0.9 + parseFloat(document.getElementById('bm').style.height.replace("px","")) / parseFloat(32.5)) + parseFloat(parseFloat(407 / parseInt(document.getElementById('bm').style.height.replace("px",""))))) + "px";
    if (z.style.fontSize.replace("px","") < parseFloat(9.5)) z.style.fontSize = "9.5px"
    if (z.style.fontSize.replace("px","") > parseFloat(23.5)) z.style.fontSize = "23.5px"
  }

  var x = ['mejs-sourcechooser-selector','mejs-captions-selector']
  for(i=0;i<x.length;i++){
    var z = document.getElementsByClassName(x[i])[0]
    if ((document.getElementsByClassName('mejs-clear')[0]) && (typeof z != 'undefined')){
      function src_chooser(){ return [z.firstChild.offsetHeight, z.firstChild.offsetWidth] }
      var src_chooser_size = src_chooser(z);
      if (((document.getElementById('bm').style.height.replace('px','')) - 30) < src_chooser_size[0]) {
        z.style.height = ((document.getElementById('bm').style.height.replace('px','')) - 51) + 'px';
        z.style.width = ((src_chooser_size[1]) + 15) + 'px'
        z.style.overflowY = "scroll"
      } else {
          z.style.height = (src_chooser_size[0] + 1) + 'px'
          z.style.width = (src_chooser_size[1] + 1) + 'px'
          z.style.overflowY = "hidden"
        }
    }
  }
}


function switchflashhtml5() {
  if ( document.getElementById('bm').style.visibility === 'hidden') {
    if (document.getElementById('iaextractor-menu')) { document.getElementById('iaextractor-menu').parentNode.removeChild(document.getElementById('iaextractor-menu')) }
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
    if (typeof player.getPlayerState === 'function') { window.postMessage("pauseVideo", "*") };
    player2.pause()
    document.getElementsByClassName('play')[0].innerHTML = 'play';
    document.getElementById('player2').playbackRate = player1.playbackRate
    //if (player1.loaded) { player2.pause(); } else { player2.play() }
  } else {
      document.getElementById('bm').style.visibility = 'hidden';
      //document.getElementById('bm').style.display = 'none';
      document.getElementById('movie_player').style.display = 'block';
      var flashvars = document.getElementById('movie_player').getAttribute('flashvars')
      if (flashvars != null) {
      	player.style.opacity = '1.1'
      	if (typeof player.getPlayerState == 'function') {
          player.addEventListener("onStateChange", function Sync(newState) {
            switch (newState) {
              case 0: player2.pause(); break;
              case 1: if ((typeof srcto != 'undefined') && (srcto == audio)) { player2.play();break }; if (typeof v.src.split('itag=')[1] != 'undefined') { if ( (typeof AV[v.src.split('itag=')[1].split('&')[0]] !== 'string')  && (typeof A[v.src.split('itag=')[1].split('&')[0]] !== 'string') && ((typeof V[v.src.split('itag=')[1].split('&')[0]] === 'string') || (v.src.indexOf('itag=278') > -1)) || ((typeof srcto != 'undefined') && (srcto == audio)) ) { player2.play() }};break;
              case 2: player2.pause(); break;
              case 3: player2.pause();break;
              case 5: player2.pause(); break;
            }
            document.getElementById('player2').currentTime = player.getCurrentTime() ;
          });
      	}
        var v = player;
      } else {
          var v = document.getElementsByClassName('video-stream html5-main-video')[0];
        }
      var stage = document.getElementsByClassName('html5-video-content')[0];

      player1.pause();document.getElementsByClassName('play')[0].innerHTML = 'play';
      if (typeof player.getPlayerState == 'function') { 
        window.postMessage("unMute", "*"); 
        player.setPlaybackRate( document.getElementById('player2').playbackRate )        
        if (flashvars != null) {
          //document.getElementById('player2').currentTime = player.getCurrentTime()
        }
      }
    }
CtrlS(stage,v);

}

function ythtml5_size() {
  if ( (typeof player.getPlayerState == 'function') && (flashvars == null) ) {
    var bm = document.getElementById('bm').style
    var yt = document.getElementsByClassName('html5-video-content')[0].style
    v.style.width = yt.width = (bm.height.replace('px','') - 30) * parseFloat(aspect_ratio) + 'px'
    v.style.height = yt.height = (bm.height.replace('px','') - 30) + 'px'
    v.style.left = yt.left = ((bm.width.replace('px','') - (bm.height.replace('px','') - 30) * parseFloat(aspect_ratio)) / 2 >>0) + 'px';
    v.style.top = yt.top = (((bm.height.replace('px','') - (bm.height.replace('px','') - 30)) / 2 >>0) - 15) + 'px';
  }
}


function aspect2(w,h) {
  var w = w + 'px'
  var h = h + 'px'
  document.getElementById('player-api').style.height = h;
  document.getElementById('player-api').style.width = w;
  document.getElementById('watch7-sidebar').style.marginTop = parseInt(parseInt(fix_Height().replace('px','')) - 390) + 'px';
  
  resize_layers(w,h)
  ythtml5_size()
  
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
    if (dw != null) { dw.parentNode.removeChild(dw)}
    dw = document.createElement('div');
    dw.id = 'aspect';
    dw.innerHTML = '<input id="a_width" value="' + w.replace("px","") + '" style="display:inline-block;width:30px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) aspect2(value,document.getElementById(\'a_height\').value)" onfocus="value=value;document.getElementById(\'a_height\').value=document.getElementById(\'a_height\').value"></input>x<input id="a_height" value="' + h.replace("px","") + '" style="display:inline-block;width:30px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) aspect2(document.getElementById(\'a_width\').value,value)" onfocus="value=value;document.getElementById(\'a_width\').value=document.getElementById(\'a_width\').value"></input>px';
    document.getElementById('watch7-notification-area').insertBefore(dw,document.getElementById('yt-alert-message'))
    document.getElementById('aspect').setAttribute('style','display:inline-block;right:0%;position:absolute;color:#333');

    //player class="watch-playlist watch-playlist-collapsed watch-medium" "watch-playlist watch-small"
    //class="player-width player-height off-screen-target player-api"
    document.getElementById('watch7-sidebar-ads').style.display = 'none';
    document.getElementById('player-api').style.height = h;
    document.getElementById('player-api').style.width = '100%';
    document.getElementById('watch7-sidebar').style.marginTop = parseInt(parseInt(fix_Height().replace('px','')) - 390) + 'px';

    resize_layers(w,h)
    ythtml5_size()
    
    document.getElementById('player1').style.height = (h.replace('px','') - 30) + 'px';
    document.getElementById('player1').style.width = '100%'
    document.getElementById('player').setAttribute('class',class_1)
    document.getElementById('player').setAttribute('class',class_0.replace('small_a','small'))
  } else {
      var w = fix_Width();
      var h = fix_Height();
      dw = document.getElementById('aspect')
      if (dw != null) { dw.parentNode.removeChild(dw)}
      document.getElementById('watch7-sidebar').style.marginTop = '-390px';
      document.getElementById('player-api').style.height = h;
      document.getElementById('player-api').style.width = w;

      resize_layers(w,h)
      ythtml5_size()
      
      document.getElementById('player1').style.height = (h.replace('px','') - 30) + 'px';
      document.getElementById('player1').style.width = '100%'
      document.getElementById('player').setAttribute('class',class_0.replace('small_a','small'))
   }
}


function deldiv(){
  if (typeof ($) !== 'undefined') { $.removeData([webm, audio]); }
  if ( (location.href.indexOf("aC4BC-Hxq9g") != -1 ) ) { clearInterval(watchit);}
  if (typeof window.watchit != 'undefined')  { clearInterval(watchit);}
  document.getElementById('watch7-sidebar').style.marginTop = '-390px';
  document.getElementById('player-api').style.height = h_init;
  document.getElementById('player-api').style.width = w_init;
  document.getElementById('player-api').style.display = 'block';
  v.style.left = document.getElementById('player-api').style.marginLeft = '0px'
  var watchit = document.getElementById('bm')
  if (watchit != null) {
    document.getElementById('bm').style.width = w_init;
    document.getElementById('bm').style.height = h_init;

    ythtml5_size()
  }
  document.getElementById('movie_player').style.display = 'block';
  document.getElementById('masthead-positioner-height-offset').style = '';
  document.getElementById('remove').style.display = 'none';
  document.getElementById('remove').parentNode.removeChild(document.getElementById('remove'))
  document.getElementById('controls').parentNode.removeChild(document.getElementById('controls'))
  document.getElementById("snarls_player").parentNode.removeChild(document.getElementById("snarls_player"))
  //document.getElementById("watch7-notification-area").parentNode.removeChild(document.getElementById("watch7-notification-area"))
  var dw = document.getElementById('mejs-clear')
    var myNode = document.getElementById("aspect");
  if (myNode !== null) { while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);};myNode.parentNode.removeChild(myNode)}
  var myNode = document.getElementById("bm1");
  if (myNode !== null) { while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);};myNode.parentNode.removeChild(myNode)}
  var myNode = document.getElementById("bm");
  if (myNode !== null) { while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);};myNode.parentNode.removeChild(myNode)}
  //window.location.reload(true);
  //var loc = window.location.href; // or a new URL
  //window.location.href = loc + '?n=' + new Date().getTime(); // random number
  if ((typeof (MediaElementPlayer) !== 'undefined') && ((dw !== null)  || ((typeof player.getPlayerState == 'function') && (player.getPlayerState !== -1))) ) { location.href = window.location.href }
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
  document.getElementById('remove').setAttribute('style','display:inline-block');
  //document.getElementById('remove').setAttribute('class','vve-check');

} else { document.getElementById('remove').style.display = "inline-block"};
  if (remove){
    remove.innerHTML =  '<button onclick="switchflashhtml5()" class="yt-uix-button-text"><img src="//s.ytimg.com/yts/img/HTML5_1Color_Black-vfl902gVJ.png" style="vertical-align:middle;height:12px;padding:0px""></img></button><button onclick="aspect()" class="yt-uix-button-text">«&#8703;»</button><br><button onclick="deldiv()" class="yt-uix-button-text">remove</button>'
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
  //    document.getElementById('masthead-search').setAttribute('style','display:inline-block;width:650px;max-width:650px;overflow:hidden;margin-top:3px;padding:0px;position:relative;')
  //    document.getElementById('masthead-search').parentNode.insertBefore(js, document.getElementById('masthead-search').nextSibling);
  document.getElementById('remove').parentNode.insertBefore(js, document.getElementById('remove').nextSibling);
  document.getElementById('controls').setAttribute('style','display:inline-block;padding-left: 1px');

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

  ythtml5_size()

} else {
    v.style.left = 0;
    v.style.top = 0;
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
        case 'zoomin yt-uix-button-text':
          zoom = zoom + 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;

/* Decrease zoom and set the transformation */
        case 'zoomout yt-uix-button-text':
          zoom = zoom - 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;

/* Increase rotation and set the transformation */
        case 'rotateleft yt-uix-button-text':
          rotate = rotate + 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
/* Decrease rotation and set the transformation */
        case 'rotateright yt-uix-button-text':
          rotate = rotate - 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
//          var width = document.getElementById('player1').getAttribute('width') - 5;
//          document.getElementById('player1').setAttribute('width', width);

        break;

/* Move video around by reading its left/top and altering it */
        case 'left yt-uix-button-text':
          v.style.left = (parseInt(v.style.left,10) - 5) + 'px';
        break;
        case 'right yt-uix-button-text':
          v.style.left = (parseInt(v.style.left,10) + 5) + 'px';
        break;
        case 'up yt-uix-button-text':
          v.style.top = (parseInt(v.style.top,10) - 5) + 'px';
        break;
        case 'down yt-uix-button-text':
          v.style.top = (parseInt(v.style.top,10) + 5) + 'px';
        break;

/* Reset all to default */
        case 'reset yt-uix-button-text':
        if (v != player) {
          zoom = 1;
          rotate = 0;
          if ( (typeof player.getPlayerState == 'function') && (flashvars == null) && (document.getElementById('bm').style.visibility == 'hidden') ) {

            ythtml5_size()

          } else {
              v.style.top = 0 + 'px';
              v.style.left = 0 + 'px';
            }
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        } else { var opacity = v.style.opacity; v.setAttribute("style","top:0px; left:0px; opacity:"+opacity); zoom = 1; rotate = 0; }
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

var z = gclass("ad-container-single-media-element-annotations")
if (typeof z[0] != 'undefined') z[0].style.display = "none"


CtrlS(stage,v);


var StartPlay = true;
