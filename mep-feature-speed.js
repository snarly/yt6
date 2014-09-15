(function($) {
    $.extend(mejs.MepDefaults, {
        fasterText: 'Speed Up',
        slowerText: 'Slow Down'
    });
	MediaElementPlayer.prototype.buildspeed = function(player, controls, layers, media) {
		if (!player.isVideo)
			return;

		// add speed controls
            var t = this;

            var displaySpeed =
                $('<div class="display-playback-speed hidden">Speed: 100%</div> ')
                    .appendTo(controls);

            var faster =
                    $('<div class="mejs-button mejs-faster-button hidden" align="center" valign="center" style="padding:0px 0px 0px 10px">' +
                        '<button type="button" aria-controls="' + t.id + '" title="' + t.options.fasterText + '" aria-label="' + t.options.fasterText + '" style="background-position: -96px -6px;margin:12px 5px;"></button>+' +
                    '</div>')
                    .appendTo(controls)
                    .click(function(e) {
                        e.preventDefault();
                        media.pause();
                        if(media.playbackRate < 2.0) media.playbackRate = (media.playbackRate + 0.01).toFixed(2); //media.currentTime = media.currentTime - 0.0001;
                        //media.play();
                        displaySpeed.html("Speed: " + Math.round(media.playbackRate * 100) + "%");
                        return false;
                    });

            var slower =
                    $('<div class="mejs-button mejs-slower-button hidden" align="center" valign="center">' +
                        '<button type="button" aria-controls="' + t.id + '" title="' + t.options.slowerText + '" aria-label="' + t.options.slowerText + '" style="background-position: -96px 6px;margin:4px 5px"></button>-' +
                        '</div>')
                        .appendTo(controls)
                        .click(function(e) {
                            e.preventDefault();
                            media.pause();
                            if(media.playbackRate > 0.5) media.playbackRate = (media.playbackRate - 0.01).toFixed(2); //media.currentTime = media.currentTime - 0.0001;
                            //media.play();
                            displaySpeed.html("Speed: " + Math.round(media.playbackRate * 100) + "%");
                            return false;
                        });

            media.addEventListener('play',function() {
                if (media.pluginType === "native"){
                    faster.removeClass('hidden');
                    slower.removeClass('hidden');
                    displaySpeed.removeClass('hidden');
                }
            }, false);

            media.addEventListener('pause',function() {
                if(!faster.hasClass("hidden")){
                    faster.addClass('hidden');
                }
                if(!slower.hasClass("hidden")){
                    slower.addClass('hidden');
                }
                if(!displaySpeed.hasClass("hidden")){
                    displaySpeed.addClass('hidden');
                }
            }, false);
	}


})(mejs.$);
