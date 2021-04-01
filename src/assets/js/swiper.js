'use strict';

import '../scss/styles.scss';
import '../scss/activity.scss';
import '../scss/presentation.scss';
const advantagesEl = document.querySelector('.swiper-advantages-container');
const activityEl = document.querySelector('.swiper-activity-container');
const presentationEl = document.querySelector('.swiper-presentation-content');

function mySwiper () {
  let presentationSlider = new Swiper(presentationEl, {
    slidesPerView: 1,
    // loop: true,
    pagination: {
      el: '.presentation-pagination',
      type: 'bullets',
      clickable: true,
      bulletElement: 'span'
    },
    navigation: {
      nextEl: '.presentation-button-next',
      prevEl: '.presentation-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    }
  });
  
  let activitySlider = new Swiper(activityEl, {
    slidesPerView: 'auto',
    spaceBetween: 100,
    autoHeight: true,
    // loop: true,
    pagination: {
      el: '.activity-pagination',
      type: 'bullets',
      clickable: true,
      bulletElement: 'span'
    },
    navigation: {
      nextEl: '.activity-button-next',
      prevEl: '.activity-button-prev',
    },
  });

  let advantagesSlider = new Swiper(advantagesEl, {
    // init: false,
    slidesPerView: 4,
    pagination: {
      el: '.advantages__pagination',
      type: 'bullets',
      clickable: true,
      bulletElement: 'span'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 120
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        init: false,
        spaceBetween: 20
      },
    }
  });
}

export default mySwiper;