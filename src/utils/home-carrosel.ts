// Start of Splide Carrosel

import Splide from '@splidejs/splide';

export const homeCarrosel = () => {
  let splides = '#slider1';

  const splide = new Splide('#slider1', {
    perPage: 4,
    perMove: 1,
    focus: 0, // 0 = left and 'center' = center
    type: 'loop', // 'loop' or 'slide'
    gap: '4.6875em', // space between slides
    arrows: false, // 'slider' or false
    pagination: false, // 'slider' or false
    speed: 1500, // transition speed in miliseconds
    dragAngleThreshold: 30, // default is 30
    autoWidth: false, // for cards with differing widths
    rewind: false, // go back to beginning when reach end
    rewindSpeed: 400,
    waitForTransition: false,
    updateOnMove: true,
    trimSpace: true, // true removes empty space from end of list
    breakpoints: {
      2560: {
        fixedWidth: 385,
        fixedHeight: 414,
      },
      991: {
        fixedWidth: '100%',
        fixedHeight: '100%',
        // Tablet
        perPage: 4,
      },
      767: {
        // Mobile Landscape
        perPage: 1,
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        fixedWidth: '100%',
        fixedHeight: '100%',
      },
    },
  });

  const btnNext = document.querySelector('.seta-splide.seta-next');
  const btnPrev = document.querySelector('.seta-splide.seta-prev');

  splide.mount();

  //attach events to custom buttons
  btnNext.addEventListener('click', (e) => {
    splide.go('+1');
  });

  btnPrev.addEventListener('click', (e) => {
    splide.go('-1');
  });

  // End of Splide Carrosel
};
