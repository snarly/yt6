Tweak, play back free of ads and save Youtube video & audio in almost any browser on both Desktop and Mobile.

THe bookmarklet code below is template only. Variable v MUST be set to hold a commit id of the main script. It varies with every update. The date can be omitted, it just helps identify a particular version.


javascript:(function(){var v='\<commit id string\>/yt6.js',y='youtube.com/',w=window,d=w.document,h=d.location.href,yt6=w.yt6||{},yt6d=w.yt6d||{},t=w.trustedTypes,n;if(yt6d&&yt6d.loaded>=4)return void 0;if(h.split(y+'watch')[1]||h.split(y+'embed')[1]||h.split(y+'playlist')[1]||h.split(y+'shorts')[1]||h.split('/base.j')[1]=='s'){var id='snarls_player',e='script',q,u=function(s){if(typeof s=='string')return s};try{t.createPolicy('default',{createHTML:u,createScriptURL:u,createScript:u,})}catch(f){};if(yt6)yt6.loaded=0;function s(x){x=x||id;return d.getElementById(x)};function gt(x,f){return f.getElementsByTagName(x)};function gn(){n=gt('head',d)[0];n=(n)?gt('link',n)[0]:'';if(!(n&&n.nonce)){n=gt('script',d);var i;for(i=0;i<n.length;i++)if(n[i]&&n[i].nonce){n=n[i].nonce;break};if(typeof n!='string')n=''}else n=n.nonce;return n};function c(e){e=d.createElement(e);e.nonce=gn();return e};function a(q){s().appendChild(q);gt('script',s())[0].setAttribute('nonce',gn());s().add_subs='en,hu,de';s().version='\<commit date\>';if(yt6d)yt6d.src=q.src};function r(){if(s()){var x;try{x=s().querySelector('#'+id)}catch(e){x=s().firstChild};if(x)s().removeChild(x)}};function b(){var i,j,o,x;o=['rawcdn.githack','js','cdn.rawgit'];for(j,x,i=o.length;i;j=Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);q=c('div');q.id=id;if(q!=s())d.body.appendChild(q);var src='https://'+o[0]+'.com/snarly/yt6/'+v,src0='https://cdn.jsdelivr.net/gh/snarly/yt6@'+v;function oc(ox,oy,sr){h=(oy!='js')?sr.replace(ox,oy):src0;if(yt6d)yt6d.src=h;return h};q=c(e);q.id=id;q.src=(o[0]!='js')?src:src0;if(yt6d)yt6d.src=q.src; q.onerror=function(){q=c(e);q.id=id;q.src=oc(o[0],o[1],src);q.onerror=function(){q=c(e);q.id=id;q.src=oc(o[0],o[2],src);q.onerror=function(){q=c(e);q.id=id;q.src=oc(o[0],o[3],src);q.onerror=function(){q=c(e);q.id=id;q.src=src.replace('https','http')};a(q);r();};a(q);r();};a(q);r();};try{a(q);}catch(f){a(q)};};
function g(){try{deldiv()}catch(f){r()};b()};if(!s()){b()};setTimeout(function(){var t=w.yt6;if(t)t.loaded=t.loaded||window['status'];if(!t||(t&&(!t.body||(t.loaded<3))))g()},3000);}else{void 0};})()/\*\<commit date\>\*/



__

See the GitHub page http://snarly.github.io/yt6/ for further details
