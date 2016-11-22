http://snarly.github.io/yt6/

Script to play, manipulate and download YouTube videos. Just bookmark any page whose icon you like and replace the bookmark's URL-address with the following javascript code:

javascript: (function(){var d=document;if(d.location.href.indexOf('youtube.com/watch')>-1||d.location.href.indexOf('//s.ytimg.com/')>-1){var id='snarls_player';function s(){return d.getElementById(id)};function c(){return d.createElement('script')};function a(q){d.body.appendChild(q)};function r(){d.body.removeChild(s())};function b(){var i,j,o,x;o=['.githack','git'];for(i=o.length;i;j=Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);o.splice(0,0,'.githubusercontent');var q=c();q.id=id;var src='https://raw'+o[0]+'.com/snarly/yt6/master/yt6.js';q.src=src;q.onerror=function(){var q=c();q.id=id;q.src=src.replace(o[0],o[1]);q.onerror=function(){var q=c();q.id=id;q.src=src.replace('https','http');q.onerror=function(){var q=c();q.id=id;q.src=src.replace(o[1],o[2]);q.onerror=function(){var q=c();q.id=id;q.src=src.replace('https','http');a(q);r();};a(q);r();};a(q);r();};a(q);r();};q.setAttribute('onload','');a(q);if(s()!=null)s().add_subs='en,hu,de'};if(s()==null){b();}else{if(s().firstChild==null){r();b();};}}else{void 0};})();


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
      allow-any-origin.appspot.com
      cors-anywhere.herokuapp.com
      crossorigin.me


3. (DEPRECATED) Look at Firefox's internal page "about:config" (type it on the address bar) and edit the following entry
      
         noscript.inclusionTypeChecking.exceptions
   - add:
   
         https://raw.githubusercontent.com/snarly/yt6/master/yt6.js

      If the player still won't show up, check the browser's "Webdeveloper's Console" to see which files
      NoScript shows having trouble with on a repeated try and add their full URL-address to this entry.

