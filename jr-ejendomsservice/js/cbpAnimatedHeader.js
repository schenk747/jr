/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
            $("#div_logo").css('height', '60px');
            $("#div_logo").css('width', '100px');
            $(".navbar-right").css('margin-top', '8px');
		}
		else {
			classie.remove( header, 'navbar-shrink' );
            $("#div_logo").css('height', '100px');
            $("#div_logo").css('width', '140px'); 
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();