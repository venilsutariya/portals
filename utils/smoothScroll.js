// utils/smoothScroll.js
import SmoothScroll from "smooth-scroll";

export function initializeSmoothScroll() {
  new SmoothScroll('a[href*="#"]', {
    speed: 800,
    easing: "easeInOutCubic",
  });
}
