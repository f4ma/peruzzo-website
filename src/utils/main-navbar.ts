import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import $ from 'jquery';

export const mainNavbar = () => {
  $('.nav_wrap').each(function () {
    const $this = $(this);
    const hamburgerEl = $this.find('.nav_hamburger_wrap');
    const navLineEl = $this.find('.nav_hamburger_line');
    const menuContainEl = $this.find('.menu_contain');
    const flipItemEl = $this.find('.nav_hamburger_base');
    const menuWrapEl = $this.find('.menu_wrap');
    const menuBaseEl = $this.find('.menu_base');
    const menuLinkEl = $this.find('.menu_link');

    const flipDuration = 0.6;
    const tl = gsap.timeline({ paused: true });
    const openClass = 'nav-open';

    function flip(forwards: boolean) {
      const state = Flip.getState(flipItemEl);
      flipItemEl.appendTo(forwards ? menuContainEl : hamburgerEl);
      Flip.from(state, { duration: flipDuration });
    }

    function openMenu(open: boolean) {
      if (!tl.isActive()) {
        if (open) {
          tl.play();
          hamburgerEl.addClass(openClass);
        } else {
          tl.reverse();
          hamburgerEl.removeClass(openClass);
        }
      }
    }

    tl.set(menuWrapEl, { display: 'flex' })
      .from(menuBaseEl, {
        opacity: 0,
        duration: flipDuration,
        ease: 'none',
        onStart: () => {
          flip(true);
        },
      })
      .to(navLineEl.eq(0), { y: 4, rotate: 45, duration: flipDuration }, '<')
      .to(navLineEl.eq(1), { y: -4, rotate: -45, duration: flipDuration }, '<')
      .from(menuLinkEl, {
        opacity: 0,
        yPercent: 50,
        duration: 0.2,
        stagger: { amount: 0.2 },
        onReverseComplete: () => {
          flip(false);
        },
      });

    hamburgerEl.on('click', function (this: HTMLElement) {
      openMenu(!$(this).hasClass(openClass));
    });

    menuBaseEl.on('mouseenter click', function (this: HTMLElement) {
      openMenu(false);
    });

    $(document).on('keydown', function (e) {
      if (e.key === 'Escape') {
        openMenu(false);
      }
    });
  });
};
