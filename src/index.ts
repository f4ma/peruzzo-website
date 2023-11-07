import initializeButtonEffect from './Global-Codes/button-effect_code';
import { homeCarrosel } from './utils/home-carrosel';
import { mainNavbar } from './utils/main-navbar';
import { smoothScroll } from './utils/smooth-scroll';
// Function to execute when a new page is loaded
smoothScroll();
mainNavbar();
homeCarrosel();
initializeButtonEffect();

// Register GSAP plugins
