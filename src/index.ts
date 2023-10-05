// @ts-nocheck
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { smoothScroll as scroll, smoothScroll } from './utils/smooth-scroll';
import initializeButtonEffect from './Global-Codes/button-effect_code';
import { mainNavbar } from './utils/main-navbar';
import { homeCarrosel } from './utils/home-carrosel';
// Function to execute when a new page is loaded
smoothScroll();
mainNavbar();
homeCarrosel();
initializeButtonEffect();
  
// Register GSAP plugins
gsap.registerPlugin(Flip, ScrollTrigger);

