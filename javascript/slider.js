const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: false
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  