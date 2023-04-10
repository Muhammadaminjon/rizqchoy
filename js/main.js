// home swiper js
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  speed: 1000,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
