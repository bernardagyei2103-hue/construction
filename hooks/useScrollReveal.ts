"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Options = {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
};

/** Approximate intersecting ratio vs viewport (fallback when IO is slow or quirks). */
function roughIntersectionRatio(el: HTMLElement): number {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  if (rect.height <= 0 || rect.width <= 0) return 0;
  const clipH = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
  const clipW = Math.max(0, Math.min(rect.right, vw) - Math.max(rect.left, 0));
  const overlap = clipH * clipW;
  const area = rect.width * rect.height;
  return area > 0 ? overlap / area : 0;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
) {
  const { threshold = 0, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const thresholdValue =
    typeof threshold === "number"
      ? threshold
      : threshold.length > 0
        ? Math.min(...threshold)
        : 0;

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const ratio = roughIntersectionRatio(node);
    if (ratio >= thresholdValue) setIsVisible(true);
  }, [thresholdValue]);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = typeof entry.intersectionRatio === "number" ? entry.intersectionRatio : 0;
        const crosses =
          Boolean(entry?.isIntersecting) || (thresholdValue > 0 ? ratio >= thresholdValue : ratio > 0);
        if (crosses) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, thresholdValue]);

  return { ref, isVisible };
}
