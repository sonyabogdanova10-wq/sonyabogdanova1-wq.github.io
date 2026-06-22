import { Trail } from "https://esm.sh/mouse-animations";

var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var canUseFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// ScrollReveal — появление блоков при прокрутке
// https://scrollrevealjs.org/
if (!prefersReducedMotion && typeof ScrollReveal !== "undefined") {
  var sr = ScrollReveal({
    distance: "28px",
    duration: 700,
    easing: "ease",
    origin: "bottom",
    reset: false,
    mobile: true
  });

  sr.reveal(".section-title", { interval: 100 });
  sr.reveal(".about__cell", { interval: 120 });
  sr.reveal(".flip-card", { interval: 120 });
  sr.reveal(".feature-card", { interval: 150 });
  sr.reveal(".mechanism__text", { delay: 100 });
  sr.reveal(".mechanism__ticket", { delay: 200, origin: "right" });
  sr.reveal(".contacts__item", { interval: 150 });
  sr.reveal(".contacts__sphere", { delay: 150, scale: 0.9 });
  sr.reveal(".screenshots__grid img", { interval: 80 });
  sr.reveal(".download__inner", { delay: 100 });
  sr.reveal(".moon__image", { duration: 900, scale: 0.95 });
}

// mouse-animations — след из точек за курсором
// https://tgomilar.github.io/mouse-animations/
if (canUseFinePointer && !prefersReducedMotion) {
  new Trail({
    color: "#FFE49D",
    size: 8,
    length: 40,
    decay: 0.05,
    blur: 2
  });
}
