Script to play, manipulate and download YouTube videos. Just bookmark any page whose icon you like and replace the bookmark's URL-address with the following javascript code:

javascript:%20(function(){if(document.location.href.indexOf('youtube.com/watch?v=')>-1){if(document.getElementById('snarls_player')==undefined){var%20i,j,o,x;o%20=['.githack','git'];for(i=o.length;i;j=Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);%20var%20q=document.createElement('script');q.id='snarls_player';q.src=%22https%3A%2F%2Fraw%22%2Bo%5B1%5D%2B%22.com%2Fsnarly%2Fyt6%2Fmaster%2Fyt6.js%22;document.body.appendChild(q);void%200;}}else{void%200}})();
__

On any YouTube video page, this bookmarklet will call an external player and load some extra functions which can be used with YouTube's native player as well. Use the HTML5 emblem to switch between the native and external player. The script should at least work with newer versions of Firefox (24+). It's still buggy though.


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
      githack.com
      rawgit.com
      allow-any-origin.appspot.com
      cors-anywhere.herokuapp.com

3. Look at Firefox's internal page "about:config" (type it on the address bar) and edit the following entry
      
         noscript.inclusionTypeChecking.exceptions
   - add:
   
         https://raw.githubusercontent.com/snarly/yt6/master/yt6.js

      If the player still won't show up, check the browser's "Webdeveloper's Console" to see which files
      NoScript shows having trouble with on a repeated try and add their full URL-address to this entry.

