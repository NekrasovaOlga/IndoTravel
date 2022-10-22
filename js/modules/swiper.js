var swiper = new Swiper('.album__slider', {
    loop: true,
    navigation: {
        nextEl: '.album__right',
        prevEl: '.album__left',
      },
    breakpoints: {
        500: {
          slidesPerView: 1,
          spaceBetween: 20,
         
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 20
        },
      }
  });