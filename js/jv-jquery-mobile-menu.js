/*

  JV jQuery Mobile Menu
  Author: Julius van der Vaart (http://juliusvaart.com)
  Version: 1

*/

(function ($) {
  
  $.fn.jvmobilemenu = function (options) {
  
    var settings = $.extend({
      // Default settings
      notMenuClick: $('.page'),
      slideSpeed: 0.3,
      menuWidth: 240,
    }, options );


    // Hamburger & Mobile Menu vars
    var hamburger = $('.hamburger'),
  	mobileMenu = $('.mobile-menu'),
  	mainContent = $(this),
  	crosses = $('.bar2,.bar3'),
  	crossLeft = $('.bar2'),
  	crossRight = $('.bar3');
  
  
  	// menuClose function
  	function menuClose() {
  		hamburger.removeClass('open');
  		TweenMax.to(crosses, settings.slideSpeed / 2, {rotation:0, ease:Power3.easeOut});
  		// Move content left to show menu
  		TweenMax.to(mainContent, settings.slideSpeed, {marginLeft: 0, marginRight: 0});
  		// FadeIn content (safari bounce fix)
  		TweenMax.to(mobileMenu, settings.slideSpeed, {opacity: 0});
  		// Enable scrolling plus fix menu-scrolling
  		mobileMenu.css({'-webkit-overflow-scrolling': 'inherit', 'overflow-y': 'hidden'});
  		$(document).off('touchmove');
  		$('body').css({overflow: 'inherit'});
  	}
  	// End menuClose function
  
  
  	// menuOpen function
  	function menuOpen() {
  		hamburger.addClass('open');
  		TweenMax.to(crossLeft, settings.slideSpeed / 2, {rotation:45, ease:Power3.easeOut});
  		TweenMax.to(crossRight, settings.slideSpeed / 2, {rotation:-45, ease:Power3.easeOut});
  		// Move content back to hide menu
  		TweenMax.to(mainContent, settings.slideSpeed, {marginLeft: -settings.menuWidth, marginRight: settings.menuWidth});
  		// FadeIn content (iOS8 fix en ziet er leuk uit)
  		TweenMax.to(mobileMenu, settings.slideSpeed, {opacity: 1});
  		// Disable scrolling on page except header
  		var setScrollable = '.mobile-menu',
  		bodySelect = $('body');
  
  		bodySelect.css({overflow: 'hidden'});
  
  		$(document).on('touchmove',function(e){
  		  e.preventDefault();
  		});
  		bodySelect.on('touchstart', setScrollable, function(e) {
  		if (e.currentTarget.scrollTop === 0) {
  			e.currentTarget.scrollTop = 1;
  		} else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
  			e.currentTarget.scrollTop -= 1;
  		}
  		});
  		bodySelect.on('touchmove', setScrollable, function(e) {
  		  e.stopPropagation();
  		});
  		mobileMenu.css({'-webkit-overflow-scrolling': 'touch', 'overflow-y': 'auto'});
  	}
  	// End menuOpen function
  
  
  	// Close menu on window-resize
  	$(window).resize(function() {
  		menuClose();
  	});
  
  
  	// Hamburger click
  	hamburger.on('click', function(e) {
  		if ($(this).hasClass('open')) {
  			menuClose();
  		} else {
  			menuOpen();
  		}
  		e.stopPropagation();
  		return false;
  	});
  
  
  	// Close main-menu on click outside menu
  	settings.notMenuClick.on('click', function() {
  		if (hamburger.hasClass('open')) {
  			menuClose();
  		}
  	});
  
  };

})(jQuery);