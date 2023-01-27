import './sass/main.scss';
import Swiper, { Pagination, EffectFade } from 'swiper';
var swiper = new Swiper( container, ".reviews-slider",  options, {
    modules: [Pagination, EffectFade],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
    },
    }
)