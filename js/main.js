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

const scroll = document.querySelector('.bg-circle')
const nav = document.getElementById('navbar')

window.addEventListener('scroll',(e)=>{
  if(window.scrollY >= 300) {
    scroll.classList.add("bghh")
  } else {
    scroll.classList.remove("bghh")
  }
});

window.addEventListener('scroll',(e)=>{
  if(window.scrollY >= 100) {
    nav.classList.add("navbar")
  } else {
    nav.classList.remove("navbar")
  }
})
