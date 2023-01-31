import './sass/main.scss';
import Swiper, { Pagination } from 'swiper';

var swiper = new Swiper('.reviews-slider', {
  modules: [Pagination],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

import './sass/modules/swiper.scss';
import './sass/modules/pagination.scss';
