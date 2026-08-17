import { useEffect, useRef, useState } from "react";

/**
 * Animate a number from 0 to `target` when the returned ref enters the viewport.
 * Non-numeric targets fall through unchanged (e.g. "AI").
 */
export function useCountUp(target: string, duration = 1200) {
  const numeric = /^\d+/.test(target);
  const to = numeric ? parseInt(target, 10) : 0;
  const suffix = numeric ? target.replace(/^\d+/, "") : "";

  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(numeric ? "0" + suffix : target);
  const started = useRef(false);

  useEffect(() => {
    if (!numeric) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              const current = Math.round(eased * to);
              const padded = to >= 10 ? String(current).padStart(2, "0") : String(current);
              setValue(padded + suffix);
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric, to, suffix, duration]);

  return { ref, value };
}
