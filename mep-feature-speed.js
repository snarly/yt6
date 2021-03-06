(function($) {

    $.extend(mejs.MepDefaults, {

	speedText: 'Playback Speed',

        fasterText: 'Speed Up',

        slowerText: 'Slow Down',

	speeds: ['8x', '4x', '3x', '2x', '1.5x', 'NTSC to PAL', 'Normal', 'PAL to NTSC', '0.5x'],

	defaultSpeed: 'Normal',
		
	speedChar: ''

    });

	MediaElementPlayer.prototype.buildspeed = function(player, controls, layers, media) {

		if (!player.isVideo)
			return;

		// add speed controls
            var t = this;

	  if (t.media.pluginType == 'native') {

	    var
		speedButton = null,
		speedSelector = null,
		playbackSpeed = null,
//display-playback-speed
		html = '<div class="mejs-button mejs-speed-button"><div id="displaySpeed" style="width: 34px; padding: 2px 2px 2px 2px;">Speed 100%</div>' + 
								'<button type="button" aria-label="' + t.options.speedText + '" title="' + t.options.speedText + '">' + t.options.defaultSpeed + t.options.speedChar + '</button>' + 
								'<div class="mejs-speed-selector">' + 
								'<ul>';
				
		if ($.inArray(t.options.defaultSpeed, t.options.speeds) === -1) {
			t.options.speeds.push(t.options.defaultSpeed);
		}

		t.options.speeds.sort(function(a, b) {
			return parseFloat(b) - parseFloat(a);
		});

		for (var i = 0, il = t.options.speeds.length; i<il; i++) {
			html += '<li>' + 
						'<input type="radio" name="speed" ' + 
									'value="' + t.options.speeds[i] + '" ' + 
									'id="' + t.options.speeds[i] + '" ' +
									(t.options.speeds[i] == t.options.defaultSpeed ? ' checked' : '') + 
									' />' +
						'<label for="' + t.options.speeds[i] + '" ' + 
									(t.options.speeds[i] == t.options.defaultSpeed ? ' class="mejs-speed-selected"' : '') +
									'>' + t.options.speeds[i] + t.options.speedChar + '</label>' + 
					'</li>';
		}
		html += '</ul></div></div>';

		speedButton = $(html).appendTo(controls)
					// hover
					.hover(function() {
						$(this).find('.mejs-speed-selector').css('visibility','visible');
					}, function() {
						$(this).find('.mejs-speed-selector').css('visibility','hidden');
					})
		speedSelector = speedButton.find('.mejs-speed-selector');
		playbackspeed = t.options.defaultSpeed;

		speedSelector
			.on('click', 'input[type="radio"]', function() {
				var newSpeed = $(this).attr('value');
				if (newSpeed == 'NTSC to PAL') newSpeed = parseFloat(parseFloat(25 - parseFloat(24000/1001)) / parseFloat(24000/1001) + 1).toFixed(11)
				if (newSpeed == 'PAL to NTSC') newSpeed = parseFloat(parseFloat(parseFloat(24000/1001) - 25) / 25 + 1).toFixed(11) 
				if (newSpeed == 'Normal') newSpeed = 1
				playbackspeed = newSpeed;

				media.playbackRate = parseFloat(newSpeed);

				if ((typeof player1 != 'undefined') && (typeof player1.src == 'string') && (player1.src != null) && (parseInt(itag(player1.src)) > 102) && ((player1.src.indexOf('mime=audio') == -1) && (player1.src.indexOf('mime/audio') == -1)) ) { player1.currentTime = player1.currentTime }

				document.getElementById('displaySpeed').innerHTML = "Speed " + Math.round(media.playbackRate * 100) + "%";
				//speedButton.find('button').html("Speed " + Math.round(media.playbackRate * 100) + "%");//newSpeed + t.options.speedChar);
				speedButton.find('.mejs-speed-selected').removeClass('mejs-speed-selected');
				speedButton.find('input[type="radio"]:checked').next().addClass('mejs-speed-selected');
			});


		
		speedSelector
			.height(
				speedButton.find('.mejs-speed-selector ul').outerHeight(true) + 
				speedButton.find('.mejs-speed-translations').outerHeight(true))

	//		.css('top', ( -1 * ( speedSelector.height() + 81 ) ) + 'px');

	//	document.getElementsByClassName('mejs-speed-selector')[0]
	//		.csstop = ( -1 * ( speedSelector.height() + 81 ) ) + 'px';


//            var displaySpeed =
//                $('<div class="display-playback-speed hidden">Speed 100%</div> ')
//                    .appendTo(controls);

            var faster =
                    $('<div class="mejs-button mejs-faster-button hidden" align="center" valign="center" style="padding:0px 0px 0px 10px">' +
			'<button type="button" style="background-position: -96px -6px;margin:12px 5px;"</button>' +
                        '<button type="button" style="background: none" aria-controls="' + t.id + '" title="' + t.options.fasterText + '" aria-label="' + t.options.fasterText + '"></button>+' +
                    '</div>')
                    .appendTo(controls)
			.hover(function() {
				speedButton.find('.mejs-speed-selector').css('visibility','visible');
			}, function() {
				speedButton.find('.mejs-speed-selector').css('visibility','hidden');
			})
                    .click(function(e) {
                        e.preventDefault();

                        if(media.playbackRate < 8.0) media.playbackRate = (media.playbackRate + 0.01).toFixed(2);

                        if ((typeof player1 != 'undefined') && (typeof player1.src == 'string') && (player1.src != null) && (parseInt(itag(player1.src)) > 102) && ((player1.src.indexOf('mime=audio') == -1) && (player1.src.indexOf('mime/audio') == -1)) ) { player1.currentTime = player1.currentTime }

                        //media.play();
			document.getElementById('displaySpeed').innerHTML = "Speed " + Math.round(media.playbackRate * 100) + "%";
			//speedButton.find('button').html("Speed " + Math.round(media.playbackRate * 100) + "%");
                        return false;
                    });

            var slower =
                    $('<div class="mejs-button mejs-slower-button hidden" align="center" valign="center">' +
			'<button type="button" style="background-position: -96px 6px;margin:4px 5px"</button>' +
                        '<button type="button" style="background: none" aria-controls="' + t.id + '" title="' + t.options.slowerText + '" aria-label="' + t.options.slowerText + '"></button>-' +
                        '</div>')
                        .appendTo(controls)
			.hover(function() {
				speedButton.find('.mejs-speed-selector').css('visibility','visible');
			}, function() {
				speedButton.find('.mejs-speed-selector').css('visibility','hidden');
			})
                        .click(function(e) {
                            e.preventDefault();

                            if(media.playbackRate > 0.0) media.playbackRate = (media.playbackRate - 0.01).toFixed(2);

                            if ((typeof player1 != 'undefined') && (typeof player1.src == 'string') && (player1.src != null) && (parseInt(itag(player1.src)) > 102) && ((player1.src.indexOf('mime=audio') == -1) && (player1.src.indexOf('mime/audio') == -1)) ) { player1.currentTime = player1.currentTime }

                            //media.play();
			    document.getElementById('displaySpeed').innerHTML = "Speed " + Math.round(media.playbackRate * 100) + "%";
			    //speedButton.find('button').html("Speed " + Math.round(media.playbackRate * 100) + "%");
                            return false;
                        });

            media.addEventListener('play',function() {
                if (media.pluginType === "native"){
                    faster.removeClass('hidden');
                    slower.removeClass('hidden');
                    speedButton.removeClass('hidden');
                }
            }, false);

            media.addEventListener('pause',function() {
                if(!faster.hasClass("hidden")){
                    faster.addClass('hidden');
                }
                if(!slower.hasClass("hidden")){
                    slower.addClass('hidden');
                }
                if(!speedButton.hasClass("hidden")){
                    speedButton.addClass('hidden');
                }
            }, false);

	  }//pluginType

	}


})(mejs.$);
