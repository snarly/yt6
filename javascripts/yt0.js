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

