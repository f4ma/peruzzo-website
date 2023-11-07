// Start of Splide Carrosel

import Splide from '@splidejs/splide';

export const homeCarrosel = () => {
  const splide = new Splide('#slider1', {
    perPage: 3,
    fixedWidth: 385,
    fixedHeight: 414,
    isNavigation: true,
    focus: 'center',
    trimSpace: true,
    gap: 23,
    pagination: false,
    cover: true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    type: 'slide',
    drag: 'free',
    snap: true,
    // perPage: 3, // You have perPage: 3 already defined above, no need to duplicate it.
    breakpoints: {
      768: {
        fixedWidth: 260,
      },
    },
  });

  splide.mount();

  // End of Splide Carrosel
};
