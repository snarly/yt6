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
    for (i=0;i<mch.length;i++) {
      var zzx = mch[i].substring(0,3)
      if ((zzx === zzy) && (zzx.charAt(2)==='.')) { var zzz = zzy.substring(0,2) };
      var zzy = zzx;
    }
    var mch = new RegExp('var ' + zzz + '[^}]+}[^}]+}[^}]+}};');
    return [mch,zzz]
  }

  eval(rpt.match(fcobj()[0])[0].replace(fcobj()[1],"dekrypt0") + rpt.match(fs)[0].split(fcobj()[1]).join("dekrypt0"));

function dc(sg) {
  return eval(fcnm + '("' + sg + '")');
}

