import { useEffect } from "react";

/**
 * Signature moment: a subtle pointer-following glow field.
 * Writes CSS vars (--mx/--my) to documentElement for CSS-driven effects.
 */
export function usePointerGlow() {
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    const root = document.documentElement;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${Math.round(e.clientX)}px`);
        root.style.setProperty("--my", `${Math.round(e.clientY)}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);
}
