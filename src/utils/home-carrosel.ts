// Start of Splide Carrosel
// @ts-ignore

import Splide from '@splidejs/splide';

export const homeCarrosel = () => {
  const splide = new Splide('#slider1', {
    perPage: 3,
    fixedWidth: 385, // Uncomment this line
    fixedHeight: 414, // Uncomment this line
    isNavigation: true, // Uncomment this line
    gap: 23,
    pagination: false,
    cover: true, // Uncomment this line
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    type: 'slide',
    drag: 'free',
    snap: true, // Uncomment this line
    // perPage: 3, // You have perPage: 3 already defined above, no need to duplicate it.
    breakpoints: {
      768: {
        fixedWidth: 260,
      },
    },
  });

  splide.mount();

  // End of Splide Carrosel
}
