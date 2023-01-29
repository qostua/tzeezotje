import {Navigation, Swiper} from 'swiper';
import 'swiper/css/bundle';

Swiper.use([Navigation]);

new Swiper(".reviews__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".photos__swiper", {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  initialSlide: 1,
  autoHeight: true,
  navigation: {
    nextEl: ".photos__swiper-button--next",
    prevEl: ".photos__swiper-button--prev",
  },
});
