var swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    
    // loop: true,
    effect:'coverflow',
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:'auto',
    coverflowEffect:{
rotate:20,
stretch:0,
depth:1500,
modifier:1,
slideShadows:true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});





var swiper = new Swiper(".mySwiper", {
   
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

