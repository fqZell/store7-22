var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 5,
    },
  }
});