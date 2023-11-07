// Start of Splide Carrosel
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import Splide from '@splidejs/splide';

export const homeCarrosel = () => {
  const splide = new Splide('#slider1', {
    perPage: 3,
    fixedWidth: 385,
    fixedHeight: 414,
    isNavigation: true,
    focus: 'center',
    waitForTransition: false,
    updateOnMove: true,
    trimSpace: true,
    gap: 23,
    arrows: 'slider', // 'slider' or false

    pagination: false,
    cover: true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    type: 'slide',
    drag: 'free',
    snap: true,
    breakpoints: {
      768: {
        fixedWidth: 260,
      },
    },
  });

  splide.mount();

  // End of Splide Carrosel
};
