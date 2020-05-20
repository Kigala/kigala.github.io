;(function($) {
    "use strict";
    
    var navbar=$('.main_header_area .header_menu, .main_header_area .middle_menu_area');
    var nav_offset_top = $('.header_menu, .middle_menu_area, .comming_soon_area, .error_area').offset().top + 85;
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	navbar.affix({
	  offset: {
	    top: nav_offset_top,
	  }
	});


	navbar.on('affix.bs.affix', function() {
		if (!navbar.hasClass('affix')){
			navbar.addClass('animated slideInDown');
		}
	});
    
    navbar.on('affixed-top.bs.affix', function() {
	  	navbar.removeClass('animated slideInDown');
	});

    

    
})(jQuery)
