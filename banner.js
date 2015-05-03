(function ($) {
    "use strict";
	
	/**
	* Options
	* targetId - Select a specific class/id for the banner container. If null, will default to .ticker-banner by 
	* bannerDuration - Set how long each banner will display before displaying the next. If null, will default to 7000
	**/
    $.initialiseTickerBanner = function (targetId, bannerDuration) {
        var ticker = targetId ? $(targetId) : $('.ticker-banner');
        var tickerArray = ticker.data('ticker-array');
        bannerDuration = bannerDuration || 7000;
		
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
			}, bannerDuration);
		}
	};
})(jQuery);
