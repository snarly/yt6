Tweak, play back free of ads and save Youtube video & audio in almost any browser on both Desktop and Mobile. Just bookmark any page and replace the bookmark's URL-address with the following javascript code:

THe bookmarklet code below is template only. Variable v MUST be set to hold a commit id of the main script. It varies with every update. The date can be omitted, it just helps identify a particular version.
See the GitHub page http://snarly.github.io/yt6/ for an actual bookmarklet line to use.


javascript:(function(){var v='\<commit id string\>/yt6.js',w=window,d=w.document,h=d.location.href,yt6=w.yt6||{},yt6d=w.yt6d||{};if(yt6.loaded>=4)return void 0;if(h.split('youtube.com/watch')[1]||h.split('youtube.com/embed')[1]||h.split('/base.j')[1]=='s'){var id='snarls_player',e='script',q;yt6.loaded=0;function s(x){x=x||id;return d.getElementById(x)};function c(e){return d.createElement(e)};function a(q){s().appendChild(q);s().add_subs='en,hu,de';yt6d.src=q.src};function r(){if(s()){var x;try{x=s().querySelector('#'+id)}catch(e){x=s().firstChild};if(x)s().removeChild(x)}};function b(){var i,j,o,x;o=['.githack','git','js'];for(j,x,i=o.length;i;j=Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);if(yt6d.src!=1)o.splice(0,0,'.githubusercontent');q=c('div');q.id=id;if(q!=s())d.body.appendChild(q);var src='https://raw'+o[0]+'.com/snarly/yt6/'+v,src0='https://cdn.jsdelivr.net/gh/snarly/yt6@'+v;function oc(ox,oy,sr){return(oy!='js')?sr.replace(ox,oy):src0};q=c(e);q.id=id;q.src=(o[0]!='js')?src:src0;q.onerror=function(){q=c(e);q.id=id;q.src=oc(o[0],o[1],src);q.onerror=function(){q=c(e);q.id=id;q.src=oc(o[0],o[2],src);q.onerror=function(){q=c(e);q.id=id;q.src=oc(o[0],o[3],src);q.onerror=function(){q=c(e);q.id=id;q.src=src.replace('https','http')};a(q);r();};a(q);r();};a(q);r();};try{a(q);}catch(f){a(q)};};function g(){try{deldiv()}catch(f){r()};yt6d.src=1;b()};if(!s()){b()};setTimeout(function(){yt6=w.yt6;if(!yt6||(yt6&&(!yt6.body||(yt6.loaded>2&&!s('mep_init')))))g()},3000);}else{void 0};})()/\*commit date\*/



__

On any unrestricted YouTube video page, this bookmarklet will call an external player and load some extra functions which can be used with YouTube's native player as well. Use the HTML5 emblem to switch between the native and external player. It should work now on most browsers, even older ones. Bugs are gonna stay forever...


Credit should go to the authors of their respective open source code I had my own built around:
   John Dyer - Mediaelementplayer - http://mediaelementjs.com/
   Christian Heilmann - Transformvideo - http://github.com/codepo8/rotatezoomHTML5video
   Steven Penny - Youtube download bookmarklet - http://svnpenn.github.io/bm/   



Note: To use with script-blockers such as NoScript

Whitelist / Trust these domains:

      githubusercontent.com, 
      rawgit.com, 
      githack.com, 
      jsdelivr.net, 
      allow-any-origin.appspot.com, 
      cors-anywhere.herokuapp.com, 
      youtube.com, 
      googlevideo.com

