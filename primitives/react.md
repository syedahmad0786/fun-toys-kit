/**
 * React snippets (copy into elsewho / vapor-market).
 *
 * Framer Motion:
 *   npm i framer-motion
 *
 *   import { motion, useReducedMotion } from "framer-motion";
 *
 *   const reduce = useReducedMotion();
 *   <motion.article
 *     className="plate kit-card-3d"
 *     initial={reduce ? false : { opacity: 0, y: 18, rotateX: 8 }}
 *     animate={{ opacity: 1, y: 0, rotateX: 0 }}
 *     transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 *     whileHover={reduce ? undefined : { z: 16 }}
 *     style={{ transformStyle: "preserve-3d" }}
 *   />
 *
 * Pointer tilt (no extra lib):
 *   const ref = useRef(null);
 *   function onMove(e) {
 *     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
 *     const r = e.currentTarget.getBoundingClientRect();
 *     const px = (e.clientX - r.left) / r.width - 0.5;
 *     const py = (e.clientY - r.top) / r.height - 0.5;
 *     e.currentTarget.style.setProperty("--rx", `${-py * 10}deg`);
 *     e.currentTarget.style.setProperty("--ry", `${px * 10}deg`);
 *   }
 *
 * React Three Fiber (only where a hero earns WebGL — vapor-market orb):
 *   npm i three @react-three/fiber @react-three/drei
 *   Skip the canvas entirely when useReducedMotion() is true; CSS orb stays.
 */
export {};
