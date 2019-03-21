http://snarly.github.io/yt6/

Script to play, manipulate and download YouTube videos. Just bookmark any page whose icon you like and replace the bookmark's URL-address with the following javascript code:

javascript:%20(function(){var%20d=document;if(d.location.href.indexOf('youtube.com/watch')>-1||d.location.href.indexOf('/base.js')==d.location.href.length-8){var%20id='snarls_player';var%20e='script';function%20s(x){if(!x)var%20x=id;return%20d.getElementById(x)};function%20c(e){return%20d.createElement(e)};function%20a(q){s().appendChild(q)};function%20r(){if(s().firstChild)s().removeChild(s().firstChild)};function%20b(){var%20i,j,o,x;o=['.githack','git','js'];for(j,x,i=o.length;i;j=Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);if(!d.yt6)o.splice(0,0,'.githubusercontent');var%20q=c('div');q.id=id;if(q!=s())d.body.appendChild(q);var%20src=%22https%3A%2F%2Fraw%22%2Bo%5B0%5D%2B%22.com%2Fsnarly%2Fyt6%2Fmaster%2Fyt6.js%22;var%20src0=%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fsnarly%2Fyt6%40latest%2Fyt6.js%22;function%20oc(ox,oy,sr){if(oy!='js'){return%20sr.replace(ox,oy)}else{return%20src0}};var%20q=c(e);q.id=id;q.src=(o[0]!='js')?src:src0;q.onerror=function(){var%20q=c(e);q.id=id;q.src=oc(o[0],o[1],src);q.onerror=function(){var%20q=c(e);q.id=id;q.src=oc(o[0],o[2],src);q.onerror=function(){var%20q=c(e);q.id=id;q.src=oc(o[0],o[3],src);q.onerror=function(){var%20q=c(e);q.id=id;q.src=src.replace('https','http');q.onerror=function(){var%20q=c(e);q.id=id;q.src=oc(o[0],o[1],src).replace('https','http');q.onerror=function(){var%20q=c(e);q.id=id;q.src=oc(o[0],o[2],src).replace('https','http');q.onerror=function(){var%20q=c(e);q.id=id;q.src=oc(o[0],o[3],src).replace('https','http');a(q);r();};a(q);r();};a(q);r();};a(q);r();};a(q);r();};a(q);r();};a(q);r();};try{a(q);}catch(f){a(q)};if(s())s().add_subs='en,hu,de';d.yt6=q.src};function%20g(){if(!s('mep_init')){try{deldiv()}catch(f){r()};d.yt6=true;b();}};if(!s()){b();if(s())g()}else{g();}}else{void%200};})();


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

      githubusercontent.com
      rawgit.com
      githack.com
      jsdelivr.com 
      allow-any-origin.appspot.com
      cors-anywhere.herokuapp.com
      crossorigin.me
      youtube.com
      googlevideo.com


3. (DEPRECATED) Look at Firefox's internal page "about:config" (type it on the address bar) and edit the following entry
      
         noscript.inclusionTypeChecking.exceptions
   - add:
   
         https://raw.githubusercontent.com/snarly/yt6/master/yt6.js

      If the player still won't show up, check the browser's "Webdeveloper's Console" to see which files
      NoScript shows having trouble with on a repeated try and add their full URL-address to this entry.

