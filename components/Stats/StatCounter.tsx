"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

export type StatShape = {
  id: string;
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
};

export function StatCounter({ stat }: { stat: StatShape }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setHasStarted(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.35 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setDisplayValue(stat.target);
      return;
    }

    let cancelled = false;
    const duration = 1600;
    const timeStart = performance.now();

    const tick = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - timeStart) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next =
        stat.decimals && stat.decimals > 0
          ? Number((stat.target * eased).toFixed(stat.decimals))
          : Math.round(stat.target * eased);
      setDisplayValue(next);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    return () => {
      cancelled = true;
    };
  }, [hasStarted, stat.target, stat.decimals]);

  const text =
    stat.decimals && stat.decimals > 0
      ? displayValue.toFixed(stat.decimals)
      : String(displayValue);

  return (
    <div ref={rootRef} className={`${styles.panel} ${styles.panelAccent}`}>
      <p className={styles.value} aria-live="polite">
        {text}
        {stat.suffix}
      </p>
      <p className={styles.label}>{stat.label}</p>
    </div>
  );
}
