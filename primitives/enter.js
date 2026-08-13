/**
 * Motion One enter + hover. Vanilla toys: `npm i motion`
 *
 *   import { enter, press } from "./enter.js";
 *   enter(document.querySelectorAll(".card"));
 *   press(document.querySelector("#the-button"));
 */
import { animate, stagger } from "motion";
import { reducedMotion } from "./tilt.js";

export function enter(nodes, { y = 18, delay = 0.06 } = {}) {
  const list = [...nodes];
  if (!list.length) return;
  if (reducedMotion()) {
    list.forEach((n) => {
      n.style.opacity = "1";
    });
    return;
  }
  animate(
    list,
    { opacity: [0, 1], transform: ["translateY(18px)", "translateY(0px)"] },
    { delay: stagger(delay), duration: 0.7, easing: [0.22, 1, 0.36, 1] },
  );
}

export function press(el) {
  if (!el) return;
  const down = () => {
    if (reducedMotion()) return;
    animate(el, { scale: 0.96 }, { duration: 0.12 });
  };
  const up = () => {
    if (reducedMotion()) return;
    animate(el, { scale: 1 }, { duration: 0.28, easing: [0.22, 1, 0.36, 1] });
  };
  el.addEventListener("pointerdown", down);
  el.addEventListener("pointerup", up);
  el.addEventListener("pointerleave", up);
}
