/**
 * Vanilla 3D tilt. Copy into a toy, then bind to THAT toy's hero/card.
 * Disables itself under prefers-reduced-motion.
 *
 *   import { bindTilt } from "./tilt";
 *   bindTilt(document.querySelector(".card"));
 */
export function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function bindTilt(el, { max = 10, z = 16 } = {}) {
  if (!el || reducedMotion()) return () => {};

  const onMove = (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-py * max).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * max).toFixed(2)}deg`);
    el.style.setProperty("--z", `${z}px`);
  };
  const onLeave = () => {
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--z", "0px");
  };

  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerleave", onLeave);
  return () => {
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerleave", onLeave);
  };
}
