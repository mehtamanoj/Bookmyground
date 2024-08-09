/**
 * Template Name    : HybridPlus
 * Author           : Your Name
 * Version          : 1.0
 * Author Portfolio : https://yourportfolio.com
 */

var HybridPlus = (function($) {
  'use strict';

  // Private variables
  var screenWidth = $(window).width();

  // WOW Animation handler
  var handleCustomAnimation = function() {
    if ($('.wow').length > 0) {
      var wow = new WOW({
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 50,           // distance to the element when triggering the animation (default is 0)
        mobile: false         // trigger animations on mobile devices (true is default)
      });
      wow.init();
    }
  };
  if(jQuery('.hp-default-select').length > 0 ){
    jQuery('.hp-default-select').selectpicker();
  }
  var handleshowPass = function(){
    jQuery('.show-eye-icon').on('click',function(){
        jQuery(this).toggleClass('active');
        if(jQuery('#password').attr('type') == 'password'){
            jQuery('#password').attr('type','text');
        }else if(jQuery('#password').attr('type') == 'text'){
            jQuery('#password').attr('type','password');
        }
    });
}

  // Handle navbar toggler
  var handleNavbarToggle = function() {
    const navbarToggle = $('.navbar-hp-toggler');
    if (navbarToggle.length > 0) {
      navbarToggle.on('click', function() {
        $(this).toggleClass('open');
        // Optionally add functionality to toggle navbar visibility
        // Example: $('.navbar-collapse').toggleClass('show');
      });
    } else {
      console.error('Element .navbar-hp-toggler not found');
    }
  };

  if($('[data-splitting]').length > 0){
		Splitting();
	}
	setInterval(function() {
		jQuery('[data-splitting]').toggleClass('active');
	}, 5000);

  // Handle text rotation
  var handleTextRotation = function() {
    const wordRotateElements = $('.hp-word-rotate');
    
    wordRotateElements.each(function() {
      const wordText = $(this).text().split('');
      const step = 360 / wordText.length;
      const wordRotateBox = $(this).closest('.hp-word-rotate-box');

      $(this).remove(); // Remove original text

      wordText.forEach((char, index) => {
        const span = $('<span class="hp-text-word"></span>').text(char);
        span.css('--hp-word-rotate', `${index * step}deg`);
        wordRotateBox.append(span);
      });
    });
  };

  // Initialize Magnific Popup for video popups
  var initMagnificPopup = function() {
    if ($('.popup-video').length > 0) {
      $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
      });
    }
  };

  // Initialize Bootstrap Select Picker for dropdowns
  var initSelectPicker = function() {
    if ($('.default-select').length > 0) {
      $('.default-select').selectpicker();
    }
  };

  // Handle image select picker
  var handleImageSelect = function() {
    const $_SELECT_PICKER = $('.image-select');
    $_SELECT_PICKER.find('option').each((idx, elem) => {
      const $OPTION = $(elem);
      const IMAGE_URL = $OPTION.attr('data-thumbnail');
      if (IMAGE_URL) {
        $OPTION.attr('data-content', `<img src='${IMAGE_URL}'/> ${$OPTION.text()}`);
      }
    });
    $_SELECT_PICKER.selectpicker();
  };

  // Handle preloader
  var handlePreloader = function() {
    const preloader = document.getElementById('loader');
    const content = document.getElementById('content');
    if (preloader && content) {
      window.addEventListener('load', function() {
        // Add a delay before hiding the preloader
        setTimeout(function() {
          preloader.style.display = 'none';
          content.style.display = 'block';
        }, 1000); // 2000 milliseconds = 2 seconds
      });
    } else {
      console.error('Preloader or content element not found');
    }
  };

  // Public methods
  return {
    init: function() {
      handleCustomAnimation();
      handleshowPass();
      handleNavbarToggle(); // Call the navbar toggle handler
      handleTextRotation(); // Call the text rotation handler
      initMagnificPopup();  // Call the Magnific Popup initialization
      initSelectPicker();   // Call the Select Picker initialization
      handleImageSelect();  // Call the Image Select handler
      //handlePreloader();    // Call the Preloader handler
    },

    resize: function() {
      screenWidth = $(window).width();
      // Handle resize events as needed
    }
  };

})(jQuery);

/* Document.ready Start */
jQuery(document).ready(function() {
  HybridPlus.init();
});
/* Document.ready END */

/* Window Resize START */
jQuery(window).on('resize', function() {
  HybridPlus.resize();
});
/* Window Resize END */
