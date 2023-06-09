const body = document.querySelector("body");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// main products section swiper js
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  speed: 1000,
  spaceBetween: 20,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
// main comments section swiper js
const mySwiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  speed: 800,
  spaceBetween: 20,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
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
