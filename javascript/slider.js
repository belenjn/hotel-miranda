const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    enabled: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper__facilities", {
  direction: "horizontal",
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    dynamicMainBullets: 4,
    clickable: true,
    enabled: true,
  }
});
