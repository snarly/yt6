var noads = setInterval(function(){
  var ads = document.getElementsByClassName('videoAdUiSkipButton')[0]; if (ads) { ads.click();ads.setAttribute("class","videoAdUiSkipButton") }
  var ads = document.getElementsByClassName("video-ads html5-stop-propagation")[0]; if (ads) { ads.parentNode.removeChild(ads) };
  var ads = document.getElementById("google_ads_frame1"); if (ads) { ads.parentNode.removeChild(ads); clearInterval(noads) }
            },2000)

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
    138: '2160p DASH H.264 vfps',
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
  var fs = new RegExp(    sprintf('function %s[^}]+}[^}]+}', fcnm.replace('$', '\\$'))  );
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
  }

  eval(rpt.match(fcobj()[0])[0].split(" " + fcobj()[1] + "=").join(" dekrypt0="));// + rpt.match(fs)[0].split(fcobj()[1]).join("dekrypt0");
//eval(rpt.match(fcobj()[0])[0].replace(fcobj()[1],"dekrypt0") + rpt.match(fs)[0].split(fcobj()[1]).join("dekrypt0"));
  var fcnm = 'function fcnm(' + rpt.match(fs)[0].split("(")[1].split(")")[0] + '){' + rpt.match(fs)[0].split(fcobj()[1]+".").join("dekrypt0.").split("\"").join("'").split("){")[1]
  var fcnm = "function " + fcnm.split("function ")[1]
//  var z = rpt.match(fs)[0].split(fcobj()[1]+".").join("dekrypt0.").split("\"").join("'").split("){")[2]
//  if (typeof z != 'undefined') { var fcnm = fcnm + "){" + z }
  eval(fcnm)

function dc(sg) {
  //return eval(fcnm + '("' + sg + '")');
  return fcnm(sg);
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
    if (qq.indexOf('DASH') != -1) { if (!aspect_ratio > 0) { var aspect_ratio = ft.toString().split("size=")[1].split("&")[0].split(",")[0] } }
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
        var onclic = 'sauce = getElementsByAttribute(document,"input","name","mep_0_sourcechooser"); if ((sauce != undefined) && (sauce.length != 0)) { for (i=0;j=(sauce.length-1);i++) { sauce[i].removeAttribute("checked");if (("'+href+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2)+'" == sauce[i].getAttribute("value").replace("https:","")) || ("'+href.substring(0, href.length-2).replace("&ratebypass=yes","")+'" == sauce[i].getAttribute("value").replace("https:",""))) { if (document.getElementById("bm0").style.visibility == "visible") { if ((!player1.paused) || (!player2.paused)) { var p1load = 1; player2.pause();  } else { var p1load = null }; } else { if ((typeof player().getPlayerState == "function") && (flashvars == null)) { if ( player().getPlayerState() == "1") { var p1load = 1; v.pause() } else { var p1load = null }}; }; if (("https:'+href+'" == audio) && (navigator.userAgent.indexOf("Chrome") < -1)) { alert("Warning: Google Chrome will stop buffering if the AUDIO and VIDEO sources share the same location.\\nThis happens when you switch from a DASH/VP9 playback over to the designated audio track to play on its own.\\nIt\'s a bug to be fixed.") };  document.getElementsByClassName("video-stream html5-main-video")[0].setAttribute("src","https:' + href + '");document.getElementById("player1").setAttribute("src","https:' + href + '"); sauce[i].setAttribute("checked","checked");document.getElementById("player1").setAttribute("src","https:' + href + '"); if (p1load == 1) { if ((typeof player().getPlayerState == "function") && (flashvars == null)) { v.play();v.pause();v.play() } else { if (document.getElementById("bm0").style.visibility == "visible") { player1.load(); player2.load(); }} } ;return false};if (i === j){return true;} }};return false';
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
        if (qq.indexOf("fps") > -1) y = y + 1;
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
          href = getElementsByAttribute(parseXml(xhr.responseText),"Representation","id",b)[0].textContent.replace(protocol,'');
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


    function onDownload(x) {
      document.location = 'data:Application/octet-stream,' + encodeURIComponent(x);
    }


var cw = document.querySelector('#bm0');

if (!cw) {

function fix_Width() {
var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
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
            var w_base = '426px'
          }
      }
  }
return w_base
}

function fix_Height() {
var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
var windowwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
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
            var h_base = '240px'
          }
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
  var h = document.getElementById('player-api').style.height; if (h.replace('px','') < 390) {document.getElementById('player-api').style.height = '390px';document.getElementById('watch7-sidebar').style.marginTop = 'height:-400px'}
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
  cw.id = 'bm0';
  document.getElementById('movie_player').parentNode.insertBefore(cw, document.getElementById('movie_player').nextSibling);
  document.getElementById('bm0').setAttribute('style','background:#111;width: '+w+'; height: '+h+';overflow: hidden;visibility:hidden;');
  document.getElementById('bm0').setAttribute('class','html5-video-content');
  var player = function(){ return document.getElementById("movie_player") };

  var js = document.createElement('param');
  document.getElementById('bm0').appendChild(js);
  document.getElementById('movie_player').setAttribute('wmode','transparent');


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

    var js = document.createElement('video');
    js.id = 'player1';
    js.width = w;
    js.height = h;
    js.controls = 'controls';
    js.preload = "none";
    document.getElementById('bm0').appendChild(js);
    delete js;
  if (typeof document.getElementsByClassName('video-stream html5-main-video')[1] === 'undefined') {
    document.getElementById('player1').setAttribute('class','video-stream html5-main-video')
    document.getElementById('player1').style.zIndex = "0";
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

var sref = unescape(args.ttsurl) + '&type=list&tlangs=1&fmts=0&asrs=1';
if (typeof sref.replace('&type=list&tlangs=1&fmts=0&asrs=1','') != 'undefined') {
  //      sref += '&type=track&lang=en&name&kind&fmt=1';
  //      sref += '&type=list&tlangs=1&fmts=0&asrs=1';
  xhr.open('get', sref, false);
  xhr.send();
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
        document.getElementById(js.id).setAttribute("srclang",lang_codeA[i])
        document.getElementById(js.id).setAttribute("src",sref)
      }
    }
  }

    var js = document.createElement('div');
    js.id = 'audio-hide';
    js.style = "display: none;visibility: hidden";
    document.getElementById('bm0').appendChild(js);
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
        //var player = document.getElementById("movie_player");
        if (typeof player()[cmd] == 'function') { player()[cmd]() }
        return false;
      }
      window.addEventListener("message", ytplayercmd);

      if (typeof player !== 'undefined') {
          //    window.postMessage("pauseVideo", "*");
          var Sync = function(newState) {
            switch (newState) {
              case 0: player2.pause(); break;
              case 1: if ((typeof srcto != 'undefined') && (srcto == audio)) { player2.play();break }; if (typeof v.src.split('itag=')[1] != 'undefined') { if ( (typeof AV[v.src.split('itag=')[1].split('&')[0]] !== 'string')  && (typeof A[v.src.split('itag=')[1].split('&')[0]] !== 'string') && ((typeof V[v.src.split('itag=')[1].split('&')[0]] === 'string') || (v.src.indexOf('itag=278') > -1)) || ((typeof srcto != 'undefined') && (srcto == audio)) ) { player2.play() }};break;
              case 2: player2.pause(); break;
              case 3: player2.pause();break;
              case 5: player2.pause(); break;
            }
            document.getElementById('player2').currentTime = player().getCurrentTime() ;
          }

          if (typeof player().getPlayerState == 'function') { window.postMessage("unMute", "*") }
          if ( (player === document.getElementById("movie_player")) && (typeof player().getPlayerState == 'function') ) {
            if (player.style.opacity != '1.1') { player().style.opacity = '1' }
            player().addEventListener("onStateChange", "Sync");
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
document.getElementById('bm0').appendChild(js)

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
                startLanguage:'',\
                translationSelector: true,\
                translations:['en','de','es'],\
                success: function(me) {  $('#audio-type').html( me.pluginType);\
                                        me.addEventListener('loadedmetadata', function() { var dw = document.getElementById('aspect'); if ( (dw) && (Math.round((w.replace('px','') / aspect_ratio)) != Math.round(aspect_ratio)) ) { aspect2(document.getElementById('bm0').style.width.replace('px',''),document.getElementById('bm0').style.height.replace('px','')); } else { aspect();aspect() }; document.getElementById('player1').width = this.videoWidth;  document.getElementById('player1').height = this.videoHeight; });\
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
                                          var autoplay = document.getElementsByClassName('playlist-nav-controls');\
                                          if (typeof autoplay == 'object') { var autoplay = autoplay[0].innerHTML.split('\>')[0].split('yt-uix-button-toggled')[1];\
                                            if (typeof autoplay == 'string') { ;;\
                                              document.getElementsByClassName('yt-uix-scroller-scroll-unit  currently-playing')[0].nextSibling.nextSibling.lastChild.previousSibling.click();\
                                            }} } });\
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
					me.addEventListener('seeked', function() { if (Seek == 1) { Seek = null ;  player1.play() } else { if ( (!me.paused) && (document.getElementById('bm0').style.visibility != 'hidden') ) { player1.setCurrentTime( me.currentTime ) }} });\
					me.addEventListener('ended', function() { if (player1.options.loop1) { Seek = 1; me.currentTime = player2.currentTime = 0; } else { Seek = 3; me.currentTime = player2.currentTime = 0;\
                                          var autoplay = document.getElementsByClassName('playlist-nav-controls');\
                                          if (typeof autoplay == 'object') { var autoplay = autoplay[0].innerHTML.split('\>')[0].split('yt-uix-button-toggled')[1];\
                                            if (typeof autoplay == 'string') { ;;\
                                              document.getElementsByClassName('yt-uix-scroller-scroll-unit  currently-playing')[0].nextSibling.nextSibling.lastChild.previousSibling.click();\
                                            }} } });\
					me.addEventListener('pause', function() { if ( (typeof player().getPlayerState != 'function') || (document.getElementById('bm0').style.visibility != 'hidden') ) { if (Seek == 4) { Seek = null; player1.play() }; if (Seek == 2) { Seek = null }; if (!player1.paused) { player1.pause() } } });\
					me.addEventListener('play', function() { Seek = 2 ;var player1_src = document.getElementById('player1').getAttribute('src').replace('&ratebypass=yes',''); if ( (player1_src.slice(-2) == '&2') && (document.getElementById('bm0').style.visibility != 'hidden') ) {Seek = 4; me.pause() }; if ( (!player1.playing) && (me.src.replace('&ratebypass=yes','') != player1_src) && (document.getElementById('bm0').style.visibility != 'hidden')) { player1.play() } else { if (me.src.replace('&ratebypass=yes','') == player1_src) me.pause()} } );\
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
                                          var autoplay = document.getElementsByClassName('playlist-nav-controls');\
                                          if (typeof autoplay == 'object') { var autoplay = autoplay[0].innerHTML.split('\>')[0].split('yt-uix-button-toggled')[1];\
                                            if (typeof autoplay == 'string') { me.setSrc( '' );;\
                                              document.getElementsByClassName('yt-uix-scroller-scroll-unit  currently-playing')[0].nextSibling.nextSibling.lastChild.previousSibling.click();\
                                            }} } });\
					me.addEventListener('pause', function() { if (Seek == 2) { Seek = null }; if (!player1.paused) {player1.pause()} });\
					me.addEventListener('play', function() { Seek = 2 ; if ( (!player1.playing) && ( ((typeof player().getPlayerState != 'function') && (flashvars == null)) || ((document.getElementById('bm0').style.visibility != 'hidden') && (flashvars != null)) ) ) { player1.play() } } );\
					me.addEventListener('loadeddata', function() { if (Seek !== 2) { Seek = 0; player1.pause() } else { } });\
}});\
}\
var Seek = null;\
if ((StartPlay) ) {\
if (document.getElementsByClassName('mejs-duration')[0]) { var x = href.split('dur=')[1].split('&')[0].toHHMMSS();\
if (x.substring(0,2) == '00') { var x = x.substring(3,x.length - 4) }; document.getElementsByClassName('mejs-duration')[0].innerHTML = x.split('.')[0]  }\
if ( (typeof player().getPlayerState == 'function') && ((player.loadVideoByFlashvars) || (player.cueVideoByFlashvars) || (player.getPlayerState != -1)) ) { document.getElementById('bm0').style.visibility = 'hidden'; if (typeof srcto != 'undefined') { player().pauseVideo() } } else {\
var z = document.getElementsByClassName('mejs-clear')[0];\
   if ( z !== null) {\
   switchflashhtml5()\
   }\
if (typeof srcto != 'undefined') {  }  \
}\
}\
aspect();aspect(); document.getElementById('bm4').style.display = 'inline-block';\
if ( getElementsByAttribute(document,'div','class','yt-masthead-logo-container')[0].getAttribute('class').indexOf('doodle') ) { document.getElementById('logo-container').style.width = '88px'; document.getElementById('bm3').style.top = document.getElementById('masthead-positioner').offsetHeight - 2 + 'px' }                 });";
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
loadScript( protocol + "//cdn.rawgit.com/snarly/yt6/1a2653c6f02a907c52e6a9a9d6f071e05926d95b/mediaelement-and-player.js",jq1)
//loadScript( protocol + "//cdn.rawgit.com/snarly/yt6/96caae2d5b49efe934ef93ac11cc4a5a37edd249/mediaelement-and-player.js",jq1)
//loadScript( protocol + "//cdn.rawgit.com/snarly/yt6/420ce361110fac238345befe87510645e475c8df/mediaelement-and-player.js",jq1)

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

document.getElementById("placeholder-player").width = document.getElementById("placeholder-player").offsetWidth
document.getElementById("placeholder-player").height = document.getElementById("placeholder-player").offsetHeight
document.getElementById("theater-background").width = document.getElementById("theater-background").offsetWidth

  // This will be the method that we use to check
  // changes in the window location.
  var fnCheckLocation = function(){

    var watch = document.getElementById("page");if (watch) var watch = watch.getAttribute("class"); if ((typeof watch == 'string') && (watch.indexOf('watch') == -1)) var watch = null
    var autoscale = document.getElementById("placeholder-player")
    var reset = document.getElementsByClassName('reset yt-uix-button-text')[0]
    if ((autoscale) && (typeof reset != 'undefined')) {
      if ((autoscale.offsetWidth != autoscale.width) && (autoscale.offsetHeight != autoscale.height)) { //alert('0 ' + autoscale.height +" "+ autoscale.offsetHeight); 
        autoscale.width = autoscale.offsetWidth;
        autoscale.height = autoscale.offsetHeight;
        //aspect();aspect()
        if (document.getElementById('bm0')) ythtml5_size()
        //document.getElementsByClassName('reset yt-uix-button-text')[0].click()
        bestfit()
      } else {
          if (autoscale.offsetHeight != autoscale.height) { //alert('2 ' + autoscale.height +" "+ autoscale.offsetHeight); 
            autoscale.height = autoscale.offsetHeight;
            //aspect();aspect()
            if (document.getElementById('bm0')) ythtml5_size()
            if ( (!document.getElementById("aspect")) && (document.getElementById('watch7-sidebar').currentStyle || window.getComputedStyle(document.getElementById('watch7-sidebar'))).marginLeft == '0px' ) {
              //document.getElementsByClassName('reset yt-uix-button-text')[0].click();
              bestfit()
              ythtml5_size()
            }
          } else {
              if (autoscale.offsetWidth != autoscale.width) { //alert('1 width:' + autoscale.width +" offsetWidth:"+ autoscale.offsetWidth +" thb:"+ document.getElementById("theater-background").offsetWidth ); 
                autoscale.width = autoscale.offsetWidth;
                //aspect();aspect()
                if (document.getElementById('bm0')) ythtml5_size()
                //document.getElementsByClassName('reset yt-uix-button-text')[0].click()
                bestfit()
              }
            }
        }
        var z = document.getElementsByClassName('video-stream html5-main-video')[2];
        if (z == undefined) { 
          var z = document.getElementsByClassName('video-stream html5-main-video')[1];
          if (z == undefined) { 
            var z = document.getElementsByClassName('video-stream html5-main-video')[0];
          }
        }
        if (z) {
          if ((typeof player().getPlayerState == 'function') && (player().getAttribute('flashvars') == null)) {
            var x = document.getElementById('controls').prop
            if ((z.prop != null) && (z.style[x] == 'none') {
              z.style[x] = z.prop
            } else {
            	z.prop = z.style[x]
              }
          }
        } 
    }

if (document.getElementById("theater-background").offsetWidth != document.getElementById("theater-background").width) {
  document.getElementById("theater-background").width = document.getElementById("theater-background").offsetWidth
}

    // Check to see if the location has changed.
    if ((strLocation != window.location.href) || (!watch)) {
 
      // Store the new and previous locations.
      strPrevLocation = strLocation;
      strPrevHash = strHash;
      strLocation = window.location.href;
      strHash = window.location.hash;
 
      // The location has changed. Trigger a
      // change event on the location object,
      // passing in the current and previous
      // location values.
      if ( (window.location.href.indexOf("Ypkv0HeUvTc") > -1 ) || (strPrevLocation.indexOf("aC4BC-Hxq9g") > -1 ) ) {
        location.href = window.location.href
      } else {
          $( window.location ).trigger( "change",
            {
              currentHref: strLocation,
              currentHash: fnCleanHash( strHash ),
              previousHref: strPrevLocation,
              previousHash: fnCleanHash( strPrevHash )
            }
          );
         if (document.getElementById('snarls_player')) deldiv();
        }

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
  html.splice(1,0,'Direct links to YouTube media<br>for IP address: '+ expire_date()[0])
  html.push(
   '<br>Links will expire on <br>' + expire_date()[1] + 
   '<br><br>Media streams unsupported by the browser may cause it to crash or the player to freeze on playback.'
  )
  document.getElementById('bm2').innerHTML = html.join('<br>')
  var csspopupheight0 = parseInt(document.getElementById('bm2').offsetHeight) + expire_date()[2];
  dw = document.createElement('div');
  dw.id = 'bm3';
  document.getElementById('body-container').appendChild(dw);
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
        var csspopupheight = csspopupheight0; var csspopupheight = Math.max(csspopupheight0, document.getElementById('bm3').scrollHeight);
        var windowheight = parseInt(window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);
        if (csspopupheight > windowheight - expire_date()[2]) { 
          document.getElementById('bm3').style.height = windowheight - expire_date()[2] + 'px';document.getElementById('bm3').style.overflowY = 'scroll'
        } else { 
            document.getElementById('bm3').style.height = csspopupheight + 'px';document.getElementById('bm3').style.overflowY = 'hidden' 
          }
      }
  }//onclic

  document.getElementById('bm1').appendChild(dw);
  document.getElementById('bm4').setAttribute('style','font-size:10px; padding:0px 3px; width: 52px; max-height:30px;display:none;');
  document.getElementById('bm4').setAttribute('class','snarl-button yt-uix-button-text');
  document.getElementById('bm4').onclick = onclic;



  dw = document.createElement('button');
  dw.id = "bm5";
  dw.innerHTML = protocol + '//www.youtube.com/html5';
  document.getElementById('bm3').appendChild(dw);
  document.getElementById('bm5').style.color = "#EE0000";
  document.getElementById('bm5').setAttribute('onclick', 'window.open( "' + protocol + '//www.youtube.com/html5", "_blank").focus() ')
}

document.getElementById("bm3").style.top = document.getElementById("masthead-positioner").offsetHeight - 2 + "px"

var z = getElementsByAttribute(document,"a","onclick")
for(i = 0;i<z.length-1;i++){
  var timecode = z[i].outerHTML
  if (timecode.indexOf('\<a href\=\"\#\" onclick\=\"yt.www.watch.player.seekTo\(') === 0) { 
    var timecode = z[i].outerHTML.split('\<a href\=\"\#\" onclick="')[1].split('\"')[0]
    z[i].outerHTML = z[i].outerHTML.replace(timecode,"if ((player1.currentTime) \&\& (document.getElementById('bm0').style.visibility === 'visible')) { player1.currentTime = " + timecode.split('player.seekTo\(')[1].split('\)')[0] + " } else { " + timecode.split('\;')[0] + " };" + timecode.split('\;')[1] + "\;")
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
          if ((document.getElementById('a_width').value / aspect_ratio) < (document.getElementById('a_height').value * aspect_ratio)) {
            if ((document.getElementById('a_width').value / aspect_ratio) < fix_Width().replace('px','')) {
              aspect2(document.getElementById('a_width').value,Math.round(document.getElementById('a_width').value / aspect_ratio));
              document.getElementById('a_height').value = Math.round(document.getElementById('a_width').value / aspect_ratio)
              document.getElementById('a_width').value = document.getElementById('a_width').value
            } else {
                aspect2(fix_Width().replace('px',''),Math.round(fix_Width().replace('px','') / aspect_ratio));
                document.getElementById('a_height').value = Math.round(fix_Width().replace('px','') / aspect_ratio)
                document.getElementById('a_width').value = fix_Width().replace('px','')
              }
          } else {
              if ((document.getElementById('a_height').value * aspect_ratio) < fix_Height().replace('px','')) {
                aspect2(Math.round(document.getElementById('a_height').value * aspect_ratio), document.getElementById('a_height').value);
                document.getElementById('a_width').value = Math.round(document.getElementById('a_height').value * aspect_ratio)
                document.getElementById('a_height').value = document.getElementById('a_height').value
              } else {
                  aspect2(Math.round(fix_Height().replace('px','') * aspect_ratio), fix_Height().replace('px',''));
                  document.getElementById('a_width').value = Math.round(fix_Height().replace('px','') * aspect_ratio)
                  document.getElementById('a_height').value = fix_Height().replace('px','')
                }
            }
        } else {
              aspect2(fix_Width().replace('px',''),fix_Height().replace('px',''));
          }
}

function resize_layers(w,h){

  document.getElementById('bm0').style.width = w;
  document.getElementById('bm0').style.height = h;
  document.getElementById('bm0').style.left = "auto"
  document.getElementById('mep_0').style.width = w;
  document.getElementById('mep_0').style.height = h;
  document.getElementsByClassName('mejs-clear')[0].style.width = w
  document.getElementsByClassName('mejs-clear')[0].style.height = h

  var tiny = document.getElementById('watch7-sidebar').currentStyle || window.getComputedStyle(document.getElementById('watch7-sidebar'))
  //var tiny0 = document.getElementById('watch7-sidebar-contents').currentStyle || window.getComputedStyle(document.getElementById('watch7-sidebar-contents'));alert("w7s:" + tiny.marginLeft + " w7sc" + tiny0.marginLeft)
  var z = document.getElementById('placeholder-player').firstChild.style;
  if (typeof z !== 'object') { document.getElementById('placeholder-player').innerHTML = '<div class="player-api player-width player-height"></div>'; }

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
                document.getElementById('watch7-notification-area').style.top = '-' + y + 'px'
              }
              if (parseInt(a.style.left.replace('px','')) < parseInt('-' + (document.getElementById('placeholder-player').offsetWidth / 2))) {
                a.style.left = document.getElementById('player-api').style.left = '-' + (document.getElementById('placeholder-player').offsetWidth / 2) + 'px'
              }
            }
  }

if (parseInt(tiny.marginLeft.replace('px','')) > 100) {
  document.getElementById('watch7-notification-area').style.top = "0px"
} else {
    document.getElementById('watch7-sidebar').removeAttribute('style')
//style.top = parseInt(h.replace('px','')) + '60' + 'px'

  }



  var z = gclass("html5-progress-bar")
  if ((z != null) && (z[0])) z[0].style.maxWidth = w
  var z = document.getElementById('ytp-chrome-bottom')
  if ((z != null) && (z[0])) { z[0].style.width = w; z[0].style.zIndex = '900px' }
  var z = gclass("mejs-layer");
  var i = 0;
  for(i=0;i<z.length-1;i++){
    if ( z[i] ) {
      z[i].style.width = document.getElementById('bm0').style.width;
      if (z[i].className !== 'mejs-overlay mejs-layer mejs-overlay-play') {
        z[i].style.height = document.getElementById('bm0').style.height
      } else {
          z[i].style.height = parseInt(document.getElementById('bm0').style.height.replace('px','') - 30) + 'px'
        }
    }
  }
  var z = document.getElementsByClassName("mejs-captions-text")[0]
  if ( typeof z === 'object') { 
    z.setAttribute("style",document.getElementById('bm0').style.width);
    z.style.fontSize = parseFloat(parseFloat(0.9 + parseFloat(document.getElementById('bm0').style.height.replace("px","")) / parseFloat(32.5)) + parseFloat(parseFloat(407 / parseInt(document.getElementById('bm0').style.height.replace("px",""))))) + "px";
    if (z.style.fontSize.replace("px","") < parseFloat(9.5)) z.style.fontSize = "9.5px"
    if (z.style.fontSize.replace("px","") > parseFloat(23.5)) z.style.fontSize = "23.5px"
  }

  var x = ['mejs-sourcechooser-selector','mejs-captions-selector']
  for(i=0;i<x.length;i++){
    var z = document.getElementsByClassName(x[i])[0]
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
  var z = document.getElementById("bm3")
  if (z) z.style.top = document.getElementById("masthead-positioner").offsetHeight - 2 + "px" 

  ythtml5_size()

}


function switchflashhtml5() {
  var flashvars = player().getAttribute('flashvars')
  if ( document.getElementById('bm0').style.visibility === 'hidden') {
    if (document.getElementById('iaextractor-menu')) { document.getElementById('iaextractor-menu').parentNode.removeChild(document.getElementById('iaextractor-menu')) }
    if (typeof player().getPlayerState === 'function') { window.postMessage("pauseVideo", "*") }
    player2.pause()
    document.getElementById('movie_player').style.display = 'none';
    document.getElementById('bm0').style.display = 'block';
    document.getElementById('bm0').style.visibility = 'visible';
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
    document.getElementsByClassName('play')[0].innerHTML = 'play';
    document.getElementById('player2').playbackRate = player1.playbackRate
    if (flashvars != null) { player().removeEventListener("onStateChange", Sync); window.removeEventListener("message", window.ytplayercmd); delete window.ytplayercmd}
  } else {
      document.getElementById('bm0').style.visibility = 'hidden';
      player().style.display = 'block';
      player1.pause();document.getElementsByClassName('play')[0].innerHTML = 'play';
      if (flashvars != null) {
      	player().style.opacity = '1.1'
      	//if (typeof player.getPlayerState == 'function') {
document.getElementById("snarls_player").innerHTML = document.getElementById('movie_player').outerHTML; var z = document.createElement("embed"); z.id = "movie_player_"; document.getElementById("player-api").insertBefore(z, document.getElementById("bm0")); document.getElementById("bm0").parentNode.removeChild(document.getElementById('movie_player')); document.getElementById("movie_player_").outerHTML = document.getElementById("snarls_player").innerHTML; 
          //window.ytplayercmd = function(e) {
          //  var cmd = e.data;
          //  var player = document.getElementById("movie_player");
          //  if (typeof player[cmd] == 'function') { player[cmd]() }
          //  return false;
          //}
          window.addEventListener("message", window.ytplayercmd);
          document.getElementById('movie_player').addEventListener("onStateChange", Sync);

      	//}

        var v = player();
        //document.getElementById('player2').currentTime = player().getCurrentTime()
      } else {
          var v = document.getElementsByClassName('video-stream html5-main-video')[0];
        }
      var stage = document.getElementsByClassName('html5-video-content')[0];

      if (typeof player().getPlayerState == 'function') { 
        window.postMessage("unMute", "*"); 
        player().setPlaybackRate( document.getElementById('player2').playbackRate )        
      }
    }
CtrlS(stage,v);

}

function ythtml5_size() {
  if ( (typeof player().getPlayerState == 'function') && (flashvars == null) ) {
    var x = 30
    var y = 15
    var bm = document.getElementById('bm0').style
    var yt = document.getElementsByClassName('html5-video-content')[0].style
    if (document.getElementById('aspect')){
      v.style.width = yt.width = Math.round((bm.height.replace('px','') - x) * parseFloat(aspect_ratio)) + 'px'
      v.style.left = yt.left = (Math.round((bm.width.replace('px','') - (bm.height.replace('px','') - x) * parseFloat(aspect_ratio)) / 2) >>0) + 'px';
    } else {
    	v.style.width = yt.width = bm.width
    	v.style.left = yt.left = '0px'
      }
    v.style.height = yt.height = (bm.height.replace('px','') - x) + 'px'
    v.style.top = yt.top = (((bm.height.replace('px','') - (bm.height.replace('px','') - x)) / 2 >>0) - y) + 'px';
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
  
  document.getElementById('player1').style.height = h;
  document.getElementById('player1').style.width = w;
}

function aspect() { 
  var class_0 = document.getElementById('player').getAttribute('class')
  var class_1 = class_0.replace('small','small_a').replace('medium','medium_a').replace('large','large_a')

  if ( document.getElementById('placeholder-player').offsetWidth > parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() ) {
    var playerwidth = parseInt(window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth) - getScrollbarWidth() + 'px'
  } else {
      var playerwidth = document.getElementById('placeholder-player').offsetWidth + 'px'
    }
      
  if (document.getElementById('bm0').style.width != playerwidth ) {
    var w = playerwidth
    var h = Math.round((w.replace('px','') / aspect_ratio)) + 'px';

    var dw = document.getElementById('aspect')
    if (dw != null) { dw.parentNode.removeChild(dw)}
    document.getElementById('theater-background').style.backgroundColor = "#1B1B1B"
    dw = document.createElement('div');
    dw.id = 'aspect';
    dw.innerHTML = '<input id="a_width" value="' + w.replace("px","") + '" style="display:inline-block;width:30px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) aspect2(document.getElementById(\'a_width\').value,document.getElementById(\'a_height\').value)" onfocus="document.getElementById(\'a_width\').value=document.getElementById(\'a_width\').value;document.getElementById(\'a_height\').value=document.getElementById(\'a_height\').value"></input>x<input id="a_height" value="' + h.replace("px","") + '" style="display:inline-block;width:30px;height:13px;text-align:right" onkeyup="if (event.keyCode == 13) aspect2(document.getElementById(\'a_width\').value,document.getElementById(\'a_height\').value)" onfocus="document.getElementById(\'a_height\').value=document.getElementById(\'a_height\').value;document.getElementById(\'a_width\').value=document.getElementById(\'a_width\').value"></input>px';
    document.getElementById('watch7-notification-area').insertBefore(dw,document.getElementById('yt-alert-message'))
    document.getElementById('aspect').setAttribute('style','display:inline-block;right:0%;position:absolute;color:#333');

    //player class="watch-playlist watch-playlist-collapsed watch-medium" "watch-playlist watch-small"
    //class="player-width player-height off-screen-target player-api"
    document.getElementById('watch7-sidebar-ads').style.display = 'none';
    document.getElementById('player-api').style.height = h;
    document.getElementById('player-api').style.width = w;
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
    
    document.getElementById('player1').style.height = (h.replace('px','') - 30) + 'px';
    document.getElementById('player1').style.width = w
    document.getElementById('player').setAttribute('class',class_1)
    document.getElementById('player').setAttribute('class',class_0.replace('small_a','small').replace('medium_a','medium').replace('large_A','large'))
  } else {
      var w = fix_Width();
      var h = fix_Height();
      var dw = document.getElementById('aspect')
      if (dw != null) { dw.parentNode.removeChild(dw)}
      document.getElementById('theater-background').style.backgroundColor = "transparent"
      document.getElementById('watch7-sidebar').style.marginTop = '-400px';
      var playlist = document.getElementById('watch-appbar-playlist')
      if (playlist) playlist.removeAttribute('style')
      document.getElementById('player-api').style.width = w;
      document.getElementById('player-api').style.height = h;

      resize_layers(w,h)
      
      document.getElementById('player1').style.height = (h.replace('px','') - 30) + 'px';
      document.getElementById('player1').style.width = w
      document.getElementById('player').setAttribute('class',class_0.replace('small_a','small').replace('medium_a','medium').replace('large_A','large'))
    }
    document.getElementById('player-api').style.overflow = 'hidden';
}


function deldiv(){
  if (typeof ($) !== 'undefined') { $.removeData([webm, audio]); }
  var p = document.getElementById('placeholder-player'); if (p) { var p1 = p.firstChild; if (typeof p1 == 'object') { var x = p1.style; if (typeof x == 'object') p1.removeAttribute("style") } }
  var z = gclass("html5-progress-bar"); if (z[0]) { var x = z[0].style; if (x) z[0].removeAttribute("style") }

  var z = document.getElementById('watch7-sidebar'); if (z) z.style.marginTop = '-400px';
  var playlist = document.getElementById('watch-appbar-playlist')
  if (playlist) playlist.removeAttribute('style')
  var z = [ document.getElementById('bm0'),document.getElementById('player-api'),v ]
  //w_init h_init
  for(i=0;i<z.length;i++){
   if ((z[i]) && (p) && (typeof p1 == 'object')) { z[i].style.width = p1.offsetWidth; z[i].style.height = p1.offsetHeight; }
  }

  //ythtml5_size()

  var z = document.getElementById('player-api'); if (z) z.style.display = 'block';
  player().style.display = 'block';

  var z = [ 'remove','controls','aspect','bm1','bm3','bm0',"snarls_player" ]
  for(i=0;i<z.length;i++){
    if (document.getElementById(z[i])) document.getElementById(z[i]).parentNode.removeChild(document.getElementById(z[i]))
  }

  var z = [document.getElementById('masthead-positioner-height-offset'),document.getElementById('player-api'),document.getElementById('watch7-sidebar'),document.getElementById('theater-background') ]
  for(i=0;i<z.length;i++){
    if (z[i]) z[i].removeAttribute('style')
  }
  var z = document.getElementById('ytp-chrome-bottom');
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


if (!document.getElementById("remove")) {
  var js = document.createElement('div');
  js.id = 'remove';
  document.getElementById('yt-alert-message').appendChild(js);
  document.getElementById('remove').setAttribute('style','display:inline-block');
} else {
    document.getElementById('remove').style.display = "inline-block"
  }

  if (remove){
    remove.innerHTML =  '<button onclick="switchflashhtml5()" class="yt-uix-button-text"><img src="//s.ytimg.com/yts/img/HTML5_1Color_Black-vfl902gVJ.png" style="vertical-align:middle;height:12px;padding:0px""></img></button><button onclick="aspect()" class="yt-uix-button-text">«&#8703;»</button><br><button onclick="deldiv()" class="yt-uix-button-text">remove</button>'
    //&#9724;
    //&#8633;
    //&#8703;
  }
var ctrl = document.getElementById('controls');
var CtrlS = function (stage,v){
var ctrl = document.getElementById('controls');
if (typeof ctrl == 'object') { if ( ctrl != null ) { ctrl.parentNode.removeChild(ctrl) } else {} }
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
      document.getElementById('controls').prop = prop;
      break;
    }
  }

/* Position video */
if ( (typeof player().getPlayerState == 'function') && (flashvars == null) && (document.getElementById('bm0').style.visibility == 'hidden') ) {

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
if (v != player()) {
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
        bestfit()
        if (v != player()) {
          zoom = 1;
          rotate = 0;
          if ( (typeof player().getPlayerState == 'function') && (flashvars == null) && (document.getElementById('bm0').style.visibility == 'hidden') ) {

            ythtml5_size()

          } else {
              v.style.top = 0 + 'px';
              v.style.left = 0 + 'px';
            }
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        } else { var opacity = v.style.opacity; v.setAttribute("style","top:0px; left:0px; opacity:"+opacity); zoom = 1; rotate = 0; }
    document.getElementById('player1').style.height = (v.style.height.replace('px','') - 30) + 'px';
        break;
      }        
      document.getElementById('placeholder-player').firstChild.style[prop] = v.style[prop]
      e.preventDefault();
    }
  },false);
}

//var isHtml5Player = !player.cueVideoByFlashvars;
var stage = document.getElementsByClassName('html5-video-content')[0];
var flashvars = document.getElementById('movie_player').getAttribute('flashvars')
if ( flashvars != null ) {
  var v = player();
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
