/*

  JV jQuery Mobile Menu
  Author: Julius van der Vaart (http://juliusvaart.com)
  Version: 2

*/

(function ($) {
  
  $.fn.jvmobilemenu = function (options) {
  
    var settings = $.extend({
      // Default settings
      mainContent: $('.page'),
      theMenu: $('.mobile-nav'),
      slideSpeed: 0.3,
      menuWidth: 240,
      position: 'right',
      menuPadding: '20px 20px 60px'
    }, options );
    
    
    // Insert hamburger button
    $(this).prepend('<div class="hamburger"><div class="hamburger-inner"><div class="bar bar1 hide"></div><div class="bar bar2 cross"></div><div class="bar bar3 cross hidden"></div><div class="bar bar4 hide"></div></div></div>');
    
    
    // Menu settings
    settings.theMenu.css({
      width: settings.menuWidth, 
      position: 'fixed',
      top: 0,
      'overflow-y': 'scroll',
      '-webkit-overflow-scrolling': 'touch'
    }).addClass('mobile-menu').wrapInner('<div class="mobile-menu-inner"></div>');
    
    $('.mobile-menu-inner').css({
      width: 'auto', 
      padding: settings.menuPadding, 
      display: 'block'
    });
    
    
    // Hamburger & Mobile Menu vars
    var hamburger = $('.hamburger'),
  	//mainContent = $(this),
  	crosses = $('.bar2,.bar3'),
  	crossLeft = $('.bar2'),
  	crossRight = $('.bar3');
    
    
    // Mobile menu & hamburger position left or right
    if (settings.position == 'left') {
      theMarginLeft = settings.menuWidth, 
      theMarginRight = -settings.menuWidth;
      settings.theMenu.add(hamburger)
        .css({
          left: 0, 
          right: 'auto'
        });
      settings.theMenu.css({
        top: '40px'
      });
    } else if (settings.position == 'right') {
      theMarginLeft = -settings.menuWidth, 
      theMarginRight = settings.menuWidth;
      settings.theMenu.add(hamburger).css({
        left: 'auto', 
        right: 0
      });
    }
  
  
  	// menuClose function
  	function menuClose() {
  		hamburger.removeClass('open');
  		TweenMax.to(crosses, settings.slideSpeed / 2, {rotation:0, ease:Power3.easeOut});
  		// Move content back to hide menu
  		TweenMax.to(settings.mainContent, settings.slideSpeed, {marginLeft: 0, marginRight: 0});
  		// FadeOut content (safari bounce fix)
  		TweenMax.to(settings.theMenu, settings.slideSpeed, {opacity: 0});
  		// Disable scrolling plus fix menu-scrolling
  		settings.theMenu.css({'-webkit-overflow-scrolling': 'inherit', 'overflow-y': 'hidden'});
  		$(document).off('touchmove');
  		$('body').css({overflow: 'inherit'});
  	}
    
  
  	// menuOpen function
  	function menuOpen() {
  		hamburger.addClass('open');
  		TweenMax.to(crossLeft, settings.slideSpeed / 2, {rotation:45, ease:Power3.easeOut});
  		TweenMax.to(crossRight, settings.slideSpeed / 2, {rotation:-45, ease:Power3.easeOut});
  		// Move content to show menu
  		
      TweenMax.to(settings.mainContent, settings.slideSpeed, {marginLeft: theMarginLeft, marginRight: theMarginRight});
  		
  		// FadeIn content (safari bounce fix)
  		TweenMax.to(settings.theMenu, settings.slideSpeed, {opacity: 1});
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
  		settings.theMenu.css({'-webkit-overflow-scrolling': 'touch', 'overflow-y': 'auto'});
  	}
  
  
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
  	settings.mainContent.on('click', function() {
  		if (hamburger.hasClass('open')) {
  			menuClose();
  		}
  	});
  
  };

})(jQuery);