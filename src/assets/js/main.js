// Wow Animation ============ 
var wow_animation = function(){
    if (document.querySelectorAll('.wow').length > 0) {
      var wow = new WOW({
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false       // trigger animations on mobile devices (true is default)
      });
      wow.init();	
    }	
  }

  const handleTextword = () => {
    const wordRotateElements = document.querySelectorAll('.hp-word-rotate');
    
    wordRotateElements.forEach(element => {
        const wordText = element.textContent.split('');
        const step = 360 / wordText.length;
        const wordRotateBox = element.closest('.hp-word-rotate-box');

        wordText.forEach((char, index) => {
            const span = document.createElement('span');
            span.classList.add('hp-text-word');
            span.style.setProperty('--hp-word-rotate', `${index * step}deg`);
            span.textContent = char;
            wordRotateBox.appendChild(span);
        });

        element.remove();
    });
};

if (jQuery('.popup-video').length > 0) {
  jQuery('.popup-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true
  });
}


// Run the function to handle text rotation
handleTextword();


  // Initialize the WOW animations
  wow_animation();