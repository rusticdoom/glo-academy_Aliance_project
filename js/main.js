const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  speed: 400,
  autoHeight: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },

  breakpoints: {
    310: {
      slidesPerView: 2,
      // centeredSlides: true,
      // slidesOffsetBefore: -100,
    },
    460: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
