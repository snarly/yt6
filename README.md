http://snarly.github.io/yt6/

Script to play, manipulate and download YouTube videos. Just bookmark any page whose icon you like and replace the bookmark's URL-address with the following javascript code:

javascript:(function(){var w=window,d=w.document;if(d.location.href.indexOf('youtube.com/watch')>-1||d.location.href.indexOf('/base.js')==d.location.href.length-8){var id='snarls_player',e='script';yt6=(w.yt6)?w.yt6:{};yt6d=(w.yt6d)?w.yt6d:{};yt6.loaded=0;function s(x){x=x||id;return d.getElementById(x)};function c(e){return d.createElement(e)};function a(q){s().appendChild(q);s().add_subs='en,hu,de';yt6d.src=q.src};function r(){if(s()){var x=s().querySelector('#'+id);if(x)s().removeChild(x)}};function b(){var i,j,o,x;o=['.githack','git','js'];for(j,x,i=o.length;i;j=Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);if(yt6d.src!=1)o.splice(0,0,'.githubusercontent');var q=c('div');q.id=id;if(q!=s())d.body.appendChild(q);var src='https://raw'+o[0]+'.com/snarly/yt6/master/yt6.js';var src0='https://cdn.jsdelivr.net/gh/snarly/yt6@latest/yt6.js';function oc(ox,oy,sr){return(oy!='js')?sr.replace(ox,oy):src0};var q=c(e);q.id=id;q.src=(o[0]!='js')?src:src0;q.onerror=function(){var q=c(e);q.id=id;q.src=oc(o[0],o[1],src);q.onerror=function(){var q=c(e);q.id=id;q.src=oc(o[0],o[2],src);q.onerror=function(){var q=c(e);q.id=id;q.src=oc(o[0],o[3],src);q.onerror=function(){var q=c(e);q.id=id;q.src=src.replace('https','http')};a(q);r();};a(q);r();};a(q);r();};try{a(q);}catch(f){a(q)};};function g(){try{deldiv()}catch(f){r()};yt6d.src=1;b()};if(!s()){b()};if(s()&&(!yt6.body||(yt6.loaded>1&&!s('mep_init'))))setTimeout(function(){if(!yt6.body||(yt6.body&&yt6.loaded>2&&!s('mep_init')))g()},3000);}else{void 0};})();/*201912101600*/*/


__

On any unrestricted YouTube video page, this bookmarklet will call an external player and load some extra functions which can be used with YouTube's native player as well. Use the HTML5 emblem to switch between the native and external player. It should work now on most browsers, even older ones. Bugs are gonna stay forever...


Credit should go to the authors of their respective open source code:
   John Dyer - Mediaelementplayer - http://mediaelementjs.com/
   Christian Heilmann - Transformvideo - http://github.com/codepo8/rotatezoomHTML5video
   Steven Penny - Youtube download bookmarklet - http://svnpenn.github.io/bm/   
I just wrapped up to make their programs work together:



Note: Users of FF-addon NoScript

1. Take a look at the Settings of NoScript and allow (i.e. uncheck) Embedded Objects:

      \<AUDIO\> / \<VIDEO\>,
      \<IFRAME\>,
      \<FRAME\>,
      other plugins

2. Add to NoScript Settings / Whitelist

      githubusercontent.com, 
      rawgit.com, 
      githack.com, 
      jsdelivr.net, 
      allow-any-origin.appspot.com, 
      cors-anywhere.herokuapp.com, 
      crossorigin.me, 
      youtube.com, 
      googlevideo.com


3. (DEPRECATED) Look at Firefox's internal page "about:config" (type it on the address bar) and edit the following entry
      
         noscript.inclusionTypeChecking.exceptions
   - add:
   
         https://raw.githubusercontent.com/snarly/yt6/master/yt6.js

      If the player still won't show up, check the browser's "Webdeveloper's Console" to see which files
      NoScript shows having trouble with on a repeated try and add their full URL-address to this entry.

