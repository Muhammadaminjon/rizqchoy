// main products section swiper js
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  speed: 1000,
  spaceBetween: 20,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
// main comments section swiper js
const mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  speed: 800,
  spaceBetween: 20,
  navigation: {
    nextEl: ".comment-next",
    prevEl: ".comment-prev",
  },
});

const scroll = document.querySelector(".bg-circle");
const nav = document.getElementById("navbar");

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 300) {
    scroll.classList.add("bghh");
  } else {
    scroll.classList.remove("bghh");
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 100) {
    nav.classList.add("navbar");
  } else {
    nav.classList.remove("navbar");
  }
});

marker = new google.maps.Marker({
  icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
});