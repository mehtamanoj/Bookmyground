// Main Swiper instance


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  // Uncomment this section to enable autoplay
  // autoplay: {
  //   delay: 5000, // Autoplay delay in milliseconds (5 seconds)
  //   disableOnInteraction: false, // Continue autoplay after user interaction
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 2000, // Transition speed between slides (2 seconds)
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// Thumbnail Swiper instance
var swiperThumb = new Swiper(".mySwiper-thumb", {
  spaceBetween: 9,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});

// Second Swiper instance with navigation and thumbs
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperThumb,
  },
});
