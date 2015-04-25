(function ($) {
    "use strict";
	$.initialiseTickerBanner = function () {
		var ticker = $('.ticker-banner');
		var tickerArray = ticker.data('ticker-array');
		if (tickerArray) {
			var n = 1, tickerLength = tickerArray.length;
			window.setInterval(function(){
				if (n >= tickerLength) {
					n = 0;
				}
				var visibleBanner = ticker.find('a:visible');
				var hiddenBanner = ticker.find('a:hidden');
				hiddenBanner.attr('href', tickerArray[n].url).find('.ticker-text').html(tickerArray[n].text);
				visibleBanner.fadeOut(500);
				hiddenBanner.fadeIn(500).css("display","block");
				n++;
			}, 7000);
		}
	};
});
