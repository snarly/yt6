(function($) {
	// loop toggle
	$.extend(MediaElementPlayer.prototype, {
		buildloop: function(player, controls, layers, media) {
			player.options.loop1 = player.options.loop;
			var 
				t = this,
				// create the loop button
				loop = 
				$('<div class="mejs-button mejs-loop-button ' + ((player.options.loop) ? 'mejs-loop-on' : 'mejs-loop-off') + '">' +
					'<button type="button" aria-controls="' + t.id + '" title="Toggle Loop" aria-label="Toggle Loop"></button>' +
				'</div>')
				// append it to the toolbar
				.appendTo(controls)
				// add a click toggle event
				.click(function() {
					player.options.loop1 = !player.options.loop1;
					if (player.options.loop1) {
						loop.removeClass('mejs-loop-off').addClass('mejs-loop-on');
					} else {
						loop.removeClass('mejs-loop-on').addClass('mejs-loop-off');
					}
				});
		}
	});
	
})(mejs.$);
